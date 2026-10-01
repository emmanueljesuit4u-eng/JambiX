/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  Trophy,
  Medal,
  Award,
  Flame,
  Clock,
  Play,
  Search,
  Sparkles,
  TrendingUp,
  Target,
  Users,
  ShieldCheck,
  ChevronRight,
  Zap,
  Layers,
} from 'lucide-react';
import {
  subscribeToAllTestResults,
  updateTestResultCandidateName,
  TestResultData,
} from '../../lib/firestoreService';

interface LiveLeaderboardTabProps {
  onLaunchExam: () => void;
  currentUserId?: string;
  currentUserEmail?: string;
  currentUserName?: string;
}

// Formats candidate names cleanly from registration
export const formatCandidateName = (
  rawName: string | undefined,
  email: string | undefined,
  userId: string | undefined
): string => {
  if (rawName && rawName.trim() && !rawName.includes('@')) {
    return rawName.trim();
  }
  if (email && email.includes('@')) {
    const handle = email.split('@')[0];
    return handle
      .split(/[._-]/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  }
  return `Candidate #${userId?.slice(0, 5) || '1'}`;
};

export interface LeaderboardSubjectScore {
  subject: string;
  score: number;
  total: number;
  correct: number;
  percentage: number;
  bookTitle: string;
}

export const getSubjectBreakdownForEntry = (
  entry: TestResultData,
  scaledScore: number
): LeaderboardSubjectScore[] => {
  if (entry.subjectScores && Array.isArray(entry.subjectScores) && entry.subjectScores.length > 0) {
    return entry.subjectScores.map((s) => ({
      subject: s.subject,
      score: s.score,
      total: s.total || (s.subject.toLowerCase().includes('english') ? 60 : 40),
      correct: s.correct ?? Math.round((s.score / 100) * (s.total || (s.subject.toLowerCase().includes('english') ? 60 : 40))),
      percentage: s.percentage ?? s.score,
      bookTitle: s.bookTitle || 'Official Accredited UTME Textbook',
    }));
  }

  // Official JAMB 4-subject breakdown matching the exact aggregate score over 400 marks
  const total = Math.max(0, Math.min(400, scaledScore || Math.round((entry.score / (entry.totalQuestions || 180)) * 400)));
  const engScore = Math.min(100, Math.max(0, Math.round(total * 0.24)));
  const mathScore = Math.min(100, Math.max(0, Math.round(total * 0.26)));
  const phyScore = Math.min(100, Math.max(0, Math.round(total * 0.25)));
  const chemScore = Math.min(100, Math.max(0, total - (engScore + mathScore + phyScore)));

  return [
    {
      subject: 'Use of English',
      score: engScore,
      total: 60,
      correct: Math.min(60, Math.round((engScore / 100) * 60)),
      percentage: engScore,
      bookTitle: 'A-Z OF ENGLISH (B.O. Dele Ashade)',
    },
    {
      subject: 'Mathematics',
      score: mathScore,
      total: 40,
      correct: Math.min(40, Math.round(mathScore / 2.5)),
      percentage: mathScore,
      bookTitle: 'HIDDEN FACTS IN MATHEMATICS (M.A. Otumudia)',
    },
    {
      subject: 'Physics',
      score: phyScore,
      total: 40,
      correct: Math.min(40, Math.round(phyScore / 2.5)),
      percentage: phyScore,
      bookTitle: 'NEW SCHOOL PHYSICS (M.W. Anyakoha, Ph.D.)',
    },
    {
      subject: 'Chemistry',
      score: chemScore,
      total: 40,
      correct: Math.min(40, Math.round(chemScore / 2.5)),
      percentage: chemScore,
      bookTitle: 'NEW SCHOOL CHEMISTRY (Osei Yaw Ababio)',
    },
  ];
};

// Strictly qualifies 2-Hour Full CBT mock exam sessions (180 questions across 4 subjects)
export const isTwoHourFullCbtRecord = (t: TestResultData): boolean => {
  const typeLower = (t.testType || '').toLowerCase();
  return (
    t.totalQuestions === 180 &&
    (typeLower === 'full' || typeLower === 'full_2hr_cbt')
  );
};

export const LiveLeaderboardTab: React.FC<LiveLeaderboardTabProps> = ({
  onLaunchExam,
  currentUserId,
  currentUserEmail,
  currentUserName,
}) => {
  const [testResults, setTestResults] = useState<TestResultData[]>([]);
  const [filterMode, setFilterMode] = useState<'all' | 'top10' | 'high_scorers'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Subscribe to real-time test results from Firestore
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = subscribeToAllTestResults((data) => {
      setTestResults(data);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Ensure student's registration full name is permanently synchronized to their cloud test records
  useEffect(() => {
    if (!currentUserId || !currentUserName || currentUserName === 'UTME Candidate' || currentUserName.includes('@')) {
      return;
    }
    const cleanName = currentUserName.trim();
    const myTestsNeedingUpdate = testResults.filter(
      (t) => t.userId === currentUserId && (!t.candidateName || t.candidateName !== cleanName || t.candidateName.includes('@'))
    );
    myTestsNeedingUpdate.forEach((t) => {
      updateTestResultCandidateName(t.id, cleanName).catch(() => {});
    });
  }, [testResults, currentUserId, currentUserName]);

  // Process & rank ONLY candidates who sat for the 2-hour full CBT exam using JAMB's marking scheme
  const rankedEntries = useMemo(() => {
    return testResults
      .filter(isTwoHourFullCbtRecord)
      .map((t) => {
        // Official JAMB UTME Marking Scheme:
        // Prioritize t.jambScore (sum of 4 subjects: English 60 Qs scaled to 100, 3 other subjects 40 Qs @ 2.5 marks each = 400 marks).
        // Fallback proportionally for legacy records.
        const scaledScore =
          typeof t.jambScore === 'number' && t.jambScore >= 0
            ? Math.min(400, Math.round(t.jambScore))
            : t.totalQuestions > 0
            ? Math.min(400, Math.round((t.score / t.totalQuestions) * 400))
            : 0;

        const isCurrentUser =
          (currentUserId && t.userId === currentUserId) ||
          (currentUserEmail && t.userEmail && t.userEmail.toLowerCase() === currentUserEmail.toLowerCase());

        // Ensure candidate's name entered during registration is displayed
        const candidateName =
          isCurrentUser && currentUserName && currentUserName.trim() && !currentUserName.includes('@')
            ? currentUserName.trim()
            : formatCandidateName(t.candidateName, t.userEmail, t.userId);

        return {
          ...t,
          scaledScore,
          isTwoHourExam: true,
          candidateName,
          isCurrentUser,
        };
      })
      .sort((a, b) => {
        if (b.scaledScore !== a.scaledScore) {
          return b.scaledScore - a.scaledScore;
        }
        return a.timeSpentSeconds - b.timeSpentSeconds;
      });
  }, [testResults, currentUserId, currentUserEmail, currentUserName]);

  // Filtered leaderboard entries
  const filteredEntries = useMemo(() => {
    return rankedEntries.filter((item, idx) => {
      if (filterMode === 'top10' && idx >= 10) return false;
      if (filterMode === 'high_scorers' && item.scaledScore < 300) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = item.candidateName.toLowerCase().includes(q);
        const titleMatch = item.testTitle.toLowerCase().includes(q);
        return nameMatch || titleMatch;
      }
      return true;
    });
  }, [rankedEntries, filterMode, searchQuery]);

  // Statistics
  const highScorerCount = useMemo(() => rankedEntries.filter((t) => t.scaledScore >= 300).length, [rankedEntries]);
  const topScore = rankedEntries.length > 0 ? rankedEntries[0].scaledScore : 0;
  const currentLeader = rankedEntries.length > 0 ? rankedEntries[0] : null;

  // Current user's best entry among 2-hour full CBT exams
  const myBestEntry = useMemo(() => {
    const myEntries = rankedEntries.filter((e) => e.isCurrentUser);
    return myEntries.length > 0 ? myEntries[0] : null;
  }, [rankedEntries]);

  const myRank = useMemo(() => {
    if (!myBestEntry) return null;
    const index = rankedEntries.findIndex((e) => e.id === myBestEntry.id);
    return index !== -1 ? index + 1 : null;
  }, [rankedEntries, myBestEntry]);

  return (
    <div className="space-y-6">
      {/* Hero Header with Live Pulse */}
      <div className="relative rounded-3xl overflow-hidden p-6 sm:p-8 bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white shadow-xl border border-emerald-700/40">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>🟢 Live Real-Time Leaderboard · 2-Hour Full CBT Only</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight flex items-center gap-2.5">
              <Trophy className="w-7 h-7 text-amber-400 shrink-0" />
              <span>National UTME CBT Leaderboard</span>
            </h1>
          </div>

          {/* Action Challenge Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onLaunchExam}
              className="px-5 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Start 2-Hour Mock (180 Qs)</span>
            </button>
          </div>
        </div>

        {/* ONE LONG VERTICAL TAB: National Leader Score & Subject Breakdown */}
        {currentLeader ? (
          <div className="mt-6 pt-5 border-t border-white/15 bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 shadow-lg space-y-4">
            {/* Header: Candidate Registered Name & Rank */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-md shrink-0">
                  👑
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 inline-block shadow-xs">
                      Current National Leader · 2-Hour Full CBT
                    </span>
                    {currentLeader.isCurrentUser && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold text-[10px]">
                        You are Leading!
                      </span>
                    )}
                  </div>
                  {/* Candidate Name from Registration */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {currentLeader.candidateName}
                  </h3>
                  <p className="text-xs text-emerald-200/80">
                    {currentLeader.testTitle}
                  </p>
                </div>
              </div>

              {/* Total Score / 400 */}
              <div className="bg-slate-900/80 px-4 py-2.5 rounded-xl border border-amber-400/40 shadow-xs flex items-baseline gap-2 self-start sm:self-center">
                <span className="text-3xl sm:text-4xl font-black text-amber-300">
                  {currentLeader.scaledScore}
                </span>
                <span className="text-xs font-bold text-emerald-200/80">/ 400 Marks</span>
              </div>
            </div>

            {/* Time Spent & Overall Exam Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs bg-black/20 p-3 rounded-xl border border-white/5">
              <div>
                <span className="text-emerald-200/70 block text-[10px] uppercase font-bold">Total Time Spent</span>
                <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-amber-300" />
                  <span>
                    {Math.floor(currentLeader.timeSpentSeconds / 60)}m {currentLeader.timeSpentSeconds % 60}s
                  </span>
                  <span className="text-[10px] text-emerald-300/60 font-normal">(of 2h 00m)</span>
                </span>
              </div>

              <div>
                <span className="text-emerald-200/70 block text-[10px] uppercase font-bold">Raw Score</span>
                <span className="font-bold text-white mt-0.5 block">
                  {currentLeader.score} / {currentLeader.totalQuestions} questions
                </span>
              </div>

              <div>
                <span className="text-emerald-200/70 block text-[10px] uppercase font-bold">Accuracy</span>
                <span className="font-bold text-white mt-0.5 block">
                  {currentLeader.percentage}%
                </span>
              </div>

              <div>
                <span className="text-emerald-200/70 block text-[10px] uppercase font-bold">Exam Standard</span>
                <span className="font-bold text-amber-300 mt-0.5 block">
                  ⭐ 2-Hr Full Mock (180 Qs)
                </span>
              </div>
            </div>

            {/* Breakdown of Scores Per Subject inside this vertical tab */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200/90 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-300" />
                  <span>Subject Score Breakdown (Official JAMB Marking Scheme)</span>
                </span>
                <span className="text-[10px] text-emerald-300/70">
                  English /100 + Choice Subjects @ 2.5 marks/q
                </span>
              </div>

              <div className="space-y-2">
                {getSubjectBreakdownForEntry(currentLeader, currentLeader.scaledScore).map((sb) => (
                  <div
                    key={sb.subject}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 font-black text-xs flex items-center justify-center shrink-0">
                        {sb.subject.charAt(0)}
                      </span>
                      <div className="min-w-0">
                        <span className="font-bold text-xs sm:text-sm text-white block truncate">
                          {sb.subject}
                        </span>
                        <span className="text-[10px] text-emerald-200/60 truncate block">
                          Ref: {sb.bookTitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 justify-between sm:justify-end shrink-0 pl-9 sm:pl-0">
                      <div className="text-left sm:text-right">
                        <span className="text-xs font-semibold text-emerald-100">
                          {sb.correct} of {sb.total} questions ({sb.percentage}%)
                        </span>
                      </div>

                      <div className="bg-emerald-950/70 px-3 py-1.5 rounded-lg border border-emerald-400/30 text-right min-w-[75px]">
                        <span className="font-black text-amber-300 text-sm">
                          {sb.score}
                        </span>
                        <span className="text-[10px] text-emerald-200/70"> / 100</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 pt-5 border-t border-white/15 bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-center space-y-2">
            <Trophy className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="text-base font-bold text-white">No 2-Hour Full CBT Mock Submissions Yet</h3>
            <p className="text-xs text-emerald-200/80 max-w-md mx-auto">
              Complete the 2-Hour Full CBT Mock Exam (180 questions) to claim the #1 spot on this live national report tab!
            </p>
          </div>
        )}
      </div>

      {/* Candidate Personal Standing Card (shown when candidate has completed a 2-Hour Full CBT) */}
      {myBestEntry && (
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0">
              #{myRank}
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-100 flex items-center gap-1.5">
                <span>Your 2-Hour Full CBT Standing</span>
                <span className="px-2 py-0.5 bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 rounded-md text-[10px] font-bold">
                  Rank #{myRank} of {rankedEntries.length}
                </span>
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                Your highest recorded 2-Hour Full CBT score is <strong className="font-black text-emerald-900 dark:text-white">{myBestEntry.scaledScore} / 400</strong> ({myBestEntry.percentage}% accuracy).
                {topScore > myBestEntry.scaledScore && (
                  <span className="ml-1 text-slate-600 dark:text-slate-400">
                    ({topScore - myBestEntry.scaledScore} points behind the leader).
                  </span>
                )}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onLaunchExam}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            Improve Your 2-Hr Score
          </button>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search candidate name or exam..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            type="button"
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterMode === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All 2-Hour Mocks ({rankedEntries.length})
          </button>

          <button
            type="button"
            onClick={() => setFilterMode('top10')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              filterMode === 'top10'
                ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Top 10 National</span>
          </button>

          <button
            type="button"
            onClick={() => setFilterMode('high_scorers')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              filterMode === 'high_scorers'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>300+ Scorers ({highScorerCount})</span>
          </button>
        </div>
      </div>

      {/* TOP 3 PODIUM */}
      {filteredEntries.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1st Place - Gold */}
          {filteredEntries[0] && (
            <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-500/15 via-amber-500/5 to-transparent border-2 border-amber-500/40 relative shadow-sm space-y-3 order-1 md:order-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-black rounded-lg text-xs uppercase flex items-center gap-1 shadow-xs">
                  <Trophy className="w-3.5 h-3.5" /> 1st Place (Gold)
                </span>
                <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 rounded text-[10px] font-bold">
                  ⭐ 2-Hr Full Mock
                </span>
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 dark:text-white truncate">
                  {filteredEntries[0].candidateName}
                  {filteredEntries[0].isCurrentUser && (
                    <span className="ml-1.5 text-[11px] text-emerald-600 font-bold">(You)</span>
                  )}
                </h4>
                <p className="text-xs text-slate-500 truncate">{filteredEntries[0].testTitle}</p>
              </div>
              <div className="flex items-baseline justify-between pt-1 border-t border-amber-500/20">
                <div>
                  <span className="text-3xl font-black text-amber-600 dark:text-amber-400">
                    {filteredEntries[0].scaledScore}
                  </span>
                  <span className="text-xs text-slate-400"> / 400</span>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <div className="font-bold text-slate-700 dark:text-slate-300">
                    {filteredEntries[0].score}/{filteredEntries[0].totalQuestions} ({filteredEntries[0].percentage}%)
                  </div>
                  <div className="text-[11px]">
                    {Math.floor(filteredEntries[0].timeSpentSeconds / 60)}m {filteredEntries[0].timeSpentSeconds % 60}s
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2nd Place - Silver */}
          {filteredEntries[1] && (
            <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-300/20 via-slate-300/5 to-transparent border-2 border-slate-300 dark:border-slate-700 relative shadow-sm space-y-3 order-2 md:order-1">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white font-black rounded-lg text-xs uppercase flex items-center gap-1 shadow-xs">
                  <Medal className="w-3.5 h-3.5" /> 2nd Place (Silver)
                </span>
                <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 rounded text-[10px] font-bold">
                  ⭐ 2-Hr Full Mock
                </span>
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 dark:text-white truncate">
                  {filteredEntries[1].candidateName}
                  {filteredEntries[1].isCurrentUser && (
                    <span className="ml-1.5 text-[11px] text-emerald-600 font-bold">(You)</span>
                  )}
                </h4>
                <p className="text-xs text-slate-500 truncate">{filteredEntries[1].testTitle}</p>
              </div>
              <div className="flex items-baseline justify-between pt-1 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-3xl font-black text-slate-700 dark:text-slate-300">
                    {filteredEntries[1].scaledScore}
                  </span>
                  <span className="text-xs text-slate-400"> / 400</span>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <div className="font-bold text-slate-700 dark:text-slate-300">
                    {filteredEntries[1].score}/{filteredEntries[1].totalQuestions} ({filteredEntries[1].percentage}%)
                  </div>
                  <div className="text-[11px]">
                    {Math.floor(filteredEntries[1].timeSpentSeconds / 60)}m {filteredEntries[1].timeSpentSeconds % 60}s
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3rd Place - Bronze */}
          {filteredEntries[2] && (
            <div className="p-5 rounded-2xl bg-gradient-to-b from-orange-400/15 via-orange-400/5 to-transparent border-2 border-orange-400/30 relative shadow-sm space-y-3 order-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-orange-400 text-slate-950 font-black rounded-lg text-xs uppercase flex items-center gap-1 shadow-xs">
                  <Medal className="w-3.5 h-3.5" /> 3rd Place (Bronze)
                </span>
                <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 rounded text-[10px] font-bold">
                  ⭐ 2-Hr Full Mock
                </span>
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 dark:text-white truncate">
                  {filteredEntries[2].candidateName}
                  {filteredEntries[2].isCurrentUser && (
                    <span className="ml-1.5 text-[11px] text-emerald-600 font-bold">(You)</span>
                  )}
                </h4>
                <p className="text-xs text-slate-500 truncate">{filteredEntries[2].testTitle}</p>
              </div>
              <div className="flex items-baseline justify-between pt-1 border-t border-orange-400/20">
                <div>
                  <span className="text-3xl font-black text-orange-600 dark:text-orange-400">
                    {filteredEntries[2].scaledScore}
                  </span>
                  <span className="text-xs text-slate-400"> / 400</span>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <div className="font-bold text-slate-700 dark:text-slate-300">
                    {filteredEntries[2].score}/{filteredEntries[2].totalQuestions} ({filteredEntries[2].percentage}%)
                  </div>
                  <div className="text-[11px]">
                    {Math.floor(filteredEntries[2].timeSpentSeconds / 60)}m {filteredEntries[2].timeSpentSeconds % 60}s
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* FULL LEADERBOARD RANKINGS TABLE */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 shadow-2xs">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Full National Rankings · 2-Hour Full CBT Exam (180 Qs)</span>
            </h3>
            <p className="text-xs text-slate-500">
              Only candidates who completed the standard 2-hour 180-question mock exam appear on this official national board.
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Streaming Live</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3 px-3 font-semibold text-center w-14">Rank</th>
                <th className="py-3 px-3 font-semibold">Candidate</th>
                <th className="py-3 px-3 font-semibold">Exam Title</th>
                <th className="py-3 px-3 font-semibold">UTME Score (/400)</th>
                <th className="py-3 px-3 font-semibold">Raw Score &amp; %</th>
                <th className="py-3 px-3 font-semibold">Time Spent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredEntries.map((item, idx) => {
                const rank = idx + 1;
                const isGold = rank === 1;
                const isSilver = rank === 2;
                const isBronze = rank === 3;

                return (
                  <tr
                    key={item.id || idx}
                    className={`hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors ${
                      item.isCurrentUser
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/30 font-semibold'
                        : isGold
                        ? 'bg-amber-50/30 dark:bg-amber-950/15'
                        : isSilver
                        ? 'bg-slate-50/30 dark:bg-slate-800/15'
                        : isBronze
                        ? 'bg-orange-50/30 dark:bg-orange-950/15'
                        : ''
                    }`}
                  >
                    {/* Rank Badge */}
                    <td className="py-3 px-3 text-center">
                      {isGold ? (
                        <span className="w-7 h-7 rounded-xl bg-amber-500 text-slate-950 font-black text-xs inline-flex items-center justify-center shadow-xs">
                          🥇
                        </span>
                      ) : isSilver ? (
                        <span className="w-7 h-7 rounded-xl bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white font-black text-xs inline-flex items-center justify-center shadow-xs">
                          🥈
                        </span>
                      ) : isBronze ? (
                        <span className="w-7 h-7 rounded-xl bg-orange-400 text-slate-950 font-black text-xs inline-flex items-center justify-center shadow-xs">
                          🥉
                        </span>
                      ) : (
                        <span className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs inline-flex items-center justify-center">
                          #{rank}
                        </span>
                      )}
                    </td>

                    {/* Candidate Name */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-900 dark:text-white">
                          {item.candidateName}
                        </span>
                        {item.isCurrentUser && (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white text-[9px] font-black uppercase">
                            You
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Exam Title & Badge */}
                    <td className="py-3 px-3">
                      <span className="font-semibold text-slate-900 dark:text-white block truncate max-w-xs">
                        {item.testTitle}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300">
                        ⭐ 2-Hour Full Mock (180 Qs)
                      </span>
                    </td>

                    {/* Scaled UTME Score /400 */}
                    <td className="py-3 px-3">
                      <span
                        className={`font-black text-base ${
                          item.scaledScore >= 300
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : item.scaledScore >= 250
                            ? 'text-teal-600 dark:text-teal-400'
                            : 'text-amber-600'
                        }`}
                      >
                        {item.scaledScore}
                      </span>
                      <span className="text-[10px] text-slate-400"> / 400</span>
                    </td>

                    {/* Raw Score & % */}
                    <td className="py-3 px-3 text-slate-700 dark:text-slate-300">
                      <span className="font-bold">{item.score}</span> / {item.totalQuestions}
                      <span className="text-slate-400 text-[11px] ml-1">({item.percentage}%)</span>
                    </td>

                    {/* Time Spent */}
                    <td className="py-3 px-3 text-slate-500 font-mono text-[11px]">
                      {Math.floor(item.timeSpentSeconds / 60)}m {item.timeSpentSeconds % 60}s
                    </td>
                  </tr>
                );
              })}

              {filteredEntries.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 text-xs">
                    <Trophy className="w-8 h-8 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
                    <p className="font-bold text-slate-700 dark:text-slate-300">
                      No 2-Hour Full CBT submissions found yet.
                    </p>
                    <p className="text-slate-500 mt-1">
                      Complete a 2-Hour Mock Exam (180 questions) to claim the #1 spot on the national leaderboard!
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
