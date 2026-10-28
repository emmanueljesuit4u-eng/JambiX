/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX ECONOMICS QUESTION BANK
 * 200 TOUGH JAMB UTME-STYLE QUESTIONS (SET 1 & SET 3) ACROSS ALL TOPICS (QUESTIONS 1–100)
 * Indexed directly from official syllabus specifications.
 * Total questions: 200
 */

export interface JambixEconomicsItem {
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

export const JAMBIX_ECONOMICS_ITEMS: JambixEconomicsItem[] = [
  {
    id: "econ_tough_1",
    originalChapter: 1,
    chapterTitle: "Basic Economic Concepts & Methodology",
    topic: "Basic Concepts: Opportunity Cost & Scarcity",
    bookQuestionNum: 1,
    text: "A student has ₦5,000 and must choose between buying a textbook for ₦3,000 or attending a seminar for ₦2,000. If the student buys the textbook, what is the opportunity cost?",
    options: {
      A: "₦1,000",
      B: "₦2,000",
      C: "₦3,000",
      D: "₦5,000"
    },
    answer: "B",
    explanation: "Opportunity cost is the value of the next best alternative forgone. Here, it is the seminar worth ₦2,000.",
    page: 1,
    hasImage: false
  },
  {
    id: "econ_tough_2",
    originalChapter: 1,
    chapterTitle: "Basic Economic Concepts & Methodology",
    topic: "Production Possibility Curve (PPC)",
    bookQuestionNum: 2,
    text: "A production possibility curve is bowed outward from the origin. This indicates that",
    options: {
      A: "opportunity cost decreases as production increases",
      B: "opportunity cost remains constant",
      C: "opportunity cost increases as more resources are transferred to producing one good",
      D: "resources are unlimited"
    },
    answer: "C",
    explanation: "A bowed-out PPC reflects increasing opportunity cost because resources are not equally efficient in producing different goods.",
    page: 1,
    hasImage: false
  },
  {
    id: "econ_tough_3",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Theory of Demand: Shifts vs Movements",
    bookQuestionNum: 3,
    text: "Which of the following causes a movement along an existing demand curve for a normal good?",
    options: {
      A: "An increase in consumers' income",
      B: "A change in the price of a substitute",
      C: "A change in the price of the good itself",
      D: "A change in consumers' preferences"
    },
    answer: "C",
    explanation: "A change in the good's own price causes a movement along its demand curve, while other factors can shift the curve.",
    page: 1,
    hasImage: false
  },
  {
    id: "econ_tough_4",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Theory of Demand: Types of Goods",
    bookQuestionNum: 4,
    text: "If consumers' income rises and the demand for a product falls, the product is most likely",
    options: {
      A: "a normal good",
      B: "an inferior good",
      C: "a luxury good",
      D: "a complementary good"
    },
    answer: "B",
    explanation: "Demand for an inferior good tends to decrease when consumers' income increases, other things remaining constant.",
    page: 1,
    hasImage: false
  },
  {
    id: "econ_tough_5",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Elasticity of Demand: Price Elasticity",
    bookQuestionNum: 5,
    text: "The price of a product rises from ₦10 to ₦12, and quantity demanded falls from 100 units to 80 units. Using the original values to calculate percentage changes, what is the price elasticity of demand in absolute value?",
    options: {
      A: "0.5",
      B: "1.0",
      C: "1.5",
      D: "2.0"
    },
    answer: "B",
    explanation: "Percentage change in quantity = 20/100 × 100 = 20%. Percentage change in price = 2/10 × 100 = 20%. Elasticity = 20%/20% = 1.",
    page: 1,
    hasImage: false
  },
  {
    id: "econ_tough_6",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Elasticity of Demand: Income Elasticity",
    bookQuestionNum: 6,
    text: "If household income increases by 10% and demand for a product increases by 15%, the income elasticity of demand is",
    options: {
      A: "−1.5",
      B: "0.67",
      C: "1.5",
      D: "2.5"
    },
    answer: "C",
    explanation: "Income elasticity = percentage change in quantity demanded ÷ percentage change in income = 15/10 = 1.5.",
    page: 1,
    hasImage: false
  },
  {
    id: "econ_tough_7",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Elasticity of Demand: Cross Elasticity",
    bookQuestionNum: 7,
    text: "When the price of coffee rises by 10% and demand for tea rises by 8%, the cross elasticity of demand for tea with respect to coffee is",
    options: {
      A: "−0.8",
      B: "0.8",
      C: "1.25",
      D: "−1.25"
    },
    answer: "B",
    explanation: "Cross elasticity = 8%/10% = +0.8. The positive value indicates that tea and coffee are substitutes in this example.",
    page: 1,
    hasImage: false
  },
  {
    id: "econ_tough_8",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Theory of Supply: Price Elasticity of Supply",
    bookQuestionNum: 8,
    text: "The price of a good rises by 10%, while quantity supplied rises by 5%. The price elasticity of supply is",
    options: {
      A: "0.5",
      B: "1.0",
      C: "2.0",
      D: "5.0"
    },
    answer: "A",
    explanation: "Price elasticity of supply = 5%/10% = 0.5, indicating relatively inelastic supply.",
    page: 1,
    hasImage: false
  },
  {
    id: "econ_tough_9",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Market Equilibrium & Price Determination",
    bookQuestionNum: 9,
    text: "Given the demand function Qd = 100 − 2P and the supply function Qs = 20 + 2P, calculate the equilibrium price and quantity.",
    options: {
      A: "P = 10, Q = 80",
      B: "P = 20, Q = 60",
      C: "P = 30, Q = 40",
      D: "P = 40, Q = 20"
    },
    answer: "B",
    explanation: "At equilibrium, 100 − 2P = 20 + 2P. Hence, P = 20 and Q = 60.",
    page: 1,
    hasImage: false
  },
  {
    id: "econ_tough_10",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Price Legislation: Maximum Price (Price Ceiling)",
    bookQuestionNum: 10,
    text: "If the government fixes the price of a product below its equilibrium price, the likely result is",
    options: {
      A: "excess supply",
      B: "excess demand",
      C: "market equilibrium",
      D: "a permanent increase in supply"
    },
    answer: "B",
    explanation: "At a price below equilibrium, quantity demanded exceeds quantity supplied, creating a shortage.",
    page: 1,
    hasImage: false
  },
  {
    id: "econ_tough_11",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Theory of Supply: Determinants of Supply",
    bookQuestionNum: 11,
    text: "An increase in the cost of raw materials used to produce a commodity will most likely",
    options: {
      A: "shift its supply curve to the right",
      B: "shift its supply curve to the left",
      C: "increase supply at every price",
      D: "leave supply unchanged in all cases"
    },
    answer: "B",
    explanation: "Higher production costs reduce the quantity producers are willing and able to supply at each price.",
    page: 2,
    hasImage: false
  },
  {
    id: "econ_tough_12",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Price Legislation: Minimum Price (Price Floor)",
    bookQuestionNum: 12,
    text: "A legally enforced minimum price above equilibrium is most likely to create",
    options: {
      A: "a shortage",
      B: "a surplus",
      C: "excess demand",
      D: "an immediate fall in production costs"
    },
    answer: "B",
    explanation: "At a price above equilibrium, quantity supplied exceeds quantity demanded, other things being equal.",
    page: 2,
    hasImage: false
  },
  {
    id: "econ_tough_13",
    originalChapter: 3,
    chapterTitle: "Theory of Consumer Behaviour",
    topic: "Theory of Consumer Behaviour: Cardinal Utility",
    bookQuestionNum: 13,
    text: "The law of diminishing marginal utility states that",
    options: {
      A: "total utility must always fall as consumption increases",
      B: "marginal utility eventually decreases as more units of a good are consumed",
      C: "price always falls as utility rises",
      D: "consumers cannot obtain satisfaction from additional units"
    },
    answer: "B",
    explanation: "Under the usual assumptions, each additional unit consumed adds less satisfaction than the preceding unit after a point.",
    page: 2,
    hasImage: false
  },
  {
    id: "econ_tough_14",
    originalChapter: 3,
    chapterTitle: "Theory of Consumer Behaviour",
    topic: "Theory of Consumer Behaviour: Ordinal Utility & Indifference Curves",
    bookQuestionNum: 14,
    text: "An indifference curve normally slopes downward because",
    options: {
      A: "more of both goods always reduces satisfaction",
      B: "more of one good must be compensated by less of the other to maintain the same satisfaction",
      C: "prices of both goods must be equal",
      D: "consumers have unlimited income"
    },
    answer: "B",
    explanation: "Points on an indifference curve represent combinations that provide the same level of satisfaction.",
    page: 2,
    hasImage: false
  },
  {
    id: "econ_tough_15",
    originalChapter: 3,
    chapterTitle: "Theory of Consumer Behaviour",
    topic: "Theory of Consumer Behaviour: Equi-Marginal Principle",
    bookQuestionNum: 15,
    text: "A consumer purchases goods X and Y. The marginal utility of X is 12 utils, its price is ₦3, and the marginal utility of Y is 20 utils, its price is ₦5. Based on the marginal utility per naira rule, the consumer is",
    options: {
      A: "allocating spending optimally between the two goods",
      B: "spending too much on X",
      C: "spending too much on Y",
      D: "necessarily maximising total utility without any other information"
    },
    answer: "A",
    explanation: "MUx/Px = 12/3 = 4 and MUy/Py = 20/5 = 4. The marginal utilities per naira are equal, satisfying the standard utility-maximisation condition when the consumer's budget is exhausted and the assumptions of the model hold.",
    page: 2,
    hasImage: false
  },
  {
    id: "econ_tough_16",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Theory of Production: Factors of Production",
    bookQuestionNum: 16,
    text: "Which of the following correctly matches a factor of production with its reward?",
    options: {
      A: "Land — wages",
      B: "Labour — interest",
      C: "Capital — interest",
      D: "Entrepreneurship — rent"
    },
    answer: "C",
    explanation: "In the conventional classification, land earns rent, labour earns wages, capital earns interest, and entrepreneurship earns profit.",
    page: 2,
    hasImage: false
  },
  {
    id: "econ_tough_17",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Theory of Production: Division of Labour",
    bookQuestionNum: 17,
    text: "One major disadvantage of division of labour is that it may",
    options: {
      A: "increase workers' specialisation",
      B: "improve workers' speed",
      C: "cause boredom through repetitive tasks",
      D: "encourage the use of machinery"
    },
    answer: "C",
    explanation: "Repetitive specialised work can reduce job satisfaction and contribute to monotony.",
    page: 2,
    hasImage: false
  },
  {
    id: "econ_tough_18",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Theory of Production: Law of Variable Proportions",
    bookQuestionNum: 18,
    text: "A firm employs four workers and produces 12 units. After employing a fifth worker, output rises to 17 units. The marginal product of the fifth worker is",
    options: {
      A: "3 units",
      B: "4 units",
      C: "5 units",
      D: "17 units"
    },
    answer: "C",
    explanation: "Marginal product = change in total output = 17 − 12 = 5 units.",
    page: 2,
    hasImage: false
  },
  {
    id: "econ_tough_19",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Theory of Costs: Fixed and Variable Costs",
    bookQuestionNum: 19,
    text: "A firm's total cost is ₦200 when output is zero and ₦700 when output is 10 units. What are its total fixed cost and total variable cost at 10 units?",
    options: {
      A: "₦200 and ₦500",
      B: "₦500 and ₦200",
      C: "₦700 and ₦200",
      D: "₦0 and ₦700"
    },
    answer: "A",
    explanation: "At zero output, total cost equals fixed cost, so TFC = ₦200. TVC = TC − TFC = ₦700 − ₦200 = ₦500.",
    page: 2,
    hasImage: false
  },
  {
    id: "econ_tough_20",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Theory of Costs: Marginal Cost",
    bookQuestionNum: 20,
    text: "A firm's total cost rises from ₦500 to ₦620 as output increases from 20 units to 24 units. Calculate the marginal cost per additional unit over this interval.",
    options: {
      A: "₦20",
      B: "₦25",
      C: "₦30",
      D: "₦120"
    },
    answer: "C",
    explanation: "Marginal cost over the interval = change in total cost ÷ change in output = ₦120/4 = ₦30 per unit.",
    page: 2,
    hasImage: false
  },
  {
    id: "econ_tough_21",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Theory of Costs: Average Fixed Cost",
    bookQuestionNum: 21,
    text: "If a firm's total fixed cost is ₦600 and it produces 30 units, its average fixed cost is",
    options: {
      A: "₦10",
      B: "₦20",
      C: "₦30",
      D: "₦600"
    },
    answer: "B",
    explanation: "Average fixed cost = total fixed cost/output = 600/30 = ₦20.",
    page: 3,
    hasImage: false
  },
  {
    id: "econ_tough_22",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Theory of Revenue: Average Revenue",
    bookQuestionNum: 22,
    text: "A firm sells 12 units of a product and earns total revenue of ₦600. Its average revenue per unit is",
    options: {
      A: "₦12",
      B: "₦20",
      C: "₦50",
      D: "₦600"
    },
    answer: "C",
    explanation: "Average revenue = total revenue/quantity sold = 600/12 = ₦50.",
    page: 3,
    hasImage: false
  },
  {
    id: "econ_tough_23",
    originalChapter: 5,
    chapterTitle: "Market Structures & Pricing",
    topic: "Market Structures: Perfect Competition",
    bookQuestionNum: 23,
    text: "Under perfect competition, the demand curve facing an individual firm is horizontal because",
    options: {
      A: "the firm controls the entire market supply",
      B: "the firm is a price taker and can sell at the prevailing market price",
      C: "the government fixes every firm's output",
      D: "buyers have no alternatives"
    },
    answer: "B",
    explanation: "An individual perfectly competitive firm is too small to influence the market price.",
    page: 3,
    hasImage: false
  },
  {
    id: "econ_tough_24",
    originalChapter: 5,
    chapterTitle: "Market Structures & Pricing",
    topic: "Market Structures: Monopoly",
    bookQuestionNum: 24,
    text: "A monopolist faces a downward-sloping demand curve. Under the usual conditions, marginal revenue is",
    options: {
      A: "always greater than average revenue",
      B: "equal to average revenue at every output",
      C: "below average revenue for positive output",
      D: "always zero"
    },
    answer: "C",
    explanation: "To sell additional output, a monopolist generally must lower price, reducing revenue on earlier units as well.",
    page: 3,
    hasImage: false
  },
  {
    id: "econ_tough_25",
    originalChapter: 5,
    chapterTitle: "Market Structures & Pricing",
    topic: "Market Structures: Oligopoly",
    bookQuestionNum: 25,
    text: "The key feature distinguishing oligopoly from perfect competition is",
    options: {
      A: "the presence of only one buyer",
      B: "strategic interdependence among a few major firms",
      C: "an unlimited number of small firms",
      D: "the absence of advertising in all cases"
    },
    answer: "B",
    explanation: "Each major firm must consider how its decisions may affect competitors' responses.",
    page: 3,
    hasImage: false
  },
  {
    id: "econ_tough_26",
    originalChapter: 5,
    chapterTitle: "Market Structures & Pricing",
    topic: "Market Structures: Price Discrimination",
    bookQuestionNum: 26,
    text: "Price discrimination is most likely to be successful when a seller can",
    options: {
      A: "resell the product freely across all markets",
      B: "separate markets and prevent or limit resale between them",
      C: "face perfectly elastic demand in every market",
      D: "charge one price to every buyer"
    },
    answer: "B",
    explanation: "Market separation helps prevent buyers in a low-price market from reselling to buyers in a high-price market.",
    page: 3,
    hasImage: false
  },
  {
    id: "econ_tough_27",
    originalChapter: 5,
    chapterTitle: "Market Structures & Pricing",
    topic: "Market Structures: Break-Even Analysis",
    bookQuestionNum: 27,
    text: "A firm breaks even when",
    options: {
      A: "total revenue exceeds total cost",
      B: "total cost exceeds total revenue",
      C: "total revenue equals total cost",
      D: "marginal cost is always zero"
    },
    answer: "C",
    explanation: "At the break-even point, the firm makes zero economic profit under the accounting used.",
    page: 3,
    hasImage: false
  },
  {
    id: "econ_tough_28",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Theory of Production: Economies of Scale",
    bookQuestionNum: 28,
    text: "Economies of scale occur when",
    options: {
      A: "long-run average cost falls as output increases",
      B: "average cost rises at every level of output",
      C: "total production becomes impossible",
      D: "fixed cost becomes equal to zero"
    },
    answer: "A",
    explanation: "Economies of scale arise when expanding production reduces the average cost per unit over a range of output.",
    page: 3,
    hasImage: false
  },
  {
    id: "econ_tough_29",
    originalChapter: 6,
    chapterTitle: "Market Failure & Public Finance",
    topic: "Market Failure & Public Goods",
    bookQuestionNum: 29,
    text: "A public good is characterised by",
    options: {
      A: "rivalry and easy exclusion in consumption",
      B: "non-rivalry and non-excludability",
      C: "ownership exclusively by private firms",
      D: "guaranteed profitability"
    },
    answer: "B",
    explanation: "One person's consumption does not significantly reduce what is available to others, and excluding non-payers is difficult.",
    page: 3,
    hasImage: false
  },
  {
    id: "econ_tough_30",
    originalChapter: 6,
    chapterTitle: "Market Failure & Public Finance",
    topic: "Market Failure: Externalities",
    bookQuestionNum: 30,
    text: "A factory pollutes a river, imposing costs on nearby communities that are not reflected in the factory's production costs. This is an example of",
    options: {
      A: "a positive externality",
      B: "a negative externality",
      C: "a public subsidy",
      D: "perfect price discrimination"
    },
    answer: "B",
    explanation: "The factory imposes an external cost on third parties who are not fully compensated through the market transaction.",
    page: 3,
    hasImage: false
  },
  {
    id: "econ_tough_31",
    originalChapter: 6,
    chapterTitle: "Market Failure & Public Finance",
    topic: "Market Failure: Tragedy of the Commons",
    bookQuestionNum: 31,
    text: "Which situation best illustrates a common-resource problem?",
    options: {
      A: "A privately owned shirt sold in a shop",
      B: "An overfished lake where access is difficult to restrict",
      C: "A toll road with restricted access and no congestion",
      D: "A book owned by one person"
    },
    answer: "B",
    explanation: "Common resources can be depleted because individuals have incentives to exploit them while sharing the cost of depletion.",
    page: 4,
    hasImage: false
  },
  {
    id: "econ_tough_32",
    originalChapter: 7,
    chapterTitle: "National Income & Macroeconomic aggregates",
    topic: "National Income Accounting: Expenditure Approach",
    bookQuestionNum: 32,
    text: "An economy has consumption of ₦500 billion, investment of ₦150 billion, government expenditure of ₦200 billion, exports of ₦80 billion and imports of ₦100 billion. Calculate GDP using the expenditure approach.",
    options: {
      A: "₦730 billion",
      B: "₦810 billion",
      C: "₦830 billion",
      D: "₦1,030 billion"
    },
    answer: "C",
    explanation: "GDP = C + I + G + (X − M) = 500 + 150 + 200 + (80 − 100) = ₦830 billion.",
    page: 4,
    hasImage: false
  },
  {
    id: "econ_tough_33",
    originalChapter: 7,
    chapterTitle: "National Income & Macroeconomic aggregates",
    topic: "National Income Accounting: Value-Added Method",
    bookQuestionNum: 33,
    text: "The value-added method of measuring national output helps to prevent",
    options: {
      A: "depreciation",
      B: "double counting of intermediate goods",
      C: "the collection of taxes",
      D: "the payment of wages"
    },
    answer: "B",
    explanation: "It counts the additional value created at each stage instead of counting the full sale value of intermediate products repeatedly.",
    page: 4,
    hasImage: false
  },
  {
    id: "econ_tough_34",
    originalChapter: 7,
    chapterTitle: "National Income & Macroeconomic aggregates",
    topic: "National Income Accounting: GNI and Net Factor Income",
    bookQuestionNum: 34,
    text: "If GDP is ₦1,000 billion and net factor income from abroad is −₦50 billion, calculate gross national income using the traditional GDP-plus-net-factor-income relationship.",
    options: {
      A: "₦950 billion",
      B: "₦1,000 billion",
      C: "₦1,050 billion",
      D: "₦1,500 billion"
    },
    answer: "A",
    explanation: "GNI = GDP + net factor income from abroad = 1,000 − 50 = ₦950 billion.",
    page: 4,
    hasImage: false
  },
  {
    id: "econ_tough_35",
    originalChapter: 7,
    chapterTitle: "National Income & Macroeconomic aggregates",
    topic: "National Income Accounting: Real vs Nominal GDP",
    bookQuestionNum: 35,
    text: "Nominal GDP is ₦720 billion and the GDP deflator is 120, with the base-year index equal to 100. Calculate real GDP in base-year prices.",
    options: {
      A: "₦500 billion",
      B: "₦600 billion",
      C: "₦720 billion",
      D: "₦864 billion"
    },
    answer: "B",
    explanation: "Real GDP = nominal GDP ÷ (GDP deflator/100) = 720/1.2 = ₦600 billion.",
    page: 4,
    hasImage: false
  },
  {
    id: "econ_tough_36",
    originalChapter: 7,
    chapterTitle: "National Income & Macroeconomic aggregates",
    topic: "National Income: Per Capita Income",
    bookQuestionNum: 36,
    text: "A country's national income is ₦12 trillion and its population is 40 million. What is its per capita national income?",
    options: {
      A: "₦30,000",
      B: "₦300,000",
      C: "₦3,000,000",
      D: "₦30,000,000"
    },
    answer: "B",
    explanation: "Per capita income = ₦12,000,000,000,000 ÷ 40,000,000 = ₦300,000 per person.",
    page: 4,
    hasImage: false
  },
  {
    id: "econ_tough_37",
    originalChapter: 8,
    chapterTitle: "Money, Banking & Inflation",
    topic: "Inflation: Measuring Inflation Rate",
    bookQuestionNum: 37,
    text: "The consumer price index rises from 150 to 165 in one year. What is the inflation rate over that year?",
    options: {
      A: "5%",
      B: "10%",
      C: "15%",
      D: "20%"
    },
    answer: "B",
    explanation: "Inflation rate = (165 − 150)/150 × 100% = 10%.",
    page: 4,
    hasImage: false
  },
  {
    id: "econ_tough_38",
    originalChapter: 8,
    chapterTitle: "Money, Banking & Inflation",
    topic: "Inflation: Demand-Pull Inflation",
    bookQuestionNum: 38,
    text: "Which situation is the clearest example of demand-pull inflation?",
    options: {
      A: "Production costs rise because imported fuel becomes more expensive.",
      B: "Aggregate demand rises faster than the economy's ability to produce goods and services.",
      C: "A fall in consumer spending reduces pressure on prices.",
      D: "A technological improvement lowers production costs."
    },
    answer: "B",
    explanation: "Demand-pull inflation occurs when aggregate demand exceeds the economy's productive capacity at prevailing prices.",
    page: 4,
    hasImage: false
  },
  {
    id: "econ_tough_39",
    originalChapter: 8,
    chapterTitle: "Money, Banking & Inflation",
    topic: "Inflation: Cost-Push Inflation",
    bookQuestionNum: 39,
    text: "A sharp rise in wages and imported raw-material prices increases firms' production costs and causes the general price level to rise. This is most directly associated with",
    options: {
      A: "cost-push inflation",
      B: "demand-pull inflation only",
      C: "deflation",
      D: "disinflation caused by falling costs"
    },
    answer: "A",
    explanation: "Higher production costs can cause firms to raise prices or reduce supply, putting upward pressure on the general price level.",
    page: 4,
    hasImage: false
  },
  {
    id: "econ_tough_40",
    originalChapter: 8,
    chapterTitle: "Money, Banking & Inflation",
    topic: "Inflation: Deflation vs Disinflation",
    bookQuestionNum: 40,
    text: "Deflation refers to",
    options: {
      A: "a slower rate of increase in the general price level",
      B: "a sustained fall in the general price level",
      C: "a rise in the inflation rate",
      D: "an increase in the money supply in every case"
    },
    answer: "B",
    explanation: "Deflation means the overall price level falls, while disinflation means inflation continues but at a slower rate.",
    page: 4,
    hasImage: false
  },
  {
    id: "econ_tough_41",
    originalChapter: 9,
    chapterTitle: "Population, Labour & Unemployment",
    topic: "Labour & Unemployment: Measuring Unemployment",
    bookQuestionNum: 41,
    text: "If 5 million people are unemployed out of a labour force of 50 million, calculate the unemployment rate.",
    options: {
      A: "5%",
      B: "10%",
      C: "20%",
      D: "45%"
    },
    answer: "B",
    explanation: "Unemployment rate = unemployed persons ÷ labour force × 100% = 5/50 × 100% = 10%.",
    page: 5,
    hasImage: false
  },
  {
    id: "econ_tough_42",
    originalChapter: 9,
    chapterTitle: "Population, Labour & Unemployment",
    topic: "Labour & Unemployment: Types of Unemployment",
    bookQuestionNum: 42,
    text: "A worker loses a job because the industry has shifted to new technology and the worker's skills no longer match available vacancies. This is an example of",
    options: {
      A: "seasonal unemployment",
      B: "structural unemployment",
      C: "frictional unemployment only",
      D: "voluntary retirement"
    },
    answer: "B",
    explanation: "Structural unemployment arises from a mismatch between workers' skills or locations and the jobs available.",
    page: 5,
    hasImage: false
  },
  {
    id: "econ_tough_43",
    originalChapter: 9,
    chapterTitle: "Population, Labour & Unemployment",
    topic: "Labour & Unemployment: Underemployment",
    bookQuestionNum: 43,
    text: "A person works for only two hours a week despite being willing and available to work full-time. This may be classified as",
    options: {
      A: "underemployment",
      B: "full employment",
      C: "disguised inflation",
      D: "economic growth"
    },
    answer: "A",
    explanation: "Underemployment occurs when a person works fewer hours than desired or in work that does not adequately use their skills.",
    page: 5,
    hasImage: false
  },
  {
    id: "econ_tough_44",
    originalChapter: 7,
    chapterTitle: "National Income & Macroeconomic aggregates",
    topic: "Macroeconomic Theory: Keynesian Multiplier",
    bookQuestionNum: 44,
    text: "If the marginal propensity to consume is 0.75, what is the simple Keynesian expenditure multiplier?",
    options: {
      A: "1.33",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "D",
    explanation: "Multiplier = 1/(1 − MPC) = 1/(1 − 0.75) = 4, under the simple model's assumptions.",
    page: 5,
    hasImage: false
  },
  {
    id: "econ_tough_45",
    originalChapter: 7,
    chapterTitle: "National Income & Macroeconomic aggregates",
    topic: "Macroeconomic Theory: Keynesian Multiplier",
    bookQuestionNum: 45,
    text: "If the marginal propensity to save is 0.2, the simple Keynesian multiplier is",
    options: {
      A: "2",
      B: "4",
      C: "5",
      D: "10"
    },
    answer: "C",
    explanation: "In the simple model, the multiplier is 1/MPS = 1/0.2 = 5.",
    page: 5,
    hasImage: false
  },
  {
    id: "econ_tough_46",
    originalChapter: 8,
    chapterTitle: "Money, Banking & Inflation",
    topic: "Money & Banking: Functions of Money",
    bookQuestionNum: 46,
    text: "Which of the following is a primary function of money?",
    options: {
      A: "Eliminating scarcity",
      B: "Serving as a medium of exchange",
      C: "Ensuring that all goods are free",
      D: "Preventing all inflation"
    },
    answer: "B",
    explanation: "Money facilitates the exchange of goods and services by removing the need for a double coincidence of wants.",
    page: 5,
    hasImage: false
  },
  {
    id: "econ_tough_47",
    originalChapter: 8,
    chapterTitle: "Money, Banking & Inflation",
    topic: "Money & Banking: Credit Creation & Deposit Multiplier",
    bookQuestionNum: 47,
    text: "If the required cash reserve ratio is 20%, what is the simple deposit multiplier under the assumption of no cash leakage and full redepositing of loans?",
    options: {
      A: "2",
      B: "4",
      C: "5",
      D: "20"
    },
    answer: "C",
    explanation: "Simple deposit multiplier = 1/reserve ratio = 1/0.20 = 5.",
    page: 5,
    hasImage: false
  },
  {
    id: "econ_tough_48",
    originalChapter: 8,
    chapterTitle: "Money, Banking & Inflation",
    topic: "Money & Banking: Credit Creation",
    bookQuestionNum: 48,
    text: "A bank receives a new cash deposit of ₦1 million. If the required reserve ratio is 10%, what is the maximum total deposit expansion supported by this initial deposit under the simple multiplier model?",
    options: {
      A: "₦1 million",
      B: "₦5 million",
      C: "₦9 million",
      D: "₦10 million"
    },
    answer: "D",
    explanation: "The simple multiplier is 1/0.10 = 10. Maximum total deposits supported = ₦1 million × 10 = ₦10 million. The maximum additional deposit creation would be ₦9 million.",
    page: 5,
    hasImage: false
  },
  {
    id: "econ_tough_49",
    originalChapter: 10,
    chapterTitle: "Monetary & Fiscal Policy",
    topic: "Monetary Policy: Open Market Operations (OMO)",
    bookQuestionNum: 49,
    text: "When the central bank sells government securities in the open market, the immediate intended effect is generally to",
    options: {
      A: "increase bank reserves and expand money supply",
      B: "reduce bank reserves and restrain money supply",
      C: "eliminate all commercial banks",
      D: "increase public expenditure automatically"
    },
    answer: "B",
    explanation: "Buyers pay for the securities, withdrawing funds from the banking system and helping the central bank tighten monetary conditions.",
    page: 5,
    hasImage: false
  },
  {
    id: "econ_tough_50",
    originalChapter: 10,
    chapterTitle: "Monetary & Fiscal Policy",
    topic: "Monetary Policy: Policy Interest Rates",
    bookQuestionNum: 50,
    text: "A rise in the central bank's policy interest rate is generally intended to",
    options: {
      A: "encourage unlimited borrowing",
      B: "reduce borrowing and aggregate demand pressures",
      C: "make saving impossible",
      D: "guarantee that prices will never rise"
    },
    answer: "B",
    explanation: "Higher interest rates tend to increase borrowing costs and restrain consumption and investment, although the size of the effect varies.",
    page: 5,
    hasImage: false
  },
  {
    id: "econ_tough_51",
    originalChapter: 10,
    chapterTitle: "Monetary & Fiscal Policy",
    topic: "Monetary Policy: Expansionary vs Contractionary Tools",
    bookQuestionNum: 51,
    text: "Which monetary policy measure is most directly expansionary?",
    options: {
      A: "Increasing the policy interest rate",
      B: "Selling government securities",
      C: "Reducing the reserve requirement",
      D: "Raising reserve requirements and selling securities"
    },
    answer: "C",
    explanation: "A lower reserve requirement may allow banks to extend more credit, other conditions remaining constant.",
    page: 6,
    hasImage: false
  },
  {
    id: "econ_tough_52",
    originalChapter: 10,
    chapterTitle: "Monetary & Fiscal Policy",
    topic: "Fiscal Policy: Expansionary Fiscal Policy",
    bookQuestionNum: 52,
    text: "An expansionary fiscal policy commonly involves",
    options: {
      A: "reducing government expenditure and increasing taxes",
      B: "increasing government expenditure or reducing taxes",
      C: "reducing all transfer payments and increasing taxes",
      D: "eliminating public investment"
    },
    answer: "B",
    explanation: "Expansionary fiscal policy is intended to raise aggregate demand and economic activity.",
    page: 6,
    hasImage: false
  },
  {
    id: "econ_tough_53",
    originalChapter: 6,
    chapterTitle: "Market Failure & Public Finance",
    topic: "Public Finance: Taxation Systems",
    bookQuestionNum: 53,
    text: "Under a progressive income tax system,",
    options: {
      A: "everyone pays the same amount of tax",
      B: "the average tax rate rises as taxable income rises",
      C: "the tax rate falls as income rises in every case",
      D: "only companies pay tax"
    },
    answer: "B",
    explanation: "Progressive taxation takes a larger proportion of income from higher-income taxpayers.",
    page: 6,
    hasImage: false
  },
  {
    id: "econ_tough_54",
    originalChapter: 6,
    chapterTitle: "Market Failure & Public Finance",
    topic: "Public Finance: Direct vs Indirect Taxes",
    bookQuestionNum: 54,
    text: "Which of the following is an indirect tax?",
    options: {
      A: "Personal income tax",
      B: "Company income tax",
      C: "Value-added tax",
      D: "Tax on an individual's annual salary"
    },
    answer: "C",
    explanation: "VAT is imposed on taxable consumption and is generally collected through businesses along the supply chain.",
    page: 6,
    hasImage: false
  },
  {
    id: "econ_tough_55",
    originalChapter: 6,
    chapterTitle: "Market Failure & Public Finance",
    topic: "Public Finance: Government Budget & Deficit",
    bookQuestionNum: 55,
    text: "A government has total expenditure of ₦8 trillion and total revenue of ₦6.5 trillion in a year. Ignoring other accounting adjustments, its budget balance is a",
    options: {
      A: "surplus of ₦1.5 trillion",
      B: "deficit of ₦1.5 trillion",
      C: "surplus of ₦14.5 trillion",
      D: "balanced budget"
    },
    answer: "B",
    explanation: "Expenditure exceeds revenue by ₦8 trillion − ₦6.5 trillion = ₦1.5 trillion.",
    page: 6,
    hasImage: false
  },
  {
    id: "econ_tough_56",
    originalChapter: 6,
    chapterTitle: "Market Failure & Public Finance",
    topic: "Public Finance: Public Debt & Debt Servicing",
    bookQuestionNum: 56,
    text: "One major concern associated with a persistent rise in public debt is that it may",
    options: {
      A: "eliminate all future interest payments",
      B: "increase future debt-servicing obligations",
      C: "make government borrowing unnecessary",
      D: "guarantee higher productivity in every sector"
    },
    answer: "B",
    explanation: "Larger debts can lead to higher interest and repayment obligations, potentially limiting future budgetary choices.",
    page: 6,
    hasImage: false
  },
  {
    id: "econ_tough_57",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Trade: Balance of Payments (Current Account)",
    bookQuestionNum: 57,
    text: "Which item belongs in the current account of a country's balance of payments?",
    options: {
      A: "Exports and imports of goods and services",
      B: "Purchase of a factory by a foreign investor as a financial investment",
      C: "Changes in official reserve assets only",
      D: "The issue of domestic banknotes"
    },
    answer: "A",
    explanation: "The current account records trade in goods and services, primary income, and secondary income transfers.",
    page: 6,
    hasImage: false
  },
  {
    id: "econ_tough_58",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Trade: Balance of Trade",
    bookQuestionNum: 58,
    text: "A country exports goods worth ₦150 billion and imports goods worth ₦180 billion. Its visible trade balance is",
    options: {
      A: "a surplus of ₦30 billion",
      B: "a deficit of ₦30 billion",
      C: "a surplus of ₦330 billion",
      D: "balanced"
    },
    answer: "B",
    explanation: "Visible trade balance = exports − imports = 150 − 180 = −₦30 billion.",
    page: 6,
    hasImage: false
  },
  {
    id: "econ_tough_59",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Trade: Terms of Trade",
    bookQuestionNum: 59,
    text: "An export price index rises to 150 while an import price index is 120. Calculate the net barter terms of trade index.",
    options: {
      A: "80",
      B: "100",
      C: "125",
      D: "270"
    },
    answer: "C",
    explanation: "Terms of trade index = export price index/import price index × 100 = 150/120 × 100 = 125.",
    page: 6,
    hasImage: false
  },
  {
    id: "econ_tough_60",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Trade: Comparative Advantage",
    bookQuestionNum: 60,
    text: "Country A can produce either 10 units of cloth or 5 units of wine per worker per day. Country B can produce either 6 units of cloth or 6 units of wine per worker per day. Which country has a comparative advantage in wine?",
    options: {
      A: "Country A",
      B: "Country B",
      C: "Both countries equally",
      D: "Neither country"
    },
    answer: "B",
    explanation: "In A, one unit of wine costs 2 units of cloth. In B, one unit of wine costs 1 unit of cloth. B has the lower opportunity cost of wine.",
    page: 6,
    hasImage: false
  },
  {
    id: "econ_tough_61",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Trade: Trade Restrictions (Tariffs)",
    bookQuestionNum: 61,
    text: "A tariff on imported goods is most directly intended to",
    options: {
      A: "impose a tax on imports",
      B: "abolish customs procedures",
      C: "make imported goods completely tax-free",
      D: "guarantee that domestic producers face no costs"
    },
    answer: "A",
    explanation: "A tariff is a tax on imported goods and may raise government revenue or protect domestic producers.",
    page: 7,
    hasImage: false
  },
  {
    id: "econ_tough_62",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Finance: Foreign Exchange Systems",
    bookQuestionNum: 62,
    text: "Under a fixed exchange-rate system, an official reduction in the value of a country's currency against other currencies is called",
    options: {
      A: "appreciation",
      B: "devaluation",
      C: "revaluation",
      D: "disinflation"
    },
    answer: "B",
    explanation: "Devaluation is an official lowering of a currency's value under a fixed or managed exchange-rate arrangement.",
    page: 7,
    hasImage: false
  },
  {
    id: "econ_tough_63",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Finance: Demand for Foreign Exchange",
    bookQuestionNum: 63,
    text: "Demand for foreign currency is commonly generated when domestic residents wish to",
    options: {
      A: "purchase imports or invest abroad",
      B: "buy only domestically produced goods",
      C: "receive income exclusively in domestic currency",
      D: "reduce all international transactions to zero"
    },
    answer: "A",
    explanation: "Payments for foreign goods, services, and assets commonly require foreign currency.",
    page: 7,
    hasImage: false
  },
  {
    id: "econ_tough_64",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Finance: Correcting BOP Deficits",
    bookQuestionNum: 64,
    text: "Which measure may help correct a balance-of-payments deficit, although its effect depends on economic conditions?",
    options: {
      A: "Encouraging unlimited imports without financing",
      B: "Improving export competitiveness",
      C: "Eliminating all export production",
      D: "Reducing foreign-exchange earnings deliberately"
    },
    answer: "B",
    explanation: "More competitive exports can increase foreign-exchange earnings, helping improve the external balance.",
    page: 7,
    hasImage: false
  },
  {
    id: "econ_tough_65",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Trade: Quotas vs Tariffs",
    bookQuestionNum: 65,
    text: "An import quota restricts",
    options: {
      A: "the quantity or value of a good that may be imported",
      B: "the number of domestic consumers",
      C: "the amount of rainfall received",
      D: "the total number of local producers in every industry"
    },
    answer: "A",
    explanation: "A quota sets a limit on imports, unlike a tariff, which directly imposes a tax.",
    page: 7,
    hasImage: false
  },
  {
    id: "econ_tough_66",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Trade: Absolute Advantage",
    bookQuestionNum: 66,
    text: "Absolute advantage occurs when a country",
    options: {
      A: "produces a good at a lower opportunity cost than every other country",
      B: "produces more output with the same resources or the same output with fewer resources",
      C: "imports every good it consumes",
      D: "has no scarcity of resources"
    },
    answer: "B",
    explanation: "Absolute advantage refers to greater physical productivity or lower resource requirements, while comparative advantage concerns opportunity cost.",
    page: 7,
    hasImage: false
  },
  {
    id: "econ_tough_67",
    originalChapter: 11,
    chapterTitle: "International Trade & Finance",
    topic: "International Trade: Gains from Trade",
    bookQuestionNum: 67,
    text: "Specialisation and international trade can increase total output because countries can",
    options: {
      A: "eliminate every opportunity cost",
      B: "specialise according to comparative advantage and exchange output",
      C: "produce every product with equal efficiency",
      D: "avoid using scarce resources"
    },
    answer: "B",
    explanation: "Specialisation can allow each country to concentrate on production with a lower opportunity cost.",
    page: 7,
    hasImage: false
  },
  {
    id: "econ_tough_68",
    originalChapter: 12,
    chapterTitle: "Economic Integration & Development",
    topic: "Economic Integration: Regional Organizations (ECOWAS)",
    bookQuestionNum: 68,
    text: "The primary economic objective of ECOWAS is to promote",
    options: {
      A: "economic cooperation and integration among West African states",
      B: "the abolition of all international trade",
      C: "exclusive trade between European states",
      D: "the replacement of all national governments"
    },
    answer: "A",
    explanation: "ECOWAS was established to encourage regional cooperation, integration, and development in West Africa.",
    page: 7,
    hasImage: false
  },
  {
    id: "econ_tough_69",
    originalChapter: 12,
    chapterTitle: "Economic Integration & Development",
    topic: "Economic Integration: Stages of Integration",
    bookQuestionNum: 69,
    text: "A customs union differs from a free-trade area because a customs union generally has",
    options: {
      A: "no trade between members",
      B: "a common external tariff on imports from non-members",
      C: "a separate external tariff for every member with no coordination",
      D: "a ban on exports between members"
    },
    answer: "B",
    explanation: "A customs union removes internal tariffs among members and adopts a common external trade policy toward non-members.",
    page: 7,
    hasImage: false
  },
  {
    id: "econ_tough_70",
    originalChapter: 12,
    chapterTitle: "Economic Integration & Development",
    topic: "Economic Development: Growth vs Development",
    bookQuestionNum: 70,
    text: "Economic growth differs from economic development because economic development generally includes",
    options: {
      A: "only a rise in the general price level",
      B: "improvements in living standards and structural or social conditions, as well as economic progress",
      C: "only an increase in the physical size of the population",
      D: "a fall in all forms of production"
    },
    answer: "B",
    explanation: "Growth usually refers to increased real output, while development is broader and includes qualitative improvements.",
    page: 7,
    hasImage: false
  },
  {
    id: "econ_tough_71",
    originalChapter: 12,
    chapterTitle: "Economic Integration & Development",
    topic: "Economic Development: Human Development Index (HDI)",
    bookQuestionNum: 71,
    text: "Which combination is used in the United Nations Development Programme's Human Development Index?",
    options: {
      A: "Inflation, exports, and government debt",
      B: "Health, education, and standard of living",
      C: "Rainfall, soil pH, and industrial output",
      D: "Birth rate, exchange rate, and budget deficit only"
    },
    answer: "B",
    explanation: "The HDI combines indicators of life expectancy, education, and gross national income per capita.",
    page: 8,
    hasImage: false
  },
  {
    id: "econ_tough_72",
    originalChapter: 7,
    chapterTitle: "National Income & Macroeconomic aggregates",
    topic: "National Income: Real GDP Adjustment",
    bookQuestionNum: 72,
    text: "Why is real GDP generally more useful than nominal GDP when comparing output over time?",
    options: {
      A: "Real GDP adjusts for changes in prices.",
      B: "Real GDP includes only imports.",
      C: "Nominal GDP excludes all services.",
      D: "Real GDP is always higher than nominal GDP."
    },
    answer: "A",
    explanation: "Real GDP uses constant prices to separate changes in production from changes caused by inflation.",
    page: 8,
    hasImage: false
  },
  {
    id: "econ_tough_73",
    originalChapter: 7,
    chapterTitle: "National Income & Macroeconomic aggregates",
    topic: "Circular Flow of Income: Injections and Leakages",
    bookQuestionNum: 73,
    text: "Which of the following is a leakage from the circular flow of income?",
    options: {
      A: "Investment",
      B: "Government expenditure",
      C: "Exports",
      D: "Saving"
    },
    answer: "D",
    explanation: "Saving, taxation, and imports are leakages because they reduce spending flowing directly back to domestic firms.",
    page: 8,
    hasImage: false
  },
  {
    id: "econ_tough_74",
    originalChapter: 7,
    chapterTitle: "National Income & Macroeconomic aggregates",
    topic: "Circular Flow of Income: Injections",
    bookQuestionNum: 74,
    text: "Which of the following is an injection into the circular flow of income?",
    options: {
      A: "Saving",
      B: "Taxation",
      C: "Imports",
      D: "Investment"
    },
    answer: "D",
    explanation: "Investment expenditure introduces spending into the circular flow, alongside government expenditure and exports.",
    page: 8,
    hasImage: false
  },
  {
    id: "econ_tough_75",
    originalChapter: 8,
    chapterTitle: "Money, Banking & Inflation",
    topic: "Inflation: Concept of Disinflation",
    bookQuestionNum: 75,
    text: "If the general price level rises by 8% in one year and by 5% in the next year, the economy has experienced",
    options: {
      A: "deflation in the second year",
      B: "disinflation in the second year",
      C: "an 8% fall in the price level",
      D: "zero inflation in the second year"
    },
    answer: "B",
    explanation: "Prices continue to rise, but the inflation rate has fallen from 8% to 5%.",
    page: 8,
    hasImage: false
  },
  {
    id: "econ_tough_76",
    originalChapter: 9,
    chapterTitle: "Population, Labour & Unemployment",
    topic: "Population: Rate of Natural Increase",
    bookQuestionNum: 76,
    text: "A country records a birth rate of 35 per 1,000 people and a death rate of 12 per 1,000 people. Ignoring migration, its natural population increase rate is",
    options: {
      A: "1.2%",
      B: "2.3%",
      C: "3.5%",
      D: "4.7%"
    },
    answer: "B",
    explanation: "Natural increase = 35 − 12 = 23 per 1,000, equivalent to 23/1,000 × 100% = 2.3%.",
    page: 8,
    hasImage: false
  },
  {
    id: "econ_tough_77",
    originalChapter: 9,
    chapterTitle: "Population, Labour & Unemployment",
    topic: "Population: Demographic Transition Model",
    bookQuestionNum: 77,
    text: "In the early stage of the demographic transition model, a population commonly experiences",
    options: {
      A: "low birth rates and low death rates from the beginning",
      B: "high birth rates and high death rates",
      C: "zero birth rates",
      D: "a permanently declining population in every case"
    },
    answer: "B",
    explanation: "In the traditional first stage, both birth and death rates are high, so population growth is generally slow and fluctuating.",
    page: 8,
    hasImage: false
  },
  {
    id: "econ_tough_78",
    originalChapter: 9,
    chapterTitle: "Population, Labour & Unemployment",
    topic: "Population: Dependency Ratio",
    bookQuestionNum: 78,
    text: "A country has 20 million people aged below the working-age range, 5 million older dependants, and 50 million people of working age. Using the conventional dependency-ratio formula, calculate the dependency ratio.",
    options: {
      A: "20%",
      B: "40%",
      C: "50%",
      D: "75%"
    },
    answer: "C",
    explanation: "Dependency ratio = (20 + 5)/50 × 100% = 50%.",
    page: 8,
    hasImage: false
  },
  {
    id: "econ_tough_79",
    originalChapter: 9,
    chapterTitle: "Population, Labour & Unemployment",
    topic: "Population: Malthusian Theory",
    bookQuestionNum: 79,
    text: "The main concern raised by the traditional Malthusian population theory is that",
    options: {
      A: "food production must always grow faster than population",
      B: "population can grow faster than food production under the theory's assumptions",
      C: "population size never affects resource availability",
      D: "population growth automatically eliminates poverty"
    },
    answer: "B",
    explanation: "Malthus argued that population could grow geometrically while food production grew arithmetically, creating pressure on resources unless checked.",
    page: 8,
    hasImage: false
  },
  {
    id: "econ_tough_80",
    originalChapter: 9,
    chapterTitle: "Population, Labour & Unemployment",
    topic: "Labour & Productivity: Labour Productivity",
    bookQuestionNum: 80,
    text: "A factory employs 20 workers and produces 400 units per day. What is average labour productivity?",
    options: {
      A: "10 units per worker",
      B: "20 units per worker",
      C: "40 units per worker",
      D: "400 units per worker"
    },
    answer: "B",
    explanation: "Average labour productivity = total output/number of workers = 400/20 = 20 units per worker per day.",
    page: 8,
    hasImage: false
  },
  {
    id: "econ_tough_81",
    originalChapter: 9,
    chapterTitle: "Population, Labour & Unemployment",
    topic: "Labour Market: Wage Differentials",
    bookQuestionNum: 81,
    text: "Wage differences between two occupations may result from",
    options: {
      A: "differences in skill requirements, training, risks, and labour demand",
      B: "the fact that all jobs have identical productivity",
      C: "the absence of education in every occupation",
      D: "wages being unrelated to labour markets"
    },
    answer: "A",
    explanation: "Wages can differ because of differences in productivity, qualifications, working conditions, supply of workers, and demand for labour.",
    page: 9,
    hasImage: false
  },
  {
    id: "econ_tough_82",
    originalChapter: 9,
    chapterTitle: "Population, Labour & Unemployment",
    topic: "Labour Market: Trade Unions",
    bookQuestionNum: 82,
    text: "A major function of a trade union is to",
    options: {
      A: "negotiate with employers over workers' wages and conditions",
      B: "determine every consumer's personal budget",
      C: "replace all commercial banks",
      D: "prevent workers from receiving any wages"
    },
    answer: "A",
    explanation: "Trade unions represent workers in collective bargaining over pay, hours, benefits, and workplace conditions.",
    page: 9,
    hasImage: false
  },
  {
    id: "econ_tough_83",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Factors of Production: Supply of Land",
    bookQuestionNum: 83,
    text: "The supply of land is described as perfectly inelastic in the conventional economic sense because",
    options: {
      A: "its total physical quantity cannot be increased by producing more of it",
      B: "the amount of land available rises automatically when price rises",
      C: "land has no alternative uses",
      D: "all land is equally fertile"
    },
    answer: "A",
    explanation: "The total quantity of land is fixed, although the amount offered for particular uses can change.",
    page: 9,
    hasImage: false
  },
  {
    id: "econ_tough_84",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Theory of Production: Law of Diminishing Returns",
    bookQuestionNum: 84,
    text: "The law of diminishing returns applies when",
    options: {
      A: "all factors of production are variable in the long run",
      B: "increasing quantities of a variable factor are added to fixed factors, eventually causing marginal product to fall",
      C: "production is impossible",
      D: "output must fall immediately after the first worker is employed"
    },
    answer: "B",
    explanation: "With at least one factor fixed, adding more of a variable factor will eventually reduce its marginal contribution under the law's assumptions.",
    page: 9,
    hasImage: false
  },
  {
    id: "econ_tough_85",
    originalChapter: 13,
    chapterTitle: "Agriculture & Industrialization",
    topic: "Agriculture: Subsistence Farming",
    bookQuestionNum: 85,
    text: "One important characteristic of subsistence farming is that production is mainly intended to",
    options: {
      A: "supply the farmer's household needs",
      B: "export all output to foreign markets",
      C: "supply only multinational factories",
      D: "eliminate the need for labour"
    },
    answer: "A",
    explanation: "Subsistence farming focuses largely on the needs of the farmer and household, although some surplus may be sold.",
    page: 9,
    hasImage: false
  },
  {
    id: "econ_tough_86",
    originalChapter: 13,
    chapterTitle: "Agriculture & Industrialization",
    topic: "Industrial Location: Location of Industries",
    bookQuestionNum: 86,
    text: "An industry that uses bulky raw materials that lose substantial weight during processing is often encouraged to locate near",
    options: {
      A: "its source of raw materials",
      B: "the most distant consumer market in every case",
      C: "a region with no transport facilities",
      D: "a location with no access to labour"
    },
    answer: "A",
    explanation: "Locating near the raw materials can reduce the cost of transporting bulky inputs that lose weight during processing.",
    page: 9,
    hasImage: false
  },
  {
    id: "econ_tough_87",
    originalChapter: 14,
    chapterTitle: "Business Organisations & Public Enterprises",
    topic: "Business Organisations & Privatisation",
    bookQuestionNum: 87,
    text: "Privatisation refers to the",
    options: {
      A: "transfer of ownership or control of a state-owned enterprise to private owners",
      B: "transfer of every private business to the government",
      C: "abolition of all market transactions",
      D: "introduction of compulsory military service"
    },
    answer: "A",
    explanation: "Privatisation reduces government ownership or control by transferring the enterprise, or part of it, to private ownership.",
    page: 9,
    hasImage: false
  },
  {
    id: "econ_tough_88",
    originalChapter: 14,
    chapterTitle: "Business Organisations & Public Enterprises",
    topic: "Public Enterprises: Nationalisation",
    bookQuestionNum: 88,
    text: "Nationalisation occurs when",
    options: {
      A: "a government takes ownership or control of a privately owned enterprise",
      B: "a private firm buys a government ministry",
      C: "a firm sells goods abroad",
      D: "a household opens a savings account"
    },
    answer: "A",
    explanation: "Nationalisation transfers an enterprise from private to public ownership or control.",
    page: 9,
    hasImage: false
  },
  {
    id: "econ_tough_89",
    originalChapter: 13,
    chapterTitle: "Agriculture & Industrialization",
    topic: "Industrial Location: Localisation of Industries",
    bookQuestionNum: 89,
    text: "The concentration of many firms in the same industry within a particular geographical area is called",
    options: {
      A: "industrial localisation",
      B: "inflation",
      C: "devaluation",
      D: "nationalisation"
    },
    answer: "A",
    explanation: "Localisation occurs when firms in the same or related industries cluster in one area, often to benefit from shared skills, suppliers, and services.",
    page: 9,
    hasImage: false
  },
  {
    id: "econ_tough_90",
    originalChapter: 4,
    chapterTitle: "Theory of Production & Costs",
    topic: "Theory of Costs: External Economies of Scale",
    bookQuestionNum: 90,
    text: "External economies of scale occur when",
    options: {
      A: "only one firm expands and all other firms' costs must rise",
      B: "firms benefit from advantages created by the growth of the industry or surrounding area",
      C: "a firm reduces output to zero",
      D: "government revenue always falls"
    },
    answer: "B",
    explanation: "Examples include a larger skilled labour pool, specialised suppliers, and improved infrastructure serving firms in the industry.",
    page: 9,
    hasImage: false
  },
  {
    id: "econ_tough_91",
    originalChapter: 14,
    chapterTitle: "Business Organisations & Public Enterprises",
    topic: "Public Enterprises: Public Corporations",
    bookQuestionNum: 91,
    text: "A public corporation is an enterprise that is generally",
    options: {
      A: "owned or controlled by the state and established to provide goods or services",
      B: "owned exclusively by foreign consumers",
      C: "unable to produce any service",
      D: "required to operate without any legal framework"
    },
    answer: "A",
    explanation: "Public corporations are established or owned by government to perform commercial or public-service functions.",
    page: 10,
    hasImage: false
  },
  {
    id: "econ_tough_92",
    originalChapter: 1,
    chapterTitle: "Basic Economic Concepts & Methodology",
    topic: "Economic Systems: Command Economy",
    bookQuestionNum: 92,
    text: "In a command economy, major decisions about production and resource allocation are made primarily by",
    options: {
      A: "individual consumers through unrestricted market prices only",
      B: "the central planning authority",
      C: "foreign tourists",
      D: "trade unions alone"
    },
    answer: "B",
    explanation: "A command economy relies heavily on government or central planning to determine what is produced and how resources are allocated.",
    page: 10,
    hasImage: false
  },
  {
    id: "econ_tough_93",
    originalChapter: 1,
    chapterTitle: "Basic Economic Concepts & Methodology",
    topic: "Economic Systems: Capitalist Economy",
    bookQuestionNum: 93,
    text: "Which feature is most characteristic of a capitalist economic system?",
    options: {
      A: "Private ownership of major productive resources",
      B: "Complete absence of markets",
      C: "Government ownership of all resources by definition",
      D: "No role for profit in business decisions"
    },
    answer: "A",
    explanation: "Capitalist systems rely substantially on private property, markets, and profit incentives, although the degree of government involvement varies.",
    page: 10,
    hasImage: false
  },
  {
    id: "econ_tough_94",
    originalChapter: 1,
    chapterTitle: "Basic Economic Concepts & Methodology",
    topic: "Economic Systems: Mixed Economy",
    bookQuestionNum: 94,
    text: "A mixed economy combines",
    options: {
      A: "only subsistence farming and barter",
      B: "private economic activity with government participation and regulation",
      C: "no markets with no government",
      D: "only foreign ownership of all resources"
    },
    answer: "B",
    explanation: "A mixed economy combines market-based decisions with public ownership, government provision, regulation, or redistribution.",
    page: 10,
    hasImage: false
  },
  {
    id: "econ_tough_95",
    originalChapter: 1,
    chapterTitle: "Basic Economic Concepts & Methodology",
    topic: "Basic Concepts: Scarcity & Choice",
    bookQuestionNum: 95,
    text: "The basic economic problem arises because",
    options: {
      A: "wants are limited while resources are unlimited",
      B: "resources are scarce relative to human wants",
      C: "all goods are free",
      D: "production never requires choices"
    },
    answer: "B",
    explanation: "Scarcity forces individuals and societies to make choices about how limited resources are allocated.",
    page: 10,
    hasImage: false
  },
  {
    id: "econ_tough_96",
    originalChapter: 2,
    chapterTitle: "Theory of Demand and Supply",
    topic: "Price System: Functions of the Price Mechanism",
    bookQuestionNum: 96,
    text: "A rationing function of price is demonstrated when",
    options: {
      A: "a higher market price reduces demand for a scarce good",
      B: "every buyer receives unlimited quantities at no cost",
      C: "prices have no effect on consumer decisions",
      D: "all producers are required to supply goods without payment"
    },
    answer: "A",
    explanation: "Price can allocate limited goods by influencing the quantity consumers are willing and able to purchase.",
    page: 10,
    hasImage: false
  },
  {
    id: "econ_tough_97",
    originalChapter: 6,
    chapterTitle: "Market Failure & Public Finance",
    topic: "Market Failure: Asymmetric Information",
    bookQuestionNum: 97,
    text: "Which situation is most likely to create a problem of asymmetric information?",
    options: {
      A: "Both buyer and seller have exactly the same relevant information.",
      B: "A seller knows much more about a used car's hidden defects than the buyer.",
      C: "All goods have publicly verified quality.",
      D: "Every transaction is performed with complete information."
    },
    answer: "B",
    explanation: "Asymmetric information occurs when one party to a transaction has more or better information than the other.",
    page: 10,
    hasImage: false
  },
  {
    id: "econ_tough_98",
    originalChapter: 13,
    chapterTitle: "Agriculture & Industrialization",
    topic: "Agriculture: Seasonality in Agriculture",
    bookQuestionNum: 98,
    text: "A major reason agricultural production can be seasonal is that it often depends on",
    options: {
      A: "planting seasons, rainfall, and crop growth cycles",
      B: "the number of banks in a city only",
      C: "daily changes in foreign exchange rates alone",
      D: "the complete absence of weather conditions"
    },
    answer: "A",
    explanation: "Many agricultural activities depend on seasonal environmental conditions and biological growth periods.",
    page: 10,
    hasImage: false
  },
  {
    id: "econ_tough_99",
    originalChapter: 6,
    chapterTitle: "Market Failure & Public Finance",
    topic: "Public Finance: Balanced Budget",
    bookQuestionNum: 99,
    text: "A balanced government budget occurs when",
    options: {
      A: "government expenditure exceeds revenue",
      B: "government revenue exceeds expenditure",
      C: "government revenue equals expenditure",
      D: "government borrows more than it spends"
    },
    answer: "C",
    explanation: "A balanced budget has equal revenue and expenditure over the period being considered.",
    page: 10,
    hasImage: false
  },
  {
    id: "econ_tough_100",
    originalChapter: 8,
    chapterTitle: "Money, Banking & Inflation",
    topic: "Inflation: Purchasing Power & Real Wages",
    bookQuestionNum: 100,
    text: "A consumer price index rises from 200 to 230. If a worker's nominal salary rises by 10% over the same period, which statement is correct?",
    options: {
      A: "The worker's purchasing power definitely rises by 10%.",
      B: "The price level falls by 15%.",
      C: "The worker's real purchasing power falls.",
      D: "The worker's real purchasing power remains unchanged."
    },
    answer: "C",
    explanation: "Prices rise by (230 − 200)/200 × 100% = 15%, faster than the 10% salary increase. The real salary index changes by 1.10/1.15 − 1 ≈ −4.35%, so purchasing power falls by approximately 4.35%.",
    page: 10,
    hasImage: false
  },
  {
    "id": "econ_set3_1",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Market Equilibrium & Price Determination",
    "bookQuestionNum": 1,
    "text": "The demand and supply functions of a commodity are Qd = 300 − 5P and Qs = 30 + 4P. Calculate the equilibrium price and quantity.",
    "options": {
      "A": "P = ₦20, Q = 130",
      "B": "P = ₦30, Q = 150",
      "C": "P = ₦40, Q = 170",
      "D": "P = ₦50, Q = 200"
    },
    "answer": "B",
    "explanation": "Equating demand and supply gives 300 − 5P = 30 + 4P. Therefore, 270 = 9P, so P = 30. Substitution gives Q = 150.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "econ_set3_2",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Market Equilibrium & Price Determination",
    "bookQuestionNum": 2,
    "text": "The demand function for a product is Qd = 200 − 3P, while its supply function is Qs = 20 + 2P. Find the equilibrium price and quantity.",
    "options": {
      "A": "P = ₦30, Q = 90",
      "B": "P = ₦36, Q = 92",
      "C": "P = ₦40, Q = 80",
      "D": "P = ₦45, Q = 65"
    },
    "answer": "B",
    "explanation": "200 − 3P = 20 + 2P, so 180 = 5P and P = 36. Quantity = 200 − 3(36) = 92.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "econ_set3_3",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Price Legislation: Price Ceiling & Shortages",
    "bookQuestionNum": 3,
    "text": "The demand function is Qd = 180 − 2P and the supply function is Qs = 20 + P. If the market price is fixed at ₦20, calculate the shortage.",
    "options": {
      "A": "60 units",
      "B": "80 units",
      "C": "100 units",
      "D": "120 units"
    },
    "answer": "C",
    "explanation": "At P = 20, Qd = 140 and Qs = 40. Shortage = 140 − 40 = 100 units.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "econ_set3_4",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Price Legislation: Price Floor & Surpluses",
    "bookQuestionNum": 4,
    "text": "The demand function is Qd = 160 − 2P and the supply function is Qs = 10 + 2P. If the government fixes the price at ₦50, what surplus will occur?",
    "options": {
      "A": "30 units",
      "B": "40 units",
      "C": "50 units",
      "D": "60 units"
    },
    "answer": "C",
    "explanation": "At P = 50, Qd = 60 and Qs = 110. Surplus = 110 − 60 = 50 units.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "econ_set3_5",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Elasticity of Demand: Midpoint Price Elasticity",
    "bookQuestionNum": 5,
    "text": "The price of a product rises from ₦10 to ₦14, while quantity demanded falls from 120 to 80 units. Using the midpoint method, calculate the absolute price elasticity of demand.",
    "options": {
      "A": "0.80",
      "B": "1.00",
      "C": "1.20",
      "D": "1.50"
    },
    "answer": "C",
    "explanation": "Percentage change in quantity = 40/100 × 100 = 40%. Percentage change in price = 4/12 × 100 = 33.33%. Elasticity = 40/33.33 ≈ 1.20.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "econ_set3_6",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Theory of Revenue: Total Revenue & Elasticity",
    "bookQuestionNum": 6,
    "text": "A trader sells 100 units at ₦40 each. After reducing the price to ₦32, sales rise to 150 units. Calculate the change in total revenue.",
    "options": {
      "A": "₦400 decrease",
      "B": "₦400 increase",
      "C": "₦800 increase",
      "D": "₦1,200 increase"
    },
    "answer": "C",
    "explanation": "Initial revenue = 100 × 40 = ₦4,000. New revenue = 150 × 32 = ₦4,800. The increase is ₦800.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "econ_set3_7",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Elasticity of Demand: Income Elasticity",
    "bookQuestionNum": 7,
    "text": "Household income rises from ₦100,000 to ₦120,000, while demand for a product rises from 50 units to 60 units. Using the original values, calculate income elasticity of demand.",
    "options": {
      "A": "0.5",
      "B": "1.0",
      "C": "1.5",
      "D": "2.0"
    },
    "answer": "B",
    "explanation": "Quantity demanded rises by 20%, and income rises by 20%. Income elasticity = 20%/20% = 1.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "econ_set3_8",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Elasticity of Demand: Cross Elasticity",
    "bookQuestionNum": 8,
    "text": "The price of commodity X rises from ₦20 to ₦25, while demand for commodity Y increases from 80 to 100 units. Using the original values, calculate cross elasticity of demand for Y with respect to X.",
    "options": {
      "A": "−1.0",
      "B": "−0.5",
      "C": "0.5",
      "D": "1.0"
    },
    "answer": "D",
    "explanation": "Demand for Y rises by 25%, and the price of X rises by 25%. Cross elasticity = 25/25 = 1.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "econ_set3_9",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Theory of Supply: Price Elasticity of Supply",
    "bookQuestionNum": 9,
    "text": "The price of a commodity rises from ₦10 to ₦12, while quantity supplied increases from 50 to 70 units. Using the original values, calculate price elasticity of supply.",
    "options": {
      "A": "0.5",
      "B": "1.0",
      "C": "2.0",
      "D": "3.0"
    },
    "answer": "C",
    "explanation": "Quantity supplied rises by 40%, while price rises by 20%. Elasticity of supply = 40/20 = 2.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "econ_set3_10",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Elasticity of Demand: Point Price Elasticity",
    "bookQuestionNum": 10,
    "text": "The demand function for a commodity is Q = 150 − 3P. Calculate the absolute price elasticity of demand when P = ₦30.",
    "options": {
      "A": "0.5",
      "B": "1.0",
      "C": "1.5",
      "D": "3.0"
    },
    "answer": "C",
    "explanation": "At P = 30, Q = 60. Point elasticity = |(dQ/dP)(P/Q)| = |−3 × 30/60| = 1.5.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "econ_set3_11",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Price Determination: Impact of Taxes",
    "bookQuestionNum": 11,
    "text": "The demand function is Qd = 200 − 2Pb and the supply function is Qs = 20 + 2Ps. The government imposes a tax of ₦10 per unit, so Pb = Ps + 10. Find the equilibrium quantity after the tax.",
    "options": {
      "A": "80 units",
      "B": "90 units",
      "C": "100 units",
      "D": "110 units"
    },
    "answer": "C",
    "explanation": "200 − 2(Ps + 10) = 20 + 2Ps. Therefore, 160 = 4Ps, so Ps = ₦40 and Pb = ₦50. Quantity = 20 + 2(40) = 100 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "econ_set3_12",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Price Determination: Impact of Subsidies",
    "bookQuestionNum": 12,
    "text": "The government pays a subsidy of ₦10 per unit to producers. Demand is Qd = 150 − 2Pb and supply is Qs = 30 + 2Ps, where Ps = Pb + 10. Calculate the government's total subsidy expenditure at equilibrium.",
    "options": {
      "A": "₦500",
      "B": "₦800",
      "C": "₦1,000",
      "D": "₦1,500"
    },
    "answer": "C",
    "explanation": "150 − 2Pb = 30 + 2(Pb + 10), giving Pb = ₦25 and Ps = ₦35. Quantity = 100 units. Subsidy expenditure = 100 × ₦10 = ₦1,000.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "econ_set3_13",
    "originalChapter": 3,
    "chapterTitle": "Theory of Consumer Behaviour",
    "topic": "Theory of Consumer Behaviour: Consumer Surplus",
    "bookQuestionNum": 13,
    "text": "The inverse demand function for a product is P = 100 − Q. If the market price is ₦40, calculate consumer surplus.",
    "options": {
      "A": "₦900",
      "B": "₦1,200",
      "C": "₦1,800",
      "D": "₦3,000"
    },
    "answer": "C",
    "explanation": "At P = 40, Q = 60. Consumer surplus = ½ × (100 − 40) × 60 = ₦1,800.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "econ_set3_14",
    "originalChapter": 2,
    "chapterTitle": "Theory of Demand and Supply",
    "topic": "Theory of Supply: Producer Surplus",
    "bookQuestionNum": 14,
    "text": "The inverse supply function for a commodity is P = 10 + Q. If the market price is ₦50, calculate producer surplus.",
    "options": {
      "A": "₦400",
      "B": "₦600",
      "C": "₦800",
      "D": "₦1,200"
    },
    "answer": "C",
    "explanation": "At P = 50, Q = 40. Producer surplus = ½ × (50 − 10) × 40 = ₦800.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "econ_set3_15",
    "originalChapter": 3,
    "chapterTitle": "Theory of Consumer Behaviour",
    "topic": "Theory of Consumer Behaviour: Equi-Marginal Principle",
    "bookQuestionNum": 15,
    "text": "A consumer has marginal utility of 36 utils for good X, whose price is ₦6. If marginal utility of good Y is 30 utils, what price of Y satisfies the marginal utility per naira rule?",
    "options": {
      "A": "₦4",
      "B": "₦5",
      "C": "₦6",
      "D": "₦8"
    },
    "answer": "B",
    "explanation": "MUx/Px = 36/6 = 6. For equilibrium, MUy/Py = 6, so 30/Py = 6 and Py = ₦5.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "econ_set3_16",
    "originalChapter": 4,
    "chapterTitle": "Theory of Production & Costs",
    "topic": "Theory of Production: Marginal Product",
    "bookQuestionNum": 16,
    "text": "A firm produces 48 units with four workers and 55 units with five workers. Calculate the marginal product of the fifth worker.",
    "options": {
      "A": "5 units",
      "B": "7 units",
      "C": "11 units",
      "D": "55 units"
    },
    "answer": "B",
    "explanation": "Marginal product = change in total output = 55 − 48 = 7 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "econ_set3_17",
    "originalChapter": 4,
    "chapterTitle": "Theory of Production & Costs",
    "topic": "Theory of Production: Average Labour Productivity",
    "bookQuestionNum": 17,
    "text": "A firm produces 280 units using 14 workers. Calculate average labour productivity.",
    "options": {
      "A": "14 units per worker",
      "B": "18 units per worker",
      "C": "20 units per worker",
      "D": "28 units per worker"
    },
    "answer": "C",
    "explanation": "Average product = total output/number of workers = 280/14 = 20 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "econ_set3_18",
    "originalChapter": 4,
    "chapterTitle": "Theory of Production & Costs",
    "topic": "Theory of Production: Returns to Scale",
    "bookQuestionNum": 18,
    "text": "A firm's output increases from 200 units to 460 units after all its inputs are doubled. This represents",
    "options": {
      "A": "decreasing returns to scale",
      "B": "constant returns to scale",
      "C": "increasing returns to scale",
      "D": "negative returns to scale"
    },
    "answer": "C",
    "explanation": "Doubling all inputs would produce 400 units under constant returns to scale. Output of 460 units indicates increasing returns to scale.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "econ_set3_19",
    "originalChapter": 4,
    "chapterTitle": "Theory of Production & Costs",
    "topic": "Theory of Costs: Average Variable Cost",
    "bookQuestionNum": 19,
    "text": "A firm's total cost is ₦400 at zero output and ₦1,400 at an output of 20 units. Calculate average variable cost.",
    "options": {
      "A": "₦20",
      "B": "₦40",
      "C": "₦50",
      "D": "₦70"
    },
    "answer": "C",
    "explanation": "Fixed cost = ₦400. Variable cost = 1,400 − 400 = ₦1,000. Average variable cost = 1,000/20 = ₦50.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "econ_set3_20",
    "originalChapter": 4,
    "chapterTitle": "Theory of Production & Costs",
    "topic": "Theory of Costs: Marginal Cost",
    "bookQuestionNum": 20,
    "text": "Total cost increases from ₦1,800 to ₦2,040 when output increases from 30 to 36 units. Calculate marginal cost over this interval.",
    "options": {
      "A": "₦30",
      "B": "₦35",
      "C": "₦40",
      "D": "₦240"
    },
    "answer": "C",
    "explanation": "Change in total cost = ₦240 and change in output = 6 units. Marginal cost = 240/6 = ₦40.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "econ_set3_21",
    "originalChapter": 4,
    "chapterTitle": "Theory of Production & Costs",
    "topic": "Theory of Costs: Average Total Cost",
    "bookQuestionNum": 21,
    "text": "A firm has fixed costs of ₦1,600 and an average variable cost of ₦35 when producing 80 units. Calculate average total cost.",
    "options": {
      "A": "₦35",
      "B": "₦45",
      "C": "₦55",
      "D": "₦75"
    },
    "answer": "C",
    "explanation": "Total variable cost = 80 × 35 = ₦2,800. Total cost = 1,600 + 2,800 = ₦4,400. Average total cost = 4,400/80 = ₦55.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "econ_set3_22",
    "originalChapter": 5,
    "chapterTitle": "Market Structures & Pricing",
    "topic": "Theory of Revenue: Profit Maximisation",
    "bookQuestionNum": 22,
    "text": "A firm sells 120 units at ₦80 each. Its average total cost is ₦65. Calculate total profit.",
    "options": {
      "A": "₦1,200",
      "B": "₦1,500",
      "C": "₦1,800",
      "D": "₦9,600"
    },
    "answer": "C",
    "explanation": "Profit per unit = 80 − 65 = ₦15. Total profit = 120 × 15 = ₦1,800.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "econ_set3_23",
    "originalChapter": 5,
    "chapterTitle": "Market Structures & Pricing",
    "topic": "Market Structures: Break-Even Analysis",
    "bookQuestionNum": 23,
    "text": "A firm has fixed costs of ₦1,500, a selling price of ₦60 per unit, and average variable cost of ₦35. Calculate its break-even output.",
    "options": {
      "A": "40 units",
      "B": "50 units",
      "C": "60 units",
      "D": "75 units"
    },
    "answer": "C",
    "explanation": "Contribution per unit = 60 − 35 = ₦25. Break-even output = 1,500/25 = 60 units.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "econ_set3_24",
    "originalChapter": 5,
    "chapterTitle": "Market Structures & Pricing",
    "topic": "Market Structures: Profit Maximisation Rule",
    "bookQuestionNum": 24,
    "text": "The marginal revenue from selling an additional unit is ₦40, while marginal cost is ₦55. Assuming profit maximisation and that marginal cost is rising relative to marginal revenue, the firm should generally",
    "options": {
      "A": "increase output",
      "B": "reduce output",
      "C": "keep increasing output indefinitely",
      "D": "set marginal cost to zero"
    },
    "answer": "B",
    "explanation": "The additional unit adds ₦40 to revenue but ₦55 to cost. Producing it reduces profit by ₦15.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "econ_set3_25",
    "originalChapter": 6,
    "chapterTitle": "Market Failure & Public Finance",
    "topic": "Market Failure: Externalities & Marginal Social Cost",
    "bookQuestionNum": 25,
    "text": "A factory's private production cost is ₦300 per unit, while pollution imposes an external cost of ₦40 per unit. Calculate marginal social cost if these figures represent the relevant marginal costs.",
    "options": {
      "A": "₦260",
      "B": "₦300",
      "C": "₦340",
      "D": "₦12,000"
    },
    "answer": "C",
    "explanation": "Marginal social cost = marginal private cost + marginal external cost = 300 + 40 = ₦340.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "econ_set3_26",
    "originalChapter": 7,
    "chapterTitle": "National Income & Macroeconomic aggregates",
    "topic": "National Income Accounting: Expenditure Approach",
    "bookQuestionNum": 26,
    "text": "An economy records consumption of ₦650 billion, investment of ₦120 billion, government spending of ₦180 billion, exports of ₦100 billion and imports of ₦120 billion. Calculate GDP using the expenditure method.",
    "options": {
      "A": "₦810 billion",
      "B": "₦910 billion",
      "C": "₦930 billion",
      "D": "₦1,170 billion"
    },
    "answer": "C",
    "explanation": "GDP = C + I + G + (X − M) = 650 + 120 + 180 + (100 − 120) = ₦930 billion.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "econ_set3_27",
    "originalChapter": 7,
    "chapterTitle": "National Income & Macroeconomic aggregates",
    "topic": "National Income Accounting: Net National Income",
    "bookQuestionNum": 27,
    "text": "A country's GDP is ₦1,400 billion, and net factor income from abroad is ₦50 billion. Depreciation is ₦100 billion. Using the traditional national-accounting relationship, calculate net national income.",
    "options": {
      "A": "₦1,250 billion",
      "B": "₦1,350 billion",
      "C": "₦1,450 billion",
      "D": "₦1,550 billion"
    },
    "answer": "B",
    "explanation": "GNI = 1,400 + 50 = ₦1,450 billion. Net national income after depreciation = 1,450 − 100 = ₦1,350 billion.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "econ_set3_28",
    "originalChapter": 7,
    "chapterTitle": "National Income & Macroeconomic aggregates",
    "topic": "National Income Accounting: Value-Added Method",
    "bookQuestionNum": 28,
    "text": "A farmer sells wheat for ₦100,000 to a miller. The miller sells flour for ₦180,000 to a baker, who sells bread for ₦300,000 to consumers. Calculate total value added across these stages.",
    "options": {
      "A": "₦100,000",
      "B": "₦180,000",
      "C": "₦200,000",
      "D": "₦300,000"
    },
    "answer": "D",
    "explanation": "Value added is ₦100,000 by the farmer, ₦80,000 by the miller and ₦120,000 by the baker. Total = ₦300,000.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "econ_set3_29",
    "originalChapter": 7,
    "chapterTitle": "National Income & Macroeconomic aggregates",
    "topic": "National Income Accounting: Real vs Nominal GDP",
    "bookQuestionNum": 29,
    "text": "Nominal GDP is ₦1.8 trillion and the GDP deflator is 150, using a base-year index of 100. Calculate real GDP.",
    "options": {
      "A": "₦900 billion",
      "B": "₦1.2 trillion",
      "C": "₦1.5 trillion",
      "D": "₦2.7 trillion"
    },
    "answer": "B",
    "explanation": "Real GDP = nominal GDP ÷ (deflator/100) = 1.8/1.5 = ₦1.2 trillion.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "econ_set3_30",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Inflation: Measuring Inflation Rate",
    "bookQuestionNum": 30,
    "text": "The consumer price index rises from 180 to 207. Calculate the inflation rate.",
    "options": {
      "A": "10%",
      "B": "12%",
      "C": "15%",
      "D": "27%"
    },
    "answer": "C",
    "explanation": "Inflation = (207 − 180)/180 × 100% = 15%.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "econ_set3_31",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Inflation: Purchasing Power & Real Wages",
    "bookQuestionNum": 31,
    "text": "A worker's nominal salary rises from ₦100,000 to ₦112,000, while the CPI rises from 120 to 144. Calculate the percentage change in the worker's real purchasing power.",
    "options": {
      "A": "6.67% decrease",
      "B": "6.67% increase",
      "C": "12% decrease",
      "D": "20% increase"
    },
    "answer": "A",
    "explanation": "The real salary index changes in the ratio (112,000/144)/(100,000/120) = 0.9333. Therefore, purchasing power falls by approximately 6.67%.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "econ_set3_32",
    "originalChapter": 12,
    "chapterTitle": "Economic Integration & Development",
    "topic": "Economic Growth: Real GDP Growth Rate",
    "bookQuestionNum": 32,
    "text": "Real GDP rises from ₦2.5 trillion to ₦2.8 trillion. Calculate the growth rate.",
    "options": {
      "A": "8%",
      "B": "10%",
      "C": "12%",
      "D": "15%"
    },
    "answer": "C",
    "explanation": "Growth rate = (2.8 − 2.5)/2.5 × 100% = 12%.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "econ_set3_33",
    "originalChapter": 7,
    "chapterTitle": "National Income & Macroeconomic aggregates",
    "topic": "National Income: Per Capita Income",
    "bookQuestionNum": 33,
    "text": "A country has national income of ₦9.6 trillion and a population of 32 million. Calculate per capita national income.",
    "options": {
      "A": "₦30,000",
      "B": "₦120,000",
      "C": "₦300,000",
      "D": "₦3,000,000"
    },
    "answer": "C",
    "explanation": "Per capita income = ₦9.6 trillion/32 million = ₦300,000 per person.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "econ_set3_34",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Population: Growth Rate & Net Emigration",
    "bookQuestionNum": 34,
    "text": "A country records a birth rate of 28 per 1,000 people, a death rate of 9 per 1,000, and net emigration of 4 per 1,000. Calculate the annual population growth rate, ignoring other changes.",
    "options": {
      "A": "1.0%",
      "B": "1.5%",
      "C": "1.9%",
      "D": "2.3%"
    },
    "answer": "B",
    "explanation": "Net increase = 28 − 9 − 4 = 15 per 1,000. This is equivalent to 1.5%.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "econ_set3_35",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Labour & Unemployment: Measuring Unemployment",
    "bookQuestionNum": 35,
    "text": "A country has 2.4 million unemployed people and 21.6 million employed people. Calculate the unemployment rate.",
    "options": {
      "A": "8%",
      "B": "10%",
      "C": "11.1%",
      "D": "12%"
    },
    "answer": "B",
    "explanation": "Labour force = 2.4 + 21.6 = 24 million. Unemployment rate = 2.4/24 × 100% = 10%.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "econ_set3_36",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Labour & Unemployment: Labour Force Participation",
    "bookQuestionNum": 36,
    "text": "A country has a labour force of 36 million and a working-age population of 45 million. Calculate the labour force participation rate.",
    "options": {
      "A": "60%",
      "B": "75%",
      "C": "80%",
      "D": "90%"
    },
    "answer": "C",
    "explanation": "Participation rate = 36/45 × 100% = 80%.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "econ_set3_37",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Population: Dependency Ratio",
    "bookQuestionNum": 37,
    "text": "A country has 12 million dependants and 30 million people of working age. Calculate the dependency ratio.",
    "options": {
      "A": "25%",
      "B": "30%",
      "C": "40%",
      "D": "60%"
    },
    "answer": "C",
    "explanation": "Dependency ratio = dependants/working-age population × 100% = 12/30 × 100% = 40%.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "econ_set3_38",
    "originalChapter": 7,
    "chapterTitle": "National Income & Macroeconomic aggregates",
    "topic": "Macroeconomic Theory: Investment Multiplier",
    "bookQuestionNum": 38,
    "text": "The marginal propensity to consume is 0.75. If investment increases by ₦50 billion, calculate the change in equilibrium income using the simple Keynesian multiplier.",
    "options": {
      "A": "₦50 billion",
      "B": "₦100 billion",
      "C": "₦150 billion",
      "D": "₦200 billion"
    },
    "answer": "D",
    "explanation": "Multiplier = 1/(1 − 0.75) = 4. Change in income = 4 × ₦50 billion = ₦200 billion.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "econ_set3_39",
    "originalChapter": 7,
    "chapterTitle": "National Income & Macroeconomic aggregates",
    "topic": "Macroeconomic Theory: Tax Multiplier",
    "bookQuestionNum": 39,
    "text": "The marginal propensity to consume is 0.8. If lump-sum taxes rise by ₦30 billion, calculate the change in equilibrium income under the simple Keynesian model.",
    "options": {
      "A": "A decrease of ₦30 billion",
      "B": "A decrease of ₦60 billion",
      "C": "A decrease of ₦120 billion",
      "D": "An increase of ₦120 billion"
    },
    "answer": "C",
    "explanation": "Tax multiplier = −MPC/(1 − MPC) = −0.8/0.2 = −4. Change in income = −4 × ₦30 billion = −₦120 billion.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "econ_set3_40",
    "originalChapter": 7,
    "chapterTitle": "National Income & Macroeconomic aggregates",
    "topic": "Macroeconomic Theory: Equilibrium Income",
    "bookQuestionNum": 40,
    "text": "Consumption is described by C = 100 + 0.8Y, and planned investment is ₦150 billion. If the economy is in equilibrium and there is no government or foreign trade, calculate equilibrium income.",
    "options": {
      "A": "₦750 billion",
      "B": "₦1,000 billion",
      "C": "₦1,250 billion",
      "D": "₦1,500 billion"
    },
    "answer": "C",
    "explanation": "Y = C + I = 100 + 0.8Y + 150. Thus, 0.2Y = 250 and Y = ₦1,250 billion.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "econ_set3_41",
    "originalChapter": 7,
    "chapterTitle": "National Income & Macroeconomic aggregates",
    "topic": "Macroeconomic Theory: Consumption and Saving",
    "bookQuestionNum": 41,
    "text": "Consumption is C = 40 + 0.75Y. If income is ₦400 billion, calculate saving.",
    "options": {
      "A": "₦40 billion",
      "B": "₦60 billion",
      "C": "₦100 billion",
      "D": "₦300 billion"
    },
    "answer": "B",
    "explanation": "C = 40 + 0.75(400) = ₦340 billion. Saving = income − consumption = 400 − 340 = ₦60 billion.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "econ_set3_42",
    "originalChapter": 7,
    "chapterTitle": "National Income & Macroeconomic aggregates",
    "topic": "Circular Flow of Income: Injections and Leakages",
    "bookQuestionNum": 42,
    "text": "Investment is ₦75 billion, government expenditure ₦50 billion, exports ₦25 billion, saving ₦60 billion, taxation ₦40 billion and imports ₦50 billion. Under the injections-leakages approach, the economy is",
    "options": {
      "A": "experiencing excess injections of ₦25 billion",
      "B": "experiencing excess leakages of ₦25 billion",
      "C": "at equilibrium because injections equal leakages",
      "D": "experiencing excess injections of ₦150 billion"
    },
    "answer": "C",
    "explanation": "Injections = 75 + 50 + 25 = ₦150 billion. Leakages = 60 + 40 + 50 = ₦150 billion.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "econ_set3_43",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Money & Banking: Quantity Theory of Money (Fisher Equation)",
    "bookQuestionNum": 43,
    "text": "The money supply is ₦800 billion and velocity is 3. Using MV = PY, calculate nominal national expenditure.",
    "options": {
      "A": "₦800 billion",
      "B": "₦1.2 trillion",
      "C": "₦2.0 trillion",
      "D": "₦2.4 trillion"
    },
    "answer": "D",
    "explanation": "MV = 800 billion × 3 = ₦2.4 trillion.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "econ_set3_44",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Money & Banking: Deposit Multiplier",
    "bookQuestionNum": 44,
    "text": "If the required cash reserve ratio is 8%, calculate the simple deposit multiplier, assuming no cash leakage and full redepositing of loans.",
    "options": {
      "A": "8",
      "B": "10",
      "C": "12.5",
      "D": "20"
    },
    "answer": "C",
    "explanation": "Deposit multiplier = 1/0.08 = 12.5.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "econ_set3_45",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Money & Banking: Credit Creation",
    "bookQuestionNum": 45,
    "text": "A bank receives a new cash deposit of ₦2 million. If the reserve requirement is 8%, what is the maximum total deposit creation supported by the deposit under the simple multiplier model?",
    "options": {
      "A": "₦2 million",
      "B": "₦16 million",
      "C": "₦23 million",
      "D": "₦25 million"
    },
    "answer": "D",
    "explanation": "Multiplier = 1/0.08 = 12.5. Maximum total deposits = ₦2 million × 12.5 = ₦25 million. The additional deposit creation is ₦23 million.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "econ_set3_46",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Money & Banking: Excess Reserves",
    "bookQuestionNum": 46,
    "text": "A bank has deposits of ₦80 million and reserves of ₦14 million. If the required reserve ratio is 12.5%, calculate excess reserves.",
    "options": {
      "A": "₦2 million",
      "B": "₦4 million",
      "C": "₦10 million",
      "D": "₦14 million"
    },
    "answer": "B",
    "explanation": "Required reserves = 12.5% × ₦80 million = ₦10 million. Excess reserves = ₦14 million − ₦10 million = ₦4 million.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "econ_set3_47",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Money & Banking: Fisher Effect & Real Interest Rate",
    "bookQuestionNum": 47,
    "text": "The nominal interest rate is 15% and the inflation rate is 10%. Calculate the exact real interest rate using the Fisher relationship.",
    "options": {
      "A": "4.00%",
      "B": "4.55%",
      "C": "5.00%",
      "D": "5.50%"
    },
    "answer": "B",
    "explanation": "Real rate = (1.15/1.10) − 1 ≈ 0.04545, or 4.55%.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "econ_set3_48",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Inflation: Weighted Price Index",
    "bookQuestionNum": 48,
    "text": "A price index uses weights of 40, 35 and 25. The price relatives of the three commodities are 110, 120 and 140. Calculate the weighted index.",
    "options": {
      "A": "117",
      "B": "120",
      "C": "121",
      "D": "125"
    },
    "answer": "C",
    "explanation": "Weighted index = [40(110) + 35(120) + 25(140)]/100 = 121.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "econ_set3_49",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Inflation: Real Purchasing Power of Money",
    "bookQuestionNum": 49,
    "text": "If the CPI rises from 100 to 125, what is the purchasing power of ₦100 expressed in base-year naira?",
    "options": {
      "A": "₦75",
      "B": "₦80",
      "C": "₦100",
      "D": "₦125"
    },
    "answer": "B",
    "explanation": "Real purchasing power = ₦100/(125/100) = ₦80 in base-year purchasing power.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "econ_set3_50",
    "originalChapter": 6,
    "chapterTitle": "Market Failure & Public Finance",
    "topic": "Public Finance: Deficit-to-GDP Ratio",
    "bookQuestionNum": 50,
    "text": "Government expenditure is ₦9 trillion, revenue is ₦7.2 trillion, and GDP is ₦36 trillion. Calculate the budget deficit as a percentage of GDP.",
    "options": {
      "A": "4%",
      "B": "5%",
      "C": "6%",
      "D": "8%"
    },
    "answer": "B",
    "explanation": "Deficit = 9 − 7.2 = ₦1.8 trillion. Deficit-to-GDP ratio = 1.8/36 × 100% = 5%.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "econ_set3_51",
    "originalChapter": 6,
    "chapterTitle": "Market Failure & Public Finance",
    "topic": "Public Finance: Progressive Income Taxation",
    "bookQuestionNum": 51,
    "text": "A tax system charges 5% on the first ₦200,000 of taxable income and 10% on the next portion. If taxable income is ₦400,000, calculate the total tax and average tax rate.",
    "options": {
      "A": "₦20,000 and 5%",
      "B": "₦30,000 and 7.5%",
      "C": "₦40,000 and 10%",
      "D": "₦50,000 and 12.5%"
    },
    "answer": "B",
    "explanation": "Tax on first ₦200,000 = ₦10,000. Tax on the next ₦200,000 = ₦20,000. Total tax = ₦30,000; average rate = 30,000/400,000 × 100% = 7.5%.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "econ_set3_52",
    "originalChapter": 6,
    "chapterTitle": "Market Failure & Public Finance",
    "topic": "Public Finance: Value-Added Tax (VAT)",
    "bookQuestionNum": 52,
    "text": "A business charges output VAT of ₦42,000 and has eligible input VAT of ₦26,500. Calculate the net VAT payable, ignoring other adjustments.",
    "options": {
      "A": "₦15,000",
      "B": "₦15,500",
      "C": "₦26,500",
      "D": "₦68,500"
    },
    "answer": "B",
    "explanation": "Net VAT = output VAT − eligible input VAT = 42,000 − 26,500 = ₦15,500.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "econ_set3_53",
    "originalChapter": 6,
    "chapterTitle": "Market Failure & Public Finance",
    "topic": "Public Finance: Public Debt & Debt Servicing",
    "bookQuestionNum": 53,
    "text": "A government has public debt of ₦6.5 trillion and pays an annual interest rate of 11%. Calculate the annual interest bill.",
    "options": {
      "A": "₦65 billion",
      "B": "₦650 billion",
      "C": "₦715 billion",
      "D": "₦1.1 trillion"
    },
    "answer": "C",
    "explanation": "Annual interest = 0.11 × ₦6.5 trillion = ₦0.715 trillion = ₦715 billion.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "econ_set3_54",
    "originalChapter": 6,
    "chapterTitle": "Market Failure & Public Finance",
    "topic": "Public Finance: Government Subsidies",
    "bookQuestionNum": 54,
    "text": "A government pays a subsidy of ₦25 per unit on 1.2 million units. Calculate its total subsidy expenditure.",
    "options": {
      "A": "₦3 million",
      "B": "₦12 million",
      "C": "₦30 million",
      "D": "₦300 million"
    },
    "answer": "C",
    "explanation": "Total subsidy = ₦25 × 1,200,000 = ₦30,000,000.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "econ_set3_55",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Money & Banking: Excess Reserves",
    "bookQuestionNum": 55,
    "text": "A bank has deposits of ₦120 million and reserves of ₦18 million. If the required reserve ratio is 10%, calculate excess reserves.",
    "options": {
      "A": "₦3 million",
      "B": "₦6 million",
      "C": "₦12 million",
      "D": "₦18 million"
    },
    "answer": "B",
    "explanation": "Required reserves = 10% × ₦120 million = ₦12 million. Excess reserves = 18 − 12 = ₦6 million.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "econ_set3_56",
    "originalChapter": 10,
    "chapterTitle": "Monetary & Fiscal Policy",
    "topic": "Monetary Policy: Open Market Operations (OMO)",
    "bookQuestionNum": 56,
    "text": "When a central bank sells government securities in the open market, the intended immediate effect is generally to",
    "options": {
      "A": "increase commercial bank reserves",
      "B": "reduce commercial bank reserves",
      "C": "increase bank lending without limit",
      "D": "abolish the demand for money"
    },
    "answer": "B",
    "explanation": "Purchasers pay for the securities, withdrawing funds from the banking system and helping tighten monetary conditions.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "econ_set3_57",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Finance: Foreign Exchange Rates",
    "bookQuestionNum": 57,
    "text": "The exchange rate rises from ₦1,200 per US dollar to ₦1,500 per US dollar. By what percentage has the naira cost of one US dollar increased?",
    "options": {
      "A": "15%",
      "B": "20%",
      "C": "25%",
      "D": "30%"
    },
    "answer": "C",
    "explanation": "Percentage increase = (1,500 − 1,200)/1,200 × 100% = 25%.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "econ_set3_58",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Finance: Foreign Exchange Transactions",
    "bookQuestionNum": 58,
    "text": "An importer must pay US$3,750 at an exchange rate of ₦1,480 per dollar. The bank adds a transaction fee of 0.8% of the naira cost. Calculate the total payment.",
    "options": {
      "A": "₦5,550,000",
      "B": "₦5,594,400",
      "C": "₦5,600,000",
      "D": "₦5,650,000"
    },
    "answer": "B",
    "explanation": "Base cost = 3,750 × ₦1,480 = ₦5,550,000. Fee = 0.008 × 5,550,000 = ₦44,400. Total = ₦5,594,400.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "econ_set3_59",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Trade: Tariffs",
    "bookQuestionNum": 59,
    "text": "An imported machine is valued at US$240 before tax. An ad valorem tariff of 15% is imposed. What is its price after the tariff, ignoring freight and other charges?",
    "options": {
      "A": "US$255",
      "B": "US$264",
      "C": "US$276",
      "D": "US$300"
    },
    "answer": "C",
    "explanation": "Tariff = 15% × US$240 = US$36. Price after tariff = 240 + 36 = US$276.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "econ_set3_60",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Trade: Terms of Trade",
    "bookQuestionNum": 60,
    "text": "A country's export price index is 144 and its import price index is 120. Calculate the net barter terms of trade index.",
    "options": {
      "A": "80",
      "B": "100",
      "C": "120",
      "D": "144"
    },
    "answer": "C",
    "explanation": "Terms of trade = export price index/import price index × 100 = 144/120 × 100 = 120.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "econ_set3_61",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Trade: Balance of Payments (Current Account)",
    "bookQuestionNum": 61,
    "text": "A country records a goods trade deficit of ₦75 billion, a net services surplus of ₦40 billion, net primary income of −₦10 billion and net transfers of ₦15 billion. Calculate its current account balance.",
    "options": {
      "A": "A deficit of ₦30 billion",
      "B": "A deficit of ₦20 billion",
      "C": "A surplus of ₦30 billion",
      "D": "A surplus of ₦40 billion"
    },
    "answer": "A",
    "explanation": "Current account = −75 + 40 − 10 + 15 = −₦30 billion.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "econ_set3_62",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Trade: Balance of Trade",
    "bookQuestionNum": 62,
    "text": "A country exports goods worth ₦870 billion and imports goods worth ₦950 billion. Calculate its visible trade balance.",
    "options": {
      "A": "A surplus of ₦80 billion",
      "B": "A deficit of ₦80 billion",
      "C": "A deficit of ₦950 billion",
      "D": "A surplus of ₦1,820 billion"
    },
    "answer": "B",
    "explanation": "Visible trade balance = exports − imports = 870 − 950 = −₦80 billion.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "econ_set3_63",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Trade: Comparative Advantage",
    "bookQuestionNum": 63,
    "text": "Country A can produce 20 units of cloth or 10 units of wine with the same resources. Country B can produce 12 units of cloth or 8 units of wine. Which country has a comparative advantage in wine?",
    "options": {
      "A": "Country A",
      "B": "Country B",
      "C": "Both countries equally",
      "D": "Neither country"
    },
    "answer": "B",
    "explanation": "In A, one unit of wine costs 2 units of cloth. In B, one unit of wine costs 12/8 = 1.5 units of cloth. B has the lower opportunity cost of wine.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "econ_set3_64",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Trade: Absolute Advantage",
    "bookQuestionNum": 64,
    "text": "Country A can produce either 30 units of cloth or 15 units of wine per worker daily. Country B can produce either 20 units of cloth or 20 units of wine. Which statement is correct?",
    "options": {
      "A": "A has an absolute advantage in both goods.",
      "B": "B has an absolute advantage in both goods.",
      "C": "A has an absolute advantage in cloth, while B has an absolute advantage in wine.",
      "D": "Neither country has an absolute advantage."
    },
    "answer": "C",
    "explanation": "A produces more cloth (30 versus 20), while B produces more wine (20 versus 15) per worker daily.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "econ_set3_65",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Finance: Currency Appreciation",
    "bookQuestionNum": 65,
    "text": "A currency appreciates against foreign currencies. Other things remaining constant, which effect is most likely?",
    "options": {
      "A": "Imports become cheaper in domestic currency.",
      "B": "Imports become more expensive in domestic currency.",
      "C": "Exports become automatically cheaper to foreign buyers.",
      "D": "Foreign travel becomes impossible."
    },
    "answer": "A",
    "explanation": "An appreciation raises the foreign-currency value of the domestic currency, reducing the domestic-currency cost of imports, other things being equal.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "econ_set3_66",
    "originalChapter": 12,
    "chapterTitle": "Economic Integration & Development",
    "topic": "Economic Integration: Customs Union",
    "bookQuestionNum": 66,
    "text": "Which of the following is a key characteristic of a customs union?",
    "options": {
      "A": "No international trade among its members",
      "B": "A common external tariff toward non-member countries",
      "C": "Separate external tariffs with no common policy",
      "D": "A ban on exports from member countries"
    },
    "answer": "B",
    "explanation": "A customs union removes internal trade barriers among members and establishes a common external tariff.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "econ_set3_67",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Trade: Quotas vs Tariffs",
    "bookQuestionNum": 67,
    "text": "An import quota differs from a tariff because a quota directly restricts the",
    "options": {
      "A": "quantity or value of imports",
      "B": "income of every domestic consumer",
      "C": "number of local producers",
      "D": "exchange rate in every market"
    },
    "answer": "A",
    "explanation": "An import quota places a limit on imports, while a tariff imposes a tax on them.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "econ_set3_68",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Trade: Visible Trade Balance",
    "bookQuestionNum": 68,
    "text": "A country's total imports are ₦400 billion, total exports are ₦500 billion, and net income and transfers from abroad are zero. Calculate the visible trade balance.",
    "options": {
      "A": "A deficit of ₦100 billion",
      "B": "A surplus of ₦100 billion",
      "C": "A surplus of ₦900 billion",
      "D": "A balanced trade account"
    },
    "answer": "B",
    "explanation": "Visible trade balance = exports − imports = 500 − 400 = ₦100 billion.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "econ_set3_69",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Finance: Cross Currency Exchange",
    "bookQuestionNum": 69,
    "text": "If one euro exchanges for US$1.10 and one US dollar exchanges for ₦1,500, calculate the naira equivalent of €200.",
    "options": {
      "A": "₦220,000",
      "B": "₦250,000",
      "C": "₦330,000",
      "D": "₦300,000"
    },
    "answer": "C",
    "explanation": "€200 = US$220. At ₦1,500 per dollar, the amount is 220 × ₦1,500 = ₦330,000.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "econ_set3_70",
    "originalChapter": 11,
    "chapterTitle": "International Trade & Finance",
    "topic": "International Finance: International Monetary Fund (IMF)",
    "bookQuestionNum": 70,
    "text": "The main objective of the International Monetary Fund is most closely associated with",
    "options": {
      "A": "promoting international monetary cooperation and supporting balance-of-payments stability",
      "B": "replacing all domestic tax authorities",
      "C": "managing every private business in member countries",
      "D": "setting the retail price of every commodity worldwide"
    },
    "answer": "A",
    "explanation": "The IMF works to support international monetary cooperation and financial stability, including assistance to countries facing external financing problems.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "econ_set3_71",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Labour & Productivity: Labour Productivity",
    "bookQuestionNum": 71,
    "text": "A firm produces 1,800 units using 45 workers. Calculate average labour productivity.",
    "options": {
      "A": "30 units per worker",
      "B": "35 units per worker",
      "C": "40 units per worker",
      "D": "45 units per worker"
    },
    "answer": "C",
    "explanation": "Average labour productivity = 1,800/45 = 40 units per worker.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "econ_set3_72",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Labour Market: Marginal Revenue Product (MRP)",
    "bookQuestionNum": 72,
    "text": "An additional worker enables a competitive firm to produce six extra units. Each unit sells for ₦200. Assuming the marginal revenue from each additional unit equals the market price, calculate the worker's marginal revenue product.",
    "options": {
      "A": "₦200",
      "B": "₦600",
      "C": "₦1,000",
      "D": "₦1,200"
    },
    "answer": "D",
    "explanation": "Marginal revenue product = marginal product × marginal revenue = 6 × ₦200 = ₦1,200.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "econ_set3_73",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Labour Market: Real Wages",
    "bookQuestionNum": 73,
    "text": "A worker's nominal wage rises by 10%, but the general price level rises by 25%. Using the ratio of wage and price growth factors, what happens to real wages?",
    "options": {
      "A": "They rise by 15%.",
      "B": "They fall by 12%.",
      "C": "They fall by 15%.",
      "D": "They remain constant."
    },
    "answer": "B",
    "explanation": "Real wage factor = 1.10/1.25 = 0.88. Real wages therefore fall by 12%.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "econ_set3_74",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Population: Rule of 70 Doubling Time",
    "bookQuestionNum": 74,
    "text": "A country's population grows at 2.5% annually. Using the Rule of 70, estimate the number of years needed for its population to double.",
    "options": {
      "A": "14 years",
      "B": "20 years",
      "C": "28 years",
      "D": "35 years"
    },
    "answer": "C",
    "explanation": "Approximate doubling time = 70/growth rate = 70/2.5 = 28 years.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "econ_set3_75",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Population: Geometric Population Projection",
    "bookQuestionNum": 75,
    "text": "A country has a population of 12 million and grows at 3% annually. Assuming a constant rate, estimate its population after two years.",
    "options": {
      "A": "12.36 million",
      "B": "12.60 million",
      "C": "12.73 million",
      "D": "13.20 million"
    },
    "answer": "C",
    "explanation": "Population = 12(1.03)² = 12.7308 million, approximately 12.73 million.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "econ_set3_76",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Population: Dependency Ratio",
    "bookQuestionNum": 76,
    "text": "A country has 20 million young dependants, 8 million elderly dependants and 56 million people of working age. Calculate the dependency ratio.",
    "options": {
      "A": "28%",
      "B": "40%",
      "C": "50%",
      "D": "56%"
    },
    "answer": "C",
    "explanation": "Dependency ratio = (20 + 8)/56 × 100% = 50%.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "econ_set3_77",
    "originalChapter": 12,
    "chapterTitle": "Economic Integration & Development",
    "topic": "Economic Growth: Real GDP Per Capita Growth",
    "bookQuestionNum": 77,
    "text": "Real GDP grows by 8% while population grows by 3%. Using the exact ratio of growth factors, calculate the approximate growth rate of real GDP per capita.",
    "options": {
      "A": "3.00%",
      "B": "4.85%",
      "C": "5.00%",
      "D": "11.00%"
    },
    "answer": "B",
    "explanation": "Per capita growth factor = 1.08/1.03 ≈ 1.04854. Therefore, real GDP per capita grows by approximately 4.85%.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "econ_set3_78",
    "originalChapter": 12,
    "chapterTitle": "Economic Integration & Development",
    "topic": "Economic Development: Human Development Index (HDI)",
    "bookQuestionNum": 78,
    "text": "Which combination of indicators is used in the Human Development Index?",
    "options": {
      "A": "Inflation, exports and government debt",
      "B": "Health, education and standard of living",
      "C": "Rainfall, population density and exports",
      "D": "Interest rate, tax revenue and unemployment only"
    },
    "answer": "B",
    "explanation": "The HDI combines life expectancy, education indicators and gross national income per capita.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "econ_set3_79",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Labour & Unemployment: Measuring Unemployment",
    "bookQuestionNum": 79,
    "text": "A country has 1.8 million unemployed people and 28.2 million employed people. Calculate the unemployment rate.",
    "options": {
      "A": "5%",
      "B": "6%",
      "C": "6.4%",
      "D": "8%"
    },
    "answer": "B",
    "explanation": "Labour force = 1.8 + 28.2 = 30 million. Unemployment rate = 1.8/30 × 100% = 6%.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "econ_set3_80",
    "originalChapter": 13,
    "chapterTitle": "Agriculture & Industrialization",
    "topic": "Agriculture: Seasonality in Agriculture",
    "bookQuestionNum": 80,
    "text": "Agricultural output is largely seasonal because it depends heavily on",
    "options": {
      "A": "planting periods, rainfall and biological growth cycles",
      "B": "the number of banks in a city",
      "C": "daily changes in foreign exchange rates alone",
      "D": "the number of factories in every state"
    },
    "answer": "A",
    "explanation": "Agricultural production often depends on seasonal weather conditions and crop-development cycles.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "econ_set3_81",
    "originalChapter": 4,
    "chapterTitle": "Theory of Production & Costs",
    "topic": "Factors of Production: Supply of Land",
    "bookQuestionNum": 81,
    "text": "The total physical supply of land is conventionally treated as perfectly inelastic because",
    "options": {
      "A": "its total quantity cannot be increased through production",
      "B": "land has no alternative uses",
      "C": "all land has identical fertility",
      "D": "the price of land never changes"
    },
    "answer": "A",
    "explanation": "The total physical quantity of land is fixed, although the amount offered for a particular use may change.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "econ_set3_82",
    "originalChapter": 4,
    "chapterTitle": "Theory of Production & Costs",
    "topic": "Theory of Production: Returns to Scale",
    "bookQuestionNum": 82,
    "text": "A firm's output rises from 100 units to 240 units when all its inputs are doubled. This is evidence of",
    "options": {
      "A": "decreasing returns to scale",
      "B": "constant returns to scale",
      "C": "increasing returns to scale",
      "D": "diminishing marginal utility"
    },
    "answer": "C",
    "explanation": "With constant returns, doubling inputs would double output to 200 units. Output of 240 is more than double.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "econ_set3_83",
    "originalChapter": 4,
    "chapterTitle": "Theory of Production & Costs",
    "topic": "Theory of Costs: Economies of Scale",
    "bookQuestionNum": 83,
    "text": "A firm's average cost falls from ₦500 to ₦360 per unit as output rises from 100 to 200 units. Calculate the percentage reduction in average cost.",
    "options": {
      "A": "14%",
      "B": "20%",
      "C": "28%",
      "D": "40%"
    },
    "answer": "C",
    "explanation": "Reduction = ₦140. Percentage reduction = 140/500 × 100% = 28%.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "econ_set3_84",
    "originalChapter": 9,
    "chapterTitle": "Population, Labour & Unemployment",
    "topic": "Labour Market: Economic Rent & Transfer Earnings",
    "bookQuestionNum": 84,
    "text": "A worker earns ₦80,000 per month in a job but would accept ₦50,000 per month in the next best available alternative. Ignoring other factors, calculate the worker's economic rent.",
    "options": {
      "A": "₦20,000",
      "B": "₦30,000",
      "C": "₦50,000",
      "D": "₦80,000"
    },
    "answer": "B",
    "explanation": "Economic rent = actual earnings − transfer earnings = ₦80,000 − ₦50,000 = ₦30,000.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "econ_set3_85",
    "originalChapter": 1,
    "chapterTitle": "Basic Economic Concepts & Methodology",
    "topic": "Basic Concepts: Opportunity Cost on PPC",
    "bookQuestionNum": 85,
    "text": "A production possibility schedule shows that producing 10 units of X allows 80 units of Y, while producing 20 units of X allows 50 units of Y. Calculate the opportunity cost per additional unit of X over this interval.",
    "options": {
      "A": "2 units of Y",
      "B": "3 units of Y",
      "C": "5 units of Y",
      "D": "30 units of Y"
    },
    "answer": "B",
    "explanation": "Increasing X by 10 units reduces Y by 30 units. Opportunity cost per extra X = 30/10 = 3 units of Y.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "econ_set3_86",
    "originalChapter": 1,
    "chapterTitle": "Basic Economic Concepts & Methodology",
    "topic": "Production Possibility Curve (PPC): Outward Shift",
    "bookQuestionNum": 86,
    "text": "Which situation illustrates an outward shift of a production possibility curve?",
    "options": {
      "A": "A temporary movement from one point on the curve to another",
      "B": "An increase in productive capacity caused by improved technology",
      "C": "A fall in output because resources are destroyed",
      "D": "A rise in the market price of one good only"
    },
    "answer": "B",
    "explanation": "Better technology or an increase in productive resources can expand the economy's production possibilities.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "econ_set3_87",
    "originalChapter": 4,
    "chapterTitle": "Theory of Production & Costs",
    "topic": "Theory of Costs: External Economies of Scale",
    "bookQuestionNum": 87,
    "text": "Which of the following best describes external economies of scale?",
    "options": {
      "A": "A firm's own expansion reduces its costs solely through its internal organisation.",
      "B": "Firms benefit from advantages created by growth of the industry or surrounding area.",
      "C": "A firm stops production entirely.",
      "D": "A rise in output always increases the average cost of every firm."
    },
    "answer": "B",
    "explanation": "Shared infrastructure, specialised suppliers and a larger skilled labour pool can reduce costs for firms in a growing industrial area.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "econ_set3_88",
    "originalChapter": 13,
    "chapterTitle": "Agriculture & Industrialization",
    "topic": "Industrial Location: Localisation of Industries",
    "bookQuestionNum": 88,
    "text": "When many firms in the same or related industries cluster in one geographical location, the process is known as",
    "options": {
      "A": "industrial localisation",
      "B": "inflation",
      "C": "nationalisation",
      "D": "devaluation"
    },
    "answer": "A",
    "explanation": "Industrial localisation is the concentration of related or similar industries in a particular area.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "econ_set3_89",
    "originalChapter": 15,
    "chapterTitle": "Statistical Methods & Applied Economics",
    "topic": "Statistical Methods: Weighted Arithmetic Mean",
    "bookQuestionNum": 89,
    "text": "The values 2, 4 and 6 occur with frequencies 3, 5 and 2 respectively. Calculate the arithmetic mean.",
    "options": {
      "A": "3.0",
      "B": "3.8",
      "C": "4.0",
      "D": "4.5"
    },
    "answer": "B",
    "explanation": "Weighted total = 2(3) + 4(5) + 6(2) = 38. Total frequency = 10. Mean = 38/10 = 3.8.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "econ_set3_90",
    "originalChapter": 8,
    "chapterTitle": "Money, Banking & Inflation",
    "topic": "Inflation: Laspeyres-Style CPI Basket",
    "bookQuestionNum": 90,
    "text": "A fixed basket contains 4 units of rice, 2 units of oil and 6 units of soap. Base-year prices are ₦200, ₦700 and ₦100 respectively. Current prices are ₦250, ₦800 and ₦120. Calculate the consumer price index, using the base year as 100.",
    "options": {
      "A": "110",
      "B": "115",
      "C": "120",
      "D": "125"
    },
    "answer": "B",
    "explanation": "Base basket cost = 4(200) + 2(700) + 6(100) = ₦3,000. Current basket cost = 4(250) + 2(800) + 6(120) = ₦3,450. CPI = 3,450/3,000 × 100 = 115.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "econ_set3_91",
    "originalChapter": 15,
    "chapterTitle": "Statistical Methods & Applied Economics",
    "topic": "Statistical Methods: Population Variance",
    "bookQuestionNum": 91,
    "text": "Calculate the population variance of the numbers 1, 3, 5, 7 and 9.",
    "options": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "10"
    },
    "answer": "C",
    "explanation": "Mean = 5. The squared deviations sum to 16 + 4 + 0 + 4 + 16 = 40. Population variance = 40/5 = 8.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "econ_set3_92",
    "originalChapter": 15,
    "chapterTitle": "Statistical Methods & Applied Economics",
    "topic": "Statistical Methods: Median of Data Set",
    "bookQuestionNum": 92,
    "text": "Find the median of the data set 3, 5, 5, 7, 10 and 12.",
    "options": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "8"
    },
    "answer": "B",
    "explanation": "There are six ordered values. The median is the average of the third and fourth values: (5 + 7)/2 = 6.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "econ_set3_93",
    "originalChapter": 15,
    "chapterTitle": "Statistical Methods & Applied Economics",
    "topic": "Statistical Methods: Probability Without Replacement",
    "bookQuestionNum": 93,
    "text": "A box contains 15 good bulbs and 5 defective bulbs. Two bulbs are selected randomly without replacement. Find the probability that both are good.",
    "options": {
      "A": "7/20",
      "B": "3/8",
      "C": "21/38",
      "D": "3/4"
    },
    "answer": "C",
    "explanation": "Probability = (15/20)(14/19) = 210/380 = 21/38.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "econ_set3_94",
    "originalChapter": 15,
    "chapterTitle": "Statistical Methods & Applied Economics",
    "topic": "Statistical Methods: Probability of Events",
    "bookQuestionNum": 94,
    "text": "Two fair six-sided dice are thrown. Find the probability that their sum is 8.",
    "options": {
      "A": "1/9",
      "B": "5/36",
      "C": "1/6",
      "D": "1/4"
    },
    "answer": "B",
    "explanation": "The favourable outcomes are (2,6), (3,5), (4,4), (5,3) and (6,2), giving 5 outcomes out of 36.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "econ_set3_95",
    "originalChapter": 15,
    "chapterTitle": "Statistical Methods & Applied Economics",
    "topic": "Statistical Methods: Combinations",
    "bookQuestionNum": 95,
    "text": "In how many ways can a committee of four people be chosen from seven people?",
    "options": {
      "A": "21",
      "B": "28",
      "C": "35",
      "D": "840"
    },
    "answer": "C",
    "explanation": "Number of selections = ⁷C₄ = 7!/(4!3!) = 35.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "econ_set3_96",
    "originalChapter": 3,
    "chapterTitle": "Theory of Consumer Behaviour",
    "topic": "Theory of Consumer Behaviour: Equi-Marginal Principle",
    "bookQuestionNum": 96,
    "text": "A consumer's marginal utility of X is 42 utils and the price of X is ₦7. If marginal utility of Y is 30 utils, what price of Y equalises marginal utility per naira?",
    "options": {
      "A": "₦4",
      "B": "₦5",
      "C": "₦6",
      "D": "₦7"
    },
    "answer": "C",
    "explanation": "MUx/Px = 42/7 = 6. For equilibrium, 30/Py = 6, giving Py = ₦5.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "econ_set3_97",
    "originalChapter": 5,
    "chapterTitle": "Market Structures & Pricing",
    "topic": "Market Structures: Monopoly Profit Maximisation",
    "bookQuestionNum": 97,
    "text": "A monopolist faces the inverse demand function P = 50 − 0.5Q and has constant marginal cost of ₦10. Assuming no other relevant cost changes, what output maximises profit?",
    "options": {
      "A": "20 units",
      "B": "30 units",
      "C": "40 units",
      "D": "50 units"
    },
    "answer": "C",
    "explanation": "Total revenue = 50Q − 0.5Q², so marginal revenue = 50 − Q. Set MR = MC: 50 − Q = 10. Therefore, Q = 40 units.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "econ_set3_98",
    "originalChapter": 5,
    "chapterTitle": "Market Structures & Pricing",
    "topic": "Market Structures: Break-Even Output",
    "bookQuestionNum": 98,
    "text": "A firm has fixed costs of ₦3,000, a selling price of ₦120 per unit, and average variable cost of ₦70. Calculate its break-even output.",
    "options": {
      "A": "40 units",
      "B": "50 units",
      "C": "60 units",
      "D": "75 units"
    },
    "answer": "C",
    "explanation": "Contribution per unit = ₦120 − ₦70 = ₦50. Break-even output = 3,000/50 = 60 units.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "econ_set3_99",
    "originalChapter": 6,
    "chapterTitle": "Market Failure & Public Finance",
    "topic": "Public Finance: Debt-to-GDP Ratio",
    "bookQuestionNum": 99,
    "text": "A country's public debt is ₦7.5 trillion and its GDP is ₦25 trillion. Calculate its debt-to-GDP ratio.",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "35%"
    },
    "answer": "C",
    "explanation": "Debt-to-GDP ratio = 7.5/25 × 100% = 30%.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "econ_set3_100",
    "originalChapter": 12,
    "chapterTitle": "Economic Integration & Development",
    "topic": "Economic Growth: Real GDP Per Capita Growth",
    "bookQuestionNum": 100,
    "text": "An economy's real GDP rises by 10% while its population rises by 4%. Using the exact ratio of growth factors, calculate the approximate growth rate of real GDP per capita.",
    "options": {
      "A": "4.00%",
      "B": "5.77%",
      "C": "6.00%",
      "D": "14.00%"
    },
    "answer": "B",
    "explanation": "Per capita growth factor = 1.10/1.04 ≈ 1.05769. Therefore, real GDP per capita rises by approximately 5.77%.",
    "page": 10,
    "hasImage": false
  }
];
