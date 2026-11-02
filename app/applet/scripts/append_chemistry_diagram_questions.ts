import fs from 'fs';
import path from 'path';

// Define the 20 verified chemistry diagram questions with standalone inline SVGs
const chemistryDiagramQuestions = [
  {
    id: "chem_diag_501",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Separation Techniques: Filtration & Residue",
    bookQuestionNum: 501,
    text: "The apparatus shown is used to separate an insoluble solid from a liquid. What are A and B respectively?",
    options: {
      A: "Residue and filtrate",
      B: "Filtrate and residue",
      C: "Solvent and solute",
      D: "Distillate and residue"
    },
    answer: "A",
    explanation: "The solid trapped on the filter paper is the residue (A); the liquid that passes through is the filtrate (B).",
    page: 201,
    hasImage: true,
    imageCaption: "Figure 1: Laboratory filtration setup separating insoluble solid from liquid",
    imageAlt: "Filtration funnel with filter paper containing residue A and collecting filtrate B in beaker below",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Beaker at bottom -->
  <rect x="110" y="115" width="100" height="65" fill="#f1f5f9" stroke="#334155" stroke-width="2" rx="3" />
  <!-- Filtrate liquid in beaker -->
  <path d="M 112 145 L 208 145 L 208 178 L 112 178 Z" fill="#93c5fd" opacity="0.6" />
  <!-- Funnel -->
  <polygon points="105,40 215,40 168,95 168,135 152,135 152,95" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" />
  <!-- Filter paper cone -->
  <polygon points="115,45 205,45 160,92" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5" />
  <!-- Insoluble residue solid -->
  <circle cx="160" cy="70" r="8" fill="#78350f" />
  <circle cx="154" cy="74" r="5" fill="#9a3412" />
  <circle cx="166" cy="73" r="6" fill="#9a3412" />
  <!-- Mixture pouring label -->
  <text x="80" y="30" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">Mixture</text>
  <line x1="105" y1="32" x2="135" y2="42" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3" />
  <!-- Arrow to residue A -->
  <line x1="205" y1="55" x2="245" y2="55" stroke="#dc2626" stroke-width="2" />
  <polygon points="205,55 213,51 213,59" fill="#dc2626" />
  <text x="255" y="60" font-size="14" font-family="sans-serif" font-weight="bold" fill="#dc2626">A (Residue)</text>
  <!-- Arrow to filtrate B -->
  <line x1="160" y1="165" x2="235" y2="165" stroke="#2563eb" stroke-width="2" />
  <polygon points="165,165 173,161 173,169" fill="#2563eb" />
  <text x="245" y="170" font-size="14" font-family="sans-serif" font-weight="bold" fill="#2563eb">B (Filtrate)</text>
</svg>`
  },
  {
    id: "chem_diag_502",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Separation Techniques: Simple Distillation & Condenser",
    bookQuestionNum: 502,
    text: "In the distillation setup shown, the main function of the condenser is to",
    options: {
      A: "heat the mixture",
      B: "cool vapour into liquid",
      C: "increase the boiling point",
      D: "remove dissolved salts"
    },
    answer: "B",
    explanation: "Cold water removes heat from the vapour, causing it to condense into liquid distillate.",
    page: 201,
    hasImage: true,
    imageCaption: "Figure 2: Simple distillation apparatus with Liebig condenser",
    imageAlt: "Distillation flask with thermometer connected to Liebig condenser sloping down into receiver beaker",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Distillation flask -->
  <circle cx="65" cy="130" r="28" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <rect x="58" y="70" width="14" height="40" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <path d="M 45 138 Q 65 155 85 138 Z" fill="#93c5fd" opacity="0.6" />
  <!-- Thermometer -->
  <line x1="65" y1="50" x2="65" y2="100" stroke="#dc2626" stroke-width="2.5" />
  <text x="65" y="42" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Thermometer</text>
  <!-- Condenser jacket -->
  <line x1="72" y1="85" x2="225" y2="135" stroke="#64748b" stroke-width="4" />
  <rect x="95" y="80" width="115" height="26" rx="6" fill="#bfdbfe" opacity="0.7" stroke="#1d4ed8" stroke-width="1.5" transform="rotate(18 152 93)" />
  <text x="160" y="80" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Condenser</text>
  <!-- Receiver beaker -->
  <rect x="235" y="140" width="45" height="40" fill="#f1f5f9" stroke="#334155" stroke-width="2" rx="2" />
  <rect x="237" y="160" width="41" height="18" fill="#60a5fa" opacity="0.6" />
  <line x1="225" y1="135" x2="245" y2="155" stroke="#64748b" stroke-width="2" />
  <text x="257" y="132" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Receiver</text>
</svg>`
  },
  {
    id: "chem_diag_503",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Volumetric Analysis: Acid–Base Titration Setup",
    bookQuestionNum: 503,
    text: "During an acid–base titration, the liquid placed in the burette is usually the",
    options: {
      A: "indicator only",
      B: "unknown solid",
      C: "standard solution or titrant",
      D: "wash water"
    },
    answer: "C",
    explanation: "The burette delivers a measured volume of titrant into the conical flask.",
    page: 202,
    hasImage: true,
    imageCaption: "Figure 3: Acid–base titration apparatus with burette and conical flask",
    imageAlt: "Vertical graduated burette clamped above conical flask containing analyte solution",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Burette tube -->
  <rect x="135" y="20" width="14" height="100" fill="#f1f5f9" stroke="#334155" stroke-width="2" rx="1" />
  <!-- Liquid in burette -->
  <rect x="137" y="45" width="10" height="73" fill="#93c5fd" opacity="0.7" />
  <!-- Graduations -->
  <line x1="145" y1="35" x2="149" y2="35" stroke="#475569" stroke-width="1" />
  <line x1="145" y1="50" x2="149" y2="50" stroke="#475569" stroke-width="1" />
  <line x1="145" y1="65" x2="149" y2="65" stroke="#475569" stroke-width="1" />
  <line x1="145" y1="80" x2="149" y2="80" stroke="#475569" stroke-width="1" />
  <line x1="145" y1="95" x2="149" y2="95" stroke="#475569" stroke-width="1" />
  <!-- Stopcock valve -->
  <circle cx="142" cy="123" r="4" fill="#0f172a" />
  <line x1="134" y1="123" x2="150" y2="123" stroke="#0f172a" stroke-width="2.5" />
  <line x1="142" y1="127" x2="142" y2="135" stroke="#334155" stroke-width="2" />
  <!-- Labels -->
  <text x="165" y="45" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">Burette</text>
  <text x="90" y="65" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2563eb">Titrant</text>
  <line x1="125" y1="62" x2="135" y2="62" stroke="#2563eb" stroke-width="1.5" />
  <!-- Conical flask below -->
  <polygon points="122,142 162,142 185,185 99,185" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <polygon points="108,183 176,183 165,165 119,165" fill="#fbcfe8" opacity="0.6" />
  <text x="200" y="165" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">Conical flask</text>
</svg>`
  },
  {
    id: "chem_diag_504",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Electrolysis: Aqueous Copper(II) Sulphate",
    bookQuestionNum: 504,
    text: "Aqueous copper(II) sulphate is electrolysed using inert carbon electrodes. What is deposited at the cathode?",
    options: {
      A: "Copper",
      B: "Oxygen",
      C: "Sulphur",
      D: "Hydrogen only"
    },
    answer: "A",
    explanation: "Cu²⁺ ions are preferentially discharged at the cathode: Cu²⁺ + 2e⁻ → Cu(s).",
    page: 202,
    hasImage: true,
    imageCaption: "Figure 4: Electrolysis of aqueous copper(II) sulphate with inert carbon electrodes",
    imageAlt: "Electrolytic cell showing anode and cathode immersed in copper sulphate solution with carbon electrodes",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Tank container -->
  <rect x="70" y="70" width="180" height="105" fill="#eff6ff" stroke="#334155" stroke-width="2" rx="4" />
  <!-- Blue CuSO4 solution -->
  <rect x="72" y="105" width="176" height="68" fill="#93c5fd" opacity="0.5" />
  <text x="160" y="135" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1e3a8a">CuSO₄(aq)</text>
  <!-- Anode (+) -->
  <rect x="105" y="45" width="12" height="75" fill="#1e293b" rx="2" />
  <text x="111" y="38" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">(+) anode</text>
  <!-- Cathode (-) -->
  <rect x="200" y="45" width="12" height="75" fill="#1e293b" rx="2" />
  <text x="206" y="38" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2563eb">(−) cathode</text>
  <!-- Copper deposit on cathode -->
  <rect x="198" y="105" width="16" height="18" fill="#b45309" stroke="#78350f" stroke-width="1" />
  <!-- Label Carbon Electrodes -->
  <text x="258" y="95" font-size="10" font-family="sans-serif" font-weight="bold" fill="#0f172a">Carbon</text>
  <text x="258" y="108" font-size="10" font-family="sans-serif" fill="#475569">electrodes</text>
</svg>`
  },
  {
    id: "chem_diag_505",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Chemical Energetics: Exothermic Reaction Profile",
    bookQuestionNum: 505,
    text: "The energy profile shown represents a reaction in which the products have",
    options: {
      A: "higher energy than reactants",
      B: "the same energy as reactants",
      C: "lower energy than reactants",
      D: "zero activation energy"
    },
    answer: "C",
    explanation: "Products lie at a lower energy level than reactants, so the reaction is exothermic.",
    page: 202,
    hasImage: true,
    imageCaption: "Figure 5: Exothermic reaction energy profile diagram",
    imageAlt: "Reaction energy profile showing reactants at higher energy level than products with activation peak",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Axes -->
  <line x1="50" y1="170" x2="280" y2="170" stroke="#334155" stroke-width="2" />
  <line x1="50" y1="170" x2="50" y2="30" stroke="#334155" stroke-width="2" />
  <polygon points="50,22 46,32 54,32" fill="#334155" />
  <polygon points="288,170 278,166 278,174" fill="#334155" />
  <text x="45" y="25" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="end" fill="#0f172a">Energy</text>
  <text x="275" y="188" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="end" fill="#0f172a">Reaction path</text>
  <!-- Energy Profile Curve -->
  <!-- Reactants plateau -->
  <line x1="60" y1="85" x2="110" y2="85" stroke="#2563eb" stroke-width="3" />
  <text x="85" y="78" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Reactants</text>
  <!-- Activation hump -->
  <path d="M 110 85 Q 165 30 220 125" fill="none" stroke="#2563eb" stroke-width="3" />
  <!-- Products plateau -->
  <line x1="220" y1="125" x2="265" y2="125" stroke="#2563eb" stroke-width="3" />
  <text x="242" y="118" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">Products</text>
  <!-- ΔH arrow -->
  <line x1="165" y1="85" x2="165" y2="125" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3" />
</svg>`
  },
  {
    id: "chem_diag_506",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Reaction Rates: Gas Volume vs Time Curve",
    bookQuestionNum: 506,
    text: "The graph shows the volume of gas produced against time. At the point where the curve becomes horizontal, the reaction",
    options: {
      A: "has reached completion",
      B: "is at its fastest rate",
      C: "has just started",
      D: "has reversed completely"
    },
    answer: "A",
    explanation: "The volume no longer increases, indicating that no more gas is being produced and the reaction has effectively stopped.",
    page: 203,
    hasImage: true,
    imageCaption: "Figure 6: Volume of gas produced against time curve",
    imageAlt: "Rate of reaction curve showing volume of gas rising steeply then leveling off horizontally",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Axes -->
  <line x1="60" y1="160" x2="280" y2="160" stroke="#334155" stroke-width="2" />
  <line x1="60" y1="160" x2="60" y2="30" stroke="#334155" stroke-width="2" />
  <polygon points="60,22 56,32 64,32" fill="#334155" />
  <polygon points="288,160 278,156 278,164" fill="#334155" />
  <text x="55" y="40" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="end" fill="#0f172a">Volume</text>
  <text x="55" y="52" font-size="10" font-family="sans-serif" text-anchor="end" fill="#475569">of gas</text>
  <text x="270" y="176" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="end" fill="#0f172a">Time</text>
  <!-- Reaction curve -->
  <path d="M 60 160 Q 110 55 200 55 L 265 55" fill="none" stroke="#2563eb" stroke-width="3" />
  <!-- Horizontal indicator line -->
  <line x1="190" y1="55" x2="270" y2="55" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4" />
  <circle cx="205" cy="55" r="4" fill="#dc2626" />
</svg>`
  },
  {
    id: "chem_diag_507",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Gas Preparation: Collection Over Water & Solubility",
    bookQuestionNum: 507,
    text: "The gas generated in the reaction vessel is led through a delivery tube. Which property makes collection over water unsuitable for ammonia?",
    options: {
      A: "It is colourless",
      B: "It is less dense than air",
      C: "It is highly soluble in water",
      D: "It has a pungent smell"
    },
    answer: "C",
    explanation: "Ammonia dissolves readily in water, so it cannot be collected effectively by displacement of water.",
    page: 203,
    hasImage: true,
    imageCaption: "Figure 7: Laboratory gas generation and collection apparatus",
    imageAlt: "Reaction vessel with delivery tube leading to collection over water",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Reaction flask -->
  <rect x="70" y="85" width="55" height="75" fill="#f1f5f9" stroke="#334155" stroke-width="2" rx="3" />
  <rect x="72" y="125" width="51" height="33" fill="#cbd5e1" opacity="0.6" />
  <text x="97" y="105" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Reaction</text>
  <text x="97" y="117" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#475569">mixture</text>
  <!-- Delivery tube -->
  <polyline points="97,85 97,60 180,60 180,95 230,95 230,140" fill="none" stroke="#1e293b" stroke-width="3" />
  <!-- Water trough & gas jar -->
  <rect x="200" y="130" width="60" height="40" fill="#93c5fd" opacity="0.5" stroke="#334155" stroke-width="1.5" />
  <line x1="205" y1="170" x2="255" y2="170" stroke="#0f172a" stroke-width="2.5" />
  <text x="240" y="85" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2563eb">Gas</text>
</svg>`
  },
  {
    id: "chem_diag_508",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Separation Techniques: Paper Chromatography",
    bookQuestionNum: 508,
    text: "In paper chromatography, the spots shown separate because the components",
    options: {
      A: "have identical solubilities",
      B: "move at different rates between the phases",
      C: "all evaporate at once",
      D: "react with the paper"
    },
    answer: "B",
    explanation: "Different attractions to the mobile solvent and stationary paper cause different migration rates.",
    page: 203,
    hasImage: true,
    imageCaption: "Figure 8: Paper chromatography strip showing separated component spots",
    imageAlt: "Chromatogram strip showing solvent level, separated component spots at various heights, and solvent front",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Chromatography paper sheet -->
  <rect x="90" y="25" width="140" height="150" fill="#ffffff" stroke="#334155" stroke-width="2" rx="2" />
  <!-- Solvent front near top -->
  <line x1="90" y1="50" x2="230" y2="50" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <text x="245" y="48" font-size="10" font-family="sans-serif" font-weight="bold" fill="#0f172a">Solvent</text>
  <text x="245" y="60" font-size="10" font-family="sans-serif" fill="#475569">front</text>
  <!-- Separated spots -->
  <ellipse cx="120" cy="120" rx="8" ry="5" fill="#f97316" stroke="#c2410c" stroke-width="1.5" />
  <ellipse cx="150" cy="80" rx="9" ry="5" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5" />
  <ellipse cx="180" cy="120" rx="8" ry="5" fill="#10b981" stroke="#047857" stroke-width="1.5" />
  <ellipse cx="205" cy="65" rx="9" ry="5" fill="#8b5cf6" stroke="#6d28d9" stroke-width="1.5" />
  <!-- Solvent baseline level -->
  <line x1="90" y1="145" x2="230" y2="145" stroke="#334155" stroke-width="2" />
  <text x="135" y="162" font-size="10" font-family="sans-serif" font-weight="bold" fill="#0f172a">Solvent level</text>
</svg>`
  },
  {
    id: "chem_diag_509",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Atomic Structure: Bohr Shell Electronic Configuration",
    bookQuestionNum: 509,
    text: "The atom represented has an outermost electron shell containing how many electrons if its arrangement is 2,8,1?",
    options: {
      A: "1",
      B: "2",
      C: "8",
      D: "11"
    },
    answer: "A",
    explanation: "The third shell contains one electron; the atom has electronic configuration 2,8,1.",
    page: 204,
    hasImage: true,
    imageCaption: "Figure 9: Bohr electron shell diagram for an atom with configuration 2,8,1",
    imageAlt: "Bohr atomic model showing nucleus X with 3 concentric shells having 2, 8, and 1 valence electron",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Nucleus -->
  <circle cx="160" cy="100" r="18" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="160" y="104" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#713f12">X</text>
  <text x="160" y="75" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Nucleus</text>
  <!-- Shell 1 (r=35) -->
  <circle cx="160" cy="100" r="35" fill="none" stroke="#64748b" stroke-width="1.5" />
  <circle cx="160" cy="65" r="3.5" fill="#0f172a" />
  <circle cx="160" cy="135" r="3.5" fill="#0f172a" />
  <!-- Shell 2 (r=55) -->
  <circle cx="160" cy="100" r="55" fill="none" stroke="#64748b" stroke-width="1.5" />
  <circle cx="121" cy="61" r="3.5" fill="#0f172a" /><circle cx="199" cy="61" r="3.5" fill="#0f172a" />
  <circle cx="121" cy="139" r="3.5" fill="#0f172a" /><circle cx="199" cy="139" r="3.5" fill="#0f172a" />
  <circle cx="105" cy="100" r="3.5" fill="#0f172a" /><circle cx="215" cy="100" r="3.5" fill="#0f172a" />
  <circle cx="160" cy="45" r="3.5" fill="#0f172a" /><circle cx="160" cy="155" r="3.5" fill="#0f172a" />
  <!-- Shell 3 (r=75) with 1 electron -->
  <circle cx="160" cy="100" r="75" fill="none" stroke="#2563eb" stroke-width="2" />
  <circle cx="235" cy="100" r="5" fill="#dc2626" />
  <text x="245" y="95" font-size="11" font-family="sans-serif" font-weight="bold" fill="#dc2626">1 e⁻</text>
</svg>`
  },
  {
    id: "chem_diag_510",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Chemical Bonding: Ionic Crystal Lattice",
    bookQuestionNum: 510,
    text: "The alternating positive and negative ions in the lattice are held together mainly by",
    options: {
      A: "metallic bonding",
      B: "hydrogen bonding",
      C: "electrostatic attraction",
      D: "van der Waals forces"
    },
    answer: "C",
    explanation: "An ionic crystal is held together by strong electrostatic attraction between oppositely charged ions.",
    page: 204,
    hasImage: true,
    imageCaption: "Figure 10: Alternating positive and negative ions in an ionic lattice",
    imageAlt: "Grid of alternating cations (+) and anions (-) demonstrating ionic lattice attraction",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- 3 rows x 4 cols grid -->
  <!-- Row 1 -->
  <circle cx="85" cy="60" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="85" y="65" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">+</text>
  <circle cx="135" cy="60" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="135" y="65" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2563eb">−</text>
  <circle cx="185" cy="60" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="185" y="65" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">+</text>
  <circle cx="235" cy="60" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="235" y="65" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2563eb">−</text>

  <!-- Row 2 -->
  <circle cx="85" cy="105" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="85" y="110" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2563eb">−</text>
  <circle cx="135" cy="105" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="135" y="110" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">+</text>
  <circle cx="185" cy="105" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="185" y="110" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2563eb">−</text>
  <circle cx="235" cy="105" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="235" y="110" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">+</text>

  <!-- Row 3 -->
  <circle cx="85" cy="150" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="85" y="155" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">+</text>
  <circle cx="135" cy="150" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="135" y="155" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2563eb">−</text>
  <circle cx="185" cy="150" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="185" y="155" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">+</text>
  <circle cx="235" cy="150" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="235" y="155" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2563eb">−</text>
</svg>`
  },
  {
    id: "chem_diag_511",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Organic Chemistry: Alkane Chain Nomenclature",
    bookQuestionNum: 511,
    text: "The carbon chain shown contains five carbon atoms joined by single bonds. The parent hydrocarbon is",
    options: {
      A: "pentane",
      B: "pentene",
      C: "pentyne",
      D: "pentanol"
    },
    answer: "A",
    explanation: "A five-carbon saturated open-chain hydrocarbon is named pentane; the suffix -ane indicates single bonds.",
    page: 204,
    hasImage: true,
    imageCaption: "Figure 11: Five-carbon saturated open-chain skeletal formula",
    imageAlt: "Zigzag carbon chain C-C-C-C-C representing five-carbon alkane pentane",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Zigzag 5 carbon chain -->
  <line x1="60" y1="120" x2="110" y2="70" stroke="#0f172a" stroke-width="3" />
  <line x1="110" y1="70" x2="160" y2="120" stroke="#0f172a" stroke-width="3" />
  <line x1="160" y1="120" x2="210" y2="70" stroke="#0f172a" stroke-width="3" />
  <line x1="210" y1="70" x2="260" y2="120" stroke="#0f172a" stroke-width="3" />
  <!-- Carbon labels -->
  <text x="55" y="125" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="end" fill="#1e293b">C</text>
  <text x="110" y="62" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1e293b">C</text>
  <text x="160" y="138" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1e293b">C</text>
  <text x="210" y="62" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1e293b">C</text>
  <text x="265" y="125" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="start" fill="#1e293b">C</text>
  <!-- Subtitle -->
  <text x="160" y="165" font-size="11" font-family="sans-serif" fill="#475569" text-anchor="middle">Each carbon has enough H atoms to complete four bonds</text>
</svg>`
  },
  {
    id: "chem_diag_512",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Organic Chemistry: Carboxylic Acid Functional Group",
    bookQuestionNum: 512,
    text: "The functional group shown is characteristic of a",
    options: {
      A: "ketone",
      B: "carboxylic acid",
      C: "ether",
      D: "aldehyde"
    },
    answer: "B",
    explanation: "The –COOH group is the carboxyl functional group found in carboxylic acids.",
    page: 205,
    hasImage: true,
    imageCaption: "Figure 12: Carboxyl functional group structure (CH3-COOH)",
    imageAlt: "Structural formula showing ethanoic acid carboxyl group CH3-C(=O)OH",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- CH3 group -->
  <text x="80" y="105" font-size="18" font-family="sans-serif" font-weight="bold" fill="#0f172a">CH₃</text>
  <!-- Single bond to C -->
  <line x1="125" y1="100" x2="160" y2="100" stroke="#0f172a" stroke-width="3" />
  <!-- Central Carbon -->
  <text x="168" y="105" font-size="18" font-family="sans-serif" font-weight="bold" fill="#0f172a">C</text>
  <!-- Double bond to O -->
  <line x1="185" y1="92" x2="225" y2="68" stroke="#dc2626" stroke-width="2.5" />
  <line x1="190" y1="100" x2="230" y2="76" stroke="#dc2626" stroke-width="2.5" />
  <text x="235" y="70" font-size="18" font-family="sans-serif" font-weight="bold" fill="#dc2626">O</text>
  <!-- Single bond to OH -->
  <line x1="185" y1="108" x2="225" y2="132" stroke="#2563eb" stroke-width="3" />
  <text x="235" y="140" font-size="18" font-family="sans-serif" font-weight="bold" fill="#2563eb">OH</text>
  <!-- Label -->
  <text x="250" y="100" font-size="11" font-family="sans-serif" fill="#64748b">(structure)</text>
</svg>`
  },
  {
    id: "chem_diag_513",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Periodic Chemistry: Periodic Table Trends & Atomic Radius",
    bookQuestionNum: 513,
    text: "Across a period from left to right, the general trend in atomic radius is that it",
    options: {
      A: "increases",
      B: "decreases",
      C: "remains constant",
      D: "first doubles"
    },
    answer: "B",
    explanation: "Nuclear charge increases while added electrons enter the same main shell, pulling the electron cloud closer.",
    page: 205,
    hasImage: true,
    imageCaption: "Figure 13: Elements across Period 2 and Period 3 of the Periodic Table",
    imageAlt: "Periodic table segment showing elements Na to P and Li to N arranged across periods",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Period 2 boxes -->
  <g transform="translate(45, 60)">
    <rect x="0" y="0" width="40" height="35" fill="#f1f5f9" stroke="#334155" stroke-width="1.5" />
    <text x="20" y="23" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Li</text>
    <rect x="45" y="0" width="40" height="35" fill="#f1f5f9" stroke="#334155" stroke-width="1.5" />
    <text x="65" y="23" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Be</text>
    <rect x="90" y="0" width="40" height="35" fill="#f1f5f9" stroke="#334155" stroke-width="1.5" />
    <text x="110" y="23" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">B</text>
    <rect x="135" y="0" width="40" height="35" fill="#f1f5f9" stroke="#334155" stroke-width="1.5" />
    <text x="155" y="23" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">C</text>
    <rect x="180" y="0" width="40" height="35" fill="#f1f5f9" stroke="#334155" stroke-width="1.5" />
    <text x="200" y="23" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">N</text>
  </g>
  <!-- Period 3 boxes -->
  <g transform="translate(45, 105)">
    <rect x="0" y="0" width="40" height="35" fill="#f1f5f9" stroke="#334155" stroke-width="1.5" />
    <text x="20" y="23" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Na</text>
    <rect x="45" y="0" width="40" height="35" fill="#f1f5f9" stroke="#334155" stroke-width="1.5" />
    <text x="65" y="23" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Mg</text>
    <rect x="90" y="0" width="40" height="35" fill="#f1f5f9" stroke="#334155" stroke-width="1.5" />
    <text x="110" y="23" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Al</text>
    <rect x="135" y="0" width="40" height="35" fill="#f1f5f9" stroke="#334155" stroke-width="1.5" />
    <text x="155" y="23" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Si</text>
    <rect x="180" y="0" width="40" height="35" fill="#f1f5f9" stroke="#334155" stroke-width="1.5" />
    <text x="200" y="23" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">P</text>
  </g>
  <!-- Direction Arrow -->
  <line x1="70" y1="160" x2="245" y2="160" stroke="#2563eb" stroke-width="2.5" />
  <polygon points="252,160 242,155 242,165" fill="#2563eb" />
  <text x="160" y="178" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Across a period →</text>
</svg>`
  },
  {
    id: "chem_diag_514",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Acids, Bases & Salts: pH Scale",
    bookQuestionNum: 514,
    text: "A solution with pH 3 is located in which region of the scale?",
    options: {
      A: "alkaline",
      B: "neutral",
      C: "acidic",
      D: "strongly basic"
    },
    answer: "C",
    explanation: "A pH below 7 indicates an acidic solution.",
    page: 205,
    hasImage: true,
    imageCaption: "Figure 14: The 0–14 pH scale showing acidic, neutral, and alkaline regions",
    imageAlt: "pH scale axis graduated from 0 to 14 divided into acidic, neutral at 7, and alkaline regions",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Main pH line -->
  <line x1="30" y1="100" x2="290" y2="100" stroke="#0f172a" stroke-width="3" />
  <!-- Region color backgrounds -->
  <rect x="30" y="88" width="130" height="24" fill="#fee2e2" opacity="0.6" rx="2" />
  <rect x="160" y="88" width="130" height="24" fill="#dbeafe" opacity="0.6" rx="2" />
  <!-- Graduation marks -->
  <g stroke="#0f172a" stroke-width="2">
    <line x1="30" y1="92" x2="30" y2="108" /><!-- 0 -->
    <line x1="67" y1="94" x2="67" y2="106" /><!-- 2 -->
    <line x1="104" y1="94" x2="104" y2="106" /><!-- 4 -->
    <line x1="141" y1="94" x2="141" y2="106" /><!-- 6 -->
    <line x1="160" y1="90" x2="160" y2="110" stroke-width="3" stroke="#16a34a" /><!-- 7 Neutral -->
    <line x1="179" y1="94" x2="179" y2="106" /><!-- 8 -->
    <line x1="216" y1="94" x2="216" y2="106" /><!-- 10 -->
    <line x1="253" y1="94" x2="253" y2="106" /><!-- 12 -->
    <line x1="290" y1="92" x2="290" y2="108" /><!-- 14 -->
  </g>
  <!-- Numbers -->
  <g font-size="10" font-family="sans-serif" text-anchor="middle" fill="#475569">
    <text x="30" y="125">0</text>
    <text x="67" y="125">2</text>
    <text x="104" y="125">4</text>
    <text x="141" y="125">6</text>
    <text x="160" y="125" font-weight="bold" fill="#16a34a">7</text>
    <text x="179" y="125">8</text>
    <text x="216" y="125">10</text>
    <text x="253" y="125">12</text>
    <text x="290" y="125">14</text>
  </g>
  <!-- Region Labels -->
  <text x="85" y="75" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">Acidic</text>
  <text x="160" y="75" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#16a34a">Neutral</text>
  <text x="235" y="75" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2563eb">Alkaline</text>
  <!-- Target marker at pH 3 -->
  <circle cx="85.5" cy="100" r="5" fill="#dc2626" />
  <line x1="85.5" y1="105" x2="85.5" y2="145" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="2,2" />
  <text x="85.5" y="158" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">pH = 3</text>
</svg>`
  },
  {
    id: "chem_diag_515",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Gas Laws: Charles's Law (V vs T)",
    bookQuestionNum: 515,
    text: "The straight-line graph shows gas volume against absolute temperature at constant pressure. It illustrates",
    options: {
      A: "Boyle's law",
      B: "Charles's law",
      C: "Graham's law",
      D: "Dalton's law"
    },
    answer: "B",
    explanation: "At constant pressure, gas volume is directly proportional to absolute temperature (Charles's law).",
    page: 206,
    hasImage: true,
    imageCaption: "Figure 15: Volume versus absolute temperature at constant pressure",
    imageAlt: "Directly proportional straight line graph of volume versus absolute temperature in Kelvin",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Axes -->
  <line x1="60" y1="160" x2="280" y2="160" stroke="#334155" stroke-width="2" />
  <line x1="60" y1="160" x2="60" y2="30" stroke="#334155" stroke-width="2" />
  <polygon points="60,22 56,32 64,32" fill="#334155" />
  <polygon points="288,160 278,156 278,164" fill="#334155" />
  <text x="55" y="45" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="end" fill="#0f172a">Volume</text>
  <text x="270" y="176" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="end" fill="#0f172a">Temperature (K)</text>
  <!-- Direct proportion line -->
  <line x1="60" y1="160" x2="265" y2="55" stroke="#2563eb" stroke-width="3" />
  <circle cx="60" cy="160" r="3.5" fill="#0f172a" />
  <text x="50" y="172" font-size="10" font-family="sans-serif" fill="#64748b">0</text>
</svg>`
  },
  {
    id: "chem_diag_516",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Electrochemistry: Galvanic Cell Electron Flow",
    bookQuestionNum: 516,
    text: "In the cell diagram, electrons flow through the external wire from the",
    options: {
      A: "copper electrode to zinc electrode",
      B: "zinc electrode to copper electrode",
      C: "salt bridge to zinc",
      D: "electrolyte to the wire"
    },
    answer: "B",
    explanation: "Zinc is oxidised and releases electrons; these travel through the wire to the copper electrode.",
    page: 206,
    hasImage: true,
    imageCaption: "Figure 16: Zinc–copper electrochemical cell (Daniell cell)",
    imageAlt: "Daniell electrochemical cell with zinc half-cell and copper half-cell connected by salt bridge and wire",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Left Beaker (ZnSO4) -->
  <rect x="55" y="90" width="80" height="70" fill="#f1f5f9" stroke="#334155" stroke-width="2" rx="2" />
  <rect x="57" y="115" width="76" height="43" fill="#e2e8f0" opacity="0.7" />
  <text x="95" y="145" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">ZnSO₄</text>
  <!-- Zinc electrode -->
  <rect x="80" y="65" width="12" height="65" fill="#94a3b8" stroke="#475569" stroke-width="1.5" />
  <text x="86" y="58" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Zn</text>

  <!-- Right Beaker (CuSO4) -->
  <rect x="185" y="90" width="80" height="70" fill="#f1f5f9" stroke="#334155" stroke-width="2" rx="2" />
  <rect x="187" y="115" width="76" height="43" fill="#93c5fd" opacity="0.6" />
  <text x="225" y="145" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1e3a8a">CuSO₄</text>
  <!-- Copper electrode -->
  <rect x="225" y="65" width="12" height="65" fill="#f97316" stroke="#c2410c" stroke-width="1.5" />
  <text x="231" y="58" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#c2410c">Cu</text>

  <!-- Salt Bridge -->
  <path d="M 115 125 L 115 75 Q 160 65 205 75 L 205 125" fill="none" stroke="#64748b" stroke-width="8" stroke-linecap="round" />
  <text x="160" y="90" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#334155">Salt bridge</text>

  <!-- External Wire & Electron Flow -->
  <polyline points="86,65 86,30 231,30 231,65" fill="none" stroke="#1e293b" stroke-width="2" />
  <polygon points="175,30 165,26 165,34" fill="#dc2626" />
  <text x="160" y="22" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#dc2626">e⁻ flow (Wire)</text>
</svg>`
  },
  {
    id: "chem_diag_517",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Solubility: Temperature Dependence & Solubility Curves",
    bookQuestionNum: 517,
    text: "From the solubility curve, the solubility of the substance generally",
    options: {
      A: "decreases as temperature rises",
      B: "increases as temperature rises",
      C: "does not change",
      D: "becomes zero at high temperature"
    },
    answer: "B",
    explanation: "The upward-sloping curve indicates increasing solubility with increasing temperature.",
    page: 206,
    hasImage: true,
    imageCaption: "Figure 17: Solubility curve showing variation of solubility with temperature",
    imageAlt: "Graph of solubility against temperature showing steady increase with temperature rise",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Axes -->
  <line x1="60" y1="160" x2="280" y2="160" stroke="#334155" stroke-width="2" />
  <line x1="60" y1="160" x2="60" y2="30" stroke="#334155" stroke-width="2" />
  <polygon points="60,22 56,32 64,32" fill="#334155" />
  <polygon points="288,160 278,156 278,164" fill="#334155" />
  <text x="55" y="45" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="end" fill="#0f172a">Solubility</text>
  <text x="270" y="176" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="end" fill="#0f172a">Temperature</text>
  <!-- Upward Solubility Curve -->
  <path d="M 60 155 Q 160 145 265 50" fill="none" stroke="#2563eb" stroke-width="3" />
  <circle cx="60" cy="155" r="3.5" fill="#2563eb" />
  <circle cx="265" cy="50" r="3.5" fill="#2563eb" />
</svg>`
  },
  {
    id: "chem_diag_518",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Organic Chemistry: Structural Isomerism in Butane",
    bookQuestionNum: 518,
    text: "Structures I and II have the same molecular formula but different structural arrangements. They are",
    options: {
      A: "isotopes",
      B: "allotropes",
      C: "structural isomers",
      D: "homologues"
    },
    answer: "C",
    explanation: "They are both C₄H₁₀ but have different carbon skeletons, so they are structural isomers.",
    page: 207,
    hasImage: true,
    imageCaption: "Figure 18: Structural formulas of butane and 2-methylpropane (isobutane)",
    imageAlt: "Comparative skeletal structures showing straight-chain butane I and branched 2-methylpropane II",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Structure I -->
  <g transform="translate(40, 50)">
    <rect x="-10" y="-15" width="250" height="40" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="4" />
    <text x="0" y="10" font-size="15" font-family="monospace" font-weight="bold" fill="#0f172a">CH₃—CH₂—CH₂—CH₃</text>
    <text x="220" y="10" font-size="15" font-family="sans-serif" font-weight="bold" fill="#2563eb">I</text>
  </g>
  <!-- Structure II -->
  <g transform="translate(40, 115)">
    <rect x="-10" y="-15" width="250" height="50" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="4" />
    <text x="0" y="12" font-size="15" font-family="monospace" font-weight="bold" fill="#0f172a">CH₃—CH(CH₃)—CH₃</text>
    <text x="220" y="12" font-size="15" font-family="sans-serif" font-weight="bold" fill="#dc2626">II</text>
  </g>
  <text x="160" y="180" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#64748b">Molecular formula: C₄H₁₀</text>
</svg>`
  },
  {
    id: "chem_diag_519",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Redox Reactions: Electron Transfer & Oxidation",
    bookQuestionNum: 519,
    text: "The diagram shows electron transfer from zinc to copper(II) ions. Zinc is therefore",
    options: {
      A: "reduced",
      B: "oxidised",
      C: "a catalyst",
      D: "neutralised"
    },
    answer: "B",
    explanation: "Zinc loses electrons to form Zn²⁺; loss of electrons is oxidation.",
    page: 207,
    hasImage: true,
    imageCaption: "Figure 19: Electron transfer diagram from zinc to copper(II) ions",
    imageAlt: "Redox diagram showing transfer of 2 electrons from Zinc metal to Copper 2+ ion",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Zinc and Copper text -->
  <text x="70" y="85" font-size="22" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Zn</text>
  <text x="250" y="85" font-size="22" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#0f172a">Cu²⁺</text>
  <!-- Transfer Arrow -->
  <line x1="95" y1="80" x2="215" y2="80" stroke="#2563eb" stroke-width="3" />
  <polygon points="225,80 213,74 213,86" fill="#2563eb" />
  <text x="160" y="70" font-size="15" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2563eb">2e⁻</text>
  <!-- Half reactions below -->
  <rect x="40" y="115" width="240" height="45" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" rx="4" />
  <text x="75" y="142" font-size="13" font-family="monospace" font-weight="bold" fill="#dc2626">Zn → Zn²⁺</text>
  <text x="185" y="142" font-size="13" font-family="monospace" font-weight="bold" fill="#16a34a">Cu²⁺ → Cu</text>
</svg>`
  },
  {
    id: "chem_diag_520",
    originalChapter: 5,
    chapterTitle: "Topic 5: Diagram-Based Problem Solving in Chemistry",
    topic: "Separation Techniques: Fractional Distillation Column",
    bookQuestionNum: 520,
    text: "The fractionating column in the apparatus helps to separate liquid components because it",
    options: {
      A: "prevents boiling",
      B: "provides repeated vaporisation and condensation",
      C: "removes all impurities chemically",
      D: "lowers the atmospheric pressure"
    },
    answer: "B",
    explanation: "Repeated vaporisation and condensation improve separation of liquids with close boiling points.",
    page: 207,
    hasImage: true,
    imageCaption: "Figure 20: Fractional distillation apparatus with fractionating column",
    imageAlt: "Fractional distillation setup showing heating flask, packed fractionating column, condenser, and receiver",
    imageSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <rect width="320" height="200" fill="#f8fafc" rx="8" />
  <!-- Flask -->
  <circle cx="85" cy="155" r="24" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <!-- Fractionating column (vertical with internal plates) -->
  <rect x="75" y="60" width="20" height="75" fill="#f8fafc" stroke="#1e293b" stroke-width="2" />
  <!-- Trays / plates inside column -->
  <line x1="75" y1="72" x2="90" y2="72" stroke="#475569" stroke-width="2" />
  <line x1="80" y1="84" x2="95" y2="84" stroke="#475569" stroke-width="2" />
  <line x1="75" y1="96" x2="90" y2="96" stroke="#475569" stroke-width="2" />
  <line x1="80" y1="108" x2="95" y2="108" stroke="#475569" stroke-width="2" />
  <line x1="75" y1="120" x2="90" y2="120" stroke="#475569" stroke-width="2" />
  <text x="105" y="70" font-size="10" font-family="sans-serif" font-weight="bold" fill="#0f172a">Fractionating</text>
  <text x="105" y="82" font-size="10" font-family="sans-serif" fill="#475569">column</text>
  <!-- Arm to Condenser -->
  <polyline points="85,60 85,50 170,50 220,95" fill="none" stroke="#334155" stroke-width="3" />
  <!-- Condenser jacket -->
  <rect x="155" y="55" width="60" height="20" rx="4" fill="#bfdbfe" opacity="0.7" stroke="#1d4ed8" stroke-width="1.5" transform="rotate(35 185 65)" />
  <text x="210" y="50" font-size="10" font-family="sans-serif" font-weight="bold" fill="#1e3a8a">Condenser</text>
  <!-- Receiver beaker -->
  <rect x="230" y="130" width="40" height="40" fill="#f1f5f9" stroke="#334155" stroke-width="2" rx="2" />
  <rect x="232" y="150" width="36" height="18" fill="#93c5fd" opacity="0.6" />
</svg>`
  }
];

