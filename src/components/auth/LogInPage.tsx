/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useId, useEffect } from 'react';
import {
  UserCheck,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  Loader2,
  CheckCircle2,
  ArrowRight,
  UserPlus,
} from 'lucide-react';
import { Logo } from '../brand/Logo';
import { auth } from '../../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  getUserProfile,
  saveUserProfile,
  getAccountActivation,
  isAccountRegistered,
  UserProfileData,
} from '../../lib/firestoreService';

interface LogInPageProps {
  onNavigateToSignUp: (emailPrefill?: string) => void;
  onNavigateToForgotPassword: () => void;
  onLogInSuccess: (user: { identifier: string }) => void;
  initialIdentifier?: string;
}

export const LogInPage: React.FC<LogInPageProps> = ({
  onNavigateToSignUp,
  onNavigateToForgotPassword,
  onLogInSuccess,
  initialIdentifier,
}) => {
  const formId = useId();

  const [identifier, setIdentifier] = useState(initialIdentifier || '');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [requiresSignUp, setRequiresSignUp] = useState(false);
  const [loginSuccessFeedback, setLoginSuccessFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (initialIdentifier) {
      setIdentifier(initialIdentifier);
    }
  }, [initialIdentifier]);

  // Validation logic
  const validateField = (field: string, value: string) => {
    let err = '';
    const trimmed = value.trim();

    if (field === 'identifier') {
      if (!trimmed) {
        err = 'Email address is required';
      } else {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
        if (!isEmail) {
          err = 'Please enter the valid email address you used when signing up';
        }
      }
    }

    if (field === 'password') {
      if (!value) {
        err = 'Password is required';
      } else if (value.length < 6) {
        err = 'Password must be at least 6 characters';
      }
    }

    return err;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const val = field === 'identifier' ? identifier : password;
    const err = validateField(field, val);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ identifier: true, password: true });
    const idErr = validateField('identifier', identifier);
    const passErr = validateField('password', password);

    setErrors({ identifier: idErr, password: passErr });
    setAuthError(null);
    setRequiresSignUp(false);

    if (idErr || passErr) return;

    setIsSubmitting(true);
    setAuthError(null);
    setRequiresSignUp(false);

    const cleanEmail = identifier.trim().toLowerCase();

    (async () => {
      try {
        let userCred;
        try {
          userCred = await signInWithEmailAndPassword(auth, cleanEmail, password);
        } catch (err: any) {
          // STRICT RULE: No one can log in without signing up first!
          // We DO NOT call createUserWithEmailAndPassword on the login page.
          if (err.code === 'auth/user-not-found') {
            setRequiresSignUp(true);
            throw new Error(
              'No registered account found with this email. You must sign up first before being allowed to log in.'
            );
          } else if (
            err.code === 'auth/invalid-credential' ||
            err.code === 'auth/invalid-login-credentials'
          ) {
            // Verify if user exists in the authoritative registration record
            const registered = await isAccountRegistered(cleanEmail);
            if (!registered) {
              setRequiresSignUp(true);
              throw new Error(
                'No registered account found with this email. You must sign up first before being allowed to log in.'
              );
            } else {
              setRequiresSignUp(false);
              throw new Error(
                'Incorrect password. Please verify your password or click Forgot Password to reset it.'
              );
            }
          } else if (err.code === 'auth/wrong-password') {
            setRequiresSignUp(false);
            throw new Error(
              'Incorrect password. Please verify your password or click Forgot Password to reset it.'
            );
          } else {
            throw err;
          }
        }

        const user = userCred.user;
        const candidateName = user.displayName || cleanEmail.split('@')[0];

        // Background cloud sync: verify user profile without overwriting existing data
        const existingProf = await getUserProfile(user.uid);
        if (!existingProf) {
          const act = await getAccountActivation(cleanEmail);
          const newProfile: UserProfileData = {
            id: user.uid,
            email: cleanEmail,
            fullName: candidateName,
            targetScore: 320,
            preferredInstitution: 'University of Lagos (UNILAG)',
            registeredAt: act?.registeredAt || Date.now(),
            isActivated: act?.isActivated ?? true,
            isEmailVerified: true,
          };
          saveUserProfile(newProfile).catch((e) => console.warn('Background profile sync note:', e));
        }

        setIsSubmitting(false);
        setLoginSuccessFeedback('Login successful! Loading your UTME prep workspace...');

        // Transition to student dashboard
        onLogInSuccess({ identifier: cleanEmail });
      } catch (err: any) {
        setIsSubmitting(false);
        let msg = 'Invalid credentials. Please verify your email and password.';
        if (err.code === 'auth/user-not-found') {
          setRequiresSignUp(true);
          msg =
            'No registered account found with this email. You must sign up first before being allowed to log in.';
        } else if (err.code === 'auth/wrong-password') {
          setRequiresSignUp(false);
          msg = 'Incorrect password. Click Forgot Password to reset it.';
        } else if (err.code === 'auth/invalid-email') {
          setRequiresSignUp(false);
          msg = 'Please enter a valid email address.';
        } else if (err.code === 'auth/too-many-requests') {
          setRequiresSignUp(false);
          msg =
            'Too many failed attempts. Access is temporarily paused for security. Please try again in 1 minute.';
        } else if (err.code === 'auth/network-request-failed') {
          setRequiresSignUp(false);
          msg =
            'Network timeout contacting Firebase. Please check your internet connection and try again.';
        } else if (err.message) {
          msg = err.message;
        }
        setAuthError(msg);
      }
    })();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Brand Header */}
      <div className="text-center mb-6">
        <Logo size="md" showTagline={false} />
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Welcome back
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Log in with your registered account to continue your UTME prep.
        </p>
      </div>

      {/* Global alert error */}
      {authError && (
        <div className="mb-4 p-4 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/80 rounded-xl text-rose-800 dark:text-rose-200 text-xs animate-in fade-in space-y-2.5">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            <span className="leading-snug font-medium">{authError}</span>
          </div>
          {requiresSignUp && (
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-rose-200/80 dark:border-rose-900/80">
              <span className="text-[11px] text-rose-700 dark:text-rose-300">
                You must sign up first:
              </span>
              <button
                type="button"
                onClick={() => onNavigateToSignUp(identifier.trim())}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Sign Up First</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Login success feedback */}
      {loginSuccessFeedback && (
        <div className="mb-4 p-3.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2.5 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="font-semibold">{loginSuccessFeedback}</span>
        </div>
      )}

      {/* Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 transition-colors">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Email Address */}
          <div>
            <label
              htmlFor={`${formId}-identifier`}
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Registered Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <UserCheck className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-identifier`}
                type="email"
                autoComplete="username email"
                placeholder="candidate@example.com"
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  if (touched.identifier) {
                    setErrors((prev) => ({
                      ...prev,
                      identifier: validateField('identifier', e.target.value),
                    }));
                  }
                }}
                onBlur={() => handleBlur('identifier')}
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/50 dark:bg-slate-800/80 border rounded-xl placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white transition-all focus:bg-white dark:focus:bg-slate-800 focus:outline-hidden focus:ring-2 ${
                  touched.identifier && errors.identifier
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-900'
                    : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-100 dark:focus:ring-emerald-900/40'
                }`}
              />
            </div>
            {touched.identifier && errors.identifier && (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.identifier}</span>
              </p>
            )}
          </div>

          {/* Password with Forgot Password link */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor={`${formId}-password`}
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                Password
              </label>
              <button
                type="button"
                onClick={onNavigateToForgotPassword}
                className="text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline transition-colors cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-password`}
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (touched.password) {
                    setErrors((prev) => ({
                      ...prev,
                      password: validateField('password', e.target.value),
                    }));
                  }
                }}
                onBlur={() => handleBlur('password')}
                className={`w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50/50 dark:bg-slate-800/80 border rounded-xl placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white transition-all focus:bg-white dark:focus:bg-slate-800 focus:outline-hidden focus:ring-2 ${
                  touched.password && errors.password
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-900'
                    : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-100 dark:focus:ring-emerald-900/40'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {touched.password && errors.password && (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.password}</span>
              </p>
            )}
          </div>

          {/* Primary Button: Log In */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm rounded-xl shadow-md shadow-emerald-800/15 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Logging in...</span>
                </>
              ) : (
                <span>Log In</span>
              )}
            </button>
          </div>
        </form>

        {/* Notice that sign-up is required first */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-600 dark:text-slate-400 space-y-2">
          <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/50 text-amber-800 dark:text-amber-300 text-[11px] leading-relaxed">
            All users must sign up first before being allowed to log in.
          </div>
          <div>
            <span>Don&apos;t have an account yet? </span>
            <button
              type="button"
              onClick={() => onNavigateToSignUp(identifier.trim())}
              className="font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline transition-colors cursor-pointer"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
