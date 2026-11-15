/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * UNIPORT BASIC QUESTION BANK (700 QUESTIONS ACROSS 5 SUBJECTS)
 * Completely isolated from the JAMB UTME bank.
 *
 * Composition:
 * - Use of English: 100 questions (5 balanced clusters: Comprehension & Summary, Lexis/Synonyms/Antonyms/Spelling,
 *                                  Grammar/Concord/Sentence Structure, Idioms & Figurative Language, Oral Forms)
 * - Biology:        300 questions (14 syllabus topic clusters across Part 1 Biological Organisation,
 *                                  Part 2 Vertebrates, and Part 3 Invertebrates)
 * - Physics:        100 questions (7 syllabus topic clusters across Sections A–G)
 * - Chemistry:      100 questions (11 syllabus topic clusters across Sections A–K)
 * - Mathematics:    100 questions (6 syllabus topic clusters across Sections A–F)
 *
 * Balanced Topic Distribution During Tests:
 * - 100-Question Exam (50 mins): 20 questions from each of the 5 subjects (100 total)
 * - 50-Question Exam (30 mins):  10 questions from each of the 5 subjects (50 total)
 * Within every subject, the engine round-robins across all topic clusters (and across
 * syllabus parts in Biology) while prioritizing unseen items within each cluster so no
 * topic is ever starved or clustered—even across repeated practice sessions.
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

/**
 * Resolves a fine-grained syllabus cluster key for balanced round-robin sampling.
 * In particular, refines Use of English's 60-item "Lexis and Structure" block into
 * distinct Lexis, Grammar & Concord, and Idioms/Figurative clusters so all 5 branches
 * of English are sampled evenly (4 each in a 20-Q test, 2 each in a 10-Q test).
 */
export function getEffectiveTopicCluster(
  item: AnyBasicItem,
  subjectLabel: BasicSubjectName
): string {
  if (subjectLabel === 'Use of English' && item.topicCluster === 'Lexis and Structure') {
    const topicLower = (item.topic || '').toLowerCase();
    if (
      topicLower.includes('synonym') ||
      topicLower.includes('antonym') ||
      topicLower.includes('spelling')
    ) {
      return 'Lexis: Synonyms, Antonyms & Spelling';
    }
    if (
      topicLower.includes('idiom') ||
      topicLower.includes('figurative') ||
      topicLower.includes('figures of speech')
    ) {
      return 'Idioms & Figurative Expressions';
    }
    return 'Grammar, Concord & Sentence Structure';
  }
  return item.topicCluster || 'General';
}

/**
 * Orders clusters for round-robin traversal.
 * For Biology (which spans 3 distinct syllabus parts across 14 clusters), interleaves
 * clusters across Part 1, Part 2, and Part 3 so even a 10-question draw hits all
 * three parts evenly (3–4 per part) without bias toward any branch.
 */
