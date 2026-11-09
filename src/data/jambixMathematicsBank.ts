/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX MATHEMATICS QUESTION BANK
 * QUESTIONS 1–100: TOUGH QUESTIONS ACROSS ALL TOPICS
 * QUESTIONS 201–400: 200 CHALLENGING QUESTIONS
 * Indexed directly from official syllabus specifications.
 * QUESTIONS 101–200: 100 TOUGH QUESTIONS (SET 2)
 * Total questions: 420 (including 20 Illustrated Diagram Questions)
 */

export interface JambixMathematicsItem {
  id: string;
  originalChapter: number;
  chapterTitle: string;
  topic: string;
  bookQuestionNum: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  page: number;
  hasImage?: boolean;
  imageUrl?: string;
  imageCaption?: string;
  imageAlt?: string;
  imageSvg?: string;
}

export const JAMBIX_MATHEMATICS_ITEMS: JambixMathematicsItem[] = [
  {
    id: "math_tough_1",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Sets & Venn Diagrams",
    bookQuestionNum: 1,
    text: "In a class of 80 students, 45 offer Biology, 38 offer Chemistry, and 20 offer both subjects. How many students offer neither subject?",
    options: {
      A: "12",
      B: "15",
      C: "17",
      D: "23"
    },
    answer: "C",
    explanation: "Students offering at least one subject = 45 + 38 − 20 = 63. Therefore, neither = 80 − 63 = 17.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_tough_2",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Sets & Venn Diagrams",
    bookQuestionNum: 2,
    text: "If n(A) = 32, n(B) = 27 and n(A ∩ B) = 11, how many elements belong to A only?",
    options: {
      A: "11",
      B: "16",
      C: "21",
      D: "32"
    },
    answer: "C",
    explanation: "A only = n(A) − n(A ∩ B) = 32 − 11 = 21.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_tough_3",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Number Bases",
    bookQuestionNum: 3,
    text: "Express 101101₂ in base ten.",
    options: {
      A: "41",
      B: "43",
      C: "45",
      D: "47"
    },
    answer: "C",
    explanation: "101101₂ = 1(32) + 0(16) + 1(8) + 1(4) + 0(2) + 1 = 45.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_tough_4",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Fractions, Decimals, Approximations & Factors",
    bookQuestionNum: 4,
    text: "Find the lowest common multiple of 72 and 120.",
    options: {
      A: "180",
      B: "240",
      C: "360",
      D: "720"
    },
    answer: "C",
    explanation: "72 = 2³ × 3² and 120 = 2³ × 3 × 5. LCM = 2³ × 3² × 5 = 360.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_tough_5",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Modular Arithmetic & Divisibility",
    bookQuestionNum: 5,
    text: "Find the smallest integer greater than 10 that leaves a remainder of 3 when divided by 5, 6 and 8.",
    options: {
      A: "63",
      B: "83",
      C: "103",
      D: "123"
    },
    answer: "D",
    explanation: "Subtracting 3 must give a multiple of LCM(5, 6, 8) = 120. Hence, the smallest suitable integer is 120 + 3 = 123.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_tough_6",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices & Exponents",
    bookQuestionNum: 6,
    text: "If 4^(x − 1) = 8^(2x − 3), find x.",
    options: {
      A: "1",
      B: "7/4",
      C: "2",
      D: "5/2"
    },
    answer: "B",
    explanation: "Expressing both sides in base 2 gives 2^(2x−2) = 2^(6x−9). Thus, 2x − 2 = 6x − 9, so 4x = 7 and x = 7/4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_tough_7",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Logarithms",
    bookQuestionNum: 7,
    text: "Solve log₂(x − 1) + log₂(x − 3) = 3.",
    options: {
      A: "−1",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "D",
    explanation: "The domain requires x > 3. Combining the logarithms gives (x − 1)(x − 3) = 8. Thus, x² − 4x − 5 = 0, giving x = 5 or −1. Only 5 satisfies the domain.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_tough_8",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Logarithms",
    bookQuestionNum: 8,
    text: "Evaluate log₃ 81 − log₃ √3.",
    options: {
      A: "3/2",
      B: "5/2",
      C: "7/2",
      D: "9/2"
    },
    answer: "C",
    explanation: "log₃ 81 = 4 and log₃ √3 = 1/2. Therefore, the answer is 4 − 1/2 = 7/2.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_tough_9",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Logarithms",
    bookQuestionNum: 9,
    text: "Given that log₁₀ 2 = 0.3010, evaluate log₁₀ 5.",
    options: {
      A: "0.3010",
      B: "0.5000",
      C: "0.6990",
      D: "1.3010"
    },
    answer: "C",
    explanation: "log₁₀ 2 + log₁₀ 5 = log₁₀ 10 = 1. Therefore, log₁₀ 5 = 1 − 0.3010 = 0.6990.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_tough_10",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices & Exponents",
    bookQuestionNum: 10,
    text: "If 3^(2x − 1) = 27^(x − 2), find x.",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "C",
    explanation: "Since 27 = 3³, equate exponents: 2x − 1 = 3x − 6. Hence, x = 5.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_tough_11",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Surds",
    bookQuestionNum: 11,
    text: "Rationalise the denominator of 4/(√5 − √2).",
    options: {
      A: "4(√5 − √2)/3",
      B: "4(√5 + √2)/3",
      C: "2(√5 + √2)/3",
      D: "√5 + √2"
    },
    answer: "B",
    explanation: "Multiply numerator and denominator by √5 + √2. The denominator becomes 5 − 2 = 3.",
    page: 2,
    hasImage: false
  },
  {
    id: "math_tough_12",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Surds",
    bookQuestionNum: 12,
    text: "Simplify √50 − 2√8 + √18.",
    options: {
      A: "2√2",
      B: "3√2",
      C: "4√2",
      D: "6√2"
    },
    answer: "C",
    explanation: "√50 = 5√2, √8 = 2√2 and √18 = 3√2. Therefore, 5√2 − 4√2 + 3√2 = 4√2.",
    page: 2,
    hasImage: false
  },
  {
    id: "math_tough_13",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Commercial & Financial Mathematics",
    bookQuestionNum: 13,
    text: "The price of an item increases by 20% and subsequently decreases by 20%. What is the overall percentage change?",
    options: {
      A: "No change",
      B: "2% decrease",
      C: "4% decrease",
      D: "4% increase"
    },
    answer: "C",
    explanation: "If the original price is 100, the new price is 100 × 1.2 × 0.8 = 96. The overall change is a 4% decrease.",
    page: 2,
    hasImage: false
  },
  {
    id: "math_tough_14",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Commercial & Financial Mathematics",
    bookQuestionNum: 14,
    text: "Find the compound amount on ₦20,000 invested at 10% per annum for two years, compounded annually.",
    options: {
      A: "₦22,000",
      B: "₦24,000",
      C: "₦24,200",
      D: "₦24,400"
    },
    answer: "C",
    explanation: "Amount = P(1 + r)ⁿ = 20,000(1.1)² = ₦24,200.",
    page: 2,
    hasImage: false
  },
  {
    id: "math_tough_15",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Commercial & Financial Mathematics",
    bookQuestionNum: 15,
    text: "An article is marked 25% above its cost price and then sold at a 10% discount on the marked price. Find the profit percentage.",
    options: {
      A: "10%",
      B: "12.5%",
      C: "15%",
      D: "22.5%"
    },
    answer: "B",
    explanation: "Let the cost price be ₦100. Marked price = ₦125. Selling price = 125 × 0.9 = ₦112.50. Profit = 12.5%.",
    page: 2,
    hasImage: false
  },
  {
    id: "math_tough_16",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Rates, Ratios & Proportions",
    bookQuestionNum: 16,
    text: "A car travels 60 km at 30 km/h and another 60 km at 60 km/h. Find its average speed for the entire journey.",
    options: {
      A: "30 km/h",
      B: "35 km/h",
      C: "40 km/h",
      D: "45 km/h"
    },
    answer: "C",
    explanation: "Total distance = 120 km. Total time = 60/30 + 60/60 = 3 hours. Average speed = 120/3 = 40 km/h.",
    page: 2,
    hasImage: false
  },
  {
    id: "math_tough_17",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 17,
    text: "The fifth term of an arithmetic progression is 18 and the twelfth term is 46. Find the twentieth term.",
    options: {
      A: "70",
      B: "74",
      C: "78",
      D: "82"
    },
    answer: "C",
    explanation: "a + 4d = 18 and a + 11d = 46. Therefore, 7d = 28 and d = 4. Hence, a = 2 and T₂₀ = 2 + 19(4) = 78.",
    page: 2,
    hasImage: false
  },
  {
    id: "math_tough_18",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 18,
    text: "The third term of a geometric progression is 12 and the sixth term is 96. If the common ratio is positive, find the first term.",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "6"
    },
    answer: "B",
    explanation: "T₆/T₃ = r³ = 96/12 = 8. Thus, r = 2. Since ar² = 12, a = 12/4 = 3.",
    page: 2,
    hasImage: false
  },
  {
    id: "math_tough_19",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 19,
    text: "How many terms of the arithmetic progression 3, 7, 11, 15, ... have a sum of 210?",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "12"
    },
    answer: "C",
    explanation: "Sₙ = n/2[2(3) + (n − 1)4] = n(2n + 1). Thus, n(2n + 1) = 210, giving 2n² + n − 210 = 0. The positive solution is n = 10.",
    page: 2,
    hasImage: false
  },
  {
    id: "math_tough_20",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 20,
    text: "How many terms of the geometric progression 3, 6, 12, 24, ... are required for the sum to be 189?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8"
    },
    answer: "B",
    explanation: "Sₙ = 3(2ⁿ − 1). Therefore, 3(2ⁿ − 1) = 189, so 2ⁿ = 64 and n = 6.",
    page: 2,
    hasImage: false
  },
  {
    id: "math_tough_21",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebra: Quadratic Equations",
    bookQuestionNum: 21,
    text: "Solve x² − 7x + 10 = 0.",
    options: {
      A: "x = 1 or 10",
      B: "x = 2 or 5",
      C: "x = −2 or −5",
      D: "x = 3 or 4"
    },
    answer: "B",
    explanation: "Factorising gives (x − 2)(x − 5) = 0.",
    page: 3,
    hasImage: false
  },
  {
    id: "math_tough_22",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebra: Quadratic Equations",
    bookQuestionNum: 22,
    text: "Solve 2x² − 5x − 3 = 0.",
    options: {
      A: "x = 3 or −1/2",
      B: "x = −3 or 1/2",
      C: "x = 1 or −3",
      D: "x = 5 or −3"
    },
    answer: "A",
    explanation: "Factorise as (2x + 1)(x − 3) = 0.",
    page: 3,
    hasImage: false
  },
  {
    id: "math_tough_23",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebra: Quadratic Equations",
    bookQuestionNum: 23,
    text: "Find the sum of the roots of 3x² − 7x + 2 = 0.",
    options: {
      A: "−7/3",
      B: "−2/3",
      C: "2/3",
      D: "7/3"
    },
    answer: "D",
    explanation: "For ax² + bx + c = 0, sum of roots = −b/a = 7/3.",
    page: 3,
    hasImage: false
  },
  {
    id: "math_tough_24",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Polynomials & Remainder Theorem",
    bookQuestionNum: 24,
    text: "The polynomial P(x) = 2x³ − 3x² + kx + 4 is divisible by (x − 2). Find k.",
    options: {
      A: "−8",
      B: "−4",
      C: "2",
      D: "4"
    },
    answer: "B",
    explanation: "By the factor theorem, P(2) = 0. Thus, 16 − 12 + 2k + 4 = 0, giving 8 + 2k = 0 and k = −4.",
    page: 3,
    hasImage: false
  },
  {
    id: "math_tough_25",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Polynomials & Remainder Theorem",
    bookQuestionNum: 25,
    text: "Find the roots of x³ − 4x² + x + 6 = 0.",
    options: {
      A: "−1, 2, 3",
      B: "1, −2, 3",
      C: "−1, −2, 3",
      D: "1, 2, −3"
    },
    answer: "A",
    explanation: "Factorising gives (x − 2)(x − 3)(x + 1) = 0.",
    page: 3,
    hasImage: false
  },
  {
    id: "math_tough_26",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Partial Fractions",
    bookQuestionNum: 26,
    text: "Express 1/(x² − 1) in partial fractions.",
    options: {
      A: "1/[2(x − 1)] + 1/[2(x + 1)]",
      B: "1/[2(x − 1)] − 1/[2(x + 1)]",
      C: "1/(x − 1) − 1/(x + 1)",
      D: "2/(x − 1) + 2/(x + 1)"
    },
    answer: "B",
    explanation: "Since x² − 1 = (x − 1)(x + 1), resolving the fraction gives the stated expression.",
    page: 3,
    hasImage: false
  },
  {
    id: "math_tough_27",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Equations & Inequalities",
    bookQuestionNum: 27,
    text: "Solve |2x − 3| = 7.",
    options: {
      A: "x = 5 or −2",
      B: "x = 2 or −5",
      C: "x = 5 or 2",
      D: "x = −5 or −2"
    },
    answer: "A",
    explanation: "Either 2x − 3 = 7, giving x = 5, or 2x − 3 = −7, giving x = −2.",
    page: 3,
    hasImage: false
  },
  {
    id: "math_tough_28",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebraic Fractions",
    bookQuestionNum: 28,
    text: "Simplify (x² − 9)/(x² − 3x), stating the restrictions on x.",
    options: {
      A: "(x − 3)/x, x ≠ 0",
      B: "(x + 3)/x, x ≠ 0, 3",
      C: "(x + 3)/(x − 3), x ≠ 3",
      D: "(x − 3)/(x + 3), x ≠ −3"
    },
    answer: "B",
    explanation: "Factorising and cancelling gives (x − 3)(x + 3)/[x(x − 3)] = (x + 3)/x. The original denominator requires x ≠ 0 and x ≠ 3.",
    page: 3,
    hasImage: false
  },
  {
    id: "math_tough_29",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebraic Identities",
    bookQuestionNum: 29,
    text: "If x + y = 7 and xy = 10, find x² + y².",
    options: {
      A: "19",
      B: "29",
      C: "39",
      D: "49"
    },
    answer: "B",
    explanation: "x² + y² = (x + y)² − 2xy = 49 − 20 = 29.",
    page: 3,
    hasImage: false
  },
  {
    id: "math_tough_30",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebra: Quadratic Equations",
    bookQuestionNum: 30,
    text: "If α and β are the roots of x² − 4x + 1 = 0, find α² + β².",
    options: {
      A: "10",
      B: "12",
      C: "14",
      D: "16"
    },
    answer: "C",
    explanation: "α + β = 4 and αβ = 1. Hence, α² + β² = (α + β)² − 2αβ = 16 − 2 = 14.",
    page: 3,
    hasImage: false
  },
  {
    id: "math_tough_31",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Simultaneous Equations",
    bookQuestionNum: 31,
    text: "Solve simultaneously: x + 2y = 8 and 3x − y = 3.",
    options: {
      A: "x = 1, y = 3",
      B: "x = 2, y = 3",
      C: "x = 3, y = 2",
      D: "x = 4, y = 2"
    },
    answer: "B",
    explanation: "From the second equation, y = 3x − 3. Substituting into the first gives 7x = 14, so x = 2 and y = 3.",
    page: 4,
    hasImage: false
  },
  {
    id: "math_tough_32",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Inequalities",
    bookQuestionNum: 32,
    text: "Solve the inequality 3x − 5 < 10.",
    options: {
      A: "x < 3",
      B: "x < 5",
      C: "x > 5",
      D: "x > 3"
    },
    answer: "B",
    explanation: "3x − 5 < 10 gives 3x < 15, hence x < 5.",
    page: 4,
    hasImage: false
  },
  {
    id: "math_tough_33",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Inequalities",
    bookQuestionNum: 33,
    text: "Find the range of x for which x² − 5x + 6 < 0.",
    options: {
      A: "x < 2",
      B: "x > 3",
      C: "2 < x < 3",
      D: "x < 2 or x > 3"
    },
    answer: "C",
    explanation: "Factorise as (x − 2)(x − 3) < 0. The expression is negative between its roots.",
    page: 4,
    hasImage: false
  },
  {
    id: "math_tough_34",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Inequalities",
    bookQuestionNum: 34,
    text: "Find the solution set satisfying both 2x + 1 ≤ 5 and x − 2 > −1.",
    options: {
      A: "x ≤ 1",
      B: "1 < x ≤ 2",
      C: "1 ≤ x < 2",
      D: "x > 2"
    },
    answer: "B",
    explanation: "The first inequality gives x ≤ 2; the second gives x > 1. Their intersection is 1 < x ≤ 2.",
    page: 4,
    hasImage: false
  },
  {
    id: "math_tough_35",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 35,
    text: "y varies directly as the square of x and inversely as z. If y = 12 when x = 2 and z = 3, find y when x = 4 and z = 6.",
    options: {
      A: "12",
      B: "18",
      C: "24",
      D: "36"
    },
    answer: "C",
    explanation: "y = kx²/z. Using the first values gives 12 = 4k/3, so k = 9. Therefore, y = 9(16)/6 = 24.",
    page: 4,
    hasImage: false
  },
  {
    id: "math_tough_36",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 36,
    text: "y varies directly as x. If y = 15 when x = 4, find y when x = 10.",
    options: {
      A: "25",
      B: "30",
      C: "37.5",
      D: "40"
    },
    answer: "C",
    explanation: "y = kx, so k = 15/4. Therefore, y = (15/4)(10) = 37.5.",
    page: 4,
    hasImage: false
  },
  {
    id: "math_tough_37",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 37,
    text: "The period T of a simple pendulum varies as the square root of its length L. A pendulum of length 1 m has a period of 2 s. Find the period when its length is 2.25 m.",
    options: {
      A: "2.25 s",
      B: "2.5 s",
      C: "3 s",
      D: "4.5 s"
    },
    answer: "C",
    explanation: "T₂/T₁ = √(L₂/L₁) = √2.25 = 1.5. Hence, T₂ = 2 × 1.5 = 3 s.",
    page: 4,
    hasImage: false
  },
  {
    id: "math_tough_38",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 38,
    text: "P varies inversely as the square root of q. If P = 6 when q = 4, find P when q = 9.",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "9"
    },
    answer: "C",
    explanation: "P = k/√q. Since 6 = k/2, k = 12. Therefore, P = 12/3 = 4.",
    page: 4,
    hasImage: false
  },
  {
    id: "math_tough_39",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Functions & Mappings",
    bookQuestionNum: 39,
    text: "If f(x) = 2x² − 3, find f(−2).",
    options: {
      A: "−11",
      B: "1",
      C: "5",
      D: "11"
    },
    answer: "C",
    explanation: "f(−2) = 2(−2)² − 3 = 8 − 3 = 5.",
    page: 4,
    hasImage: false
  },
  {
    id: "math_tough_40",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Functions & Mappings",
    bookQuestionNum: 40,
    text: "If f(x) = 3x − 5, find f⁻¹(x).",
    options: {
      A: "(x − 5)/3",
      B: "(x + 5)/3",
      C: "3x + 5",
      D: "3x − 5"
    },
    answer: "B",
    explanation: "Let y = 3x − 5. Then x = (y + 5)/3. Interchanging x and y gives the inverse.",
    page: 4,
    hasImage: false
  },
  {
    id: "math_tough_41",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Functions & Mappings",
    bookQuestionNum: 41,
    text: "If f(x) = x² + 1 and g(x) = 2x − 3, find f(g(2)).",
    options: {
      A: "1",
      B: "2",
      C: "4",
      D: "5"
    },
    answer: "B",
    explanation: "g(2) = 1. Therefore, f(g(2)) = f(1) = 1² + 1 = 2.",
    page: 5,
    hasImage: false
  },
  {
    id: "math_tough_42",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Matrices & Determinants",
    bookQuestionNum: 42,
    text: "Find the determinant of the matrix [[2, 3], [1, 4]].",
    options: {
      A: "3",
      B: "5",
      C: "8",
      D: "11"
    },
    answer: "B",
    explanation: "Determinant = (2 × 4) − (3 × 1) = 5.",
    page: 5,
    hasImage: false
  },
  {
    id: "math_tough_43",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Matrices & Determinants",
    bookQuestionNum: 43,
    text: "Find the inverse of the matrix [[2, 1], [5, 3]].",
    options: {
      A: "[[3, −1], [−5, 2]]",
      B: "[[3, 1], [5, 2]]",
      C: "[[2, −1], [−5, 3]]",
      D: "[[−3, 1], [5, −2]]"
    },
    answer: "A",
    explanation: "The determinant is 2(3) − 1(5) = 1. The inverse is therefore [[3, −1], [−5, 2]].",
    page: 5,
    hasImage: false
  },
  {
    id: "math_tough_44",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Vectors in 2D",
    bookQuestionNum: 44,
    text: "Find the magnitude of the vector 3i − 4j.",
    options: {
      A: "1",
      B: "5",
      C: "7",
      D: "25"
    },
    answer: "B",
    explanation: "Magnitude = √(3² + (−4)²) = √25 = 5.",
    page: 5,
    hasImage: false
  },
  {
    id: "math_tough_45",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Vectors in 2D",
    bookQuestionNum: 45,
    text: "Given vectors a = i + 2j and b = 2i − j, what is the angle between them?",
    options: {
      A: "0°",
      B: "45°",
      C: "90°",
      D: "180°"
    },
    answer: "C",
    explanation: "Their dot product is (1 × 2) + (2 × −1) = 0. Therefore, the vectors are perpendicular.",
    page: 5,
    hasImage: false
  },
  {
    id: "math_tough_46",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 46,
    text: "Calculate the distance between the points (2, 3) and (−4, −5).",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "12"
    },
    answer: "C",
    explanation: "Distance = √[(-4 − 2)² + (-5 − 3)²] = √(36 + 64) = 10.",
    page: 5,
    hasImage: false
  },
  {
    id: "math_tough_47",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 47,
    text: "Find the midpoint of the line joining (1, −2) and (5, 6).",
    options: {
      A: "(2, 2)",
      B: "(3, 2)",
      C: "(3, 4)",
      D: "(4, 2)"
    },
    answer: "B",
    explanation: "Midpoint = ((1 + 5)/2, (−2 + 6)/2) = (3, 2).",
    page: 5,
    hasImage: false
  },
  {
    id: "math_tough_48",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 48,
    text: "Find the gradient of the line joining (2, 5) and (6, 13).",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    explanation: "Gradient = (13 − 5)/(6 − 2) = 8/4 = 2.",
    page: 5,
    hasImage: false
  },
  {
    id: "math_tough_49",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 49,
    text: "Find the equation of a straight line with gradient 3 passing through (2, −1).",
    options: {
      A: "y = 3x + 7",
      B: "y = 3x − 7",
      C: "y = 2x − 5",
      D: "y = −3x + 5"
    },
    answer: "B",
    explanation: "Using y − y₁ = m(x − x₁), y + 1 = 3(x − 2), giving y = 3x − 7.",
    page: 5,
    hasImage: false
  },
  {
    id: "math_tough_50",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry: Circles",
    bookQuestionNum: 50,
    text: "Find the equation of a circle with centre (2, −3) and radius 4.",
    options: {
      A: "(x + 2)² + (y − 3)² = 16",
      B: "(x − 2)² + (y + 3)² = 16",
      C: "(x − 2)² + (y + 3)² = 4",
      D: "(x + 2)² + (y − 3)² = 4"
    },
    answer: "B",
    explanation: "A circle with centre (a, b) and radius r has equation (x − a)² + (y − b)² = r².",
    page: 5,
    hasImage: false
  },
  {
    id: "math_tough_51",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 51,
    text: "What is the gradient of a line perpendicular to y = 2x + 1?",
    options: {
      A: "2",
      B: "−2",
      C: "1/2",
      D: "−1/2"
    },
    answer: "D",
    explanation: "The product of the gradients of two perpendicular non-vertical lines is −1. Thus, the required gradient is −1/2.",
    page: 6,
    hasImage: false
  },
  {
    id: "math_tough_52",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 52,
    text: "Find the perpendicular distance from (1, 2) to the line 3x + 4y − 10 = 0.",
    options: {
      A: "1/5",
      B: "1/2",
      C: "1",
      D: "5"
    },
    answer: "A",
    explanation: "Distance = |3(1) + 4(2) − 10|/√(3² + 4²) = 1/5.",
    page: 6,
    hasImage: false
  },
  {
    id: "math_tough_53",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 53,
    text: "A cylinder has radius 7 cm and height 10 cm. Find its volume.",
    options: {
      A: "140π cm³",
      B: "245π cm³",
      C: "490π cm³",
      D: "980π cm³"
    },
    answer: "C",
    explanation: "Volume = πr²h = π(7²)(10) = 490π cm³.",
    page: 6,
    hasImage: false
  },
  {
    id: "math_tough_54",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 54,
    text: "Find the volume of a sphere of radius 3 cm.",
    options: {
      A: "12π cm³",
      B: "24π cm³",
      C: "36π cm³",
      D: "48π cm³"
    },
    answer: "C",
    explanation: "Volume = (4/3)πr³ = (4/3)π(27) = 36π cm³.",
    page: 6,
    hasImage: false
  },
  {
    id: "math_tough_55",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 55,
    text: "A cone has radius 6 cm and vertical height 8 cm. Find its total surface area.",
    options: {
      A: "48π cm²",
      B: "60π cm²",
      C: "80π cm²",
      D: "96π cm²"
    },
    answer: "D",
    explanation: "Slant height l = √(6² + 8²) = 10 cm. Total surface area = πr(l + r) = 6π(10 + 6) = 96π cm².",
    page: 6,
    hasImage: false
  },
  {
    id: "math_tough_56",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: Plane Figures",
    bookQuestionNum: 56,
    text: "Find the area of a sector of a circle with radius 14 cm and angle 90°. Express your answer in terms of π.",
    options: {
      A: "14π cm²",
      B: "28π cm²",
      C: "49π cm²",
      D: "196π cm²"
    },
    answer: "C",
    explanation: "Sector area = (90/360)π(14²) = 49π cm².",
    page: 6,
    hasImage: false
  },
  {
    id: "math_tough_57",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 57,
    text: "A triangular prism has a triangular cross-section with base 8 cm and perpendicular height 6 cm. If the length of the prism is 15 cm, find its volume.",
    options: {
      A: "180 cm³",
      B: "240 cm³",
      C: "360 cm³",
      D: "720 cm³"
    },
    answer: "C",
    explanation: "Cross-sectional area = ½ × 8 × 6 = 24 cm². Volume = 24 × 15 = 360 cm³.",
    page: 6,
    hasImage: false
  },
  {
    id: "math_tough_58",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Ratios",
    bookQuestionNum: 58,
    text: "If sin θ = 3/5 and θ is acute, find tan θ.",
    options: {
      A: "3/5",
      B: "3/4",
      C: "4/3",
      D: "4/5"
    },
    answer: "B",
    explanation: "Since sin θ = opposite/hypotenuse = 3/5, the adjacent side is 4. Therefore, tan θ = 3/4.",
    page: 6,
    hasImage: false
  },
  {
    id: "math_tough_59",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Equations",
    bookQuestionNum: 59,
    text: "Find all values of θ satisfying sin θ = √3/2 for 0° ≤ θ ≤ 180°.",
    options: {
      A: "30° and 150°",
      B: "60° and 120°",
      C: "60° and 300°",
      D: "120° and 240°"
    },
    answer: "B",
    explanation: "Sine is √3/2 at 60° and 120° in the stated interval.",
    page: 6,
    hasImage: false
  },
  {
    id: "math_tough_60",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Identities",
    bookQuestionNum: 60,
    text: "If sin θ = 3/5, find cos 2θ.",
    options: {
      A: "7/25",
      B: "9/25",
      C: "16/25",
      D: "24/25"
    },
    answer: "A",
    explanation: "cos 2θ = 1 − 2sin²θ = 1 − 2(9/25) = 7/25.",
    page: 6,
    hasImage: false
  },
  {
    id: "math_tough_61",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Sine & Cosine Rules",
    bookQuestionNum: 61,
    text: "Two sides of a triangle are 5 cm and 7 cm, and the included angle is 60°. Find the length of the third side.",
    options: {
      A: "√29 cm",
      B: "√39 cm",
      C: "√49 cm",
      D: "√59 cm"
    },
    answer: "B",
    explanation: "By the cosine rule, c² = 5² + 7² − 2(5)(7)cos 60° = 25 + 49 − 35 = 39.",
    page: 7,
    hasImage: false
  },
  {
    id: "math_tough_62",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Sine & Cosine Rules",
    bookQuestionNum: 62,
    text: "In a triangle, a side of length 10 cm is opposite an angle of 30°. Find the side opposite 45°.",
    options: {
      A: "5√2 cm",
      B: "10√2 cm",
      C: "15 cm",
      D: "20 cm"
    },
    answer: "B",
    explanation: "By the sine rule, b/sin45° = 10/sin30°. Thus, b = 10(√2/2)/(1/2) = 10√2 cm.",
    page: 7,
    hasImage: false
  },
  {
    id: "math_tough_63",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Equations",
    bookQuestionNum: 63,
    text: "Find all values of θ satisfying 2cos θ = 1 for 0° ≤ θ < 360°.",
    options: {
      A: "60° only",
      B: "120° and 240°",
      C: "60° and 300°",
      D: "30° and 330°"
    },
    answer: "C",
    explanation: "cos θ = 1/2. Cosine is positive in the first and fourth quadrants, giving 60° and 300°.",
    page: 7,
    hasImage: false
  },
  {
    id: "math_tough_64",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Euclidean Geometry: Polygons",
    bookQuestionNum: 64,
    text: "Find the sum of the interior angles of a 12-sided polygon.",
    options: {
      A: "1,440°",
      B: "1,620°",
      C: "1,800°",
      D: "1,980°"
    },
    answer: "C",
    explanation: "Sum = (n − 2)180° = (12 − 2)180° = 1,800°.",
    page: 7,
    hasImage: false
  },
  {
    id: "math_tough_65",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Euclidean Geometry: Polygons",
    bookQuestionNum: 65,
    text: "Each exterior angle of a regular polygon is 24°. How many sides does the polygon have?",
    options: {
      A: "12",
      B: "15",
      C: "18",
      D: "24"
    },
    answer: "B",
    explanation: "The exterior angles of a convex polygon sum to 360°. Therefore, n = 360/24 = 15.",
    page: 7,
    hasImage: false
  },
  {
    id: "math_tough_66",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Circle Geometry & Theorems",
    bookQuestionNum: 66,
    text: "A triangle is inscribed in a circle, and one side of the triangle is a diameter. What is the angle opposite the diameter?",
    options: {
      A: "30°",
      B: "45°",
      C: "60°",
      D: "90°"
    },
    answer: "D",
    explanation: "The angle subtended by a diameter at the circumference is a right angle.",
    page: 7,
    hasImage: false
  },
  {
    id: "math_tough_67",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Circle Geometry & Theorems",
    bookQuestionNum: 67,
    text: "A tangent and a chord meet at a point on a circle. If the angle between them is 35°, what is the angle in the alternate segment subtended by the chord?",
    options: {
      A: "25°",
      B: "35°",
      C: "55°",
      D: "70°"
    },
    answer: "B",
    explanation: "By the alternate segment theorem, the angle between a tangent and a chord equals the angle in the alternate segment.",
    page: 7,
    hasImage: false
  },
  {
    id: "math_tough_68",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Circle Geometry & Theorems",
    bookQuestionNum: 68,
    text: "A chord of a circle with radius 10 cm is 6 cm from the centre. Find the length of the chord.",
    options: {
      A: "8 cm",
      B: "12 cm",
      C: "16 cm",
      D: "20 cm"
    },
    answer: "C",
    explanation: "The perpendicular from the centre bisects the chord. Half-chord = √(10² − 6²) = 8 cm. Therefore, the full chord is 16 cm.",
    page: 7,
    hasImage: false
  },
  {
    id: "math_tough_69",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 69,
    text: "The mean of five numbers 2, 4, 6, 8 and x is 6. Find x.",
    options: {
      A: "8",
      B: "10",
      C: "12",
      D: "15"
    },
    answer: "B",
    explanation: "The total of the five numbers is 5 × 6 = 30. Since 2 + 4 + 6 + 8 = 20, x = 10.",
    page: 7,
    hasImage: false
  },
  {
    id: "math_tough_70",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 70,
    text: "Find the median of the data: 3, 7, 9, 7, 14, 11, 5.",
    options: {
      A: "5",
      B: "7",
      C: "9",
      D: "11"
    },
    answer: "B",
    explanation: "Arranging the values gives 3, 5, 7, 7, 9, 11, 14. The middle value is 7.",
    page: 7,
    hasImage: false
  },
  {
    id: "math_tough_71",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Dispersion",
    bookQuestionNum: 71,
    text: "Find the population variance of 2, 4, 6 and 8.",
    options: {
      A: "2",
      B: "4",
      C: "5",
      D: "10"
    },
    answer: "C",
    explanation: "The mean is 5. The squared deviations sum to 9 + 1 + 1 + 9 = 20. Population variance = 20/4 = 5.",
    page: 8,
    hasImage: false
  },
  {
    id: "math_tough_72",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 72,
    text: "One card is selected at random from a standard deck of 52 cards. Find the probability of selecting a king or a queen.",
    options: {
      A: "1/13",
      B: "2/13",
      C: "3/13",
      D: "4/13"
    },
    answer: "B",
    explanation: "There are four kings and four queens, giving 8 favourable cards. Probability = 8/52 = 2/13.",
    page: 8,
    hasImage: false
  },
  {
    id: "math_tough_73",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 73,
    text: "A bag contains 5 red balls and 3 blue balls. Two balls are selected at random without replacement. Find the probability that both are red.",
    options: {
      A: "5/14",
      B: "3/8",
      C: "1/2",
      D: "5/8"
    },
    answer: "A",
    explanation: "Probability = (5/8)(4/7) = 20/56 = 5/14.",
    page: 8,
    hasImage: false
  },
  {
    id: "math_tough_74",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 74,
    text: "Two fair coins are tossed simultaneously. What is the probability of obtaining at least one head?",
    options: {
      A: "1/4",
      B: "1/2",
      C: "3/4",
      D: "1"
    },
    answer: "C",
    explanation: "The possible outcomes are HH, HT, TH and TT. Three outcomes contain at least one head, so the probability is 3/4.",
    page: 8,
    hasImage: false
  },
  {
    id: "math_tough_75",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 75,
    text: "Two fair six-sided dice are thrown. Find the probability that their sum is 9.",
    options: {
      A: "1/12",
      B: "1/9",
      C: "1/6",
      D: "1/4"
    },
    answer: "B",
    explanation: "The favourable outcomes are (3,6), (4,5), (5,4) and (6,3). Probability = 4/36 = 1/9.",
    page: 8,
    hasImage: false
  },
  {
    id: "math_tough_76",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 76,
    text: "If P(A) = 0.6, P(B) = 0.5 and P(A ∩ B) = 0.2, find P(A ∪ B).",
    options: {
      A: "0.3",
      B: "0.7",
      C: "0.9",
      D: "1.3"
    },
    answer: "C",
    explanation: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.6 + 0.5 − 0.2 = 0.9.",
    page: 8,
    hasImage: false
  },
  {
    id: "math_tough_77",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 77,
    text: "A fair coin is tossed three times. Find the probability of obtaining exactly two heads.",
    options: {
      A: "1/8",
      B: "1/4",
      C: "3/8",
      D: "1/2"
    },
    answer: "C",
    explanation: "There are three favourable outcomes: HHT, HTH and THH. Probability = 3/8.",
    page: 8,
    hasImage: false
  },
  {
    id: "math_tough_78",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 78,
    text: "A bag contains 4 red balls and 3 blue balls. Two balls are drawn without replacement. Find the probability that the first is red and the second is blue.",
    options: {
      A: "2/7",
      B: "3/7",
      C: "4/7",
      D: "1/2"
    },
    answer: "A",
    explanation: "Probability = (4/7)(3/6) = 12/42 = 2/7.",
    page: 8,
    hasImage: false
  },
  {
    id: "math_tough_79",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 79,
    text: "In how many ways can a committee of three people be selected from eight people?",
    options: {
      A: "24",
      B: "48",
      C: "56",
      D: "336"
    },
    answer: "C",
    explanation: "The number of selections is ⁸C₃ = 8!/(3!5!) = 56.",
    page: 8,
    hasImage: false
  },
  {
    id: "math_tough_80",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 80,
    text: "How many distinct arrangements can be made from all the letters of the word LEVEL?",
    options: {
      A: "20",
      B: "30",
      C: "60",
      D: "120"
    },
    answer: "B",
    explanation: "There are five letters, with L repeated twice and E repeated twice. Number of arrangements = 5!/(2!2!) = 30.",
    page: 8,
    hasImage: false
  },
  {
    id: "math_tough_81",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 81,
    text: "Six different people are seated around a circular table. How many distinct arrangements are possible if rotations are considered identical?",
    options: {
      A: "24",
      B: "60",
      C: "120",
      D: "720"
    },
    answer: "C",
    explanation: "Circular arrangements of n different objects = (n − 1)!. Thus, (6 − 1)! = 120.",
    page: 9,
    hasImage: false
  },
  {
    id: "math_tough_82",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 82,
    text: "Differentiate y = 3x⁴ − 5x² + 7 with respect to x.",
    options: {
      A: "12x³ − 10x",
      B: "12x³ − 5x",
      C: "3x³ − 10x",
      D: "12x⁴ − 10x²"
    },
    answer: "A",
    explanation: "Applying the power rule gives dy/dx = 12x³ − 10x.",
    page: 9,
    hasImage: false
  },
  {
    id: "math_tough_83",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 83,
    text: "If y = x³ − 4x, find dy/dx when x = 2.",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "12"
    },
    answer: "C",
    explanation: "dy/dx = 3x² − 4. At x = 2, the derivative is 12 − 4 = 8.",
    page: 9,
    hasImage: false
  },
  {
    id: "math_tough_84",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 84,
    text: "Find the gradient of the curve y = x² + 3x at x = 1.",
    options: {
      A: "2",
      B: "3",
      C: "5",
      D: "6"
    },
    answer: "C",
    explanation: "dy/dx = 2x + 3. At x = 1, the gradient is 2 + 3 = 5.",
    page: 9,
    hasImage: false
  },
  {
    id: "math_tough_85",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 85,
    text: "Find the x-coordinate of the minimum point of y = x² − 6x + 5.",
    options: {
      A: "−3",
      B: "0",
      C: "3",
      D: "6"
    },
    answer: "C",
    explanation: "At a stationary point, dy/dx = 0. Thus, 2x − 6 = 0, giving x = 3. The positive second derivative confirms a minimum.",
    page: 9,
    hasImage: false
  },
  {
    id: "math_tough_86",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Integration & Applications",
    bookQuestionNum: 86,
    text: "Evaluate ∫(6x² − 4x + 3) dx.",
    options: {
      A: "2x³ − 2x² + 3x + C",
      B: "18x³ − 8x² + 3x + C",
      C: "2x³ − 4x² + 3 + C",
      D: "6x³ − 2x² + 3x + C"
    },
    answer: "A",
    explanation: "Integrating term by term gives 6x³/3 − 4x²/2 + 3x + C.",
    page: 9,
    hasImage: false
  },
  {
    id: "math_tough_87",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Integration & Applications",
    bookQuestionNum: 87,
    text: "Evaluate ∫₀²(3x² + 1) dx.",
    options: {
      A: "6",
      B: "8",
      C: "10",
      D: "12"
    },
    answer: "C",
    explanation: "The integral is [x³ + x]₀² = (8 + 2) − 0 = 10.",
    page: 9,
    hasImage: false
  },
  {
    id: "math_tough_88",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Integration & Applications",
    bookQuestionNum: 88,
    text: "Find the area under the curve y = 2x between x = 0 and x = 3.",
    options: {
      A: "3 square units",
      B: "6 square units",
      C: "9 square units",
      D: "12 square units"
    },
    answer: "C",
    explanation: "Area = ∫₀³ 2x dx = [x²]₀³ = 9 square units.",
    page: 9,
    hasImage: false
  },
  {
    id: "math_tough_89",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 89,
    text: "For the curve y = x³ − 3x² + 2, at which x-coordinate does the local minimum occur?",
    options: {
      A: "−2",
      B: "0",
      C: "1",
      D: "2"
    },
    answer: "D",
    explanation: "dy/dx = 3x² − 6x = 3x(x − 2), giving stationary points at x = 0 and x = 2. Since d²y/dx² = 6x − 6 is positive at x = 2, the minimum occurs there.",
    page: 9,
    hasImage: false
  },
  {
    id: "math_tough_90",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 90,
    text: "Find the equation of the tangent to y = x² − 3x at x = 2.",
    options: {
      A: "y = x − 4",
      B: "y = 2x − 5",
      C: "y = x + 4",
      D: "y = −x"
    },
    answer: "A",
    explanation: "At x = 2, y = 4 − 6 = −2. The gradient is dy/dx = 2x − 3 = 1. The tangent is y + 2 = x − 2, so y = x − 4.",
    page: 9,
    hasImage: false
  },
  {
    id: "math_tough_91",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices & Exponents",
    bookQuestionNum: 91,
    text: "Solve 5^(x + 1) = 125^(x − 1).",
    options: {
      A: "x = 1",
      B: "x = 2",
      C: "x = 3",
      D: "x = 4"
    },
    answer: "B",
    explanation: "Since 125 = 5³, equate exponents: x + 1 = 3x − 3. Therefore, 2x = 4 and x = 2.",
    page: 10,
    hasImage: false
  },
  {
    id: "math_tough_92",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Logarithms",
    bookQuestionNum: 92,
    text: "Solve log₂(x − 2) + log₂(x + 2) = 4.",
    options: {
      A: "2",
      B: "2√5",
      C: "4",
      D: "5"
    },
    answer: "B",
    explanation: "The domain requires x > 2. Combining the logarithms gives (x − 2)(x + 2) = 16, so x² = 20. Thus, x = 2√5.",
    page: 10,
    hasImage: false
  },
  {
    id: "math_tough_93",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Approximation & Percentage Error",
    bookQuestionNum: 93,
    text: "A length has a true value of 10 cm but is measured as 9.8 cm. What is the percentage error?",
    options: {
      A: "0.2%",
      B: "2%",
      C: "4%",
      D: "20%"
    },
    answer: "B",
    explanation: "Percentage error = |9.8 − 10|/10 × 100% = 2%.",
    page: 10,
    hasImage: false
  },
  {
    id: "math_tough_94",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: Plane Figures",
    bookQuestionNum: 94,
    text: "A rectangle has a perimeter of 34 cm and an area of 60 cm². Find its dimensions.",
    options: {
      A: "4 cm and 15 cm",
      B: "5 cm and 12 cm",
      C: "6 cm and 10 cm",
      D: "7 cm and 10 cm"
    },
    answer: "B",
    explanation: "If the dimensions are l and w, then l + w = 17 and lw = 60. The equation t² − 17t + 60 = 0 gives t = 5 or 12.",
    page: 10,
    hasImage: false
  },
  {
    id: "math_tough_95",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Rates, Ratios & Proportions",
    bookQuestionNum: 95,
    text: "Pipe A can fill a tank in 6 hours, while pipe B can fill it in 4 hours. How long will they take to fill the tank together, assuming constant rates?",
    options: {
      A: "2 hours",
      B: "2.4 hours",
      C: "3 hours",
      D: "5 hours"
    },
    answer: "B",
    explanation: "Combined rate = 1/6 + 1/4 = 5/12 tank per hour. Time = 12/5 = 2.4 hours.",
    page: 10,
    hasImage: false
  },
  {
    id: "math_tough_96",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Bearings & Trigonometric Surveying",
    bookQuestionNum: 96,
    text: "A person walks 10 km north and then 10 km east. What is the bearing of the final position from the starting point?",
    options: {
      A: "045°",
      B: "090°",
      C: "135°",
      D: "225°"
    },
    answer: "A",
    explanation: "The displacement is equally northward and eastward, making an angle of 45° clockwise from north.",
    page: 10,
    hasImage: false
  },
  {
    id: "math_tough_97",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Number Bases",
    bookQuestionNum: 97,
    text: "Express (231)₄ in base ten.",
    options: {
      A: "29",
      B: "39",
      C: "45",
      D: "57"
    },
    answer: "C",
    explanation: "(231)₄ = 2(4²) + 3(4) + 1 = 32 + 12 + 1 = 45.",
    page: 10,
    hasImage: false
  },
  {
    id: "math_tough_98",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebraic Fractions",
    bookQuestionNum: 98,
    text: "Solve (x + 1)/(x − 2) = 3.",
    options: {
      A: "2",
      B: "3",
      C: "7/2",
      D: "5"
    },
    answer: "C",
    explanation: "Since x ≠ 2, cross-multiplication gives x + 1 = 3x − 6. Hence, 2x = 7 and x = 7/2.",
    page: 10,
    hasImage: false
  },
  {
    id: "math_tough_99",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Commercial & Financial Mathematics",
    bookQuestionNum: 99,
    text: "An investment of ₦50,000 depreciates by 10% each year. Find its value after two years if depreciation is calculated on the reducing balance.",
    options: {
      A: "₦40,000",
      B: "₦40,500",
      C: "₦41,000",
      D: "₦45,000"
    },
    answer: "B",
    explanation: "Value = 50,000(0.9)² = ₦40,500.",
    page: 10,
    hasImage: false
  },
  {
    id: "math_tough_100",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 100,
    text: "Two different numbers are chosen at random from the integers 1 to 10. What is the probability that their sum is even?",
    options: {
      A: "2/9",
      B: "4/9",
      C: "1/2",
      D: "5/9"
    },
    answer: "B",
    explanation: "The sum is even when both numbers are even or both are odd. There are 5 even and 5 odd numbers, giving 2 × ⁵C₂ = 20 favourable pairs. Total pairs = ¹⁰C₂ = 45. Probability = 20/45 = 4/9.",
    page: 10,
    hasImage: false
  }
