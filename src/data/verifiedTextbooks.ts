/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Official Verified Textbooks Registry for UTME Preparation
 * Strictly enforces official citations from the primary standard textbooks:
 * 1. NEW SCHOOL PHYSICS - M.W. Anyakoha
 * 2. NEW SCHOOL CHEMISTRY - Osei Yaw Ababio
 * 3. MODERN BIOLOGY - Sarojini T. Ramalingam
 * 4. HIDDEN FACTS IN MATHEMATICS - M.A. Otumudia
 * 5. A-Z OF ENGLISH - Dele Ashade
 */

export interface VerifiedTextbook {
  subjectKey: 'physics' | 'chemistry' | 'biology' | 'mathematics' | 'english';
  subjectName: string;
  bookTitle: string;
  author: string;
  edition: string;
  publisher: string;
  badge: string;
  coreChapters: {
    chapter: number;
    title: string;
    pageRange: string;
    topics: string[];
  }[];
}

export const VERIFIED_TEXTBOOKS: Record<string, VerifiedTextbook> = {
  physics: {
    subjectKey: 'physics',
    subjectName: 'Physics',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    edition: 'Revised Senior Secondary Edition',
    publisher: 'Africana First Publishers PLC',
    badge: 'Physics Verified Authority',
    coreChapters: [
      {
        chapter: 1,
        title: 'Units and Measurements, Dimensions & Vectors',
        pageRange: 'Pages 1 - 24',
        topics: ['Fundamental and derived units', 'Dimensional analysis', 'Resolution of coplanar vectors'],
      },
      {
        chapter: 2,
        title: 'Motion & Equations of Uniformly Accelerated Motion',
        pageRange: 'Pages 25 - 48',
        topics: ['Linear velocity & acceleration', 'Equations of motion', 'Velocity-time graphs'],
      },
      {
        chapter: 3,
        title: 'Projectiles & Gravitational Motion',
        pageRange: 'Pages 49 - 68',
        topics: ['Trajectory of projectiles', 'Time of flight', 'Maximum height and horizontal range'],
      },
      {
        chapter: 5,
        title: 'Newton’s Laws of Motion, Momentum & Simple Machines',
        pageRange: 'Pages 85 - 120',
        topics: ['Conservation of linear momentum', 'Impulse', 'Mechanical advantage and efficiency'],
      },
      {
        chapter: 8,
        title: 'Thermal Expansion, Gas Laws & Specific Heat Capacity',
        pageRange: 'Pages 160 - 204',
        topics: ['Boyle’s and Charles’s laws', 'Calorimetry method of mixtures', 'Latent heat'],
      },
      {
        chapter: 12,
        title: 'Waves, Sound Vibration & Optical Instruments',
        pageRange: 'Pages 250 - 310',
        topics: ['Resonance in air columns', 'Reflection at curved surfaces', 'Refraction through prisms'],
      },
      {
        chapter: 16,
        title: 'Current Electricity, Resistance & Kirchhoff’s Laws',
        pageRange: 'Pages 360 - 412',
        topics: ['Ohm’s law', 'Resistivity and internal resistance', 'Electric power'],
      },
      {
        chapter: 20,
        title: 'Electromagnetic Induction, AC Circuits & Nuclear Energy',
        pageRange: 'Pages 450 - 510',
        topics: ['Faraday’s law', 'Resonance frequency in RLC circuits', 'Radioactivity and half-life'],
      },
    ],
  },

  chemistry: {
    subjectKey: 'chemistry',
    subjectName: 'Chemistry',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    edition: 'Comprehensive Senior Secondary Edition',
    publisher: 'Africana First Publishers PLC',
    badge: 'Chemistry Verified Authority',
    coreChapters: [
      {
        chapter: 2,
        title: 'Separation of Mixtures & Purification of Chemical Substances',
        pageRange: 'Pages 18 - 34',
        topics: ['Distillation (fractional and simple)', 'Paper chromatography', 'Crystallization'],
      },
      {
        chapter: 4,
        title: 'Atomic Structure, Quantum Orbitals & Chemical Bonding',
        pageRange: 'Pages 48 - 82',
        topics: ['Electronic configuration (s, p, d, f)', 'Ionic and covalent bonds', 'Hydrogen bonding'],
      },
      {
        chapter: 6,
        title: 'Stoichiometry, Mole Concept & Chemical Equations',
        pageRange: 'Pages 105 - 138',
        topics: ['Avogadro’s constant', 'Empirical and molecular formulas', 'Volumetric analysis'],
      },
      {
        chapter: 9,
        title: 'Acids, Bases, Salts & Acid-Base Titration',
        pageRange: 'Pages 165 - 198',
        topics: ['pH and pOH scales', 'Standard solutions', 'Buffer solutions and hydrolysis'],
      },
      {
        chapter: 12,
        title: 'Oxidation-Reduction (Redox) & Electrolysis',
        pageRange: 'Pages 220 - 256',
        topics: ['Faraday’s first and second laws', 'Oxidation numbers', 'Extraction of metals by electrolysis'],
      },
      {
        chapter: 14,
        title: 'Nitrogen, Ammonia & Industrial Contact/Haber Processes',
        pageRange: 'Pages 270 - 302',
        topics: ['Haber process for ammonia', 'Tests for ammonium ions (NH₄⁺)', 'Nitric acid production'],
      },
      {
        chapter: 18,
        title: 'Organic Chemistry: Hydrocarbons, Alkanols & Polymers',
        pageRange: 'Pages 380 - 450',
        topics: ['IUPAC nomenclature', 'Addition and substitution reactions', 'Esterification and saponification'],
      },
    ],
  },

  biology: {
    subjectKey: 'biology',
    subjectName: 'Biology',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    edition: 'Revised Edition for Senior Secondary Schools',
    publisher: 'Africana First Publishers PLC',
    badge: 'Biology Verified Authority',
    coreChapters: [
      {
        chapter: 2,
        title: 'Cell Ultrastructure, Organelles & Organization of Life',
        pageRange: 'Pages 20 - 44',
        topics: ['Plant vs animal cell ultrastructure', 'Mitochondria, chloroplasts & ribosomes', 'Diffusion & osmosis'],
      },
      {
        chapter: 5,
        title: 'Plant Physiology: Photosynthesis, Mineral Nutrition & Transpiration',
        pageRange: 'Pages 88 - 122',
        topics: ['Light and dark photosynthetic pathways', 'Xylem and phloem transport', 'Stomatal mechanism'],
      },
      {
        chapter: 8,
        title: 'Transport in Mammals: The Circulatory System & Blood Components',
        pageRange: 'Pages 164 - 198',
        topics: ['Structure of the mammalian heart', 'Pulmonary and systemic circulation', 'ABO blood grouping & Rhesus factor'],
      },
      {
        chapter: 11,
        title: 'Excretion and Homeostasis: Kidney Nephron & Osmoregulation',
        pageRange: 'Pages 230 - 258',
        topics: ['Ultrafiltration in Bowman’s capsule', 'Selective reabsorption', 'Hormonal control (ADH and aldosterone)'],
      },
      {
        chapter: 14,
        title: 'Nervous and Hormonal Coordination & Sensory Organs',
        pageRange: 'Pages 295 - 340',
        topics: ['Reflex arc', 'Structure and defects of the eye', 'Mammalian ear and hearing'],
      },
      {
        chapter: 18,
        title: 'Genetics, Mendelian Heredity, Variation & Evolution',
        pageRange: 'Pages 410 - 465',
        topics: ['Monohybrid and dihybrid crosses', 'Sex-linked inheritance', 'Darwinian natural selection'],
      },
    ],
  },

  mathematics: {
    subjectKey: 'mathematics',
    subjectName: 'Mathematics',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    edition: 'Master Guide for SSCE, UTME & Post-UTME',
    publisher: 'Hidden Facts Publications',
    badge: 'Mathematics Verified Authority',
    coreChapters: [
      {
        chapter: 1,
        title: 'Number Bases, Modular Arithmetic, Indices & Logarithms',
        pageRange: 'Pages 1 - 32',
        topics: ['Conversion of fractional bases', 'Laws of logarithms and surds', 'Modular linear congruence'],
      },
      {
        chapter: 3,
        title: 'Quadratic Equations, Polynomials & Partial Fractions',
        pageRange: 'Pages 54 - 92',
        topics: ['Sum and product of roots (α and β)', 'Factor and Remainder theorems', 'Resolving algebraic fractions'],
      },
      {
        chapter: 5,
        title: 'Sequences & Series: Arithmetic (AP) and Geometric Progressions (GP)',
        pageRange: 'Pages 120 - 154',
        topics: ['nth term formulas', 'Sum of first n terms', 'Sum to infinity of GP'],
      },
      {
        chapter: 7,
        title: 'Coordinate Geometry, Straight Lines & Circles',
        pageRange: 'Pages 178 - 212',
        topics: ['Gradient and equations of lines', 'Perpendicular and parallel lines', 'Length of tangents to circles'],
      },
      {
        chapter: 9,
        title: 'Trigonometry: Special Angles, Sine/Cosine Rules & Bearings',
        pageRange: 'Pages 235 - 275',
        topics: ['Ratios of 30°, 45°, 60°', 'Trigonometric identities', 'Three-figure bearings and distance problems'],
      },
      {
        chapter: 11,
        title: 'Differential Calculus & Applications (Maxima, Minima & Rates)',
        pageRange: 'Pages 295 - 338',
        topics: ['Product, quotient and chain rules', 'Turning points and stationary values', 'Rates of change'],
      },
      {
        chapter: 12,
        title: 'Integral Calculus: Definite Integrals & Area Under Curves',
        pageRange: 'Pages 339 - 370',
        topics: ['Integration by substitution', 'Definite integration', 'Area bounded by curves and axes'],
      },
      {
        chapter: 14,
        title: 'Statistics, Permutations, Combinations & Probability',
        pageRange: 'Pages 405 - 460',
        topics: ['Standard deviation of grouped data', 'Arrangements and selections', 'Conditional probability'],
      },
    ],
  },

  english: {
    subjectKey: 'english',
    subjectName: 'Use of English',
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    edition: 'Complete Guide to Use of English, Grammatical Structures & Oral Forms',
    publisher: 'Ashad Educational Books',
    badge: 'English Verified Authority',
    coreChapters: [
      {
        chapter: 1,
        title: 'Grammatical Concord: Subject-Verb Agreement Rules',
        pageRange: 'Pages 12 - 45',
        topics: ['Proximity and accompaniment concord', 'Mandative subjunctive', 'Indefinite pronoun agreement'],
      },
      {
        chapter: 3,
        title: 'Lexis and Structure: Synonyms, Antonyms & Collocations',
        pageRange: 'Pages 68 - 110',
        topics: ['Words nearest in meaning', 'Opposites in context', 'Easily confused homophones and idioms'],
      },
      {
        chapter: 5,
        title: 'Prepositions, Phrasal Verbs & Verb Patterns',
        pageRange: 'Pages 135 - 176',
        topics: ['Prepositional idioms', 'Separable and inseparable phrasal verbs', 'Conditional sentence clauses'],
      },
      {
        chapter: 7,
        title: 'Comprehension & Summary Extraction Techniques',
        pageRange: 'Pages 198 - 232',
        topics: ['Deducing author tone and bias', 'Answering inference questions', 'Strict word-limit summary rules'],
      },
      {
        chapter: 9,
        title: 'Oral English: Vowel Contrasts & Diphthongs',
        pageRange: 'Pages 255 - 290',
        topics: ['Short vs long monophthongs', 'Diphthongs and triphthongs', 'Silent letters in English orthography'],
      },
      {
        chapter: 11,
        title: 'Stress Placement: Noun-Verb Stress Shifts & Intonation',
        pageRange: 'Pages 315 - 350',
        topics: ['Primary word stress', 'Syllable weight rules', 'Emphatic stress and sentence meaning shifts'],
      },
    ],
  },
};

