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
  hasImage?: boolean;
  imageUrl?: string;
  imageCaption?: string;
  imageAlt?: string;
}

import { PHYSICS_DEMYSTIFIED_ITEMS } from '../data/physicsDemystifiedBank';
import { JAMBIX_CHEMISTRY_ITEMS } from '../data/jambixChemistryBank';
import { JAMBIX_MATHEMATICS_ITEMS } from '../data/jambixMathematicsBank';
import { JAMBIX_BIOLOGY_ITEMS } from '../data/jambixBiologyBank';
import { JAMBIX_ECONOMICS_ITEMS } from '../data/jambixEconomicsBank';
import { JAMBIX_COMMERCE_ITEMS } from '../data/jambixCommerceBank';
import { JAMBIX_GOVERNMENT_ITEMS } from '../data/jambixGovernmentBank';
import { JAMBIX_LITERATURE_ITEMS } from '../data/jambixLiteratureBank';
import { JAMBIX_ACCOUNTS_ITEMS } from '../data/jambixAccountsBank';

export const PHYSICS_DEMYSTIFIED_CUSTOM_QUESTIONS: CustomExtractedQuestion[] = PHYSICS_DEMYSTIFIED_ITEMS.map((item, idx) => ({
  id: item.id || `phy_jambix_${idx + 1}`,
  sourcePdfName: 'JAMBIX_PHYSICS_QUESTION_BANK.pdf',
  extractedAt: 'Indexed Official Syllabus Bank',
  subject: 'Physics',
  subjectKey: 'physics' as const,
  topic: item.topic,
  year: 2026,
  text: item.text,
  options: item.options,
  answer: item.answer,
  explanation: item.explanation,
  bookTitle: 'JAMBIX PHYSICS QUESTION BANK',
  author: 'JAMBIX UTME Preparatory Series',
  textbookRef: item.chapterTitle || 'Topic 1: Measurements and Units',
  isUserApproved: true,
  hasImage: item.hasImage,
  imageUrl: item.imageUrl,
  imageCaption: item.imageCaption,
  imageAlt: item.imageAlt,
}));

export const CHEMISTRY_CUSTOM_QUESTIONS: CustomExtractedQuestion[] = JAMBIX_CHEMISTRY_ITEMS.map((item, idx) => ({
  id: item.id || `chem_jambix_${idx + 1}`,
  sourcePdfName: 'JAMBIX_CHEMISTRY_QUESTION_BANK.pdf',
  extractedAt: 'Indexed Official Syllabus Bank',
  subject: 'Chemistry',
  subjectKey: 'chemistry' as const,
  topic: item.topic,
  year: 2026,
  text: item.text,
  options: item.options,
  answer: item.answer,
  explanation: item.explanation,
  bookTitle: 'JAMBIX CHEMISTRY QUESTION BANK',
  author: 'JAMBIX UTME Preparatory Series',
  textbookRef: item.chapterTitle || 'Topic: Organic Chemistry',
  isUserApproved: true,
  hasImage: item.hasImage,
  imageUrl: item.imageUrl,
  imageCaption: item.imageCaption,
  imageAlt: item.imageAlt,
}));

export const MATHEMATICS_CUSTOM_QUESTIONS: CustomExtractedQuestion[] = JAMBIX_MATHEMATICS_ITEMS.map((item, idx) => ({
  id: item.id || `math_jambix_${idx + 1}`,
  sourcePdfName: 'JAMBIX_MATHEMATICS_QUESTION_BANK.pdf',
  extractedAt: 'Indexed Official Syllabus Bank',
  subject: 'Mathematics',
  subjectKey: 'mathematics' as const,
  topic: item.topic,
  year: 2026,
  text: item.text,
  options: item.options,
  answer: item.answer,
  explanation: item.explanation,
  bookTitle: 'JAMBIX MATHEMATICS QUESTION BANK',
  author: 'JAMBIX UTME Preparatory Series',
  textbookRef: item.chapterTitle || '100 Tough Questions Across All Topics',
  isUserApproved: true,
  hasImage: item.hasImage,
  imageUrl: item.imageUrl,
  imageCaption: item.imageCaption,
  imageAlt: item.imageAlt,
}));

