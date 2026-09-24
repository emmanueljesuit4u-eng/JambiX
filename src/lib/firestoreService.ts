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
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface TestResultData {
  id: string;
  userId: string;
  testTitle: string;
  testType: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
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
  const path = `users/${targetId}`;
  try {
    const userRef = doc(db, 'users', targetId);
    await setDoc(
      userRef,
      {
        ...profile,
        id: targetId,
        updatedAt: serverTimestamp(),
        createdAt: profile.createdAt || serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore saveUserProfile: cached locally while offline.');
      return;
    }
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function getUserProfile(userId: string): Promise<UserProfileData | null> {
  if (!auth.currentUser) {
    return null;
  }
  const targetId = auth.currentUser.uid;
  const path = `users/${targetId}`;
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
    handleFirestoreError(error, OperationType.GET, path);
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
  const payload = {
    ...result,
    userId: auth.currentUser.uid,
  };
  const path = `testResults/${payload.id}`;
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
    handleFirestoreError(error, OperationType.WRITE, path);
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
      return [];
    }
    handleFirestoreError(error, OperationType.LIST, path);
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
        if (isOfflineError(error)) {
          console.warn('Firestore subscribeToFeedPosts: offline mode.');
          return;
        }
        handleFirestoreError(error, OperationType.LIST, path);
      }
    );
  } catch (error) {
    if (isOfflineError(error)) {
      return () => {};
    }
    handleFirestoreError(error, OperationType.LIST, path);
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
