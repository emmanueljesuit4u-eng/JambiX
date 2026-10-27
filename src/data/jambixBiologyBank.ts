/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX BIOLOGY QUESTION BANK
 * 100 TOUGH QUESTIONS ACROSS ALL TOPICS (QUESTIONS 1–100)
 * Indexed directly from official syllabus specifications.
 * Total questions: 100
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
    id: "bio_tough_1",
    originalChapter: 1,
    chapterTitle: "Cell Biology & Organization of Life",
    topic: "Cell Biology: Microscopy & Cell Structure",
    bookQuestionNum: 1,
    text: "An object has an actual length of 0.02 mm and appears 50 mm long under a microscope. What is the magnification?",
    options: {
      A: "×250",
      B: "×2,500",
      C: "×25,000",
      D: "×0.0004"
    },
    answer: "B",
    explanation: "Magnification = image size ÷ actual size = 50 ÷ 0.02 = 2,500.",
    page: 1,
    hasImage: false
  },
  {
    id: "bio_tough_2",
    originalChapter: 1,
    chapterTitle: "Cell Biology & Organization of Life",
    topic: "Cell Biology: Cell Organisation",
    bookQuestionNum: 2,
    text: "Which feature distinguishes a prokaryotic cell from a typical eukaryotic cell?",
    options: {
      A: "Presence of cytoplasm",
      B: "Presence of ribosomes",
      C: "Absence of a membrane-bound nucleus",
      D: "Presence of a cell membrane"
    },
    answer: "C",
    explanation: "Prokaryotes lack a membrane-bound nucleus. Their genetic material lies in a region of the cytoplasm called the nucleoid.",
    page: 1,
    hasImage: false
  },
  {
    id: "bio_tough_3",
    originalChapter: 1,
    chapterTitle: "Cell Biology & Organization of Life",
    topic: "Cellular Physiology: Osmosis & Plasmolysis",
    bookQuestionNum: 3,
    text: "A plant cell is placed in a concentrated salt solution. What is most likely to happen?",
    options: {
      A: "Water enters the cell by osmosis.",
      B: "The cell becomes turgid.",
      C: "The cell loses water and becomes plasmolysed.",
      D: "The cell immediately divides."
    },
    answer: "C",
    explanation: "The concentrated solution has a lower water potential than the cell sap, so water leaves the cell by osmosis.",
    page: 1,
    hasImage: false
  },
  {
    id: "bio_tough_4",
    originalChapter: 1,
    chapterTitle: "Cell Biology & Organization of Life",
    topic: "Cellular Physiology: Diffusion & Membrane Transport",
    bookQuestionNum: 4,
    text: "Which process allows oxygen to move from the alveoli into the blood?",
    options: {
      A: "Active transport",
      B: "Osmosis",
      C: "Diffusion",
      D: "Translocation"
    },
    answer: "C",
    explanation: "Oxygen moves down its partial pressure gradient from the alveoli into the blood.",
    page: 1,
    hasImage: false
  },
  {
    id: "bio_tough_5",
    originalChapter: 2,
    chapterTitle: "Biochemical Processes & Enzymes",
    topic: "Biochemical Processes: Enzymes",
    bookQuestionNum: 5,
    text: "An enzyme works best at 37°C. When heated to 80°C, its activity falls sharply and does not return after cooling. What is the most likely explanation?",
    options: {
      A: "The enzyme has been denatured.",
      B: "The enzyme has become a carbohydrate.",
      C: "The substrate has become an enzyme.",
      D: "The enzyme has multiplied."
    },
    answer: "A",
    explanation: "High temperature can alter an enzyme's three-dimensional structure and active site, preventing normal substrate binding.",
    page: 1,
    hasImage: false
  },
  {
    id: "bio_tough_6",
    originalChapter: 2,
    chapterTitle: "Biochemical Processes & Enzymes",
    topic: "Biochemical Processes: Enzymes",
    bookQuestionNum: 6,
    text: "A competitive inhibitor reduces an enzyme's activity. Which change may overcome the inhibition?",
    options: {
      A: "Decreasing substrate concentration",
      B: "Increasing substrate concentration",
      C: "Removing all enzyme molecules",
      D: "Increasing the concentration of a substance that destroys the enzyme"
    },
    answer: "B",
    explanation: "A competitive inhibitor competes with the substrate for the active site. At sufficiently high substrate concentration, substrate binding becomes more likely.",
    page: 1,
    hasImage: false
  },
  {
    id: "bio_tough_7",
    originalChapter: 3,
    chapterTitle: "Plant Nutrition & Transport",
    topic: "Plant Nutrition: Photosynthesis",
    bookQuestionNum: 7,
    text: "Which statement about photosynthesis is correct?",
    options: {
      A: "Carbon dioxide is released during the light-dependent reactions.",
      B: "Oxygen released during photosynthesis comes from water.",
      C: "Glucose is produced by breaking down oxygen.",
      D: "Chlorophyll absorbs no light energy."
    },
    answer: "B",
    explanation: "During the light-dependent reactions, water is split and oxygen is released.",
    page: 1,
    hasImage: false
  },
  {
    id: "bio_tough_8",
    originalChapter: 3,
    chapterTitle: "Plant Nutrition & Transport",
    topic: "Plant Nutrition: Mineral Requirements",
    bookQuestionNum: 8,
    text: "A plant growing in soil deficient in magnesium develops yellow leaves. Which function is directly affected?",
    options: {
      A: "Formation of chlorophyll",
      B: "Production of cellulose only",
      C: "Absorption of oxygen by roots",
      D: "Formation of root hairs only"
    },
    answer: "A",
    explanation: "Magnesium is a component of the chlorophyll molecule, so deficiency can cause chlorosis.",
    page: 1,
    hasImage: false
  },
  {
    id: "bio_tough_9",
    originalChapter: 3,
    chapterTitle: "Plant Nutrition & Transport",
    topic: "Plant Nutrition: Photosynthesis",
    bookQuestionNum: 9,
    text: "A plant is kept in darkness for 48 hours and then one leaf is exposed to sunlight. Afterward, the leaf is tested for starch. Why is the plant first kept in darkness?",
    options: {
      A: "To destroy its chlorophyll",
      B: "To remove stored starch from the leaves",
      C: "To stop water absorption permanently",
      D: "To increase its mineral content"
    },
    answer: "B",
    explanation: "Destarching reduces interference from starch formed before the experiment, allowing the test to show whether photosynthesis produced new starch.",
    page: 1,
    hasImage: false
  },
  {
    id: "bio_tough_10",
    originalChapter: 3,
    chapterTitle: "Plant Nutrition & Transport",
    topic: "Plant Nutrition: Photosynthesis",
    bookQuestionNum: 10,
    text: "A plant receives sufficient water and carbon dioxide but is exposed to light that cannot be absorbed effectively by its photosynthetic pigments. What is the likely result?",
    options: {
      A: "Photosynthesis proceeds at its maximum rate.",
      B: "Photosynthesis is limited by inadequate usable light energy.",
      C: "Root pressure stops immediately.",
      D: "Transpiration becomes the same as photosynthesis."
    },
    answer: "B",
    explanation: "Photosynthesis requires light energy at wavelengths absorbed by photosynthetic pigments.",
    page: 1,
    hasImage: false
  },
  {
    id: "bio_tough_11",
    originalChapter: 3,
    chapterTitle: "Plant Nutrition & Transport",
    topic: "Transport in Plants: Xylem & Phloem",
    bookQuestionNum: 11,
    text: "Which tissue transports water and mineral salts from the roots to the leaves?",
    options: {
      A: "Phloem",
      B: "Xylem",
      C: "Epidermis",
      D: "Cambium only"
    },
    answer: "B",
    explanation: "Xylem conducts water and dissolved mineral ions from the roots through the plant.",
    page: 2,
    hasImage: false
  },
  {
    id: "bio_tough_12",
    originalChapter: 3,
    chapterTitle: "Plant Nutrition & Transport",
    topic: "Transport in Plants: Translocation",
    bookQuestionNum: 12,
    text: "A ring of bark containing phloem is removed from a tree trunk, but the xylem remains intact. Which result is most likely after some time?",
    options: {
      A: "Sugars accumulate above the ring.",
      B: "Water can no longer enter the roots.",
      C: "Transpiration stops immediately.",
      D: "Mineral absorption increases without limit."
    },
    answer: "A",
    explanation: "Removing the phloem interrupts the movement of sugars from leaves to lower parts of the plant, while the intact xylem may continue transporting water.",
    page: 2,
    hasImage: false
  },
  {
    id: "bio_tough_13",
    originalChapter: 3,
    chapterTitle: "Plant Nutrition & Transport",
    topic: "Transport in Plants: Transpiration",
    bookQuestionNum: 13,
    text: "Which environmental condition generally increases the rate of transpiration in a plant, provided other factors remain constant?",
    options: {
      A: "High relative humidity",
      B: "Low air movement",
      C: "High relative humidity and low temperature",
      D: "Low relative humidity"
    },
    answer: "D",
    explanation: "Dry air maintains a steep water-vapour gradient between the leaf and the atmosphere, increasing water loss.",
    page: 2,
    hasImage: false
  },
  {
    id: "bio_tough_14",
    originalChapter: 3,
    chapterTitle: "Plant Nutrition & Transport",
    topic: "Transport in Plants: Transpiration",
    bookQuestionNum: 14,
    text: "Why do stomata tend to close when a plant loses too much water?",
    options: {
      A: "To increase water loss",
      B: "To reduce further water loss",
      C: "To increase carbon dioxide loss",
      D: "To stop photosynthesis permanently"
    },
    answer: "B",
    explanation: "Closing stomata reduces transpiration, although it also limits carbon dioxide entry.",
    page: 2,
    hasImage: false
  },
  {
    id: "bio_tough_15",
    originalChapter: 3,
    chapterTitle: "Plant Nutrition & Transport",
    topic: "Transport Mechanisms",
    bookQuestionNum: 15,
    text: "How do many dissolved nutrients enter a unicellular organism when their concentration is higher outside the cell than inside and the membrane permits their passage?",
    options: {
      A: "Diffusion",
      B: "Transpiration",
      C: "Translocation",
      D: "Egestion"
    },
    answer: "A",
    explanation: "Dissolved substances can move down their concentration gradient by diffusion.",
    page: 2,
    hasImage: false
  },
  {
    id: "bio_tough_16",
    originalChapter: 4,
    chapterTitle: "Animal Nutrition & Digestion",
    topic: "Animal Nutrition: Digestive Enzymes",
    bookQuestionNum: 16,
    text: "Salivary amylase acts on cooked starch. Which product is it mainly expected to form initially?",
    options: {
      A: "Amino acids",
      B: "Fatty acids",
      C: "Maltose and shorter carbohydrates",
      D: "Glycerol only"
    },
    answer: "C",
    explanation: "Amylase breaks starch into smaller carbohydrates, including maltose.",
    page: 2,
    hasImage: false
  },
  {
    id: "bio_tough_17",
    originalChapter: 4,
    chapterTitle: "Animal Nutrition & Digestion",
    topic: "Animal Nutrition: Digestion in Mammals",
    bookQuestionNum: 17,
    text: "Pepsin digests proteins most effectively in the stomach because the stomach provides",
    options: {
      A: "a strongly alkaline medium",
      B: "an acidic medium",
      C: "a medium without water",
      D: "a medium containing bile only"
    },
    answer: "B",
    explanation: "Pepsin functions best at a low pH provided by hydrochloric acid in the stomach.",
    page: 2,
    hasImage: false
  },
  {
    id: "bio_tough_18",
    originalChapter: 4,
    chapterTitle: "Animal Nutrition & Digestion",
    topic: "Animal Nutrition: Digestion in Mammals",
    bookQuestionNum: 18,
    text: "Which statement best describes the role of bile in digestion?",
    options: {
      A: "It contains pepsin that digests proteins.",
      B: "It emulsifies fats and helps neutralise acidic chyme.",
      C: "It converts glucose into glycogen in the intestine.",
      D: "It digests cellulose into amino acids."
    },
    answer: "B",
    explanation: "Bile salts break large fat globules into smaller droplets, increasing the surface area available to lipase. Bile is alkaline but contains no digestive enzymes.",
    page: 2,
    hasImage: false
  },
  {
    id: "bio_tough_19",
    originalChapter: 4,
    chapterTitle: "Animal Nutrition & Digestion",
    topic: "Animal Nutrition: Absorption & Assimilation",
    bookQuestionNum: 19,
    text: "Most absorption of the products of digestion occurs in the small intestine because it has",
    options: {
      A: "a thick wall with no blood supply",
      B: "villi and microvilli that provide a large surface area",
      C: "no muscular movement",
      D: "a lining that prevents nutrient entry"
    },
    answer: "B",
    explanation: "The large surface area, thin lining, and rich blood and lymph supplies support efficient absorption.",
    page: 2,
    hasImage: false
  },
  {
    id: "bio_tough_20",
    originalChapter: 4,
    chapterTitle: "Animal Nutrition & Digestion",
    topic: "Animal Nutrition: Transport to Liver",
    bookQuestionNum: 20,
    text: "After absorption from the small intestine, most glucose enters the blood capillaries of the villi. Which vessel carries this blood toward the liver?",
    options: {
      A: "Pulmonary artery",
      B: "Hepatic portal vein",
      C: "Renal vein",
      D: "Aorta directly from the intestine"
    },
    answer: "B",
    explanation: "The hepatic portal vein carries nutrient-rich blood from the digestive tract to the liver.",
    page: 2,
    hasImage: false
  },
  {
    id: "bio_tough_21",
    originalChapter: 5,
    chapterTitle: "Transport in Animals & Circulation",
    topic: "Transport in Animals: Blood Components",
    bookQuestionNum: 21,
    text: "Which adaptation makes a red blood cell efficient at transporting oxygen?",
    options: {
      A: "A nucleus occupying most of its interior",
      B: "A biconcave shape and haemoglobin",
      C: "A thick cellulose wall",
      D: "Numerous chloroplasts"
    },
    answer: "B",
    explanation: "Haemoglobin binds oxygen, while the biconcave shape provides a large surface area relative to volume.",
    page: 3,
    hasImage: false
  },
  {
    id: "bio_tough_22",
    originalChapter: 5,
    chapterTitle: "Transport in Animals & Circulation",
    topic: "Transport in Animals: Blood Clotting",
    bookQuestionNum: 22,
    text: "Which blood component is mainly responsible for forming a plug at a damaged blood vessel and initiating clotting?",
    options: {
      A: "Red blood cells",
      B: "Platelets",
      C: "Plasma water only",
      D: "Antibodies only"
    },
    answer: "B",
    explanation: "Platelets adhere to damaged vessel surfaces and help activate the clotting process.",
    page: 3,
    hasImage: false
  },
  {
    id: "bio_tough_23",
    originalChapter: 5,
    chapterTitle: "Transport in Animals & Circulation",
    topic: "Transport in Animals: Blood Groups",
    bookQuestionNum: 23,
    text: "In the ABO blood group system, which blood group can generally receive red blood cells from all four ABO groups, assuming compatible Rh status?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "O"
    },
    answer: "C",
    explanation: "People with group AB have neither anti-A nor anti-B antibodies in their plasma, allowing them to receive red cells from any ABO group when other compatibility requirements are met.",
    page: 3,
    hasImage: false
  },
  {
    id: "bio_tough_24",
    originalChapter: 5,
    chapterTitle: "Transport in Animals & Circulation",
    topic: "Transport in Animals: Circulatory System",
    bookQuestionNum: 24,
    text: "Which heart structure prevents blood from flowing backward from the left ventricle into the left atrium?",
    options: {
      A: "Tricuspid valve",
      B: "Bicuspid (mitral) valve",
      C: "Pulmonary semilunar valve",
      D: "Aortic semilunar valve"
    },
    answer: "B",
    explanation: "The mitral valve closes during ventricular contraction to prevent backflow into the left atrium.",
    page: 3,
    hasImage: false
  },
  {
    id: "bio_tough_25",
    originalChapter: 5,
    chapterTitle: "Transport in Animals & Circulation",
    topic: "Transport in Animals: Circulatory System",
    bookQuestionNum: 25,
    text: "What is the main advantage of double circulation in humans?",
    options: {
      A: "Blood never passes through the lungs.",
      B: "Oxygenated and deoxygenated blood can be kept largely separate.",
      C: "Blood flows through the heart only once per complete circuit.",
      D: "The heart does not need valves."
    },
    answer: "B",
    explanation: "The pulmonary and systemic circuits support efficient oxygen delivery while maintaining separation between oxygen-rich and oxygen-poor blood.",
    page: 3,
    hasImage: false
  },
  {
    id: "bio_tough_26",
    originalChapter: 5,
    chapterTitle: "Transport in Animals & Circulation",
    topic: "Transport in Animals: Lymphatic System",
    bookQuestionNum: 26,
    text: "One important function of the lymphatic system is to",
    options: {
      A: "produce bile for fat digestion",
      B: "return excess tissue fluid to the bloodstream",
      C: "pump blood directly from the heart to the lungs",
      D: "produce urine in the bladder"
    },
    answer: "B",
    explanation: "Lymphatic vessels collect excess interstitial fluid and return it to the circulation. Lacteals also absorb many products of fat digestion.",
    page: 3,
    hasImage: false
  },
  {
    id: "bio_tough_27",
    originalChapter: 6,
    chapterTitle: "Excretion & Osmoregulation",
    topic: "Excretion & Homeostasis",
    bookQuestionNum: 27,
    text: "Which process is an example of excretion rather than egestion?",
    options: {
      A: "Removal of undigested fibre in faeces",
      B: "Removal of carbon dioxide produced by cellular respiration",
      C: "Elimination of undigested seeds",
      D: "Passing undigested food through the anus"
    },
    answer: "B",
    explanation: "Excretion removes metabolic waste. Egestion removes undigested material from the digestive tract.",
    page: 3,
    hasImage: false
  },
  {
    id: "bio_tough_28",
    originalChapter: 6,
    chapterTitle: "Excretion & Osmoregulation",
    topic: "Excretion & Osmoregulation: Kidney",
    bookQuestionNum: 28,
    text: "Where does ultrafiltration of blood occur in the human kidney?",
    options: {
      A: "Collecting duct",
      B: "Glomerulus into Bowman's capsule",
      C: "Ureter",
      D: "Urinary bladder"
    },
    answer: "B",
    explanation: "High pressure in the glomerular capillaries forces water and small dissolved substances into Bowman's capsule while most blood cells and large proteins remain in the blood.",
    page: 3,
    hasImage: false
  },
  {
    id: "bio_tough_29",
    originalChapter: 6,
    chapterTitle: "Excretion & Osmoregulation",
    topic: "Excretion & Osmoregulation: Kidney",
    bookQuestionNum: 29,
    text: "When the body is dehydrated, the secretion of antidiuretic hormone (ADH) generally increases. What is its effect on the kidneys?",
    options: {
      A: "It reduces water reabsorption.",
      B: "It increases water reabsorption in the collecting ducts.",
      C: "It prevents all filtration in the glomeruli.",
      D: "It increases water loss in urine."
    },
    answer: "B",
    explanation: "ADH increases the water permeability of parts of the kidney tubules, producing a smaller volume of more concentrated urine.",
    page: 3,
    hasImage: false
  },
  {
    id: "bio_tough_30",
    originalChapter: 6,
    chapterTitle: "Excretion & Osmoregulation",
    topic: "Excretion & Osmoregulation: Kidney Disorders",
    bookQuestionNum: 30,
    text: "Why may a patient with severe kidney failure require dialysis?",
    options: {
      A: "To produce digestive enzymes",
      B: "To remove excess wastes and help regulate fluid and electrolyte balance",
      C: "To manufacture red blood cells directly",
      D: "To replace the function of the lungs entirely"
    },
    answer: "B",
    explanation: "Dialysis uses a selectively permeable membrane and concentration gradients to remove some waste substances and excess fluid from the blood.",
    page: 3,
    hasImage: false
  },
  {
    id: "bio_tough_31",
    originalChapter: 7,
    chapterTitle: "Respiration & Gas Exchange",
    topic: "Respiration: Respiratory Organs",
    bookQuestionNum: 31,
    text: "Which feature of the alveoli makes gaseous exchange efficient?",
    options: {
      A: "Thick walls and a small surface area",
      B: "Thin walls, a large surface area, and a rich capillary supply",
      C: "A dry surface without blood vessels",
      D: "Rigid walls that prevent diffusion"
    },
    answer: "B",
    explanation: "These features shorten diffusion distance and maintain gradients for oxygen and carbon dioxide exchange.",
    page: 4,
    hasImage: false
  },
  {
    id: "bio_tough_32",
    originalChapter: 7,
    chapterTitle: "Respiration & Gas Exchange",
    topic: "Respiration: Fermentation",
    bookQuestionNum: 32,
    text: "During anaerobic respiration in yeast, glucose is converted mainly into",
    options: {
      A: "lactic acid only",
      B: "ethanol and carbon dioxide",
      C: "oxygen and water",
      D: "amino acids and nitrogen"
    },
    answer: "B",
    explanation: "Yeast ferments glucose to ethanol and carbon dioxide when oxygen is unavailable or insufficient for aerobic respiration.",
    page: 4,
    hasImage: false
  },
  {
    id: "bio_tough_33",
    originalChapter: 7,
    chapterTitle: "Respiration & Gas Exchange",
    topic: "Respiration: Aerobic Respiration",
    bookQuestionNum: 33,
    text: "The respiratory quotient (RQ) for the complete oxidation of a carbohydrate such as glucose is approximately",
    options: {
      A: "0.7",
      B: "0.8",
      C: "1.0",
      D: "1.5"
    },
    answer: "C",
    explanation: "For glucose, the volume of carbon dioxide produced equals the volume of oxygen consumed, giving an RQ of 1.",
    page: 4,
    hasImage: false
  },
  {
    id: "bio_tough_34",
    originalChapter: 7,
    chapterTitle: "Respiration & Gas Exchange",
    topic: "Respiration: Breathing Mechanism",
    bookQuestionNum: 34,
    text: "During normal inspiration in humans, the diaphragm",
    options: {
      A: "relaxes and moves upward",
      B: "contracts and flattens",
      C: "remains motionless",
      D: "closes the trachea"
    },
    answer: "B",
    explanation: "This increases the volume of the thoracic cavity, lowers pressure in the lungs, and draws air in.",
    page: 4,
    hasImage: false
  },
  {
    id: "bio_tough_35",
    originalChapter: 8,
    chapterTitle: "Coordination, Control & Homeostasis",
    topic: "Coordination & Control: Nervous System",
    bookQuestionNum: 35,
    text: "Which structure carries impulses away from a neuron's cell body toward another cell or an effector?",
    options: {
      A: "Dendrite only",
      B: "Axon",
      C: "Nucleus",
      D: "Myelin as an independent conducting cell"
    },
    answer: "B",
    explanation: "An axon conducts nerve impulses away from the cell body toward synapses or effectors.",
    page: 4,
    hasImage: false
  },
  {
    id: "bio_tough_36",
    originalChapter: 8,
    chapterTitle: "Coordination, Control & Homeostasis",
    topic: "Coordination & Control: Nervous System",
    bookQuestionNum: 36,
    text: "Transmission across a typical chemical synapse is one-way mainly because",
    options: {
      A: "neurotransmitter is released from the presynaptic side and receptors are on the postsynaptic side",
      B: "the synapse contains no chemicals",
      C: "electrical impulses can never cross cell membranes",
      D: "both neurons lack cell membranes"
    },
    answer: "A",
    explanation: "The arrangement of neurotransmitter release machinery and receptors normally makes chemical transmission directional.",
    page: 4,
    hasImage: false
  },
  {
    id: "bio_tough_37",
    originalChapter: 8,
    chapterTitle: "Coordination, Control & Homeostasis",
    topic: "Coordination & Control: Endocrine System",
    bookQuestionNum: 37,
    text: "Which cells of the pancreas secrete insulin?",
    options: {
      A: "Alpha cells of the islets",
      B: "Beta cells of the islets",
      C: "Red blood cells",
      D: "Kidney epithelial cells"
    },
    answer: "B",
    explanation: "Pancreatic beta cells release insulin, which helps lower blood glucose by promoting uptake and storage.",
    page: 4,
    hasImage: false
  },
  {
    id: "bio_tough_38",
    originalChapter: 8,
    chapterTitle: "Coordination, Control & Homeostasis",
    topic: "Homeostasis: Regulation Mechanisms",
    bookQuestionNum: 38,
    text: "Which statement best describes negative feedback in the regulation of body conditions?",
    options: {
      A: "A change produces a response that increases the original change without limit.",
      B: "A response counteracts a deviation from a regulated level.",
      C: "The body stops responding to all changes.",
      D: "Hormones are always destroyed before they act."
    },
    answer: "B",
    explanation: "Negative feedback helps maintain relatively stable internal conditions by opposing deviations.",
    page: 4,
    hasImage: false
  },
  {
    id: "bio_tough_39",
    originalChapter: 8,
    chapterTitle: "Coordination, Control & Homeostasis",
    topic: "Coordination & Control: Reflex Action",
    bookQuestionNum: 39,
    text: "Which sequence correctly represents a simple reflex arc?",
    options: {
      A: "Effector → sensory neurone → receptor → motor neurone",
      B: "Receptor → sensory neurone → relay neurone → motor neurone → effector",
      C: "Motor neurone → receptor → sensory neurone → effector",
      D: "Receptor → motor neurone → sensory neurone → effector"
    },
    answer: "B",
    explanation: "A stimulus is detected by a receptor, carried to the central nervous system, processed, and sent to an effector.",
    page: 4,
    hasImage: false
  },
  {
    id: "bio_tough_40",
    originalChapter: 8,
    chapterTitle: "Coordination, Control & Homeostasis",
    topic: "Sense Organs: The Eye",
    bookQuestionNum: 40,
    text: "When a person shifts attention from a distant object to a nearby object, what happens during accommodation?",
    options: {
      A: "The lens becomes thinner and flatter.",
      B: "The ciliary muscles contract and the lens becomes thicker.",
      C: "The pupil permanently closes.",
      D: "The retina moves away from the lens."
    },
    answer: "B",
    explanation: "For near vision, reduced tension in the suspensory ligaments allows the lens to become more convex, increasing its refractive power.",
    page: 4,
    hasImage: false
  },
  {
    id: "bio_tough_41",
    originalChapter: 8,
    chapterTitle: "Coordination, Control & Homeostasis",
    topic: "Plant Responses: Plant Hormones & Tropisms",
    bookQuestionNum: 41,
    text: "A young shoot bends toward light because auxin",
    options: {
      A: "accumulates on the illuminated side and stops all cell growth",
      B: "accumulates more on the shaded side, promoting greater elongation there",
      C: "destroys the cells on the shaded side",
      D: "causes equal elongation on both sides in all conditions"
    },
    answer: "B",
    explanation: "Unequal growth causes the shoot to curve toward the light.",
    page: 5,
    hasImage: false
  },
  {
    id: "bio_tough_42",
    originalChapter: 8,
    chapterTitle: "Coordination, Control & Homeostasis",
    topic: "Plant Responses: Tropic & Nastic Movements",
    bookQuestionNum: 42,
    text: "Which statement correctly distinguishes a tropic response from a nastic response?",
    options: {
      A: "A tropic response is directional with respect to the stimulus; a nastic response is not determined by stimulus direction.",
      B: "A tropic response occurs only in animals.",
      C: "A nastic response always involves growth toward light.",
      D: "Both responses are always caused by conscious movement."
    },
    answer: "A",
    explanation: "Tropisms depend on stimulus direction, while nastic movements are generally independent of that direction.",
    page: 5,
    hasImage: false
  },
  {
    id: "bio_tough_43",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Reproduction & Endocrine: Hormones",
    bookQuestionNum: 43,
    text: "Which hormone primarily stimulates the uterus to contract strongly during childbirth?",
    options: {
      A: "Insulin",
      B: "Oxytocin",
      C: "Thyroxine",
      D: "Glucagon"
    },
    answer: "B",
    explanation: "Oxytocin stimulates uterine contractions during labour and supports milk ejection.",
    page: 5,
    hasImage: false
  },
  {
    id: "bio_tough_44",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Reproduction in Plants: Seed Formation",
    bookQuestionNum: 44,
    text: "In flowering plants, which structure develops into the seed after fertilisation?",
    options: {
      A: "Ovary wall",
      B: "Ovule",
      C: "Stigma",
      D: "Petal"
    },
    answer: "B",
    explanation: "After fertilisation, the ovule develops into the seed, while the ovary usually develops into the fruit.",
    page: 5,
    hasImage: false
  },
  {
    id: "bio_tough_45",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Reproduction in Plants: Pollination & Fertilisation",
    bookQuestionNum: 45,
    text: "What is the major reproductive function of the pollen tube?",
    options: {
      A: "To manufacture seeds by photosynthesis",
      B: "To carry male gametes to the embryo sac",
      C: "To produce nectar for pollinators",
      D: "To form the ovary wall"
    },
    answer: "B",
    explanation: "The pollen tube grows through the style and delivers male gametes to the female gametophyte.",
    page: 5,
    hasImage: false
  },
  {
    id: "bio_tough_46",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Reproduction in Plants: Fertilisation",
    bookQuestionNum: 46,
    text: "Double fertilisation in flowering plants produces",
    options: {
      A: "two embryos from every ovule in all cases",
      B: "a diploid zygote and usually a triploid endosperm",
      C: "only a haploid endosperm",
      D: "two pollen grains and no embryo"
    },
    answer: "B",
    explanation: "One male gamete fuses with the egg to form the zygote; the other fuses with the two polar nuclei to form the primary endosperm nucleus, usually triploid.",
    page: 5,
    hasImage: false
  },
  {
    id: "bio_tough_47",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Reproduction in Animals: Human Development",
    bookQuestionNum: 47,
    text: "Which statement about the human placenta is correct?",
    options: {
      A: "Maternal and fetal blood normally mix freely in large quantities.",
      B: "It allows exchange of gases, nutrients, and wastes between maternal and fetal blood.",
      C: "It produces all the oxygen used by the fetus.",
      D: "It prevents every harmful substance from reaching the fetus."
    },
    answer: "B",
    explanation: "The placenta enables exchange across a barrier. Maternal and fetal blood are normally kept in separate circulations, and the barrier does not block every harmful substance.",
    page: 5,
    hasImage: false
  },
  {
    id: "bio_tough_48",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Reproduction in Animals: Menstrual Cycle",
    bookQuestionNum: 48,
    text: "For a typical 28-day menstrual cycle, ovulation occurs approximately on which day?",
    options: {
      A: "Day 1",
      B: "Day 7",
      C: "Day 14",
      D: "Day 28"
    },
    answer: "C",
    explanation: "Ovulation often occurs around the midpoint of a 28-day cycle, although the timing varies between individuals and cycles.",
    page: 5,
    hasImage: false
  },
  {
    id: "bio_tough_49",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Reproduction & Cell Division: Meiosis",
    bookQuestionNum: 49,
    text: "Meiosis during human sperm production is important because it",
    options: {
      A: "doubles the chromosome number of every sperm",
      B: "produces haploid cells with half the usual chromosome number",
      C: "produces genetically identical diploid cells only",
      D: "eliminates DNA from the sperm completely"
    },
    answer: "B",
    explanation: "Meiosis reduces the chromosome number from diploid to haploid so that fertilisation restores the diploid number.",
    page: 5,
    hasImage: false
  },
  {
    id: "bio_tough_50",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Growth & Development: Seed Germination",
    bookQuestionNum: 50,
    text: "Which set of conditions is generally required for a viable seed to germinate?",
    options: {
      A: "Water, oxygen, and a suitable temperature",
      B: "Continuous darkness, salt, and carbon dioxide only",
      C: "Dry air and very high temperature",
      D: "Light alone"
    },
    answer: "A",
    explanation: "Water activates metabolism, oxygen supports respiration, and a suitable temperature permits enzyme activity. Light is not essential for the germination of every species.",
    page: 5,
    hasImage: false
  },
  {
    id: "bio_tough_51",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Reproduction in Plants: Floral Structure",
    bookQuestionNum: 51,
    text: "A plant species produces flowers with both functional stamens and carpels. What is the most accurate conclusion?",
    options: {
      A: "The flowers are necessarily unisexual.",
      B: "The flowers are bisexual.",
      C: "The plant cannot self-pollinate.",
      D: "The plant reproduces only asexually."
    },
    answer: "B",
    explanation: "A bisexual flower contains both male reproductive organs (stamens) and female reproductive organs (carpels).",
    page: 6,
    hasImage: false
  },
  {
    id: "bio_tough_52",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Reproduction in Plants: Pollination",
    bookQuestionNum: 52,
    text: "Which condition must be satisfied for cross-pollination to occur?",
    options: {
      A: "Pollen must reach the stigma of a flower on the same plant only.",
      B: "Pollen must be transferred to a flower on a different plant of the same species.",
      C: "Fertilisation must occur before pollen transfer.",
      D: "The pollen must come from a different species."
    },
    answer: "B",
    explanation: "Cross-pollination involves pollen transfer between different plants of the same species.",
    page: 6,
    hasImage: false
  },
  {
    id: "bio_tough_53",
    originalChapter: 9,
    chapterTitle: "Reproduction & Development",
    topic: "Reproduction: Asexual Reproduction",
    bookQuestionNum: 53,
    text: "Which process produces offspring with the greatest likelihood of being genetically identical to the parent, apart from mutations?",
    options: {
      A: "Sexual reproduction between unrelated parents",
      B: "Binary fission",
      C: "Meiosis followed by random fertilisation",
      D: "Cross-pollination between different varieties"
    },
    answer: "B",
    explanation: "Binary fission is a form of asexual reproduction that normally produces genetically very similar daughter cells.",
    page: 6,
    hasImage: false
  },
  {
    id: "bio_tough_54",
    originalChapter: 10,
    chapterTitle: "Genetics & Heredity",
    topic: "Genetics: Mendelian Inheritance",
    bookQuestionNum: 54,
    text: "In a monohybrid cross between two heterozygous tall pea plants (Tt × Tt), with tallness completely dominant over shortness, what phenotype ratio is expected?",
    options: {
      A: "1 tall : 1 short",
      B: "1 tall : 2 short",
      C: "3 tall : 1 short",
      D: "1 tall : 3 short"
    },
    answer: "C",
    explanation: "The genotypes are TT, Tt, Tt and tt. Three are tall and one is short.",
    page: 6,
    hasImage: false
  },
  {
    id: "bio_tough_55",
    originalChapter: 10,
    chapterTitle: "Genetics & Heredity",
    topic: "Genetics: Mendelian Inheritance",
    bookQuestionNum: 55,
    text: "In the cross Tt × Tt, what is the probability of an offspring being homozygous recessive?",
    options: {
      A: "0",
      B: "1/4",
      C: "1/2",
      D: "3/4"
    },
    answer: "B",
    explanation: "The possible genotypes are TT, Tt, Tt and tt. Only one of the four is tt.",
    page: 6,
    hasImage: false
  },
  {
    id: "bio_tough_56",
    originalChapter: 10,
    chapterTitle: "Genetics & Heredity",
    topic: "Genetics: Test Crosses",
    bookQuestionNum: 56,
    text: "A test cross is performed by crossing an individual with a dominant phenotype but unknown genotype with",
    options: {
      A: "a homozygous dominant individual",
      B: "a homozygous recessive individual",
      C: "another individual of unknown genotype only",
      D: "an individual from a different species"
    },
    answer: "B",
    explanation: "The recessive parent reveals whether the tested individual carries a recessive allele through the offspring's phenotypes.",
    page: 6,
    hasImage: false
  },
  {
    id: "bio_tough_57",
    originalChapter: 10,
    chapterTitle: "Genetics & Heredity",
    topic: "Genetics: Sex-Linked Inheritance",
    bookQuestionNum: 57,
    text: "A recessive allele for a condition is carried on the X chromosome. Why can such a condition be more common in males than in females?",
    options: {
      A: "Males have two X chromosomes.",
      B: "Males have only one X chromosome, so a recessive allele on it can be expressed without a corresponding allele on a second X.",
      C: "Females have no sex chromosomes.",
      D: "All genes on the X chromosome are dominant."
    },
    answer: "B",
    explanation: "A male with one affected X-linked allele will usually express the condition because the Y chromosome generally lacks a corresponding allele at that locus.",
    page: 6,
    hasImage: false
  },
  {
    id: "bio_tough_58",
    originalChapter: 10,
    chapterTitle: "Genetics & Heredity",
    topic: "Genetics: Molecular Genetics",
    bookQuestionNum: 58,
    text: "Which DNA base pairing is correct?",
    options: {
      A: "Adenine with cytosine",
      B: "Adenine with thymine",
      C: "Guanine with thymine",
      D: "Cytosine with adenine only"
    },
    answer: "B",
    explanation: "In DNA, adenine pairs with thymine, while guanine pairs with cytosine.",
    page: 6,
    hasImage: false
  },
  {
    id: "bio_tough_59",
    originalChapter: 10,
    chapterTitle: "Genetics & Heredity",
    topic: "Genetics: Chromosome Numbers",
    bookQuestionNum: 59,
    text: "A diploid organism has 24 chromosomes in each body cell. How many chromosomes are expected in a normal haploid gamete?",
    options: {
      A: "6",
      B: "12",
      C: "24",
      D: "48"
    },
    answer: "B",
    explanation: "A haploid gamete contains half the diploid chromosome number: 24 ÷ 2 = 12.",
    page: 6,
    hasImage: false
  },
  {
    id: "bio_tough_60",
    originalChapter: 10,
    chapterTitle: "Genetics & Heredity",
    topic: "Genetics: Mutation",
    bookQuestionNum: 60,
    text: "Which statement about a gene mutation is correct?",
    options: {
      A: "Every mutation is harmful.",
      B: "A mutation is a change in genetic material and may be harmful, neutral, or beneficial.",
      C: "Mutations occur only in body cells and never in reproductive cells.",
      D: "Mutations always change the chromosome number."
    },
    answer: "B",
    explanation: "Mutations vary in their effects and may involve DNA sequences or larger chromosome changes.",
    page: 6,
    hasImage: false
  },
  {
    id: "bio_tough_61",
    originalChapter: 10,
    chapterTitle: "Genetics & Heredity",
    topic: "Genetics: Variation in Populations",
    bookQuestionNum: 61,
    text: "Which trait is most likely to show continuous variation in a human population?",
    options: {
      A: "ABO blood group",
      B: "Ability to roll the tongue as traditionally classified in simple school examples",
      C: "Adult height",
      D: "Presence or absence of a particular inherited allele"
    },
    answer: "C",
    explanation: "Height varies across a range and is influenced by many genes and environmental factors such as nutrition.",
    page: 7,
    hasImage: false
  },
  {
    id: "bio_tough_62",
    originalChapter: 11,
    chapterTitle: "Evolution & Adaptation",
    topic: "Evolution: Natural Selection",
    bookQuestionNum: 62,
    text: "Which process explains how an advantageous inherited characteristic can become more common in a population over generations?",
    options: {
      A: "Natural selection",
      B: "Egestion",
      C: "Diffusion",
      D: "Osmosis"
    },
    answer: "A",
    explanation: "Individuals with heritable traits that improve reproductive success may leave more offspring, increasing the frequency of those traits.",
    page: 7,
    hasImage: false
  },
  {
    id: "bio_tough_63",
    originalChapter: 11,
    chapterTitle: "Evolution & Adaptation",
    topic: "Evolution: Evidence for Evolution",
    bookQuestionNum: 63,
    text: "Which observation provides evidence for evolution through common ancestry?",
    options: {
      A: "Homologous structures with similar underlying anatomy in different species",
      B: "All organisms having exactly the same external shape",
      C: "Individual organisms changing their genes because they need to",
      D: "Every species living in the same habitat"
    },
    answer: "A",
    explanation: "Homologous structures are consistent with inheritance from a common ancestor, even when their functions differ.",
    page: 7,
    hasImage: false
  },
  {
    id: "bio_tough_64",
    originalChapter: 11,
    chapterTitle: "Evolution & Adaptation",
    topic: "Evolution: Evidence for Evolution",
    bookQuestionNum: 64,
    text: "Why is the fossil record important to the study of evolution?",
    options: {
      A: "It proves that all species appeared at the same time.",
      B: "It provides evidence of past organisms and changes in life through geological time.",
      C: "It shows that organisms never become extinct.",
      D: "It records every organism that has ever lived."
    },
    answer: "B",
    explanation: "Fossils preserve evidence of organisms from different periods, although the record is incomplete.",
    page: 7,
    hasImage: false
  },
  {
    id: "bio_tough_65",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Ecosystem Structure",
    bookQuestionNum: 65,
    text: "A habitat contains grasses, grasshoppers, frogs, snakes, and decomposers. Which statement best describes the ecosystem?",
    options: {
      A: "It includes only the grass.",
      B: "It includes only the animals.",
      C: "It includes the organisms and their interactions with non-living environmental factors.",
      D: "It excludes soil, water, and light."
    },
    answer: "C",
    explanation: "An ecosystem consists of living communities and the abiotic environment with which they interact.",
    page: 7,
    hasImage: false
  },
  {
    id: "bio_tough_66",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Trophic Levels & Energy Flow",
    bookQuestionNum: 66,
    text: "Why does the amount of usable energy generally decrease at successive trophic levels in a food chain?",
    options: {
      A: "Energy is recycled completely into food at every level.",
      B: "Organisms use energy in respiration, and some energy is lost as heat or remains in uneaten material and waste.",
      C: "Producers contain no energy.",
      D: "Consumers convert all food into new body tissue."
    },
    answer: "B",
    explanation: "Only a fraction of the energy entering a trophic level becomes biomass available to the next level.",
    page: 7,
    hasImage: false
  },
  {
    id: "bio_tough_67",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Nutrient Cycling",
    bookQuestionNum: 67,
    text: "What role do decomposers such as many fungi and bacteria play in an ecosystem?",
    options: {
      A: "They permanently remove all minerals from the ecosystem.",
      B: "They break down dead organic material and return nutrients to the environment.",
      C: "They produce sunlight.",
      D: "They prevent all nutrient cycling."
    },
    answer: "B",
    explanation: "Decomposition releases mineral nutrients that can be reused by plants and other organisms.",
    page: 7,
    hasImage: false
  },
  {
    id: "bio_tough_68",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Ecological Pyramids",
    bookQuestionNum: 68,
    text: "Which ecological pyramid cannot be inverted when it represents energy per unit area per unit time?",
    options: {
      A: "Pyramid of numbers",
      B: "Pyramid of biomass",
      C: "Pyramid of energy",
      D: "Pyramid of organism height"
    },
    answer: "C",
    explanation: "Energy is lost between trophic levels, so the energy available per unit area per unit time decreases upward through the chain.",
    page: 7,
    hasImage: false
  },
  {
    id: "bio_tough_69",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Nitrogen Cycle",
    bookQuestionNum: 69,
    text: "Which process converts atmospheric nitrogen into compounds that can enter biological nitrogen cycles?",
    options: {
      A: "Nitrogen fixation",
      B: "Transpiration",
      C: "Photosynthesis alone",
      D: "Egestion"
    },
    answer: "A",
    explanation: "Nitrogen fixation converts atmospheric nitrogen gas into biologically usable nitrogen compounds, commonly through certain bacteria or industrial processes.",
    page: 7,
    hasImage: false
  },
  {
    id: "bio_tough_70",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Nitrogen Cycle",
    bookQuestionNum: 70,
    text: "Which process returns nitrogen from nitrates in soil to atmospheric nitrogen gas?",
    options: {
      A: "Nitrification",
      B: "Denitrification",
      C: "Ammonification",
      D: "Nitrogen fixation"
    },
    answer: "B",
    explanation: "Denitrifying microorganisms reduce nitrate to gaseous nitrogen compounds, returning nitrogen to the atmosphere.",
    page: 7,
    hasImage: false
  },
  {
    id: "bio_tough_71",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Water Cycle",
    bookQuestionNum: 71,
    text: "In the water cycle, the direct loss of water vapour from plant leaves is called",
    options: {
      A: "condensation",
      B: "precipitation",
      C: "transpiration",
      D: "infiltration"
    },
    answer: "C",
    explanation: "Transpiration is the loss of water vapour from aerial parts of plants, mainly through stomata.",
    page: 8,
    hasImage: false
  },
  {
    id: "bio_tough_72",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Population Sampling",
    bookQuestionNum: 72,
    text: "Which technique is most suitable for estimating the density of a population of small plants in a grassland?",
    options: {
      A: "Quadrat sampling",
      B: "Counting only organisms that fly past",
      C: "Measuring blood pressure",
      D: "Using a microscope to count every soil particle"
    },
    answer: "A",
    explanation: "Quadrats allow researchers to sample organisms in defined areas and estimate population density.",
    page: 8,
    hasImage: false
  },
  {
    id: "bio_tough_73",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Population Estimation",
    bookQuestionNum: 73,
    text: "In a mark-release-recapture study, 40 animals are captured and marked first. Later, 50 animals are caught, of which 10 are marked. Estimate the population size using the basic Lincoln index.",
    options: {
      A: "100",
      B: "150",
      C: "200",
      D: "250"
    },
    answer: "C",
    explanation: "Estimated population = (number marked initially × number in second sample) ÷ number of marked recaptures = (40 × 50)/10 = 200, assuming the method's key assumptions are reasonably met.",
    page: 8,
    hasImage: false
  },
  {
    id: "bio_tough_74",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Population Dynamics",
    bookQuestionNum: 74,
    text: "What is the carrying capacity of an environment?",
    options: {
      A: "The smallest possible population in any habitat",
      B: "The largest population that the environment can support sustainably under given conditions",
      C: "The total number of species that have ever existed",
      D: "The number of predators only"
    },
    answer: "B",
    explanation: "Carrying capacity depends on resources, environmental conditions, and other limiting factors.",
    page: 8,
    hasImage: false
  },
  {
    id: "bio_tough_75",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Environmental Pollution",
    bookQuestionNum: 75,
    text: "Fertiliser runoff enters a lake and causes a rapid increase in algae. After the algae die, oxygen levels fall and fish die. This sequence is an example of",
    options: {
      A: "eutrophication",
      B: "biological nitrogen fixation only",
      C: "natural pollination",
      D: "primary succession only"
    },
    answer: "A",
    explanation: "Excess nutrients stimulate algal growth. Decomposition of the dead algae consumes dissolved oxygen, which can kill aquatic organisms.",
    page: 8,
    hasImage: false
  },
  {
    id: "bio_tough_76",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Environmental Pollution",
    bookQuestionNum: 76,
    text: "A pesticide becomes more concentrated in the tissues of organisms at higher trophic levels. This is called",
    options: {
      A: "mutualism",
      B: "biomagnification",
      C: "transpiration",
      D: "osmosis"
    },
    answer: "B",
    explanation: "Persistent substances may accumulate along food chains, reaching higher concentrations in predators than in organisms lower in the chain.",
    page: 8,
    hasImage: false
  },
  {
    id: "bio_tough_77",
    originalChapter: 13,
    chapterTitle: "Classification, Diversity & Microorganisms",
    topic: "Ecology: Plant Adaptations",
    bookQuestionNum: 77,
    text: "Which feature helps many mangrove plants obtain oxygen in waterlogged, oxygen-poor soil?",
    options: {
      A: "Pneumatophores",
      B: "Underground flowers only",
      C: "A complete absence of roots",
      D: "Chloroplasts in every root cell"
    },
    answer: "A",
    explanation: "These specialised aerial roots allow gas exchange in waterlogged habitats.",
    page: 8,
    hasImage: false
  },
  {
    id: "bio_tough_78",
    originalChapter: 13,
    chapterTitle: "Classification, Diversity & Microorganisms",
    topic: "Ecology: Plant Adaptations",
    bookQuestionNum: 78,
    text: "Which adaptation is most useful to a plant living in a very dry habitat?",
    options: {
      A: "Broad, thin leaves with many exposed stomata",
      B: "A thick cuticle and reduced leaf area",
      C: "Permanently open stomata regardless of water status",
      D: "Roots that cannot absorb water"
    },
    answer: "B",
    explanation: "These adaptations reduce water loss. Other xerophytic adaptations include sunken stomata and water-storage tissues.",
    page: 8,
    hasImage: false
  },
  {
    id: "bio_tough_79",
    originalChapter: 13,
    chapterTitle: "Classification, Diversity & Microorganisms",
    topic: "Classification: Taxonomy & Systematics",
    bookQuestionNum: 79,
    text: "In binomial nomenclature, the scientific name of an organism consists of",
    options: {
      A: "its family and order only",
      B: "its genus name followed by its specific epithet",
      C: "its kingdom and phylum only",
      D: "two unrelated common names"
    },
    answer: "B",
    explanation: "A binomial scientific name has two parts, such as Homo sapiens.",
    page: 8,
    hasImage: false
  },
  {
    id: "bio_tough_80",
    originalChapter: 13,
    chapterTitle: "Classification, Diversity & Microorganisms",
    topic: "Classification: Arthropods (Insects)",
    bookQuestionNum: 80,
    text: "Which combination is characteristic of insects?",
    options: {
      A: "Four pairs of legs and two body regions",
      B: "Three pairs of legs and three main body regions",
      C: "Five pairs of legs and gills in every adult",
      D: "Two pairs of antennae and eight legs"
    },
    answer: "B",
    explanation: "Insects typically have a head, thorax, and abdomen, three pairs of thoracic legs, and one pair of antennae.",
    page: 8,
    hasImage: false
  },
  {
    id: "bio_tough_81",
    originalChapter: 13,
    chapterTitle: "Classification, Diversity & Microorganisms",
    topic: "Classification: Vertebrates (Amphibians)",
    bookQuestionNum: 81,
    text: "Which feature is characteristic of adult amphibians such as frogs?",
    options: {
      A: "Dry feathers and a beak",
      B: "Moist skin and an ectothermic mode of life",
      C: "Mammary glands and hair",
      D: "Six jointed legs"
    },
    answer: "B",
    explanation: "Many adult amphibians have moist skin that can aid gas exchange, and their body temperature depends substantially on environmental conditions.",
    page: 9,
    hasImage: false
  },
  {
    id: "bio_tough_82",
    originalChapter: 13,
    chapterTitle: "Classification, Diversity & Microorganisms",
    topic: "Classification: Vertebrates (Birds)",
    bookQuestionNum: 82,
    text: "Which vertebrate group is typically characterised by feathers and forelimbs modified into wings?",
    options: {
      A: "Mammals",
      B: "Birds",
      C: "Amphibians",
      D: "Cartilaginous fishes"
    },
    answer: "B",
    explanation: "Feathers are a defining feature of birds, and their forelimbs are modified into wings.",
    page: 9,
    hasImage: false
  },
  {
    id: "bio_tough_83",
    originalChapter: 13,
    chapterTitle: "Classification, Diversity & Microorganisms",
    topic: "Microorganisms: Viruses",
    bookQuestionNum: 83,
    text: "Which statement about viruses is correct?",
    options: {
      A: "They carry out independent cellular respiration.",
      B: "They are acellular and replicate only inside suitable host cells.",
      C: "They all contain both DNA and RNA as their genetic material.",
      D: "They reproduce by binary fission like bacteria."
    },
    answer: "B",
    explanation: "Viruses lack independent cellular machinery for reproduction and use host-cell resources to replicate. A virus typically has DNA or RNA as its genome.",
    page: 9,
    hasImage: false
  },
  {
    id: "bio_tough_84",
    originalChapter: 13,
    chapterTitle: "Classification, Diversity & Microorganisms",
    topic: "Microorganisms: Bacteria",
    bookQuestionNum: 84,
    text: "Most bacteria reproduce asexually by",
    options: {
      A: "meiosis",
      B: "binary fission",
      C: "pollination",
      D: "budding of flowers"
    },
    answer: "B",
    explanation: "A bacterial cell duplicates its DNA and divides into two daughter cells.",
    page: 9,
    hasImage: false
  },
  {
    id: "bio_tough_85",
    originalChapter: 14,
    chapterTitle: "Applied Biology, Diseases & Immunity",
    topic: "Microorganisms & Disease: Antibiotics",
    bookQuestionNum: 85,
    text: "Why are antibiotics ineffective against viral infections such as influenza?",
    options: {
      A: "Viruses are too large for antibiotics to reach.",
      B: "Viruses lack the bacterial cellular structures and processes targeted by antibiotics.",
      C: "Viruses contain no genetic material.",
      D: "Antibiotics always increase viral reproduction."
    },
    answer: "B",
    explanation: "Many antibiotics target bacterial processes such as cell-wall synthesis or bacterial ribosomes, which viruses do not possess.",
    page: 9,
    hasImage: false
  },
  {
    id: "bio_tough_86",
    originalChapter: 14,
    chapterTitle: "Applied Biology, Diseases & Immunity",
    topic: "Applied Biology: Disease Vectors",
    bookQuestionNum: 86,
    text: "Which organism transmits the malaria parasite to humans?",
    options: {
      A: "Male Anopheles mosquito",
      B: "Female Anopheles mosquito",
      C: "Housefly",
      D: "Tsetse fly"
    },
    answer: "B",
    explanation: "Infected female Anopheles mosquitoes transmit Plasmodium parasites during blood-feeding.",
    page: 9,
    hasImage: false
  },
  {
    id: "bio_tough_87",
    originalChapter: 14,
    chapterTitle: "Applied Biology, Diseases & Immunity",
    topic: "Applied Biology: Infectious Diseases",
    bookQuestionNum: 87,
    text: "Which route can transmit HIV?",
    options: {
      A: "Sharing an ordinary classroom with an infected person",
      B: "Handshaking",
      C: "Exposure to infected blood or certain other infectious body fluids",
      D: "Sharing a seat on a bus"
    },
    answer: "C",
    explanation: "HIV transmission can occur through specified body fluids, including infected blood, sexual fluids, and breast milk. It is not transmitted through casual contact.",
    page: 9,
    hasImage: false
  },
  {
    id: "bio_tough_88",
    originalChapter: 14,
    chapterTitle: "Applied Biology, Diseases & Immunity",
    topic: "Applied Biology: Immunity & Vaccination",
    bookQuestionNum: 88,
    text: "How does vaccination commonly provide protection against a specific infectious disease?",
    options: {
      A: "By destroying every microorganism in the environment",
      B: "By stimulating an immune response that can form immunological memory",
      C: "By replacing the body's white blood cells",
      D: "By permanently raising body temperature"
    },
    answer: "B",
    explanation: "Vaccination exposes the immune system to an antigen or instructions for producing it, helping the body respond more quickly during a later exposure.",
    page: 9,
    hasImage: false
  },
  {
    id: "bio_tough_89",
    originalChapter: 14,
    chapterTitle: "Applied Biology, Diseases & Immunity",
    topic: "Applied Biology: Types of Immunity",
    bookQuestionNum: 89,
    text: "Immunity developed after a person's own immune system responds to a vaccine is classified as",
    options: {
      A: "natural passive immunity",
      B: "artificial active immunity",
      C: "artificial passive immunity",
      D: "innate immunity only"
    },
    answer: "B",
    explanation: "It is artificial because vaccination induces it, and active because the person's own immune system produces the response and memory.",
    page: 9,
    hasImage: false
  },
  {
    id: "bio_tough_90",
    originalChapter: 14,
    chapterTitle: "Applied Biology, Diseases & Immunity",
    topic: "Applied Biology: Disease Vectors",
    bookQuestionNum: 90,
    text: "Which insect transmits the parasite responsible for African sleeping sickness?",
    options: {
      A: "Female Anopheles mosquito",
      B: "Tsetse fly",
      C: "Housefly",
      D: "Flea"
    },
    answer: "B",
    explanation: "Infected tsetse flies transmit Trypanosoma parasites, which cause African trypanosomiasis.",
    page: 9,
    hasImage: false
  },
  {
    id: "bio_tough_91",
    originalChapter: 15,
    chapterTitle: "Biotechnology & Ecological Interactions",
    topic: "Ecology: Ecological Relationships",
    bookQuestionNum: 91,
    text: "A fungus grows on a living tree and obtains nutrients while damaging the tree. This relationship is best described as",
    options: {
      A: "mutualism",
      B: "parasitism",
      C: "commensalism",
      D: "competition between two non-living objects"
    },
    answer: "B",
    explanation: "In parasitism, one organism benefits while its host is harmed.",
    page: 10,
    hasImage: false
  },
  {
    id: "bio_tough_92",
    originalChapter: 15,
    chapterTitle: "Biotechnology & Ecological Interactions",
    topic: "Ecology: Ecological Relationships",
    bookQuestionNum: 92,
    text: "Bees obtain nectar from flowers while transferring pollen between flowers of the same species. This interaction can be described as",
    options: {
      A: "mutualism",
      B: "parasitism",
      C: "amensalism",
      D: "predation only"
    },
    answer: "A",
    explanation: "Bees gain food, while flowering plants may gain a pollination service that improves reproductive success.",
    page: 10,
    hasImage: false
  },
  {
    id: "bio_tough_93",
    originalChapter: 15,
    chapterTitle: "Biotechnology & Ecological Interactions",
    topic: "Ecology: Biodiversity & Conservation",
    bookQuestionNum: 93,
    text: "Why can high biodiversity improve the resilience of some ecosystems to environmental changes?",
    options: {
      A: "Every species always performs exactly the same ecological role.",
      B: "Different species can contribute different functions, so some processes may continue when conditions change.",
      C: "Biodiversity prevents all environmental disturbances.",
      D: "High biodiversity guarantees that no species will become extinct."
    },
    answer: "B",
    explanation: "Diversity can provide functional variety and partial redundancy, which may help some ecosystems withstand or recover from disturbance.",
    page: 10,
    hasImage: false
  },
  {
    id: "bio_tough_94",
    originalChapter: 11,
    chapterTitle: "Evolution & Adaptation",
    topic: "Evolution: Comparative Anatomy",
    bookQuestionNum: 94,
    text: "Which example best illustrates a homologous structure?",
    options: {
      A: "The wing of a butterfly and the wing of a bird considered solely as wings for flight",
      B: "The forelimbs of a human, a bat, and a whale with a similar underlying bone pattern",
      C: "The eye of an insect and the eye of a mammal as identical structures",
      D: "The leaf of a plant and the leg of a mammal"
    },
    answer: "B",
    explanation: "These forelimbs share a basic anatomical plan inherited from a common ancestor, although their functions differ.",
    page: 10,
    hasImage: false
  },
  {
    id: "bio_tough_95",
    originalChapter: 15,
    chapterTitle: "Biotechnology & Ecological Interactions",
    topic: "Applied Biology: Biotechnology & Fermentation",
    bookQuestionNum: 95,
    text: "Yeast is used in bread-making because carbon dioxide produced during fermentation",
    options: {
      A: "dissolves the flour completely",
      B: "forms gas bubbles that expand the dough",
      C: "converts starch directly into protein",
      D: "prevents every enzyme from acting"
    },
    answer: "B",
    explanation: "Carbon dioxide accumulates in the dough's structure, causing it to rise during fermentation and baking.",
    page: 10,
    hasImage: false
  },
  {
    id: "bio_tough_96",
    originalChapter: 15,
    chapterTitle: "Biotechnology & Ecological Interactions",
    topic: "Applied Biology: Genetic Engineering",
    bookQuestionNum: 96,
    text: "Genetic engineering can be used to make bacteria produce a human protein. Which step is important in this process?",
    options: {
      A: "Introducing suitable genetic instructions into the bacterial system",
      B: "Removing every ribosome from the bacteria",
      C: "Preventing all DNA replication",
      D: "Converting all bacterial cells into red blood cells"
    },
    answer: "A",
    explanation: "A gene encoding the desired protein can be inserted into an expression system so that the bacteria manufacture the protein under suitable conditions.",
    page: 10,
    hasImage: false
  },
  {
    id: "bio_tough_97",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Nutrient Cycling",
    bookQuestionNum: 97,
    text: "Which statement about decomposers and soil fertility is correct?",
    options: {
      A: "Decomposers permanently destroy all mineral nutrients.",
      B: "Decomposers help release nutrients from dead organisms and waste.",
      C: "Decomposers convert all minerals directly into sunlight.",
      D: "Decomposers prevent organic material from breaking down."
    },
    answer: "B",
    explanation: "Their activity returns nutrients to the environment, where plants can absorb available mineral forms.",
    page: 10,
    hasImage: false
  },
  {
    id: "bio_tough_98",
    originalChapter: 15,
    chapterTitle: "Biotechnology & Ecological Interactions",
    topic: "Applied Biology: Agricultural Biology",
    bookQuestionNum: 98,
    text: "A farmer grows legumes in a field and incorporates the plant residues into the soil. Why can this help improve soil nitrogen status?",
    options: {
      A: "Legumes absorb nitrogen gas directly through their leaves in large amounts.",
      B: "Symbiotic nitrogen-fixing bacteria in legume root nodules can convert atmospheric nitrogen into usable nitrogen compounds.",
      C: "Legumes stop all forms of decomposition.",
      D: "Legumes convert every soil mineral into oxygen."
    },
    answer: "B",
    explanation: "Rhizobium and related bacteria fix nitrogen in root nodules. When residues decompose, some of that nitrogen can become available in the soil.",
    page: 10,
    hasImage: false
  },
  {
    id: "bio_tough_99",
    originalChapter: 12,
    chapterTitle: "Ecology & Ecosystems",
    topic: "Ecology: Limiting Factors",
    bookQuestionNum: 99,
    text: "Which factor is most likely to limit the growth of a plant population in a habitat where light is plentiful but the soil lacks an essential mineral nutrient?",
    options: {
      A: "The availability of that mineral nutrient",
      B: "The colour of the nearby animals",
      C: "The number of stars visible at night",
      D: "The presence of oxygen in the atmosphere alone"
    },
    answer: "A",
    explanation: "Growth can be limited by an essential resource that is in short supply, even when other resources are plentiful.",
    page: 10,
    hasImage: false
  },
  {
    id: "bio_tough_100",
    originalChapter: 11,
    chapterTitle: "Evolution & Adaptation",
    topic: "Evolution: Natural Selection in Action",
    bookQuestionNum: 100,
    text: "A population of insects contains individuals with different levels of resistance to an insecticide. After repeated use of the insecticide, resistant individuals make up a greater proportion of the population. Which explanation is most accurate?",
    options: {
      A: "Every insect deliberately develops resistance because it needs it.",
      B: "The insecticide selects for individuals that already possess heritable resistance, allowing them to contribute more offspring.",
      C: "The insecticide changes every insect into a different species immediately.",
      D: "Resistance develops only because insects stop reproducing."
    },
    answer: "B",
    explanation: "Resistant individuals are more likely to survive treatment and reproduce, increasing the frequency of resistance in later generations.",
    page: 10,
    hasImage: false
  }
];
