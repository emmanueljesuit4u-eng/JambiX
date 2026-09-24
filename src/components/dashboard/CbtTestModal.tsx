/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Play, Clock, BookOpen, CheckCircle, Award } from 'lucide-react';

interface CbtTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  testTitle: string;
  testType: string;
}

export const CbtTestModal: React.FC<CbtTestModalProps> = ({
  isOpen,
  onClose,
  testTitle,
  testType,
}) => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([
    'Use of English',
    'Mathematics',
    'Physics',
    'Chemistry',
  ]);
  const [duration, setDuration] = useState<number>(120);
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  if (!isOpen) return null;

  const availableSubjects = [
    'Use of English (Compulsory)',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Economics',
    'Government',
    'Literature in English',
  ];

  const sampleQuestions = [
    {
      id: 1,
      subject: 'Use of English',
      text: 'From the words lettered A to D, choose the word or group of words that best completes the sentence: The candidate was commended for her _______ performance in the UTME.',
      options: {
        A: 'exceptional',
        B: 'exceptionable',
        C: 'excepting',
        D: 'excessive',
      },
      answer: 'A',
    },
    {
      id: 2,
      subject: 'Mathematics',
      text: 'If log₁₀ 2 = 0.3010 and log₁₀ 3 = 0.4771, calculate the value of log₁₀ 18.',
      options: {
        A: '1.2552',
        B: '1.0791',
        C: '1.1761',
        D: '0.9542',
      },
      answer: 'A',
    },
    {
      id: 3,
      subject: 'Physics',
      text: 'A car travelling at 20 m/s accelerates uniformly at 2.5 m/s² for 8 seconds. What is the distance covered during this period?',
      options: {
        A: '160 m',
        B: '240 m',
        C: '200 m',
        D: '280 m',
      },
      answer: 'B',
    },
  ];

  const toggleSubject = (sub: string) => {
    if (sub.includes('Use of English')) return; // always compulsory
    if (selectedSubjects.includes(sub)) {
      if (selectedSubjects.length > 2) {
        setSelectedSubjects(selectedSubjects.filter((s) => s !== sub));
      }
    } else {
      if (selectedSubjects.length < 4) {
        setSelectedSubjects([...selectedSubjects, sub]);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold text-xs">
              CBT
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">{testTitle}</h3>
              <p className="text-xs text-slate-500">JAMBix Official 2026/2027 CBT Engine</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {!testStarted ? (
            <>
              {/* Exam Info Card */}
              <div className="p-4 bg-rose-50/60 border border-rose-200/80 rounded-xl text-rose-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-rose-600 text-white rounded-xl">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700">
                      Standard CBT Duration
                    </h4>
                    <p className="text-sm font-extrabold text-slate-900">
                      {duration} Minutes · 4 Subjects · 180 Questions
                    </p>
                  </div>
                </div>
                <div className="flex gap-1.5 bg-white p-1 rounded-lg border border-rose-200 text-xs font-semibold">
                  <button
                    onClick={() => setDuration(60)}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      duration === 60 ? 'bg-rose-600 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    60m (Express)
                  </button>
                  <button
                    onClick={() => setDuration(120)}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      duration === 120 ? 'bg-rose-600 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    120m (Full)
                  </button>
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Your 4 UTME Subjects (Required)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableSubjects.map((sub) => {
                    const isSelected =
                      selectedSubjects.includes(sub) ||
                      (sub.includes('Use of English') && selectedSubjects.includes('Use of English'));
                    return (
                      <button
                        key={sub}
                        type="button"
                        onClick={() => toggleSubject(sub.replace(' (Compulsory)', ''))}
                        className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-rose-50 border-rose-500 text-rose-900 shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                          <span>{sub}</span>
                        </span>
                        {isSelected && <CheckCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Instructions */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1.5">
                <p className="font-bold text-slate-800">CBT 8-Key Navigation Instructions:</p>
                <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-500">
                  <li>Use keys <strong>A, B, C, D</strong> to select options.</li>
                  <li>Use <strong>N</strong> for Next question and <strong>P</strong> for Previous question.</li>
                  <li>Use <strong>R</strong> to Reverse / Clear answer, and <strong>S</strong> to Submit.</li>
                </ul>
              </div>
            </>
          ) : (
            /* Live Test Simulation View */
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-rose-100 text-rose-800 rounded-md font-bold text-xs">
                    {sampleQuestions[currentQuestionIndex].subject}
                  </span>
                  <span className="text-xs text-slate-500">
                    Question {currentQuestionIndex + 1} of {sampleQuestions.length}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-rose-600 font-mono font-bold text-sm bg-rose-50 px-2.5 py-1 rounded-lg">
                  <Clock className="w-4 h-4" />
                  <span>01:58:42</span>
                </div>
              </div>

              {/* Question Text */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {sampleQuestions[currentQuestionIndex].text}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2">
                {Object.entries(sampleQuestions[currentQuestionIndex].options).map(([key, val]) => {
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
                      className={`w-full p-3.5 rounded-xl border text-left text-xs flex items-center gap-3 transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-rose-50 border-rose-500 text-rose-900 font-semibold shadow-2xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          isChecked
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 text-slate-600 border border-slate-300'
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
              <div className="flex items-center justify-between pt-3">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous (P)
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const newAns = { ...selectedAnswers };
                      delete newAns[currentQuestionIndex];
                      setSelectedAnswers(newAns);
                    }}
                    className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                  >
                    Clear (R)
                  </button>
                  {currentQuestionIndex < sampleQuestions.length - 1 ? (
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
                    >
                      Next (N)
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        alert(
                          `CBT Test Submitted!\nYou answered ${
                            Object.keys(selectedAnswers).length
                          } out of ${sampleQuestions.length} questions.`
                        );
                        setTestStarted(false);
                        onClose();
                      }}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Submit Exam (S)</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        {!testStarted && (
          <div className="px-5 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => setTestStarted(true)}
              className="px-5 py-2 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Start CBT Exam</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
