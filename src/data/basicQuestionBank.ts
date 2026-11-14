/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * UNIPORT BASIC QUESTION BANK (700 QUESTIONS ACROSS 5 SUBJECTS)
 * Completely isolated from the JAMB UTME bank.
 *
 * Composition:
 * - Use of English: 100 questions (Comprehension & Summary, Lexis & Structure, Oral Forms)
 * - Biology:        300 questions (Biological Organisation, Vertebrates, Invertebrates)
 * - Physics:        100 questions (7 syllabus clusters)
 * - Chemistry:      100 questions (11 syllabus clusters)
 * - Mathematics:    100 questions (6 syllabus clusters)
 *
 * Balanced Round-Robin Test Generation:
 * - 100-Question Exam (50 mins): 20 questions from each of the 5 subjects (100 total)
 * - 50-Question Exam (30 mins):  10 questions from each of the 5 subjects (50 total)
 * Within every subject, questions are drawn evenly via round-robin across all topic
 * clusters in that subject's syllabus while prioritizing unseen questions.
 */

import type { VerifiedQuestion } from './verifiedTextbooks';
import {
  BASIC_BIOLOGY_ITEMS,
  getBasicSeenSignatures,
  recordBasicSeenSignatures,
  getBasicQuestionSignature,
  type BasicBiologyItem,
} from './basicBiologyBank';
import { BASIC_ENGLISH_ITEMS, type BasicBankQuestion } from './basicEnglishBank';
import { BASIC_PHYSICS_ITEMS } from './basicPhysicsBank';
import { BASIC_CHEMISTRY_ITEMS } from './basicChemistryBank';
import { BASIC_MATHEMATICS_ITEMS } from './basicMathematicsBank';

export {
  getBasicSeenSignatures,
  recordBasicSeenSignatures,
  getBasicQuestionSignature,
};

export const BASIC_SUBJECT_ORDER = [
  'Use of English',
  'Biology',
  'Physics',
  'Chemistry',
  'Mathematics',
] as const;

export type BasicSubjectName = (typeof BASIC_SUBJECT_ORDER)[number];

export const BASIC_QUESTION_BANK_STATS = {
  totalQuestions:
    BASIC_ENGLISH_ITEMS.length +
    BASIC_BIOLOGY_ITEMS.length +
    BASIC_PHYSICS_ITEMS.length +
    BASIC_CHEMISTRY_ITEMS.length +
    BASIC_MATHEMATICS_ITEMS.length,
  subjects: {
    'Use of English': BASIC_ENGLISH_ITEMS.length,
    Biology: BASIC_BIOLOGY_ITEMS.length,
    Physics: BASIC_PHYSICS_ITEMS.length,
    Chemistry: BASIC_CHEMISTRY_ITEMS.length,
    Mathematics: BASIC_MATHEMATICS_ITEMS.length,
  },
} as const;

function shuffleItems<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

type AnyBasicItem = BasicBankQuestion | BasicBiologyItem;

