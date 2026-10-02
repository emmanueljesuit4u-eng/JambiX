/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMB UTME Comprehensive 180-Question CBT Bank
 * Conforms strictly to official Nigerian JAMB UTME regulations:
 * - Use of English: EXACTLY 60 questions (15 from prescribed novels + 45 from general English)
 * - 3 Other Subjects: EXACTLY 40 questions each (Total 120 questions)
 * - Total Full CBT Mock: EXACTLY 180 questions (Graded strictly over 400 marks)
 */

import { NOVEL_EXAM_QUESTIONS } from './jambNovelsData';
import { VerifiedQuestion, SubjectKey } from './jambPastQuestions';

export interface BankQuestionDefinition {
  topic: string;
  text: string;
  options: { A: string; B: string; C: string; D: string };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  bookTitle: string;
  author: string;
  textbookRef: string;
}

// =========================================================================
// 1. USE OF ENGLISH GENERAL BANK (45 Verified Syllabus Questions)
// Paired with 15 questions from Prescribed Novels = EXACTLY 60 Questions
// Reference: A-Z OF ENGLISH by B.O. Dele Ashade
// =========================================================================
export const ENGLISH_GENERAL_BANK: BankQuestionDefinition[] = [
  // Concord & Grammatical Structure
  {
    topic: 'Grammatical Concord: Plural-Verb and Singular-Verb Rules',
    text: 'Neither the class prefect nor the subject teachers ______ present at the emergency briefing yesterday.',
    options: { A: 'were', B: 'was', C: 'is', D: 'are' },
    answer: 'A',
    explanation: 'By the rule of proximity in correlation (neither... nor), the finite verb agrees with the closer subject ("the subject teachers", which is plural), hence "were". (A-Z OF ENGLISH, Chapter 1).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 18'
  },
  {
    topic: 'Concord: Parenthetical Expressions and Accompaniment',
    text: 'The principal, accompanied by his vice-principals and academic counselors, ______ attending the national matriculation summit.',
    options: { A: 'is', B: 'are', C: 'were', D: 'have been' },
    answer: 'A',
    explanation: 'Parenthetical intervening expressions such as "accompanied by", "as well as", and "in conjunction with" do not alter the number of the true grammatical subject ("The principal", singular), requiring singular "is". (A-Z OF ENGLISH, Chapter 1).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 24'
  },
  {
    topic: 'Concord: Distributive Pronouns and Singular Inflection',
    text: 'Each of the shortlisted scholarship applicants ______ expected to submit original credentials.',
    options: { A: 'is', B: 'are', C: 'were', D: 'have been' },
    answer: 'A',
    explanation: 'Distributive pronouns ("each", "either", "neither", "everyone") take strictly singular verbs in formal grammatical English. (A-Z OF ENGLISH, Chapter 1).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 32'
  },
  {
    topic: 'Concord: Collective Nouns as Unitary Entities',
    text: 'The disciplinary committee ______ resolved to enforce the academic code of conduct across all faculties.',
    options: { A: 'has', B: 'have', C: 'are', D: 'were' },
    answer: 'A',
    explanation: 'When a collective noun ("committee", "jury", "panel") acts harmoniously as a unified corporate body, it takes a singular verb ("has resolved"). (A-Z OF ENGLISH, Chapter 1).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 38'
  },
  {
    topic: 'Concord: Quasi-Coordination with "More Than One"',
    text: 'More than one candidate ______ disqualified for arriving past the examination gate closure.',
    options: { A: 'was', B: 'were', C: 'are', D: 'have been' },
    answer: 'A',
    explanation: 'Although semantically plural in meaning, the idiomatic construction "more than one" takes a singular noun and grammatically singular verb ("was disqualified"). (A-Z OF ENGLISH, Chapter 1).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 42'
  },

  // Tenses, Conditionals & Subjunctives
  {
    topic: 'Subjunctive Mood: Mandative Subjunctive after Demands',
    text: 'The senate recommended that the dean ______ an independent audit of the test scores.',
    options: { A: 'conduct', B: 'conducts', C: 'conducted', D: 'should have conducted' },
    answer: 'A',
    explanation: 'In formal subjunctive constructions following verbs of demanding, recommending, or proposing, the base form (bare infinitive) of the verb is required without third-person "-s". (A-Z OF ENGLISH, Chapter 2).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 55'
  },
  {
    topic: 'Conditional Clauses: Third Conditional (Unfulfilled Past)',
    text: 'If the invigilator had spotted the contraband smartphone earlier, the student ______ immediately.',
    options: { A: 'would have been expelled', B: 'will be expelled', C: 'would be expelled', D: 'was expelled' },
    answer: 'A',
    explanation: 'The third conditional expresses an unfulfilled hypothetical past condition: "If + past perfect (had spotted), main clause = would have + past participle (would have been expelled)". (A-Z OF ENGLISH, Chapter 2).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 62'
  },
  {
    topic: 'Sequence of Tenses: Past Unreal Conditional with "Wish"',
    text: 'Kola wishes he ______ harder for the UTME mock examination last Saturday.',
    options: { A: 'had studied', B: 'studied', C: 'has studied', D: 'studies' },
    answer: 'A',
    explanation: 'To express regret regarding a past event, "wish" requires the past perfect tense ("had studied"). (A-Z OF ENGLISH, Chapter 2).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 65'
  },

  // Prepositions & Phrasal Verbs
  {
    topic: 'Prepositional Idioms: Collocation with Adjectives',
    text: 'The medical director was totally oblivious ______ the clandestine infractions in the laboratory.',
    options: { A: 'of', B: 'to', C: 'with', D: 'about' },
    answer: 'A',
    explanation: 'In standard formal English, the adjective "oblivious" collocated with preposition "of" (or occasionally "to" in modern usage, with "of" being classical standard). (A-Z OF ENGLISH, Chapter 5).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 138'
  },
  {
    topic: 'Prepositions: Correct Phrasal Verb Usage',
    text: 'The university board decided to dispense ______ traditional paper admissions in favor of biometric verification.',
    options: { A: 'with', B: 'of', C: 'for', D: 'about' },
    answer: 'A',
    explanation: '"Dispense with" is the standard idiomatic phrasal verb meaning to manage without or discard something unnecessary. (A-Z OF ENGLISH, Chapter 5).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 144'
  },
  {
    topic: 'Prepositional Usage: Collocation with Verbs',
    text: 'He was acquitted ______ all allegations of academic forgery by the statutory tribunal.',
    options: { A: 'of', B: 'from', C: 'with', D: 'for' },
    answer: 'A',
    explanation: 'The verb "acquit" strictly takes the preposition "of" ("acquitted of the charges"). (A-Z OF ENGLISH, Chapter 5).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 150'
  },
  {
    topic: 'Phrasal Verbs: Semantic Precision in Context',
    text: 'Due to severe rainfall and thunder, the inter-collegiate football derby was ______ until further notice.',
    options: { A: 'called off', B: 'called on', C: 'called out', D: 'called in' },
    answer: 'A',
    explanation: '"Call off" means to cancel an event or match; "put off" means to postpone. (A-Z OF ENGLISH, Chapter 5).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 156'
  },

  // Antonyms (Opposites in Meaning)
  {
    topic: 'Antonyms: Lexical Contrasts in Formal Context',
    text: 'Choose the option opposite in meaning to the capitalized word: "The politician made an EPHEMERAL impact during his brief ministerial appointment."',
    options: { A: 'Enduring', B: 'Fleeting', C: 'Transient', D: 'Momentary' },
    answer: 'A',
    explanation: '"Ephemeral" means short-lived or transitory. The direct antonym is "enduring", meaning long-lasting or permanent. (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 98'
  },
  {
    topic: 'Antonyms: Contextual Opposites',
    text: 'Choose the option opposite in meaning to the capitalized word: "His speech was marked by LUCID explanations of the complex economic theory."',
    options: { A: 'Obscure', B: 'Clear', C: 'Eloquent', D: 'Articulate' },
    answer: 'A',
    explanation: '"Lucid" means clear and easy to comprehend. Its antonym is "obscure", meaning ambiguous, unclear, or hidden. (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 104'
  },
  {
    topic: 'Antonyms: Character Descriptions',
    text: 'Choose the option opposite in meaning to the capitalized word: "The witness delivered a METICULOUS account of the road incident."',
    options: { A: 'Careless', B: 'Detailed', C: 'Thorough', D: 'Painstaking' },
    answer: 'A',
    explanation: '"Meticulous" denotes showing great attention to detail. The opposite is "careless" or "sloppy". (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 112'
  },
  {
    topic: 'Antonyms: Moral & Behavioral Terminology',
    text: 'Choose the option opposite in meaning to the capitalized word: "The audit panel praised the registrar for his IMPECCABLE financial stewardship."',
    options: { A: 'Flawed', B: 'Faultless', C: 'Exemplary', D: 'Virtuous' },
    answer: 'A',
    explanation: '"Impeccable" signifies without fault or blemish. The direct antonym is "flawed" or "defective". (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 118'
  },
  {
    topic: 'Antonyms: Expressive Opposites',
    text: 'Choose the option opposite in meaning to the capitalized word: "The vice-chancellor was CONCILIATORY during his dialogue with the student union."',
    options: { A: 'Hostile', B: 'Peaceful', C: 'Appeasing', D: 'Diplomatic' },
    answer: 'A',
    explanation: '"Conciliatory" means striving to placate or reconcile. The opposite is "hostile" or "belligerent". (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 125'
  },

  // Synonyms (Nearest in Meaning)
  {
    topic: 'Synonyms: Vocabulary in Context',
    text: 'Choose the option nearest in meaning to the capitalized word: "The bursar’s OSTENTATIOUS lifestyle raised eyebrows among the statutory auditors."',
    options: { A: 'Showy', B: 'Modest', C: 'Prudent', D: 'Quiet' },
    answer: 'A',
    explanation: '"Ostentatious" describes vulgar or pretentious display intended to impress others; nearest in meaning is "showy". (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 72'
  },
  {
    topic: 'Synonyms: Descriptive Adjectives',
    text: 'Choose the option nearest in meaning to the capitalized word: "The counsel’s arguments were COGENT and persuaded the bench."',
    options: { A: 'Compelling', B: 'Weak', C: 'Irrelevant', D: 'Tenuous' },
    answer: 'A',
    explanation: '"Cogent" argument is clear, logical, and convincing; nearest in meaning is "compelling". (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 78'
  },
  {
    topic: 'Synonyms: Nuances of Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The research findings corroborate the initial HYPOTHESIS."',
    options: { A: 'Theory', B: 'Conclusion', C: 'Fact', D: 'Proof' },
    answer: 'A',
    explanation: '"Hypothesis" represents an educated supposition or proposed theoretical explanation; nearest in meaning is "theory". (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 84'
  },
  {
    topic: 'Synonyms: Academic Register',
    text: 'Choose the option nearest in meaning to the capitalized word: "The professor offered an INGENUOUS explanation that disarmed all skeptics."',
    options: { A: 'Frank', B: 'Crafty', C: 'Deceitful', D: 'Arrogant' },
    answer: 'A',
    explanation: '"Ingenuous" means innocent, candid, and unsuspecting; nearest in meaning is "frank" or "sincere". (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 90'
  },

  // Oral English: Vowels & Consonants
  {
    topic: 'Oral English: Vowel Contrasts (/i:/ vs /ɪ/)',
    text: 'Choose the word that has the identical vowel sound as the underlined sound in "st<u>ee</u>l":',
    options: { A: 'Key', B: 'Fill', C: 'Sieve', D: 'Myth' },
    answer: 'A',
    explanation: '"Steel" has the long front close vowel /i:/. "Key" is pronounced /ki:/ with the exact same long vowel sound. (A-Z OF ENGLISH, Chapter 9).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 258'
  },
  {
    topic: 'Oral English: Diphthongs (/aɪ/ vs /eɪ/)',
    text: 'Which word contains the diphthong /aɪ/ as in "b<u>i</u>nd"?',
    options: { A: 'Height', B: 'Weight', C: 'Receipt', D: 'Shield' },
    answer: 'A',
    explanation: '"Height" is pronounced /haɪt/ with the closing diphthong /aɪ/, matching "bind" (/baɪnd/). "Weight" has /eɪ/. (A-Z OF ENGLISH, Chapter 9).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 265'
  },
  {
    topic: 'Oral English: Consonant Contrasts (/θ/ vs /ð/)',
    text: 'Choose the word that contains the voiced dental fricative /ð/ as in "<u>th</u>en":',
    options: { A: 'Breathe', B: 'Breath', C: 'Thank', D: 'Thief' },
    answer: 'A',
    explanation: 'The verb "breathe" (/bri:ð/) ends with voiced /ð/. "Breath", "thank", and "thief" all have voiceless dental fricative /θ/. (A-Z OF ENGLISH, Chapter 10).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 294'
  },
  {
    topic: 'Oral English: Silent Consonants',
    text: 'In which of the following words is the letter "p" completely silent?',
    options: { A: 'Receipt', B: 'Reception', C: 'Rapture', D: 'Prompt' },
    answer: 'A',
    explanation: 'In "receipt" (/rɪˈsi:t/), the letter "p" is an orthographic silent letter. (A-Z OF ENGLISH, Chapter 10).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 302'
  },
  {
    topic: 'Oral English: Silent Letters in Word Pairs',
    text: 'Identify the word with a silent "b":',
    options: { A: 'Subtle', B: 'Obvious', C: 'Probable', D: 'Disobey' },
    answer: 'A',
    explanation: '"Subtle" is pronounced /ˈsʌtl/; the letter "b" is entirely silent. (A-Z OF ENGLISH, Chapter 10).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 306'
  },

  // Oral English: Word Stress & Emphatic Stress
  {
    topic: 'Oral English: Stress on Suffixes (-tion, -ic, -ity)',
    text: 'Choose the syllable that receives the primary stress in "PHOTOGRAPHIC":',
    options: { A: 'photo-GRAPH-ic (third syllable)', B: 'PHO-tographic (first syllable)', C: 'pho-TO-graphic (second syllable)', D: 'photograph-IC (fourth syllable)' },
    answer: 'A',
    explanation: 'Words ending in the suffix "-ic" are stressed on the penultimate (second to last) syllable: photo-GRAPH-ic. (A-Z OF ENGLISH, Chapter 11).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 320'
  },
  {
    topic: 'Oral English: Disyllabic Noun-Verb Stress Shifts',
    text: 'In the sentence "We have to IMPORT grains this winter", where is the primary stress on the capitalized word?',
    options: { A: 'im-PORT (second syllable)', B: 'IM-port (first syllable)', C: 'Equal stress', D: 'Unstressed' },
    answer: 'A',
    explanation: 'In words with noun-verb stress shift, the verb form is stressed on the second syllable: to im-PORT. (A-Z OF ENGLISH, Chapter 11).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 326'
  },
  {
    topic: 'Oral English: Emphatic Stress Interpretation',
    text: 'Which question does the sentence answer when emphatic stress is on the capitalized word: "The governor inaugurated the NEW hospital today."?',
    options: {
      A: 'Did the governor inaugurate the old hospital today?',
      B: 'Did the commissioner inaugurate the new hospital today?',
      C: 'Did the governor demolish the new hospital today?',
      D: 'Did the governor inaugurate the new hospital yesterday?'
    },
    answer: 'A',
    explanation: 'Emphatic stress on "NEW" contradicts and negates "old", making option A the exact question it resolves. (A-Z OF ENGLISH, Chapter 11).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 334'
  },

  // Idioms & Question Tags
  {
    topic: 'Question Tags: Complex Sentences & Negative Polarity',
    text: 'The scholars rarely arrive late for clinical lectures, ______?',
    options: { A: 'do they', B: 'don’t they', C: 'did they', D: 'didn’t they' },
    answer: 'A',
    explanation: '"Rarely" is a semi-negative adverb; a sentence containing "rarely" is treated as negative and requires a positive question tag ("do they?"). (A-Z OF ENGLISH, Chapter 6).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 182'
  },
  {
    topic: 'Idioms: Meaning of Common English Idiomatic Phrases',
    text: 'To "burn the candle at both ends" means to:',
    options: {
      A: 'Exhaust oneself by working excessively hard early and late',
      B: 'Waste kerosene and electricity in an unventilated room',
      C: 'Display financial extravagance in public gatherings',
      D: 'Engage in religious night vigils during exam seasons'
    },
    answer: 'A',
    explanation: 'The idiom "burn the candle at both ends" denotes overworking oneself continuously from dawn until deep into the night. (A-Z OF ENGLISH, Chapter 12).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 355'
  },
  {
    topic: 'Idiomatic Expressions: Figurative Expressions',
    text: 'When Chidi was accused of complicity, he decided to "make a clean breast of" the entire episode. This implies he:',
    options: {
      A: 'Confessed completely and openly',
      B: 'Washed his clothes before the tribunal',
      C: 'Refused to cooperate with the investigators',
      D: 'Escaped to another jurisdiction'
    },
    answer: 'A',
    explanation: 'To "make a clean breast of something" is an established idiom meaning to make a full, honest confession. (A-Z OF ENGLISH, Chapter 12).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 362'
  },

  // Comprehension & Structural Deduction (13 Additional Questions for 45 total)
  {
    topic: 'Comprehension & Deductive Logic: Passage Inference',
    text: 'According to principles of discourse reading, when an author writes "Despite rigorous macroeconomic reforms, inflation persisted unabated", the author implies that:',
    options: {
      A: 'The reforms failed to suppress price surges',
      B: 'The reforms immediately stabilized consumer prices',
      C: 'Inflation was artificially caused by monetary authorities',
      D: 'Economic reform was prohibited by legislature'
    },
    answer: 'A',
    explanation: 'The contrast marker "despite" indicates that the anticipated outcome (lowering inflation) was not achieved by the economic measures. (A-Z OF ENGLISH, Chapter 7).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 204'
  },
  {
    topic: 'Structural Usage: Inversion with Negative Adverbials',
    text: 'Seldom ______ such extraordinary scholastic competence in our premier federal universities.',
    options: { A: 'have we witnessed', B: 'we have witnessed', C: 'we witnessed', D: 'did we witnessed' },
    answer: 'A',
    explanation: 'When a negative adverb ("seldom", "scarcely", "hardly", "never") begins a clause, subject-auxiliary inversion is mandatory ("have we witnessed"). (A-Z OF ENGLISH, Chapter 6).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 188'
  },
  {
    topic: 'Concord: Mathematical Expressions as Singular Entities',
    text: 'Two-thirds of the syllabus ______ covered by the faculty before the strike commenced.',
    options: { A: 'was', B: 'were', C: 'are', D: 'have been' },
    answer: 'A',
    explanation: 'Fractions and percentages take a singular verb when the noun in the prepositional phrase ("syllabus") is singular uncountable. (A-Z OF ENGLISH, Chapter 1).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 48'
  },
  {
    topic: 'Vocabulary in Context: Register of Science and Innovation',
    text: 'The solar engineer verified that the silicon wafer had reached its ______ conductivity threshold.',
    options: { A: 'optimum', B: 'wasteful', C: 'negligible', D: 'dormant' },
    answer: 'A',
    explanation: '"Optimum" designates the most favorable, peak efficiency point for physical performance. (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 88'
  },
  {
    topic: 'Sentence Completion: Correlative Conjunctions',
    text: 'Scarcely had the invigilator distributed the question booklets ______ the electrical power failed.',
    options: { A: 'when', B: 'than', C: 'then', D: 'before' },
    answer: 'A',
    explanation: 'The standard correlative pairing for "scarcely" and "hardly" is "when" ("scarcely had... when"). "No sooner" pairs with "than". (A-Z OF ENGLISH, Chapter 6).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 192'
  },
  {
    topic: 'Oral English: Rhyme Schemes & Homophones',
    text: 'Which of the following words rhymes perfectly with "SUITE" (/swi:t/)?',
    options: { A: 'Sweet', B: 'Suit', C: 'Soot', D: 'Sweat' },
    answer: 'A',
    explanation: '"Suite" and "sweet" are homophones, both phonetically transcribed as /swi:t/. (A-Z OF ENGLISH, Chapter 9).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 272'
  },
  {
    topic: 'Oral English: Consonant Clusters and Final Sounds',
    text: 'Choose the word that ends with the /z/ sound as in "day<u>s</u>":',
    options: { A: 'Boys', B: 'Cats', C: 'Lakes', D: 'Hopes' },
    answer: 'A',
    explanation: 'Following a voiced sound (vowel diphthong /ɔɪ/ in boy), the plural suffix -s is pronounced as voiced /z/: /bɔɪz/. (A-Z OF ENGLISH, Chapter 10).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 310'
  },
  {
    topic: 'Structural Usage: Dangling and Misplaced Modifiers',
    text: 'Identify the grammatically correct sentence free from dangling modifiers:',
    options: {
      A: 'Walking through the botanical gardens, the students admired the blooming hibiscus.',
      B: 'Walking through the botanical gardens, the blooming hibiscus was admired.',
      C: 'Having eaten our breakfast, the bus departed.',
      D: 'To enter the laboratory, the identity badge was inspected.'
    },
    answer: 'A',
    explanation: 'In A, the participial subject "the students" correctly matches the agent performing the action "walking". (A-Z OF ENGLISH, Chapter 6).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 196'
  },
  {
    topic: 'Lexis: Legal and Institutional Registers',
    text: 'The statutory panel decided to ______ the suspect’s bail request pending formal arraignment.',
    options: { A: 'revoke', B: 'repeal', C: 'dissolve', D: 'disband' },
    answer: 'A',
    explanation: 'A bail privilege or license is "revoked" by a judicial or statutory authority. (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 94'
  },
  {
    topic: 'Antonyms: Abstract Nouns in Context',
    text: 'Choose the option opposite in meaning to the capitalized word: "His PROFLIGACY astonished the board of trustees."',
    options: { A: 'Frugality', B: 'Wastefulness', C: 'Generosity', D: 'Ambition' },
    answer: 'A',
    explanation: '"Profligacy" means reckless extravagance or waste. The exact antonym is "frugality" (thrift and prudence). (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 130'
  },
  {
    topic: 'Oral English: Primary Stress in Compound Nouns',
    text: 'In standard compound nouns, where does the primary stress fall in "BLACKBOARD"?',
    options: { A: 'BLACK-board (first element)', B: 'black-BOARD (second element)', C: 'Even stress', D: 'Unstressed' },
    answer: 'A',
    explanation: 'Compound nouns almost universally take primary stress on the first grammatical element: BLACK-board. (A-Z OF ENGLISH, Chapter 11).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 338'
  },
  {
    topic: 'Concord: Collective Measurements',
    text: 'Ten kilometers ______ too long a distance for the primary school pupils to trek.',
    options: { A: 'is', B: 'are', C: 'were', D: 'have been' },
    answer: 'A',
    explanation: 'Quantities of distance, time, and money regarded as single aggregate units take singular verbs ("Ten kilometers is..."). (A-Z OF ENGLISH, Chapter 1).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 50'
  },
  {
    topic: 'Phrasal Prepositions: Correct Usage',
    text: 'The medical student was commended ______ his selfless rescue of the accident victims.',
    options: { A: 'for', B: 'with', C: 'about', D: 'in' },
    answer: 'A',
    explanation: 'The verb "commend" collocates with the preposition "for" when specifying the reason for praise. (A-Z OF ENGLISH, Chapter 5).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 162'
  },
  // Additional Antonyms
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the capitalized word: "The minister’s speech was full of AMBIGUOUS statements."',
    options: { A: 'Explicit', B: 'Obscure', C: 'Vague', D: 'Equivocal' },
    answer: 'A',
    explanation: '"Ambiguous" means open to more than one interpretation or unclear; the opposite is "explicit" or "clear". (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 132'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the capitalized word: "His TRANSIENT visit left little impression on the villagers."',
    options: { A: 'Permanent', B: 'Brief', C: 'Temporary', D: 'Fleeting' },
    answer: 'A',
    explanation: '"Transient" means lasting only for a short time; its antonym is "permanent". (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 134'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the capitalized word: "The principal praised the student for being INDUSTRIOUS."',
    options: { A: 'Indolent', B: 'Diligent', C: 'Hardworking', D: 'Punctual' },
    answer: 'A',
    explanation: '"Industrious" means hardworking and persevering. The direct antonym is "indolent" (lazy or idle). (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 136'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the capitalized word: "The new tax policy was greeted with ENTHUSIASTIC support."',
    options: { A: 'Apathetic', B: 'Eager', C: 'Passionate', D: 'Warm' },
    answer: 'A',
    explanation: '"Enthusiastic" denotes strong interest and eagerness; the antonym is "apathetic" (showing no concern or enthusiasm). (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 138'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the capitalized word: "The witness gave a HOSTILE response to the defense attorney."',
    options: { A: 'Friendly', B: 'Aggressive', C: 'Antagonistic', D: 'Bitter' },
    answer: 'A',
    explanation: '"Hostile" means showing enmity or opposition; the opposite is "friendly" or "cordial". (A-Z OF ENGLISH, Chapter 4).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 140'
  },
  // Additional Synonyms
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The professor’s lecture was PROFOUND and inspired the whole auditorium."',
    options: { A: 'Deep', B: 'Superficial', C: 'Shallow', D: 'Brief' },
    answer: 'A',
    explanation: '"Profound" means having great depth of thought or insight; nearest in meaning is "deep". (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 102'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The school board decided to ABOLISH corporal punishment."',
    options: { A: 'End', B: 'Reinforce', C: 'Encourage', D: 'Promote' },
    answer: 'A',
    explanation: '"Abolish" means to formally put an end to a practice or institution; nearest in meaning is "end". (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 105'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The manager was RESILIENT in the face of financial adversity."',
    options: { A: 'Tough', B: 'Fragile', C: 'Defeated', D: 'Vulnerable' },
    answer: 'A',
    explanation: '"Resilient" means able to recover quickly from difficulties; nearest in meaning is "tough" or "adaptable". (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 108'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "She gave an INGENIOUS solution to the complex programming defect."',
    options: { A: 'Clever', B: 'Ordinary', C: 'Clumsy', D: 'Incompetent' },
    answer: 'A',
    explanation: '"Ingenious" means clever, original, and inventive; nearest in meaning is "clever". (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 110'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The committee reached a UNANIMOUS decision on the disciplinary case."',
    options: { A: 'Undivided', B: 'Divided', C: 'Contentious', D: 'Hesitant' },
    answer: 'A',
    explanation: '"Unanimous" means fully in agreement without dissent; nearest in meaning is "undivided". (A-Z OF ENGLISH, Chapter 3).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 114'
  },
  // Additional Concord & Grammar
  {
    topic: 'Grammatical Concord: Neither of them',
    text: 'Neither of the suspects ______ admitted committing the examination burglary.',
    options: { A: 'has', B: 'have', C: 'are', D: 'were' },
    answer: 'A',
    explanation: '"Neither of" is followed by a plural noun or pronoun but takes a singular verb ("has admitted"). (A-Z OF ENGLISH, Chapter 1).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 35'
  },
  {
    topic: 'Grammatical Concord: Not only... but also',
    text: 'Not only the teacher but also the students ______ enthusiastic about the national science fair.',
    options: { A: 'are', B: 'is', C: 'was', D: 'has been' },
    answer: 'A',
    explanation: 'With "not only... but also", the verb agrees with the subject closest to it ("the students", plural), requiring "are". (A-Z OF ENGLISH, Chapter 1).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 40'
  },
  {
    topic: 'Grammatical Concord: Plural in form, singular in meaning',
    text: 'Mathematics ______ one of the core matriculation requirements for engineering faculties.',
    options: { A: 'is', B: 'are', C: 'were', D: 'have been' },
    answer: 'A',
    explanation: 'Academic subjects ending in -s (Mathematics, Physics, Economics) are singular in meaning and take singular verbs. (A-Z OF ENGLISH, Chapter 1).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 44'
  },
  {
    topic: 'Tenses: Past Perfect Continuous',
    text: 'By the time the dean arrived at the faculty board room, the senators ______ for over two hours.',
    options: { A: 'had been deliberating', B: 'have been deliberating', C: 'were deliberating', D: 'deliberated' },
    answer: 'A',
    explanation: 'An action ongoing prior to another specific event in the past requires the past perfect continuous tense ("had been deliberating"). (A-Z OF ENGLISH, Chapter 2).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 68'
  },
  {
    topic: 'Subjunctive: "It is high time"',
    text: 'It is high time we ______ preparation for the national UTME examination.',
    options: { A: 'commenced', B: 'commence', C: 'should commence', D: 'have commenced' },
    answer: 'A',
    explanation: 'The idiomatic expression "it is high time" is strictly followed by a past tense verb ("commenced") to convey subjunctive urgency. (A-Z OF ENGLISH, Chapter 2).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 70'
  },
  // Additional Oral English
  {
    topic: 'Oral English: Vowel Contrasts (/u:/ vs /ʊ/)',
    text: 'Which word contains the vowel sound /u:/ as in "f<u>oo</u>d"?',
    options: { A: 'Rude', B: 'Foot', C: 'Cook', D: 'Book' },
    answer: 'A',
    explanation: '"Rude" is pronounced /ru:d/ with the long back close vowel /u:/. "Foot", "cook", and "book" all contain the short vowel /ʊ/. (A-Z OF ENGLISH, Chapter 9).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 280'
  },
  {
    topic: 'Oral English: Silent Consonants',
    text: 'In which of the following words is the letter "k" silent?',
    options: { A: 'Knight', B: 'Kangaroo', C: 'Kitchen', D: 'Kettle' },
    answer: 'A',
    explanation: 'In "knight" (/naɪt/), the initial "k" is an orthographic silent letter before "n". (A-Z OF ENGLISH, Chapter 10).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 308'
  },
  {
    topic: 'Oral English: Word Stress on Verbs Ending in -ate',
    text: 'Where does the primary stress fall in the trisyllabic verb "INVESTIGATE"?',
    options: { A: 'in-VES-tigate (second syllable)', B: 'IN-vestigate (first syllable)', C: 'inves-TI-gate (third syllable)', D: 'investi-GATE (fourth syllable)' },
    answer: 'A',
    explanation: 'Polysyllabic verbs ending in -ate are stressed on the antepenultimate syllable (third syllable from end): in-VES-ti-gate. (A-Z OF ENGLISH, Chapter 11).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 342'
  },
  {
    topic: 'Oral English: Rhymes',
    text: 'Which of the following words rhymes with "DAUGHTER"?',
    options: { A: 'Water', B: 'Laughter', C: 'Faster', D: 'Master' },
    answer: 'A',
    explanation: '"Daughter" (/ˈdɔ:tə/) rhymes with "water" (/ˈwɔ:tə/). "Laughter" has /ɑ:ftə/. (A-Z OF ENGLISH, Chapter 9).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 285'
  },
  {
    topic: 'Idioms: "To turn over a new leaf"',
    text: 'To "turn over a new leaf" means to:',
    options: { A: 'Change one’s behavior for the better', B: 'Browse a new page in a textbook', C: 'Clear forest vegetation for farming', D: 'Discard unwanted study materials' },
    answer: 'A',
    explanation: 'The idiom "turn over a new leaf" signifies reforming one’s conduct and starting afresh with good intentions. (A-Z OF ENGLISH, Chapter 12).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 370'
  },
  // Extensive Question Bank Expansion for Use of English (Concord, Lexis, Synonyms, Antonyms, Oral English, Idioms)
  {
    topic: 'Concord: "The number of" vs "A number of"',
    text: 'The number of successful matriculants in this year’s UTME ______ significantly increased.',
    options: { A: 'has', B: 'have', C: 'are', D: 'were' },
    answer: 'A',
    explanation: '"The number of" takes a singular verb ("has"), whereas "a number of" takes a plural verb. (A-Z OF ENGLISH, Chapter 1, p. 38).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 38'
  },
  {
    topic: 'Concord: "A number of"',
    text: 'A number of candidates ______ already collected their provisional admission letters.',
    options: { A: 'have', B: 'has', C: 'is', D: 'was' },
    answer: 'A',
    explanation: 'The expression "a number of" means several and always requires a plural verb ("have"). (A-Z OF ENGLISH, Chapter 1, p. 39).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 39'
  },
  {
    topic: 'Concord: "Many a"',
    text: 'Many a student ______ fallen victim to examination malpractices due to inadequate preparation.',
    options: { A: 'has', B: 'have', C: 'are', D: 'were' },
    answer: 'A',
    explanation: '"Many a" is strictly followed by a singular countable noun and takes a singular verb ("has fallen"). (A-Z OF ENGLISH, Chapter 1, p. 42).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 42'
  },
  {
    topic: 'Concord: Accompaniment ("Together with")',
    text: 'The Vice-Chancellor, together with the members of the university senate, ______ attending the convocation ceremony.',
    options: { A: 'is', B: 'are', C: 'were', D: 'have been' },
    answer: 'A',
    explanation: 'When a subject is followed by prepositional phrases like "together with", "as well as", or "along with", the verb agrees only with the primary subject ("The Vice-Chancellor", singular). (A-Z OF ENGLISH, Chapter 1, p. 45).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 45'
  },
  {
    topic: 'Concord: "One of those who"',
    text: 'Chinedu is one of those students who ______ always punctual at the morning briefing.',
    options: { A: 'are', B: 'is', C: 'was', D: 'has been' },
    answer: 'A',
    explanation: 'In the construction "one of those who [verb]", the relative pronoun "who" refers back to the plural antecedent "students", demanding a plural verb ("are"). (A-Z OF ENGLISH, Chapter 1, p. 47).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 47'
  },
  {
    topic: 'Concord: "The only one of those who"',
    text: 'He is the only one of the applicants who ______ the required academic credentials.',
    options: { A: 'possesses', B: 'possess', C: 'have possessed', D: 'are possessing' },
    answer: 'A',
    explanation: 'When qualified by "the only one of...", the focus shifts back to the single entity, requiring a singular verb ("possesses"). (A-Z OF ENGLISH, Chapter 1, p. 48).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 48'
  },
  {
    topic: 'Concord: Either... or / Proximity Rule',
    text: 'Either the captain or the crew members ______ responsible for safeguarding the ship’s logbook.',
    options: { A: 'are', B: 'is', C: 'was', D: 'has been' },
    answer: 'A',
    explanation: 'Under the principle of proximity with "either... or", the verb agrees with the closer subject ("crew members", plural), so "are" is correct. (A-Z OF ENGLISH, Chapter 1, p. 33).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 33'
  },
  {
    topic: 'Lexis: Conditional Clause Type 3',
    text: 'If the invigilator had arrived earlier, the examination ______ on schedule.',
    options: { A: 'would have commenced', B: 'will commence', C: 'would commence', D: 'commenced' },
    answer: 'A',
    explanation: 'Third conditional sentences expressing unfulfilled past conditions take past perfect in the if-clause and "would have + past participle" in the main clause. (A-Z OF ENGLISH, Chapter 2, p. 82).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 82'
  },
  {
    topic: 'Lexis: Inversion with Negative Adverbials',
    text: 'Scarcely ______ entered the lecture hall when the power supply was disconnected.',
    options: { A: 'had the lecturer', B: 'the lecturer had', C: 'did the lecturer', D: 'was the lecturer' },
    answer: 'A',
    explanation: 'When sentences begin with restrictive negative adverbials like "scarcely", "hardly", or "no sooner", subject-auxiliary inversion is mandatory ("had the lecturer entered... when"). (A-Z OF ENGLISH, Chapter 2, p. 88).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 88'
  },
  {
    topic: 'Lexis: Question Tags',
    text: 'Candidates hardly ever read the instruction leaflet before the test, ______?',
    options: { A: 'do they', B: 'don’t they', C: 'did they', D: 'haven’t they' },
    answer: 'A',
    explanation: '"Hardly ever" has a negative sense, requiring an affirmative question tag in the simple present tense ("do they?"). (A-Z OF ENGLISH, Chapter 2, p. 94).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 94'
  },
  {
    topic: 'Lexis: Prepositions with "Prefer"',
    text: 'Most medical aspirants prefer studying at Ahmadu Bello University ______ other private universities.',
    options: { A: 'to', B: 'than', C: 'more than', D: 'above' },
    answer: 'A',
    explanation: 'The verb "prefer" is strictly followed by the preposition "to" (never "than"). (A-Z OF ENGLISH, Chapter 5, p. 156).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 156'
  },
  {
    topic: 'Lexis: Prepositions with "Congratulate"',
    text: 'The principal congratulated the overall best graduating student ______ his stellar performance.',
    options: { A: 'on', B: 'for', C: 'at', D: 'with' },
    answer: 'A',
    explanation: 'The standard collocation is "congratulate someone ON something" (not "for"). (A-Z OF ENGLISH, Chapter 5, p. 159).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 159'
  },
  {
    topic: 'Lexis: Prepositions with "Devoid"',
    text: 'The suspect’s explanation was completely devoid ______ any factual evidence.',
    options: { A: 'of', B: 'from', C: 'with', D: 'in' },
    answer: 'A',
    explanation: 'The adjective "devoid" always collocates with the preposition "of". (A-Z OF ENGLISH, Chapter 5, p. 164).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 164'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The general made a METICULOUS inspection of the defense facilities."',
    options: { A: 'Painstaking', B: 'Casual', C: 'Superficial', D: 'Hurried' },
    answer: 'A',
    explanation: '"Meticulous" means showing great attention to detail; very careful and precise. The synonym is "painstaking". (A-Z OF ENGLISH, Chapter 3, p. 116).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 116'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The lawyer gave a PRAGMATIC solution to the contentious boundary dispute."',
    options: { A: 'Practical', B: 'Theoretical', C: 'Unrealistic', D: 'Complicated' },
    answer: 'A',
    explanation: '"Pragmatic" deals with things sensibly and realistically based on practical considerations. (A-Z OF ENGLISH, Chapter 3, p. 118).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 118'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "His AUDACIOUS maneuver stunned the opposing chess grandmaster."',
    options: { A: 'Daring', B: 'Cowardly', C: 'Timid', D: 'Careful' },
    answer: 'A',
    explanation: '"Audacious" means showing a willingness to take surprisingly bold risks; nearest in meaning is "daring". (A-Z OF ENGLISH, Chapter 3, p. 120).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 120'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The new governor is known to be a BENEVOLENT patron of educational charities."',
    options: { A: 'Kindhearted', B: 'Hostile', C: 'Miserly', D: 'Selfish' },
    answer: 'A',
    explanation: '"Benevolent" means well meaning, generous, and kindly; nearest in meaning is "kindhearted". (A-Z OF ENGLISH, Chapter 3, p. 122).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 122'
  },
  {
    topic: 'Synonyms: Nearest in Meaning',
    text: 'Choose the option nearest in meaning to the capitalized word: "The accountant was accused of FABRICATING financial statements."',
    options: { A: 'Forging', B: 'Auditing', C: 'Publishing', D: 'Preserving' },
    answer: 'A',
    explanation: '"Fabricating" in this context signifies inventing or producing something false in order to deceive; nearest in meaning is "forging". (A-Z OF ENGLISH, Chapter 3, p. 124).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 124'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the capitalized word: "The witness gave a PLAUSIBLE account of what transpired at the crossroads."',
    options: { A: 'Incredible', B: 'Believable', C: 'Reasonable', D: 'Convincing' },
    answer: 'A',
    explanation: '"Plausible" means seemingly reasonable or probable. The direct antonym is "incredible" (hard to believe). (A-Z OF ENGLISH, Chapter 4, p. 142).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 142'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the capitalized word: "The retired army general lived in an AFFLUENT residential estate."',
    options: { A: 'Impoverished', B: 'Wealthy', C: 'Prosperous', D: 'Opulent' },
    answer: 'A',
    explanation: '"Affluent" means having a great deal of money or wealthy; the direct opposite is "impoverished". (A-Z OF ENGLISH, Chapter 4, p. 144).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 144'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the capitalized word: "The students found the trek across the rugged mountain ARDUOUS."',
    options: { A: 'Effortless', B: 'Strenuous', C: 'Exhausting', D: 'Demanding' },
    answer: 'A',
    explanation: '"Arduous" means involving or requiring strenuous effort; difficult and tiring. Its direct antonym is "effortless" or "easy". (A-Z OF ENGLISH, Chapter 4, p. 146).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 146'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the capitalized word: "The high court judge decided to EXONERATE the wrongly accused youth."',
    options: { A: 'Convict', B: 'Acquit', C: 'Absolve', D: 'Pardon' },
    answer: 'A',
    explanation: '"Exonerate" means to officially absolve someone from blame or fault. The opposite is "convict" (declare someone guilty). (A-Z OF ENGLISH, Chapter 4, p. 148).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 148'
  },
  {
    topic: 'Antonyms: Opposites in Meaning',
    text: 'Choose the option opposite in meaning to the capitalized word: "She was praised by her colleagues for being FRUGAL in managing company finances."',
    options: { A: 'Extravagant', B: 'Economical', C: 'Prudent', D: 'Thrifty' },
    answer: 'A',
    explanation: '"Frugal" means sparing or economical with regard to money. The opposite is "extravagant" or "wasteful". (A-Z OF ENGLISH, Chapter 4, p. 150).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 150'
  },
  {
    topic: 'Oral English: Vowel Contrasts (/i:/ vs /ɪ/)',
    text: 'Which of the following words contains the short vowel sound /ɪ/ as in "sit"?',
    options: { A: 'Gym', B: 'Scene', C: 'Meat', D: 'Field' },
    answer: 'A',
    explanation: '"Gym" is pronounced /dʒɪm/ with the short close front unrounded vowel /ɪ/. "Scene", "meat", and "field" all contain the long vowel /i:/. (A-Z OF ENGLISH, Chapter 9, p. 282).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 282'
  },
  {
    topic: 'Oral English: Consonant Contrasts (/θ/ vs /ð/)',
    text: 'In which of the following words is the underlined "th" pronounced as the voiceless dental fricative /θ/?',
    options: { A: '<u>Th</u>ought', B: '<u>Th</u>is', C: '<u>Th</u>ose', D: 'Fa<u>th</u>er' },
    answer: 'A',
    explanation: '"Thought" (/θɔ:t/) contains the voiceless dental fricative /θ/. In "this", "those", and "father", the "th" is voiced (/ð/). (A-Z OF ENGLISH, Chapter 10, p. 312).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 312'
  },
  {
    topic: 'Oral English: Silent Consonants (Letter "p")',
    text: 'In which of the following words is the consonant "p" silent in standard pronunciation?',
    options: { A: 'Receipt', B: 'Receptacle', C: 'Recipient', D: 'Reception' },
    answer: 'A',
    explanation: 'In "receipt" (/rɪˈsi:t/), the letter "p" is completely silent. In the other options, the /p/ sound is voiced. (A-Z OF ENGLISH, Chapter 10, p. 318).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 318'
  },
  {
    topic: 'Oral English: Stress on Suffix -tion',
    text: 'Which syllable carries the primary stress in the word "EXAMINATION"?',
    options: { A: 'exami-NA-tion (penultimate syllable)', B: 'ex-A-mination', C: 'EX-amination', D: 'examin-a-TION' },
    answer: 'A',
    explanation: 'English words ending in the suffix -tion or -sion consistently carry primary stress on the penultimate syllable (the syllable directly preceding the suffix): exami-NA-tion. (A-Z OF ENGLISH, Chapter 11, p. 346).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 346'
  },
  {
    topic: 'Idioms: "To bite the bullet"',
    text: 'The idiomatic expression "to bite the bullet" means to:',
    options: { A: 'Face an unavoidable unpleasant situation with courage', B: 'Participate in military shooting drills', C: 'Accidentally swallow a hard object', D: 'Retaliate against an enemy fiercely' },
    answer: 'A',
    explanation: '"To bite the bullet" means to endure a painful or otherwise unpleasant situation that is seen as unavoidable. (A-Z OF ENGLISH, Chapter 12, p. 372).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 372'
  },
  {
    topic: 'Idioms: "A blessing in disguise"',
    text: 'An apparent misfortune that eventually results in an unexpected good outcome is called:',
    options: { A: 'A blessing in disguise', B: 'A bolt from the blue', C: 'A storm in a teacup', D: 'A white elephant' },
    answer: 'A',
    explanation: '"A blessing in disguise" is something that appears bad or unfortunate at first, but turns out to produce beneficial results. (A-Z OF ENGLISH, Chapter 12, p. 374).',
    bookTitle: 'A-Z OF ENGLISH', author: 'B.O. Dele Ashade', textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade, p. 374'
  }
];

