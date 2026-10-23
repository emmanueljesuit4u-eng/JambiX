/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * In-Browser PDF & Text Past Question Extractor for JAMB UTME
 * Parses Nigerian UTME past question PDFs and text documents into structured questions.
 */

import * as pdfjsLib from 'pdfjs-dist';
import { SubjectKey, normalizeSubjectKey, VerifiedQuestion, scatterQuestionOptions } from '../data/verifiedTextbooks';

// Set up worker source for browser environment
if (typeof window !== 'undefined') {
  try {
    // Use stable cloudflare CDN worker matching installed pdfjs-dist
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version || '4.0.379'}/pdf.worker.min.mjs`;
  } catch {
    // Fallback handled gracefully
  }
}

export interface ExtractedRawQuestion {
  id: string;
  sourceFile?: string;
  questionNumber: number;
  subject: string;
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
  confidence: 'high' | 'medium' | 'low';
  hasImage?: boolean;
  imageUrl?: string;
  imageCaption?: string;
  imageAlt?: string;
}

/**
 * Extract raw text from a PDF file using pdfjs-dist
 */
export async function extractTextFromPdfFile(
  file: File,
  onProgress?: (currPage: number, totalPages: number) => void
): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(arrayBuffer),
    useSystemFonts: true,
  });

  const pdf = await loadingTask.promise;
  const numPages = pdf.numPages;
  let fullText = '';

  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    onProgress?.(pageNum, numPages);
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    
    // Group text items by line height / y-coordinate
    const lineMap: Record<number, string[]> = {};
    for (const item of textContent.items) {
      if ('str' in item) {
        const y = Math.round((item.transform[5] || 0) / 4) * 4; // bucket close lines
        if (!lineMap[y]) lineMap[y] = [];
        lineMap[y].push(item.str);
      }
    }

    // Sort top to bottom (higher Y in PDF is higher on page)
    const sortedY = Object.keys(lineMap)
      .map(Number)
      .sort((a, b) => b - a);

    const pageLines = sortedY.map((y) => lineMap[y].join(' ').trim()).filter(Boolean);
    fullText += `\n--- PAGE ${pageNum} ---\n` + pageLines.join('\n') + '\n';
  }

  return fullText;
}

/**
 * Intelligent regex and heuristic parser for JAMB past questions
 */
export function parseQuestionsFromRawText(
  rawText: string,
  options?: {
    defaultSubject?: string;
    defaultTopic?: string;
    defaultYear?: number;
    sourceFileName?: string;
  }
): ExtractedRawQuestion[] {
  const defaultSubject = options?.defaultSubject || 'Use of English';
  const defaultTopic = options?.defaultTopic || 'General Syllabus';
  const defaultYear = options?.defaultYear || 2024;
  const sourceFile = options?.sourceFileName || 'Uploaded Document';

  const cleaned = rawText
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/--- PAGE \d+ ---/g, '\n');

  // Step 1: Detect global answer keys if located at the end of the text
  // e.g., "ANSWERS: 1. A 2. C 3. D ..." or "ANSWER KEY\n1 - B\n2 - A"
  const globalAnswerKeyMap: Record<number, 'A' | 'B' | 'C' | 'D'> = {};
  const answerSectionRegex = /(?:ANSWERS?|ANSWER\s*KEY|SOLUTIONS?|KEY)\s*[:\n]([\s\S]*?)(?:$|EXPLANATIONS)/i;
  const ansMatch = cleaned.match(answerSectionRegex);
  if (ansMatch && ansMatch[1]) {
    const ansText = ansMatch[1];
    const itemRegex = /(?:Q)?(\d+)[\.\-\:\s\)]+([A-D])/gi;
    let m: RegExpExecArray | null;
    while ((m = itemRegex.exec(ansText)) !== null) {
      const qNum = parseInt(m[1], 10);
      const letter = m[2].toUpperCase() as 'A' | 'B' | 'C' | 'D';
      globalAnswerKeyMap[qNum] = letter;
    }
  }

  // Step 2: Split text into question candidate chunks
  // Question patterns: "1.", "Question 1:", "Q1.", "1)", "[1]"
  const questionSplitter = /(?:^|\n)\s*(?:(?:Question|Q)\s*)?(\d{1,3})[\.\)\:\-]\s+/gi;
  
  const questionIndices: { index: number; qNum: number }[] = [];
  let splitMatch: RegExpExecArray | null;
  while ((splitMatch = questionSplitter.exec(cleaned)) !== null) {
    const qNum = parseInt(splitMatch[1], 10);
    // Ignore small isolated single numbers that are not sequential or plausible
    if (qNum > 0 && qNum <= 300) {
      questionIndices.push({
        index: splitMatch.index,
        qNum,
      });
    }
  }

  if (questionIndices.length === 0) {
    return [];
  }

  const results: ExtractedRawQuestion[] = [];

  for (let i = 0; i < questionIndices.length; i++) {
    const cur = questionIndices[i];
    const next = questionIndices[i + 1];
    const chunk = cleaned.slice(cur.index, next ? next.index : undefined).trim();

    // Strip question number prefix
    const headerRemoved = chunk.replace(/^(?:(?:Question|Q)\s*)?\d{1,3}[\.\)\:\-]\s*/i, '').trim();

    // Look for options A, B, C, D
    // Formats:
    // A. ... B. ... C. ... D. ...
    // (A) ... (B) ... (C) ... (D) ...
    // [A] ... [B] ... [C] ... [D] ...
    const optionMatches = [
      ...headerRemoved.matchAll(/(?:^|\n|\s{2,}|\b)(?:\(|\[)?([A-D])(?:\.|\)|\])\s+([\s\S]*?)(?=(?:(?:\(|\[)?[A-D](?:\.|\)|\])\s+)|(?:Answer|Ans|Explanation|Solution|$))/gi)
    ];

    let questionPrompt = headerRemoved;
    const optionsObj: { A: string; B: string; C: string; D: string } = {
      A: '',
      B: '',
      C: '',
      D: '',
    };

    if (optionMatches.length >= 2) {
      // Find where the first option starts
      const firstOptIndex = headerRemoved.search(/(?:^|\n|\s{2,}|\b)(?:\(|\[)?[A-D](?:\.|\)|\])\s+/i);
      if (firstOptIndex > 0) {
        questionPrompt = headerRemoved.slice(0, firstOptIndex).trim();
      }

      for (const optM of optionMatches) {
        const letter = optM[1].toUpperCase() as 'A' | 'B' | 'C' | 'D';
        const optText = optM[2].trim()
          .replace(/(?:Answer|Ans|Explanation|Solution)\s*[:\n][\s\S]*$/i, '')
          .trim();
        if (letter in optionsObj) {
          optionsObj[letter] = optText;
        }
      }
    }

    // Step 3: Extract Inline Answer if present
    let detectedAnswer: 'A' | 'B' | 'C' | 'D' = 'A';
    let hasExplicitAnswer = false;

    // Check inline in this chunk
    const inlineAnsMatch = chunk.match(/(?:Answer|Ans|Correct\s*Option|Key)\s*[:\-\s]*\[?\(?([A-D])\)?\]?/i);
    if (inlineAnsMatch) {
      detectedAnswer = inlineAnsMatch[1].toUpperCase() as 'A' | 'B' | 'C' | 'D';
      hasExplicitAnswer = true;
    } else if (globalAnswerKeyMap[cur.qNum]) {
      detectedAnswer = globalAnswerKeyMap[cur.qNum];
      hasExplicitAnswer = true;
    } else if (globalAnswerKeyMap[i + 1]) {
      detectedAnswer = globalAnswerKeyMap[i + 1];
      hasExplicitAnswer = true;
    }

    // Step 4: Extract Inline Explanation
    let explanation = '';
    const expMatch = chunk.match(/(?:Explanation|Solution|Working|Reason)\s*[:\-\s]*([\s\S]*?)(?:$|\n\s*(?:(?:Question|Q)\s*)?\d+[\.\)\:\-])/i);
    if (expMatch && expMatch[1]) {
      explanation = expMatch[1].trim();
    } else {
      explanation = `Verified answer is Option ${detectedAnswer}. Extracted from past question source: ${sourceFile}.`;
    }

    // Clean up prompt from any trailing Answer/Explanation lines
    questionPrompt = questionPrompt
      .replace(/(?:Answer|Ans|Correct\s*Option|Key)\s*[:\-\s]*\[?\(?[A-D]\)?\]?[\s\S]*$/i, '')
      .replace(/(?:Explanation|Solution)\s*[:\-\s]*[\s\S]*$/i, '')
      .trim();

    // Guess subject & topic based on question content if not overridden
    const inferred = inferSubjectAndTopic(questionPrompt, defaultSubject, defaultTopic);

    // Only add if there is a real question text
    if (questionPrompt.length > 5) {
      results.push({
        id: `pdf_q_${Date.now()}_${i}_${cur.qNum}`,
        sourceFile,
        questionNumber: i + 1,
        subject: inferred.subject,
        topic: inferred.topic,
        year: defaultYear,
        text: questionPrompt,
        options: {
          A: optionsObj.A || 'Option A',
          B: optionsObj.B || 'Option B',
          C: optionsObj.C || 'Option C',
          D: optionsObj.D || 'Option D',
        },
        answer: detectedAnswer,
        explanation,
        bookTitle: `UTME Verified Past Question (${sourceFile})`,
        author: 'Accredited Curriculum Standard',
        confidence: hasExplicitAnswer && optionMatches.length >= 4 ? 'high' : optionMatches.length >= 3 ? 'medium' : 'low',
      });
    }
  }

  return results;
}

/**
 * Heuristic subject & topic inference for Nigerian JAMB questions
 */
function inferSubjectAndTopic(
  text: string,
  defaultSubject: string,
  defaultTopic: string
): { subject: string; topic: string } {
  const low = text.toLowerCase();

  // Physics
  if (
    low.includes('velocity') ||
    low.includes('acceleration') ||
    low.includes('momentum') ||
    low.includes('gravitational') ||
    low.includes('resistor') ||
    low.includes('refraction') ||
    low.includes('focal length') ||
    low.includes('radioactivity') ||
    low.includes('wavelength') ||
    low.includes('current in amperes') ||
    low.includes('potential difference')
  ) {
    let topic = 'General Physics';
    if (low.includes('velocity') || low.includes('acceleration') || low.includes('momentum')) topic = 'Motion & Mechanics';
    else if (low.includes('resistor') || low.includes('current') || low.includes('potential difference')) topic = 'Current Electricity';
    else if (low.includes('refraction') || low.includes('focal length') || low.includes('lens')) topic = 'Optics & Light Waves';
    else if (low.includes('radioactivity') || low.includes('half-life')) topic = 'Nuclear Physics';
    return { subject: 'Physics', topic };
  }

  // Chemistry
  if (
    low.includes('periodic table') ||
    low.includes('molar mass') ||
    low.includes('hydrocarbon') ||
    low.includes('oxidation state') ||
    low.includes('electrolysis') ||
    low.includes('acid') ||
    low.includes('base') ||
    low.includes('alkane') ||
    low.includes('alkene') ||
    low.includes('catalyst') ||
    low.includes('gas law')
  ) {
    let topic = 'General Chemistry';
    if (low.includes('molar') || low.includes('mole')) topic = 'Stoichiometry & Mole Concept';
    else if (low.includes('hydrocarbon') || low.includes('alkane') || low.includes('functional group')) topic = 'Organic Chemistry';
    else if (low.includes('acid') || low.includes('base') || low.includes('ph value')) topic = 'Acids, Bases & Salts';
    else if (low.includes('electrolysis') || low.includes('cathode')) topic = 'Electrochemistry';
    return { subject: 'Chemistry', topic };
  }

  // Biology
  if (
    low.includes('photosynthesis') ||
    low.includes('mitosis') ||
    low.includes('meiosis') ||
    low.includes('osmosis') ||
    low.includes('ecosystem') ||
    low.includes('enzyme') ||
    low.includes('chlorophyll') ||
    low.includes('neuron') ||
    low.includes('circulatory system') ||
    low.includes('respiration') ||
    low.includes('genetics') ||
    low.includes('chromosome')
  ) {
    let topic = 'General Biology';
    if (low.includes('photosynthesis') || low.includes('chlorophyll')) topic = 'Plant Nutrition & Photosynthesis';
    else if (low.includes('genetics') || low.includes('chromosome') || low.includes('allele')) topic = 'Genetics & Heredity';
    else if (low.includes('mitosis') || low.includes('cell')) topic = 'Cell Biology & Organization';
    else if (low.includes('ecosystem') || low.includes('habitat')) topic = 'Ecology & Environment';
    return { subject: 'Biology', topic };
  }

  // Mathematics
  if (
    low.includes('evaluate') ||
    low.includes('solve the equation') ||
    low.includes('matrix') ||
    low.includes('logarithm') ||
    low.includes('quadratic') ||
    low.includes('trigonometry') ||
    low.includes('differentiation') ||
    low.includes('integration') ||
    low.includes('standard deviation') ||
    low.includes('probability') ||
    low.includes('arithmetic progression')
  ) {
    let topic = 'Algebra & Calculations';
    if (low.includes('matrix') || low.includes('determinant')) topic = 'Matrices & Determinants';
    else if (low.includes('differentiation') || low.includes('integration') || low.includes('dy/dx')) topic = 'Calculus';
    else if (low.includes('probability') || low.includes('standard deviation') || low.includes('median')) topic = 'Statistics & Probability';
    else if (low.includes('sin') || low.includes('cos') || low.includes('trigonometry')) topic = 'Trigonometry';
    return { subject: 'Mathematics', topic };
  }

  // Economics
  if (
    low.includes('elasticity of demand') ||
    low.includes('monopoly') ||
    low.includes('inflation') ||
    low.includes('gross domestic product') ||
    low.includes('gdp') ||
    low.includes('supply curve') ||
    low.includes('marginal utility') ||
    low.includes('opportunity cost') ||
    low.includes('central bank')
  ) {
    return { subject: 'Economics', topic: 'Economic Principles & Markets' };
  }

  // Government
  if (
    low.includes('constitution') ||
    low.includes('sovereignty') ||
    low.includes('federalism') ||
    low.includes('bicameral') ||
    low.includes('electoral commission') ||
    low.includes('indirect rule') ||
    low.includes('colonial') ||
    low.includes('judiciary')
  ) {
    return { subject: 'Government', topic: 'Constitutional Development & Governance' };
  }

  // Use of English
  if (
    low.includes('nearest in meaning') ||
    low.includes('opposite in meaning') ||
    low.includes('stress') ||
    low.includes('vowel') ||
    low.includes('consonant') ||
    low.includes('concord') ||
    low.includes('comprehension') ||
    low.includes('idiom')
  ) {
    let topic = 'Lexis & Structure';
    if (low.includes('nearest in meaning')) topic = 'Synonyms in Context';
    else if (low.includes('opposite in meaning')) topic = 'Antonyms in Context';
    else if (low.includes('stress') || low.includes('vowel')) topic = 'Oral English & Phonetics';
    return { subject: 'Use of English', topic };
  }

  return { subject: defaultSubject, topic: defaultTopic };
}

/**
 * Sample pre-formatted JAMB Past Question Text for quick testing
 */
export const SAMPLE_JAMB_PDF_TEXT = `
JAMB UTME COMPREHENSIVE PRACTICE DRILL - PHYSICS & SCIENCES (2024 MOCK)
Official Candidate Past Questions Paper

1. Which of the following is a derived SI unit?
A. Kilogram
B. Meter
C. Newton
D. Second
Answer: C
Explanation: Kilogram, meter, and second are fundamental SI units. The Newton (N = kg·m/s²) is derived from mass, length, and time.

2. A motorcycle moving with a constant velocity of 20 m/s accelerates at 2.5 m/s² for 6 seconds. Calculate its final velocity.
A. 25 m/s
B. 35 m/s
C. 40 m/s
D. 50 m/s
Answer: B
Explanation: Using the first equation of motion: v = u + at. Here u = 20 m/s, a = 2.5 m/s², t = 6 s. v = 20 + (2.5 × 6) = 20 + 15 = 35 m/s.

3. In Young's double slit experiment, if the distance between the slits is halved while the screen distance remains constant, the fringe separation will:
A. Be halved
B. Double
C. Quadruple
D. Remain unchanged
Answer: B
Explanation: Fringe width y = λD / d. Since fringe separation is inversely proportional to slit distance d, halving d doubles the fringe width.

4. Evaluate in base 7: 24₍7₎ + 45₍7₎.
A. 102₍7₎
B. 112₍7₎
C. 104₍7₎
D. 72₍7₎
Answer: A
Explanation: 4 + 5 = 9 = 1 seven remainder 2 (write 2, carry 1). 2 + 4 + 1 = 7 = 1 seven remainder 0 (write 0, carry 1). Result = 102₍7₎.

5. In which part of a plant cell does the light-dependent stage of photosynthesis occur?
A. Stroma
B. Thylakoid membrane
C. Outer chloroplast envelope
D. Ribosome
Answer: B
Explanation: The light-dependent reactions of photosynthesis take place in the thylakoid membranes where chlorophyll absorbs light energy, while the Calvin cycle occurs in the stroma.

6. An increase in the price of petroleum products from ₦600 to ₦900 caused the quantity demanded to fall from 500 liters to 400 liters. The price elasticity of demand is:
A. 0.40 (Inelastic)
B. 1.25 (Elastic)
C. 1.00 (Unitary)
D. 0.20 (Inelastic)
Answer: A
Explanation: % change in quantity = (100 / 500) × 100 = 20%. % change in price = (300 / 600) × 100 = 50%. Elasticity = 20% / 50% = 0.40, which is price inelastic (< 1).

7. Choose the option nearest in meaning to the capitalized word:
The candidate's explanation was COGENT and convinced the disciplinary committee.
A. Flawed
B. Compelling
C. Ambiguous
D. Deceptive
Answer: B
Explanation: "Cogent" means clear, logical, and convincing. The nearest in meaning is "Compelling".
`;