export const BIOLOGY_CUSTOM_QUESTIONS: CustomExtractedQuestion[] = JAMBIX_BIOLOGY_ITEMS.map((item, idx) => ({
  id: item.id || `bio_jambix_${idx + 1}`,
  sourcePdfName: 'JAMBIX_BIOLOGY_QUESTION_BANK.pdf',
  extractedAt: 'Indexed Official Syllabus Bank',
  subject: 'Biology',
  subjectKey: 'biology' as const,
  topic: item.topic,
  year: 2026,
  text: item.text,
  options: item.options,
  answer: item.answer,
  explanation: item.explanation,
  bookTitle: 'JAMBIX BIOLOGY QUESTION BANK',
  author: 'JAMBIX UTME Preparatory Series',
  textbookRef: item.chapterTitle || '100 Tough Questions Across All Topics',
  isUserApproved: true,
  hasImage: item.hasImage,
  imageUrl: item.imageUrl,
  imageCaption: item.imageCaption,
  imageAlt: item.imageAlt,
}));

export const ECONOMICS_CUSTOM_QUESTIONS: CustomExtractedQuestion[] = JAMBIX_ECONOMICS_ITEMS.map((item, idx) => ({
  id: item.id || `econ_jambix_${idx + 1}`,
  sourcePdfName: 'JAMBIX_ECONOMICS_QUESTION_BANK.pdf',
  extractedAt: 'Indexed Official Syllabus Bank',
  subject: 'Economics',
  subjectKey: 'economics' as const,
  topic: item.topic,
  year: 2026,
  text: item.text,
  options: item.options,
  answer: item.answer,
  explanation: item.explanation,
  bookTitle: 'JAMBIX ECONOMICS QUESTION BANK',
  author: 'JAMBIX UTME Preparatory Series',
  textbookRef: item.chapterTitle || '100 Tough Questions Across All Topics',
  isUserApproved: true,
  hasImage: item.hasImage,
  imageUrl: item.imageUrl,
  imageCaption: item.imageCaption,
  imageAlt: item.imageAlt,
}));

export const COMMERCE_CUSTOM_QUESTIONS: CustomExtractedQuestion[] = JAMBIX_COMMERCE_ITEMS.map((item, idx) => ({
  id: item.id || `comm_jambix_${idx + 1}`,
  sourcePdfName: 'JAMBIX_COMMERCE_QUESTION_BANK.pdf',
  extractedAt: 'Indexed Official Syllabus Bank',
  subject: 'Commerce',
  subjectKey: 'commerce' as const,
  topic: item.topic,
  year: 2026,
  text: item.text,
  options: item.options,
  answer: item.answer,
  explanation: item.explanation,
  bookTitle: 'JAMBIX COMMERCE QUESTION BANK',
  author: 'JAMBIX UTME Preparatory Series',
  textbookRef: item.chapterTitle || '100 Tough Questions Across All Topics',
  isUserApproved: true,
  hasImage: item.hasImage,
  imageUrl: item.imageUrl,
  imageCaption: item.imageCaption,
  imageAlt: item.imageAlt,
}));

export const GOVERNMENT_CUSTOM_QUESTIONS: CustomExtractedQuestion[] = JAMBIX_GOVERNMENT_ITEMS.map((item, idx) => ({
  id: item.id || `govt_jambix_${idx + 1}`,
  sourcePdfName: 'JAMBIX_GOVERNMENT_QUESTION_BANK.pdf',
  extractedAt: 'Indexed Official Syllabus Bank',
  subject: 'Government',
  subjectKey: 'government' as const,
  topic: item.topic,
  year: 2026,
  text: item.text,
  options: item.options,
  answer: item.answer,
  explanation: item.explanation,
  bookTitle: 'JAMBIX GOVERNMENT QUESTION BANK',
  author: 'JAMBIX UTME Preparatory Series',
  textbookRef: item.chapterTitle || '100 Tough Questions Across All Topics',
  isUserApproved: true,
  hasImage: item.hasImage,
  imageUrl: item.imageUrl,
  imageCaption: item.imageCaption,
  imageAlt: item.imageAlt,
}));

export const LITERATURE_CUSTOM_QUESTIONS: CustomExtractedQuestion[] = JAMBIX_LITERATURE_ITEMS.map((item, idx) => ({
  id: item.id || `lit_jambix_${idx + 1}`,
  sourcePdfName: 'JAMBIX_LITERATURE_QUESTION_BANK.pdf',
  extractedAt: 'Indexed Official Syllabus Bank',
  subject: 'Literature in English',
  subjectKey: 'literature' as const,
  topic: item.topic,
  year: 2026,
  text: item.text,
  options: item.options,
  answer: item.answer,
  explanation: item.explanation,
  bookTitle: 'JAMBIX LITERATURE IN ENGLISH QUESTION BANK',
  author: 'JAMBIX UTME Preparatory Series',
  textbookRef: item.chapterTitle || '200 Tough Questions Across All Topics',
  isUserApproved: true,
  hasImage: item.hasImage,
  imageUrl: item.imageUrl,
  imageCaption: item.imageCaption,
  imageAlt: item.imageAlt,
}));

