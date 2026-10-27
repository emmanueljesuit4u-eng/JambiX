/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX MATHEMATICS QUESTION BANK
 * 100 TOUGH QUESTIONS ACROSS ALL TOPICS (QUESTIONS 1–100)
 * Indexed directly from official syllabus specifications.
 * Total questions: 100
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
];
