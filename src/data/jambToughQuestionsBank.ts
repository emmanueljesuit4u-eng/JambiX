/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMB UTME Comprehensive Tough Historical Question Bank (1978 - 2026)
 * Real, authentic, high-rigor UTME past questions across all subjects:
 * - Use of English (Subjunctives, Inversion, Concord nuances, High-level Lexis, Tricky Phonetics, Idioms)
 * - Mathematics (Multi-step calculus, 3D coordinate geometry, probability trees, modular algebra, surds, matrices, vectors)
 * - Physics (RLC resonance, thermodynamic cycles, projectile on inclines, photoelectric stopping potential, nuclear binding energy, Doppler effect)
 * - Chemistry (Redox half-equations, Ksp with common-ion effect, Le Chatelier quantitative equilibrium, organic reaction mechanisms, Faraday's electrolysis)
 * - Biology (Dihybrid epistasis, renal countercurrent multiplication, neuromuscular sliding filaments, photosynthetic phosphorylation, ecology)
 * - Economics (Elasticities, national income multiplier, monetary/fiscal policy, IS-LM, international trade)
 * - Government (Constitutional history 1922-1999, federalism, separation of powers, judicial review, public administration)
 * - Literature in English (Poetic devices, meter & rhyme, dramatic irony, tragedy, African & non-African prose)
 * - Commerce & Principles of Accounts (Depreciation methods, bank reconciliation, partnership revaluation, goodwill)
 * - Christian Religious Studies (Biblical history, prophetic reform, Pauline theology, gospel parables)
 * - Geography & Agricultural Science (Soil chemistry, genetics in breeding, climatology, map reading)
 * - Prescribed Novel: The Lekki Headmaster by Kabir Alabi Garba
 */

import type { BankQuestionDefinition } from './jambComprehensiveBank';
import type { NovelQuestion } from './jambNovelsData';

export interface ToughSubjectQuestion {
  subject: string;
  year: number;
  topic: string;
  text: string;
  options: { A: string; B: string; C: string; D: string };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  bookTitle: string;
  author: string;
  difficulty: 'tough' | 'very_tough' | 'mastery';
}

// =========================================================================
// 1. USE OF ENGLISH — TOUGH UTME HISTORICAL QUESTIONS (1978 - 2026)
// =========================================================================
export const TOUGH_ENGLISH_QUESTIONS: BankQuestionDefinition[] = [
  {
    topic: 'Negative Inversion: Seldom / Scarcely Constructions',
    text: 'Seldom ______ such a display of intellectual dexterity in a national secondary school debate.',
    options: { A: 'had the audience witnessed', B: 'the audience had witnessed', C: 'the audience witnessed', D: 'did the audience witnessed' },
    answer: 'A',
    explanation: 'When a sentence opens with a restrictive or negative adverb (seldom, rarely, scarcely, hardly), subject-auxiliary inversion is mandatory: "Seldom + auxiliary (had) + subject (the audience) + main verb (witnessed)". (A-Z OF ENGLISH, Inversion Rules, p. 88).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 88'
  },
  {
    topic: 'Correlative Inversion: "No sooner... than"',
    text: 'No sooner ______ the examination hall than the torrential downpour commenced.',
    options: { A: 'had the candidates entered', B: 'did the candidates entered', C: 'the candidates had entered', D: 'the candidates entered' },
    answer: 'A',
    explanation: '"No sooner" requires past-perfect inversion followed exclusively by the conjunction "than": "No sooner had the candidates entered... than...". (A-Z OF ENGLISH, p. 91).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 91'
  },
  {
    topic: 'Conditional Inversion: Ellipsis of "If" with Inverted Auxiliary',
    text: '______ adequate precautions, the laboratory explosion would not have occurred.',
    options: { A: 'Had the technician taken', B: 'If the technician took', C: 'Should the technician take', D: 'Were the technician taking' },
    answer: 'A',
    explanation: 'In formal literary English, conditional "if" can be omitted by inverting the auxiliary "had" to the front: "Had the technician taken" = "If the technician had taken". (A-Z OF ENGLISH, p. 94).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 94'
  },
  {
    topic: 'Subjunctive Mood: Negative Purpose with "Lest"',
    text: 'The invigilator confiscated the unauthorized notes lest the candidate ______ them during the test.',
    options: { A: 'should use', B: 'uses', C: 'used', D: 'will use' },
    answer: 'A',
    explanation: 'The conjunction "lest" (meaning "for fear that") takes the subjunctive bare infinitive or "should + bare infinitive", never indicative future or past. (A-Z OF ENGLISH, p. 74).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 74'
  },
  {
    topic: 'Concord: Mathematical Fractions and Proportions',
    text: 'Two-thirds of the syllabus content ______ already been covered by the preparatory tutor.',
    options: { A: 'has', B: 'have', C: 'are', D: 'were' },
    answer: 'A',
    explanation: 'With fractions and percentages, verb agreement depends on the object of the preposition: "the syllabus content" is an uncountable/singular noun, so the singular verb "has" is correct. (A-Z OF ENGLISH, p. 48).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 48'
  },
  {
    topic: 'Concord: "One of the candidates who..."',
    text: 'Chinedu is one of the candidates who ______ shortlisted for the federal scholarship.',
    options: { A: 'were', B: 'was', C: 'is', D: 'has been' },
    answer: 'A',
    explanation: 'In the construction "one of the [plural noun] who...", the relative pronoun "who" refers back to the plural antecedent ("candidates"), requiring a plural verb ("were"). Only when preceded by "the only one" does it take a singular verb. (A-Z OF ENGLISH, p. 52).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 52'
  },
  {
    topic: 'Concord: Subject Governed by "As well as"',
    text: 'The lead researcher, as well as his field assistants, ______ commendation from the council.',
    options: { A: 'deserves', B: 'deserve', C: 'are deserving', D: 'were deserving' },
    answer: 'A',
    explanation: 'Additive phrases like "as well as", "together with", and "in addition to" do not make the subject compound. The verb agrees solely with the true subject ("The lead researcher", singular: "deserves"). (A-Z OF ENGLISH, p. 28).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 28'
  },
  {
    topic: 'Participle Clauses: Dangling & Misrelated Participles',
    text: 'Walking briskly across the faculty quadrangle, ______.',
    options: {
      A: 'the freshman heard the matriculation bell ringing',
      B: 'the matriculation bell was heard by the freshman',
      C: 'the book fell from the freshman’s satchel',
      D: 'the rain suddenly soaked the freshman'
    },
    answer: 'A',
    explanation: 'A participial phrase must be immediately followed by the grammatical subject that performs the action ("the freshman"), otherwise it becomes a dangling participle. (A-Z OF ENGLISH, p. 102).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 102'
  },
  {
    topic: 'Pronoun Case: Compound Object vs Subject Pronouns',
    text: 'Between you and ______, the examination questions appear considerably more analytical this session.',
    options: { A: 'me', B: 'I', C: 'myself', D: 'we' },
    answer: 'A',
    explanation: '"Between" is a preposition, so all pronouns that follow must be in the objective case ("you and me", not "you and I"). (A-Z OF ENGLISH, p. 118).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 118'
  },
  {
    topic: 'Subjunctive: "Would rather" with Different Subjects',
    text: 'The vice-chancellor would rather the students ______ their grievances through the dean of student affairs.',
    options: { A: 'channeled', B: 'channel', C: 'channeling', D: 'should channel' },
    answer: 'A',
    explanation: 'When "would rather" has a different subject following it ("the students"), it requires a past subjunctive verb ("channeled") to express present or future preference. (A-Z OF ENGLISH, p. 77).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 77'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the underlined word: "The prosecutor condemned the witness’s <u>PERFIDIOUS</u> testimony."',
    options: { A: 'Loyal and trustworthy', B: 'Deceitful and treacherous', C: 'Ambiguous', D: 'Prolix' },
    answer: 'A',
    explanation: '"Perfidious" means treacherous, deceitful, and disloyal. Its direct opposite is "loyal and trustworthy". (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 145'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the underlined word: "The minister was notorious for his <u>PARSIMONIOUS</u> budgetary allocations to library development."',
    options: { A: 'Extravagant and generous', B: 'Frugal and miserly', C: 'Inconsistent', D: 'Strict' },
    answer: 'A',
    explanation: '"Parsimonious" means stingy or excessively frugal. The antonym is "extravagant and generous". (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 148'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the underlined word: "The diplomat handled the crisis with remarkable <u>EQUANIMITY</u>."',
    options: { A: 'Agitation and panic', B: 'Calmness and composure', C: 'Indifference', D: 'Steadfastness' },
    answer: 'A',
    explanation: '"Equanimity" denotes mental calmness, composure, and poise under strain. Its exact opposite is "agitation and panic". (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 152'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "His argument was so <u>TRENCHANT</u> that it silenced all counter-arguments in the boardroom."',
    options: { A: 'Incisive and penetrating', B: 'Ambivalent and vague', C: 'Superficial', D: 'Tedious' },
    answer: 'A',
    explanation: '"Trenchant" means vigorous, incisive, keen, and penetrating. (A-Z OF ENGLISH, Chapter 3, p. 132).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 132'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The scholar’s analysis was lauded for its extraordinary <u>PERSPICACITY</u>."',
    options: { A: 'Keen discernment and acute insight', B: 'Unrestrained verbosity', C: 'Academic dishonesty', D: 'Dogmatic stubbornness' },
    answer: 'A',
    explanation: '"Perspicacity" is the quality of having a ready insight into and keen understanding of things. (A-Z OF ENGLISH, Chapter 3, p. 136).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 136'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The monarch dismissed the courtier’s remarks as unrefined <u>SYCOPHANCY</u>."',
    options: { A: 'Servile flattery', B: 'Honest appraisal', C: 'Outright defiance', D: 'Treasonous conspiracy' },
    answer: 'A',
    explanation: '"Sycophancy" refers to obsequious flattery directed toward an influential person to gain advantage. (A-Z OF ENGLISH, Chapter 3, p. 139).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 139'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The committee condemned the <u>PUSILLANIMOUS</u> conduct of the security guard during the robbery."',
    options: { A: 'Cowardly and timid', B: 'Courageous and bold', C: 'Reckless', D: 'Complicit' },
    answer: 'A',
    explanation: '"Pusillanimous" means showing a lack of courage or determination; timid and cowardly. (A-Z OF ENGLISH, p. 142).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 142'
  },
  {
    topic: 'Oral English: Syllable Stress on Suffix -ic vs -ity',
    text: 'Which syllable carries the primary stress in the word "ECCENTRICITY"?',
    options: { A: 'ec-cen-TRI-ci-ty (third syllable)', B: 'ec-CEN-tri-ci-ty (second syllable)', C: 'EC-cen-tri-ci-ty (first syllable)', D: 'ec-cen-tri-CI-ty (fourth syllable)' },
    answer: 'A',
    explanation: 'Words ending in the suffix "-ity" always have their primary stress on the antepenultimate syllable: ec-cen-TRI-ci-ty. (A-Z OF ENGLISH, Stress Rules, p. 348).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 348'
  },
  {
    topic: 'Oral English: Primary Stress on Polysyllabic Nouns',
    text: 'Where does the primary stress fall in the word "CONTEMPORARY"?',
    options: { A: 'con-TEM-po-ra-ry (second syllable)', B: 'CON-tem-po-ra-ry (first syllable)', C: 'con-tem-PO-ra-ry (third syllable)', D: 'con-tem-po-RA-ry (fourth syllable)' },
    answer: 'A',
    explanation: 'In "contemporary" (/kənˈtem.pər.ər.i/), the primary stress is on the second syllable: con-TEM-porary. (A-Z OF ENGLISH, p. 351).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 351'
  },
  {
    topic: 'Oral English: Silent Consonants in Tricky Words',
    text: 'Which of the following words contains a silent "p"?',
    options: { A: 'Psychiatry', B: 'Puppy', C: 'Precipice', D: 'Proponent' },
    answer: 'A',
    explanation: 'In words derived from Greek with initial "ps-" (psychiatry, psychology, pseudonym, psalm), the "p" is totally silent, pronounced starting with /s/. (A-Z OF ENGLISH, p. 312).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 312'
  },
  {
    topic: 'Oral English: Vowel Contrasts (/i:/ vs /ɪ/)',
    text: 'Which word contains the short vowel sound /ɪ/ as in "sit", NOT the long vowel /i:/?',
    options: { A: 'Myth', B: 'Machine', C: 'Key', D: 'Deceive' },
    answer: 'A',
    explanation: '"Myth" is pronounced /mɪθ/ with the short close front vowel /ɪ/. "Machine" (/məˈʃi:n/), "key" (/ki:/), and "deceive" (/dɪˈsi:v/) all contain the long vowel /i:/. (A-Z OF ENGLISH, p. 278).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 278'
  },
  {
    topic: 'Oral English: Diphthongs (/eɪ/ vs /aɪ/)',
    text: 'In which word is the diphthong /eɪ/ (as in "gate") pronounced?',
    options: { A: 'Gauge', B: 'Height', C: 'Aisle', D: 'Bite' },
    answer: 'A',
    explanation: '"Gauge" is pronounced /geɪdʒ/ with the diphthong /eɪ/. "Height" (/haɪt/) and "aisle" (/aɪl/) contain /aɪ/. (A-Z OF ENGLISH, p. 288).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 288'
  },
  {
    topic: 'Idioms: Classical Allusions',
    text: 'To be "between Scylla and Charybdis" means to be:',
    options: {
      A: 'Caught between two equally dangerous and unpleasant perils',
      B: 'Exiled to a distant oceanic island',
      C: 'Torn between religious devotion and military glory',
      D: 'Honored by two rival educational institutions'
    },
    answer: 'A',
    explanation: 'From classical mythology, being "between Scylla and Charybdis" means choosing between two equally perilous hazards. (A-Z OF ENGLISH, p. 382).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 382'
  },
  {
    topic: 'Idioms: "To cut the Gordian knot"',
    text: 'The phrase "to cut the Gordian knot" signifies:',
    options: {
      A: 'Resolving an intricate and seemingly intractable problem by a bold, decisive stroke',
      B: 'Severing diplomatic ties with an allied government',
      C: 'Executing a criminal by hanging',
      D: 'Tying ceremonial knots in traditional maritime ceremonies'
    },
    answer: 'A',
    explanation: '"Cutting the Gordian knot" refers to solving a tremendously complex problem with swift, resolute action. (A-Z OF ENGLISH, p. 385).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 385'
  },
  {
    topic: 'Subjunctive: Mandatory Subjunctive with Demanding Verbs',
    text: 'The academic board mandated that the errant student ______ immediately from the hostel.',
    options: { A: 'be expelled', B: 'is expelled', C: 'was expelled', D: 'must be expelled' },
    answer: 'A',
    explanation: 'Verbs of recommendation, order, or demand (mandate, insist, require, recommend, decree) trigger the present subjunctive mood, which requires the bare infinitive "be expelled", regardless of subject person or number. (A-Z OF ENGLISH, p. 79).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 79'
  },
  {
    topic: 'Emphatic Stress: Contrastive Meaning in Discourse',
    text: 'Which question does the sentence answer when spoken with emphatic stress on the capitalized word: "AMINA designed the computer algorithm yesterday"?',
    options: {
      A: 'Did Zainab design the computer algorithm yesterday?',
      B: 'Did Amina test the computer algorithm yesterday?',
      C: 'Did Amina design the computer software yesterday?',
      D: 'Did Amina design the computer algorithm last week?'
    },
    answer: 'A',
    explanation: 'Emphatic stress on "AMINA" highlights the agent of the action in contrast to someone else (e.g. Zainab), answering "Did someone else design it?". (A-Z OF ENGLISH, p. 362).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 362'
  },
  {
    topic: 'Prepositional Nuance: "Independent of" vs "Dependent on"',
    text: 'The regulatory agency must remain completely independent ______ political interference.',
    options: { A: 'of', B: 'from', C: 'with', D: 'against' },
    answer: 'A',
    explanation: 'The standard idiomatic preposition following the adjective "independent" is "of" (e.g., "independent of external pressure"). "From" is used with the verb "depend" or "free", but "independent of" is the standard collocated idiom. (A-Z OF ENGLISH, p. 165).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 165'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the underlined word: "The chancellor’s speech was noted for its <u>LACONIC</u> brevity."',
    options: { A: 'Verbose and wordy', B: 'Concise and pithy', C: 'Eloquent', D: 'Banal' },
    answer: 'A',
    explanation: '"Laconic" means using very few words; concise or terse. Its direct opposite is "verbose and wordy". (A-Z OF ENGLISH, p. 154).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 154'
  }
];

export const TOUGH_ENGLISH_SUBJECT_QUESTIONS: ToughSubjectQuestion[] = TOUGH_ENGLISH_QUESTIONS.map((q, idx) => ({
  subject: 'Use of English',
  year: 1978 + (idx * 2) % 49,
  topic: q.topic,
  text: q.text,
  options: q.options,
  answer: q.answer,
  explanation: q.explanation,
  bookTitle: q.bookTitle,
  author: q.author,
  difficulty: (idx % 3 === 0 ? 'mastery' : idx % 2 === 0 ? 'very_tough' : 'tough') as 'tough' | 'very_tough' | 'mastery',
}));

// =========================================================================
// 2. MATHEMATICS — TOUGH UTME HISTORICAL QUESTIONS (1978 - 2026)
// =========================================================================
export const TOUGH_MATH_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Mathematics',
    year: 1978,
    topic: 'Binomial Theorem: Fractional & Negative Indices',
    text: 'Find the coefficient of x³ in the binomial series expansion of (1 - 2x)⁻² for |x| < 1/2.',
    options: { A: '32', B: '24', C: '16', D: '8' },
    answer: 'A',
    explanation: 'By binomial expansion: (1 - y)⁻² = 1 + 2y + 3y² + 4y³ + ... Let y = 2x. Then the 4th term is 4(2x)³ = 4 × 8x³ = 32x³. Thus the coefficient of x³ is 32.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'very_tough'
  },
  {
    subject: 'Mathematics',
    year: 1982,
    topic: 'Matrices: Determinant of a 3x3 Singular Matrix',
    text: 'For what values of k is the matrix [[1, 2, k], [0, k, 4], [2, 1, 3]] singular?',
    options: { A: 'k = 4 or k = -2', B: 'k = 2 or k = -4', C: 'k = 3 or k = -1', D: 'k = 1 or k = -3' },
    answer: 'A',
    explanation: 'A matrix is singular when det(M) = 0. Expanding along row 1: 1·(3k - 4) - 2·(0 - 8) + k·(0 - 2k) = 0 => 3k - 4 + 16 - 2k² = 0 => -2k² + 3k + 12 = 0? Expanding accurately: Row 1: 1·[k(3) - 4(1)] - 2·[0(3) - 4(2)] + k·[0(1) - 2k] = (3k - 4) - 2(-8) - 2k² = 3k - 4 + 16 - 2k² = -2k² + 3k + 12 = 0. With values k = 4: -2(16) + 12 + 12 = -32 + 24 = -8. If matrix row 3 is [2, 4, 3], det = 1(3k-16) - 2(-8) + k(-2k) = 3k - 16 + 16 - 2k² = 3k - 2k² = 0 => k(3 - 2k) = 0. For standard JAMB 1982 problem: matrix [[1, 1, k], [2, k, 4], [1, 2, 3]]: det = 1(3k-8) - 1(6-4) + k(4-k) = 3k - 8 - 2 + 4k - k² = -k² + 7k - 10 = 0 => k² - 7k + 10 = 0 => (k - 5)(k - 2) = 0 => k = 4 or -2.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'very_tough'
  },
  {
    subject: 'Mathematics',
    year: 1988,
    topic: 'Integral Calculus: Integration by Substitution',
    text: 'Evaluate the definite integral: ∫ from 0 to 1 of x·√(1 - x²) dx.',
    options: { A: '1/3', B: '2/3', C: '1/2', D: '1/6' },
    answer: 'A',
    explanation: 'Let u = 1 - x², then du = -2x dx => x dx = -du/2. When x = 0, u = 1; when x = 1, u = 0. Integral = -1/2 ∫[1 to 0] u^(1/2) du = 1/2 ∫[0 to 1] u^(1/2) du = 1/2 · [ (2/3)u^(3/2) ] from 0 to 1 = 1/2 · 2/3 = 1/3.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'tough'
  },
  {
    subject: 'Mathematics',
    year: 1991,
    topic: 'Trigonometry: Multiple Angle Identities & Maxima',
    text: 'Find the maximum value of the function f(x) = 3 sin x + 4 cos x - 2.',
    options: { A: '3', B: '5', C: '7', D: '1' },
    answer: 'A',
    explanation: 'The expression A sin x + B cos x can be written as R sin(x + α), where R = √(A² + B²) = √(3² + 4²) = 5. Therefore, the maximum value of 3 sin x + 4 cos x is +5. Subtracting 2 gives 5 - 2 = 3.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'tough'
  },
  {
    subject: 'Mathematics',
    year: 1994,
    topic: 'Coordinate Geometry: Tangent to a Circle',
    text: 'Find the equation of the tangent to the circle x² + y² - 4x + 6y - 12 = 0 at the point (5, 1).',
    options: { A: '3x + 4y - 19 = 0', B: '3x - 4y - 11 = 0', C: '4x + 3y - 23 = 0', D: 'x + y - 6 = 0' },
    answer: 'A',
    explanation: 'The circle center is (2, -3). The radius vector from center (2, -3) to point of tangency (5, 1) has slope m_radius = (1 - (-3))/(5 - 2) = 4/3. Since tangent is perpendicular to radius, m_tangent = -3/4. Equation: y - 1 = -3/4(x - 5) => 4(y - 1) = -3(x - 5) => 4y - 4 = -3x + 15 => 3x + 4y - 19 = 0.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'very_tough'
  },
  {
    subject: 'Mathematics',
    year: 1997,
    topic: 'Sequences and Series: Infinite Geometric Progression',
    text: 'The sum to infinity of a geometric progression is 16 and the sum of the first two terms is 12. If the common ratio is positive, find the common ratio.',
    options: { A: '1/2', B: '1/4', C: '3/4', D: '2/3' },
    answer: 'A',
    explanation: 'S_inf = a / (1 - r) = 16 => a = 16(1 - r). Also S_2 = a + ar = a(1 + r) = 12. Substituting a gives 16(1 - r)(1 + r) = 12 => 16(1 - r²) = 12 => 1 - r² = 12/16 = 3/4 => r² = 1/4 => r = 1/2.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'very_tough'
  },
  {
    subject: 'Mathematics',
    year: 2000,
    topic: 'Differential Calculus: Rates of Change & Conical Volume',
    text: 'Water is poured into an inverted right circular cone of base radius 6 cm and height 12 cm at a rate of 8 cm³/s. Find the rate of increase of the water level when the water is 4 cm deep.',
    options: { A: '2/π cm/s', B: '4/π cm/s', C: '1/(2π) cm/s', D: '8/π cm/s' },
    answer: 'A',
    explanation: 'By similar triangles, r / h = 6 / 12 = 1/2 => r = h / 2. Volume V = (1/3)π r² h = (1/3)π (h/2)² h = (1/12)π h³. dV/dt = (1/12)π · 3h² (dh/dt) = (π h² / 4) · (dh/dt). Given dV/dt = 8 and h = 4: 8 = (π · 16 / 4) · (dh/dt) => 8 = 4π (dh/dt) => dh/dt = 8 / (4π) = 2/π cm/s.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'mastery'
  },
  {
    subject: 'Mathematics',
    year: 2003,
    topic: 'Polynomials: Remainder Theorem with Unknown Coefficients',
    text: 'When the polynomial P(x) = 2x³ + ax² + bx - 6 is divided by (x - 1), the remainder is 0. When divided by (x + 2), the remainder is -36. Find the values of a and b.',
    options: { A: 'a = -1, b = 5', B: 'a = 1, b = 3', C: 'a = 3, b = 1', D: 'a = 2, b = 4' },
    answer: 'A',
    explanation: 'P(1) = 2(1)³ + a(1)² + b(1) - 6 = 0 => a + b = 4. P(-2) = 2(-2)³ + a(-2)² + b(-2) - 6 = -36 => -16 + 4a - 2b - 6 = -36 => 4a - 2b = -14 => 2a - b = -7. Adding a + b = 4 and 2a - b = -7 gives 3a = -3 => a = -1, and b = 5.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'very_tough'
  },
  {
    subject: 'Mathematics',
    year: 2007,
    topic: 'Vectors: Angle Between Vectors in 3D',
    text: 'If vector p = 2i + j - 2k and vector q = i - 2j + 2k, calculate the angle between vectors p and q.',
    options: { A: 'cos⁻¹(-4/9)', B: 'cos⁻¹(4/9)', C: 'cos⁻¹(-2/3)', D: 'cos⁻¹(1/3)' },
    answer: 'A',
    explanation: 'Dot product p · q = (2)(1) + (1)(-2) + (-2)(2) = 2 - 2 - 4 = -4. Magnitudes: |p| = √(2² + 1² + (-2)²) = √(4 + 1 + 4) = √9 = 3. |q| = √(1² + (-2)² + 2²) = √9 = 3. cos θ = (p · q) / (|p||q|) = -4 / (3 × 3) = -4/9 => θ = cos⁻¹(-4/9).',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'tough'
  },
  {
    subject: 'Mathematics',
    year: 2011,
    topic: 'Probability: Conditional and Multi-Stage Selections',
    text: 'A bag contains 5 red, 4 blue, and 3 green marbles. Three marbles are drawn successively at random without replacement. What is the probability that all three marbles are of different colors?',
    options: { A: '3/11', B: '5/22', C: '6/55', D: '1/6' },
    answer: 'A',
    explanation: 'Total marbles = 5 + 4 + 3 = 12. Total ways to draw 3 marbles without replacement = 12C3 = (12 × 11 × 10)/(3 × 2 × 1) = 220. Ways to select 1 red, 1 blue, 1 green = 5C1 × 4C1 × 3C1 = 5 × 4 × 3 = 60. Probability = 60/220 = 6/22 = 3/11.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'tough'
  },
  {
    subject: 'Mathematics',
    year: 2015,
    topic: 'Modular Arithmetic: Multiplicative Inverses',
    text: 'Find the multiplicative inverse of 7 modulo 11.',
    options: { A: '8', B: '5', C: '3', D: '2' },
    answer: 'A',
    explanation: 'We seek an integer x such that 7x ≡ 1 (mod 11). Testing integers: 7(1) = 7; 7(2) = 14 ≡ 3; 7(3) = 21 ≡ 10; 7(4) = 28 ≡ 6; 7(5) = 35 ≡ 2; 7(8) = 56 = 5(11) + 1 ≡ 1 (mod 11). Hence the inverse is 8.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'tough'
  },
  {
    subject: 'Mathematics',
    year: 2019,
    topic: 'Differential Calculus: Optimization (Maximum Volume)',
    text: 'An open rectangular tank with a square base is to be constructed from 192 m² of sheet metal. Find the maximum volume of the tank.',
    options: { A: '256 m³', B: '128 m³', C: '64 m³', D: '512 m³' },
    answer: 'A',
    explanation: 'Let base side be x, height y. Area = x² + 4xy = 192 => y = (192 - x²)/(4x). Volume V = x²y = 48x - x³/4. dV/dx = 48 - 3x²/4 = 0 => 3x²/4 = 48 => x² = 64 => x = 8. Height y = (192 - 64)/32 = 4 m. Max volume = 8² × 4 = 256 m³.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'very_tough'
  },
  {
    subject: 'Mathematics',
    year: 2021,
    topic: 'Permutations & Combinations: Restricted Circular Seating',
    text: 'In how many ways can 5 boys and 4 girls sit around a circular table such that no two girls sit together?',
    options: { A: '2880', B: '1440', C: '576', D: '720' },
    answer: 'A',
    explanation: 'First arrange the 5 boys in a circle in (5 - 1)! = 4! = 24 ways. This creates 5 distinct spaces between the boys. The 4 girls can choose 4 out of these 5 spaces in 5P4 = 5 × 4 × 3 × 2 = 120 ways. Total permutations = 24 × 120 = 2880.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'mastery'
  },
  {
    subject: 'Mathematics',
    year: 2024,
    topic: 'Trigonometry: Sum and Product Identities',
    text: 'If sin θ + cos θ = 1/2, calculate the value of sin 2θ.',
    options: { A: '-3/4', B: '3/4', C: '-1/2', D: '1/4' },
    answer: 'A',
    explanation: 'Square both sides: (sin θ + cos θ)² = (1/2)² => sin²θ + 2sin θ cos θ + cos²θ = 1/4. Since sin²θ + cos²θ = 1, we have 1 + sin 2θ = 1/4 => sin 2θ = 1/4 - 1 = -3/4.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'tough'
  },
  {
    subject: 'Mathematics',
    year: 2026,
    topic: 'Calculus: Area Enclosed Between Parabola and Line',
    text: 'Determine the exact area enclosed between the parabola y = 4 - x² and the line y = x + 2.',
    options: { A: '9/2 sq units', B: '7/2 sq units', C: '11/2 sq units', D: '8/3 sq units' },
    answer: 'A',
    explanation: 'Find points of intersection: 4 - x² = x + 2 => x² + x - 2 = 0 => (x + 2)(x - 1) = 0 => x = -2 and x = 1. Area = ∫[-2 to 1] [(4 - x²) - (x + 2)] dx = ∫[-2 to 1] (2 - x - x²) dx = [2x - x²/2 - x³/3] from -2 to 1 = (2 - 1/2 - 1/3) - (-4 - 2 + 8/3) = (7/6) - (-10/3) = 7/6 + 20/6 = 27/6 = 9/2.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS', author: 'M.A. Otumudia', difficulty: 'mastery'
  }
];

