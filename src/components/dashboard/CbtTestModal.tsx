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
  Flame,
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
  getCompletedTwoHourTestsCount,
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
  studentEmail?: string;
}

export const isLekkiNovelCheck = (title?: string, type?: string, subject?: string) => {
  const t = (title || '').toLowerCase();
  const s = (subject || '').toLowerCase();
  const tp = (type || '').toLowerCase();
  return (
    tp === 'novel' ||
    t.includes('novel') ||
    t.includes('lekki') ||
    t.includes('headmaster') ||
    s.includes('lekki') ||
    s.includes('headmaster') ||
    s.includes('novel')
  );
};

export const CbtTestModal: React.FC<CbtTestModalProps> = ({
  isOpen,
  onClose,
  testTitle,
  testType,
  initialSubject,
  initialYear,
  studentName,
  studentEmail,
}) => {
  const { effectiveOnline } = useNetwork();
  const isInitialLekki = isLekkiNovelCheck(testTitle, testType, initialSubject);

  // Test Configuration State
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    isInitialLekki
      ? ['The Lekki Headmaster']
      : ['Use of English', 'Mathematics', 'Physics', 'Chemistry']
  );
  const [selectedYear, setSelectedYear] = useState<number | 'random'>(
    initialYear || 2026
  );
  const [examMode, setExamMode] = useState<'full' | 'single' | 'sprint' | 'novel'>(
    isInitialLekki ? 'novel' : 'full'
  );
  const [duration, setDuration] = useState<number>(isInitialLekki ? 20 : 120);
  const [seenCount, setSeenCount] = useState<number>(0);

  // Active Test State
  const [testStarted, setTestStarted] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<VerifiedQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(
    (isInitialLekki ? 20 : 120) * 60
  );
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

    // Reset previous run state so every launch is pristine
    setTestStarted(false);
    setTestCompleted(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setActiveQuestions([]);

    const titleLower = (testTitle || '').toLowerCase();
    const typeLower = (testType || '').toLowerCase();
    const isLekkiNovel = isLekkiNovelCheck(testTitle, testType, initialSubject);

    if (isLekkiNovel) {
      setSelectedSubjects(['The Lekki Headmaster']);
      setExamMode('novel');
      setDuration(20);
      setTimeLeftSeconds(20 * 60);
    } else if (initialSubject) {
      const key = normalizeSubjectKey(initialSubject);
      const conf = SUBJECT_CONFIGS[key];
      if (conf) {
        setSelectedSubjects([conf.name]);
        setExamMode('single');
        setDuration(conf.name === 'Use of English' ? 60 : 45);
        setTimeLeftSeconds((conf.name === 'Use of English' ? 60 : 45) * 60);
      }
    } else if (
      typeLower === 'jamb' ||
      typeLower === 'offline' ||
      titleLower.includes('full') ||
      titleLower.includes('180') ||
      titleLower.includes('mock') ||
      titleLower.includes('simulation') ||
      titleLower.includes('jamb cbt')
    ) {
      // Standard Full JAMB CBT Mock: Exactly 60 English + 40 each for 3 other subjects (180 questions)
      setSelectedSubjects(['Use of English', 'Mathematics', 'Physics', 'Chemistry']);
      setExamMode('full');
      setDuration(120);
      setTimeLeftSeconds(120 * 60);
    } else if (testTitle && !titleLower.includes('full') && !titleLower.includes('180')) {
      const key = normalizeSubjectKey(testTitle);
      const conf = SUBJECT_CONFIGS[key];
      if (conf && titleLower.includes(conf.name.toLowerCase())) {
        setSelectedSubjects([conf.name]);
        setExamMode('single');
        setDuration(conf.name === 'Use of English' ? 60 : 45);
        setTimeLeftSeconds((conf.name === 'Use of English' ? 60 : 45) * 60);
      } else {
        setSelectedSubjects(['Use of English', 'Mathematics', 'Physics', 'Chemistry']);
        setExamMode('full');
        setDuration(120);
        setTimeLeftSeconds(120 * 60);
      }
    } else {
      setSelectedSubjects(['Use of English', 'Mathematics', 'Physics', 'Chemistry']);
      setExamMode('full');
      setDuration(120);
      setTimeLeftSeconds(120 * 60);
    }

    if (initialYear && initialYear >= 1978 && initialYear <= 2026) {
      setSelectedYear(initialYear);
    }
    setSeenCount(getSeenQuestionsCount());
  }, [testTitle, initialSubject, initialYear, isOpen, testType]);

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
    const isLekkiNovel = isLekkiNovelCheck(testTitle, testType, initialSubject) || examMode === 'novel';

    const effectiveSubjects = isLekkiNovel ? ['The Lekki Headmaster'] : selectedSubjects;
    const effectiveMode = isLekkiNovel ? 'novel' : examMode;
    const effectiveCount = isLekkiNovel ? 30 : examMode === 'sprint' ? 20 : undefined;
    const effectiveDurationMinutes = isLekkiNovel ? 20 : duration;

    const difficultyTier = getCompletedTwoHourTestsCount();

    // Generate questions according to user requirements:
    // Full CBT test brings out 60 questions from English and 40 from the 3 other subjects;
    // Lekki Headmaster test brings out strictly 30 questions on The Lekki Headmaster for 20 minutes;
    // Progressive toughness increases with every completed 2-hour test without repeating questions.
    const questions = assembleUtmeTest({
      subjects: effectiveSubjects,
      year: selectedYear,
      mode: effectiveMode,
      customQuestionCount: effectiveCount,
      difficultyTier,
    });

    // Enforce that every question has subject: 'The Lekki Headmaster' and no normal English
    const finalQuestions = isLekkiNovel
      ? questions.slice(0, 30).map((q, idx) => ({
          ...q,
          subject: 'The Lekki Headmaster',
          questionNumber: idx + 1,
          topic: q.topic && q.topic.includes('Headmaster') ? q.topic : `Chapter ${((idx % 12) + 1)}: "The Lekki Headmaster"`,
          bookTitle: 'The Lekki Headmaster',
          author: 'Kabir Alabi Garba',
        }))
      : questions;

    setActiveQuestions(finalQuestions);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTimeLeftSeconds(effectiveDurationMinutes * 60);
    setDuration(effectiveDurationMinutes);
    setTestCompleted(null);
    setTestStarted(true);

    // Record question IDs and signatures as seen to guarantee zero repetition in future random tests
    markQuestionsSeen(finalQuestions.map((q) => q.id));
    recordSeenSignatures(
      finalQuestions.map((q) => getQuestionCoreSignature(q.text)),
      finalQuestions.map((q) => q.id)
    );
    setSeenCount(getSeenQuestionsCount());

    // Advance 2-hour test progression counter so every subsequent 2-hour test becomes progressively tougher
    if ((effectiveMode === 'full' || finalQuestions.length === 180) && effectiveDurationMinutes >= 120) {
      try {
        const prevStarted = parseInt(localStorage.getItem('jambix_2hr_tests_started_count') || '0', 10);
        localStorage.setItem('jambix_2hr_tests_started_count', String((isNaN(prevStarted) ? 0 : prevStarted) + 1));
      } catch {}
    }
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

  // Format time (MM:SS for <= 1 hour, HH:MM:SS for > 1 hour)
  const formattedTime = useMemo(() => {
    const hours = Math.floor(timeLeftSeconds / 3600);
    const minutes = Math.floor((timeLeftSeconds % 3600) / 60);
    const seconds = timeLeftSeconds % 60;
    if (hours === 0) {
      return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;
    }
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

  // Current active subject partition
  const currentPartition = useMemo(() => {
    if (!activeQuestions[currentQuestionIndex]) return null;
    const curSub = activeQuestions[currentQuestionIndex].subject;
    return subjectPartitions.find((p) => p.subject === curSub) || null;
  }, [activeQuestions, currentQuestionIndex, subjectPartitions]);

  const currentPartitionQuestions = useMemo(() => {
    if (!currentPartition) {
      return activeQuestions.map((_, i) => ({ globalIndex: i, subjectNumber: i + 1 }));
    }
    const list: { globalIndex: number; subjectNumber: number }[] = [];
    for (let i = 0; i < currentPartition.count; i++) {
      const globalIdx = currentPartition.startIndex + i;
      list.push({ globalIndex: globalIdx, subjectNumber: i + 1 });
    }
    return list;
  }, [currentPartition, activeQuestions]);

  const currentSubjectQNum = currentPartition
    ? currentQuestionIndex - currentPartition.startIndex + 1
    : currentQuestionIndex + 1;
  const currentSubjectTotal = currentPartition?.count || activeQuestions.length;

  // Determine if active session is strictly The Lekki Headmaster Novel CBT
  const isCurrentLekkiTest = useMemo(() => {
    if (examMode === 'full') return false;
    return (
      isLekkiNovelCheck(testTitle, testType, initialSubject) ||
      examMode === 'novel' ||
      (activeQuestions.length === 30 && activeQuestions.every((q) => q.subject === 'The Lekki Headmaster'))
    );
  }, [testTitle, testType, initialSubject, examMode, activeQuestions]);

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

    // Strict Leaderboard Regulation: ONLY 2-hour full CBT exams (180 questions across 4 subjects and 120-minute duration) are submitted to the live leaderboard
    const isFullTwoHour = (examMode === 'full' || activeQuestions.length === 180) && (duration === 120 || !duration);
    const computedTestType = isFullTwoHour ? 'full' : (examMode || testType || 'single');
    const computedTitle = isFullTwoHour
      ? (selectedYear === 'random'
          ? 'Full JAMB UTME CBT (2-Hr Standard Mock - 1978-2026 Mix)'
          : `Full JAMB UTME CBT (2-Hr Standard Mock - ${selectedYear})`)
      : (selectedYear === 'random'
          ? `${testTitle} (1978-2026 Cross-Year Mix)`
          : `${testTitle} (${selectedYear} UTME)`);

    let candidateName = (studentName || '').trim();
    if (!candidateName || candidateName === 'UTME Candidate' || candidateName.includes('@')) {
      try {
        if (auth.currentUser) {
          const profile = await getUserProfile(auth.currentUser.uid);
          if (profile && profile.fullName && profile.fullName.trim()) {
            candidateName = profile.fullName.trim();
          }
        }
      } catch (e) {
        console.warn('Could not fetch user profile for registered name:', e);
      }
    }
    if (!candidateName) {
      candidateName = auth.currentUser?.displayName || auth.currentUser?.email?.split('@')[0] || 'UTME Candidate';
    }
    const userEmail = (studentEmail || auth.currentUser?.email || '').trim();

    let synced = false;
    // ONLY the 2-Hour Full CBT Mock Exam (180 questions) is recorded to the live stream leaderboard
    if (auth.currentUser && effectiveOnline && isFullTwoHour) {
      try {
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
          totalQuestions: 180,
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
      candidateName,
      userEmail,
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

    // Notify components immediately so live leaderboard updates in real-time
    if (typeof window !== 'undefined') {
      if (isFullTwoHour) {
        try {
          const prevCount = parseInt(localStorage.getItem('jambix_completed_2hr_tests_count') || '0', 10);
          localStorage.setItem('jambix_completed_2hr_tests_count', String((isNaN(prevCount) ? 0 : prevCount) + 1));
        } catch {}
      }
      window.dispatchEvent(new CustomEvent('jambix_test_submitted', { detail: { testId, isFullTwoHour } }));
    }

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
                      {isCurrentLekkiTest ? (
                        <option value="All">The Lekki Headmaster ({activeQuestions.length} Questions)</option>
                      ) : (
                        <>
                          <option value="All">All Subjects ({activeQuestions.length})</option>
                          {Array.from(new Set(activeQuestions.map((q) => q.subject))).map((sub) => (
                            <option key={sub} value={sub}>
                              {sub}
                            </option>
                          ))}
                        </>
                      )}
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
              {examMode === 'novel' ? (
                /* DEDICATED THE LEKKI HEADMASTER CBT EXAM PANEL */
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 border-2 border-emerald-500/50 text-white shadow-lg space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Official UTME Prescribed Novel</span>
                      </div>
                      <span className="px-2.5 py-1 bg-amber-400 text-slate-950 font-black rounded-lg text-xs shadow-xs">
                        Author: Kabir Alabi Garba
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        The Lekki Headmaster CBT Examination
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 leading-relaxed">
                        This test is strictly and exclusively on <strong>&ldquo;The Lekki Headmaster&rdquo;</strong> by Kabir Alabi Garba. It does not contain questions from any other novel or non-novel subject. Every single question comprehensively examines the narrative, all 12 chapters, key characters (Bepo, Mrs. Ibidun Gloss, Chief Didi Ogba, Jide), central themes (Japa syndrome, educational integrity, parental pressure), and official UTME question formats.
                      </p>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-white/10 text-xs">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                        <span className="text-[10px] text-emerald-300 uppercase font-bold block">Examination Scope</span>
                        <span className="text-base sm:text-lg font-black text-white">30 Questions</span>
                        <span className="text-[10px] text-emerald-200/70 block">100% Lekki Headmaster</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                        <span className="text-[10px] text-emerald-300 uppercase font-bold block">Official CBT Timer</span>
                        <span className="text-base sm:text-lg font-black text-amber-300">20 Minutes</span>
                        <span className="text-[10px] text-emerald-200/70 block">Official 20-min timed drill</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                        <span className="text-[10px] text-emerald-300 uppercase font-bold block">Chapters Tested</span>
                        <span className="text-base sm:text-lg font-black text-emerald-400">Chapters 1 – 12</span>
                        <span className="text-[10px] text-emerald-200/70 block">Full Novel Mastery</span>
                      </div>
                    </div>
                  </div>

                  {/* Subject Selection Dropdown strictly showing The Lekki Headmaster */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="lekki-modal-subject-select" className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5 cursor-pointer">
                        <BookOpen className="w-4 h-4 text-emerald-600" />
                        <span>Prescribed Subject (Official CBT Novel):</span>
                      </label>
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                        1 Subject · 30 Questions · 20 Mins
                      </span>
                    </div>
                    <select
                      id="lekki-modal-subject-select"
                      value="The Lekki Headmaster"
                      disabled
                      className="w-full p-2.5 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs shadow-2xs cursor-not-allowed"
                    >
                      <option value="The Lekki Headmaster">
                        The Lekki Headmaster (Kabir Alabi Garba · 30 UTME Novel Questions)
                      </option>
                    </select>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      This CBT drill is locked strictly to <strong>The Lekki Headmaster</strong>. General English questions (antonyms, idioms, comprehension passages) are completely excluded.
                    </p>
                  </div>

                  {/* Zero repetition guarantee banner */}
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>Zero-Repeat CBT Guarantee:</strong> Questions are randomized across all 12 chapters. Questions you have answered in earlier practice runs are automatically excluded, ensuring you experience fresh, diverse questions every time you practice.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Adaptive Progressive Toughness & Zero-Repeat Banner */}
                  {(() => {
                    const completedCount = getCompletedTwoHourTestsCount();
                    const tierLevel = completedCount + 1;
                    const tierLabel =
                      tierLevel === 1
                        ? 'Standard Difficulty (Level 1)'
                        : tierLevel === 2
                        ? 'Tougher Problem Sets (Level 2)'
                        : tierLevel === 3
                        ? 'Advanced High Rigor (Level 3)'
                        : `Mastery UTME Toughness (Level ${tierLevel})`;
                    return (
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-emerald-50 dark:from-amber-950/40 dark:to-emerald-950/30 border border-amber-300 dark:border-amber-800 flex items-center justify-between text-xs gap-3">
                        <div className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200">
                          <Flame className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                          <p className="leading-snug">
                            <strong>Adaptive 2-Hr Test Toughness:</strong> <span className="text-amber-700 dark:text-amber-300 font-bold">{tierLabel}</span>. As you complete more 2-hour tests, each next test becomes systematically tougher with <strong>zero repeated questions</strong> ({seenCount} previously seen questions excluded).
                          </p>
                        </div>
                        <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 shrink-0">
                          {completedCount} Mock(s) Completed
                        </span>
                      </div>
                    );
                  })()}

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
                </>
              )}
            </div>
          ) : (
            /* ========================================================
               3. ACTIVE CBT EXAM SIMULATION (WITH SUBJECT QUICK JUMP)
               ======================================================== */
            <div className="space-y-4">
              {/* Official JAMB CBT Subject Tabs (Showing 60 Qs for English and 40 Qs each for other subjects) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {isCurrentLekkiTest ? (
                  <div className="col-span-2 sm:col-span-4 p-3 rounded-xl bg-emerald-600 text-white shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-100 block">
                        Prescribed Literature Novel Exam
                      </span>
                      <h4 className="text-xs sm:text-sm font-black">The Lekki Headmaster</h4>
                    </div>
                    <span className="text-xs font-black bg-white/20 px-2.5 py-1 rounded-lg">
                      30 Questions · 20 Mins
                    </span>
                  </div>
                ) : (
                  subjectPartitions.map((part, pIdx) => {
                    const isCurrentSubject = activeQuestions[currentQuestionIndex]?.subject === part.subject;
                    return (
                      <button
                        key={part.subject}
                        type="button"
                        onClick={() => setCurrentQuestionIndex(part.startIndex)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isCurrentSubject
                            ? 'bg-rose-600 text-white border-rose-700 shadow-md ring-2 ring-rose-400/50'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[10px] font-black uppercase tracking-wider ${
                              isCurrentSubject ? 'text-rose-100' : 'text-slate-500 dark:text-slate-400'
                            }`}
                          >
                            Subject {pIdx + 1}
                          </span>
                          <span
                            className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                              isCurrentSubject
                                ? 'bg-white/25 text-white'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {part.count} Qs
                          </span>
                        </div>
                        <div className="mt-1 font-bold text-xs truncate">
                          {part.subject}
                        </div>
                        <div
                          className={`mt-1 text-[10px] font-medium ${
                            isCurrentSubject ? 'text-rose-100' : 'text-emerald-600 dark:text-emerald-400'
                          }`}
                        >
                          {part.answeredCount} of {part.count} Answered
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Subject Quick Jump Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <label htmlFor="cbt-active-subject-select" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shrink-0 cursor-pointer">
                    <BookOpen className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                    <span>Jump to Subject:</span>
                  </label>
                  <select
                    id="cbt-active-subject-select"
                    value={activeQuestions[currentQuestionIndex]?.subject || 'Use of English'}
                    onChange={(e) => {
                      if (isCurrentLekkiTest) return;
                      const targetSub = e.target.value;
                      const part = subjectPartitions.find((p) => p.subject === targetSub);
                      if (part) {
                        setCurrentQuestionIndex(part.startIndex);
                      }
                    }}
                    className="w-full sm:max-w-xs px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs cursor-pointer shadow-2xs focus:ring-2 focus:ring-rose-500/30"
                  >
                    {isCurrentLekkiTest ? (
                      <option value="The Lekki Headmaster">
                        The Lekki Headmaster ({activeQuestions.filter((_, idx) => selectedAnswers[idx]).length}/{activeQuestions.length} Answered)
                      </option>
                    ) : (
                      subjectPartitions.map((part) => (
                        <option key={part.subject} value={part.subject}>
                          {part.subject} ({part.count} Questions · {part.answeredCount}/{part.count} Answered)
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 shrink-0">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Subject Progress:</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-900/60 text-xs">
                    {isCurrentLekkiTest
                      ? `${activeQuestions.filter((_, idx) => selectedAnswers[idx]).length} of ${activeQuestions.length} Answered`
                      : `${currentPartition?.answeredCount || 0} of ${currentPartition?.count || 0} Answered (${activeQuestions[currentQuestionIndex]?.subject || ''})`}
                  </span>
                </div>
              </div>

              {/* Question Metadata & Timer Bar - Clean and Uncluttered */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 flex-wrap gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-rose-600 text-white rounded-lg font-black text-xs shadow-2xs">
                    {activeQuestions[currentQuestionIndex]?.subject}
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                    Question {currentSubjectQNum} of {currentSubjectTotal}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    (Overall CBT Q{currentQuestionIndex + 1} of {activeQuestions.length})
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

              {/* Options - Spacious, touch-friendly */}
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

              {/* Navigation Controls */}
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

              {/* Subject Question Number Palette (1 to 60 for English, 1 to 40 for other subjects) */}
              <div className="mt-2 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span>{activeQuestions[currentQuestionIndex]?.subject} Question Palette</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-extrabold">
                      {currentSubjectTotal} Questions
                    </span>
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Click any number to jump directly to that question
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1">
                  {currentPartitionQuestions.map(({ globalIndex, subjectNumber }) => {
                    const isCurrent = globalIndex === currentQuestionIndex;
                    const isAnswered = Boolean(selectedAnswers[globalIndex]);
                    return (
                      <button
                        key={globalIndex}
                        type="button"
                        onClick={() => setCurrentQuestionIndex(globalIndex)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-rose-600 text-white shadow-xs ring-2 ring-rose-400'
                            : isAnswered
                            ? 'bg-emerald-600 text-white shadow-2xs'
                            : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
                        }`}
                        title={`Question ${subjectNumber} ${isAnswered ? '(Answered)' : '(Unanswered)'}`}
                      >
                        {subjectNumber}
                      </button>
                    );
                  })}
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
              className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-black tracking-wide rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>
                {examMode === 'novel'
                  ? 'START LEKKI HEADMASTER CBT EXAM (30 Qs)'
                  : 'START EXAM NOW'}
              </span>
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
