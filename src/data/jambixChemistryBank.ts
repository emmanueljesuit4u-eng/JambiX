/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX CHEMISTRY QUESTION BANK
 * TOPIC 1: ORGANIC CHEMISTRY (QUESTIONS 1–100)
 * TOPIC 2: ANALYTICAL CHEMISTRY (QUESTIONS 101–300)
 * Indexed directly from official syllabus specifications.
 * Total questions: 500
 * TOPIC 4: NON-METALS, METALLURGY, APPLIED & NUCLEAR CHEMISTRY (QUESTIONS 401–500)
 * TOPIC 3: GENERAL, PHYSICAL & INORGANIC CHEMISTRY (QUESTIONS 301–400)
 */

export interface JambixChemistryItem {
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

export const JAMBIX_CHEMISTRY_ITEMS: JambixChemistryItem[] = [
  {
    "id": "chem_organic_1",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 1,
    "text": "What is the correct IUPAC name of CH₃CH(CH₃)CH₂CH₃?",
    "options": {
      "A": "2-methylbutane",
      "B": "3-methylbutane",
      "C": "pentane",
      "D": "2-methylpentane"
    },
    "answer": "A",
    "explanation": "The longest chain contains four carbon atoms. Numbering from the nearest end gives the methyl group position 2.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_2",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 2,
    "text": "What is the correct IUPAC name of CH₃C(CH₃)₂CH₂CH₃?",
    "options": {
      "A": "2,2-dimethylbutane",
      "B": "2,3-dimethylbutane",
      "C": "3,3-dimethylbutane",
      "D": "2-ethyl-2-methylpropane"
    },
    "answer": "A",
    "explanation": "The longest chain contains four carbon atoms, and both methyl groups are attached to carbon 2.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_3",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 3,
    "text": "What is the correct IUPAC name of CH₃CH₂C(CH₃)=CH₂?",
    "options": {
      "A": "2-methylbut-1-ene",
      "B": "3-methylbut-1-ene",
      "C": "2-methylbut-2-ene",
      "D": "pent-1-ene"
    },
    "answer": "A",
    "explanation": "The longest chain containing the double bond has four carbons. Numbering from the double-bond end places the double bond at 1 and the methyl group at 2.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_4",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 4,
    "text": "Which compound is an alkyne?",
    "options": {
      "A": "C₃H₈",
      "B": "C₃H₆",
      "C": "C₃H₄",
      "D": "C₃H₆O"
    },
    "answer": "C",
    "explanation": "An acyclic alkyne with one triple bond has the general formula CₙH₂ₙ₋₂. For three carbon atoms, the formula is C₃H₄.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_5",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 5,
    "text": "How many structural isomers does butane, C₄H₁₀, have?",
    "options": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Four"
    },
    "answer": "B",
    "explanation": "Butane has two structural isomers: straight-chain butane and 2-methylpropane.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_6",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 6,
    "text": "How many structural isomers does pentane, C₅H₁₂, have?",
    "options": {
      "A": "Two",
      "B": "Three",
      "C": "Four",
      "D": "Five"
    },
    "answer": "B",
    "explanation": "The isomers are pentane, 2-methylbutane, and 2,2-dimethylpropane.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_7",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 7,
    "text": "Which compound exhibits geometrical isomerism?",
    "options": {
      "A": "But-1-ene",
      "B": "But-2-ene",
      "C": "2-methylpropene",
      "D": "Ethyne"
    },
    "answer": "B",
    "explanation": "Each carbon atom of the double bond is attached to two different groups, allowing cis-trans isomerism.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_8",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 8,
    "text": "Which compound can exist as two optical isomers because it contains a chiral carbon atom?",
    "options": {
      "A": "Propan-2-ol",
      "B": "Butan-2-ol",
      "C": "Ethanol",
      "D": "Propanone"
    },
    "answer": "B",
    "explanation": "Carbon 2 is attached to four different groups: hydrogen, hydroxyl, methyl, and ethyl.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_9",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 9,
    "text": "Ethanol and methoxymethane are examples of",
    "options": {
      "A": "chain isomerism",
      "B": "position isomerism",
      "C": "functional group isomerism",
      "D": "geometrical isomerism"
    },
    "answer": "C",
    "explanation": "Both have the molecular formula C₂H₆O, but ethanol is an alcohol and methoxymethane is an ether.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_10",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 10,
    "text": "What is the degree of unsaturation of a hydrocarbon with molecular formula C₅H₈?",
    "options": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Four"
    },
    "answer": "B",
    "explanation": "Degree of unsaturation = (2C + 2 − H)/2 = (12 − 8)/2 = 2.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_11",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 11,
    "text": "An organic compound contains 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. What is its simplest empirical formula?",
    "options": {
      "A": "CHO",
      "B": "CH₂O",
      "C": "C₂H₄O",
      "D": "C₂H₆O"
    },
    "answer": "B",
    "explanation": "For 100 g, the mole ratio is approximately C:H:O = 40/12 : 6.7/1 : 53.3/16 = 1:2:1.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_12",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 12,
    "text": "Complete combustion of 0.1 mol of a hydrocarbon produces 0.3 mol of carbon dioxide and 0.4 mol of water. Identify the hydrocarbon.",
    "options": {
      "A": "C₂H₄",
      "B": "C₃H₆",
      "C": "C₃H₈",
      "D": "C₄H₁₀"
    },
    "answer": "C",
    "explanation": "Each mole of hydrocarbon produces three moles of CO₂ and four moles of H₂O. Therefore, the hydrocarbon contains three carbon atoms and eight hydrogen atoms.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_13",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 13,
    "text": "Which statement correctly distinguishes members of a homologous series?",
    "options": {
      "A": "They must have different functional groups.",
      "B": "Successive members differ by CH₂.",
      "C": "Every member has the same molecular mass.",
      "D": "Every member has the same physical properties."
    },
    "answer": "B",
    "explanation": "Successive members of a homologous series differ in molecular formula by one CH₂ unit and share the same functional group.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_14",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 14,
    "text": "Which compound is the most suitable for preparing ethene by cracking?",
    "options": {
      "A": "Methane",
      "B": "A large hydrocarbon such as decane",
      "C": "Ethanol only",
      "D": "Carbon dioxide"
    },
    "answer": "B",
    "explanation": "Cracking breaks large hydrocarbon molecules into smaller molecules, often producing alkanes and alkenes.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_15",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 15,
    "text": "What type of reaction occurs when methane reacts with chlorine in ultraviolet light?",
    "options": {
      "A": "Electrophilic addition",
      "B": "Free-radical substitution",
      "C": "Esterification",
      "D": "Polymerisation"
    },
    "answer": "B",
    "explanation": "Ultraviolet light initiates the formation of chlorine radicals, which substitute hydrogen atoms in methane.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_16",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 16,
    "text": "Which product is formed when ethene reacts with hydrogen in the presence of a nickel catalyst?",
    "options": {
      "A": "Ethane",
      "B": "Ethyne",
      "C": "Ethanol",
      "D": "Ethanoic acid"
    },
    "answer": "A",
    "explanation": "Hydrogen adds across the carbon-carbon double bond, converting ethene to ethane.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_17",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 17,
    "text": "What is the volume of oxygen required for the complete combustion of 10 cm³ of ethene, assuming all gases are measured at the same temperature and pressure?",
    "options": {
      "A": "10 cm³",
      "B": "20 cm³",
      "C": "30 cm³",
      "D": "40 cm³"
    },
    "answer": "C",
    "explanation": "C₂H₄ + 3O₂ → 2CO₂ + 2H₂O. One volume of ethene requires three volumes of oxygen.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_18",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 18,
    "text": "A hydrocarbon decolourises bromine water without illumination and forms a dibromo compound by addition. Which feature most likely explains this behaviour?",
    "options": {
      "A": "It contains only carbon-carbon single bonds.",
      "B": "It contains a carbon-carbon double bond.",
      "C": "It contains a carboxyl group.",
      "D": "C. It contains a carboxyl group.\nD. It contains only aromatic carbon-carbon bonds."
    },
    "answer": "B",
    "explanation": "Bromine adds across an alkene's double bond, causing bromine water to lose its colour.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_19",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 19,
    "text": "What is the major product when propene reacts with hydrogen bromide under ordinary conditions, without peroxides?",
    "options": {
      "A": "1-bromopropane",
      "B": "2-bromopropane",
      "C": "1,2-dibromopropane",
      "D": "Propan-2-ol"
    },
    "answer": "B",
    "explanation": "Markovnikov addition places bromine on the more substituted carbon of the double bond.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_20",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 20,
    "text": "Which reagent can distinguish ethane from ethene under suitable conditions?",
    "options": {
      "A": "Sodium chloride solution",
      "B": "Bromine water",
      "C": "Dilute sodium hydroxide",
      "D": "Limewater"
    },
    "answer": "B",
    "explanation": "Ethene decolourises bromine water by addition; ethane does not under ordinary test conditions.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_21",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 21,
    "text": "Which equation represents the complete combustion of propane?",
    "options": {
      "A": "C₃H₈ + 3O₂ → 3CO₂ + 4H₂O",
      "B": "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
      "C": "C₃H₈ + 4O₂ → 3CO + 4H₂O",
      "D": "C₃H₈ + 2O₂ → 3C + 4H₂O"
    },
    "answer": "B",
    "explanation": "Balancing carbon gives 3CO₂, balancing hydrogen gives 4H₂O, and the products require five O₂ molecules.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_22",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 22,
    "text": "Which condition favours the dehydration of ethanol to ethene?",
    "options": {
      "A": "Aqueous sodium hydroxide at room temperature",
      "B": "Concentrated sulfuric acid at about 170°C",
      "C": "Dilute hydrochloric acid at 25°C",
      "D": "Bromine water at room temperature"
    },
    "answer": "B",
    "explanation": "Concentrated sulfuric acid and high temperature promote the elimination of water from ethanol.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_23",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 23,
    "text": "What is the expected product when ethyne reacts completely with excess bromine?",
    "options": {
      "A": "1,2-dibromoethane",
      "B": "1,1,2,2-tetrabromoethane",
      "C": "Bromoethane",
      "D": "Ethanol"
    },
    "answer": "B",
    "explanation": "Two molecules of bromine add across the triple bond when bromine is present in excess.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_24",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 24,
    "text": "What is the major organic product when propene reacts with steam in the presence of a suitable acid catalyst?",
    "options": {
      "A": "Propan-1-ol only",
      "B": "Propan-2-ol",
      "C": "Propanone",
      "D": "Propanoic acid"
    },
    "answer": "B",
    "explanation": "Acid-catalysed hydration of propene generally follows Markovnikov addition, placing the hydroxyl group on carbon 2.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_25",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 25,
    "text": "Which statement about cracking is correct?",
    "options": {
      "A": "It converts all hydrocarbons into carbon dioxide.",
      "B": "It breaks large hydrocarbon molecules into smaller molecules.",
      "C": "It converts every alkane into an alcohol.",
      "D": "It only occurs in aqueous solution at room temperature."
    },
    "answer": "B",
    "explanation": "Cracking uses heat, often with a catalyst, to break carbon-carbon bonds in larger hydrocarbons.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_26",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 26,
    "text": "Which compound gives a positive iodoform test?",
    "options": {
      "A": "Pentan-3-one",
      "B": "Propanone",
      "C": "Pentan-3-ol",
      "D": "Propanal"
    },
    "answer": "B",
    "explanation": "Propanone contains the CH₃CO– group and produces yellow triiodomethane with iodine in alkaline solution.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_27",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 27,
    "text": "Which reagent is commonly used to distinguish an aldehyde from a ketone?",
    "options": {
      "A": "Tollens' reagent",
      "B": "Sodium chloride solution",
      "C": "Dilute sodium hydroxide alone",
      "D": "Bromine water alone"
    },
    "answer": "A",
    "explanation": "Aldehydes generally reduce Tollens' reagent to produce a silver mirror, while ordinary ketones do not.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_28",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 28,
    "text": "What is observed when ethanal is warmed with Fehling's solution?",
    "options": {
      "A": "A blue solution turns green permanently without a precipitate.",
      "B": "A brick-red precipitate forms.",
      "C": "A white precipitate forms.",
      "D": "A silver mirror forms in the test tube."
    },
    "answer": "B",
    "explanation": "Ethanal reduces the copper(II) ions in Fehling's solution to copper(I) oxide.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_29",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 29,
    "text": "Which compound reacts with 2,4-dinitrophenylhydrazine to form an orange or yellow precipitate?",
    "options": {
      "A": "Ethane",
      "B": "Ethanol",
      "C": "Propanone",
      "D": "Ethanoic acid"
    },
    "answer": "C",
    "explanation": "2,4-DNPH reacts with the carbonyl group in aldehydes and ketones to form a hydrazone precipitate.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_30",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 30,
    "text": "What is the product when propanone is reduced with a suitable reducing agent?",
    "options": {
      "A": "Propanal",
      "B": "Propan-1-ol",
      "C": "Propan-2-ol",
      "D": "Propanoic acid"
    },
    "answer": "C",
    "explanation": "Reduction of the ketone carbonyl group converts propanone to a secondary alcohol.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_31",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 31,
    "text": "Which statement correctly describes the oxidation of ethanol under controlled conditions?",
    "options": {
      "A": "It first forms ethanal when oxidised gently and distilled.",
      "B": "It forms ethene directly with acidified dichromate.",
      "C": "It forms ethane when heated with oxygen.",
      "D": "B. It forms ethene directly with acidified dichromate.\nC. It forms ethane when heated with oxygen.\nD. It cannot be oxidised by any common laboratory oxidising agent."
    },
    "answer": "A",
    "explanation": "Ethanol can be partially oxidised to ethanal by distilling the product as it forms.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_32",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 32,
    "text": "Which product is formed when propan-2-ol is oxidised using acidified potassium dichromate?",
    "options": {
      "A": "Propanal",
      "B": "Propanone",
      "C": "Propanoic acid directly",
      "D": "Propene only"
    },
    "answer": "B",
    "explanation": "Oxidation of a secondary alcohol produces a ketone.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_33",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 33,
    "text": "Ethanol reacts with sodium metal to produce sodium ethoxide and",
    "options": {
      "A": "oxygen",
      "B": "hydrogen",
      "C": "carbon dioxide",
      "D": "methane"
    },
    "answer": "B",
    "explanation": "Sodium replaces the hydrogen in the hydroxyl group: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_34",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 34,
    "text": "Which observation best distinguishes phenol from ethanol?",
    "options": {
      "A": "Both react rapidly with sodium metal.",
      "B": "Phenol reacts with aqueous sodium hydroxide, whereas ethanol does not under ordinary conditions.",
      "C": "Ethanol turns neutral litmus red, whereas phenol turns it blue.",
      "D": "Neither compound contains oxygen."
    },
    "answer": "B",
    "explanation": "Phenol is sufficiently acidic to react with NaOH and form sodium phenoxide; ethanol is much less acidic.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_35",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 35,
    "text": "What is observed when phenol is added to bromine water?",
    "options": {
      "A": "A colourless gas is produced.",
      "B": "Bromine water is decolourised and a white precipitate forms.",
      "C": "A silver mirror forms.",
      "D": "B. Bromine water is decolourised and a white precipitate forms.\nC. A silver mirror forms.\nD. No reaction occurs under ordinary conditions."
    },
    "answer": "B",
    "explanation": "Phenol reacts readily with bromine water to produce 2,4,6-tribromophenol.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_36",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 36,
    "text": "Which condition favours the formation of ethoxyethane from ethanol?",
    "options": {
      "A": "Concentrated sulfuric acid at about 140°C",
      "B": "Concentrated sulfuric acid at about 170°C",
      "C": "Aqueous sodium hydroxide at 25°C",
      "D": "Bromine water under sunlight"
    },
    "answer": "A",
    "explanation": "Under suitable conditions around 140°C, intermolecular dehydration of ethanol can produce ethoxyethane.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_37",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 37,
    "text": "What is the product when ethanol reacts with ethanoic acid in the presence of concentrated sulfuric acid?",
    "options": {
      "A": "Ethyl ethanoate and water",
      "B": "Ethanal and hydrogen",
      "C": "Ethene and carbon dioxide",
      "D": "Ethyl ethoxide and oxygen"
    },
    "answer": "A",
    "explanation": "This is esterification, a reversible reaction between an alcohol and a carboxylic acid.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_38",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 38,
    "text": "What is the molecular formula of ethyl propanoate?",
    "options": {
      "A": "C₃H₆O₂",
      "B": "C₄H₈O₂",
      "C": "C₅H₁₀O₂",
      "D": "C₅H₁₂O"
    },
    "answer": "C",
    "explanation": "Ethyl propanoate contains five carbon atoms overall and has the molecular formula C₅H₁₀O₂.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_39",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 39,
    "text": "Which products are formed when ethyl ethanoate undergoes alkaline hydrolysis with aqueous sodium hydroxide?",
    "options": {
      "A": "Ethanol and sodium ethanoate",
      "B": "Ethanoic acid and ethene",
      "C": "Ethanal and sodium hydroxide",
      "D": "Ethane and sodium carbonate"
    },
    "answer": "A",
    "explanation": "Alkaline hydrolysis of an ester yields an alcohol and the salt of the carboxylic acid.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_40",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 40,
    "text": "Which statement about esterification is correct?",
    "options": {
      "A": "It always produces hydrogen gas.",
      "B": "It is generally reversible.",
      "C": "It produces an alkane and oxygen.",
      "D": "It requires no alcohol or carboxylic acid."
    },
    "answer": "B",
    "explanation": "An ester and water can react under acidic conditions to form the original alcohol and carboxylic acid.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_41",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 41,
    "text": "Which of the following is the functional group of a carboxylic acid?",
    "options": {
      "A": "–OH",
      "B": "–CHO",
      "C": "–COOH",
      "D": "–COO–"
    },
    "answer": "C",
    "explanation": "The carboxyl group contains a carbonyl group and a hydroxyl group attached to the same carbon.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_42",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 42,
    "text": "Which gas is released when ethanoic acid reacts with sodium carbonate?",
    "options": {
      "A": "Hydrogen",
      "B": "Oxygen",
      "C": "Carbon dioxide",
      "D": "Chlorine"
    },
    "answer": "C",
    "explanation": "Acids react with carbonates to produce a salt, water, and carbon dioxide.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_43",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 43,
    "text": "What is the coefficient of oxygen when the complete combustion equation for ethanol is balanced using the smallest whole-number coefficients?\nC₂H₅OH + O₂ → CO₂ + H₂O",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "C",
    "explanation": "The balanced equation is C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_44",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 44,
    "text": "A sample contains 0.05 mol of ethanoic acid and reacts completely with excess sodium hydrogencarbonate. What amount of carbon dioxide is produced?",
    "options": {
      "A": "0.025 mol",
      "B": "0.05 mol",
      "C": "0.10 mol",
      "D": "0.15 mol"
    },
    "answer": "B",
    "explanation": "One mole of ethanoic acid reacts with one mole of sodium hydrogencarbonate to produce one mole of CO₂.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_45",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 45,
    "text": "What volume of carbon dioxide is produced at STP when 0.05 mol of ethanoic acid reacts completely with excess sodium hydrogencarbonate? Use 22.4 dm³ mol⁻¹ as the molar gas volume.",
    "options": {
      "A": "0.56 dm³",
      "B": "1.12 dm³",
      "C": "2.24 dm³",
      "D": "5.60 dm³"
    },
    "answer": "B",
    "explanation": "CO₂ produced = 0.05 mol. Volume = 0.05 × 22.4 = 1.12 dm³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_46",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 46,
    "text": "Which acid is commonly used to prepare benzoate esters from benzyl alcohol under suitable esterification conditions?",
    "options": {
      "A": "Benzoic acid",
      "B": "Hydrochloric acid only",
      "C": "Carbonic acid",
      "D": "Hydrocyanic acid"
    },
    "answer": "A",
    "explanation": "Benzoic acid reacts with an alcohol under suitable acidic conditions to form a benzoate ester and water.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_47",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 47,
    "text": "Which statement best explains why lower carboxylic acids are soluble in water?",
    "options": {
      "A": "They form ionic bonds with every water molecule.",
      "B": "Their carboxyl groups form hydrogen bonds with water.",
      "C": "They contain no polar bonds.",
      "D": "They are completely non-polar."
    },
    "answer": "B",
    "explanation": "The polar carboxyl group interacts strongly with water through hydrogen bonding; solubility decreases as the hydrocarbon chain grows.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_48",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 48,
    "text": "Which statement about benzene is correct?",
    "options": {
      "A": "It contains three localised carbon-carbon double bonds that behave exactly like those in alkenes.",
      "B": "It has a delocalised pi-electron system.",
      "C": "It has the molecular formula C₆H₁₂.",
      "D": "It readily decolourises bromine water without a catalyst under ordinary conditions."
    },
    "answer": "B",
    "explanation": "Benzene's six pi electrons are delocalised around the ring, giving it unusual stability.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_49",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 49,
    "text": "Which reagents are used for nitration of benzene?",
    "options": {
      "A": "Dilute hydrochloric acid and zinc",
      "B": "Concentrated nitric acid and concentrated sulfuric acid",
      "C": "Sodium hydroxide and ethanol",
      "D": "Bromine water and sodium chloride"
    },
    "answer": "B",
    "explanation": "The acid mixture generates the nitronium ion, NO₂⁺, which attacks the benzene ring.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_50",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 50,
    "text": "What is the major organic product when benzene reacts with bromine in the presence of a suitable Lewis acid catalyst such as FeBr₃?",
    "options": {
      "A": "Bromocyclohexane",
      "B": "Bromobenzene",
      "C": "1,2-dibromobenzene as the only product",
      "D": "Phenol"
    },
    "answer": "B",
    "explanation": "Benzene undergoes electrophilic aromatic substitution, replacing one hydrogen atom with bromine.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_51",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 51,
    "text": "Why does benzene generally undergo substitution rather than addition in its typical reactions?",
    "options": {
      "A": "Benzene has no carbon atoms.",
      "B": "Substitution preserves the stable aromatic ring.",
      "C": "Addition always produces a metal.",
      "D": "Benzene contains only carbon-carbon single bonds."
    },
    "answer": "B",
    "explanation": "Addition would disrupt benzene's aromatic delocalisation, while substitution can retain it.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_52",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 52,
    "text": "Which product is formed when benzene is nitrated?",
    "options": {
      "A": "Nitrobenzene",
      "B": "Aniline",
      "C": "Benzoic acid",
      "D": "Cyclohexane"
    },
    "answer": "A",
    "explanation": "A nitro group, –NO₂, replaces one hydrogen atom on the benzene ring.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_53",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 53,
    "text": "Which compound is formed when nitrobenzene is reduced under suitable conditions?",
    "options": {
      "A": "Phenol",
      "B": "Aniline",
      "C": "Benzene",
      "D": "Benzoic acid"
    },
    "answer": "B",
    "explanation": "Reduction converts the nitro group, –NO₂, into an amino group, –NH₂.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_54",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 54,
    "text": "A side chain attached to a benzene ring contains a benzylic hydrogen. Strong oxidation with hot alkaline potassium permanganate followed by acidification generally converts the side chain to",
    "options": {
      "A": "benzoic acid",
      "B": "cyclohexane",
      "C": "phenol only",
      "D": "ethene"
    },
    "answer": "A",
    "explanation": "Under strong conditions, an alkyl side chain with at least one benzylic hydrogen can be oxidised to a carboxyl group attached to the ring.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_55",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 55,
    "text": "Which statement about benzene and cyclohexene is correct?",
    "options": {
      "A": "Both readily decolourise bromine water under the same ordinary conditions.",
      "B": "Cyclohexene readily undergoes addition with bromine, while benzene usually requires a catalyst for bromination.",
      "C": "Benzene is an alcohol, while cyclohexene is a ketone.",
      "D": "Both have the molecular formula C₆H₆."
    },
    "answer": "B",
    "explanation": "Cyclohexene has a reactive carbon-carbon double bond, whereas benzene's aromatic stability favours substitution.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_56",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 56,
    "text": "What is the main reason lower aliphatic amines behave as bases?",
    "options": {
      "A": "Nitrogen has a lone pair of electrons that can accept a proton.",
      "B": "They release hydroxide ions by complete dissociation in every solvent.",
      "C": "Their carbon atoms donate protons readily.",
      "D": "They contain a carboxyl group."
    },
    "answer": "A",
    "explanation": "The nitrogen lone pair enables an amine to accept H⁺.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_57",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 57,
    "text": "Which formula represents a primary amine?",
    "options": {
      "A": "RNH₂",
      "B": "R₂NH",
      "C": "R₃N",
      "D": "RCOOH"
    },
    "answer": "A",
    "explanation": "A primary amine has one organic group attached to nitrogen and two hydrogen atoms.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_58",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 58,
    "text": "Which compound is the correct name for CH₃CH₂NH₂?",
    "options": {
      "A": "Methanamine",
      "B": "Ethanamine",
      "C": "Propanamine",
      "D": "Ethanamide"
    },
    "answer": "B",
    "explanation": "The compound has two carbon atoms and an amino functional group.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_59",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 59,
    "text": "Which statement explains why aniline is generally a weaker base than ethylamine?",
    "options": {
      "A": "Aniline has no nitrogen lone pair.",
      "B": "The nitrogen lone pair in aniline can be delocalised into the benzene ring.",
      "C": "Ethylamine contains oxygen.",
      "D": "Aniline has no hydrogen atoms."
    },
    "answer": "B",
    "explanation": "Delocalisation makes the nitrogen lone pair less available to accept a proton.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_60",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 60,
    "text": "Which compound is an amide?",
    "options": {
      "A": "CH₃COOH",
      "B": "CH₃CONH₂",
      "C": "CH₃CHO",
      "D": "CH₃COOCH₃"
    },
    "answer": "B",
    "explanation": "An amide contains a carbonyl group directly attached to nitrogen.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_61",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 61,
    "text": "Which functional group is present in aldehydes?",
    "options": {
      "A": "–COOH",
      "B": "–CHO",
      "C": "–OH",
      "D": "–NH₂"
    },
    "answer": "B",
    "explanation": "An aldehyde contains a terminal carbonyl group bonded to at least one hydrogen.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_62",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 62,
    "text": "Which functional group is present in ketones?",
    "options": {
      "A": "A carbonyl group between two carbon-containing groups",
      "B": "A hydroxyl group bonded to an alkyl group only",
      "C": "A carboxyl group",
      "D": "An amino group"
    },
    "answer": "A",
    "explanation": "In a ketone, the carbonyl carbon is bonded to two carbon-containing groups.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_63",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 63,
    "text": "Which molecular formula can represent both an aldehyde and a ketone with three carbon atoms?",
    "options": {
      "A": "C₃H₈",
      "B": "C₃H₆O",
      "C": "C₃H₈O₂",
      "D": "C₃H₄"
    },
    "answer": "B",
    "explanation": "Propanal and propanone are functional group isomers with formula C₃H₆O.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_64",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 64,
    "text": "Which compound will not normally give a positive iodoform test?",
    "options": {
      "A": "Ethanol",
      "B": "Ethanal",
      "C": "Propanone",
      "D": "Pentan-3-one"
    },
    "answer": "D",
    "explanation": "Ethanol, ethanal, and propanone can give the test. Pentan-3-one lacks the required CH₃CO– group.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_65",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 65,
    "text": "Which compound gives a positive iodoform test because it contains the CH₃CH(OH)– group?",
    "options": {
      "A": "Propan-2-ol",
      "B": "Propan-1-ol",
      "C": "Pentan-1-ol",
      "D": "Methanol"
    },
    "answer": "A",
    "explanation": "Propan-2-ol is oxidised under the test conditions to propanone, which gives the yellow iodoform precipitate.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_66",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 66,
    "text": "Which compound is formed when ethanal is reduced?",
    "options": {
      "A": "Ethanoic acid",
      "B": "Ethanol",
      "C": "Ethene",
      "D": "Ethyne"
    },
    "answer": "B",
    "explanation": "Reduction converts the aldehyde carbonyl group to a primary alcohol.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_67",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 67,
    "text": "Which compound is formed when ethanal is oxidised completely under suitable conditions?",
    "options": {
      "A": "Ethanol",
      "B": "Ethene",
      "C": "Ethanoic acid",
      "D": "Ethyne"
    },
    "answer": "C",
    "explanation": "Oxidation of an aldehyde produces the corresponding carboxylic acid.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_68",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 68,
    "text": "What is the product when hydrogen cyanide adds to ethanal under suitable conditions?",
    "options": {
      "A": "2-hydroxypropanenitrile",
      "B": "Propanoic acid",
      "C": "Ethylamine",
      "D": "Ethene"
    },
    "answer": "A",
    "explanation": "Cyanide addition to ethanal produces CH₃CH(OH)CN, a hydroxynitrile with three carbon atoms.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_69",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 69,
    "text": "Which statement describes the usual reaction type of aldehydes and ketones with nucleophiles?",
    "options": {
      "A": "Electrophilic substitution",
      "B": "Nucleophilic addition",
      "C": "Free-radical substitution only",
      "D": "Condensation polymerisation only"
    },
    "answer": "B",
    "explanation": "The carbonyl carbon is electron-deficient and can be attacked by a nucleophile.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_70",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 70,
    "text": "Which compound is a secondary alcohol?",
    "options": {
      "A": "Ethanol",
      "B": "Propan-1-ol",
      "C": "Propan-2-ol",
      "D": "2-methylpropan-1-ol"
    },
    "answer": "C",
    "explanation": "The carbon bearing the hydroxyl group is attached to two other carbon atoms.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_71",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 71,
    "text": "Which product is formed when propan-1-ol is oxidised gently and the product is distilled off?",
    "options": {
      "A": "Propanal",
      "B": "Propanone",
      "C": "Propanoic acid only",
      "D": "Propene"
    },
    "answer": "A",
    "explanation": "Controlled oxidation of a primary alcohol initially produces an aldehyde.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_72",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 72,
    "text": "Which of the following is the best description of saponification?",
    "options": {
      "A": "Oxidation of an alkane to a ketone",
      "B": "Alkaline hydrolysis of fats or esters to produce salts of acids and alcohols",
      "C": "Addition of hydrogen to benzene only",
      "D": "Conversion of an alcohol to an alkene using concentrated acid"
    },
    "answer": "B",
    "explanation": "In soap manufacture, fats or oils react with alkali to yield glycerol and fatty acid salts.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_73",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 73,
    "text": "In the manufacture of soap from fats, the substance commonly used to provide the alkaline conditions is",
    "options": {
      "A": "sodium chloride",
      "B": "sodium hydroxide",
      "C": "copper(II) sulfate",
      "D": "dilute nitric acid"
    },
    "answer": "B",
    "explanation": "Sodium hydroxide hydrolyses fats and produces sodium salts of fatty acids, which are soaps.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_74",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 74,
    "text": "What is the main purpose of hydrogenating vegetable oils in margarine production?",
    "options": {
      "A": "To convert some carbon-carbon double bonds into single bonds",
      "B": "To convert all carbon atoms into carbon dioxide",
      "C": "To remove all oxygen atoms from the oil",
      "D": "To produce amino acids"
    },
    "answer": "A",
    "explanation": "Hydrogen adds across carbon-carbon double bonds, increasing saturation and generally making the oil more solid.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_75",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 75,
    "text": "Which organic compound is commonly used as a monomer to manufacture poly(ethene)?",
    "options": {
      "A": "Ethane",
      "B": "Ethene",
      "C": "Ethanol",
      "D": "Ethanoic acid"
    },
    "answer": "B",
    "explanation": "Ethene molecules undergo addition polymerisation to form poly(ethene).",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_76",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 76,
    "text": "What is the repeating unit of poly(ethene)?",
    "options": {
      "A": "–CH₂–CH₂–",
      "B": "–CH₃–CH₃–",
      "C": "–CH=CH–",
      "D": "–CO–NH–"
    },
    "answer": "A",
    "explanation": "The double bond in ethene opens during addition polymerisation, forming repeating –CH₂–CH₂– units.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_77",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 77,
    "text": "Which monomer is used to manufacture poly(chloroethene), also called PVC?",
    "options": {
      "A": "Chloroethane",
      "B": "Chloroethene",
      "C": "Ethanol",
      "D": "Ethyne"
    },
    "answer": "B",
    "explanation": "Chloroethene, CH₂=CHCl, undergoes addition polymerisation to form PVC.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_78",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 78,
    "text": "Which monomer is used to manufacture polystyrene?",
    "options": {
      "A": "Ethene",
      "B": "Propene",
      "C": "Phenylethene (styrene)",
      "D": "Tetrafluoroethene"
    },
    "answer": "C",
    "explanation": "Styrene has a vinyl group attached to a benzene ring and polymerises to form polystyrene.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_79",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 79,
    "text": "Which monomer is used to manufacture polytetrafluoroethene (PTFE)?",
    "options": {
      "A": "Tetrafluoroethene",
      "B": "Chloroethene",
      "C": "Ethyne",
      "D": "Propanone"
    },
    "answer": "A",
    "explanation": "Tetrafluoroethene, CF₂=CF₂, undergoes addition polymerisation to form PTFE.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_80",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 80,
    "text": "Which statement correctly distinguishes addition polymerisation from condensation polymerisation?",
    "options": {
      "A": "Addition polymerisation always releases water.",
      "B": "Condensation polymerisation often releases a small molecule such as water or hydrogen chloride.",
      "C": "Neither process joins monomers.",
      "D": "Condensation polymerisation occurs only with alkenes."
    },
    "answer": "B",
    "explanation": "Condensation polymerisation joins monomers with the elimination of a small molecule, while addition polymerisation generally does not release one.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_81",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 81,
    "text": "Which polymer is a naturally occurring polysaccharide?",
    "options": {
      "A": "PVC",
      "B": "Poly(ethene)",
      "C": "Cellulose",
      "D": "Polystyrene"
    },
    "answer": "C",
    "explanation": "Cellulose is a natural polymer made of glucose-derived repeating units.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_82",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 82,
    "text": "Which test is commonly used to identify starch?",
    "options": {
      "A": "Add iodine solution and look for a blue-black colour.",
      "B": "Add bromine water and look for a silver mirror.",
      "C": "Add Tollens' reagent and look for a green gas.",
      "D": "Add limewater and look for a white precipitate immediately."
    },
    "answer": "A",
    "explanation": "Iodine forms a characteristic blue-black complex with starch.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_83",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 83,
    "text": "Which statement about glucose is correct?",
    "options": {
      "A": "It is a non-reducing sugar.",
      "B": "It is a reducing sugar.",
      "C": "It contains no oxygen.",
      "D": "It is a synthetic polymer."
    },
    "answer": "B",
    "explanation": "Glucose can reduce suitable oxidising reagents, including Fehling's solution under the appropriate conditions.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_84",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 84,
    "text": "During alcoholic fermentation, glucose produces",
    "options": {
      "A": "ethanol and carbon dioxide",
      "B": "ethanoic acid and hydrogen only",
      "C": "methane and oxygen",
      "D": "propanone and nitrogen"
    },
    "answer": "A",
    "explanation": "The overall equation is C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_85",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 85,
    "text": "The theoretical mass of ethanol produced from 180 g of glucose by complete alcoholic fermentation is",
    "options": {
      "A": "23 g",
      "B": "46 g",
      "C": "92 g",
      "D": "180 g"
    },
    "answer": "C",
    "explanation": "One mole of glucose (180 g) theoretically yields two moles of ethanol. Two moles of ethanol weigh 2 × 46 = 92 g.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_86",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 86,
    "text": "Which compound is a constituent building block of proteins?",
    "options": {
      "A": "Amino acids",
      "B": "Alkanes",
      "C": "Esters only",
      "D": "Simple alkenes"
    },
    "answer": "A",
    "explanation": "Proteins are polymers made from amino acid residues linked by peptide bonds.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_87",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 87,
    "text": "Which functional group is present in amino acids?",
    "options": {
      "A": "Only an alkene group",
      "B": "Both amino and carboxyl groups",
      "C": "Only an ester group",
      "D": "Only an aldehyde group"
    },
    "answer": "B",
    "explanation": "Typical amino acids contain an amino group and a carboxyl group.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_88",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 88,
    "text": "The bond joining amino acid residues in proteins is called a",
    "options": {
      "A": "glycosidic bond",
      "B": "peptide bond",
      "C": "metallic bond",
      "D": "hydrogen bond only"
    },
    "answer": "B",
    "explanation": "A peptide bond is an amide linkage formed between the carboxyl group of one amino acid and the amino group of another.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_89",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 89,
    "text": "Which type of reaction joins two amino acids to form a dipeptide?",
    "options": {
      "A": "Addition reaction without bond formation",
      "B": "Condensation reaction",
      "C": "Free-radical substitution",
      "D": "Cracking"
    },
    "answer": "B",
    "explanation": "Peptide bond formation eliminates a molecule of water.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_90",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 90,
    "text": "Which compound contains both an ester group and an aromatic ring?",
    "options": {
      "A": "Ethyl benzoate",
      "B": "Ethane",
      "C": "Ethanol",
      "D": "Propanone"
    },
    "answer": "A",
    "explanation": "Ethyl benzoate contains the ester linkage –COO– and a benzene ring.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_91",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 91,
    "text": "Which technique is most suitable for separating coloured components of a small mixture of dyes?",
    "options": {
      "A": "Chromatography",
      "B": "Filtration only",
      "C": "Neutralisation",
      "D": "Saponification"
    },
    "answer": "A",
    "explanation": "Chromatography separates mixture components according to their different interactions with stationary and mobile phases.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_92",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 92,
    "text": "In paper chromatography, a substance has an Rf value of 0.60. If it travels 4.8 cm from the origin, how far did the solvent front travel?",
    "options": {
      "A": "2.88 cm",
      "B": "4.0 cm",
      "C": "8.0 cm",
      "D": "12.0 cm"
    },
    "answer": "C",
    "explanation": "Rf = distance travelled by substance/distance travelled by solvent front. Therefore, solvent distance = 4.8/0.60 = 8.0 cm.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_93",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 93,
    "text": "Which method is most suitable for separating a volatile organic liquid from a non-volatile dissolved impurity?",
    "options": {
      "A": "Simple distillation",
      "B": "Filtration alone",
      "C": "Magnetic separation",
      "D": "Decantation alone"
    },
    "answer": "A",
    "explanation": "The volatile liquid vaporises and can be condensed, while the non-volatile impurity remains behind.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_94",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 94,
    "text": "Which technique is most suitable for separating two miscible liquids with close boiling points?",
    "options": {
      "A": "Fractional distillation",
      "B": "Filtration",
      "C": "Separating funnel",
      "D": "Sublimation"
    },
    "answer": "A",
    "explanation": "A fractionating column allows repeated vaporisation and condensation, improving separation of liquids with similar boiling points.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_95",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 95,
    "text": "What is the principal purpose of recrystallisation when purifying a solid organic compound?",
    "options": {
      "A": "To convert it into a gas permanently",
      "B": "To separate impurities based on differences in solubility",
      "C": "To increase the molecular formula",
      "D": "To change every impurity into an alkane"
    },
    "answer": "B",
    "explanation": "The desired solid dissolves in a hot solvent and crystallises as the solution cools, leaving many impurities in the solution or removed by filtration.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_96",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 96,
    "text": "Which compound is expected to have the highest boiling point among the following?",
    "options": {
      "A": "Ethane",
      "B": "Ethanal",
      "C": "Ethanol",
      "D": "Methoxymethane"
    },
    "answer": "C",
    "explanation": "Ethanol molecules form intermolecular hydrogen bonds, which generally raise the boiling point compared with these alternatives.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_97",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 97,
    "text": "Why do boiling points generally increase along a homologous series of straight-chain alkanes?",
    "options": {
      "A": "The molecules become smaller.",
      "B": "London dispersion forces generally become stronger as molecular size increases.",
      "C": "The molecules become ionic.",
      "D": "The carbon atoms stop bonding covalently."
    },
    "answer": "B",
    "explanation": "Larger alkane molecules have more electrons and are generally more polarisable, increasing intermolecular attractions.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_98",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 98,
    "text": "Which of the following is the correct order of increasing boiling point for these compounds?",
    "options": {
      "A": "Butane < propanone < ethanol",
      "B": "Ethanol < butane < propanone",
      "C": "Propanone < butane < ethanol",
      "D": "Butane < ethanol < propanone"
    },
    "answer": "A",
    "explanation": "Butane has weak dispersion forces, propanone has dipole-dipole attractions, and ethanol forms hydrogen bonds.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_99",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 99,
    "text": "Which pair consists of functional group isomers?",
    "options": {
      "A": "Butane and 2-methylpropane",
      "B": "Propanal and propanone",
      "C": "Cis-but-2-ene and trans-but-2-ene",
      "D": "But-1-ene and but-2-ene"
    },
    "answer": "B",
    "explanation": "Both compounds have formula C₃H₆O, but propanal is an aldehyde and propanone is a ketone.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_organic_100",
    "originalChapter": 1,
    "chapterTitle": "Topic: Organic Chemistry",
    "topic": "Organic Chemistry",
    "bookQuestionNum": 100,
    "text": "An unknown organic compound decolourises bromine water, reacts with hydrogen to form an alkane, and has the molecular formula C₄H₈. Which class of compound best fits these observations?",
    "options": {
      "A": "Alkane",
      "B": "Alkene",
      "C": "Carboxylic acid",
      "D": "Ester"
    },
    "answer": "B",
    "explanation": "C₄H₈ fits the general formula of an acyclic alkene, and its carbon-carbon double bond can undergo addition with bromine and hydrogen.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_analytical_1",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative vs Quantitative Analysis",
    "bookQuestionNum": 101,
    "text": "Analytical chemistry is primarily concerned with",
    "options": {
      "A": "the manufacture of plastics only",
      "B": "identifying substances and determining their chemical composition",
      "C": "studying the movement of planets",
      "D": "determining the age of rocks only"
    },
    "answer": "B",
    "explanation": "Analytical chemistry involves qualitative analysis, which identifies substances, and quantitative analysis, which determines their amounts.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_analytical_2",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative vs Quantitative Analysis",
    "bookQuestionNum": 102,
    "text": "Which of the following best distinguishes qualitative analysis from quantitative analysis?",
    "options": {
      "A": "Qualitative analysis determines mass, while quantitative analysis determines colour.",
      "B": "Qualitative analysis identifies components, while quantitative analysis measures their quantities.",
      "C": "Both methods are concerned only with temperature.",
      "D": "Quantitative analysis is used only for gases."
    },
    "answer": "B",
    "explanation": "Qualitative analysis identifies what is present, while quantitative analysis determines how much is present.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "chem_analytical_3",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative vs Quantitative Analysis",
    "bookQuestionNum": 103,
    "text": "Which of the following is an example of qualitative analysis?",
    "options": {
      "A": "Determining the concentration of hydrochloric acid",
      "B": "Finding the percentage purity of sodium carbonate",
      "C": "Identifying the cation present in an unknown salt",
      "D": "Calculating the mass of a precipitate"
    },
    "answer": "C",
    "explanation": "Identifying an unknown ion without determining its amount is qualitative analysis.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "chem_analytical_4",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative vs Quantitative Analysis",
    "bookQuestionNum": 104,
    "text": "Which of the following is an example of quantitative analysis?",
    "options": {
      "A": "Identifying a gas by its colour",
      "B": "Determining the concentration of an acid by titration",
      "C": "Observing the colour of a precipitate",
      "D": "Testing a gas with a glowing splint"
    },
    "answer": "B",
    "explanation": "Titration measures the amount or concentration of a substance using a known reacting solution.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "chem_analytical_5",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Apparatus & Technique",
    "bookQuestionNum": 105,
    "text": "Which of the following is most suitable for measuring a fixed volume of 25.0 cm³ accurately?",
    "options": {
      "A": "Beaker",
      "B": "Measuring cylinder",
      "C": "Volumetric pipette",
      "D": "Conical flask"
    },
    "answer": "C",
    "explanation": "A volumetric pipette is calibrated to deliver a specified volume accurately.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "chem_analytical_6",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Apparatus & Technique",
    "bookQuestionNum": 106,
    "text": "Which apparatus is used to deliver variable volumes of a solution accurately during titration?",
    "options": {
      "A": "Burette",
      "B": "Beaker",
      "C": "Watch glass",
      "D": "Evaporating dish"
    },
    "answer": "A",
    "explanation": "A burette allows accurate delivery of different volumes of titrant.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "chem_analytical_7",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Apparatus & Technique",
    "bookQuestionNum": 107,
    "text": "The main purpose of a conical flask during titration is to",
    "options": {
      "A": "measure the exact volume of the titrant",
      "B": "contain the analyte while it is mixed with the titrant",
      "C": "determine the mass of the solution",
      "D": "heat the solution to boiling point"
    },
    "answer": "B",
    "explanation": "The conical shape allows the solution to be swirled without easily spilling.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "chem_analytical_8",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Apparatus & Technique",
    "bookQuestionNum": 108,
    "text": "Before filling a burette with an acid solution, the burette should be rinsed with",
    "options": {
      "A": "distilled water only",
      "B": "the acid solution to be used",
      "C": "sodium chloride solution",
      "D": "the indicator"
    },
    "answer": "B",
    "explanation": "Rinsing with the titrant prevents residual water from diluting the solution.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "chem_analytical_9",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Apparatus & Technique",
    "bookQuestionNum": 109,
    "text": "A pipette should be rinsed with the solution it will contain mainly to",
    "options": {
      "A": "increase its capacity",
      "B": "prevent dilution by residual water",
      "C": "change the colour of the solution",
      "D": "reduce atmospheric pressure"
    },
    "answer": "B",
    "explanation": "Residual water would alter the concentration of the solution being measured.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "chem_analytical_10",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Acid–Base Titration & Indicators",
    "bookQuestionNum": 110,
    "text": "The endpoint of an acid–base titration is detected by",
    "options": {
      "A": "measuring the mass of the flask",
      "B": "observing the indicator's colour change",
      "C": "measuring the temperature of the laboratory",
      "D": "observing the speed at which the liquid flows"
    },
    "answer": "B",
    "explanation": "An indicator changes colour over a particular pH range near the endpoint.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "chem_analytical_11",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Acid–Base Titration & Indicators",
    "bookQuestionNum": 111,
    "text": "The equivalence point in a titration is reached when",
    "options": {
      "A": "the solution becomes colourless",
      "B": "chemically equivalent amounts of the reacting substances have reacted",
      "C": "the burette becomes empty",
      "D": "the temperature reaches 100°C"
    },
    "answer": "B",
    "explanation": "At equivalence, the reactants have been mixed in the stoichiometric proportions required by the balanced equation.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "chem_analytical_12",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Acid–Base Titration & Indicators",
    "bookQuestionNum": 112,
    "text": "The endpoint of a titration is best described as",
    "options": {
      "A": "the point at which an indicator shows a visible colour change",
      "B": "the point at which the burette is filled",
      "C": "the point at which the solution freezes",
      "D": "the point at which all water evaporates"
    },
    "answer": "A",
    "explanation": "The endpoint is the experimentally observed indicator change and should be close to the equivalence point.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "chem_analytical_13",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Acid–Base Titration & Indicators",
    "bookQuestionNum": 113,
    "text": "Which statement about the endpoint and equivalence point is correct?",
    "options": {
      "A": "They must always occur at exactly the same volume.",
      "B": "The endpoint is observed experimentally, while the equivalence point is determined by reaction stoichiometry.",
      "C": "The equivalence point is determined only by the colour of the flask.",
      "D": "They are unrelated in every titration."
    },
    "answer": "B",
    "explanation": "A suitable indicator gives an endpoint close to the theoretical equivalence point.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "chem_analytical_14",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Acid–Base Titration & Indicators",
    "bookQuestionNum": 114,
    "text": "Which of the following is generally a suitable indicator for titrating a strong acid against a strong base?",
    "options": {
      "A": "Methyl orange only",
      "B": "Phenolphthalein only",
      "C": "Either methyl orange or phenolphthalein",
      "D": "Starch only"
    },
    "answer": "C",
    "explanation": "A strong acid–strong base titration has a steep pH change around the equivalence point, allowing either indicator to give a suitable endpoint.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "chem_analytical_15",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Acid–Base Titration & Indicators",
    "bookQuestionNum": 115,
    "text": "Which indicator is generally suitable for titrating a weak acid with a strong base?",
    "options": {
      "A": "Phenolphthalein",
      "B": "Methyl orange",
      "C": "Starch",
      "D": "Universal indicator only"
    },
    "answer": "A",
    "explanation": "The equivalence point is alkaline, so phenolphthalein is suitable.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "chem_analytical_16",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Acid–Base Titration & Indicators",
    "bookQuestionNum": 116,
    "text": "Which indicator is generally suitable for titrating a strong acid with a weak base?",
    "options": {
      "A": "Phenolphthalein",
      "B": "Methyl orange",
      "C": "Starch",
      "D": "Litmus only"
    },
    "answer": "B",
    "explanation": "The equivalence point is acidic, making methyl orange suitable.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "chem_analytical_17",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Acid–Base Titration & Indicators",
    "bookQuestionNum": 117,
    "text": "Methyl orange is",
    "options": {
      "A": "red in acidic solution and yellow in alkaline solution",
      "B": "yellow in acidic solution and blue in alkaline solution",
      "C": "colourless in acidic solution and pink in alkaline solution",
      "D": "blue in acidic solution and red in alkaline solution"
    },
    "answer": "A",
    "explanation": "Methyl orange changes from red in acidic conditions to yellow in alkaline conditions, passing through orange near its transition range.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "chem_analytical_18",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Acid–Base Titration & Indicators",
    "bookQuestionNum": 118,
    "text": "Phenolphthalein is",
    "options": {
      "A": "pink in acidic solution and red in neutral solution",
      "B": "colourless in acidic solution and pink in alkaline solution",
      "C": "yellow in acidic solution and blue in alkaline solution",
      "D": "red in both acidic and alkaline solutions"
    },
    "answer": "B",
    "explanation": "Phenolphthalein is colourless in acidic conditions and develops a pink colour in alkaline conditions.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "chem_analytical_19",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Iodometric Indicators & Starch Complex",
    "bookQuestionNum": 119,
    "text": "Which of the following indicators is most appropriate for an iodine–thiosulphate titration?",
    "options": {
      "A": "Starch",
      "B": "Phenolphthalein",
      "C": "Methyl orange",
      "D": "Litmus"
    },
    "answer": "A",
    "explanation": "Starch forms a deep blue complex with iodine and is used to detect the disappearance of iodine near the endpoint.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "chem_analytical_20",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Iodometric Indicators & Starch Complex",
    "bookQuestionNum": 120,
    "text": "Why is starch usually added near the endpoint in an iodine titration?",
    "options": {
      "A": "It increases the concentration of iodine.",
      "B": "It prevents the reaction from occurring.",
      "C": "It avoids formation of an excessively stable starch–iodine complex when iodine concentration is high.",
      "D": "It acts as the reducing agent."
    },
    "answer": "C",
    "explanation": "Adding starch when the iodine colour has become pale makes the endpoint sharper.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "chem_analytical_21",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Criteria of Purity & Melting Point",
    "bookQuestionNum": 121,
    "text": "A pure substance usually has",
    "options": {
      "A": "a fixed melting point at a given pressure",
      "B": "a very wide melting range",
      "C": "an unpredictable boiling point",
      "D": "a different chemical composition in every sample"
    },
    "answer": "A",
    "explanation": "A pure crystalline substance normally melts over a narrow temperature range.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "chem_analytical_22",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Criteria of Purity & Melting Point",
    "bookQuestionNum": 122,
    "text": "An impure solid generally",
    "options": {
      "A": "has a perfectly sharp melting point",
      "B": "melts over a range of temperatures, often below the pure substance's melting point",
      "C": "cannot melt",
      "D": "always boils at 100°C"
    },
    "answer": "B",
    "explanation": "Impurities commonly lower the melting point and broaden the melting range.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "chem_analytical_23",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Separation Techniques: Distillation & Sublimation",
    "bookQuestionNum": 123,
    "text": "Which technique is most suitable for separating an insoluble solid from a liquid?",
    "options": {
      "A": "Filtration",
      "B": "Fractional distillation",
      "C": "Chromatography",
      "D": "Sublimation"
    },
    "answer": "A",
    "explanation": "Filtration separates an insoluble solid from a liquid using a porous material.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "chem_analytical_24",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Separation Techniques: Distillation & Sublimation",
    "bookQuestionNum": 124,
    "text": "Which method is most suitable for obtaining salt from a salt solution?",
    "options": {
      "A": "Magnetic separation",
      "B": "Evaporation or crystallisation",
      "C": "Fractional distillation",
      "D": "Paper chromatography only"
    },
    "answer": "B",
    "explanation": "Removing some solvent and allowing the solution to crystallise produces solid salt.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "chem_analytical_25",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Separation Techniques: Distillation & Sublimation",
    "bookQuestionNum": 125,
    "text": "Which technique separates two miscible liquids with widely different boiling points?",
    "options": {
      "A": "Simple distillation",
      "B": "Filtration",
      "C": "Sublimation",
      "D": "Decantation"
    },
    "answer": "A",
    "explanation": "Simple distillation is suitable when the boiling points differ considerably and the mixture does not require close fractionation.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "chem_analytical_26",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Separation Techniques: Distillation & Sublimation",
    "bookQuestionNum": 126,
    "text": "Which apparatus is particularly important when separating two miscible liquids with close boiling points?",
    "options": {
      "A": "Separating funnel",
      "B": "Fractionating column",
      "C": "Filter paper",
      "D": "Evaporating dish"
    },
    "answer": "B",
    "explanation": "The column provides repeated vaporisation and condensation, improving separation.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "chem_analytical_27",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Separation Techniques: Distillation & Sublimation",
    "bookQuestionNum": 127,
    "text": "Which method is suitable for separating iodine from sand?",
    "options": {
      "A": "Filtration",
      "B": "Sublimation",
      "C": "Decantation",
      "D": "Separating funnel"
    },
    "answer": "B",
    "explanation": "Iodine sublimes on heating, while sand does not.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "chem_analytical_28",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Stationary & Mobile Phases",
    "bookQuestionNum": 128,
    "text": "Paper chromatography separates substances mainly because they",
    "options": {
      "A": "have different densities only",
      "B": "have different affinities for the stationary and mobile phases",
      "C": "have identical solubilities",
      "D": "have different magnetic properties"
    },
    "answer": "B",
    "explanation": "Components travel at different rates because of differences in their interactions with the two phases.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "chem_analytical_29",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Stationary & Mobile Phases",
    "bookQuestionNum": 129,
    "text": "In paper chromatography, the solvent is known as the",
    "options": {
      "A": "stationary phase",
      "B": "mobile phase",
      "C": "precipitate",
      "D": "residue"
    },
    "answer": "B",
    "explanation": "The solvent moves along the paper and carries the dissolved components.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "chem_analytical_30",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Stationary & Mobile Phases",
    "bookQuestionNum": 130,
    "text": "In paper chromatography, the paper serves mainly as the",
    "options": {
      "A": "mobile phase",
      "B": "stationary phase",
      "C": "titrant",
      "D": "indicator"
    },
    "answer": "B",
    "explanation": "The paper provides the surface on which components interact as the solvent moves.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "chem_analytical_31",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Primary Standards & Standard Solutions",
    "bookQuestionNum": 131,
    "text": "Which substance is commonly used as a primary standard in acid–base titration?",
    "options": {
      "A": "Sodium hydroxide",
      "B": "Sodium carbonate",
      "C": "Concentrated hydrochloric acid",
      "D": "Ammonia solution"
    },
    "answer": "B",
    "explanation": "Anhydrous sodium carbonate can be obtained in a sufficiently pure and stable form for preparing standard solutions.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "chem_analytical_32",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Primary Standards & Standard Solutions",
    "bookQuestionNum": 132,
    "text": "Which property makes a substance suitable as a primary standard?",
    "options": {
      "A": "It absorbs moisture rapidly from air.",
      "B": "It has uncertain composition.",
      "C": "It is highly pure and chemically stable.",
      "D": "It reacts with carbon dioxide in air continuously."
    },
    "answer": "C",
    "explanation": "A primary standard should have known composition, high purity and sufficient stability.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "chem_analytical_33",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Primary Standards & Standard Solutions",
    "bookQuestionNum": 133,
    "text": "Why is sodium hydroxide not usually used as a primary standard?",
    "options": {
      "A": "It is insoluble in water.",
      "B": "It absorbs moisture and carbon dioxide from the atmosphere.",
      "C": "It does not react with acids.",
      "D": "It has no molar mass."
    },
    "answer": "B",
    "explanation": "Hygroscopic behaviour and reaction with atmospheric carbon dioxide make its mass unreliable for preparing an accurate standard solution directly.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "chem_analytical_34",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Primary Standards & Standard Solutions",
    "bookQuestionNum": 134,
    "text": "A standard solution is one whose",
    "options": {
      "A": "colour is known",
      "B": "concentration is accurately known",
      "C": "temperature is always 100°C",
      "D": "volume is unlimited"
    },
    "answer": "B",
    "explanation": "A standard solution has a known concentration and is used in quantitative analysis.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "chem_analytical_35",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Primary Standards & Standard Solutions",
    "bookQuestionNum": 135,
    "text": "What is the first step when preparing a standard solution from a solid primary standard?",
    "options": {
      "A": "Add an unknown quantity of water.",
      "B": "Accurately weigh the required mass of the solid.",
      "C": "Heat the solution to boiling immediately.",
      "D": "Pour the solid into a burette."
    },
    "answer": "B",
    "explanation": "Accurate weighing is necessary to calculate the number of moles and hence the solution concentration.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "chem_analytical_36",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Primary Standards & Standard Solutions",
    "bookQuestionNum": 136,
    "text": "A solution is prepared by dissolving a known mass of solute in a suitable solvent and making the volume up to a calibration mark. This is best done using a",
    "options": {
      "A": "conical flask",
      "B": "volumetric flask",
      "C": "beaker",
      "D": "watch glass"
    },
    "answer": "B",
    "explanation": "A volumetric flask is designed to contain an accurately specified final volume.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "chem_analytical_37",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Molarity & Moles Calculations",
    "bookQuestionNum": 137,
    "text": "How many moles are present in 500 cm³ of a 0.20 mol/dm³ solution?",
    "options": {
      "A": "0.01 mol",
      "B": "0.05 mol",
      "C": "0.10 mol",
      "D": "1.00 mol"
    },
    "answer": "C",
    "explanation": "Volume = 0.500 dm³. Moles = CV = 0.20 × 0.500 = 0.10 mol.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "chem_analytical_38",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Molarity & Moles Calculations",
    "bookQuestionNum": 138,
    "text": "Calculate the molarity of a solution containing 0.25 mol of solute in 500 cm³ of solution.",
    "options": {
      "A": "0.25 mol/dm³",
      "B": "0.50 mol/dm³",
      "C": "1.00 mol/dm³",
      "D": "2.00 mol/dm³"
    },
    "answer": "B",
    "explanation": "500 cm³ = 0.5 dm³. Concentration = 0.25/0.5 = 0.50 mol/dm³.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "chem_analytical_39",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Molarity & Moles Calculations",
    "bookQuestionNum": 139,
    "text": "Calculate the number of moles in 250 cm³ of a 0.40 mol/dm³ solution.",
    "options": {
      "A": "0.01 mol",
      "B": "0.05 mol",
      "C": "0.10 mol",
      "D": "0.40 mol"
    },
    "answer": "C",
    "explanation": "Moles = 0.40 × 0.250 = 0.10 mol.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "chem_analytical_40",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Molarity & Moles Calculations",
    "bookQuestionNum": 140,
    "text": "What mass of sodium hydroxide is required to prepare 500 cm³ of a 0.20 mol/dm³ solution? (Na = 23, O = 16, H = 1)",
    "options": {
      "A": "2.0 g",
      "B": "4.0 g",
      "C": "8.0 g",
      "D": "10.0 g"
    },
    "answer": "B",
    "explanation": "Molar mass of NaOH = 40 g/mol. Moles = 0.20 × 0.5 = 0.10 mol. Mass = 0.10 × 40 = 4.0 g.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "chem_analytical_41",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 141,
    "text": "What mass of anhydrous sodium carbonate is required to prepare 250 cm³ of a 0.10 mol/dm³ solution? (Na = 23, C = 12, O = 16)",
    "options": {
      "A": "1.06 g",
      "B": "2.65 g",
      "C": "5.30 g",
      "D": "10.60 g"
    },
    "answer": "B",
    "explanation": "0.025 × 106 = 2.65 g.",
    "page": 21,
    "hasImage": false
  },
  {
    "id": "chem_analytical_42",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 142,
    "text": "A 25.0 cm³ sample of hydrochloric acid is neutralised by 20.0 cm³ of 0.10 mol/dm³ sodium hydroxide. Calculate the acid concentration.\n\nHCl + NaOH → NaCl + H₂O",
    "options": {
      "A": "0.040 mol/dm³",
      "B": "0.080 mol/dm³",
      "C": "0.125 mol/dm³",
      "D": "0.200 mol/dm³"
    },
    "answer": "B",
    "explanation": "0.002 mol ÷ 0.025 dm³ = 0.080 mol/dm³.",
    "page": 21,
    "hasImage": false
  },
  {
    "id": "chem_analytical_43",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 143,
    "text": "25.0 cm³ of 0.10 mol/dm³ sulphuric acid is completely neutralised by 20.0 cm³ of sodium hydroxide. Calculate the concentration of the sodium hydroxide.\n\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O",
    "options": {
      "A": "0.125 mol/dm³",
      "B": "0.200 mol/dm³",
      "C": "0.250 mol/dm³",
      "D": "0.500 mol/dm³"
    },
    "answer": "C",
    "explanation": "Moles of H₂SO₄ = 0.10 × 0.025 = 0.0025 mol. Moles of NaOH = 2 × 0.0025 = 0.005 mol. Concentration = 0.005/0.020 = 0.250 mol/dm³.",
    "page": 22,
    "hasImage": false
  },
  {
    "id": "chem_analytical_44",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 144,
    "text": "A 20.0 cm³ sample of 0.10 mol/dm³ sodium carbonate requires 40.0 cm³ of hydrochloric acid for complete reaction. Calculate the acid concentration.\n\nNa₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
    "options": {
      "A": "0.025 mol/dm³",
      "B": "0.050 mol/dm³",
      "C": "0.100 mol/dm³",
      "D": "0.200 mol/dm³"
    },
    "answer": "C",
    "explanation": "0.004 ÷ 0.040 = 0.100 mol/dm³.",
    "page": 22,
    "hasImage": false
  },
  {
    "id": "chem_analytical_45",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 145,
    "text": "25.0 cm³ of 0.20 mol/dm³ hydrochloric acid neutralises 25.0 cm³ of sodium hydroxide. What is the concentration of the sodium hydroxide?",
    "options": {
      "A": "0.05 mol/dm³",
      "B": "0.10 mol/dm³",
      "C": "0.20 mol/dm³",
      "D": "0.40 mol/dm³"
    },
    "answer": "C",
    "explanation": "The reaction ratio is 1:1 and the volumes are equal, so the concentrations are equal.",
    "page": 23,
    "hasImage": false
  },
  {
    "id": "chem_analytical_46",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 146,
    "text": "A 25.0 cm³ sample of 0.10 mol/dm³ calcium hydroxide is neutralised by hydrochloric acid. If 50.0 cm³ of the acid is required, calculate its concentration.\n\nCa(OH)₂ + 2HCl → CaCl₂ + 2H₂O",
    "options": {
      "A": "0.025 mol/dm³",
      "B": "0.050 mol/dm³",
      "C": "0.100 mol/dm³",
      "D": "0.200 mol/dm³"
    },
    "answer": "C",
    "explanation": "Moles of Ca(OH)₂ = 0.10 × 0.025 = 0.0025 mol. HCl required = 0.005 mol. Concentration = 0.005/0.050 = 0.10 mol/dm³.",
    "page": 23,
    "hasImage": false
  },
  {
    "id": "chem_analytical_47",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 147,
    "text": "What volume of 0.20 mol/dm³ NaOH is required to neutralise 25.0 cm³ of 0.10 mol/dm³ HCl?",
    "options": {
      "A": "6.25 cm³",
      "B": "12.5 cm³",
      "C": "25.0 cm³",
      "D": "50.0 cm³"
    },
    "answer": "B",
    "explanation": "The reaction ratio is 1:1. V = 0.10 × 25.0/0.20 = 12.5 cm³.",
    "page": 24,
    "hasImage": false
  },
  {
    "id": "chem_analytical_48",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 148,
    "text": "What volume of 0.10 mol/dm³ NaOH is required to neutralise 20.0 cm³ of 0.25 mol/dm³ H₂SO₄?",
    "options": {
      "A": "10 cm³",
      "B": "20 cm³",
      "C": "50 cm³",
      "D": "100 cm³"
    },
    "answer": "C",
    "explanation": "Moles of H₂SO₄ = 0.25 × 0.020 = 0.005 mol. NaOH required = 0.010 mol. Volume = 0.010/0.10 = 0.100 dm³ = 100 cm³.",
    "page": 24,
    "hasImage": false
  },
  {
    "id": "chem_analytical_49",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 149,
    "text": "A 25.0 cm³ solution of Na₂CO₃ is titrated against 0.10 mol/dm³ HCl. If the titre is 30.0 cm³, calculate the concentration of Na₂CO₃.\n\nNa₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
    "options": {
      "A": "0.030 mol/dm³",
      "B": "0.060 mol/dm³",
      "C": "0.120 mol/dm³",
      "D": "0.240 mol/dm³"
    },
    "answer": "B",
    "explanation": "HCl moles = 0.10 × 0.030 = 0.003 mol. Na₂CO₃ moles = 0.003/2 = 0.0015 mol. Concentration = 0.0015/0.025 = 0.060 mol/dm³.",
    "page": 25,
    "hasImage": false
  },
  {
    "id": "chem_analytical_50",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 150,
    "text": "A 25.0 cm³ sample of H₂SO₄ is neutralised by 25.0 cm³ of 0.20 mol/dm³ NaOH. Calculate the concentration of the acid.\n\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O",
    "options": {
      "A": "0.05 mol/dm³",
      "B": "0.10 mol/dm³",
      "C": "0.20 mol/dm³",
      "D": "0.40 mol/dm³"
    },
    "answer": "B",
    "explanation": "NaOH moles = 0.20 × 0.025 = 0.005 mol. H₂SO₄ moles = 0.005/2 = 0.0025 mol. Acid concentration = 0.0025/0.025 = 0.10 mol/dm³.",
    "page": 25,
    "hasImage": false
  },
  {
    "id": "chem_analytical_51",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Volumetric Neutralisation Calculations",
    "bookQuestionNum": 151,
    "text": "A 20.0 cm³ sample of NaOH is neutralised by 25.0 cm³ of 0.16 mol/dm³ HCl. Calculate the concentration of NaOH.",
    "options": {
      "A": "0.08 mol/dm³",
      "B": "0.10 mol/dm³",
      "C": "0.16 mol/dm³",
      "D": "0.20 mol/dm³"
    },
    "answer": "D",
    "explanation": "0.004 ÷ 0.020 = 0.20 mol/dm³.",
    "page": 26,
    "hasImage": false
  },
  {
    "id": "chem_analytical_52",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Mass, Moles & Molar Concentration",
    "bookQuestionNum": 152,
    "text": "How many moles of HCl are present in 250 cm³ of 0.20 mol/dm³ hydrochloric acid?",
    "options": {
      "A": "0.025 mol",
      "B": "0.050 mol",
      "C": "0.100 mol",
      "D": "0.500 mol"
    },
    "answer": "B",
    "explanation": "Moles = 0.20 × 0.250 = 0.050 mol.",
    "page": 26,
    "hasImage": false
  },
  {
    "id": "chem_analytical_53",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Mass, Moles & Molar Concentration",
    "bookQuestionNum": 153,
    "text": "What mass of Na₂CO₃ is required to prepare 250 cm³ of 0.20 mol/dm³ solution? (Na₂CO₃ = 106 g/mol)",
    "options": {
      "A": "2.65 g",
      "B": "5.30 g",
      "C": "10.60 g",
      "D": "21.20 g"
    },
    "answer": "B",
    "explanation": "Moles = 0.20 × 0.25 = 0.05 mol. Mass = 0.05 × 106 = 5.30 g.",
    "page": 27,
    "hasImage": false
  },
  {
    "id": "chem_analytical_54",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Mass, Moles & Molar Concentration",
    "bookQuestionNum": 154,
    "text": "A 2.65 g sample of Na₂CO₃ is dissolved to make 250 cm³ of solution. Calculate its molar concentration. (Molar mass = 106 g/mol)",
    "options": {
      "A": "0.05 mol/dm³",
      "B": "0.10 mol/dm³",
      "C": "0.20 mol/dm³",
      "D": "0.40 mol/dm³"
    },
    "answer": "B",
    "explanation": "Moles = 2.65/106 = 0.025 mol. Concentration = 0.025/0.25 = 0.10 mol/dm³.",
    "page": 27,
    "hasImage": false
  },
  {
    "id": "chem_analytical_55",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Dilution Calculations: C₁V₁ = C₂V₂",
    "bookQuestionNum": 155,
    "text": "A 25.0 cm³ sample of 0.20 mol/dm³ solution is diluted to 100 cm³. What is the new concentration?",
    "options": {
      "A": "0.025 mol/dm³",
      "B": "0.050 mol/dm³",
      "C": "0.100 mol/dm³",
      "D": "0.800 mol/dm³"
    },
    "answer": "B",
    "explanation": "C₁V₁ = C₂V₂. C₂ = (0.20 × 25)/100 = 0.050 mol/dm³.",
    "page": 28,
    "hasImage": false
  },
  {
    "id": "chem_analytical_56",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Dilution Calculations: C₁V₁ = C₂V₂",
    "bookQuestionNum": 156,
    "text": "50 cm³ of 1.0 mol/dm³ solution is diluted to 500 cm³. Calculate the final concentration.",
    "options": {
      "A": "0.01 mol/dm³",
      "B": "0.10 mol/dm³",
      "C": "0.50 mol/dm³",
      "D": "10 mol/dm³"
    },
    "answer": "B",
    "explanation": "C₂ = C₁V₁/V₂ = 1.0 × 50/500 = 0.10 mol/dm³.",
    "page": 28,
    "hasImage": false
  },
  {
    "id": "chem_analytical_57",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Dilution Calculations: C₁V₁ = C₂V₂",
    "bookQuestionNum": 157,
    "text": "A solution contains 0.5 mol of solute in 2 dm³. What is its concentration?",
    "options": {
      "A": "0.10 mol/dm³",
      "B": "0.25 mol/dm³",
      "C": "1.0 mol/dm³",
      "D": "4.0 mol/dm³"
    },
    "answer": "B",
    "explanation": "Concentration = moles/volume = 0.5/2 = 0.25 mol/dm³.",
    "page": 29,
    "hasImage": false
  },
  {
    "id": "chem_analytical_58",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Dilution Calculations: C₁V₁ = C₂V₂",
    "bookQuestionNum": 158,
    "text": "A 0.50 mol/dm³ solution contains how many moles in 40 cm³?",
    "options": {
      "A": "0.002 mol",
      "B": "0.020 mol",
      "C": "0.200 mol",
      "D": "20.0 mol"
    },
    "answer": "B",
    "explanation": "Moles = 0.50 × 0.040 = 0.020 mol.",
    "page": 29,
    "hasImage": false
  },
  {
    "id": "chem_analytical_59",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Hydrated Salts & Molar Mass",
    "bookQuestionNum": 159,
    "text": "What is the molar mass of hydrated copper(II) sulphate, CuSO₄·5H₂O? (Cu = 64, S = 32, O = 16, H = 1)",
    "options": {
      "A": "160 g/mol",
      "B": "180 g/mol",
      "C": "220 g/mol",
      "D": "250 g/mol"
    },
    "answer": "D",
    "explanation": "CuSO₄ = 160 g/mol; 5H₂O = 90 g/mol. Total = 250 g/mol.",
    "page": 30,
    "hasImage": false
  },
  {
    "id": "chem_analytical_60",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Hydrated Salts & Molar Mass",
    "bookQuestionNum": 160,
    "text": "What mass of CuSO₄·5H₂O is needed to prepare 100 cm³ of 0.10 mol/dm³ solution?",
    "options": {
      "A": "1.6 g",
      "B": "2.5 g",
      "C": "16 g",
      "D": "25 g"
    },
    "answer": "B",
    "explanation": "Moles = 0.10 × 0.10 = 0.010 mol. Mass = 0.010 × 250 = 2.5 g.",
    "page": 30,
    "hasImage": false
  },
  {
    "id": "chem_analytical_61",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Titration Precision, Meniscus & Parallax Errors",
    "bookQuestionNum": 161,
    "text": "Which of the following is the correct way to read a burette containing a clear solution?",
    "options": {
      "A": "Read the top of the meniscus from above.",
      "B": "Read the bottom of the meniscus at eye level.",
      "C": "Read the side of the liquid from below.",
      "D": "Estimate the reading without using the scale."
    },
    "answer": "B",
    "explanation": "This reduces parallax error when reading a colourless solution.",
    "page": 31,
    "hasImage": false
  },
  {
    "id": "chem_analytical_62",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Titration Precision, Meniscus & Parallax Errors",
    "bookQuestionNum": 162,
    "text": "A burette reading changes from 0.20 cm³ to 24.60 cm³. What volume of solution was delivered?",
    "options": {
      "A": "24.40 cm³",
      "B": "24.60 cm³",
      "C": "24.80 cm³",
      "D": "24.00 cm³"
    },
    "answer": "A",
    "explanation": "Titre = final reading − initial reading = 24.60 − 0.20 = 24.40 cm³.",
    "page": 31,
    "hasImage": false
  },
  {
    "id": "chem_analytical_63",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Titration Precision, Meniscus & Parallax Errors",
    "bookQuestionNum": 163,
    "text": "A student obtains titres of 24.50 cm³, 24.60 cm³ and 24.55 cm³. Calculate the mean titre.",
    "options": {
      "A": "24.50 cm³",
      "B": "24.55 cm³",
      "C": "24.60 cm³",
      "D": "24.65 cm³"
    },
    "answer": "B",
    "explanation": "Mean = (24.50 + 24.60 + 24.55)/3 = 24.55 cm³.",
    "page": 32,
    "hasImage": false
  },
  {
    "id": "chem_analytical_64",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Titration Precision, Meniscus & Parallax Errors",
    "bookQuestionNum": 164,
    "text": "Which set of titres is the most concordant?",
    "options": {
      "A": "20.00, 22.00, 24.00 cm³",
      "B": "24.10, 24.15, 24.12 cm³",
      "C": "20.10, 23.50, 25.00 cm³",
      "D": "21.00, 23.00, 26.00 cm³"
    },
    "answer": "B",
    "explanation": "Concordant titres are close to one another, indicating good repeatability.",
    "page": 32,
    "hasImage": false
  },
  {
    "id": "chem_analytical_65",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Titration Precision, Meniscus & Parallax Errors",
    "bookQuestionNum": 165,
    "text": "Why is a rough titration initially performed?",
    "options": {
      "A": "To obtain an approximate endpoint volume",
      "B": "To determine the exact molar mass of the acid",
      "C": "To replace all subsequent titrations",
      "D": "To measure the density of the solution"
    },
    "answer": "A",
    "explanation": "The rough titre guides the addition of titrant in subsequent accurate runs.",
    "page": 33,
    "hasImage": false
  },
  {
    "id": "chem_analytical_66",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Titration Precision, Meniscus & Parallax Errors",
    "bookQuestionNum": 166,
    "text": "During titration, the conical flask should be",
    "options": {
      "A": "shaken violently until its contents spill",
      "B": "gently swirled to mix the reacting solutions",
      "C": "left completely untouched",
      "D": "heated continuously to boiling"
    },
    "answer": "B",
    "explanation": "Swirling ensures proper mixing and helps the indicator respond uniformly.",
    "page": 33,
    "hasImage": false
  },
  {
    "id": "chem_analytical_67",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Titration Precision, Meniscus & Parallax Errors",
    "bookQuestionNum": 167,
    "text": "Why should the funnel be removed from the top of the burette before taking readings?",
    "options": {
      "A": "It makes the acid more concentrated.",
      "B": "Drops remaining in the funnel could fall into the burette and alter the reading.",
      "C": "It changes the colour of the indicator.",
      "D": "It prevents the solution from reacting."
    },
    "answer": "B",
    "explanation": "The funnel could introduce extra liquid after the initial reading has been taken.",
    "page": 34,
    "hasImage": false
  },
  {
    "id": "chem_analytical_68",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Titration Precision, Meniscus & Parallax Errors",
    "bookQuestionNum": 168,
    "text": "A student allows an air bubble to remain in the burette tip. What is the likely effect on the measured titre?",
    "options": {
      "A": "The recorded titre may be greater than the volume delivered into the flask.",
      "B": "The titre is always zero.",
      "C": "The solution's molarity doubles.",
      "D": "The endpoint cannot occur."
    },
    "answer": "A",
    "explanation": "Some of the apparent volume change is used to fill the tip rather than entering the conical flask.",
    "page": 34,
    "hasImage": false
  },
  {
    "id": "chem_analytical_69",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Titration Precision, Meniscus & Parallax Errors",
    "bookQuestionNum": 169,
    "text": "Why should a pipette not be blown out when it is designed to deliver its stated volume by gravity?",
    "options": {
      "A": "The remaining liquid is accounted for in its calibration.",
      "B": "It will increase the concentration of the analyte.",
      "C": "It will destroy the solution's chemical formula.",
      "D": "It will convert the pipette into a burette."
    },
    "answer": "A",
    "explanation": "A correctly calibrated delivery pipette is designed to leave a small amount of liquid in its tip.",
    "page": 35,
    "hasImage": false
  },
  {
    "id": "chem_analytical_70",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Titration Precision, Meniscus & Parallax Errors",
    "bookQuestionNum": 170,
    "text": "Which practice is most likely to improve the accuracy of a titration?",
    "options": {
      "A": "Adding titrant rapidly near the endpoint",
      "B": "Using a suitable indicator and adding titrant dropwise near the endpoint",
      "C": "Reading the burette from an angle",
      "D": "Reusing an unwashed pipette without rinsing"
    },
    "answer": "B",
    "explanation": "Slow addition near the endpoint reduces the risk of overshooting the colour change.",
    "page": 35,
    "hasImage": false
  },
  {
    "id": "chem_analytical_71",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Neutralisation Stoichiometry & Ionic Equations",
    "bookQuestionNum": 171,
    "text": "What is the molar mass of H₂SO₄? (H = 1, S = 32, O = 16)",
    "options": {
      "A": "49 g/mol",
      "B": "96 g/mol",
      "C": "98 g/mol",
      "D": "100 g/mol"
    },
    "answer": "C",
    "explanation": "2(1) + 32 + 4(16) = 98 g/mol.",
    "page": 36,
    "hasImage": false
  },
  {
    "id": "chem_analytical_72",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Neutralisation Stoichiometry & Ionic Equations",
    "bookQuestionNum": 172,
    "text": "What mass of pure H₂SO₄ is present in 250 cm³ of a 0.20 mol/dm³ solution?",
    "options": {
      "A": "2.45 g",
      "B": "4.90 g",
      "C": "9.80 g",
      "D": "19.60 g"
    },
    "answer": "B",
    "explanation": "Moles = 0.20 × 0.25 = 0.05 mol. Mass = 0.05 × 98 = 4.90 g.",
    "page": 36,
    "hasImage": false
  },
  {
    "id": "chem_analytical_73",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Neutralisation Stoichiometry & Ionic Equations",
    "bookQuestionNum": 173,
    "text": "A 25.0 cm³ sample of NaOH requires 20.0 cm³ of 0.15 mol/dm³ H₂SO₄ for neutralisation. Calculate the NaOH concentration.\n\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O",
    "options": {
      "A": "0.12 mol/dm³",
      "B": "0.20 mol/dm³",
      "C": "0.24 mol/dm³",
      "D": "0.30 mol/dm³"
    },
    "answer": "C",
    "explanation": "Acid moles = 0.15 × 0.020 = 0.003 mol. NaOH moles = 0.006 mol. Concentration = 0.006/0.025 = 0.24 mol/dm³.",
    "page": 37,
    "hasImage": false
  },
  {
    "id": "chem_analytical_74",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Neutralisation Stoichiometry & Ionic Equations",
    "bookQuestionNum": 174,
    "text": "A 25.0 cm³ sample of HCl requires 30.0 cm³ of 0.10 mol/dm³ NaOH for complete neutralisation. Calculate the concentration of HCl.",
    "options": {
      "A": "0.060 mol/dm³",
      "B": "0.080 mol/dm³",
      "C": "0.100 mol/dm³",
      "D": "0.120 mol/dm³"
    },
    "answer": "D",
    "explanation": "NaOH moles = 0.10 × 0.030 = 0.003 mol. HCl moles = 0.003 mol. HCl concentration = 0.003/0.025 = 0.12 mol/dm³.",
    "page": 37,
    "hasImage": false
  },
  {
    "id": "chem_analytical_75",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Neutralisation Stoichiometry & Ionic Equations",
    "bookQuestionNum": 175,
    "text": "A 20.0 cm³ sample of 0.20 mol/dm³ NaOH is neutralised by H₂SO₄. What volume of 0.10 mol/dm³ H₂SO₄ is needed?",
    "options": {
      "A": "10 cm³",
      "B": "20 cm³",
      "C": "30 cm³",
      "D": "40 cm³"
    },
    "answer": "B",
    "explanation": "NaOH moles = 0.20 × 0.020 = 0.004 mol. H₂SO₄ moles required = 0.004/2 = 0.002 mol. Volume = 0.002/0.10 = 0.020 dm³ = 20 cm³.",
    "page": 38,
    "hasImage": false
  },
  {
    "id": "chem_analytical_76",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Neutralisation Stoichiometry & Ionic Equations",
    "bookQuestionNum": 176,
    "text": "Which salt is formed when hydrochloric acid reacts with sodium hydroxide?",
    "options": {
      "A": "Sodium sulphate",
      "B": "Sodium chloride",
      "C": "Sodium nitrate",
      "D": "Sodium carbonate"
    },
    "answer": "B",
    "explanation": "HCl + NaOH → NaCl + H₂O.",
    "page": 38,
    "hasImage": false
  },
  {
    "id": "chem_analytical_77",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Neutralisation Stoichiometry & Ionic Equations",
    "bookQuestionNum": 177,
    "text": "What is the balanced equation for the reaction between sodium carbonate and hydrochloric acid?",
    "options": {
      "A": "Na₂CO₃ + HCl → NaCl + H₂O + CO₂",
      "B": "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
      "C": "Na₂CO₃ + 3HCl → NaCl + CO₂",
      "D": "Na₂CO₃ + 2HCl → Na₂Cl₂ + H₂O"
    },
    "answer": "B",
    "explanation": "Two moles of HCl react with one mole of sodium carbonate.",
    "page": 39,
    "hasImage": false
  },
  {
    "id": "chem_analytical_78",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Neutralisation Stoichiometry & Ionic Equations",
    "bookQuestionNum": 178,
    "text": "A 25 cm³ sample of 0.10 mol/dm³ Na₂CO₃ reacts completely with HCl. How many moles of HCl are required?",
    "options": {
      "A": "0.00125 mol",
      "B": "0.00250 mol",
      "C": "0.00500 mol",
      "D": "0.01000 mol"
    },
    "answer": "C",
    "explanation": "Na₂CO₃ moles = 0.10 × 0.025 = 0.0025 mol. HCl required = 2 × 0.0025 = 0.005 mol.",
    "page": 39,
    "hasImage": false
  },
  {
    "id": "chem_analytical_79",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Neutralisation Stoichiometry & Ionic Equations",
    "bookQuestionNum": 179,
    "text": "A 25 cm³ sample of Na₂CO₃ is titrated using 0.10 mol/dm³ HCl. The mean titre is 25 cm³. Calculate the concentration of Na₂CO₃.",
    "options": {
      "A": "0.025 mol/dm³",
      "B": "0.050 mol/dm³",
      "C": "0.100 mol/dm³",
      "D": "0.200 mol/dm³"
    },
    "answer": "B",
    "explanation": "HCl moles = 0.10 × 0.025 = 0.0025 mol. Carbonate moles = 0.0025/2 = 0.00125 mol. Concentration = 0.00125/0.025 = 0.050 mol/dm³.",
    "page": 40,
    "hasImage": false
  },
  {
    "id": "chem_analytical_80",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Neutralisation Stoichiometry & Ionic Equations",
    "bookQuestionNum": 180,
    "text": "Which of the following is the correct ionic equation for neutralisation?",
    "options": {
      "A": "H⁺ + OH⁻ → H₂O",
      "B": "Na⁺ + Cl⁻ → NaCl",
      "C": "H₂ + O₂ → H₂O",
      "D": "H⁺ + Cl⁻ → HCl"
    },
    "answer": "A",
    "explanation": "Hydrogen ions combine with hydroxide ions to produce water.",
    "page": 40,
    "hasImage": false
  },
  {
    "id": "chem_analytical_81",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Gas Identification Tests",
    "bookQuestionNum": 181,
    "text": "Which gas is released when a dilute acid reacts with a carbonate?",
    "options": {
      "A": "Hydrogen",
      "B": "Oxygen",
      "C": "Carbon dioxide",
      "D": "Nitrogen"
    },
    "answer": "C",
    "explanation": "Acid–carbonate reactions produce a salt, water and carbon dioxide.",
    "page": 41,
    "hasImage": false
  },
  {
    "id": "chem_analytical_82",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Gas Identification Tests",
    "bookQuestionNum": 182,
    "text": "A gas turns limewater milky. The gas is most likely",
    "options": {
      "A": "hydrogen",
      "B": "carbon dioxide",
      "C": "oxygen",
      "D": "ammonia"
    },
    "answer": "B",
    "explanation": "Carbon dioxide reacts with limewater to form insoluble calcium carbonate.",
    "page": 41,
    "hasImage": false
  },
  {
    "id": "chem_analytical_83",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Gas Identification Tests",
    "bookQuestionNum": 183,
    "text": "Which gas produces a squeaky pop when a lighted splint is applied?",
    "options": {
      "A": "Hydrogen",
      "B": "Oxygen",
      "C": "Chlorine",
      "D": "Carbon dioxide"
    },
    "answer": "A",
    "explanation": "Hydrogen burns rapidly with oxygen in the air, producing a characteristic squeaky pop.",
    "page": 42,
    "hasImage": false
  },
  {
    "id": "chem_analytical_84",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Gas Identification Tests",
    "bookQuestionNum": 184,
    "text": "Which gas relights a glowing splint?",
    "options": {
      "A": "Nitrogen",
      "B": "Carbon dioxide",
      "C": "Oxygen",
      "D": "Ammonia"
    },
    "answer": "C",
    "explanation": "Oxygen supports combustion and relights a glowing splint.",
    "page": 42,
    "hasImage": false
  },
  {
    "id": "chem_analytical_85",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Gas Identification Tests",
    "bookQuestionNum": 185,
    "text": "Ammonia gas can be identified because it",
    "options": {
      "A": "turns moist red litmus paper blue",
      "B": "turns moist blue litmus paper red",
      "C": "extinguishes a glowing splint",
      "D": "produces a brown precipitate with limewater"
    },
    "answer": "A",
    "explanation": "Ammonia is alkaline and dissolves in moisture on the litmus paper to produce alkaline conditions.",
    "page": 43,
    "hasImage": false
  },
  {
    "id": "chem_analytical_86",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Gas Identification Tests",
    "bookQuestionNum": 186,
    "text": "Which gas bleaches damp litmus paper?",
    "options": {
      "A": "Hydrogen",
      "B": "Chlorine",
      "C": "Oxygen",
      "D": "Nitrogen"
    },
    "answer": "B",
    "explanation": "Chlorine reacts with water to form bleaching species that destroy the dye in damp litmus paper.",
    "page": 43,
    "hasImage": false
  },
  {
    "id": "chem_analytical_87",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Gas Identification Tests",
    "bookQuestionNum": 187,
    "text": "Which gas has a pungent smell and can decolourise acidified potassium manganate(VII)?",
    "options": {
      "A": "Sulphur dioxide",
      "B": "Hydrogen",
      "C": "Nitrogen",
      "D": "Oxygen"
    },
    "answer": "A",
    "explanation": "Sulphur dioxide is a reducing agent and decolourises acidified potassium manganate(VII).",
    "page": 44,
    "hasImage": false
  },
  {
    "id": "chem_analytical_88",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Gas Identification Tests",
    "bookQuestionNum": 188,
    "text": "The addition of dilute hydrochloric acid to a carbonate produces",
    "options": {
      "A": "a white precipitate only",
      "B": "effervescence due to carbon dioxide",
      "C": "a blue solution only",
      "D": "a yellow flame"
    },
    "answer": "B",
    "explanation": "Carbon dioxide is liberated as the carbonate reacts with the acid.",
    "page": 44,
    "hasImage": false
  },
  {
    "id": "chem_analytical_89",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 189,
    "text": "Which cation is identified by warming its salt with sodium hydroxide to release ammonia gas?",
    "options": {
      "A": "Cu²⁺",
      "B": "NH₄⁺",
      "C": "Fe³⁺",
      "D": "Pb²⁺"
    },
    "answer": "B",
    "explanation": "Ammonium ions react with hydroxide ions on warming to release ammonia.",
    "page": 45,
    "hasImage": false
  },
  {
    "id": "chem_analytical_90",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 190,
    "text": "Which equation represents the reaction between ammonium ions and hydroxide ions?",
    "options": {
      "A": "NH₄⁺ + OH⁻ → NH₃ + H₂O",
      "B": "NH₄⁺ + Cl⁻ → NH₄Cl",
      "C": "NH₄⁺ + O²⁻ → NO₂",
      "D": "NH₄⁺ + H⁺ → NH₃"
    },
    "answer": "A",
    "explanation": "Hydroxide removes a proton from the ammonium ion, producing ammonia and water.",
    "page": 45,
    "hasImage": false
  },
  {
    "id": "chem_analytical_91",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 191,
    "text": "Which cation gives a light blue precipitate when aqueous sodium hydroxide is added?",
    "options": {
      "A": "Fe²⁺",
      "B": "Fe³⁺",
      "C": "Cu²⁺",
      "D": "Zn²⁺"
    },
    "answer": "C",
    "explanation": "Copper(II) ions produce a light blue precipitate of copper(II) hydroxide.",
    "page": 46,
    "hasImage": false
  },
  {
    "id": "chem_analytical_92",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 192,
    "text": "Which cation gives a green precipitate with aqueous sodium hydroxide that gradually turns brown on exposure to air?",
    "options": {
      "A": "Fe²⁺",
      "B": "Fe³⁺",
      "C": "Al³⁺",
      "D": "Ca²⁺"
    },
    "answer": "A",
    "explanation": "Iron(II) hydroxide is green and is oxidised by air to brown iron(III) compounds.",
    "page": 46,
    "hasImage": false
  },
  {
    "id": "chem_analytical_93",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 193,
    "text": "Which cation gives a reddish-brown precipitate with aqueous sodium hydroxide?",
    "options": {
      "A": "Cu²⁺",
      "B": "Fe³⁺",
      "C": "Zn²⁺",
      "D": "Al³⁺"
    },
    "answer": "B",
    "explanation": "Iron(III) ions produce a reddish-brown precipitate of iron(III) hydroxide.",
    "page": 47,
    "hasImage": false
  },
  {
    "id": "chem_analytical_94",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 194,
    "text": "Which pair of cations gives white precipitates with aqueous sodium hydroxide that dissolve in excess sodium hydroxide?",
    "options": {
      "A": "Cu²⁺ and Fe³⁺",
      "B": "Al³⁺ and Zn²⁺",
      "C": "Fe²⁺ and Ca²⁺",
      "D": "NH₄⁺ and Fe³⁺"
    },
    "answer": "B",
    "explanation": "Aluminium hydroxide and zinc hydroxide are amphoteric and dissolve in excess sodium hydroxide.",
    "page": 47,
    "hasImage": false
  },
  {
    "id": "chem_analytical_95",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 195,
    "text": "A white precipitate dissolves in excess sodium hydroxide and also dissolves in excess aqueous ammonia. Which ion is most likely responsible?",
    "options": {
      "A": "Fe³⁺",
      "B": "Cu²⁺",
      "C": "Zn²⁺",
      "D": "Ca²⁺"
    },
    "answer": "C",
    "explanation": "Zinc hydroxide dissolves in excess sodium hydroxide and excess ammonia, forming soluble complexes.",
    "page": 48,
    "hasImage": false
  },
  {
    "id": "chem_analytical_96",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 196,
    "text": "Which cation produces a light blue precipitate with aqueous ammonia that dissolves in excess ammonia to form a deep blue solution?",
    "options": {
      "A": "Cu²⁺",
      "B": "Fe²⁺",
      "C": "Pb²⁺",
      "D": "Ca²⁺"
    },
    "answer": "A",
    "explanation": "Excess ammonia forms a deep-blue copper(II) ammine complex.",
    "page": 48,
    "hasImage": false
  },
  {
    "id": "chem_analytical_97",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 197,
    "text": "Which cation produces a reddish-brown precipitate with aqueous ammonia that is insoluble in excess?",
    "options": {
      "A": "Zn²⁺",
      "B": "Fe³⁺",
      "C": "Cu²⁺",
      "D": "NH₄⁺"
    },
    "answer": "B",
    "explanation": "Iron(III) hydroxide is reddish-brown and does not dissolve in excess ammonia.",
    "page": 49,
    "hasImage": false
  },
  {
    "id": "chem_analytical_98",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 198,
    "text": "A salt gives a green precipitate with sodium hydroxide that becomes brown when left standing. The cation is",
    "options": {
      "A": "Fe²⁺",
      "B": "Fe³⁺",
      "C": "Cu²⁺",
      "D": "Zn²⁺"
    },
    "answer": "A",
    "explanation": "Iron(II) hydroxide is green but becomes oxidised in air.",
    "page": 49,
    "hasImage": false
  },
  {
    "id": "chem_analytical_99",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 199,
    "text": "A salt gives a white precipitate with sodium hydroxide which dissolves in excess sodium hydroxide but not in excess ammonia. The cation is most likely",
    "options": {
      "A": "Al³⁺",
      "B": "Zn²⁺",
      "C": "Fe²⁺",
      "D": "Cu²⁺"
    },
    "answer": "A",
    "explanation": "Aluminium hydroxide dissolves in excess sodium hydroxide but is insoluble in excess aqueous ammonia.",
    "page": 50,
    "hasImage": false
  },
  {
    "id": "chem_analytical_100",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 200,
    "text": "Which ion produces a white precipitate with sodium hydroxide that is generally insoluble in excess?",
    "options": {
      "A": "Ca²⁺",
      "B": "Zn²⁺",
      "C": "Al³⁺",
      "D": "Pb²⁺"
    },
    "answer": "A",
    "explanation": "Calcium ions produce a white precipitate of calcium hydroxide that does not dissolve readily in excess sodium hydroxide.",
    "page": 50,
    "hasImage": false
  },
  {
    "id": "chem_analytical_101",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Cation Tests & Amphoterism",
    "bookQuestionNum": 201,
    "text": "Which cation gives a white precipitate with sodium hydroxide that dissolves in excess sodium hydroxide, but remains insoluble in excess ammonia?",
    "options": {
      "A": "Pb²⁺",
      "B": "Cu²⁺",
      "C": "Fe²⁺",
      "D": "NH₄⁺"
    },
    "answer": "A",
    "explanation": "Lead(II) hydroxide is amphoteric and dissolves in excess sodium hydroxide but not in excess aqueous ammonia.",
    "page": 51,
    "hasImage": false
  },
  {
    "id": "chem_analytical_102",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Anion Tests (Halides & Sulphates)",
    "bookQuestionNum": 202,
    "text": "What colour is the precipitate formed when silver nitrate reacts with a solution containing chloride ions?",
    "options": {
      "A": "Yellow",
      "B": "White",
      "C": "Cream",
      "D": "Brown"
    },
    "answer": "B",
    "explanation": "Chloride ions react with silver ions to form white silver chloride.",
    "page": 51,
    "hasImage": false
  },
  {
    "id": "chem_analytical_103",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Anion Tests (Halides & Sulphates)",
    "bookQuestionNum": 203,
    "text": "Which reagent is used to test for chloride ions?",
    "options": {
      "A": "Acidified silver nitrate",
      "B": "Aqueous sodium hydroxide only",
      "C": "Barium chloride only",
      "D": "Limewater"
    },
    "answer": "A",
    "explanation": "Silver nitrate forms a white precipitate of silver chloride; dilute nitric acid is commonly used for acidification.",
    "page": 52,
    "hasImage": false
  },
  {
    "id": "chem_analytical_104",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Anion Tests (Halides & Sulphates)",
    "bookQuestionNum": 204,
    "text": "A white precipitate formed with silver nitrate dissolves in dilute aqueous ammonia. The anion is",
    "options": {
      "A": "chloride",
      "B": "bromide",
      "C": "iodide",
      "D": "sulphate"
    },
    "answer": "A",
    "explanation": "Silver chloride dissolves in dilute ammonia through complex formation.",
    "page": 52,
    "hasImage": false
  },
  {
    "id": "chem_analytical_105",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Anion Tests (Halides & Sulphates)",
    "bookQuestionNum": 205,
    "text": "Which colour precipitate is produced when silver nitrate reacts with bromide ions?",
    "options": {
      "A": "White",
      "B": "Cream",
      "C": "Black",
      "D": "Green"
    },
    "answer": "B",
    "explanation": "Silver bromide is cream-coloured.",
    "page": 53,
    "hasImage": false
  },
  {
    "id": "chem_analytical_106",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Anion Tests (Halides & Sulphates)",
    "bookQuestionNum": 206,
    "text": "Which colour precipitate is formed when silver nitrate reacts with iodide ions?",
    "options": {
      "A": "White",
      "B": "Cream",
      "C": "Yellow",
      "D": "Blue"
    },
    "answer": "C",
    "explanation": "Silver iodide forms a yellow precipitate.",
    "page": 53,
    "hasImage": false
  },
  {
    "id": "chem_analytical_107",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Anion Tests (Halides & Sulphates)",
    "bookQuestionNum": 207,
    "text": "Which reagent is commonly used to confirm the presence of sulphate ions?",
    "options": {
      "A": "Acidified barium chloride",
      "B": "Sodium hydroxide",
      "C": "Limewater",
      "D": "Phenolphthalein"
    },
    "answer": "A",
    "explanation": "Sulphate ions produce a white precipitate of barium sulphate, which remains insoluble in dilute acid.",
    "page": 54,
    "hasImage": false
  },
  {
    "id": "chem_analytical_108",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Anion Tests (Halides & Sulphates)",
    "bookQuestionNum": 208,
    "text": "What is the chemical formula of the white precipitate formed in the sulphate test?",
    "options": {
      "A": "BaCl₂",
      "B": "BaSO₄",
      "C": "AgCl",
      "D": "CaCO₃"
    },
    "answer": "B",
    "explanation": "Barium ions react with sulphate ions to produce insoluble barium sulphate.",
    "page": 54,
    "hasImage": false
  },
  {
    "id": "chem_analytical_109",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Qualitative Analysis: Anion Tests (Halides & Sulphates)",
    "bookQuestionNum": 209,
    "text": "Which of the following is the best test for carbonate ions?",
    "options": {
      "A": "Add dilute acid and test the gas with limewater.",
      "B": "Add sodium hydroxide and observe a green precipitate.",
      "C": "Add silver nitrate and observe a blue solution.",
      "D": "Add ammonia and observe a yellow flame."
    },
    "answer": "A",
    "explanation": "Carbonates release carbon dioxide with dilute acids, and carbon dioxide turns limewater milky.",
    "page": 55,
    "hasImage": false
  },
  {
    "id": "chem_analytical_110",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Flame Tests for Metal Cations",
    "bookQuestionNum": 210,
    "text": "Which flame colour is characteristic of sodium ions?",
    "options": {
      "A": "Lilac",
      "B": "Yellow",
      "C": "Brick-red",
      "D": "Blue-green"
    },
    "answer": "B",
    "explanation": "Sodium produces an intense yellow flame.",
    "page": 55,
    "hasImage": false
  },
  {
    "id": "chem_analytical_111",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Flame Tests for Metal Cations",
    "bookQuestionNum": 211,
    "text": "Potassium ions produce which flame colour?",
    "options": {
      "A": "Lilac",
      "B": "Crimson",
      "C": "Yellow",
      "D": "Brick-red"
    },
    "answer": "A",
    "explanation": "Potassium gives a lilac flame, which may be viewed through cobalt glass where sodium contamination is present.",
    "page": 56,
    "hasImage": false
  },
  {
    "id": "chem_analytical_112",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Flame Tests for Metal Cations",
    "bookQuestionNum": 212,
    "text": "Calcium ions give which characteristic flame colour?",
    "options": {
      "A": "Apple green",
      "B": "Brick-red",
      "C": "Yellow",
      "D": "Lilac"
    },
    "answer": "B",
    "explanation": "Calcium compounds produce a brick-red flame.",
    "page": 56,
    "hasImage": false
  },
  {
    "id": "chem_analytical_113",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Flame Tests for Metal Cations",
    "bookQuestionNum": 213,
    "text": "Which flame colour is associated with copper compounds?",
    "options": {
      "A": "Blue-green",
      "B": "Yellow",
      "C": "Crimson",
      "D": "Lilac"
    },
    "answer": "A",
    "explanation": "Copper ions produce a blue-green flame.",
    "page": 57,
    "hasImage": false
  },
  {
    "id": "chem_analytical_114",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Flame Tests for Metal Cations",
    "bookQuestionNum": 214,
    "text": "Which cation forms a white precipitate with aqueous sodium hydroxide and is soluble in excess, but does not form a similar deep-blue solution with ammonia?",
    "options": {
      "A": "Zn²⁺",
      "B": "Cu²⁺",
      "C": "Fe³⁺",
      "D": "Fe²⁺"
    },
    "answer": "A",
    "explanation": "Zinc hydroxide dissolves in excess sodium hydroxide and ammonia, whereas copper gives a distinctive deep-blue ammonia complex.",
    "page": 57,
    "hasImage": false
  },
  {
    "id": "chem_analytical_115",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Flame Tests for Metal Cations",
    "bookQuestionNum": 215,
    "text": "A salt gives a white precipitate with aqueous sodium hydroxide. The precipitate dissolves in excess sodium hydroxide. The solution also gives a white precipitate with ammonia that dissolves in excess ammonia. Which cation is indicated?",
    "options": {
      "A": "Al³⁺",
      "B": "Zn²⁺",
      "C": "Ca²⁺",
      "D": "Fe³⁺"
    },
    "answer": "B",
    "explanation": "Zinc hydroxide dissolves in excess sodium hydroxide and ammonia.",
    "page": 58,
    "hasImage": false
  },
  {
    "id": "chem_analytical_116",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Anion Confirmatory Tests: Nitrate Brown Ring",
    "bookQuestionNum": 216,
    "text": "Which of the following cations is most likely to be confirmed by producing ammonia when the salt is warmed with sodium hydroxide?",
    "options": {
      "A": "NH₄⁺",
      "B": "Cu²⁺",
      "C": "Pb²⁺",
      "D": "Fe³⁺"
    },
    "answer": "A",
    "explanation": "Ammonium salts liberate ammonia when warmed with an alkali.",
    "page": 58,
    "hasImage": false
  },
  {
    "id": "chem_analytical_117",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Anion Confirmatory Tests: Nitrate Brown Ring",
    "bookQuestionNum": 217,
    "text": "What is the confirmatory test for carbon dioxide?",
    "options": {
      "A": "It turns damp blue litmus red and then bleaches it.",
      "B": "It turns limewater milky.",
      "C": "It produces a squeaky pop.",
      "D": "It relights a glowing splint."
    },
    "answer": "B",
    "explanation": "Carbon dioxide reacts with calcium hydroxide to form insoluble calcium carbonate.",
    "page": 59,
    "hasImage": false
  },
  {
    "id": "chem_analytical_118",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Anion Confirmatory Tests: Nitrate Brown Ring",
    "bookQuestionNum": 218,
    "text": "Which gas is identified by its pungent smell and ability to turn moist red litmus blue?",
    "options": {
      "A": "Carbon dioxide",
      "B": "Ammonia",
      "C": "Hydrogen",
      "D": "Chlorine"
    },
    "answer": "B",
    "explanation": "Ammonia is an alkaline gas that turns moist red litmus paper blue.",
    "page": 59,
    "hasImage": false
  },
  {
    "id": "chem_analytical_119",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Anion Confirmatory Tests: Nitrate Brown Ring",
    "bookQuestionNum": 219,
    "text": "Which gas is likely to produce a brown ring at the junction of two liquid layers in the brown-ring test?",
    "options": {
      "A": "Nitrate",
      "B": "Chloride",
      "C": "Sulphate",
      "D": "Carbonate"
    },
    "answer": "A",
    "explanation": "Nitrate ions are identified using the brown-ring test involving iron(II) sulphate and concentrated sulphuric acid.",
    "page": 60,
    "hasImage": false
  },
  {
    "id": "chem_analytical_120",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Anion Confirmatory Tests: Nitrate Brown Ring",
    "bookQuestionNum": 220,
    "text": "The brown ring in the nitrate test is associated with the formation of",
    "options": {
      "A": "a nitrosyl iron complex",
      "B": "silver chloride",
      "C": "barium sulphate",
      "D": "copper hydroxide"
    },
    "answer": "A",
    "explanation": "The brown ring is associated with a nitrosyl iron complex formed at the interface.",
    "page": 60,
    "hasImage": false
  },
  {
    "id": "chem_analytical_121",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Anion Confirmatory Tests: Nitrate Brown Ring",
    "bookQuestionNum": 221,
    "text": "Which of the following is most suitable for identifying an acidic radical through gas evolution?",
    "options": {
      "A": "Adding dilute acid to the sample and testing the evolved gas",
      "B": "Measuring the sample's mass only",
      "C": "Adding a few drops of oil",
      "D": "Heating the sample in a sealed container without further testing"
    },
    "answer": "A",
    "explanation": "Some anions release characteristic gases when treated with dilute acids.",
    "page": 61,
    "hasImage": false
  },
  {
    "id": "chem_analytical_122",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Anion Confirmatory Tests: Nitrate Brown Ring",
    "bookQuestionNum": 222,
    "text": "Which gas is produced when sulphites react with dilute acids?",
    "options": {
      "A": "Hydrogen",
      "B": "Sulphur dioxide",
      "C": "Oxygen",
      "D": "Ammonia"
    },
    "answer": "B",
    "explanation": "Sulphites react with dilute acids to release sulphur dioxide.",
    "page": 61,
    "hasImage": false
  },
  {
    "id": "chem_analytical_123",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Anion Confirmatory Tests: Nitrate Brown Ring",
    "bookQuestionNum": 223,
    "text": "Which of the following gases can decolourise acidified potassium manganate(VII)?",
    "options": {
      "A": "Sulphur dioxide",
      "B": "Nitrogen",
      "C": "Oxygen",
      "D": "Hydrogen chloride under ordinary test conditions"
    },
    "answer": "A",
    "explanation": "Sulphur dioxide reduces purple manganate(VII) ions to nearly colourless manganese(II) ions in acidic solution.",
    "page": 62,
    "hasImage": false
  },
  {
    "id": "chem_analytical_124",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Anion Confirmatory Tests: Nitrate Brown Ring",
    "bookQuestionNum": 224,
    "text": "Which compound is commonly formed when carbon dioxide is passed through limewater?",
    "options": {
      "A": "Calcium oxide",
      "B": "Calcium carbonate",
      "C": "Calcium chloride",
      "D": "Calcium sulphate"
    },
    "answer": "B",
    "explanation": "CO₂ + Ca(OH)₂ → CaCO₃ + H₂O.",
    "page": 62,
    "hasImage": false
  },
  {
    "id": "chem_analytical_125",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Anion Confirmatory Tests: Nitrate Brown Ring",
    "bookQuestionNum": 225,
    "text": "Why does limewater sometimes become clear again when excess carbon dioxide is passed through it?",
    "options": {
      "A": "Calcium carbonate forms a soluble calcium hydrogencarbonate.",
      "B": "Calcium carbonate becomes metallic calcium.",
      "C": "Carbon dioxide turns into oxygen.",
      "D": "Calcium hydroxide becomes sodium hydroxide."
    },
    "answer": "A",
    "explanation": "Excess CO₂ reacts with CaCO₃ and water to form soluble Ca(HCO₃)₂.",
    "page": 63,
    "hasImage": false
  },
  {
    "id": "chem_analytical_126",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Fe²⁺",
    "bookQuestionNum": 226,
    "text": "What is the oxidation state of manganese in MnO₄⁻?",
    "options": {
      "A": "+2",
      "B": "+4",
      "C": "+6",
      "D": "+7"
    },
    "answer": "D",
    "explanation": "Let manganese be x. x + 4(−2) = −1, so x = +7.",
    "page": 63,
    "hasImage": false
  },
  {
    "id": "chem_analytical_127",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Fe²⁺",
    "bookQuestionNum": 227,
    "text": "Potassium manganate(VII) is commonly used in redox titration because it",
    "options": {
      "A": "is a strong oxidising agent",
      "B": "is a strong reducing agent",
      "C": "is an acid–base indicator only",
      "D": "does not react with iron(II) ions"
    },
    "answer": "A",
    "explanation": "Permanganate ions accept electrons and oxidise substances such as Fe²⁺ ions in acidic solution.",
    "page": 64,
    "hasImage": false
  },
  {
    "id": "chem_analytical_128",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Fe²⁺",
    "bookQuestionNum": 228,
    "text": "During the titration of iron(II) ions with acidified potassium manganate(VII), the purple solution is",
    "options": {
      "A": "decolourised until a slight permanent pink colour appears",
      "B": "changed to deep blue permanently",
      "C": "changed to yellow by starch",
      "D": "changed to green by sodium chloride"
    },
    "answer": "A",
    "explanation": "Permanganate is self-indicating. A slight persistent pink colour indicates excess permanganate and the endpoint.",
    "page": 64,
    "hasImage": false
  },
  {
    "id": "chem_analytical_129",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Fe²⁺",
    "bookQuestionNum": 229,
    "text": "Which acid is generally used to acidify potassium manganate(VII) during a redox titration involving iron(II) ions?",
    "options": {
      "A": "Hydrochloric acid",
      "B": "Sulphuric acid",
      "C": "Nitric acid",
      "D": "Ethanoic acid"
    },
    "answer": "B",
    "explanation": "Sulphuric acid provides the required acidic medium without introducing a significant competing redox reaction.",
    "page": 65,
    "hasImage": false
  },
  {
    "id": "chem_analytical_130",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Fe²⁺",
    "bookQuestionNum": 230,
    "text": "Why is hydrochloric acid unsuitable for acidifying potassium manganate(VII) in many redox titrations?",
    "options": {
      "A": "It is insoluble in water.",
      "B": "Chloride ions may be oxidised by permanganate.",
      "C": "It prevents all redox reactions.",
      "D": "It contains no hydrogen ions."
    },
    "answer": "B",
    "explanation": "Permanganate can oxidise chloride ions to chlorine under strongly acidic conditions, interfering with the titration.",
    "page": 65,
    "hasImage": false
  },
  {
    "id": "chem_analytical_131",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Fe²⁺",
    "bookQuestionNum": 231,
    "text": "In acidic solution, the permanganate ion is reduced to",
    "options": {
      "A": "MnO₂",
      "B": "Mn²⁺",
      "C": "MnO₄²⁻",
      "D": "Mn"
    },
    "answer": "B",
    "explanation": "In acidic medium, manganese in the +7 oxidation state is reduced to the +2 oxidation state.",
    "page": 66,
    "hasImage": false
  },
  {
    "id": "chem_analytical_132",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Fe²⁺",
    "bookQuestionNum": 232,
    "text": "Which of the following is the correct balanced ionic equation for acidified permanganate reacting with iron(II) ions?",
    "options": {
      "A": "MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺",
      "B": "MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O",
      "C": "MnO₄⁻ + Fe³⁺ → Mn²⁺ + Fe²⁺",
      "D": "MnO₄⁻ + 2Fe²⁺ → MnO₂ + 2Fe³⁺"
    },
    "answer": "B",
    "explanation": "One permanganate ion accepts five electrons and oxidises five iron(II) ions.",
    "page": 66,
    "hasImage": false
  },
  {
    "id": "chem_analytical_133",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Fe²⁺",
    "bookQuestionNum": 233,
    "text": "How many moles of Fe²⁺ are oxidised by one mole of MnO₄⁻ in acidic solution?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "5",
      "D": "8"
    },
    "answer": "C",
    "explanation": "The balanced ionic equation shows a 1:5 mole ratio between MnO₄⁻ and Fe²⁺.",
    "page": 67,
    "hasImage": false
  },
  {
    "id": "chem_analytical_134",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Fe²⁺",
    "bookQuestionNum": 234,
    "text": "A 25.0 cm³ sample of Fe²⁺ solution requires 20.0 cm³ of 0.020 mol/dm³ KMnO₄ for complete reaction in acid solution. Calculate the concentration of Fe²⁺.",
    "options": {
      "A": "0.016 mol/dm³",
      "B": "0.040 mol/dm³",
      "C": "0.080 mol/dm³",
      "D": "0.100 mol/dm³"
    },
    "answer": "C",
    "explanation": "KMnO₄ moles = 0.020 × 0.020 = 0.0004 mol. Fe²⁺ moles = 5 × 0.0004 = 0.002 mol. Concentration = 0.002/0.025 = 0.080 mol/dm³.",
    "page": 67,
    "hasImage": false
  },
  {
    "id": "chem_analytical_135",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Fe²⁺",
    "bookQuestionNum": 235,
    "text": "A 25.0 cm³ sample containing Fe²⁺ is titrated using 0.010 mol/dm³ KMnO₄. If the titre is 30.0 cm³, calculate the concentration of Fe²⁺.",
    "options": {
      "A": "0.030 mol/dm³",
      "B": "0.060 mol/dm³",
      "C": "0.075 mol/dm³",
      "D": "0.150 mol/dm³"
    },
    "answer": "B",
    "explanation": "KMnO₄ moles = 0.010 × 0.030 = 0.0003 mol. Fe²⁺ moles = 5 × 0.0003 = 0.0015 mol. Concentration = 0.0015/0.025 = 0.060 mol/dm³.",
    "page": 68,
    "hasImage": false
  },
  {
    "id": "chem_analytical_136",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Oxalate",
    "bookQuestionNum": 236,
    "text": "In the reaction between permanganate ions and oxalate ions in acidic solution, the carbon in oxalate is",
    "options": {
      "A": "reduced",
      "B": "oxidised",
      "C": "unchanged",
      "D": "converted into carbon monoxide only"
    },
    "answer": "B",
    "explanation": "Carbon in oxalate is oxidised from an average oxidation state of +3 to +4 in carbon dioxide.",
    "page": 68,
    "hasImage": false
  },
  {
    "id": "chem_analytical_137",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Oxalate",
    "bookQuestionNum": 237,
    "text": "Which is the balanced ionic equation for the reaction between acidified permanganate ions and oxalate ions?",
    "options": {
      "A": "2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O",
      "B": "MnO₄⁻ + C₂O₄²⁻ → Mn²⁺ + CO₂",
      "C": "2MnO₄⁻ + C₂O₄²⁻ → 2Mn²⁺ + CO₂",
      "D": "MnO₄⁻ + 5C₂O₄²⁻ → MnO₂ + CO₂"
    },
    "answer": "A",
    "explanation": "The balanced equation gives the correct mole ratio and conserves both atoms and charge.",
    "page": 69,
    "hasImage": false
  },
  {
    "id": "chem_analytical_138",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Oxalate",
    "bookQuestionNum": 238,
    "text": "How many moles of oxalate ions react with two moles of permanganate ions in acidic solution?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "5",
      "D": "10"
    },
    "answer": "C",
    "explanation": "The balanced equation shows a ratio of 2 moles of permanganate to 5 moles of oxalate.",
    "page": 69,
    "hasImage": false
  },
  {
    "id": "chem_analytical_139",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Oxalate",
    "bookQuestionNum": 239,
    "text": "25.0 cm³ of 0.050 mol/dm³ oxalate solution is titrated with KMnO₄. What amount of KMnO₄ is required?",
    "options": {
      "A": "0.00025 mol",
      "B": "0.00050 mol",
      "C": "0.00125 mol",
      "D": "0.00250 mol"
    },
    "answer": "B",
    "explanation": "Oxalate moles = 0.050 × 0.025 = 0.00125 mol. Permanganate moles = (2/5) × 0.00125 = 0.00050 mol.",
    "page": 70,
    "hasImage": false
  },
  {
    "id": "chem_analytical_140",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Oxalate",
    "bookQuestionNum": 240,
    "text": "The use of heat during the permanganate–oxalate titration is mainly to",
    "options": {
      "A": "slow down the reaction",
      "B": "increase the rate of reaction, which is initially slow",
      "C": "change the colour of the indicator",
      "D": "reduce the concentration of permanganate"
    },
    "answer": "B",
    "explanation": "The reaction between permanganate and oxalate is slow at room temperature, so the mixture is warmed moderately to speed it up.",
    "page": 70,
    "hasImage": false
  },
  {
    "id": "chem_analytical_141",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Oxalate",
    "bookQuestionNum": 241,
    "text": "Which substance acts as a reducing agent in the reaction between acidified KMnO₄ and Fe²⁺?",
    "options": {
      "A": "MnO₄⁻",
      "B": "Fe²⁺",
      "C": "H⁺",
      "D": "H₂O"
    },
    "answer": "B",
    "explanation": "Fe²⁺ loses electrons to become Fe³⁺, so it acts as the reducing agent.",
    "page": 71,
    "hasImage": false
  },
  {
    "id": "chem_analytical_142",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Acidified KMnO₄ & Oxalate",
    "bookQuestionNum": 242,
    "text": "Which substance acts as the oxidising agent in the same reaction?",
    "options": {
      "A": "Fe²⁺",
      "B": "Fe³⁺",
      "C": "MnO₄⁻",
      "D": "H₂O"
    },
    "answer": "C",
    "explanation": "Permanganate accepts electrons and is reduced, making it the oxidising agent.",
    "page": 71,
    "hasImage": false
  },
  {
    "id": "chem_analytical_143",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Iodine–Thiosulphate Stoichiometry",
    "bookQuestionNum": 243,
    "text": "In iodine titration, thiosulphate ions react with iodine according to",
    "options": {
      "A": "I₂ + S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻",
      "B": "I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻",
      "C": "I₂ + S₂O₃²⁻ → I⁺ + S₂O₄²⁻",
      "D": "I₂ + 2S₂O₃²⁻ → I⁻ + S₂O₃²⁻"
    },
    "answer": "B",
    "explanation": "Two moles of thiosulphate react with one mole of iodine.",
    "page": 72,
    "hasImage": false
  },
  {
    "id": "chem_analytical_144",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Iodine–Thiosulphate Stoichiometry",
    "bookQuestionNum": 244,
    "text": "The oxidation state of iodine changes from zero in I₂ to which value in I⁻?",
    "options": {
      "A": "+1",
      "B": "−1",
      "C": "+2",
      "D": "−2"
    },
    "answer": "B",
    "explanation": "Each iodine atom gains one electron to form an iodide ion.",
    "page": 72,
    "hasImage": false
  },
  {
    "id": "chem_analytical_145",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Iodine–Thiosulphate Stoichiometry",
    "bookQuestionNum": 245,
    "text": "In an iodine–thiosulphate titration, thiosulphate acts as",
    "options": {
      "A": "an oxidising agent",
      "B": "a reducing agent",
      "C": "an acid",
      "D": "a catalyst"
    },
    "answer": "B",
    "explanation": "Thiosulphate reduces iodine to iodide ions.",
    "page": 73,
    "hasImage": false
  },
  {
    "id": "chem_analytical_146",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Iodine–Thiosulphate Stoichiometry",
    "bookQuestionNum": 246,
    "text": "What happens to the brown colour of iodine as it reacts with thiosulphate?",
    "options": {
      "A": "It becomes more intense.",
      "B": "It gradually disappears.",
      "C": "It changes permanently to green.",
      "D": "It forms a red precipitate."
    },
    "answer": "B",
    "explanation": "Iodine is converted to colourless iodide ions.",
    "page": 73,
    "hasImage": false
  },
  {
    "id": "chem_analytical_147",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Iodine–Thiosulphate Stoichiometry",
    "bookQuestionNum": 247,
    "text": "Why is potassium iodide often added when preparing iodine solution for titration?",
    "options": {
      "A": "To convert iodine into a more soluble triiodide form",
      "B": "To make iodine insoluble",
      "C": "To reduce iodine into oxygen",
      "D": "To neutralise all acids present"
    },
    "answer": "A",
    "explanation": "Iodine dissolves more readily in aqueous potassium iodide because it forms triiodide ions.",
    "page": 74,
    "hasImage": false
  },
  {
    "id": "chem_analytical_148",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Iodine–Thiosulphate Stoichiometry",
    "bookQuestionNum": 248,
    "text": "A 25.0 cm³ iodine solution requires 20.0 cm³ of 0.10 mol/dm³ sodium thiosulphate. Calculate the concentration of iodine.\n\nI₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻",
    "options": {
      "A": "0.020 mol/dm³",
      "B": "0.040 mol/dm³",
      "C": "0.080 mol/dm³",
      "D": "0.160 mol/dm³"
    },
    "answer": "B",
    "explanation": "0.001 ÷ 0.025 = 0.040 mol/dm³.",
    "page": 74,
    "hasImage": false
  },
  {
    "id": "chem_analytical_149",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Iodine–Thiosulphate Stoichiometry",
    "bookQuestionNum": 249,
    "text": "Which of the following is the most suitable indicator for detecting the endpoint in an iodine–thiosulphate titration?",
    "options": {
      "A": "Starch",
      "B": "Methyl orange",
      "C": "Phenolphthalein",
      "D": "Litmus"
    },
    "answer": "A",
    "explanation": "Starch produces a deep blue colour with iodine, which disappears at the endpoint.",
    "page": 75,
    "hasImage": false
  },
  {
    "id": "chem_analytical_150",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Titration: Iodine–Thiosulphate Stoichiometry",
    "bookQuestionNum": 250,
    "text": "A 25.0 cm³ sample of iodine solution contains 0.002 mol of iodine. Calculate its concentration.",
    "options": {
      "A": "0.020 mol/dm³",
      "B": "0.040 mol/dm³",
      "C": "0.080 mol/dm³",
      "D": "0.100 mol/dm³"
    },
    "answer": "C",
    "explanation": "Concentration = 0.002/0.025 = 0.080 mol/dm³.",
    "page": 75,
    "hasImage": false
  },
  {
    "id": "chem_analytical_151",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Principles & Oxidation States",
    "bookQuestionNum": 251,
    "text": "A solution contains Fe²⁺ ions. During oxidation, the ions change to",
    "options": {
      "A": "Fe⁺",
      "B": "Fe³⁺",
      "C": "Fe⁰",
      "D": "Fe⁴⁺"
    },
    "answer": "B",
    "explanation": "Oxidation involves loss of electrons. Fe²⁺ loses one electron to form Fe³⁺.",
    "page": 76,
    "hasImage": false
  },
  {
    "id": "chem_analytical_152",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Principles & Oxidation States",
    "bookQuestionNum": 252,
    "text": "Which statement describes reduction?",
    "options": {
      "A": "Gain of electrons",
      "B": "Loss of electrons",
      "C": "Gain of oxygen only",
      "D": "Loss of hydrogen only"
    },
    "answer": "A",
    "explanation": "Reduction is the gain of electrons, while oxidation is the loss of electrons.",
    "page": 76,
    "hasImage": false
  },
  {
    "id": "chem_analytical_153",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Principles & Oxidation States",
    "bookQuestionNum": 253,
    "text": "Which of the following changes represents oxidation?",
    "options": {
      "A": "Fe³⁺ + e⁻ → Fe²⁺",
      "B": "Cu²⁺ + 2e⁻ → Cu",
      "C": "Fe²⁺ → Fe³⁺ + e⁻",
      "D": "Cl₂ + 2e⁻ → 2Cl⁻"
    },
    "answer": "C",
    "explanation": "Fe²⁺ loses one electron, so it is oxidised.",
    "page": 77,
    "hasImage": false
  },
  {
    "id": "chem_analytical_154",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Principles & Oxidation States",
    "bookQuestionNum": 254,
    "text": "Which of the following represents reduction?",
    "options": {
      "A": "Zn → Zn²⁺ + 2e⁻",
      "B": "Fe²⁺ → Fe³⁺ + e⁻",
      "C": "Cu²⁺ + 2e⁻ → Cu",
      "D": "Mg → Mg²⁺ + 2e⁻"
    },
    "answer": "C",
    "explanation": "Copper(II) ions gain two electrons to form copper metal.",
    "page": 77,
    "hasImage": false
  },
  {
    "id": "chem_analytical_155",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Redox Principles & Oxidation States",
    "bookQuestionNum": 255,
    "text": "The oxidation number of sulphur in SO₄²⁻ is",
    "options": {
      "A": "+2",
      "B": "+4",
      "C": "+6",
      "D": "+8"
    },
    "answer": "C",
    "explanation": "Let sulphur be x. x + 4(−2) = −2, so x = +6.",
    "page": 78,
    "hasImage": false
  },
  {
    "id": "chem_analytical_156",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 256,
    "text": "An experimental result is said to be accurate when it is",
    "options": {
      "A": "close to the accepted or true value",
      "B": "far from the accepted value",
      "C": "identical to every other student's result",
      "D": "obtained using the largest measuring apparatus"
    },
    "answer": "A",
    "explanation": "Accuracy measures how close a result is to the true or accepted value.",
    "page": 78,
    "hasImage": false
  },
  {
    "id": "chem_analytical_157",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 257,
    "text": "Precision refers to",
    "options": {
      "A": "closeness of repeated measurements to one another",
      "B": "closeness to the true value only",
      "C": "the colour of the final solution",
      "D": "the number of apparatus used"
    },
    "answer": "A",
    "explanation": "Precision describes repeatability or agreement between repeated measurements.",
    "page": 79,
    "hasImage": false
  },
  {
    "id": "chem_analytical_158",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 258,
    "text": "A student obtains the titres 24.10 cm³, 24.12 cm³ and 24.11 cm³. These results indicate",
    "options": {
      "A": "poor precision",
      "B": "good precision",
      "C": "complete absence of measurement",
      "D": "a systematic error is impossible"
    },
    "answer": "B",
    "explanation": "The readings are very close to one another.",
    "page": 79,
    "hasImage": false
  },
  {
    "id": "chem_analytical_159",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 259,
    "text": "Which of the following is a possible source of systematic error in titration?",
    "options": {
      "A": "Random movement of the hand",
      "B": "Incorrect calibration of a burette",
      "C": "Different meniscus readings by chance",
      "D": "Unpredictable small variations in drop size only"
    },
    "answer": "B",
    "explanation": "A calibration error introduces a consistent bias into measurements.",
    "page": 80,
    "hasImage": false
  },
  {
    "id": "chem_analytical_160",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 260,
    "text": "Which of the following best describes random error?",
    "options": {
      "A": "An error that always has the same magnitude and direction",
      "B": "An unpredictable variation in repeated measurements",
      "C": "An error caused only by a wrongly prepared formula",
      "D": "An error that affects every measurement identically"
    },
    "answer": "B",
    "explanation": "Random errors cause measurements to vary unpredictably around a mean value.",
    "page": 80,
    "hasImage": false
  },
  {
    "id": "chem_analytical_161",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 261,
    "text": "A titre is recorded as 24.50 cm³. If the burette reading uncertainty is ±0.05 cm³ for each reading, what is the approximate absolute uncertainty in the titre obtained from two readings?",
    "options": {
      "A": "±0.025 cm³",
      "B": "±0.05 cm³",
      "C": "±0.10 cm³",
      "D": "±0.50 cm³"
    },
    "answer": "C",
    "explanation": "For two independent readings with absolute uncertainty of ±0.05 cm³ each, the maximum absolute uncertainty in the difference is approximately ±0.10 cm³.",
    "page": 81,
    "hasImage": false
  },
  {
    "id": "chem_analytical_162",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 262,
    "text": "A mass of 5.00 g is measured with an absolute uncertainty of ±0.02 g. Calculate the percentage uncertainty.",
    "options": {
      "A": "0.04%",
      "B": "0.20%",
      "C": "0.40%",
      "D": "4.00%"
    },
    "answer": "C",
    "explanation": "Percentage uncertainty = (0.02/5.00) × 100 = 0.40%.",
    "page": 81,
    "hasImage": false
  },
  {
    "id": "chem_analytical_163",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 263,
    "text": "A volume of 25.0 cm³ has an uncertainty of ±0.1 cm³. Calculate the percentage uncertainty.",
    "options": {
      "A": "0.04%",
      "B": "0.10%",
      "C": "0.40%",
      "D": "4.00%"
    },
    "answer": "C",
    "explanation": "Percentage uncertainty = (0.1/25.0) × 100 = 0.40%.",
    "page": 82,
    "hasImage": false
  },
  {
    "id": "chem_analytical_164",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 264,
    "text": "A measured value is 40.0 cm³, while the accepted value is 39.0 cm³. Calculate the absolute error.",
    "options": {
      "A": "0.1 cm³",
      "B": "1.0 cm³",
      "C": "39.0 cm³",
      "D": "79.0 cm³"
    },
    "answer": "B",
    "explanation": "Absolute error = |40.0 − 39.0| = 1.0 cm³.",
    "page": 82,
    "hasImage": false
  },
  {
    "id": "chem_analytical_165",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 265,
    "text": "A student obtains a value of 48 when the accepted value is 50. Calculate the percentage error.",
    "options": {
      "A": "2%",
      "B": "4%",
      "C": "20%",
      "D": "96%"
    },
    "answer": "B",
    "explanation": "Percentage error = |48 − 50|/50 × 100 = 4%.",
    "page": 83,
    "hasImage": false
  },
  {
    "id": "chem_analytical_166",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 266,
    "text": "Which action is most effective in reducing random errors during titration?",
    "options": {
      "A": "Taking only one titre",
      "B": "Performing repeated titrations and obtaining concordant readings",
      "C": "Ignoring the burette scale",
      "D": "Using different indicators in every trial without reason"
    },
    "answer": "B",
    "explanation": "Repeating measurements helps reduce the influence of random variations.",
    "page": 83,
    "hasImage": false
  },
  {
    "id": "chem_analytical_167",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 267,
    "text": "Which error is most likely to occur when a burette is read from above the meniscus?",
    "options": {
      "A": "Parallax error",
      "B": "Zero error in the balance",
      "C": "Error of chemical composition",
      "D": "Sampling error"
    },
    "answer": "A",
    "explanation": "Viewing a scale at an angle causes an apparent shift in the position of the meniscus.",
    "page": 84,
    "hasImage": false
  },
  {
    "id": "chem_analytical_168",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 268,
    "text": "A balance reads 0.05 g when empty. This is an example of",
    "options": {
      "A": "a zero error",
      "B": "a random error",
      "C": "an omission error",
      "D": "an endpoint error"
    },
    "answer": "A",
    "explanation": "The balance does not read zero when no sample is placed on it.",
    "page": 84,
    "hasImage": false
  },
  {
    "id": "chem_analytical_169",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 269,
    "text": "Why should a titration indicator be used in small quantities?",
    "options": {
      "A": "To prevent it from reacting significantly with the analyte and altering the result",
      "B": "To increase the volume of the titrant",
      "C": "To make the solution more concentrated",
      "D": "To prevent all colour changes"
    },
    "answer": "A",
    "explanation": "Excess indicator may affect the solution chemistry or make the endpoint harder to identify.",
    "page": 85,
    "hasImage": false
  },
  {
    "id": "chem_analytical_170",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Measurement Errors, Accuracy & Uncertainties",
    "bookQuestionNum": 270,
    "text": "The ideal number of decimal places in a burette reading is normally",
    "options": {
      "A": "zero",
      "B": "one",
      "C": "two",
      "D": "four"
    },
    "answer": "C",
    "explanation": "A typical burette is read to the nearest 0.05 cm³ or 0.01 cm³ by estimation, so two decimal places are commonly recorded.",
    "page": 85,
    "hasImage": false
  },
  {
    "id": "chem_analytical_171",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Hygroscopic Substances & Standard Solutions",
    "bookQuestionNum": 271,
    "text": "Which of the following substances is best described as hygroscopic?",
    "options": {
      "A": "A substance that absorbs moisture from the air",
      "B": "A substance that repels all water",
      "C": "A substance that cannot dissolve in water",
      "D": "A substance that produces light when heated"
    },
    "answer": "A",
    "explanation": "Hygroscopic materials absorb water vapour from their surroundings.",
    "page": 86,
    "hasImage": false
  },
  {
    "id": "chem_analytical_172",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Hygroscopic Substances & Standard Solutions",
    "bookQuestionNum": 272,
    "text": "Why is anhydrous calcium chloride unsuitable as a primary standard for many accurate solution preparations?",
    "options": {
      "A": "It is strongly hygroscopic.",
      "B": "It is completely insoluble in water.",
      "C": "It has no chemical formula.",
      "D": "It never reacts with water."
    },
    "answer": "A",
    "explanation": "It absorbs atmospheric moisture, making accurate weighing difficult.",
    "page": 86,
    "hasImage": false
  },
  {
    "id": "chem_analytical_173",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Hygroscopic Substances & Standard Solutions",
    "bookQuestionNum": 273,
    "text": "A standard solution contains 0.050 mol of solute in 250 cm³. Calculate its concentration.",
    "options": {
      "A": "0.050 mol/dm³",
      "B": "0.100 mol/dm³",
      "C": "0.200 mol/dm³",
      "D": "0.500 mol/dm³"
    },
    "answer": "C",
    "explanation": "Concentration = 0.050/0.250 = 0.200 mol/dm³.",
    "page": 87,
    "hasImage": false
  },
  {
    "id": "chem_analytical_174",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Hygroscopic Substances & Standard Solutions",
    "bookQuestionNum": 274,
    "text": "A 100 cm³ sample of 0.50 mol/dm³ acid is diluted to 1.0 dm³. Calculate the new concentration.",
    "options": {
      "A": "0.005 mol/dm³",
      "B": "0.050 mol/dm³",
      "C": "0.100 mol/dm³",
      "D": "0.500 mol/dm³"
    },
    "answer": "B",
    "explanation": "C₂ = C₁V₁/V₂ = 0.50 × 0.100/1.0 = 0.050 mol/dm³.",
    "page": 87,
    "hasImage": false
  },
  {
    "id": "chem_analytical_175",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Hygroscopic Substances & Standard Solutions",
    "bookQuestionNum": 275,
    "text": "A 5.30 g sample of sodium carbonate is dissolved in water to make 500 cm³ of solution. Calculate its concentration. (Na₂CO₃ = 106 g/mol)",
    "options": {
      "A": "0.05 mol/dm³",
      "B": "0.10 mol/dm³",
      "C": "0.20 mol/dm³",
      "D": "0.50 mol/dm³"
    },
    "answer": "B",
    "explanation": "0.050 ÷ 0.500 = 0.10 mol/dm³.",
    "page": 88,
    "hasImage": false
  },
  {
    "id": "chem_analytical_176",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Rf Values & Spot Migration",
    "bookQuestionNum": 276,
    "text": "In paper chromatography, the Rf value is calculated using",
    "options": {
      "A": "distance travelled by solvent ÷ distance travelled by solute",
      "B": "distance travelled by solute ÷ distance travelled by solvent front",
      "C": "mass of solute ÷ volume of solvent",
      "D": "volume of solvent × concentration"
    },
    "answer": "B",
    "explanation": "Rf is the ratio of the distance from the baseline to the centre of the solute spot to the distance from the baseline to the solvent front.",
    "page": 88,
    "hasImage": false
  },
  {
    "id": "chem_analytical_177",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Rf Values & Spot Migration",
    "bookQuestionNum": 277,
    "text": "A substance travels 4.0 cm from the baseline while the solvent front travels 8.0 cm. Calculate its Rf value.",
    "options": {
      "A": "0.25",
      "B": "0.50",
      "C": "2.00",
      "D": "4.00"
    },
    "answer": "B",
    "explanation": "Rf = 4.0/8.0 = 0.50.",
    "page": 89,
    "hasImage": false
  },
  {
    "id": "chem_analytical_178",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Rf Values & Spot Migration",
    "bookQuestionNum": 278,
    "text": "In paper chromatography, a component travels 6.0 cm while the solvent front travels 10.0 cm. Its Rf value is",
    "options": {
      "A": "0.40",
      "B": "0.50",
      "C": "0.60",
      "D": "1.60"
    },
    "answer": "C",
    "explanation": "Rf = 6.0/10.0 = 0.60.",
    "page": 89,
    "hasImage": false
  },
  {
    "id": "chem_analytical_179",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Rf Values & Spot Migration",
    "bookQuestionNum": 279,
    "text": "A chromatogram shows a spot with Rf = 0.75 when the solvent front moves 12 cm. How far did the spot travel from the baseline?",
    "options": {
      "A": "3 cm",
      "B": "6 cm",
      "C": "9 cm",
      "D": "16 cm"
    },
    "answer": "C",
    "explanation": "Distance travelled by spot = 0.75 × 12 = 9 cm.",
    "page": 90,
    "hasImage": false
  },
  {
    "id": "chem_analytical_180",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Rf Values & Spot Migration",
    "bookQuestionNum": 280,
    "text": "Why should the starting line in paper chromatography be drawn with pencil rather than ink?",
    "options": {
      "A": "Pencil marks dissolve readily in the solvent.",
      "B": "Graphite is generally insoluble in the solvent, whereas ink may separate into components.",
      "C": "Pencil makes the solvent evaporate faster.",
      "D": "Ink always prevents capillary action."
    },
    "answer": "B",
    "explanation": "Ink may move with the solvent and interfere with the chromatogram.",
    "page": 90,
    "hasImage": false
  },
  {
    "id": "chem_analytical_181",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Rf Values & Spot Migration",
    "bookQuestionNum": 281,
    "text": "Why must the solvent level be below the sample spot at the beginning of paper chromatography?",
    "options": {
      "A": "To prevent the sample from dissolving directly into the solvent reservoir",
      "B": "To make the paper heavier",
      "C": "To prevent the solvent from moving",
      "D": "To increase the boiling point of the solvent"
    },
    "answer": "A",
    "explanation": "The sample must be carried up the paper by the rising solvent rather than washing off into the solvent pool.",
    "page": 91,
    "hasImage": false
  },
  {
    "id": "chem_analytical_182",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Rf Values & Spot Migration",
    "bookQuestionNum": 282,
    "text": "A mixture gives three spots on a chromatogram. What does this most strongly suggest?",
    "options": {
      "A": "The mixture contains at least three separable components.",
      "B": "The mixture is definitely a pure substance.",
      "C": "The solvent contains no impurities.",
      "D": "The mixture contains no soluble substances."
    },
    "answer": "A",
    "explanation": "Separate spots indicate components that migrate differently under the conditions used.",
    "page": 91,
    "hasImage": false
  },
  {
    "id": "chem_analytical_183",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Rf Values & Spot Migration",
    "bookQuestionNum": 283,
    "text": "Which factor can affect the Rf value of a compound?",
    "options": {
      "A": "The solvent system used",
      "B": "The colour of the laboratory walls",
      "C": "The mass of the chromatography paper packet",
      "D": "The height of the laboratory ceiling"
    },
    "answer": "A",
    "explanation": "Rf depends on the interactions between the compound, stationary phase and mobile phase.",
    "page": 92,
    "hasImage": false
  },
  {
    "id": "chem_analytical_184",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Rf Values & Spot Migration",
    "bookQuestionNum": 284,
    "text": "A chromatographic substance has an Rf value of 1.2. What is the most likely conclusion?",
    "options": {
      "A": "The result is valid because Rf values can always exceed 1.",
      "B": "There is likely an error in measuring the solvent front or the spot distance.",
      "C": "The substance is pure.",
      "D": "The substance has no solubility."
    },
    "answer": "B",
    "explanation": "Under the usual definition, a spot cannot travel farther than the solvent front, so Rf should be between 0 and 1.",
    "page": 92,
    "hasImage": false
  },
  {
    "id": "chem_analytical_185",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Paper Chromatography: Rf Values & Spot Migration",
    "bookQuestionNum": 285,
    "text": "Which technique is particularly suitable for separating coloured dyes in an ink sample?",
    "options": {
      "A": "Paper chromatography",
      "B": "Magnetic separation",
      "C": "Filtration",
      "D": "Sublimation"
    },
    "answer": "A",
    "explanation": "Different dyes travel at different rates through the stationary phase.",
    "page": 93,
    "hasImage": false
  },
  {
    "id": "chem_analytical_186",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Purification Techniques: Recrystallisation & Mixtures",
    "bookQuestionNum": 286,
    "text": "A student wants to purify an impure crystalline solid. Which procedure is most appropriate?",
    "options": {
      "A": "Recrystallisation",
      "B": "Decantation only",
      "C": "Magnetic separation only",
      "D": "Fractional distillation"
    },
    "answer": "A",
    "explanation": "Recrystallisation separates a desired solid from soluble impurities through differences in solubility at different temperatures.",
    "page": 93,
    "hasImage": false
  },
  {
    "id": "chem_analytical_187",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Purification Techniques: Recrystallisation & Mixtures",
    "bookQuestionNum": 287,
    "text": "The best solvent for recrystallisation should",
    "options": {
      "A": "dissolve the solid well when hot but poorly when cold",
      "B": "dissolve the solid equally well at all temperatures",
      "C": "react chemically with the solid",
      "D": "be completely insoluble in the solid"
    },
    "answer": "A",
    "explanation": "The solid dissolves in the hot solvent and crystallises as the solution cools.",
    "page": 94,
    "hasImage": false
  },
  {
    "id": "chem_analytical_188",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Purification Techniques: Recrystallisation & Mixtures",
    "bookQuestionNum": 288,
    "text": "Why are crystals washed with a small amount of cold solvent during recrystallisation?",
    "options": {
      "A": "To dissolve the crystals completely",
      "B": "To remove surface impurities while minimising loss of product",
      "C": "To increase the temperature of the crystals",
      "D": "To convert the crystals into a gas"
    },
    "answer": "B",
    "explanation": "Cold solvent removes adhering impurities while reducing dissolution of the purified crystals.",
    "page": 94,
    "hasImage": false
  },
  {
    "id": "chem_analytical_189",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Purification Techniques: Recrystallisation & Mixtures",
    "bookQuestionNum": 289,
    "text": "Which apparatus is most suitable for separating two immiscible liquids?",
    "options": {
      "A": "Separating funnel",
      "B": "Burette",
      "C": "Volumetric pipette",
      "D": "Evaporating dish"
    },
    "answer": "A",
    "explanation": "Immiscible liquids form separate layers and can be separated using a separating funnel.",
    "page": 95,
    "hasImage": false
  },
  {
    "id": "chem_analytical_190",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Purification Techniques: Recrystallisation & Mixtures",
    "bookQuestionNum": 290,
    "text": "A mixture of sand, salt and water is to be separated to recover both the sand and salt. Which sequence is appropriate?",
    "options": {
      "A": "Filtration followed by evaporation or crystallisation",
      "B": "Sublimation followed by magnetisation",
      "C": "Fractional distillation followed by chromatography only",
      "D": "Decantation followed by magnetic separation"
    },
    "answer": "A",
    "explanation": "Filtration separates sand from the salt solution, after which evaporation or crystallisation recovers the salt.",
    "page": 95,
    "hasImage": false
  },
  {
    "id": "chem_analytical_191",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Purification Techniques: Recrystallisation & Mixtures",
    "bookQuestionNum": 291,
    "text": "Which method is best for separating iron filings from sulphur powder?",
    "options": {
      "A": "Filtration",
      "B": "Magnetisation",
      "C": "Fractional distillation",
      "D": "Chromatography"
    },
    "answer": "B",
    "explanation": "Iron is attracted by a magnet, while sulphur is not.",
    "page": 96,
    "hasImage": false
  },
  {
    "id": "chem_analytical_192",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Purification Techniques: Recrystallisation & Mixtures",
    "bookQuestionNum": 292,
    "text": "A mixture contains ethanol and water. Their boiling points are relatively close. Which separation method is most suitable?",
    "options": {
      "A": "Fractional distillation",
      "B": "Filtration",
      "C": "Sublimation",
      "D": "Decantation"
    },
    "answer": "A",
    "explanation": "A fractionating column allows repeated vaporisation and condensation, improving the separation of miscible liquids with relatively close boiling points.",
    "page": 96,
    "hasImage": false
  },
  {
    "id": "chem_analytical_193",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Melting Point & Physical Purity Determination",
    "bookQuestionNum": 293,
    "text": "Which of the following is a physical change?",
    "options": {
      "A": "Rusting of iron",
      "B": "Burning of magnesium",
      "C": "Melting of ice",
      "D": "Neutralisation of hydrochloric acid with sodium hydroxide"
    },
    "answer": "C",
    "explanation": "Melting changes the physical state of water without changing its chemical identity.",
    "page": 97,
    "hasImage": false
  },
  {
    "id": "chem_analytical_194",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Melting Point & Physical Purity Determination",
    "bookQuestionNum": 294,
    "text": "Why is a melting-point determination useful in checking the purity of an organic solid?",
    "options": {
      "A": "Impurities often lower and broaden its melting range.",
      "B": "All impure substances melt at exactly 100°C.",
      "C": "It determines the electrical conductivity of the solid.",
      "D": "It measures the mass of the sample."
    },
    "answer": "A",
    "explanation": "A pure crystalline substance generally has a sharp melting point, while impurities often disrupt its crystal structure.",
    "page": 97,
    "hasImage": false
  },
  {
    "id": "chem_analytical_195",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Gravimetric Analysis & Percentage Purity Calculations",
    "bookQuestionNum": 295,
    "text": "A 10.0 g impure sample contains 8.0 g of pure substance. Calculate its percentage purity.",
    "options": {
      "A": "20%",
      "B": "40%",
      "C": "80%",
      "D": "125%"
    },
    "answer": "C",
    "explanation": "Percentage purity = (mass of pure substance/mass of sample) × 100 = (8/10) × 100 = 80%.",
    "page": 98,
    "hasImage": false
  },
  {
    "id": "chem_analytical_196",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Gravimetric Analysis & Percentage Purity Calculations",
    "bookQuestionNum": 296,
    "text": "A 5.0 g impure sample of sodium chloride contains 4.0 g of pure NaCl. What is the percentage impurity?",
    "options": {
      "A": "10%",
      "B": "20%",
      "C": "40%",
      "D": "80%"
    },
    "answer": "B",
    "explanation": "Impurity mass = 5.0 − 4.0 = 1.0 g. Percentage impurity = 1/5 × 100 = 20%.",
    "page": 98,
    "hasImage": false
  },
  {
    "id": "chem_analytical_197",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Gravimetric Analysis & Percentage Purity Calculations",
    "bookQuestionNum": 297,
    "text": "A 2.0 g sample of impure calcium carbonate produces 0.44 g of carbon dioxide on complete reaction with excess acid. Calculate the number of moles of CO₂ produced. (Molar mass of CO₂ = 44 g/mol)",
    "options": {
      "A": "0.001 mol",
      "B": "0.010 mol",
      "C": "0.100 mol",
      "D": "1.000 mol"
    },
    "answer": "B",
    "explanation": "Moles = mass/molar mass = 0.44/44 = 0.010 mol.",
    "page": 99,
    "hasImage": false
  },
  {
    "id": "chem_analytical_198",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Gravimetric Analysis & Percentage Purity Calculations",
    "bookQuestionNum": 298,
    "text": "Calcium carbonate reacts with hydrochloric acid according to:\n\nCaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂\n\nIf 0.010 mol of CO₂ is produced, how many moles of CaCO₃ reacted?",
    "options": {
      "A": "0.005 mol",
      "B": "0.010 mol",
      "C": "0.020 mol",
      "D": "0.040 mol"
    },
    "answer": "B",
    "explanation": "The mole ratio of CaCO₃ to CO₂ is 1:1.",
    "page": 99,
    "hasImage": false
  },
  {
    "id": "chem_analytical_199",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Gravimetric Analysis & Percentage Purity Calculations",
    "bookQuestionNum": 299,
    "text": "A 2.0 g sample of limestone produces 0.010 mol of CO₂ when treated with excess hydrochloric acid. Calculate the mass of pure calcium carbonate in the sample. (CaCO₃ = 100 g/mol)",
    "options": {
      "A": "0.10 g",
      "B": "0.50 g",
      "C": "1.00 g",
      "D": "2.00 g"
    },
    "answer": "C",
    "explanation": "Moles of CaCO₃ = 0.010 mol. Mass = 0.010 × 100 = 1.00 g.",
    "page": 100,
    "hasImage": false
  },
  {
    "id": "chem_analytical_200",
    "originalChapter": 2,
    "chapterTitle": "Topic: Analytical Chemistry",
    "topic": "Gravimetric Analysis & Percentage Purity Calculations",
    "bookQuestionNum": 300,
    "text": "Using the data in Question 199, calculate the percentage purity of the limestone.",
    "options": {
      "A": "25%",
      "B": "40%",
      "C": "50%",
      "D": "75%"
    },
    "answer": "C",
    "explanation": "Percentage purity = (1.00/2.00) × 100 = 50%.",
    "page": 100,
    "hasImage": false
  }