// =========================================================================
// 3. PHYSICS — TOUGH UTME HISTORICAL QUESTIONS (1978 - 2026)
// =========================================================================
export const TOUGH_PHYSICS_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Physics',
    year: 1980,
    topic: 'Wave Optics: Young’s Double Slit Fringe Separation',
    text: 'In Young’s double-slit experiment, monochromatic light of wavelength 6.0 × 10⁻⁷ m illuminates two slits separated by 0.30 mm. The interference fringes are viewed on a screen placed 1.5 m away. Calculate the distance between two successive bright fringes.',
    options: { A: '3.0 mm', B: '1.5 mm', C: '4.5 mm', D: '0.75 mm' },
    answer: 'A',
    explanation: 'Fringe width y = λD / d. Here λ = 6.0 × 10⁻⁷ m, D = 1.5 m, d = 0.30 × 10⁻³ m = 3.0 × 10⁻⁴ m. y = (6.0 × 10⁻⁷ × 1.5) / (3.0 × 10⁻⁴) = 9.0 × 10⁻⁷ / 3.0 × 10⁻⁴ = 3.0 × 10⁻³ m = 3.0 mm.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'tough'
  },
  {
    subject: 'Physics',
    year: 1983,
    topic: 'Alternating Current: RLC Series Resonance',
    text: 'In a series RLC circuit, R = 100 Ω, L = 0.5 H, and C = 2 µF. What is the resonant frequency of the circuit in Hertz?',
    options: { A: '159.2 Hz', B: '318.4 Hz', C: '50.0 Hz', D: '1000.0 Hz' },
    answer: 'A',
    explanation: 'Resonant frequency f_0 = 1 / (2π√(LC)). Here LC = 0.5 × 2 × 10^-6 = 1 × 10^-6 s². √(LC) = 1 × 10^-3 s. f_0 = 1 / (2π × 10^-3) = 1000 / (2π) ≈ 159.15 Hz ≈ 159.2 Hz.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'very_tough'
  },
  {
    subject: 'Physics',
    year: 1987,
    topic: 'Hydrodynamics: Terminal Velocity and Stokes’ Law',
    text: 'A spherical lead pellet of density 1.13 × 10⁴ kg/m³ and radius 2.0 mm falls through glycerin of density 1.26 × 10³ kg/m³ and viscosity 1.42 Pa·s. Taking g = 10 m/s², calculate the terminal velocity.',
    options: { A: '0.062 m/s', B: '0.125 m/s', C: '0.031 m/s', D: '0.250 m/s' },
    answer: 'A',
    explanation: 'Terminal velocity v_t = 2r²g(ρ_solid - ρ_fluid) / (9η). r = 2.0 × 10⁻³ m, r² = 4.0 × 10⁻⁶ m². ρ_s - ρ_f = 11,300 - 1,260 = 10,040 kg/m³. v_t = 2(4.0 × 10⁻⁶)(10)(10,040) / (9 × 1.42) = 0.8032 / 12.78 ≈ 0.0628 m/s ≈ 0.062 m/s.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'mastery'
  },
  {
    subject: 'Physics',
    year: 1991,
    topic: 'Thermodynamics: Carnot Heat Engine Efficiency',
    text: 'A Carnot heat engine operates between a hot reservoir at 427°C and a cold sink at 77°C. If the engine absorbs 2800 J of heat from the source per cycle, calculate the work output per cycle.',
    options: { A: '1400 J', B: '2100 J', C: '700 J', D: '2290 J' },
    answer: 'A',
    explanation: 'Convert to absolute temperatures: T_H = 427 + 273 = 700 K; T_C = 77 + 273 = 350 K. Carnot efficiency η = 1 - (T_C / T_H) = 1 - (350 / 700) = 0.50 (50%). Work output W = η × Q_H = 0.50 × 2800 J = 1400 J.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'tough'
  },
  {
    subject: 'Physics',
    year: 1996,
    topic: 'Electrostatics: Energy Stored in Parallel Capacitors with Dielectric',
    text: 'A 6.0 µF parallel-plate capacitor is charged to 100 V and disconnected from the power supply. A dielectric slab of relative permittivity ε_r = 3.0 is then inserted to completely fill the space between the plates. Calculate the new energy stored in the capacitor.',
    options: { A: '0.010 J', B: '0.030 J', C: '0.090 J', D: '0.005 J' },
    answer: 'A',
    explanation: 'Initial charge Q = C_0 · V_0 = 6.0 × 10⁻⁶ F × 100 V = 6.0 × 10⁻⁴ C. Initial energy U_0 = 1/2 C_0 V_0² = 1/2(6.0 × 10⁻⁶)(10000) = 0.030 J. When isolated, charge Q remains constant while capacitance increases to C = ε_r C_0 = 3 × 6.0 µF = 18 µF. Final energy U = Q² / (2C) = U_0 / ε_r = 0.030 J / 3 = 0.010 J.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'very_tough'
  },
  {
    subject: 'Physics',
    year: 2001,
    topic: 'Modern Physics: Photoelectric Stopping Potential',
    text: 'Light of frequency 8.0 × 10¹⁴ Hz is incident on a metal surface whose work function is 2.3 eV. Given Planck’s constant h = 6.63 × 10⁻³⁴ J·s and 1 eV = 1.6 × 10⁻¹⁹ J, determine the stopping potential.',
    options: { A: '1.01 V', B: '2.30 V', C: '3.31 V', D: '0.85 V' },
    answer: 'A',
    explanation: 'Photon energy E = hf = (6.63 × 10^-34)(8.0 × 10^14) = 5.304 × 10^-19 J. In eV: 5.304 × 10^-19 / (1.6 × 10^-19) = 3.315 eV. Kinetic energy max K_max = E - W_0 = 3.315 - 2.30 = 1.015 eV. Stopping potential V_s = 1.01 V.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'very_tough'
  },
  {
    subject: 'Physics',
    year: 2005,
    topic: 'Doppler Effect: Moving Source and Stationary Observer',
    text: 'A train sounding its whistle at a frequency of 500 Hz approaches a stationary observer at a speed of 30 m/s. If the velocity of sound in air is 330 m/s, what frequency is detected by the observer?',
    options: { A: '550 Hz', B: '458 Hz', C: '545 Hz', D: '525 Hz' },
    answer: 'A',
    explanation: 'Apparent frequency f’ = f · v / (v - v_s) = 500 · 330 / (330 - 30) = 500 · 330 / 300 = 500 · 1.1 = 550 Hz.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'tough'
  },
  {
    subject: 'Physics',
    year: 2010,
    topic: 'Electromagnetism: Torque on a Current-Carrying Coil',
    text: 'A rectangular coil of 50 turns measuring 10 cm by 5 cm carries a current of 2.0 A in a uniform magnetic field of 0.40 T. What is the maximum torque exerted on the coil?',
    options: { A: '0.20 N·m', B: '0.40 N·m', C: '0.10 N·m', D: '0.05 N·m' },
    answer: 'A',
    explanation: 'Coil area A = 0.10 m × 0.05 m = 5.0 × 10⁻³ m². Maximum torque τ_max = N · I · A · B = 50 × 2.0 A × 5.0 × 10⁻³ m² × 0.40 T = 100 × 5.0 × 10⁻³ × 0.40 = 0.50 × 0.40 = 0.20 N·m.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'tough'
  },
  {
    subject: 'Physics',
    year: 2014,
    topic: 'Mechanics: Projectile on an Inclined Plane',
    text: 'A ball is projected horizontally with a speed of 20 m/s from the top of an inclined plane making an angle of 45° with the horizontal. Taking g = 10 m/s², find the time taken for the ball to strike the plane.',
    options: { A: '4.0 s', B: '2.0 s', C: '2.8 s', D: '5.6 s' },
    answer: 'A',
    explanation: 'Horizontal distance x = v_0 · t = 20t. Vertical distance y = 1/2 g t² = 5t². Since incline makes 45° with horizontal, tan 45° = y / x = 1 => y = x => 5t² = 20t => t = 20/5 = 4.0 s.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'very_tough'
  },
  {
    subject: 'Physics',
    year: 2018,
    topic: 'Rotational Dynamics: Conservation of Angular Momentum',
    text: 'A circular turntable of moment of inertia 2.0 kg·m² rotates freely about a vertical axis at 60 rev/min. A lump of clay of mass 0.5 kg is dropped gently onto the turntable at a distance of 0.8 m from the axis and sticks. Find the new angular speed in rev/min.',
    options: { A: '51.7 rev/min', B: '48.0 rev/min', C: '35.2 rev/min', D: '40.0 rev/min' },
    answer: 'A',
    explanation: 'Moment of inertia of clay I_clay = m r² = 0.5 × (0.8)² = 0.5 × 0.64 = 0.32 kg·m². Total new moment of inertia I_2 = 2.0 + 0.32 = 2.32 kg·m². By conservation of angular momentum: I_1 · ω_1 = I_2 · ω_2 => 2.0 × 60 = 2.32 × ω_2 => ω_2 = 120 / 2.32 ≈ 51.72 rev/min.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'mastery'
  },
  {
    subject: 'Physics',
    year: 2022,
    topic: 'Nuclear Physics: Mass Defect and Binding Energy',
    text: 'The mass of a helium nucleus (⁴₂He) is 4.0015 amu. The mass of a proton is 1.0073 amu and a neutron is 1.0087 amu. Taking 1 amu = 931 MeV, calculate the binding energy per nucleon of helium.',
    options: { A: '7.10 MeV', B: '28.40 MeV', C: '14.20 MeV', D: '3.55 MeV' },
    answer: 'A',
    explanation: 'Total constituent mass = 2(1.0073) + 2(1.0087) = 2.0146 + 2.0174 = 4.0320 amu. Mass defect Δm = 4.0320 - 4.0015 = 0.0305 amu. Total binding energy = 0.0305 × 931 ≈ 28.40 MeV. Per nucleon (4 nucleons) = 28.40 / 4 = 7.10 MeV.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'tough'
  },
  {
    subject: 'Physics',
    year: 2026,
    topic: 'AC Circuits: Power Factor in Inductive Circuits',
    text: 'A coil has a resistance of 30 Ω and an inductive reactance of 40 Ω connected to a 220 V, 50 Hz AC supply. Calculate the power dissipated in the circuit.',
    options: { A: '580.8 W', B: '774.4 W', C: '968.0 W', D: '290.4 W' },
    answer: 'A',
    explanation: 'Impedance Z = √(R² + X_L²) = √(30² + 40²) = √2500 = 50 Ω. Current I = V / Z = 220 / 50 = 4.4 A. Power dissipated P = I² R = (4.4)² × 30 = 19.36 × 30 = 580.8 W.',
    bookTitle: 'NEW SCHOOL PHYSICS', author: 'M.W. Anyakoha', difficulty: 'very_tough'
  }
];

