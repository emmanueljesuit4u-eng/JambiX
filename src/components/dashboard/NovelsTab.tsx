/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BookOpen,
  Users,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Play,
  Layers,
  Search,
  Quote,
} from 'lucide-react';
import {
  JAMB_NOVELS,
  NovelDetails,
} from '../../data/jambNovelsData';

interface NovelsTabProps {
  onLaunchTest: (title: string, type: string, subject?: string, year?: number) => void;
  showToast: (msg: string) => void;
}

export const NovelsTab: React.FC<NovelsTabProps> = ({ onLaunchTest }) => {
  const [selectedNovelId] = useState<string>('the-lekki-headmaster');
  const [activeSection, setActiveSection] = useState<'summary' | 'characters' | 'chapters'>('summary');
  const [selectedChapterNum, setSelectedChapterNum] = useState<number>(1);
  const [searchCharacter, setSearchCharacter] = useState<string>('');
  const [showSynopsis, setShowSynopsis] = useState<boolean>(false);
  const [showChapters, setShowChapters] = useState<boolean>(false);

  const activeNovel: NovelDetails =
    JAMB_NOVELS.find((n) => n.id === selectedNovelId) || JAMB_NOVELS[0];

  const filteredCharacters = activeNovel.characters.filter(
    (c) =>
      c.name.toLowerCase().includes(searchCharacter.toLowerCase()) ||
      c.role.toLowerCase().includes(searchCharacter.toLowerCase()) ||
      c.description.toLowerCase().includes(searchCharacter.toLowerCase())
  );

  const activeChapter =
    activeNovel.chapters.find((c) => c.chapterNumber === selectedChapterNum) ||
    activeNovel.chapters[0];

  return (
    <div className="space-y-6">
      {/* Top Banner: Green Horizontal Hero */}
      <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-gradient-to-r from-[#047857] via-[#059669] to-[#065f46] text-white shadow-xs border border-emerald-600/40">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-900/70 text-emerald-200 border border-emerald-400/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Official JAMB UTME Prescribed Novel</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              Master The Lekki Headmaster &amp; Characters
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() =>
                onLaunchTest(
                  'The Lekki Headmaster CBT Examination',
                  'novel',
                  'The Lekki Headmaster'
                )
              }
              className="px-4 py-2.5 bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-xs rounded-xl shadow-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-emerald-900" />
              <span>Practice The Lekki Headmaster CBT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stacked Section Buttons */}
      <div className="flex flex-col gap-2">
        {[
          { id: 'summary' as const, label: 'Overview', icon: Layers },
          { id: 'characters' as const, label: `Major Characters (${activeNovel.characters.length})`, icon: Users },
          { id: 'chapters' as const, label: `Chapter Summaries (${activeNovel.chapters.length})`, icon: BookOpen },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveSection(tab.id);
                setShowChapters(false);
              }}
              className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between transition-all cursor-pointer border ${
                isActive
                  ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800 shadow-2xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </span>
              <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'rotate-90 text-emerald-700 dark:text-emerald-300' : 'opacity-60'}`} />
            </button>
          );
        })}
      </div>

      {/* SECTION 1: Overview & Themes */}
      {activeSection === 'summary' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                {activeNovel.jambUsage}
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                {activeNovel.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Written by <strong className="text-slate-800 dark:text-slate-200">{activeNovel.author}</strong>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setShowSynopsis((prev) => !prev)}
                aria-expanded={showSynopsis}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 border ${
                  showSynopsis
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{showSynopsis ? 'Hide Summary' : 'Read Summary'}</span>
                {showSynopsis ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowChapters(true);
                  setActiveSection('chapters');
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 border bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>View Chapters</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onLaunchTest(
                    'The Lekki Headmaster CBT Examination',
                    'novel',
                    'The Lekki Headmaster'
                  )
                }
                className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Start Practice</span>
              </button>
            </div>
          </div>

          {showSynopsis && (
            <div>
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Synopsis &amp; Core Plot
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {activeNovel.overview}
              </p>
            </div>
          )}

          <div>
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Setting &amp; Cultural Context
            </h4>
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeNovel.setting}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: Major Characters */}
      {activeSection === 'characters' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                Major Characters &amp; Roles in &ldquo;{activeNovel.title}&rdquo;
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Detailed personality, pivotal actions, and specific JAMB exam significance for each character.
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchCharacter}
                onChange={(e) => setSearchCharacter(e.target.value)}
                placeholder="Search character name..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCharacters.map((char) => (
              <div
                key={char.name}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-black text-slate-900 dark:text-white">
                        {char.name}
                      </h4>
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                        {char.role}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {char.description}
                  </p>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Pivotal Actions in the Novel:
                    </span>
                    <ul className="space-y-1">
                      {char.keyActions.map((act, i) => (
                        <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0">•</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 bg-emerald-50/40 dark:bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                  <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide block">
                    JAMB Exam Tip:
                  </span>
                  <p className="text-[11px] text-emerald-900 dark:text-emerald-200 leading-snug mt-0.5">
                    {char.examSignificance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: Chapter-by-Chapter Summaries */}
      {activeSection === 'chapters' && (
        <div className="space-y-4">
          {showChapters && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Chapter Directory ({activeNovel.chapters.length} Chapters)
                </h4>
                <button
                  type="button"
                  onClick={() => setShowChapters(false)}
                  className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {activeNovel.chapters.map((ch) => {
                  const isSelected = selectedChapterNum === ch.chapterNumber;
                  return (
                    <button
                      key={ch.chapterNumber}
                      type="button"
                      onClick={() => {
                        setSelectedChapterNum(ch.chapterNumber);
                        setShowChapters(false);
                      }}
                      className={`p-3 rounded-xl text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-700 text-white font-bold shadow-xs'
                          : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <span className="font-bold block">
                          Chapter {ch.chapterNumber}
                        </span>
                        <span className="truncate block opacity-90 text-[11px]">
                          {ch.title}
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Chapter Content Canvas */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                  Chapter {activeChapter.chapterNumber} of {activeNovel.chapters.length}
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {activeChapter.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowChapters((prev) => !prev)}
                aria-expanded={showChapters}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 border shrink-0 ${
                  showChapters
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{showChapters ? 'Hide Chapters' : 'View Chapters'}</span>
                {showChapters ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Detailed Chapter Summary:
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal whitespace-pre-line">
                {activeChapter.summary}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Key Plot Events to Remember for UTME:
              </h4>
              <div className="space-y-2">
                {activeChapter.keyEvents.map((evt, i) => (
                  <div
                    key={i}
                    className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{evt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vital Quotes from Chapter */}
            {activeChapter.vitalExamQuotes && activeChapter.vitalExamQuotes.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Key Character Quote &amp; Context:
                </h4>
                <div className="space-y-2.5">
                  {activeChapter.vitalExamQuotes.map((vq, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800/50 space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                        <Quote className="w-3.5 h-3.5" />
                        <span>&ldquo;{vq.quote}&rdquo;</span>
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 pl-5">
                        — Spoken by <strong className="text-slate-900 dark:text-white">{vq.speaker}</strong> ({vq.context})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                disabled={selectedChapterNum <= 1}
                onClick={() => setSelectedChapterNum((prev) => Math.max(1, prev - 1))}
                className="px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                ← Previous Chapter
              </button>
              <button
                disabled={selectedChapterNum >= activeNovel.chapters.length}
                onClick={() => setSelectedChapterNum((prev) => Math.min(activeNovel.chapters.length, prev + 1))}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Next Chapter →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
