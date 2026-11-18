/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * UNIPORT BASIC QUESTION BANK (1,400 QUESTIONS ACROSS 5 SUBJECTS)
 * Completely isolated from the JAMB UTME bank.
 *
 * Composition:
 * - Use of English: 200 questions (5 balanced clusters across Set 1 Q1–100 + Set 2 Q101–200:
 *                                  Comprehension & Summary, Lexis/Synonyms/Antonyms/Spelling,
 *                                  Grammar/Concord/Sentence Structure, Idioms & Figurative Language, Oral Forms)
 * - Biology:        400 questions (14 syllabus topic clusters across Part 1 Biological Organisation,
 *                                  Part 2 Vertebrates, and Part 3 Invertebrates)
 * - Physics:        300 questions (18 syllabus topic clusters across Set 1 Q1–100, Set 2 Q101–200,
 *                                  and Set 3 Q201–300 Gas Laws)
 * - Chemistry:      200 questions (13 syllabus topic clusters across Set 1 Q1–100 + Set 2 Q101–200)
 * - Mathematics:    300 questions (6 syllabus topic clusters across Set 1 Q1–100, Set 2 Q101–200,
 *                                  and Set 3 Q201–300 Calculus: Differentiation & Integration)
 *
 * Balanced Topic Distribution & Unseen Exhaustion During Tests:
 * - 100-Question Exam (45 mins): 20 questions from each of the 5 subjects (100 total)
 * - 50-Question Exam (25 mins):  10 questions from each of the 5 subjects (50 total)
 * Within every subject, the engine round-robins across all topic clusters that still have
 * unseen items—guaranteeing zero repeated questions in each subject until every question in
 * that subject is exhausted, then cleanly resetting that subject's cycle independently.
 */

import type { VerifiedQuestion } from './verifiedTextbooks';
import {
  BASIC_BIOLOGY_ITEMS,
  getBasicSeenSignatures,
  saveBasicSeenSignatures,
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
  saveBasicSeenSignatures,
  recordBasicSeenSignatures,
  getBasicQuestionSignature,
};

export const BASIC_LAST_RUN_STORAGE_KEY = 'jambix_basic_last_run_sigs_v1';

function getBasicLastRunMap(): Record<string, string[]> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(BASIC_LAST_RUN_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export function getBasicLastRunSubjectSignatures(subjectLabel: BasicSubjectName): Set<string> {
  const map = getBasicLastRunMap();
  const arr = map[subjectLabel];
  return Array.isArray(arr) ? new Set(arr) : new Set();
}

function saveBasicLastRunMap(map: Record<string, string[]>): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(BASIC_LAST_RUN_STORAGE_KEY, JSON.stringify(map));
  } catch {
    // ignore storage errors
  }
}

export const BASIC_CLUSTER_VISITS_STORAGE_KEY = 'jambix_basic_cluster_visits_v1';

function getBasicClusterVisitsMap(): Record<string, Record<string, number>> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(BASIC_CLUSTER_VISITS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export function getBasicSubjectClusterVisits(subjectLabel: BasicSubjectName): Record<string, number> {
  const map = getBasicClusterVisitsMap();
  const entry = map[subjectLabel];
  return entry && typeof entry === 'object' && !Array.isArray(entry) ? entry : {};
}

function saveBasicClusterVisitsMap(map: Record<string, Record<string, number>>): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(BASIC_CLUSTER_VISITS_STORAGE_KEY, JSON.stringify(map));
  } catch {
    // ignore storage errors
  }
}

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
function sortClustersByRoundRobinVisits(
  entries: {
    key: string;
    partGroup: string;
    hasUnseen: boolean;
  }[],
  clusterVisits: Record<string, number>
): typeof entries {
  // Shuffle first so equal visit counts rotate unpredictably rather than strictly alphabetically,
  // then stably bucket by visit count (least-sampled clusters go first) so every topic cluster
  // across the subject is visited evenly across consecutive 50-Q and 100-Q tests.
  const byVisits = new Map<number, typeof entries>();
  for (const entry of shuffleItems(entries)) {
    const v = clusterVisits[entry.key] || 0;
    let list = byVisits.get(v);
    if (!list) {
      list = [];
      byVisits.set(v, list);
    }
    list.push(entry);
  }
  const sortedCounts = Array.from(byVisits.keys()).sort((a, b) => a - b);
  return sortedCounts.flatMap((c) => byVisits.get(c)!);
}