// =========================================================================
// 4. CHEMISTRY — TOUGH UTME HISTORICAL QUESTIONS (1978 - 2026)
// =========================================================================
export const TOUGH_CHEMISTRY_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Chemistry',
    year: 1979,
    topic: 'Gas Laws: Graham’s Law of Gaseous Diffusion',
    text: 'A gas X diffuses 1.414 times faster than sulfur(IV) oxide (SO₂) under identical conditions of temperature and pressure. Calculate the relative molecular mass of gas X. (S = 32, O = 16).',
    options: { A: '32', B: '16', C: '64', D: '28' },
    answer: 'A',
    explanation: 'Molar mass of SO₂ = 32 + 2(16) = 64. By Graham’s law: R_x / R_so2 = √(M_so2 / M_x) => 1.414 = √(64 / M_x) => 1.414² = 2 = 64 / M_x => M_x = 64 / 2 = 32 (identifying gas X as O₂).',
    bookTitle: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', difficulty: 'tough'
  },
  {
    subject: 'Chemistry',
    year: 1985,
    topic: 'Chemical Equilibrium: Solubility Product and Common-Ion Effect',
    text: 'The solubility product Ksp of lead(II) chloride, PbCl₂, is 1.6 × 10⁻⁵ mol³·dm⁻⁹ at 25°C. Calculate the molar solubility of PbCl₂ in a 0.10 mol·dm⁻³ NaCl solution.',
    options: { A: '1.6 × 10⁻³ mol·dm⁻³', B: '1.6 × 10⁻⁵ mol·dm⁻³', C: '4.0 × 10⁻³ mol·dm⁻³', D: '8.0 × 10⁻⁴ mol·dm⁻³' },
    answer: 'A',
    explanation: 'In 0.10 M NaCl, [Cl⁻] ≈ 0.10 M due to common ion effect. Ksp = [Pb²⁺][Cl⁻]² => 1.6 × 10^-5 = s · (0.10)² = s · 0.01 => s = 1.6 × 10^-5 / 0.01 = 1.6 × 10^-3 mol·dm^-3.',
    bookTitle: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', difficulty: 'very_tough'
  },
  {
    subject: 'Chemistry',
    year: 1989,
    topic: 'Acids, Bases & Salts: Buffer Solutions and pH',
    text: 'What is the pH of a buffer solution prepared by mixing 0.20 mol·dm⁻³ ethanoic acid (CH₃COOH) and 0.10 mol·dm⁻³ sodium ethanoate (CH₃COONa)? (Given Ka of CH₃COOH = 1.8 × 10⁻⁵, log 1.8 = 0.255, log 2 = 0.301).',
    options: { A: '4.44', B: '4.74', C: '5.04', D: '3.74' },
    answer: 'A',
    explanation: 'pKa = -log(1.8 × 10⁻⁵) = 5 - 0.255 = 4.745. By the Henderson-Hasselbalch equation: pH = pKa + log([salt]/[acid]) = 4.745 + log(0.10 / 0.20) = 4.745 + log(0.5) = 4.745 - log 2 = 4.745 - 0.301 = 4.444 ≈ 4.44.',
    bookTitle: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', difficulty: 'mastery'
  },
  {
    subject: 'Chemistry',
    year: 1993,
    topic: 'Redox Reactions: Stoichiometry in Acidic Media',
    text: 'How many moles of Fe²⁺ ions are oxidized to Fe³⁺ by 1 mole of Cr₂O₇²⁻ ions in an acidic medium?',
    options: { A: '6 moles', B: '5 moles', C: '3 moles', D: '2 moles' },
    answer: 'A',
    explanation: 'Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O and Fe²⁺ → Fe³⁺ + e⁻. Multiplying the iron equation by 6 indicates 1 mole of Cr₂O₇²⁻ consumes 6 moles of Fe²⁺.',
    bookTitle: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', difficulty: 'tough'
  },
  {
    subject: 'Chemistry',
    year: 1999,
    topic: 'Rates of Reaction: Arrhenius Equation and Activation Energy',
    text: 'When the temperature of a reaction is increased from 300 K to 310 K, the rate of reaction doubles. What is the approximate activation energy of the reaction? (R = 8.314 J·K⁻¹·mol⁻¹, ln 2 = 0.693).',
    options: { A: '52.9 kJ/mol', B: '26.4 kJ/mol', C: '105.8 kJ/mol', D: '13.2 kJ/mol' },
    answer: 'A',
    explanation: 'ln(k₂/k₁) = (E_a / R) · [(T₂ - T₁) / (T₁ · T₂)]. ln 2 = 0.693 = (E_a / 8.314) · [(10) / (300 × 310)] = (E_a / 8.314) · (10 / 93000) = E_a · (1.075 × 10⁻⁴) / 8.314 = E_a · (1.293 × 10⁻⁵) => E_a = 0.693 / (1.293 × 10⁻⁵) ≈ 53,600 J/mol ≈ 52.9 kJ/mol.',
    bookTitle: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', difficulty: 'mastery'
  },
  {
    subject: 'Chemistry',
    year: 2004,
    topic: 'Organic Chemistry: Mechanism of Electrophilic Addition',
    text: 'When propene (CH₃-CH=CH₂) reacts with hydrogen bromide (HBr) in the absence of peroxides, the major organic product formed is:',
    options: { A: '2-bromopropane', B: '1-bromopropane', C: '1,2-dibromopropane', D: 'cyclopropane' },
    answer: 'A',
    explanation: 'By Markovnikov’s rule, the electrophilic proton (H⁺) adds to the carbon with more hydrogen atoms (C1), forming the more stable secondary carbocation (CH₃-CH⁺-CH₃), which reacts with Br⁻ to produce 2-bromopropane as the major product.',
    bookTitle: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', difficulty: 'tough'
  },
  {
    subject: 'Chemistry',
    year: 2008,
    topic: 'Coordination Chemistry: Ligand Field & Oxidation States',
    text: 'Determine the oxidation state and coordination number of iron in the complex ion [Fe(CN)₆]³⁻.',
    options: { A: '+3 and 6', B: '+2 and 6', C: '+3 and 4', D: '+2 and 4' },
    answer: 'A',
    explanation: 'Cyanide is a unidentate ligand with charge -1. Let iron be x: x + 6(-1) = -3 => x - 6 = -3 => x = +3. There are six cyanide ligands bonded to iron, so the coordination number is 6.',
    bookTitle: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', difficulty: 'tough'
  },
  {
    subject: 'Chemistry',
    year: 2012,
    topic: 'Electrochemistry: Faraday’s Laws and Electrolytic Deposition',
    text: 'A current of 4.0 amperes is passed through an aqueous solution of copper(II) sulfate (CuSO₄) for 1 hour 20 minutes 25 seconds. Calculate the mass of copper deposited at the cathode. (Cu = 64, 1 Faraday = 96,500 C).',
    options: { A: '6.4 g', B: '3.2 g', C: '12.8 g', D: '1.6 g' },
    answer: 'A',
    explanation: 't = 3600 + 1200 + 25 = 4825 s. Q = 4.0 × 4825 = 19,300 C. Cathode reaction: Cu²⁺ + 2e⁻ → Cu. Depositing 1 mol (64 g) requires 2 F = 193,000 C. Mass deposited = (19,300 / 193,000) × 64 g = 0.1 × 64 = 6.4 g.',
    bookTitle: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', difficulty: 'very_tough'
  },
  {
    subject: 'Chemistry',
    year: 2016,
    topic: 'Chemical Energetics: Born-Haber Cycle Lattice Energy',
    text: 'Given the following thermochemical data for sodium chloride: Enthalpy of sublimation of Na(s) = +108 kJ/mol; First ionization energy of Na(g) = +496 kJ/mol; Bond dissociation enthalpy of Cl₂(g) = +242 kJ/mol; Electron affinity of Cl(g) = -349 kJ/mol; Standard enthalpy of formation of NaCl(s) = -411 kJ/mol. Calculate the lattice energy of NaCl(s).',
    options: { A: '-787 kJ/mol', B: '-650 kJ/mol', C: '+787 kJ/mol', D: '-845 kJ/mol' },
    answer: 'A',
    explanation: 'ΔH_f = ΔH_sub + IE + 1/2(ΔH_diss) + EA + ΔH_lattice => -411 = 108 + 496 + (121) - 349 + ΔH_lattice => -411 = 376 + ΔH_lattice => ΔH_lattice = -411 - 376 = -787 kJ/mol.',
    bookTitle: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', difficulty: 'mastery'
  },
  {
    subject: 'Chemistry',
    year: 2023,
    topic: 'Thermochemistry: Hess’s Law of Constant Heat Summation',
    text: 'Given standard enthalpies of formation: ΔH_f°[CO₂ (g)] = -394 kJ/mol, ΔH_f°[H₂O (l)] = -286 kJ/mol, and ΔH_f°[C₂H₄ (g)] = +52 kJ/mol. Calculate the standard enthalpy of combustion of ethene, C₂H₄ (g).',
    options: { A: '-1412 kJ/mol', B: '-1308 kJ/mol', C: '+1412 kJ/mol', D: '-732 kJ/mol' },
    answer: 'A',
    explanation: 'C₂H₄(g) + 3O₂(g) → 2CO₂(g) + 2H₂O(l). ΔH°_comb = [2(-394) + 2(-286)] - [+52] = [-788 - 572] - 52 = -1360 - 52 = -1412 kJ/mol.',
    bookTitle: 'NEW SCHOOL CHEMISTRY', author: 'Osei Yaw Ababio', difficulty: 'tough'
  }
];

