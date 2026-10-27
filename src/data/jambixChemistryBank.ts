/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX CHEMISTRY QUESTION BANK
 * TOPIC: ORGANIC CHEMISTRY (QUESTIONS 1–100)
 * Indexed directly from official syllabus specifications.
 * Total questions: 100
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
  }
];

export const JAMBIX_CHEMISTRY_100_ITEMS = JAMBIX_CHEMISTRY_ITEMS;
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
    textbookRef: item.chapterTitle || 'Topic: Organic Chemistry',
    hasImage: false,
  }));
}
