/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Home,
  GraduationCap,
  Monitor,
  MessageSquare,
  BookOpen,
  Users,
  ShoppingBag,
  ArrowDownToLine,
  Search,
  Plus,
  Bell,
  MoreHorizontal,
  SlidersHorizontal,
  Calendar,
  Heart,
  Share2,
  LogOut,
  Laptop,
  CheckCircle2,
  Trophy,
  ExternalLink,
} from 'lucide-react';
import { CbtTestModal } from './CbtTestModal';
import { CreatePostModal } from './CreatePostModal';

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
  const [activeNav, setActiveNav] = useState('Home');
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
  const [feedPosts, setFeedPosts] = useState([
    {
      id: 1,
      author: 'JAMBix Admissions Desk',
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
      id: 2,
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
      id: 3,
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
  ]);

  const handleLaunchTest = (title: string, type: string) => {
    setActiveTest({ title, type });
    setIsCbtModalOpen(true);
  };

  const handleAddPost = (newPost: { title: string; content: string; subject: string }) => {
    setFeedPosts([
      {
        id: Date.now(),
        author: displayName,
        isVerified: false,
        time: 'Just now',
        category: newPost.subject,
        title: newPost.title,
        content: newPost.content,
        likes: 0,
        comments: 0,
        isLiked: false,
      },
      ...feedPosts,
    ]);
  };

  const handleLike = (id: number) => {
    setFeedPosts(
      feedPosts.map((post) => {
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
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-800 flex flex-col font-sans">
      {/* Main App Layout */}
      <div className="flex-1 flex">
        {/* Left Sidebar Navigation (Matches screenshot structure exactly) */}
        <aside className="w-16 sm:w-20 md:w-24 bg-white border-r border-slate-200/80 flex flex-col items-center py-4 shrink-0 select-none z-20">
          {/* Logo at Top Left */}
          <div className="mb-6 flex flex-col items-center">
            <div className="flex items-center gap-0.5">
              <span className="font-extrabold text-xl tracking-tight text-rose-600 font-serif">
                JAMB
              </span>
              <span className="text-sm font-black text-slate-900 bg-rose-50 px-1 py-0.5 rounded-sm">
                ix
              </span>
            </div>
            <span className="text-[9px] text-slate-400 font-medium tracking-tight">.ng</span>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 flex flex-col gap-3 w-full px-2">
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
                    if (item.id === 'Test') {
                      handleLaunchTest('JAMB CBT Simulator', 'jamb');
                    }
                  }}
                  className={`w-full py-2 flex flex-col items-center justify-center rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'text-rose-600 font-bold bg-rose-50/70 border border-rose-200/60 shadow-2xs'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
                  <span className="text-[10px] tracking-tight mt-1">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Nav Action: Install / Download */}
          <div className="pt-3 border-t border-slate-100 w-full px-2">
            <button
              onClick={() => alert('JAMBix Offline CBT App installer is ready for Windows and Android!')}
              className="w-full py-2 flex flex-col items-center justify-center rounded-xl text-slate-500 hover:text-rose-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Download Desktop & Android App"
            >
              <ArrowDownToLine className="w-5 h-5 stroke-[1.8]" />
              <span className="text-[9px] tracking-tight mt-1 font-medium">Download</span>
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Bar (Search, Create +, Notification, Profile) */}
          <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search past questions, universities, syllabus topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-full placeholder:text-slate-400 text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                />
              </div>
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Create + Button */}
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="px-3.5 py-1.5 bg-[#1e293b] hover:bg-[#0f172a] text-white text-xs font-semibold rounded-full flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
              >
                <span>Create</span>
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              {/* Notification Bell */}
              <button
                className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                title="Notifications"
                onClick={() => alert('No new notifications')}
              >
                <Bell className="w-5 h-5 stroke-[1.8]" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-600 rounded-full" />
              </button>

              {/* Profile Avatar Circle with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 hover:ring-2 hover:ring-rose-500 flex items-center justify-center text-xs font-bold transition-all cursor-pointer"
                  title="Candidate Account"
                >
                  {initials}
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-40 animate-in fade-in">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-900 truncate">{displayName}</p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {user.email || 'JAMB Candidate 2026'}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        handleLaunchTest('JAMB CBT Simulator', 'jamb');
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                    >
                      <Monitor className="w-3.5 h-3.5 text-slate-400" />
                      <span>Take a CBT Mock</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onLogOut();
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 font-semibold cursor-pointer border-t border-slate-100 mt-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out to Login Page</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Dashboard Canvas */}
          <main className="p-4 sm:p-6 lg:p-7 max-w-7xl mx-auto w-full space-y-6">
            {/* 3 Promotional Top Banners (Exactly matching the screenshot row) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Banner 1: JAMB CBT 2027 (Gold / Amber with math chalk formulas) */}
              <div className="relative rounded-2xl overflow-hidden p-4 sm:p-5 bg-gradient-to-br from-[#f59e0b] via-[#d97706] to-[#b45309] text-white shadow-sm flex flex-col justify-between min-h-[120px] group cursor-pointer hover:shadow-md transition-all">
                {/* Chalk formulas texture background */}
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

              {/* Banner 2: MYSCHOOL CBT CHALLENGE (Vibrant Green & Gold with Student Photo) */}
              <div
                onClick={() => alert('JAMBix 2026 CBT Challenge Season 11 is now open for registration!')}
                className="relative rounded-2xl overflow-hidden p-4 sm:p-5 bg-gradient-to-r from-[#059669] via-[#047857] to-[#065f46] text-white shadow-sm flex items-center justify-between min-h-[120px] group cursor-pointer hover:shadow-md transition-all"
              >
                <div className="relative z-10 max-w-[65%]">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-xs tracking-tight uppercase text-emerald-200">
                      JAMBIX CBT
                    </span>
                    <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded-sm">
                      Season 11
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
                    Click For Details
                  </div>
                </div>

                {/* Nigerian Student Avatar Graphic */}
                <div className="relative z-10 shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white/10 ring-2 ring-white/30 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
                    alt="Nigerian UTME Scholar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Banner 3: WAEC & NECO CBT Software For Computers (Tech Navy Blue) */}
              <div
                onClick={() => alert('Downloading WAEC & NECO offline CBT software for Windows...')}
                className="relative rounded-2xl overflow-hidden p-4 sm:p-5 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#1e1b4b] text-white shadow-sm flex items-center justify-between min-h-[120px] group cursor-pointer hover:shadow-md transition-all"
              >
                <div className="relative z-10 max-w-[65%]">
                  <div className="text-xs font-black tracking-wide text-cyan-400">
                    WAEC &amp; NECO
                  </div>
                  <h3 className="text-base font-extrabold text-white leading-snug mt-0.5">
                    CBT Software <span className="text-cyan-200">For Computers</span>
                  </h3>
                  <p className="text-[10px] text-slate-300 mt-1 truncate">
                    Candidates·Schools·Centres·Resellers
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-2 py-0.5 rounded text-[10px] font-black uppercase">
                    <span>Download Now!! 100% Offline.</span>
                  </div>
                </div>

                {/* Laptop Vector Graphic */}
                <div className="relative z-10 text-cyan-300/80 shrink-0">
                  <Laptop className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md stroke-[1.2]" />
                </div>
              </div>
            </div>

            {/* Two-Column Lower Layout (Matches screenshot layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column (65-70% on desktop) -> Take a Test + Your Feed */}
              <div className="lg:col-span-8 space-y-6">
                {/* Take a Test Section */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                      Take a test
                    </h2>
                    <button
                      onClick={() => alert('Options: Customize practice mode, clear past test scores, or view analytics.')}
                      className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* 2x2 Grid of the 4 Distinct Test Cards from the screenshot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1: CBT Simulator (Warm Amber / Peach) */}
                    <div
                      onClick={() => handleLaunchTest('CBT Simulator (General Practice)', 'general')}
                      className="p-4 rounded-2xl bg-[#fdf6ee] border border-[#f5dfc6] hover:border-[#e9c79f] transition-all cursor-pointer flex items-start gap-3.5 group hover:shadow-xs"
                    >
                      <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0 text-orange-600">
                        {/* Monitor Setup Icon */}
                        <div className="relative">
                          <Monitor className="w-6 h-6 stroke-[2]" />
                          <div className="absolute top-1 left-1.5 w-3 h-1.5 bg-orange-500 rounded-2xs" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#451a03] group-hover:text-orange-700 transition-colors">
                          CBT Simulator
                        </h4>
                        <p className="mt-1 text-xs text-[#78350f] leading-snug">
                          Create and set up a CBT environment to practice for any CBT exam.
                        </p>
                      </div>
                    </div>

                    {/* Card 2: JAMB CBT Simulator (Mint / Pale Green with JAMB seal) */}
                    <div
                      onClick={() => handleLaunchTest('JAMB CBT Simulator', 'jamb')}
                      className="p-4 rounded-2xl bg-[#eef8f3] border border-[#cde9db] hover:border-[#a8dec0] transition-all cursor-pointer flex items-start gap-3.5 group hover:shadow-xs"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                        {/* Official-looking JAMB Emblem */}
                        <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[9px] font-black border-2 border-emerald-300 shadow-2xs">
                          JAMB
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#064e3b] group-hover:text-emerald-700 transition-colors">
                          JAMB CBT Simulator
                        </h4>
                        <p className="mt-1 text-xs text-[#065f46] leading-snug">
                          Practice JAMB CBT with real UTME past questions in CBT format.
                        </p>
                      </div>
                    </div>

                    {/* Card 3: WAEC CBT Practice 2026 Simulator (Soft Periwinkle / Lavender) */}
                    <div
                      onClick={() => handleLaunchTest('WAEC CBT Practice 2026 Simulator', 'waec')}
                      className="p-4 rounded-2xl bg-[#edf2fb] border border-[#ccdcf6] hover:border-[#acc4f0] transition-all cursor-pointer flex items-start gap-3.5 group hover:shadow-xs"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                        {/* Official-looking WAEC Emblem */}
                        <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-yellow-300 flex items-center justify-center text-[9px] font-black border border-yellow-400 shadow-2xs">
                          WAEC
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1e293b] group-hover:text-blue-700 transition-colors">
                          WAEC CBT Practice 2026 Simulator
                        </h4>
                        <p className="mt-1 text-xs text-[#334155] leading-snug">
                          Practice WAEC past questions in a real CBT exam environment.
                        </p>
                      </div>
                    </div>

                    {/* Card 4: NECO CBT Practice 2026 Simulator (Pale Greenish Sage) */}
                    <div
                      onClick={() => handleLaunchTest('NECO CBT Practice 2026 Simulator', 'neco')}
                      className="p-4 rounded-2xl bg-[#f3f9ee] border border-[#d6ecce] hover:border-[#b4e2a6] transition-all cursor-pointer flex items-start gap-3.5 group hover:shadow-xs"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                        {/* Official-looking NECO Emblem */}
                        <div className="w-8 h-8 rounded-full bg-[#15803d] text-yellow-200 flex items-center justify-center text-[9px] font-black border border-emerald-400 shadow-2xs">
                          NECO
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#14532d] group-hover:text-emerald-700 transition-colors">
                          NECO CBT Practice 2026 Simulator
                        </h4>
                        <p className="mt-1 text-xs text-[#166534] leading-snug">
                          Prepare for 2026 NECO exams using real past questions in CBT mode.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Feed Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      Your Feed
                    </h2>
                    <button
                      onClick={() => alert('Filter feed by: My 4 UTME Subjects, Admissions News, or National Mock Rankings.')}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                      <span>Customise</span>
                    </button>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                    {['All', 'JAMB News', 'Subject Discussions', 'Past Questions', 'Admissions'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setFeedFilter(tag)}
                        className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                          feedFilter === tag
                            ? 'bg-rose-600 text-white font-semibold'
                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Feed Posts */}
                  <div className="space-y-3.5">
                    {feedPosts.map((post) => (
                      <article
                        key={post.id}
                        className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs transition-all hover:border-slate-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
                              {post.author.charAt(0)}
                            </div>
                            <div>
                              <div className="flex items-center gap-1">
                                <span className="text-xs font-bold text-slate-900">{post.author}</span>
                                {post.isVerified && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 fill-rose-50" />
                                )}
                              </div>
                              <span className="text-[10px] text-slate-400">
                                {post.category} · {post.time}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => alert(`Saved ${post.title} to bookmarks`)}
                            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>

                        <h3 className="text-sm font-bold text-slate-900 mt-2 mb-1.5 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {post.content}
                        </p>

                        {/* Engagement Bar */}
                        <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs text-slate-500">
                          <button
                            onClick={() => handleLike(post.id)}
                            className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                              post.isLiked ? 'text-rose-600 font-bold' : 'hover:text-rose-600'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-rose-600' : ''}`} />
                            <span>{post.likes}</span>
                          </button>

                          <button
                            onClick={() => alert('Reply dialog opened')}
                            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors cursor-pointer"
                          >
                            <MessageSquare className="w-4 h-4" />
                            <span>{post.comments} comments</span>
                          </button>

                          <button
                            onClick={() => alert('Link copied to clipboard')}
                            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors cursor-pointer"
                          >
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (Upcoming Events Widget) */}
              <div className="lg:col-span-4 space-y-5">
                {/* UPCOMING EVENTS (Matches the screenshot widget directly) */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-700" />
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        UPCOMING EVENTS
                      </h3>
                    </div>
                    <button
                      onClick={() => alert('Viewing all 2026/2027 Nigerian University Post-UTME calendar events')}
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
                    >
                      Discover Events
                    </button>
                  </div>

                  {/* Event Items List */}
                  <div className="divide-y divide-slate-100 mt-2">
                    {/* Event 1: FCEOYO */}
                    <div className="py-3.5 flex items-start gap-3 group cursor-pointer">
                      {/* Dark Maroon / Burgundy Calendar Badge */}
                      <div className="w-11 h-11 rounded-xl bg-[#7f1d1d] text-white flex flex-col items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#991b1b] transition-colors">
                        <span className="text-sm font-black leading-none">24</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider opacity-90 mt-0.5">
                          Sep
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wide">
                          FCEOYO
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-rose-600 transition-colors truncate">
                          FCE, Oyo holds Post-UTME screening exercise, 2026/2027...
                        </h4>
                        <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
                          <span>24th Sep, 2026</span>
                          <span>·</span>
                          <span>0 comments</span>
                        </div>
                      </div>
                    </div>

                    {/* Event 2: OAU */}
                    <div className="py-3.5 flex items-start gap-3 group cursor-pointer">
                      <div className="w-11 h-11 rounded-xl bg-[#7f1d1d] text-white flex flex-col items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#991b1b] transition-colors">
                        <span className="text-sm font-black leading-none">25</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider opacity-90 mt-0.5">
                          Sep
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wide">
                          OAU
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-rose-600 transition-colors truncate">
                          OAU begins Post-UTME screening exercise, 2026/2027
                        </h4>
                        <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
                          <span>25th Sep, 2026</span>
                          <span>·</span>
                          <span>6 comments</span>
                        </div>
                      </div>
                    </div>

                    {/* Event 3: UNILAG */}
                    <div className="py-3.5 flex items-start gap-3 group cursor-pointer">
                      <div className="w-11 h-11 rounded-xl bg-[#7f1d1d] text-white flex flex-col items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#991b1b] transition-colors">
                        <span className="text-sm font-black leading-none">28</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider opacity-90 mt-0.5">
                          Sep
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wide">
                          UNILAG
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-rose-600 transition-colors truncate">
                          UNILAG opens 2026/2027 Post-UTME portal for direct screening
                        </h4>
                        <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
                          <span>28th Sep, 2026</span>
                          <span>·</span>
                          <span>19 comments</span>
                        </div>
                      </div>
                    </div>

                    {/* Event 4: UI */}
                    <div className="py-3.5 flex items-start gap-3 group cursor-pointer">
                      <div className="w-11 h-11 rounded-xl bg-[#7f1d1d] text-white flex flex-col items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#991b1b] transition-colors">
                        <span className="text-sm font-black leading-none">30</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider opacity-90 mt-0.5">
                          Sep
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wide">
                          UI
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-rose-600 transition-colors truncate">
                          University of Ibadan publishes 2026 departmental cutoff benchmarks
                        </h4>
                        <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
                          <span>30th Sep, 2026</span>
                          <span>·</span>
                          <span>42 comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick CBT Drill Shortcut Card */}
                <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-5 text-white shadow-sm">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Trophy className="w-4 h-4" />
                    <span>Daily Practice Goal</span>
                  </div>
                  <h4 className="text-sm font-extrabold text-white">
                    300+ Target Score Routine
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Solve at least 40 UTME past questions daily to build time management and 8-key muscle memory.
                  </p>
                  <button
                    onClick={() => handleLaunchTest('JAMB CBT Simulator', 'jamb')}
                    className="mt-4 w-full py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs"
                  >
                    Start 40-Question Sprint
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* CBT Test Modal */}
      <CbtTestModal
        isOpen={isCbtModalOpen}
        onClose={() => setIsCbtModalOpen(false)}
        testTitle={activeTest.title}
        testType={activeTest.type}
      />

      {/* Create Discussion Modal */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  );
};
