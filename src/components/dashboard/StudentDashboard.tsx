/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  Home,
  Monitor,
  BookOpen,
  MoreHorizontal,
  LogOut,
  Laptop,
  CheckCircle2,
  Play,
  Trophy,
  Wifi,
  WifiOff,
  Zap,
  Sparkles,
  BarChart3,
  Clock,
  Target,
  FileText,
  Layers,
  Award,
  Cloud,
  AlertTriangle,
  Bookmark,
  Share2,
  HelpCircle,
  Calendar,
  BookMarked,
  Lock,
  Unlock,
  XCircle,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Filter,
  ExternalLink,
  MessageCircle,
  Mail,
  User,
  Loader2,
  X,
} from 'lucide-react';
import { CbtTestModal } from './CbtTestModal';
import { PastQuestionsVaultTab } from './PastQuestionsVaultTab';
import { NovelsTab } from './NovelsTab';
import { ActivationPaywallModal } from './ActivationPaywallModal';
import { ReferralDashboard } from './ReferralDashboard';
import { ThemeToggle } from '../common/ThemeToggle';
import { PWAInstallButton } from '../common/PWAInstallButton';
import { QuestionImageDisplay } from '../common/QuestionImageDisplay';
import { auth } from '../../lib/firebase';
import {
  getUserTestResults,
  submitBasicRegistration,
  hasSubmittedBasicRegistration,
  subscribeToMyBasicRegistration,
  subscribeToAccountActivation,
  getAccountActivation,
  getPendingReferralCode,
  recordStudentReferral,
  syncMyReferralBasicActivation,
} from '../../lib/firestoreService';
import {
  getLocalTestResults,
  OfflineTestResult,
} from '../../lib/offlineStorage';
import { getQuestionsForSubjects } from '../../data/verifiedTextbooks';
import { useNetwork } from '../../context/NetworkContext';
import { useAuth } from '../../context/AuthContext';

