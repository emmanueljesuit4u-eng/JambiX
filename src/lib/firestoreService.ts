/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  increment,
  onSnapshot,
} from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from './firebase';

export interface UserProfileData {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  targetScore?: number;
  preferredInstitution?: string;
  registeredAt?: number;
  isActivated?: boolean;
  activatedAt?: string | number;
  paymentReference?: string;
  opayAccount?: string;
  isEmailVerified?: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export const LEADERBOARD_SESSION_START_MS = 1775010000000;

export interface TestResultData {
  id: string;
  userId: string;
  testTitle: string;
  testType: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  jambScore?: number;
  candidateName?: string;
  userEmail?: string;
  sessionEpoch?: number;
  subjectScores?: Array<{
    subject: string;
    score: number;
    total: number;
    correct?: number;
    percentage?: number;
    bookTitle?: string;
  }>;
  createdAt?: unknown;
}

export interface FeedPostData {
  id: string;
  authorId: string;
  authorName: string;
  tag: string;
  title: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  createdAt?: unknown;
}

function isOfflineError(error: unknown): boolean {
  if (!error) return false;
  const str = String(error).toLowerCase();
  const code = (error as { code?: string })?.code;
  return (
    code === 'unavailable' ||
    str.includes('unavailable') ||
    str.includes('the client is offline') ||
    str.includes('failed-precondition')
  );
}

// 1. User Profile Operations
export async function saveUserProfile(profile: UserProfileData): Promise<void> {
  if (!auth.currentUser) {
    console.warn('Firestore saveUserProfile: student not authenticated with Firebase. Preserving locally.');
    return;
  }
  const targetId = auth.currentUser.uid;
  try {
    const userRef = doc(db, 'users', targetId);
    const snap = await getDoc(userRef);
    const existing = snap.exists() ? snap.data() : null;

    const payload: Record<string, unknown> = {
      ...profile,
      id: targetId,
      updatedAt: serverTimestamp(),
    };

    if (existing?.createdAt) {
      payload.createdAt = existing.createdAt;
    } else if (profile.createdAt) {
      payload.createdAt = profile.createdAt;
    } else {
      payload.createdAt = serverTimestamp();
    }

    await setDoc(userRef, payload, { merge: true });
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore saveUserProfile: cached locally while offline.');
      return;
    }
    console.warn('Firestore saveUserProfile error note:', error);
  }
}

export async function getUserProfile(userId: string): Promise<UserProfileData | null> {
  if (!auth.currentUser) {
    return null;
  }
  const targetId = auth.currentUser.uid;
  try {
    const userRef = doc(db, 'users', targetId);
    const snap = await getDoc(userRef);
    if (!snap.exists()) return null;
    return snap.data() as UserProfileData;
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore getUserProfile: offline mode active.');
      return null;
    }
    console.warn('Firestore getUserProfile error note:', error);
    return null;
  }
}

// 2. Test Results Operations
export async function saveTestResult(
  result: Omit<TestResultData, 'createdAt'>
): Promise<void> {
  if (!auth.currentUser) {
    console.warn('Firestore saveTestResult: student not authenticated with Firebase. Test result preserved in offline storage.');
    return;
  }

  // Strict Rule: ONLY 2-hour full CBT mock exams (180 questions: English 60 + 3 others 40 each) are recorded on the live leaderboard from this moment
  const isTwoHourFullCbt =
    result.totalQuestions === 180 &&
    (result.testType === 'full' || result.testType === 'full_2hr_cbt') &&
    (result.testTitle.toLowerCase().includes('full') ||
      result.testTitle.toLowerCase().includes('180') ||
      result.testTitle.toLowerCase().includes('2-hr') ||
      result.testType === 'full');

  if (!isTwoHourFullCbt) {
    console.info('Firestore saveTestResult: Only 2-Hour Full CBT Mock exams (180 Qs) are recorded on the national leaderboard. Saved to local history.');
    return;
  }

  const payload = {
    ...result,
    sessionEpoch: LEADERBOARD_SESSION_START_MS,
    userId: auth.currentUser.uid,
  };
  try {
    const testRef = doc(db, 'testResults', payload.id);
    await setDoc(testRef, {
      ...payload,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore saveTestResult: cached locally while offline.');
      return;
    }
    console.warn('Firestore saveTestResult error note:', error);
  }
}

export async function deleteTestResult(testId: string): Promise<void> {
  try {
    const testRef = doc(db, 'testResults', testId);
    await deleteDoc(testRef);
  } catch (err) {
    console.warn('Could not delete test result:', err);
  }
}

/**
 * Deletes all previous test results to start up a fresh national leaderboard
 */
export async function clearAllLeaderboardTestResults(): Promise<number> {
  try {
    const q = query(collection(db, 'testResults'), limit(500));
    const snapshot = await getDocs(q);
    let deletedCount = 0;
    const deletePromises = snapshot.docs.map(async (docSnap) => {
      try {
        await deleteDoc(doc(db, 'testResults', docSnap.id));
        deletedCount++;
      } catch (err) {
        console.warn(`Could not delete testResult ${docSnap.id}:`, err);
      }
    });
    await Promise.all(deletePromises);
    return deletedCount;
  } catch (err) {
    console.warn('clearAllLeaderboardTestResults error:', err);
    return 0;
  }
}

export async function updateTestResultCandidateName(
  testId: string,
  candidateName: string
): Promise<void> {
  if (!auth.currentUser) return;
  try {
    const testRef = doc(db, 'testResults', testId);
    await updateDoc(testRef, { candidateName });
  } catch (err) {
    console.warn('Could not update test result candidateName:', err);
  }
}

export async function getUserTestResults(userId: string): Promise<TestResultData[]> {
  if (!auth.currentUser) {
    return [];
  }
  const targetId = auth.currentUser.uid;
  const path = 'testResults';
  try {
    const q = query(
      collection(db, 'testResults'),
      where('userId', '==', targetId),
      limit(20)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => docSnap.data() as TestResultData);
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore getUserTestResults: offline mode active.');
    } else {
      handleFirestoreError(error, OperationType.LIST, path);
    }
    return [];
  }
}