,
  {
    id: "math_tough_201",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Number Bases",
    bookQuestionNum: 201,
    text: "Convert (1321)₄ to base ten.",
    options: {
      A: "111",
      B: "117",
      C: "121",
      D: "129"
    },
    answer: "C",
    explanation: "(1321)₄ = 1 × 4³ + 3 × 4² + 2 × 4¹ + 1 × 4⁰\n\n= 64 + 48 + 8 + 1 = **121**.",
    page: 21,
    hasImage: false
  },
  {
    id: "math_tough_202",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Number Bases",
    bookQuestionNum: 202,
    text: "Convert (1101.011)₂ to base ten.",
    options: {
      A: "12.375",
      B: "13.375",
      C: "13.625",
      D: "14.125"
    },
    answer: "B",
    explanation: "Integer part = 8 + 4 + 1 = 13.\n\nFractional part = ½ × 0 + ¼ + ⅛ = 0.375.\n\nTherefore, the answer is 13.375.",
    page: 21,
    hasImage: false
  },
  {
    id: "math_tough_203",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Number Bases",
    bookQuestionNum: 203,
    text: "Evaluate (245)₆ + (153)₆, giving your answer in base six.",
    options: {
      A: "(422)₆",
      B: "(432)₆",
      C: "(442)₆",
      D: "(452)₆"
    },
    answer: "C",
    explanation: "(245)₆ = 101 in base ten.\n\n(153)₆ = 69 in base ten.\n\n101 + 69 = 170.\n\nConverting 170 to base six gives (442)₆.",
    page: 21,
    hasImage: false
  },
  {
    id: "math_tough_204",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Modular Arithmetic & Divisibility",
    bookQuestionNum: 204,
    text: "Find the remainder when 7¹⁰³ is divided by 5.",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    explanation: "7 ≡ 2 (mod 5).\n\nThe remainders of successive powers of 2 are 2, 4, 3, 1, repeating every four powers.\n\nSince 103 leaves remainder 3 when divided by 4, the required remainder is 3.",
    page: 21,
    hasImage: false
  },
  {
    id: "math_tough_205",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Modular Arithmetic & Divisibility",
    bookQuestionNum: 205,
    text: "Find the least positive integer x satisfying:\n\n4x ≡ 3 (mod 9).",
    options: {
      A: "2",
      B: "3",
      C: "5",
      D: "6"
    },
    answer: "B",
    explanation: "4 × 3 = 12.\n\n12 divided by 9 leaves remainder 3.\n\nTherefore, x = 3.",
    page: 21,
    hasImage: false
  },
  {
    id: "math_tough_206",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Fractions, Decimals, Approximations & Factors",
    bookQuestionNum: 206,
    text: "Evaluate:\n\n(¾ − ⅙) ÷ (⅝ + ¼)",
    options: {
      A: "⅓",
      B: "⅔",
      C: "¾",
      D: "4/3"
    },
    answer: "B",
    explanation: "¾ − ⅙ = 9/12 − 2/12 = 7/12.\n\n⅝ + ¼ = ⅝ + 2/8 = ⅞.\n\nTherefore:\n\n(7/12) ÷ (7/8) = (7/12) × (8/7) = **⅔**.",
    page: 21,
    hasImage: false
  },
  {
    id: "math_tough_207",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Approximation & Percentage Error",
    bookQuestionNum: 207,
    text: "A length is recorded as 12.6 cm, correct to one decimal place. What is the maximum percentage error?",
    options: {
      A: "0.20%",
      B: "0.40%",
      C: "0.60%",
      D: "0.80%"
    },
    answer: "B",
    explanation: "Maximum absolute error = 0.05 cm.\n\nPercentage error = (0.05 ÷ 12.6) × 100%.\n\n= 0.397%, approximately **0.40%**.",
    page: 21,
    hasImage: false
  },
  {
    id: "math_tough_208",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Commercial & Financial Mathematics",
    bookQuestionNum: 208,
    text: "After receiving a discount of 20%, a customer pays ₦9,600. What was the original price?",
    options: {
      A: "₦11,200",
      B: "₦11,500",
      C: "₦12,000",
      D: "₦12,500"
    },
    answer: "C",
    explanation: "The customer paid 80% of the original price.\n\nOriginal price = ₦9,600 ÷ 0.8 = **₦12,000**.",
    page: 21,
    hasImage: false
  },
  {
    id: "math_tough_209",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Commercial & Financial Mathematics",
    bookQuestionNum: 209,
    text: "A machine worth ₦80,000 depreciates by 10% annually. Find its value after two years.",
    options: {
      A: "₦64,000",
      B: "₦64,800",
      C: "₦68,000",
      D: "₦72,000"
    },
    answer: "B",
    explanation: "Value = P(1 − r)ⁿ.\n\n= ₦80,000 × (0.9)².\n\n= ₦80,000 × 0.81 = **₦64,800**.",
    page: 21,
    hasImage: false
  },
  {
    id: "math_tough_210",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Commercial & Financial Mathematics",
    bookQuestionNum: 210,
    text: "Find the compound interest on ₦100,000 invested at 10% per annum for two years, compounded annually.",
    options: {
      A: "₦10,000",
      B: "₦20,000",
      C: "₦21,000",
      D: "₦22,000"
    },
    answer: "C",
    explanation: "A = P(1 + r)ⁿ.\n\n= 100,000 × (1.1)² = ₦121,000.\n\nCompound interest = ₦121,000 − ₦100,000 = **₦21,000**.",
    page: 21,
    hasImage: false
  },
  {
    id: "math_tough_211",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Rates, Ratios & Proportions",
    bookQuestionNum: 211,
    text: "A company shares a dividend of ₦180,000 among three investors in the ratio 2:3:4. How much does the investor with the largest share receive?",
    options: {
      A: "₦40,000",
      B: "₦60,000",
      C: "₦80,000",
      D: "₦90,000"
    },
    answer: "C",
    explanation: "Total ratio = 2 + 3 + 4 = 9.\n\nLargest share = (4/9) × ₦180,000 = **₦80,000**.",
    page: 22,
    hasImage: false
  },
  {
    id: "math_tough_212",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Rates, Ratios & Proportions",
    bookQuestionNum: 212,
    text: "Fifteen workers can complete a project in 12 days. How many days will 20 workers require, assuming equal working rates?",
    options: {
      A: "6 days",
      B: "8 days",
      C: "9 days",
      D: "10 days"
    },
    answer: "C",
    explanation: "Total work = 15 × 12 = 180 worker-days.\n\nRequired days = 180 ÷ 20 = **9 days**.",
    page: 22,
    hasImage: false
  },
  {
    id: "math_tough_213",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Commercial & Financial Mathematics",
    bookQuestionNum: 213,
    text: "An item costs ₦50,000. A discount of 12% is applied, followed by VAT of 7.5% on the discounted price. Find the final price.",
    options: {
      A: "₦44,000",
      B: "₦46,200",
      C: "₦47,300",
      D: "₦53,750"
    },
    answer: "C",
    explanation: "Discounted price = ₦50,000 × 0.88 = ₦44,000.\n\nVAT = ₦44,000 × 0.075 = ₦3,300.\n\nFinal price = ₦44,000 + ₦3,300 = **₦47,300**.",
    page: 22,
    hasImage: false
  },
  {
    id: "math_tough_214",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Rates, Ratios & Proportions",
    bookQuestionNum: 214,
    text: "The ratio of the speeds of two vehicles is 4:7. If the slower vehicle travels 180 km in 3 hours, how far will the faster vehicle travel in the same time?",
    options: {
      A: "210 km",
      B: "270 km",
      C: "315 km",
      D: "360 km"
    },
    answer: "C",
    explanation: "Slower speed = 180 ÷ 3 = 60 km/h.\n\nFaster speed = 60 × 7/4 = 105 km/h.\n\nDistance = 105 × 3 = **315 km**.",
    page: 22,
    hasImage: false
  },
  {
    id: "math_tough_215",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Rates, Ratios & Proportions",
    bookQuestionNum: 215,
    text: "A car travels 120 km at 60 km/h and another 120 km at 40 km/h. Find its average speed for the entire journey.",
    options: {
      A: "45 km/h",
      B: "48 km/h",
      C: "50 km/h",
      D: "52 km/h"
    },
    answer: "B",
    explanation: "Time for the first journey = 120/60 = 2 hours.\n\nTime for the second = 120/40 = 3 hours.\n\nAverage speed = total distance ÷ total time.\n\n= 240 ÷ 5 = **48 km/h**.",
    page: 22,
    hasImage: false
  },
  {
    id: "math_tough_216",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Surds",
    bookQuestionNum: 216,
    text: "Simplify √72 − √32 + √8.",
    options: {
      A: "2√2",
      B: "3√2",
      C: "4√2",
      D: "6√2"
    },
    answer: "C",
    explanation: "√72 = 6√2.\n\n√32 = 4√2.\n\n√8 = 2√2.\n\nTherefore, 6√2 − 4√2 + 2√2 = **4√2**.",
    page: 22,
    hasImage: false
  },
  {
    id: "math_tough_217",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Surds",
    bookQuestionNum: 217,
    text: "Rationalise the denominator of:\n\n5/(√3 − √2)",
    options: {
      A: "5√3 − 5√2",
      B: "5√3 + 5√2",
      C: "√3 + √2",
      D: "5(√3 − √2)"
    },
    answer: "B",
    explanation: "Multiply the numerator and denominator by the conjugate:\n\n5/(√3 − √2) × (√3 + √2)/(√3 + √2).\n\nThe denominator becomes 3 − 2 = 1.\n\nAnswer = **5√3 + 5√2**.",
    page: 22,
    hasImage: false
  },
  {
    id: "math_tough_218",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices & Exponents",
    bookQuestionNum: 218,
    text: "Solve:\n\n2ˣ⁺¹ = 8ˣ⁻¹.",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    explanation: "Since 8 = 2³:\n\n2ˣ⁺¹ = 2³⁽ˣ⁻¹⁾.\n\nEquating powers:\n\nx + 1 = 3x − 3.\n\n4 = 2x.\n\nTherefore, x = **2**.",
    page: 22,
    hasImage: false
  },
  {
    id: "math_tough_219",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Logarithms",
    bookQuestionNum: 219,
    text: "Evaluate:\n\nlog₃ 81 − log₃ 3 + log₃ 9.",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "D",
    explanation: "log₃ 81 = 4.\n\nlog₃ 3 = 1.\n\nlog₃ 9 = 2.\n\nTherefore, 4 − 1 + 2 = **5**.",
    page: 22,
    hasImage: false
  },
  {
    id: "math_tough_220",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Logarithms",
    bookQuestionNum: 220,
    text: "Solve:\n\nlog₂(x + 1) + log₂(x − 1) = 3.",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    explanation: "Using the logarithm law:\n\nlog₂[(x + 1)(x − 1)] = 3.\n\nlog₂(x² − 1) = 3.\n\nx² − 1 = 2³ = 8.\n\nx² = 9.\n\nSince x must be greater than 1, x = **3**.",
    page: 22,
    hasImage: false
  },
  {
    id: "math_tough_221",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices & Exponents",
    bookQuestionNum: 221,
    text: "Evaluate the following in standard form:\n\n(6.4 × 10⁷) ÷ (8 × 10⁻³)",
    options: {
      A: "0.8 × 10¹⁰",
      B: "8 × 10⁹",
      C: "8 × 10⁴",
      D: "5.12 × 10⁵"
    },
    answer: "B",
    explanation: "Divide the coefficients: 6.4 ÷ 8 = 0.8.\n\nSubtract the powers: 7 − (−3) = 10.\n\nTherefore, 0.8 × 10¹⁰ = **8 × 10⁹**.",
    page: 23,
    hasImage: false
  },
  {
    id: "math_tough_222",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices & Exponents",
    bookQuestionNum: 222,
    text: "Evaluate 64²ᐟ³.",
    options: {
      A: "8",
      B: "12",
      C: "16",
      D: "32"
    },
    answer: "C",
    explanation: "64²ᐟ³ = (∛64)² = 4² = **16**.",
    page: 23,
    hasImage: false
  },
  {
    id: "math_tough_223",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Logarithms",
    bookQuestionNum: 223,
    text: "Evaluate log₄ 8.",
    options: {
      A: "1",
      B: "3/2",
      C: "2",
      D: "3"
    },
    answer: "B",
    explanation: "Let log₄ 8 = x.\n\nThen 4ˣ = 8.\n\n(2²)ˣ = 2³.\n\n2ˣ = 3.\n\nTherefore, x = **3/2**.",
    page: 23,
    hasImage: false
  },
  {
    id: "math_tough_224",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Approximation & Percentage Error",
    bookQuestionNum: 224,
    text: "A mass is recorded as 48 kg, correct to the nearest kilogram. What is the upper bound of its actual mass?",
    options: {
      A: "47.5 kg",
      B: "48.0 kg",
      C: "48.5 kg",
      D: "49.0 kg"
    },
    answer: "C",
    explanation: "The possible interval is:\n\n47.5 kg ≤ mass < 48.5 kg.\n\nThe upper bound is **48.5 kg**.",
    page: 23,
    hasImage: false
  },
  {
    id: "math_tough_225",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Commercial & Financial Mathematics",
    bookQuestionNum: 225,
    text: "A trader sells an article for ₦18,000 at a loss of 10%. Find its cost price.",
    options: {
      A: "₦16,200",
      B: "₦19,800",
      C: "₦20,000",
      D: "₦22,000"
    },
    answer: "C",
    explanation: "Selling price = 90% of cost price.\n\nCost price = ₦18,000 ÷ 0.9 = **₦20,000**.",
    page: 23,
    hasImage: false
  },
  {
    id: "math_tough_226",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Rates, Ratios & Proportions",
    bookQuestionNum: 226,
    text: "A solution contains alcohol and water in the ratio 3:5. If 16 litres of the solution are present, how much water must be added to make the ratio 1:2?",
    options: {
      A: "2 litres",
      B: "4 litres",
      C: "6 litres",
      D: "8 litres"
    },
    answer: "A",
    explanation: "Total ratio = 3 + 5 = 8.\n\nAlcohol = 3/8 × 16 = 6 litres.\n\nWater = 5/8 × 16 = 10 litres.\n\nFor the new ratio of 1:2, 6 litres of alcohol require 12 litres of water.\n\nWater to add = 12 − 10 = **2 litres**.",
    page: 23,
    hasImage: false
  },
  {
    id: "math_tough_227",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Rates, Ratios & Proportions",
    bookQuestionNum: 227,
    text: "A vehicle travels 90 km at 30 km/h and then 150 km at 50 km/h. What is its average speed for the entire journey?",
    options: {
      A: "35 km/h",
      B: "40 km/h",
      C: "42 km/h",
      D: "45 km/h"
    },
    answer: "B",
    explanation: "First time = 90/30 = 3 hours.\n\nSecond time = 150/50 = 3 hours.\n\nAverage speed = 240/6 = **40 km/h**.",
    page: 23,
    hasImage: false
  },
  {
    id: "math_tough_228",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 228,
    text: "If y varies directly as x² and inversely as z, and y = 12 when x = 2 and z = 4, find y when x = 3 and z = 6.",
    options: {
      A: "12",
      B: "15",
      C: "18",
      D: "24"
    },
    answer: "C",
    explanation: "y = kx²/z.\n\n12 = k × 4/4.\n\nTherefore, k = 12.\n\nNew value:\n\ny = 12 × 9/6 = **18**.",
    page: 23,
    hasImage: false
  },
  {
    id: "math_tough_229",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Modular Arithmetic & Divisibility",
    bookQuestionNum: 229,
    text: "The time is 8:00 a.m. What time will it be 1,000 hours later?",
    options: {
      A: "8:00 p.m.",
      B: "12:00 midnight",
      C: "2:00 p.m.",
      D: "4:00 p.m."
    },
    answer: "B",
    explanation: "1,000 ÷ 24 = 41 days with 16 hours remaining.\n\nSixteen hours after 8:00 a.m. is **12:00 midnight**.",
    page: 23,
    hasImage: false
  },
  {
    id: "math_tough_230",
    originalChapter: 3,
    chapterTitle: "Commercial Mathematics & Financial Arithmetic",
    topic: "Commercial & Financial Mathematics",
    bookQuestionNum: 230,
    text: "A company declares a dividend of 12% on shares worth ₦250,000. How much dividend will an investor receive?",
    options: {
      A: "₦20,000",
      B: "₦25,000",
      C: "₦30,000",
      D: "₦35,000"
    },
    answer: "C",
    explanation: "Dividend = 12/100 × ₦250,000 = **₦30,000**.",
    page: 23,
    hasImage: false
  },
  {
    id: "math_tough_231",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebraic Fractions",
    bookQuestionNum: 231,
    text: "Make r the subject of the formula:\n\nP = (2r + 3)/(r − 1).",
    options: {
      A: "(P + 3)/(P − 2)",
      B: "(P − 3)/(P + 2)",
      C: "(P + 1)/(P − 2)",
      D: "(P − 1)/(P + 3)"
    },
    answer: "A",
    explanation: "P(r − 1) = 2r + 3.\n\nPr − P = 2r + 3.\n\nPr − 2r = P + 3.\n\nr(P − 2) = P + 3.\n\nTherefore:\n\nr = **(P + 3)/(P − 2)**.",
    page: 24,
    hasImage: false
  },
  {
    id: "math_tough_232",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebraic Identities",
    bookQuestionNum: 232,
    text: "Expand and simplify:\n\n(2x − 3)(x + 4) − (x − 2)².",
    options: {
      A: "x² + 13x − 17",
      B: "x² + 9x − 16",
      C: "x² + 5x − 17",
      D: "x² + 9x + 17"
    },
    answer: "B",
    explanation: "First expansion:\n\n(2x − 3)(x + 4) = 2x² + 5x − 12.\n\nSecond expansion:\n\n(x − 2)² = x² − 4x + 4.\n\nSubtract:\n\n2x² + 5x − 12 − x² + 4x − 4.\n\n= **x² + 9x − 16**.",
    page: 24,
    hasImage: false
  },
  {
    id: "math_tough_233",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Polynomials & Remainder Theorem",
    bookQuestionNum: 233,
    text: "Factorise completely:\n\nx³ − 4x² + x + 6.",
    options: {
      A: "(x − 2)(x − 3)(x + 1)",
      B: "(x + 2)(x − 3)(x − 1)",
      C: "(x − 2)(x + 3)(x − 1)",
      D: "(x + 2)(x + 3)(x − 1)"
    },
    answer: "A",
    explanation: "Factorising gives:\n\n(x − 2)(x² − 2x − 3).\n\nThen:\n\nx² − 2x − 3 = (x − 3)(x + 1).\n\nTherefore, the complete factorisation is **(x − 2)(x − 3)(x + 1)**.",
    page: 24,
    hasImage: false
  },
  {
    id: "math_tough_234",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Polynomials & Remainder Theorem",
    bookQuestionNum: 234,
    text: "Solve:\n\nx³ − 6x² + 11x − 6 = 0.",
    options: {
      A: "1, 2 and 3",
      B: "−1, −2 and −3",
      C: "1, 3 and 4",
      D: "2, 3 and 4"
    },
    answer: "A",
    explanation: "Factorising:\n\n(x − 1)(x − 2)(x − 3) = 0.\n\nThe roots are **1, 2 and 3**.",
    page: 24,
    hasImage: false
  },
  {
    id: "math_tough_235",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Polynomials & Remainder Theorem",
    bookQuestionNum: 235,
    text: "Divide x³ − 3x² + 4x − 4 by x − 2.",
    options: {
      A: "x² + x + 2",
      B: "x² − x + 2",
      C: "x² − 2x + 2",
      D: "x² − 3x + 2"
    },
    answer: "B",
    explanation: "Polynomial division gives:\n\nQuotient = x² − x + 2.\n\nRemainder = 0.",
    page: 24,
    hasImage: false
  },
  {
    id: "math_tough_236",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Simultaneous Equations",
    bookQuestionNum: 236,
    text: "If x + y = 5 and x² + y² = 13, find the values of x and y.",
    options: {
      A: "1 and 4",
      B: "2 and 3",
      C: "1 and 3",
      D: "2 and 4"
    },
    answer: "B",
    explanation: "(x + y)² = x² + 2xy + y².\n\n25 = 13 + 2xy.\n\nxy = 6.\n\nThe two numbers with sum 5 and product 6 are **2 and 3**.",
    page: 24,
    hasImage: false
  },
  {
    id: "math_tough_237",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Simultaneous Equations",
    bookQuestionNum: 237,
    text: "Solve simultaneously:\n\n3x + 2y = 16\n\nx − y = 2",
    options: {
      A: "x = 3, y = 2",
      B: "x = 4, y = 2",
      C: "x = 2, y = 4",
      D: "x = 5, y = 1"
    },
    answer: "B",
    explanation: "From x − y = 2:\n\nx = y + 2.\n\nSubstitute:\n\n3(y + 2) + 2y = 16.\n\n5y + 6 = 16.\n\ny = 2, so x = 4.",
    page: 24,
    hasImage: false
  },
  {
    id: "math_tough_238",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebra: Quadratic Equations",
    bookQuestionNum: 238,
    text: "The roots of 2x² − 7x + 3 = 0 are",
    options: {
      A: "3 and ½",
      B: "−3 and −½",
      C: "2 and 3",
      D: "1 and 3/2"
    },
    answer: "A",
    explanation: "Factorising:\n\n(2x − 1)(x − 3) = 0.\n\nTherefore, x = ½ or x = 3.",
    page: 24,
    hasImage: false
  },
  {
    id: "math_tough_239",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebra: Quadratic Equations",
    bookQuestionNum: 239,
    text: "Find the minimum value of x² − 8x + 13.",
    options: {
      A: "−5",
      B: "−4",
      C: "−3",
      D: "3"
    },
    answer: "C",
    explanation: "Complete the square:\n\nx² − 8x + 13 = (x − 4)² − 3.\n\nThe smallest possible value of a square is zero.\n\nMinimum value = **−3**.",
    page: 24,
    hasImage: false
  },
  {
    id: "math_tough_240",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebra: Quadratic Equations",
    bookQuestionNum: 240,
    text: "For what value of k does x² − 4x + k = 0 have equal roots?",
    options: {
      A: "2",
      B: "4",
      C: "8",
      D: "16"
    },
    answer: "B",
    explanation: "For equal roots:\n\nb² − 4ac = 0.\n\n(−4)² − 4(1)(k) = 0.\n\n16 − 4k = 0.\n\nTherefore, k = **4**.",
    page: 24,
    hasImage: false
  },
  {
    id: "math_tough_241",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Inequalities",
    bookQuestionNum: 241,
    text: "Solve:\n\n3x − 7 < 8.",
    options: {
      A: "x < 3",
      B: "x < 5",
      C: "x > 5",
      D: "x > 3"
    },
    answer: "B",
    explanation: "3x < 8 + 7.\n\n3x < 15.\n\nTherefore, x < **5**.",
    page: 25,
    hasImage: false
  },
  {
    id: "math_tough_242",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Inequalities",
    bookQuestionNum: 242,
    text: "Solve:\n\nx² − 7x + 12 ≥ 0.",
    options: {
      A: "3 ≤ x ≤ 4",
      B: "x ≤ 3 or x ≥ 4",
      C: "x < 3 or x > 4",
      D: "x ≥ 3"
    },
    answer: "B",
    explanation: "Factorise:\n\n(x − 3)(x − 4) ≥ 0.\n\nThe expression is non-negative outside the two roots.\n\nTherefore, x ≤ 3 or x ≥ 4.",
    page: 25,
    hasImage: false
  },
  {
    id: "math_tough_243",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Inequalities",
    bookQuestionNum: 243,
    text: "Solve:\n\n|3x − 2| ≤ 7.",
    options: {
      A: "−5/3 ≤ x ≤ 3",
      B: "−3 ≤ x ≤ 5/3",
      C: "x ≤ −5/3 or x ≥ 3",
      D: "−7 ≤ x ≤ 7"
    },
    answer: "A",
    explanation: "−7 ≤ 3x − 2 ≤ 7.\n\nAdd 2:\n\n−5 ≤ 3x ≤ 9.\n\nDivide by 3:\n\n**−5/3 ≤ x ≤ 3**.",
    page: 25,
    hasImage: false
  },
  {
    id: "math_tough_244",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Inequalities",
    bookQuestionNum: 244,
    text: "Find the values of x for which:\n\n(x − 2)(x + 5) < 0.",
    options: {
      A: "x < −5 or x > 2",
      B: "−5 < x < 2",
      C: "x < −2",
      D: "x > 5"
    },
    answer: "B",
    explanation: "The roots are −5 and 2.\n\nThe product is negative between the roots.",
    page: 25,
    hasImage: false
  },
  {
    id: "math_tough_245",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebra: Quadratic Equations",
    bookQuestionNum: 245,
    text: "The curve y = x² − 5x + 6 intersects the x-axis at",
    options: {
      A: "x = 1 and 6",
      B: "x = 2 and 3",
      C: "x = −2 and −3",
      D: "x = 1 and 5"
    },
    answer: "B",
    explanation: "At the x-axis, y = 0.\n\nx² − 5x + 6 = 0.\n\n(x − 2)(x − 3) = 0.\n\nTherefore, x = 2 or x = 3.",
    page: 25,
    hasImage: false
  },
  {
    id: "math_tough_246",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 246,
    text: "y varies directly as the square of x. If y = 45 when x = 3, find y when x = 5.",
    options: {
      A: "75",
      B: "100",
      C: "125",
      D: "150"
    },
    answer: "C",
    explanation: "y = kx².\n\n45 = 9k, so k = 5.\n\nWhen x = 5:\n\ny = 5 × 25 = **125**.",
    page: 25,
    hasImage: false
  },
  {
    id: "math_tough_247",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 247,
    text: "y varies inversely as x. If y = 12 when x = 5, find y when x = 8.",
    options: {
      A: "6.5",
      B: "7.5",
      C: "8",
      D: "9"
    },
    answer: "B",
    explanation: "xy = k.\n\nk = 12 × 5 = 60.\n\nWhen x = 8:\n\ny = 60/8 = **7.5**.",
    page: 25,
    hasImage: false
  },
  {
    id: "math_tough_248",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 248,
    text: "z varies jointly as x and the square root of y. If z = 24 when x = 4 and y = 9, find z when x = 6 and y = 16.",
    options: {
      A: "32",
      B: "36",
      C: "40",
      D: "48"
    },
    answer: "D",
    explanation: "z = kx√y.\n\n24 = k × 4 × 3.\n\nk = 2.\n\nTherefore:\n\nz = 2 × 6 × √16 = **48**.",
    page: 25,
    hasImage: false
  },
  {
    id: "math_tough_249",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 249,
    text: "y varies partly as x and is partly constant. If y = 17 when x = 3 and y = 27 when x = 8, find y when x = 12.",
    options: {
      A: "31",
      B: "33",
      C: "35",
      D: "37"
    },
    answer: "C",
    explanation: "Let y = mx + c.\n\n27 − 17 = m(8 − 3).\n\n10 = 5m.\n\nm = 2.\n\n17 = 2(3) + c.\n\nc = 11.\n\nWhen x = 12:\n\ny = 2(12) + 11 = **35**.",
    page: 25,
    hasImage: false
  },
  {
    id: "math_tough_250",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 250,
    text: "A quantity varies inversely as the square of x. If x increases by 20%, what is the percentage decrease in the quantity?",
    options: {
      A: "20%",
      B: "25%",
      C: "30.56%",
      D: "44%"
    },
    answer: "C",
    explanation: "New x = 1.2x.\n\nThe new quantity is proportional to:\n\n1/(1.2)² = 1/1.44 ≈ 0.6944.\n\nPercentage decrease = (1 − 0.6944) × 100 = **30.56%**.",
    page: 25,
    hasImage: false
  },
  {
    id: "math_tough_251",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 251,
    text: "The nth term of an arithmetic progression is Tₙ = 5n − 2. Find the 25th term.",
    options: {
      A: "115",
      B: "120",
      C: "123",
      D: "125"
    },
    answer: "C",
    explanation: "T₂₅ = 5(25) − 2 = 125 − 2 = **123**.",
    page: 26,
    hasImage: false
  },
  {
    id: "math_tough_252",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 252,
    text: "Find the sum of the first 30 terms of the arithmetic progression:\n\n4, 9, 14, 19, ...",
    options: {
      A: "2,145",
      B: "2,250",
      C: "2,295",
      D: "2,415"
    },
    answer: "C",
    explanation: "a = 4, d = 5, n = 30.\n\nSₙ = n/2 [2a + (n − 1)d].\n\nS₃₀ = 30/2 [2(4) + 29(5)].\n\n= 15(8 + 145).\n\n= 15 × 153 = **2,295**.",
    page: 26,
    hasImage: false
  },
  {
    id: "math_tough_253",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 253,
    text: "The 5th term of an arithmetic progression is 18 and the 12th term is 46. Find its first term.",
    options: {
      A: "2",
      B: "4",
      C: "6",
      D: "8"
    },
    answer: "A",
    explanation: "T₅ = a + 4d = 18.\n\nT₁₂ = a + 11d = 46.\n\nSubtracting:\n\n7d = 28.\n\nd = 4.\n\na = 18 − 4(4) = **2**.",
    page: 26,
    hasImage: false
  },
  {
    id: "math_tough_254",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 254,
    text: "Find the 7th term of the geometric progression:\n\n2, 6, 18, 54, ...",
    options: {
      A: "486",
      B: "729",
      C: "1,458",
      D: "2,187"
    },
    answer: "C",
    explanation: "a = 2, r = 3.\n\nT₇ = ar⁶.\n\n= 2 × 3⁶.\n\n= 2 × 729 = **1,458**.",
    page: 26,
    hasImage: false
  },
  {
    id: "math_tough_255",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 255,
    text: "Find the sum of the first five terms of a geometric progression whose first term is 3 and common ratio is 2.",
    options: {
      A: "45",
      B: "48",
      C: "93",
      D: "96"
    },
    answer: "C",
    explanation: "Sₙ = a(rⁿ − 1)/(r − 1).\n\nS₅ = 3(2⁵ − 1)/(2 − 1).\n\n= 3(32 − 1) = **93**.",
    page: 26,
    hasImage: false
  },
  {
    id: "math_tough_256",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 256,
    text: "Find the sum to infinity of the geometric progression:\n\n12, 6, 3, 1.5, ...",
    options: {
      A: "18",
      B: "24",
      C: "30",
      D: "36"
    },
    answer: "B",
    explanation: "a = 12 and r = ½.\n\nS∞ = a/(1 − r).\n\n= 12/(1 − ½) = **24**.",
    page: 26,
    hasImage: false
  },
  {
    id: "math_tough_257",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Binary Operations",
    bookQuestionNum: 257,
    text: "A binary operation is defined by:\n\na * b = a + b + 2.\n\nFind the identity element.",
    options: {
      A: "−2",
      B: "−1",
      C: "0",
      D: "2"
    },
    answer: "A",
    explanation: "Let the identity be e.\n\na * e = a.\n\na + e + 2 = a.\n\nTherefore, e = **−2**.",
    page: 26,
    hasImage: false
  },
  {
    id: "math_tough_258",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Binary Operations",
    bookQuestionNum: 258,
    text: "A binary operation is defined by:\n\na * b = ab − a − b + 2.\n\nFind the inverse of 5.",
    options: {
      A: "1/4",
      B: "1/2",
      C: "5/4",
      D: "2"
    },
    answer: "C",
    explanation: "The identity element is 2.\n\nLet the inverse of 5 be b.\n\n5b − 5 − b + 2 = 2.\n\n4b = 5.\n\nTherefore, b = **5/4**.",
    page: 26,
    hasImage: false
  },
  {
    id: "math_tough_259",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Binary Operations",
    bookQuestionNum: 259,
    text: "On the set of integers, an operation is defined by:\n\na * b = a + b − 1.\n\nWhich statement is correct?",
    options: {
      A: "It is not closed on integers.",
      B: "It is commutative.",
      C: "It is not associative.",
      D: "It has no identity."
    },
    answer: "B",
    explanation: "a * b = a + b − 1.\n\nb * a = b + a − 1.\n\nSince a + b = b + a, the operation is commutative.",
    page: 26,
    hasImage: false
  },
  {
    id: "math_tough_260",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Matrices & Determinants",
    bookQuestionNum: 260,
    text: "Given:\n\nA = [1  2; 3  1]\n\nB = [2  0; 1  4]\n\nFind AB.",
    options: {
      A: "[2  8; 7  4]",
      B: "[4  8; 7  4]",
      C: "[4  4; 7  8]",
      D: "[3  8; 6  4]"
    },
    answer: "B",
    explanation: "Multiply rows of A by columns of B.\n\nFirst row: (1 × 2 + 2 × 1) = 4; (1 × 0 + 2 × 4) = 8.\n\nSecond row: (3 × 2 + 1 × 1) = 7; (3 × 0 + 1 × 4) = 4.\n\nTherefore:\n\nAB = [4  8; 7  4].",
    page: 26,
    hasImage: false
  },
  {
    id: "math_tough_261",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Matrices & Determinants",
    bookQuestionNum: 261,
    text: "Find the determinant of:\n\n[4  3; 2  5]",
    options: {
      A: "8",
      B: "12",
      C: "14",
      D: "26"
    },
    answer: "C",
    explanation: "For a 2 × 2 matrix:\n\n|A| = ad − bc.\n\n= (4 × 5) − (3 × 2).\n\n= 20 − 6 = **14**.",
    page: 27,
    hasImage: false
  },
  {
    id: "math_tough_262",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Matrices & Determinants",
    bookQuestionNum: 262,
    text: "Find the inverse of:\n\n[2  1; 5  3]",
    options: {
      A: "[3  −1; −5  2]",
      B: "[3  1; 5  2]",
      C: "[2  −1; −5  3]",
      D: "[3  −5; −1  2]"
    },
    answer: "A",
    explanation: "Determinant = (2 × 3) − (1 × 5) = 1.\n\nThe inverse is obtained by swapping the diagonal elements and changing the signs of the other elements.",
    page: 27,
    hasImage: false
  },
  {
    id: "math_tough_263",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Simultaneous Equations",
    bookQuestionNum: 263,
    text: "If:\n\n2x + y = 7\n\nx + y = 4\n\nFind x and y.",
    options: {
      A: "x = 1, y = 3",
      B: "x = 3, y = 1",
      C: "x = 4, y = −1",
      D: "x = −1, y = 3"
    },
    answer: "B",
    explanation: "Subtract the second equation from the first:\n\nx = 3.\n\nSubstitute into x + y = 4:\n\n3 + y = 4.\n\nTherefore, y = 1.",
    page: 27,
    hasImage: false
  },
  {
    id: "math_tough_264",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Matrices & Determinants",
    bookQuestionNum: 264,
    text: "Evaluate the determinant:\n\n|1  2  1; 0  3  2; 2  1  0|",
    options: {
      A: "−10",
      B: "−6",
      C: "0",
      D: "8"
    },
    answer: "C",
    explanation: "Expanding along the first row:\n\n= 1(3 × 0 − 2 × 1) − 2(0 × 0 − 2 × 2) + 1(0 × 1 − 3 × 2).\n\n= −2 + 8 − 6 = **0**.",
    page: 27,
    hasImage: false
  },
  {
    id: "math_tough_265",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Polynomials & Remainder Theorem",
    bookQuestionNum: 265,
    text: "The remainder when 2x³ − 3x² + 4x − 5 is divided by x − 2 is",
    options: {
      A: "3",
      B: "5",
      C: "7",
      D: "9"
    },
    answer: "C",
    explanation: "By the remainder theorem, substitute x = 2.\n\nRemainder = 2(2³) − 3(2²) + 4(2) − 5.\n\n= 16 − 12 + 8 − 5 = **7**.",
    page: 27,
    hasImage: false
  },
  {
    id: "math_tough_266",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebra: Quadratic Equations",
    bookQuestionNum: 266,
    text: "The sum and product of the roots of 3x² − 11x + 6 = 0 are respectively",
    options: {
      A: "11/3 and 2",
      B: "3 and 11/3",
      C: "11 and 6",
      D: "6 and 11/3"
    },
    answer: "A",
    explanation: "Sum = −b/a = 11/3.\n\nProduct = c/a = 6/3 = 2.",
    page: 27,
    hasImage: false
  },
  {
    id: "math_tough_267",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Polynomials & Remainder Theorem",
    bookQuestionNum: 267,
    text: "Factorise:\n\nx³ + 2x² − x − 2.",
    options: {
      A: "(x + 2)(x − 1)(x + 1)",
      B: "(x − 2)(x + 1)²",
      C: "(x + 2)(x + 1)²",
      D: "(x − 2)(x − 1)(x + 1)"
    },
    answer: "A",
    explanation: "Group the terms:\n\nx²(x + 2) − 1(x + 2).\n\n= (x² − 1)(x + 2).\n\n= (x − 1)(x + 1)(x + 2).",
    page: 27,
    hasImage: false
  },
  {
    id: "math_tough_268",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Algebraic Fractions",
    bookQuestionNum: 268,
    text: "Make a the subject of the formula:\n\nv² = u² + 2as.",
    options: {
      A: "(v² + u²)/(2s)",
      B: "(v² − u²)/(2s)",
      C: "2s/(v² − u²)",
      D: "(u² − v²)/(2s)"
    },
    answer: "B",
    explanation: "v² − u² = 2as.\n\nDivide both sides by 2s:\n\na = **(v² − u²)/(2s)**.",
    page: 27,
    hasImage: false
  },
  {
    id: "math_tough_269",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Inequalities",
    bookQuestionNum: 269,
    text: "Find the solution set of:\n\n2x + 1 ≤ 7\n\n3x − 2 > 1",
    options: {
      A: "x ≤ 3",
      B: "x > 1",
      C: "1 < x ≤ 3",
      D: "x < 1"
    },
    answer: "C",
    explanation: "First inequality gives x ≤ 3.\n\nSecond inequality gives x > 1.\n\nCombining them:\n\n**1 < x ≤ 3**.",
    page: 27,
    hasImage: false
  },
  {
    id: "math_tough_270",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Simultaneous Equations",
    bookQuestionNum: 270,
    text: "Solve simultaneously:\n\nx + y = 5\n\ny = x² − 3x + 2.",
    options: {
      A: "(3, 2) or (−1, 6)",
      B: "(2, 3) or (−1, 6)",
      C: "(3, 2) or (1, 4)",
      D: "(2, 3) or (1, 4)"
    },
    answer: "A",
    explanation: "From the first equation, y = 5 − x.\n\nSubstitute:\n\n5 − x = x² − 3x + 2.\n\nx² − 2x − 3 = 0.\n\n(x − 3)(x + 1) = 0.\n\nTherefore, x = 3 or −1.\n\nThe corresponding points are (3, 2) and (−1, 6).",
    page: 27,
    hasImage: false
  },
  {
    id: "math_tough_271",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 271,
    text: "The nth term of a sequence is Tₙ = 3n² − 2n. Find the difference between the 6th and 4th terms.",
    options: {
      A: "32",
      B: "48",
      C: "56",
      D: "64"
    },
    answer: "C",
    explanation: "T₆ = 3(6²) − 2(6) = 96.\n\nT₄ = 3(4²) − 2(4) = 40.\n\nDifference = 96 − 40 = **56**.",
    page: 28,
    hasImage: false
  },
  {
    id: "math_tough_272",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 272,
    text: "An arithmetic progression has a first term of 8 and a 15th term of 50. Find the sum of its first 15 terms.",
    options: {
      A: "420",
      B: "435",
      C: "450",
      D: "465"
    },
    answer: "B",
    explanation: "Sₙ = n/2(a + l).\n\nS₁₅ = 15/2(8 + 50).\n\n= 15/2 × 58 = **435**.",
    page: 28,
    hasImage: false
  },
  {
    id: "math_tough_273",
    originalChapter: 4,
    chapterTitle: "Sequences, Series & Progression",
    topic: "Sequences & Series: AP & GP",
    bookQuestionNum: 273,
    text: "A population doubles every 5 years. If its present population is 12,000, what will it be after 20 years?",
    options: {
      A: "48,000",
      B: "96,000",
      C: "144,000",
      D: "192,000"
    },
    answer: "D",
    explanation: "Number of doubling periods = 20/5 = 4.\n\nPopulation = 12,000 × 2⁴.\n\n= 12,000 × 16 = **192,000**.",
    page: 28,
    hasImage: false
  },
  {
    id: "math_tough_274",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Binary Operations",
    bookQuestionNum: 274,
    text: "The operation * is defined by:\n\na * b = ab − a − b + 2.\n\nFind 3 * 4.",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8"
    },
    answer: "C",
    explanation: "3 * 4 = (3 × 4) − 3 − 4 + 2.\n\n= 12 − 3 − 4 + 2 = **7**.",
    page: 28,
    hasImage: false
  },
  {
    id: "math_tough_275",
    originalChapter: 7,
    chapterTitle: "Functions, Matrices & Vectors",
    topic: "Matrices & Determinants",
    bookQuestionNum: 275,
    text: "If matrix A has order 2 × 3 and matrix B has order 3 × 2, the order of AB is",
    options: {
      A: "2 × 2",
      B: "3 × 3",
      C: "2 × 3",
      D: "3 × 2"
    },
    answer: "A",
    explanation: "The inner dimensions are both 3, so multiplication is possible.\n\nThe product has the outer dimensions: **2 × 2**.",
    page: 28,
    hasImage: false
  },
  {
    id: "math_tough_276",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Variations",
    bookQuestionNum: 276,
    text: "A variable y varies directly as x and inversely as z². If y = 10 when x = 4 and z = 2, find y when x = 9 and z = 3.",
    options: {
      A: "10",
      B: "12.5",
      C: "15",
      D: "20"
    },
    answer: "A",
    explanation: "y = kx/z².\n\n10 = 4k/4.\n\nk = 10.\n\nWhen x = 9 and z = 3:\n\ny = 10 × 9/3² = **10**.",
    page: 28,
    hasImage: false
  },
  {
    id: "math_tough_277",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Inequalities",
    bookQuestionNum: 277,
    text: "Find the integer values of x satisfying:\n\n2x − 3 < 7\n\nx + 4 ≥ 1.",
    options: {
      A: "−2, −1, 0, 1, 2, 3, 4",
      B: "−3, −2, −1, 0, 1, 2, 3, 4",
      C: "−2, −1, 0, 1, 2, 3",
      D: "0, 1, 2, 3"
    },
    answer: "B",
    explanation: "First inequality gives x < 5.\n\nSecond inequality gives x ≥ −3.\n\nTherefore, the integer values range from −3 to 4.",
    page: 28,
    hasImage: false
  },
  {
    id: "math_tough_278",
    originalChapter: 5,
    chapterTitle: "Algebra: Equations & Polynomials",
    topic: "Polynomials & Remainder Theorem",
    bookQuestionNum: 278,
    text: "One root of x³ − 4x² + x + 6 = 0 is 2. Find the product of the other two roots.",
    options: {
      A: "−3",
      B: "−2",
      C: "2",
      D: "3"
    },
    answer: "A",
    explanation: "Dividing the cubic by x − 2 gives:\n\nx² − 2x − 3 = 0.\n\nFactorising:\n\n(x − 3)(x + 1) = 0.\n\nThe other roots are 3 and −1.\n\nTheir product = **−3**.",
    page: 28,
    hasImage: false
  },
  {
    id: "math_tough_279",
    originalChapter: 6,
    chapterTitle: "Simultaneous Equations, Inequalities & Variations",
    topic: "Simultaneous Equations",
    bookQuestionNum: 279,
    text: "If:\n\n2x + y = 11\n\nx − y = 1\n\nFind x² + y².",
    options: {
      A: "25",
      B: "29",
      C: "34",
      D: "40"
    },
    answer: "A",
    explanation: "Adding the two equations:\n\n3x = 12.\n\nx = 4.\n\nSubstitute into x − y = 1:\n\n4 − y = 1.\n\ny = 3.\n\nTherefore:\n\nx² + y² = 4² + 3² = **25**.",
    page: 28,
    hasImage: false
  },
  {
    id: "math_tough_280",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 280,
    text: "The curve y = x³ − 3x² − 9x + 5 has stationary points where",
    options: {
      A: "x = −1 or 3",
      B: "x = 1 or −3",
      C: "x = −2 or 3",
      D: "x = 0 or 3"
    },
    answer: "A",
    explanation: "dy/dx = 3x² − 6x − 9.\n\n= 3(x² − 2x − 3).\n\n= 3(x − 3)(x + 1).\n\nAt stationary points, dy/dx = 0.\n\nTherefore, x = 3 or x = −1.",
    page: 28,
    hasImage: false
  },
  {
    id: "math_tough_281",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Euclidean Geometry: Polygons",
    bookQuestionNum: 281,
    text: "Two parallel lines are cut by a transversal. If one corresponding angle is 3x + 15° and the other is 5x − 25°, find x.",
    options: {
      A: "15",
      B: "20",
      C: "25",
      D: "30"
    },
    answer: "B",
    explanation: "Corresponding angles are equal.\n\n3x + 15 = 5x − 25.\n\n40 = 2x.\n\nx = **20**.",
    page: 29,
    hasImage: false
  },
  {
    id: "math_tough_282",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Euclidean Geometry: Polygons",
    bookQuestionNum: 282,
    text: "The angles of a triangle are in the ratio 2:3:4. Find the largest angle.",
    options: {
      A: "60°",
      B: "70°",
      C: "80°",
      D: "90°"
    },
    answer: "C",
    explanation: "Total ratio = 9.\n\nOne part = 180°/9 = 20°.\n\nLargest angle = 4 × 20° = **80°**.",
    page: 29,
    hasImage: false
  },
  {
    id: "math_tough_283",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Euclidean Geometry: Polygons",
    bookQuestionNum: 283,
    text: "Each exterior angle of a regular polygon is 24°. How many sides does the polygon have?",
    options: {
      A: "12",
      B: "15",
      C: "18",
      D: "20"
    },
    answer: "B",
    explanation: "Number of sides = 360°/24° = **15**.",
    page: 29,
    hasImage: false
  },
  {
    id: "math_tough_284",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Euclidean Geometry: Polygons",
    bookQuestionNum: 284,
    text: "How many diagonals does a 15-sided polygon have?",
    options: {
      A: "75",
      B: "80",
      C: "90",
      D: "105"
    },
    answer: "C",
    explanation: "Number of diagonals = n(n − 3)/2.\n\n= 15(15 − 3)/2.\n\n= 15 × 12/2 = **90**.",
    page: 29,
    hasImage: false
  },
  {
    id: "math_tough_285",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Circle Geometry & Theorems",
    bookQuestionNum: 285,
    text: "ABCD is a cyclic quadrilateral. If angle ABC = 3x + 10° and angle ADC = 5x − 10°, find x.",
    options: {
      A: "20",
      B: "22.5",
      C: "25",
      D: "30"
    },
    answer: "B",
    explanation: "Opposite angles in a cyclic quadrilateral add up to 180°.\n\n3x + 10 + 5x − 10 = 180.\n\n8x = 180.\n\nx = **22.5**.",
    page: 29,
    hasImage: false
  },
  {
    id: "math_tough_286",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Circle Geometry & Theorems",
    bookQuestionNum: 286,
    text: "Two chords intersect inside a circle. One chord is divided into segments of 4 cm and 9 cm. The other is divided into segments of 6 cm and x cm. Find x.",
    options: {
      A: "4 cm",
      B: "5 cm",
      C: "6 cm",
      D: "8 cm"
    },
    answer: "C",
    explanation: "By the intersecting chords theorem:\n\n4 × 9 = 6 × x.\n\n36 = 6x.\n\nx = **6 cm**.",
    page: 29,
    hasImage: false
  },
  {
    id: "math_tough_287",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Circle Geometry & Theorems",
    bookQuestionNum: 287,
    text: "A chord of a circle of radius 13 cm is 5 cm from the centre. Find its length.",
    options: {
      A: "12 cm",
      B: "18 cm",
      C: "24 cm",
      D: "26 cm"
    },
    answer: "C",
    explanation: "The perpendicular from the centre bisects the chord.\n\nHalf-chord = √(13² − 5²).\n\n= √(169 − 25) = √144 = 12 cm.\n\nFull chord = 2 × 12 = **24 cm**.",
    page: 29,
    hasImage: false
  },
  {
    id: "math_tough_288",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Circle Geometry & Theorems",
    bookQuestionNum: 288,
    text: "A tangent touches a circle at P. The angle between the tangent and chord PQ is 42°. Find the angle in the alternate segment subtended by PQ.",
    options: {
      A: "21°",
      B: "42°",
      C: "48°",
      D: "84°"
    },
    answer: "B",
    explanation: "By the alternate segment theorem, the angle between the tangent and chord equals the angle in the opposite segment.",
    page: 29,
    hasImage: false
  },
  {
    id: "math_tough_289",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: Plane Figures",
    bookQuestionNum: 289,
    text: "The diagonal of a rectangle is 25 cm and one side is 7 cm. Find the other side.",
    options: {
      A: "18 cm",
      B: "20 cm",
      C: "24 cm",
      D: "32 cm"
    },
    answer: "C",
    explanation: "Using Pythagoras:\n\nOther side = √(25² − 7²).\n\n= √(625 − 49).\n\n= √576 = **24 cm**.",
    page: 29,
    hasImage: false
  },
  {
    id: "math_tough_290",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Euclidean Geometry: Polygons",
    bookQuestionNum: 290,
    text: "Two similar triangles have areas in the ratio 25:49. If the corresponding side of the smaller triangle is 15 cm, find the corresponding side of the larger triangle.",
    options: {
      A: "18 cm",
      B: "20 cm",
      C: "21 cm",
      D: "24 cm"
    },
    answer: "C",
    explanation: "Ratio of corresponding sides = √25 : √49 = 5:7.\n\nLarger side = 15 × 7/5 = **21 cm**.",
    page: 29,
    hasImage: false
  },
  {
    id: "math_tough_291",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: Plane Figures",
    bookQuestionNum: 291,
    text: "Find the area of a triangle whose sides are 13 cm, 14 cm and 15 cm.",
    options: {
      A: "72 cm²",
      B: "78 cm²",
      C: "84 cm²",
      D: "90 cm²"
    },
    answer: "C",
    explanation: "Using Heron's formula:\n\ns = (13 + 14 + 15)/2 = 21.\n\nArea = √[s(s − a)(s − b)(s − c)].\n\n= √[21 × 8 × 7 × 6].\n\n= √7056 = **84 cm²**.",
    page: 30,
    hasImage: false
  },
  {
    id: "math_tough_292",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: Plane Figures",
    bookQuestionNum: 292,
    text: "A trapezium has parallel sides of 12 cm and 20 cm and height 9 cm. Find its are",
    options: {
      A: "A. 126 cm²",
      B: "135 cm²",
      C: "144 cm²",
      D: "162 cm²"
    },
    answer: "C",
    explanation: "Area = ½(a + b)h.\n\n= ½(12 + 20) × 9.\n\n= 16 × 9 = **144 cm²**.",
    page: 30,
    hasImage: false
  },
  {
    id: "math_tough_293",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: Plane Figures",
    bookQuestionNum: 293,
    text: "Find the length of an arc subtending an angle of 60° at the centre of a circle of radius 21 cm.",
    options: {
      A: "5π cm",
      B: "7π cm",
      C: "14π cm",
      D: "21π cm"
    },
    answer: "B",
    explanation: "Arc length = (θ/360°) × 2πr.\n\n= (60/360) × 2π × 21.\n\n= **7π cm**.",
    page: 30,
    hasImage: false
  },
  {
    id: "math_tough_294",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: Plane Figures",
    bookQuestionNum: 294,
    text: "Find the area of a sector of a circle of radius 6 cm and angle 120°.",
    options: {
      A: "6π cm²",
      B: "12π cm²",
      C: "18π cm²",
      D: "24π cm²"
    },
    answer: "B",
    explanation: "Sector area = (θ/360°) × πr².\n\n= (120/360) × π × 6².\n\n= **12π cm²**.",
    page: 30,
    hasImage: false
  },
  {
    id: "math_tough_295",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: Plane Figures",
    bookQuestionNum: 295,
    text: "A segment of a circle of radius 4 cm is cut off by a 90° sector. Find the area of the minor segment.",
    options: {
      A: "4π − 8 cm²",
      B: "8π − 4 cm²",
      C: "4π + 8 cm²",
      D: "16π − 8 cm²"
    },
    answer: "A",
    explanation: "Area of sector = ¼ × π × 4² = 4π cm².\n\nArea of triangle = ½ × 4 × 4 = 8 cm².\n\nMinor segment = 4π − 8 cm².",
    page: 30,
    hasImage: false
  },
  {
    id: "math_tough_296",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: Plane Figures",
    bookQuestionNum: 296,
    text: "Find the circumference of a circle whose area is 154 cm². Take π = 22/7.",
    options: {
      A: "22 cm",
      B: "33 cm",
      C: "44 cm",
      D: "55 cm"
    },
    answer: "C",
    explanation: "πr² = 154.\n\n(22/7)r² = 154.\n\nr² = 49.\n\nr = 7 cm.\n\nCircumference = 2πr = 2 × 22/7 × 7 = **44 cm**.",
    page: 30,
    hasImage: false
  },
  {
    id: "math_tough_297",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 297,
    text: "Find the total surface area of a closed cylinder of radius 3 cm and height 7 cm.",
    options: {
      A: "30π cm²",
      B: "42π cm²",
      C: "60π cm²",
      D: "84π cm²"
    },
    answer: "C",
    explanation: "Total surface area = 2πr(r + h).\n\n= 2π × 3 × (3 + 7).\n\n= **60π cm²**.",
    page: 30,
    hasImage: false
  },
  {
    id: "math_tough_298",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 298,
    text: "A cone has radius 5 cm and perpendicular height 12 cm. Find its volume.",
    options: {
      A: "60π cm³",
      B: "80π cm³",
      C: "100π cm³",
      D: "120π cm³"
    },
    answer: "C",
    explanation: "Volume = ⅓πr²h.\n\n= ⅓ × π × 5² × 12.\n\n= **100π cm³**.",
    page: 30,
    hasImage: false
  },
  {
    id: "math_tough_299",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 299,
    text: "A frustum of a cone has height 4 cm and radii 5 cm and 3 cm. Find its volume.",
    options: {
      A: "49π/3 cm³",
      B: "98π/3 cm³",
      C: "196π/3 cm³",
      D: "245π/3 cm³"
    },
    answer: "C",
    explanation: "Volume = πh/3 (R² + Rr + r²).\n\n= 4π/3 (25 + 15 + 9).\n\n= 4π/3 × 49.\n\n= **196π/3 cm³**.",
    page: 30,
    hasImage: false
  },
  {
    id: "math_tough_300",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 300,
    text: "Find the total surface area of a sphere of radius 3 cm.",
    options: {
      A: "9π cm²",
      B: "18π cm²",
      C: "27π cm²",
      D: "36π cm²"
    },
    answer: "D",
    explanation: "Surface area = 4πr².\n\n= 4π × 3² = **36π cm²**.",
    page: 30,
    hasImage: false
  },
  {
    id: "math_tough_301",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 301,
    text: "Find the volume of a hemisphere of radius 6 cm.",
    options: {
      A: "72π cm³",
      B: "108π cm³",
      C: "144π cm³",
      D: "288π cm³"
    },
    answer: "C",
    explanation: "Volume = ⅔πr³.\n\n= ⅔ × π × 6³.\n\n= ⅔ × 216π = **144π cm³**.",
    page: 31,
    hasImage: false
  },
  {
    id: "math_tough_302",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 302,
    text: "A cuboid measures 10 cm by 8 cm by 6 cm. A cube of side 2 cm is removed from it. Find the remaining volume.",
    options: {
      A: "456 cm³",
      B: "464 cm³",
      C: "472 cm³",
      D: "480 cm³"
    },
    answer: "C",
    explanation: "Cuboid volume = 10 × 8 × 6 = 480 cm³.\n\nCube volume = 2³ = 8 cm³.\n\nRemaining volume = 480 − 8 = **472 cm³**.",
    page: 31,
    hasImage: false
  },
  {
    id: "math_tough_303",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Earth Geometry & Spherical Geometry",
    bookQuestionNum: 303,
    text: "Two places lie on the equator and differ by 6° in longitude. Using 111 km per degree, find the distance between them.",
    options: {
      A: "555 km",
      B: "600 km",
      C: "666 km",
      D: "777 km"
    },
    answer: "C",
    explanation: "Distance = 6 × 111 = **666 km**.",
    page: 31,
    hasImage: false
  },
  {
    id: "math_tough_304",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Loci & Geometric Constructions",
    bookQuestionNum: 304,
    text: "The locus of a point that is equidistant from two fixed points A and B is",
    options: {
      A: "a circle.",
      B: "a perpendicular bisector.",
      C: "a straight line parallel to AB.",
      D: "an ellipse."
    },
    answer: "B",
    explanation: "Every point on the perpendicular bisector of AB is equidistant from A and B.",
    page: 31,
    hasImage: false
  },
  {
    id: "math_tough_305",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Loci & Geometric Constructions",
    bookQuestionNum: 305,
    text: "The locus of points equidistant from two intersecting straight lines consists of",
    options: {
      A: "two parallel lines.",
      B: "two angle bisectors.",
      C: "one circle.",
      D: "one perpendicular bisector."
    },
    answer: "B",
    explanation: "Points equidistant from two intersecting lines lie on the internal or external angle bisectors.",
    page: 31,
    hasImage: false
  },
  {
    id: "math_tough_306",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 306,
    text: "Find the gradient of the line joining (−3, 4) and (5, −8).",
    options: {
      A: "−3/2",
      B: "−1",
      C: "1",
      D: "3/2"
    },
    answer: "A",
    explanation: "Gradient = (y₂ − y₁)/(x₂ − x₁).\n\n= (−8 − 4)/(5 + 3).\n\n= −12/8 = **−3/2**.",
    page: 31,
    hasImage: false
  },
  {
    id: "math_tough_307",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 307,
    text: "Find the equation of the line passing through (2, 3) and (4, 7).",
    options: {
      A: "y = 2x − 1",
      B: "y = 2x + 1",
      C: "y = −2x + 7",
      D: "y = x + 2"
    },
    answer: "A",
    explanation: "Gradient = (7 − 3)/(4 − 2) = 2.\n\nUsing y − y₁ = m(x − x₁):\n\ny − 3 = 2(x − 2).\n\nTherefore, y = **2x − 1**.",
    page: 31,
    hasImage: false
  },
  {
    id: "math_tough_308",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 308,
    text: "Find the equation of the line perpendicular to 3x − 2y + 5 = 0 and passing through (4, 1).",
    options: {
      A: "2x + 3y − 11 = 0",
      B: "2x − 3y − 5 = 0",
      C: "3x + 2y − 14 = 0",
      D: "3x − 2y + 5 = 0"
    },
    answer: "A",
    explanation: "Rearrange the given line:\n\ny = 3x/2 + 5/2.\n\nIts gradient is 3/2.\n\nPerpendicular gradient = −2/3.\n\nUsing the point (4, 1):\n\ny − 1 = −⅔(x − 4).\n\nSimplifying gives **2x + 3y − 11 = 0**.",
    page: 31,
    hasImage: false
  },
  {
    id: "math_tough_309",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 309,
    text: "Find the distance between the points (−5, 2) and (7, −3).",
    options: {
      A: "12 units",
      B: "13 units",
      C: "14 units",
      D: "15 units"
    },
    answer: "B",
    explanation: "Distance = √[(x₂ − x₁)² + (y₂ − y₁)²].\n\n= √[12² + (−5)²].\n\n= √169 = **13 units**.",
    page: 31,
    hasImage: false
  },
  {
    id: "math_tough_310",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 310,
    text: "The midpoint of the line joining A(−4, 7) and B(8, −5) is",
    options: {
      A: "(2, 1)",
      B: "(4, 2)",
      C: "(−2, 6)",
      D: "(6, −2)"
    },
    answer: "A",
    explanation: "Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2).\n\n= ((−4 + 8)/2, (7 − 5)/2).\n\n= **(2, 1)**.",
    page: 31,
    hasImage: false
  },
  {
    id: "math_tough_311",
    originalChapter: 8,
    chapterTitle: "Coordinate Geometry",
    topic: "Coordinate Geometry",
    bookQuestionNum: 311,
    text: "Which value of k makes the points (1, 2), (3, 6) and (5, k) collinear?",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "12"
    },
    answer: "C",
    explanation: "Gradient between the first two points = (6 − 2)/(3 − 1) = 2.\n\nFor collinearity:\n\n(k − 6)/(5 − 3) = 2.\n\nk − 6 = 4.\n\nk = **10**.",
    page: 32,
    hasImage: false
  },
  {
    id: "math_tough_312",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Ratios",
    bookQuestionNum: 312,
    text: "Evaluate:\n\n2sin30° + 3cos60° + tan45°.",
    options: {
      A: "2.5",
      B: "3",
      C: "3.5",
      D: "4"
    },
    answer: "C",
    explanation: "sin30° = ½.\n\ncos60° = ½.\n\ntan45° = 1.\n\nTherefore:\n\n2(½) + 3(½) + 1 = **3.5**.",
    page: 32,
    hasImage: false
  },
  {
    id: "math_tough_313",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Equations",
    bookQuestionNum: 313,
    text: "Solve cos θ = ½ for 0° ≤ θ ≤ 360°.",
    options: {
      A: "30°, 150°",
      B: "60°, 300°",
      C: "60°, 120°",
      D: "120°, 240°"
    },
    answer: "B",
    explanation: "Cosine is positive in the first and fourth quadrants.\n\nThe reference angle is 60°.\n\nTherefore, θ = **60° or 300°**.",
    page: 32,
    hasImage: false
  },
  {
    id: "math_tough_314",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Sine & Cosine Rules",
    bookQuestionNum: 314,
    text: "In triangle ABC, angle A = 30°, angle B = 60° and side a = 8 cm. Find side b.",
    options: {
      A: "4√3 cm",
      B: "8√2 cm",
      C: "8√3 cm",
      D: "16 cm"
    },
    answer: "C",
    explanation: "Using the sine rule:\n\nb/sin60° = 8/sin30°.\n\nb = 8 × (sin60°/sin30°).\n\n= 8 × (√3/2)/(½).\n\n= **8√3 cm**.",
    page: 32,
    hasImage: false
  },
  {
    id: "math_tough_315",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Sine & Cosine Rules",
    bookQuestionNum: 315,
    text: "Two sides of a triangle are 8 cm and 11 cm, and their included angle is 60°. Find the third side.",
    options: {
      A: "√57 cm",
      B: "√73 cm",
      C: "√97 cm",
      D: "√145 cm"
    },
    answer: "C",
    explanation: "Using the cosine rule:\n\nc² = 8² + 11² − 2(8)(11)cos60°.\n\n= 64 + 121 − 88(½).\n\n= 185 − 44 = 97.\n\nTherefore, c = **√97 cm**.",
    page: 32,
    hasImage: false
  },
  {
    id: "math_tough_316",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Ratios",
    bookQuestionNum: 316,
    text: "Find the area of a triangle with sides 9 cm and 12 cm and included angle 150°.",
    options: {
      A: "13.5 cm²",
      B: "27 cm²",
      C: "36 cm²",
      D: "54 cm²"
    },
    answer: "B",
    explanation: "Area = ½ab sin C.\n\n= ½ × 9 × 12 × sin150°.\n\n= 54 × ½ = **27 cm²**.",
    page: 32,
    hasImage: false
  },
  {
    id: "math_tough_317",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Bearings & Trigonometric Surveying",
    bookQuestionNum: 317,
    text: "A plane travels 12 km due east and then 5 km due north. Find its displacement and bearing from its starting point, to the nearest degree.",
    options: {
      A: "13 km, 067°",
      B: "17 km, 067°",
      C: "13 km, 113°",
      D: "7 km, 023°"
    },
    answer: "A",
    explanation: "Displacement = √(12² + 5²) = 13 km.\n\nBearing is measured clockwise from north.\n\nAngle = tan⁻¹(12/5) ≈ 67°.\n\nTherefore, the bearing is 067°.",
    page: 32,
    hasImage: false
  },
  {
    id: "math_tough_318",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Bearings & Trigonometric Surveying",
    bookQuestionNum: 318,
    text: "From a point 30 m away from a building, the angle of elevation of its top is 60°. Find the building's height.",
    options: {
      A: "10√3 m",
      B: "15√3 m",
      C: "30√3 m",
      D: "60 m"
    },
    answer: "C",
    explanation: "tan60° = height/30.\n\n√3 = height/30.\n\nHeight = **30√3 m**.",
    page: 32,
    hasImage: false
  },
  {
    id: "math_tough_319",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Ratios",
    bookQuestionNum: 319,
    text: "The amplitude and period of y = 4sin2x, where x is measured in degrees, are",
    options: {
      A: "2 and 180°",
      B: "4 and 180°",
      C: "4 and 360°",
      D: "2 and 360°"
    },
    answer: "B",
    explanation: "Amplitude = 4.\n\nPeriod = 360°/2 = **180°**.",
    page: 32,
    hasImage: false
  },
  {
    id: "math_tough_320",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Ratios",
    bookQuestionNum: 320,
    text: "For y = 3cos(x − 60°), find the value of y when x = 60°.",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "D",
    explanation: "y = 3cos(60° − 60°).\n\n= 3cos0° = **3**.",
    page: 32,
    hasImage: false
  },
  {
    id: "math_tough_321",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Ratios",
    bookQuestionNum: 321,
    text: "Evaluate:\n\ntan135° + sin330° − cos180°.",
    options: {
      A: "−½",
      B: "0",
      C: "½",
      D: "3/2"
    },
    answer: "A",
    explanation: "tan135° = −1.\n\nsin330° = −½.\n\ncos180° = −1.\n\nTherefore:\n\n−1 − ½ − (−1) = **−½**.",
    page: 33,
    hasImage: false
  },
  {
    id: "math_tough_322",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Ratios",
    bookQuestionNum: 322,
    text: "If sin θ = 5/13 and θ is acute, find cos θ + tan θ.",
    options: {
      A: "169/156",
      B: "209/156",
      C: "204/65",
      D: "17/13"
    },
    answer: "B",
    explanation: "Using Pythagoras, the adjacent side is 12.\n\ncos θ = 12/13.\n\ntan θ = 5/12.\n\nTherefore:\n\n12/13 + 5/12 = 144/156 + 65/156 = **209/156**.",
    page: 33,
    hasImage: false
  },
  {
    id: "math_tough_323",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Trigonometry: Sine & Cosine Rules",
    bookQuestionNum: 323,
    text: "A triangle has sides 7 cm, 8 cm and 9 cm. Find the cosine of the angle opposite the longest side.",
    options: {
      A: "1/3",
      B: "1/2",
      C: "2/7",
      D: "3/4"
    },
    answer: "C",
    explanation: "Using the cosine rule:\n\ncos C = (7² + 8² − 9²)/(2 × 7 × 8).\n\n= (49 + 64 − 81)/112.\n\n= 32/112 = **2/7**.",
    page: 33,
    hasImage: false
  },
  {
    id: "math_tough_324",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Loci & Geometric Constructions",
    bookQuestionNum: 324,
    text: "In a construction, the perpendicular bisector of a line segment is drawn by using",
    options: {
      A: "two arcs of different radii from the same endpoint.",
      B: "equal-radius arcs from each endpoint, with radius greater than half the segment.",
      C: "a protractor only.",
      D: "a ruler only."
    },
    answer: "B",
    explanation: "The equal-radius arcs intersect at points equidistant from the two endpoints. Joining the intersection points produces the perpendicular bisector.",
    page: 33,
    hasImage: false
  },
  {
    id: "math_tough_325",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Earth Geometry & Spherical Geometry",
    bookQuestionNum: 325,
    text: "Two places on the same longitude differ in latitude by 5°. Using 111 km per degree of latitude, find their approximate surface distance.",
    options: {
      A: "444 km",
      B: "555 km",
      C: "666 km",
      D: "777 km"
    },
    answer: "B",
    explanation: "Distance = 5 × 111 = **555 km**.",
    page: 33,
    hasImage: false
  },
  {
    id: "math_tough_326",
    originalChapter: 11,
    chapterTitle: "Geometry & Circle Theorems",
    topic: "Euclidean Geometry: Polygons",
    bookQuestionNum: 326,
    text: "Each interior angle of a regular polygon is 165°. Find the number of sides.",
    options: {
      A: "18",
      B: "20",
      C: "24",
      D: "30"
    },
    answer: "C",
    explanation: "Exterior angle = 180° − 165° = 15°.\n\nNumber of sides = 360°/15° = **24**.",
    page: 33,
    hasImage: false
  },
  {
    id: "math_tough_327",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: Plane Figures",
    bookQuestionNum: 327,
    text: "A circle has radius 7 cm and a sector of 90° is removed. Find the area of the remaining major sector.",
    options: {
      A: "49π/4 cm²",
      B: "49π/2 cm²",
      C: "147π/4 cm²",
      D: "49π cm²"
    },
    answer: "C",
    explanation: "Remaining angle = 360° − 90° = 270°.\n\nArea = (270/360) × π × 7².\n\n= ¾ × 49π = **147π/4 cm²**.",
    page: 33,
    hasImage: false
  },
  {
    id: "math_tough_328",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 328,
    text: "A triangular prism has a triangular cross-section of base 6 cm and perpendicular height 4 cm. If its length is 10 cm, find its volume.",
    options: {
      A: "60 cm³",
      B: "100 cm³",
      C: "120 cm³",
      D: "240 cm³"
    },
    answer: "C",
    explanation: "Area of triangular cross-section = ½ × 6 × 4 = 12 cm².\n\nVolume = 12 × 10 = **120 cm³**.",
    page: 33,
    hasImage: false
  },
  {
    id: "math_tough_329",
    originalChapter: 9,
    chapterTitle: "Mensuration & Geometry",
    topic: "Mensuration: 3D Solids",
    bookQuestionNum: 329,
    text: "A square-based pyramid has base side 8 cm and perpendicular height 9 cm. Find its volume.",
    options: {
      A: "144 cm³",
      B: "192 cm³",
      C: "256 cm³",
      D: "576 cm³"
    },
    answer: "B",
    explanation: "Volume = ⅓ × base area × height.\n\n= ⅓ × 8² × 9.\n\n= ⅓ × 64 × 9 = **192 cm³**.",
    page: 33,
    hasImage: false
  },
  {
    id: "math_tough_330",
    originalChapter: 10,
    chapterTitle: "Trigonometry",
    topic: "Bearings & Trigonometric Surveying",
    bookQuestionNum: 330,
    text: "A traveller moves 12 km on a bearing of 090° and then 5 km due north. Find the distance from the starting point.",
    options: {
      A: "7 km",
      B: "13 km",
      C: "17 km",
      D: "25 km"
    },
    answer: "B",
    explanation: "The two movements are perpendicular.\n\nDistance = √(12² + 5²) = √169 = **13 km**.",
    page: 33,
    hasImage: false
  },
  {
    id: "math_tough_331",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Calculus: Limits & Continuity",
    bookQuestionNum: 331,
    text: "Evaluate:\n\nlim₍ₓ→₃₎ (x² − 9)/(x − 3).",
    options: {
      A: "3",
      B: "6",
      C: "9",
      D: "12"
    },
    answer: "B",
    explanation: "x² − 9 = (x − 3)(x + 3).\n\nCancel the common factor:\n\nlim₍ₓ→₃₎ (x + 3) = **6**.",
    page: 34,
    hasImage: false
  },
  {
    id: "math_tough_332",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Calculus: Limits & Continuity",
    bookQuestionNum: 332,
    text: "Evaluate:\n\nlim₍ₓ→₀₎ [√(x + 4) − 2]/x.",
    options: {
      A: "½",
      B: "¼",
      C: "1",
      D: "2"
    },
    answer: "B",
    explanation: "Multiply by the conjugate:\n\n[√(x + 4) − 2]/x × [√(x + 4) + 2]/[√(x + 4) + 2].\n\nThis simplifies to:\n\n1/[√(x + 4) + 2].\n\nSubstituting x = 0 gives 1/(2 + 2) = **¼**.",
    page: 34,
    hasImage: false
  },
  {
    id: "math_tough_333",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 333,
    text: "Differentiate:\n\ny = 5x⁴ − 3x³ + 2x − 7.",
    options: {
      A: "20x³ − 9x² + 2",
      B: "20x³ − 3x² + 2",
      C: "5x³ − 9x² + 2",
      D: "20x⁴ − 9x³ + 2"
    },
    answer: "A",
    explanation: "Using the power rule:\n\nd(xⁿ)/dx = nxⁿ⁻¹.\n\nTherefore:\n\ndy/dx = **20x³ − 9x² + 2**.",
    page: 34,
    hasImage: false
  },
  {
    id: "math_tough_334",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 334,
    text: "Differentiate:\n\ny = (x² + 1)(3x − 2).",
    options: {
      A: "9x² − 4x + 3",
      B: "9x² − 4x + 1",
      C: "6x² + 3",
      D: "3x² − 4x + 3"
    },
    answer: "A",
    explanation: "Expand first:\n\ny = 3x³ − 2x² + 3x − 2.\n\nDifferentiate:\n\ndy/dx = **9x² − 4x + 3**.",
    page: 34,
    hasImage: false
  },
  {
    id: "math_tough_335",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 335,
    text: "Differentiate y = 3sin x − 2cos x and evaluate at x = 0°.",
    options: {
      A: "−3",
      B: "−2",
      C: "2",
      D: "3"
    },
    answer: "D",
    explanation: "dy/dx = 3cos x + 2sin x.\n\nAt x = 0°:\n\ndy/dx = 3(1) + 2(0) = **3**.",
    page: 34,
    hasImage: false
  },
  {
    id: "math_tough_336",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 336,
    text: "Find the gradient of y = 2x² − 5x + 3 at x = 3.",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8"
    },
    answer: "C",
    explanation: "dy/dx = 4x − 5.\n\nAt x = 3:\n\n4(3) − 5 = **7**.",
    page: 34,
    hasImage: false
  },
  {
    id: "math_tough_337",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 337,
    text: "At which values of x does y = x³ − 6x² + 9x + 2 have stationary points?",
    options: {
      A: "x = 1 and 3",
      B: "x = 2 and 4",
      C: "x = −1 and 3",
      D: "x = 1 and 4"
    },
    answer: "A",
    explanation: "dy/dx = 3x² − 12x + 9.\n\n= 3(x − 1)(x − 3).\n\nAt stationary points, dy/dx = 0.\n\nTherefore, x = **1 or 3**.",
    page: 34,
    hasImage: false
  },
  {
    id: "math_tough_338",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 338,
    text: "Find the minimum value of y = 2x² − 8x + 11.",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    explanation: "Complete the square:\n\ny = 2(x² − 4x) + 11.\n\ny = 2(x − 2)² + 3.\n\nThe minimum value is **3**.",
    page: 34,
    hasImage: false
  },
  {
    id: "math_tough_339",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 339,
    text: "The radius of a circle increases at 3 cm/s. Find the rate of increase of its area when its radius is 4 cm.",
    options: {
      A: "12π cm²/s",
      B: "18π cm²/s",
      C: "24π cm²/s",
      D: "36π cm²/s"
    },
    answer: "C",
    explanation: "A = πr².\n\nDifferentiate with respect to time:\n\ndA/dt = 2πr(dr/dt).\n\n= 2π × 4 × 3.\n\n= **24π cm²/s**.",
    page: 34,
    hasImage: false
  },
  {
    id: "math_tough_340",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 340,
    text: "The displacement of a particle is s = 4t³ − 3t² + 2t. Find its acceleration at t = 2 seconds.",
    options: {
      A: "36 m/s²",
      B: "42 m/s²",
      C: "48 m/s²",
      D: "54 m/s²"
    },
    answer: "B",
    explanation: "Velocity:\n\nv = ds/dt = 12t² − 6t + 2.\n\nAcceleration:\n\na = dv/dt = 24t − 6.\n\nAt t = 2:\n\na = 24(2) − 6 = **42 m/s²**.",
    page: 34,
    hasImage: false
  },
  {
    id: "math_tough_341",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Integration & Applications",
    bookQuestionNum: 341,
    text: "Evaluate:\n\n∫(6x² − 4x + 5) dx.",
    options: {
      A: "2x³ − 2x² + 5x + C",
      B: "6x³ − 4x² + 5x + C",
      C: "2x³ − 4x² + 5 + C",
      D: "3x² − 2x + 5 + C"
    },
    answer: "A",
    explanation: "Integrate each term:\n\n∫6x² dx = 2x³.\n\n∫−4x dx = −2x².\n\n∫5 dx = 5x.\n\nTherefore, the answer is **2x³ − 2x² + 5x + C**.",
    page: 35,
    hasImage: false
  },
  {
    id: "math_tough_342",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Integration & Applications",
    bookQuestionNum: 342,
    text: "Evaluate:\n\n∫₀² (3x² + 2x) dx.",
    options: {
      A: "8",
      B: "10",
      C: "12",
      D: "14"
    },
    answer: "C",
    explanation: "Integrate:\n\n∫(3x² + 2x)dx = x³ + x².\n\nApply the limits:\n\n[x³ + x²]₀².\n\n= (8 + 4) − 0 = **12**.",
    page: 35,
    hasImage: false
  },
  {
    id: "math_tough_343",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Integration & Applications",
    bookQuestionNum: 343,
    text: "Evaluate:\n\n∫cos x dx.",
    options: {
      A: "−sin x + C",
      B: "sin x + C",
      C: "−cos x + C",
      D: "tan x + C"
    },
    answer: "B",
    explanation: "The derivative of sin x is cos x.\n\nTherefore, ∫cos x dx = **sin x + C**.",
    page: 35,
    hasImage: false
  },
  {
    id: "math_tough_344",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Integration & Applications",
    bookQuestionNum: 344,
    text: "Find the area under the curve y = 2x + 1 between x = 0 and x = 3.",
    options: {
      A: "9 square units",
      B: "10 square units",
      C: "12 square units",
      D: "15 square units"
    },
    answer: "C",
    explanation: "Area = ∫₀³(2x + 1)dx.\n\n= [x² + x]₀³.\n\n= 9 + 3 = **12 square units**.",
    page: 35,
    hasImage: false
  },
  {
    id: "math_tough_345",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Integration & Applications",
    bookQuestionNum: 345,
    text: "Find the area enclosed between y = 4x and y = x² from x = 0 to x = 4.",
    options: {
      A: "16/3 square units",
      B: "24/3 square units",
      C: "32/3 square units",
      D: "64/3 square units"
    },
    answer: "C",
    explanation: "The upper curve is y = 4x.\n\nArea = ∫₀⁴(4x − x²)dx.\n\n= [2x² − x³/3]₀⁴.\n\n= 32 − 64/3.\n\n= **32/3 square units**.",
    page: 35,
    hasImage: false
  },
  {
    id: "math_tough_346",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Calculus: Limits & Continuity",
    bookQuestionNum: 346,
    text: "Evaluate:\n\nlim₍ₓ→∞₎ (5x² + 3x − 1)/(2x² − 4).",
    options: {
      A: "2",
      B: "2.5",
      C: "3",
      D: "5"
    },
    answer: "B",
    explanation: "Divide the numerator and denominator by x².\n\nAs x approaches infinity, the lower-order terms approach zero.\n\nThe limit is 5/2 = **2.5**.",
    page: 35,
    hasImage: false
  },
  {
    id: "math_tough_347",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 347,
    text: "Differentiate:\n\ny = x² + 3/x.",
    options: {
      A: "2x + 3/x²",
      B: "2x − 3/x²",
      C: "2x + 3/x³",
      D: "x − 3/x²"
    },
    answer: "B",
    explanation: "Rewrite:\n\ny = x² + 3x⁻¹.\n\nDifferentiate:\n\ndy/dx = 2x − 3x⁻².\n\n= **2x − 3/x²**.",
    page: 35,
    hasImage: false
  },
  {
    id: "math_tough_348",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 348,
    text: "Find the gradient of y = 2x² − 5x + 3 at x = 3.",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8"
    },
    answer: "C",
    explanation: "dy/dx = 4x − 5.\n\nAt x = 3:\n\n4 × 3 − 5 = **7**.",
    page: 35,
    hasImage: false
  },
  {
    id: "math_tough_349",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Differentiation & Applications",
    bookQuestionNum: 349,
    text: "A rectangle has perimeter 48 cm. What is its maximum possible area?",
    options: {
      A: "120 cm²",
      B: "132 cm²",
      C: "144 cm²",
      D: "156 cm²"
    },
    answer: "C",
    explanation: "For a fixed perimeter, maximum area occurs when the rectangle is a square.\n\nEach side = 48/4 = 12 cm.\n\nArea = 12 × 12 = **144 cm²**.",
    page: 35,
    hasImage: false
  },
  {
    id: "math_tough_350",
    originalChapter: 14,
    chapterTitle: "Calculus: Differentiation & Integration",
    topic: "Integration & Applications",
    bookQuestionNum: 350,
    text: "The rate of increase of a quantity is dy/dx = 6x − 4. If y = 5 when x = 1, find y when x = 3.",
    options: {
      A: "15",
      B: "18",
      C: "21",
      D: "25"
    },
    answer: "C",
    explanation: "Integrate:\n\ny = ∫(6x − 4)dx.\n\ny = 3x² − 4x + C.\n\nUsing x = 1 and y = 5:\n\n5 = 3 − 4 + C.\n\nC = 6.\n\nWhen x = 3:\n\ny = 3(9) − 4(3) + 6 = **21**.",
    page: 35,
    hasImage: false
  },
  {
    id: "math_tough_351",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 351,
    text: "The values 4, 6, 8 and 10 have frequencies 2, 3, 4 and 1 respectively. Find their mean.",
    options: {
      A: "6.8",
      B: "7.2",
      C: "7.6",
      D: "8.0"
    },
    answer: "B",
    explanation: "Mean = Σfx/Σf.\n\n= [4(2) + 6(3) + 8(4) + 10(1)]/10.\n\n= 72/10 = **7.2**.",
    page: 36,
    hasImage: false
  },
  {
    id: "math_tough_352",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 352,
    text: "Find the median of the data:\n\n12, 5, 9, 7, 15, 11, 8, 13, 6.",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "11"
    },
    answer: "B",
    explanation: "Arrange in ascending order:\n\n5, 6, 7, 8, 9, 11, 12, 13, 15.\n\nThere are nine values.\n\nMedian = fifth value = **9**.",
    page: 36,
    hasImage: false
  },
  {
    id: "math_tough_353",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 353,
    text: "In a grouped frequency table, the class with the highest frequency is called the",
    options: {
      A: "median class.",
      B: "modal class.",
      C: "lower quartile class.",
      D: "cumulative class."
    },
    answer: "B",
    explanation: "The modal class is the class interval with the highest frequency.",
    page: 36,
    hasImage: false
  },
  {
    id: "math_tough_354",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Data Presentation",
    bookQuestionNum: 354,
    text: "The cumulative frequencies of a data set are 4, 11, 19, 27 and 35. How many observations are in the fourth class?",
    options: {
      A: "4",
      B: "8",
      C: "11",
      D: "27"
    },
    answer: "B",
    explanation: "Fourth class frequency = 27 − 19 = **8**.",
    page: 36,
    hasImage: false
  },
  {
    id: "math_tough_355",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 355,
    text: "The grouped data has class intervals 0–10, 10–20 and 20–30 with frequencies 3, 5 and 2. Estimate the mean.",
    options: {
      A: "12",
      B: "14",
      C: "15",
      D: "16"
    },
    answer: "B",
    explanation: "Class midpoints are 5, 15 and 25.\n\nMean = Σfx/Σf.\n\n= [3(5) + 5(15) + 2(25)]/10.\n\n= 140/10 = **14**.",
    page: 36,
    hasImage: false
  },
  {
    id: "math_tough_356",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Data Presentation",
    bookQuestionNum: 356,
    text: "A sector in a pie chart represents 20% of the total dat",
    options: {
      A: "What is its angle?\n\nA. 36°",
      B: "54°",
      C: "72°",
      D: "90°"
    },
    answer: "C",
    explanation: "Angle = 20/100 × 360° = **72°**.",
    page: 36,
    hasImage: false
  },
  {
    id: "math_tough_357",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Data Presentation",
    bookQuestionNum: 357,
    text: "A histogram class has frequency 24 and class width 6. Find its frequency density.",
    options: {
      A: "3",
      B: "4",
      C: "6",
      D: "18"
    },
    answer: "B",
    explanation: "Frequency density = frequency/class width.\n\n= 24/6 = **4**.",
    page: 36,
    hasImage: false
  },
  {
    id: "math_tough_358",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Dispersion",
    bookQuestionNum: 358,
    text: "Find the range of the data:\n\n18, 25, 12, 34, 29, 16 and 41.",
    options: {
      A: "23",
      B: "25",
      C: "27",
      D: "29"
    },
    answer: "D",
    explanation: "Range = highest value − lowest value.\n\n= 41 − 12 = **29**.",
    page: 36,
    hasImage: false
  },
  {
    id: "math_tough_359",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Dispersion",
    bookQuestionNum: 359,
    text: "Find the population variance of 2, 4, 6, 8 and 10.",
    options: {
      A: "6",
      B: "8",
      C: "10",
      D: "12"
    },
    answer: "B",
    explanation: "Mean = 6.\n\nSquared deviations:\n\n(2 − 6)² = 16.\n\n(4 − 6)² = 4.\n\n(6 − 6)² = 0.\n\n(8 − 6)² = 4.\n\n(10 − 6)² = 16.\n\nVariance = (16 + 4 + 0 + 4 + 16)/5 = **8**.",
    page: 36,
    hasImage: false
  },
  {
    id: "math_tough_360",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Dispersion",
    bookQuestionNum: 360,
    text: "Find the population standard deviation of 3, 5, 7, 9 and 11.",
    options: {
      A: "2",
      B: "√8",
      C: "3",
      D: "4"
    },
    answer: "B",
    explanation: "Mean = 7.\n\nSquared deviations sum = 40.\n\nVariance = 40/5 = 8.\n\nStandard deviation = √8.",
    page: 36,
    hasImage: false
  },
  {
    id: "math_tough_361",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Dispersion",
    bookQuestionNum: 361,
    text: "Find the mean absolute deviation from the mean for the values 2, 4, 6 and 8.",
    options: {
      A: "1",
      B: "2",
      C: "2.5",
      D: "3"
    },
    answer: "B",
    explanation: "Mean = 5.\n\nAbsolute deviations = 3, 1, 1 and 3.\n\nMean deviation = (3 + 1 + 1 + 3)/4 = **2**.",
    page: 37,
    hasImage: false
  },
  {
    id: "math_tough_362",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Dispersion",
    bookQuestionNum: 362,
    text: "Find the interquartile range of:\n\n2, 4, 6, 8, 10, 12, 14, 16.",
    options: {
      A: "6",
      B: "8",
      C: "10",
      D: "12"
    },
    answer: "B",
    explanation: "Lower quartile Q₁ = (4 + 6)/2 = 5.\n\nUpper quartile Q₃ = (12 + 14)/2 = 13.\n\nInterquartile range = Q₃ − Q₁ = 13 − 5 = **8**.",
    page: 37,
    hasImage: false
  },
  {
    id: "math_tough_363",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 363,
    text: "If the mean of a set of values is 6, what is the mean when each value is multiplied by 3 and then increased by 4?",
    options: {
      A: "18",
      B: "20",
      C: "22",
      D: "24"
    },
    answer: "C",
    explanation: "New mean = 3(6) + 4.\n\n= 18 + 4 = **22**.",
    page: 37,
    hasImage: false
  },
  {
    id: "math_tough_364",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 364,
    text: "Class A has 20 students with an average score of 60. Class B has 30 students with an average score of 70. Find the combined average.",
    options: {
      A: "64",
      B: "65",
      C: "66",
      D: "68"
    },
    answer: "C",
    explanation: "Class A total = 20 × 60 = 1,200.\n\nClass B total = 30 × 70 = 2,100.\n\nCombined total = 3,300.\n\nCombined average = 3,300/50 = **66**.",
    page: 37,
    hasImage: false
  },
  {
    id: "math_tough_365",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 365,
    text: "A student scores 70, 65 and 80 in three tests carrying weights 2, 3 and 5 respectively. Find the weighted average.",
    options: {
      A: "70.5",
      B: "72.5",
      C: "73.5",
      D: "75.0"
    },
    answer: "C",
    explanation: "Weighted average = Σwx/Σw.\n\n= [70(2) + 65(3) + 80(5)]/10.\n\n= 735/10 = **73.5**.",
    page: 37,
    hasImage: false
  },
  {
    id: "math_tough_366",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Data Presentation",
    bookQuestionNum: 366,
    text: "The frequencies of four classes are 5, 8, 12 and 7. What is the cumulative frequency up to the third class?",
    options: {
      A: "13",
      B: "20",
      C: "25",
      D: "32"
    },
    answer: "C",
    explanation: "Cumulative frequency = 5 + 8 + 12 = **25**.",
    page: 37,
    hasImage: false
  },
  {
    id: "math_tough_367",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 367,
    text: "The grouped frequency distribution below has total frequency 40. Find the median class.\n\n| Class interval | Frequency |\n|---|---:|\n| 0–10 | 5 |\n| 10–20 | 9 |\n| 20–30 | 16 |\n| 30–40 | 10 |",
    options: {
      A: "0–10",
      B: "10–20",
      C: "20–30",
      D: "30–40"
    },
    answer: "C",
    explanation: "Median position = 40/2 = 20.\n\nCumulative frequencies = 5, 14, 30 and 40.\n\nThe 20th observation lies in the class **20–30**.",
    page: 37,
    hasImage: false
  },
  {
    id: "math_tough_368",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 368,
    text: "The mean of six numbers is 14. Five of the numbers are 8, 12, 15, 16 and 19. Find the sixth number.",
    options: {
      A: "12",
      B: "14",
      C: "16",
      D: "18"
    },
    answer: "B",
    explanation: "Total of six numbers = 6 × 14 = 84.\n\nSum of five known numbers = 70.\n\nSixth number = 84 − 70 = **14**.",
    page: 37,
    hasImage: false
  },
  {
    id: "math_tough_369",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 369,
    text: "The mean of 10 observations is 12. If one observation of 18 is replaced by 28, find the new mean.",
    options: {
      A: "12",
      B: "12.5",
      C: "13",
      D: "14"
    },
    answer: "C",
    explanation: "Original total = 10 × 12 = 120.\n\nReplacing 18 with 28 increases the total by 10.\n\nNew total = 130.\n\nNew mean = 130/10 = **13**.",
    page: 37,
    hasImage: false
  },
  {
    id: "math_tough_370",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 370,
    text: "Two fair dice are thrown. Find the probability that their sum is 10.",
    options: {
      A: "1/6",
      B: "1/9",
      C: "1/12",
      D: "1/18"
    },
    answer: "C",
    explanation: "Favourable outcomes:\n\n(4,6), (5,5), (6,4).\n\nProbability = 3/36 = **1/12**.",
    page: 37,
    hasImage: false
  },
  {
    id: "math_tough_371",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 371,
    text: "One card is drawn at random from a standard pack of 52 cards. Find the probability of drawing a king or a heart.",
    options: {
      A: "4/13",
      B: "5/13",
      C: "7/13",
      D: "1/2"
    },
    answer: "A",
    explanation: "Number of kings = 4.\n\nNumber of hearts = 13.\n\nKing of hearts is counted twice, so subtract 1.\n\nFavourable cards = 4 + 13 − 1 = 16.\n\nProbability = 16/52 = **4/13**.",
    page: 38,
    hasImage: false
  },
  {
    id: "math_tough_372",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 372,
    text: "A fair coin is tossed four times. What is the probability of obtaining exactly three heads?",
    options: {
      A: "1/16",
      B: "1/8",
      C: "1/4",
      D: "3/8"
    },
    answer: "C",
    explanation: "The possible successful arrangements are:\n\nHHHT, HHTH, HTHH and THHH.\n\nThere are 4 successful outcomes out of 16.\n\nProbability = 4/16 = **1/4**.",
    page: 38,
    hasImage: false
  },
  {
    id: "math_tough_373",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 373,
    text: "A bag contains 5 red and 4 blue balls. Two balls are drawn without replacement. Find the probability that both are red.",
    options: {
      A: "5/18",
      B: "5/36",
      C: "1/4",
      D: "2/9"
    },
    answer: "A",
    explanation: "Probability of first red = 5/9.\n\nProbability of second red = 4/8.\n\nCombined probability = (5/9) × (4/8) = **5/18**.",
    page: 38,
    hasImage: false
  },
  {
    id: "math_tough_374",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 374,
    text: "Events A and B are mutually exclusive. If P(A) = 0.35 and P(B) = 0.25, find P(A or B).",
    options: {
      A: "0.0875",
      B: "0.35",
      C: "0.60",
      D: "0.70"
    },
    answer: "C",
    explanation: "For mutually exclusive events:\n\nP(A ∪ B) = P(A) + P(B).\n\n= 0.35 + 0.25 = **0.60**.",
    page: 38,
    hasImage: false
  },
  {
    id: "math_tough_375",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 375,
    text: "If P(A) = 0.6, P(B) = 0.4 and P(A ∩ B) = 0.2, find P(A or B).",
    options: {
      A: "0.6",
      B: "0.7",
      C: "0.8",
      D: "1.0"
    },
    answer: "C",
    explanation: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B).\n\n= 0.6 + 0.4 − 0.2 = **0.8**.",
    page: 38,
    hasImage: false
  },
  {
    id: "math_tough_376",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 376,
    text: "Events A and B are independent, with P(A) = 0.7 and P(B) = 0.2. Find the probability that both occur.",
    options: {
      A: "0.09",
      B: "0.14",
      C: "0.28",
      D: "0.90"
    },
    answer: "B",
    explanation: "For independent events:\n\nP(A ∩ B) = P(A) × P(B).\n\n= 0.7 × 0.2 = **0.14**.",
    page: 38,
    hasImage: false
  },
  {
    id: "math_tough_377",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 377,
    text: "The probability that a student passes Mathematics is 0.8. Find the probability that the student fails Mathematics.",
    options: {
      A: "0.1",
      B: "0.2",
      C: "0.4",
      D: "0.8"
    },
    answer: "B",
    explanation: "Probability of failure = 1 − probability of passing.\n\n= 1 − 0.8 = **0.2**.",
    page: 38,
    hasImage: false
  },
  {
    id: "math_tough_378",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 378,
    text: "A fair die is rolled twice. How many possible ordered outcomes are there?",
    options: {
      A: "12",
      B: "24",
      C: "30",
      D: "36"
    },
    answer: "D",
    explanation: "There are six possible results on each roll.\n\nTotal outcomes = 6 × 6 = **36**.",
    page: 38,
    hasImage: false
  },
  {
    id: "math_tough_379",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 379,
    text: "How many different arrangements can be made from the letters of the word PLANET?",
    options: {
      A: "120",
      B: "360",
      C: "540",
      D: "720"
    },
    answer: "D",
    explanation: "All six letters are different.\n\nNumber of arrangements = 6! = 6 × 5 × 4 × 3 × 2 × 1 = **720**.",
    page: 38,
    hasImage: false
  },
  {
    id: "math_tough_380",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 380,
    text: "How many distinct arrangements can be made from the letters of the word LEVEL?",
    options: {
      A: "30",
      B: "60",
      C: "90",
      D: "120"
    },
    answer: "A",
    explanation: "There are five letters.\n\nL is repeated twice and E is repeated twice.\n\nNumber of arrangements = 5!/(2! × 2!).\n\n= 120/4 = **30**.",
    page: 38,
    hasImage: false
  },
  {
    id: "math_tough_381",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 381,
    text: "A committee of four people is selected from seven men and five women. How many committees can be formed?",
    options: {
      A: "330",
      B: "420",
      C: "495",
      D: "792"
    },
    answer: "C",
    explanation: "Total people = 7 + 5 = 12.\n\nNumber of committees = ¹²C₄.\n\n= 12!/(4! × 8!) = **495**.",
    page: 39,
    hasImage: false
  },
  {
    id: "math_tough_382",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 382,
    text: "In how many ways can six people sit around a circular table?",
    options: {
      A: "60",
      B: "120",
      C: "360",
      D: "720"
    },
    answer: "B",
    explanation: "Circular arrangements = (n − 1)!.\n\n= (6 − 1)! = 5! = **120**.",
    page: 39,
    hasImage: false
  },
  {
    id: "math_tough_383",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 383,
    text: "A committee of three is selected from four men and three women. How many committees contain at least one woman?",
    options: {
      A: "25",
      B: "30",
      C: "31",
      D: "35"
    },
    answer: "C",
    explanation: "Total committees = ⁷C₃ = 35.\n\nAll-male committees = ⁴C₃ = 4.\n\nRequired committees = 35 − 4 = **31**.",
    page: 39,
    hasImage: false
  },
  {
    id: "math_tough_384",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 384,
    text: "How many arrangements of the letters A, B, C, D and E are possible if A and B must stay together?",
    options: {
      A: "24",
      B: "36",
      C: "48",
      D: "60"
    },
    answer: "C",
    explanation: "Treat A and B as one block.\n\nThe objects are now AB, C, D and E.\n\nNumber of arrangements = 4!.\n\nA and B can switch places in 2 ways.\n\nTotal = 4! × 2 = **48**.",
    page: 39,
    hasImage: false
  },
  {
    id: "math_tough_385",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 385,
    text: "A student must select two Mathematics books from five different books and three Physics books from six different books. In how many ways can the selection be made?",
    options: {
      A: "100",
      B: "120",
      C: "150",
      D: "200"
    },
    answer: "D",
    explanation: "Mathematics selections = ⁵C₂ = 10.\n\nPhysics selections = ⁶C₃ = 20.\n\nTotal selections = 10 × 20 = **200**.",
    page: 39,
    hasImage: false
  },
  {
    id: "math_tough_386",
    originalChapter: 13,
    chapterTitle: "Permutations & Combinations",
    topic: "Permutations & Combinations",
    bookQuestionNum: 386,
    text: "A four-digit code is formed using the digits 0–7 without repetition. If the first digit cannot be zero, how many codes are possible?",
    options: {
      A: "840",
      B: "1,200",
      C: "1,470",
      D: "1,680"
    },
    answer: "C",
    explanation: "First digit: 7 choices.\n\nSecond digit: 7 choices.\n\nThird digit: 6 choices.\n\nFourth digit: 5 choices.\n\nTotal = 7 × 7 × 6 × 5 = **1,470**.",
    page: 39,
    hasImage: false
  },
  {
    id: "math_tough_387",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 387,
    text: "A fair coin is tossed three times. Find the probability of getting at least two heads.",
    options: {
      A: "1/8",
      B: "3/8",
      C: "1/2",
      D: "5/8"
    },
    answer: "C",
    explanation: "Successful outcomes are HHT, HTH, THH and HHH.\n\nProbability = 4/8 = **1/2**.",
    page: 39,
    hasImage: false
  },
  {
    id: "math_tough_388",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 388,
    text: "A die is rolled 120 times and a six appears 18 times. Find the experimental probability of obtaining a six.",
    options: {
      A: "1/5",
      B: "3/20",
      C: "1/6",
      D: "3/10"
    },
    answer: "B",
    explanation: "Experimental probability = 18/120.\n\nSimplifying gives **3/20**.",
    page: 39,
    hasImage: false
  },
  {
    id: "math_tough_389",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 389,
    text: "If the probability of a defective item is 0.04, how many defective items would be expected in a batch of 750?",
    options: {
      A: "20",
      B: "25",
      C: "30",
      D: "40"
    },
    answer: "C",
    explanation: "Expected number = 0.04 × 750 = **30**.",
    page: 39,
    hasImage: false
  },
  {
    id: "math_tough_390",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 390,
    text: "A box contains 6 good bulbs and 4 defective bulbs. Two bulbs are selected without replacement. What is the probability that the first is good and the second is defective?",
    options: {
      A: "2/15",
      B: "4/15",
      C: "1/3",
      D: "2/5"
    },
    answer: "B",
    explanation: "Probability of first good = 6/10.\n\nProbability of second defective = 4/9.\n\nCombined probability = 6/10 × 4/9 = **4/15**.",
    page: 39,
    hasImage: false
  },
  {
    id: "math_tough_391",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 391,
    text: "Two fair dice are thrown. Find the probability that their sum is either 7 or 11.",
    options: {
      A: "1/6",
      B: "2/9",
      C: "1/4",
      D: "1/3"
    },
    answer: "B",
    explanation: "There are six outcomes that give a sum of 7 and two outcomes that give a sum of 11.\n\nTotal favourable outcomes = 8.\n\nProbability = 8/36 = **2/9**.",
    page: 40,
    hasImage: false
  },
  {
    id: "math_tough_392",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 392,
    text: "A fair coin and a fair die are thrown together. Find the probability of getting a head and a number greater than 4.",
    options: {
      A: "1/12",
      B: "1/6",
      C: "1/4",
      D: "1/3"
    },
    answer: "B",
    explanation: "Probability of a head = ½.\n\nProbability of a number greater than 4 = 2/6 = ⅓.\n\nCombined probability = ½ × ⅓ = **⅙**.",
    page: 40,
    hasImage: false
  },
  {
    id: "math_tough_393",
    originalChapter: 1,
    chapterTitle: "Number and Numeration: Sets & Number Bases",
    topic: "Sets & Venn Diagrams",
    bookQuestionNum: 393,
    text: "In a group of 100 students, 60 study Mathematics, 45 study Physics and 30 study Chemistry. If 20 study both Mathematics and Physics, 15 study both Mathematics and Chemistry, 10 study both Physics and Chemistry, and 5 study all three, how many study at least one subject?",
    options: {
      A: "80",
      B: "85",
      C: "90",
      D: "95"
    },
    answer: "D",
    explanation: "Using the inclusion-exclusion principle:\n\nn(M ∪ P ∪ C) = n(M) + n(P) + n(C) − n(M ∩ P) − n(M ∩ C) − n(P ∩ C) + n(M ∩ P ∩ C).\n\n= 60 + 45 + 30 − 20 − 15 − 10 + 5.\n\n= **95 students**.",
    page: 40,
    hasImage: false
  },
  {
    id: "math_tough_394",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 394,
    text: "The mean of five numbers is 8. The numbers are 4, 6, x, 10 and 12. Find x.",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "9"
    },
    answer: "C",
    explanation: "Total = 5 × 8 = 40.\n\nKnown sum = 4 + 6 + 10 + 12 = 32.\n\nx = 40 − 32 = **8**.",
    page: 40,
    hasImage: false
  },
  {
    id: "math_tough_395",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 395,
    text: "A grouped distribution has class intervals 0–10, 10–20, 20–30 and 30–40 with frequencies 4, 8, 12 and 6. Find the median class.",
    options: {
      A: "0–10",
      B: "10–20",
      C: "20–30",
      D: "30–40"
    },
    answer: "C",
    explanation: "Total frequency = 4 + 8 + 12 + 6 = 30.\n\nMedian position = 30/2 = 15.\n\nCumulative frequencies = 4, 12, 24 and 30.\n\nThe 15th value falls in the class **20–30**.",
    page: 40,
    hasImage: false
  },
  {
    id: "math_tough_396",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Central Tendency",
    bookQuestionNum: 396,
    text: "The grouped frequency distribution below has modal class 20–30. Find the estimated mode.\n\n| Class interval | Frequency |\n|---|---:|\n| 0–10 | 4 |\n| 10–20 | 8 |\n| 20–30 | 14 |\n| 30–40 | 6 |",
    options: {
      A: "22",
      B: "23",
      C: "24.3",
      D: "26"
    },
    answer: "C",
    explanation: "Mode = L + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h.\n\nWhere:\n\nL = 20, f₁ = 14, f₀ = 8, f₂ = 6 and h = 10.\n\nMode = 20 + [(14 − 8)/(28 − 8 − 6)] × 10.\n\n= 20 + (6/14 × 10).\n\n= 24.29 ≈ **24.3**.",
    page: 40,
    hasImage: false
  },
  {
    id: "math_tough_397",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Dispersion",
    bookQuestionNum: 397,
    text: "Find the population variance of the distribution below.\n\n| x | 1 | 2 | 3 |\n|---|---:|---:|---:|\n| Frequency | 2 | 2 | 2 |",
    options: {
      A: "⅓",
      B: "⅔",
      C: "1",
      D: "2"
    },
    answer: "B",
    explanation: "Mean = (2 × 1 + 2 × 2 + 2 × 3)/6.\n\n= 12/6 = 2.\n\nVariance = Σf(x − x̄)²/Σf.\n\n= [2(1 − 2)² + 2(2 − 2)² + 2(3 − 2)²]/6.\n\n= (2 + 0 + 2)/6 = **⅔**.",
    page: 40,
    hasImage: false
  },
  {
    id: "math_tough_398",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Dispersion",
    bookQuestionNum: 398,
    text: "Find the mean deviation from the mean of 4, 6, 8, 10 and 12.",
    options: {
      A: "2",
      B: "2.4",
      C: "3",
      D: "4"
    },
    answer: "B",
    explanation: "Mean = 8.\n\nAbsolute deviations = 4, 2, 0, 2 and 4.\n\nMean deviation = (4 + 2 + 0 + 2 + 4)/5.\n\n= 12/5 = **2.4**.",
    page: 40,
    hasImage: false
  },
  {
    id: "math_tough_399",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Statistics: Measures of Dispersion",
    bookQuestionNum: 399,
    text: "In an ordered data set of 40 values, the first quartile corresponds approximately to which position?",
    options: {
      A: "5th",
      B: "10th",
      C: "20th",
      D: "30th"
    },
    answer: "B",
    explanation: "First quartile position = N/4.\n\n= 40/4 = **10th position**.",
    page: 40,
    hasImage: false
  },
  {
    id: "math_tough_400",
    originalChapter: 12,
    chapterTitle: "Statistics & Probability",
    topic: "Probability: Elementary & Compound Events",
    bookQuestionNum: 400,
    text: "A bag contains 4 red balls, 5 blue balls and 3 green balls. Two balls are selected without replacement. Find the probability that both are of the same colour.",
    options: {
      A: "19/66",
      B: "17/66",
      C: "7/22",
      D: "5/18"
    },
    answer: "A",
    explanation: "Total balls = 4 + 5 + 3 = 12.\n\nFavourable pairs:\n\nRed: ⁴C₂ = 6.\n\nBlue: ⁵C₂ = 10.\n\nGreen: ³C₂ = 3.\n\nTotal favourable pairs = 6 + 10 + 3 = 19.\n\nTotal possible pairs = ¹²C₂ = 66.\n\nProbability = **19/66**.",
    page: 40,
    hasImage: false
  },
  {
    id: "math_adv_1",
    originalChapter: 5,
    chapterTitle: "Quadratic Equations & Simultaneous Linear-Quadratic Systems",
    topic: "Quadratic Equations",
    bookQuestionNum: 101,
    text: "Solve 3x² - 11x + 6 = 0.",
    options: {
      A: "2, 3",
      B: "3, 2/3",
      C: "1, 6",
      D: "4, 1/2"
    },
    answer: "B",
    explanation: "Factorize: (3x - 2)(x - 3) = 0. Therefore, x = 2/3 or 3.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_2",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 102,
    text: "Evaluate log₂ 64 - log₃ 27.",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    explanation: "log₂ 64 = 6 and log₃ 27 = 3. Difference = 3.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_3",
    originalChapter: 7,
    chapterTitle: "Sequences & Series: AP, GP and Sum to Infinity",
    topic: "Sequences & Series",
    bookQuestionNum: 103,
    text: "Find the sum of the first 25 terms of the AP 4, 7, 10, 13, ...",
    options: {
      A: "925",
      B: "950",
      C: "975",
      D: "1000"
    },
    answer: "D",
    explanation: "S₂₅ = 25/2[2(4) + 24(3)] = 25/2(80) = 1000.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_4",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 104,
    text: "If sin θ = 8/17 and θ is acute, find cos θ.",
    options: {
      A: "15/17",
      B: "8/15",
      C: "17/15",
      D: "9/17"
    },
    answer: "A",
    explanation: "cos θ = √(1 - 64/289) = √225/289 = 15/17.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_5",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 105,
    text: "Solve 5^(2x - 1) = 125.",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    explanation: "125 = 5³. Therefore, 2x - 1 = 3, giving x = 2.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_6",
    originalChapter: 9,
    chapterTitle: "Coordinate Geometry, Straight Lines & Circles",
    topic: "Coordinate Geometry",
    bookQuestionNum: 106,
    text: "Find the gradient of the line joining (-3, 4) and (5, -12).",
    options: {
      A: "-2",
      B: "2",
      C: "-3",
      D: "3"
    },
    answer: "A",
    explanation: "Gradient = (-12 - 4)/(5 + 3) = -16/8 = -2.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_7",
    originalChapter: 14,
    chapterTitle: "Permutations, Combinations & Probability",
    topic: "Probability",
    bookQuestionNum: 107,
    text: "A bag contains 7 red, 5 blue and 8 green balls. Find the probability of selecting a blue ball.",
    options: {
      A: "1/4",
      B: "1/3",
      C: "2/5",
      D: "1/2"
    },
    answer: "A",
    explanation: "Total = 20. Probability = 5/20 = 1/4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_8",
    originalChapter: 5,
    chapterTitle: "Quadratic Equations & Simultaneous Linear-Quadratic Systems",
    topic: "Quadratic Equations",
    bookQuestionNum: 108,
    text: "Simplify (x² - 16)/(x² - 6x + 8).",
    options: {
      A: "(x + 4)/(x - 2)",
      B: "(x - 4)/(x - 2)",
      C: "(x + 4)/(x - 4)",
      D: "(x - 2)/(x + 4)"
    },
    answer: "A",
    explanation: "Factorize and cancel: [(x - 4)(x + 4)]/[(x - 2)(x - 4)].",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_9",
    originalChapter: 8,
    chapterTitle: "Matrices, Determinants & Linear Transformations",
    topic: "Matrices & Determinants",
    bookQuestionNum: 109,
    text: "Find x if the determinant of [[x, 4], [3, 2]] is 10.",
    options: {
      A: "5",
      B: "8",
      C: "11",
      D: "12"
    },
    answer: "C",
    explanation: "2x - 12 = 10. Therefore, x = 11.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_10",
    originalChapter: 11,
    chapterTitle: "Differential Calculus: Derivatives, Tangents & Maxima/Minima",
    topic: "Calculus: Differentiation",
    bookQuestionNum: 110,
    text: "Differentiate y = 5x³ - 4x² + 6x - 8.",
    options: {
      A: "15x² - 8x + 6",
      B: "15x² - 4x + 6",
      C: "5x² - 8x + 6",
      D: "15x³ - 8x² + 6"
    },
    answer: "A",
    explanation: "Apply the power rule to each term.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_11",
    originalChapter: 5,
    chapterTitle: "Quadratic Equations & Simultaneous Linear-Quadratic Systems",
    topic: "Quadratic Equations",
    bookQuestionNum: 111,
    text: "Find the roots of x² - 9x + 20 = 0.",
    options: {
      A: "4 and 5",
      B: "2 and 10",
      C: "3 and 6",
      D: "1 and 20"
    },
    answer: "A",
    explanation: "(x - 4)(x - 5) = 0.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_12",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 112,
    text: "Express 0.00000482 in standard form.",
    options: {
      A: "4.82 × 10⁻⁴",
      B: "4.82 × 10⁻⁵",
      C: "4.82 × 10⁻⁶",
      D: "48.2 × 10⁻⁷"
    },
    answer: "C",
    explanation: "Move the decimal point six places right.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_13",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 113,
    text: "The exterior angle of a regular polygon is 24°. Find its number of sides.",
    options: {
      A: "12",
      B: "15",
      C: "18",
      D: "24"
    },
    answer: "B",
    explanation: "Number of sides = 360°/24° = 15.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_14",
    originalChapter: 5,
    chapterTitle: "Algebra: Simultaneous Linear Equations",
    topic: "Simultaneous Equations",
    bookQuestionNum: 114,
    text: "If 3x + 2y = 16 and x - y = 2, find x and y.",
    options: {
      A: "4, 2",
      B: "5, 1",
      C: "6, 2",
      D: "3, 4"
    },
    answer: "A",
    explanation: "x = y + 2. Substitute: 3(y + 2) + 2y = 16. Thus, y = 2 and x = 4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_15",
    originalChapter: 1,
    chapterTitle: "Number Bases, Fractions & Modular Arithmetic",
    topic: "Number & Numeration",
    bookQuestionNum: 115,
    text: "Evaluate 5/6 ÷ 10/9.",
    options: {
      A: "2/3",
      B: "3/4",
      C: "4/5",
      D: "5/6"
    },
    answer: "B",
    explanation: "5/6 × 9/10 = 45/60 = 3/4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_16",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 116,
    text: "Find the equation of a line with gradient -2 passing through (3, 4).",
    options: {
      A: "y = -2x + 10",
      B: "y = 2x - 10",
      C: "y = -2x + 4",
      D: "y = 3x - 2"
    },
    answer: "A",
    explanation: "y - 4 = -2(x - 3). Hence, y = -2x + 10.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_17",
    originalChapter: 7,
    chapterTitle: "Sequences & Series: AP, GP and Sum to Infinity",
    topic: "Sequences & Series",
    bookQuestionNum: 117,
    text: "If Sₙ = 2n² + 3n, find the 6th term.",
    options: {
      A: "23",
      B: "25",
      C: "27",
      D: "29"
    },
    answer: "B",
    explanation: "T₆ = S₆ - S₅ = 90 - 65 = 25.\n\nCorrect answer: B. 25.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_18",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 118,
    text: "Evaluate tan 30° + sin 90°.",
    options: {
      A: "1",
      B: "1 + √3/3",
      C: "√3",
      D: "2"
    },
    answer: "B",
    explanation: "tan 30° = √3/3 and sin 90° = 1.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_19",
    originalChapter: 1,
    chapterTitle: "Commercial Mathematics & Practical Arithmetic",
    topic: "Commercial Arithmetic",
    bookQuestionNum: 119,
    text: "₦80,000 is invested at 5% compound interest annually for 3 years. Find the amount.",
    options: {
      A: "₦90,000",
      B: "₦92,000",
      C: "₦92,610",
      D: "₦94,000"
    },
    answer: "C",
    explanation: "A = 80,000(1.05)³ = ₦92,610.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_20",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 120,
    text: "Find the area of a sector of radius 21 cm and angle 60°. Take π = 22/7.",
    options: {
      A: "231 cm²",
      B: "242 cm²",
      C: "264 cm²",
      D: "276 cm²"
    },
    answer: "A",
    explanation: "Area = 60/360 × 22/7 × 21² = 231 cm².",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_21",
    originalChapter: 14,
    chapterTitle: "Permutations, Combinations & Probability",
    topic: "Permutations & Combinations",
    bookQuestionNum: 121,
    text: "Evaluate 6!/(4! × 2!).",
    options: {
      A: "10",
      B: "12",
      C: "15",
      D: "20"
    },
    answer: "C",
    explanation: "720/(24 × 2) = 15.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_22",
    originalChapter: 5,
    chapterTitle: "Quadratic Equations & Simultaneous Linear-Quadratic Systems",
    topic: "Quadratic Equations",
    bookQuestionNum: 122,
    text: "If f(x) = 3x² - 5x + 2, find f(-3).",
    options: {
      A: "20",
      B: "30",
      C: "35",
      D: "44"
    },
    answer: "D",
    explanation: "3(9) + 15 + 2 = 44.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_23",
    originalChapter: 7,
    chapterTitle: "Sequences & Series: AP, GP and Sum to Infinity",
    topic: "Sequences & Series",
    bookQuestionNum: 123,
    text: "Find the 7th term of 2, 6, 18, 54, ...",
    options: {
      A: "486",
      B: "729",
      C: "1458",
      D: "2187"
    },
    answer: "C",
    explanation: "T₇ = 2 × 3⁶ = 1458.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_24",
    originalChapter: 13,
    chapterTitle: "Statistics: Measures of Location & Dispersion",
    topic: "Statistics",
    bookQuestionNum: 124,
    text: "The mean of 6, 8, 11, 15 and x is 12. Find x.",
    options: {
      A: "18",
      B: "20",
      C: "22",
      D: "24"
    },
    answer: "B",
    explanation: "Total = 5 × 12 = 60. x = 60 - 40 = 20.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_25",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 125,
    text: "Find the distance between (1, 2) and (7, 10).",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "12"
    },
    answer: "C",
    explanation: "Distance = √(6² + 8²) = √100 = 10.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_26",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 126,
    text: "Solve 3^(x + 2) = 243.",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    explanation: "243 = 3⁵. Therefore, x + 2 = 5 and x = 3.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_27",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 127,
    text: "Find x if log₁₀ x = 3.2.",
    options: {
      A: "1000",
      B: "1584.9",
      C: "1500",
      D: "2000"
    },
    answer: "B",
    explanation: "x = 10³·² ≈ 1584.89.\n\nCorrect answer: approximately 1584.89.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_28",
    originalChapter: 1,
    chapterTitle: "Commercial Mathematics & Practical Arithmetic",
    topic: "Commercial Arithmetic",
    bookQuestionNum: 128,
    text: "A vehicle travels 360 km in 4 hours 30 minutes. Find its average speed.",
    options: {
      A: "70 km/h",
      B: "75 km/h",
      C: "80 km/h",
      D: "90 km/h"
    },
    answer: "C",
    explanation: "Time = 4.5 hours. Speed = 360/4.5 = 80 km/h.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_29",
    originalChapter: 1,
    chapterTitle: "Number Bases, Fractions & Modular Arithmetic",
    topic: "Number & Numeration",
    bookQuestionNum: 129,
    text: "Solve 4(x - 3) = 2(x + 5).",
    options: {
      A: "6",
      B: "8",
      C: "11",
      D: "12"
    },
    answer: "C",
    explanation: "4x - 12 = 2x + 10. Therefore, 2x = 22 and x = 11.\n\nCorrect answer: 11 (not listed).",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_30",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 130,
    text: "If the radius of a sphere is tripled, its volume becomes how many times the original?",
    options: {
      A: "3",
      B: "6",
      C: "9",
      D: "27"
    },
    answer: "D",
    explanation: "Volume varies as r³. Therefore, 3³ = 27.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_31",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 131,
    text: "Evaluate 3sin 30° + 2cos 60°.",
    options: {
      A: "1",
      B: "2",
      C: "5/2",
      D: "3"
    },
    answer: "C",
    explanation: "3(1/2) + 2(1/2) = 3/2 + 1 = 5/2.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_32",
    originalChapter: 13,
    chapterTitle: "Statistics: Measures of Location & Dispersion",
    topic: "Statistics",
    bookQuestionNum: 132,
    text: "Find the median of 4, 6, 8, 10, 12, 14.",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "11"
    },
    answer: "B",
    explanation: "Median = (8 + 10)/2 = 9.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_33",
    originalChapter: 15,
    chapterTitle: "Vectors in Two Dimensions & Dot Products",
    topic: "Vectors in Two Dimensions",
    bookQuestionNum: 133,
    text: "Find the scalar product of vectors of magnitudes 5 and 8 with an angle of 60° between them.",
    options: {
      A: "10",
      B: "20",
      C: "30",
      D: "40"
    },
    answer: "B",
    explanation: "5 × 8 × cos 60° = 40 × 1/2 = 20.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_34",
    originalChapter: 4,
    chapterTitle: "Polynomials, Functions & Algebraic Operations",
    topic: "Algebra: Polynomials & Functions",
    bookQuestionNum: 134,
    text: "Find the coefficient of x³ in (x + 2)⁵.",
    options: {
      A: "40",
      B: "60",
      C: "80",
      D: "100"
    },
    answer: "A",
    explanation: "⁵C₃ × x³ × 2² = 10 × 4x³ = 40x³.\n\nCorrect answer: 40.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_35",
    originalChapter: 6,
    chapterTitle: "Inequalities & Linear Programming",
    topic: "Inequalities",
    bookQuestionNum: 135,
    text: "Solve 5x + 2 < 17.",
    options: {
      A: "x < 3",
      B: "x > 3",
      C: "x < 5",
      D: "x > 5"
    },
    answer: "A",
    explanation: "5x < 15. Hence, x < 3.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_36",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 136,
    text: "Find the circumference of a circle of radius 14 cm. Take π = 22/7.",
    options: {
      A: "44 cm",
      B: "66 cm",
      C: "88 cm",
      D: "110 cm"
    },
    answer: "C",
    explanation: "C = 2πr = 2 × 22/7 × 14 = 88 cm.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_37",
    originalChapter: 5,
    chapterTitle: "Algebra: Simultaneous Linear Equations",
    topic: "Simultaneous Equations",
    bookQuestionNum: 137,
    text: "If x:y = 4:7 and x + y = 99, find x.",
    options: {
      A: "32",
      B: "36",
      C: "42",
      D: "63"
    },
    answer: "B",
    explanation: "Total ratio = 11. One part = 9. Therefore, x = 4 × 9 = 36.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_38",
    originalChapter: 8,
    chapterTitle: "Matrices, Determinants & Linear Transformations",
    topic: "Matrices & Determinants",
    bookQuestionNum: 138,
    text: "Find the determinant of [[5, 2], [3, 4]].",
    options: {
      A: "10",
      B: "12",
      C: "14",
      D: "16"
    },
    answer: "C",
    explanation: "5 × 4 - 2 × 3 = 20 - 6 = 14.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_39",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 139,
    text: "Solve 9ˣ = 1/729.",
    options: {
      A: "-2",
      B: "-3",
      C: "2",
      D: "3"
    },
    answer: "B",
    explanation: "729 = 9³. Therefore, 9ˣ = 9⁻³ and x = -3.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_40",
    originalChapter: 1,
    chapterTitle: "Commercial Mathematics & Practical Arithmetic",
    topic: "Commercial Arithmetic",
    bookQuestionNum: 140,
    text: "An article bought for ₦12,000 is sold for ₦15,000. Find the percentage profit.",
    options: {
      A: "20%",
      B: "25%",
      C: "30%",
      D: "35%"
    },
    answer: "B",
    explanation: "Profit = ₦3,000. Percentage = 3,000/12,000 × 100 = 25%.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_41",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 141,
    text: "Find the sum of the interior angles of a 20-sided polygon.",
    options: {
      A: "2880°",
      B: "3060°",
      C: "3240°",
      D: "3600°"
    },
    answer: "C",
    explanation: "(20 - 2) × 180° = 3240°.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_42",
    originalChapter: 6,
    chapterTitle: "Variations: Direct, Inverse, Joint and Partial",
    topic: "Variations",
    bookQuestionNum: 142,
    text: "If y varies inversely as x and y = 15 when x = 3, find y when x = 9.",
    options: {
      A: "3",
      B: "5",
      C: "6",
      D: "9"
    },
    answer: "B",
    explanation: "xy = 45. Therefore, y = 45/9 = 5.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_43",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 143,
    text: "Evaluate cos 150°.",
    options: {
      A: "1/2",
      B: "-1/2",
      C: "√3/2",
      D: "-√3/2"
    },
    answer: "D",
    explanation: "cos 150° = -cos 30° = -√3/2.\n\nCorrect answer: -√3/2.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_44",
    originalChapter: 9,
    chapterTitle: "Coordinate Geometry, Straight Lines & Circles",
    topic: "Coordinate Geometry",
    bookQuestionNum: 144,
    text: "Find the equation of a circle with centre (2, -3) and radius 4.",
    options: {
      A: "(x - 2)² + (y + 3)² = 16",
      B: "(x + 2)² + (y - 3)² = 16",
      C: "(x - 2)² + (y - 3)² = 4",
      D: "x² + y² = 16"
    },
    answer: "A",
    explanation: "Use (x - h)² + (y - k)² = r².",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_45",
    originalChapter: 12,
    chapterTitle: "Integral Calculus: Definite Integrals & Area Under Curves",
    topic: "Calculus: Integration",
    bookQuestionNum: 145,
    text: "Evaluate ∫(4x³ - 6x + 5) dx.",
    options: {
      A: "x⁴ - 3x² + 5x + C",
      B: "4x⁴ - 6x² + 5x + C",
      C: "x⁴ - 6x² + 5x + C",
      D: "4x³ - 3x² + 5x + C"
    },
    answer: "A",
    explanation: "Integrate each term using the power rule.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_46",
    originalChapter: 14,
    chapterTitle: "Permutations, Combinations & Probability",
    topic: "Probability",
    bookQuestionNum: 146,
    text: "A fair die is thrown. Find the probability of obtaining a number greater than 4.",
    options: {
      A: "1/6",
      B: "1/3",
      C: "1/2",
      D: "2/3"
    },
    answer: "B",
    explanation: "Outcomes are 5 and 6. Probability = 2/6 = 1/3.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_47",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 147,
    text: "Solve 2ˣ × 8 = 64.",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    explanation: "2ˣ = 8 = 2³. Hence, x = 3.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_48",
    originalChapter: 4,
    chapterTitle: "Polynomials, Functions & Algebraic Operations",
    topic: "Algebra: Polynomials & Functions",
    bookQuestionNum: 148,
    text: "Find the second term in the expansion of (2x + 3)⁴.",
    options: {
      A: "48x³",
      B: "64x³",
      C: "72x³",
      D: "96x³"
    },
    answer: "D",
    explanation: "⁴C₁(2x)³(3) = 4 × 8x³ × 3 = 96x³.\n\nCorrect answer: 96x³.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_49",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 149,
    text: "Find the volume of a cylinder of radius 14 cm and height 5 cm. Take π = 22/7.",
    options: {
      A: "2,640 cm³",
      B: "3,080 cm³",
      C: "3,240 cm³",
      D: "3,520 cm³"
    },
    answer: "B",
    explanation: "V = πr²h = 22/7 × 196 × 5 = 3,080 cm³.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_50",
    originalChapter: 5,
    chapterTitle: "Quadratic Equations & Simultaneous Linear-Quadratic Systems",
    topic: "Quadratic Equations",
    bookQuestionNum: 150,
    text: "If f(x) = 2x + 3 and g(x) = x² - 1, find f(g(3)).",
    options: {
      A: "15",
      B: "17",
      C: "19",
      D: "21"
    },
    answer: "C",
    explanation: "g(3) = 8. Then f(8) = 19.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_51",
    originalChapter: 5,
    chapterTitle: "Quadratic Equations & Simultaneous Linear-Quadratic Systems",
    topic: "Quadratic Equations",
    bookQuestionNum: 151,
    text: "Find the sum of the roots of 5x² - 12x + 7 = 0.",
    options: {
      A: "7/5",
      B: "12/5",
      C: "-12/5",
      D: "5/12"
    },
    answer: "B",
    explanation: "Sum of roots = -b/a = 12/5.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_52",
    originalChapter: 6,
    chapterTitle: "Variations: Direct, Inverse, Joint and Partial",
    topic: "Variations",
    bookQuestionNum: 152,
    text: "If 6 workers complete a job in 15 days, how many days will 10 workers take?",
    options: {
      A: "6",
      B: "9",
      C: "10",
      D: "12"
    },
    answer: "B",
    explanation: "Total work = 6 × 15 = 90 worker-days. Time = 90/10 = 9 days.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_53",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 153,
    text: "Evaluate sin²45° + cos²45°.",
    options: {
      A: "0",
      B: "1/2",
      C: "1",
      D: "2"
    },
    answer: "C",
    explanation: "The identity sin²θ + cos²θ = 1 applies.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_54",
    originalChapter: 11,
    chapterTitle: "Differential Calculus: Derivatives, Tangents & Maxima/Minima",
    topic: "Calculus: Differentiation",
    bookQuestionNum: 154,
    text: "Find the tangent to y = x² + 2x at x = 2.",
    options: {
      A: "y = 6x - 4",
      B: "y = 4x + 2",
      C: "y = 6x + 4",
      D: "y = 2x + 6"
    },
    answer: "A",
    explanation: "Gradient = 2x + 2 = 6. Point = (2, 8). Thus, y - 8 = 6(x - 2).",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_55",
    originalChapter: 13,
    chapterTitle: "Statistics: Measures of Location & Dispersion",
    topic: "Statistics",
    bookQuestionNum: 155,
    text: "Find the geometric mean of 9 and 49.",
    options: {
      A: "14",
      B: "21",
      C: "28",
      D: "36"
    },
    answer: "B",
    explanation: "√(9 × 49) = √441 = 21.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_56",
    originalChapter: 1,
    chapterTitle: "Number Bases, Fractions & Modular Arithmetic",
    topic: "Number & Numeration",
    bookQuestionNum: 156,
    text: "If 35% of a number is 84, find the number.",
    options: {
      A: "200",
      B: "220",
      C: "240",
      D: "260"
    },
    answer: "C",
    explanation: "0.35x = 84. Therefore, x = 240.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_57",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 157,
    text: "The angles of a triangle are 2x, 3x and 4x. Find the largest angle.",
    options: {
      A: "60°",
      B: "70°",
      C: "80°",
      D: "90°"
    },
    answer: "C",
    explanation: "9x = 180°. x = 20°. Largest angle = 4x = 80°.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_58",
    originalChapter: 5,
    chapterTitle: "Quadratic Equations & Simultaneous Linear-Quadratic Systems",
    topic: "Quadratic Equations",
    bookQuestionNum: 158,
    text: "Simplify (3x²y³)² ÷ 9xy².",
    options: {
      A: "x³y⁴",
      B: "x³y⁵",
      C: "3x³y⁴",
      D: "x⁴y³"
    },
    answer: "A",
    explanation: "9x⁴y⁶ ÷ 9xy² = x³y⁴.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_59",
    originalChapter: 13,
    chapterTitle: "Statistics: Measures of Location & Dispersion",
    topic: "Statistics",
    bookQuestionNum: 159,
    text: "Find the mode of 3, 5, 7, 5, 9, 5, 11.",
    options: {
      A: "3",
      B: "5",
      C: "7",
      D: "9"
    },
    answer: "B",
    explanation: "5 occurs three times, more than any other number.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_60",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 160,
    text: "Evaluate tan 45° × cos 30°.",
    options: {
      A: "1/2",
      B: "√3/2",
      C: "1",
      D: "√3"
    },
    answer: "B",
    explanation: "1 × √3/2 = √3/2.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_61",
    originalChapter: 9,
    chapterTitle: "Coordinate Geometry, Straight Lines & Circles",
    topic: "Coordinate Geometry",
    bookQuestionNum: 161,
    text: "Find the midpoint of (4, 7) and (10, 13).",
    options: {
      A: "(6, 9)",
      B: "(7, 10)",
      C: "(8, 11)",
      D: "(9, 12)"
    },
    answer: "B",
    explanation: "Midpoint = ((4 + 10)/2, (7 + 13)/2) = (7, 10).",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_62",
    originalChapter: 7,
    chapterTitle: "Sequences & Series: AP, GP and Sum to Infinity",
    topic: "Sequences & Series",
    bookQuestionNum: 162,
    text: "Find the sum of the first 5 terms of 3, 9, 27, ...",
    options: {
      A: "243",
      B: "363",
      C: "486",
      D: "729"
    },
    answer: "B",
    explanation: "S₅ = 3(3⁵ - 1)/(3 - 1) = 363.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_63",
    originalChapter: 5,
    chapterTitle: "Quadratic Equations & Simultaneous Linear-Quadratic Systems",
    topic: "Quadratic Equations",
    bookQuestionNum: 163,
    text: "If x² + y² = 34 and xy = 15, find (x - y)².",
    options: {
      A: "2",
      B: "4",
      C: "6",
      D: "8"
    },
    answer: "B",
    explanation: "(x - y)² = x² + y² - 2xy = 34 - 30 = 4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_64",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 164,
    text: "A cone has radius 5 cm and height 12 cm. Find its slant height.",
    options: {
      A: "10 cm",
      B: "12 cm",
      C: "13 cm",
      D: "15 cm"
    },
    answer: "C",
    explanation: "l = √(5² + 12²) = √169 = 13 cm.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_65",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 165,
    text: "Solve log₅(x + 2) = 2.",
    options: {
      A: "21",
      B: "23",
      C: "25",
      D: "27"
    },
    answer: "B",
    explanation: "x + 2 = 25. Therefore, x = 23.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_66",
    originalChapter: 15,
    chapterTitle: "Vectors in Two Dimensions & Dot Products",
    topic: "Vectors in Two Dimensions",
    bookQuestionNum: 166,
    text: "If a = 3i + 4j and b = 2i - 5j, find a - b.",
    options: {
      A: "i + 9j",
      B: "5i - j",
      C: "i - j",
      D: "5i + 9j"
    },
    answer: "A",
    explanation: "(3 - 2)i + (4 - (-5))j = i + 9j.\n\nCorrect option: A.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_67",
    originalChapter: 5,
    chapterTitle: "Quadratic Equations & Simultaneous Linear-Quadratic Systems",
    topic: "Quadratic Equations",
    bookQuestionNum: 167,
    text: "Find the remainder when x³ + 2x² - 5x + 4 is divided by x + 1.",
    options: {
      A: "2",
      B: "4",
      C: "10",
      D: "8"
    },
    answer: "C",
    explanation: "Substitute x = -1: -1 + 2 + 5 + 4 = 10.\n\nCorrect answer: 10 (not listed).",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_68",
    originalChapter: 7,
    chapterTitle: "Sequences & Series: AP, GP and Sum to Infinity",
    topic: "Sequences & Series",
    bookQuestionNum: 168,
    text: "Find the sum of the first 12 positive odd numbers.",
    options: {
      A: "132",
      B: "144",
      C: "156",
      D: "169"
    },
    answer: "B",
    explanation: "Sum of first n odd numbers = n². Thus, 12² = 144.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_69",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 169,
    text: "The bearing of B from A is 070°. Find the bearing of A from B.",
    options: {
      A: "110°",
      B: "180°",
      C: "250°",
      D: "290°"
    },
    answer: "C",
    explanation: "Reverse bearing = 070° + 180° = 250°.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_70",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 170,
    text: "Evaluate (√72 - √32)/√2.",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    explanation: "√72 = 6√2 and √32 = 4√2. Difference divided by √2 = 2.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_71",
    originalChapter: 1,
    chapterTitle: "Number Bases, Fractions & Modular Arithmetic",
    topic: "Number & Numeration",
    bookQuestionNum: 171,
    text: "A person spends 1/3 of his money on food and 1/5 on transport. Find the fraction remaining.",
    options: {
      A: "7/15",
      B: "8/15",
      C: "9/15",
      D: "11/15"
    },
    answer: "A",
    explanation: "Remaining = 1 - 1/3 - 1/5 = 7/15.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_72",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 172,
    text: "Solve 4^(x - 1) = 64.",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    explanation: "64 = 4³. Therefore, x - 1 = 3 and x = 4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_73",
    originalChapter: 1,
    chapterTitle: "Number Bases, Fractions & Modular Arithmetic",
    topic: "Number & Numeration",
    bookQuestionNum: 173,
    text: "Find the area of a triangle with base 18 cm and height 12 cm.",
    options: {
      A: "96 cm²",
      B: "108 cm²",
      C: "120 cm²",
      D: "216 cm²"
    },
    answer: "B",
    explanation: "Area = 1/2 × 18 × 12 = 108 cm².",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_74",
    originalChapter: 5,
    chapterTitle: "Quadratic Equations & Simultaneous Linear-Quadratic Systems",
    topic: "Quadratic Equations",
    bookQuestionNum: 174,
    text: "If x² + px + 25 = 0 has equal roots, find p.",
    options: {
      A: "±5",
      B: "±10",
      C: "±15",
      D: "±25"
    },
    answer: "B",
    explanation: "Discriminant = p² - 100 = 0. Therefore, p = ±10.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_75",
    originalChapter: 14,
    chapterTitle: "Permutations, Combinations & Probability",
    topic: "Probability",
    bookQuestionNum: 175,
    text: "A bag contains 5 red and 7 blue balls. Two are selected without replacement. Find the probability both are red.",
    options: {
      A: "5/22",
      B: "5/33",
      C: "7/22",
      D: "1/3"
    },
    answer: "B",
    explanation: "5/12 × 4/11 = 20/132 = 5/33.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_76",
    originalChapter: 11,
    chapterTitle: "Differential Calculus: Derivatives, Tangents & Maxima/Minima",
    topic: "Calculus: Differentiation",
    bookQuestionNum: 176,
    text: "Differentiate y = (x + 2)(3x² - 1).",
    options: {
      A: "9x² + 12x - 1",
      B: "9x² + 12x + 3",
      C: "6x² + 12x - 1",
      D: "3x² + 6x + 1"
    },
    answer: "A",
    explanation: "Expand to 3x³ + 6x² - x - 2. Differentiate: 9x² + 12x - 1.\n\nCorrect answer: A.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_77",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 177,
    text: "Evaluate sin 210°.",
    options: {
      A: "1/2",
      B: "-1/2",
      C: "√3/2",
      D: "-√3/2"
    },
    answer: "B",
    explanation: "sin 210° = -sin 30° = -1/2.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_78",
    originalChapter: 1,
    chapterTitle: "Number Bases, Fractions & Modular Arithmetic",
    topic: "Number & Numeration",
    bookQuestionNum: 178,
    text: "Two numbers have sum 20 and product 96. Find them.",
    options: {
      A: "8 and 12",
      B: "6 and 14",
      C: "4 and 16",
      D: "10 and 10"
    },
    answer: "A",
    explanation: "8 + 12 = 20 and 8 × 12 = 96.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_79",
    originalChapter: 1,
    chapterTitle: "Number Bases, Fractions & Modular Arithmetic",
    topic: "Number & Numeration",
    bookQuestionNum: 179,
    text: "Evaluate (1/3)⁻².",
    options: {
      A: "1/9",
      B: "3",
      C: "6",
      D: "9"
    },
    answer: "D",
    explanation: "Reciprocal of 1/3 is 3. Therefore, 3² = 9.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_80",
    originalChapter: 13,
    chapterTitle: "Statistics: Measures of Location & Dispersion",
    topic: "Statistics",
    bookQuestionNum: 180,
    text: "If the variance is 25, find the standard deviation.",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "C",
    explanation: "Standard deviation = √25 = 5.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_81",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 181,
    text: "Find the equation of a line perpendicular to y = 3x - 4 and passing through (6, 2).",
    options: {
      A: "y = -x/3 + 4",
      B: "y = 3x - 16",
      C: "y = -3x + 20",
      D: "y = x/3 + 2"
    },
    answer: "A",
    explanation: "Perpendicular gradient = -1/3. Use y - 2 = -1/3(x - 6).",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_82",
    originalChapter: 7,
    chapterTitle: "Sequences & Series: AP, GP and Sum to Infinity",
    topic: "Sequences & Series",
    bookQuestionNum: 182,
    text: "Find the sum to infinity of 20, 10, 5, ...",
    options: {
      A: "30",
      B: "35",
      C: "40",
      D: "45"
    },
    answer: "C",
    explanation: "S∞ = 20/(1 - 1/2) = 40.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_83",
    originalChapter: 14,
    chapterTitle: "Permutations, Combinations & Probability",
    topic: "Permutations & Combinations",
    bookQuestionNum: 183,
    text: "Evaluate ⁸C₃.",
    options: {
      A: "28",
      B: "56",
      C: "70",
      D: "84"
    },
    answer: "B",
    explanation: "8!/(3!5!) = 56.\n\nCorrect answer: B. 56.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_84",
    originalChapter: 1,
    chapterTitle: "Number Bases, Fractions & Modular Arithmetic",
    topic: "Number & Numeration",
    bookQuestionNum: 184,
    text: "Solve 7x - 4 = 3x + 20.",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7"
    },
    answer: "C",
    explanation: "4x = 24. Therefore, x = 6.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_85",
    originalChapter: 1,
    chapterTitle: "Commercial Mathematics & Practical Arithmetic",
    topic: "Commercial Arithmetic",
    bookQuestionNum: 185,
    text: "A circle's radius increases by 30%. Find the percentage increase in area.",
    options: {
      A: "30%",
      B: "60%",
      C: "69%",
      D: "90%"
    },
    answer: "C",
    explanation: "New area factor = 1.3² = 1.69. Increase = 69%.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_86",
    originalChapter: 5,
    chapterTitle: "Algebra: Simultaneous Linear Equations",
    topic: "Simultaneous Equations",
    bookQuestionNum: 186,
    text: "If x + y = 10 and x - y = 4, find xy.",
    options: {
      A: "18",
      B: "21",
      C: "24",
      D: "28"
    },
    answer: "B",
    explanation: "x = 7 and y = 3. Product = 21.\n\nCorrect answer: B. 21.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_87",
    originalChapter: 10,
    chapterTitle: "Trigonometry: Ratios, Identities, Sine/Cosine Rules & Bearings",
    topic: "Trigonometry",
    bookQuestionNum: 187,
    text: "If cos θ = 4/5 and θ is acute, find cos 2θ.",
    options: {
      A: "7/25",
      B: "9/25",
      C: "16/25",
      D: "24/25"
    },
    answer: "A",
    explanation: "cos 2θ = 2cos²θ - 1 = 32/25 - 1 = 7/25.\n\nCorrect answer: A. 7/25.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_88",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 188,
    text: "Find the volume of a cuboid with dimensions 9 cm, 6 cm and 4 cm.",
    options: {
      A: "180 cm³",
      B: "196 cm³",
      C: "216 cm³",
      D: "240 cm³"
    },
    answer: "C",
    explanation: "Volume = 9 × 6 × 4 = 216 cm³.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_89",
    originalChapter: 5,
    chapterTitle: "Algebra: Simultaneous Linear Equations",
    topic: "Simultaneous Equations",
    bookQuestionNum: 189,
    text: "Solve 5x + 2y = 16 and x - y = 2.",
    options: {
      A: "x = 4, y = 2",
      B: "x = 3, y = 1",
      C: "x = 5, y = 3",
      D: "x = 2, y = 4"
    },
    answer: "A",
    explanation: "Substitute x = y + 2 into the first equation: 5(y + 2) + 2y = 16. Thus, y = 2 and x = 4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_90",
    originalChapter: 7,
    chapterTitle: "Sequences & Series: AP, GP and Sum to Infinity",
    topic: "Sequences & Series",
    bookQuestionNum: 190,
    text: "Find the sum of the first 20 terms of 2, 5, 8, 11, ...",
    options: {
      A: "590",
      B: "600",
      C: "610",
      D: "620"
    },
    answer: "C",
    explanation: "S₂₀ = 20/2[2(2) + 19(3)] = 10(61) = 610.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_91",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 191,
    text: "Solve log₂ x + log₂ 8 = 5.",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "16"
    },
    answer: "A",
    explanation: "log₂8 = 3. Thus, log₂x = 2 and x = 4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_92",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 192,
    text: "Find the angle between the hands of a clock at 4:00.",
    options: {
      A: "90°",
      B: "100°",
      C: "120°",
      D: "140°"
    },
    answer: "C",
    explanation: "Each hour represents 30°. At 4:00, angle = 4 × 30° = 120°.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_93",
    originalChapter: 7,
    chapterTitle: "Sequences & Series: AP, GP and Sum to Infinity",
    topic: "Sequences & Series",
    bookQuestionNum: 193,
    text: "Find the 6th term of a GP whose first term is 4 and common ratio is 2.",
    options: {
      A: "32",
      B: "64",
      C: "128",
      D: "256"
    },
    answer: "C",
    explanation: "T₆ = 4 × 2⁵ = 128.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_94",
    originalChapter: 2,
    chapterTitle: "Indices, Logarithms & Surds",
    topic: "Indices, Logarithms & Surds",
    bookQuestionNum: 194,
    text: "Solve √(5x - 4) = 6.",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "9"
    },
    answer: "C",
    explanation: "5x - 4 = 36. Therefore, x = 8.\n\nCorrect answer: C. 8.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_95",
    originalChapter: 14,
    chapterTitle: "Permutations, Combinations & Probability",
    topic: "Probability",
    bookQuestionNum: 195,
    text: "A number is selected from 1 to 40. Find the probability it is divisible by 4.",
    options: {
      A: "1/5",
      B: "1/4",
      C: "1/3",
      D: "2/5"
    },
    answer: "B",
    explanation: "There are 10 multiples of 4 from 1 to 40. Probability = 10/40 = 1/4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_96",
    originalChapter: 4,
    chapterTitle: "Polynomials, Functions & Algebraic Operations",
    topic: "Algebra: Polynomials & Functions",
    bookQuestionNum: 196,
    text: "Find the inverse of f(x) = 4x + 9.",
    options: {
      A: "(x - 9)/4",
      B: "(x + 9)/4",
      C: "4x - 9",
      D: "9 - 4x"
    },
    answer: "A",
    explanation: "Let y = 4x + 9. Interchange and solve: x = 4y + 9. Hence, y = (x - 9)/4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_97",
    originalChapter: 8,
    chapterTitle: "Matrices, Determinants & Linear Transformations",
    topic: "Matrices & Determinants",
    bookQuestionNum: 197,
    text: "Find the determinant of [[3, 7], [2, 5]].",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    explanation: "3 × 5 - 7 × 2 = 15 - 14 = 1.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_98",
    originalChapter: 9,
    chapterTitle: "Geometry & Mensuration: Plane Shapes and Solids",
    topic: "Mensuration & Geometry",
    bookQuestionNum: 198,
    text: "A circle has circumference 88 cm. Find its area. Take π = 22/7.",
    options: {
      A: "484 cm²",
      B: "616 cm²",
      C: "704 cm²",
      D: "784 cm²"
    },
    answer: "B",
    explanation: "Radius = 88/(2 × 22/7) = 14 cm. Area = 22/7 × 14² = 616 cm².",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_99",
    originalChapter: 14,
    chapterTitle: "Permutations, Combinations & Probability",
    topic: "Probability",
    bookQuestionNum: 199,
    text: "If the probability of success is 0.72, find the probability of failure.",
    options: {
      A: "0.18",
      B: "0.22",
      C: "0.28",
      D: "0.32"
    },
    answer: "C",
    explanation: "1 - 0.72 = 0.28.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_adv_100",
    originalChapter: 11,
    chapterTitle: "Differential Calculus: Derivatives, Tangents & Maxima/Minima",
    topic: "Calculus: Differentiation",
    bookQuestionNum: 200,
    text: "Find the minimum value of y = x² - 10x + 21.",
    options: {
      A: "-5",
      B: "-4",
      C: "-3",
      D: "-2"
    },
    answer: "B",
    explanation: "Complete the square: y = (x - 5)² - 4. The minimum value is -4.",
    page: 1,
    hasImage: false
  },
  {
    id: "math_diag_401",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Plane Geometry: Angles & Parallel Lines",
    bookQuestionNum: 401,
    text: "Two parallel lines l and m are cut by a transversal as shown in the diagram. Find the value of x.",
    options: {
      A: "15",
      B: "20",
      C: "25",
      D: "30"
    },
    answer: "B",
    explanation: "Alternate interior angles between parallel lines are equal:\n\n3x + 10 = 5x − 30\n\n5x − 3x = 10 + 30\n\n2x = 40\n\nx = **20**.",
    page: 1,
    hasImage: true,
    imageCaption: "Figure 1: Transversal intersecting two parallel lines l and m with alternate interior angles",
    imageAlt: "Geometric diagram of parallel lines l and m intersected by a transversal, showing alternate interior angles (3x + 10)° and (5x - 30)°",
    imageSvg: "<svg viewBox=\"0 0 440 220\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <defs>\n    <marker id=\"arr1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 8 5 L 0 9 z\" fill=\"#0284c7\" />\n    </marker>\n    <marker id=\"arr2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 8 5 L 0 9 z\" fill=\"#3b82f6\" />\n    </marker>\n  </defs>\n  <!-- Background subtle grid -->\n  <rect width=\"100%\" height=\"100%\" fill=\"transparent\" />\n  \n  <!-- Parallel line l -->\n  <line x1=\"40\" y1=\"70\" x2=\"400\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n  <path d=\"M 220 70 L 230 65 L 230 75 Z\" fill=\"#0284c7\" />\n  <text x=\"390\" y=\"62\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#0369a1\">l</text>\n  \n  <!-- Parallel line m -->\n  <line x1=\"40\" y1=\"150\" x2=\"400\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n  <path d=\"M 220 150 L 230 145 L 230 155 Z\" fill=\"#0284c7\" />\n  <text x=\"390\" y=\"142\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#0369a1\">m</text>\n  \n  <!-- Transversal line -->\n  <line x1=\"100\" y1=\"25\" x2=\"330\" y2=\"195\" stroke=\"#dc2626\" stroke-width=\"2.5\" />\n  <text x=\"335\" y=\"200\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#dc2626\">t</text>\n  \n  <!-- Angle (3x + 10)° at upper intersection (x ~ 161, y = 70) -->\n  <!-- Interior angle between transversal going down-right and horizontal line going right -->\n  <path d=\"M 195 70 A 35 35 0 0 1 180 97\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" />\n  <circle cx=\"161\" cy=\"70\" r=\"3.5\" fill=\"#dc2626\" />\n  <text x=\"190\" y=\"100\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#1d4ed8\">(3x + 10)°</text>\n  \n  <!-- Angle (5x - 30)° at lower intersection (x ~ 269, y = 150) -->\n  <!-- Interior angle between transversal going up-left and horizontal line going left -->\n  <path d=\"M 235 150 A 35 35 0 0 1 250 123\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" />\n  <circle cx=\"269\" cy=\"150\" r=\"3.5\" fill=\"#dc2626\" />\n  <text x=\"145\" y=\"140\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#1d4ed8\">(5x − 30)°</text>\n</svg>"
  },
  {
    id: "math_diag_402",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Mensuration: Area of Triangles",
    bookQuestionNum: 402,
    text: "The triangle shown has an area of 70 cm² and base of 14 cm. Find its perpendicular height h.",
    options: {
      A: "5 cm",
      B: "8 cm",
      C: "10 cm",
      D: "12 cm"
    },
    answer: "C",
    explanation: "Area of a triangle = ½ × base × height\n\n70 = ½ × 14 × h = 7h\n\nh = 70 / 7 = **10 cm**.",
    page: 1,
    hasImage: true,
    imageCaption: "Figure 2: Triangle with known base 14 cm, area 70 cm², and unknown altitude h",
    imageAlt: "Triangle diagram with base = 14 cm and dashed perpendicular height h from apex C to base",
    imageSvg: "<svg viewBox=\"0 0 420 220\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Triangle vertices: A(70, 170), B(350, 170), C(200, 40) -->\n  <polygon points=\"70,170 350,170 200,40\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2.5\" />\n  \n  <!-- Perpendicular height line -->\n  <line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\" />\n  \n  <!-- Right-angle square marker at foot (200, 170) -->\n  <rect x=\"200\" y=\"156\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n  \n  <!-- Vertex labels -->\n  <text x=\"52\" y=\"176\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#1e293b\">A</text>\n  <text x=\"360\" y=\"176\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#1e293b\">B</text>\n  <text x=\"195\" y=\"28\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#1e293b\">C</text>\n  \n  <!-- Height label -->\n  <text x=\"210\" y=\"110\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#dc2626\">h = ?</text>\n  \n  <!-- Base dimension line -->\n  <line x1=\"70\" y1=\"195\" x2=\"350\" y2=\"195\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <line x1=\"70\" y1=\"188\" x2=\"70\" y2=\"202\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <line x1=\"350\" y1=\"188\" x2=\"350\" y2=\"202\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <text x=\"175\" y=\"212\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0f172a\">base = 14 cm</text>\n  <text x=\"160\" y=\"130\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" font-size=\"13\" fill=\"#0369a1\">Area = 70 cm²</text>\n</svg>"
  },
  {
    id: "math_diag_403",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Circle Geometry: Tangents & Radii",
    bookQuestionNum: 403,
    text: "OP is a radius of 7 cm meeting a tangent line at point P as illustrated in the diagram. What is the angle between OP and the tangent?",
    options: {
      A: "45°",
      B: "60°",
      C: "90°",
      D: "120°"
    },
    answer: "C",
    explanation: "A fundamental theorem of circle geometry states that the radius of a circle is perpendicular to the tangent at the point of contact.\n\nTherefore, the angle between OP and the tangent is **90°**.",
    page: 1,
    hasImage: true,
    imageCaption: "Figure 3: Radius OP meeting the tangent line at point of contact P",
    imageAlt: "Circle with center O, radius OP of 7 cm meeting horizontal tangent line at contact point P at 90 degrees",
    imageSvg: "<svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Circle center at (200, 100), radius 70 -->\n  <circle cx=\"200\" cy=\"100\" r=\"70\" fill=\"#f0fdf4\" stroke=\"#16a34a\" stroke-width=\"2.5\" />\n  \n  <!-- Tangent line at bottom point P(200, 170) -->\n  <line x1=\"50\" y1=\"170\" x2=\"350\" y2=\"170\" stroke=\"#2563eb\" stroke-width=\"2.5\" />\n  <text x=\"355\" y=\"174\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#2563eb\">Tangent</text>\n  \n  <!-- Radius line OP -->\n  <line x1=\"200\" y1=\"100\" x2=\"200\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"2.5\" />\n  \n  <!-- Center O -->\n  <circle cx=\"200\" cy=\"100\" r=\"4\" fill=\"#0f172a\" />\n  <text x=\"180\" y=\"98\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#0f172a\">O</text>\n  \n  <!-- Point P -->\n  <circle cx=\"200\" cy=\"170\" r=\"4\" fill=\"#dc2626\" />\n  <text x=\"208\" y=\"190\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#dc2626\">P</text>\n  \n  <!-- Radius label -->\n  <text x=\"210\" y=\"135\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#dc2626\">7 cm</text>\n  \n  <!-- Right-angle square marker at P (200, 170) -->\n  <rect x=\"200\" y=\"154\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2\" />\n  \n  <text x=\"110\" y=\"30\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#475569\">Radius ⊥ Tangent at contact point</text>\n</svg>"
  },
  {
    id: "math_diag_404",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Coordinate Geometry: Area of Polygons",
    bookQuestionNum: 404,
    text: "A triangle has vertices A(1, 1), B(5, 1) and C(3, 4) in the Cartesian plane as shown. Find its area.",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "10"
    },
    answer: "B",
    explanation: "The base AB lies horizontally along y = 1:\n\nBase AB = 5 − 1 = 4 units.\n\nThe vertical height is the difference in y-coordinates between C(3, 4) and the base line y = 1:\n\nHeight h = 4 − 1 = 3 units.\n\nArea = ½ × base × height = ½ × 4 × 3 = **6 square units**.",
    page: 2,
    hasImage: true,
    imageCaption: "Figure 4: Triangle plotted on Cartesian coordinates with vertices A(1, 1), B(5, 1), and C(3, 4)",
    imageAlt: "Cartesian plane plotting triangle ABC with coordinates A(1, 1), B(5, 1) and C(3, 4)",
    imageSvg: "<svg viewBox=\"0 0 440 240\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <defs>\n    <pattern id=\"grid4\" width=\"40\" height=\"40\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 40 0 L 0 0 0 40\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"0.7\" stroke-dasharray=\"2,2\"/>\n    </pattern>\n  </defs>\n  <rect x=\"60\" y=\"20\" width=\"340\" height=\"180\" fill=\"url(#grid4)\" />\n  \n  <!-- Axes: origin at (60, 200). Scale: 50px per unit horizontal, 40px per unit vertical -->\n  <!-- x-axis -->\n  <line x1=\"50\" y1=\"200\" x2=\"410\" y2=\"200\" stroke=\"#334155\" stroke-width=\"2\" />\n  <text x=\"415\" y=\"205\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#334155\">x</text>\n  <!-- y-axis -->\n  <line x1=\"60\" y1=\"210\" x2=\"60\" y2=\"15\" stroke=\"#334155\" stroke-width=\"2\" />\n  <text x=\"55\" y=\"12\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#334155\">y</text>\n  \n  <!-- Tick marks: origin (0,0) at (60, 200) -->\n  <!-- x ticks: 1:110, 2:160, 3:210, 4:260, 5:310, 6:360 -->\n  <text x=\"50\" y=\"215\" font-size=\"12\" fill=\"#64748b\">0</text>\n  <text x=\"106\" y=\"215\" font-size=\"12\" fill=\"#64748b\">1</text>\n  <text x=\"156\" y=\"215\" font-size=\"12\" fill=\"#64748b\">2</text>\n  <text x=\"206\" y=\"215\" font-size=\"12\" fill=\"#64748b\">3</text>\n  <text x=\"256\" y=\"215\" font-size=\"12\" fill=\"#64748b\">4</text>\n  <text x=\"306\" y=\"215\" font-size=\"12\" fill=\"#64748b\">5</text>\n  <!-- y ticks: 1:160, 2:120, 3:80, 4:40 -->\n  <text x=\"44\" y=\"164\" font-size=\"12\" fill=\"#64748b\">1</text>\n  <text x=\"44\" y=\"124\" font-size=\"12\" fill=\"#64748b\">2</text>\n  <text x=\"44\" y=\"84\" font-size=\"12\" fill=\"#64748b\">3</text>\n  <text x=\"44\" y=\"44\" font-size=\"12\" fill=\"#64748b\">4</text>\n\n  <!-- Triangle ABC: A(110, 160), B(310, 160), C(210, 40) -->\n  <polygon points=\"110,160 310,160 210,40\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2.5\" />\n  \n  <!-- Height dashed line -->\n  <line x1=\"210\" y1=\"40\" x2=\"210\" y2=\"160\" stroke=\"#e11d48\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  \n  <!-- Vertices -->\n  <circle cx=\"110\" cy=\"160\" r=\"4.5\" fill=\"#4f46e5\" />\n  <circle cx=\"310\" cy=\"160\" r=\"4.5\" fill=\"#4f46e5\" />\n  <circle cx=\"210\" cy=\"40\" r=\"4.5\" fill=\"#4f46e5\" />\n  \n  <!-- Labels -->\n  <text x=\"75\" y=\"155\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#1e1b4b\">A(1, 1)</text>\n  <text x=\"315\" y=\"155\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#1e1b4b\">B(5, 1)</text>\n  <text x=\"218\" y=\"38\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#1e1b4b\">C(3, 4)</text>\n  <text x=\"215\" y=\"105\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#e11d48\">h = 3</text>\n</svg>"
  },
  {
    id: "math_diag_405",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Trigonometry & Bearings: Vector Resolution",
    bookQuestionNum: 405,
    text: "A ship travels 20 km at 60° north of east as shown in the diagram. Find its northward displacement.",
    options: {
      A: "10 km",
      B: "10√3 km",
      C: "20√3 km",
      D: "20 km"
    },
    answer: "B",
    explanation: "Northward component = 20 × sin(60°) = 20 × (√3 / 2) = **10√3 km**.",
    page: 2,
    hasImage: true,
    imageCaption: "Figure 5: Bearing and vector resolution of ship traveling 20 km at 60° North of East",
    imageAlt: "Compass vector showing a displacement of 20 km at 60 degrees north of east and its northward component",
    imageSvg: "<svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <defs>\n    <marker id=\"vectArr\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 8 5 L 0 9 z\" fill=\"#0284c7\" />\n    </marker>\n    <marker id=\"axisArr\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 8 5 L 0 9 z\" fill=\"#475569\" />\n    </marker>\n  </defs>\n  <!-- Axes from Origin (100, 180) -->\n  <line x1=\"80\" y1=\"180\" x2=\"360\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\" marker-end=\"url(#axisArr)\" />\n  <text x=\"365\" y=\"185\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#0f172a\">E</text>\n  \n  <line x1=\"100\" y1=\"200\" x2=\"100\" y2=\"25\" stroke=\"#475569\" stroke-width=\"2\" marker-end=\"url(#axisArr)\" />\n  <text x=\"95\" y=\"18\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#0f172a\">N</text>\n  \n  <!-- Ship Vector: 200 px at 60 deg -> dx = 100 px, dy = 173 px -> End at (200, 7) -->\n  <!-- Scaled slightly: vector length 160 px -> dx = 80, dy = 138.56 -> End at (180, 41.4) -->\n  <line x1=\"100\" y1=\"180\" x2=\"180\" y2=\"42\" stroke=\"#0284c7\" stroke-width=\"3\" marker-end=\"url(#vectArr)\" />\n  \n  <!-- Northward component dashed -->\n  <line x1=\"180\" y1=\"180\" x2=\"180\" y2=\"42\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <rect x=\"168\" y=\"168\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n  \n  <!-- Angle arc 60 deg -->\n  <path d=\"M 140 180 A 40 40 0 0 0 120 145\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"2.5\" />\n  <text x=\"142\" y=\"162\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#b45309\">60°</text>\n  \n  <!-- Vector labels -->\n  <text x=\"115\" y=\"100\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0284c7\">20 km</text>\n  <text x=\"188\" y=\"115\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#dc2626\">Displacement (N) = ?</text>\n  \n  <circle cx=\"100\" cy=\"180\" r=\"4\" fill=\"#0f172a\" />\n  <text x=\"80\" y=\"195\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#64748b\">Origin</text>\n</svg>"
  },
  {
    id: "math_diag_406",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Mensuration: Sector of a Circle",
    bookQuestionNum: 406,
    text: "Find the area of the circular sector shown with radius 14 cm and subtended angle 75°. (Take π = 22/7)",
    options: {
      A: "110 cm²",
      B: "128⅓ cm²",
      C: "140 cm²",
      D: "154 cm²"
    },
    answer: "B",
    explanation: "Area of a sector = (θ / 360°) × πr²\n\nArea = (75 / 360) × (22 / 7) × 14²\n\n= (5 / 24) × (22 / 7) × 196\n\n= (5 / 24) × 616 = 3080 / 24 = 385 / 3 = **128⅓ cm²**.",
    page: 2,
    hasImage: true,
    imageCaption: "Figure 6: Circular sector of radius 14 cm subtending central angle 75°",
    imageAlt: "Diagram of a circle sector with central angle 75 degrees and radius r = 14 cm",
    imageSvg: "<svg viewBox=\"0 0 420 220\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Center O at (130, 160), Radius 150 -->\n  <!-- Horizontal arm to (280, 160) -->\n  <!-- Arm at 75° up: dx = 150 * cos(75°) = 38.8, dy = 150 * sin(75°) = 144.9 -> End at (168.8, 15.1) -->\n  <path d=\"M 130 160 L 280 160 A 150 150 0 0 0 168.8 15.1 Z\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.5\" />\n  \n  <!-- Center O -->\n  <circle cx=\"130\" cy=\"160\" r=\"4.5\" fill=\"#0f172a\" />\n  <text x=\"110\" y=\"175\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#0f172a\">O</text>\n  \n  <!-- Radius labels -->\n  <text x=\"195\" y=\"180\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#b45309\">r = 14 cm</text>\n  \n  <!-- Angle arc -->\n  <path d=\"M 170 160 A 40 40 0 0 0 140.3 121.4\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\" />\n  <text x=\"175\" y=\"140\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#dc2626\">75°</text>\n  \n  <!-- Info card -->\n  <rect x=\"290\" y=\"40\" width=\"115\" height=\"75\" rx=\"6\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" />\n  <text x=\"300\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#334155\">r = 14 cm</text>\n  <text x=\"300\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#334155\">θ = 75°</text>\n  <text x=\"300\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#0284c7\">π = 22/7</text>\n</svg>"
  },
  {
    id: "math_diag_407",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Mensuration: Area of Trapezium",
    bookQuestionNum: 407,
    text: "The parallel sides of the trapezium shown are 12 cm and 20 cm, and its perpendicular height is 10 cm. Find its area.",
    options: {
      A: "120 cm²",
      B: "140 cm²",
      C: "160 cm²",
      D: "180 cm²"
    },
    answer: "C",
    explanation: "Area of a trapezium = ½(a + b)h\n\nArea = ½(12 + 20) × 10\n\n= ½(32) × 10 = 16 × 10 = **160 cm²**.",
    page: 3,
    hasImage: true,
    imageCaption: "Figure 7: Trapezium with parallel sides 12 cm and 20 cm, and height 10 cm",
    imageAlt: "Trapezium with top side 12 cm, bottom side 20 cm, and dashed vertical height 10 cm",
    imageSvg: "<svg viewBox=\"0 0 420 220\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Trapezium vertices: Top (140, 50) to (260, 50) length 120 (12 cm); Bottom (80, 160) to (320, 160) length 240 (20 cm) -->\n  <polygon points=\"140,50 260,50 320,160 80,160\" fill=\"#f0fdfa\" stroke=\"#0d9488\" stroke-width=\"2.5\" />\n  \n  <!-- Height dashed line from (140, 50) to (140, 160) -->\n  <line x1=\"140\" y1=\"50\" x2=\"140\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <rect x=\"140\" y=\"146\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n  <text x=\"148\" y=\"110\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#dc2626\">h = 10 cm</text>\n  \n  <!-- Top dimension -->\n  <line x1=\"140\" y1=\"36\" x2=\"260\" y2=\"36\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <line x1=\"140\" y1=\"30\" x2=\"140\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <line x1=\"260\" y1=\"30\" x2=\"260\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <text x=\"180\" y=\"28\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0f172a\">12 cm</text>\n  \n  <!-- Bottom dimension -->\n  <line x1=\"80\" y1=\"184\" x2=\"320\" y2=\"184\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <line x1=\"80\" y1=\"178\" x2=\"80\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <line x1=\"320\" y1=\"178\" x2=\"320\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <text x=\"180\" y=\"202\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0f172a\">20 cm</text>\n</svg>"
  },
  {
    id: "math_diag_408",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Mensuration: Volume of Cone",
    bookQuestionNum: 408,
    text: "A cone has base radius 5 cm and vertical height 12 cm as illustrated. Find its volume.",
    options: {
      A: "60π cm³",
      B: "75π cm³",
      C: "100π cm³",
      D: "150π cm³"
    },
    answer: "C",
    explanation: "Volume of a cone = ⅓πr²h\n\n= ⅓ × π × (5)² × 12\n\n= ⅓ × π × 25 × 12\n\n= 25 × 4 × π = **100π cm³**.",
    page: 3,
    hasImage: true,
    imageCaption: "Figure 8: Circular cone with vertical height 12 cm and base radius 5 cm",
    imageAlt: "Diagram of a cone with radius r = 5 cm and vertical height h = 12 cm",
    imageSvg: "<svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Cone apex at (210, 30), base ellipse centered at (210, 180), rx = 80, ry = 22 -->\n  <path d=\"M 130 180 L 210 30 L 290 180\" fill=\"#ede9fe\" stroke=\"#7c3aed\" stroke-width=\"2.5\" />\n  \n  <!-- Base ellipse: bottom half solid, top half dashed -->\n  <path d=\"M 130 180 A 80 22 0 0 0 290 180\" fill=\"#ddd6fe\" stroke=\"#7c3aed\" stroke-width=\"2.5\" />\n  <path d=\"M 130 180 A 80 22 0 0 1 290 180\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  \n  <!-- Height dashed line -->\n  <line x1=\"210\" y1=\"30\" x2=\"210\" y2=\"180\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <rect x=\"210\" y=\"168\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n  <text x=\"218\" y=\"110\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#dc2626\">h = 12 cm</text>\n  \n  <!-- Radius line from center (210, 180) to (290, 180) -->\n  <line x1=\"210\" y1=\"180\" x2=\"290\" y2=\"180\" stroke=\"#2563eb\" stroke-width=\"2\" />\n  <circle cx=\"210\" cy=\"180\" r=\"3.5\" fill=\"#0f172a\" />\n  <text x=\"235\" y=\"196\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#2563eb\">r = 5 cm</text>\n</svg>"
  },
  {
    id: "math_diag_409",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Mensuration: Surface Area of Cylinder",
    bookQuestionNum: 409,
    text: "A solid cylinder has base radius 4 cm and height 15 cm. Find its curved surface area.",
    options: {
      A: "60π cm²",
      B: "100π cm²",
      C: "120π cm²",
      D: "160π cm²"
    },
    answer: "C",
    explanation: "Curved surface area of a cylinder = 2πrh\n\n= 2 × π × 4 × 15\n\n= **120π cm²**.",
    page: 3,
    hasImage: true,
    imageCaption: "Figure 9: Solid cylinder with base radius 4 cm and vertical height 15 cm",
    imageAlt: "Cylinder diagram with base radius r = 4 cm and height h = 15 cm",
    imageSvg: "<svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Top ellipse centered at (210, 50), rx = 70, ry = 20 -->\n  <!-- Cylinder body: sides from (140, 50) to (140, 170) and (280, 50) to (280, 170) -->\n  <path d=\"M 140 50 L 140 170 A 70 20 0 0 0 280 170 L 280 50 Z\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2.5\" />\n  \n  <!-- Bottom back curve dashed -->\n  <path d=\"M 140 170 A 70 20 0 0 1 280 170\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  \n  <!-- Top ellipse complete -->\n  <ellipse cx=\"210\" cy=\"50\" rx=\"70\" ry=\"20\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2.5\" />\n  \n  <!-- Top radius line -->\n  <line x1=\"210\" y1=\"50\" x2=\"280\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"2\" />\n  <circle cx=\"210\" cy=\"50\" r=\"3.5\" fill=\"#0f172a\" />\n  <text x=\"230\" y=\"44\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#dc2626\">r = 4 cm</text>\n  \n  <!-- Height dimension on left -->\n  <line x1=\"115\" y1=\"50\" x2=\"115\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <line x1=\"110\" y1=\"50\" x2=\"120\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <line x1=\"110\" y1=\"170\" x2=\"120\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <text x=\"50\" y=\"115\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0f172a\">h = 15 cm</text>\n</svg>"
  },
  {
    id: "math_diag_410",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Coordinate Geometry: Gradient of Straight Line",
    bookQuestionNum: 410,
    text: "A straight line passes through (0, 1) and (4, 5) as shown in the diagram. Find its gradient.",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    explanation: "Gradient m = (y₂ − y₁) / (x₂ − x₁)\n\nm = (5 − 1) / (4 − 0) = 4 / 4 = **1**.",
    page: 4,
    hasImage: true,
    imageCaption: "Figure 10: Cartesian line passing through coordinates (0, 1) and (4, 5)",
    imageAlt: "Linear graph with line passing through y-intercept (0, 1) and point (4, 5)",
    imageSvg: "<svg viewBox=\"0 0 440 240\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <defs>\n    <pattern id=\"grid10\" width=\"40\" height=\"30\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 40 0 L 0 0 0 30\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"0.8\" />\n    </pattern>\n  </defs>\n  <rect x=\"70\" y=\"20\" width=\"320\" height=\"180\" fill=\"url(#grid10)\" />\n  \n  <!-- Axes: origin at (70, 200). Scale: 50px per x unit, 30px per y unit -->\n  <!-- x-axis -->\n  <line x1=\"50\" y1=\"200\" x2=\"410\" y2=\"200\" stroke=\"#334155\" stroke-width=\"2\" />\n  <text x=\"415\" y=\"205\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#334155\">x</text>\n  <!-- y-axis -->\n  <line x1=\"70\" y1=\"210\" x2=\"70\" y2=\"15\" stroke=\"#334155\" stroke-width=\"2\" />\n  <text x=\"65\" y=\"12\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#334155\">y</text>\n  \n  <!-- Ticks -->\n  <text x=\"60\" y=\"215\" font-size=\"12\" fill=\"#64748b\">0</text>\n  <text x=\"116\" y=\"215\" font-size=\"12\" fill=\"#64748b\">1</text>\n  <text x=\"166\" y=\"215\" font-size=\"12\" fill=\"#64748b\">2</text>\n  <text x=\"216\" y=\"215\" font-size=\"12\" fill=\"#64748b\">3</text>\n  <text x=\"266\" y=\"215\" font-size=\"12\" fill=\"#64748b\">4</text>\n  <text x=\"316\" y=\"215\" font-size=\"12\" fill=\"#64748b\">5</text>\n  \n  <!-- y-values: 1:170, 2:140, 3:110, 4:80, 5:50 -->\n  <text x=\"54\" y=\"174\" font-size=\"12\" fill=\"#64748b\">1</text>\n  <text x=\"54\" y=\"144\" font-size=\"12\" fill=\"#64748b\">2</text>\n  <text x=\"54\" y=\"114\" font-size=\"12\" fill=\"#64748b\">3</text>\n  <text x=\"54\" y=\"84\" font-size=\"12\" fill=\"#64748b\">4</text>\n  <text x=\"54\" y=\"54\" font-size=\"12\" fill=\"#64748b\">5</text>\n  \n  <!-- Line from x=-0.5 (45, 185) to x=4.5 (295, 35) -->\n  <line x1=\"45\" y1=\"185\" x2=\"310\" y2=\"26\" stroke=\"#2563eb\" stroke-width=\"3\" />\n  \n  <!-- Triangle showing rise and run -->\n  <line x1=\"70\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#e11d48\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" />\n  <line x1=\"270\" y1=\"170\" x2=\"270\" y2=\"50\" stroke=\"#e11d48\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" />\n  \n  <!-- Points: (0, 1) -> (70, 170) ; (4, 5) -> (270, 50) -->\n  <circle cx=\"70\" cy=\"170\" r=\"5\" fill=\"#dc2626\" />\n  <text x=\"82\" y=\"175\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#1e293b\">(0, 1)</text>\n  \n  <circle cx=\"270\" cy=\"50\" r=\"5\" fill=\"#dc2626\" />\n  <text x=\"280\" y=\"48\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#1e293b\">(4, 5)</text>\n</svg>"
  },
  {
    id: "math_diag_411",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Sets & Venn Diagrams",
    bookQuestionNum: 411,
    text: "The Venn diagram gives 8 elements in A only, 5 in A ∩ B, and 7 in B only. Find n(A ∪ B).",
    options: {
      A: "13",
      B: "15",
      C: "20",
      D: "25"
    },
    answer: "C",
    explanation: "The union n(A ∪ B) is the sum of the non-overlapping regions:\n\nn(A ∪ B) = n(A only) + n(A ∩ B) + n(B only)\n\n= 8 + 5 + 7 = **20**.",
    page: 4,
    hasImage: true,
    imageCaption: "Figure 11: Venn diagram with sets A and B, showing cardinalities 8, 5, and 7",
    imageAlt: "Venn diagram showing set A only with 8, intersection A and B with 5, and set B only with 7",
    imageSvg: "<svg viewBox=\"0 0 420 220\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Universal set boundary -->\n  <rect x=\"30\" y=\"20\" width=\"360\" height=\"180\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2\" />\n  <text x=\"45\" y=\"45\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"18\" fill=\"#334155\">ξ</text>\n  \n  <!-- Circle A centered at (170, 115), r = 65 -->\n  <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#3b82f6\" fill-opacity=\"0.25\" stroke=\"#2563eb\" stroke-width=\"2.5\" />\n  <!-- Circle B centered at (250, 115), r = 65 -->\n  <circle cx=\"250\" cy=\"115\" r=\"65\" fill=\"#10b981\" fill-opacity=\"0.25\" stroke=\"#059669\" stroke-width=\"2.5\" />\n  \n  <!-- Labels -->\n  <text x=\"135\" y=\"45\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"17\" fill=\"#1d4ed8\">A</text>\n  <text x=\"275\" y=\"45\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"17\" fill=\"#047857\">B</text>\n  \n  <!-- Values inside regions -->\n  <text x=\"135\" y=\"122\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"20\" fill=\"#1e293b\">8</text>\n  <text x=\"204\" y=\"122\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"20\" fill=\"#0f172a\">5</text>\n  <text x=\"270\" y=\"122\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"20\" fill=\"#1e293b\">7</text>\n  \n  <text x=\"185\" y=\"190\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#64748b\">A ∩ B = 5</text>\n</svg>"
  },
  {
    id: "math_diag_412",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Statistics: Frequency Distribution",
    bookQuestionNum: 412,
    text: "A frequency bar chart has class frequencies 4, 6, 8, 5, and 3 across five classes. Find the total frequency.",
    options: {
      A: "21",
      B: "24",
      C: "26",
      D: "28"
    },
    answer: "C",
    explanation: "Total frequency Σf = 4 + 6 + 8 + 5 + 3 = **26**.",
    page: 4,
    hasImage: true,
    imageCaption: "Figure 12: Frequency bar chart across 5 classes with frequencies 4, 6, 8, 5, 3",
    imageAlt: "Bar chart displaying frequencies of 4, 6, 8, 5, and 3 for classes 1 through 5",
    imageSvg: "<svg viewBox=\"0 0 440 230\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Horizontal grid lines -->\n  <line x1=\"60\" y1=\"180\" x2=\"400\" y2=\"180\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" />\n  <line x1=\"60\" y1=\"145\" x2=\"400\" y2=\"145\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <line x1=\"60\" y1=\"110\" x2=\"400\" y2=\"110\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <line x1=\"60\" y1=\"75\" x2=\"400\" y2=\"75\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <line x1=\"60\" y1=\"40\" x2=\"400\" y2=\"40\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  \n  <!-- Y axis labels (each 2 units = 35px) -->\n  <text x=\"40\" y=\"184\" font-size=\"12\" fill=\"#64748b\">0</text>\n  <text x=\"40\" y=\"149\" font-size=\"12\" fill=\"#64748b\">2</text>\n  <text x=\"40\" y=\"114\" font-size=\"12\" fill=\"#64748b\">4</text>\n  <text x=\"40\" y=\"79\" font-size=\"12\" fill=\"#64748b\">6</text>\n  <text x=\"40\" y=\"44\" font-size=\"12\" fill=\"#64748b\">8</text>\n  <text x=\"15\" y=\"25\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#334155\">Frequency</text>\n  \n  <!-- Bars: width 40, centers at 100, 165, 230, 295, 360 -->\n  <!-- Class 1: freq 4 -> height 70 (y = 110) -->\n  <rect x=\"80\" y=\"110\" width=\"40\" height=\"70\" rx=\"3\" fill=\"#6366f1\" />\n  <text x=\"96\" y=\"103\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#4338ca\">4</text>\n  <text x=\"95\" y=\"200\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"#334155\">C1</text>\n  \n  <!-- Class 2: freq 6 -> height 105 (y = 75) -->\n  <rect x=\"145\" y=\"75\" width=\"40\" height=\"105\" rx=\"3\" fill=\"#6366f1\" />\n  <text x=\"161\" y=\"68\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#4338ca\">6</text>\n  <text x=\"160\" y=\"200\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"#334155\">C2</text>\n  \n  <!-- Class 3: freq 8 -> height 140 (y = 40) -->\n  <rect x=\"210\" y=\"40\" width=\"40\" height=\"140\" rx=\"3\" fill=\"#4f46e5\" />\n  <text x=\"226\" y=\"33\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#3730a3\">8</text>\n  <text x=\"225\" y=\"200\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"#334155\">C3</text>\n  \n  <!-- Class 4: freq 5 -> height 87.5 (y = 92.5) -->\n  <rect x=\"275\" y=\"92.5\" width=\"40\" height=\"87.5\" rx=\"3\" fill=\"#6366f1\" />\n  <text x=\"291\" y=\"85\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#4338ca\">5</text>\n  <text x=\"290\" y=\"200\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"#334155\">C4</text>\n  \n  <!-- Class 5: freq 3 -> height 52.5 (y = 127.5) -->\n  <rect x=\"340\" y=\"127.5\" width=\"40\" height=\"52.5\" rx=\"3\" fill=\"#6366f1\" />\n  <text x=\"356\" y=\"120\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#4338ca\">3</text>\n  <text x=\"355\" y=\"200\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"#334155\">C5</text>\n  \n  <text x=\"210\" y=\"222\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#334155\">Classes</text>\n</svg>"
  },
  {
    id: "math_diag_413",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Algebra & Graphs: Quadratic Functions",
    bookQuestionNum: 413,
    text: "The graph represents y = x² − 4. At which points does the curve cross the x-axis?",
    options: {
      A: "−4 and 4",
      B: "−2 and 2",
      C: "0 and 4",
      D: "−1 and 1"
    },
    answer: "B",
    explanation: "At the x-axis, y = 0:\n\nx² − 4 = 0\n\nx² = 4\n\nx = ±√4 = **−2 and 2**.",
    page: 5,
    hasImage: true,
    imageCaption: "Figure 13: Parabola graph of y = x² − 4 intersecting the x-axis",
    imageAlt: "Parabola y = x^2 - 4 crossing the x-axis at -2 and 2 with vertex at (0, -4)",
    imageSvg: "<svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Axes: Origin at (210, 110) -->\n  <!-- x-axis at y = 110, y-axis at x = 210 -->\n  <line x1=\"30\" y1=\"110\" x2=\"390\" y2=\"110\" stroke=\"#334155\" stroke-width=\"2\" />\n  <text x=\"395\" y=\"115\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#334155\">x</text>\n  \n  <line x1=\"210\" y1=\"215\" x2=\"210\" y2=\"15\" stroke=\"#334155\" stroke-width=\"2\" />\n  <text x=\"205\" y=\"12\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#334155\">y</text>\n  \n  <!-- Scale: 40px per x unit, 18px per y unit -->\n  <!-- x ticks: -3:90, -2:130, -1:170, 0:210, 1:250, 2:290, 3:330 -->\n  <text x=\"123\" y=\"128\" font-size=\"13\" font-weight=\"bold\" fill=\"#dc2626\">−2</text>\n  <text x=\"286\" y=\"128\" font-size=\"13\" font-weight=\"bold\" fill=\"#dc2626\">2</text>\n  \n  <!-- y-intercept at (210, 110 + 4*18 = 182) -->\n  <circle cx=\"210\" cy=\"182\" r=\"4\" fill=\"#0284c7\" />\n  <text x=\"218\" y=\"186\" font-size=\"12\" fill=\"#0284c7\">−4</text>\n  \n  <!-- Parabola path: y = x^2 - 4 -->\n  <!-- x=-2.6 -> y=2.76 (cy = 110 - 2.76*18 = 60) ; cx = 210 - 104 = 106 -->\n  <!-- x=2.6 -> cx = 314, cy = 60 -->\n  <!-- Curve through (106, 60), (-2,0)->(130,110), (0,-4)->(210,182), (2,0)->(290,110), (314,60) -->\n  <path d=\"M 100 45 Q 210 250 320 45\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" />\n  \n  <!-- Intercept dots -->\n  <circle cx=\"130\" cy=\"110\" r=\"5\" fill=\"#dc2626\" />\n  <circle cx=\"290\" cy=\"110\" r=\"5\" fill=\"#dc2626\" />\n  \n  <text x=\"250\" y=\"45\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#1d4ed8\">y = x² − 4</text>\n</svg>"
  },
  {
    id: "math_diag_414",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Vectors: Magnitude in 2D",
    bookQuestionNum: 414,
    text: "A vector has components 6 units east and 4 units north, terminating at (6, 4) as shown. Find its magnitude.",
    options: {
      A: "2√13",
      B: "2√10",
      C: "10",
      D: "52"
    },
    answer: "A",
    explanation: "Magnitude = √(6² + 4²) = √(36 + 16) = √52 = √(4 × 13) = **2√13**.",
    page: 5,
    hasImage: true,
    imageCaption: "Figure 14: 2D vector with horizontal component 6 and vertical component 4",
    imageAlt: "Vector in Cartesian plane from origin to (6, 4) with components 6 east and 4 north",
    imageSvg: "<svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <defs>\n    <marker id=\"vect14\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 8 5 L 0 9 z\" fill=\"#0284c7\" />\n    </marker>\n  </defs>\n  <!-- Axes: origin at (80, 180) -->\n  <line x1=\"60\" y1=\"180\" x2=\"380\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\" />\n  <text x=\"385\" y=\"185\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#334155\">x</text>\n  \n  <line x1=\"80\" y1=\"200\" x2=\"80\" y2=\"30\" stroke=\"#475569\" stroke-width=\"2\" />\n  <text x=\"75\" y=\"22\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#334155\">y</text>\n  \n  <!-- Point (6, 4): dx = 240, dy = 120 -> at (320, 60) -->\n  <line x1=\"80\" y1=\"180\" x2=\"315\" y2=\"63\" stroke=\"#0284c7\" stroke-width=\"3\" marker-end=\"url(#vect14)\" />\n  \n  <!-- Components -->\n  <line x1=\"80\" y1=\"180\" x2=\"320\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <line x1=\"320\" y1=\"180\" x2=\"320\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <rect x=\"306\" y=\"166\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n  \n  <circle cx=\"80\" cy=\"180\" r=\"4\" fill=\"#0f172a\" />\n  <circle cx=\"320\" cy=\"60\" r=\"5\" fill=\"#dc2626\" />\n  <text x=\"330\" y=\"58\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#dc2626\">(6, 4)</text>\n  \n  <text x=\"190\" y=\"200\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0f172a\">6 units</text>\n  <text x=\"330\" y=\"125\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0f172a\">4 units</text>\n  <text x=\"175\" y=\"105\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#0284c7\">|v| = ?</text>\n</svg>"
  },
  {
    id: "math_diag_415",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Probability: Tree Diagrams",
    bookQuestionNum: 415,
    text: "A fair coin is tossed twice as represented in the probability tree diagram. Find the probability of getting exactly one head.",
    options: {
      A: "¼",
      B: "⅓",
      C: "½",
      D: "¾"
    },
    answer: "C",
    explanation: "Sample space = {HH, HT, TH, TT}, each with probability ¼.\n\nOutcomes with exactly one head = {HT, TH}.\n\nP(exactly 1 head) = ¼ + ¼ = 2/4 = **½**.",
    page: 5,
    hasImage: true,
    imageCaption: "Figure 15: Probability tree diagram for two consecutive coin tosses",
    imageAlt: "Tree diagram showing outcomes of two coin tosses: HH, HT, TH, TT with probabilities",
    imageSvg: "<svg viewBox=\"0 0 440 230\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Start node at (50, 115) -->\n  <circle cx=\"50\" cy=\"115\" r=\"16\" fill=\"#0284c7\" />\n  <text x=\"36\" y=\"120\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"11\" fill=\"#ffffff\">Start</text>\n  \n  <!-- First toss branches: to (180, 60) and (180, 170) -->\n  <line x1=\"66\" y1=\"115\" x2=\"165\" y2=\"60\" stroke=\"#0284c7\" stroke-width=\"2\" />\n  <line x1=\"66\" y1=\"115\" x2=\"165\" y2=\"170\" stroke=\"#0284c7\" stroke-width=\"2\" />\n  <text x=\"105\" y=\"78\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#0369a1\">½</text>\n  <text x=\"105\" y=\"155\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#0369a1\">½</text>\n  \n  <!-- 1st Toss Nodes -->\n  <circle cx=\"180\" cy=\"60\" r=\"15\" fill=\"#f0fdf4\" stroke=\"#16a34a\" stroke-width=\"2\" />\n  <text x=\"174\" y=\"66\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#15803d\">H</text>\n  \n  <circle cx=\"180\" cy=\"170\" r=\"15\" fill=\"#fef2f2\" stroke=\"#dc2626\" stroke-width=\"2\" />\n  <text x=\"175\" y=\"176\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#b91c1c\">T</text>\n  \n  <!-- Second toss branches -->\n  <!-- From H (180, 60) to (310, 30) and (310, 90) -->\n  <line x1=\"195\" y1=\"60\" x2=\"295\" y2=\"30\" stroke=\"#16a34a\" stroke-width=\"1.8\" />\n  <line x1=\"195\" y1=\"60\" x2=\"295\" y2=\"90\" stroke=\"#16a34a\" stroke-width=\"1.8\" />\n  \n  <!-- From T (180, 170) to (310, 140) and (310, 200) -->\n  <line x1=\"195\" y1=\"170\" x2=\"295\" y2=\"140\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n  <line x1=\"195\" y1=\"170\" x2=\"295\" y2=\"200\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n  \n  <!-- 2nd Toss Nodes -->\n  <circle cx=\"310\" cy=\"30\" r=\"13\" fill=\"#f0fdf4\" stroke=\"#16a34a\" stroke-width=\"1.5\" />\n  <text x=\"305\" y=\"35\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#15803d\">H</text>\n  \n  <circle cx=\"310\" cy=\"90\" r=\"13\" fill=\"#fef2f2\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n  <text x=\"306\" y=\"95\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#b91c1c\">T</text>\n  \n  <circle cx=\"310\" cy=\"140\" r=\"13\" fill=\"#f0fdf4\" stroke=\"#16a34a\" stroke-width=\"1.5\" />\n  <text x=\"305\" y=\"145\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#15803d\">H</text>\n  \n  <circle cx=\"310\" cy=\"200\" r=\"13\" fill=\"#fef2f2\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n  <text x=\"306\" y=\"205\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#b91c1c\">T</text>\n  \n  <!-- Outcomes -->\n  <text x=\"345\" y=\"35\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#334155\">HH (¼)</text>\n  <text x=\"345\" y=\"95\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0284c7\">HT (¼) ★</text>\n  <text x=\"345\" y=\"145\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0284c7\">TH (¼) ★</text>\n  <text x=\"345\" y=\"205\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#334155\">TT (¼)</text>\n</svg>"
  },
  {
    id: "math_diag_416",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Statistics: Box Plots & Interquartile Range",
    bookQuestionNum: 416,
    text: "The box plot shown represents a dataset with Q₁ = 8 and Q₃ = 12. Find the interquartile range.",
    options: {
      A: "2",
      B: "4",
      C: "8",
      D: "12"
    },
    answer: "B",
    explanation: "Interquartile range = Q₃ − Q₁ = 12 − 8 = **4**.",
    page: 6,
    hasImage: true,
    imageCaption: "Figure 16: Box-and-whisker plot indicating Q₁ = 8, median = 10, and Q₃ = 12",
    imageAlt: "Box plot diagram showing quartiles on a number line with Q1 at 8 and Q3 at 12",
    imageSvg: "<svg viewBox=\"0 0 440 210\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Number line: from 0 to 20. X-range: 40 to 400 (18px per unit) -->\n  <line x1=\"30\" y1=\"150\" x2=\"410\" y2=\"150\" stroke=\"#334155\" stroke-width=\"2\" />\n  \n  <!-- Ticks and labels: 2, 5, 8, 10, 12, 15, 18 -->\n  <!-- 2: 76, 5: 130, 8: 184, 10: 220, 12: 256, 15: 310, 18: 364 -->\n  <line x1=\"76\" y1=\"145\" x2=\"76\" y2=\"155\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <text x=\"72\" y=\"172\" font-size=\"12\" fill=\"#64748b\">2</text>\n  \n  <line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"155\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <text x=\"126\" y=\"172\" font-size=\"12\" fill=\"#64748b\">5</text>\n  \n  <line x1=\"184\" y1=\"145\" x2=\"184\" y2=\"155\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <text x=\"180\" y=\"172\" font-size=\"13\" font-weight=\"bold\" fill=\"#0284c7\">8</text>\n  \n  <line x1=\"220\" y1=\"145\" x2=\"220\" y2=\"155\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <text x=\"213\" y=\"172\" font-size=\"12\" fill=\"#64748b\">10</text>\n  \n  <line x1=\"256\" y1=\"145\" x2=\"256\" y2=\"155\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <text x=\"249\" y=\"172\" font-size=\"13\" font-weight=\"bold\" fill=\"#0284c7\">12</text>\n  \n  <line x1=\"310\" y1=\"145\" x2=\"310\" y2=\"155\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <text x=\"303\" y=\"172\" font-size=\"12\" fill=\"#64748b\">15</text>\n  \n  <line x1=\"364\" y1=\"145\" x2=\"364\" y2=\"155\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <text x=\"357\" y=\"172\" font-size=\"12\" fill=\"#64748b\">18</text>\n  \n  <!-- Left Whisker: from min (76) to Q1 (184) at y = 80 -->\n  <line x1=\"76\" y1=\"80\" x2=\"184\" y2=\"80\" stroke=\"#0284c7\" stroke-width=\"2\" />\n  <line x1=\"76\" y1=\"65\" x2=\"76\" y2=\"95\" stroke=\"#0284c7\" stroke-width=\"2\" />\n  \n  <!-- Right Whisker: from Q3 (256) to max (364) at y = 80 -->\n  <line x1=\"256\" y1=\"80\" x2=\"364\" y2=\"80\" stroke=\"#0284c7\" stroke-width=\"2\" />\n  <line x1=\"364\" y1=\"65\" x2=\"364\" y2=\"95\" stroke=\"#0284c7\" stroke-width=\"2\" />\n  \n  <!-- Box: from Q1 (184) to Q3 (256), width 72, y: 55 to 105 -->\n  <rect x=\"184\" y=\"55\" width=\"72\" height=\"50\" rx=\"3\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2.5\" />\n  \n  <!-- Median line at 10 (220) -->\n  <line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"105\" stroke=\"#dc2626\" stroke-width=\"2.5\" />\n  \n  <!-- Quartile labels on top -->\n  <text x=\"175\" y=\"42\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0284c7\">Q₁ = 8</text>\n  <text x=\"210\" y=\"42\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#dc2626\">Med</text>\n  <text x=\"245\" y=\"42\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0284c7\">Q₃ = 12</text>\n</svg>"
  },
  {
    id: "math_diag_417",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Geometry & Trigonometry: Pythagoras Theorem",
    bookQuestionNum: 417,
    text: "A right-angled triangle ABC has perpendicular sides AB = 12 cm and BC = 5 cm. Find the length of the hypotenuse AC.",
    options: {
      A: "13 cm",
      B: "15 cm",
      C: "17 cm",
      D: "19 cm"
    },
    answer: "A",
    explanation: "Hypotenuse² = 5² + 12² = 25 + 144 = 169.\n\nTherefore, the hypotenuse is **13 cm**.",
    page: 6,
    hasImage: true,
    imageCaption: "Figure 17: Right triangle ABC with perpendicular legs 12 cm and 5 cm",
    imageAlt: "Right-angled triangle diagram with leg 12 cm, base 5 cm, and hypotenuse AC",
    imageSvg: "<svg viewBox=\"0 0 420 220\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Right triangle: B at right angle (140, 170). A is at (140, 40) (height 130px -> 12 cm). C is at (270, 170) (base 130px -> 5 cm) -->\n  <polygon points=\"140,40 140,170 270,170\" fill=\"#f0fdf4\" stroke=\"#16a34a\" stroke-width=\"2.5\" />\n  \n  <!-- Right-angle symbol at B -->\n  <rect x=\"140\" y=\"154\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"1.8\" />\n  \n  <!-- Vertices labels -->\n  <text x=\"135\" y=\"30\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#0f172a\">A</text>\n  <text x=\"118\" y=\"180\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#0f172a\">B</text>\n  <text x=\"280\" y=\"175\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#0f172a\">C</text>\n  \n  <!-- Side lengths -->\n  <text x=\"70\" y=\"110\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#15803d\">12 cm</text>\n  <text x=\"195\" y=\"195\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#15803d\">5 cm</text>\n  <text x=\"215\" y=\"95\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#dc2626\">AC = ?</text>\n</svg>"
  },
  {
    id: "math_diag_418",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Circle Geometry: Chords & Distances",
    bookQuestionNum: 418,
    text: "A chord is 16 cm long and its perpendicular distance from the centre O is 6 cm as shown. Find the radius of the circle.",
    options: {
      A: "8 cm",
      B: "9 cm",
      C: "10 cm",
      D: "12 cm"
    },
    answer: "C",
    explanation: "The perpendicular from the centre bisects the chord.\n\nHalf-chord = 16 / 2 = 8 cm.\n\nRadius = √(8² + 6²) = √(64 + 36) = √100 = **10 cm**.",
    page: 6,
    hasImage: true,
    imageCaption: "Figure 18: Circle with chord of length 16 cm at distance 6 cm from centre O",
    imageAlt: "Circle diagram showing chord of 16 cm and distance d = 6 cm from centre to chord",
    imageSvg: "<svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Circle centered at (210, 115), radius 90 -->\n  <circle cx=\"210\" cy=\"115\" r=\"90\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2.5\" />\n  \n  <!-- Chord: horizontal below center at y = 115 + 54 = 169. Length = 2 * sqrt(90^2 - 54^2) = 2 * 72 = 144 -> from x = 138 to 282 -->\n  <line x1=\"138\" y1=\"169\" x2=\"282\" y2=\"169\" stroke=\"#0284c7\" stroke-width=\"3\" />\n  \n  <!-- Center O -->\n  <circle cx=\"210\" cy=\"115\" r=\"4.5\" fill=\"#0f172a\" />\n  <text x=\"215\" y=\"110\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#0f172a\">O</text>\n  \n  <!-- Perpendicular line from O to chord -->\n  <line x1=\"210\" y1=\"115\" x2=\"210\" y2=\"169\" stroke=\"#dc2626\" stroke-width=\"2\" />\n  <rect x=\"210\" y=\"157\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n  <text x=\"216\" y=\"145\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#dc2626\">d = 6</text>\n  \n  <!-- Radius line from O to chord endpoint (282, 169) -->\n  <line x1=\"210\" y1=\"115\" x2=\"282\" y2=\"169\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <text x=\"250\" y=\"135\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#16a34a\">r = ?</text>\n  \n  <!-- Chord label -->\n  <text x=\"180\" y=\"195\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0284c7\">chord = 16 cm</text>\n</svg>"
  },
  {
    id: "math_diag_419",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Matrices & Determinants",
    bookQuestionNum: 419,
    text: "Given the matrices A and B shown below, find det(AB).",
    options: {
      A: "5",
      B: "7",
      C: "10",
      D: "12"
    },
    answer: "A",
    explanation: "det(AB) = det(A) × det(B)\n\ndet(A) = (2 × 4) − (1 × 3) = 8 − 3 = 5\n\ndet(B) = (1 × 1) − (2 × 0) = 1 − 0 = 1\n\ndet(AB) = 5 × 1 = **5**.",
    page: 7,
    hasImage: true,
    imageCaption: "Figure 19: 2×2 Matrices A and B for determinant evaluation",
    imageAlt: "Matrix A = [[2, 1], [3, 4]] and Matrix B = [[1, 2], [0, 1]]",
    imageSvg: "<svg viewBox=\"0 0 440 210\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Matrix A -->\n  <text x=\"45\" y=\"115\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"22\" fill=\"#0f172a\">A =</text>\n  <!-- Bracket A Left -->\n  <path d=\"M 110 50 L 95 50 L 95 160 L 110 160\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\" />\n  <!-- Matrix A contents -->\n  <text x=\"120\" y=\"90\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"22\" fill=\"#1e293b\">2</text>\n  <text x=\"165\" y=\"90\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"22\" fill=\"#1e293b\">1</text>\n  <text x=\"120\" y=\"140\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"22\" fill=\"#1e293b\">3</text>\n  <text x=\"165\" y=\"140\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"22\" fill=\"#1e293b\">4</text>\n  <!-- Bracket A Right -->\n  <path d=\"M 185 50 L 200 50 L 200 160 L 185 160\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\" />\n  \n  <!-- Matrix B -->\n  <text x=\"235\" y=\"115\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"22\" fill=\"#0f172a\">B =</text>\n  <!-- Bracket B Left -->\n  <path d=\"M 300 50 L 285 50 L 285 160 L 300 160\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\" />\n  <!-- Matrix B contents -->\n  <text x=\"310\" y=\"90\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"22\" fill=\"#1e293b\">1</text>\n  <text x=\"355\" y=\"90\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"22\" fill=\"#1e293b\">2</text>\n  <text x=\"310\" y=\"140\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"22\" fill=\"#1e293b\">0</text>\n  <text x=\"355\" y=\"140\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"22\" fill=\"#1e293b\">1</text>\n  <!-- Bracket B Right -->\n  <path d=\"M 375 50 L 390 50 L 390 160 L 375 160\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\" />\n  \n  <text x=\"170\" y=\"195\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0284c7\">det(AB) = det(A) × det(B)</text>\n</svg>"
  },
  {
    id: "math_diag_420",
    originalChapter: 15,
    chapterTitle: "Topic 15: Diagram-Based Problem Solving in Mathematics",
    topic: "Statistics: Bar Charts & Totals",
    bookQuestionNum: 420,
    text: "A bar chart shows frequencies 25, 45, 30, 65, and 40 across five categories (1 to 5). Find the total frequency.",
    options: {
      A: "195",
      B: "200",
      C: "205",
      D: "210"
    },
    answer: "C",
    explanation: "Total frequency = 25 + 45 + 30 + 65 + 40 = **205**.",
    page: 7,
    hasImage: true,
    imageCaption: "Figure 20: Bar chart displaying frequencies 25, 45, 30, 65, and 40",
    imageAlt: "Bar chart with categories 1, 2, 3, 4, 5 having values 25, 45, 30, 65, and 40",
    imageSvg: "<svg viewBox=\"0 0 440 230\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 rounded-lg p-2 border border-slate-200 dark:border-slate-800\">\n  <!-- Horizontal gridlines: y-axis 0 to 70. 2px per unit. Baseline at y = 180, 70 at y = 40 -->\n  <line x1=\"55\" y1=\"180\" x2=\"410\" y2=\"180\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" />\n  <line x1=\"55\" y1=\"140\" x2=\"410\" y2=\"140\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <line x1=\"55\" y1=\"100\" x2=\"410\" y2=\"100\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <line x1=\"55\" y1=\"60\" x2=\"410\" y2=\"60\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  \n  <!-- Y-axis labels -->\n  <text x=\"35\" y=\"184\" font-size=\"12\" fill=\"#64748b\">0</text>\n  <text x=\"30\" y=\"144\" font-size=\"12\" fill=\"#64748b\">20</text>\n  <text x=\"30\" y=\"104\" font-size=\"12\" fill=\"#64748b\">40</text>\n  <text x=\"30\" y=\"64\" font-size=\"12\" fill=\"#64748b\">60</text>\n  \n  <!-- Bars: width 44, centers at 95, 165, 235, 305, 375 -->\n  <!-- Cat 1: 25 -> height 50 (y = 130) -->\n  <rect x=\"73\" y=\"130\" width=\"44\" height=\"50\" rx=\"4\" fill=\"#0ea5e9\" />\n  <text x=\"86\" y=\"122\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0369a1\">25</text>\n  <text x=\"91\" y=\"200\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#334155\">1</text>\n  \n  <!-- Cat 2: 45 -> height 90 (y = 90) -->\n  <rect x=\"143\" y=\"90\" width=\"44\" height=\"90\" rx=\"4\" fill=\"#0ea5e9\" />\n  <text x=\"156\" y=\"82\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0369a1\">45</text>\n  <text x=\"161\" y=\"200\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#334155\">2</text>\n  \n  <!-- Cat 3: 30 -> height 60 (y = 120) -->\n  <rect x=\"213\" y=\"120\" width=\"44\" height=\"60\" rx=\"4\" fill=\"#0ea5e9\" />\n  <text x=\"226\" y=\"112\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0369a1\">30</text>\n  <text x=\"231\" y=\"200\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#334155\">3</text>\n  \n  <!-- Cat 4: 65 -> height 130 (y = 50) -->\n  <rect x=\"283\" y=\"50\" width=\"44\" height=\"130\" rx=\"4\" fill=\"#0284c7\" />\n  <text x=\"296\" y=\"42\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#075985\">65</text>\n  <text x=\"301\" y=\"200\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#334155\">4</text>\n  \n  <!-- Cat 5: 40 -> height 80 (y = 100) -->\n  <rect x=\"353\" y=\"100\" width=\"44\" height=\"80\" rx=\"4\" fill=\"#0ea5e9\" />\n  <text x=\"366\" y=\"92\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0369a1\">40</text>\n  <text x=\"371\" y=\"200\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#334155\">5</text>\n  \n  <text x=\"210\" y=\"222\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#334155\">Category</text>\n</svg>"
  }
];