// Helper to pull 15 distinct questions strictly from "The Lekki Headmaster" by Kabir Alabi Garba
// Filters against previous tests and guarantees zero duplicates in the current session
export function getPrescribedNovelQuestions(
  count: number = 15,
  seed: number = 2026,
  excludeTexts?: Set<string>,
  sessionUsedTexts?: Set<string>
): VerifiedQuestion[] {
  const localTexts = sessionUsedTexts || new Set<string>();
  const excluded = excludeTexts || new Set<string>();

  // Strictly filter for "The Lekki Headmaster" by Kabir Alabi Garba (exclude all other novels)
  const lekkiQuestions = NOVEL_EXAM_QUESTIONS.filter(
    (q) => q.novel === 'The Lekki Headmaster'
  );

  // Deterministic shuffle of The Lekki Headmaster questions based on seed
  const candidatePool = [...lekkiQuestions];
  for (let i = candidatePool.length - 1; i > 0; i--) {
    const j = Math.abs((seed * (i + 13)) % (i + 1));
    [candidatePool[i], candidatePool[j]] = [candidatePool[j], candidatePool[i]];
  }

  const picked: VerifiedQuestion[] = [];
  const authorName = 'Kabir Alabi Garba';

  // Pass 1: Draw strictly from The Lekki Headmaster, prioritizing questions unseen in previous tests
  for (let i = 0; i < candidatePool.length && picked.length < count; i++) {
    const nq = candidatePool[i];
    const core = nq.question.trim().toLowerCase();

    if (!localTexts.has(core) && !excluded.has(core)) {
      localTexts.add(core);
      const qNum = picked.length + 1;

      picked.push({
        id: 950000 + (seed * 10) + qNum,
        year: seed,
        questionNumber: qNum,
        subject: 'Use of English',
        topic: 'Prescribed Novel: "The Lekki Headmaster"',
        text: `[JAMB UTME Q${qNum} · Prescribed Novel: "The Lekki Headmaster"] ${nq.question}`,
        options: nq.options,
        answer: nq.answer,
        explanation: `${nq.explanation} (Official Prescribed Novel: "The Lekki Headmaster" by ${authorName}).`,
        bookTitle: 'The Lekki Headmaster',
        author: authorName,
        textbookRef: `"The Lekki Headmaster" by ${authorName}`,
      });
    }
  }

  // Pass 2: If pool of unseen questions is exhausted, draw remaining strictly from The Lekki Headmaster
  // while STILL STRICTLY GUARANTEEING ZERO DUPLICATES IN THIS SESSION (and never from other novels)
  if (picked.length < count) {
    for (let i = 0; i < candidatePool.length && picked.length < count; i++) {
      const nq = candidatePool[i];
      const core = nq.question.trim().toLowerCase();
      if (!localTexts.has(core)) {
        localTexts.add(core);
        const qNum = picked.length + 1;

        picked.push({
          id: 950000 + (seed * 10) + qNum,
          year: seed,
          questionNumber: qNum,
          subject: 'Use of English',
          topic: 'Prescribed Novel: "The Lekki Headmaster"',
          text: `[JAMB UTME Q${qNum} · Prescribed Novel: "The Lekki Headmaster"] ${nq.question}`,
          options: nq.options,
          answer: nq.answer,
          explanation: `${nq.explanation} (Official Prescribed Novel: "The Lekki Headmaster" by ${authorName}).`,
          bookTitle: 'The Lekki Headmaster',
          author: authorName,
          textbookRef: `"The Lekki Headmaster" by ${authorName}`,
        });
      }
    }
  }

  return picked;
}

