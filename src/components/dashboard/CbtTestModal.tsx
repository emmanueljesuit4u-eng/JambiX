/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Play,
  Clock,
  BookOpen,
  CheckCircle,
  Award,
  WifiOff,
  Cloud,
  RefreshCw,
  Check,
  Sparkles,
  BookMarked,
  Filter,
  Calendar,
  Layers,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Calculator,
} from 'lucide-react';
import { auth } from '../../lib/firebase';
import { saveTestResult, getUserProfile } from '../../lib/firestoreService';
import { saveLocalTestResult } from '../../lib/offlineStorage';
import { useNetwork } from '../../context/NetworkContext';
import {
  assembleUtmeTest,
  calculateJambGrade,
  JAMB_YEARS,
  SUBJECT_CONFIGS,
  VerifiedQuestion,
  JambGradingResult,
  SubjectKey,
  normalizeSubjectKey,
  getSeenQuestionsCount,
  markQuestionsSeen,
  recordSeenSignatures,
  getQuestionCoreSignature,
  clearSeenQuestions,
} from '../../data/verifiedTextbooks';
import { QuestionImageDisplay } from '../common/QuestionImageDisplay';
import { JambCalculator } from '../common/JambCalculator';

interface CbtTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  testTitle: string;
  testType: string;
  initialSubject?: string;
  initialYear?: number;
  studentName?: string;
}

