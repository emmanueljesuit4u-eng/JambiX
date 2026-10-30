/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX CHEMISTRY QUESTION BANK
 * TOPIC 1: ORGANIC CHEMISTRY (QUESTIONS 1–100)
 * TOPIC 2: ANALYTICAL CHEMISTRY (QUESTIONS 101–300)
 * Indexed directly from official syllabus specifications.
 * Total questions: 300
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
];

export const JAMBIX_CHEMISTRY_100_ITEMS = JAMBIX_CHEMISTRY_ITEMS;
export const JAMBIX_CHEMISTRY_200_ITEMS = JAMBIX_CHEMISTRY_ITEMS;
export const JAMBIX_CHEMISTRY_300_ITEMS = JAMBIX_CHEMISTRY_ITEMS;
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