// 3. Feed Posts Operations
export async function createFeedPost(
  post: Omit<FeedPostData, 'createdAt' | 'likesCount' | 'commentsCount'>
): Promise<void> {
  if (!auth.currentUser) {
    console.warn('Firestore createFeedPost: student not authenticated with Firebase. Preserving locally.');
    return;
  }
  const payload = {
    ...post,
    authorId: auth.currentUser.uid,
  };
  const path = `posts/${payload.id}`;
  try {
    const postRef = doc(db, 'posts', payload.id);
    await setDoc(postRef, {
      ...payload,
      likesCount: 0,
      commentsCount: 0,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore createFeedPost: queued offline.');
      return;
    }
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export function subscribeToFeedPosts(
  onUpdate: (posts: FeedPostData[]) => void
): () => void {
  const path = 'posts';
  try {
    const q = query(collection(db, 'posts'), limit(25));
    return onSnapshot(
      q,
      (snapshot) => {
        const posts = snapshot.docs.map((d) => ({
          ...d.data(),
          id: d.id,
        })) as FeedPostData[];
        onUpdate(posts);
      },
      (error) => {
        if (!isOfflineError(error)) {
          handleFirestoreError(error, OperationType.LIST, path);
        }
      }
    );
  } catch (error) {
    if (!isOfflineError(error)) {
      handleFirestoreError(error, OperationType.LIST, path);
    }
    return () => {};
  }
}

export async function likeFeedPost(postId: string): Promise<void> {
  const path = `posts/${postId}`;
  try {
    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, {
      likesCount: increment(1),
    });
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore likeFeedPost: queued offline.');
      return;
    }
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

// 4. Cross-Device Account Activation & 1-Hour Countdown Operations
export interface AccountActivationData {
  id: string;
  email: string;
  registeredAt: number;
  isActivated: boolean;
  activatedAt?: number;
  paymentReference?: string;
  opayAccount?: string;
}

export function sanitizeActivationId(email: string): string {
  return email
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9_\-]/g, '_')
    .slice(0, 120);
}

/**
 * Loads or initializes the authoritative cross-device activation record for a student email.
 * If this is the student's first time registering on ANY device, sets registeredAt = Date.now().
 * If already registered on another device, returns the original registeredAt so countdown continues seamlessly!
 */
export async function getOrCreateAccountActivation(
  email: string
): Promise<AccountActivationData | null> {
  if (!email) return null;
  const cleanEmail = email.toLowerCase().trim();
  const activationId = sanitizeActivationId(cleanEmail);

  try {
    const actRef = doc(db, 'accountActivations', activationId);
    const snap = await getDoc(actRef);

    if (snap.exists()) {
      return snap.data() as AccountActivationData;
    }

    // New registration! Create authoritative cloud record
    const newRecord: AccountActivationData = {
      id: activationId,
      email: cleanEmail,
      registeredAt: Date.now(),
      isActivated: false,
    };

    await setDoc(actRef, newRecord);
    return newRecord;
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore getOrCreateAccountActivation: offline, operating with local state');
      return null;
    }
    console.warn('AccountActivation cloud sync note:', error);
    return null;
  }
}