// Read existing file
const filePath = path.join(process.cwd(), 'src/data/jambixChemistryBank.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Update interface if imageSvg is missing
if (!content.includes('imageSvg?: string;')) {
  content = content.replace(
    'imageAlt?: string;\n}',
    'imageAlt?: string;\n  imageSvg?: string;\n}'
  );
}

// Find export const JAMBIX_CHEMISTRY_ITEMS: JambixChemistryItem[] = [
const endOfArrayRegex = /\n\];\n\nexport const JAMBIX_CHEMISTRY_100_ITEMS/;
if (!endOfArrayRegex.test(content)) {
  console.error('Could not find end of JAMBIX_CHEMISTRY_ITEMS array!');
  process.exit(1);
}

const formattedItems = chemistryDiagramQuestions.map(q => '  ' + JSON.stringify(q, null, 2).replace(/\n/g, '\n  ')).join(',\n');

content = content.replace(endOfArrayRegex, ',\n' + formattedItems + '\n];\n\nexport const JAMBIX_CHEMISTRY_100_ITEMS');

// Update header
content = content.replace(
  '* Total questions: 500',
  '* Total questions: 520\n * TOPIC 5: DIAGRAM-BASED PROBLEM SOLVING IN CHEMISTRY (QUESTIONS 501–520)'
);

// Update export aliases
if (!content.includes('JAMBIX_CHEMISTRY_520_ITEMS')) {
  content = content.replace(
    'export const JAMBIX_CHEMISTRY_500_ITEMS = JAMBIX_CHEMISTRY_ITEMS;',
    'export const JAMBIX_CHEMISTRY_500_ITEMS = JAMBIX_CHEMISTRY_ITEMS;\nexport const JAMBIX_CHEMISTRY_520_ITEMS = JAMBIX_CHEMISTRY_ITEMS;'
  );
}

// Update getChemistryDemystifiedVerifiedQuestions to map image properties
content = content.replace(
  'hasImage: false,',
  `hasImage: Boolean(item.hasImage),
    imageSvg: item.imageSvg,
    imageCaption: item.imageCaption,
    imageAlt: item.imageAlt,
    imageUrl: item.imageUrl,`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully appended 20 chemistry diagram questions to src/data/jambixChemistryBank.ts!');
