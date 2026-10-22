/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Custom Questions Management & Indexing Service
 * Stores questions extracted from PDFs/documents and seamlessly integrates them
 * into the JAMB UTME Question Bank for CBT exam sessions and topic drills.
 */

import { VerifiedQuestion, SubjectKey, normalizeSubjectKey, scatterQuestionOptions } from '../data/verifiedTextbooks';
import { db, auth } from './firebase';
import { collection, doc, setDoc, getDocs, deleteDoc, query, where } from 'firebase/firestore';

export const CUSTOM_QUESTIONS_STORAGE_KEY = 'jambix_custom_extracted_questions_v2';

export interface CustomExtractedQuestion {
  id: string;
  sourcePdfName?: string;
  extractedAt: string;
  subject: string;
  subjectKey?: SubjectKey;
  topic: string;
  year?: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  bookTitle?: string;
  author?: string;
  textbookRef?: string;
  isUserApproved: boolean;
  userId?: string;
}

/**
 * Get all indexed custom questions from local storage
 */
export function getLocalCustomQuestions(): CustomExtractedQuestion[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CUSTOM_QUESTIONS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Failed to load custom questions from localStorage:', err);
    return [];
  }
}

/**
 * Save custom questions to local storage and sync to Firestore
 */
export async function saveCustomQuestions(
  questions: CustomExtractedQuestion[]
): Promise<void> {
  if (typeof window === 'undefined') return;

  // 1. Save to localStorage immediately (offline first)
  try {
    const existing = getLocalCustomQuestions();
    const existingIds = new Set(existing.map((q) => q.id));
    
    // Merge without duplicates
    const merged = [...existing];
    for (const q of questions) {
      if (!existingIds.has(q.id)) {
        merged.push(q);
        existingIds.add(q.id);
      } else {
        // Update existing
        const idx = merged.findIndex((item) => item.id === q.id);
        if (idx !== -1) merged[idx] = q;
      }
    }

    localStorage.setItem(CUSTOM_QUESTIONS_STORAGE_KEY, JSON.stringify(merged));
  } catch (err) {
    console.error('Failed to save custom questions locally:', err);
  }

  // 2. Sync to Firestore if signed in
  try {
    const currentUser = auth.currentUser;
    if (currentUser && db) {
      const colRef = collection(db, 'customQuestions');
      for (const q of questions) {
        const docRef = doc(colRef, q.id);
        await setDoc(docRef, {
          ...q,
          userId: currentUser.uid,
          updatedAt: Date.now(),
        }, { merge: true });
      }
    }
  } catch (err) {
    // Cloud sync failure does not block local usability
    console.warn('Firestore cloud sync for custom questions postponed (saved locally):', err);
  }
}

/**
 * Delete a single custom question
 */
export async function deleteCustomQuestion(id: string): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    const existing = getLocalCustomQuestions();
    const filtered = existing.filter((q) => q.id !== id);
    localStorage.setItem(CUSTOM_QUESTIONS_STORAGE_KEY, JSON.stringify(filtered));

    const currentUser = auth.currentUser;
    if (currentUser && db) {
      const docRef = doc(db, 'customQuestions', id);
      await deleteDoc(docRef);
    }
  } catch (err) {
    console.error('Failed to delete custom question:', err);
  }
}

/**
 * Clear all indexed custom questions
 */
export async function clearAllCustomQuestions(): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(CUSTOM_QUESTIONS_STORAGE_KEY);
  } catch (err) {
    console.warn('Failed to clear custom questions:', err);
  }
}

/**
 * Fetch and sync user's custom questions from Firestore
 */
export async function syncCustomQuestionsFromCloud(): Promise<CustomExtractedQuestion[]> {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser || !db) return getLocalCustomQuestions();

    const q = query(
      collection(db, 'customQuestions'),
      where('userId', '==', currentUser.uid)
    );
    const snap = await getDocs(q);
    const cloudQuestions: CustomExtractedQuestion[] = [];
    snap.forEach((docSnap) => {
      cloudQuestions.push(docSnap.data() as CustomExtractedQuestion);
    });

    if (cloudQuestions.length > 0) {
      await saveCustomQuestions(cloudQuestions);
    }
    return getLocalCustomQuestions();
  } catch (err) {
    console.warn('Failed to sync custom questions from cloud:', err);
    return getLocalCustomQuestions();
  }
}

/**
 * Convert CustomExtractedQuestion into VerifiedQuestion format
 * for direct injection into CBT sessions, mock tests, and topic drills.
 */
export function convertToVerifiedQuestion(
  cq: CustomExtractedQuestion,
  index: number
): VerifiedQuestion {
  const normKey = normalizeSubjectKey(cq.subject);
  const year = cq.year || 2024;
  
  const baseQ: VerifiedQuestion = {
    id: 950000 + index * 10 + (typeof cq.id === 'string' ? parseInt(cq.id.slice(-4), 16) || index : cq.id),
    year,
    questionNumber: index + 1,
    subject: cq.subject,
    topic: cq.topic || 'General Practice',
    text: `[PDF Exam Source: ${cq.sourcePdfName || 'Extracted Bank'}] ${cq.text}`,
    options: cq.options,
    answer: cq.answer,
    explanation: `${cq.explanation} (Indexed from Candidate Document: ${cq.sourcePdfName || 'Custom PDF Upload'}).`,
    bookTitle: cq.bookTitle || `Extracted PDF Exam: ${cq.sourcePdfName || 'Custom Bank'}`,
    author: cq.author || 'Candidate Uploaded Syllabus Item',
    textbookRef: cq.textbookRef || `Verified Candidate PDF Item · ${cq.subject}`,
  };

  return scatterQuestionOptions(baseQ, year * 10 + index * 7);
}

/**
 * Get verified questions for a specific subject from the custom bank
 */
export function getCustomVerifiedQuestionsForSubject(
  subjectNameOrKey: string,
  limitCount?: number
): VerifiedQuestion[] {
  const all = getLocalCustomQuestions();
  const targetKey = normalizeSubjectKey(subjectNameOrKey);
  
  const matched = all.filter((q) => {
    return normalizeSubjectKey(q.subject) === targetKey;
  });

  const converted = matched.map((cq, idx) => convertToVerifiedQuestion(cq, idx));
  return limitCount ? converted.slice(0, limitCount) : converted;
}

/**
 * Get custom verified questions matching a specific topic
 */
export function getCustomVerifiedQuestionsForTopic(
  subjectKey: SubjectKey,
  topicKeyword: string,
  limitCount?: number
): VerifiedQuestion[] {
  const all = getLocalCustomQuestions();
  const lowTopic = topicKeyword.toLowerCase();
  
  const matched = all.filter((q) => {
    const isSub = normalizeSubjectKey(q.subject) === subjectKey;
    const isTop = q.topic.toLowerCase().includes(lowTopic) || q.text.toLowerCase().includes(lowTopic);
    return isSub && isTop;
  });

  const converted = matched.map((cq, idx) => convertToVerifiedQuestion(cq, idx));
  return limitCount ? converted.slice(0, limitCount) : converted;
}