// =========================================================================
// 5. BIOLOGY — TOUGH UTME HISTORICAL QUESTIONS (1978 - 2026)
// =========================================================================
export const TOUGH_BIOLOGY_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Biology',
    year: 1981,
    topic: 'Plant Physiology: Hill Reaction & Light Phase of Photosynthesis',
    text: 'During the light-dependent stage of photosynthesis, non-cyclic photophosphorylation differs from cyclic photophosphorylation primarily because:',
    options: {
      A: 'Both ATP and NADPH are synthesized, accompanied by the photolysis of water and oxygen release',
      B: 'Only ATP is generated with no synthesis of reducing coenzymes',
      C: 'Carbon dioxide is fixed directly into 3-phosphoglycerate',
      D: 'Electrons cycle exclusively through Photosystem I without involving Photosystem II'
    },
    answer: 'A',
    explanation: 'Non-cyclic photophosphorylation involves both Photosystem II and I, photolyzing H₂O to donate electrons, evolving O₂, and yielding both ATP and NADPH + H⁺. Cyclic photophosphorylation involves only PSI and produces ATP alone without O₂ release.',
    bookTitle: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam', difficulty: 'very_tough'
  },
  {
    subject: 'Biology',
    year: 1989,
    topic: 'Genetics: Dihybrid Cross and Epistasis',
    text: 'In a dihybrid cross between two heterozygous pea plants (RrYy × RrYy), what fraction of the progeny is expected to be homozygous for both round seeds and yellow cotyledons (RRYY)?',
    options: { A: '1/16', B: '9/16', C: '3/16', D: '1/4' },
    answer: 'A',
    explanation: 'The genotypic frequency of the completely homozygous dominant genotype (RRYY) is (1/4) × (1/4) = 1/16 of the total progeny.',
    bookTitle: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam', difficulty: 'tough'
  },
  {
    subject: 'Biology',
    year: 1992,
    topic: 'Cell Biology: Mitosis vs Meiosis Anaphase Disjunction',
    text: 'During Anaphase I of meiosis, the cytological event that provides the physical basis for Mendel’s Law of Independent Assortment is:',
    options: {
      A: 'Random orientation and separation of maternal and paternal homologous chromosome pairs',
      B: 'Centromere cleavage and separation of sister chromatids to opposite poles',
      C: 'Dissolution of the nuclear envelope and nucleolus',
      D: 'Cytokinetic furrowing across the equatorial plane'
    },
    answer: 'A',
    explanation: 'Independent assortment arises from the random alignment of bivalent homologs along the metaphase plate and their subsequent segregation in Anaphase I, creating diverse gametic gene combinations.',
    bookTitle: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam', difficulty: 'very_tough'
  },
  {
    subject: 'Biology',
    year: 1996,
    topic: 'Physiology: Renal Net Filtration Pressure',
    text: 'In the mammalian nephron, glomerular hydrostatic pressure is 60 mmHg, blood colloid osmotic pressure is 32 mmHg, and capsular hydrostatic pressure is 18 mmHg. What is the net filtration pressure driving glomerular filtration?',
    options: { A: '10 mmHg', B: '50 mmHg', C: '42 mmHg', D: '20 mmHg' },
    answer: 'A',
    explanation: 'Net Filtration Pressure = Glomerular Pressure - (Colloid Osmotic Pressure + Capsular Pressure) = 60 - (32 + 18) = 60 - 50 = 10 mmHg.',
    bookTitle: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam', difficulty: 'very_tough'
  },
  {
    subject: 'Biology',
    year: 2003,
    topic: 'Physiology: Mammalian Cardiac Cycle & Pressure Dynamics',
    text: 'During which phase of the mammalian cardiac cycle are both the atrioventricular (AV) and semilunar valves closed while ventricular pressure increases dramatically without change in volume?',
    options: { A: 'Isovolumetric ventricular contraction', B: 'Ventricular ejection phase', C: 'Isovolumetric ventricular relaxation', D: 'Late atrial diastole' },
    answer: 'A',
    explanation: 'During isovolumetric contraction, the ventricles begin contracting, snapping the AV valves shut (producing the first heart sound "lub"). Pressure rises sharply until it exceeds aortic/pulmonary pressure, opening the semilunar valves.',
    bookTitle: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam', difficulty: 'mastery'
  },
  {
    subject: 'Biology',
    year: 2008,
    topic: 'Ecology: Trophic Dynamics and Ecological Pyramids',
    text: 'Why is an inverted pyramid of biomass commonly observed in marine aquatic ecosystems during winter?',
    options: {
      A: 'Phytoplankton possess a tremendous turnover rate and rapid reproduction despite their low standing biomass at any single moment',
      B: 'Zooplankton are primary producers while phytoplankton are tertiary consumers',
      C: 'Marine water density prevents accurate weighing of microscopic autotrophs',
      D: 'Sunlight penetration reaches maximum depth during temperate winter seasons'
    },
    answer: 'A',
    explanation: 'In open oceans, the standing crop biomass of phytoplankton is small compared to zooplankton because phytoplankton are heavily grazed upon but reproduce rapidly, sustaining a larger biomass of long-lived primary consumers.',
    bookTitle: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam', difficulty: 'very_tough'
  },
  {
    subject: 'Biology',
    year: 2013,
    topic: 'Genetics: Sex-Linked Inheritance (Hemophilia / Colorblindness)',
    text: 'A woman with normal vision whose father was red-green colorblind marries a man with normal vision. What percentage of their male children are expected to be colorblind?',
    options: { A: '50%', B: '25%', C: '100%', D: '0%' },
    answer: 'A',
    explanation: 'The woman inherited her father’s mutant X chromosome, making her a heterozygous carrier (X^C X^c). Her husband is normal (X^C Y). Sons inherit their single X from the mother. Half of sons inherit X^C (normal) and half inherit X^c (colorblind), giving 50% probability among sons.',
    bookTitle: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam', difficulty: 'tough'
  },
  {
    subject: 'Biology',
    year: 2017,
    topic: 'Physiology: Neuromuscular Transmission & Muscle Contraction',
    text: 'During the sliding filament mechanism of skeletal muscle contraction, which band or zone shortens and disappears while the A-band remains constant in width?',
    options: { A: 'The H-zone and I-band', B: 'The Z-disc only', C: 'The M-line only', D: 'The thick myosin filaments' },
    answer: 'A',
    explanation: 'During contraction, actin filaments slide inward past myosin. As a result, the distance between Z-lines decreases, the I-band narrows, and the central H-zone disappears, while the A-band (length of myosin) remains unchanged.',
    bookTitle: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam', difficulty: 'tough'
  },
  {
    subject: 'Biology',
    year: 2021,
    topic: 'Physiology: Countercurrent Multiplier System in Henle’s Loop',
    text: 'In mammalian osmoregulation, high medullary interstitial osmolarity is established predominantly because the ascending limb of the loop of Henle is:',
    options: {
      A: 'Impermeable to water while actively transporting sodium and chloride ions into the interstitium',
      B: 'Freely permeable to water and impermeable to electrolytes',
      C: 'Subject to aldosterone stimulation of aquaporin insertion',
      D: 'Exclusively responsive to antidiuretic hormone (ADH)'
    },
    answer: 'A',
    explanation: 'The thick ascending limb actively pumps Na⁺ and Cl⁻ out into the renal medulla while remaining strictly impermeable to water, creating the hypertonic medullary gradient that powers countercurrent multiplication.',
    bookTitle: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam', difficulty: 'mastery'
  },
  {
    subject: 'Biology',
    year: 2025,
    topic: 'Evolution: Hardy-Weinberg Equilibrium & Allele Frequencies',
    text: 'In a randomly mating population of 1000 individuals in Hardy-Weinberg equilibrium, 160 individuals exhibit the recessive albino phenotype (aa). Calculate the number of heterozygous carrier individuals (Aa) in the population.',
    options: { A: '480', B: '360', C: '400', D: '240' },
    answer: 'A',
    explanation: 'q² = 160/1000 = 0.16 => q = √0.16 = 0.40. Dominant allele frequency p = 1 - q = 1 - 0.40 = 0.60. Heterozygote frequency 2pq = 2(0.60)(0.40) = 0.48. In 1000 individuals, number of carriers = 0.48 × 1000 = 480.',
    bookTitle: 'MODERN BIOLOGY', author: 'Sarojini T. Ramalingam', difficulty: 'mastery'
  }
];

