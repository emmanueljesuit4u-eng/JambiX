/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as fbSignOut,
  signInAnonymously,
} from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { getUserProfile, saveUserProfile, UserProfileData } from '../lib/firestoreService';

interface AuthContextType {
  currentUser: User | null;
  studentProfile: UserProfileData | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  setLocalStudent: (user: { name: string; email: string; identifier?: string }) => void;
  localStudent: { name: string; email: string; identifier?: string } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [studentProfile, setStudentProfile] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [localStudent, setLocalStudentState] = useState<{
    name: string;
    email: string;
    identifier?: string;
  } | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          let profile = await getUserProfile(user.uid);
          if (!profile) {
            profile = {
              id: user.uid,
              email: user.email || (user.isAnonymous ? 'guest@student.jambix.ng' : 'student@jambix.ng'),
              fullName: user.displayName || (user.isAnonymous ? 'Candidate (Guest)' : 'UTME Candidate'),
              targetScore: 320,
              preferredInstitution: 'University of Lagos (UNILAG)',
            };
            await saveUserProfile(profile);
          }
          setStudentProfile(profile);
        } catch (err) {
          console.warn('Profile load warning:', err);
        }
      } else {
        setStudentProfile(null);
        // Attempt anonymous sign-in so candidate tests have an authorized Firebase UID
        try {
          await signInAnonymously(auth);
          return;
        } catch (anonErr) {
          console.info('Anonymous sign-in unavailable or offline. Operating in local mode:', anonErr);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const profile: UserProfileData = {
        id: user.uid,
        email: user.email || '',
        fullName: user.displayName || 'UTME Scholar',
        targetScore: 320,
        preferredInstitution: 'University of Lagos (UNILAG)',
      };
      await saveUserProfile(profile);
      setStudentProfile(profile);
    } catch (error) {
      console.error('Google sign in error:', error);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await fbSignOut(auth);
    } catch {
      // fallback
    }
    setLocalStudentState(null);
    setStudentProfile(null);
    setCurrentUser(null);
  };

  const setLocalStudent = async (user: { name: string; email: string; identifier?: string }) => {
    setLocalStudentState(user);
    if (!auth.currentUser) {
      try {
        await signInAnonymously(auth);
      } catch (anonErr) {
        console.info('Anonymous sign-in unavailable or offline. Operating in local mode:', anonErr);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        studentProfile,
        loading,
        loginWithGoogle,
        logOut,
        setLocalStudent,
        localStudent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
