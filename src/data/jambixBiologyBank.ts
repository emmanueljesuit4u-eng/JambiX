/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX BIOLOGY QUESTION BANK
 * 300 TOUGH QUESTIONS ACROSS ALL TOPICS (QUESTIONS 1–300)
 * Indexed directly from official syllabus specifications.
 * Total questions: 300
 */

export interface JambixBiologyItem {
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

export const JAMBIX_BIOLOGY_ITEMS: JambixBiologyItem[] = [
  {
    "id": "bio_tough_1",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Microscopy & Cell Structure",
    "bookQuestionNum": 1,
    "text": "An object has an actual length of 0.02 mm and appears 50 mm long under a microscope. What is the magnification?",
    "options": {
      "A": "×250",
      "B": "×2,500",
      "C": "×25,000",
      "D": "×0.0004"
    },
    "answer": "B",
    "explanation": "Magnification = image size ÷ actual size = 50 ÷ 0.02 = 2,500.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "bio_tough_2",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Cell Organisation",
    "bookQuestionNum": 2,
    "text": "Which feature distinguishes a prokaryotic cell from a typical eukaryotic cell?",
    "options": {
      "A": "Presence of cytoplasm",
      "B": "Presence of ribosomes",
      "C": "Absence of a membrane-bound nucleus",
      "D": "Presence of a cell membrane"
    },
    "answer": "C",
    "explanation": "Prokaryotes lack a membrane-bound nucleus. Their genetic material lies in a region of the cytoplasm called the nucleoid.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "bio_tough_3",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cellular Physiology: Osmosis & Plasmolysis",
    "bookQuestionNum": 3,
    "text": "A plant cell is placed in a concentrated salt solution. What is most likely to happen?",
    "options": {
      "A": "Water enters the cell by osmosis.",
      "B": "The cell becomes turgid.",
      "C": "The cell loses water and becomes plasmolysed.",
      "D": "The cell immediately divides."
    },
    "answer": "C",
    "explanation": "The concentrated solution has a lower water potential than the cell sap, so water leaves the cell by osmosis.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "bio_tough_4",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cellular Physiology: Diffusion & Membrane Transport",
    "bookQuestionNum": 4,
    "text": "Which process allows oxygen to move from the alveoli into the blood?",
    "options": {
      "A": "Active transport",
      "B": "Osmosis",
      "C": "Diffusion",
      "D": "Translocation"
    },
    "answer": "C",
    "explanation": "Oxygen moves down its partial pressure gradient from the alveoli into the blood.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "bio_tough_5",
    "originalChapter": 2,
    "chapterTitle": "Biochemical Processes & Enzymes",
    "topic": "Biochemical Processes: Enzymes",
    "bookQuestionNum": 5,
    "text": "An enzyme works best at 37°C. When heated to 80°C, its activity falls sharply and does not return after cooling. What is the most likely explanation?",
    "options": {
      "A": "The enzyme has been denatured.",
      "B": "The enzyme has become a carbohydrate.",
      "C": "The substrate has become an enzyme.",
      "D": "The enzyme has multiplied."
    },
    "answer": "A",
    "explanation": "High temperature can alter an enzyme's three-dimensional structure and active site, preventing normal substrate binding.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "bio_tough_6",
    "originalChapter": 2,
    "chapterTitle": "Biochemical Processes & Enzymes",
    "topic": "Biochemical Processes: Enzymes",
    "bookQuestionNum": 6,
    "text": "A competitive inhibitor reduces an enzyme's activity. Which change may overcome the inhibition?",
    "options": {
      "A": "Decreasing substrate concentration",
      "B": "Increasing substrate concentration",
      "C": "Removing all enzyme molecules",
      "D": "Increasing the concentration of a substance that destroys the enzyme"
    },
    "answer": "B",
    "explanation": "A competitive inhibitor competes with the substrate for the active site. At sufficiently high substrate concentration, substrate binding becomes more likely.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "bio_tough_7",
    "originalChapter": 3,
    "chapterTitle": "Plant Nutrition & Transport",
    "topic": "Plant Nutrition: Photosynthesis",
    "bookQuestionNum": 7,
    "text": "Which statement about photosynthesis is correct?",
    "options": {
      "A": "Carbon dioxide is released during the light-dependent reactions.",
      "B": "Oxygen released during photosynthesis comes from water.",
      "C": "Glucose is produced by breaking down oxygen.",
      "D": "Chlorophyll absorbs no light energy."
    },
    "answer": "B",
    "explanation": "During the light-dependent reactions, water is split and oxygen is released.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "bio_tough_8",
    "originalChapter": 3,
    "chapterTitle": "Plant Nutrition & Transport",
    "topic": "Plant Nutrition: Mineral Requirements",
    "bookQuestionNum": 8,
    "text": "A plant growing in soil deficient in magnesium develops yellow leaves. Which function is directly affected?",
    "options": {
      "A": "Formation of chlorophyll",
      "B": "Production of cellulose only",
      "C": "Absorption of oxygen by roots",
      "D": "Formation of root hairs only"
    },
    "answer": "A",
    "explanation": "Magnesium is a component of the chlorophyll molecule, so deficiency can cause chlorosis.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "bio_tough_9",
    "originalChapter": 3,
    "chapterTitle": "Plant Nutrition & Transport",
    "topic": "Plant Nutrition: Photosynthesis",
    "bookQuestionNum": 9,
    "text": "A plant is kept in darkness for 48 hours and then one leaf is exposed to sunlight. Afterward, the leaf is tested for starch. Why is the plant first kept in darkness?",
    "options": {
      "A": "To destroy its chlorophyll",
      "B": "To remove stored starch from the leaves",
      "C": "To stop water absorption permanently",
      "D": "To increase its mineral content"
    },
    "answer": "B",
    "explanation": "Destarching reduces interference from starch formed before the experiment, allowing the test to show whether photosynthesis produced new starch.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "bio_tough_10",
    "originalChapter": 3,
    "chapterTitle": "Plant Nutrition & Transport",
    "topic": "Plant Nutrition: Photosynthesis",
    "bookQuestionNum": 10,
    "text": "A plant receives sufficient water and carbon dioxide but is exposed to light that cannot be absorbed effectively by its photosynthetic pigments. What is the likely result?",
    "options": {
      "A": "Photosynthesis proceeds at its maximum rate.",
      "B": "Photosynthesis is limited by inadequate usable light energy.",
      "C": "Root pressure stops immediately.",
      "D": "Transpiration becomes the same as photosynthesis."
    },
    "answer": "B",
    "explanation": "Photosynthesis requires light energy at wavelengths absorbed by photosynthetic pigments.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "bio_tough_11",
    "originalChapter": 3,
    "chapterTitle": "Plant Nutrition & Transport",
    "topic": "Transport in Plants: Xylem & Phloem",
    "bookQuestionNum": 11,
    "text": "Which tissue transports water and mineral salts from the roots to the leaves?",
    "options": {
      "A": "Phloem",
      "B": "Xylem",
      "C": "Epidermis",
      "D": "Cambium only"
    },
    "answer": "B",
    "explanation": "Xylem conducts water and dissolved mineral ions from the roots through the plant.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "bio_tough_12",
    "originalChapter": 3,
    "chapterTitle": "Plant Nutrition & Transport",
    "topic": "Transport in Plants: Translocation",
    "bookQuestionNum": 12,
    "text": "A ring of bark containing phloem is removed from a tree trunk, but the xylem remains intact. Which result is most likely after some time?",
    "options": {
      "A": "Sugars accumulate above the ring.",
      "B": "Water can no longer enter the roots.",
      "C": "Transpiration stops immediately.",
      "D": "Mineral absorption increases without limit."
    },
    "answer": "A",
    "explanation": "Removing the phloem interrupts the movement of sugars from leaves to lower parts of the plant, while the intact xylem may continue transporting water.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "bio_tough_13",
    "originalChapter": 3,
    "chapterTitle": "Plant Nutrition & Transport",
    "topic": "Transport in Plants: Transpiration",
    "bookQuestionNum": 13,
    "text": "Which environmental condition generally increases the rate of transpiration in a plant, provided other factors remain constant?",
    "options": {
      "A": "High relative humidity",
      "B": "Low air movement",
      "C": "High relative humidity and low temperature",
      "D": "Low relative humidity"
    },
    "answer": "D",
    "explanation": "Dry air maintains a steep water-vapour gradient between the leaf and the atmosphere, increasing water loss.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "bio_tough_14",
    "originalChapter": 3,
    "chapterTitle": "Plant Nutrition & Transport",
    "topic": "Transport in Plants: Transpiration",
    "bookQuestionNum": 14,
    "text": "Why do stomata tend to close when a plant loses too much water?",
    "options": {
      "A": "To increase water loss",
      "B": "To reduce further water loss",
      "C": "To increase carbon dioxide loss",
      "D": "To stop photosynthesis permanently"
    },
    "answer": "B",
    "explanation": "Closing stomata reduces transpiration, although it also limits carbon dioxide entry.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "bio_tough_15",
    "originalChapter": 3,
    "chapterTitle": "Plant Nutrition & Transport",
    "topic": "Transport Mechanisms",
    "bookQuestionNum": 15,
    "text": "How do many dissolved nutrients enter a unicellular organism when their concentration is higher outside the cell than inside and the membrane permits their passage?",
    "options": {
      "A": "Diffusion",
      "B": "Transpiration",
      "C": "Translocation",
      "D": "Egestion"
    },
    "answer": "A",
    "explanation": "Dissolved substances can move down their concentration gradient by diffusion.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "bio_tough_16",
    "originalChapter": 4,
    "chapterTitle": "Animal Nutrition & Digestion",
    "topic": "Animal Nutrition: Digestive Enzymes",
    "bookQuestionNum": 16,
    "text": "Salivary amylase acts on cooked starch. Which product is it mainly expected to form initially?",
    "options": {
      "A": "Amino acids",
      "B": "Fatty acids",
      "C": "Maltose and shorter carbohydrates",
      "D": "Glycerol only"
    },
    "answer": "C",
    "explanation": "Amylase breaks starch into smaller carbohydrates, including maltose.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "bio_tough_17",
    "originalChapter": 4,
    "chapterTitle": "Animal Nutrition & Digestion",
    "topic": "Animal Nutrition: Digestion in Mammals",
    "bookQuestionNum": 17,
    "text": "Pepsin digests proteins most effectively in the stomach because the stomach provides",
    "options": {
      "A": "a strongly alkaline medium",
      "B": "an acidic medium",
      "C": "a medium without water",
      "D": "a medium containing bile only"
    },
    "answer": "B",
    "explanation": "Pepsin functions best at a low pH provided by hydrochloric acid in the stomach.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "bio_tough_18",
    "originalChapter": 4,
    "chapterTitle": "Animal Nutrition & Digestion",
    "topic": "Animal Nutrition: Digestion in Mammals",
    "bookQuestionNum": 18,
    "text": "Which statement best describes the role of bile in digestion?",
    "options": {
      "A": "It contains pepsin that digests proteins.",
      "B": "It emulsifies fats and helps neutralise acidic chyme.",
      "C": "It converts glucose into glycogen in the intestine.",
      "D": "It digests cellulose into amino acids."
    },
    "answer": "B",
    "explanation": "Bile salts break large fat globules into smaller droplets, increasing the surface area available to lipase. Bile is alkaline but contains no digestive enzymes.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "bio_tough_19",
    "originalChapter": 4,
    "chapterTitle": "Animal Nutrition & Digestion",
    "topic": "Animal Nutrition: Absorption & Assimilation",
    "bookQuestionNum": 19,
    "text": "Most absorption of the products of digestion occurs in the small intestine because it has",
    "options": {
      "A": "a thick wall with no blood supply",
      "B": "villi and microvilli that provide a large surface area",
      "C": "no muscular movement",
      "D": "a lining that prevents nutrient entry"
    },
    "answer": "B",
    "explanation": "The large surface area, thin lining, and rich blood and lymph supplies support efficient absorption.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "bio_tough_20",
    "originalChapter": 4,
    "chapterTitle": "Animal Nutrition & Digestion",
    "topic": "Animal Nutrition: Transport to Liver",
    "bookQuestionNum": 20,
    "text": "After absorption from the small intestine, most glucose enters the blood capillaries of the villi. Which vessel carries this blood toward the liver?",
    "options": {
      "A": "Pulmonary artery",
      "B": "Hepatic portal vein",
      "C": "Renal vein",
      "D": "Aorta directly from the intestine"
    },
    "answer": "B",
    "explanation": "The hepatic portal vein carries nutrient-rich blood from the digestive tract to the liver.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "bio_tough_21",
    "originalChapter": 5,
    "chapterTitle": "Transport in Animals & Circulation",
    "topic": "Transport in Animals: Blood Components",
    "bookQuestionNum": 21,
    "text": "Which adaptation makes a red blood cell efficient at transporting oxygen?",
    "options": {
      "A": "A nucleus occupying most of its interior",
      "B": "A biconcave shape and haemoglobin",
      "C": "A thick cellulose wall",
      "D": "Numerous chloroplasts"
    },
    "answer": "B",
    "explanation": "Haemoglobin binds oxygen, while the biconcave shape provides a large surface area relative to volume.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "bio_tough_22",
    "originalChapter": 5,
    "chapterTitle": "Transport in Animals & Circulation",
    "topic": "Transport in Animals: Blood Clotting",
    "bookQuestionNum": 22,
    "text": "Which blood component is mainly responsible for forming a plug at a damaged blood vessel and initiating clotting?",
    "options": {
      "A": "Red blood cells",
      "B": "Platelets",
      "C": "Plasma water only",
      "D": "Antibodies only"
    },
    "answer": "B",
    "explanation": "Platelets adhere to damaged vessel surfaces and help activate the clotting process.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "bio_tough_23",
    "originalChapter": 5,
    "chapterTitle": "Transport in Animals & Circulation",
    "topic": "Transport in Animals: Blood Groups",
    "bookQuestionNum": 23,
    "text": "In the ABO blood group system, which blood group can generally receive red blood cells from all four ABO groups, assuming compatible Rh status?",
    "options": {
      "A": "A",
      "B": "B",
      "C": "AB",
      "D": "O"
    },
    "answer": "C",
    "explanation": "People with group AB have neither anti-A nor anti-B antibodies in their plasma, allowing them to receive red cells from any ABO group when other compatibility requirements are met.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "bio_tough_24",
    "originalChapter": 5,
    "chapterTitle": "Transport in Animals & Circulation",
    "topic": "Transport in Animals: Circulatory System",
    "bookQuestionNum": 24,
    "text": "Which heart structure prevents blood from flowing backward from the left ventricle into the left atrium?",
    "options": {
      "A": "Tricuspid valve",
      "B": "Bicuspid (mitral) valve",
      "C": "Pulmonary semilunar valve",
      "D": "Aortic semilunar valve"
    },
    "answer": "B",
    "explanation": "The mitral valve closes during ventricular contraction to prevent backflow into the left atrium.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "bio_tough_25",
    "originalChapter": 5,
    "chapterTitle": "Transport in Animals & Circulation",
    "topic": "Transport in Animals: Circulatory System",
    "bookQuestionNum": 25,
    "text": "What is the main advantage of double circulation in humans?",
    "options": {
      "A": "Blood never passes through the lungs.",
      "B": "Oxygenated and deoxygenated blood can be kept largely separate.",
      "C": "Blood flows through the heart only once per complete circuit.",
      "D": "The heart does not need valves."
    },
    "answer": "B",
    "explanation": "The pulmonary and systemic circuits support efficient oxygen delivery while maintaining separation between oxygen-rich and oxygen-poor blood.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "bio_tough_26",
    "originalChapter": 5,
    "chapterTitle": "Transport in Animals & Circulation",
    "topic": "Transport in Animals: Lymphatic System",
    "bookQuestionNum": 26,
    "text": "One important function of the lymphatic system is to",
    "options": {
      "A": "produce bile for fat digestion",
      "B": "return excess tissue fluid to the bloodstream",
      "C": "pump blood directly from the heart to the lungs",
      "D": "produce urine in the bladder"
    },
    "answer": "B",
    "explanation": "Lymphatic vessels collect excess interstitial fluid and return it to the circulation. Lacteals also absorb many products of fat digestion.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "bio_tough_27",
    "originalChapter": 6,
    "chapterTitle": "Excretion & Osmoregulation",
    "topic": "Excretion & Homeostasis",
    "bookQuestionNum": 27,
    "text": "Which process is an example of excretion rather than egestion?",
    "options": {
      "A": "Removal of undigested fibre in faeces",
      "B": "Removal of carbon dioxide produced by cellular respiration",
      "C": "Elimination of undigested seeds",
      "D": "Passing undigested food through the anus"
    },
    "answer": "B",
    "explanation": "Excretion removes metabolic waste. Egestion removes undigested material from the digestive tract.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "bio_tough_28",
    "originalChapter": 6,
    "chapterTitle": "Excretion & Osmoregulation",
    "topic": "Excretion & Osmoregulation: Kidney",
    "bookQuestionNum": 28,
    "text": "Where does ultrafiltration of blood occur in the human kidney?",
    "options": {
      "A": "Collecting duct",
      "B": "Glomerulus into Bowman's capsule",
      "C": "Ureter",
      "D": "Urinary bladder"
    },
    "answer": "B",
    "explanation": "High pressure in the glomerular capillaries forces water and small dissolved substances into Bowman's capsule while most blood cells and large proteins remain in the blood.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "bio_tough_29",
    "originalChapter": 6,
    "chapterTitle": "Excretion & Osmoregulation",
    "topic": "Excretion & Osmoregulation: Kidney",
    "bookQuestionNum": 29,
    "text": "When the body is dehydrated, the secretion of antidiuretic hormone (ADH) generally increases. What is its effect on the kidneys?",
    "options": {
      "A": "It reduces water reabsorption.",
      "B": "It increases water reabsorption in the collecting ducts.",
      "C": "It prevents all filtration in the glomeruli.",
      "D": "It increases water loss in urine."
    },
    "answer": "B",
    "explanation": "ADH increases the water permeability of parts of the kidney tubules, producing a smaller volume of more concentrated urine.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "bio_tough_30",
    "originalChapter": 6,
    "chapterTitle": "Excretion & Osmoregulation",
    "topic": "Excretion & Osmoregulation: Kidney Disorders",
    "bookQuestionNum": 30,
    "text": "Why may a patient with severe kidney failure require dialysis?",
    "options": {
      "A": "To produce digestive enzymes",
      "B": "To remove excess wastes and help regulate fluid and electrolyte balance",
      "C": "To manufacture red blood cells directly",
      "D": "To replace the function of the lungs entirely"
    },
    "answer": "B",
    "explanation": "Dialysis uses a selectively permeable membrane and concentration gradients to remove some waste substances and excess fluid from the blood.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "bio_tough_31",
    "originalChapter": 7,
    "chapterTitle": "Respiration & Gas Exchange",
    "topic": "Respiration: Respiratory Organs",
    "bookQuestionNum": 31,
    "text": "Which feature of the alveoli makes gaseous exchange efficient?",
    "options": {
      "A": "Thick walls and a small surface area",
      "B": "Thin walls, a large surface area, and a rich capillary supply",
      "C": "A dry surface without blood vessels",
      "D": "Rigid walls that prevent diffusion"
    },
    "answer": "B",
    "explanation": "These features shorten diffusion distance and maintain gradients for oxygen and carbon dioxide exchange.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "bio_tough_32",
    "originalChapter": 7,
    "chapterTitle": "Respiration & Gas Exchange",
    "topic": "Respiration: Fermentation",
    "bookQuestionNum": 32,
    "text": "During anaerobic respiration in yeast, glucose is converted mainly into",
    "options": {
      "A": "lactic acid only",
      "B": "ethanol and carbon dioxide",
      "C": "oxygen and water",
      "D": "amino acids and nitrogen"
    },
    "answer": "B",
    "explanation": "Yeast ferments glucose to ethanol and carbon dioxide when oxygen is unavailable or insufficient for aerobic respiration.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "bio_tough_33",
    "originalChapter": 7,
    "chapterTitle": "Respiration & Gas Exchange",
    "topic": "Respiration: Aerobic Respiration",
    "bookQuestionNum": 33,
    "text": "The respiratory quotient (RQ) for the complete oxidation of a carbohydrate such as glucose is approximately",
    "options": {
      "A": "0.7",
      "B": "0.8",
      "C": "1.0",
      "D": "1.5"
    },
    "answer": "C",
    "explanation": "For glucose, the volume of carbon dioxide produced equals the volume of oxygen consumed, giving an RQ of 1.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "bio_tough_34",
    "originalChapter": 7,
    "chapterTitle": "Respiration & Gas Exchange",
    "topic": "Respiration: Breathing Mechanism",
    "bookQuestionNum": 34,
    "text": "During normal inspiration in humans, the diaphragm",
    "options": {
      "A": "relaxes and moves upward",
      "B": "contracts and flattens",
      "C": "remains motionless",
      "D": "closes the trachea"
    },
    "answer": "B",
    "explanation": "This increases the volume of the thoracic cavity, lowers pressure in the lungs, and draws air in.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "bio_tough_35",
    "originalChapter": 8,
    "chapterTitle": "Coordination, Control & Homeostasis",
    "topic": "Coordination & Control: Nervous System",
    "bookQuestionNum": 35,
    "text": "Which structure carries impulses away from a neuron's cell body toward another cell or an effector?",
    "options": {
      "A": "Dendrite only",
      "B": "Axon",
      "C": "Nucleus",
      "D": "Myelin as an independent conducting cell"
    },
    "answer": "B",
    "explanation": "An axon conducts nerve impulses away from the cell body toward synapses or effectors.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "bio_tough_36",
    "originalChapter": 8,
    "chapterTitle": "Coordination, Control & Homeostasis",
    "topic": "Coordination & Control: Nervous System",
    "bookQuestionNum": 36,
    "text": "Transmission across a typical chemical synapse is one-way mainly because",
    "options": {
      "A": "neurotransmitter is released from the presynaptic side and receptors are on the postsynaptic side",
      "B": "the synapse contains no chemicals",
      "C": "electrical impulses can never cross cell membranes",
      "D": "both neurons lack cell membranes"
    },
    "answer": "A",
    "explanation": "The arrangement of neurotransmitter release machinery and receptors normally makes chemical transmission directional.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "bio_tough_37",
    "originalChapter": 8,
    "chapterTitle": "Coordination, Control & Homeostasis",
    "topic": "Coordination & Control: Endocrine System",
    "bookQuestionNum": 37,
    "text": "Which cells of the pancreas secrete insulin?",
    "options": {
      "A": "Alpha cells of the islets",
      "B": "Beta cells of the islets",
      "C": "Red blood cells",
      "D": "Kidney epithelial cells"
    },
    "answer": "B",
    "explanation": "Pancreatic beta cells release insulin, which helps lower blood glucose by promoting uptake and storage.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "bio_tough_38",
    "originalChapter": 8,
    "chapterTitle": "Coordination, Control & Homeostasis",
    "topic": "Homeostasis: Regulation Mechanisms",
    "bookQuestionNum": 38,
    "text": "Which statement best describes negative feedback in the regulation of body conditions?",
    "options": {
      "A": "A change produces a response that increases the original change without limit.",
      "B": "A response counteracts a deviation from a regulated level.",
      "C": "The body stops responding to all changes.",
      "D": "Hormones are always destroyed before they act."
    },
    "answer": "B",
    "explanation": "Negative feedback helps maintain relatively stable internal conditions by opposing deviations.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "bio_tough_39",
    "originalChapter": 8,
    "chapterTitle": "Coordination, Control & Homeostasis",
    "topic": "Coordination & Control: Reflex Action",
    "bookQuestionNum": 39,
    "text": "Which sequence correctly represents a simple reflex arc?",
    "options": {
      "A": "Effector → sensory neurone → receptor → motor neurone",
      "B": "Receptor → sensory neurone → relay neurone → motor neurone → effector",
      "C": "Motor neurone → receptor → sensory neurone → effector",
      "D": "Receptor → motor neurone → sensory neurone → effector"
    },
    "answer": "B",
    "explanation": "A stimulus is detected by a receptor, carried to the central nervous system, processed, and sent to an effector.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "bio_tough_40",
    "originalChapter": 8,
    "chapterTitle": "Coordination, Control & Homeostasis",
    "topic": "Sense Organs: The Eye",
    "bookQuestionNum": 40,
    "text": "When a person shifts attention from a distant object to a nearby object, what happens during accommodation?",
    "options": {
      "A": "The lens becomes thinner and flatter.",
      "B": "The ciliary muscles contract and the lens becomes thicker.",
      "C": "The pupil permanently closes.",
      "D": "The retina moves away from the lens."
    },
    "answer": "B",
    "explanation": "For near vision, reduced tension in the suspensory ligaments allows the lens to become more convex, increasing its refractive power.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "bio_tough_41",
    "originalChapter": 8,
    "chapterTitle": "Coordination, Control & Homeostasis",
    "topic": "Plant Responses: Plant Hormones & Tropisms",
    "bookQuestionNum": 41,
    "text": "A young shoot bends toward light because auxin",
    "options": {
      "A": "accumulates on the illuminated side and stops all cell growth",
      "B": "accumulates more on the shaded side, promoting greater elongation there",
      "C": "destroys the cells on the shaded side",
      "D": "causes equal elongation on both sides in all conditions"
    },
    "answer": "B",
    "explanation": "Unequal growth causes the shoot to curve toward the light.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "bio_tough_42",
    "originalChapter": 8,
    "chapterTitle": "Coordination, Control & Homeostasis",
    "topic": "Plant Responses: Tropic & Nastic Movements",
    "bookQuestionNum": 42,
    "text": "Which statement correctly distinguishes a tropic response from a nastic response?",
    "options": {
      "A": "A tropic response is directional with respect to the stimulus; a nastic response is not determined by stimulus direction.",
      "B": "A tropic response occurs only in animals.",
      "C": "A nastic response always involves growth toward light.",
      "D": "Both responses are always caused by conscious movement."
    },
    "answer": "A",
    "explanation": "Tropisms depend on stimulus direction, while nastic movements are generally independent of that direction.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "bio_tough_43",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Reproduction & Endocrine: Hormones",
    "bookQuestionNum": 43,
    "text": "Which hormone primarily stimulates the uterus to contract strongly during childbirth?",
    "options": {
      "A": "Insulin",
      "B": "Oxytocin",
      "C": "Thyroxine",
      "D": "Glucagon"
    },
    "answer": "B",
    "explanation": "Oxytocin stimulates uterine contractions during labour and supports milk ejection.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "bio_tough_44",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Reproduction in Plants: Seed Formation",
    "bookQuestionNum": 44,
    "text": "In flowering plants, which structure develops into the seed after fertilisation?",
    "options": {
      "A": "Ovary wall",
      "B": "Ovule",
      "C": "Stigma",
      "D": "Petal"
    },
    "answer": "B",
    "explanation": "After fertilisation, the ovule develops into the seed, while the ovary usually develops into the fruit.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "bio_tough_45",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Reproduction in Plants: Pollination & Fertilisation",
    "bookQuestionNum": 45,
    "text": "What is the major reproductive function of the pollen tube?",
    "options": {
      "A": "To manufacture seeds by photosynthesis",
      "B": "To carry male gametes to the embryo sac",
      "C": "To produce nectar for pollinators",
      "D": "To form the ovary wall"
    },
    "answer": "B",
    "explanation": "The pollen tube grows through the style and delivers male gametes to the female gametophyte.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "bio_tough_46",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Reproduction in Plants: Fertilisation",
    "bookQuestionNum": 46,
    "text": "Double fertilisation in flowering plants produces",
    "options": {
      "A": "two embryos from every ovule in all cases",
      "B": "a diploid zygote and usually a triploid endosperm",
      "C": "only a haploid endosperm",
      "D": "two pollen grains and no embryo"
    },
    "answer": "B",
    "explanation": "One male gamete fuses with the egg to form the zygote; the other fuses with the two polar nuclei to form the primary endosperm nucleus, usually triploid.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "bio_tough_47",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Reproduction in Animals: Human Development",
    "bookQuestionNum": 47,
    "text": "Which statement about the human placenta is correct?",
    "options": {
      "A": "Maternal and fetal blood normally mix freely in large quantities.",
      "B": "It allows exchange of gases, nutrients, and wastes between maternal and fetal blood.",
      "C": "It produces all the oxygen used by the fetus.",
      "D": "It prevents every harmful substance from reaching the fetus."
    },
    "answer": "B",
    "explanation": "The placenta enables exchange across a barrier. Maternal and fetal blood are normally kept in separate circulations, and the barrier does not block every harmful substance.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "bio_tough_48",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Reproduction in Animals: Menstrual Cycle",
    "bookQuestionNum": 48,
    "text": "For a typical 28-day menstrual cycle, ovulation occurs approximately on which day?",
    "options": {
      "A": "Day 1",
      "B": "Day 7",
      "C": "Day 14",
      "D": "Day 28"
    },
    "answer": "C",
    "explanation": "Ovulation often occurs around the midpoint of a 28-day cycle, although the timing varies between individuals and cycles.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "bio_tough_49",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Reproduction & Cell Division: Meiosis",
    "bookQuestionNum": 49,
    "text": "Meiosis during human sperm production is important because it",
    "options": {
      "A": "doubles the chromosome number of every sperm",
      "B": "produces haploid cells with half the usual chromosome number",
      "C": "produces genetically identical diploid cells only",
      "D": "eliminates DNA from the sperm completely"
    },
    "answer": "B",
    "explanation": "Meiosis reduces the chromosome number from diploid to haploid so that fertilisation restores the diploid number.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "bio_tough_50",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Growth & Development: Seed Germination",
    "bookQuestionNum": 50,
    "text": "Which set of conditions is generally required for a viable seed to germinate?",
    "options": {
      "A": "Water, oxygen, and a suitable temperature",
      "B": "Continuous darkness, salt, and carbon dioxide only",
      "C": "Dry air and very high temperature",
      "D": "Light alone"
    },
    "answer": "A",
    "explanation": "Water activates metabolism, oxygen supports respiration, and a suitable temperature permits enzyme activity. Light is not essential for the germination of every species.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "bio_tough_51",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Reproduction in Plants: Floral Structure",
    "bookQuestionNum": 51,
    "text": "A plant species produces flowers with both functional stamens and carpels. What is the most accurate conclusion?",
    "options": {
      "A": "The flowers are necessarily unisexual.",
      "B": "The flowers are bisexual.",
      "C": "The plant cannot self-pollinate.",
      "D": "The plant reproduces only asexually."
    },
    "answer": "B",
    "explanation": "A bisexual flower contains both male reproductive organs (stamens) and female reproductive organs (carpels).",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "bio_tough_52",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Reproduction in Plants: Pollination",
    "bookQuestionNum": 52,
    "text": "Which condition must be satisfied for cross-pollination to occur?",
    "options": {
      "A": "Pollen must reach the stigma of a flower on the same plant only.",
      "B": "Pollen must be transferred to a flower on a different plant of the same species.",
      "C": "Fertilisation must occur before pollen transfer.",
      "D": "The pollen must come from a different species."
    },
    "answer": "B",
    "explanation": "Cross-pollination involves pollen transfer between different plants of the same species.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "bio_tough_53",
    "originalChapter": 9,
    "chapterTitle": "Reproduction & Development",
    "topic": "Reproduction: Asexual Reproduction",
    "bookQuestionNum": 53,
    "text": "Which process produces offspring with the greatest likelihood of being genetically identical to the parent, apart from mutations?",
    "options": {
      "A": "Sexual reproduction between unrelated parents",
      "B": "Binary fission",
      "C": "Meiosis followed by random fertilisation",
      "D": "Cross-pollination between different varieties"
    },
    "answer": "B",
    "explanation": "Binary fission is a form of asexual reproduction that normally produces genetically very similar daughter cells.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "bio_tough_54",
    "originalChapter": 10,
    "chapterTitle": "Genetics & Heredity",
    "topic": "Genetics: Mendelian Inheritance",
    "bookQuestionNum": 54,
    "text": "In a monohybrid cross between two heterozygous tall pea plants (Tt × Tt), with tallness completely dominant over shortness, what phenotype ratio is expected?",
    "options": {
      "A": "1 tall : 1 short",
      "B": "1 tall : 2 short",
      "C": "3 tall : 1 short",
      "D": "1 tall : 3 short"
    },
    "answer": "C",
    "explanation": "The genotypes are TT, Tt, Tt and tt. Three are tall and one is short.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "bio_tough_55",
    "originalChapter": 10,
    "chapterTitle": "Genetics & Heredity",
    "topic": "Genetics: Mendelian Inheritance",
    "bookQuestionNum": 55,
    "text": "In the cross Tt × Tt, what is the probability of an offspring being homozygous recessive?",
    "options": {
      "A": "0",
      "B": "1/4",
      "C": "1/2",
      "D": "3/4"
    },
    "answer": "B",
    "explanation": "The possible genotypes are TT, Tt, Tt and tt. Only one of the four is tt.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "bio_tough_56",
    "originalChapter": 10,
    "chapterTitle": "Genetics & Heredity",
    "topic": "Genetics: Test Crosses",
    "bookQuestionNum": 56,
    "text": "A test cross is performed by crossing an individual with a dominant phenotype but unknown genotype with",
    "options": {
      "A": "a homozygous dominant individual",
      "B": "a homozygous recessive individual",
      "C": "another individual of unknown genotype only",
      "D": "an individual from a different species"
    },
    "answer": "B",
    "explanation": "The recessive parent reveals whether the tested individual carries a recessive allele through the offspring's phenotypes.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "bio_tough_57",
    "originalChapter": 10,
    "chapterTitle": "Genetics & Heredity",
    "topic": "Genetics: Sex-Linked Inheritance",
    "bookQuestionNum": 57,
    "text": "A recessive allele for a condition is carried on the X chromosome. Why can such a condition be more common in males than in females?",
    "options": {
      "A": "Males have two X chromosomes.",
      "B": "Males have only one X chromosome, so a recessive allele on it can be expressed without a corresponding allele on a second X.",
      "C": "Females have no sex chromosomes.",
      "D": "All genes on the X chromosome are dominant."
    },
    "answer": "B",
    "explanation": "A male with one affected X-linked allele will usually express the condition because the Y chromosome generally lacks a corresponding allele at that locus.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "bio_tough_58",
    "originalChapter": 10,
    "chapterTitle": "Genetics & Heredity",
    "topic": "Genetics: Molecular Genetics",
    "bookQuestionNum": 58,
    "text": "Which DNA base pairing is correct?",
    "options": {
      "A": "Adenine with cytosine",
      "B": "Adenine with thymine",
      "C": "Guanine with thymine",
      "D": "Cytosine with adenine only"
    },
    "answer": "B",
    "explanation": "In DNA, adenine pairs with thymine, while guanine pairs with cytosine.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "bio_tough_59",
    "originalChapter": 10,
    "chapterTitle": "Genetics & Heredity",
    "topic": "Genetics: Chromosome Numbers",
    "bookQuestionNum": 59,
    "text": "A diploid organism has 24 chromosomes in each body cell. How many chromosomes are expected in a normal haploid gamete?",
    "options": {
      "A": "6",
      "B": "12",
      "C": "24",
      "D": "48"
    },
    "answer": "B",
    "explanation": "A haploid gamete contains half the diploid chromosome number: 24 ÷ 2 = 12.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "bio_tough_60",
    "originalChapter": 10,
    "chapterTitle": "Genetics & Heredity",
    "topic": "Genetics: Mutation",
    "bookQuestionNum": 60,
    "text": "Which statement about a gene mutation is correct?",
    "options": {
      "A": "Every mutation is harmful.",
      "B": "A mutation is a change in genetic material and may be harmful, neutral, or beneficial.",
      "C": "Mutations occur only in body cells and never in reproductive cells.",
      "D": "Mutations always change the chromosome number."
    },
    "answer": "B",
    "explanation": "Mutations vary in their effects and may involve DNA sequences or larger chromosome changes.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "bio_tough_61",
    "originalChapter": 10,
    "chapterTitle": "Genetics & Heredity",
    "topic": "Genetics: Variation in Populations",
    "bookQuestionNum": 61,
    "text": "Which trait is most likely to show continuous variation in a human population?",
    "options": {
      "A": "ABO blood group",
      "B": "Ability to roll the tongue as traditionally classified in simple school examples",
      "C": "Adult height",
      "D": "Presence or absence of a particular inherited allele"
    },
    "answer": "C",
    "explanation": "Height varies across a range and is influenced by many genes and environmental factors such as nutrition.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "bio_tough_62",
    "originalChapter": 11,
    "chapterTitle": "Evolution & Adaptation",
    "topic": "Evolution: Natural Selection",
    "bookQuestionNum": 62,
    "text": "Which process explains how an advantageous inherited characteristic can become more common in a population over generations?",
    "options": {
      "A": "Natural selection",
      "B": "Egestion",
      "C": "Diffusion",
      "D": "Osmosis"
    },
    "answer": "A",
    "explanation": "Individuals with heritable traits that improve reproductive success may leave more offspring, increasing the frequency of those traits.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "bio_tough_63",
    "originalChapter": 11,
    "chapterTitle": "Evolution & Adaptation",
    "topic": "Evolution: Evidence for Evolution",
    "bookQuestionNum": 63,
    "text": "Which observation provides evidence for evolution through common ancestry?",
    "options": {
      "A": "Homologous structures with similar underlying anatomy in different species",
      "B": "All organisms having exactly the same external shape",
      "C": "Individual organisms changing their genes because they need to",
      "D": "Every species living in the same habitat"
    },
    "answer": "A",
    "explanation": "Homologous structures are consistent with inheritance from a common ancestor, even when their functions differ.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "bio_tough_64",
    "originalChapter": 11,
    "chapterTitle": "Evolution & Adaptation",
    "topic": "Evolution: Evidence for Evolution",
    "bookQuestionNum": 64,
    "text": "Why is the fossil record important to the study of evolution?",
    "options": {
      "A": "It proves that all species appeared at the same time.",
      "B": "It provides evidence of past organisms and changes in life through geological time.",
      "C": "It shows that organisms never become extinct.",
      "D": "It records every organism that has ever lived."
    },
    "answer": "B",
    "explanation": "Fossils preserve evidence of organisms from different periods, although the record is incomplete.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "bio_tough_65",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Ecosystem Structure",
    "bookQuestionNum": 65,
    "text": "A habitat contains grasses, grasshoppers, frogs, snakes, and decomposers. Which statement best describes the ecosystem?",
    "options": {
      "A": "It includes only the grass.",
      "B": "It includes only the animals.",
      "C": "It includes the organisms and their interactions with non-living environmental factors.",
      "D": "It excludes soil, water, and light."
    },
    "answer": "C",
    "explanation": "An ecosystem consists of living communities and the abiotic environment with which they interact.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "bio_tough_66",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Trophic Levels & Energy Flow",
    "bookQuestionNum": 66,
    "text": "Why does the amount of usable energy generally decrease at successive trophic levels in a food chain?",
    "options": {
      "A": "Energy is recycled completely into food at every level.",
      "B": "Organisms use energy in respiration, and some energy is lost as heat or remains in uneaten material and waste.",
      "C": "Producers contain no energy.",
      "D": "Consumers convert all food into new body tissue."
    },
    "answer": "B",
    "explanation": "Only a fraction of the energy entering a trophic level becomes biomass available to the next level.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "bio_tough_67",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Nutrient Cycling",
    "bookQuestionNum": 67,
    "text": "What role do decomposers such as many fungi and bacteria play in an ecosystem?",
    "options": {
      "A": "They permanently remove all minerals from the ecosystem.",
      "B": "They break down dead organic material and return nutrients to the environment.",
      "C": "They produce sunlight.",
      "D": "They prevent all nutrient cycling."
    },
    "answer": "B",
    "explanation": "Decomposition releases mineral nutrients that can be reused by plants and other organisms.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "bio_tough_68",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Ecological Pyramids",
    "bookQuestionNum": 68,
    "text": "Which ecological pyramid cannot be inverted when it represents energy per unit area per unit time?",
    "options": {
      "A": "Pyramid of numbers",
      "B": "Pyramid of biomass",
      "C": "Pyramid of energy",
      "D": "Pyramid of organism height"
    },
    "answer": "C",
    "explanation": "Energy is lost between trophic levels, so the energy available per unit area per unit time decreases upward through the chain.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "bio_tough_69",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Nitrogen Cycle",
    "bookQuestionNum": 69,
    "text": "Which process converts atmospheric nitrogen into compounds that can enter biological nitrogen cycles?",
    "options": {
      "A": "Nitrogen fixation",
      "B": "Transpiration",
      "C": "Photosynthesis alone",
      "D": "Egestion"
    },
    "answer": "A",
    "explanation": "Nitrogen fixation converts atmospheric nitrogen gas into biologically usable nitrogen compounds, commonly through certain bacteria or industrial processes.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "bio_tough_70",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Nitrogen Cycle",
    "bookQuestionNum": 70,
    "text": "Which process returns nitrogen from nitrates in soil to atmospheric nitrogen gas?",
    "options": {
      "A": "Nitrification",
      "B": "Denitrification",
      "C": "Ammonification",
      "D": "Nitrogen fixation"
    },
    "answer": "B",
    "explanation": "Denitrifying microorganisms reduce nitrate to gaseous nitrogen compounds, returning nitrogen to the atmosphere.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "bio_tough_71",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Water Cycle",
    "bookQuestionNum": 71,
    "text": "In the water cycle, the direct loss of water vapour from plant leaves is called",
    "options": {
      "A": "condensation",
      "B": "precipitation",
      "C": "transpiration",
      "D": "infiltration"
    },
    "answer": "C",
    "explanation": "Transpiration is the loss of water vapour from aerial parts of plants, mainly through stomata.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "bio_tough_72",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Population Sampling",
    "bookQuestionNum": 72,
    "text": "Which technique is most suitable for estimating the density of a population of small plants in a grassland?",
    "options": {
      "A": "Quadrat sampling",
      "B": "Counting only organisms that fly past",
      "C": "Measuring blood pressure",
      "D": "Using a microscope to count every soil particle"
    },
    "answer": "A",
    "explanation": "Quadrats allow researchers to sample organisms in defined areas and estimate population density.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "bio_tough_73",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Population Estimation",
    "bookQuestionNum": 73,
    "text": "In a mark-release-recapture study, 40 animals are captured and marked first. Later, 50 animals are caught, of which 10 are marked. Estimate the population size using the basic Lincoln index.",
    "options": {
      "A": "100",
      "B": "150",
      "C": "200",
      "D": "250"
    },
    "answer": "C",
    "explanation": "Estimated population = (number marked initially × number in second sample) ÷ number of marked recaptures = (40 × 50)/10 = 200, assuming the method's key assumptions are reasonably met.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "bio_tough_74",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Population Dynamics",
    "bookQuestionNum": 74,
    "text": "What is the carrying capacity of an environment?",
    "options": {
      "A": "The smallest possible population in any habitat",
      "B": "The largest population that the environment can support sustainably under given conditions",
      "C": "The total number of species that have ever existed",
      "D": "The number of predators only"
    },
    "answer": "B",
    "explanation": "Carrying capacity depends on resources, environmental conditions, and other limiting factors.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "bio_tough_75",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Environmental Pollution",
    "bookQuestionNum": 75,
    "text": "Fertiliser runoff enters a lake and causes a rapid increase in algae. After the algae die, oxygen levels fall and fish die. This sequence is an example of",
    "options": {
      "A": "eutrophication",
      "B": "biological nitrogen fixation only",
      "C": "natural pollination",
      "D": "primary succession only"
    },
    "answer": "A",
    "explanation": "Excess nutrients stimulate algal growth. Decomposition of the dead algae consumes dissolved oxygen, which can kill aquatic organisms.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "bio_tough_76",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Environmental Pollution",
    "bookQuestionNum": 76,
    "text": "A pesticide becomes more concentrated in the tissues of organisms at higher trophic levels. This is called",
    "options": {
      "A": "mutualism",
      "B": "biomagnification",
      "C": "transpiration",
      "D": "osmosis"
    },
    "answer": "B",
    "explanation": "Persistent substances may accumulate along food chains, reaching higher concentrations in predators than in organisms lower in the chain.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "bio_tough_77",
    "originalChapter": 13,
    "chapterTitle": "Classification, Diversity & Microorganisms",
    "topic": "Ecology: Plant Adaptations",
    "bookQuestionNum": 77,
    "text": "Which feature helps many mangrove plants obtain oxygen in waterlogged, oxygen-poor soil?",
    "options": {
      "A": "Pneumatophores",
      "B": "Underground flowers only",
      "C": "A complete absence of roots",
      "D": "Chloroplasts in every root cell"
    },
    "answer": "A",
    "explanation": "These specialised aerial roots allow gas exchange in waterlogged habitats.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "bio_tough_78",
    "originalChapter": 13,
    "chapterTitle": "Classification, Diversity & Microorganisms",
    "topic": "Ecology: Plant Adaptations",
    "bookQuestionNum": 78,
    "text": "Which adaptation is most useful to a plant living in a very dry habitat?",
    "options": {
      "A": "Broad, thin leaves with many exposed stomata",
      "B": "A thick cuticle and reduced leaf area",
      "C": "Permanently open stomata regardless of water status",
      "D": "Roots that cannot absorb water"
    },
    "answer": "B",
    "explanation": "These adaptations reduce water loss. Other xerophytic adaptations include sunken stomata and water-storage tissues.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "bio_tough_79",
    "originalChapter": 13,
    "chapterTitle": "Classification, Diversity & Microorganisms",
    "topic": "Classification: Taxonomy & Systematics",
    "bookQuestionNum": 79,
    "text": "In binomial nomenclature, the scientific name of an organism consists of",
    "options": {
      "A": "its family and order only",
      "B": "its genus name followed by its specific epithet",
      "C": "its kingdom and phylum only",
      "D": "two unrelated common names"
    },
    "answer": "B",
    "explanation": "A binomial scientific name has two parts, such as Homo sapiens.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "bio_tough_80",
    "originalChapter": 13,
    "chapterTitle": "Classification, Diversity & Microorganisms",
    "topic": "Classification: Arthropods (Insects)",
    "bookQuestionNum": 80,
    "text": "Which combination is characteristic of insects?",
    "options": {
      "A": "Four pairs of legs and two body regions",
      "B": "Three pairs of legs and three main body regions",
      "C": "Five pairs of legs and gills in every adult",
      "D": "Two pairs of antennae and eight legs"
    },
    "answer": "B",
    "explanation": "Insects typically have a head, thorax, and abdomen, three pairs of thoracic legs, and one pair of antennae.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "bio_tough_81",
    "originalChapter": 13,
    "chapterTitle": "Classification, Diversity & Microorganisms",
    "topic": "Classification: Vertebrates (Amphibians)",
    "bookQuestionNum": 81,
    "text": "Which feature is characteristic of adult amphibians such as frogs?",
    "options": {
      "A": "Dry feathers and a beak",
      "B": "Moist skin and an ectothermic mode of life",
      "C": "Mammary glands and hair",
      "D": "Six jointed legs"
    },
    "answer": "B",
    "explanation": "Many adult amphibians have moist skin that can aid gas exchange, and their body temperature depends substantially on environmental conditions.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "bio_tough_82",
    "originalChapter": 13,
    "chapterTitle": "Classification, Diversity & Microorganisms",
    "topic": "Classification: Vertebrates (Birds)",
    "bookQuestionNum": 82,
    "text": "Which vertebrate group is typically characterised by feathers and forelimbs modified into wings?",
    "options": {
      "A": "Mammals",
      "B": "Birds",
      "C": "Amphibians",
      "D": "Cartilaginous fishes"
    },
    "answer": "B",
    "explanation": "Feathers are a defining feature of birds, and their forelimbs are modified into wings.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "bio_tough_83",
    "originalChapter": 13,
    "chapterTitle": "Classification, Diversity & Microorganisms",
    "topic": "Microorganisms: Viruses",
    "bookQuestionNum": 83,
    "text": "Which statement about viruses is correct?",
    "options": {
      "A": "They carry out independent cellular respiration.",
      "B": "They are acellular and replicate only inside suitable host cells.",
      "C": "They all contain both DNA and RNA as their genetic material.",
      "D": "They reproduce by binary fission like bacteria."
    },
    "answer": "B",
    "explanation": "Viruses lack independent cellular machinery for reproduction and use host-cell resources to replicate. A virus typically has DNA or RNA as its genome.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "bio_tough_84",
    "originalChapter": 13,
    "chapterTitle": "Classification, Diversity & Microorganisms",
    "topic": "Microorganisms: Bacteria",
    "bookQuestionNum": 84,
    "text": "Most bacteria reproduce asexually by",
    "options": {
      "A": "meiosis",
      "B": "binary fission",
      "C": "pollination",
      "D": "budding of flowers"
    },
    "answer": "B",
    "explanation": "A bacterial cell duplicates its DNA and divides into two daughter cells.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "bio_tough_85",
    "originalChapter": 14,
    "chapterTitle": "Applied Biology, Diseases & Immunity",
    "topic": "Microorganisms & Disease: Antibiotics",
    "bookQuestionNum": 85,
    "text": "Why are antibiotics ineffective against viral infections such as influenza?",
    "options": {
      "A": "Viruses are too large for antibiotics to reach.",
      "B": "Viruses lack the bacterial cellular structures and processes targeted by antibiotics.",
      "C": "Viruses contain no genetic material.",
      "D": "Antibiotics always increase viral reproduction."
    },
    "answer": "B",
    "explanation": "Many antibiotics target bacterial processes such as cell-wall synthesis or bacterial ribosomes, which viruses do not possess.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "bio_tough_86",
    "originalChapter": 14,
    "chapterTitle": "Applied Biology, Diseases & Immunity",
    "topic": "Applied Biology: Disease Vectors",
    "bookQuestionNum": 86,
    "text": "Which organism transmits the malaria parasite to humans?",
    "options": {
      "A": "Male Anopheles mosquito",
      "B": "Female Anopheles mosquito",
      "C": "Housefly",
      "D": "Tsetse fly"
    },
    "answer": "B",
    "explanation": "Infected female Anopheles mosquitoes transmit Plasmodium parasites during blood-feeding.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "bio_tough_87",
    "originalChapter": 14,
    "chapterTitle": "Applied Biology, Diseases & Immunity",
    "topic": "Applied Biology: Infectious Diseases",
    "bookQuestionNum": 87,
    "text": "Which route can transmit HIV?",
    "options": {
      "A": "Sharing an ordinary classroom with an infected person",
      "B": "Handshaking",
      "C": "Exposure to infected blood or certain other infectious body fluids",
      "D": "Sharing a seat on a bus"
    },
    "answer": "C",
    "explanation": "HIV transmission can occur through specified body fluids, including infected blood, sexual fluids, and breast milk. It is not transmitted through casual contact.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "bio_tough_88",
    "originalChapter": 14,
    "chapterTitle": "Applied Biology, Diseases & Immunity",
    "topic": "Applied Biology: Immunity & Vaccination",
    "bookQuestionNum": 88,
    "text": "How does vaccination commonly provide protection against a specific infectious disease?",
    "options": {
      "A": "By destroying every microorganism in the environment",
      "B": "By stimulating an immune response that can form immunological memory",
      "C": "By replacing the body's white blood cells",
      "D": "By permanently raising body temperature"
    },
    "answer": "B",
    "explanation": "Vaccination exposes the immune system to an antigen or instructions for producing it, helping the body respond more quickly during a later exposure.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "bio_tough_89",
    "originalChapter": 14,
    "chapterTitle": "Applied Biology, Diseases & Immunity",
    "topic": "Applied Biology: Types of Immunity",
    "bookQuestionNum": 89,
    "text": "Immunity developed after a person's own immune system responds to a vaccine is classified as",
    "options": {
      "A": "natural passive immunity",
      "B": "artificial active immunity",
      "C": "artificial passive immunity",
      "D": "innate immunity only"
    },
    "answer": "B",
    "explanation": "It is artificial because vaccination induces it, and active because the person's own immune system produces the response and memory.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "bio_tough_90",
    "originalChapter": 14,
    "chapterTitle": "Applied Biology, Diseases & Immunity",
    "topic": "Applied Biology: Disease Vectors",
    "bookQuestionNum": 90,
    "text": "Which insect transmits the parasite responsible for African sleeping sickness?",
    "options": {
      "A": "Female Anopheles mosquito",
      "B": "Tsetse fly",
      "C": "Housefly",
      "D": "Flea"
    },
    "answer": "B",
    "explanation": "Infected tsetse flies transmit Trypanosoma parasites, which cause African trypanosomiasis.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "bio_tough_91",
    "originalChapter": 15,
    "chapterTitle": "Biotechnology & Ecological Interactions",
    "topic": "Ecology: Ecological Relationships",
    "bookQuestionNum": 91,
    "text": "A fungus grows on a living tree and obtains nutrients while damaging the tree. This relationship is best described as",
    "options": {
      "A": "mutualism",
      "B": "parasitism",
      "C": "commensalism",
      "D": "competition between two non-living objects"
    },
    "answer": "B",
    "explanation": "In parasitism, one organism benefits while its host is harmed.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "bio_tough_92",
    "originalChapter": 15,
    "chapterTitle": "Biotechnology & Ecological Interactions",
    "topic": "Ecology: Ecological Relationships",
    "bookQuestionNum": 92,
    "text": "Bees obtain nectar from flowers while transferring pollen between flowers of the same species. This interaction can be described as",
    "options": {
      "A": "mutualism",
      "B": "parasitism",
      "C": "amensalism",
      "D": "predation only"
    },
    "answer": "A",
    "explanation": "Bees gain food, while flowering plants may gain a pollination service that improves reproductive success.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "bio_tough_93",
    "originalChapter": 15,
    "chapterTitle": "Biotechnology & Ecological Interactions",
    "topic": "Ecology: Biodiversity & Conservation",
    "bookQuestionNum": 93,
    "text": "Why can high biodiversity improve the resilience of some ecosystems to environmental changes?",
    "options": {
      "A": "Every species always performs exactly the same ecological role.",
      "B": "Different species can contribute different functions, so some processes may continue when conditions change.",
      "C": "Biodiversity prevents all environmental disturbances.",
      "D": "High biodiversity guarantees that no species will become extinct."
    },
    "answer": "B",
    "explanation": "Diversity can provide functional variety and partial redundancy, which may help some ecosystems withstand or recover from disturbance.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "bio_tough_94",
    "originalChapter": 11,
    "chapterTitle": "Evolution & Adaptation",
    "topic": "Evolution: Comparative Anatomy",
    "bookQuestionNum": 94,
    "text": "Which example best illustrates a homologous structure?",
    "options": {
      "A": "The wing of a butterfly and the wing of a bird considered solely as wings for flight",
      "B": "The forelimbs of a human, a bat, and a whale with a similar underlying bone pattern",
      "C": "The eye of an insect and the eye of a mammal as identical structures",
      "D": "The leaf of a plant and the leg of a mammal"
    },
    "answer": "B",
    "explanation": "These forelimbs share a basic anatomical plan inherited from a common ancestor, although their functions differ.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "bio_tough_95",
    "originalChapter": 15,
    "chapterTitle": "Biotechnology & Ecological Interactions",
    "topic": "Applied Biology: Biotechnology & Fermentation",
    "bookQuestionNum": 95,
    "text": "Yeast is used in bread-making because carbon dioxide produced during fermentation",
    "options": {
      "A": "dissolves the flour completely",
      "B": "forms gas bubbles that expand the dough",
      "C": "converts starch directly into protein",
      "D": "prevents every enzyme from acting"
    },
    "answer": "B",
    "explanation": "Carbon dioxide accumulates in the dough's structure, causing it to rise during fermentation and baking.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "bio_tough_96",
    "originalChapter": 15,
    "chapterTitle": "Biotechnology & Ecological Interactions",
    "topic": "Applied Biology: Genetic Engineering",
    "bookQuestionNum": 96,
    "text": "Genetic engineering can be used to make bacteria produce a human protein. Which step is important in this process?",
    "options": {
      "A": "Introducing suitable genetic instructions into the bacterial system",
      "B": "Removing every ribosome from the bacteria",
      "C": "Preventing all DNA replication",
      "D": "Converting all bacterial cells into red blood cells"
    },
    "answer": "A",
    "explanation": "A gene encoding the desired protein can be inserted into an expression system so that the bacteria manufacture the protein under suitable conditions.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "bio_tough_97",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Nutrient Cycling",
    "bookQuestionNum": 97,
    "text": "Which statement about decomposers and soil fertility is correct?",
    "options": {
      "A": "Decomposers permanently destroy all mineral nutrients.",
      "B": "Decomposers help release nutrients from dead organisms and waste.",
      "C": "Decomposers convert all minerals directly into sunlight.",
      "D": "Decomposers prevent organic material from breaking down."
    },
    "answer": "B",
    "explanation": "Their activity returns nutrients to the environment, where plants can absorb available mineral forms.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "bio_tough_98",
    "originalChapter": 15,
    "chapterTitle": "Biotechnology & Ecological Interactions",
    "topic": "Applied Biology: Agricultural Biology",
    "bookQuestionNum": 98,
    "text": "A farmer grows legumes in a field and incorporates the plant residues into the soil. Why can this help improve soil nitrogen status?",
    "options": {
      "A": "Legumes absorb nitrogen gas directly through their leaves in large amounts.",
      "B": "Symbiotic nitrogen-fixing bacteria in legume root nodules can convert atmospheric nitrogen into usable nitrogen compounds.",
      "C": "Legumes stop all forms of decomposition.",
      "D": "Legumes convert every soil mineral into oxygen."
    },
    "answer": "B",
    "explanation": "Rhizobium and related bacteria fix nitrogen in root nodules. When residues decompose, some of that nitrogen can become available in the soil.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "bio_tough_99",
    "originalChapter": 12,
    "chapterTitle": "Ecology & Ecosystems",
    "topic": "Ecology: Limiting Factors",
    "bookQuestionNum": 99,
    "text": "Which factor is most likely to limit the growth of a plant population in a habitat where light is plentiful but the soil lacks an essential mineral nutrient?",
    "options": {
      "A": "The availability of that mineral nutrient",
      "B": "The colour of the nearby animals",
      "C": "The number of stars visible at night",
      "D": "The presence of oxygen in the atmosphere alone"
    },
    "answer": "A",
    "explanation": "Growth can be limited by an essential resource that is in short supply, even when other resources are plentiful.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "bio_tough_100",
    "originalChapter": 11,
    "chapterTitle": "Evolution & Adaptation",
    "topic": "Evolution: Natural Selection in Action",
    "bookQuestionNum": 100,
    "text": "A population of insects contains individuals with different levels of resistance to an insecticide. After repeated use of the insecticide, resistant individuals make up a greater proportion of the population. Which explanation is most accurate?",
    "options": {
      "A": "Every insect deliberately develops resistance because it needs it.",
      "B": "The insecticide selects for individuals that already possess heritable resistance, allowing them to contribute more offspring.",
      "C": "The insecticide changes every insect into a different species immediately.",
      "D": "Resistance develops only because insects stop reproducing."
    },
    "answer": "B",
    "explanation": "Resistant individuals are more likely to survive treatment and reproduce, increasing the frequency of resistance in later generations.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "bio_tough_101",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Mitochondria & Aerobic Respiration",
    "bookQuestionNum": 101,
    "text": "Which cell organelle is primarily responsible for generating most of the ATP during aerobic respiration?",
    "options": {
      "A": "Ribosome",
      "B": "Mitochondrion",
      "C": "Golgi apparatus",
      "D": "Lysosome"
    },
    "answer": "B",
    "explanation": "The mitochondrion is the major site of aerobic respiration and ATP production in eukaryotic cells.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_102",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Ribosomes & Protein Synthesis",
    "bookQuestionNum": 102,
    "text": "A cell produces large quantities of enzymes for secretion. Which organelle is particularly important for protein synthesis?",
    "options": {
      "A": "Ribosome",
      "B": "Vacuole",
      "C": "Centriole",
      "D": "Chloroplast"
    },
    "answer": "A",
    "explanation": "Ribosomes translate messenger RNA to produce proteins, including enzymes.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_103",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Prokaryotes vs Eukaryotes",
    "bookQuestionNum": 103,
    "text": "Which feature distinguishes a typical prokaryotic cell from a eukaryotic cell?",
    "options": {
      "A": "Presence of cytoplasm",
      "B": "Presence of a plasma membrane",
      "C": "Absence of a membrane-bound nucleus",
      "D": "Presence of ribosomes"
    },
    "answer": "C",
    "explanation": "Prokaryotic cells have DNA in a nucleoid region rather than inside a membrane-bound nucleus.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_104",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cellular Physiology: Selective Permeability",
    "bookQuestionNum": 104,
    "text": "The plasma membrane is described as selectively permeable because it",
    "options": {
      "A": "allows every substance to pass freely",
      "B": "controls the movement of substances into and out of the cell",
      "C": "prevents water from entering the cell",
      "D": "permits only gases to enter the cell"
    },
    "answer": "B",
    "explanation": "The plasma membrane regulates the movement of materials between the cell and its surroundings.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_105",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cellular Physiology: Osmosis in Plant Cells",
    "bookQuestionNum": 105,
    "text": "A plant cell is placed in a dilute solution. Water enters the cell mainly by",
    "options": {
      "A": "active transport",
      "B": "diffusion of proteins",
      "C": "osmosis",
      "D": "plasmolysis"
    },
    "answer": "C",
    "explanation": "Water moves across a selectively permeable membrane from a region of higher water potential to lower water potential.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_106",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cellular Physiology: Plasmolysis",
    "bookQuestionNum": 106,
    "text": "What happens when a plant cell is placed in a highly concentrated salt solution?",
    "options": {
      "A": "It becomes turgid.",
      "B": "It undergoes plasmolysis.",
      "C": "It divides immediately.",
      "D": "Its cell wall disappears."
    },
    "answer": "B",
    "explanation": "Water leaves the cell by osmosis, causing the protoplast to shrink away from the cell wall.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_107",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Plant vs Animal Cell Structures",
    "bookQuestionNum": 107,
    "text": "Which structure is present in a typical plant cell but absent in a typical animal cell?",
    "options": {
      "A": "Cytoplasm",
      "B": "Cell membrane",
      "C": "Cellulose cell wall",
      "D": "Nucleus"
    },
    "answer": "C",
    "explanation": "Plant cells have a cellulose cell wall outside the plasma membrane, while typical animal cells do not.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_108",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Organization of Life: Levels of Organization",
    "bookQuestionNum": 108,
    "text": "Which sequence correctly represents the levels of organisation in a multicellular organism?",
    "options": {
      "A": "Organ → Cell → Tissue → System → Organism",
      "B": "Cell → Tissue → Organ → System → Organism",
      "C": "Tissue → Cell → System → Organ → Organism",
      "D": "Cell → Organ → Tissue → Organism → System"
    },
    "answer": "B",
    "explanation": "Cells form tissues, tissues form organs, organs form systems, and systems work together in an organism.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_109",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Unicellular Organisms: Cilia in Paramecium",
    "bookQuestionNum": 109,
    "text": "The cilia of Paramecium are primarily used for",
    "options": {
      "A": "photosynthesis",
      "B": "locomotion and movement of food particles",
      "C": "protein synthesis",
      "D": "reproduction by budding"
    },
    "answer": "B",
    "explanation": "Coordinated movement of cilia helps Paramecium move and direct food towards its oral groove.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_110",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Unicellular Organisms: Amoeba Osmoregulation",
    "bookQuestionNum": 110,
    "text": "The contractile vacuole of a freshwater Amoeba functions mainly in",
    "options": {
      "A": "protein digestion",
      "B": "osmoregulation",
      "C": "photosynthesis",
      "D": "reproduction"
    },
    "answer": "B",
    "explanation": "It collects and expels excess water entering the organism by osmosis.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_111",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Cellulose Cell Wall",
    "bookQuestionNum": 111,
    "text": "Which material forms the main structural component of the plant cell wall?",
    "options": {
      "A": "Glycogen",
      "B": "Cellulose",
      "C": "Chitin",
      "D": "Keratin"
    },
    "answer": "B",
    "explanation": "Cellulose is a structural polysaccharide that gives plant cell walls strength.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_112",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Chloroplast Grana & Thylakoids",
    "bookQuestionNum": 112,
    "text": "The grana of a chloroplast are mainly made up of",
    "options": {
      "A": "stacks of thylakoids",
      "B": "stacks of ribosomes",
      "C": "folded nuclear membranes",
      "D": "layers of cellulose"
    },
    "answer": "A",
    "explanation": "Grana are stacks of thylakoid membranes that contain chlorophyll and are important in the light-dependent reactions of photosynthesis.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_113",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Nucleus & Hereditary Material",
    "bookQuestionNum": 113,
    "text": "Which structure contains most of the hereditary material in a typical eukaryotic cell?",
    "options": {
      "A": "Vacuole",
      "B": "Nucleus",
      "C": "Golgi apparatus",
      "D": "Cell wall"
    },
    "answer": "B",
    "explanation": "Most cellular DNA is organised into chromosomes within the nucleus.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_114",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Lysosomes & Autophagy",
    "bookQuestionNum": 114,
    "text": "Which organelle contains enzymes that break down worn-out cell components?",
    "options": {
      "A": "Lysosome",
      "B": "Ribosome",
      "C": "Chloroplast",
      "D": "Centriole"
    },
    "answer": "A",
    "explanation": "Lysosomes contain digestive enzymes that break down unwanted materials and cellular components.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_115",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Plant Vacuole & Turgor Pressure",
    "bookQuestionNum": 115,
    "text": "The large central vacuole of a mature plant cell helps to",
    "options": {
      "A": "produce genetic material",
      "B": "maintain turgor pressure",
      "C": "manufacture ribosomes",
      "D": "carry out fertilisation"
    },
    "answer": "B",
    "explanation": "Water in the vacuole creates pressure against the cell wall, helping to support the plant.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_116",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cellular Physiology: Active Transport in Root Hairs",
    "bookQuestionNum": 116,
    "text": "Which process moves mineral ions into root hair cells against their concentration gradient?",
    "options": {
      "A": "Osmosis",
      "B": "Simple diffusion",
      "C": "Active transport",
      "D": "Transpiration"
    },
    "answer": "C",
    "explanation": "Active transport uses energy, usually from ATP, to move substances against their concentration gradient.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_117",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cellular Physiology: Diffusion Principles",
    "bookQuestionNum": 117,
    "text": "The net movement of particles from a region of higher concentration to a region of lower concentration is",
    "options": {
      "A": "diffusion",
      "B": "plasmolysis",
      "C": "active transport",
      "D": "translocation"
    },
    "answer": "A",
    "explanation": "Diffusion is the net movement of particles down a concentration gradient.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_118",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Unicellular Organisms: Mixotrophic Euglena",
    "bookQuestionNum": 118,
    "text": "Euglena can be described as mixotrophic because it",
    "options": {
      "A": "feeds only on dead organic matter",
      "B": "obtains nutrition by photosynthesis and can also feed heterotrophically",
      "C": "obtains all its food from other organisms",
      "D": "cannot manufacture organic food"
    },
    "answer": "B",
    "explanation": "Euglena can photosynthesise when light is available and can obtain organic nutrients under suitable conditions without photosynthesis.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_119",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Theory: Fundamental Principles",
    "bookQuestionNum": 119,
    "text": "Which of the following is a major statement of cell theory?",
    "options": {
      "A": "All living organisms are made of one or more cells.",
      "B": "All cells contain chloroplasts.",
      "C": "All cells have a cell wall.",
      "D": "Cells arise spontaneously from non-living matter."
    },
    "answer": "A",
    "explanation": "Cell theory identifies the cell as the basic structural and functional unit of life.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_120",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Surface-Area-to-Volume Ratio",
    "bookQuestionNum": 120,
    "text": "Why are small cells generally more efficient at exchanging materials with their surroundings than very large cells?",
    "options": {
      "A": "They always contain more organelles.",
      "B": "They have a higher surface-area-to-volume ratio.",
      "C": "They have no cytoplasm.",
      "D": "They do not require energy."
    },
    "answer": "B",
    "explanation": "A higher surface-area-to-volume ratio allows relatively faster exchange of materials across the cell membrane.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "bio_tough_121",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Classification: Kingdom Monera (Prokaryotes)",
    "bookQuestionNum": 121,
    "text": "Which group consists of organisms that lack a true membrane-bound nucleus?",
    "options": {
      "A": "Fungi",
      "B": "Monera",
      "C": "Plantae",
      "D": "Animalia"
    },
    "answer": "B",
    "explanation": "In the traditional five-kingdom classification used in the syllabus, Monera contains prokaryotic organisms such as bacteria.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_122",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Classification: Kingdom Fungi (Rhizopus)",
    "bookQuestionNum": 122,
    "text": "Which of the following organisms belongs to the kingdom Fungi?",
    "options": {
      "A": "Amoeba",
      "B": "Rhizopus",
      "C": "Euglena",
      "D": "Spirogyra"
    },
    "answer": "B",
    "explanation": "Rhizopus is a fungus commonly known as bread mould.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_123",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Plant Diversity: Bryophytes vs Pteridophytes",
    "bookQuestionNum": 123,
    "text": "Which feature distinguishes bryophytes from pteridophytes?",
    "options": {
      "A": "Bryophytes possess well-developed vascular tissues.",
      "B": "Bryophytes lack true vascular tissues.",
      "C": "Bryophytes produce flowers.",
      "D": "Bryophytes reproduce using seeds."
    },
    "answer": "B",
    "explanation": "Mosses and liverworts lack true xylem and phloem, unlike ferns and other vascular plants.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_124",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Plant Diversity: Ferns (Pteridophyta)",
    "bookQuestionNum": 124,
    "text": "Which of the following is a characteristic of ferns?",
    "options": {
      "A": "They reproduce by spores and possess vascular tissues.",
      "B": "They produce flowers and fruits.",
      "C": "They have no chlorophyll.",
      "D": "They produce naked seeds in cones."
    },
    "answer": "A",
    "explanation": "Ferns are vascular plants that reproduce through spores rather than seeds.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_125",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Plant Diversity: Gymnosperms & Naked Seeds",
    "bookQuestionNum": 125,
    "text": "Which feature is characteristic of gymnosperms?",
    "options": {
      "A": "Seeds enclosed within fruits",
      "B": "Seeds not enclosed within an ovary or fruit",
      "C": "Absence of vascular tissues",
      "D": "Reproduction only by binary fission"
    },
    "answer": "B",
    "explanation": "Gymnosperms produce naked seeds, commonly borne on cone structures.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_126",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Plant Diversity: Angiosperms & Enclosed Seeds",
    "bookQuestionNum": 126,
    "text": "A major characteristic of angiosperms is that they",
    "options": {
      "A": "produce seeds enclosed within fruits",
      "B": "lack conducting tissues",
      "C": "reproduce only through spores",
      "D": "do not form reproductive structures"
    },
    "answer": "A",
    "explanation": "In flowering plants, seeds develop from ovules while the ovary usually develops into a fruit.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_127",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Plant Diversity: Monocotyledonous Characteristics",
    "bookQuestionNum": 127,
    "text": "Which combination is most characteristic of a typical monocotyledonous plant?",
    "options": {
      "A": "Two cotyledons, net venation and taproot",
      "B": "One cotyledon, parallel venation and fibrous root system",
      "C": "Two cotyledons, parallel venation and fibrous roots",
      "D": "One cotyledon, net venation and taproot"
    },
    "answer": "B",
    "explanation": "These are common distinguishing features of monocotyledonous plants such as maize.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_128",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Animal Diversity: Insect Morphological Features",
    "bookQuestionNum": 128,
    "text": "Which feature is characteristic of an insect?",
    "options": {
      "A": "Four pairs of walking legs",
      "B": "Three pairs of walking legs",
      "C": "Two pairs of antennae",
      "D": "A body divided into cephalothorax and abdomen only"
    },
    "answer": "B",
    "explanation": "Adult insects typically have three body regions and three pairs of legs attached to the thorax.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_129",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Animal Diversity: Arachnids vs Insects",
    "bookQuestionNum": 129,
    "text": "A spider differs from an insect because it generally has",
    "options": {
      "A": "two pairs of antennae",
      "B": "four pairs of walking legs",
      "C": "three pairs of walking legs",
      "D": "six pairs of wings"
    },
    "answer": "B",
    "explanation": "Spiders are arachnids and typically have four pairs of walking legs and no antennae.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_130",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Animal Diversity: Phylum Annelida (Segmentation)",
    "bookQuestionNum": 130,
    "text": "The earthworm belongs to the phylum Annelida because it has",
    "options": {
      "A": "a segmented body",
      "B": "jointed legs",
      "C": "a shell and muscular foot",
      "D": "a backbone"
    },
    "answer": "A",
    "explanation": "Annelids are characterised by bodies divided into repeated segments.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_131",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Animal Diversity: Phylum Mollusca (Muscular Foot)",
    "bookQuestionNum": 131,
    "text": "Which structure is characteristic of a typical snail?",
    "options": {
      "A": "Jointed appendages",
      "B": "Muscular foot",
      "C": "Backbone",
      "D": "Feathers"
    },
    "answer": "B",
    "explanation": "Snails are molluscs that use a muscular foot for movement.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_132",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Animal Diversity: Cnidaria/Coelenterata (Hydra)",
    "bookQuestionNum": 132,
    "text": "Hydra belongs to the group Coelenterata, also called Cnidaria, and is characterised by",
    "options": {
      "A": "bilateral symmetry and jointed legs",
      "B": "radial symmetry and stinging cells",
      "C": "a segmented body and setae",
      "D": "feathers and hollow bones"
    },
    "answer": "B",
    "explanation": "Hydra has radial symmetry and specialised stinging cells called cnidocytes.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_133",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Animal Diversity: Platyhelminthes (Tapeworms)",
    "bookQuestionNum": 133,
    "text": "Tapeworms are classified as flatworms because they belong to",
    "options": {
      "A": "Annelida",
      "B": "Platyhelminthes",
      "C": "Arthropoda",
      "D": "Mollusca"
    },
    "answer": "B",
    "explanation": "Tapeworms are parasitic flatworms with flattened bodies.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_134",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Animal Diversity: Nematodes vs Annelids",
    "bookQuestionNum": 134,
    "text": "Which feature distinguishes nematodes from annelids?",
    "options": {
      "A": "Nematodes have segmented bodies.",
      "B": "Nematodes have unsegmented, cylindrical bodies.",
      "C": "Nematodes possess jointed legs.",
      "D": "Nematodes have a backbone."
    },
    "answer": "B",
    "explanation": "Nematodes are roundworms with elongated, unsegmented bodies, whereas annelids are segmented.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_135",
    "originalChapter": 2,
    "chapterTitle": "Classification & Diversity of Living Organisms",
    "topic": "Animal Diversity: Vertebrata (Amphibians)",
    "bookQuestionNum": 135,
    "text": "Which of the following is a vertebrate?",
    "options": {
      "A": "Cockroach",
      "B": "Snail",
      "C": "Toad",
      "D": "Earthworm"
    },
    "answer": "C",
    "explanation": "Toads are amphibians and possess a vertebral column.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_136",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Plant Nutrition: Autotrophic Mode",
    "bookQuestionNum": 136,
    "text": "An organism that manufactures its own organic food from inorganic materials is described as",
    "options": {
      "A": "heterotrophic",
      "B": "autotrophic",
      "C": "parasitic",
      "D": "saprophytic"
    },
    "answer": "B",
    "explanation": "Autotrophs manufacture organic food using light energy or chemical energy.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_137",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Plant Nutrition: Photosynthetic Equation",
    "bookQuestionNum": 137,
    "text": "Which equation represents the overall simplified process of photosynthesis?",
    "options": {
      "A": "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
      "B": "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
      "C": "6O₂ + 6H₂O → 6CO₂ + C₆H₁₂O₆",
      "D": "CO₂ + O₂ → H₂O"
    },
    "answer": "B",
    "explanation": "Photosynthesis uses light energy to convert carbon dioxide and water into carbohydrates, releasing oxygen.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_138",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Plant Nutrition: Photolysis of Water",
    "bookQuestionNum": 138,
    "text": "During photosynthesis, the oxygen released into the atmosphere comes mainly from",
    "options": {
      "A": "carbon dioxide",
      "B": "glucose",
      "C": "water",
      "D": "chlorophyll"
    },
    "answer": "C",
    "explanation": "Water is split during the light-dependent reactions, releasing oxygen, protons and electrons.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_139",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Plant Nutrition: Calvin Cycle & Stroma",
    "bookQuestionNum": 139,
    "text": "The Calvin cycle of photosynthesis takes place in the",
    "options": {
      "A": "thylakoid lumen",
      "B": "stroma of the chloroplast",
      "C": "mitochondrial matrix",
      "D": "cytoplasm of the root hair"
    },
    "answer": "B",
    "explanation": "Carbon fixation and the reactions of the Calvin cycle occur in the chloroplast stroma.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_140",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Plant Nutrition: Light Energy Requirements",
    "bookQuestionNum": 140,
    "text": "Which of the following is required for photosynthesis but is not a raw material converted into carbohydrate?",
    "options": {
      "A": "Carbon dioxide",
      "B": "Water",
      "C": "Light energy",
      "D": "All of the above are raw materials converted into carbohydrate."
    },
    "answer": "C",
    "explanation": "Light provides the energy for photosynthesis but is not incorporated as a chemical raw material into glucose.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "bio_tough_141",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Plant Nutrition: Destarching Technique",
    "bookQuestionNum": 141,
    "text": "Before testing a leaf for starch, it is usually kept in darkness for some time. This process is called",
    "options": {
      "A": "germination",
      "B": "destarching",
      "C": "transpiration",
      "D": "plasmolysis"
    },
    "answer": "B",
    "explanation": "Keeping the plant in darkness allows it to use stored starch, making it easier to test for starch produced during a later experiment.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_142",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Plant Nutrition: Iodine Test for Starch",
    "bookQuestionNum": 142,
    "text": "When iodine solution is added to a leaf containing starch, the affected area turns",
    "options": {
      "A": "brick-red",
      "B": "blue-black",
      "C": "purple",
      "D": "colourless"
    },
    "answer": "B",
    "explanation": "Iodine forms a blue-black complex with starch.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_143",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Plant Nutrition: Limiting Factors (CO₂)",
    "bookQuestionNum": 143,
    "text": "A factor that can limit the rate of photosynthesis when it is in short supply is",
    "options": {
      "A": "carbon dioxide concentration",
      "B": "sound intensity",
      "C": "soil colour",
      "D": "leaf shape alone"
    },
    "answer": "A",
    "explanation": "Carbon dioxide is a raw material for photosynthesis, so low availability can limit the rate.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_144",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Mineral Nutrition: Nitrogen & Chlorophyll Synthesis",
    "bookQuestionNum": 144,
    "text": "A plant shows yellowing of older leaves due to nitrogen deficiency. This is mainly because nitrogen is required for the production of",
    "options": {
      "A": "chlorophyll and proteins",
      "B": "cellulose only",
      "C": "calcium carbonate",
      "D": "lignin only"
    },
    "answer": "A",
    "explanation": "Nitrogen is a component of amino acids, proteins and chlorophyll molecules.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_145",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Mineral Nutrition: Magnesium in Chlorophyll",
    "bookQuestionNum": 145,
    "text": "Magnesium deficiency can reduce photosynthesis because magnesium is",
    "options": {
      "A": "a central component of the chlorophyll molecule",
      "B": "the main component of cellulose",
      "C": "the only element in glucose",
      "D": "required to form oxygen gas directly"
    },
    "answer": "A",
    "explanation": "Magnesium is the central metal ion in the chlorophyll molecule.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_146",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Mineral Nutrition: Phosphorus & Nucleic Acids",
    "bookQuestionNum": 146,
    "text": "Which mineral element is particularly important in the formation of ATP, nucleic acids and other phosphate-containing compounds in plants?",
    "options": {
      "A": "Potassium",
      "B": "Phosphorus",
      "C": "Sodium",
      "D": "Chlorine"
    },
    "answer": "B",
    "explanation": "Phosphorus is a component of phosphate groups in ATP, DNA, RNA and other essential compounds.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_147",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Food Tests: Biuret Test for Protein",
    "bookQuestionNum": 147,
    "text": "Which food test produces a violet or purple colour when protein is present?",
    "options": {
      "A": "Iodine test",
      "B": "Biuret test",
      "C": "Benedict's test",
      "D": "Emulsion test"
    },
    "answer": "B",
    "explanation": "In alkaline conditions, copper(II) ions in Biuret reagent form a violet complex with peptide bonds.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_148",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Food Tests: Benedict's Test for Reducing Sugar",
    "bookQuestionNum": 148,
    "text": "A food sample gives a brick-red precipitate when heated with Benedict's solution. This indicates the presence of",
    "options": {
      "A": "starch",
      "B": "reducing sugar",
      "C": "protein",
      "D": "vitamin C only"
    },
    "answer": "B",
    "explanation": "Reducing sugars reduce blue copper(II) ions to brick-red copper(I) oxide when heated with Benedict's reagent.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_149",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Food Tests: Iodine Test for Starch",
    "bookQuestionNum": 149,
    "text": "Which result indicates the presence of starch?",
    "options": {
      "A": "A violet colour with Biuret reagent",
      "B": "A blue-black colour with iodine solution",
      "C": "A brick-red precipitate with Benedict's solution",
      "D": "A cloudy white emulsion with ethanol and water"
    },
    "answer": "B",
    "explanation": "Iodine solution changes from brown to blue-black in the presence of starch.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_150",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Food Tests: Ethanol Emulsion Test for Lipids",
    "bookQuestionNum": 150,
    "text": "Which procedure is used to test for fats and oils using the emulsion test?",
    "options": {
      "A": "Add iodine and heat.",
      "B": "Shake the sample with ethanol, then add water.",
      "C": "Add Benedict's solution and boil.",
      "D": "Add sodium hydroxide and copper sulphate only."
    },
    "answer": "B",
    "explanation": "Lipids dissolve in ethanol; adding water produces a cloudy white emulsion if fat or oil is present.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_151",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Animal Nutrition: Vitamin C Deficiency (Scurvy)",
    "bookQuestionNum": 151,
    "text": "Deficiency of vitamin C causes",
    "options": {
      "A": "rickets",
      "B": "scurvy",
      "C": "night blindness",
      "D": "beriberi"
    },
    "answer": "B",
    "explanation": "Vitamin C is required for collagen formation, and its deficiency can cause bleeding gums and poor wound healing.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_152",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Animal Nutrition: Vitamin D Deficiency (Rickets)",
    "bookQuestionNum": 152,
    "text": "A child with bowed legs and poor bone mineralisation may be suffering from",
    "options": {
      "A": "scurvy",
      "B": "rickets",
      "C": "kwashiorkor",
      "D": "pellagra"
    },
    "answer": "B",
    "explanation": "Vitamin D deficiency can impair calcium and phosphate absorption, leading to poor bone mineralisation in children.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_153",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Animal Nutrition: Protein Deficiency (Kwashiorkor)",
    "bookQuestionNum": 153,
    "text": "Kwashiorkor is most directly associated with a severe deficiency of",
    "options": {
      "A": "protein",
      "B": "vitamin C",
      "C": "iodine",
      "D": "water"
    },
    "answer": "A",
    "explanation": "Kwashiorkor is a form of severe malnutrition associated with inadequate protein intake, often accompanied by oedema.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_154",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Animal Nutrition: Carbohydrates as Energy Source",
    "bookQuestionNum": 154,
    "text": "Which food substance is the body's main immediate source of energy?",
    "options": {
      "A": "Carbohydrate",
      "B": "Vitamin",
      "C": "Mineral salt",
      "D": "Water"
    },
    "answer": "A",
    "explanation": "Carbohydrates are broken down into simple sugars, which are used in cellular respiration.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_155",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Animal Nutrition: Dietary Fibre & Peristalsis",
    "bookQuestionNum": 155,
    "text": "Which of the following is a major function of dietary fibre?",
    "options": {
      "A": "Providing all essential amino acids",
      "B": "Aiding bowel movement and preventing constipation",
      "C": "Carrying oxygen in blood",
      "D": "Producing insulin"
    },
    "answer": "B",
    "explanation": "Dietary fibre adds bulk to intestinal contents and supports normal movement through the digestive tract.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_156",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Digestive Physiology: Liver & Bile Production",
    "bookQuestionNum": 156,
    "text": "Bile is produced in the",
    "options": {
      "A": "pancreas",
      "B": "liver",
      "C": "stomach",
      "D": "small intestine"
    },
    "answer": "B",
    "explanation": "The liver produces bile, which is stored and concentrated in the gall bladder.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_157",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Digestive Physiology: Bile & Fat Emulsification",
    "bookQuestionNum": 157,
    "text": "The main digestive function of bile is to",
    "options": {
      "A": "hydrolyse proteins into amino acids",
      "B": "emulsify fats into smaller droplets",
      "C": "convert starch directly to glucose",
      "D": "digest cellulose in the stomach"
    },
    "answer": "B",
    "explanation": "Bile salts disperse large fat globules into small droplets, increasing the surface area available to lipase. Bile is not itself a digestive enzyme.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_158",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Digestive Physiology: Gastric Pepsin & Protein Digestion",
    "bookQuestionNum": 158,
    "text": "Pepsin is an enzyme that digests",
    "options": {
      "A": "fats",
      "B": "proteins",
      "C": "starch",
      "D": "vitamins"
    },
    "answer": "B",
    "explanation": "Pepsin is a protein-digesting enzyme that works in the acidic environment of the stomach.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_159",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Digestive Physiology: Intestinal Villi Absorption",
    "bookQuestionNum": 159,
    "text": "The main function of intestinal villi is to",
    "options": {
      "A": "produce bile",
      "B": "increase the surface area for absorption",
      "C": "prevent all water absorption",
      "D": "store undigested food"
    },
    "answer": "B",
    "explanation": "Villi and microvilli provide a large surface area for absorbing digested nutrients.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_160",
    "originalChapter": 3,
    "chapterTitle": "Plant & Animal Nutrition",
    "topic": "Digestive Physiology: Peristalsis in Alimentary Canal",
    "bookQuestionNum": 160,
    "text": "The movement of food along the alimentary canal by rhythmic contraction and relaxation of muscles is called",
    "options": {
      "A": "diffusion",
      "B": "peristalsis",
      "C": "filtration",
      "D": "deamination"
    },
    "answer": "B",
    "explanation": "Coordinated muscular contractions move food through the digestive tract.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "bio_tough_161",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Plant Transport: Xylem Water Conduction",
    "bookQuestionNum": 161,
    "text": "Which statement correctly describes the function of xylem?",
    "options": {
      "A": "It transports manufactured food only.",
      "B": "It transports water and mineral salts from roots towards the aerial parts of the plant.",
      "C": "It transports hormones exclusively.",
      "D": "It produces pollen grains."
    },
    "answer": "B",
    "explanation": "Xylem conducts water and dissolved mineral ions, mainly from the roots to stems and leaves.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_162",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Plant Transport: Phloem Translocation of Sucrose",
    "bookQuestionNum": 162,
    "text": "The movement of sucrose and other organic substances through phloem is known as",
    "options": {
      "A": "transpiration",
      "B": "translocation",
      "C": "guttation",
      "D": "osmosis only"
    },
    "answer": "B",
    "explanation": "Phloem translocation distributes manufactured organic materials from sources to sinks in a plant.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_163",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Circulatory System: Arteries vs Veins",
    "bookQuestionNum": 163,
    "text": "Which blood vessel carries blood away from the heart?",
    "options": {
      "A": "Vein",
      "B": "Artery",
      "C": "Capillary",
      "D": "Venule"
    },
    "answer": "B",
    "explanation": "Arteries carry blood away from the heart, regardless of whether the blood is oxygenated or deoxygenated.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_164",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Circulatory System: Capillary Structure & Exchange",
    "bookQuestionNum": 164,
    "text": "Which feature makes capillaries suitable for exchange of materials between blood and tissues?",
    "options": {
      "A": "Very thick muscular walls",
      "B": "Walls that are only one cell thick",
      "C": "Valves throughout their length",
      "D": "Absence of a lumen"
    },
    "answer": "B",
    "explanation": "Thin capillary walls allow short diffusion distances for gases, nutrients and waste products.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_165",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Circulatory System: Left Ventricle & Systemic Aorta",
    "bookQuestionNum": 165,
    "text": "Which chamber of the human heart pumps oxygenated blood into the aorta?",
    "options": {
      "A": "Right atrium",
      "B": "Left atrium",
      "C": "Right ventricle",
      "D": "Left ventricle"
    },
    "answer": "D",
    "explanation": "The left ventricle pumps oxygenated blood through the aorta to the rest of the body.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_166",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Circulatory System: Pulmonary Artery Deoxygenated Blood",
    "bookQuestionNum": 166,
    "text": "The pulmonary artery carries",
    "options": {
      "A": "oxygenated blood from the lungs to the heart",
      "B": "deoxygenated blood from the heart to the lungs",
      "C": "oxygenated blood from the heart to the body",
      "D": "deoxygenated blood from the lungs to the body"
    },
    "answer": "B",
    "explanation": "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs for oxygenation.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_167",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Circulatory System: Pulmonary Vein Oxygenated Blood",
    "bookQuestionNum": 167,
    "text": "The pulmonary vein is unusual among veins because it carries",
    "options": {
      "A": "blood rich in oxygen",
      "B": "blood rich in urea",
      "C": "lymph only",
      "D": "blood without plasma"
    },
    "answer": "A",
    "explanation": "Pulmonary veins return oxygenated blood from the lungs to the left atrium.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_168",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Circulatory System: Hepatic Portal Vein",
    "bookQuestionNum": 168,
    "text": "Blood from the digestive tract reaches the liver through the",
    "options": {
      "A": "pulmonary artery",
      "B": "hepatic portal vein",
      "C": "renal vein",
      "D": "aorta"
    },
    "answer": "B",
    "explanation": "The hepatic portal vein carries nutrient-rich blood from the digestive organs to the liver for processing.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_169",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Blood Components: Haemoglobin & Oxygen Transport",
    "bookQuestionNum": 169,
    "text": "The main function of haemoglobin in red blood cells is to",
    "options": {
      "A": "destroy bacteria",
      "B": "transport oxygen",
      "C": "produce antibodies",
      "D": "clot blood"
    },
    "answer": "B",
    "explanation": "Haemoglobin binds oxygen reversibly and transports it from the lungs to body tissues.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_170",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Blood Components: White Blood Cells & Defence",
    "bookQuestionNum": 170,
    "text": "Which component of blood is mainly responsible for defending the body against infection?",
    "options": {
      "A": "Red blood cells",
      "B": "White blood cells",
      "C": "Platelets",
      "D": "Plasma water"
    },
    "answer": "B",
    "explanation": "White blood cells help protect the body through immune responses and destruction of pathogens.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_171",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Blood Components: Platelets & Blood Clotting",
    "bookQuestionNum": 171,
    "text": "Which blood component is especially important in blood clotting?",
    "options": {
      "A": "Platelets",
      "B": "Red blood cells",
      "C": "Plasma glucose",
      "D": "Haemoglobin"
    },
    "answer": "A",
    "explanation": "Platelets help form a platelet plug and promote the reactions that lead to blood clotting.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_172",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Lymphatic System: Tissue Fluid Drainage",
    "bookQuestionNum": 172,
    "text": "Which statement about the lymphatic system is correct?",
    "options": {
      "A": "It returns excess tissue fluid to the bloodstream.",
      "B": "It pumps blood directly from the heart.",
      "C": "It produces bile.",
      "D": "It carries urine from the kidneys."
    },
    "answer": "A",
    "explanation": "Lymphatic vessels collect excess tissue fluid and return it to the circulation; the system also contributes to immune defence.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_173",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Circulatory System: Venous Valves & One-Way Flow",
    "bookQuestionNum": 173,
    "text": "The valves in veins help to",
    "options": {
      "A": "increase blood temperature",
      "B": "prevent the backward flow of blood",
      "C": "produce red blood cells",
      "D": "break down plasma proteins"
    },
    "answer": "B",
    "explanation": "Vein valves support one-way blood flow towards the heart, particularly in the limbs.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_174",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Cardiac Physiology: Sinoatrial Node Pacemaker",
    "bookQuestionNum": 174,
    "text": "The sinoatrial node is important because it",
    "options": {
      "A": "initiates the normal electrical impulse that starts each heartbeat",
      "B": "produces red blood cells",
      "C": "filters blood in the kidney",
      "D": "controls the movement of food in the intestine"
    },
    "answer": "A",
    "explanation": "The sinoatrial node acts as the heart's natural pacemaker.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_175",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Plant Transport: Root Hair Osmosis & Water Potential",
    "bookQuestionNum": 175,
    "text": "Water enters root hair cells mainly because",
    "options": {
      "A": "the soil solution always has a lower water potential than the cell sap",
      "B": "the cell sap generally has a lower water potential than the surrounding soil water",
      "C": "the root hair cell wall pumps water using ATP",
      "D": "water moves against a water-potential gradient by diffusion"
    },
    "answer": "B",
    "explanation": "Water enters by osmosis when the water potential outside the root hair is higher than inside it.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_176",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Plant Transport: Transpiration Pull & Cohesion",
    "bookQuestionNum": 176,
    "text": "The upward movement of water in tall plants is strongly aided by",
    "options": {
      "A": "transpiration pull and cohesion between water molecules",
      "B": "diffusion of starch through the phloem",
      "C": "the movement of pollen grains",
      "D": "the contraction of root muscles"
    },
    "answer": "A",
    "explanation": "Water loss from leaves creates tension in xylem, while cohesion helps maintain a continuous column of water.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_177",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Plant Transport: Transpiration Through Stomata",
    "bookQuestionNum": 177,
    "text": "Transpiration is the",
    "options": {
      "A": "absorption of mineral salts by roots",
      "B": "loss of water vapour from the aerial parts of plants, mainly through stomata",
      "C": "movement of food through phloem",
      "D": "production of glucose in chloroplasts"
    },
    "answer": "B",
    "explanation": "Water evaporates from internal leaf surfaces and diffuses out, mainly through stomata.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_178",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Plant Transport: Guard Cell Turgor & Stomatal Pore",
    "bookQuestionNum": 178,
    "text": "When guard cells become turgid, the stomatal pore generally",
    "options": {
      "A": "opens",
      "B": "closes",
      "C": "disappears permanently",
      "D": "becomes filled with starch"
    },
    "answer": "A",
    "explanation": "Increased turgor in guard cells causes them to bow apart, opening the stomatal pore.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_179",
    "originalChapter": 4,
    "chapterTitle": "Transport in Plants & Animals",
    "topic": "Plant Transport: Source-to-Sink Bidirectional Phloem",
    "bookQuestionNum": 179,
    "text": "Which statement correctly describes phloem transport?",
    "options": {
      "A": "It is restricted to upward movement only.",
      "B": "It carries manufactured food from sources to sinks and can occur in different directions in different sieve tubes.",
      "C": "It transports water only.",
      "D": "It occurs exclusively in dead cells."
    },
    "answer": "B",
    "explanation": "Phloem translocates sucrose and other organic solutes from producing or storage sources to regions where they are needed.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_180",
    "originalChapter": 5,
    "chapterTitle": "Respiration & Gaseous Exchange",
    "topic": "Cellular Respiration: ATP Production & Energy Release",
    "bookQuestionNum": 180,
    "text": "The main purpose of cellular respiration is to",
    "options": {
      "A": "manufacture chlorophyll",
      "B": "release energy from organic molecules for cellular activities",
      "C": "produce mineral salts",
      "D": "convert all proteins into fats"
    },
    "answer": "B",
    "explanation": "Respiration transfers energy from food molecules into ATP, which cells use for metabolic work.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_181",
    "originalChapter": 5,
    "chapterTitle": "Respiration & Gaseous Exchange",
    "topic": "Cellular Respiration: Glycolysis in Cytoplasm",
    "bookQuestionNum": 181,
    "text": "Glycolysis occurs in the",
    "options": {
      "A": "nucleus",
      "B": "cytoplasm",
      "C": "chloroplast stroma",
      "D": "Golgi apparatus"
    },
    "answer": "B",
    "explanation": "Glycolysis takes place in the cytosol and breaks glucose into two molecules of pyruvate.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_182",
    "originalChapter": 5,
    "chapterTitle": "Respiration & Gaseous Exchange",
    "topic": "Cellular Respiration: Net ATP Yield of Glycolysis",
    "bookQuestionNum": 182,
    "text": "What is the net ATP yield directly produced by glycolysis per glucose molecule?",
    "options": {
      "A": "1 ATP",
      "B": "2 ATP",
      "C": "4 ATP",
      "D": "8 ATP"
    },
    "answer": "B",
    "explanation": "Glycolysis produces four ATP molecules but uses two, giving a net gain of two ATP.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_183",
    "originalChapter": 5,
    "chapterTitle": "Respiration & Gaseous Exchange",
    "topic": "Cellular Respiration: Oxygen Terminal Electron Acceptor",
    "bookQuestionNum": 183,
    "text": "In aerobic respiration, oxygen acts as the",
    "options": {
      "A": "first substrate in glycolysis",
      "B": "final electron acceptor in the electron transport chain",
      "C": "enzyme that breaks down glucose",
      "D": "product of fermentation"
    },
    "answer": "B",
    "explanation": "Oxygen accepts electrons and hydrogen ions to form water during aerobic respiration.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_184",
    "originalChapter": 5,
    "chapterTitle": "Respiration & Gaseous Exchange",
    "topic": "Anaerobic Respiration: Yeast Alcoholic Fermentation",
    "bookQuestionNum": 184,
    "text": "Which products are formed during anaerobic respiration by yeast?",
    "options": {
      "A": "Lactic acid and oxygen",
      "B": "Ethanol and carbon dioxide",
      "C": "Water and oxygen",
      "D": "Glucose and nitrogen"
    },
    "answer": "B",
    "explanation": "Yeast carries out alcoholic fermentation, producing ethanol and carbon dioxide from pyruvate.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_185",
    "originalChapter": 5,
    "chapterTitle": "Respiration & Gaseous Exchange",
    "topic": "Anaerobic Respiration: Muscle Lactic Acid Accumulation",
    "bookQuestionNum": 185,
    "text": "During vigorous exercise, insufficient oxygen supply to skeletal muscles may result in the accumulation of",
    "options": {
      "A": "lactic acid",
      "B": "starch",
      "C": "bile",
      "D": "urea in the muscles"
    },
    "answer": "A",
    "explanation": "When oxygen supply is insufficient, muscle cells can produce ATP through anaerobic glycolysis, with lactate formation.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_186",
    "originalChapter": 5,
    "chapterTitle": "Respiration & Gaseous Exchange",
    "topic": "Gaseous Exchange: Mammalian Alveoli",
    "bookQuestionNum": 186,
    "text": "Which structure provides a large surface area for gaseous exchange in mammalian lungs?",
    "options": {
      "A": "Bronchi",
      "B": "Alveoli",
      "C": "Tracheal rings",
      "D": "Diaphragm"
    },
    "answer": "B",
    "explanation": "Numerous alveoli provide a large, moist and thin-walled surface surrounded by capillaries for gas exchange.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_187",
    "originalChapter": 5,
    "chapterTitle": "Respiration & Gaseous Exchange",
    "topic": "Ventilation Mechanism: Diaphragm Contraction",
    "bookQuestionNum": 187,
    "text": "During inhalation in mammals, the diaphragm",
    "options": {
      "A": "relaxes and becomes dome-shaped",
      "B": "contracts and flattens",
      "C": "remains completely motionless",
      "D": "pushes air directly into the lungs"
    },
    "answer": "B",
    "explanation": "Diaphragm contraction increases thoracic volume, lowering pressure and allowing air to enter the lungs.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_188",
    "originalChapter": 5,
    "chapterTitle": "Respiration & Gaseous Exchange",
    "topic": "Gaseous Exchange: Fish Gill Filaments",
    "bookQuestionNum": 188,
    "text": "Fish exchange gases efficiently through gills because",
    "options": {
      "A": "gill filaments provide a large surface area",
      "B": "gills contain no blood vessels",
      "C": "water cannot pass over the gills",
      "D": "the gills are covered by dry keratin"
    },
    "answer": "A",
    "explanation": "Gill filaments and lamellae provide a large, thin and well-supplied surface for oxygen uptake and carbon dioxide removal.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_189",
    "originalChapter": 6,
    "chapterTitle": "Excretion & Osmoregulation",
    "topic": "Excretion: Metabolic Wastes vs Egestion",
    "bookQuestionNum": 189,
    "text": "Excretion differs from egestion because excretion involves the removal of",
    "options": {
      "A": "undigested food only",
      "B": "metabolic waste products",
      "C": "all substances in the alimentary canal",
      "D": "useful nutrients from food"
    },
    "answer": "B",
    "explanation": "Excretion removes wastes generated by metabolism, while egestion removes undigested food from the digestive tract.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_190",
    "originalChapter": 6,
    "chapterTitle": "Excretion & Osmoregulation",
    "topic": "Excretion: Mammalian Nephron Functional Unit",
    "bookQuestionNum": 190,
    "text": "The functional unit of the mammalian kidney is the",
    "options": {
      "A": "alveolus",
      "B": "nephron",
      "C": "villus",
      "D": "neuron"
    },
    "answer": "B",
    "explanation": "Each nephron performs filtration, selective reabsorption and other processes involved in urine formation.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_191",
    "originalChapter": 6,
    "chapterTitle": "Excretion & Osmoregulation",
    "topic": "Renal Physiology: Ultrafiltration at Glomerulus",
    "bookQuestionNum": 191,
    "text": "Ultrafiltration in the kidney occurs mainly at the",
    "options": {
      "A": "glomerulus and Bowman's capsule",
      "B": "collecting duct only",
      "C": "ureter",
      "D": "renal pelvis"
    },
    "answer": "A",
    "explanation": "High blood pressure in the glomerulus forces water and small dissolved substances into Bowman's capsule.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_192",
    "originalChapter": 6,
    "chapterTitle": "Excretion & Osmoregulation",
    "topic": "Renal Physiology: Selective Glucose Reabsorption in PCT",
    "bookQuestionNum": 192,
    "text": "Which substance is normally completely reabsorbed from the filtrate in the proximal convoluted tubule when blood glucose is within the normal range?",
    "options": {
      "A": "Glucose",
      "B": "Urea",
      "C": "Creatinine",
      "D": "Most plasma proteins"
    },
    "answer": "A",
    "explanation": "In a healthy kidney under normal conditions, filtered glucose is normally reabsorbed in the proximal convoluted tubule.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_193",
    "originalChapter": 6,
    "chapterTitle": "Excretion & Osmoregulation",
    "topic": "Excretion: Hepatic Deamination & Urea Synthesis",
    "bookQuestionNum": 193,
    "text": "Urea is formed mainly in the",
    "options": {
      "A": "lungs",
      "B": "liver",
      "C": "urinary bladder",
      "D": "pancreas"
    },
    "answer": "B",
    "explanation": "The liver converts toxic ammonia produced during amino acid breakdown into less toxic urea.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_194",
    "originalChapter": 6,
    "chapterTitle": "Excretion & Osmoregulation",
    "topic": "Osmoregulation: Antidiuretic Hormone (ADH)",
    "bookQuestionNum": 194,
    "text": "Which hormone increases water reabsorption in the kidney collecting ducts?",
    "options": {
      "A": "Insulin",
      "B": "ADH",
      "C": "Thyroxine",
      "D": "Adrenaline"
    },
    "answer": "B",
    "explanation": "Antidiuretic hormone increases the water permeability of collecting ducts, helping the body conserve water.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_195",
    "originalChapter": 7,
    "chapterTitle": "Support, Movement & Plant Tropisms",
    "topic": "Plant Support: Collenchyma Uneven Thickening",
    "bookQuestionNum": 195,
    "text": "Which of the following is a supporting tissue in plants with unevenly thickened cell walls and living cells at maturity?",
    "options": {
      "A": "Collenchyma",
      "B": "Sclerenchyma",
      "C": "Epidermis",
      "D": "Cork"
    },
    "answer": "A",
    "explanation": "Collenchyma cells have unevenly thickened walls and provide flexible support to growing plant parts.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_196",
    "originalChapter": 7,
    "chapterTitle": "Support, Movement & Plant Tropisms",
    "topic": "Plant Support: Sclerenchyma Lignified Walls",
    "bookQuestionNum": 196,
    "text": "Sclerenchyma provides strong mechanical support because its cells usually have",
    "options": {
      "A": "thin walls and large vacuoles only",
      "B": "thick, lignified walls",
      "C": "no cell walls",
      "D": "chloroplasts in every mature cell"
    },
    "answer": "B",
    "explanation": "Lignified secondary walls make sclerenchyma strong and rigid; mature sclerenchyma cells are usually dead.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_197",
    "originalChapter": 7,
    "chapterTitle": "Support, Movement & Plant Tropisms",
    "topic": "Skeletal System: Shoulder Ball-and-Socket Joint",
    "bookQuestionNum": 197,
    "text": "Which type of joint is found at the shoulder?",
    "options": {
      "A": "Hinge joint",
      "B": "Ball-and-socket joint",
      "C": "Pivot joint",
      "D": "Fixed joint"
    },
    "answer": "B",
    "explanation": "The shoulder allows movement in several directions, including rotation.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_198",
    "originalChapter": 7,
    "chapterTitle": "Support, Movement & Plant Tropisms",
    "topic": "Skeletal System: Elbow Hinge Joint",
    "bookQuestionNum": 198,
    "text": "The elbow joint is an example of a",
    "options": {
      "A": "hinge joint",
      "B": "ball-and-socket joint",
      "C": "gliding joint",
      "D": "fixed joint"
    },
    "answer": "A",
    "explanation": "The elbow mainly allows flexion and extension in one plane.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_199",
    "originalChapter": 7,
    "chapterTitle": "Support, Movement & Plant Tropisms",
    "topic": "Muscular System: Antagonistic Biceps & Triceps",
    "bookQuestionNum": 199,
    "text": "During flexion of the forearm at the elbow, the",
    "options": {
      "A": "biceps contracts while the triceps relaxes",
      "B": "triceps contracts while the biceps relaxes",
      "C": "biceps and triceps both remain completely relaxed",
      "D": "biceps and triceps both contract equally"
    },
    "answer": "A",
    "explanation": "The biceps flexes the elbow, while the triceps acts as its antagonistic extensor.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_200",
    "originalChapter": 7,
    "chapterTitle": "Support, Movement & Plant Tropisms",
    "topic": "Plant Tropisms: Positive Phototropism",
    "bookQuestionNum": 200,
    "text": "Which type of plant movement is a directional growth response to light?",
    "options": {
      "A": "Nastic movement",
      "B": "Phototropism",
      "C": "Taxis",
      "D": "Sleep movement"
    },
    "answer": "B",
    "explanation": "Phototropism is directional growth in response to light, such as the bending of shoots towards a light source.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_201",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Facilitated Diffusion",
    "bookQuestionNum": 201,
    "text": "Which process allows glucose to enter a cell through a carrier protein without directly using ATP?",
    "options": {
      "A": "Active transport",
      "B": "Facilitated diffusion",
      "C": "Phagocytosis",
      "D": "Exocytosis"
    },
    "answer": "B",
    "explanation": "Facilitated diffusion uses membrane proteins to move substances down their concentration gradient without directly using cellular energy.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_202",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Prokaryotic vs Eukaryotic Cells",
    "bookQuestionNum": 202,
    "text": "Which feature distinguishes prokaryotic cells from eukaryotic cells?",
    "options": {
      "A": "Presence of cytoplasm",
      "B": "Presence of ribosomes",
      "C": "Absence of a membrane-bound nucleus",
      "D": "Presence of genetic material"
    },
    "answer": "C",
    "explanation": "Prokaryotic cells have DNA in a nucleoid region but lack a membrane-bound nucleus. They still possess cytoplasm, ribosomes and genetic material.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_203",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cellular Physiology: Plasmolysis & Osmosis",
    "bookQuestionNum": 203,
    "text": "A plant cell is placed in a highly concentrated salt solution. What is most likely to happen?",
    "options": {
      "A": "The cell becomes turgid.",
      "B": "The cell undergoes plasmolysis.",
      "C": "The cell wall disappears.",
      "D": "The vacuole increases in size."
    },
    "answer": "B",
    "explanation": "Water leaves the cell by osmosis because the external solution has a lower water potential. The protoplast shrinks away from the cell wall.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_204",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cellular Physiology: Active Transport Mechanisms",
    "bookQuestionNum": 204,
    "text": "Which statement correctly describes active transport?",
    "options": {
      "A": "It always moves substances down a concentration gradient.",
      "B": "It requires no membrane proteins.",
      "C": "It can move substances against their concentration gradient using energy.",
      "D": "It occurs only in dead cells."
    },
    "answer": "C",
    "explanation": "Active transport uses energy, commonly from ATP, and membrane transport proteins to move substances against their concentration gradient.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_205",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Plant Cell Wall & Cellulose",
    "bookQuestionNum": 205,
    "text": "The major structural component of the plant cell wall is",
    "options": {
      "A": "glycogen.",
      "B": "cellulose.",
      "C": "chitin.",
      "D": "starch."
    },
    "answer": "B",
    "explanation": "Cellulose fibres form the main structural framework of plant cell walls, providing strength and support.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_206",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Nucleolus & Ribosome Assembly",
    "bookQuestionNum": 206,
    "text": "Which cell structure is mainly responsible for producing ribosomal RNA and assembling ribosomal subunits?",
    "options": {
      "A": "Nucleolus",
      "B": "Lysosome",
      "C": "Centriole",
      "D": "Vacuole"
    },
    "answer": "A",
    "explanation": "The nucleolus is a region inside the nucleus where ribosomal RNA is produced and ribosomal subunits are assembled.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_207",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Rough Endoplasmic Reticulum",
    "bookQuestionNum": 207,
    "text": "The rough endoplasmic reticulum is especially involved in the production and processing of",
    "options": {
      "A": "proteins for secretion and membranes.",
      "B": "starch grains.",
      "C": "atmospheric oxygen.",
      "D": "chromosome pairs."
    },
    "answer": "A",
    "explanation": "Ribosomes attached to the rough endoplasmic reticulum synthesise proteins that enter the endoplasmic reticulum for processing and transport.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_208",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Golgi Apparatus & Secretion",
    "bookQuestionNum": 208,
    "text": "Which organelle modifies, sorts and packages proteins into vesicles?",
    "options": {
      "A": "Nucleus",
      "B": "Golgi apparatus",
      "C": "Ribosome",
      "D": "Mitochondrion"
    },
    "answer": "B",
    "explanation": "The Golgi apparatus processes proteins and lipids received from the endoplasmic reticulum and packages them for transport to their destinations.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_209",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Photosynthesis: Chloroplast Grana & Thylakoids",
    "bookQuestionNum": 209,
    "text": "The stacks of flattened membranes inside chloroplasts are called",
    "options": {
      "A": "cristae.",
      "B": "grana.",
      "C": "ribosomes.",
      "D": "centrioles."
    },
    "answer": "B",
    "explanation": "Grana are stacks of thylakoid membranes containing chlorophyll and other pigments involved in the light-dependent reactions of photosynthesis.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_210",
    "originalChapter": 1,
    "chapterTitle": "Cell Biology & Organization of Life",
    "topic": "Cell Biology: Centrioles & Spindle Apparatus",
    "bookQuestionNum": 210,
    "text": "In many animal cells, which structure helps organise microtubules during cell division?",
    "options": {
      "A": "Centriole",
      "B": "Nucleolus",
      "C": "Vacuole",
      "D": "Cell wall"
    },
    "answer": "A",
    "explanation": "Centrioles help organise the microtubules of the spindle apparatus in many animal cells during cell division.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "bio_tough_211",
    "originalChapter": 2,
    "chapterTitle": "Cell Division, Molecular Genetics & Protein Synthesis",
    "topic": "Cell Cycle: S Phase & DNA Replication",
    "bookQuestionNum": 211,
    "text": "DNA replication in a typical eukaryotic cell takes place during which stage of the cell cycle?",
    "options": {
      "A": "G₁ phase",
      "B": "S phase",
      "C": "G₂ phase",
      "D": "Cytokinesis"
    },
    "answer": "B",
    "explanation": "The S phase is the synthesis phase of interphase, during which DNA is replicated before cell division.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_212",
    "originalChapter": 2,
    "chapterTitle": "Cell Division, Molecular Genetics & Protein Synthesis",
    "topic": "Meiosis: Crossing Over in Prophase I",
    "bookQuestionNum": 212,
    "text": "Crossing over during meiosis occurs mainly during",
    "options": {
      "A": "prophase I.",
      "B": "metaphase II.",
      "C": "anaphase II.",
      "D": "telophase I."
    },
    "answer": "A",
    "explanation": "During prophase I, non-sister chromatids of homologous chromosomes exchange corresponding segments of DNA, producing new allele combinations.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_213",
    "originalChapter": 2,
    "chapterTitle": "Cell Division, Molecular Genetics & Protein Synthesis",
    "topic": "Meiosis: Haploid Gamete Formation & Variation",
    "bookQuestionNum": 213,
    "text": "The major biological importance of meiosis is that it",
    "options": {
      "A": "doubles the chromosome number in every generation.",
      "B": "produces cells with half the chromosome number.",
      "C": "prevents all genetic variation.",
      "D": "produces genetically identical body cells."
    },
    "answer": "B",
    "explanation": "Meiosis reduces the chromosome number from diploid to haploid, allowing fertilisation to restore the normal diploid number.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_214",
    "originalChapter": 2,
    "chapterTitle": "Cell Division, Molecular Genetics & Protein Synthesis",
    "topic": "Meiosis: Independent Assortment at Metaphase I",
    "bookQuestionNum": 214,
    "text": "Independent assortment of homologous chromosomes occurs because",
    "options": {
      "A": "chromosomes always move in pairs to the same pole.",
      "B": "homologous chromosome pairs align randomly at metaphase I.",
      "C": "DNA replication stops before meiosis.",
      "D": "sister chromatids never separate."
    },
    "answer": "B",
    "explanation": "The random orientation of homologous pairs at metaphase I produces different combinations of maternal and paternal chromosomes in gametes.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_215",
    "originalChapter": 2,
    "chapterTitle": "Cell Division, Molecular Genetics & Protein Synthesis",
    "topic": "Mitosis: Tissue Repair & Replacement",
    "bookQuestionNum": 215,
    "text": "Which type of cell division is mainly responsible for replacing worn-out skin cells?",
    "options": {
      "A": "Meiosis",
      "B": "Binary fission",
      "C": "Mitosis",
      "D": "Fertilisation"
    },
    "answer": "C",
    "explanation": "Mitosis produces genetically similar daughter cells and is important for growth, tissue repair and replacement of damaged or worn-out cells.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_216",
    "originalChapter": 2,
    "chapterTitle": "Cell Division, Molecular Genetics & Protein Synthesis",
    "topic": "Genetics: Human Gamete Chromosome Number",
    "bookQuestionNum": 216,
    "text": "How many chromosomes are normally present in a human sperm cell?",
    "options": {
      "A": "22",
      "B": "23",
      "C": "44",
      "D": "46"
    },
    "answer": "B",
    "explanation": "Human sperm cells are haploid. They contain 22 autosomes and either an X or a Y chromosome.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_217",
    "originalChapter": 2,
    "chapterTitle": "Cell Division, Molecular Genetics & Protein Synthesis",
    "topic": "Molecular Genetics: Complementary Base Pairing",
    "bookQuestionNum": 217,
    "text": "If one strand of DNA has the base sequence ATGCCG, what is the complementary sequence?",
    "options": {
      "A": "TACGGC",
      "B": "UACGGC",
      "C": "ATGCCG",
      "D": "TAGCCG"
    },
    "answer": "A",
    "explanation": "In DNA, adenine pairs with thymine, while guanine pairs with cytosine. Therefore, ATGCCG pairs with TACGGC.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_218",
    "originalChapter": 2,
    "chapterTitle": "Cell Division, Molecular Genetics & Protein Synthesis",
    "topic": "Molecular Genetics: Semiconservative DNA Replication",
    "bookQuestionNum": 218,
    "text": "DNA replication is described as semiconservative because each new DNA molecule contains",
    "options": {
      "A": "two completely new strands.",
      "B": "two original strands.",
      "C": "one original strand and one newly synthesised strand.",
      "D": "only one strand of DNA."
    },
    "answer": "C",
    "explanation": "Each original DNA strand acts as a template for the formation of a new complementary strand.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_219",
    "originalChapter": 2,
    "chapterTitle": "Cell Division, Molecular Genetics & Protein Synthesis",
    "topic": "Molecular Genetics: Transcription of mRNA",
    "bookQuestionNum": 219,
    "text": "The process through which genetic information in DNA is copied into messenger RNA is called",
    "options": {
      "A": "translation.",
      "B": "transcription.",
      "C": "replication.",
      "D": "translocation."
    },
    "answer": "B",
    "explanation": "During transcription, RNA polymerase uses a DNA template to synthesise an RNA molecule.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_220",
    "originalChapter": 2,
    "chapterTitle": "Cell Division, Molecular Genetics & Protein Synthesis",
    "topic": "Molecular Genetics: Translation at Ribosomes",
    "bookQuestionNum": 220,
    "text": "Translation takes place mainly at the",
    "options": {
      "A": "lysosome.",
      "B": "ribosome.",
      "C": "Golgi apparatus.",
      "D": "cell membrane."
    },
    "answer": "B",
    "explanation": "Ribosomes read messenger RNA codons and link amino acids together to form a polypeptide.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_221",
    "originalChapter": 3,
    "chapterTitle": "Heredity & Mendelian Genetics",
    "topic": "Genetic Code: Codons & Triplet Bases",
    "bookQuestionNum": 221,
    "text": "A genetic codon consists of",
    "options": {
      "A": "two nitrogenous bases.",
      "B": "three nitrogenous bases.",
      "C": "four nitrogenous bases.",
      "D": "five nitrogenous bases."
    },
    "answer": "B",
    "explanation": "Each codon is a sequence of three nucleotides on messenger RNA that specifies an amino acid or a translation stop signal.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_222",
    "originalChapter": 3,
    "chapterTitle": "Heredity & Mendelian Genetics",
    "topic": "Protein Synthesis: tRNA Anticodons",
    "bookQuestionNum": 222,
    "text": "The function of an anticodon on transfer RNA is to",
    "options": {
      "A": "destroy messenger RNA.",
      "B": "pair with a complementary codon on messenger RNA.",
      "C": "replicate DNA.",
      "D": "produce ribosomal RNA."
    },
    "answer": "B",
    "explanation": "The anticodon on tRNA recognises a complementary mRNA codon, helping deliver the correct amino acid during protein synthesis.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_223",
    "originalChapter": 3,
    "chapterTitle": "Heredity & Mendelian Genetics",
    "topic": "Gene Mutations: Frameshift Mutations",
    "bookQuestionNum": 223,
    "text": "The insertion of a single nucleotide into a coding DNA sequence can produce a frameshift mutation because it",
    "options": {
      "A": "changes the reading frame of subsequent codons.",
      "B": "removes the entire chromosome.",
      "C": "always produces a stop codon immediately.",
      "D": "prevents DNA from containing bases."
    },
    "answer": "A",
    "explanation": "Since codons are read in groups of three bases, inserting one base can alter the grouping of all downstream codons.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_224",
    "originalChapter": 3,
    "chapterTitle": "Heredity & Mendelian Genetics",
    "topic": "Chromosomal Aberrations: Nondisjunction",
    "bookQuestionNum": 224,
    "text": "Nondisjunction during meiosis occurs when",
    "options": {
      "A": "DNA replicates normally.",
      "B": "chromosomes fail to separate properly.",
      "C": "cytoplasm divides equally.",
      "D": "crossing over occurs between homologous chromosomes."
    },
    "answer": "B",
    "explanation": "Nondisjunction is the failure of homologous chromosomes or sister chromatids to separate, producing gametes with abnormal chromosome numbers.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_225",
    "originalChapter": 3,
    "chapterTitle": "Heredity & Mendelian Genetics",
    "topic": "Mendelian Genetics: Alleles & Gene Loci",
    "bookQuestionNum": 225,
    "text": "Different forms of the same gene found at the same position on homologous chromosomes are called",
    "options": {
      "A": "chromatids.",
      "B": "alleles.",
      "C": "codons.",
      "D": "centromeres."
    },
    "answer": "B",
    "explanation": "Alleles are alternative forms of a gene occupying the same locus on homologous chromosomes.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "bio_tough_226",
    "originalChapter": 3,
    "chapterTitle": "Heredity & Mendelian Genetics",
    "topic": "Mendelian Genetics: Test Cross & Genotype Determination",
    "bookQuestionNum": 226,
    "text": "A test cross is carried out by crossing an individual showing a dominant phenotype with",
    "options": {
      "A": "a homozygous dominant individual.",
      "B": "a homozygous recessive individual.",
      "C": "an individual with the same phenotype.",
      "D": "any unrelated individual."
    },
    "answer": "B",
    "explanation": "A test cross helps determine whether an individual with a dominant phenotype is homozygous or heterozygous.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_227",
    "originalChapter": 3,
    "chapterTitle": "Heredity & Mendelian Genetics",
    "topic": "Mendelian Genetics: Dihybrid Cross & 9:3:3:1 Ratio",
    "bookQuestionNum": 227,
    "text": "Two organisms with genotypes AaBb are crossed. Assuming independent assortment and complete dominance, what is the expected phenotypic ratio?",
    "options": {
      "A": "1:1:1:1",
      "B": "3:1",
      "C": "9:3:3:1",
      "D": "1:2:1"
    },
    "answer": "C",
    "explanation": "A standard dihybrid cross between two double heterozygotes produces a 9:3:3:1 phenotypic ratio when the genes assort independently.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_228",
    "originalChapter": 3,
    "chapterTitle": "Heredity & Mendelian Genetics",
    "topic": "Mendelian Genetics: Monohybrid Test Cross 1:1",
    "bookQuestionNum": 228,
    "text": "In a cross between Aa and aa, assuming complete dominance, what proportion of the offspring is expected to show the dominant phenotype?",
    "options": {
      "A": "25%",
      "B": "50%",
      "C": "75%",
      "D": "100%"
    },
    "answer": "B",
    "explanation": "The offspring are expected to have genotypes Aa and aa in equal proportions. Only Aa shows the dominant phenotype.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_229",
    "originalChapter": 3,
    "chapterTitle": "Heredity & Mendelian Genetics",
    "topic": "Genetics: Polygenic Inheritance & Quantitative Traits",
    "bookQuestionNum": 229,
    "text": "Human height is an example of a trait commonly influenced by",
    "options": {
      "A": "one gene only.",
      "B": "several genes and environmental factors.",
      "C": "mitochondrial DNA alone.",
      "D": "sex chromosomes only."
    },
    "answer": "B",
    "explanation": "Height is a polygenic trait. Many genes contribute to it, while nutrition and other environmental conditions also influence its expression.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_230",
    "originalChapter": 3,
    "chapterTitle": "Heredity & Mendelian Genetics",
    "topic": "Genetics: Genotype vs Phenotypic Expression",
    "bookQuestionNum": 230,
    "text": "Which statement correctly distinguishes genotype from phenotype?",
    "options": {
      "A": "Genotype refers to observable features, while phenotype refers only to genes.",
      "B": "Genotype is an organism's genetic constitution, while phenotype is its observable characteristics.",
      "C": "Both terms mean exactly the same thing.",
      "D": "Phenotype is determined only by environmental factors."
    },
    "answer": "B",
    "explanation": "Genotype describes the genetic makeup of an organism. Phenotype results from the expression of genes and their interaction with the environment.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_231",
    "originalChapter": 4,
    "chapterTitle": "Plant Anatomy, Water Relations & Transpiration",
    "topic": "Leaf Anatomy: Palisade Mesophyll & Chloroplasts",
    "bookQuestionNum": 231,
    "text": "Which leaf tissue usually contains the greatest concentration of chloroplasts?",
    "options": {
      "A": "Upper epidermis",
      "B": "Palisade mesophyll",
      "C": "Lower epidermis",
      "D": "Vascular bundle"
    },
    "answer": "B",
    "explanation": "Palisade mesophyll cells are located near the upper surface of many leaves and contain numerous chloroplasts for photosynthesis.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_232",
    "originalChapter": 4,
    "chapterTitle": "Plant Anatomy, Water Relations & Transpiration",
    "topic": "Leaf Anatomy: Stomatal Distribution",
    "bookQuestionNum": 232,
    "text": "In many terrestrial dicot leaves, most stomata are found on the",
    "options": {
      "A": "upper epidermis.",
      "B": "lower epidermis.",
      "C": "xylem vessels.",
      "D": "central midrib only."
    },
    "answer": "B",
    "explanation": "Having more stomata on the lower epidermis generally reduces direct exposure to sunlight and helps limit water loss.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_233",
    "originalChapter": 4,
    "chapterTitle": "Plant Anatomy, Water Relations & Transpiration",
    "topic": "Plant Physiology: Potassium Ions & Stomatal Mechanism",
    "bookQuestionNum": 233,
    "text": "When guard cells take up potassium ions, they generally",
    "options": {
      "A": "lose water and close the stomata.",
      "B": "gain water by osmosis and open the stomata.",
      "C": "lose their cell walls.",
      "D": "stop all metabolic activities."
    },
    "answer": "B",
    "explanation": "Potassium ion accumulation lowers the water potential of guard cells, causing water to enter. The resulting increase in turgor opens the stomatal pore.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_234",
    "originalChapter": 4,
    "chapterTitle": "Plant Anatomy, Water Relations & Transpiration",
    "topic": "Transport in Plants: Phloem Sieve Tubes & Sucrose",
    "bookQuestionNum": 234,
    "text": "The main function of phloem sieve tubes is to transport",
    "options": {
      "A": "water only from roots.",
      "B": "organic substances such as sucrose between sources and sinks.",
      "C": "oxygen from leaves to roots only.",
      "D": "mineral salts from soil into root hairs."
    },
    "answer": "B",
    "explanation": "Phloem transports sugars and other organic nutrients from regions where they are produced or released to regions where they are used or stored.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_235",
    "originalChapter": 4,
    "chapterTitle": "Plant Anatomy, Water Relations & Transpiration",
    "topic": "Plant Physiology: Bark Ringing & Phloem Transport",
    "bookQuestionNum": 235,
    "text": "When a complete ring of bark containing phloem is removed from a tree trunk, sugars tend to accumulate above the cut because",
    "options": {
      "A": "xylem transport stops immediately.",
      "B": "downward phloem transport is interrupted.",
      "C": "photosynthesis stops in every leaf.",
      "D": "the roots begin producing glucose."
    },
    "answer": "B",
    "explanation": "Removing the bark removes the phloem. Sugars produced in leaves cannot move normally past the cut towards the roots, so they accumulate above it.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_236",
    "originalChapter": 4,
    "chapterTitle": "Plant Anatomy, Water Relations & Transpiration",
    "topic": "Plant Water Relations: Osmosis in Root Hair Cells",
    "bookQuestionNum": 236,
    "text": "Water enters root hair cells mainly because",
    "options": {
      "A": "their cell sap usually has a lower water potential than the surrounding soil water.",
      "B": "the soil always has a lower water potential.",
      "C": "root hairs actively pump water using ATP.",
      "D": "the cell wall attracts oxygen molecules."
    },
    "answer": "A",
    "explanation": "Water moves by osmosis from the soil, where water potential is usually higher, into the root hair cell, where water potential is lower.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_237",
    "originalChapter": 4,
    "chapterTitle": "Plant Anatomy, Water Relations & Transpiration",
    "topic": "Transport in Plants: Transpiration Pull & Cohesion",
    "bookQuestionNum": 237,
    "text": "The upward movement of water through xylem is maintained largely by",
    "options": {
      "A": "root respiration alone.",
      "B": "transpiration pull and cohesion between water molecules.",
      "C": "phloem pressure only.",
      "D": "gravity acting upwards."
    },
    "answer": "B",
    "explanation": "Evaporation from leaves creates tension in xylem. Cohesion between water molecules maintains a continuous water column that is pulled upwards.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_238",
    "originalChapter": 4,
    "chapterTitle": "Plant Anatomy, Water Relations & Transpiration",
    "topic": "Plant Physiology: Humidity & Transpiration Rate",
    "bookQuestionNum": 238,
    "text": "Transpiration generally decreases when atmospheric humidity becomes very high because",
    "options": {
      "A": "the water vapour gradient between the leaf and air becomes smaller.",
      "B": "stomata must remain permanently open.",
      "C": "water molecules stop moving.",
      "D": "the roots stop absorbing all minerals."
    },
    "answer": "A",
    "explanation": "High humidity reduces the difference in water vapour concentration between the leaf air spaces and the surrounding air, reducing evaporation.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_239",
    "originalChapter": 4,
    "chapterTitle": "Plant Anatomy, Water Relations & Transpiration",
    "topic": "Plant Physiology: Wind Velocity & Transpiration",
    "bookQuestionNum": 239,
    "text": "A strong wind can increase transpiration because it",
    "options": {
      "A": "removes moist air around the leaf surface.",
      "B": "blocks all stomata permanently.",
      "C": "increases atmospheric humidity around the leaf.",
      "D": "prevents water from evaporating."
    },
    "answer": "A",
    "explanation": "Wind removes the moist boundary layer surrounding leaves, maintaining a steep water vapour gradient that encourages transpiration.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_240",
    "originalChapter": 4,
    "chapterTitle": "Plant Anatomy, Water Relations & Transpiration",
    "topic": "Plant Water Relations: Guttation & Hydathodes",
    "bookQuestionNum": 240,
    "text": "The loss of liquid water droplets from leaf edges through specialised structures is known as",
    "options": {
      "A": "transpiration.",
      "B": "guttation.",
      "C": "photosynthesis.",
      "D": "plasmolysis."
    },
    "answer": "B",
    "explanation": "Guttation occurs when liquid water is forced out through hydathodes, usually under conditions of high soil moisture and low transpiration.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "bio_tough_241",
    "originalChapter": 5,
    "chapterTitle": "Plant Hormones, Tropisms & Photosynthetic Adaptations",
    "topic": "Plant Hormones: Abscisic Acid & Drought Response",
    "bookQuestionNum": 241,
    "text": "Which plant hormone commonly causes stomatal closure during water stress?",
    "options": {
      "A": "Auxin",
      "B": "Gibberellin",
      "C": "Abscisic acid",
      "D": "Cytokinin"
    },
    "answer": "C",
    "explanation": "Abscisic acid is involved in plant responses to drought and helps trigger stomatal closure to reduce water loss.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_242",
    "originalChapter": 5,
    "chapterTitle": "Plant Hormones, Tropisms & Photosynthetic Adaptations",
    "topic": "Plant Tropisms: Auxin & Phototropic Curvature",
    "bookQuestionNum": 242,
    "text": "During phototropism, auxin accumulates on the shaded side of a young shoot, causing",
    "options": {
      "A": "faster cell elongation on the shaded side.",
      "B": "faster cell death on the shaded side.",
      "C": "equal growth on both sides in all circumstances.",
      "D": "immediate leaf abscission."
    },
    "answer": "A",
    "explanation": "In shoots, auxin promotes cell elongation. Greater elongation on the shaded side causes the shoot to bend towards light.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_243",
    "originalChapter": 5,
    "chapterTitle": "Plant Hormones, Tropisms & Photosynthetic Adaptations",
    "topic": "Plant Hormones: Auxin & Apical Dominance",
    "bookQuestionNum": 243,
    "text": "Apical dominance in plants is mainly associated with",
    "options": {
      "A": "auxin produced by the terminal bud inhibiting lateral bud growth.",
      "B": "ethylene increasing root pressure.",
      "C": "abscisic acid stimulating fruit ripening.",
      "D": "cytokinin preventing cell division."
    },
    "answer": "A",
    "explanation": "Auxin from the apical bud suppresses the development of lateral buds. Removing the terminal bud can encourage branching.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_244",
    "originalChapter": 5,
    "chapterTitle": "Plant Hormones, Tropisms & Photosynthetic Adaptations",
    "topic": "Plant Physiology: Photoperiodism & Flowering",
    "bookQuestionNum": 244,
    "text": "Photoperiodism refers to a plant's response to",
    "options": {
      "A": "changes in gravity.",
      "B": "the relative length of day and night.",
      "C": "soil acidity alone.",
      "D": "changes in wind speed."
    },
    "answer": "B",
    "explanation": "Photoperiodism controls responses such as flowering according to the length of light and dark periods.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_245",
    "originalChapter": 5,
    "chapterTitle": "Plant Hormones, Tropisms & Photosynthetic Adaptations",
    "topic": "Plant Nutrition: Magnesium in Chlorophyll",
    "bookQuestionNum": 245,
    "text": "Which mineral element is an essential component of chlorophyll?",
    "options": {
      "A": "Sodium",
      "B": "Magnesium",
      "C": "Calcium",
      "D": "Chlorine"
    },
    "answer": "B",
    "explanation": "Magnesium is located at the centre of the chlorophyll molecule. Deficiency can cause chlorosis, especially in older leaves.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_246",
    "originalChapter": 5,
    "chapterTitle": "Plant Hormones, Tropisms & Photosynthetic Adaptations",
    "topic": "Plant Anatomy: Lignified Xylem Vessels",
    "bookQuestionNum": 246,
    "text": "Xylem vessels are particularly suited to water transport because they are generally",
    "options": {
      "A": "living cells with large nuclei.",
      "B": "dead, hollow cells with strengthened lignified walls.",
      "C": "filled with cytoplasm and chloroplasts.",
      "D": "made only of cellulose without reinforcement."
    },
    "answer": "B",
    "explanation": "Mature vessel elements lack their protoplasts, creating a continuous pathway for water. Lignin strengthens their walls against collapse.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_247",
    "originalChapter": 5,
    "chapterTitle": "Plant Hormones, Tropisms & Photosynthetic Adaptations",
    "topic": "Root System: Root Hair Absorptive Surface Area",
    "bookQuestionNum": 247,
    "text": "Root hairs improve water and mineral absorption mainly by",
    "options": {
      "A": "reducing the surface area of the root.",
      "B": "increasing the surface area available for absorption.",
      "C": "preventing contact with soil particles.",
      "D": "producing sunlight for photosynthesis."
    },
    "answer": "B",
    "explanation": "Root hairs are thin extensions of epidermal cells that greatly increase the surface area in contact with soil water.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_248",
    "originalChapter": 5,
    "chapterTitle": "Plant Hormones, Tropisms & Photosynthetic Adaptations",
    "topic": "Root Anatomy: Casparian Strip in Endodermis",
    "bookQuestionNum": 248,
    "text": "The Casparian strip is located in the",
    "options": {
      "A": "epidermis of the leaf.",
      "B": "endodermis of the root.",
      "C": "palisade mesophyll.",
      "D": "phloem sieve plate."
    },
    "answer": "B",
    "explanation": "The Casparian strip is a waterproof band in endodermal cell walls that helps regulate the movement of water and minerals into the vascular cylinder.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_249",
    "originalChapter": 5,
    "chapterTitle": "Plant Hormones, Tropisms & Photosynthetic Adaptations",
    "topic": "Photosynthetic Adaptations: CAM Photosynthesis in Xerophytes",
    "bookQuestionNum": 249,
    "text": "Many desert plants using CAM photosynthesis open their stomata mainly at night because this",
    "options": {
      "A": "increases water loss during the hottest period.",
      "B": "reduces water loss while allowing carbon dioxide uptake.",
      "C": "prevents all carbon fixation.",
      "D": "eliminates the need for chlorophyll."
    },
    "answer": "B",
    "explanation": "CAM plants take in carbon dioxide at night, when temperatures are generally lower, and store it for use during photosynthesis in daylight.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_250",
    "originalChapter": 5,
    "chapterTitle": "Plant Hormones, Tropisms & Photosynthetic Adaptations",
    "topic": "Photosynthetic Adaptations: C4 Pathway & Rubisco",
    "bookQuestionNum": 250,
    "text": "C₄ plants reduce photorespiration mainly by",
    "options": {
      "A": "concentrating carbon dioxide around the enzyme Rubisco.",
      "B": "removing all chlorophyll from their leaves.",
      "C": "carrying out respiration only at night.",
      "D": "preventing oxygen from entering their leaves."
    },
    "answer": "A",
    "explanation": "C₄ plants first fix carbon dioxide into four-carbon compounds and transport it to specialised cells where carbon dioxide is released at high concentration, reducing photorespiration.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_251",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Circulatory System: Biconcave Red Blood Cells",
    "bookQuestionNum": 251,
    "text": "The biconcave shape of mammalian red blood cells helps them by",
    "options": {
      "A": "reducing their surface area.",
      "B": "increasing surface area for gas exchange and allowing flexibility.",
      "C": "enabling them to produce antibodies.",
      "D": "preventing haemoglobin from binding oxygen."
    },
    "answer": "B",
    "explanation": "Their biconcave shape provides a large surface-area-to-volume ratio and helps them pass through narrow capillaries.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_252",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Blood Plasma: Albumin & Colloid Osmotic Pressure",
    "bookQuestionNum": 252,
    "text": "Which plasma protein contributes significantly to maintaining the osmotic pressure of blood?",
    "options": {
      "A": "Albumin",
      "B": "Haemoglobin",
      "C": "Myosin",
      "D": "Keratin"
    },
    "answer": "A",
    "explanation": "Albumin is the most abundant plasma protein and helps maintain the colloid osmotic pressure that keeps water within the blood vessels.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_253",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Circulatory System: Sinoatrial Node Pacemaker",
    "bookQuestionNum": 253,
    "text": "The natural pacemaker of the human heart is the",
    "options": {
      "A": "atrioventricular node.",
      "B": "sinoatrial node.",
      "C": "bundle of His.",
      "D": "Purkinje fibres."
    },
    "answer": "B",
    "explanation": "The sinoatrial node initiates electrical impulses that normally determine the rhythm of the heartbeat.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_254",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Heart Structure: Atrioventricular Tricuspid Valve",
    "bookQuestionNum": 254,
    "text": "The tricuspid valve is located between the",
    "options": {
      "A": "left atrium and left ventricle.",
      "B": "right atrium and right ventricle.",
      "C": "left ventricle and aorta.",
      "D": "right ventricle and pulmonary artery."
    },
    "answer": "B",
    "explanation": "The tricuspid valve prevents blood from flowing back into the right atrium when the right ventricle contracts.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_255",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Heart Structure: Aortic & Pulmonary Semilunar Valves",
    "bookQuestionNum": 255,
    "text": "The semilunar valves prevent blood from flowing back into the ventricles from the",
    "options": {
      "A": "atria.",
      "B": "venae cavae.",
      "C": "aorta and pulmonary artery.",
      "D": "pulmonary veins."
    },
    "answer": "C",
    "explanation": "The aortic and pulmonary semilunar valves close after ventricular contraction, preventing backflow into the ventricles.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "bio_tough_256",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Blood Physiology: Thrombin & Fibrin Clot Formation",
    "bookQuestionNum": 256,
    "text": "During blood clotting, fibrin is formed from fibrinogen mainly through the action of",
    "options": {
      "A": "insulin.",
      "B": "thrombin.",
      "C": "haemoglobin.",
      "D": "pepsin."
    },
    "answer": "B",
    "explanation": "Thrombin converts soluble fibrinogen into insoluble fibrin strands, which form a mesh that stabilises the blood clot.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_257",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Immune System: B Plasma Cells & Antibody Production",
    "bookQuestionNum": 257,
    "text": "Which cells are primarily responsible for producing antibodies?",
    "options": {
      "A": "Red blood cells",
      "B": "Plasma cells",
      "C": "Platelets",
      "D": "Neurons"
    },
    "answer": "B",
    "explanation": "Activated B lymphocytes can differentiate into plasma cells, which secrete antibodies that bind specific antigens.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_258",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Immune System: Phagocytosis by Neutrophils & Macrophages",
    "bookQuestionNum": 258,
    "text": "The process by which certain white blood cells engulf and digest microorganisms is called",
    "options": {
      "A": "osmosis.",
      "B": "phagocytosis.",
      "C": "transpiration.",
      "D": "plasmolysis."
    },
    "answer": "B",
    "explanation": "Phagocytes such as neutrophils and macrophages surround, engulf and digest microorganisms and other foreign particles.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_259",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Respiratory System: Alveoli Adaptations for Gas Exchange",
    "bookQuestionNum": 259,
    "text": "The walls of human alveoli are suitable for gaseous exchange because they are",
    "options": {
      "A": "thick and heavily keratinised.",
      "B": "thin, moist and surrounded by capillaries.",
      "C": "dry and covered with scales.",
      "D": "made entirely of cartilage."
    },
    "answer": "B",
    "explanation": "Their thin walls provide a short diffusion distance, while moisture allows gases to dissolve and the surrounding capillaries maintain concentration gradients.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_260",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Respiratory Mechanism: Diaphragm Contraction & Inhalation",
    "bookQuestionNum": 260,
    "text": "During normal inhalation, the diaphragm",
    "options": {
      "A": "relaxes and becomes more dome-shaped.",
      "B": "contracts and flattens.",
      "C": "stops moving completely.",
      "D": "pushes the lungs upwards."
    },
    "answer": "B",
    "explanation": "Diaphragm contraction increases thoracic cavity volume and lowers pressure inside the lungs, drawing air inward.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_261",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Gas Transport: Carbon Dioxide as Bicarbonate Ions",
    "bookQuestionNum": 261,
    "text": "Most carbon dioxide is transported in human blood in the form of",
    "options": {
      "A": "dissolved carbon dioxide only.",
      "B": "bicarbonate ions.",
      "C": "carbon monoxide.",
      "D": "carbon particles."
    },
    "answer": "B",
    "explanation": "Most carbon dioxide entering red blood cells is converted into carbonic acid and then bicarbonate ions, which are transported in the plasma.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_262",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Excretory System: Glomerular Ultrafiltration",
    "bookQuestionNum": 262,
    "text": "Ultrafiltration in the human kidney takes place mainly at the",
    "options": {
      "A": "collecting duct.",
      "B": "glomerulus and Bowman's capsule.",
      "C": "loop of Henle only.",
      "D": "ureter."
    },
    "answer": "B",
    "explanation": "High blood pressure in the glomerulus forces water and small dissolved substances into Bowman's capsule while cells and most large proteins remain in the blood.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_263",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Renal Physiology: Glucose Reabsorption in PCT",
    "bookQuestionNum": 263,
    "text": "Under normal conditions, almost all filtered glucose is reabsorbed mainly in the",
    "options": {
      "A": "proximal convoluted tubule.",
      "B": "renal pelvis.",
      "C": "ureter.",
      "D": "collecting duct."
    },
    "answer": "A",
    "explanation": "The proximal convoluted tubule reabsorbs nearly all filtered glucose through sodium-linked transport mechanisms when blood glucose is within the normal range.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_264",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Renal Physiology: Loop of Henle Countercurrent Multiplier",
    "bookQuestionNum": 264,
    "text": "The loop of Henle is particularly important in",
    "options": {
      "A": "producing bile.",
      "B": "establishing the osmotic gradient in the kidney medulla.",
      "C": "manufacturing red blood cells.",
      "D": "storing urine outside the kidney."
    },
    "answer": "B",
    "explanation": "The loop of Henle helps create a concentration gradient in the medulla, allowing the collecting duct to reabsorb water and concentrate urine.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_265",
    "originalChapter": 6,
    "chapterTitle": "Animal Physiology: Circulation, Respiration & Excretion",
    "topic": "Excretory System: Liver Deamination of Amino Acids",
    "bookQuestionNum": 265,
    "text": "The removal of an amino group from excess amino acids is called",
    "options": {
      "A": "hydrolysis.",
      "B": "deamination.",
      "C": "fermentation.",
      "D": "photosynthesis."
    },
    "answer": "B",
    "explanation": "Deamination occurs mainly in the liver. The amino group is removed, producing ammonia, which is converted into urea for excretion.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_266",
    "originalChapter": 7,
    "chapterTitle": "Animal Nutrition, Digestion & Nervous Coordination",
    "topic": "Digestive System: Alimentary Canal Peristalsis",
    "bookQuestionNum": 266,
    "text": "The wave-like muscular contraction that moves food along the alimentary canal is called",
    "options": {
      "A": "diffusion.",
      "B": "peristalsis.",
      "C": "filtration.",
      "D": "ventilation."
    },
    "answer": "B",
    "explanation": "Coordinated contractions and relaxations of smooth muscles in the gut wall propel food through the digestive tract.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_267",
    "originalChapter": 7,
    "chapterTitle": "Animal Nutrition, Digestion & Nervous Coordination",
    "topic": "Digestive System: Intestinal Villi Lacteals & Fat Absorption",
    "bookQuestionNum": 267,
    "text": "The lacteals in intestinal villi are responsible mainly for absorbing",
    "options": {
      "A": "amino acids.",
      "B": "glucose.",
      "C": "products of fat digestion.",
      "D": "mineral salts only."
    },
    "answer": "C",
    "explanation": "Lacteals are lymphatic capillaries that absorb dietary lipids packaged into chylomicrons by intestinal cells.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_268",
    "originalChapter": 7,
    "chapterTitle": "Animal Nutrition, Digestion & Nervous Coordination",
    "topic": "Digestive Enzymes: Pancreatic Lipase & Triglycerides",
    "bookQuestionNum": 268,
    "text": "Pancreatic lipase acts mainly on",
    "options": {
      "A": "proteins.",
      "B": "triglycerides.",
      "C": "starch.",
      "D": "nucleic acids."
    },
    "answer": "B",
    "explanation": "Pancreatic lipase hydrolyses dietary triglycerides into fatty acids and monoglycerides, which can then be absorbed by intestinal cells.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_269",
    "originalChapter": 7,
    "chapterTitle": "Animal Nutrition, Digestion & Nervous Coordination",
    "topic": "Nervous Coordination: Reflex Arc Neural Pathway",
    "bookQuestionNum": 269,
    "text": "Which sequence correctly represents a simple reflex arc?",
    "options": {
      "A": "Effector → receptor → sensory neuron → brain",
      "B": "Receptor → sensory neuron → central nervous system → motor neuron → effector",
      "C": "Motor neuron → receptor → effector → sensory neuron",
      "D": "Brain → effector → receptor → sensory neuron"
    },
    "answer": "B",
    "explanation": "A receptor detects a stimulus, the sensory neuron carries the impulse to the central nervous system, and a motor neuron carries the response to an effector.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_270",
    "originalChapter": 7,
    "chapterTitle": "Animal Nutrition, Digestion & Nervous Coordination",
    "topic": "Synaptic Transmission: Chemical Synapse & Neurotransmitters",
    "bookQuestionNum": 270,
    "text": "Transmission of an impulse across a typical chemical synapse occurs through the release of",
    "options": {
      "A": "haemoglobin.",
      "B": "neurotransmitters.",
      "C": "bile salts.",
      "D": "insulin only."
    },
    "answer": "B",
    "explanation": "The arrival of an impulse at the presynaptic ending causes neurotransmitters to be released. They cross the synaptic cleft and bind to receptors on the next cell.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "bio_tough_271",
    "originalChapter": 7,
    "chapterTitle": "Animal Nutrition, Digestion & Nervous Coordination",
    "topic": "Sense Organs: Retinal Rods & Dim-Light Vision",
    "bookQuestionNum": 271,
    "text": "Which photoreceptor cells in the retina are most important for vision in dim light?",
    "options": {
      "A": "Cones",
      "B": "Rods",
      "C": "Bipolar cells",
      "D": "Ganglion cells"
    },
    "answer": "B",
    "explanation": "Rods contain the light-sensitive pigment rhodopsin and are highly sensitive to low light, although they do not provide colour vision.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_272",
    "originalChapter": 7,
    "chapterTitle": "Animal Nutrition, Digestion & Nervous Coordination",
    "topic": "Sense Organs: Cochlear Sound Transduction",
    "bookQuestionNum": 272,
    "text": "The cochlea in the human ear is mainly responsible for",
    "options": {
      "A": "maintaining body balance.",
      "B": "converting sound vibrations into nerve impulses.",
      "C": "controlling blood pressure.",
      "D": "regulating body temperature."
    },
    "answer": "B",
    "explanation": "Hair cells in the cochlea detect vibrations and convert mechanical movement into electrical signals that travel through the auditory nerve.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_273",
    "originalChapter": 7,
    "chapterTitle": "Animal Nutrition, Digestion & Nervous Coordination",
    "topic": "Sense Organs: Semicircular Canals & Dynamic Equilibrium",
    "bookQuestionNum": 273,
    "text": "The semicircular canals are mainly concerned with detecting",
    "options": {
      "A": "blood glucose levels.",
      "B": "rotational movements of the head.",
      "C": "sound intensity.",
      "D": "light intensity."
    },
    "answer": "B",
    "explanation": "The semicircular canals detect angular acceleration and contribute to maintaining balance and coordination.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_274",
    "originalChapter": 7,
    "chapterTitle": "Animal Nutrition, Digestion & Nervous Coordination",
    "topic": "Nervous System: Myelin Sheath & Saltatory Conduction",
    "bookQuestionNum": 274,
    "text": "The myelin sheath increases the speed of nerve impulse conduction because it",
    "options": {
      "A": "prevents all electrical activity.",
      "B": "allows impulses to jump between nodes of Ranvier.",
      "C": "destroys the axon membrane.",
      "D": "produces neurotransmitters continuously."
    },
    "answer": "B",
    "explanation": "Myelin insulates much of the axon. In myelinated neurons, action potentials are regenerated at nodes of Ranvier, producing faster saltatory conduction.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_275",
    "originalChapter": 7,
    "chapterTitle": "Animal Nutrition, Digestion & Nervous Coordination",
    "topic": "Endocrine System: Thyroxine & Basal Metabolic Rate",
    "bookQuestionNum": 275,
    "text": "Thyroxine is important because it",
    "options": {
      "A": "reduces metabolic activity to zero.",
      "B": "helps regulate metabolic rate and normal growth.",
      "C": "directly forms red blood cells.",
      "D": "prevents protein synthesis."
    },
    "answer": "B",
    "explanation": "Thyroid hormones influence metabolic activity, growth and development throughout the body.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_276",
    "originalChapter": 8,
    "chapterTitle": "Human Reproduction & Embryonic Development",
    "topic": "Endocrine Control: FSH & Ovarian Follicle Growth",
    "bookQuestionNum": 276,
    "text": "Which hormone stimulates the development of ovarian follicles?",
    "options": {
      "A": "FSH",
      "B": "ADH",
      "C": "Insulin",
      "D": "Thyroxine"
    },
    "answer": "A",
    "explanation": "Follicle-stimulating hormone stimulates the growth and development of ovarian follicles and supports oestrogen production.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_277",
    "originalChapter": 8,
    "chapterTitle": "Human Reproduction & Embryonic Development",
    "topic": "Endocrine Control: LH Surge & Ovulation Trigger",
    "bookQuestionNum": 277,
    "text": "The hormone that normally triggers ovulation is",
    "options": {
      "A": "progesterone.",
      "B": "luteinising hormone.",
      "C": "insulin.",
      "D": "prolactin."
    },
    "answer": "B",
    "explanation": "A surge in luteinising hormone triggers the release of a mature egg from the ovarian follicle.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_278",
    "originalChapter": 8,
    "chapterTitle": "Human Reproduction & Embryonic Development",
    "topic": "Reproduction: Corpus Luteum & Progesterone Secretion",
    "bookQuestionNum": 278,
    "text": "After ovulation, the corpus luteum mainly secretes",
    "options": {
      "A": "progesterone.",
      "B": "adrenaline.",
      "C": "glucagon.",
      "D": "thyroxine."
    },
    "answer": "A",
    "explanation": "Progesterone helps maintain the thickened uterine lining, preparing it for implantation and supporting early pregnancy.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_279",
    "originalChapter": 8,
    "chapterTitle": "Human Reproduction & Embryonic Development",
    "topic": "Male Reproduction: Spermatogenesis in Seminiferous Tubules",
    "bookQuestionNum": 279,
    "text": "Spermatogenesis takes place in the",
    "options": {
      "A": "epididymis.",
      "B": "seminiferous tubules.",
      "C": "prostate gland.",
      "D": "vas deferens."
    },
    "answer": "B",
    "explanation": "The seminiferous tubules in the testes are the sites where sperm cells are produced through meiosis and subsequent maturation.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_280",
    "originalChapter": 8,
    "chapterTitle": "Human Reproduction & Embryonic Development",
    "topic": "Male Reproduction: Epididymal Sperm Maturation",
    "bookQuestionNum": 280,
    "text": "The epididymis is important for",
    "options": {
      "A": "producing urine.",
      "B": "sperm maturation and temporary storage.",
      "C": "secreting insulin.",
      "D": "producing testosterone exclusively."
    },
    "answer": "B",
    "explanation": "Sperm mature and acquire motility as they pass through the epididymis, where they can also be stored temporarily.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_281",
    "originalChapter": 8,
    "chapterTitle": "Human Reproduction & Embryonic Development",
    "topic": "Male Reproduction: Seminal Vesicle Fructose Secretion",
    "bookQuestionNum": 281,
    "text": "The seminal vesicles contribute to semen by secreting a fluid rich in",
    "options": {
      "A": "fructose.",
      "B": "hydrochloric acid.",
      "C": "urea.",
      "D": "bile pigments."
    },
    "answer": "A",
    "explanation": "Fructose in seminal vesicle fluid provides an energy source for sperm movement.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_282",
    "originalChapter": 8,
    "chapterTitle": "Human Reproduction & Embryonic Development",
    "topic": "Embryonic Development: Monozygotic Identical Twins",
    "bookQuestionNum": 282,
    "text": "Identical twins usually develop when",
    "options": {
      "A": "two different eggs are fertilised by two sperm cells.",
      "B": "one fertilised egg separates into two embryos.",
      "C": "two sperm cells fuse with one egg.",
      "D": "an unfertilised egg divides into four embryos."
    },
    "answer": "B",
    "explanation": "Identical twins originate from one zygote that divides into separate embryonic structures. They usually have very similar genetic material.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_283",
    "originalChapter": 8,
    "chapterTitle": "Human Reproduction & Embryonic Development",
    "topic": "Embryonic Development: Amniotic Fluid Shock Absorption",
    "bookQuestionNum": 283,
    "text": "The amniotic fluid surrounding a developing fetus mainly helps to",
    "options": {
      "A": "provide direct oxygen through the lungs.",
      "B": "cushion the fetus against mechanical shocks.",
      "C": "digest fetal proteins.",
      "D": "produce red blood cells in the placenta."
    },
    "answer": "B",
    "explanation": "Amniotic fluid protects the fetus, reduces mechanical injury and allows relatively free movement during development.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_284",
    "originalChapter": 8,
    "chapterTitle": "Human Reproduction & Embryonic Development",
    "topic": "Fetal Circulation: Umbilical Arteries Deoxygenated Blood",
    "bookQuestionNum": 284,
    "text": "The umbilical arteries normally carry",
    "options": {
      "A": "oxygenated blood from the placenta to the fetus.",
      "B": "deoxygenated blood from the fetus to the placenta.",
      "C": "blood from the mother's lungs to the uterus.",
      "D": "urine from the fetus to the placenta."
    },
    "answer": "B",
    "explanation": "The two umbilical arteries carry blood with relatively low oxygen content from the fetus towards the placenta for exchange.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_285",
    "originalChapter": 8,
    "chapterTitle": "Human Reproduction & Embryonic Development",
    "topic": "Fetal Circulation: Umbilical Vein Oxygenated Blood",
    "bookQuestionNum": 285,
    "text": "The umbilical vein carries",
    "options": {
      "A": "oxygenated blood from the placenta to the fetus.",
      "B": "deoxygenated blood from the fetus to the placenta.",
      "C": "urine from the fetal kidneys.",
      "D": "blood from the fetal heart to the lungs."
    },
    "answer": "A",
    "explanation": "The umbilical vein carries oxygen- and nutrient-rich blood from the placenta towards the fetus.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "bio_tough_286",
    "originalChapter": 9,
    "chapterTitle": "Plant Reproduction & Post-Fertilisation",
    "topic": "Plant Reproduction: Pollination Mechanisms",
    "bookQuestionNum": 286,
    "text": "The transfer of pollen grains from the anther to the stigma is called",
    "options": {
      "A": "fertilisation.",
      "B": "pollination.",
      "C": "germination.",
      "D": "transpiration."
    },
    "answer": "B",
    "explanation": "Pollination is the transfer of pollen from the anther to a compatible stigma. Fertilisation occurs later when male and female gametes fuse.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_287",
    "originalChapter": 9,
    "chapterTitle": "Plant Reproduction & Post-Fertilisation",
    "topic": "Floral Morphology: Stigma Receptive Function",
    "bookQuestionNum": 287,
    "text": "The main function of the stigma is to",
    "options": {
      "A": "produce nectar only.",
      "B": "receive pollen grains.",
      "C": "develop into the seed coat.",
      "D": "produce the ovary wall."
    },
    "answer": "B",
    "explanation": "The stigma is the receptive surface of the carpel where compatible pollen grains land and may germinate.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_288",
    "originalChapter": 9,
    "chapterTitle": "Plant Reproduction & Post-Fertilisation",
    "topic": "Plant Reproduction: Pollen Tube Chemotropic Growth",
    "bookQuestionNum": 288,
    "text": "After pollination in a flowering plant, the pollen tube normally grows through the",
    "options": {
      "A": "anther and filament.",
      "B": "stigma and style towards an ovule.",
      "C": "petal and sepal.",
      "D": "leaf blade and stem."
    },
    "answer": "B",
    "explanation": "The pollen tube grows down through the style and enters the ovule, carrying the male gametes towards the embryo sac.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_289",
    "originalChapter": 9,
    "chapterTitle": "Plant Reproduction & Post-Fertilisation",
    "topic": "Plant Embryology: Embryo Sac Egg Cell Gamete",
    "bookQuestionNum": 289,
    "text": "Which structure in the embryo sac of a typical flowering plant contains the female gamete?",
    "options": {
      "A": "Antipodal cell",
      "B": "Egg cell",
      "C": "Polar nucleus",
      "D": "Synergid cell"
    },
    "answer": "B",
    "explanation": "The egg cell is the female gamete in the embryo sac. It fuses with one male gamete during fertilisation to form the diploid zygote.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_290",
    "originalChapter": 9,
    "chapterTitle": "Plant Reproduction & Post-Fertilisation",
    "topic": "Plant Reproduction: Ovary to Fruit & Ovule to Seed",
    "bookQuestionNum": 290,
    "text": "After fertilisation in a typical flowering plant, the ovary and ovules usually develop into",
    "options": {
      "A": "fruit and seeds respectively.",
      "B": "seeds and fruit respectively.",
      "C": "roots and leaves respectively.",
      "D": "pollen grains and anthers respectively."
    },
    "answer": "A",
    "explanation": "The ovary generally develops into the fruit, while the fertilised ovules develop into seeds.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_291",
    "originalChapter": 10,
    "chapterTitle": "Microbiology, Fungi & Biotechnology",
    "topic": "Microbiology: Bacterial Binary Fission",
    "bookQuestionNum": 291,
    "text": "Most bacteria reproduce asexually through",
    "options": {
      "A": "budding only.",
      "B": "binary fission.",
      "C": "meiosis.",
      "D": "fertilisation."
    },
    "answer": "B",
    "explanation": "In binary fission, bacterial DNA is replicated and the cell divides into two daughter cells.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_292",
    "originalChapter": 10,
    "chapterTitle": "Microbiology, Fungi & Biotechnology",
    "topic": "Biotechnology: Plasmids as Cloning Vectors",
    "bookQuestionNum": 292,
    "text": "Plasmids are important in genetic engineering because they",
    "options": {
      "A": "are small DNA molecules that can act as vectors.",
      "B": "are proteins that destroy all bacterial cells.",
      "C": "are structures used only for photosynthesis.",
      "D": "are the main energy source in animals."
    },
    "answer": "A",
    "explanation": "Plasmids are usually small, circular DNA molecules separate from the bacterial chromosome. They can carry inserted genes into bacterial cells.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_293",
    "originalChapter": 10,
    "chapterTitle": "Microbiology, Fungi & Biotechnology",
    "topic": "Mycology: Chitinous Fungal Cell Walls",
    "bookQuestionNum": 293,
    "text": "The cell walls of most fungi contain",
    "options": {
      "A": "cellulose only.",
      "B": "chitin.",
      "C": "lignin.",
      "D": "peptidoglycan."
    },
    "answer": "B",
    "explanation": "Chitin is a major structural component of fungal cell walls. This distinguishes fungi from plants, whose cell walls mainly contain cellulose.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_294",
    "originalChapter": 10,
    "chapterTitle": "Microbiology, Fungi & Biotechnology",
    "topic": "Virology: Viral Structural Differences & Antibiotic Resistance",
    "bookQuestionNum": 294,
    "text": "Antibiotics that target bacterial cell walls are generally ineffective against viruses because viruses",
    "options": {
      "A": "have thicker cell walls than bacteria.",
      "B": "lack bacterial cell-wall structures.",
      "C": "contain large amounts of peptidoglycan.",
      "D": "reproduce through binary fission."
    },
    "answer": "B",
    "explanation": "Viruses are not bacterial cells and have no peptidoglycan cell wall. Antibiotics that target bacterial structures therefore do not work against them.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_295",
    "originalChapter": 10,
    "chapterTitle": "Microbiology, Fungi & Biotechnology",
    "topic": "Virology: Bacteriophage Viral Infection",
    "bookQuestionNum": 295,
    "text": "A bacteriophage is a virus that infects",
    "options": {
      "A": "fungi.",
      "B": "bacteria.",
      "C": "flowering plants only.",
      "D": "human red blood cells only."
    },
    "answer": "B",
    "explanation": "Bacteriophages are viruses that attach to bacterial cells and use their machinery to reproduce.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_296",
    "originalChapter": 11,
    "chapterTitle": "Ecology, Ecosystems & Taxonomy",
    "topic": "Ecology: Decomposers & Saprophytic Nutrient Cycling",
    "bookQuestionNum": 296,
    "text": "Which organisms play a major role in breaking down dead organic matter and recycling nutrients in ecosystems?",
    "options": {
      "A": "Primary consumers only",
      "B": "Decomposers",
      "C": "Producers only",
      "D": "Large predators only"
    },
    "answer": "B",
    "explanation": "Bacteria and fungi break down dead organisms and organic waste, returning nutrients to the environment.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_297",
    "originalChapter": 11,
    "chapterTitle": "Ecology, Ecosystems & Taxonomy",
    "topic": "Ecological Interactions: Remora & Shark Commensalism",
    "bookQuestionNum": 297,
    "text": "The relationship between remora fish and sharks is commonly used as an example of",
    "options": {
      "A": "parasitism.",
      "B": "competition.",
      "C": "commensalism.",
      "D": "predation."
    },
    "answer": "C",
    "explanation": "The remora gains transport and food scraps, while the shark is generally regarded as neither significantly helped nor harmed in this relationship.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_298",
    "originalChapter": 11,
    "chapterTitle": "Ecology, Ecosystems & Taxonomy",
    "topic": "Ecology: Upright Pyramid of Energy & Heat Dissipation",
    "bookQuestionNum": 298,
    "text": "Why is a pyramid of energy always upright?",
    "options": {
      "A": "Producers contain no energy.",
      "B": "Energy is lost as heat during transfers between trophic levels.",
      "C": "Consumers always have larger bodies.",
      "D": "Decomposers do not require energy."
    },
    "answer": "B",
    "explanation": "Organisms use much of the energy they obtain for metabolism and other activities. Only a fraction passes to the next trophic level.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_299",
    "originalChapter": 11,
    "chapterTitle": "Ecology, Ecosystems & Taxonomy",
    "topic": "Ecology: Biomagnification of Organochlorine DDT",
    "bookQuestionNum": 299,
    "text": "When DDT becomes increasingly concentrated in organisms at higher trophic levels, the process is called",
    "options": {
      "A": "nitrogen fixation.",
      "B": "biomagnification.",
      "C": "succession.",
      "D": "transpiration."
    },
    "answer": "B",
    "explanation": "Persistent pollutants such as DDT can accumulate in organisms and become more concentrated at successive trophic levels, often reaching high levels in top predators.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "bio_tough_300",
    "originalChapter": 11,
    "chapterTitle": "Ecology, Ecosystems & Taxonomy",
    "topic": "Taxonomy: Linnaean Binomial Nomenclature",
    "bookQuestionNum": 300,
    "text": "In binomial nomenclature, the scientific name of an organism consists of",
    "options": {
      "A": "family and order.",
      "B": "genus and specific epithet.",
      "C": "class and kingdom.",
      "D": "phylum and species family."
    },
    "answer": "B",
    "explanation": "Binomial nomenclature uses two parts: the genus name, which begins with a capital letter, and the specific epithet, which begins with a lowercase letter. Both are written in italics when typed.",
    "page": 20,
    "hasImage": false
  }
];

export const JAMBIX_BIOLOGY_100_ITEMS = JAMBIX_BIOLOGY_ITEMS;
export const JAMBIX_BIOLOGY_200_ITEMS = JAMBIX_BIOLOGY_ITEMS;
export const JAMBIX_BIOLOGY_300_ITEMS = JAMBIX_BIOLOGY_ITEMS;

export function getBiologyDemystifiedVerifiedQuestions() {
  return JAMBIX_BIOLOGY_ITEMS.map((item, idx) => ({
    id: 940000 + idx + 1,
    year: 2026,
    questionNumber: idx + 1,
    subject: 'Biology',
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
    bookTitle: 'JAMBIX BIOLOGY QUESTION BANK',
    author: 'JAMBIX UTME Preparatory Series',
    textbookRef: item.chapterTitle || '300 Tough Questions Across All Topics',
    hasImage: false,
  }));
}
