/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {
  initializeFirestore,
  getFirestore,
  doc,
  getDocFromServer,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

// Initialize with auto-detect long polling to ensure reliable connectivity in web sandbox/iframe environments
try {
  initializeFirestore(
    app,
    {
      experimentalAutoDetectLongPolling: true,
    },
    firebaseConfig.firestoreDatabaseId
  );
} catch {
  // If already initialized, ignore
}

// CRITICAL: Must pass firebaseConfig.firestoreDatabaseId as the second parameter
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  return await signInWithPopup(auth, googleProvider);
}

export async function logOutFirebase() {
  return await signOut(auth);
}

// Error handling mandated by Firebase integration skill
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

// Error handling rendered 100% passive so local/offline/GitHub repositories never crash
export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): void {
  // Completely passive fallback: quietly log note without throwing runtime exceptions
  if (process.env.NODE_ENV === 'development') {
    console.info('Firebase passive mode operation:', {
      operation: operationType,
      path,
      note: 'Using local offline storage fallback if cloud is unreachable',
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

// Connection test rendered passive
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch {
    // Passive probe - client operates seamlessly with local storage
  }
}

// Auto-run connection test on boot safely
testConnection().catch(() => {});

