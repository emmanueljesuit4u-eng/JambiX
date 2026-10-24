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
  RefreshCw,
  Check,
  AlertTriangle,
  Bookmark,
  Share2,
  HelpCircle,
  Calendar,
  BookMarked,
  Lock,
  Unlock,
  ShieldCheck,
  XCircle,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Filter,
} from 'lucide-react';
import { CbtTestModal } from './CbtTestModal';
import { PastQuestionsVaultTab } from './PastQuestionsVaultTab';
import { NovelsTab } from './NovelsTab';
import {
  LiveLeaderboardTab,
  isTwoHourFullCbtRecord,
  formatCandidateName,
} from './LiveLeaderboardTab';
import { ActivationPaywallModal } from './ActivationPaywallModal';
import { ThemeToggle } from '../common/ThemeToggle';
import { QuestionImageDisplay } from '../common/QuestionImageDisplay';
import { auth } from '../../lib/firebase';
import {
  getUserTestResults,
  subscribeToAllTestResults,
  TestResultData,
} from '../../lib/firestoreService';
import {
  getLocalTestResults,
  OfflineTestResult,
} from '../../lib/offlineStorage';
import { useNetwork } from '../../context/NetworkContext';

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

  const handleNavClick = (navId: string) => {
    setActiveNav(navId);
    if (navId === 'History') {
      const localTests = getLocalTestResults(auth.currentUser?.uid);
      const tests = localTests.length > 0 ? localTests : userTests;
      if (tests.length > 0) {
        setUserTests(tests);
        setReviewingTest(tests[0]);
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
    // 1. Load local test results
    const localTests = getLocalTestResults(auth.currentUser?.uid);
    if (localTests.length > 0) {
      setUserTests(localTests);
    }

    // 2. If online & user logged in, fetch from Firestore cloud
    if (auth.currentUser && effectiveOnline) {
      getUserTestResults(auth.currentUser.uid)
        .then((cloudTests) => {
          if (cloudTests && cloudTests.length > 0) {
            setUserTests((prev) => {
              const prevIds = new Set(prev.map((t) => t.id));
              const freshCloud: OfflineTestResult[] = cloudTests
                .filter((ct) => !prevIds.has(ct.id))
                .map((ct) => ({
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
                }));
              return [...freshCloud, ...prev];
            });
          }
        })
        .catch((err) => console.warn('Could not reach Firestore (operating offline):', err));
    }
  };

  // Live 2-Hour CBT Top Score State
  const [leaderboardTopScore, setLeaderboardTopScore] = useState<{
    topScore: number;
    leaderName: string;
    totalCandidates: number;
    timeSpentSeconds: number;
    userBestScore?: number;
    userRank?: number;
  }>({
    topScore: 0,
    leaderName: '',
    totalCandidates: 0,
    timeSpentSeconds: 0,
  });

  // Real-time synchronization of the National 2-Hour CBT Top Score
  useEffect(() => {
    const updateStatsFromResults = (results: TestResultData[]) => {
      let localTwoHourTests: TestResultData[] = [];
      try {
        const rawLocal = localStorage.getItem('jambix_offline_tests_v1');
        if (rawLocal) {
          const parsed = JSON.parse(rawLocal) as any[];
          localTwoHourTests = parsed
            .filter((lt) => lt.totalQuestions === 180 && (lt.testType === 'full' || lt.testType === 'full_2hr_cbt' || (lt.testTitle && lt.testTitle.toLowerCase().includes('full'))))
            .map((lt) => ({
              id: lt.id,
              userId: lt.userId || auth.currentUser?.uid || '',
              testTitle: lt.testTitle,
              testType: lt.testType,
              score: lt.score,
              totalQuestions: 180,
              percentage: lt.percentage,
              timeSpentSeconds: lt.timeSpentSeconds,
              candidateName: lt.candidateName || user?.name || 'UTME Candidate',
              userEmail: lt.userEmail || user?.email || '',
              jambScore: lt.jambScore,
            }));
        }
      } catch (e) {
        console.warn('Could not read local tests for dashboard topscore:', e);
      }

      const cloudIds = new Set(results.map((d) => d.id));
      const combined = [...results, ...localTwoHourTests.filter((lt) => !cloudIds.has(lt.id))];

      // Strictly 2-hour tests
      const allTwoHour = combined
        .filter(isTwoHourFullCbtRecord)
        .map((t) => {
          const scaledScore =
            typeof t.jambScore === 'number' && t.jambScore >= 0
              ? Math.min(400, Math.round(t.jambScore))
              : t.totalQuestions > 0
              ? Math.min(400, Math.round((t.score / t.totalQuestions) * 400))
              : 0;
          return {
            ...t,
            scaledScore,
            candidateName: formatCandidateName(t.candidateName, t.userEmail, t.userId),
          };
        })
        .sort((a, b) => {
          if (b.scaledScore !== a.scaledScore) return b.scaledScore - a.scaledScore;
          return a.timeSpentSeconds - b.timeSpentSeconds;
        });

      // High scorers (>= 200 marks out of 400)
      const highScorers = allTwoHour.filter((t) => t.scaledScore >= 200);
      const displayLeader = highScorers.length > 0 ? highScorers[0] : allTwoHour[0];

      if (displayLeader) {
        const myIndex = allTwoHour.findIndex(
          (q) => (auth.currentUser && q.userId === auth.currentUser.uid) || (user?.email && q.userEmail === user.email)
        );

        setLeaderboardTopScore({
          topScore: displayLeader.scaledScore,
          leaderName: displayLeader.candidateName,
          totalCandidates: highScorers.length > 0 ? highScorers.length : allTwoHour.length,
          timeSpentSeconds: displayLeader.timeSpentSeconds,
          userBestScore: myIndex >= 0 ? allTwoHour[myIndex].scaledScore : undefined,
          userRank: myIndex >= 0 ? myIndex + 1 : undefined,
        });
      } else {
        setLeaderboardTopScore({
          topScore: 0,
          leaderName: '',
          totalCandidates: 0,
          timeSpentSeconds: 0,
        });
      }
    };

    // Calculate immediately on mount from local storage cache
    updateStatsFromResults([]);

    let latestCloud: TestResultData[] = [];
    const unsubscribe = subscribeToAllTestResults((data) => {
      latestCloud = data;
      updateStatsFromResults(data);
    });

    const handleEvent = () => {
      updateStatsFromResults(latestCloud);
      loadStoredData();
    };
    window.addEventListener('storage', handleEvent);
    window.addEventListener('jambix_test_submitted', handleEvent);

    return () => {
      unsubscribe();
      window.removeEventListener('storage', handleEvent);
      window.removeEventListener('jambix_test_submitted', handleEvent);
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

  return (
    <div className="min-h-screen bg-[#f3f4f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Main App Layout */}
      <div className="flex-1 flex">
        {/* Left Sidebar Navigation (Desktop & Tablet only: hidden on mobile) */}
        <aside className="hidden md:flex flex-col items-center w-20 md:w-24 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 py-4 shrink-0 select-none z-20 transition-colors">
          {/* Nav Items */}
          <nav className="flex-1 flex flex-col gap-2 w-full px-2">
            {[
              { id: 'Home', icon: Home, label: 'Home' },
              { id: 'Leaderboard', icon: Trophy, label: 'Leaders' },
              { id: 'Novels', icon: BookMarked, label: 'Novels' },
              { id: 'Test', icon: Monitor, label: 'Test' },
              { id: 'Archive', icon: BookOpen, label: '1978-2026' },
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
            {/* Session Welcome Info - Spacious & Clean */}
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
                Session: <span className="text-slate-900 dark:text-white font-bold ml-1.5 sm:ml-2">study hard, {studentFirstName}</span>
              </span>
            </div>

            {/* Right Action Controls: Clean and spacious */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Live 2-Hour Leaderboard Top Score Pill */}
              {leaderboardTopScore.topScore > 0 && (
                <button
                  type="button"
                  onClick={() => handleNavClick('Leaderboard')}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-black bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800 hover:bg-amber-200 dark:hover:bg-amber-900/60 transition-colors cursor-pointer shadow-2xs"
                  title="Click to view National Live 2-Hour Leaderboard"
                >
                  <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>2-Hr Top: <strong className="text-amber-700 dark:text-amber-300">{leaderboardTopScore.topScore}/400</strong></span>
                </button>
              )}

              {/* Free Access Badge */}
              <div
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                title="100% Free JAMB Preparation Portal"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Free Access</span>
              </div>

              {/* Network Status Pill */}
              <div
                title={
                  effectiveOnline
                    ? 'Connected to internet. Real-time Firestore synchronization active.'
                    : 'Operating in Offline Mode. Tests & questions are saved locally.'
                }
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border select-none ${
                  effectiveOnline
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/80 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300'
                    : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/80 text-amber-800 dark:text-amber-300'
                }`}
              >
                {effectiveOnline ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="hidden sm:inline">Online</span>
                  </>
                ) : (
                  <>
                    <WifiOff className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Offline</span>
                  </>
                )}
              </div>

              {/* Sync Button */}
              <button
                type="button"
                onClick={handleManualSync}
                disabled={isSyncing}
                title="Sync offline data with Firebase Firestore"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  pendingSyncCount > 0
                    ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 animate-pulse'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-rose-500' : ''}`} />
                <span className="hidden sm:inline">Sync</span>
                {pendingSyncCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.2 bg-rose-600 text-white rounded-full text-[10px] font-black">
                    {pendingSyncCount}
                  </span>
                )}
              </button>

              {/* Light & Dark Mode Toggle */}
              <ThemeToggle showLabel={false} />

              {/* Log Out Button */}
              <button
                type="button"
                onClick={onLogOut}
                className="px-3.5 py-1.5 text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-full font-bold transition-colors cursor-pointer border border-rose-200 dark:border-rose-900/50"
              >
                Log Out
              </button>
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
          <main className="p-3 sm:p-6 lg:p-7 max-w-7xl mx-auto w-full space-y-6 pb-24 md:pb-8">
            {/* View Render Based on Active Nav */}
            {activeNav === 'Home' && (
              <>
                {/* In-App Offline Practice Center */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs space-y-5 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 rounded-lg">
                          <WifiOff className="w-4 h-4" />
                        </div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                          100% In-App Offline Practice Center
                        </h2>
                        <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 rounded-md text-[10px] font-black uppercase tracking-wider">
                          Zero Data Consumed
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Practice directly in this application without internet or downloading external past question files.
                      </p>
                    </div>

                    <button
                      onClick={() => handleLaunchTest('100% Offline In-App UTME CBT Practice', 'offline')}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer shrink-0"
                    >
                      <Zap className="w-3.5 h-3.5 fill-white" />
                      <span>Launch In-App Offline Practice</span>
                    </button>
                  </div>

                  {/* 3 Value Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3 transition-colors">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 rounded-lg shrink-0">
                        <WifiOff className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Direct In-App Practice</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                          Everything runs locally in your browser session. No separate installer or file download required.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3 transition-colors">
                      <div className="p-2 bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 rounded-lg shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Verified Textbook References</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                          Accurate answers with direct reference to the official accredited textbooks.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3 transition-colors">
                      <div className="p-2 bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 rounded-lg shrink-0">
                        <Monitor className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Official 8-Key Controls</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                          Authentic JAMB keyboard controls: A, B, C, D options, N (Next), P (Previous), R (Reverse), S (Submit).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Candidate Readiness & Recent Activity Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Card 1: Syllabus Mastery Status */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs flex flex-col justify-between transition-colors">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Layers className="w-4 h-4" />
                        <span>Official Syllabus Status</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        2026/2027 JAMB UTME Curriculum
                      </h4>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        All in-app test modules align strictly with the latest JAMB IBASS syllabus guidelines and recommended novel chapters.
                      </p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Coverage</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        100% Verified
                      </span>
                    </div>
                  </div>

                  {/* Card 2: HISTORY */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs flex flex-col justify-between transition-colors">
                    <div>
                      <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Clock className="w-4 h-4" />
                        <span>HISTORY</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {userTests.length > 0 ? `${userTests.length} Tests Recorded` : 'No Tests Taken Yet'}
                      </h4>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {userTests.length > 0
                          ? `Latest score: ${userTests[0].jambScore || userTests[0].score}/${userTests[0].totalQuestions} (${userTests[0].percentage}%) — Click HISTORY below to review all questions and step-by-step explanations.`
                          : 'Review past CBT examination attempts, question-by-question breakdown, and step-by-step textbook explanations.'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavClick('History')}
                      className="mt-3 w-full py-2.5 bg-rose-600 hover:bg-rose-700 active:scale-98 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
                    >
                      <Clock className="w-4 h-4" />
                      <span>HISTORY</span>
                    </button>
                  </div>
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
                      180 Questions · 120 Mins
                    </span>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                      JAMB CBT Full Simulation
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-md">
                      Comprehensive 4-subject standard UTME test (English with 60 questions plus 3 registered subjects with 40 questions each) under authentic 2-hour countdown rules.
                    </p>
                    <button
                      onClick={() => handleLaunchTest('JAMB CBT Full Simulation', 'jamb')}
                      className="mt-6 w-full sm:w-auto px-8 py-3.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white rounded-xl text-sm font-bold transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>180 QUESTIONS. 120 MINS</span>
                    </button>
                  </div>
                </div>
              </div>
            )}



            {/* View: Live National UTME Leaderboard */}
            {activeNav === 'Leaderboard' && (
              <LiveLeaderboardTab
                onLaunchExam={() => handleLaunchTest('JAMB UTME Comprehensive 180 Qs CBT Mock', 'jamb')}
                currentUserId={auth.currentUser?.uid}
                currentUserEmail={user?.email}
                currentUserName={user?.name}
              />
            )}

            {/* View: JAMB Novels Hub */}
            {activeNav === 'Novels' && (
              <NovelsTab
                onLaunchTest={handleLaunchTest}
                showToast={showToast}
              />
            )}

            {/* View: 1978-2026 Past Questions Archive */}
            {activeNav === 'Archive' && (
              <PastQuestionsVaultTab
                onLaunchTest={handleLaunchTest}
                showToast={showToast}
              />
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
                        <button
                          onClick={() => setReviewingTest(null)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline mb-1 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>View all {userTests.length} test submissions</span>
                        </button>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                          {reviewingTest.testTitle}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Submitted on {new Date(reviewingTest.createdAt).toLocaleString()} · {reviewingTest.totalQuestions} Questions
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
                            {reviewingTest.jambScore || reviewingTest.score}
                            <span className="text-xs font-semibold text-slate-500"> / {reviewingTest.totalQuestions > 100 ? 400 : reviewingTest.totalQuestions}</span>
                          </p>
                        </div>
                        <div className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-black text-sm border border-emerald-200 dark:border-emerald-800">
                          {reviewingTest.percentage}%
                        </div>
                      </div>
                    </div>

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
                            .filter((q, idx) => {
                              const studentAns = (reviewingTest.selectedAnswers || {})[idx];
                              const isCorrect = studentAns === q.answer;
                              const isUnattempted = !studentAns;

                              if (historyReviewStatus === 'Correct' && !isCorrect) return false;
                              if (historyReviewStatus === 'Incorrect' && (isCorrect || isUnattempted)) return false;
                              if (historyReviewStatus === 'Unattempted' && !isUnattempted) return false;
                              if (historyReviewSubject !== 'All' && q.subject !== historyReviewSubject) return false;

                              return true;
                            })
                            .map((q, filteredIdx) => {
                              // Find original index in reviewingTest.questions
                              const origIdx = reviewingTest.questions!.indexOf(q);
                              const studentAns = (reviewingTest.selectedAnswers || {})[origIdx];
                              const isCorrect = studentAns === q.answer;
                              const isUnattempted = !studentAns;

                              return (
                                <div
                                  key={q.id || origIdx}
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
                                      {q.year && (
                                        <span className="text-xs text-slate-400 font-medium">
                                          · UTME {q.year}
                                        </span>
                                      )}
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
                      <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                        <FileText className="w-10 h-10 text-slate-400 mx-auto" />
                        <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
                          Summary Score Saved
                        </h4>
                        <p className="text-xs text-slate-500 max-w-md mx-auto">
                          This test result was saved in summary mode ({reviewingTest.score}/{reviewingTest.totalQuestions} questions, {reviewingTest.percentage}%). All future test submissions now record full questions and answers for question-by-question review!
                        </p>
                        <button
                          onClick={() => handleLaunchTest('JAMB CBT Full Simulation', 'jamb')}
                          className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors"
                        >
                          Take a New CBT Test
                        </button>
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
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded">
                              {t.testType.toUpperCase()}
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
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                            {t.testTitle}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Raw Score: {t.score} / {t.totalQuestions} ({t.percentage}%) · UTME Projected: {t.jambScore || t.score} / 400
                          </p>
                        </div>

                        <div className="flex items-center gap-3 self-end sm:self-center">
                          <div className="text-right">
                            <span className="text-sm font-black text-rose-600 dark:text-rose-400">
                              {t.percentage}%
                            </span>
                            <p className="text-[10px] text-slate-400 font-medium">
                              {t.score >= t.totalQuestions / 2 ? 'Passed' : 'Needs Practice'}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setReviewingTest(t);
                              setHistoryReviewStatus('All');
                              setHistoryReviewSubject('All');
                            }}
                            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-rose-600 dark:hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                          >
                            <span>Review Questions</span>
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

            {/* Dashboard Footer Note */}
            <footer className="pt-8 pb-3 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
              <p>© {new Date().getFullYear()} JAMB UTME Prep Hub. All curriculum citations verified against official textbooks.</p>
              <span className="font-semibold text-slate-400 dark:text-slate-500">Official IBASS Curriculum Syllabus Standard</span>
            </footer>
          </main>
        </div>
      </div>

      {/* Native Mobile Bottom Navigation Bar (Visible only on mobile devices < md) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/90 dark:border-slate-800 px-1.5 py-1.5 flex items-center justify-around shadow-lg">
        {[
          { id: 'Home', icon: Home, label: 'Home' },
          { id: 'Test', icon: Monitor, label: 'CBT' },
          { id: 'Novels', icon: BookMarked, label: 'Novels' },
          { id: 'Archive', icon: BookOpen, label: '1978-2026' },
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

      {/* OPay Activation Paywall Modal */}
      <ActivationPaywallModal showToast={showToast} />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-slate-900 dark:bg-slate-800 text-white text-xs px-4 py-3 rounded-xl shadow-xl border border-slate-700 dark:border-slate-600 flex items-center justify-between gap-3 animate-in fade-in">
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