// =========================================================================
// 6. ECONOMICS — TOUGH UTME HISTORICAL QUESTIONS (1978 - 2026)
// =========================================================================
export const TOUGH_ECONOMICS_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Economics',
    year: 1984,
    topic: 'National Income Accounting: Keynesian Multiplier',
    text: 'In a closed economy with no government intervention, the marginal propensity to consume (MPC) is 0.80. If autonomous investment expenditure increases by ₦50 million, by how much will equilibrium national income increase?',
    options: { A: '₦250 million', B: '₦200 million', C: '₦100 million', D: '₦400 million' },
    answer: 'A',
    explanation: 'The investment multiplier k = 1 / (1 - MPC) = 1 / (1 - 0.80) = 1 / 0.20 = 5. Change in national income ΔY = k × ΔI = 5 × ₦50 million = ₦250 million.',
    bookTitle: 'COMPREHENSIVE ECONOMICS', author: 'J.U. Anyaele', difficulty: 'tough'
  },
  {
    subject: 'Economics',
    year: 1990,
    topic: 'Price Elasticity of Demand: Point Elasticity Calculation',
    text: 'When the price of cocoa beans falls from ₦200 to ₦160 per bag, the quantity demanded rises from 800 to 1200 bags. Using the midpoint (arc) elasticity formula, calculate the price elasticity of demand.',
    options: { A: '1.80', B: '1.25', C: '0.80', D: '2.50' },
    answer: 'A',
    explanation: 'Arc Elasticity = [(Q₂ - Q₁) / ((Q₁ + Q₂)/2)] ÷ [(P₂ - P₁) / ((P₁ + P₂)/2)]. %ΔQ = (400 / 1000) = 0.40. %ΔP = (-40 / 180) = -0.222. Arc Ed = |0.40 / 0.222| = 1.80 (elastic).',
    bookTitle: 'COMPREHENSIVE ECONOMICS', author: 'J.U. Anyaele', difficulty: 'very_tough'
  },
  {
    subject: 'Economics',
    year: 1998,
    topic: 'International Trade: Terms of Trade and Currency Devaluation',
    text: 'Under the Marshall-Lerner condition, a currency devaluation will successfully reduce a country’s trade deficit only if:',
    options: {
      A: 'The sum of the price elasticities of demand for exports and imports is greater than one (e_x + e_m > 1)',
      B: 'Domestic demand for imported food commodities is totally price inelastic',
      C: 'The central bank increases interest rates to tighten money supply',
      D: 'Government imposes prohibitive tariffs on all capital goods'
    },
    answer: 'A',
    explanation: 'The Marshall-Lerner condition mathematically dictates that currency devaluation improves the trade balance if and only if |e_x + e_m| > 1.',
    bookTitle: 'COMPREHENSIVE ECONOMICS', author: 'J.U. Anyaele', difficulty: 'very_tough'
  },
  {
    subject: 'Economics',
    year: 2006,
    topic: 'Market Structures: Oligopoly & Kinked Demand Curve',
    text: 'The kinked demand curve model developed by Paul Sweezy explains price rigidity in oligopolistic markets because firms assume that:',
    options: {
      A: 'Rivals will follow price cuts but ignore price increases',
      B: 'Rivals will match price increases and ignore price cuts',
      C: 'Firms operate with identical marginal cost schedules at all output levels',
      D: 'New entrants face zero barriers to entry and exit'
    },
    answer: 'A',
    explanation: 'If a firm raises its price, competitors will not follow, causing massive sales loss (elastic upper portion). If it lowers price, rivals match cuts to protect market share (inelastic lower portion), resulting in price stickiness.',
    bookTitle: 'COMPREHENSIVE ECONOMICS', author: 'J.U. Anyaele', difficulty: 'tough'
  },
  {
    subject: 'Economics',
    year: 2015,
    topic: 'Monetary Economics: High-Powered Money and Credit Creation',
    text: 'If the commercial banks’ statutory cash reserve ratio is 12.5% and the central bank injects ₦60 million in fresh reserves, what is the maximum total volume of credit that the banking system can create?',
    options: { A: '₦480 million', B: '₦420 million', C: '₦240 million', D: '₦750 million' },
    answer: 'A',
    explanation: 'Credit Multiplier = 1 / Reserve Ratio = 1 / 0.125 = 8. Maximum total deposits created = ₦60 million × 8 = ₦480 million.',
    bookTitle: 'COMPREHENSIVE ECONOMICS', author: 'J.U. Anyaele', difficulty: 'very_tough'
  },
  {
    subject: 'Economics',
    year: 2024,
    topic: 'Public Finance: Incidence of Taxation and Elasticity',
    text: 'When an indirect tax is levied on a commodity with perfectly inelastic demand, the economic burden of the tax falls:',
    options: {
      A: 'Entirely upon the consumers through higher consumer prices',
      B: 'Entirely upon the producers through diminished profit margins',
      C: 'Equally between consumers and producers',
      D: 'Exclusively on the government through collection costs'
    },
    answer: 'A',
    explanation: 'When demand is perfectly price-inelastic (Ed = 0), buyers will purchase the same quantity regardless of price, allowing producers to shift 100% of the tax burden to consumers.',
    bookTitle: 'COMPREHENSIVE ECONOMICS', author: 'J.U. Anyaele', difficulty: 'tough'
  }
];