function buildRoundRobinClusterOrder(
  clusterEntries: {
    key: string;
    partGroup: string;
    hasUnseen: boolean;
  }[],
  clusterVisits: Record<string, number>
): string[] {
  const byPart: Record<string, typeof clusterEntries> = {};
  for (const entry of clusterEntries) {
    if (!byPart[entry.partGroup]) byPart[entry.partGroup] = [];
    byPart[entry.partGroup].push(entry);
  }

  // Within each part: prioritize clusters with unseen items first, ordered by fewest prior visits
  const partKeys = shuffleItems(Object.keys(byPart));
  for (const pKey of partKeys) {
    const unseenClusters = sortClustersByRoundRobinVisits(
      byPart[pKey].filter((e) => e.hasUnseen),
      clusterVisits
    );
    const seenClusters = sortClustersByRoundRobinVisits(
      byPart[pKey].filter((e) => !e.hasUnseen),
      clusterVisits
    );
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
    const sig = getBasicQuestionSignature(item.text, item.options);
    if (excludeSignatures.has(sig)) {
      bucket.seen.push(item);
    } else {
      bucket.unseen.push(item);
    }
  }

  // 2. Keep unseen and seen pools separate per cluster so Pass 1 exhausts ALL unseen
  //    questions across the entire subject before any seen question can repeat.
  const unseenPools: Record<string, AnyBasicItem[]> = {};
  const seenPools: Record<string, AnyBasicItem[]> = {};
  const clusterMeta: { key: string; partGroup: string; hasUnseen: boolean }[] = [];

  for (const [key, bucket] of clusterMap.entries()) {
    unseenPools[key] = shuffleItems(bucket.unseen);
    seenPools[key] = shuffleItems(bucket.seen);
    clusterMeta.push({
      key,
      partGroup: bucket.partGroup,
      hasUnseen: bucket.unseen.length > 0,
    });
  }

  const clusterVisits = getBasicSubjectClusterVisits(subjectLabel);
  const clusterKeys = buildRoundRobinClusterOrder(clusterMeta, clusterVisits);

  // 3A. Pass 1 — Strict Unseen Cluster Round-Robin:
  //     Round-robins across every cluster that still has unseen questions until target is met
  //     or all unseen questions in this subject are 100% exhausted.
  const rounds: { item: AnyBasicItem; cluster: string }[][] = [];
  let totalPicked = 0;

  while (totalPicked < target) {
    const currentRound: { item: AnyBasicItem; cluster: string }[] = [];
    for (const cKey of clusterKeys) {
      if (totalPicked >= target) break;
      const pool = unseenPools[cKey];
      const nextIdx = pool.findIndex((item) => {
        const sig = getBasicQuestionSignature(item.text, item.options);
        return !localUsed.has(sig) && !globalSessionUsed.has(sig);
      });
      if (nextIdx !== -1) {
        const [pickedItem] = pool.splice(nextIdx, 1);
        const sig = getBasicQuestionSignature(pickedItem.text, pickedItem.options);
        localUsed.add(sig);
        globalSessionUsed.add(sig);
        currentRound.push({ item: pickedItem, cluster: cKey });
        totalPicked++;
      }
    }
    if (currentRound.length === 0) break;
    rounds.push(currentRound);
  }

  const lastRunSigs = getBasicLastRunSubjectSignatures(subjectLabel);

  // 3B. Pass 2 — Wrap-Around Seen Cluster Round-Robin (ONLY when all unseen questions are exhausted):
  //     Round-robins across seen pools while skipping immediate prior test's questions (`lastRunSigs`)
  //     so consecutive Basic exams never repeat questions back-to-back even when mixing 50-Q and 100-Q tests.
  while (totalPicked < target) {
    const currentRound: { item: AnyBasicItem; cluster: string }[] = [];
    for (const cKey of clusterKeys) {
      if (totalPicked >= target) break;
      const pool = seenPools[cKey];
      const nextIdx = pool.findIndex((item) => {
        const sig = getBasicQuestionSignature(item.text, item.options);
        return !localUsed.has(sig) && !globalSessionUsed.has(sig) && !lastRunSigs.has(sig);
      });
      if (nextIdx !== -1) {
        const [pickedItem] = pool.splice(nextIdx, 1);
        const sig = getBasicQuestionSignature(pickedItem.text, pickedItem.options);
        localUsed.add(sig);
        globalSessionUsed.add(sig);
        currentRound.push({ item: pickedItem, cluster: cKey });
        totalPicked++;
      }
    }
    if (currentRound.length === 0) break;
    rounds.push(currentRound);
  }

  // 3C. Pass 3 — Final Safety Net (only if total pool size < target + lastRunSigs)
  while (totalPicked < target) {
    const currentRound: { item: AnyBasicItem; cluster: string }[] = [];
    for (const cKey of clusterKeys) {
      if (totalPicked >= target) break;
      const pool = seenPools[cKey];
      const nextIdx = pool.findIndex((item) => {
        const sig = getBasicQuestionSignature(item.text, item.options);
        return !localUsed.has(sig) && !globalSessionUsed.has(sig);
      });
      if (nextIdx !== -1) {
        const [pickedItem] = pool.splice(nextIdx, 1);
        const sig = getBasicQuestionSignature(pickedItem.text, pickedItem.options);
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

const BASIC_SUBJECT_CONFIGS: {
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

/**
 * Generates a balanced 5-subject UNIPORT Basic CBT mock exam:
 * - 'basic_100' (45 mins): 20 questions × 5 subjects = 100 questions
 * - 'basic_50'  (25 mins): 10 questions × 5 subjects = 50 questions
 */
export function generateUniportBasicTest(
  mode: 'basic_100' | 'basic_50' = 'basic_100',
  excludeSignatures: Set<string> = getBasicSeenSignatures()
): VerifiedQuestion[] {
  const perSubject = mode === 'basic_50' ? 10 : 20;
  const globalSessionUsed = new Set<string>();

  const combined: VerifiedQuestion[] = [];
  for (const cfg of BASIC_SUBJECT_CONFIGS) {
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

/**
 * Records seen signatures for a UNIPORT Basic test and resets any individual subject
 * whose question pool has reached 100% exhaustion—keeping only the questions picked in
 * the just-started test so subsequent tests never repeat items back-to-back while
 * leaving every other subject's unseen progress untouched.
 */
export function recordBasicSubjectProgress(
  pickedQuestions: VerifiedQuestion[],
  existingSet?: Set<string>
): Set<string> {
  const nextSeen = new Set<string>(existingSet ?? getBasicSeenSignatures());

  const pickedBySubject = new Map<string, Set<string>>();
  for (const q of pickedQuestions) {
    const sig = getBasicQuestionSignature(q.text, q.options);
    if (!sig) continue;
    nextSeen.add(sig);
    let subSet = pickedBySubject.get(q.subject);
    if (!subSet) {
      subSet = new Set<string>();
      pickedBySubject.set(q.subject, subSet);
    }
    subSet.add(sig);
  }

  const lastRunMap = getBasicLastRunMap();
  const clusterVisitsMap = getBasicClusterVisitsMap();

  for (const cfg of BASIC_SUBJECT_CONFIGS) {
    const sigToCluster = new Map<string, string>();
    for (const item of cfg.items) {
      sigToCluster.set(
        getBasicQuestionSignature(item.text, item.options),
        getEffectiveTopicCluster(item, cfg.subject)
      );
    }

    const currentRunSigs = pickedBySubject.get(cfg.subject);
    if (currentRunSigs && currentRunSigs.size > 0) {
      lastRunMap[cfg.subject] = Array.from(currentRunSigs);
    }

    const subjectVisits: Record<string, number> = {
      ...(clusterVisitsMap[cfg.subject] || {}),
    };
    if (currentRunSigs) {
      for (const sig of currentRunSigs) {
        const cKey = sigToCluster.get(sig);
        if (cKey) {
          subjectVisits[cKey] = (subjectVisits[cKey] || 0) + 1;
        }
      }
    }

    const subjectSigs = cfg.items.map((item) =>
      getBasicQuestionSignature(item.text, item.options)
    );
    const isExhausted =
      subjectSigs.length > 0 && subjectSigs.every((sig) => nextSeen.has(sig));
    if (isExhausted) {
      for (const sig of subjectSigs) {
        nextSeen.delete(sig);
      }
      const resetVisits: Record<string, number> = {};
      if (currentRunSigs) {
        for (const sig of currentRunSigs) {
          nextSeen.add(sig);
          const cKey = sigToCluster.get(sig);
          if (cKey) {
            resetVisits[cKey] = (resetVisits[cKey] || 0) + 1;
          }
        }
      }
      clusterVisitsMap[cfg.subject] = resetVisits;
    } else {
      clusterVisitsMap[cfg.subject] = subjectVisits;
    }
  }

  saveBasicSeenSignatures(nextSeen);
  saveBasicLastRunMap(lastRunMap);
  saveBasicClusterVisitsMap(clusterVisitsMap);
  return nextSeen;
}
