/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX ECONOMICS QUESTION BANK
 * 100 TOUGH JAMB UTME-STYLE QUESTIONS ACROSS ALL TOPICS (QUESTIONS 1–100)
 * Indexed directly from official syllabus specifications.
 * Total questions: 100
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
  }
];