// Helper to pull 45 distinct questions from General English Bank
// 100% Evenly Diversified Across ALL Core English Topics:
// 1. Grammatical Concord & Agreement
// 2. Tenses, Modals & Conditional Clauses
// 3. Prepositions & Phrasal Verbs
// 4. Synonyms (Nearest in Meaning)
// 5. Antonyms (Opposites in Meaning)
// 6. Oral English (Vowel Contrasts, Consonants, Silent Letters & Stress)
// 7. Idiomatic Expressions & Figurative Language
// Filters against previous tests and guarantees zero duplicates in the current session
export function getGeneralEnglishQuestions(
  count: number = 45,
  seed: number = 2026,
  excludeTexts?: Set<string>,
  sessionUsedTexts?: Set<string>
): VerifiedQuestion[] {
  const localTexts = sessionUsedTexts || new Set<string>();
  const excluded = excludeTexts || new Set<string>();

  // Classify questions into standard UTME English topic buckets
  const buckets: { name: string; items: typeof ENGLISH_GENERAL_BANK }[] = [
    { name: 'Concord', items: [] },
    { name: 'Tenses', items: [] },
    { name: 'Prepositions', items: [] },
    { name: 'Synonyms', items: [] },
    { name: 'Antonyms', items: [] },
    { name: 'Oral English', items: [] },
    { name: 'Idioms', items: [] },
    { name: 'General Lexis', items: [] },
  ];

  ENGLISH_GENERAL_BANK.forEach((q) => {
    const t = q.topic.toLowerCase();
    if (t.includes('concord') || t.includes('agreement') || t.includes('neither') || t.includes('number of')) {
      buckets[0].items.push(q);
    } else if (t.includes('tense') || t.includes('conditional') || t.includes('modal') || t.includes('subjunctive')) {
      buckets[1].items.push(q);
    } else if (t.includes('preposition') || t.includes('phrasal') || t.includes('collocation') || t.includes('prefer') || t.includes('devoid')) {
      buckets[2].items.push(q);
    } else if (t.includes('synonym') || t.includes('nearest')) {
      buckets[3].items.push(q);
    } else if (t.includes('antonym') || t.includes('opposite')) {
      buckets[4].items.push(q);
    } else if (t.includes('oral') || t.includes('vowel') || t.includes('consonant') || t.includes('stress') || t.includes('rhyme') || t.includes('silent')) {
      buckets[5].items.push(q);
    } else if (t.includes('idiom') || t.includes('expression') || t.includes('figurative')) {
      buckets[6].items.push(q);
    } else {
      buckets[7].items.push(q);
    }
  });

  // Shuffle items within each bucket deterministically
  buckets.forEach((b, bIdx) => {
    for (let i = b.items.length - 1; i > 0; i--) {
      const j = Math.abs((seed * (i + 17 + bIdx * 5)) % (i + 1));
      [b.items[i], b.items[j]] = [b.items[j], b.items[i]];
    }
  });

  const picked: VerifiedQuestion[] = [];

  // Pass 1: Round-robin across all 8 topic buckets to guarantee 100% topic diversification!
  for (let step = 0; step < count * 3 && picked.length < count; step++) {
    const bucket = buckets[step % buckets.length];
    const unseenItem = bucket.items.find((item) => {
      const core = item.text.trim().toLowerCase();
      return !localTexts.has(core) && !excluded.has(core);
    });

    if (unseenItem) {
      const core = unseenItem.text.trim().toLowerCase();
      localTexts.add(core);
      const qNum = 15 + picked.length + 1; // Numbered 16 to 60
      picked.push({
        id: 960000 + (seed * 10) + qNum,
        year: seed,
        questionNumber: qNum,
        subject: 'Use of English',
        topic: unseenItem.topic,
        text: `[JAMB UTME Q${qNum}] ${unseenItem.text}`,
        options: unseenItem.options,
        answer: unseenItem.answer,
        explanation: unseenItem.explanation,
        bookTitle: unseenItem.bookTitle,
        author: unseenItem.author,
        textbookRef: unseenItem.textbookRef,
      });
    }
  }

  // Pass 2: If pool of unseen questions is exhausted, fill remaining while STRICTLY GUARANTEEING ZERO DUPLICATES IN THIS SESSION
  if (picked.length < count) {
    const allGeneral = [...ENGLISH_GENERAL_BANK];
    for (let i = 0; i < allGeneral.length && picked.length < count; i++) {
      const item = allGeneral[i];
      const core = item.text.trim().toLowerCase();
      if (!localTexts.has(core)) {
        localTexts.add(core);
        const qNum = 15 + picked.length + 1;
        picked.push({
          id: 960000 + (seed * 10) + qNum,
          year: seed,
          questionNumber: qNum,
          subject: 'Use of English',
          topic: item.topic,
          text: `[JAMB UTME Q${qNum}] ${item.text}`,
          options: item.options,
          answer: item.answer,
          explanation: item.explanation,
          bookTitle: item.bookTitle,
          author: item.author,
          textbookRef: item.textbookRef,
        });
      }
    }
  }

  return picked;
}

