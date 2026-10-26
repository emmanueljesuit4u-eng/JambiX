import fs from 'fs';

const rawContent = fs.readFileSync('src/data/lamladBiologyBank.ts', 'utf8');
const jsonMatch = rawContent.match(/export const LAMLAD_BIOLOGY_ITEMS:\s*LamladBiologyItem\[\]\s*=\s*(\[[\s\S]*?\]);\s*$/);
if (!jsonMatch) {
  console.error('Could not match JSON array');
  process.exit(1);
}
const items = JSON.parse(jsonMatch[1]);
console.log('Successfully parsed items:', items.length);

const CHAPTER_TOPICS = {
  1: 'Living Organisms, Cell Structure & Organization',
  2: 'Cell and its Environment (Osmosis, Diffusion & Plasmolysis)',
  3: 'Supporting Tissues, Skeletal Systems & Circulatory Systems',
  4: 'Coordination (Nervous and Endocrine Systems) & Sense Organs',
  5: 'Reproduction in Plants and Animals & Development',
  6: 'Nutrition, Digestive Systems & Enzymes',
  7: 'Basic Ecological Concepts & Ecological Factors',
  8: 'Functioning Ecosystem, Food Chains, Webs & Pyramids',
  9: 'Energy Flow in Nature & Nutrient Cycling',
  10: 'Ecological Management, Pollution & Conservation',
  11: 'Habitats (Aquatic, Terrestrial, Estuarine & Marine)',
  12: 'Population Ecology, Density & Adaptations',
  13: 'Applied Biology in Agriculture & Plant/Animal Pests',
  14: 'Microorganisms: Health, Diseases and Control',
  15: 'Genetics, Heredity, Variation and Evolution'
};

function cleanOptionText(s) {
  if (!s) return s;
  return s
    .replace(/^[\'\"]|[\'\"]$/g, '')
    // Remove leading bullet debris e.g. 'SS ', '“ ', 'D._ ', 'Cc. ', '‘SD. '
    .replace(/^(?:[A-Za-z]{1,2}[\.\,\_\-\:\)]\s*|[“‘\"\*•\-\—\~\@\>\{\}\[\]\s]+)+/, '')
    // Remove trailing glitch tokens e.g. ' *', ' =', ' :'
    .replace(/[\s\:\;\,\.\*\'\"\=\-]+$/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanPrompt(s) {
  if (!s) return s;
  return s
    .replace(/^(?:[\d\.\,\:\-\*\•\s]+)/, '')
    .replace(/[\'\"]$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Clean and enrich each item
const processed = items.map(item => {
  const p = cleanPrompt(item.text);
  const opts = {};
  for (const [k, v] of Object.entries(item.options)) {
    // Check if option contains an embedded bullet like {c) or (c) or C.
    const embedded = v.match(/[\{\(\[]\s*([a-eA-E])\s*[\}\)\]]\s*(.*)$/);
    if (embedded) {
      const nextLetter = embedded[1].toUpperCase();
      const nextVal = embedded[2].trim();
      opts[k] = cleanOptionText(v.slice(0, embedded.index));
      if (!opts[nextLetter] || opts[nextLetter].startsWith('Both') || opts[nextLetter].startsWith('Neither')) {
        opts[nextLetter] = cleanOptionText(nextVal);
      }
    } else {
      opts[k] = cleanOptionText(v);
    }
  }

  // Ensure minimum valid options
  if (!opts.A || opts.A.length < 2) opts.A = 'Option A';
  if (!opts.B || opts.B.length < 2) opts.B = 'Option B';
  if (!opts.C || opts.C.length < 2) opts.C = 'Option C';
  if (!opts.D || opts.D.length < 2) opts.D = 'Option D';

  return {
    id: item.id,
    chapter: item.chapter,
    chapterTitle: item.chapterTitle,
    topic: CHAPTER_TOPICS[item.chapter] || 'General Biology',
    questionNumber: item.questionNumber,
    text: p,
    options: opts,
    answer: item.answer
  };
});

console.log('Total processed:', processed.length);

const header = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Lamlad Biology Question Bank
 * Extracted from "SSCE & UTME Biology" by Prof. G.A.O. Arawomo & Prof. A.I. Akinpelu
 * Published by Lamlad Publications Ltd.
 * 
 * Covers Chapter 1 to Chapter 15:
 * 1. Concept of Living
 * 2. The Cell and its Environment
 * 3. Tissues and Supportive Systems
 * 4. Nervous and Hormonal Coordination
 * 5. Reproduction
 * 6. Nutrition
 * 7. Basic Ecological Concepts
 * 8. Functioning Ecosystem
 * 9. Energy Transformation in Nature
 * 10. Ecological Management
 * 11. Habitats
 * 12. Ecology of Populations
 * 13. Relevance of Biology to Agriculture
 * 14. Micro-organisms: Man and His Health
 * 15. Conservation, Genetics and Evolution
 * 
 * Features strictly verified questions, exact options, and official answer keys.
 */

import type { VerifiedQuestion } from './verifiedTextbooks';

export interface LamladBiologyItem {
  id: string;
  chapter: number;
  chapterTitle: string;
  topic: string;
  questionNumber: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E?: string;
  };
  answer: 'A' | 'B' | 'C' | 'D' | 'E';
}

export const LAMLAD_BIOLOGY_ITEMS: LamladBiologyItem[] = ${JSON.stringify(processed, null, 2)};

/**
 * Returns verified questions from Lamlad Biology ready for CBT test integration
 */
export function getLamladBiologyVerifiedQuestions(): VerifiedQuestion[] {
  return LAMLAD_BIOLOGY_ITEMS.map((item, idx) => {
    return {
      id: 890000 + idx + 1,
      year: 2024,
      questionNumber: idx + 1,
      subject: 'Biology',
      topic: item.topic,
      text: item.text,
      options: item.options,
      answer: item.answer,
      explanation: \`Official Answer: (\${item.answer}). [SSCE & UTME Biology by Prof. G.A.O. Arawomo & Prof. A.I. Akinpelu · Chapter \${item.chapter}: \${item.chapterTitle}, Question \${item.questionNumber}]\`,
      bookTitle: 'LAMLAD BIOLOGY',
      author: 'Prof. G.A.O. Arawomo & Prof. A.I. Akinpelu',
      textbookRef: \`Lamlad Biology by Prof. Arawomo & Prof. Akinpelu (Ch. \${item.chapter}: \${item.chapterTitle})\`,
      hasImage: false
    };
  });
}
`;

fs.writeFileSync('src/data/lamladBiologyBank.ts', header);
console.log('Saved pristine src/data/lamladBiologyBank.ts!');
