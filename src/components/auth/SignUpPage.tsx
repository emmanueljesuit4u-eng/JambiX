/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useId } from 'react';
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Check,
  X,
  AlertCircle,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { Logo } from '../brand/Logo';
import { useAuth } from '../../context/AuthContext';

interface SignUpPageProps {
  onNavigateToLogin: () => void;
  onOpenTerms: (tab: 'terms' | 'privacy') => void;
  onSignUpSuccess: (user: { name: string; email: string }) => void;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({
  onNavigateToLogin,
  onOpenTerms,
  onSignUpSuccess,
}) => {
  const formId = useId();
  const { loginWithGoogle } = useAuth();
  const [googleAuthError, setGoogleAuthError] = useState<string | null>(null);

  // Form values
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Touched states for inline error display
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);

  // Password strength calculation
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password) || /[A-Z]/.test(password);

  const strengthScore = [hasMinLength, hasNumber, hasLetter, hasSpecial].filter(Boolean).length;

  const getStrengthLabel = () => {
    if (!password) return { text: 'Empty', color: 'text-slate-400', barColor: 'bg-slate-200', count: 0 };
    if (strengthScore <= 1) return { text: 'Weak', color: 'text-rose-600', barColor: 'bg-rose-500', count: 1 };
    if (strengthScore === 2) return { text: 'Fair', color: 'text-amber-600', barColor: 'bg-amber-500', count: 2 };
    if (strengthScore === 3) return { text: 'Good', color: 'text-blue-600', barColor: 'bg-blue-500', count: 3 };
    return { text: 'Strong', color: 'text-emerald-600', barColor: 'bg-emerald-500', count: 4 };
  };

  const strength = getStrengthLabel();

  // Real-time password confirmation comparison
  const isConfirming = confirmPassword.length > 0;
  const passwordsMatch = password.length > 0 && confirmPassword === password;

  // Validation function
  const validateField = (field: string, value: string) => {
    let error = '';

    if (field === 'fullName') {
      const trimmed = value.trim();
      if (!trimmed) {
        error = 'Full name is required';
      } else if (trimmed.length < 3) {
        error = 'Full name must be at least 3 characters';
      } else if (!trimmed.includes(' ')) {
        error = 'Please enter both your first and last name';
      }
    }

    if (field === 'email') {
      const trimmed = value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!trimmed) {
        error = 'Email address is required';
      } else if (!emailRegex.test(trimmed)) {
        error = 'Enter a valid email address (e.g., student@example.com)';
      }
    }

    if (field === 'phoneNumber') {
      const trimmed = value.replace(/\s+/g, '');
      const phoneRegex = /^(\+?234|0)[789][01]\d{8}$/;
      if (!trimmed) {
        error = 'Phone number is required';
      } else if (!phoneRegex.test(trimmed)) {
        error = 'Enter a valid Nigerian phone number (e.g. 08012345678 or +234...)';
      }
    }

    if (field === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 8) {
        error = 'Password must be at least 8 characters';
      } else if (!/\d/.test(value)) {
        error = 'Include at least one number';
      }
    }

    if (field === 'confirmPassword') {
      if (!value) {
        error = 'Please confirm your password';
      } else if (value !== password) {
        error = 'Passwords do not match';
      }
    }

    return error;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    let val = '';
    if (field === 'fullName') val = fullName;
    if (field === 'email') val = email;
    if (field === 'phoneNumber') val = phoneNumber;
    if (field === 'password') val = password;
    if (field === 'confirmPassword') val = confirmPassword;

    const error = validateField(field, val);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      email: true,
      phoneNumber: true,
      password: true,
      confirmPassword: true,
    });

    const newErrors: FormErrors = {
      fullName: validateField('fullName', fullName),
      email: validateField('email', email),
      phoneNumber: validateField('phoneNumber', phoneNumber),
      password: validateField('password', password),
      confirmPassword: validateField('confirmPassword', confirmPassword),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) return;

    setIsSubmitting(true);
    setSubmissionFeedback(null);

    // Simulate account creation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionFeedback('Account created successfully! Welcome to JAMBix.');
      setTimeout(() => {
        onSignUpSuccess({
          name: fullName.trim(),
          email: email.trim(),
        });
      }, 1000);
    }, 1200);
  };

  // Demo autofill for rapid testing
  const handleAutofillDemo = () => {
    setFullName('Chukwudi Adeleke');
    setEmail('adeleke.chukwudi@gmail.com');
    setPhoneNumber('08031234567');
    setPassword('JambMaster2026!');
    setConfirmPassword('JambMaster2026!');
    setErrors({});
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Brand Header */}
      <div className="text-center mb-6">
        <Logo size="md" showTagline={false} />
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
          Create your account
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Start your smarter JAMB preparation journey.
        </p>

        {/* Quick autofill helper */}
        <div className="mt-2.5 flex justify-center">
          <button
            type="button"
            onClick={handleAutofillDemo}
            className="text-[11px] font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-2.5 py-1 rounded-full transition-colors flex items-center gap-1"
          >
            <span>✨</span>
            <span>Tap to fill demo candidate info</span>
          </button>
        </div>
      </div>

      {/* Success notification banner */}
      {submissionFeedback && (
        <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2.5 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold">{submissionFeedback}</span>
        </div>
      )}

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-7">
        {googleAuthError && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{googleAuthError}</span>
          </div>
        )}

        {/* Firebase Google Auth Button */}
        <button
          type="button"
          disabled={isSubmitting}
          onClick={async () => {
            try {
              setIsSubmitting(true);
              setGoogleAuthError(null);
              await loginWithGoogle();
            } catch (err: unknown) {
              const msg = err instanceof Error ? err.message : 'Google sign in failed';
              setGoogleAuthError(msg);
            } finally {
              setIsSubmitting(false);
            }
          }}
          className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl shadow-2xs transition-colors cursor-pointer disabled:opacity-50"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span>Sign up with Google</span>
        </button>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-white px-2 text-slate-400 font-bold tracking-wider">or sign up with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor={`${formId}-fullName`}
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-fullName`}
                type="text"
                autoComplete="name"
                placeholder="e.g. Chukwudi Adeleke"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (touched.fullName) {
                    setErrors((prev) => ({
                      ...prev,
                      fullName: validateField('fullName', e.target.value),
                    }));
                  }
                }}
                onBlur={() => handleBlur('fullName')}
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl placeholder:text-slate-400 text-slate-900 transition-all focus:bg-white focus:outline-hidden focus:ring-2 ${
                  touched.fullName && errors.fullName
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                    : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                }`}
              />
            </div>
            {touched.fullName && errors.fullName && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor={`${formId}-email`}
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-email`}
                type="email"
                autoComplete="email"
                placeholder="candidate@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (touched.email) {
                    setErrors((prev) => ({
                      ...prev,
                      email: validateField('email', e.target.value),
                    }));
                  }
                }}
                onBlur={() => handleBlur('email')}
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl placeholder:text-slate-400 text-slate-900 transition-all focus:bg-white focus:outline-hidden focus:ring-2 ${
                  touched.email && errors.email
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                    : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                }`}
              />
            </div>
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Phone Number with Nigerian Flag indicator */}
          <div>
            <label
              htmlFor={`${formId}-phone`}
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Phone Number
            </label>
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 gap-1.5 pr-2 border-r border-slate-200 my-2">
                <span className="text-sm select-none" role="img" aria-label="Nigeria">
                  🇳🇬
                </span>
                <span className="text-xs font-semibold text-slate-600">+234</span>
              </div>
              <input
                id={`${formId}-phone`}
                type="tel"
                autoComplete="tel"
                placeholder="0801 234 5678"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (touched.phoneNumber) {
                    setErrors((prev) => ({
                      ...prev,
                      phoneNumber: validateField('phoneNumber', e.target.value),
                    }));
                  }
                }}
                onBlur={() => handleBlur('phoneNumber')}
                className={`w-full pl-24 pr-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl placeholder:text-slate-400 text-slate-900 transition-all focus:bg-white focus:outline-hidden focus:ring-2 ${
                  touched.phoneNumber && errors.phoneNumber
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                    : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                }`}
              />
            </div>
            {touched.phoneNumber && errors.phoneNumber ? (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phoneNumber}</span>
              </p>
            ) : (
              <p className="mt-1 text-[11px] text-slate-400">
                Used for instant UTME mock score SMS alerts & verification.
              </p>
            )}
          </div>

          {/* Password with Strength Indicator */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor={`${formId}-password`}
                className="block text-xs font-semibold text-slate-700"
              >
                Password
              </label>
              {password && (
                <span className={`text-[11px] font-semibold ${strength.color}`}>
                  Strength: {strength.text}
                </span>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-password`}
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (touched.password) {
                    setErrors((prev) => ({
                      ...prev,
                      password: validateField('password', e.target.value),
                    }));
                  }
                  if (confirmPassword) {
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword:
                        e.target.value === confirmPassword ? '' : 'Passwords do not match',
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

            {/* Password Strength Meter Bars */}
            {password && (
              <div className="mt-2 space-y-1.5">
                <div className="grid grid-cols-4 gap-1.5 h-1.5">
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      strength.count >= 1 ? strength.barColor : 'bg-slate-200'
                    }`}
                  />
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      strength.count >= 2 ? strength.barColor : 'bg-slate-200'
                    }`}
                  />
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      strength.count >= 3 ? strength.barColor : 'bg-slate-200'
                    }`}
                  />
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      strength.count >= 4 ? strength.barColor : 'bg-slate-200'
                    }`}
                  />
                </div>

                {/* Micro Checklist */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-slate-500 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                        hasMinLength ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {hasMinLength ? '✓' : '·'}
                    </span>
                    <span className={hasMinLength ? 'text-slate-700 font-medium' : ''}>
                      8+ characters
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                        hasNumber ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {hasNumber ? '✓' : '·'}
                    </span>
                    <span className={hasNumber ? 'text-slate-700 font-medium' : ''}>
                      Includes number
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                        hasLetter ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {hasLetter ? '✓' : '·'}
                    </span>
                    <span className={hasLetter ? 'text-slate-700 font-medium' : ''}>
                      Includes letters
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                        hasSpecial ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {hasSpecial ? '✓' : '·'}
                    </span>
                    <span className={hasSpecial ? 'text-slate-700 font-medium' : ''}>
                      Capital/Symbol
                    </span>
                  </div>
                </div>
              </div>
            )}

            {touched.password && errors.password && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.password}</span>
              </p>
            )}
          </div>

          {/* Confirm Password with Real-time matching feedback */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor={`${formId}-confirmPassword`}
                className="block text-xs font-semibold text-slate-700"
              >
                Confirm Password
              </label>

              {isConfirming && (
                <span
                  className={`text-[11px] font-semibold flex items-center gap-1 ${
                    passwordsMatch ? 'text-emerald-600' : 'text-amber-600'
                  }`}
                >
                  {passwordsMatch ? (
                    <>
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Passwords match</span>
                    </>
                  ) : (
                    <>
                      <X className="w-3 h-3 stroke-[3]" />
                      <span>Does not match</span>
                    </>
                  )}
                </span>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-confirmPassword`}
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (touched.confirmPassword) {
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword: validateField('confirmPassword', e.target.value),
                    }));
                  }
                }}
                onBlur={() => handleBlur('confirmPassword')}
                className={`w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50/50 border rounded-xl placeholder:text-slate-400 text-slate-900 transition-all focus:bg-white focus:outline-hidden focus:ring-2 ${
                  touched.confirmPassword && errors.confirmPassword
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                    : isConfirming && passwordsMatch
                    ? 'border-emerald-400 focus:border-emerald-500 focus:ring-emerald-100'
                    : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors"
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.confirmPassword}</span>
              </p>
            )}
          </div>

          {/* Primary Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm rounded-xl shadow-md shadow-emerald-800/15 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <span>Create Account</span>
              )}
            </button>
          </div>
        </form>

        {/* Already have an account? Log In */}
        <div className="mt-6 text-center text-xs text-slate-600">
          <span>Already have an account? </span>
          <button
            type="button"
            onClick={onNavigateToLogin}
            className="font-bold text-emerald-700 hover:text-emerald-800 hover:underline transition-colors cursor-pointer"
          >
            Log In
          </button>
        </div>

        {/* Terms of Service & Privacy Policy Acknowledgement */}
        <p className="mt-5 text-[11px] text-center text-slate-400 leading-relaxed">
          By creating an account, you agree to JAMBix&apos;s{' '}
          <button
            type="button"
            onClick={() => onOpenTerms('terms')}
            className="text-slate-600 underline hover:text-emerald-700 cursor-pointer font-medium"
          >
            Terms of Service
          </button>{' '}
          and{' '}
          <button
            type="button"
            onClick={() => onOpenTerms('privacy')}
            className="text-slate-600 underline hover:text-emerald-700 cursor-pointer font-medium"
          >
            Privacy Policy
          </button>
          .
        </p>
      </div>
    </div>
  );
};
