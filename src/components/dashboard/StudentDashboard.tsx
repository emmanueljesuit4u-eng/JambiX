/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Home,
  GraduationCap,
  Monitor,
  MessageSquare,
  BookOpen,
  Users,
  ShoppingBag,
  Search,
  Plus,
  Bell,
  MoreHorizontal,
  LogOut,
  Laptop,
  CheckCircle2,
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
  ThumbsUp,
  AlertTriangle,
  Bookmark,
  Share2,
  HelpCircle,
} from 'lucide-react';
import { CbtTestModal } from './CbtTestModal';
import { CreatePostModal } from './CreatePostModal';
import { ThemeToggle } from '../common/ThemeToggle';
import { auth } from '../../lib/firebase';
import {
  createFeedPost,
  likeFeedPost,
  getUserTestResults,
  TestResultData,
  FeedPostData,
} from '../../lib/firestoreService';
import {
  saveLocalTestResult,
  getLocalTestResults,
  saveLocalPost,
  getLocalPosts,
  OfflineTestResult,
  OfflinePostItem,
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

  const [searchQuery, setSearchQuery] = useState('');
  const [isCbtModalOpen, setIsCbtModalOpen] = useState(false);
  const [activeTest, setActiveTest] = useState({ title: '', type: '' });
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [feedFilter, setFeedFilter] = useState('All');

  // Candidate name & initials
  const displayName = user.name || (user.email ? user.email.split('@')[0] : 'Candidate');
  const initials = displayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase() || 'EJ';

  // Feed items state
  interface FeedItem {
    id: string | number;
    author: string;
    isVerified: boolean;
    time: string;
    category: string;
    title: string;
    content: string;
    likes: number;
    comments: number;
    isLiked: boolean;
    isLocal?: boolean;
  }

  const defaultPosts: FeedItem[] = [
    {
      id: 'default_1',
      author: 'JambiX Admissions Desk',
      isVerified: true,
      time: '2 hours ago',
      category: 'Official UTME Alert',
      title: 'JAMB 2026/2027 Accreditation of CBT Centres & Registration Timelines',
      content:
        'The Joint Admissions and Matriculation Board (JAMB) has concluded the final technical inspection of all accredited Computer-Based Test (CBT) centres across Nigeria. Candidates are advised to prepare their National Identification Number (NIN) ahead of official profile code creation.',
      likes: 142,
      comments: 38,
      isLiked: false,
    },
    {
      id: 'default_2',
      author: 'Chukwudi Adeleke',
      isVerified: false,
      time: '4 hours ago',
      category: 'Use of English / Novel',
      title: 'Analysis of Key Characters in "The Life Changer" - Quick Revision Summary',
      content:
        'For everyone taking Use of English this year: make sure you pay close attention to Chapter 4 regarding the campus interaction between Salma and Habib. There are at least 3 likely questions regarding the university disciplinary committee proceedings!',
      likes: 89,
      comments: 24,
      isLiked: true,
    },
    {
      id: 'default_3',
      author: 'Dr. A. O. Bello (Physics Lead)',
      isVerified: true,
      time: 'Yesterday',
      category: 'Physics & Math Drills',
      title: 'Top 10 Repeated Physics Formulas in JAMB Past Questions (2015 - 2025)',
      content:
        'Mastering dimensional analysis, electric potential V = W/Q, and projectile maximum range R = u²sin(2θ)/g gives you an immediate 15+ score boost. We have updated 500+ practice questions in the JAMB CBT Simulator below.',
      likes: 215,
      comments: 57,
      isLiked: false,
    },
  ];

  const [feedPosts, setFeedPosts] = useState<FeedItem[]>(defaultPosts);
  const [userTests, setUserTests] = useState<OfflineTestResult[]>([]);

  // Load offline data first, then merge cloud data if online
  const loadStoredData = () => {
    // 1. Load local tests
    const localTests = getLocalTestResults(auth.currentUser?.uid);
    if (localTests.length > 0) {
      setUserTests(localTests);
    }

    // 2. Load local posts
    const localPosts = getLocalPosts();
    if (localPosts.length > 0) {
      const formattedLocal: FeedItem[] = localPosts.map((p) => ({
        id: p.id,
        author: p.authorName,
        isVerified: false,
        time: 'Saved offline',
        category: p.tag,
        title: p.title,
        content: p.content,
        likes: p.likesCount || 0,
        comments: p.commentsCount || 0,
        isLiked: false,
        isLocal: true,
      }));

      setFeedPosts((prev) => {
        const existingIds = new Set(prev.map((i) => String(i.id)));
        const newOnes = formattedLocal.filter((f) => !existingIds.has(String(f.id)));
        return [...newOnes, ...prev];
      });
    }

    // 3. If online & user logged in, fetch from Firestore cloud
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

  const handleLaunchTest = (title: string, type: string) => {
    setActiveTest({ title, type });
    setIsCbtModalOpen(true);
  };

  const handleAddPost = async (newPost: { title: string; content: string; subject: string }) => {
    const tempId = `post_${Date.now()}`;
    const newFeedItem: FeedItem = {
      id: tempId,
      author: displayName,
      isVerified: false,
      time: 'Just now',
      category: newPost.subject,
      title: newPost.title,
      content: newPost.content,
      likes: 0,
      comments: 0,
      isLiked: false,
      isLocal: true,
    };

    setFeedPosts((prev) => [newFeedItem, ...prev]);

    // Save to local offline storage immediately
    saveLocalPost({
      id: tempId,
      authorId: auth.currentUser?.uid,
      authorName: displayName,
      tag: newPost.subject,
      title: newPost.title,
      content: newPost.content,
      likesCount: 0,
      commentsCount: 0,
      syncedToCloud: false,
    });

    if (effectiveOnline && auth.currentUser) {
      try {
        await createFeedPost({
          id: tempId,
          authorId: auth.currentUser.uid,
          authorName: displayName,
          tag: newPost.subject,
          title: newPost.title,
          content: newPost.content,
        });
        showToast('✓ Post published and synced to cloud!');
      } catch (err) {
        console.warn('Network issue; post saved offline:', err);
        showToast('✓ Post saved offline. Will auto-sync when online.');
      }
    } else {
      showToast('✓ Post saved offline on this device (Zero data consumed).');
    }
  };

  const handleLike = async (id: string | number) => {
    setFeedPosts((prev) =>
      prev.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          };
        }
        return post;
      })
    );

    if (effectiveOnline && typeof id === 'string' && !id.startsWith('default_') && auth.currentUser) {
      try {
        await likeFeedPost(id);
      } catch (err) {
        console.warn('Error updating like count in Firestore:', err);
      }
    }
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

  // Filtered feed
  const filteredPosts = feedPosts.filter((p) => {
    if (feedFilter === 'All') return true;
    if (feedFilter === 'Novel') return p.category.includes('English') || p.category.includes('Novel');
    if (feedFilter === 'Sciences') return p.category.includes('Physics') || p.category.includes('Math') || p.category.includes('Chemistry') || p.category.includes('Biology');
    if (feedFilter === 'Official') return p.isVerified;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f3f4f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Main App Layout */}
      <div className="flex-1 flex">
        {/* Left Sidebar Navigation */}
        <aside className="w-16 sm:w-20 md:w-24 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 flex flex-col items-center py-4 shrink-0 select-none z-20 transition-colors">
          {/* Logo at Top Left */}
          <div className="mb-6 flex flex-col items-center cursor-pointer" onClick={() => setActiveNav('Home')}>
            <div className="flex items-center gap-0.5">
              <span className="font-extrabold text-xl tracking-tight text-emerald-700 dark:text-emerald-400 font-serif">
                Jambi
              </span>
              <span className="text-sm font-black text-white bg-emerald-600 dark:bg-emerald-500 px-1 py-0.5 rounded-sm shadow-2xs">
                X
              </span>
            </div>
            <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium tracking-tight">.ng</span>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 flex flex-col gap-2.5 w-full px-2">
            {[
              { id: 'Home', icon: Home, label: 'Home' },
              { id: 'Study', icon: GraduationCap, label: 'Study' },
              { id: 'Test', icon: Monitor, label: 'Test' },
              { id: 'Chat', icon: MessageSquare, label: 'Chat' },
              { id: 'News', icon: BookOpen, label: 'News' },
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
          {/* Top Bar (Search, Network Status, Theme Toggle, Create +, Notification, Profile) */}
          <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 sm:gap-4 transition-colors">
            {/* Search Bar */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search past questions, universities, syllabus topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-full placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-800 dark:text-slate-100 focus:bg-white dark:focus:bg-slate-800 focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                />
              </div>
            </div>

            {/* Right Action Controls */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Network Status Pill (Automatic Online/Offline detector + Simulator toggle) */}
              <div
                onClick={toggleSimulatedOffline}
                title={
                  effectiveOnline
                    ? 'Connected to internet. Click to toggle Offline Simulation Mode.'
                    : 'Operating in Offline Mode (zero data consumed). Click to simulate reconnect.'
                }
                className={`hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                  effectiveOnline
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/80 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60'
                    : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/80 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60'
                }`}
              >
                {effectiveOnline ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Online · Cloud Synced</span>
                  </>
                ) : (
                  <>
                    <WifiOff className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>⚡ Offline Mode Active</span>
                  </>
                )}
              </div>

              {/* Sync Button (if pending items or on demand) */}
              <button
                type="button"
                onClick={handleManualSync}
                disabled={isSyncing}
                title="Sync offline data with Firebase Firestore"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
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

              {/* Create + Button */}
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="px-3.5 py-1.5 bg-[#1e293b] hover:bg-[#0f172a] dark:bg-rose-600 dark:hover:bg-rose-700 text-white text-xs font-semibold rounded-full flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
              >
                <span>Create</span>
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              {/* Notification Bell */}
              <button
                className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
                title="Notifications"
                onClick={() => showToast('All notifications are current. Offline mode active.')}
              >
                <Bell className="w-4.5 h-4.5 stroke-[1.8]" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-600 rounded-full" />
              </button>

              {/* Light & Dark Mode Toggle in Top Right of Dashboard */}
              <ThemeToggle showLabel={false} />

              {/* Profile Avatar Circle with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:ring-2 hover:ring-rose-500 flex items-center justify-center text-xs font-bold transition-all cursor-pointer"
                  title="Candidate Account"
                >
                  {initials}
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-40 animate-in fade-in transition-colors">
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{displayName}</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {user.email || 'JAMB Candidate 2026'}
                      </p>
                      <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 rounded text-[10px] font-bold">
                        <Check className="w-3 h-3" />
                        <span>Data Saved Automatically</span>
                      </div>
                    </div>

                    <div className="p-2 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between px-2 py-1 text-xs text-slate-600 dark:text-slate-300">
                        <span>Theme Preference</span>
                        <ThemeToggle className="scale-85 origin-right" />
                      </div>
                      <button
                        onClick={() => {
                          toggleSimulatedOffline();
                          setIsProfileMenuOpen(false);
                          showToast(
                            effectiveOnline
                              ? 'Offline mode enabled! Zero data will be consumed.'
                              : 'Online mode enabled! Connecting to cloud.'
                          );
                        }}
                        className="w-full text-left px-2 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <WifiOff className="w-3.5 h-3.5 text-amber-500" />
                          <span>Toggle Offline Mode</span>
                        </span>
                        <span className="text-[10px] font-bold text-amber-600">
                          {effectiveOnline ? 'Turn On' : 'Turn Off'}
                        </span>
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        handleLaunchTest('JAMB CBT Simulator', 'jamb');
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <Monitor className="w-3.5 h-3.5 text-slate-400" />
                      <span>Take a CBT Mock</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onLogOut();
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-2 font-semibold cursor-pointer border-t border-slate-100 dark:border-slate-800 mt-1 transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out to Login Page</span>
                    </button>
                  </div>
                )}
              </div>
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
                    Network unavailable or turned off. All your test submissions, answers, scores, and discussion posts are safely saved to your device and will auto-sync when data returns.
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
          <main className="p-4 sm:p-6 lg:p-7 max-w-7xl mx-auto w-full space-y-6">
            {/* View Render Based on Active Nav */}
            {activeNav === 'Home' && (
              <>
                {/* 3 Promotional Top Banners */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Banner 1: JAMB CBT 2027 */}
                  <div
                    onClick={() => handleLaunchTest('JAMB CBT 2027 Comprehensive Simulator', 'jamb')}
                    className="relative rounded-2xl overflow-hidden p-4 sm:p-5 bg-gradient-to-br from-[#f59e0b] via-[#d97706] to-[#b45309] text-white shadow-sm flex flex-col justify-between min-h-[120px] group cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="absolute inset-0 opacity-15 pointer-events-none text-white font-mono text-[10px] p-2 leading-relaxed select-none">
                      1. y = mx + c · E = mc² · log₁₀(x) = 2.4 · 2x² - 4x + 1 = 0 · (2.) F = ma · λ = h/p · sin²θ + cos²θ = 1
                    </div>

                    <div className="relative z-10">
                      <div className="inline-block bg-[#ea580c] px-3 py-0.5 rounded-full text-[11px] font-black tracking-wide uppercase shadow-2xs">
                        Get Ready!
                      </div>
                      <h3 className="mt-2 text-2xl font-black tracking-tight text-white drop-shadow-xs">
                        JAMB CBT 2027
                      </h3>
                    </div>

                    <div className="relative z-10 pt-2 text-[11px] font-semibold text-amber-100/90 tracking-wide border-t border-white/20 mt-2">
                      Candidates · Schools · Centres · Resellers
                    </div>
                  </div>

                  {/* Banner 2: JambiX CBT CHALLENGE */}
                  <div
                    onClick={() =>
                      showToast(
                        'JambiX 2026 CBT Challenge Season 1 registration is open! Prize ₦1,000,000.'
                      )
                    }
                    className="relative rounded-2xl overflow-hidden p-4 sm:p-5 bg-gradient-to-r from-[#059669] via-[#047857] to-[#065f46] text-white shadow-sm flex items-center justify-between min-h-[120px] group cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="relative z-10 max-w-[65%]">
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-xs tracking-tight uppercase text-emerald-200">
                          JAMBIX CBT
                        </span>
                        <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded-sm">
                          Season 1
                        </span>
                      </div>
                      <h3 className="text-xl font-black tracking-tight text-white leading-tight mt-1">
                        CHALLENGE
                      </h3>
                      <div className="mt-2 inline-flex items-center gap-1 bg-amber-400 text-slate-900 px-2.5 py-1 rounded-md text-[11px] font-black shadow-xs">
                        <Trophy className="w-3.5 h-3.5 fill-current text-slate-900" />
                        <span>PRIZE ₦1,000,000</span>
                      </div>
                      <div className="text-[10px] text-emerald-100/80 font-medium mt-1">
                        Click For Details · Season 1
                      </div>
                    </div>

                    <div className="relative z-10 shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white/10 ring-2 ring-white/30 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
                        alt="Nigerian UTME Scholar"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Banner 3: In-App Offline Practice */}
                  <div
                    onClick={() => handleLaunchTest('100% Offline In-App UTME CBT Practice', 'offline')}
                    className="relative rounded-2xl overflow-hidden p-4 sm:p-5 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#1e1b4b] text-white shadow-sm flex items-center justify-between min-h-[120px] group cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="relative z-10 max-w-[70%]">
                      <div className="flex items-center gap-1.5 text-xs font-black tracking-wide text-cyan-400">
                        <WifiOff className="w-3.5 h-3.5 text-cyan-400" />
                        <span>100% IN-APP OFFLINE</span>
                      </div>
                      <h3 className="text-base font-extrabold text-white leading-snug mt-0.5">
                        Practice Directly In-App <span className="text-cyan-200">No Download Needed</span>
                      </h3>
                      <p className="text-[10px] text-cyan-100/90 mt-1 line-clamp-1">
                        Accurate answers with reference to verified textbook pages.
                      </p>
                      <div className="mt-2 inline-flex items-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-2.5 py-1 rounded text-[10px] font-black uppercase shadow-xs">
                        <Zap className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Start Offline CBT Practice Now</span>
                      </div>
                    </div>

                    <div className="relative z-10 text-cyan-300/80 shrink-0">
                      <Laptop className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md stroke-[1.2]" />
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
                        <span>Accurate answers with reference to the appropriate verified textbook pages.</span>
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

                    {/* Card 3: JAMB Novel & English Masterclass */}
                    <div
                      onClick={() => handleLaunchTest('JAMB Novel: "The Life Changer" & English Drills', 'novel')}
                      className="p-4 rounded-2xl bg-[#edf2fb] dark:bg-blue-950/20 border border-[#ccdcf6] dark:border-blue-900/30 hover:border-[#acc4f0] dark:hover:border-blue-800/50 transition-all cursor-pointer flex flex-col justify-between group hover:shadow-xs"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center shrink-0">
                          <div className="w-7 h-7 rounded-full bg-[#1e3a8a] text-yellow-300 flex items-center justify-center text-[7px] font-black border border-yellow-400 shadow-2xs">
                            NOVEL
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#1e293b] dark:text-blue-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                            JAMB Novel &amp; English
                          </h4>
                          <p className="mt-1 text-xs text-[#334155] dark:text-blue-300/80 leading-snug">
                            Master &ldquo;The Life Changer&rdquo; novel &amp; comprehension drills.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 4: JAMB Past Questions Bank */}
                    <div
                      onClick={() => handleLaunchTest('JAMB 15-Year Past Questions Bank', 'archive')}
                      className="p-4 rounded-2xl bg-[#f3f9ee] dark:bg-emerald-950/20 border border-[#d6ecce] dark:border-emerald-900/30 hover:border-[#b4e2a6] dark:hover:border-emerald-800/50 transition-all cursor-pointer flex flex-col justify-between group hover:shadow-xs"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center shrink-0">
                          <div className="w-7 h-7 rounded-full bg-[#15803d] text-yellow-200 flex items-center justify-center text-[7px] font-black border border-emerald-400 shadow-2xs">
                            15 YRS
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[#14532d] dark:text-emerald-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                            JAMB Past Questions Bank
                          </h4>
                          <p className="mt-1 text-xs text-[#166534] dark:text-emerald-300/80 leading-snug">
                            Verified UTME past questions from 2010 to 2025 by topic.
                          </p>
                          <p className="mt-1.5 text-[10px] font-semibold text-emerald-800 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>Verified textbook citations</span>
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
                          onClick={() => handleLaunchTest(`100% In-App Offline: ${sub.name}`, 'offline')}
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

                {/* Candidate Community Feed Discussions Section */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs space-y-4 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        UTME Candidate Discussions &amp; Syllabus Feeds
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Peer study tips, verified explanations, and past questions discussions (Works 100% offline).
                      </p>
                    </div>

                    {/* Filter buttons */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                      {['All', 'Novel', 'Sciences', 'Official'].map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setFeedFilter(filter)}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                            feedFilter === filter
                              ? 'bg-rose-600 text-white shadow-2xs'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Feed Items List */}
                  <div className="space-y-3.5">
                    {filteredPosts.map((post) => (
                      <div
                        key={post.id}
                        className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                              {post.author}
                            </span>
                            {post.isVerified && (
                              <span className="px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 rounded text-[9px] font-black uppercase">
                                Verified
                              </span>
                            )}
                            {post.isLocal && (
                              <span className="px-1.5 py-0.2 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 rounded text-[9px] font-bold">
                                Local
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                            {post.time}
                          </span>
                        </div>

                        <div className="mb-2">
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300 mb-1.5">
                            {post.category}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                            {post.title}
                          </h4>
                          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            {post.content}
                          </p>
                        </div>

                        <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-700/60">
                          <button
                            onClick={() => handleLike(post.id)}
                            className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                              post.isLiked
                                ? 'text-rose-600 dark:text-rose-400 font-bold'
                                : 'hover:text-slate-900 dark:hover:text-white'
                            }`}
                          >
                            <ThumbsUp className={`w-3.5 h-3.5 ${post.isLiked ? 'fill-current' : ''}`} />
                            <span>{post.likes} Likes</span>
                          </button>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>{post.comments} Comments</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* View: Study Section */}
            {activeNav === 'Study' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-6 transition-colors">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                      Syllabus Study &amp; Textbook Drills
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Topic-by-topic breakdowns aligned with verified textbook chapters. Available 100% offline.
                    </p>
                  </div>
                  <button
                    onClick={() => handleLaunchTest('Syllabus Mastery Diagnostic', 'jamb')}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Take Topic Quiz
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      subject: 'Use of English',
                      topics: ['Comprehension & Summary', 'Lexis and Structure', 'Novel: The Life Changer', 'Oral Forms & Phonetics'],
                      textbook: 'The Invisible Teacher / The Life Changer (Khadija Abubakar Jalli)',
                    },
                    {
                      subject: 'Mathematics',
                      topics: ['Algebra & Quadratic Equations', 'Calculus & Limits', 'Trigonometry & Bearing', 'Statistics & Probability'],
                      textbook: 'New General Mathematics for Senior Secondary Schools (Book 3)',
                    },
                    {
                      subject: 'Physics',
                      topics: ['Equilibrium of Forces & Mechanics', 'Waves & Optics', 'Current Electricity & Magnetism', 'Nuclear Physics & Quanta'],
                      textbook: 'Senior Secondary Physics (PN Okeke & MW Anyakoha)',
                    },
                    {
                      subject: 'Chemistry',
                      topics: ['Atomic Structure & Periodic Table', 'Chemical Energetics & Kinetics', 'Hydrocarbons & Organic Chemistry', 'Acids, Bases & Salts'],
                      textbook: 'New School Chemistry for Senior Secondary Schools (Osei Yaw Ababio)',
                    },
                  ].map((sub) => (
                    <div
                      key={sub.subject}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2.5 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{sub.subject}</h4>
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                          Syllabus Verified
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                        {sub.topics.map((t) => (
                          <div key={t} className="flex items-center gap-1.5 text-[11px]">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-[10px] text-slate-500 dark:text-slate-400">
                        <strong>Verified Textbook:</strong> {sub.textbook}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
              </div>
            )}

            {/* View: Chat / Community */}
            {activeNav === 'Chat' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-4 transition-colors">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      UTME Study Groups &amp; Peer Discussions
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Connect with students aiming for your target institution. Saves offline.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Post Question</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {feedPosts.map((post) => (
                    <div
                      key={post.id}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                        <span className="font-bold text-slate-900 dark:text-white">{post.author}</span>
                        <span>{post.time}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{post.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300">{post.content}</p>
                      <div className="mt-3 flex items-center gap-4 text-xs">
                        <button
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-1 text-rose-600 font-semibold cursor-pointer"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{post.likes}</span>
                        </button>
                        <span className="text-slate-500 dark:text-slate-400">{post.comments} comments</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View: News Section */}
            {activeNav === 'News' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-4 transition-colors">
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Official JAMB 2026/2027 News Desk
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      date: 'September 2026',
                      title: 'JAMB IBASS Syllabus Verification',
                      desc: 'Official list of accredited textbooks and examination regulations published for all 23 subject combinations.',
                    },
                    {
                      date: 'August 2026',
                      title: 'CBT Centre Re-accreditation Concluded',
                      desc: 'Over 750 high-capacity CBT examination venues confirmed across the 36 states and FCT.',
                    },
                    {
                      date: 'July 2026',
                      title: 'Profile Code Creation Guidelines via NIN',
                      desc: 'Step-by-step instructions on generating profile codes via 55019 or 66019 with zero network errors.',
                    },
                  ].map((news) => (
                    <div
                      key={news.title}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40"
                    >
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                        {news.date}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{news.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{news.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View: Connect / Study Groups */}
            {activeNav === 'Connect' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-4 transition-colors">
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  University Aspirant Study Squads
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'UNILAG 300+ Aspirants', members: '1,420 Candidates', focus: 'Law, Medicine, Accounting' },
                    { name: 'UI Premier Scholars Club', members: '980 Candidates', focus: 'Pharmacy, Engineering, Sciences' },
                    { name: 'OAU Excellence Network', members: '860 Candidates', focus: 'Nursing, Computer Science' },
                    { name: 'UNIBEN & FUTO STEM Drillers', members: '740 Candidates', focus: 'Engineering, Geology, Math' },
                  ].map((group) => (
                    <div
                      key={group.name}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{group.name}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{group.members} · {group.focus}</p>
                      </div>
                      <button
                        onClick={() => showToast(`Joined ${group.name}! Group notes cached offline.`)}
                        className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold cursor-pointer"
                      >
                        Join
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View: Shop / Materials */}
            {activeNav === 'Shop' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-4 transition-colors">
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Recommended UTME Textbooks &amp; Past Packs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { title: 'The Invisible Teacher (New Edition)', author: 'Dele Ashade', badge: 'English Compulsory' },
                    { title: 'New General Mathematics (Book 3)', author: 'Channon, Smith & Head', badge: 'Mathematics' },
                    { title: 'Senior Secondary Physics', author: 'PN Okeke & Anyakoha', badge: 'Physics' },
                    { title: 'New School Chemistry', author: 'Osei Yaw Ababio', badge: 'Chemistry' },
                    { title: 'Modern Biology for SSS', author: 'Sarojini T. Ramalingam', badge: 'Biology' },
                    { title: '15-Year UTME Past Questions Master Pack', author: 'JambiX Editorial Team', badge: 'All Subjects' },
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

      {/* CBT Test Modal */}
      <CbtTestModal
        isOpen={isCbtModalOpen}
        onClose={() => {
          setIsCbtModalOpen(false);
          loadStoredData();
        }}
        testTitle={activeTest.title}
        testType={activeTest.type}
      />

      {/* Create Discussion Modal */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onAddPost={handleAddPost}
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
