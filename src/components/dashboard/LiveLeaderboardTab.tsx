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
  Filter,
  Search,
  Sparkles,
  TrendingUp,
  Target,
  Users,
  ShieldCheck,
  ChevronRight,
  Zap,
} from 'lucide-react';
import {
  subscribeToAllTestResults,
  TestResultData,
} from '../../lib/firestoreService';

interface LiveLeaderboardTabProps {
  onLaunchExam: () => void;
  currentUserId?: string;
  currentUserEmail?: string;
  currentUserName?: string;
}

export const LiveLeaderboardTab: React.FC<LiveLeaderboardTabProps> = ({
  onLaunchExam,
  currentUserId,
  currentUserEmail,
  currentUserName,
}) => {
  const [testResults, setTestResults] = useState<TestResultData[]>([]);
  const [filterMode, setFilterMode] = useState<'all' | '2hr' | 'high_scorers'>('all');
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

  // Process & rank all test results
  const rankedEntries = useMemo(() => {
    return testResults
      .map((t) => {
        const scaledScore = Math.round((t.score / (t.totalQuestions || 1)) * 400);
        const isTwoHourExam =
          t.totalQuestions >= 180 ||
          t.testType === 'full' ||
          t.timeSpentSeconds >= 3600 ||
          t.testTitle.toLowerCase().includes('2-hr') ||
          t.testTitle.toLowerCase().includes('mock') ||
          t.testTitle.toLowerCase().includes('180');

        const candidateName =
          t.candidateName ||
          (t.userEmail ? t.userEmail.split('@')[0] : `Candidate #${t.userId?.slice(0, 5) || '1'}`);

        const isCurrentUser =
          (currentUserId && t.userId === currentUserId) ||
          (currentUserEmail && t.userEmail && t.userEmail.toLowerCase() === currentUserEmail.toLowerCase());

        return {
          ...t,
          scaledScore,
          isTwoHourExam,
          candidateName,
          isCurrentUser,
        };
      })
      .sort((a, b) => {
        if (b.scaledScore !== a.scaledScore) {
          return b.scaledScore - a.scaledScore;
        }
        if (b.isTwoHourExam !== a.isTwoHourExam) {
          return b.isTwoHourExam ? 1 : -1;
        }
        return a.timeSpentSeconds - b.timeSpentSeconds;
      });
  }, [testResults, currentUserId, currentUserEmail]);

  // Filtered leaderboard entries
  const filteredEntries = useMemo(() => {
    return rankedEntries.filter((item) => {
      if (filterMode === '2hr' && !item.isTwoHourExam) return false;
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
  const twoHourCount = useMemo(() => rankedEntries.filter((t) => t.isTwoHourExam).length, [rankedEntries]);
  const highScorerCount = useMemo(() => rankedEntries.filter((t) => t.scaledScore >= 300).length, [rankedEntries]);
  const topScore = rankedEntries.length > 0 ? rankedEntries[0].scaledScore : 0;
  const currentLeader = rankedEntries.length > 0 ? rankedEntries[0] : null;

  // Current user's best entry
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
              <span>🟢 Live Real-Time Leaderboard</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight flex items-center gap-2.5">
              <Trophy className="w-7 h-7 text-amber-400 shrink-0" />
              <span>National UTME CBT Leaderboard</span>
            </h1>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
              See who is leading the national UTME mock exam right now across Nigeria! Scores are graded out of 400 marks with verified past questions and update live as other candidates finish their exams.
            </p>
          </div>

          {/* Action Challenge Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
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

        {/* Quick KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 mt-6 border-t border-white/10">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-[10px] text-emerald-200/70 uppercase font-bold tracking-wider block">Tested Candidates</span>
            <span className="text-xl sm:text-2xl font-black text-white">{rankedEntries.length}</span>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-[10px] text-amber-200/70 uppercase font-bold tracking-wider block">Current Leading Score</span>
            <span className="text-xl sm:text-2xl font-black text-amber-300">
              {topScore > 0 ? `${topScore} / 400` : '—'}
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-[10px] text-teal-200/70 uppercase font-bold tracking-wider block">Full 2-Hr Mocks</span>
            <span className="text-xl sm:text-2xl font-black text-teal-300">{twoHourCount}</span>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-[10px] text-purple-200/70 uppercase font-bold tracking-wider block">300+ Scorers</span>
            <span className="text-xl sm:text-2xl font-black text-purple-300">{highScorerCount}</span>
          </div>
        </div>
      </div>

      {/* Spotlight on the Current #1 National Leader */}
      {currentLeader && (
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-2 border-amber-500/40 relative shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md shrink-0">
                👑
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 inline-block mb-1 shadow-xs">
                  Current National Leader
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  {currentLeader.candidateName}
                  {currentLeader.isCurrentUser && (
                    <span className="ml-2 text-xs px-2 py-0.5 bg-emerald-600 text-white rounded-full font-bold">
                      You are Leading!
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {currentLeader.testTitle}
                </p>
              </div>
            </div>

            <div className="flex items-baseline gap-2 bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl border border-amber-300 dark:border-amber-800 shadow-xs">
              <span className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400">
                {currentLeader.scaledScore}
              </span>
              <span className="text-xs font-bold text-slate-400">/ 400 Marks</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-amber-500/20 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Raw Score</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {currentLeader.score} / {currentLeader.totalQuestions} questions
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Accuracy</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {currentLeader.percentage}%
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Time Duration</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {Math.floor(currentLeader.timeSpentSeconds / 60)}m {currentLeader.timeSpentSeconds % 60}s
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Exam Mode</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">
                {currentLeader.isTwoHourExam ? '⭐ 2-Hour Mock (180 Qs)' : '⚡ Practice Drill'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Candidate Personal Standing Card */}
      {myBestEntry ? (
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0">
              #{myRank}
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-100 flex items-center gap-1.5">
                <span>Your Current Standing</span>
                <span className="px-2 py-0.5 bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 rounded-md text-[10px] font-bold">
                  Rank #{myRank} of {rankedEntries.length}
                </span>
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                Your highest recorded UTME score is <strong className="font-black text-emerald-900 dark:text-white">{myBestEntry.scaledScore} / 400</strong> ({myBestEntry.percentage}% accuracy).
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
            Improve Your Rank
          </button>
        </div>
      ) : (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              You haven&apos;t entered the leaderboard yet!
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Take the full 2-hour 180-question mock exam or a practice drill to display your name and compete with candidates nationwide.
            </p>
          </div>
          <button
            type="button"
            onClick={onLaunchExam}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            Take Test &amp; Join Leaderboard
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
            All Submissions ({rankedEntries.length})
          </button>

          <button
            type="button"
            onClick={() => setFilterMode('2hr')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              filterMode === '2hr'
                ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>2-Hr Full Mocks ({twoHourCount})</span>
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
                {filteredEntries[0].isTwoHourExam && (
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 rounded text-[10px] font-bold">
                    ⭐ 2-Hr Mock
                  </span>
                )}
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
                {filteredEntries[1].isTwoHourExam && (
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 rounded text-[10px] font-bold">
                    ⭐ 2-Hr Mock
                  </span>
                )}
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
                {filteredEntries[2].isTwoHourExam && (
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 rounded text-[10px] font-bold">
                    ⭐ 2-Hr Mock
                  </span>
                )}
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
              <span>Full National Rankings (Over 400 Marks)</span>
            </h3>
            <p className="text-xs text-slate-500">
              Live updates stream automatically as other candidates submit CBT tests.
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
                <th className="py-3 px-3 font-semibold">Exam Title &amp; Mode</th>
                <th className="py-3 px-3 font-semibold">Scaled UTME (/400)</th>
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
                      {item.isTwoHourExam ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300">
                          ⭐ 2-Hour Full Mock (180 Qs)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          ⚡ {item.totalQuestions}-Q Drill
                        </span>
                      )}
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
                    <p className="font-bold text-slate-700 dark:text-slate-300">No test results matching filter yet.</p>
                    <p className="text-slate-500 mt-1">Take a test to be the first on the national leaderboard!</p>
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