/**
 * Updates activation status to activated across all devices once OPay payment is verified.
 */
export async function updateAccountActivation(
  email: string,
  updates: {
    isActivated: boolean;
    paymentReference: string;
    opayAccount: string;
    activatedAt: number;
  }
): Promise<void> {
  if (!email) return;
  const activationId = sanitizeActivationId(email);

  try {
    const actRef = doc(db, 'accountActivations', activationId);
    await updateDoc(actRef, {
      isActivated: updates.isActivated,
      paymentReference: updates.paymentReference,
      opayAccount: updates.opayAccount,
      activatedAt: updates.activatedAt,
    });
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore updateAccountActivation: offline, cached locally');
      return;
    }
    console.warn('updateAccountActivation error:', error);
  }
}

/**
 * Real-time listener for cross-device activation updates.
 * If a user completes payment on mobile, their desktop dashboard unlocks immediately!
 */
export function subscribeToAccountActivation(
  email: string,
  onUpdate: (data: AccountActivationData) => void
): () => void {
  if (!email) return () => {};
  const activationId = sanitizeActivationId(email);

  try {
    const actRef = doc(db, 'accountActivations', activationId);
    return onSnapshot(
      actRef,
      (snap) => {
        if (snap.exists()) {
          onUpdate(snap.data() as AccountActivationData);
        }
      },
      (error) => {
        if (!isOfflineError(error)) {
          console.warn('subscribeToAccountActivation error:', error);
        }
      }
    );
  } catch (err) {
    return () => {};
  }
}

// ==========================================
// 5. Exclusive Admin Operations
// ==========================================

export const ADMIN_EMAIL = 'cligragh3@gmail.com';
export const ALLOWED_ADMIN_EMAILS = ['cligragh3@gmail.com', 'emmanueljesuit4u@gmail.com'];

export function isAllowedAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  return ALLOWED_ADMIN_EMAILS.includes(email.toLowerCase().trim());
}

/**
 * Ensures the administrator record exists in the /admins collection in Firestore
 */
export async function ensureAdminDocument(uid: string, email: string): Promise<void> {
  if (!uid || !isAllowedAdminEmail(email)) return;
  const path = `admins/${uid}`;
  try {
    const adminRef = doc(db, 'admins', uid);
    await setDoc(
      adminRef,
      {
        id: uid,
        email: email.toLowerCase(),
        role: 'super_admin',
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (err) {
    console.warn('ensureAdminDocument sync note:', err);
  }
}

/**
 * Real-time stream of all registered student profiles for live Admin Dashboard counter & directory
 */
export function subscribeToAllUsers(
  onUpdate: (users: UserProfileData[]) => void
): () => void {
  const path = 'users';
  try {
    const q = query(collection(db, 'users'), limit(500));
    return onSnapshot(
      q,
      (snapshot) => {
        const users = snapshot.docs.map((d) => d.data() as UserProfileData);
        onUpdate(users);
      },
      (error) => {
        if (isOfflineError(error)) {
          console.warn('subscribeToAllUsers offline mode');
          return;
        }
        console.warn('subscribeToAllUsers error:', error);
      }
    );
  } catch (error) {
    console.warn('subscribeToAllUsers catch:', error);
    return () => {};
  }
}

/**
 * Real-time stream of all cross-device activations for live Admin metrics
 */
export function subscribeToAllAccountActivations(
  onUpdate: (activations: AccountActivationData[]) => void
): () => void {
  const path = 'accountActivations';
  try {
    const q = query(collection(db, 'accountActivations'), limit(500));
    return onSnapshot(
      q,
      (snapshot) => {
        const activations = snapshot.docs.map((d) => d.data() as AccountActivationData);
        onUpdate(activations);
      },
      (error) => {
        if (isOfflineError(error)) {
          console.warn('subscribeToAllAccountActivations offline');
          return;
        }
        console.warn('subscribeToAllAccountActivations error:', error);
      }
    );
  } catch (error) {
    console.warn('subscribeToAllAccountActivations catch:', error);
    return () => {};
  }
}

/**
 * Fetches all registered student profiles for the Admin Dashboard
 */
export async function getAllUsers(): Promise<UserProfileData[]> {
  try {
    const q = query(collection(db, 'users'), limit(300));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => d.data() as UserProfileData);
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('getAllUsers: offline mode');
      return [];
    }
    console.warn('getAllUsers error note:', error);
    return [];
  }
}

/**
 * Fetches all cross-device account activations for the Admin Dashboard
 */
export async function getAllAccountActivations(): Promise<AccountActivationData[]> {
  try {
    const q = query(collection(db, 'accountActivations'), limit(300));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => d.data() as AccountActivationData);
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('getAllAccountActivations: offline mode');
      return [];
    }
    console.warn('getAllAccountActivations error note:', error);
    return [];
  }
}

