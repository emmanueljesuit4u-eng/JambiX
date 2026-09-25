/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Home,
  GraduationCap,
  Monitor,
  BookOpen,
  Users,
  ShoppingBag,
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
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { JAMB_YEARS, SUBJECT_CONFIGS } from '../../data/verifiedTextbooks';
import { CbtTestModal } from './CbtTestModal';
import { UniversityConnectTab } from './UniversityConnectTab';
import { StudySyllabusTab } from './StudySyllabusTab';
import { PastQuestionsVaultTab } from './PastQuestionsVaultTab';
import { NovelsTab } from './NovelsTab';
import { ThemeToggle } from '../common/ThemeToggle';
import { auth } from '../../lib/firebase';
import {
  getUserTestResults,
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
  const [selectedVaultYear, setSelectedVaultYear] = useState<number>(2025);
  const [userTests, setUserTests] = useState<OfflineTestResult[]>([]);

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
              { id: 'Novels', icon: BookMarked, label: 'Novels' },
              { id: 'Study', icon: GraduationCap, label: 'Study' },
              { id: 'Test', icon: Monitor, label: 'Test' },
              { id: 'Archive', icon: BookOpen, label: '1978-2025' },
              { id: 'Connect', icon: Users, label: 'Connect' },
              { id: 'Shop', icon: ShoppingBag, label: 'Shop' },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.id);
                  }}
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
            <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
              {/* Network Status Pill */}
              <button
                type="button"
                onClick={toggleSimulatedOffline}
                title={
                  effectiveOnline
                    ? 'Connected to internet. Click to toggle Offline Mode.'
                    : 'Operating in Offline Mode (zero data consumed). Click to reconnect.'
                }
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  effectiveOnline
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/80 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60'
                    : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/80 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60'
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
              </button>

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

          {/* Official WhatsApp Channel Top Alert Banner */}
          <div className="bg-[#075e54] text-white px-3 sm:px-6 py-2 border-b border-emerald-700/60 shadow-xs flex flex-wrap items-center justify-between gap-2.5 text-xs select-none">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25d366]" />
              </span>
              <p className="truncate text-emerald-50 text-[11px] sm:text-xs font-medium">
                <strong className="text-white font-bold">Important UTME Updates:</strong> Join our Official WhatsApp Channel for instant JAMB timetable alerts, novel breakdowns &amp; cut-off updates!
              </p>
            </div>
            <a
              href="https://whatsapp.com/channel/0029VbDWWdJ3gvWeRGLswJ06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#25d366] hover:bg-[#20ba59] text-slate-900 font-extrabold text-[11px] sm:text-xs rounded-full shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-900" />
              <span>Join WhatsApp Channel</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

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
                {/* Single Long Horizontal Green Tab: JAMB UTME Prep Center */}
                <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-gradient-to-r from-[#047857] via-[#059669] to-[#065f46] text-white shadow-sm border border-emerald-600/40">
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-900/60 text-emerald-200 border border-emerald-500/30">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>JAMB UTME CBT Center · 1978–2025 Archive</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                        Authentic Past Questions &amp; Solutions
                      </h2>
                      <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                        Practice 48 years of past examination questions referred directly to accredited textbook topics. Available online or 100% offline with zero data consumption.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                      <button
                        onClick={() => handleLaunchTest('JAMB UTME Comprehensive 180 Qs CBT Mock', 'jamb')}
                        className="px-4 py-2.5 bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs rounded-xl shadow-xs flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-emerald-900" />
                        <span>Full Mock (180 Qs)</span>
                      </button>

                      <button
                        onClick={() => setActiveNav('Novels')}
                        className="px-4 py-2.5 bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl border border-emerald-500/40 flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <BookMarked className="w-3.5 h-3.5" />
                        <span>JAMB Novels Hub</span>
                      </button>

                      <button
                        onClick={() => setActiveNav('Archive')}
                        className="px-4 py-2.5 bg-emerald-900/80 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl border border-emerald-500/40 flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>1978–2025 Questions</span>
                      </button>

                      <button
                        onClick={() => handleLaunchTest('100% Offline In-App UTME CBT Practice', 'offline')}
                        className="px-4 py-2.5 bg-emerald-950/70 hover:bg-emerald-950 text-emerald-200 font-bold text-xs rounded-xl border border-emerald-600/40 flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <WifiOff className="w-3.5 h-3.5" />
                        <span>Offline Practice</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Take a Test Section */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        Take a test
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>Accurate answers referred directly to syllabus topics in accredited textbooks.</span>
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        showToast(
                          'CBT Options: Practice mode active with verified textbook references. Data saved offline.'
                        )
                      }
                      className="p-1 text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* 2x2 Grid of 4 JAMB/UTME-focused test cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card 1: CBT Simulator (Warm Amber / Peach) */}
                    <div
                      onClick={() => handleLaunchTest('CBT Simulator (General UTME Practice)', 'general')}
                      className="p-4 rounded-2xl bg-[#fdf6ee] dark:bg-amber-950/20 border border-[#f5dfc6] dark:border-amber-900/30 hover:border-[#e9c79f] dark:hover:border-amber-800/50 transition-all cursor-pointer flex flex-col justify-between group hover:shadow-xs"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-orange-100 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
                          <Monitor className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#451a03] dark:text-amber-200 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">
                            CBT Simulator
                          </h4>
                          <p className="mt-1 text-xs text-[#78350f] dark:text-amber-300/80 leading-snug">
                            Customized CBT environment with authentic 8-key shortcuts.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: JAMB CBT Simulator (Mint / Pale Green with JAMB seal) */}
                    <div
                      onClick={() => handleLaunchTest('JAMB CBT Simulator', 'jamb')}
                      className="p-4 rounded-2xl bg-[#eef8f3] dark:bg-emerald-950/20 border border-[#cde9db] dark:border-emerald-900/30 hover:border-[#a8dec0] dark:hover:border-emerald-800/50 transition-all cursor-pointer flex flex-col justify-between group hover:shadow-xs"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center shrink-0">
                          <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[8px] font-black border-2 border-emerald-300 shadow-2xs">
                            JAMB
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[#064e3b] dark:text-emerald-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                            JAMB CBT Simulator
                          </h4>
                          <p className="mt-1 text-xs text-[#065f46] dark:text-emerald-300/80 leading-snug">
                            Full 4-subject JAMB CBT with real UTME past questions.
                          </p>
                          <p className="mt-1.5 text-[10px] font-semibold text-emerald-800 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>Verified textbook citations</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: JAMB Novels Hub */}
                    <div
                      onClick={() => setActiveNav('Novels')}
                      className="p-4 rounded-2xl bg-[#edf2fb] dark:bg-blue-950/20 border border-[#ccdcf6] dark:border-blue-900/30 hover:border-[#acc4f0] dark:hover:border-blue-800/50 transition-all cursor-pointer flex flex-col justify-between group hover:shadow-xs"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center shrink-0">
                          <div className="w-7 h-7 rounded-full bg-[#1e3a8a] text-yellow-300 flex items-center justify-center text-[7px] font-black border border-yellow-400 shadow-2xs">
                            NOVELS
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#1e293b] dark:text-blue-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                            JAMB Novels Hub
                          </h4>
                          <p className="mt-1 text-xs text-[#334155] dark:text-blue-300/80 leading-snug">
                            Summaries &amp; characters for &ldquo;The Lekki Headmaster&rdquo;, &ldquo;The Life Changer&rdquo; &amp; &ldquo;Sweet Sixteen&rdquo;.
                          </p>
                          <p className="mt-1.5 text-[10px] font-semibold text-blue-800 dark:text-blue-300 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                            <span>Click to Open Novels Hub</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 4: JAMB 1978-2025 Past Questions Bank */}
                    <div
                      onClick={() => setActiveNav('Archive')}
                      className="p-4 rounded-2xl bg-[#f3f9ee] dark:bg-emerald-950/20 border border-[#d6ecce] dark:border-emerald-900/30 hover:border-[#b4e2a6] dark:hover:border-emerald-800/50 transition-all cursor-pointer flex flex-col justify-between group hover:shadow-xs"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center shrink-0">
                          <div className="w-7 h-7 rounded-full bg-[#15803d] text-yellow-200 flex items-center justify-center text-[7px] font-black border border-emerald-400 shadow-2xs">
                            48 YRS
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[#14532d] dark:text-emerald-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                            1978–2025 Past Questions
                          </h4>
                          <p className="mt-1 text-xs text-[#166534] dark:text-emerald-300/80 leading-snug">
                            Browse questions, answers &amp; explanations year by year for all 5 subjects.
                          </p>
                          <p className="mt-1.5 text-[10px] font-semibold text-emerald-800 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>Click to Browse Archive</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
                          Accurate answers with reference to the appropriate verified textbook pages.
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

                  {/* Quick Subject Practice Launcher */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2.5">
                      Select a Subject to Practice Offline In-App:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                      {[
                        { name: 'Use of English', code: 'ENG', badge: 'Compulsory' },
                        { name: 'Mathematics', code: 'MTH' },
                        { name: 'Physics', code: 'PHY' },
                        { name: 'Chemistry', code: 'CHM' },
                        { name: 'Biology', code: 'BIO' },
                        { name: 'Economics', code: 'ECO' },
                        { name: 'Government', code: 'GOV' },
                        { name: 'Literature in English', code: 'LIT' },
                      ].map((sub) => (
                        <button
                          key={sub.code}
                          onClick={() => handleLaunchTest(`100% In-App Offline: ${sub.name}`, 'offline', sub.name)}
                          className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition-all text-left flex items-center justify-between group cursor-pointer bg-white dark:bg-slate-800/40"
                        >
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors block truncate">
                              {sub.name}
                            </span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                              {sub.code} · Offline Mode
                            </span>
                          </div>
                          {sub.badge ? (
                            <span className="text-[9px] bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold px-1.5 py-0.5 rounded-sm">
                              {sub.badge}
                            </span>
                          ) : (
                            <Zap className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Candidate Readiness & Recent Activity Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Card 1: 300+ Target Score Routine */}
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-5 text-white shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Trophy className="w-4 h-4" />
                        <span>Daily Practice Goal</span>
                      </div>
                      <h4 className="text-sm font-extrabold text-white">
                        300+ Target Score Routine
                      </h4>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        Solve at least 40 UTME past questions daily in-app to build speed, accuracy, and 8-key muscle memory.
                      </p>
                    </div>
                    <button
                      onClick={() => handleLaunchTest('JAMB CBT Simulator', 'jamb')}
                      className="mt-4 w-full py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs"
                    >
                      Start 40-Question Sprint
                    </button>
                  </div>

                  {/* Card 2: Syllabus Mastery Status */}
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

                  {/* Card 3: Recent CBT Scores */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs flex flex-col justify-between transition-colors">
                    <div>
                      <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <BarChart3 className="w-4 h-4" />
                        <span>Recent CBT Results</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {userTests.length > 0 ? `${userTests.length} Tests Recorded` : 'No Tests Taken Yet'}
                      </h4>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {userTests.length > 0
                          ? `Latest score: ${userTests[0].score}/${userTests[0].totalQuestions} (${userTests[0].percentage}%) - Saved locally.`
                          : 'Take your first in-app offline practice test to evaluate your baseline score.'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleLaunchTest('JAMB 15-Year Past Questions Bank', 'archive')}
                      className="mt-3 w-full py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      {userTests.length > 0 ? 'Review & Practice Again' : 'Take Diagnostic Test'}
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

            {/* View: Study Section - Full Updated JAMB Syllabus */}
            {activeNav === 'Study' && (
              <StudySyllabusTab
                onLaunchTest={handleLaunchTest}
                showToast={showToast}
              />
            )}

            {/* View: Test Section */}
            {activeNav === 'Test' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-6 transition-colors">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                      CBT Examination &amp; Mock Room
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Simulate real JAMB examination conditions with authentic 8-key shortcuts and timer.
                    </p>
                  </div>
                  <button
                    onClick={() => handleLaunchTest('100% In-App Offline Full UTME Mock', 'offline')}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Launch Full Mock (180 Questions)
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'JAMB CBT Full Simulation', time: '120 Mins', type: 'jamb', questions: '180 Questions' },
                    { title: '40-Question Sprint Drill', time: '30 Mins', type: 'general', questions: '40 Questions' },
                    { title: 'Use of English & Novel Sprint', time: '45 Mins', type: 'novel', questions: '60 Questions' },
                    { title: '15-Year Past Questions Bank', time: '60 Mins', type: 'archive', questions: '50 Questions' },
                    { title: 'Sciences Speed Drill (MTH, PHY, CHM)', time: '60 Mins', type: 'general', questions: '50 Questions' },
                    { title: '100% Offline In-App UTME Mock', time: '120 Mins', type: 'offline', questions: '180 Questions' },
                  ].map((test) => (
                    <div
                      key={test.title}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:border-rose-400 dark:hover:border-rose-500 flex flex-col justify-between transition-all"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                          {test.questions} · {test.time}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                          {test.title}
                        </h4>
                      </div>
                      <button
                        onClick={() => handleLaunchTest(test.title, test.type)}
                        className="mt-4 w-full py-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-rose-600 dark:hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                      >
                        Start Test
                      </button>
                    </div>
                  ))}
                </div>

                {/* 1978 - 2025 Year-by-Year Past Questions Explorer */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-rose-600" />
                        <span>JAMB UTME Past Questions Year-by-Year Vault (1978 – 2025)</span>
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Select any year from 1978 to 2025 to take authentic full 180-question UTME CBT or subject-by-subject drills.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        onClick={() => setActiveNav('Archive')}
                        className="px-3.5 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Browse Questions &amp; Solutions</span>
                      </button>
                      <button
                        onClick={() => handleLaunchTest(`Full JAMB UTME ${selectedVaultYear} CBT Exam`, 'jamb', undefined, selectedVaultYear)}
                        className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 shadow-xs"
                      >
                        <Zap className="w-3.5 h-3.5 fill-current" />
                        <span>Launch Full 180 Qs for {selectedVaultYear}</span>
                      </button>
                    </div>
                  </div>

                  {/* Year Selection Carousel / Grid */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Active Examination Year: <span className="text-rose-600 dark:text-rose-400 font-black text-sm">UTME {selectedVaultYear}</span>
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                        All 48 UTME Years Fully Accessible
                      </span>
                    </div>

                    {/* Quick Year Selector Pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                      {JAMB_YEARS.map((yr) => (
                        <button
                          key={yr}
                          onClick={() => setSelectedVaultYear(yr)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all cursor-pointer ${
                            selectedVaultYear === yr
                              ? 'bg-rose-600 text-white shadow-xs scale-105'
                              : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {yr}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 5 Subjects Cards for Selected Year */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {[
                      {
                        name: 'Use of English',
                        questions: 60,
                        book: 'A-Z OF ENGLISH',
                        author: 'B.O. Dele Ashade',
                        code: 'eng',
                        badge: 'Compulsory · 60 Qs',
                      },
                      {
                        name: 'Mathematics',
                        questions: 40,
                        book: 'HIDDEN FACTS IN MATHEMATICS',
                        author: 'M.A. Otumudia',
                        code: 'math',
                        badge: '40 Questions',
                      },
                      {
                        name: 'Physics',
                        questions: 40,
                        book: 'NEW SCHOOL PHYSICS',
                        author: 'M.W. Anyakoha, Ph.D.',
                        code: 'phys',
                        badge: '40 Questions',
                      },
                      {
                        name: 'Chemistry',
                        questions: 40,
                        book: 'NEW SCHOOL CHEMISTRY',
                        author: 'Osei Yaw Ababio',
                        code: 'chem',
                        badge: '40 Questions',
                      },
                      {
                        name: 'Biology',
                        questions: 40,
                        book: 'MODERN BIOLOGY',
                        author: 'Sarojini T. Ramalingam, Ph.D.',
                        code: 'bio',
                        badge: '40 Questions',
                      },
                    ].map((sub) => (
                      <div
                        key={sub.name}
                        className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 flex flex-col justify-between shadow-2xs hover:border-emerald-400 transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                              {sub.badge}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400">
                              {selectedVaultYear}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-2">
                            {sub.name}
                          </h4>
                          <div className="mt-1.5 p-1.5 bg-slate-50 dark:bg-slate-900/60 rounded-lg text-[10px] space-y-0.5">
                            <p className="font-bold text-emerald-800 dark:text-emerald-300 truncate">
                              Ref: {sub.book}
                            </p>
                            <p className="text-slate-500 truncate">{sub.author}</p>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            handleLaunchTest(
                              `JAMB ${selectedVaultYear} ${sub.name} Practice`,
                              'archive',
                              sub.name,
                              selectedVaultYear
                            )
                          }
                          className="mt-3 w-full py-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                        >
                          Practice {sub.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}



            {/* View: Connect / Study Groups */}
            {activeNav === 'Archive' && (
              <PastQuestionsVaultTab
                onLaunchTest={handleLaunchTest}
                showToast={showToast}
              />
            )}

            {/* View: Connect / Study Groups */}
            {activeNav === 'Connect' && (
              <UniversityConnectTab showToast={showToast} />
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

            {/* Upper Footer: Official WhatsApp Channel Banner */}
            <div className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-r from-[#075e54] via-[#0f766e] to-[#064e3b] text-white p-5 sm:p-7 shadow-xs border border-emerald-600/40 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/70 text-emerald-200 border border-emerald-400/30">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                    <span>Official JAMB WhatsApp Channel</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    Join Our WhatsApp Channel for Important Updates
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                    Never miss critical announcements: exam dates, venue accreditation, novel analyses (&ldquo;The Lekki Headmaster&rdquo; &amp; &ldquo;The Life Changer&rdquo;), daily past question walkthroughs, and instant university admission cut-off releases.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <a
                    href="https://whatsapp.com/channel/0029VbDWWdJ3gvWeRGLswJ06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#25d366] hover:bg-[#20ba59] text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-900" />
                    <span>Join WhatsApp Channel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Dashboard Footer Note */}
            <footer className="pt-6 pb-2 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
              <p>© {new Date().getFullYear()} JAMB UTME Prep Hub. All curriculum citations verified against official textbooks.</p>
              <a
                href="https://whatsapp.com/channel/0029VbDWWdJ3gvWeRGLswJ06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                <span>Join Official WhatsApp Channel for Updates</span>
              </a>
            </footer>
          </main>
        </div>
      </div>

      {/* Native Mobile Bottom Navigation Bar (Visible only on mobile devices < md) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/90 dark:border-slate-800 px-2 py-1.5 flex items-center justify-around shadow-lg">
        {[
          { id: 'Home', icon: Home, label: 'Home' },
          { id: 'Novels', icon: BookMarked, label: 'Novels' },
          { id: 'Study', icon: GraduationCap, label: 'Study' },
          { id: 'Test', icon: Monitor, label: 'CBT Test' },
          { id: 'Archive', icon: BookOpen, label: '1978-2025' },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveNav(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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
      />

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