export const ACCOUNTS_CUSTOM_QUESTIONS: CustomExtractedQuestion[] = JAMBIX_ACCOUNTS_ITEMS.map((item, idx) => ({
  id: item.id || `acc_jambix_${idx + 1}`,
  sourcePdfName: 'JAMBIX_PRINCIPLES_OF_ACCOUNTS_QUESTION_BANK.pdf',
  extractedAt: 'Indexed Official Syllabus Bank',
  subject: 'Principles of Accounts',
  subjectKey: 'accounts' as const,
  topic: item.topic,
  year: 2026,
  text: item.text,
  options: item.options,
  answer: item.answer,
  explanation: item.explanation,
  bookTitle: 'JAMBIX PRINCIPLES OF ACCOUNTS QUESTION BANK',
  author: 'JAMBIX UTME Preparatory Series',
  textbookRef: item.chapterTitle || '200 Tough Questions Across All Topics',
  isUserApproved: true,
  hasImage: item.hasImage,
  imageUrl: item.imageUrl,
  imageCaption: item.imageCaption,
  imageAlt: item.imageAlt,
}));

/**
 * Get all indexed custom questions from local storage (uploaded by candidate)
 */
export function getLocalCustomQuestions(): CustomExtractedQuestion[] {
  let userCustom: CustomExtractedQuestion[] = [];
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(CUSTOM_QUESTIONS_STORAGE_KEY);
      if (raw) {
        userCustom = JSON.parse(raw);
      }
    } catch (err) {
      console.warn('Failed to load custom questions from localStorage:', err);
    }
  }

  return userCustom;
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
  
  const isDemystified = cq.sourcePdfName?.includes('Timothy') || cq.bookTitle?.includes('DEMYSTIFIED');
  const tag = isDemystified
    ? `[Physics Demystified · ${cq.topic}]`
    : `[PDF Exam Source: ${cq.sourcePdfName || 'Extracted Bank'}]`;

  const baseQ: VerifiedQuestion = {
    id: 950000 + index * 10 + (typeof cq.id === 'string' ? parseInt(cq.id.slice(-4), 16) || index : cq.id),
    year,
    questionNumber: index + 1,
    subject: cq.subject,
    topic: cq.topic || 'General Practice',
    text: `${tag} ${cq.text}`,
    options: cq.options,
    answer: cq.answer,
    explanation: isDemystified
      ? `${cq.explanation}`
      : `${cq.explanation} (Indexed from Candidate Document: ${cq.sourcePdfName || 'Custom PDF Upload'}).`,
    bookTitle: cq.bookTitle || (isDemystified ? 'PHYSICS DEMYSTIFIED' : `Extracted PDF Exam: ${cq.sourcePdfName || 'Custom Bank'}`),
    author: cq.author || (isDemystified ? 'Dr. Aifuwa Timothy' : 'Candidate Uploaded Syllabus Item'),
    textbookRef: cq.textbookRef || (isDemystified ? `Physics Demystified by Dr. Timothy · ${cq.topic}` : `Verified Candidate PDF Item · ${cq.subject}`),
    hasImage: cq.hasImage,
    imageUrl: cq.imageUrl,
    imageCaption: cq.imageCaption,
    imageAlt: cq.imageAlt,
  };

  const isAuthenticBank = isDemystified || cq.bookTitle?.includes('JAMBIX') || cq.sourcePdfName?.includes('JAMBIX');
  if (isAuthenticBank) {
    // Preserve authentic textbook answer keys and option order
    return baseQ;
  }

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
  const words = lowTopic.split(/[\s,&:/-]+/).filter((w) => w.length > 3);
  
  const matched = all.filter((q) => {
    const isSub = normalizeSubjectKey(q.subject) === subjectKey;
    if (!isSub) return false;
    const qTop = q.topic.toLowerCase();
    const qTxt = q.text.toLowerCase();
    return qTop.includes(lowTopic) || qTxt.includes(lowTopic) || (words.length > 0 && words.some((w) => qTop.includes(w)));
  });

  // Randomize so student gets non-repeating fresh questions
  const shuffled = [...matched];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }

  const converted = shuffled.map((cq, idx) => convertToVerifiedQuestion(cq, idx));
  return limitCount ? converted.slice(0, limitCount) : converted;
}