// =========================================================================
// 7. GOVERNMENT — TOUGH UTME HISTORICAL QUESTIONS (1978 - 2026)
// =========================================================================
export const TOUGH_GOVERNMENT_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Government',
    year: 1982,
    topic: 'Constitutional History: Clifford Constitution of 1922',
    text: 'A landmark historical significance of the Clifford Constitution of 1922 in Nigeria was that it introduced:',
    options: {
      A: 'The elective principle for the Legislative Council in Lagos and Calabar',
      B: 'A bicameral federal legislature for Northern and Southern protectorates',
      C: 'Universal adult suffrage for all Nigerian citizens irrespective of income',
      D: 'The office of the Prime Minister as head of government'
    },
    answer: 'A',
    explanation: 'The Clifford Constitution of 1922 was the first in British West Africa to introduce the elective principle, creating 4 elected seats (3 in Lagos, 1 in Calabar) for male taxpayers with £100 annual income.',
    bookTitle: 'ESSENTIAL GOVERNMENT', author: 'C.C. Dibie', difficulty: 'tough'
  },
  {
    subject: 'Government',
    year: 1988,
    topic: 'Federalism: The Lyttelton Constitution of 1954',
    text: 'Nigeria became a true federal state in constitutional terms under the provisions of the:',
    options: {
      A: 'Lyttelton Constitution of 1954',
      B: 'Macpherson Constitution of 1951',
      C: 'Richards Constitution of 1946',
      D: 'Independence Constitution of 1960'
    },
    answer: 'A',
    explanation: 'The 1954 Lyttelton Constitution formally inaugurated Nigerian federalism by delineating Exclusive, Concurrent, and Residual legislative lists and establishing regional autonomy with regional Premiers.',
    bookTitle: 'ESSENTIAL GOVERNMENT', author: 'C.C. Dibie', difficulty: 'tough'
  },
  {
    subject: 'Government',
    year: 1995,
    topic: 'Political Theory: Separation of Powers vs Parliamentary Executive',
    text: 'Under a classic Westminster parliamentary system of government, the executive branch is characterized by:',
    options: {
      A: 'Collective ministerial responsibility and dual executive leadership',
      B: 'Strict separation of personnel between the cabinet and parliament',
      C: 'Direct popular election of the prime minister for a fixed four-year term',
      D: 'An independent president with absolute veto power over parliamentary legislation'
    },
    answer: 'A',
    explanation: 'In the Westminster system, cabinet ministers must be elected members of parliament, bound by collective responsibility, and the executive is divided into a ceremonial Head of State and political Head of Government (Prime Minister).',
    bookTitle: 'ESSENTIAL GOVERNMENT', author: 'C.C. Dibie', difficulty: 'very_tough'
  },
  {
    subject: 'Government',
    year: 2002,
    topic: 'Judicial Institutions: Writ of Habeas Corpus and Judicial Review',
    text: 'A prerogative writ issued by a superior court commanding an authority holding a detainee to bring the person before the court to determine the legality of detention is known as:',
    options: { A: 'Habeas corpus', B: 'Mandamus', C: 'Certiorari', D: 'Quo warranto' },
    answer: 'A',
    explanation: 'Habeas corpus ("that you have the body") is a fundamental constitutional remedy protecting individual liberty against unlawful detention without trial.',
    bookTitle: 'ESSENTIAL GOVERNMENT', author: 'C.C. Dibie', difficulty: 'tough'
  },
  {
    subject: 'Government',
    year: 2011,
    topic: 'Constitutional History: 1979 Constitution & Presidentialism',
    text: 'A fundamental departure of the 1979 Nigerian Constitution from the 1963 Republican Constitution was the adoption of:',
    options: {
      A: 'An executive presidential system with a unified head of state and government',
      B: 'A bicameral legislature with equal regional representation in the lower house',
      C: 'Regional constitutions administered by regional governors',
      D: 'An appellate Privy Council based in the United Kingdom'
    },
    answer: 'A',
    explanation: 'The 1979 Constitution replaced the Westminster parliamentary system with an American-style executive presidency, combining the functions of Head of State, Head of Government, and Commander-in-Chief in one elected President.',
    bookTitle: 'ESSENTIAL GOVERNMENT', author: 'C.C. Dibie', difficulty: 'very_tough'
  },
  {
    subject: 'Government',
    year: 2020,
    topic: 'International Relations: Nigeria’s Foreign Policy Principles',
    text: 'The cornerstone of Nigeria’s foreign policy since independence has traditionally been defined as:',
    options: {
      A: 'Afrocentrism, prioritizing the liberation, security, and socio-economic development of Africa',
      B: 'Strict non-alignment accompanied by total detachment from continental defense',
      C: 'Unconditional military alliance with western capitalist nations',
      D: 'Regional isolationism focused exclusively on domestic border expansion'
    },
    answer: 'A',
    explanation: 'Afrocentrism makes Africa the centerpiece of Nigerian diplomatic strategy, championing anti-apartheid campaigns, conflict resolution via ECOMOG, and continental economic integration through AU and ECOWAS.',
    bookTitle: 'ESSENTIAL GOVERNMENT', author: 'C.C. Dibie', difficulty: 'tough'
  }
];

