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
} from 'lucide-react';
import { auth } from '../../lib/firebase';
import { saveTestResult } from '../../lib/firestoreService';
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
} from '../../data/verifiedTextbooks';

interface CbtTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  testTitle: string;
  testType: string;
  initialSubject?: string;
  initialYear?: number;
}

export const CbtTestModal: React.FC<CbtTestModalProps> = ({
  isOpen,
  onClose,
  testTitle,
  testType,
  initialSubject,
  initialYear,
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
    initialYear || 2025
  );
  const [examMode, setExamMode] = useState<'full' | 'single' | 'sprint'>('full');
  const [duration, setDuration] = useState<number>(120);

  // Active Test State
  const [testStarted, setTestStarted] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<VerifiedQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(120 * 60);

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

    if (initLower.includes('phys') || titleLower.includes('phys')) {
      setSelectedSubjects(['Physics']);
      setExamMode('single');
    } else if (initLower.includes('chem') || titleLower.includes('chem')) {
      setSelectedSubjects(['Chemistry']);
      setExamMode('single');
    } else if (initLower.includes('bio') || titleLower.includes('bio')) {
      setSelectedSubjects(['Biology']);
      setExamMode('single');
    } else if (initLower.includes('math') || titleLower.includes('math')) {
      setSelectedSubjects(['Mathematics']);
      setExamMode('single');
    } else if (initLower.includes('eng') || titleLower.includes('eng') || titleLower.includes('novel')) {
      setSelectedSubjects(['Use of English']);
      setExamMode('single');
    } else {
      setSelectedSubjects(['Use of English', 'Mathematics', 'Physics', 'Chemistry']);
      setExamMode('full');
    }

    if (initialYear && initialYear >= 1978 && initialYear <= 2025) {
      setSelectedYear(initialYear);
    }
  }, [testTitle, initialSubject, initialYear, isOpen]);

  // Available subjects for UTME
  const availableSubjects = [
    { name: 'Use of English', compulsory: true, book: 'A-Z OF ENGLISH' },
    { name: 'Mathematics', compulsory: false, book: 'HIDDEN FACTS IN MATHEMATICS' },
    { name: 'Physics', compulsory: false, book: 'NEW SCHOOL PHYSICS' },
    { name: 'Chemistry', compulsory: false, book: 'NEW SCHOOL CHEMISTRY' },
    { name: 'Biology', compulsory: false, book: 'MODERN BIOLOGY' },
  ];

  const toggleSubject = (subName: string) => {
    if (examMode === 'single') {
      setSelectedSubjects([subName]);
      return;
    }

    if (subName === 'Use of English') return; // English is compulsory in full CBT mode

    if (selectedSubjects.includes(subName)) {
      if (selectedSubjects.length > 2) {
        setSelectedSubjects(selectedSubjects.filter((s) => s !== subName));
      }
    } else {
      if (selectedSubjects.length < 4) {
        setSelectedSubjects([...selectedSubjects, subName]);
      }
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
      customQuestionCount: examMode === 'sprint' ? 20 : undefined,
    });

    setActiveQuestions(questions);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTimeLeftSeconds(duration * 60);
    setTestCompleted(null);
    setTestStarted(true);
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

    let synced = false;
    if (auth.currentUser && effectiveOnline) {
      try {
        await saveTestResult({
          id: testId,
          userId: auth.currentUser.uid,
          testTitle:
            selectedYear === 'random'
              ? `${testTitle} (1978-2025 Cross-Year Mix)`
              : `${testTitle} (${selectedYear} UTME)`,
          testType,
          score: grade.totalJambScore, // Scored over 400 (JAMB Standard)
          totalQuestions: grade.totalQuestions,
          percentage: grade.overallPercentage,
          timeSpentSeconds: timeSpent > 0 ? timeSpent : 180,
        });
        synced = true;
      } catch (err) {
        console.warn('Sync delayed, saved locally:', err);
      }
    }

    saveLocalTestResult({
      id: testId,
      userId: auth.currentUser?.uid,
      testTitle:
        selectedYear === 'random'
          ? `${testTitle} (1978-2025 Cross-Year Mix)`
          : `${testTitle} (${selectedYear} UTME)`,
      testType,
      score: grade.totalJambScore,
      totalQuestions: grade.totalQuestions,
      percentage: grade.overallPercentage,
      timeSpentSeconds: timeSpent > 0 ? timeSpent : 180,
      subjects: selectedSubjects,
      syncedToCloud: synced,
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
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[95vh] transition-colors">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-black text-xs shadow-xs">
              UTME
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                  {testTitle}
                </h3>
                {selectedYear !== 'random' ? (
                  <span className="px-2 py-0.5 bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 rounded text-[11px] font-black border border-rose-300 dark:border-rose-800">
                    JAMB {selectedYear}
                  </span>
                ) : (
                  <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 rounded text-[11px] font-black border border-purple-300 dark:border-purple-800">
                    1978 – 2025 Archive
                  </span>
                )}
                {!effectiveOnline ? (
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 rounded text-[10px] font-bold flex items-center gap-1">
                    <WifiOff className="w-3 h-3" />
                    <span>Offline Safe</span>
                  </span>
                ) : (
                  <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 rounded text-[10px] font-bold flex items-center gap-1">
                    <Cloud className="w-3 h-3" />
                    <span>Cloud Ready</span>
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Official JAMB CBT Simulator · Verified References from 5 Standard Textbooks
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
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
                      {selectedYear === 'random' ? '1978–2025' : `${selectedYear}`}
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
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  1. Select Examination Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
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
                      60 English + 40 each for 3 subjects. Graded over 400.
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

                  <button
                    type="button"
                    onClick={() => {
                      setExamMode('sprint');
                      setDuration(25);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      examMode === 'sprint'
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-200 shadow-2xs'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">Speed Sprint</span>
                      <span className="text-[10px] font-black px-1.5 py-0.5 bg-amber-600 text-white rounded">
                        20 Qs
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      Fast 20-question blitz test with instant explanations.
                    </p>
                  </button>
                </div>
              </div>

              {/* Year Selector (1978 to 2025) */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span>2. Select UTME Past Questions Year (1978 – 2025)</span>
                  </label>
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                    48 Examination Years Indexed
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-full sm:w-1/2">
                    <select
                      value={selectedYear}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedYear(val === 'random' ? 'random' : parseInt(val, 10));
                      }}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs cursor-pointer shadow-2xs"
                    >
                      <option value="random">🌟 Random Cross-Year UTME Mix (1978 – 2025)</option>
                      <optgroup label="Recent UTME Years (2020 - 2025)">
                        {[2025, 2024, 2023, 2022, 2021, 2020].map((y) => (
                          <option key={y} value={y}>
                            JAMB UTME {y} (Official Authentic Paper)
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="2010 - 2019 Past Questions">
                        {[2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010].map((y) => (
                          <option key={y} value={y}>
                            JAMB UTME {y}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="2000 - 2009 Past Questions">
                        {[2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000].map((y) => (
                          <option key={y} value={y}>
                            JAMB UTME {y}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="1978 - 1999 Classic Archive">
                        {JAMB_YEARS.filter((y) => y < 2000).map((y) => (
                          <option key={y} value={y}>
                            JAMB UTME {y} Classic
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Quick Year Shortcuts */}
                  <div className="flex items-center gap-1.5 flex-wrap w-full sm:w-1/2">
                    {[2025, 2024, 2023, 2020, 2015, 2000, 1978].map((yr) => (
                      <button
                        key={yr}
                        type="button"
                        onClick={() => setSelectedYear(yr)}
                        className={`px-2.5 py-1 text-xs rounded-lg font-bold transition-colors cursor-pointer ${
                          selectedYear === yr
                            ? 'bg-emerald-600 text-white shadow-2xs'
                            : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {yr}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    3. Select UTME Subjects ({selectedSubjects.length}{' '}
                    {examMode === 'full' ? '/ 4 Required' : 'Selected'})
                  </label>
                  <span className="text-[11px] text-slate-500">
                    {examMode === 'full'
                      ? '60 Qs (English) + 40 Qs each (3 others) = 180 Qs'
                      : 'Subject-specific drill'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {availableSubjects.map((sub) => {
                    const isSelected = selectedSubjects.includes(sub.name);
                    return (
                      <button
                        key={sub.name}
                        type="button"
                        onClick={() => toggleSubject(sub.name)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-200 shadow-2xs'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs">{sub.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[10px]">
                          <span className="text-slate-500 dark:text-slate-400 truncate max-w-[70%]">
                            Ref: {sub.book}
                          </span>
                          <span className="font-bold text-emerald-700 dark:text-emerald-400">
                            {sub.name === 'Use of English' ? '60 Qs' : '40 Qs'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Duration and 8-Key Instructions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Timer Duration</span>
                    <div className="flex gap-1.5 font-bold">
                      {[30, 60, 120].map((mins) => (
                        <button
                          key={mins}
                          type="button"
                          onClick={() => setDuration(mins)}
                          className={`px-2 py-0.5 rounded text-xs cursor-pointer ${
                            duration === mins
                              ? 'bg-rose-600 text-white'
                              : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                          }`}
                        >
                          {mins}m
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                    Official JAMB time limit is 120 minutes for the full 180-question test.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">
                    Authentic 8-Key CBT Navigation:
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Press <strong>A, B, C, D</strong> for choices · <strong>N</strong> (Next) ·{' '}
                    <strong>P</strong> (Previous) · <strong>R</strong> (Clear) · <strong>S</strong>{' '}
                    (Submit).
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* ========================================================
               3. ACTIVE CBT EXAM SIMULATION (WITH SUBJECT QUICK JUMP)
               ======================================================== */
            <div className="space-y-4">
              {/* Subject Tabs Bar (Authentic JAMB CBT Navigation) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
                {subjectPartitions.map((part) => {
                  const isCurrent =
                    currentQuestionIndex >= part.startIndex &&
                    currentQuestionIndex < part.startIndex + part.count;
                  return (
                    <button
                      key={part.subject}
                      onClick={() => setCurrentQuestionIndex(part.startIndex)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>{part.subject}</span>
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                          isCurrent
                            ? 'bg-rose-700 text-rose-100'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {part.answeredCount}/{part.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Question Metadata & Timer Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 rounded font-black text-xs">
                    {activeQuestions[currentQuestionIndex]?.subject}
                  </span>
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 rounded font-bold text-xs">
                    JAMB {activeQuestions[currentQuestionIndex]?.year}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    Question {currentQuestionIndex + 1} of {activeQuestions.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-mono font-black text-sm bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-xl border border-rose-200/60 dark:border-rose-900/60">
                    <Clock className="w-4 h-4 animate-pulse" />
                    <span>{formattedTime}</span>
                  </div>
                </div>
              </div>

              {/* Question Card */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700">
                <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                  {activeQuestions[currentQuestionIndex]?.text}
                </p>
              </div>

              {/* Verified Authority Badge for Current Question */}
              <div className="p-3 bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 rounded-xl text-xs flex items-center justify-between gap-2 shadow-2xs">
                <div className="flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-bold text-emerald-900 dark:text-emerald-200">
                    Verified Source:
                  </span>
                  <span className="font-mono text-emerald-800 dark:text-emerald-300 truncate max-w-sm">
                    {activeQuestions[currentQuestionIndex]?.textbookRef}
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-200/80 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 rounded text-[10px] font-black uppercase shrink-0">
                  Accredited
                </span>
              </div>

              {/* Options */}
              <div className="space-y-2">
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
                            ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-200 font-semibold shadow-2xs ring-1 ring-rose-500/40'
                            : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                            isChecked
                              ? 'bg-rose-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          {key}
                        </span>
                        <span>{val}</span>
                      </button>
                    );
                  })}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                  className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous (P)</span>
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
                    Clear (R)
                  </button>

                  {currentQuestionIndex < activeQuestions.length - 1 ? (
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                      className="px-5 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors flex items-center gap-1"
                    >
                      <span>Next (N)</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={submitExam}
                      className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1.5 shadow-xs transition-colors"
                    >
                      <Award className="w-4 h-4" />
                      <span>Submit Exam (S)</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer (Setup Mode) */}
        {!testStarted && !testCompleted && (
          <div className="px-5 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Shortcut keys: A, B, C, D (Options) · N (Next) · P (Prev) · S (Submit)
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleStartExam}
                className="px-6 py-2 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Start {examMode === 'full' ? '180-Question Exam' : 'Practice Drill'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
