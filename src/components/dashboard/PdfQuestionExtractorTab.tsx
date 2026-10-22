/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMB UTME PDF Past Question Extractor & Question Bank Indexer
 * 
 * Enables students and educators to:
 * 1. Upload past question PDF documents or paste text from exam leaflets.
 * 2. Parse and extract questions, options (A-D), answer keys, and explanations in-browser.
 * 3. Review, edit, and approve extracted questions before indexing.
 * 4. Index them into the app's persistent Question Bank (offline localStorage + Firestore).
 * 5. Instantly launch timed CBT exam sessions or topic drills directly on the extracted questions!
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  FileUp,
  FileText,
  Upload,
  CheckCircle2,
  AlertCircle,
  Play,
  Trash2,
  Edit3,
  Check,
  X,
  Sparkles,
  BookOpen,
  Layers,
  Search,
  Filter,
  RefreshCw,
  FolderOpen,
  ArrowRight,
  Database,
  HelpCircle,
  Download,
  ShieldCheck,
  Clock,
  RotateCcw,
} from 'lucide-react';

import {
  extractTextFromPdfFile,
  parseQuestionsFromRawText,
  ExtractedRawQuestion,
  SAMPLE_JAMB_PDF_TEXT,
} from '../../lib/pdfQuestionExtractor';
import {
  getLocalCustomQuestions,
  saveCustomQuestions,
  deleteCustomQuestion,
  clearAllCustomQuestions,
  CustomExtractedQuestion,
  syncCustomQuestionsFromCloud,
} from '../../lib/customQuestionsService';
import { SUBJECT_CONFIGS, SubjectKey, JAMB_YEARS } from '../../data/verifiedTextbooks';

interface PdfQuestionExtractorTabProps {
  onLaunchTest: (title: string, type: string, subject?: string, year?: number) => void;
  showToast: (msg: string) => void;
}