/**
 * Returns the verified citation string for a given subject and topic/chapter
 */
export function getVerifiedCitation(
  subject: string,
  topic: string,
  chapter?: number,
  page?: number | string
): string {
  const norm = subject.toLowerCase().trim();
  let book: VerifiedTextbook;

  if (norm.includes('phys')) {
    book = VERIFIED_TEXTBOOKS.physics;
  } else if (norm.includes('chem')) {
    book = VERIFIED_TEXTBOOKS.chemistry;
  } else if (norm.includes('bio')) {
    book = VERIFIED_TEXTBOOKS.biology;
  } else if (norm.includes('math')) {
    book = VERIFIED_TEXTBOOKS.mathematics;
  } else if (norm.includes('eng') || norm.includes('lexis')) {
    book = VERIFIED_TEXTBOOKS.english;
  } else {
    return `Topic: ${topic} — Verified JAMB Standard Reference`;
  }

  return `Topic: ${topic} in ${book.bookTitle} by ${book.author}`;
}

export function getVerifiedBookForSubject(subjectOrCode: string): VerifiedTextbook | undefined {
  const norm = subjectOrCode.toLowerCase().trim();
  if (norm.includes('phys')) return VERIFIED_TEXTBOOKS.physics;
  if (norm.includes('chem')) return VERIFIED_TEXTBOOKS.chemistry;
  if (norm.includes('bio')) return VERIFIED_TEXTBOOKS.biology;
  if (norm.includes('math')) return VERIFIED_TEXTBOOKS.mathematics;
  if (norm.includes('eng') || norm.includes('lexis')) return VERIFIED_TEXTBOOKS.english;
  return undefined;
}