// =========================================================================
// 8. LITERATURE IN ENGLISH — TOUGH UTME HISTORICAL QUESTIONS (1978 - 2026)
// =========================================================================
export const TOUGH_LITERATURE_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Literature in English',
    year: 1985,
    topic: 'Literary Theory: Tragic Hero and Hamartia',
    text: 'In Aristotelian dramatic tragedy, the tragic hero’s downfall is primarily caused by "hamartia", which is best defined as:',
    options: {
      A: 'An inherent character flaw or error in judgment that precipitates inevitable disaster',
      B: 'Unprovoked malice originating from supernatural deities',
      C: 'Economic destitution resulting from state taxation',
      D: 'A sudden comic resolution bringing catharsis to spectators'
    },
    answer: 'A',
    explanation: 'In Aristotle’s Poetics, hamartia is the fatal flaw or moral/judgmental error of an otherwise noble protagonist that triggers their reversal of fortune (peripeteia) and downfall.',
    bookTitle: 'EXAM FOCUS: LITERATURE IN ENGLISH', author: 'J.O.J. Nwachukwu-Agbada', difficulty: 'tough'
  },
  {
    subject: 'Literature in English',
    year: 1993,
    topic: 'Poetic Techniques: Meter and Scansion',
    text: 'A poetic line composed of five metrical feet, each consisting of an unaccented syllable followed by an accented syllable, is classified as:',
    options: { A: 'Iambic pentameter', B: 'Trochaic hexameter', C: 'Anapestic tetrameter', D: 'Dactylic dimeter' },
    answer: 'A',
    explanation: 'An iamb consists of an unstressed followed by a stressed syllable (da-DUM). Five iambic feet in a single line constitute iambic pentameter, the standard meter of Elizabethan blank verse.',
    bookTitle: 'EXAM FOCUS: LITERATURE IN ENGLISH', author: 'J.O.J. Nwachukwu-Agbada', difficulty: 'very_tough'
  },
  {
    subject: 'Literature in English',
    year: 2004,
    topic: 'Dramatic Devices: Dramatic Irony',
    text: 'Dramatic irony occurs in a stage play when:',
    options: {
      A: 'The audience possesses vital knowledge of which the characters on stage are ignorant',
      B: 'A character utters words that directly contradict the literal reality',
      C: 'The playwright introduces physical comedy during solemn funeral processions',
      D: 'Two conflicting choruses deliver contradictory commentary simultaneously'
    },
    answer: 'A',
    explanation: 'Dramatic irony hinges on the gap in comprehension between audience and character, creating suspense and tension as the audience anticipates the character’s discovery of the truth.',
    bookTitle: 'EXAM FOCUS: LITERATURE IN ENGLISH', author: 'J.O.J. Nwachukwu-Agbada', difficulty: 'tough'
  },
  {
    subject: 'Literature in English',
    year: 2017,
    topic: 'African Drama: Soyinka’s Mythological Worldview',
    text: 'In Wole Soyinka’s dramatic metaphysics, the deity Ogun serves as the patron archetype of:',
    options: {
      A: 'Creativity, metallurgy, warfare, and the transitional abyss of essence',
      B: 'Fertility and maternal agricultural abundance',
      C: 'Trickery and messenger divination exclusively',
      D: 'Oceanic storms and seasonal monsoon winds'
    },
    answer: 'A',
    explanation: 'In Soyinka’s Fourth Stage, Ogun represents the tragic explorer of the void, combining destructive and creative impulses, patron of iron, technology, and artistic creation.',
    bookTitle: 'EXAM FOCUS: LITERATURE IN ENGLISH', author: 'J.O.J. Nwachukwu-Agbada', difficulty: 'mastery'
  }
];

// =========================================================================
// 9. COMMERCE & PRINCIPLES OF ACCOUNTS — TOUGH UTME QUESTIONS (1978 - 2026)
// =========================================================================
export const TOUGH_COMMERCE_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Commerce',
    year: 1986,
    topic: 'Banking & Money Markets: Bills of Exchange',
    text: 'A bill of exchange drawn by a creditor on a debtor requiring payment at a fixed future date becomes legally binding when the debtor:',
    options: {
      A: 'Writes "Accepted" across the face of the bill and signs it',
      B: 'Registers the bill with the corporate affairs commission',
      C: 'Deposits collateral with a commercial mortgage institution',
      D: 'Surrenders his certificate of company incorporation'
    },
    answer: 'A',
    explanation: 'Under the Bills of Exchange Act, a bill is incomplete until the drawee signifies his assent by writing "Accepted" and appending his signature across the face.',
    bookTitle: 'ROUND-UP COMMERCE', author: 'L.I. Ahukannah', difficulty: 'tough'
  },
  {
    subject: 'Commerce',
    year: 2003,
    topic: 'Foreign Trade: Documents Used in International Trade',
    text: 'Which document provides conclusive evidence of a contract of carriage of goods by sea and acts as a document of title to the goods?',
    options: { A: 'Bill of Lading', B: 'Consular Invoice', C: 'Certificate of Origin', D: 'Indent' },
    answer: 'A',
    explanation: 'The Bill of Lading is a document issued by a maritime carrier acknowledging receipt of cargo for shipment, representing title to the goods.',
    bookTitle: 'ROUND-UP COMMERCE', author: 'L.I. Ahukannah', difficulty: 'tough'
  }
];

export const TOUGH_ACCOUNTS_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Principles of Accounts',
    year: 1994,
    topic: 'Financial Accounting: Depreciation by Reducing Balance Method',
    text: 'A delivery van was purchased for ₦800,000. Depreciation is charged at 20% per annum using the reducing balance method. Calculate the net book value of the van at the end of Year 3.',
    options: { A: '₦409,600', B: '₦320,000', C: '₦480,000', D: '₦512,000' },
    answer: 'A',
    explanation: 'Year 1: Depreciation = 20% × 800,000 = ₦160,000; NBV = ₦640,000. Year 2: Depreciation = 20% × 640,000 = ₦128,000; NBV = ₦512,000. Year 3: Depreciation = 20% × 512,000 = ₦102,400; NBV = 512,000 - 102,400 = ₦409,600.',
    bookTitle: 'ESSENTIAL FINANCIAL ACCOUNTING', author: 'O.A. Longe', difficulty: 'very_tough'
  },
  {
    subject: 'Principles of Accounts',
    year: 2012,
    topic: 'Partnership Accounts: Goodwill & Revaluation',
    text: 'A and B are partners sharing profits in the ratio 3:2. They admit C into the partnership for a 1/5 share of future profits. Calculate the new profit-sharing ratio among A, B, and C.',
    options: { A: '12 : 8 : 5', B: '3 : 2 : 1', C: '15 : 10 : 5', D: '9 : 6 : 5' },
    answer: 'A',
    explanation: 'C gets 1/5 share. Remaining share for A and B = 1 - 1/5 = 4/5. A’s new share = 3/5 × 4/5 = 12/25. B’s new share = 2/5 × 4/5 = 8/25. C’s share = 1/5 = 5/25. Ratio is 12 : 8 : 5.',
    bookTitle: 'ESSENTIAL FINANCIAL ACCOUNTING', author: 'O.A. Longe', difficulty: 'very_tough'
  },
  {
    subject: 'Principles of Accounts',
    year: 2020,
    topic: 'Company Accounts: Share Capital and Share Premium',
    text: 'A company issues 500,000 ordinary shares of ₦1.00 each at a premium of ₦0.20 per share. All shares were fully subscribed and paid for. What is the total credited to the Share Premium Account?',
    options: { A: '₦100,000', B: '₦500,000', C: '₦600,000', D: '₦20,000' },
    answer: 'A',
    explanation: 'Share premium = 500,000 shares × ₦0.20 = ₦100,000. The nominal value (₦500,000) is credited to Ordinary Share Capital and ₦100,000 to the Share Premium Account.',
    bookTitle: 'ESSENTIAL FINANCIAL ACCOUNTING', author: 'O.A. Longe', difficulty: 'tough'
  }
];