function pickBalancedFromSubject(
  items: AnyBasicItem[],
  perSubjectCount: number,
  excludeSignatures: Set<string>,
  subjectLabel: BasicSubjectName,
  idOffset: number,
  globalSessionUsed: Set<string>
): VerifiedQuestion[] {
  const target = Math.max(1, Math.min(perSubjectCount, items.length));
  const localUsed = new Set<string>();

  // 1. Group items by topicCluster
  const byCluster: Record<string, AnyBasicItem[]> = {};
  for (const item of items) {
    const cluster = item.topicCluster || 'General';
    if (!byCluster[cluster]) {
      byCluster[cluster] = [];
    }
    byCluster[cluster].push(item);
  }

  // 2. Shuffle within each cluster and shuffle cluster traversal order
  for (const key of Object.keys(byCluster)) {
    byCluster[key] = shuffleItems(byCluster[key]);
  }
  const clusterKeys = shuffleItems(Object.keys(byCluster));

  const picked: AnyBasicItem[] = [];

  // 3. Pass 1: Round-robin across all topic clusters, prioritizing unseen items
  let addedInPass1 = true;
  while (picked.length < target && addedInPass1) {
    addedInPass1 = false;
    for (const cKey of clusterKeys) {
      if (picked.length >= target) break;
      const pool = byCluster[cKey];
      const nextIdx = pool.findIndex((item) => {
        const sig = getBasicQuestionSignature(item.text);
        return (
          !localUsed.has(sig) &&
          !globalSessionUsed.has(sig) &&
          !excludeSignatures.has(sig)
        );
      });
      if (nextIdx !== -1) {
        const [item] = pool.splice(nextIdx, 1);
        const sig = getBasicQuestionSignature(item.text);
        localUsed.add(sig);
        globalSessionUsed.add(sig);
        picked.push(item);
        addedInPass1 = true;
      }
    }
  }

  // 4. Pass 2: Fallback round-robin across remaining items without intra-test duplicates
  let addedInPass2 = true;
  while (picked.length < target && addedInPass2) {
    addedInPass2 = false;
    for (const cKey of clusterKeys) {
      if (picked.length >= target) break;
      const pool = byCluster[cKey];
      const nextIdx = pool.findIndex((item) => {
        const sig = getBasicQuestionSignature(item.text);
        return !localUsed.has(sig) && !globalSessionUsed.has(sig);
      });
      if (nextIdx !== -1) {
        const [item] = pool.splice(nextIdx, 1);
        const sig = getBasicQuestionSignature(item.text);
        localUsed.add(sig);
        globalSessionUsed.add(sig);
        picked.push(item);
        addedInPass2 = true;
      }
    }
  }

  // 5. Shuffle the picked items inside this subject so topic clusters interleave naturally
  const ordered = shuffleItems(picked);

  return ordered.map((item, idx): VerifiedQuestion => {
    const subNum = idx + 1;
    const partLabel =
      'part' in item && item.part
        ? `${item.part} — ${item.topicCluster}`
        : `UNIPORT Basic ${subjectLabel} — ${item.topicCluster}`;

    return {
      id: idOffset + item.questionNumber,
      year: 2026,
      questionNumber: subNum, // Overwritten sequentially across full test below
      subjectQuestionNumber: subNum,
      subjectTotalQuestions: ordered.length,
      subject: subjectLabel,
      topic: `${item.topicCluster} · ${item.topic}`,
      text: item.text,
      options: {
        A: item.options.A,
        B: item.options.B,
        C: item.options.C,
        D: item.options.D,
      },
      answer: item.answer,
      explanation: item.explanation,
      bookTitle: 'UNIPORT BASIC QUESTION BANK',
      author: 'UNIPORT Basic Preparatory Series',
      textbookRef: `${partLabel} (Q${item.questionNumber})`,
      hasImage: false,
    };
  });
}

/**
 * Generates a balanced 5-subject UNIPORT Basic CBT mock exam:
 * - 'basic_100' (50 mins): 20 questions × 5 subjects = 100 questions
 * - 'basic_50'  (30 mins): 10 questions × 5 subjects = 50 questions
 */
export function generateUniportBasicTest(
  mode: 'basic_100' | 'basic_50' = 'basic_100',
  excludeSignatures: Set<string> = getBasicSeenSignatures()
): VerifiedQuestion[] {
  const perSubject = mode === 'basic_50' ? 10 : 20;
  const globalSessionUsed = new Set<string>();

  const subjectConfigs: {
    subject: BasicSubjectName;
    items: AnyBasicItem[];
    idOffset: number;
  }[] = [
    { subject: 'Use of English', items: BASIC_ENGLISH_ITEMS, idOffset: 970000 },
    { subject: 'Biology', items: BASIC_BIOLOGY_ITEMS, idOffset: 960000 },
    { subject: 'Physics', items: BASIC_PHYSICS_ITEMS, idOffset: 980000 },
    { subject: 'Chemistry', items: BASIC_CHEMISTRY_ITEMS, idOffset: 990000 },
    { subject: 'Mathematics', items: BASIC_MATHEMATICS_ITEMS, idOffset: 950000 },
  ];

  const combined: VerifiedQuestion[] = [];
  for (const cfg of subjectConfigs) {
    const picked = pickBalancedFromSubject(
      cfg.items,
      perSubject,
      excludeSignatures,
      cfg.subject,
      cfg.idOffset,
      globalSessionUsed
    );
    combined.push(...picked);
  }

  return combined.map((q, idx) => ({
    ...q,
    questionNumber: idx + 1,
  }));
}