export const CbtTestModal: React.FC<CbtTestModalProps> = ({
  isOpen,
  onClose,
  testTitle,
  testType,
  initialSubject,
  initialYear,
  studentName,
}) => {
  const { effectiveOnline } = useNetwork();

  // Test Configuration State
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([
    'Use of English',
    'Mathematics',
    'Physics',
    'Chemistry',
  ]);
  const [selectedYear, setSelectedYear] = useState<number | 'random'>(
    initialYear || 2026
  );
  const [examMode, setExamMode] = useState<'full' | 'single' | 'sprint' | 'novel'>('full');
  const [duration, setDuration] = useState<number>(120);
  const [seenCount, setSeenCount] = useState<number>(0);

  // Active Test State
  const [testStarted, setTestStarted] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<VerifiedQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(120 * 60);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Completed Test State
  const [testCompleted, setTestCompleted] = useState<{
    grade: JambGradingResult;
    savedLocally: boolean;
    syncedToCloud: boolean;
  } | null>(null);

  // Review Filter State
  const [reviewSubjectFilter, setReviewSubjectFilter] = useState<string>('All');
  const [reviewStatusFilter, setReviewStatusFilter] = useState<'All' | 'Correct' | 'Incorrect' | 'Unattempted'>('All');

  // Auto-configure when opened with a specific initialSubject
  useEffect(() => {
    if (!isOpen) return;

    const titleLower = (testTitle || '').toLowerCase();
    const initLower = (initialSubject || '').toLowerCase();

    if (testType === 'novel' || titleLower.includes('novel')) {
      setSelectedSubjects(['Use of English']);
      setExamMode('novel');
      setDuration(25);
    } else if (initialSubject) {
      const key = normalizeSubjectKey(initialSubject);
      const conf = SUBJECT_CONFIGS[key];
      if (conf) {
        setSelectedSubjects([conf.name]);
        setExamMode('single');
      }
    } else if (testTitle && !titleLower.includes('full') && !titleLower.includes('180')) {
      const key = normalizeSubjectKey(testTitle);
      const conf = SUBJECT_CONFIGS[key];
      if (conf && titleLower.includes(conf.name.toLowerCase())) {
        setSelectedSubjects([conf.name]);
        setExamMode('single');
      }
    } else {
      setSelectedSubjects(['Use of English', 'Mathematics', 'Physics', 'Chemistry']);
      setExamMode('full');
    }

    if (initialYear && initialYear >= 1978 && initialYear <= 2026) {
      setSelectedYear(initialYear);
    }
    setSeenCount(getSeenQuestionsCount());
  }, [testTitle, initialSubject, initialYear, isOpen]);

  // Available subjects for UTME (all 18 accredited subjects)
  const availableSubjects = useMemo(() => {
    return (Object.keys(SUBJECT_CONFIGS) as SubjectKey[]).map((key) => {
      const cfg = SUBJECT_CONFIGS[key];
      return {
        key,
        name: cfg.name,
        category: cfg.category || 'Sciences',
        compulsory: key === 'english',
        book: cfg.bookTitle,
        author: cfg.author,
      };
    });
  }, []);

  const handleSlotSubjectChange = (slotIndex: number, subjectName: string) => {
    const updated = [...selectedSubjects];
    if (examMode === 'full') {
      updated[0] = 'Use of English'; // Compulsory
      updated[slotIndex] = subjectName;
      setSelectedSubjects(updated.slice(0, 4));
    } else {
      setSelectedSubjects([subjectName]);
    }
  };

  // Start Exam
  const handleStartExam = () => {
    // Generate questions according to user requirements:
    // Full CBT test brings out 60 questions from English and 40 from the 3 other subjects
    const questions = assembleUtmeTest({
      subjects: selectedSubjects,
      year: selectedYear,
      mode: examMode,
      customQuestionCount: examMode === 'sprint' ? 20 : examMode === 'novel' ? 10 : undefined,
    });

    setActiveQuestions(questions);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTimeLeftSeconds(duration * 60);
    setTestCompleted(null);
    setTestStarted(true);

    // Record question IDs and signatures as seen to guarantee zero repetition in future random tests
    markQuestionsSeen(questions.map((q) => q.id));
    recordSeenSignatures(
      questions.map((q) => getQuestionCoreSignature(q.text)),
      questions.map((q) => q.id)
    );
    setSeenCount(getSeenQuestionsCount());
  };

  // Timer countdown
  useEffect(() => {
    if (!testStarted || testCompleted) return;

    const interval = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [testStarted, testCompleted]);

  // Format time (HH:MM:SS)
  const formattedTime = useMemo(() => {
    const hours = Math.floor(timeLeftSeconds / 3600);
    const minutes = Math.floor((timeLeftSeconds % 3600) / 60);
    const seconds = timeLeftSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [timeLeftSeconds]);

  // Subject partition ranges for quick jumping in the CBT interface
  const subjectPartitions = useMemo(() => {
    const map: { subject: string; startIndex: number; count: number; answeredCount: number }[] = [];
    activeQuestions.forEach((q, idx) => {
      const existing = map.find((m) => m.subject === q.subject);
      if (existing) {
        existing.count++;
        if (selectedAnswers[idx]) {
          existing.answeredCount++;
        }
      } else {
        map.push({
          subject: q.subject,
          startIndex: idx,
          count: 1,
          answeredCount: selectedAnswers[idx] ? 1 : 0,
        });
      }
    });
    return map;
  }, [activeQuestions, selectedAnswers]);

  // Official JAMB 8-key keyboard navigation (A, B, C, D, N, P, R, S)
  useEffect(() => {
    if (!isOpen || !testStarted || testCompleted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea', 'select'].includes((e.target as HTMLElement).tagName.toLowerCase())) {
        return;
      }

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        e.preventDefault();
        setSelectedAnswers((prev) => ({
          ...prev,
          [currentQuestionIndex]: key,
        }));
      } else if (key === 'N') {
        e.preventDefault();
        if (currentQuestionIndex < activeQuestions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        }
      } else if (key === 'P') {
        e.preventDefault();
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex((prev) => prev - 1);
        }
      } else if (key === 'R') {
        e.preventDefault();
        setSelectedAnswers((prev) => {
          const updated = { ...prev };
          delete updated[currentQuestionIndex];
          return updated;
        });
      } else if (key === 'S') {
        e.preventDefault();
        submitExam();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, testStarted, testCompleted, currentQuestionIndex, activeQuestions.length]);

  // Submit and grade the test
  const submitExam = async () => {
    const grade = calculateJambGrade(activeQuestions, selectedAnswers);
    const testId = `test_${Date.now()}`;
    const timeSpent = duration * 60 - timeLeftSeconds;

    const isFullTwoHour = examMode === 'full' || duration === 120 || activeQuestions.length >= 180;
    const computedTestType = isFullTwoHour ? 'full' : (examMode || testType || 'single');
    const computedTitle = isFullTwoHour
      ? (selectedYear === 'random'
          ? 'Full JAMB UTME CBT (2-Hr Standard Mock - 1978-2026 Mix)'
          : `Full JAMB UTME CBT (2-Hr Standard Mock - ${selectedYear})`)
      : (selectedYear === 'random'
          ? `${testTitle} (1978-2026 Cross-Year Mix)`
          : `${testTitle} (${selectedYear} UTME)`);

    let synced = false;
    // Strict Leaderboard Regulation: ONLY the 2-Hour Full CBT Mock Exam (180 questions) is recorded to the live stream leaderboard
    if (auth.currentUser && effectiveOnline && isFullTwoHour) {
      try {
        let candidateName = (studentName || '').trim();
        if (!candidateName || candidateName === 'UTME Candidate' || candidateName.includes('@')) {
          try {
            const profile = await getUserProfile(auth.currentUser.uid);
            if (profile && profile.fullName && profile.fullName.trim()) {
              candidateName = profile.fullName.trim();
            }
          } catch (e) {
            console.warn('Could not fetch user profile for registered name:', e);
          }
        }
        if (!candidateName) {
          candidateName = auth.currentUser.displayName || auth.currentUser.email?.split('@')[0] || 'UTME Candidate';
        }
        const userEmail = auth.currentUser.email || '';
        const subjectScores = grade.subjectBreakdowns.map((sb) => ({
          subject: sb.subject,
          score: sb.jambScaledScore,
          total: sb.total,
          correct: sb.correct,
          percentage: sb.percentage,
          bookTitle: sb.bookTitle,
        }));

        await saveTestResult({
          id: testId,
          userId: auth.currentUser.uid,
          testTitle: computedTitle,
          testType: computedTestType,
          score: grade.totalRawCorrect, // Conforms strictly to score <= totalQuestions rule
          totalQuestions: grade.totalQuestions,
          jambScore: grade.totalJambScore, // Official JAMB marking scheme aggregate score (out of 400)
          percentage: grade.overallPercentage,
          timeSpentSeconds: timeSpent > 0 ? timeSpent : 180,
          candidateName,
          userEmail,
          subjectScores,
        });
        synced = true;
      } catch (err) {
        console.warn('Sync delayed, saved locally:', err);
      }
    }

    saveLocalTestResult({
      id: testId,
      userId: auth.currentUser?.uid,
      testTitle: computedTitle,
      testType: computedTestType,
      score: grade.totalRawCorrect,
      jambScore: grade.totalJambScore,
      totalRawCorrect: grade.totalRawCorrect,
      totalQuestions: grade.totalQuestions,
      percentage: grade.overallPercentage,
      timeSpentSeconds: timeSpent > 0 ? timeSpent : 180,
      subjects: selectedSubjects,
      syncedToCloud: synced,
      questions: activeQuestions,
      selectedAnswers: selectedAnswers,
    });

    setTestCompleted({
      grade,
      savedLocally: true,
      syncedToCloud: synced,
    });
  };

  if (!isOpen) return null;

  // Filtered review questions
  const filteredReviewQuestions = activeQuestions.filter((q, idx) => {
    if (reviewSubjectFilter !== 'All' && q.subject !== reviewSubjectFilter) {
      return false;
    }
    const studentAns = selectedAnswers[idx];
    if (reviewStatusFilter === 'Correct' && studentAns !== q.answer) return false;
    if (reviewStatusFilter === 'Incorrect' && (studentAns === q.answer || !studentAns)) return false;
    if (reviewStatusFilter === 'Unattempted' && studentAns) return false;
    return true;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[92vh] transition-colors">
        {/* Header - Streamlined for mobile */}
        <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-xs shrink-0">
              CBT
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">
                  {testTitle}
                </h3>
                {selectedYear !== 'random' && (
                  <span className="hidden sm:inline-block px-1.5 py-0.5 bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 rounded text-[10px] font-bold">
                    UTME {selectedYear}
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                {testStarted && !testCompleted ? 'Exam in progress' : 'Official CBT Simulator'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {testStarted && !testCompleted && (
              <button
                type="button"
                onClick={() => setIsCalculatorOpen((prev) => !prev)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ${
                  isCalculatorOpen
                    ? 'bg-amber-500 text-slate-950 font-black ring-2 ring-amber-400/50'
                    : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700'
                }`}
                title="Toggle JAMB CBT On-Screen Calculator"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">JAMB Calculator</span>
                <span className="sm:hidden">Calc</span>
              </button>
            )}
            <button
              onClick={() => {
                setIsCalculatorOpen(false);
                onClose();
              }}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex-1">
          {testCompleted ? (
            /* ========================================================
               1. JAMB-STYLE RESULTS SCREEN (GRADED OVER 400 MARKS)
               ======================================================== */
            <div className="space-y-6">
              {/* Aggregate Score Over 400 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900 border-2 border-emerald-500/40 text-center relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-black uppercase tracking-wider mb-2 shadow-xs">
                  <Award className="w-4 h-4" />
                  <span>Official JAMB UTME Aggregate Score</span>
                </div>

                <div className="mt-2 flex flex-col items-center justify-center">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-black text-emerald-700 dark:text-emerald-400 tracking-tight">
                      {testCompleted.grade.totalJambScore}
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-400 dark:text-slate-500">
                      / 400
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                    {testCompleted.grade.performanceRemark}
                  </p>
                  <p className="mt-0.5 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                    {testCompleted.grade.admissionTier}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-emerald-200 dark:border-emerald-900/60 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <span className="text-lg font-black text-slate-900 dark:text-white">
                      {testCompleted.grade.totalRawCorrect} / {testCompleted.grade.totalQuestions}
                    </span>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Total Correct</p>
                  </div>
                  <div>
                    <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                      {testCompleted.grade.overallPercentage}%
                    </span>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Raw Accuracy</p>
                  </div>
                  <div>
                    <span className="text-lg font-black text-rose-600 dark:text-rose-400">
                      {testCompleted.grade.totalQuestions - testCompleted.grade.totalRawCorrect}
                    </span>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Mistakes</p>
                  </div>
                  <div>
                    <span className="text-lg font-black text-teal-600 dark:text-teal-400">
                      {selectedYear === 'random' ? '1978–2026' : `${selectedYear}`}
                    </span>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Exam Year</p>
                  </div>
                </div>
              </div>

              {/* Subject Breakdown (Each Scaled to 100 Marks) */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  <span>Subject Score Breakdown (Graded / 100 Each)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {testCompleted.grade.subjectBreakdowns.map((sb) => (
                    <div
                      key={sb.subject}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {sb.subject}
                          </span>
                          <span className="text-base font-black text-emerald-600 dark:text-emerald-400">
                            {sb.jambScaledScore} <span className="text-xs text-slate-400">/ 100</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                          {sb.correct} of {sb.total} questions correct ({sb.percentage}%)
                        </p>
                      </div>
                      <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-700/60">
                        <span className="text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 truncate block">
                          Ref: {sb.bookTitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Answers & Textbook Citations Review */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>Answers &amp; Verified Textbook Explanations</span>
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Step-by-step solutions cited from the 5 standard UTME textbooks
                    </p>
                  </div>

                  {/* Review Filters */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Subject Filter */}
                    <select
                      value={reviewSubjectFilter}
                      onChange={(e) => setReviewSubjectFilter(e.target.value)}
                      className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium cursor-pointer"
                    >
                      <option value="All">All Subjects ({activeQuestions.length})</option>
                      {Array.from(new Set(activeQuestions.map((q) => q.subject))).map((sub) => (
                        <option key={sub} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>

                    {/* Status Filter */}
                    <select
                      value={reviewStatusFilter}
                      onChange={(e) => setReviewStatusFilter(e.target.value as any)}
                      className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium cursor-pointer"
                    >
                      <option value="All">All Status</option>
                      <option value="Correct">Correct Only</option>
                      <option value="Incorrect">Incorrect Only</option>
                      <option value="Unattempted">Unattempted</option>
                    </select>
                  </div>
                </div>

                {/* Review Questions List */}
                <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                  {filteredReviewQuestions.length === 0 ? (
                    <div className="p-6 text-center text-xs text-slate-500">
                      No questions match the current filter selection.
                    </div>
                  ) : (
                    filteredReviewQuestions.map((q, originalIdx) => {
                      const actualIdx = activeQuestions.findIndex((item) => item.id === q.id);
                      const studentAns = selectedAnswers[actualIdx];
                      const isCorrect = studentAns === q.answer;
                      const isUnattempted = !studentAns;

                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-xl border text-xs transition-colors space-y-2.5 ${
                            isCorrect
                              ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40'
                              : isUnattempted
                              ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                              : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-slate-900 dark:text-white">
                                Q{actualIdx + 1}.
                              </span>
                              <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded font-bold text-[10px]">
                                {q.subject}
                              </span>
                              <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 rounded font-bold text-[10px]">
                                JAMB {q.year}
                              </span>
                              <span className="text-slate-500 text-[11px] font-medium">
                                [{q.topic}]
                              </span>
                            </div>

                            <span
                              className={`px-2.5 py-0.5 rounded text-[11px] font-black shrink-0 flex items-center gap-1 ${
                                isCorrect
                                  ? 'bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-100'
                                  : isUnattempted
                                  ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                                  : 'bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-100'
                              }`}
                            >
                              {isCorrect ? (
                                <>
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>Correct (Option {q.answer})</span>
                                </>
                              ) : isUnattempted ? (
                                <>
                                  <HelpCircle className="w-3.5 h-3.5" />
                                  <span>Unanswered · Ans: {q.answer}</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-3.5 h-3.5" />
                                  <span>Your Ans: {studentAns} · Correct: {q.answer}</span>
                                </>
                              )}
                            </span>
                          </div>

                          {/* Question text */}
                          <p className="font-semibold text-slate-800 dark:text-slate-100 leading-relaxed text-xs">
                            {q.text}
                          </p>

                          {/* Question Image / Visual Diagram in Review */}
                          {(q.imageSvg || q.imageUrl) && (
                            <QuestionImageDisplay
                              imageSvg={q.imageSvg}
                              imageUrl={q.imageUrl}
                              caption={q.imageCaption}
                              alt={q.imageAlt}
                              className="my-2"
                            />
                          )}

                          {/* Options grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                            {Object.entries(q.options).map(([optKey, optVal]) => {
                              const isOptCorrect = optKey === q.answer;
                              const isOptChosen = studentAns === optKey;
                              return (
                                <div
                                  key={optKey}
                                  className={`p-2 rounded-lg border flex items-center gap-2 ${
                                    isOptCorrect
                                      ? 'bg-emerald-100/70 dark:bg-emerald-900/40 border-emerald-300 text-emerald-950 dark:text-emerald-200 font-bold'
                                      : isOptChosen
                                      ? 'bg-rose-100/70 dark:bg-rose-900/40 border-rose-300 text-rose-950 dark:text-rose-200'
                                      : 'bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                                  }`}
                                >
                                  <span
                                    className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${
                                      isOptCorrect
                                        ? 'bg-emerald-600 text-white'
                                        : isOptChosen
                                        ? 'bg-rose-600 text-white'
                                        : 'bg-slate-200 dark:bg-slate-700'
                                    }`}
                                  >
                                    {optKey}
                                  </span>
                                  <span>{optVal}</span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Verified Reference & In-Depth Explanation */}
                          <div className="p-3 bg-white/95 dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
                            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-[11px]">
                              <BookMarked className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                              <span>Verified Textbook Reference:</span>
                              <span className="font-mono text-emerald-900 dark:text-emerald-200">
                                {q.textbookRef}
                              </span>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal pl-6">
                              {q.explanation}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Done / Retake controls */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    handleStartExam();
                  }}
                  className="px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl cursor-pointer transition-colors"
                >
                  Retake Exam
                </button>
                <button
                  onClick={() => {
                    setTestCompleted(null);
                    setTestStarted(false);
                    onClose();
                  }}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl cursor-pointer transition-colors shadow-xs"
                >
                  Finish Review &amp; Close
                </button>
              </div>
            </div>
          ) : !testStarted ? (
            /* ========================================================
               2. EXAM SETUP & YEAR SELECTION SCREEN (1978 - 2025)
               ======================================================== */
            <div className="space-y-5">
              {/* Exam Mode Toggle */}
              {/* Zero-Repeat Protection Notice */}
              {selectedYear === 'random' && seenCount > 0 && (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between text-xs transition-all">
                  <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-200">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>
                      <strong>Zero-Repeat CBT Guarantee:</strong> {seenCount} questions already practiced in your previous tests are automatically excluded. You will get 100% fresh questions.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      clearSeenQuestions();
                      setSeenCount(0);
                    }}
                    className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 underline hover:text-emerald-950 dark:hover:text-emerald-200 cursor-pointer shrink-0 ml-2"
                  >
                    Reset History
                  </button>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  1. Select Examination Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setExamMode('full');
                      setDuration(120);
                      setSelectedSubjects(['Use of English', 'Mathematics', 'Physics', 'Chemistry']);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      examMode === 'full'
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-200 shadow-2xs'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">Full JAMB CBT Exam</span>
                      <span className="text-[10px] font-black px-1.5 py-0.5 bg-rose-600 text-white rounded">
                        180 Qs
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      60 English + 40 each for 3 other subjects. Graded over 400.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setExamMode('single');
                      setDuration(45);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      examMode === 'single'
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-200 shadow-2xs'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">Single Subject Drill</span>
                      <span className="text-[10px] font-black px-1.5 py-0.5 bg-slate-900 dark:bg-slate-700 text-white rounded">
                        40/60 Qs
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      Focus on 1 specific subject. Graded over 100 &amp; 400.
                    </p>
                  </button>
                </div>
              </div>

              {/* Year Selector (1978 to 2026) */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="cbt-modal-year-select" className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5 cursor-pointer">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span>2. Select UTME Past Questions Year (1978 – 2026)</span>
                  </label>
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                    49 Examination Years
                  </span>
                </div>

                <div>
                  <select
                    id="cbt-modal-year-select"
                    value={selectedYear}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSelectedYear(val === 'random' ? 'random' : parseInt(val, 10));
                    }}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs cursor-pointer shadow-2xs focus:ring-2 focus:ring-rose-500/30"
                  >
                    <option value="random">🌟 Random Cross-Year UTME Mix (1978 – 2026)</option>
                    <optgroup label="Recent UTME Years (2020 – 2026)">
                      {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map((y) => (
                        <option key={y} value={y}>
                          JAMB UTME {y} (Official Authentic Paper)
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="2010 – 2019 Past Questions">
                      {[2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010].map((y) => (
                        <option key={y} value={y}>
                          JAMB UTME {y}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="2000 – 2009 Past Questions">
                      {[2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000].map((y) => (
                        <option key={y} value={y}>
                          JAMB UTME {y}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="1978 – 1999 Classic Archive">
                      {JAMB_YEARS.filter((y) => y < 2000).map((y) => (
                        <option key={y} value={y}>
                          JAMB UTME {y} Classic
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Subject Selection Dropdown Menus */}
              <div className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    <span>3. Select Subjects</span>
                  </label>
                  <span className="px-2.5 py-1 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-full text-[11px] font-bold shadow-2xs">
                    All Subjects (18)
                  </span>
                </div>

                {examMode === 'single' ? (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                      Select Subject to Practice:
                    </label>
                    <select
                      value={selectedSubjects[0] || 'Use of English'}
                      onChange={(e) => setSelectedSubjects([e.target.value])}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs cursor-pointer shadow-2xs focus:ring-2 focus:ring-rose-500/30"
                    >
                      {availableSubjects.map((sub) => (
                        <option key={sub.name} value={sub.name}>
                          {sub.name} ({sub.name === 'Use of English' ? '60 Qs' : '40 Qs'}) — Ref: {sub.book}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Use the dropdown menus below to select your 4 examination subjects:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {/* Slot 1: Use of English (Compulsory) */}
                      <div className="p-2.5 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-slate-900 flex items-center justify-between shadow-2xs">
                        <div>
                          <span className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 block tracking-wider">
                            Subject 1 · Compulsory
                          </span>
                          <span className="text-xs font-bold text-slate-900 dark:text-white">Use of English</span>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 rounded-md">
                          60 Qs
                        </span>
                      </div>

                      {/* Slot 2: Dropdown */}
                      <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xs">
                        <label className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 block mb-1">
                          Subject 2 (40 Questions)
                        </label>
                        <select
                          value={selectedSubjects[1] || 'Mathematics'}
                          onChange={(e) => handleSlotSubjectChange(1, e.target.value)}
                          className="w-full p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs cursor-pointer focus:ring-1 focus:ring-rose-500"
                        >
                          {availableSubjects.filter((s) => s.name !== 'Use of English').map((sub) => (
                            <option key={sub.name} value={sub.name}>
                              {sub.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Slot 3: Dropdown */}
                      <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xs">
                        <label className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 block mb-1">
                          Subject 3 (40 Questions)
                        </label>
                        <select
                          value={selectedSubjects[2] || 'Physics'}
                          onChange={(e) => handleSlotSubjectChange(2, e.target.value)}
                          className="w-full p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs cursor-pointer focus:ring-1 focus:ring-rose-500"
                        >
                          {availableSubjects.filter((s) => s.name !== 'Use of English').map((sub) => (
                            <option key={sub.name} value={sub.name}>
                              {sub.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Slot 4: Dropdown */}
                      <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xs">
                        <label className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 block mb-1">
                          Subject 4 (40 Questions)
                        </label>
                        <select
                          value={selectedSubjects[3] || 'Chemistry'}
                          onChange={(e) => handleSlotSubjectChange(3, e.target.value)}
                          className="w-full p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs cursor-pointer focus:ring-1 focus:ring-rose-500"
                        >
                          {availableSubjects.filter((s) => s.name !== 'Use of English').map((sub) => (
                            <option key={sub.name} value={sub.name}>
                              {sub.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* ========================================================
               3. ACTIVE CBT EXAM SIMULATION (WITH SUBJECT QUICK JUMP)
               ======================================================== */
            <div className="space-y-4">
              {/* Subject Dropdown Menu During Test (Clean, Uncongested Navigation) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <label htmlFor="cbt-active-subject-select" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shrink-0 cursor-pointer">
                    <BookOpen className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                    <span>Subject:</span>
                  </label>
                  <select
                    id="cbt-active-subject-select"
                    value={activeQuestions[currentQuestionIndex]?.subject || ''}
                    onChange={(e) => {
                      const targetSub = e.target.value;
                      const part = subjectPartitions.find((p) => p.subject === targetSub);
                      if (part) {
                        setCurrentQuestionIndex(part.startIndex);
                      }
                    }}
                    className="w-full sm:max-w-xs px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs cursor-pointer shadow-2xs focus:ring-2 focus:ring-rose-500/30"
                  >
                    {subjectPartitions.map((part) => (
                      <option key={part.subject} value={part.subject}>
                        {part.subject} ({part.answeredCount}/{part.count} Answered)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 shrink-0">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Current Subject:</span>
                  <span className="font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md border border-blue-200 dark:border-blue-900/60 text-xs">
                    {subjectPartitions.find((p) => p.subject === activeQuestions[currentQuestionIndex]?.subject)?.answeredCount || 0} of {subjectPartitions.find((p) => p.subject === activeQuestions[currentQuestionIndex]?.subject)?.count || 0} Answered
                  </span>
                </div>
              </div>

              {/* Question Metadata & Timer Bar - Clean and Uncluttered */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 rounded-lg font-black text-xs">
                    {activeQuestions[currentQuestionIndex]?.subject}
                  </span>
                  <span className="text-xs text-slate-500 font-bold">
                    Question {currentQuestionIndex + 1} of {activeQuestions.length}
                  </span>
                  {(activeQuestions[currentQuestionIndex]?.imageSvg || activeQuestions[currentQuestionIndex]?.imageUrl) && (
                    <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 rounded font-black text-[10px] flex items-center gap-1">
                      <span>📊</span> Diagram
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCalculatorOpen((prev) => !prev)}
                    className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-xl transition-all cursor-pointer border ${
                      isCalculatorOpen
                        ? 'bg-amber-500 text-slate-950 border-amber-600 font-black shadow-xs ring-2 ring-amber-400/50'
                        : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                    }`}
                    title="JAMB CBT On-Screen Calculator"
                  >
                    <Calculator className="w-3.5 h-3.5 text-amber-500" />
                    <span>Calculator</span>
                  </button>

                  <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-mono font-black text-sm bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-xl border border-rose-200/60 dark:border-rose-900/60">
                    <Clock className="w-4 h-4 animate-pulse" />
                    <span>{formattedTime}</span>
                  </div>
                </div>
              </div>

              {/* Question Card - Clean, readable, with redundant tags stripped */}
              <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {(activeQuestions[currentQuestionIndex]?.text || '').replace(/^\[JAMB UTME[^\]]+\]\s*/i, '')}
                </p>

                {/* Question Image/Diagram if present */}
                {(activeQuestions[currentQuestionIndex]?.imageSvg || activeQuestions[currentQuestionIndex]?.imageUrl) && (
                  <QuestionImageDisplay
                    imageSvg={activeQuestions[currentQuestionIndex]?.imageSvg}
                    imageUrl={activeQuestions[currentQuestionIndex]?.imageUrl}
                    caption={activeQuestions[currentQuestionIndex]?.imageCaption}
                    alt={activeQuestions[currentQuestionIndex]?.imageAlt}
                  />
                )}
              </div>

              {/* Options - Spacious, touch-friendly, without distracting badges during live test */}
              <div className="space-y-2.5">
                {activeQuestions[currentQuestionIndex] &&
                  Object.entries(activeQuestions[currentQuestionIndex].options).map(([key, val]) => {
                    const isChecked = selectedAnswers[currentQuestionIndex] === key;
                    return (
                      <button
                        key={key}
                        onClick={() =>
                          setSelectedAnswers({
                            ...selectedAnswers,
                            [currentQuestionIndex]: key,
                          })
                        }
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm flex items-center gap-3 transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-950 dark:text-blue-200 font-semibold shadow-2xs ring-2 ring-blue-500/40'
                            : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                            isChecked
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          {key}
                        </span>
                        <span className="leading-snug">{val}</span>
                      </button>
                    );
                  })}
              </div>

              {/* Navigation Controls - Clean and mobile friendly */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                  className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const newAns = { ...selectedAnswers };
                      delete newAns[currentQuestionIndex];
                      setSelectedAnswers(newAns);
                    }}
                    className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer transition-colors"
                  >
                    Clear
                  </button>

                  {currentQuestionIndex < activeQuestions.length - 1 ? (
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                      className="px-5 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors flex items-center gap-1"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={submitExam}
                      className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1.5 shadow-xs transition-colors"
                    >
                      <Award className="w-4 h-4" />
                      <span>Submit Exam</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer (Setup Mode) */}
        {!testStarted && !testCompleted && (
          <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-end">
            <button
              onClick={handleStartExam}
              className="w-full sm:w-auto px-8 py-3 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white text-sm font-black tracking-wide rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>START EXAM NOW</span>
            </button>
          </div>
        )}
      </div>

      {/* Official Draggable JAMB CBT On-Screen Calculator */}
      <JambCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </div>
  );
};