export const PdfQuestionExtractorTab: React.FC<PdfQuestionExtractorTabProps> = ({
  onLaunchTest,
  showToast,
}) => {
  // Active Input Mode
  const [inputMode, setInputMode] = useState<'upload' | 'paste' | 'vault'>('upload');

  // File Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isExtracting, setIsExtracting] = useState<boolean>(false);
  const [extractionProgress, setExtractionProgress] = useState<{ current: number; total: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Paste Text State
  const [pastedText, setPastedText] = useState<string>('');

  // Default Tagging Options
  const [defaultSubject, setDefaultSubject] = useState<string>('Physics');
  const [defaultYear, setDefaultYear] = useState<number>(2024);
  const [defaultTopic, setDefaultTopic] = useState<string>('General Syllabus');

  // Staged Extracted Questions for Review
  const [stagedQuestions, setStagedQuestions] = useState<ExtractedRawQuestion[]>([]);
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);

  // Stored / Indexed Questions in Vault
  const [indexedQuestions, setIndexedQuestions] = useState<CustomExtractedQuestion[]>([]);
  const [vaultSearchQuery, setVaultSearchQuery] = useState<string>('');
  const [vaultSubjectFilter, setVaultSubjectFilter] = useState<string>('All');
  const [isSyncingCloud, setIsSyncingCloud] = useState<boolean>(false);

  // Load Vault Questions on mount
  useEffect(() => {
    loadVault();
  }, []);

  const loadVault = () => {
    const list = getLocalCustomQuestions();
    setIndexedQuestions(list);
  };

  const handleCloudSync = async () => {
    setIsSyncingCloud(true);
    showToast('Syncing indexed questions with cloud database...');
    try {
      const synced = await syncCustomQuestionsFromCloud();
      setIndexedQuestions(synced);
      showToast(`✓ Synced ${synced.length} custom question(s) with cloud!`);
    } catch {
      showToast('Offline mode: Using locally indexed questions.');
    } finally {
      setIsSyncingCloud(false);
    }
  };

  // Handle PDF File Upload & Extraction
  const handleProcessPdf = async (file: File) => {
    setSelectedFile(file);
    setIsExtracting(true);
    setExtractionProgress({ current: 0, total: 1 });

    try {
      showToast(`Reading and parsing ${file.name}...`);
      let text = '';
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        text = await extractTextFromPdfFile(file, (curr, total) => {
          setExtractionProgress({ current: curr, total });
        });
      } else {
        // Plain text file
        text = await file.text();
      }

      if (!text || text.trim().length === 0) {
        throw new Error('No text content found in the document.');
      }

      const parsed = parseQuestionsFromRawText(text, {
        defaultSubject,
        defaultTopic,
        defaultYear,
        sourceFileName: file.name,
      });

      if (parsed.length === 0) {
        showToast('No question structures detected. Try pasting the question text directly in the Paste Text tab.');
      } else {
        setStagedQuestions(parsed);
        showToast(`✓ Extracted ${parsed.length} questions from ${file.name}! Please review below.`);
      }
    } catch (err: unknown) {
      console.error('PDF extraction failed:', err);
      const msg = err instanceof Error ? err.message : 'Failed to extract text from PDF';
      showToast(`Extraction notice: ${msg}. You can also copy & paste the questions directly into the text tab.`);
    } finally {
      setIsExtracting(false);
      setExtractionProgress(null);
    }
  };

  // Handle Text Paste Parsing
  const handleProcessPastedText = () => {
    if (!pastedText.trim()) {
      showToast('Please paste past question text first.');
      return;
    }

    const parsed = parseQuestionsFromRawText(pastedText, {
      defaultSubject,
      defaultTopic,
      defaultYear,
      sourceFileName: 'Pasted Document',
    });

    if (parsed.length === 0) {
      showToast('Could not identify standard numbered questions. Ensure questions are numbered (e.g. 1., 2.) with options (A, B, C, D).');
    } else {
      setStagedQuestions(parsed);
      showToast(`✓ Successfully extracted ${parsed.length} question(s)! Review and index them below.`);
    }
  };

  // Load Sample Text for Quick Demo
  const handleLoadSample = () => {
    setPastedText(SAMPLE_JAMB_PDF_TEXT.trim());
    setInputMode('paste');
    showToast('Loaded official JAMB mock sample text. Click "Extract Questions" to test!');
  };

  // Update a Staged Question Field
  const handleUpdateStaged = (id: string, updates: Partial<ExtractedRawQuestion>) => {
    setStagedQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updates } : q))
    );
  };

  // Delete a Staged Question
  const handleDeleteStaged = (id: string) => {
    setStagedQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  // Index All Staged Questions into Question Bank
  const handleIndexQuestions = async () => {
    if (stagedQuestions.length === 0) return;

    const toSave: CustomExtractedQuestion[] = stagedQuestions.map((q, idx) => ({
      id: q.id,
      sourcePdfName: q.sourceFile || selectedFile?.name || 'Uploaded Document',
      extractedAt: new Date().toLocaleDateString('en-GB'),
      subject: q.subject,
      topic: q.topic,
      year: q.year || defaultYear,
      text: q.text,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
      bookTitle: q.bookTitle || `Extracted PDF Exam (${selectedFile?.name || 'Document'})`,
      author: q.author || 'Accredited Curriculum Item',
      textbookRef: `Extracted Past Question · ${q.subject}`,
      isUserApproved: true,
    }));

    await saveCustomQuestions(toSave);
    loadVault();
    setStagedQuestions([]);
    setSelectedFile(null);
    setPastedText('');
    setInputMode('vault');
    showToast(`🎉 Successfully indexed ${toSave.length} question(s) into your CBT Question Bank!`);
  };

  // Launch Immediate CBT Test on Staged or Vault Questions
  const handleLaunchCbtOnStaged = async () => {
    if (stagedQuestions.length === 0) return;
    await handleIndexQuestions();
    onLaunchTest('Extracted PDF Questions CBT Practice', 'custom_pdf', defaultSubject, defaultYear);
  };

  const handleLaunchCbtOnVault = (subFilter?: string) => {
    const questions = subFilter && subFilter !== 'All'
      ? indexedQuestions.filter((q) => q.subject.toLowerCase() === subFilter.toLowerCase())
      : indexedQuestions;

    if (questions.length === 0) {
      showToast('No questions available to test. Extract a PDF or paste questions first.');
      return;
    }

    const testSubject = subFilter && subFilter !== 'All' ? subFilter : questions[0]?.subject || 'Custom Extracted Questions';
    onLaunchTest(`Extracted PDF CBT Practice (${questions.length} Questions)`, 'custom_pdf', testSubject, defaultYear);
  };

  // Delete from Vault
  const handleDeleteFromVault = async (id: string) => {
    await deleteCustomQuestion(id);
    loadVault();
    showToast('Question removed from Question Bank.');
  };

  const handleClearAllVault = async () => {
    if (window.confirm('Are you sure you want to delete all indexed questions from your question bank?')) {
      await clearAllCustomQuestions();
      loadVault();
      showToast('Question Bank cleared.');
    }
  };

  // Filtered Vault Questions
  const filteredVault = useMemo(() => {
    return indexedQuestions.filter((q) => {
      const matchSub =
        vaultSubjectFilter === 'All' ||
        q.subject.toLowerCase() === vaultSubjectFilter.toLowerCase();
      const matchSearch =
        vaultSearchQuery.trim() === '' ||
        q.text.toLowerCase().includes(vaultSearchQuery.toLowerCase()) ||
        q.topic.toLowerCase().includes(vaultSearchQuery.toLowerCase()) ||
        (q.sourcePdfName && q.sourcePdfName.toLowerCase().includes(vaultSearchQuery.toLowerCase()));
      return matchSub && matchSearch;
    });
  }, [indexedQuestions, vaultSubjectFilter, vaultSearchQuery]);

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-emerald-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-bold tracking-wide uppercase">
            <FileUp className="w-3.5 h-3.5 text-emerald-300" />
            <span>PDF Question Extractor &amp; CBT Bank Indexer</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Extract Past Questions from PDF Files
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Upload past question PDFs, school mocks, or past exam leaflets. The system parses questions, options (A–D), answer keys, and step-by-step working, indexes them directly into your offline question bank, and injects them into your CBT sessions and topic drills.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-emerald-200/90">
            <span className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg backdrop-blur-xs">
              <Database className="w-4 h-4 text-emerald-300" />
              {indexedQuestions.length} PDF Questions Indexed in Bank
            </span>
            <span className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              100% Offline Practice Ready
            </span>
            <span className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg backdrop-blur-xs">
              <Play className="w-4 h-4 text-cyan-300" />
              Direct CBT Simulator Injection
            </span>
          </div>
        </div>
      </div>

      {/* 2. Mode Selector Navigation */}
      <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setInputMode('upload')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              inputMode === 'upload'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>Upload PDF File</span>
          </button>

          <button
            onClick={() => setInputMode('paste')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              inputMode === 'paste'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Paste / Document Text</span>
          </button>

          <button
            onClick={() => setInputMode('vault')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 relative ${
              inputMode === 'vault'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Indexed PDF Vault</span>
            {indexedQuestions.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-black">
                {indexedQuestions.length}
              </span>
            )}
          </button>
        </div>

        <button
          onClick={handleLoadSample}
          className="px-3 py-1.5 rounded-xl border border-dashed border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>Load Sample JAMB Mock Text</span>
        </button>
      </div>

      {/* 3. INPUT AREA BASED ON SELECTED MODE */}
      {inputMode === 'upload' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Upload className="w-5 h-5 text-emerald-600" />
                <span>Upload PDF Document</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Upload your JAMB past questions PDF (e.g. 2024 Mock, Past Questions 1978–2026, or School Revision Exam).
              </p>
            </div>

            {/* Target Subject & Year Config */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <select
                value={defaultSubject}
                onChange={(e) => setDefaultSubject(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
              >
                {Object.values(SUBJECT_CONFIGS).map((s) => (
                  <option key={s.key} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>

              <select
                value={defaultYear}
                onChange={(e) => setDefaultYear(Number(e.target.value))}
                className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
              >
                {JAMB_YEARS.slice(0, 25).map((yr) => (
                  <option key={yr} value={yr}>
                    UTME {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Drag & Drop Zone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-emerald-300 dark:border-emerald-800/80 hover:border-emerald-500 rounded-2xl p-8 sm:p-12 text-center cursor-pointer bg-emerald-50/20 dark:bg-emerald-950/10 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 transition-all space-y-3 group"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.txt"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleProcessPdf(file);
              }}
            />

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 mx-auto flex items-center justify-center group-hover:scale-105 transition-transform">
              <FileUp className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {selectedFile ? selectedFile.name : 'Click to select or drag and drop a PDF file'}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Supports PDF documents and plain text files with multiple-choice questions
              </p>
            </div>

            {isExtracting && (
              <div className="max-w-xs mx-auto pt-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  <span className="flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    Extracting questions...
                  </span>
                  {extractionProgress && (
                    <span>
                      Page {extractionProgress.current} of {extractionProgress.total}
                    </span>
                  )}
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{
                      width: extractionProgress
                        ? `${Math.round((extractionProgress.current / extractionProgress.total) * 100)}%`
                        : '40%',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {inputMode === 'paste' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>Paste Past Questions Text</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Copy text from any PDF reader, digital handout, or past exam file and paste it below.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <select
                value={defaultSubject}
                onChange={(e) => setDefaultSubject(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
              >
                {Object.values(SUBJECT_CONFIGS).map((s) => (
                  <option key={s.key} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>

              <select
                value={defaultYear}
                onChange={(e) => setDefaultYear(Number(e.target.value))}
                className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
              >
                {JAMB_YEARS.slice(0, 25).map((yr) => (
                  <option key={yr} value={yr}>
                    UTME {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <textarea
              rows={12}
              value={pastedText}
              onChange={(e) => setPastedText(e.target.value)}
              placeholder={`Paste your questions here...\n\nExample Format:\n1. Which of the following is a derived SI unit?\nA. Kilogram\nB. Meter\nC. Newton\nD. Second\nAnswer: C\nExplanation: The Newton is derived from mass, length, and time.`}
              className="w-full p-4 rounded-xl text-xs font-mono bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {pastedText.length > 0 ? `${pastedText.length} characters` : 'Supports standard 1. A, B, C, D formatting'}
              </span>

              <div className="flex items-center gap-2">
                {pastedText && (
                  <button
                    onClick={() => setPastedText('')}
                    className="px-3 py-2 rounded-xl text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white font-bold"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={handleProcessPastedText}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Extract &amp; Parse Questions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. STAGED QUESTIONS REVIEW & APPROVAL WORKSPACE */}
      {stagedQuestions.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-emerald-500/80 p-6 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Extraction Complete
              </div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Review Extracted Questions ({stagedQuestions.length})
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verify that question prompts, options (A–D), and answers were accurately recognized. You can edit any question before indexing it into the question bank.
              </p>
            </div>

            {/* Batch Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setStagedQuestions([])}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Discard
              </button>

              <button
                onClick={handleIndexQuestions}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Database className="w-4 h-4" />
                <span>Index into Question Bank</span>
              </button>

              <button
                onClick={handleLaunchCbtOnStaged}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Practice in CBT Now</span>
              </button>
            </div>
          </div>

          {/* Question Cards List */}
          <div className="space-y-4 max-h-[700px] overflow-y-auto pr-1 scrollbar-thin">
            {stagedQuestions.map((q, idx) => {
              const isEditing = editingQuestionId === q.id;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 space-y-4 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {q.subject} • {q.topic}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium">
                        Answer: <strong>Option {q.answer}</strong>
                      </span>
                      <button
                        onClick={() => setEditingQuestionId(isEditing ? null : q.id)}
                        className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                        title="Edit question text or options"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteStaged(q.id)}
                        className="p-1.5 rounded-lg hover:bg-rose-100 dark:hover:bg-rose-950 text-rose-600 transition-colors"
                        title="Remove question"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Question Prompt */}
                  {isEditing ? (
                    <textarea
                      rows={3}
                      value={q.text}
                      onChange={(e) => handleUpdateStaged(q.id, { text: e.target.value })}
                      className="w-full p-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden"
                    />
                  ) : (
                    <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                      {q.text}
                    </p>
                  )}

                  {/* Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                      const isCorrect = q.answer === opt;
                      return (
                        <div
                          key={opt}
                          onClick={() => handleUpdateStaged(q.id, { answer: opt })}
                          className={`p-3 rounded-xl border-2 flex items-center justify-between cursor-pointer transition-colors ${
                            isCorrect
                              ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                          }`}
                        >
                          <div className="flex items-center gap-2 flex-1">
                            <span
                              className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 ${
                                isCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                              }`}
                            >
                              {opt}
                            </span>
                            {isEditing ? (
                              <input
                                type="text"
                                value={q.options[opt]}
                                onChange={(e) =>
                                  handleUpdateStaged(q.id, {
                                    options: { ...q.options, [opt]: e.target.value },
                                  })
                                }
                                className="w-full px-2 py-1 text-xs bg-transparent border-b border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                              />
                            ) : (
                              <span>{q.options[opt]}</span>
                            )}
                          </div>
                          {isCorrect && <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Field */}
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      Step-by-Step Solution &amp; Working:
                    </span>
                    {isEditing ? (
                      <textarea
                        rows={2}
                        value={q.explanation}
                        onChange={(e) => handleUpdateStaged(q.id, { explanation: e.target.value })}
                        className="w-full p-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                      />
                    ) : (
                      <p className="leading-relaxed">{q.explanation}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. INDEXED PDF QUESTION VAULT VIEW */}
      {inputMode === 'vault' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Indexed PDF Question Bank
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold">
                  {indexedQuestions.length} Questions
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                These questions are permanently indexed in your browser storage and will be injected into CBT test simulations and topic drills.
              </p>
            </div>

            {/* Launch CBT Button */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCloudSync}
                disabled={isSyncingCloud}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                title="Sync with cloud database"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncingCloud ? 'animate-spin' : ''}`} />
                <span>Cloud Sync</span>
              </button>

              {indexedQuestions.length > 0 && (
                <>
                  <button
                    onClick={() => handleLaunchCbtOnVault(vaultSubjectFilter)}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Launch CBT on Extracted Questions</span>
                  </button>

                  <button
                    onClick={handleClearAllVault}
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-rose-950 text-slate-500 hover:text-rose-600 transition-colors"
                    title="Clear all indexed questions"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              <span className="text-slate-400 font-semibold shrink-0">Subject:</span>
              {['All', 'Physics', 'Mathematics', 'Chemistry', 'Biology', 'Use of English', 'Economics', 'Government'].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setVaultSubjectFilter(sub)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
                    vaultSubjectFilter === sub
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            <div className="relative flex-1 max-w-xs">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={vaultSearchQuery}
                onChange={(e) => setVaultSearchQuery(e.target.value)}
                placeholder="Search indexed questions..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-hidden"
              />
            </div>
          </div>

          {/* Vault Questions Grid */}
          {filteredVault.length === 0 ? (
            <div className="text-center py-12 space-y-3 bg-slate-50 dark:bg-slate-850/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <FolderOpen className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  No Questions Found in Vault
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Upload a PDF document or paste questions in the tabs above to index them into your CBT Question Bank.
                </p>
              </div>
              <button
                onClick={handleLoadSample}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Load Sample Mock Questions Now
              </button>
            </div>
          ) : (
            <div className="space-y-3 max-h-[650px] overflow-y-auto pr-1 scrollbar-thin">
              {filteredVault.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850/60 hover:border-emerald-300 dark:hover:border-emerald-800/80 transition-colors space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[11px] flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {q.subject} • {q.topic}
                      </span>
                      {q.sourcePdfName && (
                        <span className="text-[11px] text-slate-400 truncate max-w-[150px]">
                          ({q.sourcePdfName})
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold text-[11px]">
                        Answer: Option {q.answer}
                      </span>
                      <button
                        onClick={() => handleDeleteFromVault(q.id)}
                        className="p-1 rounded hover:bg-rose-50 dark:hover:bg-rose-950 text-slate-400 hover:text-rose-600 transition-colors"
                        title="Delete this question"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    {q.text}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px]">
                    {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                      <div
                        key={opt}
                        className={`p-2 rounded-lg border ${
                          opt === q.answer
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-900 dark:text-emerald-200 font-bold'
                            : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        <strong>{opt}.</strong> {q.options[opt]}
                      </div>
                    ))}
                  </div>

                  {q.explanation && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1">
                      {q.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