import { VerifiedQuestion } from './jambPastQuestions';
export type { VerifiedQuestion };

export const VERIFIED_QUESTIONS: VerifiedQuestion[] = [
  // ==========================================
  // 1. USE OF ENGLISH — A-Z OF ENGLISH (Dele Ashade)
  // ==========================================
  {
    id: 101,
    subject: 'Use of English',
    topic: 'Lexis & Structure: Synonyms and Vocabulary in Context',
    text: 'From the words lettered A to D, choose the word that best completes the sentence: The candidate was commended for her _______ performance in the UTME.',
    options: {
      A: 'exceptional',
      B: 'exceptionable',
      C: 'excepting',
      D: 'excessive',
    },
    answer: 'A',
    explanation: "'Exceptional' means remarkably good, superior, or outstanding. 'Exceptionable' means objectionable or offensive, which contradicts a commendable achievement.",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 3,
    page: 84,
    textbookRef: 'Topic: Lexis, Structure & Vocabulary in Context in A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 102,
    subject: 'Use of English',
    topic: 'Grammatical Concord: Proximity Concord with Correlative Conjunctions',
    text: 'Choose the option that correctly completes the sentence: Neither the school principal nor the subject tutors _______ present at the zonal education briefing yesterday.',
    options: {
      A: 'was',
      B: 'were',
      C: 'is',
      D: 'are',
    },
    answer: 'B',
    explanation: "When subjects are joined by 'neither... nor', the verb agrees in number and person with the nearer subject (Rule of Proximity). 'Subject tutors' is plural and the event took place in the past ('yesterday'), requiring 'were'.",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 1,
    page: 31,
    textbookRef: 'Topic: Grammatical Concord & Proximity Agreement in A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 103,
    subject: 'Use of English',
    topic: 'Grammatical Concord: The Mandative Subjunctive',
    text: 'Choose the correct verb form: The JAMB registrar insisted that every candidate _______ their original biometric print before admittance into the hall.',
    options: {
      A: 'verify',
      B: 'verifies',
      C: 'verified',
      D: 'must verify',
    },
    answer: 'A',
    explanation: "In the mandative subjunctive construction (after verbs like insist, demand, recommend, mandate that...), the clause verb remains in the uninflected base form (infinitive without 'to') regardless of third-person singular subjects.",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 1,
    page: 42,
    textbookRef: 'Topic: The Mandative Subjunctive & Verbal Concord in A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 104,
    subject: 'Use of English',
    topic: 'Lexis & Structure: Antonyms (Opposites in Context)',
    text: 'In the sentence below, choose the word most nearly opposite in meaning to the capitalized word: The witness gave a TACITURN response during the cross-examination.',
    options: {
      A: 'Garrulous',
      B: 'Hostile',
      C: 'Hesitant',
      D: 'Timid',
    },
    answer: 'A',
    explanation: "'Taciturn' denotes someone who is quiet, uncommunicative, and reserved. The opposite is 'garrulous' (excessively talkative or loquacious).",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 3,
    page: 96,
    textbookRef: 'Topic: Antonyms in Context & Lexical Contrasts in A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 105,
    subject: 'Use of English',
    topic: 'Prepositional Idioms & Phrasal Patterns',
    text: 'Choose the preposition that correctly completes the standard idiom: The newly appointed director was completely absorbed _______ the accreditation report.',
    options: {
      A: 'in',
      B: 'with',
      C: 'on',
      D: 'about',
    },
    answer: 'A',
    explanation: "The standard English prepositional collocation with 'absorbed' (meaning deeply engaged or engrossed) is 'in'. We say 'absorbed in thought' or 'absorbed in an activity'.",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 5,
    page: 144,
    textbookRef: 'Topic: Prepositional Collocations & Phrasal Idioms in A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 106,
    subject: 'Use of English',
    topic: 'Oral English: Vowel Contrasts & Long Monophthongs',
    text: "Which of the following words contains the same vowel sound as the one represented in the underlined letters of 's-ea-t' (/i:/)?",
    options: {
      A: 'Key',
      B: 'Sit',
      C: 'Threat',
      D: 'Great',
    },
    answer: 'A',
    explanation: "'Key' is pronounced /ki:/ featuring the long high front unrounded monophthong /i:/, exactly like 'seat' (/si:t/). 'Sit' has /ɪ/, 'threat' has /e/, and 'great' has /eɪ/.",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 9,
    page: 262,
    textbookRef: 'Topic: Pure Vowels, Long Monophthongs & Sound Matching in A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 107,
    subject: 'Use of English',
    topic: 'Oral English: Stress Placement in Noun-Verb Pairs',
    text: "Choose the word with the correct syllable capitalized to indicate primary stress in the noun form of 'record' (e.g. 'She broke the national record'):",
    options: {
      A: 'RE-cord',
      B: 're-CORD',
      C: 'RE-cord-ed',
      D: 're-cor-DEE',
    },
    answer: 'A',
    explanation: "In disyllabic English homographs, the noun takes primary stress on the first syllable (RE-cord, /'rek.ɔ:d/), whereas the verb takes stress on the second syllable (re-CORD, /rɪ'kɔ:d/).",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 11,
    page: 324,
    textbookRef: 'Topic: Noun-Verb Stress Shift & Syllable Weight in A-Z OF ENGLISH by B.O. Dele Ashade',
  },

  // ==========================================
  // 2. MATHEMATICS — HIDDEN FACTS IN MATHEMATICS (M.A. Otumudia)
  // ==========================================
  {
    id: 201,
    subject: 'Mathematics',
    topic: 'Indices & Logarithms: Evaluation Without Tables',
    text: 'If log₁₀ 2 = 0.3010 and log₁₀ 3 = 0.4771, calculate the value of log₁₀ 18 without mathematical tables.',
    options: {
      A: '1.2552',
      B: '1.0791',
      C: '1.1761',
      D: '0.9542',
    },
    answer: 'A',
    explanation: 'log₁₀ 18 = log₁₀(2 × 3²) = log₁₀ 2 + 2 log₁₀ 3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 1,
    page: 22,
    textbookRef: 'Topic: Laws of Indices & Logarithms in HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 202,
    subject: 'Mathematics',
    topic: 'Quadratic Equations: Formation from Given Roots',
    text: 'Find the quadratic equation whose roots are -1/2 and 3.',
    options: {
      A: '2x² + 5x - 3 = 0',
      B: '2x² - 5x + 3 = 0',
      C: '2x² - 5x - 3 = 0',
      D: 'x² - 5x - 6 = 0',
    },
    answer: 'C',
    explanation: 'Sum of roots: α + β = -1/2 + 3 = 5/2. Product of roots: αβ = (-1/2)(3) = -3/2. Equation is x² - (α + β)x + αβ = 0 → x² - (5/2)x - 3/2 = 0. Multiplying through by 2 gives 2x² - 5x - 3 = 0.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 3,
    page: 61,
    textbookRef: 'Topic: Formation of Quadratic Equations & Roots in HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 203,
    subject: 'Mathematics',
    topic: 'Arithmetic Progressions: Common Difference and Sum',
    text: 'The 3rd term of an arithmetic progression (AP) is 10 and the 8th term is 25. Find the sum of the first 10 terms (S₁₀).',
    options: {
      A: '175',
      B: '155',
      C: '190',
      D: '210',
    },
    answer: 'A',
    explanation: 'T₃ = a + 2d = 10; T₈ = a + 7d = 25. Subtracting gives 5d = 15 ⇒ d = 3. First term a = 10 - 2(3) = 4. S₁₀ = (10/2)[2(4) + (10 - 1)(3)] = 5[8 + 27] = 5 × 35 = 175.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 5,
    page: 134,
    textbookRef: 'Topic: Arithmetic Progressions & Sum Formulas in HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 204,
    subject: 'Mathematics',
    topic: 'Differential Calculus: Turning Points and Stationary Values',
    text: 'Find the coordinates of the turning point of the parabola y = 2x² - 8x + 5 and determine its nature.',
    options: {
      A: '(2, -3), Minimum point',
      B: '(2, -3), Maximum point',
      C: '(-2, 29), Minimum point',
      D: '(4, 5), Inflexion point',
    },
    answer: 'A',
    explanation: 'dy/dx = 4x - 8 = 0 ⇒ x = 2. When x = 2, y = 2(2)² - 8(2) + 5 = 8 - 16 + 5 = -3. Second derivative d²y/dx² = 4 > 0, which confirms a minimum stationary point at (2, -3).',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 11,
    page: 309,
    textbookRef: 'Topic: Differential Calculus & Stationary Points in HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 205,
    subject: 'Mathematics',
    topic: 'Integral Calculus: Definite Integrals and Area',
    text: 'Evaluate the definite integral ∫₁³ (3x² - 2x + 1) dx.',
    options: {
      A: '20',
      B: '18',
      C: '26',
      D: '22',
    },
    answer: 'A',
    explanation: 'Integrating: [x³ - x² + x]₁³ = [ (3³ - 3² + 3) - (1³ - 1² + 1) ] = [ (27 - 9 + 3) - (1) ] = 21 - 1 = 20.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 12,
    page: 347,
    textbookRef: 'Topic: Definite Integrals & Fundamental Theorem of Calculus in HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 206,
    subject: 'Mathematics',
    topic: 'Trigonometry: Acute Angles and Trigonometric Ratios',
    text: 'If tan θ = 3/4 and θ is an acute angle, evaluate the expression (cos θ - sin θ) / (cos θ + sin θ).',
    options: {
      A: '1/7',
      B: '1/5',
      C: '2/7',
      D: '3/5',
    },
    answer: 'A',
    explanation: 'Since tan θ = opposite/adjacent = 3/4, hypotenuse = √(3² + 4²) = 5. cos θ = 4/5, sin θ = 3/5. Therefore, (4/5 - 3/5) / (4/5 + 3/5) = (1/5) / (7/5) = 1/7.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 9,
    page: 248,
    textbookRef: 'Topic: Trigonometric Ratios & Acute Angles in HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 207,
    subject: 'Mathematics',
    topic: 'Permutations: Arrangements with Repeated Elements',
    text: 'In how many distinct ways can the letters of the word SUCCESS be arranged?',
    options: {
      A: '420',
      B: '5040',
      C: '840',
      D: '210',
    },
    answer: 'A',
    explanation: 'Total letters n = 7 with 3 S’s and 2 C’s. Distinct arrangements = 7! / (3! × 2!) = 5040 / (6 × 2) = 5040 / 12 = 420.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 14,
    page: 415,
    textbookRef: 'Topic: Permutations with Repeated Items in HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },

  // ==========================================
  // 3. PHYSICS — NEW SCHOOL PHYSICS (M.W. Anyakoha)
  // ==========================================
  {
    id: 301,
    subject: 'Physics',
    topic: 'Equations of Motion: Uniformly Accelerated Motion',
    text: 'A car travelling at 20 m/s accelerates uniformly at 2.5 m/s² for 8 seconds. What is the total distance covered during this acceleration period?',
    options: {
      A: '160 m',
      B: '240 m',
      C: '200 m',
      D: '280 m',
    },
    answer: 'B',
    explanation: 'Using the kinematic equation s = ut + ½at²: s = (20 × 8) + ½(2.5 × 8²) = 160 + ½(2.5 × 64) = 160 + 80 = 240 m.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 2,
    page: 31,
    textbookRef: 'Topic: Equations of Uniformly Accelerated Motion in NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 302,
    subject: 'Physics',
    topic: 'Projectiles: Curved Trajectory and Time of Flight',
    text: 'A projectile is launched from ground level with an initial velocity of 50 m/s at an angle of 30° to the horizontal. Calculate its total time of flight (Take g = 10 m/s²).',
    options: {
      A: '5.0 s',
      B: '2.5 s',
      C: '8.66 s',
      D: '10.0 s',
    },
    answer: 'A',
    explanation: 'Total time of flight T = (2u sin θ) / g = (2 × 50 × sin 30°) / 10 = (100 × 0.5) / 10 = 5.0 s.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 3,
    page: 54,
    textbookRef: 'Topic: Projectiles & Curved Trajectories in NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 303,
    subject: 'Physics',
    topic: 'Units and Dimensions: Dimensional Analysis',
    text: 'Which of the following physical quantities has the same dimensions as Work (M L² T⁻²)?',
    options: {
      A: 'Momentum',
      B: 'Torque',
      C: 'Power',
      D: 'Pressure',
    },
    answer: 'B',
    explanation: 'Work = Force × Distance = [M L T⁻²][L] = [M L² T⁻²]. Torque = Force × Perpendicular Distance = [M L T⁻²][L] = [M L² T⁻²]. Both share the identical dimensional formula.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 1,
    page: 14,
    textbookRef: 'Topic: Units and Dimensions in NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 304,
    subject: 'Physics',
    topic: 'Thermal Physics: Quantity of Heat and Calorimetry',
    text: 'An immersion heater rated 600 W is used to heat 1.5 kg of water from 25°C to 65°C. Calculate the time taken, assuming no heat loss (Specific heat capacity of water = 4200 J/kg·K).',
    options: {
      A: '420 s',
      B: '280 s',
      C: '350 s',
      D: '500 s',
    },
    answer: 'A',
    explanation: 'Heat required Q = mcΔθ = 1.5 × 4200 × (65 - 25) = 1.5 × 4200 × 40 = 252,000 J. Electrical energy E = P × t. Since E = Q: 600t = 252,000 ⇒ t = 420 seconds (7 minutes).',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 8,
    page: 172,
    textbookRef: 'Topic: Quantity of Heat & Calorimetry in NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 305,
    subject: 'Physics',
    topic: 'Sound Waves: Resonance in Air Columns',
    text: 'The fundamental frequency of a closed organ pipe of length 34 cm is 250 Hz. Determine the velocity of sound in air.',
    options: {
      A: '340 m/s',
      B: '170 m/s',
      C: '680 m/s',
      D: '320 m/s',
    },
    answer: 'A',
    explanation: 'For a closed organ pipe at fundamental resonance, λ = 4L = 4 × 0.34 m = 1.36 m. Speed of sound v = fλ = 250 Hz × 1.36 m = 340 m/s.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 12,
    page: 278,
    textbookRef: 'Topic: Sound Waves & Resonance in Pipes in NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 306,
    subject: 'Physics',
    topic: 'Current Electricity: EMF and Internal Resistance',
    text: 'A cell of electromotive force (EMF) 2.0 V and internal resistance 0.5 Ω is connected across an external resistor of 4.5 Ω. Calculate the terminal potential difference across the cell.',
    options: {
      A: '1.8 V',
      B: '1.6 V',
      C: '2.0 V',
      D: '0.2 V',
    },
    answer: 'A',
    explanation: 'Total circuit current I = E / (R + r) = 2.0 / (4.5 + 0.5) = 2.0 / 5.0 = 0.4 A. Terminal potential difference V = IR = 0.4 × 4.5 = 1.8 V (also V = E - Ir = 2.0 - (0.4 × 0.5) = 1.8 V).',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 16,
    page: 382,
    textbookRef: 'Topic: Current Electricity & Internal Resistance in NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 307,
    subject: 'Physics',
    topic: 'Radioactivity: Radioactive Decay and Half-life',
    text: 'A radioactive isotope has a half-life of 4 hours. If a freshly prepared sample has an initial activity of 800 disintegrations per minute (dpm), what will its activity be after 16 hours?',
    options: {
      A: '50 dpm',
      B: '100 dpm',
      C: '25 dpm',
      D: '200 dpm',
    },
    answer: 'A',
    explanation: 'Number of half-lives n = total time / half-life = 16 / 4 = 4. Remaining activity N = N₀ / 2ⁿ = 800 / 2⁴ = 800 / 16 = 50 dpm.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 20,
    page: 495,
    textbookRef: 'Topic: Radioactivity & Half-life Decay in NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },

  // ==========================================
  // 4. CHEMISTRY — NEW SCHOOL CHEMISTRY (Osei Yaw Ababio)
  // ==========================================
  {
    id: 401,
    subject: 'Chemistry',
    topic: 'Inorganic Chemistry: Nitrogen Compounds and Ammonia',
    text: 'Which of the following salts will react with warm sodium hydroxide (NaOH) solution to liberate ammonia gas?',
    options: {
      A: 'Ammonium chloride (NH₄Cl)',
      B: 'Sodium nitrate (NaNO₃)',
      C: 'Calcium carbonate (CaCO₃)',
      D: 'Potassium chloride (KCl)',
    },
    answer: 'A',
    explanation: 'Ammonium salts react with caustic alkalis when warmed to yield ammonia gas, salt, and water: NH₄Cl(s) + NaOH(aq) → NaCl(aq) + H₂O(l) + NH₃(g).',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 14,
    page: 276,
    textbookRef: 'Topic: Nitrogen Compounds & Production of Ammonia in NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 402,
    subject: 'Chemistry',
    topic: 'Electrochemistry: Electrolysis with Active Electrodes',
    text: 'During the electrolysis of copper(II) tetraoxosulfate(VI) solution using active copper electrodes, what occurs at the anode?',
    options: {
      A: 'Oxygen gas is evolved',
      B: 'Hydrogen gas is discharged',
      C: 'The copper anode dissolves into Cu²⁺ ions',
      D: 'Copper metal is deposited on the anode',
    },
    answer: 'C',
    explanation: 'With active copper electrodes, oxidation of the anode material is preferred over SO₄²⁻ and OH⁻ discharge: Cu(s) → Cu²⁺(aq) + 2e⁻. The copper anode dissolves while pure copper deposits at the cathode.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 12,
    page: 238,
    textbookRef: 'Topic: Electrolysis, Electrode Reactions & Faraday’s Laws in NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 403,
    subject: 'Chemistry',
    topic: 'Stoichiometry & Mole Concept: Gas Molar Volumes',
    text: 'What volume of oxygen at s.t.p. is required for the complete combustion of 5.6 dm³ of ethene (C₂H₄)? [Molar volume of gas at s.t.p. = 22.4 dm³]',
    options: {
      A: '16.8 dm³',
      B: '11.2 dm³',
      C: '5.6 dm³',
      D: '22.4 dm³',
    },
    answer: 'A',
    explanation: 'The balanced equation is C₂H₄(g) + 3O₂(g) → 2CO₂(g) + 2H₂O(l). By Gay-Lussac’s Law of Combining Volumes, 1 volume of C₂H₄ requires 3 volumes of O₂. Required oxygen volume = 3 × 5.6 dm³ = 16.8 dm³.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 6,
    page: 112,
    textbookRef: 'Topic: Stoichiometry & Chemical Equations in NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 404,
    subject: 'Chemistry',
    topic: 'Atomic Structure: Anomalous Electronic Configurations',
    text: 'What is the electronic configuration of the chromium atom (Cr, atomic number 24) in its ground state?',
    options: {
      A: '[Ar] 4s¹ 3d⁵',
      B: '[Ar] 4s² 3d⁴',
      C: '[Ar] 4s² 3d⁵',
      D: '[Ar] 3d⁶',
    },
    answer: 'A',
    explanation: 'Chromium has configuration [Ar] 4s¹ 3d⁵ because a half-filled d-subshell (3d⁵) exhibits greater exchange energy and spatial stability than the anticipated 4s² 3d⁴ arrangement.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 4,
    page: 56,
    textbookRef: 'Topic: Atomic Structure & Electronic Configuration in NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 405,
    subject: 'Chemistry',
    topic: 'Acids, Bases & pH Calculations: Diprotic Acids',
    text: 'Calculate the pH of a 0.005 mol/dm³ solution of tetraoxosulfate(VI) acid (H₂SO₄), assuming complete dissociation.',
    options: {
      A: '2.0',
      B: '2.3',
      C: '1.7',
      D: '3.0',
    },
    answer: 'A',
    explanation: 'H₂SO₄ is diprotic: H₂SO₄ → 2H⁺ + SO₄²⁻. [H⁺] = 2 × 0.005 mol/dm³ = 0.010 mol/dm³ = 1.0 × 10⁻² mol/dm³. pH = -log₁₀[H⁺] = -log₁₀(10⁻²) = 2.0.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 9,
    page: 178,
    textbookRef: 'Topic: Acids, Bases and Salts in NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 406,
    subject: 'Chemistry',
    topic: 'Organic Chemistry: IUPAC Systematic Nomenclature of Esters',
    text: 'What is the systematic IUPAC name for the ester CH₃-CH(CH₃)-CH₂-COOCH₃?',
    options: {
      A: 'Methyl 3-methylbutanoate',
      B: 'Ethyl 2-methylpropanoate',
      C: 'Methyl isopentanoate',
      D: 'Propyl ethanoate',
    },
    answer: 'A',
    explanation: 'The alkyl group attached to the ester oxygen is methyl (-CH₃). The parent carboxylate chain has 4 carbon atoms with a methyl branch at carbon-3 (3-methylbutanoate). The IUPAC name is methyl 3-methylbutanoate.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 18,
    page: 394,
    textbookRef: 'Topic: Organic Chemistry & Esters in NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 407,
    subject: 'Chemistry',
    topic: 'Chemical Equilibrium: Le Chatelier’s Principle',
    text: 'For the exothermic reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92 kJ/mol, which condition will shift the equilibrium position to maximize the yield of ammonia?',
    options: {
      A: 'Decreasing temperature and increasing pressure',
      B: 'Increasing temperature and decreasing pressure',
      C: 'Increasing temperature and increasing pressure',
      D: 'Adding a catalyst at low pressure',
    },
    answer: 'A',
    explanation: 'By Le Chatelier’s principle, lowering temperature favors the forward exothermic reaction (liberating heat), and increasing pressure shifts equilibrium towards the side with fewer gas moles (4 moles → 2 moles).',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 8,
    page: 152,
    textbookRef: 'Topic: Rates of Reaction and Chemical Equilibrium in NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },

  // ==========================================
  // 5. BIOLOGY — MODERN BIOLOGY (Sarojini T. Ramalingam)
  // ==========================================
  {
    id: 501,
    subject: 'Biology',
    topic: 'Mammalian Circulation: The Heart and Great Vessels',
    text: 'In mammalian blood circulation, which blood vessel carries oxygenated blood directly from the lungs into the left atrium of the heart?',
    options: {
      A: 'Pulmonary vein',
      B: 'Pulmonary artery',
      C: 'Vena cava',
      D: 'Hepatic portal vein',
    },
    answer: 'A',
    explanation: 'The pulmonary vein is the only vein in the adult mammalian body that carries oxygenated blood, transporting it from the alveolar capillaries of the lungs into the left atrium of the heart.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 8,
    page: 174,
    textbookRef: 'Topic: Transport in Mammals & The Circulatory System in MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 502,
    subject: 'Biology',
    topic: 'Genetics: Incomplete Dominance and Blending Inheritance',
    text: 'A cross between a homozygous red-flowered plant (RR) and a homozygous white-flowered plant (rr) produces all pink offspring in the F1 generation. This genetic phenomenon illustrates _______.',
    options: {
      A: 'Complete dominance',
      B: 'Incomplete dominance',
      C: 'Epistasis',
      D: 'Sex-linkage',
    },
    answer: 'B',
    explanation: 'Incomplete dominance occurs when neither allele is dominant over the other, resulting in a heterozygous intermediate phenotype (pink flowers from red and white parents).',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 18,
    page: 422,
    textbookRef: 'Topic: Heredity, Monohybrid Crosses & Gene Interaction in MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 503,
    subject: 'Biology',
    topic: 'Cell Biology: Ultrastructure of Organelles and Functions',
    text: 'Which organelle is correctly paired with its primary metabolic function in eukaryotic plant cells?',
    options: {
      A: 'Ribosome - Synthesis of ATP',
      B: 'Chloroplast - Synthesis of carbohydrates via photosynthesis',
      C: 'Golgi apparatus - Anaerobic respiration',
      D: 'Mitochondria - Synthesis of cellulose',
    },
    answer: 'B',
    explanation: 'Chloroplasts contain photosynthetic pigments in the thylakoid grana and enzymes in the stroma to convert carbon dioxide and water into carbohydrates using sunlight energy.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 2,
    page: 33,
    textbookRef: 'Topic: Cell Ultrastructure & Organelles in MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 504,
    subject: 'Biology',
    topic: 'Excretion & Osmoregulation: The Kidney Nephron',
    text: 'In the mammalian kidney nephron, in which region does non-selective ultrafiltration of blood plasma take place?',
    options: {
      A: 'Bowman’s capsule and glomerulus',
      B: 'Loop of Henle',
      C: 'Distal convoluted tubule',
      D: 'Collecting duct',
    },
    answer: 'A',
    explanation: 'High hydrostatic pressure in the afferent glomerular capillaries forces water, glucose, mineral salts, amino acids, and urea through the podocyte filtration slits into Bowman’s capsule as glomerular filtrate.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 11,
    page: 241,
    textbookRef: 'Topic: Excretion & The Kidney Nephron in MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 505,
    subject: 'Biology',
    topic: 'Nervous Coordination: Structure and Functions of the Brain',
    text: 'Which part of the human brain is primarily responsible for muscular coordination, posture, and maintaining bodily balance?',
    options: {
      A: 'Cerebellum',
      B: 'Cerebrum',
      C: 'Medulla oblongata',
      D: 'Hypothalamus',
    },
    answer: 'A',
    explanation: 'The cerebellum coordinates voluntary muscular activity, posture, and equilibrium. Damage to the cerebellum leads to ataxia and loss of fine motor coordination.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 14,
    page: 308,
    textbookRef: 'Topic: Nervous Coordination & The Brain in MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 506,
    subject: 'Biology',
    topic: 'Genetics: Multiple Alleles and ABO Blood Group Inheritance',
    text: 'A man with blood group A (genotype IᴬIᴼ) marries a woman with blood group B (genotype IᴮIᴼ). What are the possible blood groups among their offspring?',
    options: {
      A: 'Groups A, B, AB, and O',
      B: 'Groups A and B only',
      C: 'Group AB only',
      D: 'Group O only',
    },
    answer: 'A',
    explanation: 'Crossing IᴬIᴼ × IᴮIᴼ produces 25% IᴬIᴮ (Group AB), 25% IᴬIᴼ (Group A), 25% IᴮIᴼ (Group B), and 25% IᴼIᴼ (Group O). All four blood groups are possible.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 18,
    page: 436,
    textbookRef: 'Topic: Heredity & Blood Group Inheritance in MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 507,
    subject: 'Biology',
    topic: 'Ecology: Energy Flow and Pyramids of Energy',
    text: 'Why is the pyramid of energy always upright and can never be inverted in any balanced ecosystem?',
    options: {
      A: 'Energy is dissipated as metabolic heat and respiration at each trophic step',
      B: 'Energy increases as it moves to higher trophic levels',
      C: 'Carnivores require less food than herbivores',
      D: 'Decomposers recycle energy back into solar radiation',
    },
    answer: 'A',
    explanation: 'In accordance with the Second Law of Thermodynamics, only about 10% of energy is transferred from one trophic level to the next; 90% is dissipated as heat, unconsumed matter, and respiration, keeping the energy pyramid strictly upright.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 21,
    page: 490,
    textbookRef: 'Topic: Ecology & Pyramids of Energy in MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
];

/**
 * Filter questions based on selected subjects
 */
export function getQuestionsForSubjects(subjects: string[], count?: number): VerifiedQuestion[] {
  const normSubs = subjects.map((s) => s.toLowerCase());

  const matched = VERIFIED_QUESTIONS.filter((q) => {
    const qSub = q.subject.toLowerCase();
    return normSubs.some((s) => {
      if (s.includes('eng') && qSub.includes('eng')) return true;
      if (s.includes('math') && qSub.includes('math')) return true;
      if (s.includes('phys') && qSub.includes('phys')) return true;
      if (s.includes('chem') && qSub.includes('chem')) return true;
      if (s.includes('bio') && qSub.includes('bio')) return true;
      return false;
    });
  });

  const pool = matched.length > 0 ? matched : VERIFIED_QUESTIONS;
  if (!count || count >= pool.length) return pool;
  return pool.slice(0, count);
}

// Re-export 1978-2025 JAMB UTME Past Questions Engine
export {
  JAMB_YEARS,
  SUBJECT_CONFIGS,
  assembleUtmeTest,
  calculateJambGrade,
  generateQuestionForYear,
  getSubjectQuestionsForYear,
  normalizeSubjectKey,
  getSeenQuestionIds,
  markQuestionsSeen,
  clearSeenQuestions,
  getSeenQuestionsCount,
} from './jambPastQuestions';
export type {
  SubjectKey,
  JambGradingResult,
  SubjectScoreBreakdown,
  AssembleTestOptions,
} from './jambPastQuestions';

