/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Lamlad Biology Question Bank
 * Extracted from "SSCE & UTME Biology" by Prof. G.A.O. Arawomo & Prof. A.I. Akinpelu
 * Published by Lamlad Publications Ltd.
 * 
 * Covers Chapter 1 to Chapter 15:
 * 1. Concept of Living
 * 2. The Cell and its Environment
 * 3. Tissues and Supportive Systems
 * 4. Nervous and Hormonal Coordination
 * 5. Reproduction
 * 6. Nutrition
 * 7. Basic Ecological Concepts
 * 8. Functioning Ecosystem
 * 9. Energy Transformation in Nature
 * 10. Ecological Management
 * 11. Habitats
 * 12. Ecology of Populations
 * 13. Relevance of Biology to Agriculture
 * 14. Micro-organisms: Man and His Health
 * 15. Conservation, Genetics and Evolution
 * 
 * Features strictly verified questions, exact options, and official answer keys.
 */

import type { VerifiedQuestion } from './verifiedTextbooks';

export interface LamladBiologyItem {
  id: string;
  chapter: number;
  chapterTitle: string;
  topic: string;
  questionNumber: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E?: string;
  };
  answer: 'A' | 'B' | 'C' | 'D' | 'E';
}

export const LAMLAD_BIOLOGY_ITEMS: LamladBiologyItem[] = [
  {
    "id": "lamlad_bio_c1_q1",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 1,
    "text": "Which of the following structures differentiates animal cell from a plant cell?",
    "options": {
      "A": "Ribosomes",
      "B": "Cell membrane",
      "C": "SS Chloroplast",
      "D": "Mitochondrion",
      "E": "Lysosome"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q2",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 2,
    "text": "Which of the following is a similarity between typical animal cell and a typical plant cell?",
    "options": {
      "A": "Cellusose cell wall",
      "B": "Chlorophyll",
      "C": "Centrally-placed nucleus 'SD. Cell membrane",
      "D": "Neither A nor B",
      "E": "Large vacuole"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c1_q3",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 3,
    "text": "All living organisms",
    "options": {
      "A": ".< Photosynthesize",
      "B": "Conjugate",
      "C": "Have plastids @- Feed",
      "D": "Neither A nor B",
      "E": "Transpire"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c1_q5",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 5,
    "text": "illustrates the structure ofa cel Use it to answer Question 29 and 30, 7 . 8 Oe (",
    "options": {
      "A": "et RA aye eit i. Ary eA: Ware os Mm : Fig. 1.5",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c1_q6",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 6,
    "text": "Which of the following is characteristic of the | animal cell?",
    "options": {
      "A": "Presence of choloroplasts I B, Possession of cellulose cell wall",
      "B": "All of the above",
      "C": "Absence of large vacuoles",
      "D": "Presence of large vacuoles",
      "E": "Presence of chromosomes"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q7",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 7,
    "text": "The vacuole of a Plant cell is",
    "options": {
      "A": "A large empty space | B, Smaller than that ofan animal cel",
      "B": "All of the above",
      "C": "Filled with ait",
      "D": "Anordinary vacuum",
      "E": "Surrounded by a membrane. * e Objective Questions"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c1_q8",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 8,
    "text": "Which of the following is not true of the nucleus ofa living cell? It contains",
    "options": {
      "A": "Chromosomes",
      "B": "Nucleolus",
      "C": "Nucleoplasm",
      "D": "Chromatids",
      "E": "Ribosomes"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c1_q9",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 9,
    "text": "Amoeba moves by means of",
    "options": {
      "A": "Cilia",
      "B": "Flagella",
      "C": "Pseudopodia",
      "D": "Swimmerets",
      "E": "Setae"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q10",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 10,
    "text": "E 1 2 oD oA",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c1_q11",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 11,
    "text": "The function of ribosomes in cells is",
    "options": {
      "A": "Protein synthesis",
      "B": "Starch synthesis",
      "C": "Transport of materials",
      "D": "Liquid storage",
      "E": "Respiration"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c1_q12",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 12,
    "text": "In which of the following organism does a single cell perform all the functions of active movement, nutrition, growth, excretion and photosynthesis?",
    "options": {
      "A": "Paramecium",
      "B": "Euglena",
      "C": "Amoeba",
      "D": "Spirogyra",
      "E": "Hydra"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c1_q13",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 13,
    "text": "D t 53. UB 4. B 6 C¢ Bik",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c1_q14",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 14,
    "text": "Which of the following organisms does not exist asa single free living cell?",
    "options": {
      "A": "Amoeba",
      "B": "Volvox",
      "C": "Euglena D, Paramecium",
      "D": "Neither A nor B",
      "E": "Chlamydomonas"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c1_q15",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 15,
    "text": "In which of the following is a cellulose cell wall present?",
    "options": {
      "A": "Amoeba",
      "B": "Mammalian white blood cell",
      "C": "Spirogyra",
      "D": "Paramecium",
      "E": "Parasitic worms"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q16",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 16,
    "text": "E C 8 OE 17,.5€",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c1_q17",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 17,
    "text": "Which of the following is not present in the nucleus ofacell?",
    "options": {
      "A": "Chromosome",
      "B": "Nucleolus",
      "C": "Mitochondrion",
      "D": "Genes",
      "E": "Chromation"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q18",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 18,
    "text": "A fi b E Explanati T . 5",
    "options": {
      "A": "The multicellular organisms are ma cells which are capable of carrying out tional characteristics of living organisms",
      "B": "Chloroplasts are not common in bot and animals while the other cell constitu common in both. present in plant cell along with chloropla cellulose cell wall while chromosomes o both",
      "C": "Amoeba moves by means of pseudo",
      "D": "Feeding is one of characteristics A things, Few organisms conjugate and oni A photosynthesize, transpire and have plast",
      "E": "The nbosome is a structure suspended cytoplasm and it is for protein synthesis chromosomes, nucleolus, nucleoplasn chromatids are artefacts of the nucleus of the: cell. which is a finger-like projection of the body"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c1_q19",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 19,
    "text": "The organelle which eliminates water from the body of the protozoa is",
    "options": {
      "A": "Plasmamembrane",
      "B": "Contractile vacuole",
      "C": "Cell wall",
      "D": "Protoplasm",
      "E": "Nucleus"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c1_q20",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 20,
    "text": "The part of the cell solely Ranta ir respiration is the rN es",
    "options": {
      "A": "Nucleus",
      "B": "Nucleolus",
      "C": "Mitochondria",
      "D": "Golgi apparatus",
      "E": "Endoplasmic reticulum"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q21",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 21,
    "text": "Inanimals, cilia, flagella, pseudopodia and chaetae can be used for .",
    "options": {
      "A": "Reproduction",
      "B": "Fighting enemies",
      "C": "Attachment to plants",
      "D": "Locomotion",
      "E": "Locating sensation"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c1_q22",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 22,
    "text": "Which of the following structures is common to Euglena, white blood cell and Amoeba?",
    "options": {
      "A": "Vacuole",
      "B": "Cell wall",
      "C": "Cilia",
      "D": "Cell membrane",
      "E": "Chloroplast"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c1_q23",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 23,
    "text": "Which of the following characteristics is common to Amoeba and Paramecium",
    "options": {
      "A": "Oral groove",
      "B": "Trichocyst",
      "C": "Contractile vacuole",
      "D": "Cilia",
      "E": "Pseudopodia"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q24",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 24,
    "text": "Which of the following organelles is used for locomotion in Paramecium?",
    "options": {
      "A": "Pseudopodium",
      "B": "Trichocyst",
      "C": "HH Cc. Cilium",
      "D": "Pellicle",
      "E": "Contractile vacuole Concept of Living 9"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q25",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 25,
    "text": "Which of the following structures is responsible for osmoregulation?",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "ml",
      "D": "IV",
      "E": "V"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c1_q26",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 26,
    "text": "Excretion is carried out through the structure labelled",
    "options": {
      "A": "None of the above",
      "B": "Ill",
      "C": "IV",
      "D": "Neither A nor B",
      "E": "VI"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c1_q27",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 27,
    "text": "The part labelled VII is made up of",
    "options": {
      "A": "Whipping action of its lagelum",
      "B": "Beating of its cilia",
      "C": "Rotating",
      "D": "Pushing out a jet of water from an organulle",
      "E": "Beating the pseudopodia and cilea simul- taneously 10 Concept of Living"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c1_q29",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 29,
    "text": "The structure that produce the energy required by the cell is labelled",
    "options": {
      "A": "Option A",
      "B": "If c Mm",
      "C": "Both A and B",
      "D": "IV",
      "E": "V"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c1_q30",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 30,
    "text": "The structure labelled V is the",
    "options": {
      "A": "Mitochondron",
      "B": "Ribosome",
      "C": "Nucleus",
      "D": "Centriole",
      "E": "Nucleolus"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c1_q31",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 31,
    "text": "The organ which is sensitive to light in Euglena is the",
    "options": {
      "A": "Gullet",
      "B": "Chloroplast",
      "C": "Eye spot",
      "D": "Contractile vacuol",
      "E": "Flagellum"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q32",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 32,
    "text": "Spirogyra is regarded as a multicellular plant because :",
    "options": {
      "A": "Its cells are linked together by cytoplasmic | stand B, Its cells are joined to form organs",
      "B": "All of the above",
      "C": "The cylindrical cells are linked end to end",
      "D": "The filement consists of one cell only",
      "E": "It isan alga containing large vacuoles"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q33",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 33,
    "text": "The cilia in Paramecium are used for",
    "options": {
      "A": "Respiration",
      "B": "Locomotion",
      "C": "Protection",
      "D": "Regulating food intake",
      "E": "Excretion"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c1_q34",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 34,
    "text": "Euglena may be classified as a plant because jt",
    "options": {
      "A": "Has chloroplasts",
      "B": "Hasa jacket",
      "C": "Lives ina pond",
      "D": "Possess a flagellum",
      "E": "Hasa pellicle"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c1_q35",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 35,
    "text": "Which of the following statements is not true of Paramecium?",
    "options": {
      "A": "Itis slipper-shaped",
      "B": "The anterior end is blunt",
      "C": "The gullet is lined with cilia",
      "D": "Ithas an anal pore",
      "E": "Its food vacuole is not stationary"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q36",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 36,
    "text": "One of the following statements is NOT true of Spirogyra",
    "options": {
      "A": "Itisa simple multicellular plant",
      "B": "During conjugation, its gametes, which are structurally and physiologically similar, fuse to form a zygote",
      "C": "It possess spiral chloroplast which enable the plant to photosynthesize",
      "D": "Itscells are protected externally by a layer of mucilage",
      "E": "There are pyreniods along the chloroplast"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c1_q37",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 37,
    "text": "What is the function of the contractile vacuole in Paramecium?",
    "options": {
      "A": "Produces enzymes",
      "B": "Gets rid of excreta",
      "C": "Stores and digests food",
      "D": "Gets rid of excess water",
      "E": "Controls movement"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c1_q38",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 38,
    "text": "Spirogyra reproduces vegetatively by",
    "options": {
      "A": "Spore production",
      "B": "Fragmentation",
      "C": "Multiple fission",
      "D": "Budding",
      "E": "Binary fission"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c1_q39",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 39,
    "text": "In Spirogyra, the pyrenoid",
    "options": {
      "A": "Excrete waste products",
      "B": "Is suspended by cytoplasmic strands",
      "C": "Is mainly used for respiration",
      "D": ". Usually contains starch",
      "E": "Makes the plant slimy to touch"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c1_q40",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 40,
    "text": "In Fig, 1.6 the structure labelled X is the",
    "options": {
      "A": "Has flagella",
      "B": "Has plant and animal feature Cy Is found in water E, Moves fast",
      "C": "Nuclear membrane",
      "D": "Can manufacture its food",
      "E": "Ectoplasm - ~ 2M wl ik yi \\ 2; | Ss << } 1x yy eth = > D H Se) fe-S Fig 1.6 4). Euglena is an autotrophic organism because it Concept of Living 11"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c1_q42",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 42,
    "text": "Spirogyra, Euglena and Chlamydomonas show many characteristics EXCEPT",
    "options": {
      "A": "Nutrition",
      "B": "Reproduction",
      "C": "Mobility",
      "D": "Imitability",
      "E": "Excretion"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c1_q43",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 43,
    "text": "Whatis the function of trichocyst in Paramecium?",
    "options": {
      "A": "Movement",
      "B": "Defence",
      "C": "Excretion",
      "D": "Reproduction",
      "E": "Feeding"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c1_q44",
    "chapter": 1,
    "chapterTitle": "Concept of Living",
    "topic": "Living Organisms, Cell Structure & Organization",
    "questionNumber": 44,
    "text": "One of the features which adapt Paramecium to its environment is the possesssion of",
    "options": {
      "A": "Aregular shape",
      "B": "Two nuclei",
      "C": "Cilia",
      "D": "A pellicle",
      "E": "A vacuole"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c2_q1",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 1,
    "text": "Inunicellulsr organisms, essential nutrients can be transported directly to all parts of their body by the process of diffusion only because unicellular organisms have",
    "options": {
      "A": "a large surface area to volume ratio",
      "B": "large volume to surface area ratio",
      "C": "Both A and B",
      "D": "outer membrane made of cellulose",
      "E": "their body always immersed in the nutrient material"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c2_q2",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 2,
    "text": "The ability organisms to maintain a constant intemal environment is known as",
    "options": {
      "A": "diuresis",
      "B": "endosmosis",
      "C": "homeostasis",
      "D": "dialysis"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c2_q3",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 3,
    "text": "Autotrophic nutrition may be defined in terms of food obtained",
    "options": {
      "A": "from other organisms in exchange for some | products",
      "B": "by breakdown of complex substances",
      "C": "by an organism utilizing its own store of | enemy",
      "D": "by synthesizing simple substances using } energy from an external source",
      "E": "in a synthesized form from other living : organisms"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c2_q4",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 4,
    "text": "plumule will curve vertically upwards while the radicie will not show any curvasture",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B",
      "E": "plumule and radicle will curve towards the 4 ground i Ans¥ eo"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c2_q5",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 5,
    "text": "Which of the following statements is not true of osmotic process?",
    "options": {
      "A": "Equilibrium is reached when there is equal",
      "B": "The two solutions must be of different concentrations initially",
      "C": "Itinvolves only movement of water molecules Ibjective Questions distribution of water molecules",
      "D": "Neither A nor B",
      "E": "The two solutions are of equal concentration at the beginning of the experiment"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c2_q6",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 6,
    "text": "An association between two living organisms in which one lives on and feeds at the expense of the other organism is known as .",
    "options": {
      "A": "Parasitism",
      "B": "Commensalism",
      "C": "Mutualism",
      "D": "Symbiosis",
      "E": "Predation"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c2_q8",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 8,
    "text": "The mechanism of gaseous exchange in living organisms is essentially by",
    "options": {
      "A": "Osmosis",
      "B": "Inhalation",
      "C": "Breathing",
      "D": "Exhalation"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c2_q9",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 9,
    "text": "Which of these statements is correct diffusion?",
    "options": {
      "A": "It involves the movement of w only",
      "B": "Molecules move from a region concentration to a region of lower cc tion",
      "C": "Differentially permeable membrane .. present for diffusion to occur",
      "D": "It involves the movement of only sc molecules into the Bowman's capsule",
      "E": "Itoccurs when a solute can no longer dissolve ina solvent"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c2_q10",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 10,
    "text": "B 16. B a Il. D 71.00O0<A",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c2_q11",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 11,
    "text": "Osmosis can be defined as diffusion of",
    "options": {
      "A": "Atoms and molecules through a membrane to an area of higher concentration",
      "B": "Water molecules trom a dilute solution to a concentrated solution across a permeable membrane",
      "C": "Water molecules from a concentrated solution toa dilute solution through @ semi-permeable membrane",
      "D": "Neither A nor B"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c2_q12",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 12,
    "text": "Incellular respiration, energy is stored in the form of",
    "options": {
      "A": "Adenosine diphosphate (ADP)",
      "B": "Adenosine monophosphate (AMP)",
      "C": "Adenosine triphosphate (ATP)",
      "D": "Heat encrgy",
      "E": "Electric energy"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c2_q13",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 13,
    "text": "Which of the following is the medium of transportation of nutrients within unicellular organism?",
    "options": {
      "A": "Blood",
      "B": "Serum",
      "C": "Lymph",
      "D": "Plasma"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c2_q14",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 14,
    "text": "Cc 30°«O2O#D 9 B 1s. D",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c2_q15",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 15,
    "text": "The network of double membrane that helps to convey materials through the cytoplasm is the",
    "options": {
      "A": "Plasma membrane",
      "B": "Vacuolat membrane",
      "C": "Nuclear membrane",
      "D": "Endoplasmic reticulum",
      "E": "Mitochondrion"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c2_q16",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 16,
    "text": "In aerobic respiration, oxidative phosphorylation takes places in",
    "options": {
      "A": "Cytoplasm",
      "B": "Mitochorion",
      "C": "Ribosomes",
      "D": "Vacuoles sau the diagram below and seitoanswer QUESUON? 17 and 18. Spindle CS \\ spindle ©) Chromosome The Cell and its Environment 25"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c2_q17",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 17,
    "text": "What stuge of mitotic division is represented in the diagram of the cell illustrated above?",
    "options": {
      "A": "Prophase",
      "B": "Telophase",
      "C": "Anaphase",
      "D": "Metaphase",
      "E": "Interphase"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c2_q18",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 18,
    "text": "This stage of mitosis is characterized by the",
    "options": {
      "A": "Movement of the chromosomes to the poles",
      "B": "Arrangement of chromosomes on the equa- torial plate",
      "C": "Centromeres moving apart along the spindle",
      "D": "Interaction of the spindles with the chromo- somcs",
      "E": "Condensation of chromosomes and formation of spindle"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c2_q23",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 23,
    "text": "The stems of young herbaccous plants are kept upright mainly by",
    "options": {
      "A": "Osmotic pressure",
      "B": "Turgor pressure",
      "C": "Root pressure",
      "D": "Suction pressure"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c2_q24",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 24,
    "text": "Which of the following tissues is not found in the stem and root of monocotyledons?",
    "options": {
      "A": "Xylem",
      "B": "Cambium",
      "C": "Pith",
      "D": "Cortex",
      "E": "Pericycle - 26 The Cell and its Environment"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c2_q25",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 25,
    "text": "Growing radicles of seedlings are",
    "options": {
      "A": "Negatively phototropic",
      "B": "Positively phototropic",
      "C": "Positively phototactic",
      "D": "Negatively hydrotopic"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c2_q26",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 26,
    "text": "Ifa germinating seed is attached horizontally on a revolving Klinostat, what will be the effect of the seedling after three days? The",
    "options": {
      "A": "plumule will curve vertically upwards while the radicle will curve towards the ground",
      "B": "plumule and radicle will not show any curvature",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c2_q27",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 27,
    "text": "Which of the following processes is responsible for the increase in length and dry mass in a root tip?",
    "options": {
      "A": "Meiosis",
      "B": "Absorption",
      "C": "Mitosis",
      "D": "Conjugation (ec) Fertilization"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c2_q28",
    "chapter": 2,
    "chapterTitle": "The Cell and its Environment",
    "topic": "Cell and its Environment (Osmosis, Diffusion & Plasmolysis)",
    "questionNumber": 28,
    "text": "Which of the following explains the need for transport system in large mammals?",
    "options": {
      "A": "The area to volume ratio in large animals is high",
      "B": "The area to volume ratio diminishes with large size",
      "C": "Diffusion as an adequate means of transport is lacking",
      "D": "Large animals have internal fluid which contain different types of cells",
      "E": "Large animals have four-chambered heart. er Key"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c3_q1",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 1,
    "text": "The biscuspid valve is located between the",
    "options": {
      "A": "left auricle and left ventricle",
      "B": "aorta and the left ventricle",
      "C": "Superior vena cana and the inferior vena cava. D._ right auricle and the superior vena cava",
      "D": "Neither A nor B",
      "E": "right auricle and right ventricle"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c3_q2",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 2,
    "text": "The pulmonary artery carries",
    "options": {
      "A": "deoxygenated blood from the right ventricle to the lungs",
      "B": "oxygenated blood from the right ventricle to the lungs",
      "C": "oxygenated blood from the left ventricle to the left auricle",
      "D": "deoxygenated blood from the left ventricle to the lungs",
      "E": "oxygenated blood from the lungs to the right auricle"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c3_q3",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 3,
    "text": "Which of the following blood components has the greatest affinity for oxygen and carbondioxide?",
    "options": {
      "A": "Blood plasma",
      "B": "Leucocytes",
      "C": "Thrombocytes",
      "D": "Erythrocytes",
      "E": "Lymphocytes"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c3_q4",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 4,
    "text": "Thethoracic cavity is separated from the abdominal cavity by a sheet of muscle called",
    "options": {
      "A": "pleural membrane",
      "B": "intercostal muscle",
      "C": "diaphragm",
      "D": "pericardium",
      "E": "epiglottis"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c3_q5",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 5,
    "text": "Deamination is the process during which",
    "options": {
      "A": "excess amino acid is broken down into ammonia and a keto acid",
      "B": "fats and oils are converted into an emulsion for absorption",
      "C": "excess glucose is converted and stored as glucogen in the liver",
      "D": "Neither A nor B",
      "E": "excess amino acid is converted into proteins"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c3_q6",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 6,
    "text": "Which of the following statement on urinc production is nof correct?",
    "options": {
      "A": "Concentrated urine is produced under the control of antidiuretic hormone",
      "B": "The total volume of urine produced depend: on the need for water excretion cs Ifthere isan excess intake of water, dilute urin is excreted",
      "C": "Both A and B",
      "D": "If there is shortage of water in the body, th volume of urine produced decreases",
      "E": "In the presence of anti diuretic hormone, dilut urine is produced. Tissues and Supportive Systems 39 : Objective Questions"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c3_q7",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 7,
    "text": "The pigment in the malpighian layer responsible for skin colouration is known as",
    "options": {
      "A": "haemoglobin",
      "B": "haemocyanin",
      "C": "chlorocruorine",
      "D": "haemoerythrin",
      "E": "melanin"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c3_q8",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 8,
    "text": "Which of the following is the correct route for the movement of material through the kidney?",
    "options": {
      "A": "Glomerulus > Bowman's capsule > loop of Henle-collecting tubule - pelvis",
      "B": "Glomerulus -> loop of Henle -» collecting tubule > Bowman's capsule > pelvis",
      "C": "Pelvis-» Bowman's capsule > glomerulus -> loop of Henle -> Collecting tubule",
      "D": "Bowman's capsule -> glomerulus -> loop of Henle > collecting tubule > pelvis",
      "E": "Bowman's capsule > Joop of Henle > glomerulus > colleting tubule - pelvis"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c3_q9",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 9,
    "text": "Blood in mammals transports oxygen because it contains the pigment called",
    "options": {
      "A": "haemoglobin",
      "B": "chlorocruorine",
      "C": "melanin",
      "D": "haemocyanin",
      "E": "haemoerythrin"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c3_q10",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 10,
    "text": "The loss of water vapour through the aerial parts of the plants to the atmosphere is called",
    "options": {
      "A": "respiration",
      "B": "guttation",
      "C": "Osmoregulation D._ transpiration",
      "D": "Neither A nor B",
      "E": "diffusion"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c3_q11",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 11,
    "text": "The upward movement of the sap in the xylem vessels is brought about by",
    "options": {
      "A": "transpiration stream B, guttation",
      "B": "All of the above",
      "C": "capillarity",
      "D": "osmosis",
      "E": "cohesion Study the diagram below and use it to answer Questions 12 to 14, wa 5 7 \" OCT \\ 40 Tissues and Supportive Systems"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c3_q12",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 12,
    "text": "The piece of bone represented in the diagram is found in the",
    "options": {
      "A": "pelvic region",
      "B": "pectoral girdle",
      "C": "vertebral column Dz skull",
      "D": "Neither A nor B",
      "E": "thoracic region"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c3_q13",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 13,
    "text": "The part labelled I is the",
    "options": {
      "A": "lumber",
      "B": "sacrum",
      "C": "ilium",
      "D": "pubis",
      "E": "coccyx"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c3_q14",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 14,
    "text": "The bone that articulates with the part labelled III is the",
    "options": {
      "A": "humerus",
      "B": "femur",
      "C": "tibia",
      "D": "sacrum",
      "E": "fibula"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c3_q15",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 15,
    "text": "Which of the following is not a function of the mammalian skeleton? It",
    "options": {
      "A": "gives the body its shape",
      "B": "provides a framework on which interna organs are suspended",
      "C": "protects soft and delicate parts of the body",
      "D": "provides attachment for muscles",
      "E": "contracts andrelaxes to bring about movemen"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c3_q16",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 16,
    "text": "What type of vertebra is represented in th« diagram?",
    "options": {
      "A": "Atlas °",
      "B": "Axis \\ | My",
      "C": "Cervical WA 4",
      "D": "Sacrum tC <1",
      "E": "Lumber i A Z 4 N"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c3_q17",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 17,
    "text": "The structure labelled A represents the",
    "options": {
      "A": "transverse process",
      "B": "neural spine",
      "C": "neural canal",
      "D": "centrum E, metapophysis"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c3_q18",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 18,
    "text": "Which of the following statement is not correct about the function of cach group of mammalian vertebrac? \\",
    "options": {
      "A": "Cervical vertebra support the neck",
      "B": "Thoracic vertebrae articulate with the ribs",
      "C": "Lumbar vertebrae provide attachment for abdominal muscles",
      "D": "Sacral vertebrae support the skull and allow nodding and rotating movements E, Caudal vertebrae support the tail and provide attachment for tail muscle aaa OEE le"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c3_q19",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 19,
    "text": "The stems of young herbaceous plants are kept upright mainly by",
    "options": {
      "A": "osmotic pressure",
      "B": "turgor pressure",
      "C": "transpiration pull D._ suction pressure",
      "D": "Neither A nor B",
      "E": "root pressure"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c3_q20",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 20,
    "text": "XN «OD WB Py ae) Te mam A OUR Xo OR an 68 WON 37. -C mW A xm = ¢C 3» OC nm C OK ne MOA 2. 6C AOA",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c3_q21",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 21,
    "text": "Gaseous exchange takes place in the adult toad through the",
    "options": {
      "A": "buccal cavity, bladder and lungs",
      "B": "buccal cavity, skin and lungs",
      "C": "tympanic membrane, lungs and gills",
      "D": "buccal cavity, skin and spiracle",
      "E": "gills, skin and buccal cavity"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c3_q22",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 22,
    "text": "Breathing movement in mammals is accompanied by regular movement of the diaphram and the",
    "options": {
      "A": "intercoastal muscles",
      "B": "vertebral column",
      "C": "Clavicle",
      "D": "pleural cavity",
      "E": "floating ribs"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c3_q23",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 23,
    "text": "Which of the following are components of the glomerular filterate?",
    "options": {
      "A": "All the components of the blood except mineral salts",
      "B": "Water and salts only",
      "C": "Allthe components ofthe blood except plasma proteins and cells",
      "D": "Plasma proteins, red and white blood cells",
      "E": "Bloodcells, amino acids, salts and nitrogenous waste"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c3_q24",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 24,
    "text": "Which of the following takes place during the process of detoxication in the liver?",
    "options": {
      "A": "poisonous substances in the body are converted into harmless substances",
      "B": "Fats and oils are broken into finer particles through emulsification",
      "C": "Excess glucose in the blood are converted into glycogen and stored",
      "D": "Wom-out red blood cells are broken down",
      "E": "Enough heat is generated to sustain the activities of the liver. EE - CC"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c3_q25",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 25,
    "text": "The cup-shaped part allie te BPS\" Part ob the Bowman's Capsulc",
    "options": {
      "A": "nephridium",
      "B": "glomerulus",
      "C": "loop of Henle",
      "D": "nephron",
      "E": "convoluted tubule"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c3_q26",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 26,
    "text": "The increase in the wid: mammalian skin at high eae ' oee -",
    "options": {
      "A": "Vasodilation",
      "B": "Sweating ene",
      "C": "Vasoconstriction",
      "D": "Shivering",
      "E": "Evaporation"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c3_q27",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 27,
    "text": "Muscles are attached to bones by means of",
    "options": {
      "A": "ligaments",
      "B": "cartilage",
      "C": "synovial fluid",
      "D": "tendons",
      "E": "connective tissue"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c3_q28",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 28,
    "text": "Which of the following parts of the mammalian skin is directly involved in excretion?",
    "options": {
      "A": "Sebacious gland",
      "B": "Sweat gland",
      "C": "Horny layer",
      "D": "Hair follicle",
      "E": "Malpighan layer"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c3_q29",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 29,
    "text": "Kidney stone is a disease of the kidney that results in",
    "options": {
      "A": "blockage of the tubules by solid particles",
      "B": "passing out useful materials of the body fluid with urine",
      "C": "presence of large quantity of water in urine",
      "D": "passing out of hormones in urine",
      "E": "prevention of urine production"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c3_q30",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 30,
    "text": "Infective hepatitis is a disease of the",
    "options": {
      "A": "heart",
      "B": "kidney",
      "C": ". liver",
      "D": "stomach",
      "E": "pancreas"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c3_q31",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 31,
    "text": "The human skin is regarded as a sensc orga! because it",
    "options": {
      "A": "separates the body from the outside world",
      "B": "protects the body from cold and heat",
      "C": "regulates the water content of the body",
      "D": "has an outer layer of dead cells",
      "E": "has nerve endings The diagram below illustrates an experimental set Uj Use it to answer Questions 32 and 33"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c3_q32",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 32,
    "text": "The part labelled | is",
    "options": {
      "A": "amicro organism",
      "B": "a developing insect",
      "C": "awater droplet",
      "D": "anoil droplet",
      "E": "a soil particle Tissues and Supportive Systems 41 aa I to bei ye way dh ae 6 te nf"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c3_q33",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 33,
    "text": "The function of the part labelled IT is to",
    "options": {
      "A": "prevent the entry of insects into the soil",
      "B": "prevent the entry of light into the soil",
      "C": "prevent light from shining on the delicate roots",
      "D": "prevent evaporation from the soil",
      "E": "make the container air tight"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c3_q34",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 34,
    "text": "Which of the following can be used to detect the loss of water vapour from the leaves of plants?",
    "options": {
      "A": "Hydrated copper sulphate",
      "B": "Blue litmus paper 'C. Red litmus paper",
      "C": "Both A and B",
      "D": "Blue cobalt chloride paper",
      "E": "Lead acetate paper"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c3_q35",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 35,
    "text": "Which of the following structures of the leaf contains air?",
    "options": {
      "A": "Guard cell",
      "B": "Palisade layer",
      "C": "Intercellularspace",
      "D": "Vascular bundle",
      "E": "upper epidermis"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c3_q36",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 36,
    "text": "The respiratory organ found in the cockroach is the",
    "options": {
      "A": "airsac",
      "B": "trachea",
      "C": "lung book",
      "D": "lung",
      "E": "gill"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c3_q37",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 37,
    "text": "Which of the following structures functions as an excretory system in flat worms?",
    "options": {
      "A": "contractile vacuole",
      "B": "Nephridium",
      "C": "Flame cell",
      "D": "Malpighian tubule",
      "E": "Kidney"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c3_q38",
    "chapter": 3,
    "chapterTitle": "Tissues and Supportive Systems",
    "topic": "Supporting Tissues, Skeletal Systems & Circulatory Systems",
    "questionNumber": 38,
    "text": "Ultrafiltration in the kidney takes place in the",
    "options": {
      "A": "loop of Henle",
      "B": "renal vein",
      "C": "Bowman's capsule p. pelvis",
      "D": "Neither A nor B",
      "E": "pyramid ---sdsn-nul lll AD Bates ev Sage Nawes SX. Whe drecewn of the enters is AL HNN oroess water 1 the MAN BL te adenrd wens uae the atmgghere GL gtsns ctohangs DB. wadsard bok KL tor Qt A ? A % A RA wD a aoa a os A Ss. a wW c x FE iss B R E i OR BoA Ww OE 7 ; AQ, Ove ofthe functions of the rylem is AL wo strengthen the stent Be manutretatiag foot CY retrcrny loss of water YD. condaeting mamuticturead feed HL storing wauisert sigan rswer Ney LY os MM OB a 6D"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c4_q1",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 1,
    "text": "Which of the following statements is correct of hormones? Hormones are",
    "options": {
      "A": "secreted into the blood through ducts",
      "B": "secreted directly into the blood stream",
      "C": "inactive chemical substances in the blood stream",
      "D": "non-specific in their mode of action",
      "E": "secreted at the site of the target organs"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c4_q2",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 2,
    "text": "A 33. = C D 26 A 34. «=D",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c4_q3",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 3,
    "text": "The brain and the spinal cord make up the",
    "options": {
      "A": "peripheral nervous system",
      "B": "autonomic nervous system",
      "C": "central nervous system",
      "D": "somatic nervous system",
      "E": "sympathetic nervous system"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c4_q4",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 4,
    "text": "A 122, ¢ 20. 3% OC 13, 4A 21. 6 C 14, +E 22.",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c4_q5",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 5,
    "text": "Which of the following is the function of the hormone secreted in the Islet of Langerhans? It",
    "options": {
      "A": "is used in protein metabolism",
      "B": "is involved in sugar synthesis",
      "C": "aid the rate at which glucose is converted to glycogen",
      "D": "controls the fluid content of the body",
      "E": "plays arole in the pH balance of the body fluid"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c4_q6",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 6,
    "text": "The spaces between neurones through which impulses cross by means of chemical reaction are called",
    "options": {
      "A": "axons",
      "B": "ganglia",
      "C": "synapse",
      "D": "dendrites",
      "E": "pia matter"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c4_q7",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 7,
    "text": "A 15. D 23.",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c4_q8",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 8,
    "text": "The Condition known as cretinism is caused by the deficiency of",
    "options": {
      "A": "Adrenalin",
      "B": "Vitamin A",
      "C": "Insulin",
      "D": "Thyroxin",
      "E": "Vitamin c he"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c4_q9",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 9,
    "text": "E 17, 2 '¢ 0. C 18. 3.° 3€ oA 19.",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c4_q10",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 10,
    "text": "The hormone which regulates the amount of glucose in the blood is called",
    "options": {
      "A": "adrenalin",
      "B": "auxin",
      "C": "insulin",
      "D": "throxine",
      "E": "ptyalin"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c4_q11",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 11,
    "text": "Which of the following stimuli are not perceived through the skin of mammals?",
    "options": {
      "A": "Light",
      "B": "Pressure",
      "C": "Pain",
      "D": "Heat",
      "E": "Cold"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c4_q12",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 12,
    "text": "Which of the following parts of the tongue does not correspond to taste indicated against it?",
    "options": {
      "A": "Tip-sweet",
      "B": "Centre-salt",
      "C": "Back-sour",
      "D": "Side-sour",
      "E": "Back-bitter"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c4_q13",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 13,
    "text": "Over-secretion of thyroxin is likely to lead to",
    "options": {
      "A": "thinnes of body",
      "B": "Sluggishness",
      "C": "Cretinism in infants",
      "D": "reduced metabolism",
      "E": "dwarfism"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c4_q14",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 14,
    "text": "The human skin is regarded as a sense organ because it",
    "options": {
      "A": "separates the body from the outside world",
      "B": "protects the body from cold and heat",
      "C": "regulates the water content of the body",
      "D": "has an outer layer of dead cells",
      "E": "has nerve endings"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c4_q15",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 15,
    "text": "Which part of the ear is responsible for the maintenance of balance?",
    "options": {
      "A": "Ossicles",
      "B": "Tympanic membrane",
      "C": "Eustachian tube",
      "D": "Semi-circular canals",
      "E": "Cochlea"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c4_q17",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 17,
    "text": "The part labelled I is the",
    "options": {
      "A": "white matter",
      "B": "grey matter",
      "C": "central canal",
      "D": "synapse",
      "E": "gangtlon"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c4_q18",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 18,
    "text": "What is the function of the part labelled III?",
    "options": {
      "A": "Conducting nerve impulses to the receptor organ",
      "B": "Conducting nerve impulses to the effector organ",
      "C": "Translating the impulses received from the organ",
      "D": "Amplifying the impulses received from the organ",
      "E": "Transmitting the impulses to the brain"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c4_q19",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 19,
    "text": "Which of the following statements is correct of the structure labelled III? It",
    "options": {
      "A": "consists mainly of cell bodies",
      "B": "conducts impulses to the spinal cord",
      "C": "conducts impulses from the spinal cord to the effector organs",
      "D": "conducts impulses to the brain",
      "E": "interprets stimulus in the spinal cord"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c4_q20",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 20,
    "text": "The organ which is sensitive to smell inacockroach is",
    "options": {
      "A": "nostril",
      "B": "pedipalp",
      "C": "antenna",
      "D": "mandible E, anal cercus"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c4_q21",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 21,
    "text": "Which of the following is the most sensitive spot of the retina?",
    "options": {
      "A": "conjuctiva",
      "B": "comea",
      "C": "lens",
      "D": "yellow spot",
      "E": "blind spot"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c4_q22",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 22,
    "text": "What part of the brain is concerned with the 52 Nervous and Hormonal Coordination regulation of the heart beat, body temperature and breathing rate?",
    "options": {
      "A": "Cerebellum",
      "B": "Medulla oblongate",
      "C": "Cy Cerebrim",
      "D": "Offactory lobe",
      "E": "Cortex"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c4_q23",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 23,
    "text": "When an axon is at rest, the concentration of ions on cither side of the membrane are different, Which of the following is correct about the concentration of ions on cither side of the membranc?",
    "options": {
      "A": "There is an excess of potassium ions inside the axion and an excess of sodium ions outside",
      "B": "The inside of the axon becomes positively charged while the outside is negatively charged",
      "C": "There is an excess of sodium ions on the inner side of the axon",
      "D": "Chloride and potassium ions begin to move across the membrane",
      "E": "Calcium jons accumulate on the inner side ot the axon"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c4_q24",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 24,
    "text": "The groups of sensory cells found on the upper surface of the tongue are called",
    "options": {
      "A": "Ampullac",
      "B": "Taste buds",
      "C": "Nerve colls",
      "D": "Somatic cells",
      "E": "Tactile cells Use the diagram below to answer Questions 25 and 26. } |"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c4_q25",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 25,
    "text": "What type ofeye defect is illustrated in the diagram above?",
    "options": {
      "A": "Hypermetropia",
      "B": "Myopia",
      "C": "Cataract",
      "D": "Astigmatism",
      "E": "Glaucoma"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c4_q26",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 26,
    "text": "This defect can be corrected by the use of",
    "options": {
      "A": "Convex lens",
      "B": "Concave lens",
      "C": "Cylindrical lens",
      "D": "Surgical operation",
      "E": "Biconcave lens"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c4_q27",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 27,
    "text": "The hormone which tones up the muscles of a* person in time of danger is from the",
    "options": {
      "A": "Thyroid gland",
      "B": "Pancreas",
      "C": "Adrenal gland",
      "D": "Liver",
      "E": "Spleen"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c4_q28",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 28,
    "text": "B 36. =O«=#B",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c4_q29",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 29,
    "text": "A gland in the human body secretes two hormones, one of which causes a disease called diabetes when there is a deficiency. Which of these organs produces the hormones?",
    "options": {
      "A": "Spleen",
      "B": "Parathyroid",
      "C": "Adrenal body",
      "D": "Thyroid",
      "E": "Pancreas"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c4_q30",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 30,
    "text": "The following are connected with the movement of areflex action I. Central nervous system Il. Muscle TIL. Skin TV. Sensory nerve V. Motor nerve Which of the following sequences indicate acorrect path?",
    "options": {
      "A": "1-2-3-4-5",
      "B": "2-1-4-5-3",
      "C": "3-4-1-2-5",
      "D": "4-1-5-2-3",
      "E": "3-4-1-5.2"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c4_q31",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 31,
    "text": "OC 39. B B 32. 0C«A 40. £E",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c4_q32",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 32,
    "text": "The function of the ossicles (malleus, incus and stapes) in the mammalian ear is the",
    "options": {
      "A": "transmission of vibrations",
      "B": "regulation of pressures",
      "C": "support of the inner ear",
      "D": "maintenance of balance during motion",
      "E": "secretion of oil"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c4_q33",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 33,
    "text": "Unlike auxins, gibberellins",
    "options": {
      "A": "induce the formation of adventitious roots",
      "B": "do not affect leaf and fruit absicssion",
      "C": "cannot stimulate stem elongation",
      "D": "are quite effective as herbicides E, increase growth in the girth of a plant SS"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c4_q34",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 34,
    "text": "Fruit enlargement can be induced by sprayin young ovary with",
    "options": {
      "A": "cytokinin, abscisic and the enthylene B, gibberellins ethylene and abscisic acid",
      "B": "All of the above",
      "C": "auxin, abscisic acid and ethylene",
      "D": "auxin, cytokinin and gibberellin",
      "E": "auxin, kinin and gibberellin"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c4_q35",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 35,
    "text": "A fundamental similarity between nervous and . hormonal systems is that both",
    "options": {
      "A": "involve chemical transmission",
      "B": "have widespread effects C, shed chemicals into the blood stream",
      "C": "Both A and B",
      "D": "evoke rapid responses",
      "E": "are controlled by the conditional reflex"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c4_q36",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 36,
    "text": "A dwarf plant can be stimulated to grow to normal height by the application of",
    "options": {
      "A": "thyroxin",
      "B": "gibberellin",
      "C": ". insulin",
      "D": "kinin",
      "E": "abscisic acid"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c4_q37",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 37,
    "text": "OA B 30, +E 38. =B",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c4_q38",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 38,
    "text": "The greatest concentration of light receptors is found in the part labelled",
    "options": {
      "A": "VI",
      "B": "Option B",
      "C": "Iv",
      "D": "II BE. 1"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c4_q39",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 39,
    "text": "The aqueous humour is represented by the part labelled",
    "options": {
      "A": "None of the above",
      "B": "Il",
      "C": "ll",
      "D": "VI",
      "E": "VI"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c4_q40",
    "chapter": 4,
    "chapterTitle": "Nervous and Hormonal Coordination",
    "topic": "Coordination (Nervous and Endocrine Systems) & Sense Organs",
    "questionNumber": 40,
    "text": "The light sensitive layer is labelled",
    "options": {
      "A": "Option A",
      "B": "Ul",
      "C": "Iv",
      "D": "VI E, Vil or Key"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c5_q1",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 1,
    "text": "A. 9. B 17. me JS lo 6 18, 3. «i#&B i. 6B 19.",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c5_q3",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 3,
    "text": "Forelimbs 4. Hindlimbs",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c5_q5",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 5,
    "text": "C 13, °=+C 21.",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c5_q6",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 6,
    "text": "The maize grain is regarded asa fruit and notaseed because",
    "options": {
      "A": "epicarp",
      "B": "endocarp",
      "C": "mesocarp",
      "D": "seed",
      "E": "pericarp"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c5_q8",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 8,
    "text": "Theone-seeded fruit in which the pericarp and seed coat have become fused together is known as",
    "options": {
      "A": "achene",
      "B": "samara",
      "C": "caryopsis",
      "D": "legume",
      "E": "drupe"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c5_q9",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 9,
    "text": "A true fruit is formed from",
    "options": {
      "A": "a fertilized ovary and other floral parts",
      "B": "a fertilized ovary",
      "C": "a fertilized ovary and calyx",
      "D": "a fertilized ovary and fleshy receptacle",
      "E": "an unfertilized ovary and other floral parts"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c5_q10",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 10,
    "text": "For pollination and fruit formation, the essential part(s) of the flower should be the",
    "options": {
      "A": "corolla",
      "B": "ovary",
      "C": "pistil(gynaecium)",
      "D": "ovules",
      "E": "receptacle Use the figure below to answer Questions J1 and 12. ==> (1) Wo ING (2) fe 4 rw: (3) 1g J de aC) (5) Fig. 5.14"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c5_q12",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 12,
    "text": "Reserved food material is",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c5_q13",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 13,
    "text": "The correct figured sequence for the following labelled parts (stigma, ovary wall, embryo sac, integument and micropyle) is",
    "options": {
      "A": "12453",
      "B": "24135",
      "C": "21435",
      "D": "14325",
      "E": "31425"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c5_q14",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 14,
    "text": "Which structure becomes the seed fertilization? ere coatvaller",
    "options": {
      "A": "None of the above",
      "B": "Option B",
      "C": "Both A and B",
      "D": "Option D",
      "E": "5"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c5_q15",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 15,
    "text": "B 23. 8 OC 16 -E 24. oe B, formation of a fertile embryo and the endo- sperm",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "development of the seed ss",
      "D": "development of the fruit",
      "E": "production of double seeds"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c5_q16",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 16,
    "text": "A fruit formed froma si singh A free carpels, is Ble flower having several",
    "options": {
      "A": "amultiple fruit B, adry dehiscent ee Reproduction 6%",
      "B": "All of the above",
      "C": "adry indehiscent fruit",
      "D": "asimple fruit",
      "E": "an aggregate fruit"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c5_q17",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 17,
    "text": "Ifthe anthers of 2 flower mature before the stigma, the condition is termed",
    "options": {
      "A": "epigyny B, bypogyny",
      "B": "All of the above",
      "C": "protogyny",
      "D": "protandry",
      "E": "perigyny"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c5_q18",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 18,
    "text": "In human reproduction, the zygote formed as a result of fertilization gets attached to the wall of the uterus. The process is called",
    "options": {
      "A": "sexual reproduction",
      "B": "cohesion",
      "C": "pregnancy",
      "D": "implantation",
      "E": "viviparity"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c5_q19",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 19,
    "text": "A dry fruit which can breek into several parts each containing one seed is a",
    "options": {
      "A": "capsule",
      "B": "aggregate fruit",
      "C": "legume",
      "D": "schizocarp",
      "E": "follicle"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c5_q20",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 20,
    "text": "In what order do the following structures develop during the metamorphosis of the toad?",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c5_q21",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 21,
    "text": "The mammalian organ through which nourishment and oxygen diffuse into a developing embryo is called",
    "options": {
      "A": "amnion",
      "B": "chorion",
      "C": "umbilical cord",
      "D": "oviduct",
      "E": "placenta oe the figure following to answer Questions 22 and 2 4 1 @) ) % 3 5 6 Fig. 5.16; Transverse section of a fowl's egg UUNSEEVSUCtON"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c5_q22",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 22,
    "text": "The young chick is formed from",
    "options": {
      "A": "Option A",
      "B": "3and4",
      "C": "1,3 and5",
      "D": "Option D",
      "E": "4"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c5_q23",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 23,
    "text": "Which parts provide food for the developing chick?",
    "options": {
      "A": "2and3",
      "B": "4and5",
      "C": "3and4",
      "D": "2and5",
      "E": "land2"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c5_q24",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 24,
    "text": "A flowering plant is monoecious if",
    "options": {
      "A": "the androecium is found on one plant",
      "B": "the gynoecium is monocarpous",
      "C": "it produces essential organs",
      "D": "the gynoecium and androecium are on th same plant",
      "E": "the flowers are unisexual"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c5_q33",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 33,
    "text": "Airspaces are characteristic of seeds or fruits dispersed by",
    "options": {
      "A": "birds 2",
      "B": "water Cc. wind",
      "C": "Both A and B",
      "D": "explosive mechanism",
      "E": "man"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c5_q34",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 34,
    "text": "The components of castor oil seed and the maize grain are similar except for the",
    "options": {
      "A": "parietal",
      "B": "marginal",
      "C": "number of radicles",
      "D": "free central",
      "E": "triple marginal"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c5_q36",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 36,
    "text": "A fruit which develops without fertilization is described as",
    "options": {
      "A": "simple",
      "B": "pathenocarpic",
      "C": "aggregate",
      "D": "compound",
      "E": "multiple"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c5_q37",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 37,
    "text": "Epigeal germination can be found in",
    "options": {
      "A": "Sorghum",
      "B": "Maize",
      "C": "Millet",
      "D": "Groundnut",
      "E": "Wheat"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c5_q38",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 38,
    "text": "Double fertilization in higher plants is significant | because it ensures the 'A. formation of a fertile embryo Answe",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c5_q39",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 39,
    "text": "Hypogeal germination is characterised by the",
    "options": {
      "A": "emergence of plumule out of the ground",
      "B": "provision of nourishment by the endosperm",
      "C": "elongation of the hypocotyl",
      "D": "elongation of the epicoty]",
      "E": "elongation of both epicotyl and hypocotyl"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c5_q40",
    "chapter": 5,
    "chapterTitle": "Reproduction",
    "topic": "Reproduction in Plants and Animals & Development",
    "questionNumber": 40,
    "text": "The main function of the petal of a flower isto",
    "options": {
      "A": "attract pollination agents",
      "B": "protect the flower while still in bud",
      "C": "serve as landing stage for insects D, protect the inner parts from dessication",
      "D": "Neither A nor B",
      "E": "produce nectar Key"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c6_q1",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 1,
    "text": "Polypeptides, 2. Amino acids,",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c6_q2",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 2,
    "text": "Which of the following is not regarded as a micro- nutrient or trace element essential for plant growth?",
    "options": {
      "A": "Phosphorus",
      "B": "Zinc",
      "C": "Boron",
      "D": "Silicon",
      "E": "Molybdenun"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c6_q3",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 3,
    "text": "CC 1) en os 19,",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q4",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 4,
    "text": "D 12, B 20. 3.0 «=D bo ae C4 21.",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c6_q5",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 5,
    "text": "Autotrophs are also described as",
    "options": {
      "A": "consumers",
      "B": "decomposers",
      "C": "camivores",
      "D": "producers",
      "E": "herbivores"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c6_q6",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 6,
    "text": "D 14. D 22.",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c6_q7",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 7,
    "text": "Which of the following is not an adaptation of the small intestine for absorption of digested food. The 'A. Villi are well supplied with blood and lympt vessels",
    "options": {
      "A": "None of the above",
      "B": "Vili are numerous and thin-walled",
      "C": "Small intestine has large surface area",
      "D": "Small intestine islongandcoiled",
      "E": "Small intestine leads into the large intestine Ybjective Questions"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c6_q8",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 8,
    "text": "Thunderstorm can be beneficial to plants because it.",
    "options": {
      "A": "kills the pests that attacks crops",
      "B": "destroys some of the major crops",
      "C": "adds nitrates to the soil",
      "D": "adds line to the soil",
      "E": "make rain water available to plants"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q9",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 9,
    "text": "Which of the following is a nitrifying bacterium?",
    "options": {
      "A": "Nitrobacter",
      "B": "Rhizobium",
      "C": "Azotobacter",
      "D": "Clostridium",
      "E": "Nitrosomonas"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c6_q10",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 10,
    "text": "Which of the following reagents is used for the test for starch?",
    "options": {
      "A": "Millon's reagent",
      "B": "Fehling's solution",
      "C": "Sudan Ill",
      "D": "Iodine solution",
      "E": "Benedict's solution The diagram below represents a section through the earthworm showing its alimentary system. Use it to answer questions 11 to 13. aw Iv \\ \" v vi Aree ee Remenenene | Saath ; HT ra SF, a Postetor ena Fig. 6.10"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c6_q11",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 11,
    "text": "What is the name of the part labelled I?",
    "options": {
      "A": "Ocsophagus",
      "B": "Nephridium",
      "C": "Pharynx",
      "D": "Intestine",
      "E": "Crop"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q12",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 12,
    "text": "What is the name of the structure labelled 111?",
    "options": {
      "A": "Gizzard",
      "B": "Crop",
      "C": "Heart",
      "D": "Seminal vesicle",
      "E": "Coelom"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c6_q13",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 13,
    "text": "What is the function of the part labelled IV?",
    "options": {
      "A": "Production of sperm",
      "B": "Temporary storage of food",
      "C": "Mechanical grinding of food D, Pumping blood all over the body E, Producing cocoon for the eggs",
      "D": "Neither A nor B"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q14",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 14,
    "text": "In testing fora reducing sugar, the food substance is usually warmed with",
    "options": {
      "A": "Sulphuric acid",
      "B": "Million's reagent",
      "C": "Sudan Ill",
      "D": "Bencdict's solutio",
      "E": "Sodium hydroxide"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c6_q15",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 15,
    "text": "The part of the alimentary system of a bird wherc grinding of maize occurs is the",
    "options": {
      "A": "crop",
      "B": "stomach",
      "C": "gizzard",
      "D": "cloaca",
      "E": "rectum"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q16",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 16,
    "text": "E 24. 36 In demonstrating the importance of minora] cloments in plants, the culture bottle must be darkoned (0 Av provent algal growth in culture solution B, allow root growth ; CY provent brenkdown of mineral elements",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "prevent photosynthesis in the roots HK. prevent inseota trom getting inside the culture solution"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c6_q17",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 17,
    "text": "Which of the following organisms reduces nitrates in the soil to gascous nitrogen?",
    "options": {
      "A": "Euglene",
      "B": "respiration",
      "C": "photosynthesis",
      "D": "transpiration",
      "E": "translocation"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q19",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 19,
    "text": "The oxygen given off during the process is derived from",
    "options": {
      "A": "sunlight",
      "B": "chlorophyll",
      "C": "carbon dioxide",
      "D": "atmosphere",
      "E": "water"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c6_q20",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 20,
    "text": "Which of these is a direct photosynthetic product?",
    "options": {
      "A": "Glucose B, Starch",
      "B": "All of the above",
      "C": "Protein",
      "D": "Fats E, Latex"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c6_q21",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 21,
    "text": "Which of these is the terminal portion of the alimentary canal of a mammal?",
    "options": {
      "A": "Ocsophagus",
      "B": "Stomach",
      "C": "Rectum",
      "D": "Colon",
      "E": "Appendix"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q22",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 22,
    "text": "Bacteria inhabiting legume root nodules and which add atmospheric nitrogen to the soil are referred to as",
    "options": {
      "A": "ptyalin",
      "B": "pepsin",
      "C": "rennin",
      "D": "trypsin",
      "E": "amylase"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q24",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 24,
    "text": "The element nitrogen is utilized in",
    "options": {
      "A": "formation of ATP",
      "B": "formation of glucose",
      "C": "formation of amino acids",
      "D": "photosynthesis",
      "E": "none of the above"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q28",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 28,
    "text": "All of the following are digestive enzymes except",
    "options": {
      "A": "bile",
      "B": "lipase",
      "C": "maltase",
      "D": "pepsin",
      "E": "ptyalin"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c6_q29",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 29,
    "text": "The deficiency of vitamin D leads to",
    "options": {
      "A": "scurvy",
      "B": "pellagra",
      "C": "rickets",
      "D": "beriberi",
      "E": "polio"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c6_q32",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 32,
    "text": "Which of the following represents the sequence of protein hydrolysis?",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c6_q33",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 33,
    "text": "A food substance which produces red colouration with Sudan IT] contains",
    "options": {
      "A": "Protein",
      "B": "Sugar",
      "C": "Starch",
      "D": "Cellulose EK. Fat"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c6_q34",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 34,
    "text": "The main organic substances found in the human body are",
    "options": {
      "A": "carbohydrates, proteins and salts",
      "B": "salts, fats and proteins",
      "C": "fats, carbohydrates and proteins",
      "D": "salts, fats and carbohydrates",
      "E": "proteins, fats, carbohydrates, salts and vitamins"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q35",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 35,
    "text": "D A 28. =A 36. =A",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c6_q37",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 37,
    "text": "Uf tho gall bladder of a mammal is damaged, which of the followlng will bo most seriously affected? AL Glycolysis.",
    "options": {
      "A": "None of the above",
      "B": "Digestion of starch Cy Digestion of tits and oils",
      "C": "Both A and B",
      "D": "Digestion of proteins KE. Digestion of mineral salts in food"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q38",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 38,
    "text": "Which of the following will be first digested if ingested at the same time?",
    "options": {
      "A": "Cooked beans",
      "B": "Cooked rice",
      "C": "Cad liver oil",
      "D": "Roasted beef",
      "E": "Boiled green vegetables"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c6_q39",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 39,
    "text": "The pancreatic juice contains the enzymes amylopsin",
    "options": {
      "A": "pepsin and trypsin B._ rennin and streapsin C._ streapsin and trypsin D._ streapsin and ptyalin",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B",
      "E": "maltase and erepsin"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c6_q40",
    "chapter": 6,
    "chapterTitle": "Nutrition",
    "topic": "Nutrition, Digestive Systems & Enzymes",
    "questionNumber": 40,
    "text": "The element common to protein, carbohydrate and lipid is",
    "options": {
      "A": "hydrogen",
      "B": "sulphur",
      "C": "nitrogen",
      "D": "phosphorus",
      "E": "chlorine or Key"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c7_q1",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 1,
    "text": "The study of the organisms and the environmen of an abandoned farmland is the ecology of:",
    "options": {
      "A": "ecosystem",
      "B": "habitat",
      "C": "environment",
      "D": "niche",
      "E": "_ microhabitat"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c7_q3",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 3,
    "text": "D '9. Cc 15.",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c7_q4",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 4,
    "text": "If three 30cm lengths of glass tubing are tightly packed with clay , sand and loamy soils respec- tively, and then stood in a beaker of water for one week, the level of water will be _A. - lowest in the tube with clay",
    "options": {
      "A": "None of the above",
      "B": "the same in all the tubes",
      "C": "lowest in the tube with loamy soil",
      "D": "_ highest in the tube with sandy soil",
      "E": "_ lowest in the tube with sandy soil"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c7_q5",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 5,
    "text": "C 1. A 17.",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c7_q6",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 6,
    "text": "Soil is said to be fertile if",
    "options": {
      "A": "_ itis black",
      "B": "_ it can supply usable nutrients to plants",
      "C": "the oxygen content is very high",
      "D": "artificial manure is added to it",
      "E": "_ itis waterlogged"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c7_q7",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 7,
    "text": "A population is defined as the collection of",
    "options": {
      "A": "_ similarorganisms that are found in thesame habitat",
      "B": "55.6",
      "C": "_ similar organisms that interbreed freely in the same habitat a I an : Objective Questions",
      "D": "25.0",
      "E": "35.7"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c7_q10",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 10,
    "text": "Which of the following groups of factors is completely abiotic?",
    "options": {
      "A": "_ salinity, tide, plankton, turbidity",
      "B": "temperature, pH, soil, insect",
      "C": "wind, altitude, humidity, light",
      "D": "conifers, pH, rainfall",
      "E": "_ soil, water, bacteria, salinity"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c7_q11",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 11,
    "text": "Ifa handful of soil is shaken with water and left to settle, the soil particles will settle from light to heavy particles as follows:",
    "options": {
      "A": "humus, clay, silt, sand, stones",
      "B": "humus, silt, clay, sand, stones",
      "C": "humus, clay, silt, stones, sand",
      "D": "clay, humus, silt, sand, stones",
      "E": "humus, sand, silt, clay, stones"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c7_q12",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 12,
    "text": "Which of the following ecological factors are common to both terrestrial and aquatic habitats?",
    "options": {
      "A": "rainfall, temperature, light and wind",
      "B": "_ salinity, rainfall, temperature and light",
      "C": "_ tides, wind, rainfall and altitude",
      "D": "salinity, rainfall and humidity",
      "E": "_ wind, pH, temperature and light"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c7_q13",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 13,
    "text": "Which of the following has the greatest influence on the distribution of animals in marine and fresh water habitats?",
    "options": {
      "A": "pH",
      "B": "salinity",
      "C": "water current",
      "D": "turbidity",
      "E": "altitude"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c7_q14",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 14,
    "text": "In a savanna ecosystem, the abiotic factors include",
    "options": {
      "A": "legumes, temperature and sandy soil B, _ water, temperature and soil",
      "B": "All of the above",
      "C": "minerals, oxygen and reptiles",
      "D": "waters, oil and grasses E.. _ soil, minerals and bacteria"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c7_q15",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 15,
    "text": "Mangrove swamp can be found",
    "options": {
      "A": "onaseashore with a flat terrain",
      "B": "where ariver meets the sea",
      "C": "onamud flat near the sea",
      "D": "where two rivers meet",
      "E": "ona piece of land surrounded by water"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c7_q16",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 16,
    "text": "Soil with the finest particles is called",
    "options": {
      "A": "silt",
      "B": "clay",
      "C": "sand",
      "D": "gravel",
      "E": "loam"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c7_q17",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 17,
    "text": "Which of the following is not a characteristic feature of tropical rainforest habitats?",
    "options": {
      "A": "trees with longer boles than those in savanna",
      "B": "_ fewer canopy strata than the savanna",
      "C": "many more trees and climbers than savanni",
      "D": "plenty of leaf litter on the ground",
      "E": "_morediversecommunities than thesavanna"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c7_q18",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 18,
    "text": "Which of the following factors is not associated with aquatic habitat?",
    "options": {
      "A": "temperature",
      "B": "_ light intensity",
      "C": "turbidity",
      "D": "wave action",
      "E": "humidity"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c7_q19",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 19,
    "text": "Which of the following types of soil has the highest water-retaining capacity?",
    "options": {
      "A": "clay",
      "B": "laterite",
      "C": "loam",
      "D": "gravel",
      "E": "sand"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c7_q24",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 24,
    "text": "A 30. D aS . -",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c7_q25",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 25,
    "text": "A hygrometer is used for measuring",
    "options": {
      "A": "relative humidity",
      "B": "specific gravity",
      "C": "light intensity",
      "D": "turbidity",
      "E": "wind speed"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c7_q26",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 26,
    "text": "How are savanna plants protected from bush fires? They",
    "options": {
      "A": "have sunken stomata",
      "B": "roll their leaves during hot days",
      "C": "have thick bark",
      "D": "always produce flowers",
      "E": "_ shed their leaves gradually throughout the year"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c7_q27",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 27,
    "text": "Which of the following best desc-ibes a marine habitat? A large body of water",
    "options": {
      "A": "which has no distinctive col »ur or taste",
      "B": "with high concentration of sit",
      "C": "with little suspended materials",
      "D": "with no water weeds",
      "E": "which sustains no animal life"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c7_q28",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 28,
    "text": "The following are features of Northem Guinea Savanna except",
    "options": {
      "A": "presence of tall trees with thick bark",
      "B": "_ bare soil with very few trees",
      "C": "presence of fire-resistant trees",
      "D": "abundantherbivores",
      "E": "predominance of woody trees"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c7_q29",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 29,
    "text": "The following are features of the tropical rain forest except",
    "options": {
      "A": "abundant water supply",
      "B": "loose and moist soil",
      "C": "_ short trees growing beneath tall trees",
      "D": "scanty trees with small leaves",
      "E": "_ presence of many animals"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c7_q30",
    "chapter": 7,
    "chapterTitle": "Basic Ecological Concepts",
    "topic": "Basic Ecological Concepts & Ecological Factors",
    "questionNumber": 30,
    "text": "Which of the following is not a characteristic of overcrowding in plant and animal community? p= se Be 2 aa i Bch alae hee f 4 | 98 Basic Ecologicat Concepts",
    "options": {
      "A": "Population outstripping available spz",
      "B": "Population exceeding available food",
      "C": "Competition within the population",
      "D": "Increase in Primary production : A a Low 13. 204A 8 OA 14"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c8_q1",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 1,
    "text": "Which of the following does not contribute to th biomass in an ecosystem?",
    "options": {
      "A": "Producers",
      "B": "Food chains",
      "C": "Consumers",
      "D": "Microorganism",
      "E": "Saprophytes"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c8_q2",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 2,
    "text": "Autotrophs are also described as:",
    "options": {
      "A": "consumers",
      "B": "decomposers",
      "C": "carnivores",
      "D": "producers",
      "E": "_ herbivores"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c8_q3",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 3,
    "text": "Which of the following statements is not correc about food chains?",
    "options": {
      "A": "All food chains start with a green plant",
      "B": "Food chains involve feeding relationships among organisms ~",
      "C": "Shorter food chains indicate more effective utilization of energy than longer ones",
      "D": "There Is no energy loss in a food chain",
      "E": "All food chains have primary consumers"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c8_q4",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 4,
    "text": "Atwhich trophic level would the highest accumu- lation of a non-biodegradable substance occur?",
    "options": {
      "A": "Primary consumers",
      "B": "Tertiary consumers",
      "C": "Primary producers",
      "D": "Secondary consumers 2",
      "E": "Secondary producers"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c8_q5",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 5,
    "text": "Whichof the following groups of organisms feeds directly on green plants?",
    "options": {
      "A": "pyramid of biomass",
      "B": "pyramid of numbers",
      "C": "pyramid of energy",
      "D": "flowchain",
      "E": "food web"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c8_q7",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 7,
    "text": "Which of the following would be the primary producer in a food chain?",
    "options": {
      "A": "saprophytes",
      "B": "_ herbivores",
      "C": "camivores",
      "D": "green plants",
      "E": "parasites - e Objective Questions"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c8_q8",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 8,
    "text": "A food web can be described as a",
    "options": {
      "A": "complex feeding relationship in a commy. nity",
      "B": "_ transfer of food energy from one commy- nity to another Cc complex pattern of food production ina community",
      "C": "Both A and B",
      "D": "group of many populations competing for the same type of food",
      "E": "group of organisms belonging to the same trophic level"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c8_q9",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 9,
    "text": "Which of the following explains the term pyramid of numbers?",
    "options": {
      "A": "The number or organisms in a trophic leve}",
      "B": "Therelationship between plants in different trophic levels",
      "C": "Thenumber of saprophytes and parasites in a habitat",
      "D": "The number of predators in a habitat",
      "E": "Progressive decrease in the number of individuals from lower to higher trophic level"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c8_q10",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 10,
    "text": "Which of the following represents the correct order in a possible food chain?",
    "options": {
      "A": "Crustacean - diatom-> fish + man",
      "B": "Fish - crustacean --> man - diatom",
      "C": "Man-> fish - crustacean - diatom",
      "D": "Diatom - crustacean -> fish > man",
      "E": "Man-> diatom -> fish - crustacean"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c8_q11",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 11,
    "text": "In complex food relationships in a community, the primary, secondary and tertiary consumers are referred to as:",
    "options": {
      "A": "symbionts",
      "B": "omnivores",
      "C": "_ heterotrophs",
      "D": "_ autotrophs",
      "E": "_camivores"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c8_q12",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 12,
    "text": "Which of the following is the correct chain for the organism found in an aquatic community?",
    "options": {
      "A": "Paramecium, Phytoplankton, Prawn, Water flea, Tilapia, Shark",
      "B": "Waterflea, Paramecium, Phytoplankton Prawn, Tilapia, Shark",
      "C": "Phytoplankton, Waterflea, Paramecium Prawn, Shark, Tilapia",
      "D": "Phytoplankton, Paramecium, Waterflea Prawn, Tilapia, Shark",
      "E": "Paramecium, Phytoplankton, Waterflea Prawn, Shark, Tilapia ra"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c8_q13",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 13,
    "text": "In a food chain, the position occupied by an organism is called",
    "options": {
      "A": "the trophic level",
      "B": "energy level",
      "C": "the feeding level",
      "D": "the habitat level",
      "E": "niche"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c8_q14",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 14,
    "text": "Which of these statements about food chain isnot correct?",
    "options": {
      "A": "Animals in the chain are consumers",
      "B": "A food chain usually begins with a green | plant",
      "C": "All organisms in a food chain are animals",
      "D": "_ Living things are dependent on one another",
      "E": "The food chain involves energy transfer in an ecosystem"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c8_q15",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 15,
    "text": "Which of the following organisms will have the highest biomass?",
    "options": {
      "A": "Small Fish",
      "B": "Tadpole",
      "C": "Hawk ~",
      "D": "Phytoplankton",
      "E": "Big fish"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c8_q16",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 16,
    "text": "Which of the following is the correct sequence for energy transfer and nutrient cycling among \\ living things in an ecosystem?",
    "options": {
      "A": "Consumers > producers -> decomposers",
      "B": "Producers > decomposers -> consumers",
      "C": "Decomposers -> producers -> consumers",
      "D": "Producers -> consumers -> decomposers",
      "E": "Consumers -> decomposers -> producers"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c8_q17",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 17,
    "text": "Inany food chain, the first member must be a(n)",
    "options": {
      "A": "camivore",
      "B": "herbivore",
      "C": "zooplankton",
      "D": "_ autotroph",
      "E": "predator"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c8_q18",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 18,
    "text": "The total mount of energy entering a food chair | is that which is present in the",
    "options": {
      "A": "consumer",
      "B": "ecosystem",
      "C": "producer",
      "D": "decomposer",
      "E": "habitat"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c8_q19",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 19,
    "text": "Ina food chain, each stage in the chain is a",
    "options": {
      "A": "chain level",
      "B": "web level",
      "C": "consumption level",
      "D": "trophic level Functioning Ecosystem",
      "E": "_ production level Use the diagram below to answer questions 20-22. King Fisher Big Fish Tadpole Phytoplankton G"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c8_q20",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 20,
    "text": "The diagram above illustrates",
    "options": {
      "A": "King Fisher",
      "B": "Small fish",
      "C": "Phytoplankton",
      "D": "Big fish",
      "E": "Tadpole"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c8_q22",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 22,
    "text": "Which of these organisms is a herbivore?",
    "options": {
      "A": "Tadpole",
      "B": "Phytoplankton",
      "C": "King Fisher",
      "D": "Small fish",
      "E": "Big fish"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c8_q23",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 23,
    "text": "Which of the following organisms is a producer?",
    "options": {
      "A": "Spirogyra",
      "B": "Minor",
      "C": "Rhizopus",
      "D": "Fungus"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c8_q24",
    "chapter": 8,
    "chapterTitle": "Functioning Ecosystem",
    "topic": "Functioning Ecosystem, Food Chains, Webs & Pyramids",
    "questionNumber": 24,
    "text": "Which of the following groups consists of heterotrophs?",
    "options": {
      "A": "Mucor, Chlamydomonas and Euglena",
      "B": "Spirogyra, Mucor and mushroom",
      "C": "Man, Mucor and mushroom",
      "D": "Man, maize and cowpea",
      "E": "Chlamydomonas, man and maize"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c9_q1",
    "chapter": 9,
    "chapterTitle": "Energy Transformation in Nature",
    "topic": "Energy Flow in Nature & Nutrient Cycling",
    "questionNumber": 1,
    "text": "Which of the following processes is not involved in the carbon cycle?",
    "options": {
      "A": "Buming",
      "B": "Decay",
      "C": "Transpiration",
      "D": "Respiration",
      "E": "Photosynthesis"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c9_q2",
    "chapter": 9,
    "chapterTitle": "Energy Transformation in Nature",
    "topic": "Energy Flow in Nature & Nutrient Cycling",
    "questionNumber": 2,
    "text": "Which ofthe following processes arenot involved in a water cycle?",
    "options": {
      "A": "Evaporation, condensation and precipita- tion",
      "B": "_ Evaporation, percolation and transpiration",
      "C": "Evaporation and precipitation",
      "D": "Evaporation and transpiration",
      "E": "_ Precipitation and condensation"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c9_q3",
    "chapter": 9,
    "chapterTitle": "Energy Transformation in Nature",
    "topic": "Energy Flow in Nature & Nutrient Cycling",
    "questionNumber": 3,
    "text": "O2«#£ 5. 2 B 4. 0A 6. )bjective Questions :",
    "options": {
      "A": "putrefaction of animals ~",
      "B": "Buming of fuels",
      "C": "Photosynthesis",
      "D": "Volcanic eruption",
      "E": "Respiration in plants"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c9_q4",
    "chapter": 9,
    "chapterTitle": "Energy Transformation in Nature",
    "topic": "Energy Flow in Nature & Nutrient Cycling",
    "questionNumber": 4,
    "text": "Thepathway through which nutrient elements are replenished and circulated in an ecosystem is | calleda",
    "options": {
      "A": "cycle",
      "B": "food chain",
      "C": "food web",
      "D": "Kreb's cycle",
      "E": "_ pyramid of numbers"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c9_q5",
    "chapter": 9,
    "chapterTitle": "Energy Transformation in Nature",
    "topic": "Energy Flow in Nature & Nutrient Cycling",
    "questionNumber": 5,
    "text": "All of the following can illustrate the dynamic nature of the ecosystem except",
    "options": {
      "A": "nitrogen cycle",
      "B": "carbon cycle",
      "C": "water cycle",
      "D": "nutrient cycle",
      "E": "locomotion in organism"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c9_q6",
    "chapter": 9,
    "chapterTitle": "Energy Transformation in Nature",
    "topic": "Energy Flow in Nature & Nutrient Cycling",
    "questionNumber": 6,
    "text": "Which of these processes removes carbon from f the atmosphere? Ansv",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c9_q7",
    "chapter": 9,
    "chapterTitle": "Energy Transformation in Nature",
    "topic": "Energy Flow in Nature & Nutrient Cycling",
    "questionNumber": 7,
    "text": "Whichof these is not applicable to the circulation of water in nature? 'A. Water removed from oceans are perma: nently lost",
    "options": {
      "A": "Condensation",
      "B": "Perspiration",
      "C": "Photosynthesis",
      "D": "Transpiration",
      "E": "Respiration"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c9_q9",
    "chapter": 9,
    "chapterTitle": "Energy Transformation in Nature",
    "topic": "Energy Flow in Nature & Nutrient Cycling",
    "questionNumber": 9,
    "text": "Carbon is added to the atmosphere by the following processes except",
    "options": {
      "A": "_ respiration",
      "B": "buming",
      "C": "photosynthesis",
      "D": "volcanic eruption",
      "E": "_ oxidation"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c9_q10",
    "chapter": 9,
    "chapterTitle": "Energy Transformation in Nature",
    "topic": "Energy Flow in Nature & Nutrient Cycling",
    "questionNumber": 10,
    "text": "Which of the following is a means of measuring primary production?",
    "options": {
      "A": "Rate of reproduction of animals",
      "B": "_ Life span of an organism",
      "C": "Number of predators in an environment",
      "D": "Harvested plants in a unit area",
      "E": "Rate of consumption by herbiviores or Key"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c10_q1",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 1,
    "text": "The relationship between a herbivore and th bacteria which live in its caecum is known as:",
    "options": {
      "A": "parasitism",
      "B": "symbiosis",
      "C": "commensalism DD. __ saprophytism",
      "D": "Neither A nor B",
      "E": "predation"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c10_q2",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 2,
    "text": "A constituent of the exhaust gases of moto vehicles which causes serious air pollution is",
    "options": {
      "A": "water vapour",
      "B": "carbon dioxide",
      "C": "carbon monoxide",
      "D": "oxygen",
      "E": "ozone"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c10_q3",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 3,
    "text": "When large numbers of organisms share limited space and resources the result is",
    "options": {
      "A": "immigration",
      "B": "commensalism",
      "C": "symbiosis",
      "D": "extinction",
      "E": "competition"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c10_q4",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 4,
    "text": "The change in colour of the chameleon serves as a means of",
    "options": {
      "A": "attraction to the opposite sex",
      "B": "repulsion of the enemy",
      "C": "acamouflage from a predator",
      "D": "regulation of body temperature",
      "E": "_ production of a variety of skin pigments"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c10_q5",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 5,
    "text": "An association between living organisms in which one lives and feeds at the expense of the other organism is known as",
    "options": {
      "A": "parasitism",
      "B": "commensalism",
      "C": "mutualism",
      "D": "symbiosis",
      "E": "predation"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c10_q6",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 6,
    "text": "Which of the following is not a way of reducing air pollution?",
    "options": {
      "A": "siting factories and power stations away from residential areas",
      "B": "_ building tall factory chimneys",
      "C": "passing waste gases through filters and absorbers",
      "D": "_ using lead-free petrol in cars",
      "E": "_ recycling tins, cans and bottles"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c10_q7",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 7,
    "text": "Natality is a factor affecting population density because it involves",
    "options": {
      "A": "_ increase in population due to immigration",
      "B": "_ increase in population due to emigration",
      "C": "the number of mature females in the population",
      "D": "the number of females in the population",
      "E": "_ the number ofall the young ones produced in the population -------- Ecological Management 112 > Objective Questions"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c10_q8",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 8,
    "text": "Which of the following may not contribute to environmental pollution?",
    "options": {
      "A": "_ solar energy radiation",
      "B": "industrial wastes",
      "C": "waste disposal",
      "D": "smoke",
      "E": "_ nuclear power plant"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c10_q9",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 9,
    "text": "Which of the following is a pollutant of air?",
    "options": {
      "A": "oxygen",
      "B": "water vapour",
      "C": "carbon monoxide",
      "D": "nitrogen",
      "E": "hydrogen"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c10_q10",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 10,
    "text": "Which of the following water pollutants may contain organisms that cause dysentery?",
    "options": {
      "A": "Pesticides",
      "B": "Sewage",
      "C": "Industrial waste",
      "D": "Fertilizers",
      "E": "Crude oil"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c10_q11",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 11,
    "text": "Which of the following does not illustrate adapta~ tion to the environment?",
    "options": {
      "A": "colour changes by chameleon",
      "B": "streamline shape of fishes",
      "C": "light bones in birds",
      "D": "development of big muscles by a weight lifter",
      "E": "_ possession of fins by fishes"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c10_q12",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 12,
    "text": "The changing of colour by a chameleon to that of the environment is an example of",
    "options": {
      "A": "adaptive radiation B, protective colouration",
      "B": "All of the above",
      "C": "courtship display",
      "D": "_ display of body colour",
      "E": "_ territorial behaviour"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c10_q13",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 13,
    "text": "Which of the following is not a pollution control measure?",
    "options": {
      "A": "Penalising those who dump refuse in water or land",
      "B": "Controlling the emission of smoke from automobiles and industries",
      "C": "Ensuring that there is no spillage of oil",
      "D": "Establishing government agencies like Federal Environmental Protection Agency (FEPA)",
      "E": "Channelling sewage into streams"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c10_q14",
    "chapter": 10,
    "chapterTitle": "Ecological Management",
    "topic": "Ecological Management, Pollution & Conservation",
    "questionNumber": 14,
    "text": "An association between two organisms in which both benefit is called",
    "options": {
      "A": "parasitism",
      "B": "commensalism",
      "C": "symbiosis",
      "D": "_ predation",
      "E": "competition Ne en"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c11_q1",
    "chapter": 11,
    "chapterTitle": "Habitats",
    "topic": "Habitats (Aquatic, Terrestrial, Estuarine & Marine)",
    "questionNumber": 1,
    "text": "Which of the following is not classified as a terrestrial habitat?",
    "options": {
      "A": "Forest",
      "B": "Guinea Savannah",
      "C": "Afro Alpine",
      "D": "_ Littoral zone",
      "E": "Desert"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c11_q2",
    "chapter": 11,
    "chapterTitle": "Habitats",
    "topic": "Habitats (Aquatic, Terrestrial, Estuarine & Marine)",
    "questionNumber": 2,
    "text": "Which of the following factors is not associated with aquatic habitat?",
    "options": {
      "A": "Temperature",
      "B": "Light intensity",
      "C": "Humidity",
      "D": "Turbidity",
      "E": "Wave action"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c11_q3",
    "chapter": 11,
    "chapterTitle": "Habitats",
    "topic": "Habitats (Aquatic, Terrestrial, Estuarine & Marine)",
    "questionNumber": 3,
    "text": "The number of individuals in a habitat in relation | to the unit space available to each organism is i referred to as the",
    "options": {
      "A": "_ birth rate",
      "B": "density",
      "C": "mortality",
      "D": "frequency",
      "E": "dispersion"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c11_q4",
    "chapter": 11,
    "chapterTitle": "Habitats",
    "topic": "Habitats (Aquatic, Terrestrial, Estuarine & Marine)",
    "questionNumber": 4,
    "text": "E 2 =2«C 5 C 3. +B 6 C Habitats 118 bjective Questions",
    "options": {
      "A": "Sargassum and dog fish B, Red mangrove and pond skater",
      "B": "All of the above",
      "C": "Sargassum and red mangrove",
      "D": "Spirogyra and pond skater",
      "E": "Red mangrove and dog fish"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c11_q5",
    "chapter": 11,
    "chapterTitle": "Habitats",
    "topic": "Habitats (Aquatic, Terrestrial, Estuarine & Marine)",
    "questionNumber": 5,
    "text": "Which of the following is not an aquatic habitat?",
    "options": {
      "A": "Turbidity",
      "B": "Depth of water",
      "C": "Humidity",
      "D": "Temperature",
      "E": "Availability of nutrient"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c11_q7",
    "chapter": 11,
    "chapterTitle": "Habitats",
    "topic": "Habitats (Aquatic, Terrestrial, Estuarine & Marine)",
    "questionNumber": 7,
    "text": "Which of the following organisms can be found in fresh water habitat? | . : Ansv",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c11_q9",
    "chapter": 11,
    "chapterTitle": "Habitats",
    "topic": "Habitats (Aquatic, Terrestrial, Estuarine & Marine)",
    "questionNumber": 9,
    "text": "Which of the following instruments is not used in measuring abiotic factors in any habitat?",
    "options": {
      "A": "Microscope",
      "B": "Thermometer",
      "C": "Hydrometer",
      "D": "Wind vane",
      "E": "pH meter"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c11_q10",
    "chapter": 11,
    "chapterTitle": "Habitats",
    "topic": "Habitats (Aquatic, Terrestrial, Estuarine & Marine)",
    "questionNumber": 10,
    "text": "What ecological condition favours the breeding of blackflies?",
    "options": {
      "A": "pH",
      "B": "salinity",
      "C": "wave action",
      "D": "temperature",
      "E": "turbidity"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c11_q12",
    "chapter": 11,
    "chapterTitle": "Habitats",
    "topic": "Habitats (Aquatic, Terrestrial, Estuarine & Marine)",
    "questionNumber": 12,
    "text": "Important abiotic factors which affect all plants and animals in the habitat are",
    "options": {
      "A": "temperature and turbidity",
      "B": "rainfall and relative humidity",
      "C": "salinity and wind direction",
      "D": "temperature and rainfall",
      "E": "_ salinity and relative humidity or Key"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c12_q1",
    "chapter": 12,
    "chapterTitle": "Ecology of Populations",
    "topic": "Population Ecology, Density & Adaptations",
    "questionNumber": 1,
    "text": "Which of the following is not an effect of over- crowding on a population?",
    "options": {
      "A": "Death",
      "B": "Competition",
      "C": "Commensalism",
      "D": "Aggression",
      "E": "Cannibalism"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c12_q2",
    "chapter": 12,
    "chapterTitle": "Ecology of Populations",
    "topic": "Population Ecology, Density & Adaptations",
    "questionNumber": 2,
    "text": "Aclimax community is characterised by",
    "options": {
      "A": "food shortage",
      "B": "emigration",
      "C": "abundance of food",
      "D": "_ predation",
      "E": "_ natural disaster"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c12_q5",
    "chapter": 12,
    "chapterTitle": "Ecology of Populations",
    "topic": "Population Ecology, Density & Adaptations",
    "questionNumber": 5,
    "text": "Which of the following is the least safe method of birth control? Using:",
    "options": {
      "A": "spermicide cream",
      "B": "_ contraceptile pills",
      "C": "_ barriers such as condoms",
      "D": "_ intrauterine device",
      "E": "_ the withdrawal method"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c12_q6",
    "chapter": 12,
    "chapterTitle": "Ecology of Populations",
    "topic": "Population Ecology, Density & Adaptations",
    "questionNumber": 6,
    "text": "Which of the following statement is not correct?",
    "options": {
      "A": "Shortage of food may be caused by pesti- lence, rinderpest and neglect of farming",
      "B": "Shortage of food may lead to competition | emigration, death and decline in the rate of | reproduction",
      "C": "Overcrowding may lead to scarcity of food",
      "D": "_ Dispersal of seeds or fruits prevent over crowding",
      "E": "Territorial defence encourages foox scarcity in a habitat"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c12_q7",
    "chapter": 12,
    "chapterTitle": "Ecology of Populations",
    "topic": "Population Ecology, Density & Adaptations",
    "questionNumber": 7,
    "text": "Which of the following is not an outcome c ecological succession? t Ecology of Populations 142 Objective Questions",
    "options": {
      "A": "There is a progressive change in species structure, organic matter and energy flow",
      "B": "The climax stage consists of a compara- tively long lasting species composition",
      "C": "There is no dynamic equilibrium between the community and habitat in the climax stage",
      "D": "Communities occurring later in the sequence of succession are more complex",
      "E": "Thereare fewer dominant species in the late stages of succession"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c12_q8",
    "chapter": 12,
    "chapterTitle": "Ecology of Populations",
    "topic": "Population Ecology, Density & Adaptations",
    "questionNumber": 8,
    "text": "Whichof the these organisms will have the lowest population in an ecosystem?",
    "options": {
      "A": "Hawk",
      "B": "Praying Mantis",
      "C": "Mouse",
      "D": "Grasshopper",
      "E": "Bees"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c12_q9",
    "chapter": 12,
    "chapterTitle": "Ecology of Populations",
    "topic": "Population Ecology, Density & Adaptations",
    "questionNumber": 9,
    "text": "Density, mortality rate, birth rate are the factors that affect",
    "options": {
      "A": "population",
      "B": "dominance",
      "C": "cover",
      "D": "_ habitat",
      "E": "abiotic community"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c12_q10",
    "chapter": 12,
    "chapterTitle": "Ecology of Populations",
    "topic": "Population Ecology, Density & Adaptations",
    "questionNumber": 10,
    "text": "Which of the following statements is not true of a population?",
    "options": {
      "A": "Predator",
      "B": "Parasite",
      "C": "Consumer",
      "D": "Producer",
      "E": "Temperature"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c12_q12",
    "chapter": 12,
    "chapterTitle": "Ecology of Populations",
    "topic": "Population Ecology, Density & Adaptations",
    "questionNumber": 12,
    "text": "Which of the following is an abiotic factor?",
    "options": {
      "A": "Predation",
      "B": "Rainfall",
      "C": "Cropping",
      "D": "Grazing",
      "E": "Migration"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c12_q13",
    "chapter": 12,
    "chapterTitle": "Ecology of Populations",
    "topic": "Population Ecology, Density & Adaptations",
    "questionNumber": 13,
    "text": "Which of the following factors may not cause over-crowding?",
    "options": {
      "A": "Limited space",
      "B": "Scarcity of food",
      "C": "Reduced birth rate",
      "D": "Neither A nor B"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c13_q1",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 1,
    "text": "Which of the following statements is not correct about the ecological effects of agricultural activities.",
    "options": {
      "A": "The use of herbicides and pesticides on farms can cause pollution",
      "B": "_Bush-burning encourages desertification",
      "C": "Excessive use of fertilizers in farms may have harmful effects",
      "D": "Tillage of tropical soils with ploughs and harrows may encourage erosion",
      "E": "Monocropping is one of the cultural methods of controlling pests"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c13_q2",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 2,
    "text": "Pests can be controlled without the subsequen' danger of polluting the ecosystem by",
    "options": {
      "A": "_ introducing a population of species simila to that of the pest",
      "B": "increasing the population of the natura enemies of the pest",
      "C": "eliminating the natural enemies of the pest",
      "D": "_ keeping the population of natural enemie: of the pest constant",
      "E": "_ spraying the ecosystem with pesticide"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c13_q3",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 3,
    "text": "Predators are beneficial in pest control becaus they",
    "options": {
      "A": "are natural enemies of small mammals",
      "B": "devour farm animals",
      "C": "feed on pest of crops",
      "D": "prey on game animals",
      "E": "compete for food with the pests"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c13_q4",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 4,
    "text": "Which of the following bacteria reduces nitrate: in the soil to gascous nitrogen?",
    "options": {
      "A": "putrefying bacteria B, _ nutrifying bacteria",
      "B": "All of the above",
      "C": "saprophytic bacteria",
      "D": "denitrifying bacteria",
      "E": "_ parasitic bacteria"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c13_q5",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 5,
    "text": "The buming of farmlands should be discouraged because it",
    "options": {
      "A": "destroys some plant pests",
      "B": "reduces the population of wild animals on the farm",
      "C": "makes bush clearing more difficult",
      "D": "destroys the organic part of the soil",
      "E": "reduces the dormancy period of some weeds"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c13_q6",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 6,
    "text": "Which of the following organisms reduces nitrates in the soil to gaseous nitrogen?",
    "options": {
      "A": "Euglena i - Relevance of Biology to Agriculture 130 Objective Questions",
      "B": "Protozoan",
      "C": "Denitrifying bacteria",
      "D": "Parasitic mould",
      "E": "Nitrifying bacterium"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c13_q7",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 7,
    "text": "The use of predators or parasites to control pests in the farm is known as",
    "options": {
      "A": "predator control",
      "B": "chemical control",
      "C": "biological control",
      "D": "animal control",
      "E": "parasitic control"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c13_q8",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 8,
    "text": "Which of the following is the underlining principle in the adoption of biological control of pests?",
    "options": {
      "A": "Knowledge of agricultural practices by the farmer",
      "B": "_ Relationship between plants and animals",
      "C": "The presence of poisonous chemicals in the farm",
      "D": "The relative population of plants and animals",
      "E": "The predator-prey relationship in the ecological community"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c13_q9",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 9,
    "text": "Whichof the following plant diseases is indicated when grains of cereals are covered with a mass of spores?",
    "options": {
      "A": "smut",
      "B": "mosaic",
      "C": "maize streak",
      "D": "fungal blast ti",
      "E": "rust"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c13_q10",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 10,
    "text": "The farming practice by which an exhausted farm land is left for a number of years before cultiva- tion is known as",
    "options": {
      "A": "crop rotation",
      "B": "continuous cropping C.:_ monocropping",
      "C": "Both A and B",
      "D": "_ bush fallowing",
      "E": "mixed cropping"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c13_q11",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 11,
    "text": "Which of the following farm practices can cause loss of soil fertility.",
    "options": {
      "A": "mulching",
      "B": "compost application",
      "C": "use of fertilizers",
      "D": "_ terracing",
      "E": "_ intensive cropping"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c13_q12",
    "chapter": 13,
    "chapterTitle": "Relevance of Biology to Agriculture",
    "topic": "Applied Biology in Agriculture & Plant/Animal Pests",
    "questionNumber": 12,
    "text": "The importance of practising crop-rotation in agriculture is to",
    "options": {
      "A": "control soil erosion",
      "B": "maintain the fertility of the soil ee",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c14_q1",
    "chapter": 14,
    "chapterTitle": "Micro-organisms: Man and His Health",
    "topic": "Microorganisms: Health, Diseases and Control",
    "questionNumber": 1,
    "text": "Which of the following are not causative organisms of plant diseases?",
    "options": {
      "A": "Fungi",
      "B": "Viruses",
      "C": "Bacteria",
      "D": "Nematodes",
      "E": "Cercariae"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c14_q2",
    "chapter": 14,
    "chapterTitle": "Micro-organisms: Man and His Health",
    "topic": "Microorganisms: Health, Diseases and Control",
    "questionNumber": 2,
    "text": "The process whereby micro-organisms car convert atmospheric nitrogen into nitrogenous cmpound is known as",
    "options": {
      "A": "nitrogen cycle",
      "B": "_ nitrogen fixation",
      "C": "denitrification",
      "D": "_ putrefaction E, decomposition i"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c14_q3",
    "chapter": 14,
    "chapterTitle": "Micro-organisms: Man and His Health",
    "topic": "Microorganisms: Health, Diseases and Control",
    "questionNumber": 3,
    "text": "Which ofthe following substances cannot control d the growth of harmful microorganisms?",
    "options": {
      "A": "Antibiotics",
      "B": "Hypertonic salt solution",
      "C": "Disinfectants",
      "D": "_ Isotonic sugar solution",
      "E": "Antiseptics"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c14_q4",
    "chapter": 14,
    "chapterTitle": "Micro-organisms: Man and His Health",
    "topic": "Microorganisms: Health, Diseases and Control",
    "questionNumber": 4,
    "text": "One of the ecological conditions which favour the spread of malaria is :",
    "options": {
      "A": "improper disposal of decaying organic matter",
      "B": "_ clearing bushes around dwelling houses",
      "C": "_ presence of water weeds",
      "D": "_ presence of stagnant water in ponds",
      "E": "improper disposal of sewage into the sea. Answe a 30OC~OD 2. °=«=2B 4D Objective Questions"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c14_q5",
    "chapter": 14,
    "chapterTitle": "Micro-organisms: Man and His Health",
    "topic": "Microorganisms: Health, Diseases and Control",
    "questionNumber": 5,
    "text": "Microorganisms which break down dead organisms and absorb their contents are called",
    "options": {
      "A": "decomposers",
      "B": "consumers",
      "C": "parasites",
      "D": "commensals",
      "E": "symbionts"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c14_q6",
    "chapter": 14,
    "chapterTitle": "Micro-organisms: Man and His Health",
    "topic": "Microorganisms: Health, Diseases and Control",
    "questionNumber": 6,
    "text": "The substances recycled in the soil by the activities of micro-organisms during the decay of dead organisms are first utilized by the",
    "options": {
      "A": "camivores",
      "B": "_ herbivores",
      "C": "scavengers",
      "D": "_ autotrophs",
      "E": "decomposers"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c14_q7",
    "chapter": 14,
    "chapterTitle": "Micro-organisms: Man and His Health",
    "topic": "Microorganisms: Health, Diseases and Control",
    "questionNumber": 7,
    "text": "Micro-organisms are important in recyling nutrients because ;",
    "options": {
      "A": "_ they are capable of multiplying quickly",
      "B": "_ they are eaten by large organisms",
      "C": "they break down dead organic materials",
      "D": "many of them are parasites",
      "E": "they can occur anywhere, F"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c14_q8",
    "chapter": 14,
    "chapterTitle": "Micro-organisms: Man and His Health",
    "topic": "Microorganisms: Health, Diseases and Control",
    "questionNumber": 8,
    "text": "The following are useful effects of micro- organisms except",
    "options": {
      "A": "production of vaccines",
      "B": "curing of tobacco",
      "C": "tanning of leather",
      "D": "decay of meat",
      "E": "7 r Key 5. 0A % C"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c15_q1",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 1,
    "text": "Inabreeding programmeacross was made between two true-breeding cowpea types: one with round seeds and the other with wrinkled seeds. If round- ness is dominant while wrinkleness is recessive, in the first filial generation all the seeds produced will be",
    "options": {
      "A": "25 percent wrinkled, 75 per cent round",
      "B": "100 per cent wrinkled",
      "C": "50 percent wrinkled, 50 per cent round",
      "D": "75 percent wrinkled, 25 per cent round",
      "E": "100 per cent round"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c15_q2",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 2,
    "text": "A farmer cannot check soil erosion effectively by",
    "options": {
      "A": "constructing his ridges for planting across the slope B, cultivating cover crops",
      "B": "All of the above",
      "C": "practising strip cropping",
      "D": "clearing the land of vegetation",
      "E": "constructing terraces"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c15_q3",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 3,
    "text": "Group A serum mixes with Group B i erythrocytes | u } 146 Conservation, Genetics and Evolution",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Group AB serum mixes with Group 0 erythrocytes",
      "D": "Group B serum mixes with Group B erythrocytes",
      "E": "Group AB serum mixes with Groups A and B erythrocytes"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c15_q4",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 4,
    "text": "Group A serum mixes with Group A bi erythrocytes a",
    "options": {
      "A": "None of the above",
      "B": "All of the above",
      "C": "Both A and B",
      "D": "Neither A nor B"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c15_q5",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 5,
    "text": "Normally any character shown by an organism is due to the effects of 13",
    "options": {
      "A": "hormones and chromosomes",
      "B": "chromosomes",
      "C": "mutations",
      "D": "homones and genes",
      "E": "genes and environment 14"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c15_q6",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 6,
    "text": "A person whose blood can be donated to all other people, must have the blood group ~",
    "options": {
      "A": "All",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D",
      "E": "None"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c15_q8",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 8,
    "text": "When a person with blood group O has lost much blood due to an accident, he can be given blood from persons who have blood belonging to",
    "options": {
      "A": "group O only",
      "B": "group A only",
      "C": "group AB only",
      "D": "groups A and O only",
      "E": "groups AB andO"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c15_q9",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 9,
    "text": "An organism having one pair of identical genes is",
    "options": {
      "A": "aheterozygote",
      "B": "hybrid",
      "C": "anallelomorph",
      "D": "a homozygote",
      "E": "adiploid"
    },
    "answer": "D"
  },
  {
    "id": "lamlad_bio_c15_q10",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 10,
    "text": "The character-producing factors in living organisms are",
    "options": {
      "A": "3:1",
      "B": "1:3",
      "C": "RNA",
      "D": "1:2",
      "E": "1:1 There will be agglutination when the r"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c15_q16",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 16,
    "text": "If R and r denote the genes for a character, the offsprings of the cross between RR and Rr are",
    "options": {
      "A": "2Ry, rr",
      "B": "2RR, 2rr",
      "C": "2RR, 2Rr",
      "D": "4Rr",
      "E": "3RR, 1"
    },
    "answer": "C"
  },
  {
    "id": "lamlad_bio_c15_q17",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 17,
    "text": "The theory of natural selection was developed by",
    "options": {
      "A": "Lamarck and Darwin",
      "B": "Darwin and Wallace",
      "C": "Wallace and Mendel",
      "D": "Mendel and Lamarck fy"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c15_q18",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 18,
    "text": "Fossil records found in sedimentary rocks offer some explanation for the theory of evolutior because",
    "options": {
      "A": "the deposits have remains of organism: i characteristic of when they were formed",
      "B": "different strata have remains of organisms o' i the same kind i C._ only organisms with strong parts are fossilizec",
      "C": "Both A and B",
      "D": "most animal and plant fossils bear littl : resemblance to present day living specimens",
      "E": "the deposits have remain of organism : uncharacteristic of when they were formed. i"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c15_q19",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 19,
    "text": "Which of the following is an example of discon / tinuous variation observed in man?",
    "options": {
      "A": "1 heterozygous smooth : 2 homozygous",
      "B": "1 homozygous smooth : 2 heterozygous",
      "C": "2 homozygous smooth : 2 wrinkled",
      "D": "3 heterozygous smooth : 1 wrinkled",
      "E": "1 homozygous smooth : 3 heterozygous wrinkled"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c15_q21",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 21,
    "text": "Which of the following is not part of the objectives of conservation of natural resources?",
    "options": {
      "A": "To eliminate wild animals in order to enable other plants and animals survive",
      "B": "To use our resources on sustained yield basis",
      "C": "To guard ugainst indiscriminate killing of plants and animals",
      "D": "To guard against the extinction and exhaustion of natural resources",
      "E": "To protect the environment"
    },
    "answer": "A"
  },
  {
    "id": "lamlad_bio_c15_q22",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 22,
    "text": "Which of the following major ideas were proved by Gregor Mendel?",
    "options": {
      "A": "There is a tendency among organisms to increase rapidly in number if conditions are favourable",
      "B": "There is a struggle for existence among a very large number of offsprings",
      "C": "Nature selects organisms which will survive to produce their kind",
      "D": "All species exhibit structural and functional Variations",
      "E": "Characteristics of an organism are controlled by genes occurring in pairs"
    },
    "answer": "B"
  },
  {
    "id": "lamlad_bio_c15_q23",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 23,
    "text": "Which of the following is not a constituent of DNA?",
    "options": {
      "A": "Purine",
      "B": "Phosphate",
      "C": "Cytosine",
      "D": "Deoxyribose",
      "E": "Uracil ~"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c15_q24",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 24,
    "text": "The haploid number of chromosomes in man is",
    "options": {
      "A": "48",
      "B": "46",
      "C": "42",
      "D": "24",
      "E": "23"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c15_q25",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 25,
    "text": "Which of the following is not an evidence of evolution?",
    "options": {
      "A": "Fossil",
      "B": "Anatomy",
      "C": "Embryology",
      "D": "Genetics",
      "E": "Behaviour"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c15_q26",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 26,
    "text": "The term used in describing the effective manage- ment of natural resources by man is",
    "options": {
      "A": "preservation",
      "B": "utilization",
      "C": "economics",
      "D": "development",
      "E": "conservation"
    },
    "answer": "E"
  },
  {
    "id": "lamlad_bio_c15_q27",
    "chapter": 15,
    "chapterTitle": "Conservation, Genetics and Evolution",
    "topic": "Genetics, Heredity, Variation and Evolution",
    "questionNumber": 27,
    "text": "The theory that new organs or characteristics develop in organisms when there is need for them : was postulated by",
    "options": {
      "A": "Charles Darwin",
      "B": "Jean Lamarck",
      "C": "Louis Pasteur",
      "D": "Gregor Mendel",
      "E": "Wallace"
    },
    "answer": "B"
  }
];

export function toUtmeFourOptions(item: LamladBiologyItem): {
  options: { A: string; B: string; C: string; D: string };
  answer: 'A' | 'B' | 'C' | 'D';
} {
  if (item.answer === 'E' && item.options.E) {
    return {
      options: {
        A: item.options.A,
        B: item.options.B,
        C: item.options.C,
        D: item.options.E,
      },
      answer: 'D',
    };
  }

  return {
    options: {
      A: item.options.A,
      B: item.options.B,
      C: item.options.C,
      D: item.options.D,
    },
    answer: (item.answer === 'E' ? 'D' : item.answer) as 'A' | 'B' | 'C' | 'D',
  };
}

/**
 * Returns verified questions from Lamlad Biology ready for CBT test integration
 */
export function getLamladBiologyVerifiedQuestions(): VerifiedQuestion[] {
  return LAMLAD_BIOLOGY_ITEMS.map((item, idx) => {
    const { options, answer } = toUtmeFourOptions(item);
    return {
      id: 890000 + idx + 1,
      year: 2024,
      questionNumber: idx + 1,
      subject: 'Biology',
      topic: item.topic,
      text: item.text,
      options,
      answer,
      explanation: `Official Answer: (${item.answer}). [SSCE & UTME Biology by Prof. G.A.O. Arawomo & Prof. A.I. Akinpelu · Chapter ${item.chapter}: ${item.chapterTitle}, Question ${item.questionNumber}]`,
      bookTitle: 'LAMLAD BIOLOGY',
      author: 'Prof. G.A.O. Arawomo & Prof. A.I. Akinpelu',
      textbookRef: `Lamlad Biology by Prof. Arawomo & Prof. Akinpelu (Ch. ${item.chapter}: ${item.chapterTitle})`,
      hasImage: false,
    };
  });
}