,
{
    "id": "chem_general_1",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 301,
    "text": "An atom has a mass number of 39 and an atomic number of 19. How many neutrons does it contain?",
    "options": {
      "A": "19",
      "B": "20",
      "C": "39",
      "D": "58"
    },
    "answer": "B",
    "explanation": "Number of neutrons = mass number − atomic number = 39 − 19 = 20.",
    "page": 101,
    "hasImage": false
  },
  {
    "id": "chem_general_2",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 302,
    "text": "An element contains 75% of an isotope of mass 35 and 25% of an isotope of mass 37. What is its relative atomic mass?",
    "options": {
      "A": "35.0",
      "B": "35.5",
      "C": "36.0",
      "D": "36.5"
    },
    "answer": "B",
    "explanation": "Relative atomic mass = (0.75 × 35) + (0.25 × 37) = 35.5.",
    "page": 101,
    "hasImage": false
  },
  {
    "id": "chem_general_3",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 303,
    "text": "How many electrons are present in a calcium ion, Ca²⁺, if the atomic number of calcium is 20?",
    "options": {
      "A": "18",
      "B": "20",
      "C": "22",
      "D": "40"
    },
    "answer": "A",
    "explanation": "A neutral calcium atom has 20 electrons. Ca²⁺ has lost two electrons, leaving 18.",
    "page": 102,
    "hasImage": false
  },
  {
    "id": "chem_general_4",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 304,
    "text": "What is the electronic configuration of chlorine, atomic number 17?",
    "options": {
      "A": "2, 7, 8",
      "B": "2, 8, 7",
      "C": "2, 8, 8",
      "D": "2, 6, 9"
    },
    "answer": "B",
    "explanation": "The 17 electrons occupy the shells as 2, 8 and 7.",
    "page": 102,
    "hasImage": false
  },
  {
    "id": "chem_general_5",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 305,
    "text": "Which scientist proposed that electrons occupy specific energy levels around the nucleus?",
    "options": {
      "A": "Rutherford",
      "B": "Dalton",
      "C": "Bohr",
      "D": "Thomson"
    },
    "answer": "C",
    "explanation": "Bohr proposed that electrons occupy definite energy levels and can move between them by absorbing or releasing energy.",
    "page": 103,
    "hasImage": false
  },
  {
    "id": "chem_general_6",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 306,
    "text": "Rutherford's gold-foil experiment provided evidence that an atom has",
    "options": {
      "A": "a solid, indivisible structure.",
      "B": "a small, dense, positively charged nucleus.",
      "C": "electrons embedded in a positive sphere.",
      "D": "neutrons occupying fixed energy levels."
    },
    "answer": "B",
    "explanation": "Most alpha particles passed through the foil, but a few were strongly deflected. This showed that most atomic space is empty and that positive charge is concentrated in a small nucleus.",
    "page": 103,
    "hasImage": false
  },
  {
    "id": "chem_general_7",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 307,
    "text": "The atomic number of an element represents the number of",
    "options": {
      "A": "neutrons in its nucleus.",
      "B": "protons in its nucleus.",
      "C": "protons and neutrons combined.",
      "D": "electrons and neutrons combined."
    },
    "answer": "B",
    "explanation": "Atomic number is defined by the number of protons. It identifies the element.",
    "page": 104,
    "hasImage": false
  },
  {
    "id": "chem_general_8",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 308,
    "text": "Which of the following particles has the same number of electrons as neon?",
    "options": {
      "A": "Na⁺",
      "B": "Na",
      "C": "Mg",
      "D": "Cl⁻"
    },
    "answer": "A",
    "explanation": "Neon has 10 electrons. Sodium has 11, but Na⁺ has lost one and therefore has 10 electrons.",
    "page": 104,
    "hasImage": false
  },
  {
    "id": "chem_general_9",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 309,
    "text": "Isotopes of the same element have similar chemical properties because they have the same",
    "options": {
      "A": "number of neutrons.",
      "B": "mass number.",
      "C": "electronic configuration.",
      "D": "nuclear mass."
    },
    "answer": "C",
    "explanation": "Isotopes have the same atomic number and, when neutral, the same number of electrons. Their chemical behaviour is therefore similar.",
    "page": 105,
    "hasImage": false
  },
  {
    "id": "chem_general_10",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 310,
    "text": "Across a period from left to right, the first ionization energy generally increases because",
    "options": {
      "A": "atomic size generally decreases.",
      "B": "the number of shells increases.",
      "C": "nuclear charge decreases.",
      "D": "shielding increases greatly."
    },
    "answer": "A",
    "explanation": "Across a period, nuclear charge increases while electrons are added to the same main shell. The attraction between the nucleus and outer electrons generally becomes stronger.",
    "page": 105,
    "hasImage": false
  },
  {
    "id": "chem_general_11",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 311,
    "text": "The atomic radius of elements generally increases down a group because",
    "options": {
      "A": "nuclear charge becomes zero.",
      "B": "additional electron shells are occupied.",
      "C": "the number of protons decreases.",
      "D": "the valence electrons disappear."
    },
    "answer": "B",
    "explanation": "Each step down a group adds an occupied electron shell, increasing the distance of the outer electrons from the nucleus.",
    "page": 106,
    "hasImage": false
  },
  {
    "id": "chem_general_12",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 312,
    "text": "Which element has the highest electronegativity?",
    "options": {
      "A": "Oxygen",
      "B": "Chlorine",
      "C": "Fluorine",
      "D": "Nitrogen"
    },
    "answer": "C",
    "explanation": "Fluorine attracts shared bonding electrons more strongly than any other element.",
    "page": 106,
    "hasImage": false
  },
  {
    "id": "chem_general_13",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 313,
    "text": "Which property generally increases down Group 1?",
    "options": {
      "A": "Ionization energy",
      "B": "Metallic character",
      "C": "Electronegativity",
      "D": "Attraction for the outer electron"
    },
    "answer": "B",
    "explanation": "The outer electron becomes easier to remove down Group 1 because it is farther from the nucleus and more shielded.",
    "page": 107,
    "hasImage": false
  },
  {
    "id": "chem_general_14",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 314,
    "text": "How many electrons can a p subshell contain at maximum?",
    "options": {
      "A": "2",
      "B": "4",
      "C": "6",
      "D": "10"
    },
    "answer": "C",
    "explanation": "A p subshell contains three orbitals, each holding a maximum of two electrons.",
    "page": 107,
    "hasImage": false
  },
  {
    "id": "chem_general_15",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 315,
    "text": "What is the shape of an s orbital?",
    "options": {
      "A": "Dumb-bell",
      "B": "Spherical",
      "C": "Tetrahedral",
      "D": "Linear"
    },
    "answer": "B",
    "explanation": "An s orbital is spherical around the nucleus, whereas p orbitals have two main lobes.",
    "page": 108,
    "hasImage": false
  },
  {
    "id": "chem_general_16",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 316,
    "text": "What is the molecular shape of ammonia, NH₃?",
    "options": {
      "A": "Linear",
      "B": "Trigonal planar",
      "C": "Trigonal pyramidal",
      "D": "Tetrahedral"
    },
    "answer": "C",
    "explanation": "Nitrogen has three bonding pairs and one lone pair. The lone pair changes the molecular shape from tetrahedral to trigonal pyramidal.",
    "page": 108,
    "hasImage": false
  },
  {
    "id": "chem_general_17",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 317,
    "text": "The bond angle in methane, CH₄, is approximately",
    "options": {
      "A": "90°",
      "B": "104.5°",
      "C": "107°",
      "D": "109.5°"
    },
    "answer": "D",
    "explanation": "Methane has four bonding pairs arranged tetrahedrally around carbon.",
    "page": 109,
    "hasImage": false
  },
  {
    "id": "chem_general_18",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 318,
    "text": "Water has a bent molecular shape because",
    "options": {
      "A": "oxygen has no valence electrons.",
      "B": "oxygen has two bonding pairs and two lone pairs.",
      "C": "hydrogen atoms repel each other strongly enough to form a straight line.",
      "D": "water contains ionic bonds."
    },
    "answer": "B",
    "explanation": "The two lone pairs on oxygen repel the bonding pairs, producing a bent shape with a bond angle of about 104.5°.",
    "page": 109,
    "hasImage": false
  },
  {
    "id": "chem_general_19",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 319,
    "text": "Ionic compounds usually have high melting points because",
    "options": {
      "A": "their molecules are held together by weak forces.",
      "B": "they contain freely moving electrons.",
      "C": "strong electrostatic attractions hold oppositely charged ions together.",
      "D": "their atoms are connected by hydrogen bonds."
    },
    "answer": "C",
    "explanation": "Considerable energy is needed to overcome the strong attractions between positive and negative ions in the crystal lattice.",
    "page": 110,
    "hasImage": false
  },
  {
    "id": "chem_general_20",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Atomic Structure, Periodicity & Chemical Bonding",
    "bookQuestionNum": 320,
    "text": "Graphite conducts electricity because it contains",
    "options": {
      "A": "freely moving protons.",
      "B": "delocalized electrons.",
      "C": "mobile carbon ions.",
      "D": "weak ionic bonds."
    },
    "answer": "B",
    "explanation": "Each carbon atom in graphite forms three covalent bonds. Its remaining electron is delocalized and can move along the layers.",
    "page": 110,
    "hasImage": false
  },
  {
    "id": "chem_general_21",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 321,
    "text": "What mass of aluminium chloride is formed when 5.4 g of aluminium reacts completely with excess chlorine? (Al = 27, Cl = 35.5)",
    "options": {
      "A": "13.35 g",
      "B": "26.70 g",
      "C": "40.05 g",
      "D": "53.40 g"
    },
    "answer": "B",
    "explanation": "2Al + 3Cl₂ → 2AlCl₃. Moles of Al = 5.4/27 = 0.2 mol. The mole ratio of Al to AlCl₃ is 1:1. Molar mass of AlCl₃ = 27 + 106.5 = 133.5 g/mol. Mass = 0.2 × 133.5 = 26.7 g.",
    "page": 111,
    "hasImage": false
  },
  {
    "id": "chem_general_22",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 322,
    "text": "A compound contains 40% carbon, 6.7% hydrogen and 53.3% oxygen by mass. What is its empirical formula?",
    "options": {
      "A": "CHO",
      "B": "CH₂O",
      "C": "C₂H₄O",
      "D": "C₂H₂O₂"
    },
    "answer": "B",
    "explanation": "Divide the percentages by their atomic masses: C = 40/12 ≈ 3.33, H = 6.7/1 = 6.7, O = 53.3/16 ≈ 3.33. Dividing by the smallest gives 1:2:1.",
    "page": 111,
    "hasImage": false
  },
  {
    "id": "chem_general_23",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 323,
    "text": "What mass of carbon is present in 44 g of carbon dioxide? (C = 12, O = 16)",
    "options": {
      "A": "6 g",
      "B": "12 g",
      "C": "16 g",
      "D": "32 g"
    },
    "answer": "B",
    "explanation": "The relative molecular mass of CO₂ is 44. One mole of CO₂ contains 12 g of carbon, so 44 g of CO₂ contains 12 g of carbon.",
    "page": 112,
    "hasImage": false
  },
  {
    "id": "chem_general_24",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 324,
    "text": "What volume will 0.5 mole of an ideal gas occupy at STP, using a molar volume of 22.4 dm³?",
    "options": {
      "A": "5.6 dm³",
      "B": "11.2 dm³",
      "C": "22.4 dm³",
      "D": "44.8 dm³"
    },
    "answer": "B",
    "explanation": "Volume = number of moles × molar volume = 0.5 × 22.4 = 11.2 dm³.",
    "page": 112,
    "hasImage": false
  },
  {
    "id": "chem_general_25",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 325,
    "text": "Four moles of hydrogen are mixed with one mole of oxygen. What is the maximum number of moles of water formed?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "B",
    "explanation": "2H₂ + O₂ → 2H₂O. One mole of oxygen reacts with two moles of hydrogen to produce two moles of water. Oxygen is the limiting reactant.",
    "page": 113,
    "hasImage": false
  },
  {
    "id": "chem_general_26",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 326,
    "text": "The law of definite proportions states that a pure chemical compound always contains",
    "options": {
      "A": "elements in the same fixed proportion by mass.",
      "B": "equal numbers of all atoms.",
      "C": "elements in any proportion depending on its source.",
      "D": "equal masses of all its elements."
    },
    "answer": "A",
    "explanation": "A pure compound has a fixed chemical composition, regardless of how or where it is prepared.",
    "page": 113,
    "hasImage": false
  },
  {
    "id": "chem_general_27",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 327,
    "text": "Carbon forms two oxides containing 12 g of carbon combined with 16 g and 32 g of oxygen respectively. Which law is demonstrated?",
    "options": {
      "A": "Law of conservation of mass",
      "B": "Law of multiple proportions",
      "C": "Avogadro's law",
      "D": "Boyle's law"
    },
    "answer": "B",
    "explanation": "For a fixed mass of carbon, the masses of oxygen are in the simple ratio 16:32 = 1:2.",
    "page": 114,
    "hasImage": false
  },
  {
    "id": "chem_general_28",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 328,
    "text": "Avogadro's law states that equal volumes of gases at the same temperature and pressure contain equal numbers of",
    "options": {
      "A": "atoms only.",
      "B": "molecules.",
      "C": "neutrons.",
      "D": "ions only."
    },
    "answer": "B",
    "explanation": "At constant temperature and pressure, equal gas volumes contain equal numbers of molecules, regardless of the identity of the gas.",
    "page": 114,
    "hasImage": false
  },
  {
    "id": "chem_general_29",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 329,
    "text": "In a closed system, 10 g of substance A reacts with 15 g of substance B. What is the total mass of products formed if the reaction is complete?",
    "options": {
      "A": "5 g",
      "B": "15 g",
      "C": "25 g",
      "D": "150 g"
    },
    "answer": "C",
    "explanation": "The law of conservation of mass states that matter is neither created nor destroyed during a chemical reaction.",
    "page": 115,
    "hasImage": false
  },
  {
    "id": "chem_general_30",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 330,
    "text": "The volume ratio of hydrogen to oxygen when they combine to form water vapour is",
    "options": {
      "A": "1:1",
      "B": "1:2",
      "C": "2:1",
      "D": "2:3"
    },
    "answer": "C",
    "explanation": "The equation 2H₂ + O₂ → 2H₂O shows that two volumes of hydrogen react with one volume of oxygen under the same conditions.",
    "page": 115,
    "hasImage": false
  },
  {
    "id": "chem_general_31",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 331,
    "text": "Which equation represents the ideal gas law?",
    "options": {
      "A": "PV = nRT",
      "B": "P/T = V",
      "C": "PV = RT/n",
      "D": "P = nR/V"
    },
    "answer": "A",
    "explanation": "The ideal gas equation relates pressure, volume, amount of gas and absolute temperature.",
    "page": 116,
    "hasImage": false
  },
  {
    "id": "chem_general_32",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 332,
    "text": "A gas occupies 300 cm³ at 300 K. What volume will it occupy at 600 K if pressure remains constant?",
    "options": {
      "A": "150 cm³",
      "B": "300 cm³",
      "C": "450 cm³",
      "D": "600 cm³"
    },
    "answer": "D",
    "explanation": "By Charles' law, V₁/T₁ = V₂/T₂. V₂ = 300 × 600/300 = 600 cm³.",
    "page": 116,
    "hasImage": false
  },
  {
    "id": "chem_general_33",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 333,
    "text": "A gas occupies 600 cm³ at a pressure of 1 atmosphere. What volume will it occupy at 3 atmospheres if temperature remains constant?",
    "options": {
      "A": "100 cm³",
      "B": "200 cm³",
      "C": "400 cm³",
      "D": "1,800 cm³"
    },
    "answer": "B",
    "explanation": "Boyle's law gives P₁V₁ = P₂V₂. V₂ = (1 × 600)/3 = 200 cm³.",
    "page": 117,
    "hasImage": false
  },
  {
    "id": "chem_general_34",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 334,
    "text": "A gas mixture contains oxygen at a partial pressure of 1.2 atm and nitrogen at 0.8 atm. What is the total pressure?",
    "options": {
      "A": "0.4 atm",
      "B": "1.0 atm",
      "C": "2.0 atm",
      "D": "2.4 atm"
    },
    "answer": "C",
    "explanation": "Dalton's law states that total pressure equals the sum of the partial pressures of the gases: 1.2 + 0.8 = 2.0 atm.",
    "page": 117,
    "hasImage": false
  },
  {
    "id": "chem_general_35",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 335,
    "text": "At the same temperature and pressure, how many times faster does hydrogen diffuse than oxygen? (H₂ = 2, O₂ = 32)",
    "options": {
      "A": "2 times",
      "B": "4 times",
      "C": "8 times",
      "D": "16 times"
    },
    "answer": "B",
    "explanation": "By Graham's law, rate ratio = √(32/2) = √16 = 4.",
    "page": 118,
    "hasImage": false
  },
  {
    "id": "chem_general_36",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 336,
    "text": "The vapour density of a gas is 22. What is its relative molecular mass?",
    "options": {
      "A": "11",
      "B": "22",
      "C": "44",
      "D": "66"
    },
    "answer": "C",
    "explanation": "Relative molecular mass = 2 × vapour density = 2 × 22 = 44.",
    "page": 118,
    "hasImage": false
  },
  {
    "id": "chem_general_37",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 337,
    "text": "A gas occupies 2.0 dm³ at 27°C. What volume will it occupy at 127°C at constant pressure?",
    "options": {
      "A": "1.5 dm³",
      "B": "2.0 dm³",
      "C": "2.67 dm³",
      "D": "4.0 dm³"
    },
    "answer": "C",
    "explanation": "Convert temperatures to kelvin: 27°C = 300 K and 127°C = 400 K. By Charles' law, V₂ = 2.0 × 400/300 = 2.67 dm³.",
    "page": 119,
    "hasImage": false
  },
  {
    "id": "chem_general_38",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 338,
    "text": "What volume is occupied by 0.25 mole of an ideal gas at STP?",
    "options": {
      "A": "2.8 dm³",
      "B": "5.6 dm³",
      "C": "11.2 dm³",
      "D": "22.4 dm³"
    },
    "answer": "B",
    "explanation": "Volume = 0.25 × 22.4 = 5.6 dm³.",
    "page": 119,
    "hasImage": false
  },
  {
    "id": "chem_general_39",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 339,
    "text": "The relative molecular mass of a gas is 60. What is its vapour density?",
    "options": {
      "A": "15",
      "B": "20",
      "C": "30",
      "D": "60"
    },
    "answer": "C",
    "explanation": "Vapour density = relative molecular mass ÷ 2 = 60 ÷ 2 = 30.",
    "page": 120,
    "hasImage": false
  },
  {
    "id": "chem_general_40",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Stoichiometry, Mole Concept & Gas Laws",
    "bookQuestionNum": 340,
    "text": "Which statement about gas molecules is consistent with the kinetic theory?",
    "options": {
      "A": "They remain fixed in regular positions.",
      "B": "They are in continuous random motion.",
      "C": "They have no kinetic energy.",
      "D": "They attract one another strongly at all distances."
    },
    "answer": "B",
    "explanation": "Gas particles move continuously and randomly, colliding with one another and the walls of their container.",
    "page": 120,
    "hasImage": false
  },
  {
    "id": "chem_general_41",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 341,
    "text": "Which gas makes up the largest proportion of dry atmospheric air?",
    "options": {
      "A": "Oxygen",
      "B": "Carbon dioxide",
      "C": "Nitrogen",
      "D": "Argon"
    },
    "answer": "C",
    "explanation": "Nitrogen makes up approximately 78% of dry air, while oxygen accounts for about 21%.",
    "page": 121,
    "hasImage": false
  },
  {
    "id": "chem_general_42",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 342,
    "text": "Industrial oxygen is commonly obtained from air by",
    "options": {
      "A": "fractional distillation of liquid air.",
      "B": "electrolysis of dry nitrogen.",
      "C": "heating limestone.",
      "D": "filtration of compressed air."
    },
    "answer": "A",
    "explanation": "Air is cooled and liquefied. Its components are separated according to their different boiling points.",
    "page": 121,
    "hasImage": false
  },
  {
    "id": "chem_general_43",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 343,
    "text": "Temporary hardness of water is mainly caused by dissolved",
    "options": {
      "A": "calcium and magnesium hydrogencarbonates.",
      "B": "sodium chloride and potassium chloride.",
      "C": "calcium sulphate and magnesium sulphate.",
      "D": "sodium carbonate and sodium nitrate."
    },
    "answer": "A",
    "explanation": "These hydrogencarbonates release insoluble carbonates when heated, which can be removed from the water.",
    "page": 122,
    "hasImage": false
  },
  {
    "id": "chem_general_44",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 344,
    "text": "Which substance is most likely responsible for permanent hardness of water?",
    "options": {
      "A": "Calcium hydrogencarbonate",
      "B": "Magnesium hydrogencarbonate",
      "C": "Calcium sulphate",
      "D": "Dissolved oxygen"
    },
    "answer": "C",
    "explanation": "Calcium and magnesium sulphates or chlorides cause permanent hardness, which cannot be removed by boiling alone.",
    "page": 122,
    "hasImage": false
  },
  {
    "id": "chem_general_45",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 345,
    "text": "Permanent hardness of water can be reduced using",
    "options": {
      "A": "sodium chloride.",
      "B": "washing soda.",
      "C": "ethanol.",
      "D": "dilute hydrochloric acid."
    },
    "answer": "B",
    "explanation": "Sodium carbonate reacts with dissolved calcium and magnesium ions to form insoluble carbonates.",
    "page": 123,
    "hasImage": false
  },
  {
    "id": "chem_general_46",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 346,
    "text": "Water is suitable for many biological processes partly because it",
    "options": {
      "A": "is always non-polar.",
      "B": "dissolves many ionic and polar substances.",
      "C": "has no hydrogen bonds.",
      "D": "cannot dissolve gases."
    },
    "answer": "B",
    "explanation": "Water is a polar solvent and can dissolve many ionic and polar substances needed for biological reactions.",
    "page": 123,
    "hasImage": false
  },
  {
    "id": "chem_general_47",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 347,
    "text": "The high specific heat capacity of water means that it",
    "options": {
      "A": "heats up and cools down very quickly.",
      "B": "requires much energy to change its temperature.",
      "C": "cannot absorb heat.",
      "D": "freezes at all room temperatures."
    },
    "answer": "B",
    "explanation": "Water absorbs or releases a relatively large amount of heat before its temperature changes significantly.",
    "page": 124,
    "hasImage": false
  },
  {
    "id": "chem_general_48",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 348,
    "text": "Ice floats on liquid water because",
    "options": {
      "A": "ice has a higher density than water.",
      "B": "ice contains trapped salt.",
      "C": "its open hydrogen-bonded structure makes it less dense.",
      "D": "its molecules stop moving completely."
    },
    "answer": "C",
    "explanation": "Hydrogen bonding holds water molecules in an open structure in ice, increasing its volume and lowering its density.",
    "page": 124,
    "hasImage": false
  },
  {
    "id": "chem_general_49",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 349,
    "text": "Which gas dissolved in natural water is particularly important for the respiration of aquatic animals?",
    "options": {
      "A": "Nitrogen",
      "B": "Oxygen",
      "C": "Hydrogen",
      "D": "Helium"
    },
    "answer": "B",
    "explanation": "Aquatic organisms obtain dissolved oxygen from water for aerobic respiration.",
    "page": 125,
    "hasImage": false
  },
  {
    "id": "chem_general_50",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 350,
    "text": "A substance that absorbs moisture from the atmosphere and eventually dissolves in the absorbed water is described as",
    "options": {
      "A": "efflorescent.",
      "B": "deliquescent.",
      "C": "volatile.",
      "D": "sublimable."
    },
    "answer": "B",
    "explanation": "Deliquescent substances absorb enough moisture from air to form a solution. Sodium hydroxide is an example.",
    "page": 125,
    "hasImage": false
  },
  {
    "id": "chem_general_51",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 351,
    "text": "Washing soda crystals exposed to dry air may lose water of crystallization. This process is called",
    "options": {
      "A": "deliquescence.",
      "B": "efflorescence.",
      "C": "condensation.",
      "D": "hydration."
    },
    "answer": "B",
    "explanation": "Efflorescence is the loss of water of crystallization by a hydrated salt on exposure to air.",
    "page": 126,
    "hasImage": false
  },
  {
    "id": "chem_general_52",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 352,
    "text": "Silica gel is commonly used in packaging because it is",
    "options": {
      "A": "hygroscopic.",
      "B": "deliquescent.",
      "C": "radioactive.",
      "D": "strongly acidic."
    },
    "answer": "A",
    "explanation": "Hygroscopic substances absorb moisture from the atmosphere. Silica gel helps keep packaged products dry.",
    "page": 126,
    "hasImage": false
  },
  {
    "id": "chem_general_53",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 353,
    "text": "A saturated solution at a particular temperature is one that",
    "options": {
      "A": "contains no dissolved solute.",
      "B": "contains the maximum amount of solute that can dissolve at that temperature.",
      "C": "must contain more solvent than solute.",
      "D": "always has a concentration of 1 mol/dm³."
    },
    "answer": "B",
    "explanation": "A saturated solution is in equilibrium with undissolved solute at the stated temperature.",
    "page": 127,
    "hasImage": false
  },
  {
    "id": "chem_general_54",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 354,
    "text": "A solution containing more dissolved solute than is normally required for saturation at a given temperature is called",
    "options": {
      "A": "dilute.",
      "B": "unsaturated.",
      "C": "supersaturated.",
      "D": "colloidal."
    },
    "answer": "C",
    "explanation": "A supersaturated solution contains more dissolved solute than a normal saturated solution at the same temperature and is often unstable.",
    "page": 127,
    "hasImage": false
  },
  {
    "id": "chem_general_55",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 355,
    "text": "The solubility of most gases in water increases when",
    "options": {
      "A": "temperature increases.",
      "B": "pressure above the liquid increases.",
      "C": "the liquid is stirred less.",
      "D": "the gas is removed."
    },
    "answer": "B",
    "explanation": "Higher gas pressure above a liquid generally increases the amount of gas that dissolves in it.",
    "page": 128,
    "hasImage": false
  },
  {
    "id": "chem_general_56",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 356,
    "text": "The scattering of a beam of light by colloidal particles is known as",
    "options": {
      "A": "Brownian movement.",
      "B": "Tyndall effect.",
      "C": "electrolysis.",
      "D": "diffusion."
    },
    "answer": "B",
    "explanation": "Colloidal particles scatter light, making the path of a beam visible in the mixture.",
    "page": 128,
    "hasImage": false
  },
  {
    "id": "chem_general_57",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 357,
    "text": "Which property distinguishes a suspension from a true solution?",
    "options": {
      "A": "A suspension always contains gases.",
      "B": "Particles in a suspension can settle on standing.",
      "C": "A true solution contains visible particles.",
      "D": "Suspensions cannot be separated by filtration."
    },
    "answer": "B",
    "explanation": "Suspension particles are relatively large and can settle under gravity, unlike the dissolved particles in a true solution.",
    "page": 129,
    "hasImage": false
  },
  {
    "id": "chem_general_58",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 358,
    "text": "The major chemical process through which plants remove carbon dioxide from the atmosphere is",
    "options": {
      "A": "respiration.",
      "B": "photosynthesis.",
      "C": "fermentation.",
      "D": "combustion."
    },
    "answer": "B",
    "explanation": "Plants use carbon dioxide and water to produce carbohydrates during photosynthesis, releasing oxygen.",
    "page": 129,
    "hasImage": false
  },
  {
    "id": "chem_general_59",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 359,
    "text": "The decomposition of untreated sewage in water can cause a sharp decrease in dissolved oxygen because",
    "options": {
      "A": "microorganisms use oxygen while breaking down organic matter.",
      "B": "sewage immediately converts oxygen to nitrogen.",
      "C": "dissolved salts remove all oxygen by filtration.",
      "D": "sunlight stops producing oxygen permanently."
    },
    "answer": "A",
    "explanation": "Microorganisms consume dissolved oxygen during the breakdown of organic waste, raising the biological oxygen demand.",
    "page": 130,
    "hasImage": false
  },
  {
    "id": "chem_general_60",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Air, Water, Solutions & Colloids",
    "bookQuestionNum": 360,
    "text": "Excessive growth of algae in a lake following nutrient enrichment is called",
    "options": {
      "A": "desalination.",
      "B": "eutrophication.",
      "C": "calcination.",
      "D": "corrosion."
    },
    "answer": "B",
    "explanation": "Excess nitrates and phosphates promote rapid algal growth. Their decomposition can reduce dissolved oxygen in the water.",
    "page": 130,
    "hasImage": false
  },
  {
    "id": "chem_general_61",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 361,
    "text": "A reaction that releases heat to its surroundings is described as",
    "options": {
      "A": "endothermic.",
      "B": "exothermic.",
      "C": "reversible only.",
      "D": "non-spontaneous."
    },
    "answer": "B",
    "explanation": "Exothermic reactions release heat, so their enthalpy change is negative.",
    "page": 131,
    "hasImage": false
  },
  {
    "id": "chem_general_62",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 362,
    "text": "Which of the following processes is usually endothermic?",
    "options": {
      "A": "Freezing water",
      "B": "Condensing steam",
      "C": "Melting ice",
      "D": "Burning methane"
    },
    "answer": "C",
    "explanation": "Melting requires the absorption of heat to overcome some of the attractive forces holding the solid structure together.",
    "page": 131,
    "hasImage": false
  },
  {
    "id": "chem_general_63",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 363,
    "text": "For an exothermic reaction, the enthalpy of the products is generally",
    "options": {
      "A": "greater than that of the reactants.",
      "B": "lower than that of the reactants.",
      "C": "always zero.",
      "D": "equal to the activation energy."
    },
    "answer": "B",
    "explanation": "The reaction releases energy, leaving the products at a lower enthalpy than the reactants.",
    "page": 132,
    "hasImage": false
  },
  {
    "id": "chem_general_64",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 364,
    "text": "Which change generally causes an increase in entropy?",
    "options": {
      "A": "Condensation of steam",
      "B": "Freezing water",
      "C": "Mixing two gases",
      "D": "Crystallization of a dissolved salt"
    },
    "answer": "C",
    "explanation": "Mixing gases increases the number of possible particle arrangements and therefore increases entropy.",
    "page": 132,
    "hasImage": false
  },
  {
    "id": "chem_general_65",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 365,
    "text": "A reaction has ΔH = −50 kJ mol⁻¹ and TΔS = +10 kJ mol⁻¹. What is ΔG?",
    "options": {
      "A": "−60 kJ mol⁻¹",
      "B": "−40 kJ mol⁻¹",
      "C": "+40 kJ mol⁻¹",
      "D": "+60 kJ mol⁻¹"
    },
    "answer": "A",
    "explanation": "ΔG = ΔH − TΔS = −50 − 10 = −60 kJ mol⁻¹.",
    "page": 133,
    "hasImage": false
  },
  {
    "id": "chem_general_66",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 366,
    "text": "For a process at constant temperature and pressure, a negative Gibbs free-energy change indicates that the process is",
    "options": {
      "A": "spontaneous in the forward direction.",
      "B": "necessarily very fast.",
      "C": "at equilibrium.",
      "D": "impossible."
    },
    "answer": "A",
    "explanation": "A negative ΔG indicates thermodynamic favourability in the forward direction. It does not mean the reaction must be fast.",
    "page": 133,
    "hasImage": false
  },
  {
    "id": "chem_general_67",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 367,
    "text": "A catalyst increases the rate of a reaction by",
    "options": {
      "A": "increasing the enthalpy of the products.",
      "B": "lowering the activation energy through an alternative reaction pathway.",
      "C": "increasing the equilibrium constant.",
      "D": "changing the mass of the reactants."
    },
    "answer": "B",
    "explanation": "A catalyst provides an alternative pathway with lower activation energy and is not consumed overall.",
    "page": 134,
    "hasImage": false
  },
  {
    "id": "chem_general_68",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 368,
    "text": "Increasing the temperature of a reaction generally increases its rate because",
    "options": {
      "A": "all molecules become larger.",
      "B": "more molecules have energy equal to or greater than the activation energy.",
      "C": "the activation energy always becomes zero.",
      "D": "the number of reactant atoms increases."
    },
    "answer": "B",
    "explanation": "At higher temperature, a greater fraction of particles has enough energy to react when collisions occur.",
    "page": 134,
    "hasImage": false
  },
  {
    "id": "chem_general_69",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 369,
    "text": "Powdered calcium carbonate reacts faster with dilute hydrochloric acid than an equal mass of large marble chips because the powder has",
    "options": {
      "A": "a lower chemical composition.",
      "B": "a greater surface area exposed to the acid.",
      "C": "a higher relative atomic mass.",
      "D": "less calcium carbonate."
    },
    "answer": "B",
    "explanation": "More particles are exposed to the acid, allowing more effective collisions per unit time.",
    "page": 135,
    "hasImage": false
  },
  {
    "id": "chem_general_70",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 370,
    "text": "What is the main function of manganese(IV) oxide in the decomposition of hydrogen peroxide?",
    "options": {
      "A": "It increases the activation energy.",
      "B": "It acts as a catalyst.",
      "C": "It forms the main product.",
      "D": "It prevents oxygen from being released."
    },
    "answer": "B",
    "explanation": "Manganese(IV) oxide speeds up hydrogen peroxide decomposition without being used up overall.",
    "page": 135,
    "hasImage": false
  },
  {
    "id": "chem_general_71",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 371,
    "text": "In a reaction-rate experiment, the rate is measured by monitoring the volume of gas produced. The initial rate is obtained from",
    "options": {
      "A": "the final gas volume only.",
      "B": "the gradient of the curve at the start.",
      "C": "the total time divided by the final volume.",
      "D": "the area below the curve."
    },
    "answer": "B",
    "explanation": "Reaction rate is the change in quantity per unit time. The initial rate is the slope of the tangent to the curve at time zero.",
    "page": 136,
    "hasImage": false
  },
  {
    "id": "chem_general_72",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 372,
    "text": "In a reversible reaction at dynamic equilibrium,",
    "options": {
      "A": "both forward and reverse reactions stop.",
      "B": "the forward reaction is faster.",
      "C": "the reverse reaction is faster.",
      "D": "the forward and reverse reaction rates are equal."
    },
    "answer": "D",
    "explanation": "Both reactions continue at equal rates, so the concentrations of reactants and products remain constant.",
    "page": 136,
    "hasImage": false
  },
  {
    "id": "chem_general_73",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 373,
    "text": "For the equilibrium N₂ + 3H₂ ⇌ 2NH₃, increasing the pressure favours",
    "options": {
      "A": "the reverse reaction.",
      "B": "ammonia formation.",
      "C": "hydrogen formation only.",
      "D": "no direction because pressure has no effect."
    },
    "answer": "B",
    "explanation": "The product side contains two moles of gas, compared with four moles on the reactant side. Higher pressure favours the side with fewer gas molecules.",
    "page": 137,
    "hasImage": false
  },
  {
    "id": "chem_general_74",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 374,
    "text": "The Haber process is exothermic. Increasing the temperature at equilibrium will",
    "options": {
      "A": "favour ammonia formation.",
      "B": "favour the reverse reaction.",
      "C": "have no effect on equilibrium position.",
      "D": "increase the amount of ammonia without limit."
    },
    "answer": "B",
    "explanation": "Increasing temperature favours the endothermic direction. Since ammonia formation is exothermic, higher temperature shifts equilibrium towards nitrogen and hydrogen.",
    "page": 137,
    "hasImage": false
  },
  {
    "id": "chem_general_75",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 375,
    "text": "A catalyst added to a system already at equilibrium",
    "options": {
      "A": "increases the amount of products at equilibrium.",
      "B": "shifts equilibrium to the left.",
      "C": "shifts equilibrium to the right.",
      "D": "speeds up forward and reverse reactions equally without changing the equilibrium position."
    },
    "answer": "D",
    "explanation": "A catalyst helps the system reach equilibrium faster but does not alter the equilibrium composition.",
    "page": 138,
    "hasImage": false
  },
  {
    "id": "chem_general_76",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 376,
    "text": "For N₂O₄(g) ⇌ 2NO₂(g), the forward reaction is endothermic. What happens when the temperature is increased?",
    "options": {
      "A": "The equilibrium shifts towards N₂O₄.",
      "B": "The equilibrium shifts towards NO₂.",
      "C": "Both gases disappear.",
      "D": "The equilibrium constant becomes zero."
    },
    "answer": "B",
    "explanation": "Higher temperature favours the endothermic forward reaction, producing more nitrogen dioxide.",
    "page": 138,
    "hasImage": false
  },
  {
    "id": "chem_general_77",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 377,
    "text": "For the equilibrium H₂(g) + I₂(g) ⇌ 2HI(g), an increase in pressure at constant temperature will",
    "options": {
      "A": "favour the forward reaction.",
      "B": "favour the reverse reaction.",
      "C": "have no effect on the equilibrium position.",
      "D": "stop the reaction."
    },
    "answer": "C",
    "explanation": "There are two moles of gas on each side. A pressure change therefore does not favour either side.",
    "page": 139,
    "hasImage": false
  },
  {
    "id": "chem_general_78",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 378,
    "text": "What happens to the equilibrium constant of a reaction when a catalyst is added?",
    "options": {
      "A": "It increases.",
      "B": "It decreases.",
      "C": "It remains unchanged.",
      "D": "It becomes equal to zero."
    },
    "answer": "C",
    "explanation": "The equilibrium constant depends on temperature, not on the presence of a catalyst.",
    "page": 139,
    "hasImage": false
  },
  {
    "id": "chem_general_79",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 379,
    "text": "If the concentration of a reactant is increased in an equilibrium system, the system generally shifts to",
    "options": {
      "A": "consume some of the added reactant.",
      "B": "produce more of the added reactant.",
      "C": "stop both reactions.",
      "D": "reduce the temperature automatically."
    },
    "answer": "A",
    "explanation": "By Le Chatelier's principle, the equilibrium shifts in the direction that opposes the concentration change.",
    "page": 140,
    "hasImage": false
  },
  {
    "id": "chem_general_80",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Energetics, Kinetics & Chemical Equilibrium",
    "bookQuestionNum": 380,
    "text": "A reaction is slow at room temperature but becomes much faster when heated. The best explanation is that heating",
    "options": {
      "A": "reduces the number of reactant molecules.",
      "B": "increases the fraction of collisions with sufficient energy.",
      "C": "changes all molecules into ions.",
      "D": "removes the activation energy entirely."
    },
    "answer": "B",
    "explanation": "Higher temperature increases molecular kinetic energy and the number of effective collisions.",
    "page": 140,
    "hasImage": false
  },
  {
    "id": "chem_general_81",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 381,
    "text": "Oxidation can be defined as",
    "options": {
      "A": "gain of electrons.",
      "B": "loss of electrons.",
      "C": "gain of neutrons.",
      "D": "loss of protons only."
    },
    "answer": "B",
    "explanation": "Oxidation involves electron loss and an increase in oxidation number.",
    "page": 141,
    "hasImage": false
  },
  {
    "id": "chem_general_82",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 382,
    "text": "In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, the substance oxidized is",
    "options": {
      "A": "copper.",
      "B": "zinc.",
      "C": "sulphate ion.",
      "D": "copper(II) ion."
    },
    "answer": "B",
    "explanation": "Zinc changes from oxidation state 0 to +2 by losing two electrons.",
    "page": 141,
    "hasImage": false
  },
  {
    "id": "chem_general_83",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 383,
    "text": "In the reaction Fe₂O₃ + 3CO → 2Fe + 3CO₂, carbon monoxide acts as",
    "options": {
      "A": "an oxidizing agent.",
      "B": "a reducing agent.",
      "C": "an acid.",
      "D": "a catalyst only."
    },
    "answer": "B",
    "explanation": "CO removes oxygen from iron(III) oxide and is itself oxidized to carbon dioxide.",
    "page": 142,
    "hasImage": false
  },
  {
    "id": "chem_general_84",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 384,
    "text": "What is the oxidation number of sulphur in H₂SO₄?",
    "options": {
      "A": "+2",
      "B": "+4",
      "C": "+6",
      "D": "−2"
    },
    "answer": "C",
    "explanation": "Let the oxidation number of sulphur be x. 2(+1) + x + 4(−2) = 0. Therefore, x = +6.",
    "page": 142,
    "hasImage": false
  },
  {
    "id": "chem_general_85",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 385,
    "text": "What is the oxidation number of manganese in KMnO₄?",
    "options": {
      "A": "+2",
      "B": "+4",
      "C": "+6",
      "D": "+7"
    },
    "answer": "D",
    "explanation": "Potassium is +1 and four oxygen atoms contribute −8. The manganese oxidation number must be +7 to make the compound neutral.",
    "page": 143,
    "hasImage": false
  },
  {
    "id": "chem_general_86",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 386,
    "text": "In the reaction 2Mg + O₂ → 2MgO, oxygen is",
    "options": {
      "A": "oxidized.",
      "B": "reduced.",
      "C": "unchanged.",
      "D": "acting as a catalyst."
    },
    "answer": "B",
    "explanation": "Oxygen changes from oxidation number 0 in O₂ to −2 in MgO. A decrease in oxidation number is reduction.",
    "page": 143,
    "hasImage": false
  },
  {
    "id": "chem_general_87",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 387,
    "text": "Which statement correctly describes an oxidizing agent?",
    "options": {
      "A": "It accepts electrons and is reduced.",
      "B": "It donates electrons and is reduced.",
      "C": "It always contains oxygen.",
      "D": "It cannot participate in redox reactions."
    },
    "answer": "A",
    "explanation": "An oxidizing agent causes another substance to lose electrons while it gains electrons itself.",
    "page": 144,
    "hasImage": false
  },
  {
    "id": "chem_general_88",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 388,
    "text": "The oxidation number of chromium in Cr₂O₇²⁻ is",
    "options": {
      "A": "+3",
      "B": "+4",
      "C": "+6",
      "D": "+7"
    },
    "answer": "C",
    "explanation": "Let chromium be x. 2x + 7(−2) = −2. Therefore, 2x = 12 and x = +6.",
    "page": 144,
    "hasImage": false
  },
  {
    "id": "chem_general_89",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 389,
    "text": "Which process occurs at the anode during electrolysis?",
    "options": {
      "A": "Reduction",
      "B": "Oxidation",
      "C": "Neutralization",
      "D": "Hydration"
    },
    "answer": "B",
    "explanation": "Oxidation occurs at the anode, where anions or other species lose electrons.",
    "page": 145,
    "hasImage": false
  },
  {
    "id": "chem_general_90",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 390,
    "text": "During electrolysis, positively charged ions move towards the",
    "options": {
      "A": "anode.",
      "B": "cathode.",
      "C": "electrolyte surface only.",
      "D": "salt bridge."
    },
    "answer": "B",
    "explanation": "Cations are positively charged and are attracted to the negatively charged cathode in an electrolytic cell.",
    "page": 145,
    "hasImage": false
  },
  {
    "id": "chem_general_91",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 391,
    "text": "Which of the following is a non-electrolyte in its pure form?",
    "options": {
      "A": "Molten sodium chloride",
      "B": "Aqueous hydrochloric acid",
      "C": "Aqueous sodium hydroxide",
      "D": "Glucose solution"
    },
    "answer": "D",
    "explanation": "Glucose dissolves as neutral molecules and does not produce ions in solution. The other examples contain mobile ions.",
    "page": 146,
    "hasImage": false
  },
  {
    "id": "chem_general_92",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 392,
    "text": "In the electrolysis of molten sodium chloride, the product at the cathode is",
    "options": {
      "A": "chlorine.",
      "B": "sodium.",
      "C": "hydrogen.",
      "D": "sodium hydroxide."
    },
    "answer": "B",
    "explanation": "Sodium ions gain electrons at the cathode: Na⁺ + e⁻ → Na.",
    "page": 146,
    "hasImage": false
  },
  {
    "id": "chem_general_93",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 393,
    "text": "During the electrolysis of concentrated aqueous sodium chloride using inert electrodes, which gases are produced at the electrodes?",
    "options": {
      "A": "Sodium and oxygen",
      "B": "Hydrogen and chlorine",
      "C": "Sodium and chlorine",
      "D": "Hydrogen and sodium"
    },
    "answer": "B",
    "explanation": "Water is reduced at the cathode to hydrogen, while chloride ions are oxidized at the anode to chlorine. Sodium hydroxide also remains in the solution.",
    "page": 147,
    "hasImage": false
  },
  {
    "id": "chem_general_94",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 394,
    "text": "In the electrolysis of copper(II) sulphate solution using inert electrodes, the substance deposited at the cathode is",
    "options": {
      "A": "oxygen.",
      "B": "hydrogen.",
      "C": "copper.",
      "D": "sulphur."
    },
    "answer": "C",
    "explanation": "Cu²⁺ ions are preferentially discharged at the cathode: Cu²⁺ + 2e⁻ → Cu.",
    "page": 147,
    "hasImage": false
  },
  {
    "id": "chem_general_95",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 395,
    "text": "In copper purification by electrolysis, the impure copper is used as the",
    "options": {
      "A": "cathode.",
      "B": "anode.",
      "C": "electrolyte.",
      "D": "salt bridge."
    },
    "answer": "B",
    "explanation": "Copper from the impure anode dissolves into solution as Cu²⁺ ions and is deposited as pure copper at the cathode.",
    "page": 148,
    "hasImage": false
  },
  {
    "id": "chem_general_96",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 396,
    "text": "One faraday is approximately equal to",
    "options": {
      "A": "9,650 C.",
      "B": "48,250 C.",
      "C": "96,500 C.",
      "D": "193,000 C."
    },
    "answer": "C",
    "explanation": "One faraday is the charge carried by one mole of electrons, approximately 96,500 coulombs.",
    "page": 148,
    "hasImage": false
  },
  {
    "id": "chem_general_97",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 397,
    "text": "A current of 2 A flows for 100 seconds. What charge passes through the circuit?",
    "options": {
      "A": "20 C",
      "B": "100 C",
      "C": "200 C",
      "D": "400 C"
    },
    "answer": "C",
    "explanation": "Charge = current × time = 2 × 100 = 200 C.",
    "page": 149,
    "hasImage": false
  },
  {
    "id": "chem_general_98",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 398,
    "text": "How many moles of electrons are represented by a charge of 19,300 C? (1 F = 96,500 C)",
    "options": {
      "A": "0.1 mol",
      "B": "0.2 mol",
      "C": "0.5 mol",
      "D": "2.0 mol"
    },
    "answer": "B",
    "explanation": "Moles of electrons = Q/F = 19,300/96,500 = 0.2 mol.",
    "page": 149,
    "hasImage": false
  },
  {
    "id": "chem_general_99",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 399,
    "text": "Which metal is most suitable for sacrificial protection of iron because it is more reactive than iron?",
    "options": {
      "A": "Copper",
      "B": "Silver",
      "C": "Magnesium",
      "D": "Gold"
    },
    "answer": "C",
    "explanation": "Magnesium oxidizes more readily than iron and can protect the iron by acting as a sacrificial anode.",
    "page": 150,
    "hasImage": false
  },
  {
    "id": "chem_general_100",
    "originalChapter": 3,
    "chapterTitle": "Topic: General, Physical & Inorganic Chemistry",
    "topic": "Redox Reactions & Electrolysis",
    "bookQuestionNum": 400,
    "text": "Rusting of iron requires",
    "options": {
      "A": "nitrogen only.",
      "B": "oxygen and water.",
      "C": "carbon dioxide only.",
      "D": "hydrogen and chlorine."
    },
    "answer": "B",
    "explanation": "Rusting is an electrochemical corrosion process requiring both oxygen and moisture.",
    "page": 150,
    "hasImage": false
  },
{
    "id": "chem_general_101",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 401,
    "text": "Which of the following is the correct laboratory preparation of hydrogen?",
    "options": {
      "A": "Reacting zinc with dilute hydrochloric acid",
      "B": "Heating sodium chloride",
      "C": "Passing oxygen over copper",
      "D": "Heating calcium carbonate alone"
    },
    "answer": "A",
    "explanation": "Zn + 2HCl → ZnCl₂ + H₂. Zinc displaces hydrogen from dilute hydrochloric acid.",
    "page": 151,
    "hasImage": false
  },
  {
    "id": "chem_general_102",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 402,
    "text": "A common test for hydrogen gas is that it",
    "options": {
      "A": "relights a glowing splint.",
      "B": "turns limewater milky.",
      "C": "burns with a squeaky pop.",
      "D": "bleaches damp litmus paper."
    },
    "answer": "C",
    "explanation": "Hydrogen burns rapidly with oxygen in air, producing water and a characteristic squeaky pop.",
    "page": 151,
    "hasImage": false
  },
  {
    "id": "chem_general_103",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 403,
    "text": "Water gas is a mixture mainly of",
    "options": {
      "A": "hydrogen and carbon monoxide.",
      "B": "hydrogen and carbon dioxide.",
      "C": "nitrogen and oxygen.",
      "D": "methane and oxygen."
    },
    "answer": "A",
    "explanation": "Water gas is produced by passing steam over hot carbon: C + H₂O → CO + H₂.",
    "page": 152,
    "hasImage": false
  },
  {
    "id": "chem_general_104",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 404,
    "text": "Chlorine is commonly prepared in the laboratory by heating manganese(IV) oxide with",
    "options": {
      "A": "concentrated hydrochloric acid.",
      "B": "dilute sodium hydroxide.",
      "C": "dilute sulphuric acid.",
      "D": "sodium chloride solution alone."
    },
    "answer": "A",
    "explanation": "MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O. The reaction releases chlorine gas.",
    "page": 152,
    "hasImage": false
  },
  {
    "id": "chem_general_105",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 405,
    "text": "Chlorine bleaches coloured materials most effectively when",
    "options": {
      "A": "it is completely dry.",
      "B": "moisture is present.",
      "C": "it is mixed with nitrogen.",
      "D": "it is frozen."
    },
    "answer": "B",
    "explanation": "Chlorine reacts with water to form substances including hypochlorous acid, which produces the oxidizing action responsible for bleaching.",
    "page": 153,
    "hasImage": false
  },
  {
    "id": "chem_general_106",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 406,
    "text": "Which property makes chlorine useful in treating drinking water?",
    "options": {
      "A": "It increases water hardness.",
      "B": "It kills many disease-causing microorganisms.",
      "C": "It removes all dissolved salts.",
      "D": "It converts water into hydrogen peroxide."
    },
    "answer": "B",
    "explanation": "Chlorine disinfects water by oxidizing or otherwise damaging microorganisms.",
    "page": 153,
    "hasImage": false
  },
  {
    "id": "chem_general_107",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 407,
    "text": "Hydrogen chloride gas forms hydrochloric acid when",
    "options": {
      "A": "it dissolves in water.",
      "B": "it is mixed with dry oxygen.",
      "C": "it is cooled below room temperature.",
      "D": "it is mixed with nitrogen."
    },
    "answer": "A",
    "explanation": "Hydrogen chloride ionizes in water to form hydronium and chloride ions, producing hydrochloric acid.",
    "page": 154,
    "hasImage": false
  },
  {
    "id": "chem_general_108",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 408,
    "text": "Which statement about dry hydrogen chloride gas is correct?",
    "options": {
      "A": "It turns dry blue litmus paper red immediately.",
      "B": "It shows acidic behaviour only when water is available.",
      "C": "It is a strong oxidizing agent.",
      "D": "It is an alkaline gas."
    },
    "answer": "B",
    "explanation": "Hydrogen chloride needs water to ionize and produce hydronium ions, which are responsible for its acidic behaviour.",
    "page": 154,
    "hasImage": false
  },
  {
    "id": "chem_general_109",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 409,
    "text": "Oxygen is commonly prepared in the laboratory by the catalytic decomposition of",
    "options": {
      "A": "sodium chloride.",
      "B": "hydrogen peroxide.",
      "C": "calcium carbonate.",
      "D": "hydrochloric acid."
    },
    "answer": "B",
    "explanation": "Hydrogen peroxide decomposes to water and oxygen. Manganese(IV) oxide can be used as a catalyst.",
    "page": 155,
    "hasImage": false
  },
  {
    "id": "chem_general_110",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 410,
    "text": "Which observation supports the presence of oxygen?",
    "options": {
      "A": "A glowing splint relights.",
      "B": "Limewater turns milky.",
      "C": "A burning splint is extinguished immediately.",
      "D": "A damp blue litmus paper turns red."
    },
    "answer": "A",
    "explanation": "Oxygen supports combustion and can cause a glowing splint to relight.",
    "page": 155,
    "hasImage": false
  },
  {
    "id": "chem_general_111",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 411,
    "text": "Ozone is important in the upper atmosphere because it",
    "options": {
      "A": "absorbs much of the harmful ultraviolet radiation from the Sun.",
      "B": "produces all atmospheric nitrogen.",
      "C": "prevents all forms of cloud formation.",
      "D": "removes carbon dioxide completely."
    },
    "answer": "A",
    "explanation": "The ozone layer absorbs much of the Sun's harmful ultraviolet radiation, helping protect living organisms.",
    "page": 156,
    "hasImage": false
  },
  {
    "id": "chem_general_112",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 412,
    "text": "Which oxide is amphoteric?",
    "options": {
      "A": "Na₂O",
      "B": "SO₂",
      "C": "Al₂O₃",
      "D": "CO₂"
    },
    "answer": "C",
    "explanation": "Aluminium oxide reacts with both acids and strong bases, showing amphoteric behaviour.",
    "page": 156,
    "hasImage": false
  },
  {
    "id": "chem_general_113",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 413,
    "text": "Sulphur dioxide is commonly produced when",
    "options": {
      "A": "sulphur burns in oxygen.",
      "B": "hydrogen burns in nitrogen.",
      "C": "calcium carbonate dissolves in water.",
      "D": "sodium reacts with chlorine."
    },
    "answer": "A",
    "explanation": "Sulphur burns in oxygen to produce sulphur dioxide: S + O₂ → SO₂.",
    "page": 157,
    "hasImage": false
  },
  {
    "id": "chem_general_114",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 414,
    "text": "One major environmental effect of sulphur dioxide is",
    "options": {
      "A": "formation of acid rain.",
      "B": "destruction of all atmospheric nitrogen.",
      "C": "formation of ozone in soil.",
      "D": "reduction of ocean salinity."
    },
    "answer": "A",
    "explanation": "Sulphur dioxide can be oxidized and dissolve in atmospheric moisture, contributing to acidic precipitation.",
    "page": 157,
    "hasImage": false
  },
  {
    "id": "chem_general_115",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 415,
    "text": "In the Contact process, the catalyst commonly used to convert sulphur dioxide to sulphur trioxide is",
    "options": {
      "A": "iron.",
      "B": "nickel.",
      "C": "vanadium(V) oxide.",
      "D": "manganese(IV) oxide."
    },
    "answer": "C",
    "explanation": "Vanadium(V) oxide catalyses the reversible oxidation of sulphur dioxide to sulphur trioxide.",
    "page": 158,
    "hasImage": false
  },
  {
    "id": "chem_general_116",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 416,
    "text": "Concentrated tetraoxosulphate(VI) acid acts as a dehydrating agent because it",
    "options": {
      "A": "readily removes water from many substances.",
      "B": "releases hydrogen gas from every compound.",
      "C": "converts all metals into non-metals.",
      "D": "prevents all oxidation reactions."
    },
    "answer": "A",
    "explanation": "Concentrated sulphuric acid has a strong affinity for water and can remove water from substances such as sugar.",
    "page": 158,
    "hasImage": false
  },
  {
    "id": "chem_general_117",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 417,
    "text": "Hydrogen sulphide is best described as",
    "options": {
      "A": "a colourless gas with a characteristic rotten-egg smell.",
      "B": "a green gas with a choking smell.",
      "C": "a brown gas with a sharp smell.",
      "D": "a gas with no smell under any condition."
    },
    "answer": "A",
    "explanation": "H₂S is a colourless, poisonous gas known for its rotten-egg smell.",
    "page": 159,
    "hasImage": false
  },
  {
    "id": "chem_general_118",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 418,
    "text": "Which statement about nitrogen is correct?",
    "options": {
      "A": "It readily supports ordinary combustion.",
      "B": "It makes up about 78% of dry air.",
      "C": "It is the most reactive component of air.",
      "D": "It dissolves in water more readily than ammonia."
    },
    "answer": "B",
    "explanation": "Nitrogen is the largest component of dry air and is relatively unreactive because of the strong triple bond in N₂.",
    "page": 159,
    "hasImage": false
  },
  {
    "id": "chem_general_119",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 419,
    "text": "The industrial production of ammonia is carried out by the",
    "options": {
      "A": "Contact process.",
      "B": "Haber process.",
      "C": "Solvay process.",
      "D": "Ostwald process."
    },
    "answer": "B",
    "explanation": "The Haber process combines nitrogen and hydrogen under suitable pressure and temperature using an iron catalyst.",
    "page": 160,
    "hasImage": false
  },
  {
    "id": "chem_general_120",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 420,
    "text": "In the Haber process, the reaction is",
    "options": {
      "A": "N₂ + O₂ ⇌ 2NO",
      "B": "N₂ + 3H₂ ⇌ 2NH₃",
      "C": "2NH₃ + 3O₂ → 2NO₂ + 3H₂O",
      "D": "2H₂ + O₂ → 2H₂O"
    },
    "answer": "B",
    "explanation": "One mole of nitrogen reacts with three moles of hydrogen to form two moles of ammonia.",
    "page": 160,
    "hasImage": false
  },
  {
    "id": "chem_general_121",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 421,
    "text": "A suitable catalyst for the Haber process is",
    "options": {
      "A": "iron.",
      "B": "copper.",
      "C": "platinum alone.",
      "D": "silver."
    },
    "answer": "A",
    "explanation": "Finely divided iron is used to increase the rate of ammonia production.",
    "page": 161,
    "hasImage": false
  },
  {
    "id": "chem_general_122",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 422,
    "text": "Ammonia turns damp red litmus paper blue because it",
    "options": {
      "A": "is acidic.",
      "B": "produces hydroxide ions in water.",
      "C": "contains chloride ions.",
      "D": "produces hydrogen ions in water."
    },
    "answer": "B",
    "explanation": "Ammonia reacts with water to establish an equilibrium that produces NH₄⁺ and OH⁻ ions, making the solution alkaline.",
    "page": 161,
    "hasImage": false
  },
  {
    "id": "chem_general_123",
    "originalChapter": 4,
    "chapterTitle": "Topic: Non-Metals & Industrial Processes",
    "topic": "Non-Metals & Industrial Processes",
    "bookQuestionNum": 423,
    "text": "The industrial oxidation of ammonia is an important step in the manufacture of",
    "options": {
      "A": "nitric acid.",
      "B": "hydrochloric acid.",
      "C": "ethanoic acid.",
      "D": "carbonic acid."
    },
    "answer": "A",
    "explanation": "The Ostwald process oxidizes ammonia to nitrogen oxides, which are further converted to nitric acid.",
    "page": 162,
    "hasImage": false
  },
  {
    "id": "chem_general_124",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 424,
    "text": "Which of the following is an allotrope of carbon?",
    "options": {
      "A": "Quartz",
      "B": "Graphite",
      "C": "Limestone",
      "D": "Sulphur dioxide"
    },
    "answer": "B",
    "explanation": "Graphite and diamond are different structural forms of elemental carbon.",
    "page": 162,
    "hasImage": false
  },
  {
    "id": "chem_general_125",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 425,
    "text": "Diamond is extremely hard because",
    "options": {
      "A": "its carbon atoms form a giant three-dimensional covalent network.",
      "B": "its atoms are held together by weak hydrogen bonds.",
      "C": "it contains mobile carbon ions.",
      "D": "its structure is made of separate molecules."
    },
    "answer": "A",
    "explanation": "Each carbon atom is covalently bonded to four others, forming a strong rigid network.",
    "page": 163,
    "hasImage": false
  },
  {
    "id": "chem_general_126",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 426,
    "text": "Carbon dioxide turns limewater milky because it produces",
    "options": {
      "A": "calcium oxide.",
      "B": "calcium carbonate.",
      "C": "calcium sulphate.",
      "D": "calcium chloride."
    },
    "answer": "B",
    "explanation": "CO₂ + Ca(OH)₂ → CaCO₃ + H₂O. The calcium carbonate formed is an insoluble white precipitate.",
    "page": 163,
    "hasImage": false
  },
  {
    "id": "chem_general_127",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 427,
    "text": "Carbon monoxide is poisonous because it",
    "options": {
      "A": "reacts strongly with water in the lungs.",
      "B": "binds to haemoglobin and reduces oxygen transport.",
      "C": "destroys red blood cells by dissolving them.",
      "D": "converts oxygen into nitrogen."
    },
    "answer": "B",
    "explanation": "Carbon monoxide forms carboxyhaemoglobin, reducing the blood's ability to carry oxygen.",
    "page": 164,
    "hasImage": false
  },
  {
    "id": "chem_general_128",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 428,
    "text": "Which of the following is a major product of the destructive distillation of coal?",
    "options": {
      "A": "Coke",
      "B": "Sodium chloride",
      "C": "Calcium hydroxide",
      "D": "Ammonium nitrate"
    },
    "answer": "A",
    "explanation": "Destructive distillation of coal produces coke, coal gas, coal tar and ammoniacal liquor.",
    "page": 164,
    "hasImage": false
  },
  {
    "id": "chem_general_129",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 429,
    "text": "Synthesis gas is mainly a mixture of",
    "options": {
      "A": "carbon monoxide and hydrogen.",
      "B": "carbon dioxide and oxygen.",
      "C": "nitrogen and chlorine.",
      "D": "methane and sulphur dioxide."
    },
    "answer": "A",
    "explanation": "Synthesis gas, or syngas, is a mixture mainly of CO and H₂ used as a feedstock for chemical production.",
    "page": 165,
    "hasImage": false
  },
  {
    "id": "chem_general_130",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 430,
    "text": "Nitrogen fixation in the nitrogen cycle involves the conversion of atmospheric nitrogen into",
    "options": {
      "A": "nitrogen gas alone.",
      "B": "ammonia or other biologically available nitrogen compounds.",
      "C": "oxygen.",
      "D": "carbon dioxide."
    },
    "answer": "B",
    "explanation": "Nitrogen-fixing bacteria and some industrial processes convert atmospheric nitrogen into forms that can enter the nitrogen cycle.",
    "page": 165,
    "hasImage": false
  },
  {
    "id": "chem_general_131",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 431,
    "text": "Which property is common to most metals?",
    "options": {
      "A": "Poor electrical conductivity",
      "B": "Brittleness at room temperature",
      "C": "Ability to conduct heat and electricity",
      "D": "Low density in every case"
    },
    "answer": "C",
    "explanation": "Metals generally contain mobile delocalized electrons, allowing them to conduct heat and electricity.",
    "page": 166,
    "hasImage": false
  },
  {
    "id": "chem_general_132",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 432,
    "text": "Sodium is stored under kerosene mainly because it",
    "options": {
      "A": "reacts rapidly with oxygen and moisture in air.",
      "B": "dissolves in kerosene.",
      "C": "is a noble metal.",
      "D": "has a very high melting point."
    },
    "answer": "A",
    "explanation": "Kerosene prevents sodium from direct contact with air and water, with which it reacts vigorously.",
    "page": 166,
    "hasImage": false
  },
  {
    "id": "chem_general_133",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 433,
    "text": "Sodium hydroxide is manufactured industrially by the electrolysis of",
    "options": {
      "A": "concentrated sodium chloride solution.",
      "B": "molten calcium carbonate.",
      "C": "aqueous copper sulphate.",
      "D": "dilute nitric acid."
    },
    "answer": "A",
    "explanation": "Electrolysis of brine produces sodium hydroxide in solution, alongside chlorine and hydrogen.",
    "page": 167,
    "hasImage": false
  },
  {
    "id": "chem_general_134",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 434,
    "text": "In the Solvay process, the major raw materials used to manufacture sodium carbonate include",
    "options": {
      "A": "sodium chloride and limestone.",
      "B": "copper and sulphur.",
      "C": "aluminium and bauxite.",
      "D": "iron and coke only."
    },
    "answer": "A",
    "explanation": "The Solvay process uses brine and limestone, with ammonia serving as a recycled intermediate.",
    "page": 167,
    "hasImage": false
  },
  {
    "id": "chem_general_135",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 435,
    "text": "Sodium trioxocarbonate(IV) is widely used in the manufacture of",
    "options": {
      "A": "glass.",
      "B": "petrol.",
      "C": "steel.",
      "D": "ammonia."
    },
    "answer": "A",
    "explanation": "Sodium carbonate is an important raw material in glass manufacture because it lowers the melting temperature of silica.",
    "page": 168,
    "hasImage": false
  },
  {
    "id": "chem_general_136",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 436,
    "text": "Calcium oxide is produced by",
    "options": {
      "A": "heating calcium carbonate strongly.",
      "B": "cooling calcium hydroxide.",
      "C": "dissolving calcium metal in ethanol.",
      "D": "mixing calcium chloride with water."
    },
    "answer": "A",
    "explanation": "CaCO₃ → CaO + CO₂. This thermal decomposition is called calcination.",
    "page": 168,
    "hasImage": false
  },
  {
    "id": "chem_general_137",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 437,
    "text": "When calcium oxide reacts with water, the product is",
    "options": {
      "A": "calcium carbonate.",
      "B": "calcium hydroxide.",
      "C": "calcium sulphate.",
      "D": "calcium chloride."
    },
    "answer": "B",
    "explanation": "CaO + H₂O → Ca(OH)₂. The reaction releases heat.",
    "page": 169,
    "hasImage": false
  },
  {
    "id": "chem_general_138",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 438,
    "text": "The setting of mortar occurs mainly because calcium hydroxide",
    "options": {
      "A": "reacts with carbon dioxide in air to form calcium carbonate.",
      "B": "decomposes into calcium and oxygen.",
      "C": "changes into calcium chloride.",
      "D": "evaporates completely."
    },
    "answer": "A",
    "explanation": "Calcium hydroxide reacts slowly with atmospheric carbon dioxide to form calcium carbonate and water, helping the mortar harden.",
    "page": 169,
    "hasImage": false
  },
  {
    "id": "chem_general_139",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 439,
    "text": "Aluminium is extracted industrially from alumina by",
    "options": {
      "A": "reduction with water.",
      "B": "electrolysis of molten alumina dissolved in cryolite.",
      "C": "heating alumina with dilute hydrochloric acid.",
      "D": "simple filtration."
    },
    "answer": "B",
    "explanation": "Aluminium is too reactive to be extracted economically by carbon reduction. Cryolite lowers the operating temperature and improves conductivity.",
    "page": 170,
    "hasImage": false
  },
  {
    "id": "chem_general_140",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 440,
    "text": "Cryolite is added during the extraction of aluminium mainly to",
    "options": {
      "A": "increase the melting point of alumina.",
      "B": "lower the melting point and improve the conductivity of the electrolyte.",
      "C": "convert aluminium into iron.",
      "D": "prevent all electrical current from passing."
    },
    "answer": "B",
    "explanation": "Pure alumina has a very high melting point. Dissolving it in molten cryolite makes electrolysis more practical.",
    "page": 170,
    "hasImage": false
  },
  {
    "id": "chem_general_141",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 441,
    "text": "Which metal is commonly extracted from its oxide ore in a blast furnace?",
    "options": {
      "A": "Sodium",
      "B": "Calcium",
      "C": "Iron",
      "D": "Aluminium"
    },
    "answer": "C",
    "explanation": "Iron oxide in the blast furnace is reduced mainly by carbon monoxide produced from coke.",
    "page": 171,
    "hasImage": false
  },
  {
    "id": "chem_general_142",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 442,
    "text": "In the blast furnace, the main reducing agent for iron(III) oxide is",
    "options": {
      "A": "carbon monoxide.",
      "B": "nitrogen.",
      "C": "calcium carbonate.",
      "D": "oxygen."
    },
    "answer": "A",
    "explanation": "CO removes oxygen from iron oxide, producing iron and carbon dioxide.",
    "page": 171,
    "hasImage": false
  },
  {
    "id": "chem_general_143",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 443,
    "text": "Limestone is added to the blast furnace mainly to",
    "options": {
      "A": "act as a flux and remove silica impurities as slag.",
      "B": "act as the only source of iron.",
      "C": "cool the furnace to room temperature.",
      "D": "prevent the reduction of iron oxide."
    },
    "answer": "A",
    "explanation": "Calcium oxide from limestone reacts with silica to form calcium silicate slag.",
    "page": 172,
    "hasImage": false
  },
  {
    "id": "chem_general_144",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 444,
    "text": "Stainless steel resists corrosion mainly because it contains",
    "options": {
      "A": "chromium.",
      "B": "sodium.",
      "C": "calcium.",
      "D": "mercury."
    },
    "answer": "A",
    "explanation": "Chromium forms a thin, protective oxide layer on the steel surface, helping prevent further corrosion.",
    "page": 172,
    "hasImage": false
  },
  {
    "id": "chem_general_145",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 445,
    "text": "Brass is an alloy of",
    "options": {
      "A": "copper and zinc.",
      "B": "copper and tin.",
      "C": "iron and carbon.",
      "D": "aluminium and magnesium."
    },
    "answer": "A",
    "explanation": "Brass is a copper-zinc alloy widely used for fittings, musical instruments and decorative objects.",
    "page": 173,
    "hasImage": false
  },
  {
    "id": "chem_general_146",
    "originalChapter": 4,
    "chapterTitle": "Topic: Carbon, Metallurgy & Alloys",
    "topic": "Carbon, Metallurgy & Alloys",
    "bookQuestionNum": 446,
    "text": "Bronze is mainly an alloy of",
    "options": {
      "A": "copper and tin.",
      "B": "copper and zinc.",
      "C": "iron and nickel.",
      "D": "aluminium and copper."
    },
    "answer": "A",
    "explanation": "Bronze is traditionally made mainly from copper and tin and is used in bearings, statues and other items.",
    "page": 173,
    "hasImage": false
  },
  {
    "id": "chem_general_147",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 447,
    "text": "The ability of carbon atoms to bond with one another to form long chains is called",
    "options": {
      "A": "allotropy.",
      "B": "catenation.",
      "C": "ionization.",
      "D": "polymer cracking."
    },
    "answer": "B",
    "explanation": "Carbon forms strong carbon-carbon covalent bonds, allowing it to produce chains, branches and rings.",
    "page": 174,
    "hasImage": false
  },
  {
    "id": "chem_general_148",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 448,
    "text": "Which general formula represents the open-chain alkanes?",
    "options": {
      "A": "CₙH₂ₙ",
      "B": "CₙH₂ₙ₋₂",
      "C": "CₙH₂ₙ₊₂",
      "D": "CₙHₙ"
    },
    "answer": "C",
    "explanation": "Open-chain alkanes are saturated hydrocarbons with the general formula CₙH₂ₙ₊₂.",
    "page": 174,
    "hasImage": false
  },
  {
    "id": "chem_general_149",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 449,
    "text": "What is the IUPAC name of CH₃CH₂CH₂CH₃?",
    "options": {
      "A": "Propane",
      "B": "Butane",
      "C": "Pentane",
      "D": "Butene"
    },
    "answer": "B",
    "explanation": "The compound has four carbon atoms joined by single bonds, so it is named butane.",
    "page": 175,
    "hasImage": false
  },
  {
    "id": "chem_general_150",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 450,
    "text": "Which compound is a structural isomer of butane?",
    "options": {
      "A": "2-methylpropane",
      "B": "Propene",
      "C": "Pentane",
      "D": "Butyne"
    },
    "answer": "A",
    "explanation": "Butane and 2-methylpropane both have the molecular formula C₄H₁₀ but different carbon arrangements.",
    "page": 175,
    "hasImage": false
  },
  {
    "id": "chem_general_151",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 451,
    "text": "The main reaction of alkanes with chlorine in the presence of ultraviolet light is",
    "options": {
      "A": "addition.",
      "B": "substitution.",
      "C": "neutralization.",
      "D": "esterification."
    },
    "answer": "B",
    "explanation": "In free-radical substitution, one or more hydrogen atoms in the alkane are replaced by chlorine atoms.",
    "page": 176,
    "hasImage": false
  },
  {
    "id": "chem_general_152",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 452,
    "text": "Which reagent is commonly used to test for carbon-carbon double bonds in alkenes?",
    "options": {
      "A": "Bromine water",
      "B": "Limewater",
      "C": "Sodium hydroxide solution",
      "D": "Blue litmus paper"
    },
    "answer": "A",
    "explanation": "An alkene generally decolourizes bromine water because bromine adds across the carbon-carbon double bond.",
    "page": 176,
    "hasImage": false
  },
  {
    "id": "chem_general_153",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 453,
    "text": "What is the molecular formula of an open-chain alkene containing five carbon atoms and one double bond?",
    "options": {
      "A": "C₅H₈",
      "B": "C₅H₁₀",
      "C": "C₅H₁₂",
      "D": "C₅H₆"
    },
    "answer": "B",
    "explanation": "Acyclic alkenes with one double bond have the general formula CₙH₂ₙ. For n = 5, the formula is C₅H₁₀.",
    "page": 177,
    "hasImage": false
  },
  {
    "id": "chem_general_154",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 454,
    "text": "Which of the following compounds can show geometrical isomerism?",
    "options": {
      "A": "Ethene",
      "B": "But-2-ene",
      "C": "Propane",
      "D": "Ethyne"
    },
    "answer": "B",
    "explanation": "Each carbon atom of the double bond in but-2-ene has two different groups attached, allowing cis-trans isomerism.",
    "page": 177,
    "hasImage": false
  },
  {
    "id": "chem_general_155",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 455,
    "text": "The addition of hydrogen to ethene to produce ethane is known as",
    "options": {
      "A": "hydration.",
      "B": "hydrogenation.",
      "C": "halogenation.",
      "D": "polymerization."
    },
    "answer": "B",
    "explanation": "Hydrogen adds across the carbon-carbon double bond, converting ethene into the saturated compound ethane.",
    "page": 178,
    "hasImage": false
  },
  {
    "id": "chem_general_156",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 456,
    "text": "Which product is formed when ethene undergoes addition polymerization?",
    "options": {
      "A": "Polyethene",
      "B": "Ethanol",
      "C": "Ethanoic acid",
      "D": "Ethyne"
    },
    "answer": "A",
    "explanation": "Many ethene molecules join by opening their double bonds to form the long-chain polymer polyethene.",
    "page": 178,
    "hasImage": false
  },
  {
    "id": "chem_general_157",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 457,
    "text": "Ethyne can be prepared in the laboratory by reacting water with",
    "options": {
      "A": "sodium chloride.",
      "B": "calcium carbide.",
      "C": "calcium carbonate.",
      "D": "magnesium oxide."
    },
    "answer": "B",
    "explanation": "CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂. The gas produced is ethyne.",
    "page": 179,
    "hasImage": false
  },
  {
    "id": "chem_general_158",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 458,
    "text": "Ethyne belongs to the homologous series known as",
    "options": {
      "A": "alkanes.",
      "B": "alkenes.",
      "C": "alkynes.",
      "D": "alkanols."
    },
    "answer": "C",
    "explanation": "Ethyne contains a carbon-carbon triple bond and is the simplest alkyne.",
    "page": 179,
    "hasImage": false
  },
  {
    "id": "chem_general_159",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 459,
    "text": "The main reason benzene is more stable than a structure containing three isolated double bonds is that",
    "options": {
      "A": "its π electrons are delocalized around the ring.",
      "B": "it contains only single bonds.",
      "C": "it has no carbon-carbon bonds.",
      "D": "its carbon atoms are ionic."
    },
    "answer": "A",
    "explanation": "Benzene has a delocalized π-electron system spread over the ring, giving it extra stability.",
    "page": 180,
    "hasImage": false
  },
  {
    "id": "chem_general_160",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 460,
    "text": "Unlike alkenes, benzene commonly reacts by",
    "options": {
      "A": "addition that destroys its aromatic ring.",
      "B": "electrophilic substitution that preserves its aromatic ring.",
      "C": "neutralization with water.",
      "D": "simple hydrolysis."
    },
    "answer": "B",
    "explanation": "Benzene generally undergoes substitution reactions because they preserve its stable delocalized ring system.",
    "page": 180,
    "hasImage": false
  },
  {
    "id": "chem_general_161",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 461,
    "text": "What is the functional group of alkanols?",
    "options": {
      "A": "–COOH",
      "B": "–CHO",
      "C": "–OH",
      "D": "–COO–"
    },
    "answer": "C",
    "explanation": "Alkanols contain the hydroxyl functional group attached to a saturated carbon atom.",
    "page": 181,
    "hasImage": false
  },
  {
    "id": "chem_general_162",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 462,
    "text": "Which of the following is a secondary alkanol?",
    "options": {
      "A": "Ethanol",
      "B": "Propan-1-ol",
      "C": "Propan-2-ol",
      "D": "2-methylpropan-2-ol"
    },
    "answer": "C",
    "explanation": "The carbon carrying the hydroxyl group in propan-2-ol is attached to two other carbon atoms.",
    "page": 181,
    "hasImage": false
  },
  {
    "id": "chem_general_163",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 463,
    "text": "Ethanol can be produced by fermentation of glucose according to the equation",
    "options": {
      "A": "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
      "B": "C₆H₁₂O₆ → 6CO₂ + 6H₂O",
      "C": "C₂H₅OH → C₆H₁₂O₆",
      "D": "C₆H₁₂O₆ → 2CH₄ + 2O₂"
    },
    "answer": "A",
    "explanation": "Yeast converts glucose into ethanol and carbon dioxide under anaerobic conditions.",
    "page": 182,
    "hasImage": false
  },
  {
    "id": "chem_general_164",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 464,
    "text": "Which condition is necessary for the fermentation of glucose by yeast?",
    "options": {
      "A": "High oxygen concentration",
      "B": "Suitable temperature and limited oxygen",
      "C": "Extremely high temperature",
      "D": "Absence of water"
    },
    "answer": "B",
    "explanation": "Yeast enzymes work best within a suitable temperature range, and fermentation proceeds under anaerobic or oxygen-limited conditions.",
    "page": 182,
    "hasImage": false
  },
  {
    "id": "chem_general_165",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 465,
    "text": "Dehydration of ethanol using concentrated sulphuric acid at about 170°C produces",
    "options": {
      "A": "ethane.",
      "B": "ethene.",
      "C": "ethanoic acid.",
      "D": "ethanal."
    },
    "answer": "B",
    "explanation": "Removing water from ethanol produces ethene: C₂H₅OH → C₂H₄ + H₂O.",
    "page": 183,
    "hasImage": false
  },
  {
    "id": "chem_general_166",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 466,
    "text": "Controlled oxidation of a primary alkanol can first produce",
    "options": {
      "A": "an alkanal.",
      "B": "an alkane.",
      "C": "an alkyne.",
      "D": "an ester only."
    },
    "answer": "A",
    "explanation": "A primary alkanol can be oxidized to an alkanal. Further oxidation can produce an alkanoic acid.",
    "page": 183,
    "hasImage": false
  },
  {
    "id": "chem_general_167",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 467,
    "text": "Oxidation of a secondary alkanol generally produces",
    "options": {
      "A": "an alkane.",
      "B": "an alkanone.",
      "C": "an alkene only.",
      "D": "a carboxylic acid directly."
    },
    "answer": "B",
    "explanation": "Secondary alkanols are oxidized to ketones, commonly called alkanones in the JAMB syllabus.",
    "page": 184,
    "hasImage": false
  },
  {
    "id": "chem_general_168",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 468,
    "text": "Tertiary alkanols resist oxidation under ordinary mild conditions because",
    "options": {
      "A": "they contain no oxygen.",
      "B": "the carbon attached to the –OH group has no hydrogen atom.",
      "C": "they contain a carbon-carbon triple bond.",
      "D": "they are all aromatic."
    },
    "answer": "B",
    "explanation": "Ordinary oxidation of an alkanol to a carbonyl compound requires removal of a hydrogen from the carbon bearing the hydroxyl group.",
    "page": 184,
    "hasImage": false
  },
  {
    "id": "chem_general_169",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 469,
    "text": "In the Lucas test, a tertiary alkanol generally produces turbidity",
    "options": {
      "A": "immediately or very rapidly.",
      "B": "only after several days.",
      "C": "only after boiling for one hour.",
      "D": "never."
    },
    "answer": "A",
    "explanation": "Tertiary alkanols react rapidly with Lucas reagent, producing an insoluble alkyl chloride that causes turbidity.",
    "page": 185,
    "hasImage": false
  },
  {
    "id": "chem_general_170",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 470,
    "text": "Which functional group is present in an alkanal?",
    "options": {
      "A": "–COOH",
      "B": "–CHO",
      "C": "–OH",
      "D": "–COO–"
    },
    "answer": "B",
    "explanation": "Alkanals contain the aldehyde functional group, –CHO, at the end of the carbon chain.",
    "page": 185,
    "hasImage": false
  },
  {
    "id": "chem_general_171",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 471,
    "text": "Which reagent can be used to distinguish an alkanal from an alkanone?",
    "options": {
      "A": "Tollens' reagent",
      "B": "Sodium chloride solution",
      "C": "Distilled water",
      "D": "Calcium hydroxide solution"
    },
    "answer": "A",
    "explanation": "Alkanals generally reduce Tollens' reagent to metallic silver, while ordinary alkanones do not.",
    "page": 186,
    "hasImage": false
  },
  {
    "id": "chem_general_172",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 472,
    "text": "Which compound is an alkanone?",
    "options": {
      "A": "Propanal",
      "B": "Propanone",
      "C": "Propanoic acid",
      "D": "Propan-1-ol"
    },
    "answer": "B",
    "explanation": "Propanone contains a carbonyl group within the carbon chain and is the simplest common ketone.",
    "page": 186,
    "hasImage": false
  },
  {
    "id": "chem_general_173",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 473,
    "text": "The functional group of an alkanoic acid is",
    "options": {
      "A": "–OH",
      "B": "–COOH",
      "C": "–CHO",
      "D": "–NH₂"
    },
    "answer": "B",
    "explanation": "Alkanoic acids contain the carboxyl group, made up of a carbonyl and hydroxyl group attached to the same carbon.",
    "page": 187,
    "hasImage": false
  },
  {
    "id": "chem_general_174",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 474,
    "text": "Ethanoic acid reacts with ethanol in the presence of concentrated sulphuric acid to form",
    "options": {
      "A": "ethyl ethanoate and water.",
      "B": "ethene and hydrogen.",
      "C": "ethane and carbon dioxide.",
      "D": "ethanal and oxygen."
    },
    "answer": "A",
    "explanation": "An alkanoic acid reacts with an alkanol to form an ester and water. This reaction is esterification.",
    "page": 187,
    "hasImage": false
  },
  {
    "id": "chem_general_175",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 475,
    "text": "What is the name of the reaction between an alkanoic acid and an alkanol to form an ester?",
    "options": {
      "A": "Saponification",
      "B": "Esterification",
      "C": "Polymerization",
      "D": "Cracking"
    },
    "answer": "B",
    "explanation": "Esterification produces an ester and water, usually using concentrated sulphuric acid as a catalyst.",
    "page": 188,
    "hasImage": false
  },
  {
    "id": "chem_general_176",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 476,
    "text": "Which of the following is a dicarboxylic acid?",
    "options": {
      "A": "Methanoic acid",
      "B": "Ethanoic acid",
      "C": "Ethanedioic acid",
      "D": "Propanoic acid"
    },
    "answer": "C",
    "explanation": "Ethanedioic acid contains two carboxyl groups and is also called oxalic acid.",
    "page": 188,
    "hasImage": false
  },
  {
    "id": "chem_general_177",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 477,
    "text": "Fats and oils are chemically classified mainly as",
    "options": {
      "A": "proteins.",
      "B": "alkanoate esters.",
      "C": "amines.",
      "D": "alkanes."
    },
    "answer": "B",
    "explanation": "Fats and oils are mainly triglycerides, which are triesters formed from glycerol and long-chain fatty acids.",
    "page": 189,
    "hasImage": false
  },
  {
    "id": "chem_general_178",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 478,
    "text": "Saponification is the process of",
    "options": {
      "A": "converting fats or oils into soap by alkaline hydrolysis.",
      "B": "converting alcohol into an alkene.",
      "C": "converting glucose into ethanol.",
      "D": "converting an alkane into an alkene."
    },
    "answer": "A",
    "explanation": "A strong alkali hydrolyses triglycerides to produce glycerol and the salts of fatty acids, which are soaps.",
    "page": 189,
    "hasImage": false
  },
  {
    "id": "chem_general_179",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 479,
    "text": "Why do ordinary soaps form scum in hard water?",
    "options": {
      "A": "They react with calcium and magnesium ions to form insoluble salts.",
      "B": "They evaporate immediately.",
      "C": "They react with dissolved nitrogen.",
      "D": "They convert water into an acid."
    },
    "answer": "A",
    "explanation": "Calcium and magnesium ions react with soap anions to form insoluble precipitates, reducing the cleaning action of soap.",
    "page": 190,
    "hasImage": false
  },
  {
    "id": "chem_general_180",
    "originalChapter": 4,
    "chapterTitle": "Topic: Organic Chemistry Fundamentals",
    "topic": "Organic Chemistry Fundamentals",
    "bookQuestionNum": 480,
    "text": "Synthetic detergents are often more effective than ordinary soaps in hard water because they",
    "options": {
      "A": "do not form insoluble precipitates as readily with calcium and magnesium ions.",
      "B": "remove all dissolved oxygen.",
      "C": "are always made from sodium chloride.",
      "D": "cannot dissolve in water."
    },
    "answer": "A",
    "explanation": "Many synthetic detergents remain effective in hard water because their calcium and magnesium salts are more soluble than ordinary soap scum.",
    "page": 190,
    "hasImage": false
  },
  {
    "id": "chem_general_181",
    "originalChapter": 4,
    "chapterTitle": "Topic: Biomolecules & Polymers",
    "topic": "Biomolecules & Polymers",
    "bookQuestionNum": 481,
    "text": "What is the functional group of an amine?",
    "options": {
      "A": "–NH₂",
      "B": "–COOH",
      "C": "–CHO",
      "D": "–COO–"
    },
    "answer": "A",
    "explanation": "The amino group, –NH₂, is present in primary amines. Secondary and tertiary amines have different arrangements around the nitrogen atom.",
    "page": 191,
    "hasImage": false
  },
  {
    "id": "chem_general_182",
    "originalChapter": 4,
    "chapterTitle": "Topic: Biomolecules & Polymers",
    "topic": "Biomolecules & Polymers",
    "bookQuestionNum": 482,
    "text": "A primary amine has the general structure",
    "options": {
      "A": "R₃N",
      "B": "R₂NH",
      "C": "RNH₂",
      "D": "RCOOH"
    },
    "answer": "C",
    "explanation": "A primary amine contains one alkyl or aryl group attached to nitrogen and two hydrogen atoms.",
    "page": 191,
    "hasImage": false
  },
  {
    "id": "chem_general_183",
    "originalChapter": 4,
    "chapterTitle": "Topic: Biomolecules & Polymers",
    "topic": "Biomolecules & Polymers",
    "bookQuestionNum": 483,
    "text": "Which of the following is a monosaccharide?",
    "options": {
      "A": "Starch",
      "B": "Cellulose",
      "C": "Glucose",
      "D": "Sucrose"
    },
    "answer": "C",
    "explanation": "Glucose is a simple sugar that cannot be hydrolysed into a smaller carbohydrate unit.",
    "page": 192,
    "hasImage": false
  },
  {
    "id": "chem_general_184",
    "originalChapter": 4,
    "chapterTitle": "Topic: Biomolecules & Polymers",
    "topic": "Biomolecules & Polymers",
    "bookQuestionNum": 484,
    "text": "Sucrose is classified as a",
    "options": {
      "A": "monosaccharide.",
      "B": "disaccharide.",
      "C": "polysaccharide.",
      "D": "protein."
    },
    "answer": "B",
    "explanation": "Sucrose consists of glucose and fructose units joined by a glycosidic bond.",
    "page": 192,
    "hasImage": false
  },
  {
    "id": "chem_general_185",
    "originalChapter": 4,
    "chapterTitle": "Topic: Biomolecules & Polymers",
    "topic": "Biomolecules & Polymers",
    "bookQuestionNum": 485,
    "text": "Starch gives a blue-black colour with iodine solution because of its",
    "options": {
      "A": "peptide bonds.",
      "B": "helical structure and interaction with iodine.",
      "C": "carboxyl groups.",
      "D": "metallic ions."
    },
    "answer": "B",
    "explanation": "Iodine forms a coloured complex within the helical structure of amylose, a component of starch.",
    "page": 193,
    "hasImage": false
  },
  {
    "id": "chem_general_186",
    "originalChapter": 4,
    "chapterTitle": "Topic: Biomolecules & Polymers",
    "topic": "Biomolecules & Polymers",
    "bookQuestionNum": 486,
    "text": "Complete hydrolysis of starch ultimately produces",
    "options": {
      "A": "amino acids.",
      "B": "glucose.",
      "C": "fatty acids.",
      "D": "glycerol."
    },
    "answer": "B",
    "explanation": "Starch is a polysaccharide made of glucose units. Hydrolysis breaks its glycosidic bonds and releases glucose.",
    "page": 193,
    "hasImage": false
  },
  {
    "id": "chem_general_187",
    "originalChapter": 4,
    "chapterTitle": "Topic: Biomolecules & Polymers",
    "topic": "Biomolecules & Polymers",
    "bookQuestionNum": 487,
    "text": "Humans cannot digest cellulose efficiently because they",
    "options": {
      "A": "lack the enzyme cellulase needed to break its β-glycosidic bonds.",
      "B": "cannot absorb any carbohydrate.",
      "C": "lack glucose in their blood.",
      "D": "cannot digest starch."
    },
    "answer": "A",
    "explanation": "Humans do not produce cellulase, the enzyme that breaks the β-1,4 bonds in cellulose.",
    "page": 194,
    "hasImage": false
  },
  {
    "id": "chem_general_188",
    "originalChapter": 4,
    "chapterTitle": "Topic: Biomolecules & Polymers",
    "topic": "Biomolecules & Polymers",
    "bookQuestionNum": 488,
    "text": "Proteins are polymers made up of",
    "options": {
      "A": "fatty acids.",
      "B": "amino acids.",
      "C": "glucose molecules.",
      "D": "glycerol molecules."
    },
    "answer": "B",
    "explanation": "Amino acids join through peptide bonds to form polypeptide chains, which fold into proteins.",
    "page": 194,
    "hasImage": false
  },
  {
    "id": "chem_general_189",
    "originalChapter": 4,
    "chapterTitle": "Topic: Biomolecules & Polymers",
    "topic": "Biomolecules & Polymers",
    "bookQuestionNum": 489,
    "text": "The primary structure of a protein refers to its",
    "options": {
      "A": "sequence of amino acids.",
      "B": "three-dimensional folding only.",
      "C": "number of hydrogen bonds only.",
      "D": "arrangement of several protein chains only."
    },
    "answer": "A",
    "explanation": "Primary structure is the specific linear order of amino acids in a polypeptide chain.",
    "page": 195,
    "hasImage": false
  },
  {
    "id": "chem_general_190",
    "originalChapter": 4,
    "chapterTitle": "Topic: Biomolecules & Polymers",
    "topic": "Biomolecules & Polymers",
    "bookQuestionNum": 490,
    "text": "Enzymes increase reaction rates mainly by",
    "options": {
      "A": "increasing the activation energy.",
      "B": "lowering the activation energy.",
      "C": "increasing the mass of products.",
      "D": "changing the final equilibrium constant."
    },
    "answer": "B",
    "explanation": "Enzymes are biological catalysts. They provide reaction pathways with lower activation energy and are not consumed overall.",
    "page": 195,
    "hasImage": false
  },
  {
    "id": "chem_general_191",
    "originalChapter": 4,
    "chapterTitle": "Topic: Nuclear Chemistry & Applied Industrial Chemistry",
    "topic": "Nuclear Chemistry & Applied Industrial Chemistry",
    "bookQuestionNum": 491,
    "text": "The spontaneous emission of radiation from unstable atomic nuclei is called",
    "options": {
      "A": "electrolysis.",
      "B": "radioactivity.",
      "C": "polymerization.",
      "D": "neutralization."
    },
    "answer": "B",
    "explanation": "Radioactivity is the spontaneous decay of unstable nuclei with the emission of nuclear radiation.",
    "page": 196,
    "hasImage": false
  },
  {
    "id": "chem_general_192",
    "originalChapter": 4,
    "chapterTitle": "Topic: Nuclear Chemistry & Applied Industrial Chemistry",
    "topic": "Nuclear Chemistry & Applied Industrial Chemistry",
    "bookQuestionNum": 492,
    "text": "An alpha particle is identical to",
    "options": {
      "A": "an electron.",
      "B": "a proton.",
      "C": "a helium nucleus.",
      "D": "a neutron."
    },
    "answer": "C",
    "explanation": "An alpha particle contains two protons and two neutrons and has a charge of +2.",
    "page": 196,
    "hasImage": false
  },
  {
    "id": "chem_general_193",
    "originalChapter": 4,
    "chapterTitle": "Topic: Nuclear Chemistry & Applied Industrial Chemistry",
    "topic": "Nuclear Chemistry & Applied Industrial Chemistry",
    "bookQuestionNum": 493,
    "text": "Which nuclear radiation has the greatest penetrating power?",
    "options": {
      "A": "Alpha",
      "B": "Beta",
      "C": "Gamma",
      "D": "Proton"
    },
    "answer": "C",
    "explanation": "Gamma radiation consists of high-energy electromagnetic waves and is more penetrating than alpha and beta radiation.",
    "page": 197,
    "hasImage": false
  },
  {
    "id": "chem_general_194",
    "originalChapter": 4,
    "chapterTitle": "Topic: Nuclear Chemistry & Applied Industrial Chemistry",
    "topic": "Nuclear Chemistry & Applied Industrial Chemistry",
    "bookQuestionNum": 494,
    "text": "Which radiation is deflected most strongly by an electric field, compared with alpha and gamma radiation?",
    "options": {
      "A": "Alpha",
      "B": "Beta",
      "C": "Gamma",
      "D": "They are all deflected equally."
    },
    "answer": "B",
    "explanation": "Beta particles have a much smaller mass than alpha particles and carry an electric charge. Gamma radiation is uncharged and is not deflected by an electric field.",
    "page": 197,
    "hasImage": false
  },
  {
    "id": "chem_general_195",
    "originalChapter": 4,
    "chapterTitle": "Topic: Nuclear Chemistry & Applied Industrial Chemistry",
    "topic": "Nuclear Chemistry & Applied Industrial Chemistry",
    "bookQuestionNum": 495,
    "text": "A radioactive substance has a half-life of four hours. What mass remains from an initial 80 g after twelve hours?",
    "options": {
      "A": "5 g",
      "B": "10 g",
      "C": "20 g",
      "D": "40 g"
    },
    "answer": "B",
    "explanation": "Twelve hours represent three half-lives. The mass changes from 80 g to 40 g, then 20 g, then 10 g.",
    "page": 198,
    "hasImage": false
  },
  {
    "id": "chem_general_196",
    "originalChapter": 4,
    "chapterTitle": "Topic: Nuclear Chemistry & Applied Industrial Chemistry",
    "topic": "Nuclear Chemistry & Applied Industrial Chemistry",
    "bookQuestionNum": 496,
    "text": "During beta-minus decay, the mass number of a nucleus",
    "options": {
      "A": "increases by one.",
      "B": "decreases by one.",
      "C": "remains unchanged.",
      "D": "becomes zero."
    },
    "answer": "C",
    "explanation": "In beta-minus decay, a neutron changes into a proton and an electron. The proton number increases by one, but the total number of nucleons remains constant.",
    "page": 198,
    "hasImage": false
  },
  {
    "id": "chem_general_197",
    "originalChapter": 4,
    "chapterTitle": "Topic: Nuclear Chemistry & Applied Industrial Chemistry",
    "topic": "Nuclear Chemistry & Applied Industrial Chemistry",
    "bookQuestionNum": 497,
    "text": "Nuclear fission involves",
    "options": {
      "A": "the joining of two light nuclei.",
      "B": "the splitting of a heavy nucleus into lighter nuclei.",
      "C": "the removal of electrons from an atom.",
      "D": "the formation of a chemical bond."
    },
    "answer": "B",
    "explanation": "In fission, a heavy nucleus splits into smaller nuclei, releasing energy and often additional neutrons.",
    "page": 199,
    "hasImage": false
  },
  {
    "id": "chem_general_198",
    "originalChapter": 4,
    "chapterTitle": "Topic: Nuclear Chemistry & Applied Industrial Chemistry",
    "topic": "Nuclear Chemistry & Applied Industrial Chemistry",
    "bookQuestionNum": 498,
    "text": "Nuclear fusion involves",
    "options": {
      "A": "combining light nuclei to form a heavier nucleus.",
      "B": "splitting a heavy nucleus into fragments.",
      "C": "removing electrons from metals.",
      "D": "breaking covalent bonds in water."
    },
    "answer": "A",
    "explanation": "Fusion combines light nuclei, releasing energy when the products have a greater binding energy per nucleon. It powers the Sun.",
    "page": 199,
    "hasImage": false
  },
  {
    "id": "chem_general_199",
    "originalChapter": 4,
    "chapterTitle": "Topic: Nuclear Chemistry & Applied Industrial Chemistry",
    "topic": "Nuclear Chemistry & Applied Industrial Chemistry",
    "bookQuestionNum": 499,
    "text": "Which nuclear process is used in many nuclear power stations to produce energy?",
    "options": {
      "A": "Nuclear fission",
      "B": "Photosynthesis",
      "C": "Esterification",
      "D": "Fermentation"
    },
    "answer": "A",
    "explanation": "Controlled fission of heavy nuclei such as uranium-235 releases heat, which can be used to generate electricity.",
    "page": 200,
    "hasImage": false
  },
  {
    "id": "chem_general_200",
    "originalChapter": 4,
    "chapterTitle": "Topic: Nuclear Chemistry & Applied Industrial Chemistry",
    "topic": "Nuclear Chemistry & Applied Industrial Chemistry",
    "bookQuestionNum": 500,
    "text": "In the chemical industry, biotechnology is important because it uses",
    "options": {
      "A": "living organisms or biological systems to produce useful products.",
      "B": "only high-pressure metal furnaces.",
      "C": "radioactive decay to make all medicines.",
      "D": "filtration to convert every raw material into a metal."
    },
    "answer": "A",
    "explanation": "Biotechnology applies microorganisms, cells or enzymes to industrial processes such as fermentation, food production and the manufacture of useful chemicals.",
    "page": 200,
    "hasImage": false
  }
];

