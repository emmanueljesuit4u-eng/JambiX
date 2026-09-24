/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useId } from 'react';
import {
  UserCheck,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { Logo } from '../brand/Logo';

interface LogInPageProps {
  onNavigateToSignUp: () => void;
  onNavigateToForgotPassword: () => void;
  onLogInSuccess: (user: { identifier: string }) => void;
}

export const LogInPage: React.FC<LogInPageProps> = ({
  onNavigateToSignUp,
  onNavigateToForgotPassword,
  onLogInSuccess,
}) => {
  const formId = useId();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [loginSuccessFeedback, setLoginSuccessFeedback] = useState<string | null>(null);

  // Validation logic
  const validateField = (field: string, value: string) => {
    let err = '';
    const trimmed = value.trim();

    if (field === 'identifier') {
      if (!trimmed) {
        err = 'Email or phone number is required';
      } else {
        // Can be email or phone number
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
        const isPhone = /^(\+?234|0)[789][01]\d{8}$/.test(trimmed.replace(/\s+/g, ''));
        if (!isEmail && !isPhone && trimmed.length < 5) {
          err = 'Please enter a valid email or Nigerian phone number';
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

    if (idErr || passErr) return;

    setIsSubmitting(true);

    // Simulate login API call
    setTimeout(() => {
      setIsSubmitting(false);

      // Simple mock credential check demo
      if (password === 'wrongpassword') {
        setAuthError('Invalid credentials. Please verify your password or use Forgot Password.');
        return;
      }

      setLoginSuccessFeedback('Login successful! Loading your UTME prep workspace...');
      setTimeout(() => {
        onLogInSuccess({ identifier: identifier.trim() });
      }, 900);
    }, 1100);
  };

  // Demo autofill for rapid testing
  const handleAutofillDemo = () => {
    setIdentifier('adeleke.chukwudi@gmail.com');
    setPassword('JambMaster2026!');
    setErrors({});
    setAuthError(null);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Brand Header */}
      <div className="text-center mb-6">
        <Logo size="md" showTagline={false} />
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
          Welcome back
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Continue your JAMBix preparation journey.
        </p>

        {/* Quick autofill helper */}
        <div className="mt-2.5 flex justify-center">
          <button
            type="button"
            onClick={handleAutofillDemo}
            className="text-[11px] font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-2.5 py-1 rounded-full transition-colors flex items-center gap-1"
          >
            <span>✨</span>
            <span>Tap to fill demo student login</span>
          </button>
        </div>
      </div>

      {/* Global alert error */}
      {authError && (
        <div className="mb-4 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2.5 animate-in fade-in">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{authError}</span>
        </div>
      )}

      {/* Login success feedback */}
      {loginSuccessFeedback && (
        <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2.5 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold">{loginSuccessFeedback}</span>
        </div>
      )}

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-7">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Email or Phone Number */}
          <div>
            <label
              htmlFor={`${formId}-identifier`}
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Email or Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <UserCheck className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-identifier`}
                type="text"
                autoComplete="username"
                placeholder="candidate@example.com or 080..."
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
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl placeholder:text-slate-400 text-slate-900 transition-all focus:bg-white focus:outline-hidden focus:ring-2 ${
                  touched.identifier && errors.identifier
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                    : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                }`}
              />
            </div>
            {touched.identifier && errors.identifier && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
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
                className="block text-xs font-semibold text-slate-700"
              >
                Password
              </label>
              <button
                type="button"
                onClick={onNavigateToForgotPassword}
                className="text-xs font-medium text-emerald-700 hover:text-emerald-800 hover:underline transition-colors cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
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
                className={`w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50/50 border rounded-xl placeholder:text-slate-400 text-slate-900 transition-all focus:bg-white focus:outline-hidden focus:ring-2 ${
                  touched.password && errors.password
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                    : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {touched.password && errors.password && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
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

        {/* Don't have an account? Create Account */}
        <div className="mt-6 text-center text-xs text-slate-600">
          <span>Don&apos;t have an account? </span>
          <button
            type="button"
            onClick={onNavigateToSignUp}
            className="font-bold text-emerald-700 hover:text-emerald-800 hover:underline transition-colors cursor-pointer"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};