function scatterBankQuestionOptions(
  question: VerifiedQuestion,
  seed?: number
): VerifiedQuestion {
  const letters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const rawAns = (question.answer || 'A').toUpperCase();
  const originalAnswer = (['A', 'B', 'C', 'D'].includes(rawAns) ? rawAns : 'A') as 'A' | 'B' | 'C' | 'D';

  const entries = letters.map((l) => ({
    text: question.options[l] || '',
    isCorrect: l === originalAnswer,
  }));

  const randomFunc = typeof seed === 'number' && !isNaN(seed)
    ? (() => {
        let a = (Math.floor(seed) ^ 0x5deece66) | 0;
        return () => {
          a = (a + 0x9e3779b9) | 0;
          let t = a ^ (a >>> 16);
          t = Math.imul(t, 0x21f0aaad);
          t = t ^ (t >>> 15);
          t = Math.imul(t, 0x735a2d97);
          return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
        };
      })()
    : Math.random;

  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(randomFunc() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }

  const correctIndex = entries.findIndex((e) => e.isCorrect);
  return {
    ...question,
    options: {
      A: entries[0].text,
      B: entries[1].text,
      C: entries[2].text,
      D: entries[3].text,
    },
    answer: letters[correctIndex >= 0 ? correctIndex : 0],
  };
}

// Combines 15 novel questions and 45 normal English questions to guarantee EXACTLY 60 questions for Use of English
export function getCompleteEnglishSection(
  count: number = 60,
  seed: number = 2026,
  excludeTexts?: Set<string>,
  sessionUsedTexts?: Set<string>
): VerifiedQuestion[] {
  const localTexts = sessionUsedTexts || new Set<string>();
  const novelCount = count >= 60 ? 15 : Math.max(5, Math.round(count * 0.25));
  const generalCount = count - novelCount;

  const novelQuestions = getPrescribedNovelQuestions(novelCount, seed, excludeTexts, localTexts);
  const generalQuestions = getGeneralEnglishQuestions(generalCount, seed + 1, excludeTexts, localTexts);

  const combined = [...novelQuestions, ...generalQuestions];
  return combined.slice(0, count).map((q, idx) => {
    const qWithNum: VerifiedQuestion = {
      ...q,
      questionNumber: idx + 1,
      text: `[JAMB UTME Q${idx + 1}] ${q.text.replace(/^\[JAMB UTME Q\d+\s*·?[^\]]*\]\s*/i, '')}`,
    };
    return scatterBankQuestionOptions(qWithNum, seed * 100 + (q.id || idx) * 19 + idx * 7);
  });
}
