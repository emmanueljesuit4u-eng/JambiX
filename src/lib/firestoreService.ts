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
import { db, handleFirestoreError, OperationType } from './firebase';

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

// 1. User Profile Operations
export async function saveUserProfile(profile: UserProfileData): Promise<void> {
  const path = `users/${profile.id}`;
  try {
    const userRef = doc(db, 'users', profile.id);
    await setDoc(
      userRef,
      {
        ...profile,
        updatedAt: serverTimestamp(),
        createdAt: profile.createdAt || serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function getUserProfile(userId: string): Promise<UserProfileData | null> {
  const path = `users/${userId}`;
  try {
    const userRef = doc(db, 'users', userId);
    const snap = await getDoc(userRef);
    if (!snap.exists()) return null;
    return snap.data() as UserProfileData;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

// 2. Test Results Operations
export async function saveTestResult(
  result: Omit<TestResultData, 'createdAt'>
): Promise<void> {
  const path = `testResults/${result.id}`;
  try {
    const testRef = doc(db, 'testResults', result.id);
    await setDoc(testRef, {
      ...result,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function getUserTestResults(userId: string): Promise<TestResultData[]> {
  const path = 'testResults';
  try {
    const q = query(
      collection(db, 'testResults'),
      where('userId', '==', userId),
      limit(20)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => docSnap.data() as TestResultData);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
  }
}

// 3. Feed Posts Operations
export async function createFeedPost(
  post: Omit<FeedPostData, 'createdAt' | 'likesCount' | 'commentsCount'>
): Promise<void> {
  const path = `posts/${post.id}`;
  try {
    const postRef = doc(db, 'posts', post.id);
    await setDoc(postRef, {
      ...post,
      likesCount: 0,
      commentsCount: 0,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
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
        handleFirestoreError(error, OperationType.LIST, path);
      }
    );
  } catch (error) {
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
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}