/**
 * Admin override to toggle activation status for any student
 */
export async function adminToggleActivation(
  email: string,
  isActivated: boolean,
  paymentReference: string = 'MANUAL-ADMIN-OVERRIDE'
): Promise<void> {
  const activationId = sanitizeActivationId(email);
  const path = `accountActivations/${activationId}`;
  try {
    const actRef = doc(db, 'accountActivations', activationId);
    await setDoc(
      actRef,
      {
        id: activationId,
        email: email.toLowerCase().trim(),
        isActivated,
        activatedAt: isActivated ? Date.now() : 0,
        paymentReference: isActivated ? paymentReference : 'DEACTIVATED-BY-ADMIN',
        opayAccount: 'ADMIN_MANUAL',
      },
      { merge: true }
    );
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('adminToggleActivation offline note');
      return;
    }
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Real-time stream of all CBT exam & test sessions across all students for Live Leaderboard
 */
export function subscribeToAllTestResults(
  onUpdate: (results: TestResultData[]) => void
): () => void {
  const path = 'testResults';
  try {
    const q = query(collection(db, 'testResults'), limit(300));
    return onSnapshot(
      q,
      (snapshot) => {
        const results = snapshot.docs
          .map((d) => ({
            ...d.data(),
            id: d.id,
          } as TestResultData))
          .filter((t) => {
            // Strictly 2-hour full CBT mock tests only (180 questions across 4 subjects)
            if (t.totalQuestions !== 180) return false;
            const typeLower = (t.testType || '').toLowerCase();
            if (typeLower !== 'full' && typeLower !== 'full_2hr_cbt') return false;

            // Purge results from before this fresh restart moment
            if (t.sessionEpoch && t.sessionEpoch < LEADERBOARD_SESSION_START_MS) return false;
            if (t.createdAt) {
              const createdMs =
                typeof t.createdAt === 'object' && t.createdAt !== null && 'toMillis' in t.createdAt
                  ? (t.createdAt as any).toMillis()
                  : typeof t.createdAt === 'string'
                  ? new Date(t.createdAt).getTime()
                  : typeof t.createdAt === 'number'
                  ? t.createdAt
                  : 0;
              if (createdMs > 0 && createdMs < LEADERBOARD_SESSION_START_MS) return false;
            }
            return true;
          });
        onUpdate(results);
      },
      (error) => {
        if (isOfflineError(error)) {
          console.warn('subscribeToAllTestResults offline');
          return;
        }
        console.warn('subscribeToAllTestResults error:', error);
      }
    );
  } catch (error) {
    console.warn('subscribeToAllTestResults catch:', error);
    return () => {};
  }
}

/**
 * Fetches all recent CBT test sessions across all students
 */
export async function getAllTestResults(): Promise<TestResultData[]> {
  const path = 'testResults';
  try {
    const q = query(collection(db, 'testResults'), limit(200));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => d.data() as TestResultData);
  } catch (error) {
    if (!isOfflineError(error)) {
      handleFirestoreError(error, OperationType.LIST, path);
    }
    return [];
  }
}

/**
 * Admin can delete an inappropriate or spam community post
 */
export async function deleteFeedPost(postId: string): Promise<void> {
  const path = `posts/${postId}`;
  try {
    const postRef = doc(db, 'posts', postId);
    await deleteDoc(postRef);
  } catch (error) {
    if (isOfflineError(error)) {
      return;
    }
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

/**
 * Admin can broadcast an official announcement post to all students
 */
export async function createAdminAnnouncement(title: string, content: string): Promise<void> {
  const postId = `admin_broadcast_${Date.now()}`;
  const path = `posts/${postId}`;
  try {
    const postRef = doc(db, 'posts', postId);
    await setDoc(postRef, {
      id: postId,
      authorId: auth.currentUser?.uid || 'super_admin_id',
      authorName: 'JambiX Executive Office (Admin)',
      tag: 'Official JAMB News',
      title,
      content,
      likesCount: 0,
      commentsCount: 0,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    if (isOfflineError(error)) {
      return;
    }
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}