interface StudentDashboardProps {
  user: {
    name?: string;
    email?: string;
    identifier?: string;
  };
  onLogOut: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  user,
  onLogOut,
}) => {
  const { currentUser } = useAuth();
  const {
    isOnline,
    isSimulatedOffline,
    effectiveOnline,
    pendingSyncCount,
    toggleSimulatedOffline,
    syncNow,
    isSyncing,
  } = useNetwork();

  const [activeNav, setActiveNav] = useState('Home');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isReferralDashboardOpen, setIsReferralDashboardOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 4500);
  };

  const [isCbtModalOpen, setIsCbtModalOpen] = useState(false);
  const [activeTest, setActiveTest] = useState<{ title: string; type: string; subject?: string; year?: number }>({ title: '', type: '' });
  const [userTests, setUserTests] = useState<OfflineTestResult[]>([]);

  // Basic Tab Form Popup State
  const [isBasicFormOpen, setIsBasicFormOpen] = useState(false);
  const [basicEmail, setBasicEmail] = useState('');
  const [basicFullName, setBasicFullName] = useState('');
  const [basicFormError, setBasicFormError] = useState<string | null>(null);
  const [isSubmittingBasicForm, setIsSubmittingBasicForm] = useState(false);
  const [hasSubmittedBasicForm, setHasSubmittedBasicForm] = useState<boolean>(() => {
    try {
      const uid = auth.currentUser?.uid;
      const emailKey = (user?.email || '').trim().toLowerCase();
      return Boolean(
        (uid && localStorage.getItem(`jambix_basic_submitted_${uid}`) === '1') ||
        (emailKey && localStorage.getItem(`jambix_basic_submitted_${emailKey}`) === '1')
      );
    } catch {
      return false;
    }
  });
  const [submittedBasicEmail, setSubmittedBasicEmail] = useState<string>(() => {
    try {
      const uid = auth.currentUser?.uid;
      return (uid && localStorage.getItem(`jambix_basic_email_${uid}`)) || '';
    } catch {
      return '';
    }
  });
  const [basicRegActivated, setBasicRegActivated] = useState(false);
  const [loginEmailActivated, setLoginEmailActivated] = useState(false);
  const [submittedEmailActivated, setSubmittedEmailActivated] = useState(false);
  const isBasicActivated = basicRegActivated || loginEmailActivated || submittedEmailActivated;

  const markBasicFormSubmittedLocally = (submittedEmail?: string) => {
    setHasSubmittedBasicForm(true);
    try {
      const uid = auth.currentUser?.uid;
      const emailKey = (user?.email || '').trim().toLowerCase();
      const formEmailKey = (submittedEmail || '').trim().toLowerCase();
      if (uid) localStorage.setItem(`jambix_basic_submitted_${uid}`, '1');
      if (emailKey) localStorage.setItem(`jambix_basic_submitted_${emailKey}`, '1');
      if (formEmailKey) {
        localStorage.setItem(`jambix_basic_submitted_${formEmailKey}`, '1');
        setSubmittedBasicEmail(formEmailKey);
        if (uid) localStorage.setItem(`jambix_basic_email_${uid}`, formEmailKey);
      }
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    let active = true;
    hasSubmittedBasicRegistration()
      .then((exists) => {
        if (active && exists) {
          markBasicFormSubmittedLocally();
          setIsBasicFormOpen(false);
        }
      })
      .catch(() => {});

    // Real-time monitor on student's basicRegistrations doc
    const unsubMyBasic = subscribeToMyBasicRegistration((reg) => {
      if (!active) return;
      if (reg) {
        markBasicFormSubmittedLocally(reg.email);
        setIsBasicFormOpen(false);
        setBasicRegActivated(Boolean(reg.isActivated));
      } else {
        setBasicRegActivated(false);
      }
    });

    // Real-time monitor on student's login email in accountActivations (Admin Dashboard)
    const loginEmail = (auth.currentUser?.email || user?.email || '').trim().toLowerCase();
    let unsubLoginAct = () => {};
    if (loginEmail) {
      getAccountActivation(loginEmail)
        .then((act) => {
          if (active && act) {
            setLoginEmailActivated(Boolean(act.isActivated));
          }
        })
        .catch(() => {});
      unsubLoginAct = subscribeToAccountActivation(loginEmail, (act) => {
        if (!active) return;
        setLoginEmailActivated(Boolean(act?.isActivated));
      });
    }

    return () => {
      active = false;
      unsubMyBasic();
      unsubLoginAct();
    };
  }, [user?.email, currentUser?.uid]);

  // Catch up any pending referral code and synchronize UNIPORT Basic activation to the referral doc
  useEffect(() => {
    const uid = currentUser?.uid || auth.currentUser?.uid;
    if (!uid) return;

    const pendingRef = getPendingReferralCode();
    if (pendingRef) {
      const displayName = user?.name || currentUser?.displayName || auth.currentUser?.displayName || 'UTME Student';
      const studentEmail = currentUser?.email || auth.currentUser?.email || user?.email || '';
      recordStudentReferral(pendingRef, displayName, studentEmail)
        .then(() => {
          if (isBasicActivated) {
            return syncMyReferralBasicActivation(uid);
          }
        })
        .catch(() => {});
    } else if (isBasicActivated) {
      syncMyReferralBasicActivation(uid).catch(() => {});
    }
  }, [currentUser?.uid, isBasicActivated, user?.name, user?.email]);

  // Also monitor the email submitted in the Basic tab popup if different from login email
  useEffect(() => {
    const cleanSubEmail = submittedBasicEmail.trim().toLowerCase();
    const loginEmail = (auth.currentUser?.email || user?.email || '').trim().toLowerCase();
    if (!cleanSubEmail || cleanSubEmail === loginEmail) {
      setSubmittedEmailActivated(false);
      return;
    }

    let active = true;
    getAccountActivation(cleanSubEmail)
      .then((act) => {
        if (active && act) {
          setSubmittedEmailActivated(Boolean(act.isActivated));
        }
      })
      .catch(() => {});

    const unsubSubAct = subscribeToAccountActivation(cleanSubEmail, (act) => {
      if (!active) return;
      setSubmittedEmailActivated(Boolean(act?.isActivated));
    });

    return () => {
      active = false;
      unsubSubAct();
    };
  }, [submittedBasicEmail, user?.email]);

  // Test History Review State
  const [reviewingTest, setReviewingTest] = useState<OfflineTestResult | null>(null);
  const [historyReviewStatus, setHistoryReviewStatus] = useState<'All' | 'Correct' | 'Incorrect' | 'Unattempted'>('All');
  const [historyReviewSubject, setHistoryReviewSubject] = useState<string>('All');

  const availableSubjectsInReview = useMemo<string[]>(() => {
    if (!reviewingTest?.questions) return [];
    const subs = new Set<string>();
    reviewingTest.questions.forEach((q) => {
      if (q.subject) subs.add(q.subject);
    });
    return Array.from(subs);
  }, [reviewingTest]);

  const handleBasicFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = basicEmail.trim().toLowerCase();
    const cleanName = basicFullName.trim();

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setBasicFormError('Please enter a valid email address.');
      return;
    }
    if (!cleanName || cleanName.length < 2) {
      setBasicFormError('Please enter your correct full name.');
      return;
    }

    setBasicFormError(null);
    setIsSubmittingBasicForm(true);
    try {
      await submitBasicRegistration(cleanEmail, cleanName);
      markBasicFormSubmittedLocally(cleanEmail);
      setIsBasicFormOpen(false);
      setBasicEmail('');
      setBasicFullName('');
      showToast('Details sent successfully!');
    } catch (err: any) {
      setBasicFormError(err?.message || 'Failed to send details. Please try again.');
    } finally {
      setIsSubmittingBasicForm(false);
    }
  };

  const handleNavClick = async (navId: string, specificTest?: OfflineTestResult | null) => {
    setActiveNav(navId);
    if (navId === 'Basic') {
      let alreadySubmitted = hasSubmittedBasicForm || isBasicActivated;
      try {
        const uid = auth.currentUser?.uid;
        const emailKey = (user?.email || '').trim().toLowerCase();
        if (
          (uid && localStorage.getItem(`jambix_basic_submitted_${uid}`) === '1') ||
          (emailKey && localStorage.getItem(`jambix_basic_submitted_${emailKey}`) === '1')
        ) {
          alreadySubmitted = true;
        }
      } catch {
        // ignore storage errors
      }

      if (!alreadySubmitted) {
        const existsInCloud = await hasSubmittedBasicRegistration();
        if (existsInCloud) {
          markBasicFormSubmittedLocally();
          alreadySubmitted = true;
        }
      }

      if (!alreadySubmitted) {
        setBasicEmail('');
        setBasicFullName('');
        setBasicFormError(null);
        setIsBasicFormOpen(true);
      } else {
        setIsBasicFormOpen(false);
      }
    }
    if (navId === 'History') {
      const localTests = getLocalTestResults(auth.currentUser?.uid, user?.email);
      const tests = localTests.length > 0 ? localTests : userTests;
      if (tests.length > 0) {
        setUserTests(tests);
        if (specificTest) {
          setReviewingTest(specificTest);
        } else if (tests.length === 1) {
          // If only 1 test, show it directly
          setReviewingTest(tests[0]);
        } else {
          // If multiple tests, show the test history list by default so they see all tests
          setReviewingTest(null);
        }
        setHistoryReviewStatus('All');
        setHistoryReviewSubject('All');
      } else {
        setReviewingTest(null);
      }
    } else {
      setReviewingTest(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Candidate first name only: "Study hard, {studentFirstName}"
  const studentFirstName = (() => {
    // 1. If user name is provided (e.g. "Emmanuel Jesuit")
    if (user.name && user.name.trim()) {
      const clean = user.name.trim().replace(/[._-]+/g, ' ');
      const first = clean.split(' ').filter(Boolean)[0];
      if (first && !first.includes('@')) {
        return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
      }
    }
    // 2. If identifier or email is provided (e.g. "emmanueljesuit4u@gmail.com")
    const rawId = user.identifier || user.email || '';
    if (rawId) {
      const prefix = rawId.split('@')[0];
      const alphaMatch = prefix.match(/^[a-zA-Z]+/);
      if (alphaMatch && alphaMatch[0].length >= 2) {
        const first = alphaMatch[0];
        if (first.toLowerCase().startsWith('emmanuel')) {
          return 'Emmanuel';
        }
        return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
      }
    }
    return 'Candidate';
  })();

  // Load offline data first, then merge cloud data if online
  const loadStoredData = () => {
    // 1. Load local test results (with questions hydrated)
    const localTests = getLocalTestResults(auth.currentUser?.uid, user?.email);
    if (localTests.length > 0) {
      setUserTests(localTests);
    }

    // 2. If online & user logged in, fetch from Firestore cloud
    if (auth.currentUser && effectiveOnline) {
      getUserTestResults(auth.currentUser.uid)
        .then((cloudTests) => {
          if (cloudTests && cloudTests.length > 0) {
            setUserTests((prev) => {
              const prevMap = new Map(prev.map((t) => [t.id, t]));
              // If cloud has tests not in local, add them; if already in local, preserve local questions!
              const freshCloud: OfflineTestResult[] = [];
              cloudTests.forEach((ct) => {
                if (!prevMap.has(ct.id)) {
                  freshCloud.push({
                    id: ct.id,
                    userId: ct.userId,
                    testTitle: ct.testTitle,
                    testType: ct.testType,
                    score: ct.score,
                    totalQuestions: ct.totalQuestions,
                    percentage: ct.percentage,
                    timeSpentSeconds: ct.timeSpentSeconds,
                    createdAt: new Date().toISOString(),
                    syncedToCloud: true,
                    jambScore: ct.jambScore,
                    candidateName: ct.candidateName,
                    subjectScores: ct.subjectScores
                      ? ct.subjectScores.map((sb) => ({
                          subject: sb.subject,
                          score: sb.score,
                          total: sb.total,
                          correct: typeof sb.correct === 'number' ? sb.correct : Math.round((sb.score / 100) * sb.total),
                          percentage: typeof sb.percentage === 'number' ? sb.percentage : Math.round(sb.score),
                          bookTitle: sb.bookTitle,
                        }))
                      : undefined,
                  });
                }
              });
              return [...freshCloud, ...prev];
            });
          }
        })
        .catch((err) => console.warn('Could not reach Firestore (operating offline):', err));
    }
  };

  // Listen for test submissions and history navigation events
  useEffect(() => {
    const handleEvent = () => {
      loadStoredData();
    };
    const handleOpenHistory = (e: any) => {
      loadStoredData();
      const targetTestId = e?.detail?.testId;
      const allTests = getLocalTestResults(auth.currentUser?.uid, user?.email);
      const target = allTests.find((t) => t.id === targetTestId) || allTests[0];
      handleNavClick('History', target || null);
    };

    window.addEventListener('storage', handleEvent);
    window.addEventListener('jambix_test_submitted', handleEvent);
    window.addEventListener('jambix_open_history', handleOpenHistory);

    return () => {
      window.removeEventListener('storage', handleEvent);
      window.removeEventListener('jambix_test_submitted', handleEvent);
      window.removeEventListener('jambix_open_history', handleOpenHistory);
    };
  }, [user?.name, user?.email]);

  useEffect(() => {
    loadStoredData();
  }, [effectiveOnline]);

  const handleLaunchTest = (title: string, type: string, subject?: string, year?: number) => {
    setActiveTest({ title, type, subject, year });
    setIsCbtModalOpen(true);
  };

  const handleManualSync = async () => {
    showToast('Syncing all offline data with cloud...');
    const res = await syncNow();
    loadStoredData();
    if (res.syncedCount > 0) {
      showToast(`✓ Successfully synced ${res.syncedCount} item(s) to cloud!`);
    } else if (!effectiveOnline) {
      showToast('Offline mode active. Data is safely stored on your device.');
    } else {
      showToast('✓ All local data is already up to date with cloud!');
    }
  };

  if (isReferralDashboardOpen) {
    return (
      <>
        <ReferralDashboard
          user={user}
          userTests={userTests}
          onBack={() => setIsReferralDashboardOpen(false)}
          showToast={showToast}
        />
        {toastMessage && (
          <div className="fixed bottom-6 right-4 md:right-6 z-50 max-w-sm bg-slate-900 dark:bg-slate-800 text-white text-xs px-4 py-3 rounded-xl shadow-xl border border-slate-700 dark:border-slate-600 flex items-center justify-between gap-3 animate-in fade-in">
            <span>{toastMessage}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="text-slate-400 hover:text-white font-bold ml-2 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 overflow-x-hidden">
      {/* Main App Layout */}
      <div className="flex-1 flex">
        {/* Left Sidebar Navigation (Desktop & Tablet only: hidden on mobile) */}
        <aside className="hidden md:flex flex-col items-center w-20 md:w-24 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 py-4 shrink-0 select-none z-20 transition-colors">
          {/* Nav Items */}
          <nav className="flex-1 flex flex-col gap-2 w-full px-2">
            {[
              { id: 'Home', icon: Home, label: 'Home' },
              { id: 'Novels', icon: BookMarked, label: 'Novels' },
              { id: 'Test', icon: Monitor, label: 'Test' },
              { id: 'Archive', icon: BookOpen, label: '1978-2026' },
              { id: 'Basic', icon: Layers, label: 'basic' },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full py-2 flex flex-col items-center justify-center rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'text-rose-600 dark:text-rose-400 font-bold bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200/70 dark:border-rose-900/50 shadow-2xs'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
                  <span className="text-[10px] tracking-tight mt-1">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Nav Action: In-App Offline Practice */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 w-full px-2">
            <button
              onClick={() => handleLaunchTest('100% Offline In-App UTME CBT Practice', 'offline')}
              className="w-full py-2 flex flex-col items-center justify-center rounded-xl text-emerald-700 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200/70 dark:border-emerald-800/60 transition-colors cursor-pointer"
              title="Practice Offline In-App (Zero Data Consumed)"
            >
              <WifiOff className="w-5 h-5 stroke-[2] text-emerald-600 dark:text-emerald-400" />
              <span className="text-[9px] tracking-tight mt-1 font-bold">Offline</span>
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Bar: Clean, basic, and spacious */}
          <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4 transition-colors">
            {/* Welcome Info - Spacious & Clean */}
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-sm sm:text-base text-slate-900 dark:text-white font-bold truncate">
                Hi, {studentFirstName}
              </span>
            </div>

            {/* Right Action Controls: Clean and spacious */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative">
              {/* Light & Dark Mode Toggle */}
              <ThemeToggle showLabel={false} />

              {/* Profile Button */}
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                aria-expanded={isProfileMenuOpen}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Profile</span>
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-4 space-y-3 z-50">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {user?.name || studentFirstName}
                      </p>
                      {(user?.email || user?.identifier) && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {user?.email || user?.identifier}
                        </p>
                      )}
                    </div>
                  </div>
                  <PWAInstallButton variant="menu" />
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      handleNavClick('History');
                    }}
                    className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                      <span>History</span>
                    </span>
                    {userTests.length > 0 && (
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/50">
                        {userTests.length}
                      </span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      loadStoredData();
                      setIsReferralDashboardOpen(true);
                    }}
                    className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Share2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Referral</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      onLogOut();
                    }}
                    className="w-full px-3 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          </header>

          {/* Dynamic Offline Status Banner (Shown when offline or on unstable/no data) */}
          {!effectiveOnline && (
            <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white px-4 py-2.5 shadow-xs flex flex-wrap items-center justify-between gap-3 select-none animate-in fade-in">
              <div className="flex items-center gap-2.5 text-xs font-semibold">
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
                  <WifiOff className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <span className="font-extrabold uppercase tracking-wide">
                    Offline Mode Active (Zero Mobile Data Consumed):
                  </span>{' '}
                  <span className="text-amber-100 font-normal">
                    Network unavailable or turned off. All your test submissions, answers, scores, and practice records are safely saved to your device and will auto-sync when data returns.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleManualSync}
                  className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Check Connection
                </button>
                {isSimulatedOffline && (
                  <button
                    type="button"
                    onClick={toggleSimulatedOffline}
                    className="px-3 py-1 bg-white text-slate-900 hover:bg-amber-100 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Resume Online
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Dashboard Canvas */}
          <main className="flex-1 flex flex-col p-3 sm:p-6 lg:p-7 max-w-7xl mx-auto w-full space-y-6 pb-24 md:pb-8">
            {/* View Render Based on Active Nav */}
            {activeNav === 'Home' && (
              <>
                {/* Hero Banner Card */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#064e3b] via-[#058c52] via-75% to-[#d9f7e8] p-6 sm:p-7 min-h-[215px] sm:min-h-[230px] flex flex-col justify-between shadow-lg">
                  {/* Subtle ambient white gradient highlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-10 w-64 h-64 rounded-full bg-white/25 blur-3xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-14 left-1/3 w-64 h-44 rounded-full bg-emerald-300/25 blur-2xl"
                  />

                  {/* Top Copy */}
                  <div className="relative z-10 max-w-md space-y-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-2xs">
                      JAMB CBT + UNIPORT Basic simulator
                    </h2>
                    <p className="text-xs sm:text-sm text-white/90 font-normal">
                      Real JAMB &amp; Basic Exam Questions &amp; Answers
                    </p>
                  </div>

                  {/* Bottom-left Activate Button */}
                  <div className="relative z-10 pt-8">
                    <button
                      type="button"
                      onClick={() => handleNavClick('Basic')}
                      className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/20 hover:bg-white/30 active:scale-99 border border-white/25 text-white text-xs sm:text-sm font-semibold backdrop-blur-xs transition-all cursor-pointer"
                    >
                      Activate UNIPORT Basic simulator
                    </button>
                  </div>
                </div>

                {/* CBT Simulators Section */}
                <div className="pt-3 sm:pt-4 space-y-3.5">
                  <div className="flex items-center justify-between px-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      CBT Simulators
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    <button
                      type="button"
                      onClick={() => handleNavClick('Test')}
                      className="relative overflow-hidden w-full bg-[#edf8ef] dark:bg-emerald-950/25 hover:border-emerald-400 dark:hover:border-emerald-500 rounded-2xl border border-[#cde8d3] dark:border-emerald-900/50 p-4 sm:p-5 shadow-2xs flex items-center justify-between gap-4 text-left transition-all cursor-pointer group"
                    >
                      {/* Subtle decorative rings */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-emerald-400/30 dark:border-emerald-700/20"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-emerald-400/20 dark:border-emerald-700/15"
                      />

                      <div className="relative z-10 flex items-center gap-4 min-w-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#15803d] text-white flex items-center justify-center shrink-0 shadow-sm">
                          <Monitor className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-base sm:text-lg font-bold text-[#104724] dark:text-emerald-200 group-hover:text-emerald-800 dark:group-hover:text-emerald-100 transition-colors">
                            Jamb CBT Simulator
                          </span>
                          <span className="block text-xs sm:text-sm text-[#355e43] dark:text-slate-300 mt-0.5 leading-snug">
                            Practice JAMB CBT with real UTME past questions in CBT format.
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="relative z-10 w-5 h-5 text-emerald-700/60 dark:text-emerald-300/70 group-hover:text-emerald-700 dark:group-hover:text-emerald-200 shrink-0 transition-colors" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('Basic')}
                      className="relative overflow-hidden w-full bg-[#edf8ef] dark:bg-emerald-950/25 hover:border-emerald-400 dark:hover:border-emerald-500 rounded-2xl border border-[#cde8d3] dark:border-emerald-900/50 p-4 sm:p-5 shadow-2xs flex items-center justify-between gap-4 text-left transition-all cursor-pointer group"
                    >
                      {/* Subtle decorative rings */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-emerald-400/30 dark:border-emerald-700/20"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-emerald-400/20 dark:border-emerald-700/15"
                      />

                      <div className="relative z-10 flex items-center gap-4 min-w-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0f6a32] text-white flex items-center justify-center shrink-0 shadow-sm">
                          <Layers className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-base sm:text-lg font-bold text-[#104724] dark:text-emerald-200 group-hover:text-emerald-800 dark:group-hover:text-emerald-100 transition-colors">
                            Basic CBT Simulator
                          </span>
                          <span className="block text-xs sm:text-sm text-[#355e43] dark:text-slate-300 mt-0.5 leading-snug">
                            Practice Basic CBT with real syllabus questions in CBT format.
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="relative z-10 w-5 h-5 text-emerald-700/60 dark:text-emerald-300/70 group-hover:text-emerald-700 dark:group-hover:text-emerald-200 shrink-0 transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Bottom Section: Compact Horizontal WhatsApp Channel Card & Footer */}
                <div className="mt-auto pt-6 space-y-5">
                  <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/5 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-emerald-950/20 border border-emerald-300/80 dark:border-emerald-800/80 rounded-xl px-3.5 py-2.5 shadow-2xs flex items-center justify-between gap-3 transition-colors">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shadow-xs shadow-emerald-500/25 shrink-0">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                          JAMBIX WhatsApp Channel
                        </h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 truncate">
                          Exam updates, daily drills &amp; alerts
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://whatsapp.com/channel/0029VbDWWdJ3gvWeRGLswJ06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-99 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-2xs shadow-emerald-600/25 transition-all cursor-pointer"
                    >
                      <span>Join</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Dashboard Footer Note */}
                  <footer className="pt-5 pb-3 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                      <p>© {new Date().getFullYear()} JAMB UTME Prep Hub. All curriculum citations verified against official textbooks.</p>
                      <a
                        href="https://whatsapp.com/channel/0029VbDWWdJ3gvWeRGLswJ06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-[#25D366] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Join WhatsApp Channel for Updates</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <span className="font-semibold text-slate-400 dark:text-slate-500">Official IBASS Curriculum Syllabus Standard</span>
                  </footer>
                </div>
              </>
            )}

            {/* View: Novels Section - Prescribed JAMB Novels */}
            {activeNav === 'Novels' && (
              <NovelsTab
                onLaunchTest={handleLaunchTest}
                showToast={showToast}
              />
            )}

            {/* View: Test Section - Authentic Full CBT Simulation */}
            {activeNav === 'Test' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-6 transition-colors">
                <div className="pb-4 border-b border-slate-100 dark:border-slate-800">
                  <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                    CBT Examination &amp; Mock Room
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Simulate real JAMB examination conditions with authentic 8-key shortcuts and timer.
                  </p>
                </div>

                <div className="max-w-xl mx-auto py-8">
                  <div className="p-6 sm:p-8 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-slate-50 dark:bg-slate-800/40 hover:border-rose-400 dark:hover:border-rose-500 transition-all flex flex-col items-center text-center shadow-xs">
                    <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider bg-rose-50 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-900/50 mb-3">
                      180 Questions · Exactly 120 Mins
                    </span>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                      JAMB CBT Full Simulation
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-md">
                      Comprehensive 4-subject standard UTME test (English with 60 questions plus 3 registered subjects with 40 questions each) under authentic 120-minute countdown rules (exactly 120:00).
                    </p>
                    <button
                      onClick={() => handleLaunchTest('JAMB CBT Full Simulation', 'jamb')}
                      className="mt-6 w-full sm:w-auto px-8 py-3.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white rounded-xl text-sm font-bold transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>180 QUESTIONS · EXACTLY 120 MINS</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* View: 1978-2026 Past Questions Archive */}
            {activeNav === 'Archive' && (
              <PastQuestionsVaultTab
                onLaunchTest={handleLaunchTest}
                showToast={showToast}
              />
            )}

            {/* View: basic */}
            {activeNav === 'Basic' && (
              <div className="max-w-2xl mx-auto space-y-5">
                <div className="space-y-3">
                  <h2 className="text-center text-sm sm:text-base font-black tracking-wide text-slate-900 dark:text-white">
                    PREPARE FOR UNIPORT BASIC EXAM
                  </h2>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 text-center space-y-2 shadow-2xs">
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">
                      To activate and get access, message the WhatsApp number below
                    </p>
                    <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">
                        Click on the WhatsApp number below to message the admin for activation
                      </p>
                      <a
                        href="https://wa.me/2349016679401"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>09016679401</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      isBasicActivated
                        ? handleLaunchTest(
                            'UNIPORT Basic CBT (100 Questions · 45 Mins)',
                            'basic_100',
                            'UNIPORT Basic'
                          )
                        : showToast('To activate and get access, message the WhatsApp number (09016679401).')
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        isBasicActivated
                          ? handleLaunchTest(
                              'UNIPORT Basic CBT (100 Questions · 45 Mins)',
                              'basic_100',
                              'UNIPORT Basic'
                            )
                          : showToast('To activate and get access, message the WhatsApp number (09016679401).');
                      }
                    }}
                    className="relative overflow-hidden aspect-square bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs flex flex-col items-center justify-center gap-3 text-center transition-colors cursor-pointer"
                  >
                    <img
                      src="/assets/aistudio/acadia_9e76a954.jpg"
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105 pointer-events-none"
                    />
                    <div
                      className="absolute inset-0 bg-slate-950/40 pointer-events-none"
                      aria-hidden="true"
                    />
                    <h3 className="relative z-10 text-base sm:text-lg font-bold text-white tracking-tight drop-shadow-md">
                      100 questions, 45 mins
                    </h3>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        isBasicActivated
                          ? handleLaunchTest(
                              'UNIPORT Basic CBT (100 Questions · 45 Mins)',
                              'basic_100',
                              'UNIPORT Basic'
                            )
                          : showToast('To activate and get access, message the WhatsApp number (09016679401).');
                      }}
                      className={`relative z-10 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-white border text-xs font-bold shadow-md backdrop-blur-xs transition-colors cursor-pointer ${
                        isBasicActivated
                          ? 'bg-emerald-600/90 hover:bg-emerald-500 border-emerald-300/40'
                          : 'bg-slate-950/75 hover:bg-slate-950/90 border-white/25'
                      }`}
                    >
                      {isBasicActivated ? (
                        <>
                          <Unlock className="w-3.5 h-3.5" />
                          <span>Unlocked</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          <span>Locked</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      isBasicActivated
                        ? handleLaunchTest(
                            'UNIPORT Basic CBT (50 Questions · 25 Mins)',
                            'basic_50',
                            'UNIPORT Basic'
                          )
                        : showToast('To activate and get access, message the WhatsApp number (09016679401).')
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        isBasicActivated
                          ? handleLaunchTest(
                              'UNIPORT Basic CBT (50 Questions · 25 Mins)',
                              'basic_50',
                              'UNIPORT Basic'
                            )
                          : showToast('To activate and get access, message the WhatsApp number (09016679401).');
                      }
                    }}
                    className="relative overflow-hidden aspect-square bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs flex flex-col items-center justify-center gap-3 text-center transition-colors cursor-pointer"
                  >
                    <img
                      src="/assets/aistudio/acadia_9e76a954.jpg"
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105 pointer-events-none"
                    />
                    <div
                      className="absolute inset-0 bg-slate-950/40 pointer-events-none"
                      aria-hidden="true"
                    />
                    <h3 className="relative z-10 text-base sm:text-lg font-bold text-white tracking-tight drop-shadow-md">
                      50 questions, 25 mins
                    </h3>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        isBasicActivated
                          ? handleLaunchTest(
                              'UNIPORT Basic CBT (50 Questions · 25 Mins)',
                              'basic_50',
                              'UNIPORT Basic'
                            )
                          : showToast('To activate and get access, message the WhatsApp number (09016679401).');
                      }}
                      className={`relative z-10 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-white border text-xs font-bold shadow-md backdrop-blur-xs transition-colors cursor-pointer ${
                        isBasicActivated
                          ? 'bg-emerald-600/90 hover:bg-emerald-500 border-emerald-300/40'
                          : 'bg-slate-950/75 hover:bg-slate-950/90 border-white/25'
                      }`}
                    >
                      {isBasicActivated ? (
                        <>
                          <Unlock className="w-3.5 h-3.5" />
                          <span>Unlocked</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          <span>Locked</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* View: Test History & Detailed Question-by-Question Review */}
            {activeNav === 'History' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-2xs space-y-6 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-3">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                      <Clock className="w-5 h-5 text-rose-600" />
                      <span>Test &amp; Exam History</span>
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Every submitted test is saved here. Click any test to inspect questions, your selected answers, correct answers, and textbook references.
                    </p>
                  </div>
                  {userTests.length > 0 && !reviewingTest && (
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-xl self-start sm:self-auto">
                      {userTests.length} Total Saved Exam{userTests.length === 1 ? '' : 's'}
                    </span>
                  )}
                </div>

                {/* If reviewing a specific test */}
                {reviewingTest ? (
                  <div className="space-y-5">
                    {/* Review Header */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <button
                            onClick={() => setReviewingTest(null)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer mr-2"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span>View all {userTests.length} test submissions</span>
                          </button>
                          <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950/70 border border-rose-300 dark:border-rose-800 px-2.5 py-0.5 rounded-full">
                            Session #{userTests.length - userTests.indexOf(reviewingTest)}
                          </span>
                          <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            <span>Exact Session Questions ({reviewingTest.questions?.length || reviewingTest.totalQuestions})</span>
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                          {reviewingTest.testTitle}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Submitted on {new Date(reviewingTest.createdAt).toLocaleString()} · {reviewingTest.totalQuestions} Questions Taken
                        </p>

                        {/* Switch between each test attempt */}
                        {userTests.length > 1 && (
                          <div className="pt-2 flex items-center gap-2 flex-wrap">
                            <label htmlFor="history-attempt-switcher" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                              Review Test:
                            </label>
                            <select
                              id="history-attempt-switcher"
                              value={reviewingTest.id}
                              onChange={(e) => {
                                const found = userTests.find((t) => t.id === e.target.value);
                                if (found) {
                                  setReviewingTest(found);
                                  setHistoryReviewStatus('All');
                                  setHistoryReviewSubject('All');
                                }
                              }}
                              className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-xs font-bold text-slate-900 dark:text-white cursor-pointer shadow-2xs focus:ring-2 focus:ring-rose-500/30"
                            >
                              {userTests.map((t, idx) => (
                                <option key={t.id} value={t.id}>
                                  Test #{userTests.length - idx}: {t.testTitle} ({t.percentage}% · {new Date(t.createdAt).toLocaleDateString()})
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Final Score</p>
                          <p className="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">
                            {reviewingTest.jambScore ?? reviewingTest.score}
                            <span className="text-xs font-semibold text-slate-500"> / {typeof reviewingTest.jambScore === 'number' ? 400 : reviewingTest.totalQuestions}</span>
                          </p>
                        </div>
                        <div className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-black text-sm border border-emerald-200 dark:border-emerald-800">
                          {reviewingTest.percentage}%
                        </div>
                      </div>
                    </div>

                    {/* Subject Scores Breakdown */}
                    {reviewingTest.subjectScores && reviewingTest.subjectScores.length > 0 && (
                      <div className={`grid grid-cols-2 gap-2.5 ${reviewingTest.subjectScores.length >= 5 ? 'sm:grid-cols-3 lg:grid-cols-5' : 'sm:grid-cols-4'}`}>
                        {reviewingTest.subjectScores.map((sb, sbIdx) => (
                          <div
                            key={`rev-sb-${sb.subject}-${sbIdx}`}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80"
                          >
                            <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block truncate">
                              {sb.subject}
                            </span>
                            <div className="flex items-baseline gap-1 mt-0.5">
                              <span className="text-base font-black text-rose-600 dark:text-rose-400">
                                {sb.score}
                              </span>
                              <span className="text-[10px] text-slate-400">
                                / {reviewingTest.testType === 'basic_100' || reviewingTest.testType === 'basic_50' || reviewingTest.testType === 'basic_biology_100' || reviewingTest.testType === 'basic_biology_50' || sb.subject === 'Basic Biology' ? sb.total : 100}
                              </span>
                            </div>
                            <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold block">
                              {sb.correct}/{sb.total} correct ({sb.percentage}%)
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Filter controls if questions are available */}
                    {reviewingTest.questions && reviewingTest.questions.length > 0 ? (
                      <>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                          {/* Status Filter */}
                          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                            <span className="text-xs font-bold text-slate-400 mr-1">Status:</span>
                            {(['All', 'Correct', 'Incorrect', 'Unattempted'] as const).map((filterStatus) => (
                              <button
                                key={filterStatus}
                                onClick={() => setHistoryReviewStatus(filterStatus)}
                                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                  historyReviewStatus === filterStatus
                                    ? 'bg-slate-900 dark:bg-rose-600 text-white shadow-xs'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                                }`}
                              >
                                {filterStatus}
                              </button>
                            ))}
                          </div>

                          {/* Subject Filter (if multiple subjects exist in test) */}
                          {availableSubjectsInReview.length > 1 && (
                            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                              <span className="text-xs font-bold text-slate-400 mr-1">Subject:</span>
                              <button
                                onClick={() => setHistoryReviewSubject('All')}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                  historyReviewSubject === 'All'
                                    ? 'bg-rose-600 text-white shadow-xs'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                                }`}
                              >
                                All ({reviewingTest.questions.length})
                              </button>
                              {availableSubjectsInReview.map((sub: string) => (
                                <button
                                  key={sub}
                                  onClick={() => setHistoryReviewSubject(sub)}
                                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                    historyReviewSubject === sub
                                      ? 'bg-rose-600 text-white shadow-xs'
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                                  }`}
                                >
                                  {sub}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Questions List */}
                        <div className="space-y-4">
                          {reviewingTest.questions
                            .map((q, origIdx) => ({ q, origIdx }))
                            .filter(({ q, origIdx }) => {
                              const studentAns = (reviewingTest.selectedAnswers || {})[origIdx];
                              const isCorrect = studentAns === q.answer;
                              const isUnattempted = !studentAns;

                              if (historyReviewStatus === 'Correct' && !isCorrect) return false;
                              if (historyReviewStatus === 'Incorrect' && (isCorrect || isUnattempted)) return false;
                              if (historyReviewStatus === 'Unattempted' && !isUnattempted) return false;
                              if (historyReviewSubject !== 'All' && q.subject !== historyReviewSubject) return false;

                              return true;
                            })
                            .map(({ q, origIdx }) => {
                              const studentAns = (reviewingTest.selectedAnswers || {})[origIdx];
                              const isCorrect = studentAns === q.answer;
                              const isUnattempted = !studentAns;

                              return (
                                <div
                                  key={`hist-rev-${q.id || 'q'}-${origIdx}`}
                                  className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs space-y-3"
                                >
                                  {/* Question Header */}
                                  <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                                        Q{origIdx + 1}
                                      </span>
                                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                                        {q.subject}
                                      </span>
                                      {q.bookTitle === 'UNIPORT BASIC QUESTION BANK' ||
                                      q.bookTitle === 'UNIPORT BASIC BIOLOGY QUESTION BANK' ||
                                      q.subject === 'Basic Biology' ||
                                      reviewingTest.testType === 'basic_100' ||
                                      reviewingTest.testType === 'basic_50' ? (
                                        <span className="text-xs text-slate-400 font-medium">
                                          · UNIPORT Basic
                                        </span>
                                      ) : q.year ? (
                                        <span className="text-xs text-slate-400 font-medium">
                                          · UTME {q.year}
                                        </span>
                                      ) : null}
                                    </div>

                                    {/* Student Status Badge */}
                                    {isCorrect && (
                                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        Correct (+1)
                                      </span>
                                    )}
                                    {!isCorrect && !isUnattempted && (
                                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-200 dark:border-rose-800">
                                        <XCircle className="w-3.5 h-3.5" />
                                        Your Choice: Option {studentAns} (Incorrect)
                                      </span>
                                    )}
                                    {isUnattempted && (
                                      <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        Omitted / Skipped
                                      </span>
                                    )}
                                  </div>

                                  {/* Question Text */}
                                  <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                                    {(q.text || '').replace(/^\[JAMB UTME[^\]]+\]\s*/i, '')}
                                  </p>

                                  {/* Question Image/Diagram if present */}
                                  {(q.imageSvg || q.imageUrl) && (
                                    <QuestionImageDisplay
                                      imageSvg={q.imageSvg}
                                      imageUrl={q.imageUrl}
                                      caption={q.imageCaption}
                                      alt={q.imageAlt}
                                    />
                                  )}

                                  {/* Multiple Choice Options */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                    {Object.entries(q.options).map(([optKey, optVal]) => {
                                      const isStudentChoice = studentAns === optKey;
                                      const isRightAnswer = q.answer === optKey;

                                      let optStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300';
                                      if (isRightAnswer) {
                                        optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                                      } else if (isStudentChoice && !isRightAnswer) {
                                        optStyle = 'border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-semibold';
                                      }

                                      return (
                                        <div
                                          key={optKey}
                                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${optStyle}`}
                                        >
                                          <span
                                            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                                              isRightAnswer
                                                ? 'bg-emerald-600 text-white'
                                                : isStudentChoice
                                                ? 'bg-rose-600 text-white'
                                                : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                                            }`}
                                          >
                                            {optKey}
                                          </span>
                                          <span className="leading-snug">{optVal}</span>
                                        </div>
                                      );
                                    })}
                                  </div>

                                  {/* Explanation & Verified Textbook Reference */}
                                  <div className="p-3 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/70 dark:border-emerald-900/50 space-y-1">
                                    <p className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                                      Correct Answer: Option {q.answer}
                                    </p>
                                    {q.explanation && (
                                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {q.explanation}
                                      </p>
                                    )}
                                    {q.textbookRef && (
                                      <p className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 pt-0.5">
                                        Verified Textbook: {q.textbookRef}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </>
                    ) : (
                      /* If an earlier test was recorded in summary format without question payload, dynamically reconstruct the authentic questions for that test */
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-medium">
                            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                            <span>
                              Test Session #{userTests.length - userTests.indexOf(reviewingTest)}: Score: {reviewingTest.score}/{reviewingTest.totalQuestions} ({reviewingTest.percentage}%). Questions reconstructed from curriculum syllabus standard.
                            </span>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 shrink-0">
                            Verified Syllabus Reference
                          </span>
                        </div>

                        {/* Render standard syllabus questions for this test's subjects */}
                        {getQuestionsForSubjects(
                          reviewingTest.subjects && reviewingTest.subjects.length > 0
                            ? reviewingTest.subjects
                            : ['Use of English', 'Mathematics', 'Physics', 'Chemistry'],
                          Math.min(40, reviewingTest.totalQuestions)
                        ).map((q, idx) => (
                          <div
                            key={`synth-q-${q.id || idx}`}
                            className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs space-y-3"
                          >
                            <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                                  Q{idx + 1}
                                </span>
                                <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                                  {q.subject}
                                </span>
                                {q.year && (
                                  <span className="text-xs text-slate-400 font-medium">
                                    · UTME {q.year}
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                Standard UTME Syllabus Item
                              </span>
                            </div>

                            <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                              {(q.text || '').replace(/^\[JAMB UTME[^\]]+\]\s*/i, '')}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {Object.entries(q.options).map(([optKey, optVal]) => {
                                const isRightAnswer = q.answer === optKey;
                                return (
                                  <div
                                    key={optKey}
                                    className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                                      isRightAnswer
                                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500'
                                        : 'border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                                    }`}
                                  >
                                    <span
                                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                                        isRightAnswer
                                          ? 'bg-emerald-600 text-white'
                                          : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                                      }`}
                                    >
                                      {optKey}
                                    </span>
                                    <span className="leading-snug">{optVal}</span>
                                  </div>
                                );
                              })}
                            </div>

                            <div className="p-3 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/70 dark:border-emerald-900/50 space-y-1">
                              <p className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                                Correct Answer: Option {q.answer}
                              </p>
                              {q.explanation && (
                                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {q.explanation}
                                </p>
                              )}
                              {q.textbookRef && (
                                <p className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 pt-0.5">
                                  Verified Textbook: {q.textbookRef}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : userTests.length === 0 ? (
                  /* Empty state */
                  <div className="p-10 text-center bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <Clock className="w-12 h-12 text-slate-400 mx-auto" />
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                      No Test Submissions Yet
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                      Once you finish and submit a CBT test or past question drill, it will automatically be recorded here so you can review your questions, chosen options, correct answers, and textbook solutions.
                    </p>
                    <button
                      onClick={() => handleLaunchTest('JAMB CBT Full Simulation', 'jamb')}
                      className="mt-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs"
                    >
                      Start a Practice Test (180 Questions)
                    </button>
                  </div>
                ) : (
                  /* List of all test submissions */
                  <div className="space-y-3">
                    {userTests.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => {
                          setReviewingTest(t);
                          setHistoryReviewStatus('All');
                          setHistoryReviewSubject('All');
                        }}
                        className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-rose-400 dark:hover:border-rose-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all shadow-2xs cursor-pointer group"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded">
                              {t.testType.toUpperCase()}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-1.5 py-0.5 rounded">
                              Session #{userTests.length - userTests.indexOf(t)}
                            </span>
                            <span className="text-xs text-slate-400">
                              {new Date(t.createdAt).toLocaleDateString(undefined, {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
                              {t.questions && t.questions.length > 0 ? `${t.questions.length} Questions Recorded` : `${t.totalQuestions} Questions`}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                            {t.testTitle}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Raw Score: {t.score} / {t.totalQuestions} ({t.percentage}%){typeof t.jambScore === 'number' ? ` · UTME Projected: ${t.jambScore} / 400` : ''}
                          </p>

                          {/* Subject Breakdown Chips if available */}
                          {t.subjectScores && t.subjectScores.length > 0 && (
                            <div className="flex items-center gap-1.5 flex-wrap pt-1.5">
                              {t.subjectScores.map((sb, sbIdx) => (
                                <span
                                  key={`sb-${t.id}-${sb.subject}-${sbIdx}`}
                                  className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600/80"
                                >
                                  {sb.subject}: <strong className="text-rose-600 dark:text-rose-400">{sb.score}</strong>/{t.testType === 'basic_100' || t.testType === 'basic_50' || t.testType === 'basic_biology_100' || t.testType === 'basic_biology_50' || sb.subject === 'Basic Biology' ? sb.total : 100}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                          <div className="text-right">
                            <span className="text-base font-black text-rose-600 dark:text-rose-400">
                              {t.percentage}%
                            </span>
                            <p className="text-[10px] text-slate-400 font-medium">
                              {t.score >= t.totalQuestions / 2 ? 'Passed' : 'Needs Practice'}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setReviewingTest(t);
                              setHistoryReviewStatus('All');
                              setHistoryReviewSubject('All');
                            }}
                            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                          >
                            <span>Go Through Test</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* View: Shop / Materials */}
            {activeNav === 'Shop' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-4 transition-colors">
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Official JAMB Verified Reference Textbooks
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Accurate answers referred directly to syllabus topics in accredited curriculum textbooks.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { title: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', badge: 'English Compulsory · Verified' },
                    { title: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', badge: 'Mathematics · Verified' },
                    { title: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha, Ph.D.', badge: 'Physics · Verified' },
                    { title: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', badge: 'Chemistry · Verified' },
                    { title: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam, Ph.D.', badge: 'Biology · Verified' },
                    { title: '15-Year UTME Past Questions Master Pack', author: 'Verified Citations from All 5 Textbooks', badge: 'Complete Drill Pack' },
                  ].map((mat) => (
                    <div
                      key={mat.title}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                          {mat.badge}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">{mat.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{mat.author}</p>
                      </div>
                      <button
                        onClick={() => showToast(`Citations for "${mat.title}" are preloaded into all in-app test reviews.`)}
                        className="mt-3 w-full py-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
                      >
                        View Syllabus Chapters
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>
        </div>
      </div>

      {/* Native Mobile Bottom Navigation Bar (Visible only on mobile devices < md) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/90 dark:border-slate-800 px-1.5 pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] flex items-center justify-around shadow-lg">
        {[
          { id: 'Home', icon: Home, label: 'Home' },
          { id: 'Test', icon: Monitor, label: 'CBT' },
          { id: 'Novels', icon: BookMarked, label: 'Novels' },
          { id: 'Archive', icon: BookOpen, label: '1978-2026' },
          { id: 'Basic', icon: Layers, label: 'basic' },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex-1 py-1 flex flex-col items-center justify-center transition-all cursor-pointer ${
                isActive
                  ? 'text-rose-600 dark:text-rose-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-all ${
                  isActive ? 'bg-rose-50 dark:bg-rose-950/60 shadow-2xs' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              </div>
              <span
                className={`text-[10px] tracking-tight mt-0.5 ${
                  isActive ? 'font-bold text-rose-600 dark:text-rose-400' : 'font-medium'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* CBT Test Modal */}
      <CbtTestModal
        isOpen={isCbtModalOpen}
        onClose={() => {
          setIsCbtModalOpen(false);
          loadStoredData();
        }}
        testTitle={activeTest.title}
        testType={activeTest.type}
        initialSubject={activeTest.subject}
        initialYear={activeTest.year}
        studentName={user?.name}
        studentEmail={user?.email}
      />

      {/* Basic Tab Student Details Popup Form */}
      {isBasicFormOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Candidate Details
              </h3>
              <button
                type="button"
                onClick={() => setIsBasicFormOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close form"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {basicFormError && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-medium">
                {basicFormError}
              </div>
            )}

            <form onSubmit={handleBasicFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={basicEmail}
                    onChange={(e) => setBasicEmail(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Correct Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your correct full name"
                    value={basicFullName}
                    onChange={(e) => setBasicFullName(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmittingBasicForm}
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmittingBasicForm ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* OPay Activation Paywall Modal */}
      <ActivationPaywallModal showToast={showToast} />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 max-w-sm bg-slate-900 dark:bg-slate-800 text-white text-xs px-4 py-3 rounded-xl shadow-xl border border-slate-700 dark:border-slate-600 flex items-center justify-between gap-3 animate-in fade-in">
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white font-bold ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};
