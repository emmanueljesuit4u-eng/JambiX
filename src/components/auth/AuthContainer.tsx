/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  Smartphone,
  Monitor,
  Tablet,
  GraduationCap,
  Award,
  Layers,
  CheckCircle2,
  LogOut,
  BookOpen,
} from 'lucide-react';
import { SignUpPage } from './SignUpPage';
import { LogInPage } from './LogInPage';
import { ForgotPasswordPage } from './ForgotPasswordPage';
import { TermsModal } from './TermsModal';
import { GoogleAuthModal } from './GoogleAuthModal';
import { Logo } from '../brand/Logo';

export type ScreenType = 'signup' | 'login' | 'forgot_password';
export type ViewportMode = 'responsive' | 'mobile' | 'tablet';

export const AuthContainer: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('signup');
  const [viewportMode, setViewportMode] = useState<ViewportMode>('responsive');

  // Modal dialog states
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [termsTab, setTermsTab] = useState<'terms' | 'privacy'>('terms');
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);

  // Authenticated state notification
  const [authenticatedUser, setAuthenticatedUser] = useState<{
    name?: string;
    email?: string;
    identifier?: string;
  } | null>(null);

  const handleOpenTerms = (tab: 'terms' | 'privacy') => {
    setTermsTab(tab);
    setIsTermsOpen(true);
  };

  const handleSignUpSuccess = (user: { name: string; email: string }) => {
    setAuthenticatedUser(user);
  };

  const handleLogInSuccess = (user: { identifier: string }) => {
    setAuthenticatedUser(user);
  };

  const handleGoogleSuccess = (user: { name: string; email: string }) => {
    setAuthenticatedUser(user);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-800 antialiased">
      {/* Top Utility Bar for Device Preview & Screen Navigation */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 py-2.5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Brand Wordmark (Single Text Element per Top Bar Contract) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentScreen('signup')}
              className="text-left cursor-pointer flex items-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-black text-xs shadow-xs group-hover:bg-emerald-800 transition-colors">
                J
              </div>
              <span className="font-extrabold text-slate-900 tracking-tight text-lg">
                JAMB<span className="text-emerald-600">ix</span>
              </span>
            </button>
            <span className="hidden sm:inline-block text-xs text-slate-400 font-medium border-l border-slate-200 pl-3">
              UTME Prep Engine
            </span>
          </div>

          {/* Quick Screen Nav Links & Device Switcher */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Screen Tabs */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setCurrentScreen('signup');
                  setAuthenticatedUser(null);
                }}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  currentScreen === 'signup'
                    ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrentScreen('login');
                  setAuthenticatedUser(null);
                }}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  currentScreen === 'login'
                    ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrentScreen('forgot_password');
                  setAuthenticatedUser(null);
                }}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  currentScreen === 'forgot_password'
                    ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Forgot Password
              </button>
            </div>

            {/* Viewport Frame Mode Switcher for Testing */}
            <div className="hidden md:flex items-center bg-slate-100 p-1 rounded-xl text-xs text-slate-600">
              <button
                type="button"
                title="Fluid Responsive View"
                onClick={() => setViewportMode('responsive')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewportMode === 'responsive'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                title="Tablet Frame (640px)"
                onClick={() => setViewportMode('tablet')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewportMode === 'tablet'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                title="Mobile Frame (390px)"
                onClick={() => setViewportMode('mobile')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewportMode === 'mobile'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* If viewportMode is 'mobile', wrap in simulated phone frame */}
        <div
          className={`w-full transition-all duration-300 ${
            viewportMode === 'mobile'
              ? 'max-w-[400px] border-8 border-slate-800 rounded-[38px] p-4 bg-slate-50 shadow-2xl my-4'
              : viewportMode === 'tablet'
              ? 'max-w-[640px] border-4 border-slate-300 rounded-3xl p-6 bg-slate-50 shadow-xl my-4'
              : 'max-w-5xl'
          }`}
        >
          {/* Simulated Mobile Top Notch / Speaker (when in mobile frame) */}
          {viewportMode === 'mobile' && (
            <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-4" />
          )}

          {/* Authenticated Confirmation Card (Simulation State) */}
          {authenticatedUser ? (
            <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-slate-200/90 p-7 text-center animate-in fade-in zoom-in-95">
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto text-emerald-600 mb-4 shadow-2xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Welcome to JAMBix, {authenticatedUser.name || 'Candidate'}!
              </h2>

              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Authentication verified for{' '}
                <span className="font-semibold text-slate-900">
                  {authenticatedUser.email || authenticatedUser.identifier}
                </span>
                .
              </p>

              <div className="mt-5 p-4 bg-emerald-50/60 border border-emerald-100 rounded-xl text-left text-xs text-emerald-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-800">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Authentication Screens Complete</span>
                </div>
                <p className="text-[11px] text-emerald-700 leading-relaxed">
                  Per specifications, only the Sign Up, Log In, and Forgot Password authentication flows are built in this release. CBT exams, subject modules, and student dashboards remain deferred for the next phase.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setAuthenticatedUser(null);
                    setCurrentScreen('login');
                  }}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Return to Login Screen</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthenticatedUser(null);
                    setCurrentScreen('signup');
                  }}
                  className="w-full py-2 text-slate-600 hover:text-slate-900 text-xs font-medium transition-colors cursor-pointer"
                >
                  Switch to Sign Up Screen
                </button>
              </div>
            </div>
          ) : viewportMode === 'responsive' ? (
            /* Responsive Desktop Dual-Pane Layout */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Brand Showcase (Visible on lg screens) */}
              <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white relative overflow-hidden shadow-xl min-h-[580px]">
                {/* Subtle background graphic */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2.5 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <GraduationCap className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold tracking-tight">
                        JAMB<span className="text-emerald-400">ix</span>
                      </div>
                      <div className="text-[11px] text-emerald-200/80 font-medium">
                        Prepare smarter. Perform better.
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-black tracking-tight leading-snug text-white">
                    Master the UTME syllabus with Nigeria&apos;s most advanced CBT engine.
                  </h2>
                  <p className="mt-3 text-xs text-emerald-100/70 leading-relaxed">
                    Designed strictly around the official JAMB guidelines, past trends, and real-time timed test simulations.
                  </p>

                  <div className="mt-8 space-y-3.5">
                    <div className="flex items-start gap-3 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-white">300+ UTME Target Prep</div>
                        <div className="text-emerald-200/60 text-[11px]">
                          Topic-by-topic drills to push your aggregate score beyond university cut-offs.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-white">2026/2027 Syllabus Updated</div>
                        <div className="text-emerald-200/60 text-[11px]">
                          Use of English, Mathematics, Sciences, Arts & Social Science subjects.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Real CBT 8-Key Navigation</div>
                        <div className="text-emerald-200/60 text-[11px]">
                          Familiarize yourself with actual JAMB examination keyboard shortcuts.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Candidate Testimonial quote */}
                <div className="mt-8 pt-6 border-t border-white/10 text-xs">
                  <div className="text-emerald-100/90 italic leading-relaxed">
                    &ldquo;JAMBix timed mock tests gave me the speed and composure I needed. Scored 324 in my UTME.&rdquo;
                  </div>
                  <div className="mt-2 text-[11px] font-semibold text-emerald-400">
                    Oluwaseun A. · UNILAG Law Aspirant
                  </div>
                </div>
              </div>

              {/* Right Form Card */}
              <div className="lg:col-span-7 flex justify-center">
                {currentScreen === 'signup' && (
                  <SignUpPage
                    onNavigateToLogin={() => setCurrentScreen('login')}
                    onOpenTerms={handleOpenTerms}
                    onOpenGoogleAuth={() => setIsGoogleModalOpen(true)}
                    onSignUpSuccess={handleSignUpSuccess}
                  />
                )}

                {currentScreen === 'login' && (
                  <LogInPage
                    onNavigateToSignUp={() => setCurrentScreen('signup')}
                    onNavigateToForgotPassword={() => setCurrentScreen('forgot_password')}
                    onOpenGoogleAuth={() => setIsGoogleModalOpen(true)}
                    onLogInSuccess={handleLogInSuccess}
                  />
                )}

                {currentScreen === 'forgot_password' && (
                  <ForgotPasswordPage
                    onNavigateToLogin={() => setCurrentScreen('login')}
                  />
                )}
              </div>
            </div>
          ) : (
            /* Centered Frame for Mobile / Tablet Modes */
            <div className="w-full flex justify-center">
              {currentScreen === 'signup' && (
                <SignUpPage
                  onNavigateToLogin={() => setCurrentScreen('login')}
                  onOpenTerms={handleOpenTerms}
                  onOpenGoogleAuth={() => setIsGoogleModalOpen(true)}
                  onSignUpSuccess={handleSignUpSuccess}
                />
              )}

              {currentScreen === 'login' && (
                <LogInPage
                  onNavigateToSignUp={() => setCurrentScreen('signup')}
                  onNavigateToForgotPassword={() => setCurrentScreen('forgot_password')}
                  onOpenGoogleAuth={() => setIsGoogleModalOpen(true)}
                  onLogInSuccess={handleLogInSuccess}
                />
              )}

              {currentScreen === 'forgot_password' && (
                <ForgotPasswordPage
                  onNavigateToLogin={() => setCurrentScreen('login')}
                />
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-4 px-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-bold text-slate-800">JAMBix</span>
            <span>·</span>
            <span>Prepare smarter. Perform better.</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <button
              type="button"
              onClick={() => handleOpenTerms('terms')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => handleOpenTerms('privacy')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>© {new Date().getFullYear()} JAMBix Nigeria</span>
          </div>
        </div>
      </footer>

      {/* Terms & Privacy Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        initialTab={termsTab}
      />

      {/* Google Authentication Modal */}
      <GoogleAuthModal
        isOpen={isGoogleModalOpen}
        onClose={() => setIsGoogleModalOpen(false)}
        onSuccess={handleGoogleSuccess}
      />
    </div>
  );
};
