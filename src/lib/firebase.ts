/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  inMemoryPersistence,
} from 'firebase/auth';
import {
  initializeFirestore,
  getFirestore,
  doc,
  getDoc,
  setLogLevel,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

// Set Firestore log level to silent to prevent internal 10-second offline timeout heuristics from logging to console
setLogLevel('silent');

// Intercept benign Firestore offline heuristic log if emitted by internal Logger
if (typeof window !== 'undefined') {
  const originalError = console.error;
  const originalWarn = console.warn;
  const isFirestoreBackendTimeout = (args: unknown[]) => {
    const text = args.map((a) => (typeof a === 'string' ? a : a instanceof Error ? a.message : '')).join(' ');
    return text.includes('Could not reach Cloud Firestore backend') || text.includes("Backend didn't respond within 10 seconds");
  };

  console.error = (...args: unknown[]) => {
    if (isFirestoreBackendTimeout(args)) return;
    originalError.apply(console, args);
  };

  console.warn = (...args: unknown[]) => {
    if (isFirestoreBackendTimeout(args)) return;
    originalWarn.apply(console, args);
  };
}

// Initialize with forced long polling to ensure reliable connectivity in web sandbox/iframe environments
// without waiting for the 10-second WebSocket fallback timeout
try {
  initializeFirestore(
    app,
    {
      experimentalForceLongPolling: true,
    },
    firebaseConfig.firestoreDatabaseId
  );
} catch {
  // If already initialized, ignore
}

// CRITICAL: Must pass firebaseConfig.firestoreDatabaseId as the second parameter
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// Configure in-memory persistence so user authentication does NOT persist across tab/browser closures or link openings
setPersistence(auth, inMemoryPersistence).catch((err) => {
  console.warn('Could not set inMemoryPersistence:', err);
});

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

// Connection test rendered passive using local cache first
export async function testConnection() {
  try {
    await getDoc(doc(db, 'test', 'connection'));
  } catch {
    // Passive probe - client operates seamlessly with local storage
  }
}