export const JAMBIX_CHEMISTRY_100_ITEMS = JAMBIX_CHEMISTRY_ITEMS;
export const JAMBIX_CHEMISTRY_200_ITEMS = JAMBIX_CHEMISTRY_ITEMS;
export const JAMBIX_CHEMISTRY_300_ITEMS = JAMBIX_CHEMISTRY_ITEMS;
export const JAMBIX_CHEMISTRY_400_ITEMS = JAMBIX_CHEMISTRY_ITEMS;
export const JAMBIX_CHEMISTRY_500_ITEMS = JAMBIX_CHEMISTRY_ITEMS;
export const CHEMISTRY_DEMYSTIFIED_ITEMS = JAMBIX_CHEMISTRY_ITEMS;

export function getChemistryDemystifiedVerifiedQuestions() {
  return JAMBIX_CHEMISTRY_ITEMS.map((item, idx) => ({
    id: 930000 + idx + 1,
    year: 2026,
    questionNumber: idx + 1,
    subject: 'Chemistry',
    topic: item.topic,
    text: item.text,
    options: {
      A: item.options.A,
      B: item.options.B,
      C: item.options.C,
      D: item.options.D,
    },
    answer: item.answer,
    explanation: item.explanation,
    bookTitle: 'JAMBIX CHEMISTRY QUESTION BANK',
    author: 'JAMBIX UTME Preparatory Series',
    textbookRef: item.chapterTitle || 'Topic 1: Organic Chemistry',
    hasImage: false,
  }));
}