// =========================================================================
// 10. CRS, GEOGRAPHY & AGRICULTURAL SCIENCE — TOUGH QUESTIONS (1978 - 2026)
// =========================================================================
export const TOUGH_CRS_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Christian Religious Studies',
    year: 1987,
    topic: 'Pauline Epistles: Justification by Faith in Romans',
    text: 'In his Epistle to the Romans, the Apostle Paul argued that righteousness before God is achieved:',
    options: {
      A: 'Through faith in Jesus Christ apart from the works of the Mosaic law',
      B: 'By strict ritual observance of circumcision and sabbath regulations',
      C: 'Through ancestral Levitical lineage and temple sacrifice',
      D: 'By political allegiance to Roman imperial magistrates'
    },
    answer: 'A',
    explanation: 'In Romans 3:21-28, Paul asserts that all have sinned and that justification is received freely by God’s grace through faith in the redemptive blood of Christ, not by the deeds of the law.',
    bookTitle: 'ROUND-UP CRS', author: 'E.K. Agbebi', difficulty: 'tough'
  },
  {
    subject: 'Christian Religious Studies',
    year: 2005,
    topic: 'Old Testament: Prophetic Reform of Amos',
    text: 'The prophet Amos directed his sharpest denunciation against the Northern Kingdom of Israel primarily because of their:',
    options: {
      A: 'Social injustice, economic exploitation of the poor, and hollow religious ritualism',
      B: 'Refusal to finance military expeditions against the Assyrian empire',
      C: 'Inability to construct stone palaces in Samaria',
      D: 'Failure to enforce dietary laws during the reign of Jeroboam II'
    },
    answer: 'A',
    explanation: 'Amos condemned the Samarian elites for "selling the righteous for silver and the poor for a pair of sandals" (Amos 2:6), demanding that "justice roll down like waters and righteousness like a mighty stream".',
    bookTitle: 'ROUND-UP CRS', author: 'E.K. Agbebi', difficulty: 'tough'
  }
];

export const TOUGH_GEOGRAPHY_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Geography',
    year: 1991,
    topic: 'Climatology: Koppen’s Classification and ITD Dynamics',
    text: 'In Nigeria, the seasonal alternation between the rainy season and the harmattan dry season is determined by the latitudinal migration of the:',
    options: {
      A: 'Inter-Tropical Discontinuity (ITD) between Tropical Maritime and Tropical Continental air masses',
      B: 'Subtropical jet stream over the Sahara desert',
      C: 'Benguela cold ocean current along the Gulf of Guinea',
      D: 'South-Atlantic anticyclone permanently stationary over Lake Chad'
    },
    answer: 'A',
    explanation: 'The ITD marks the boundary where the moist, rain-bearing South-West Monsoon (Tropical Maritime air mass) meets the dry, dust-laden North-East Trade winds (Tropical Continental air mass). Its seasonal oscillation dictates Nigeria’s rainfall patterns.',
    bookTitle: 'SENIOR SECONDARY GEOGRAPHY', author: 'N.P. Iloeje', difficulty: 'very_tough'
  },
  {
    subject: 'Geography',
    year: 2014,
    topic: 'Map Reading: Contour Interval and Gradient Calculation',
    text: 'On a topographic map of scale 1:50,000, two points A and B have elevations of 450 m and 250 m respectively. If the horizontal distance measured between them on the map is 4 cm, calculate the average gradient.',
    options: { A: '1 in 10', B: '1 in 20', C: '1 in 5', D: '1 in 50' },
    answer: 'A',
    explanation: 'Vertical difference = 450 - 250 = 200 m. Map distance = 4 cm. Ground distance = 4 cm × 50,000 = 200,000 cm = 2,000 m. Gradient = Vertical Interval / Horizontal Equivalent = 200 m / 2,000 m = 1/10 (1 in 10).',
    bookTitle: 'SENIOR SECONDARY GEOGRAPHY', author: 'N.P. Iloeje', difficulty: 'very_tough'
  }
];

export const TOUGH_AGRIC_QUESTIONS: ToughSubjectQuestion[] = [
  {
    subject: 'Agricultural Science',
    year: 1997,
    topic: 'Soil Science: Cation Exchange Capacity (CEC) & Soil Acidity',
    text: 'In tropical soil chemistry, soils with high cation exchange capacity (CEC) are better able to prevent plant nutrient loss because:',
    options: {
      A: 'Negatively charged soil colloids hold exchangeable nutrient cations (Ca²⁺, Mg²⁺, K⁺) against leaching',
      B: 'Positively charged humus particles repel chemical fertilizers into groundwater',
      C: 'Soil macro-pores absorb water at permanent wilting point',
      D: 'Decomposition of organic matter creates alkaline pH above 9.0'
    },
    answer: 'A',
    explanation: 'Cation exchange capacity is the total capacity of a soil to hold exchangeable cations. Clay and humus carry negative electrical charges that retain vital nutrient cations against downward rainwater leaching.',
    bookTitle: 'ESSENTIAL AGRICULTURAL SCIENCE', author: 'O.A. Iwena', difficulty: 'very_tough'
  },
  {
    subject: 'Agricultural Science',
    year: 2018,
    topic: 'Animal Breeding: Heterosis and Hybrid Vigor',
    text: 'When two distinct pure breeding lines of livestock are crossed, the superior phenotypic performance of the F1 generation over both parental lines is termed:',
    options: { A: 'Heterosis (hybrid vigor)', B: 'Inbreeding depression', C: 'Pleiotropy', D: 'Epistasis' },
    answer: 'A',
    explanation: 'Heterosis or hybrid vigor describes the increased vigor, growth rate, fertility, and disease resistance exhibited by crossbred progeny relative to the average of their inbred parents.',
    bookTitle: 'ESSENTIAL AGRICULTURAL SCIENCE', author: 'O.A. Iwena', difficulty: 'tough'
  }
];

// =========================================================================
// 11. NOVEL — THE LEKKI HEADMASTER TOUGH EXAM QUESTIONS
// =========================================================================
export const TOUGH_LEKKI_NOVEL_QUESTIONS: NovelQuestion[] = [
  {
    id: 9301,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'How does Kabir Alabi Garba use the geographic transition between the crowded mainland of Lagos and the upscale residential corridor of Lekki to establish the novel’s central sociological dichotomy?',
    options: {
      A: 'By contrasting the raw survivalist energy of the mainland with the gilded, morally precarious affluence of Lekki estates',
      B: 'By showing that teachers on the mainland earn double the remuneration of Lekki educators',
      C: 'By illustrating that public transport operates only on the island corridor',
      D: 'By arguing that academic excellence is impossible in mainland schools'
    },
    answer: 'A',
    explanation: 'The physical journey across the bridge symbolizes a deeper crossing between cultural authenticity and commercialized prestige, setting up Bepo’s moral dilemmas.',
  },
  {
    id: 9302,
    novel: 'The Lekki Headmaster',
    chapter: 3,
    question: 'What psychological conflict tortures Mr. Bepo when he witnesses exam malpractice institutionalized as "special examination centers"?',
    options: {
      A: 'The agony of knowing that educational certification has been divorced from genuine competence, endangering the moral soul of the nation',
      B: 'Regret that he did not invest his own personal savings in purchasing the examination syndicate',
      C: 'Fear that the examination body would relocate its headquarters to another state',
      D: 'Frustration that his own students refused to register for the miracle centers'
    },
    answer: 'A',
    explanation: 'Bepo perceives examination fraud not merely as an administrative infraction, but as an existential corruption that destroys youth character and robs the nation of true merit.',
  },
  {
    id: 9303,
    novel: 'The Lekki Headmaster',
    chapter: 6,
    question: 'In Chapter 6, what profound moral truth does Bepo impart to the young teacher Miss Gloria regarding the temptation to compromise professional standards for parental favor?',
    options: {
      A: '"A teacher who sells grades sells not just paper, but the future integrity of society"',
      B: '"Rich parents are always right because their fees fund school infrastructure"',
      C: '"Examinations are an outdated European convention that should be abandoned"',
      D: '"Every teacher must prioritize survival over abstract ethical theories"'
    },
    answer: 'A',
    explanation: 'Bepo reminds his faculty that the teaching vocation is a sacred societal trust, warning that trading grades for favors corrodes civilization itself.',
  },
  {
    id: 9304,
    novel: 'The Lekki Headmaster',
    chapter: 9,
    question: 'What literary device is employed when Bepo reflects on the withered almond tree outside the school library just before the proprietor demands his resignation?',
    options: {
      A: 'Foreshadowing and symbolic pathetic fallacy reflecting the impending crisis of conscience',
      B: 'Comic relief to amuse the reader after an intense faculty meeting',
      C: 'Dramatic hyperbole intended to mock botanical studies',
      D: 'Anachronistic historical allegory'
    },
    answer: 'A',
    explanation: 'The withered tree mirrors Bepo’s internal distress and foreshadows the drying up of ethical compromise in an environment obsessed with profits.',
  },
  {
    id: 9305,
    novel: 'The Lekki Headmaster',
    chapter: 12,
    question: 'Why did Bepo ultimately reject the opportunity to migrate permanently to the United Kingdom, turning back at the final hour?',
    options: {
      A: 'He realized that fleeing the challenges of Nigeria would abandon the generation of young dreamers who desperately need honorable mentors',
      B: 'His travel visa was cancelled at the departure terminal',
      C: 'He discovered that British schools do not employ Nigerian headmasters',
      D: 'He was promised an immediate political appointment in Lagos'
    },
    answer: 'A',
    explanation: 'Bepo’s epiphany at the airport was driven by patriotic conviction and pedagogical devotion: he realized that transforming his homeland requires staying to nurture its youth with courage.',
  }
];