function buildRoundRobinClusterOrder(
  clusterEntries: {
    key: string;
    partGroup: string;
    hasUnseen: boolean;
  }[]
): string[] {
  const byPart: Record<string, typeof clusterEntries> = {};
  for (const entry of clusterEntries) {
    if (!byPart[entry.partGroup]) byPart[entry.partGroup] = [];
    byPart[entry.partGroup].push(entry);
  }

  // Within each part: shuffle clusters, prioritizing clusters with unseen items first
  const partKeys = shuffleItems(Object.keys(byPart));
  for (const pKey of partKeys) {
    const unseenClusters = shuffleItems(byPart[pKey].filter((e) => e.hasUnseen));
    const seenClusters = shuffleItems(byPart[pKey].filter((e) => !e.hasUnseen));
    byPart[pKey] = [...unseenClusters, ...seenClusters];
  }

  // Interleave across parts (Part A -> Part B -> Part C -> ...)
  const orderedKeys: string[] = [];
  let added = true;
  while (added) {
    added = false;
    for (const pKey of partKeys) {
      const next = byPart[pKey].shift();
      if (next) {
        orderedKeys.push(next.key);
        added = true;
      }
    }
  }
  return orderedKeys;
}

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

  // 1. Group items into fine-grained topic clusters and partition unseen vs seen inside each cluster
  const clusterMap = new Map<
    string,
    {
      unseen: AnyBasicItem[];
      seen: AnyBasicItem[];
      partGroup: string;
    }
  >();

  for (const item of items) {
    const clusterKey = getEffectiveTopicCluster(item, subjectLabel);
    const partGroup =
      'part' in item && item.part ? item.part : 'Default';
    let bucket = clusterMap.get(clusterKey);
    if (!bucket) {
      bucket = { unseen: [], seen: [], partGroup };
      clusterMap.set(clusterKey, bucket);
    }
    const sig = getBasicQuestionSignature(item.text);
    if (excludeSignatures.has(sig)) {
      bucket.seen.push(item);
    } else {
      bucket.unseen.push(item);
    }
  }

  // 2. Shuffle unseen and seen pools independently inside each cluster,
  //    then combine into [unseen..., seen...] so every cluster prioritizes fresh questions first
  //    without ever starving smaller clusters when their unseen pool runs out.
  const clusterPools: Record<string, AnyBasicItem[]> = {};
  const clusterMeta: { key: string; partGroup: string; hasUnseen: boolean }[] = [];

  for (const [key, bucket] of clusterMap.entries()) {
    clusterPools[key] = [
      ...shuffleItems(bucket.unseen),
      ...shuffleItems(bucket.seen),
    ];
    clusterMeta.push({
      key,
      partGroup: bucket.partGroup,
      hasUnseen: bucket.unseen.length > 0,
    });
  }

  const clusterKeys = buildRoundRobinClusterOrder(clusterMeta);

  // 3. Strict Cluster-First Round-Robin across all clusters in rounds.
  //    Every cluster contributes 1 question before any cluster contributes a 2nd, guaranteeing
  //    balanced topic distribution without clustering into any single topic.
  const rounds: { item: AnyBasicItem; cluster: string }[][] = [];
  let totalPicked = 0;

  while (totalPicked < target) {
    const currentRound: { item: AnyBasicItem; cluster: string }[] = [];
    for (const cKey of clusterKeys) {
      if (totalPicked >= target) break;
      const pool = clusterPools[cKey];
      const nextIdx = pool.findIndex((item) => {
        const sig = getBasicQuestionSignature(item.text);
        return !localUsed.has(sig) && !globalSessionUsed.has(sig);
      });
      if (nextIdx !== -1) {
        const [pickedItem] = pool.splice(nextIdx, 1);
        const sig = getBasicQuestionSignature(pickedItem.text);
        localUsed.add(sig);
        globalSessionUsed.add(sig);
        currentRound.push({ item: pickedItem, cluster: cKey });
        totalPicked++;
      }
    }
    if (currentRound.length === 0) break;
    rounds.push(currentRound);
  }

  // 4. Shuffle within each round while preventing back-to-back same-cluster questions across round boundaries
  const ordered: { item: AnyBasicItem; cluster: string }[] = [];
  for (const round of rounds) {
    const shuffledRound = shuffleItems(round);
    if (ordered.length > 0 && shuffledRound.length > 1) {
      const prevCluster = ordered[ordered.length - 1].cluster;
      if (shuffledRound[0].cluster === prevCluster) {
        const diffIdx = shuffledRound.findIndex((entry) => entry.cluster !== prevCluster);
        if (diffIdx > 0) {
          const tmp = shuffledRound[0];
          shuffledRound[0] = shuffledRound[diffIdx];
          shuffledRound[diffIdx] = tmp;
        }
      }
    }
    ordered.push(...shuffledRound);
  }

  return ordered.map(({ item, cluster }, idx): VerifiedQuestion => {
    const subNum = idx + 1;
    const partLabel =
      'part' in item && item.part
        ? `${item.part} — ${cluster}`
        : `UNIPORT Basic ${subjectLabel} — ${cluster}`;

    return {
      id: idOffset + item.questionNumber,
      year: 2026,
      questionNumber: subNum, // Overwritten sequentially across full test below
      subjectQuestionNumber: subNum,
      subjectTotalQuestions: ordered.length,
      subject: subjectLabel,
      topic: `${cluster} · ${item.topic}`,
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
