/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX PHYSICS QUESTION BANK
 * TOPIC 1: MEASUREMENTS AND UNITS (QUESTIONS 1–100)
 * TOPIC 2: SCALARS AND VECTORS (QUESTIONS 101–200)
 * Indexed directly from official syllabus specifications.
 * Total questions: 200
 */

export interface PhysicsDemystifiedItem {
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

export const PHYSICS_DEMYSTIFIED_ITEMS: PhysicsDemystifiedItem[] = [
  {
    "id": "phy_unit1_1",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 1,
    "text": "Which of the following is a fundamental physical quantity?",
    "options": {
      "A": "Force",
      "B": "Density",
      "C": "Electric current",
      "D": "Pressure"
    },
    "answer": "C",
    "explanation": "Electric current is an SI base quantity. Force, density and pressure are derived quantities.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_2",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 2,
    "text": "The SI base unit of length is the",
    "options": {
      "A": "centimetre",
      "B": "metre",
      "C": "kilometre",
      "D": "millimetre"
    },
    "answer": "B",
    "explanation": "The metre (m) is the SI base unit of length.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_3",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 3,
    "text": "Which of the following is the SI base unit of mass?",
    "options": {
      "A": "Gram",
      "B": "Newton",
      "C": "Kilogram",
      "D": "Pound"
    },
    "answer": "C",
    "explanation": "The kilogram (kg) is the SI base unit of mass.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_4",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 4,
    "text": "Which of the following is a derived physical quantity?",
    "options": {
      "A": "Time",
      "B": "Temperature",
      "C": "Length",
      "D": "Velocity"
    },
    "answer": "D",
    "explanation": "Velocity is derived from displacement divided by time.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_5",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 5,
    "text": "The SI unit of density is",
    "options": {
      "A": "kg m⁻²",
      "B": "kg m⁻³",
      "C": "N m⁻²",
      "D": "kg m s⁻¹"
    },
    "answer": "B",
    "explanation": "Density equals mass divided by volume. Its SI unit is kg/m³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_6",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 6,
    "text": "Convert 3.5 m to centimetres.",
    "options": {
      "A": "35 cm",
      "B": "350 cm",
      "C": "3,500 cm",
      "D": "0.35 cm"
    },
    "answer": "B",
    "explanation": "1 m = 100 cm. Therefore, 3.5 × 100 = 350 cm.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_7",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 7,
    "text": "Convert 72 km/h to m/s.",
    "options": {
      "A": "10 m/s",
      "B": "15 m/s",
      "C": "20 m/s",
      "D": "25 m/s"
    },
    "answer": "C",
    "explanation": "72 × 1000/3600 = 20 m/s.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_8",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 8,
    "text": "Which instrument is most suitable for measuring the internal diameter of a test tube?",
    "options": {
      "A": "Metre rule",
      "B": "Micrometer screw gauge",
      "C": "Vernier calipers",
      "D": "Spring balance"
    },
    "answer": "C",
    "explanation": "The inside jaws of Vernier calipers are designed to measure internal diameters.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_9",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 9,
    "text": "The diameter of a thin wire is best measured using a",
    "options": {
      "A": "metre rule",
      "B": "measuring cylinder",
      "C": "micrometer screw gauge",
      "D": "beam balance"
    },
    "answer": "C",
    "explanation": "A micrometer screw gauge measures small external dimensions accurately.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_10",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 10,
    "text": "An instrument has a positive zero error of 0.03 cm. If its observed reading is 5.47 cm, the corrected reading is",
    "options": {
      "A": "5.44 cm",
      "B": "5.47 cm",
      "C": "5.50 cm",
      "D": "5.53 cm"
    },
    "answer": "A",
    "explanation": "Corrected reading = observed reading − positive zero error = 5.47 − 0.03 = 5.44 cm.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_11",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 11,
    "text": "Which quantity has the same dimensions as speed?",
    "options": {
      "A": "Acceleration",
      "B": "Velocity",
      "C": "Force",
      "D": "Momentum"
    },
    "answer": "B",
    "explanation": "Speed and velocity both have dimensions LT⁻¹.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_12",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 12,
    "text": "The dimensional formula for acceleration is",
    "options": {
      "A": "LT⁻¹",
      "B": "LT⁻²",
      "C": "MLT⁻²",
      "D": "ML²T⁻²"
    },
    "answer": "B",
    "explanation": "Acceleration is velocity divided by time, giving LT⁻¹/T = LT⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_13",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 13,
    "text": "The dimensional formula for force is",
    "options": {
      "A": "MLT⁻¹",
      "B": "ML²T⁻²",
      "C": "MLT⁻²",
      "D": "MT⁻²"
    },
    "answer": "C",
    "explanation": "From F = ma, the dimensions are M × LT⁻² = MLT⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_14",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 14,
    "text": "How many significant figures are in 0.004506?",
    "options": {
      "A": "Two",
      "B": "Three",
      "C": "Four",
      "D": "Six"
    },
    "answer": "C",
    "explanation": "Leading zeros are not significant. The significant digits are 4, 5, 0 and 6.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_15",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 15,
    "text": "Express 0.0000725 in standard form.",
    "options": {
      "A": "7.25 × 10⁻⁴",
      "B": "7.25 × 10⁻⁵",
      "C": "7.25 × 10⁵",
      "D": "72.5 × 10⁻⁵"
    },
    "answer": "B",
    "explanation": "Moving the decimal point five places to the right gives 7.25, so the power is −5.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_16",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 16,
    "text": "A cube has a side length of 4 cm. Calculate its volume.",
    "options": {
      "A": "12 cm³",
      "B": "16 cm³",
      "C": "48 cm³",
      "D": "64 cm³"
    },
    "answer": "D",
    "explanation": "Volume = side³ = 4³ = 64 cm³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_17",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 17,
    "text": "A body has a mass of 240 g and a volume of 80 cm³. Calculate its density.",
    "options": {
      "A": "0.33 g/cm³",
      "B": "3.0 g/cm³",
      "C": "30 g/cm³",
      "D": "320 g/cm³"
    },
    "answer": "B",
    "explanation": "Density = mass/volume = 240/80 = 3.0 g/cm³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_18",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 18,
    "text": "One newton is equivalent to",
    "options": {
      "A": "kg m s⁻¹",
      "B": "kg m s⁻²",
      "C": "kg m² s⁻²",
      "D": "kg m⁻³"
    },
    "answer": "B",
    "explanation": "Force = mass × acceleration, so its SI unit is kg m s⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_19",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 19,
    "text": "The SI unit of work is equivalent to",
    "options": {
      "A": "kg m s⁻²",
      "B": "kg m² s⁻²",
      "C": "kg m⁻¹ s⁻²",
      "D": "kg m² s⁻¹"
    },
    "answer": "B",
    "explanation": "Work = force × distance. Therefore, J = N m = kg m² s⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_20",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 20,
    "text": "A student records the lengths of a rod as 15.2 cm, 15.4 cm and 15.3 cm. Calculate the mean length.",
    "options": {
      "A": "15.1 cm",
      "B": "15.2 cm",
      "C": "15.3 cm",
      "D": "15.4 cm"
    },
    "answer": "C",
    "explanation": "Mean = (15.2 + 15.4 + 15.3)/3 = 15.3 cm.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_21",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 21,
    "text": "Accuracy in measurement refers to",
    "options": {
      "A": "the closeness of repeated readings to one another",
      "B": "the closeness of a reading to the true value",
      "C": "the speed at which a reading is obtained",
      "D": "the number of readings taken"
    },
    "answer": "B",
    "explanation": "Accuracy describes how close a measurement is to the accepted or true value.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_22",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 22,
    "text": "A student measures a length as 50 cm when the accepted value is 48 cm. Calculate the percentage error.",
    "options": {
      "A": "2.00%",
      "B": "4.00%",
      "C": "4.17%",
      "D": "96.00%"
    },
    "answer": "C",
    "explanation": "Percentage error = |50 − 48|/48 × 100 = 4.17%.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_23",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 23,
    "text": "Which of the following is a scalar quantity?",
    "options": {
      "A": "Displacement",
      "B": "Acceleration",
      "C": "Momentum",
      "D": "Distance"
    },
    "answer": "D",
    "explanation": "Distance has magnitude only. The other quantities have magnitude and direction.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_24",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 24,
    "text": "The dimensional formula for pressure is",
    "options": {
      "A": "ML⁻¹T⁻²",
      "B": "MLT⁻²",
      "C": "ML²T⁻²",
      "D": "M⁻¹LT⁻²"
    },
    "answer": "A",
    "explanation": "Pressure = force/area. Therefore, its dimensions are MLT⁻²/L² = ML⁻¹T⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_25",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 25,
    "text": "Which of the following is the SI unit of amount of substance?",
    "options": {
      "A": "Mole",
      "B": "Candela",
      "C": "Kelvin",
      "D": "Ampere"
    },
    "answer": "A",
    "explanation": "The mole (mol) is the SI base unit of amount of substance.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_26",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 26,
    "text": "The SI base unit of thermodynamic temperature is",
    "options": {
      "A": "degree Celsius",
      "B": "joule",
      "C": "kelvin",
      "D": "watt"
    },
    "answer": "C",
    "explanation": "The kelvin (K) is the SI base unit of thermodynamic temperature.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_27",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 27,
    "text": "Which of the following is the SI base unit of luminous intensity?",
    "options": {
      "A": "Lumen",
      "B": "Lux",
      "C": "Candela",
      "D": "Watt"
    },
    "answer": "C",
    "explanation": "The candela (cd) is the SI base unit of luminous intensity.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_28",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 28,
    "text": "The SI base unit of time is the",
    "options": {
      "A": "minute",
      "B": "hour",
      "C": "second",
      "D": "day"
    },
    "answer": "C",
    "explanation": "The second (s) is the SI base unit of time.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_29",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 29,
    "text": "Which of the following is a derived SI unit?",
    "options": {
      "A": "Metre",
      "B": "Kilogram",
      "C": "Second",
      "D": "Newton"
    },
    "answer": "D",
    "explanation": "The newton is derived from the kilogram, metre and second.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_30",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 30,
    "text": "A rectangular block measures 5 cm × 4 cm × 3 cm. Calculate its volume.",
    "options": {
      "A": "12 cm³",
      "B": "20 cm³",
      "C": "47 cm³",
      "D": "60 cm³"
    },
    "answer": "D",
    "explanation": "Volume = length × breadth × height = 5 × 4 × 3 = 60 cm³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_31",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 31,
    "text": "Convert 2.4 km to metres.",
    "options": {
      "A": "24 m",
      "B": "240 m",
      "C": "2,400 m",
      "D": "24,000 m"
    },
    "answer": "C",
    "explanation": "1 km = 1,000 m. Therefore, 2.4 × 1,000 = 2,400 m.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_32",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 32,
    "text": "Convert 450 milligrams to grams.",
    "options": {
      "A": "0.045 g",
      "B": "0.45 g",
      "C": "4.5 g",
      "D": "45 g"
    },
    "answer": "B",
    "explanation": "1,000 mg = 1 g. Therefore, 450 mg = 450/1,000 = 0.45 g.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_33",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 33,
    "text": "A quantity is expressed as 6.2 × 10³ m. What is its value in ordinary notation?",
    "options": {
      "A": "620 m",
      "B": "6,200 m",
      "C": "62,000 m",
      "D": "0.0062 m"
    },
    "answer": "B",
    "explanation": "Multiplying 6.2 by 1,000 gives 6,200.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_34",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 34,
    "text": "Which of the following quantities has the SI unit kg m² s⁻²?",
    "options": {
      "A": "Force",
      "B": "Power",
      "C": "Work",
      "D": "Pressure"
    },
    "answer": "C",
    "explanation": "The joule, the SI unit of work and energy, is equivalent to kg m² s⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_35",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 35,
    "text": "The SI unit of power is",
    "options": {
      "A": "joule",
      "B": "newton",
      "C": "watt",
      "D": "pascal"
    },
    "answer": "C",
    "explanation": "Power is the rate of doing work. Its SI unit is the watt (W).",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_36",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 36,
    "text": "Which of the following is the SI unit of pressure?",
    "options": {
      "A": "N m",
      "B": "N m⁻¹",
      "C": "N m⁻²",
      "D": "N m⁻³"
    },
    "answer": "C",
    "explanation": "Pressure = force/area, so its unit is newton per square metre.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_37",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 37,
    "text": "A measurement is recorded as 8.40 cm. How many significant figures does it contain?",
    "options": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Four"
    },
    "answer": "C",
    "explanation": "The digits 8, 4 and the final zero are significant.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_38",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 38,
    "text": "Round 7.846 to three significant figures.",
    "options": {
      "A": "7.84",
      "B": "7.85",
      "C": "7.80",
      "D": "7.90"
    },
    "answer": "B",
    "explanation": "The first three significant digits are 7, 8 and 4. The next digit is 6, so the 4 rounds up to 5.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_39",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 39,
    "text": "A student measures a length as 12.6 cm. Which instrument would normally be suitable for this measurement?",
    "options": {
      "A": "Metre rule",
      "B": "Ammeter",
      "C": "Thermometer",
      "D": "Stopwatch"
    },
    "answer": "A",
    "explanation": "A metre rule is suitable for measuring lengths of this size to approximately millimetre divisions.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_40",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 40,
    "text": "Which of the following instruments measures mass?",
    "options": {
      "A": "Spring balance",
      "B": "Beam balance",
      "C": "Thermometer",
      "D": "Barometer"
    },
    "answer": "B",
    "explanation": "A beam balance compares an object's mass with known masses. A spring balance measures force or weight.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_41",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 41,
    "text": "A spring balance is primarily used to measure",
    "options": {
      "A": "mass",
      "B": "volume",
      "C": "force",
      "D": "density"
    },
    "answer": "C",
    "explanation": "A spring balance measures force through the extension of a spring.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_42",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 42,
    "text": "Which instrument is used to measure the time interval between two events?",
    "options": {
      "A": "Stopwatch",
      "B": "Barometer",
      "C": "Hydrometer",
      "D": "Ammeter"
    },
    "answer": "A",
    "explanation": "A stopwatch measures time intervals.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_43",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 43,
    "text": "The SI unit of electric charge is",
    "options": {
      "A": "ampere",
      "B": "coulomb",
      "C": "volt",
      "D": "ohm"
    },
    "answer": "B",
    "explanation": "Electric charge is measured in coulombs (C).",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_44",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 44,
    "text": "Which of the following is the SI unit of frequency?",
    "options": {
      "A": "Metre",
      "B": "Hertz",
      "C": "Second",
      "D": "Watt"
    },
    "answer": "B",
    "explanation": "Frequency is the number of cycles per second. Its unit is hertz (Hz), equivalent to s⁻¹.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_45",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 45,
    "text": "The dimensions of momentum are",
    "options": {
      "A": "MLT⁻¹",
      "B": "MLT⁻²",
      "C": "ML²T⁻²",
      "D": "MT⁻¹"
    },
    "answer": "A",
    "explanation": "Momentum = mass × velocity, giving dimensions M × LT⁻¹ = MLT⁻¹.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_46",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 46,
    "text": "The dimensions of energy are",
    "options": {
      "A": "MLT⁻²",
      "B": "ML²T⁻²",
      "C": "ML⁻¹T⁻²",
      "D": "MLT⁻¹"
    },
    "answer": "B",
    "explanation": "Energy has the same dimensions as work, which is force multiplied by displacement.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_47",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 47,
    "text": "The dimensions of power are",
    "options": {
      "A": "ML²T⁻²",
      "B": "MLT⁻²",
      "C": "ML²T⁻³",
      "D": "ML⁻¹T⁻²"
    },
    "answer": "C",
    "explanation": "Power = energy/time, giving ML²T⁻²/T = ML²T⁻³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_48",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 48,
    "text": "The dimensions of pressure multiplied by volume are equivalent to those of",
    "options": {
      "A": "force",
      "B": "energy",
      "C": "acceleration",
      "D": "momentum"
    },
    "answer": "B",
    "explanation": "Pressure × volume has dimensions (ML⁻¹T⁻²)(L³) = ML²T⁻², the dimensions of energy.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_49",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 49,
    "text": "Which of the following equations is dimensionally consistent?",
    "options": {
      "A": "Distance = speed × time",
      "B": "Distance = speed/time",
      "C": "Speed = distance × time",
      "D": "Acceleration = speed × time"
    },
    "answer": "A",
    "explanation": "Speed has dimensions LT⁻¹. Multiplying by time gives LT⁻¹ × T = L, the dimensions of distance.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_50",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 50,
    "text": "A car travels 150 m in 10 s. Calculate its average speed.",
    "options": {
      "A": "10 m/s",
      "B": "15 m/s",
      "C": "25 m/s",
      "D": "1500 m/s"
    },
    "answer": "B",
    "explanation": "Average speed = distance/time = 150/10 = 15 m/s.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_51",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 51,
    "text": "A rectangular surface has a length of 2.0 m and a width of 0.50 m. Calculate its area.",
    "options": {
      "A": "0.10 m²",
      "B": "1.0 m²",
      "C": "2.5 m²",
      "D": "4.0 m²"
    },
    "answer": "B",
    "explanation": "Area = length × width = 2.0 × 0.50 = 1.0 m².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_52",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 52,
    "text": "A cube has a volume of 125 cm³. Calculate the length of one side.",
    "options": {
      "A": "3 cm",
      "B": "4 cm",
      "C": "5 cm",
      "D": "25 cm"
    },
    "answer": "C",
    "explanation": "For a cube, V = l³. Therefore, l = ∛125 = 5 cm.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_53",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 53,
    "text": "A liquid has a mass of 0.8 kg and occupies 0.001 m³. Calculate its density.",
    "options": {
      "A": "80 kg/m³",
      "B": "800 kg/m³",
      "C": "8,000 kg/m³",
      "D": "0.0008 kg/m³"
    },
    "answer": "B",
    "explanation": "Density = mass/volume = 0.8/0.001 = 800 kg/m³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_54",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 54,
    "text": "Convert 2.5 g/cm³ to kg/m³.",
    "options": {
      "A": "25 kg/m³",
      "B": "250 kg/m³",
      "C": "2,500 kg/m³",
      "D": "25,000 kg/m³"
    },
    "answer": "C",
    "explanation": "Since 1 g/cm³ = 1,000 kg/m³, 2.5 g/cm³ = 2,500 kg/m³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_55",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 55,
    "text": "A body has a mass of 600 g and a density of 2 g/cm³. Calculate its volume.",
    "options": {
      "A": "30 cm³",
      "B": "200 cm³",
      "C": "300 cm³",
      "D": "1,200 cm³"
    },
    "answer": "C",
    "explanation": "Volume = mass/density = 600/2 = 300 cm³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_56",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 56,
    "text": "A student measures a distance of 2.36 m to the nearest centimetre. Which value is equivalent to this measurement in centimetres?",
    "options": {
      "A": "23.6 cm",
      "B": "236 cm",
      "C": "2,360 cm",
      "D": "0.236 cm"
    },
    "answer": "B",
    "explanation": "1 m = 100 cm. Therefore, 2.36 × 100 = 236 cm.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_57",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 57,
    "text": "Which of the following is a vector quantity?",
    "options": {
      "A": "Mass",
      "B": "Temperature",
      "C": "Time",
      "D": "Displacement"
    },
    "answer": "D",
    "explanation": "Displacement has both magnitude and direction.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_58",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 58,
    "text": "Which pair consists entirely of scalar quantities?",
    "options": {
      "A": "Force and velocity",
      "B": "Speed and distance",
      "C": "Momentum and displacement",
      "D": "Acceleration and time"
    },
    "answer": "B",
    "explanation": "Speed and distance have magnitude only.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_59",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 59,
    "text": "A quantity has dimensions ML²T⁻². Which of the following could it represent?",
    "options": {
      "A": "Force",
      "B": "Work",
      "C": "Pressure",
      "D": "Power"
    },
    "answer": "B",
    "explanation": "Work has dimensions of force multiplied by distance: ML T⁻² × L = ML²T⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_60",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 60,
    "text": "Which of the following is dimensionless?",
    "options": {
      "A": "Velocity",
      "B": "Acceleration",
      "C": "Relative density",
      "D": "Force"
    },
    "answer": "C",
    "explanation": "Relative density is the ratio of two densities, so their units cancel.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_61",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 61,
    "text": "A student obtains repeated readings of 10.2 cm, 10.2 cm and 10.3 cm. These readings are",
    "options": {
      "A": "widely scattered",
      "B": "closely grouped",
      "C": "necessarily inaccurate",
      "D": "impossible to compare"
    },
    "answer": "B",
    "explanation": "The readings are close to one another, indicating good repeatability or precision. This alone does not establish accuracy.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_62",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 62,
    "text": "A ruler has divisions of 1 mm. What is 1 mm expressed in metres?",
    "options": {
      "A": "10⁻¹ m",
      "B": "10⁻² m",
      "C": "10⁻³ m",
      "D": "10⁻⁶ m"
    },
    "answer": "C",
    "explanation": "1 mm = 0.001 m = 10⁻³ m.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_63",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 63,
    "text": "Express 5.6 × 10⁴ g in kilograms.",
    "options": {
      "A": "0.56 kg",
      "B": "5.6 kg",
      "C": "56 kg",
      "D": "560 kg"
    },
    "answer": "C",
    "explanation": "5.6 × 10⁴ g = 56,000 g. Dividing by 1,000 gives 56 kg.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_64",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 64,
    "text": "A measurement of 0.0705 m contains how many significant figures?",
    "options": {
      "A": "Two",
      "B": "Three",
      "C": "Four",
      "D": "Five"
    },
    "answer": "B",
    "explanation": "Leading zeros are not significant. The significant digits are 7, 0 and 5.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_65",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 65,
    "text": "A student measures the diameter of a wire five times. The readings are 0.52 mm, 0.51 mm, 0.53 mm, 0.52 mm and 0.52 mm. Calculate the mean diameter.",
    "options": {
      "A": "0.51 mm",
      "B": "0.52 mm",
      "C": "0.53 mm",
      "D": "2.60 mm"
    },
    "answer": "B",
    "explanation": "Mean = (0.52 + 0.51 + 0.53 + 0.52 + 0.52)/5 = 2.60/5 = 0.52 mm.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_66",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 66,
    "text": "The prefix micro (μ) represents",
    "options": {
      "A": "10⁻³",
      "B": "10⁻⁶",
      "C": "10³",
      "D": "10⁶"
    },
    "answer": "B",
    "explanation": "The SI prefix micro represents one-millionth, or 10⁻⁶.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_67",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 67,
    "text": "The prefix kilo represents",
    "options": {
      "A": "10²",
      "B": "10³",
      "C": "10⁻³",
      "D": "10⁶"
    },
    "answer": "B",
    "explanation": "One kilometre equals 10³ metres.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_68",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 68,
    "text": "The prefix milli represents",
    "options": {
      "A": "10⁻¹",
      "B": "10⁻²",
      "C": "10⁻³",
      "D": "10⁻⁶"
    },
    "answer": "C",
    "explanation": "One millimetre equals 10⁻³ metres.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_69",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 69,
    "text": "Convert 250 μm to metres.",
    "options": {
      "A": "2.5 × 10⁻² m",
      "B": "2.5 × 10⁻⁴ m",
      "C": "2.5 × 10⁻⁶ m",
      "D": "2.5 × 10⁻⁸ m"
    },
    "answer": "B",
    "explanation": "250 μm = 250 × 10⁻⁶ m = 2.5 × 10⁻⁴ m.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_70",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 70,
    "text": "Convert 3.6 × 10⁶ J to megajoules.",
    "options": {
      "A": "0.36 MJ",
      "B": "3.6 MJ",
      "C": "36 MJ",
      "D": "360 MJ"
    },
    "answer": "B",
    "explanation": "One megajoule is 10⁶ joules. Therefore, 3.6 × 10⁶ J = 3.6 MJ.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_71",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 71,
    "text": "The dimensional formula for area is",
    "options": {
      "A": "L",
      "B": "L²",
      "C": "L³",
      "D": "LT⁻¹"
    },
    "answer": "B",
    "explanation": "Area is the product of two lengths, so its dimensions are L × L = L².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_72",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 72,
    "text": "The dimensional formula for volume is",
    "options": {
      "A": "L",
      "B": "L²",
      "C": "L³",
      "D": "M L³"
    },
    "answer": "C",
    "explanation": "Volume is measured in cubic units, giving dimensions L³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_73",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 73,
    "text": "Which of the following is the SI unit of angular velocity?",
    "options": {
      "A": "m/s",
      "B": "rad/s",
      "C": "m/s²",
      "D": "N/m"
    },
    "answer": "B",
    "explanation": "Angular velocity is the rate of change of angular displacement with time. The radian is dimensionless, so its dimensional formula is T⁻¹.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_74",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 74,
    "text": "Which of the following quantities has dimensions T⁻¹?",
    "options": {
      "A": "Acceleration",
      "B": "Frequency",
      "C": "Force",
      "D": "Energy"
    },
    "answer": "B",
    "explanation": "Frequency is the number of cycles per second and has dimensions T⁻¹.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_75",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 75,
    "text": "The SI unit of impulse is",
    "options": {
      "A": "N s",
      "B": "N/m",
      "C": "J/s",
      "D": "kg/m³"
    },
    "answer": "A",
    "explanation": "Impulse equals force multiplied by time. Its unit is newton-second, equivalent to kg m/s.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_76",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 76,
    "text": "Which quantity has the same dimensions as impulse?",
    "options": {
      "A": "Energy",
      "B": "Momentum",
      "C": "Power",
      "D": "Pressure"
    },
    "answer": "B",
    "explanation": "Impulse and momentum both have dimensions MLT⁻¹.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_77",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 77,
    "text": "A measuring cylinder contains water at 35 cm³. After an object is immersed, the reading becomes 52 cm³. What is the volume of the object?",
    "options": {
      "A": "17 cm³",
      "B": "35 cm³",
      "C": "52 cm³",
      "D": "87 cm³"
    },
    "answer": "A",
    "explanation": "Volume of object = final reading − initial reading = 52 − 35 = 17 cm³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_78",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 78,
    "text": "A stone has a mass of 150 g and displaces 50 cm³ of water. Calculate its density.",
    "options": {
      "A": "0.33 g/cm³",
      "B": "3.0 g/cm³",
      "C": "7.5 g/cm³",
      "D": "200 g/cm³"
    },
    "answer": "B",
    "explanation": "Density = 150/50 = 3.0 g/cm³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_79",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 79,
    "text": "A rectangular block has dimensions 10 cm, 5 cm and 2 cm. If its mass is 400 g, calculate its density.",
    "options": {
      "A": "2 g/cm³",
      "B": "4 g/cm³",
      "C": "8 g/cm³",
      "D": "20 g/cm³"
    },
    "answer": "B",
    "explanation": "Volume = 10 × 5 × 2 = 100 cm³. Density = 400/100 = 4 g/cm³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_80",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 80,
    "text": "A student records a length as 8.0 cm. The measurement is given to",
    "options": {
      "A": "the nearest centimetre",
      "B": "the nearest 0.1 cm",
      "C": "the nearest 0.01 cm",
      "D": "the nearest 10 cm"
    },
    "answer": "B",
    "explanation": "Recording 8.0 cm indicates precision to one decimal place, corresponding to 0.1 cm.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_81",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 81,
    "text": "A physical quantity is represented by the equation v = u + at. Which statement is dimensionally correct?",
    "options": {
      "A": "Velocity and acceleration have the same dimensions",
      "B": "Velocity and initial velocity have the same dimensions",
      "C": "Acceleration and time have the same dimensions",
      "D": "Initial velocity and time have the same dimensions"
    },
    "answer": "B",
    "explanation": "Both v and u are velocities with dimensions LT⁻¹. Also, at has dimensions LT⁻² × T = LT⁻¹.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_82",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 82,
    "text": "Which of the following expressions has the dimensions of energy?",
    "options": {
      "A": "Force × distance",
      "B": "Force ÷ distance",
      "C": "Mass × acceleration",
      "D": "Power × distance"
    },
    "answer": "A",
    "explanation": "Work and energy are measured in joules, equivalent to force multiplied by displacement.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_83",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 83,
    "text": "A quantity has SI unit kg m⁻¹ s⁻². It could represent",
    "options": {
      "A": "pressure",
      "B": "momentum",
      "C": "power",
      "D": "velocity"
    },
    "answer": "A",
    "explanation": "Pressure has dimensions ML⁻¹T⁻² and SI unit kg m⁻¹ s⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_84",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 84,
    "text": "A student measures a length as 4.25 cm. Express it in metres.",
    "options": {
      "A": "0.425 m",
      "B": "0.0425 m",
      "C": "0.00425 m",
      "D": "425 m"
    },
    "answer": "B",
    "explanation": "Divide centimetres by 100: 4.25/100 = 0.0425 m.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_85",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 85,
    "text": "A quantity has dimensions ML²T⁻³. Which quantity is it?",
    "options": {
      "A": "Work",
      "B": "Power",
      "C": "Force",
      "D": "Pressure"
    },
    "answer": "B",
    "explanation": "Power is energy per unit time, so its dimensions are ML²T⁻²/T = ML²T⁻³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_86",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 86,
    "text": "A cube has a side of 0.20 m. Calculate its volume.",
    "options": {
      "A": "0.008 m³",
      "B": "0.040 m³",
      "C": "0.080 m³",
      "D": "0.800 m³"
    },
    "answer": "A",
    "explanation": "Volume = (0.20)³ = 0.008 m³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_87",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 87,
    "text": "A liquid has a density of 1,200 kg/m³ and a volume of 0.005 m³. Calculate its mass.",
    "options": {
      "A": "0.24 kg",
      "B": "6 kg",
      "C": "240 kg",
      "D": "1,200 kg"
    },
    "answer": "B",
    "explanation": "Mass = density × volume = 1,200 × 0.005 = 6 kg.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_88",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 88,
    "text": "A body has a mass of 2.4 kg and a volume of 0.003 m³. Calculate its density.",
    "options": {
      "A": "0.0008 kg/m³",
      "B": "0.8 kg/m³",
      "C": "800 kg/m³",
      "D": "8,000 kg/m³"
    },
    "answer": "C",
    "explanation": "Density = 2.4/0.003 = 800 kg/m³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_89",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 89,
    "text": "A student obtains an experimental value of 9.6 m/s² for gravitational acceleration. If the accepted value is 9.8 m/s², calculate the percentage error.",
    "options": {
      "A": "0.2%",
      "B": "2.04%",
      "C": "2.50%",
      "D": "4.08%"
    },
    "answer": "B",
    "explanation": "Percentage error = |9.6 − 9.8|/9.8 × 100 ≈ 2.04%.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_90",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 90,
    "text": "A rectangular plate has a length of 12.0 cm and a width of 3.0 cm. Express its area to the appropriate number of significant figures.",
    "options": {
      "A": "36 cm²",
      "B": "36.0 cm²",
      "C": "36.00 cm²",
      "D": "15 cm²"
    },
    "answer": "A",
    "explanation": "Area = 12.0 × 3.0 = 36.0 cm². The result is reported to two significant figures because 3.0 has two significant figures.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_91",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 91,
    "text": "Which of the following is NOT an SI base quantity?",
    "options": {
      "A": "Amount of substance",
      "B": "Electric current",
      "C": "Force",
      "D": "Luminous intensity"
    },
    "answer": "C",
    "explanation": "Force is a derived quantity defined by mass multiplied by acceleration.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_92",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 92,
    "text": "The SI unit of electric potential difference is",
    "options": {
      "A": "ampere",
      "B": "coulomb",
      "C": "volt",
      "D": "ohm"
    },
    "answer": "C",
    "explanation": "Potential difference is measured in volts (V).",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_93",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 93,
    "text": "The SI unit of resistance is",
    "options": {
      "A": "volt",
      "B": "ohm",
      "C": "ampere",
      "D": "coulomb"
    },
    "answer": "B",
    "explanation": "Electrical resistance is measured in ohms (Ω).",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_94",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 94,
    "text": "A quantity is measured in kg m² s⁻³. Which of the following is its SI unit?",
    "options": {
      "A": "Joule",
      "B": "Watt",
      "C": "Newton",
      "D": "Pascal"
    },
    "answer": "B",
    "explanation": "The watt is equivalent to kg m² s⁻³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_95",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 95,
    "text": "Which of the following is equivalent to one pascal?",
    "options": {
      "A": "kg m s⁻²",
      "B": "kg m² s⁻²",
      "C": "kg m⁻¹ s⁻²",
      "D": "kg m² s⁻³"
    },
    "answer": "C",
    "explanation": "One pascal equals one newton per square metre: N/m² = kg m⁻¹ s⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_96",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 96,
    "text": "The dimensions of density are",
    "options": {
      "A": "ML⁻³",
      "B": "ML⁻²",
      "C": "MLT⁻²",
      "D": "ML³"
    },
    "answer": "A",
    "explanation": "Density = mass/volume, so its dimensions are M/L³ = ML⁻³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_97",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 97,
    "text": "The dimensions of gravitational acceleration are",
    "options": {
      "A": "LT⁻¹",
      "B": "LT⁻²",
      "C": "MLT⁻²",
      "D": "ML⁻³"
    },
    "answer": "B",
    "explanation": "Gravitational acceleration is acceleration, which has dimensions LT⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_98",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 98,
    "text": "A quantity is calculated by dividing distance by time squared. Its dimensions are",
    "options": {
      "A": "LT⁻¹",
      "B": "LT⁻²",
      "C": "L²T⁻¹",
      "D": "L⁻¹T²"
    },
    "answer": "B",
    "explanation": "Distance has dimensions L. Dividing by time squared gives LT⁻².",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_99",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 99,
    "text": "Which statement about dimensional analysis is correct?",
    "options": {
      "A": "It can determine every numerical constant in an equation",
      "B": "It can prove that an equation is physically correct in every respect",
      "C": "It can check whether the dimensions on both sides of an equation agree",
      "D": "It replaces all experimental measurements"
    },
    "answer": "C",
    "explanation": "Dimensional analysis checks dimensional consistency but cannot establish every aspect of physical correctness.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit1_100",
    "originalChapter": 1,
    "chapterTitle": "Topic 1: Measurements and Units",
    "topic": "Measurements and Units",
    "bookQuestionNum": 100,
    "text": "A student measures the mass of a block as 540 g and its volume as 200 cm³. Calculate the density in SI units.",
    "options": {
      "A": "0.27 kg/m³",
      "B": "2.7 kg/m³",
      "C": "270 kg/m³",
      "D": "2,700 kg/m³"
    },
    "answer": "D",
    "explanation": "Convert 540 g to 0.540 kg and 200 cm³ to 0.0002 m³. Density = 0.540/0.0002 = 2,700 kg/m³.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "phy_unit2_101",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 101,
    "text": "Which of the following is a vector quantity?",
    "options": {
      "A": "Mass",
      "B": "Speed",
      "C": "Work",
      "D": "Displacement"
    },
    "answer": "D",
    "explanation": "Displacement has both magnitude and direction.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_102",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 102,
    "text": "Which of the following is a scalar quantity?",
    "options": {
      "A": "Force",
      "B": "Momentum",
      "C": "Energy",
      "D": "Acceleration"
    },
    "answer": "C",
    "explanation": "Energy has magnitude but no direction.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_103",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 103,
    "text": "Two forces of 6 N and 8 N act at right angles to each other. Calculate their resultant.",
    "options": {
      "A": "2 N",
      "B": "10 N",
      "C": "14 N",
      "D": "48 N"
    },
    "answer": "B",
    "explanation": "For perpendicular forces, R = √(6² + 8²) = √100 = 10 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_104",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 104,
    "text": "Two forces of 12 N and 5 N act in the same direction. Their resultant is",
    "options": {
      "A": "7 N",
      "B": "17 N",
      "C": "60 N",
      "D": "2.4 N"
    },
    "answer": "B",
    "explanation": "Forces acting in the same direction are added: R = 12 + 5 = 17 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_105",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 105,
    "text": "Two forces of 15 N and 9 N act along the same straight line in opposite directions. Calculate their resultant magnitude.",
    "options": {
      "A": "6 N",
      "B": "9 N",
      "C": "15 N",
      "D": "24 N"
    },
    "answer": "A",
    "explanation": "The resultant magnitude is the difference: R = 15 − 9 = 6 N. It acts in the direction of the 15 N force.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_106",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 106,
    "text": "A force of 10 N acts east while another force of 10 N acts west. The resultant force is",
    "options": {
      "A": "20 N east",
      "B": "20 N west",
      "C": "10 N east",
      "D": "0 N"
    },
    "answer": "D",
    "explanation": "The forces are equal and opposite, so they cancel.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_107",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 107,
    "text": "A person walks 3 m east and then 4 m north. What is the magnitude of the displacement?",
    "options": {
      "A": "1 m",
      "B": "5 m",
      "C": "7 m",
      "D": "12 m"
    },
    "answer": "B",
    "explanation": "The movements are perpendicular. Displacement = √(3² + 4²) = 5 m.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_108",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 108,
    "text": "A body moves 8 m north and then 6 m south. Its displacement is",
    "options": {
      "A": "14 m north",
      "B": "14 m south",
      "C": "2 m north",
      "D": "2 m south"
    },
    "answer": "C",
    "explanation": "Taking north as positive, displacement = 8 − 6 = 2 m north.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_109",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 109,
    "text": "Which statement correctly distinguishes distance from displacement?",
    "options": {
      "A": "Both are always equal.",
      "B": "Distance is a vector, while displacement is a scalar.",
      "C": "Distance is the total path length, while displacement is the change in position.",
      "D": "Distance can be negative, while displacement must be positive."
    },
    "answer": "C",
    "explanation": "Distance measures the complete path travelled; displacement depends on the initial and final positions.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_110",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 110,
    "text": "A student walks 5 m east and then 5 m west, returning to the starting point. The total distance travelled is",
    "options": {
      "A": "0 m",
      "B": "5 m",
      "C": "10 m",
      "D": "25 m"
    },
    "answer": "C",
    "explanation": "Total distance = 5 + 5 = 10 m, although the displacement is zero.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_111",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 111,
    "text": "A vector has a magnitude of 12 units and makes an angle of 30° with the positive x-axis. Its horizontal component is",
    "options": {
      "A": "3 units",
      "B": "6 units",
      "C": "6√3 units",
      "D": "12√3 units"
    },
    "answer": "C",
    "explanation": "Horizontal component = 12 cos 30° = 12 × √3/2 = 6√3 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_112",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 112,
    "text": "A force of 20 N acts at 60° to the horizontal. Calculate its horizontal component.",
    "options": {
      "A": "5 N",
      "B": "10 N",
      "C": "10√3 N",
      "D": "20 N"
    },
    "answer": "B",
    "explanation": "Horizontal component = 20 cos 60° = 20 × 0.5 = 10 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_113",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 113,
    "text": "A force of 20 N acts at 30° above the horizontal. Its vertical component is",
    "options": {
      "A": "10 N",
      "B": "10√3 N",
      "C": "20 N",
      "D": "5 N"
    },
    "answer": "A",
    "explanation": "Vertical component = 20 sin 30° = 20 × 0.5 = 10 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_114",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 114,
    "text": "A vector has horizontal and vertical components of 6 units and 8 units respectively. Its magnitude is",
    "options": {
      "A": "2 units",
      "B": "7 units",
      "C": "10 units",
      "D": "14 units"
    },
    "answer": "C",
    "explanation": "Magnitude = √(6² + 8²) = √100 = 10 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_115",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 115,
    "text": "A force of 50 N acts at 37° to the horizontal. If sin 37° = 0.6 and cos 37° = 0.8, calculate its horizontal component.",
    "options": {
      "A": "20 N",
      "B": "30 N",
      "C": "40 N",
      "D": "50 N"
    },
    "answer": "C",
    "explanation": "Horizontal component = 50 cos 37° = 50 × 0.8 = 40 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_116",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 116,
    "text": "Two perpendicular forces of 9 N and 12 N act on a body. Calculate the angle the resultant makes with the 9 N force.",
    "options": {
      "A": "36.9°",
      "B": "45°",
      "C": "53.1°",
      "D": "60°"
    },
    "answer": "C",
    "explanation": "tan θ = 12/9 = 4/3. Therefore, θ ≈ 53.1°.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_117",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 117,
    "text": "Two forces of 10 N each act at an angle of 60° to each other. Calculate the magnitude of their resultant.",
    "options": {
      "A": "10 N",
      "B": "10√2 N",
      "C": "10√3 N",
      "D": "20 N"
    },
    "answer": "C",
    "explanation": "R = √(10² + 10² + 2 × 10 × 10 cos 60°) = √300 = 10√3 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_118",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 118,
    "text": "Two equal forces act at right angles to each other. If each force is 5 N, their resultant is",
    "options": {
      "A": "5 N",
      "B": "5√2 N",
      "C": "10 N",
      "D": "25 N"
    },
    "answer": "B",
    "explanation": "R = √(5² + 5²) = √50 = 5√2 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_119",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 119,
    "text": "The resultant of two forces is maximum when the angle between them is",
    "options": {
      "A": "0°",
      "B": "45°",
      "C": "90°",
      "D": "180°"
    },
    "answer": "A",
    "explanation": "When the forces act in the same direction, their magnitudes add to give the maximum resultant.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_120",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 120,
    "text": "The resultant of two forces is minimum when the angle between them is",
    "options": {
      "A": "0°",
      "B": "60°",
      "C": "90°",
      "D": "180°"
    },
    "answer": "D",
    "explanation": "Oppositely directed forces subtract. The resultant magnitude is |F₁ − F₂|, which is the minimum possible.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_121",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 121,
    "text": "Two forces of 7 N and 3 N act at an angle of 180° to each other. Calculate their resultant magnitude.",
    "options": {
      "A": "0 N",
      "B": "4 N",
      "C": "10 N",
      "D": "21 N"
    },
    "answer": "B",
    "explanation": "R = |7 − 3| = 4 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_122",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 122,
    "text": "Two forces of 8 N and 6 N act at right angles. The magnitude of their resultant is",
    "options": {
      "A": "2 N",
      "B": "10 N",
      "C": "14 N",
      "D": "48 N"
    },
    "answer": "B",
    "explanation": "R = √(8² + 6²) = √100 = 10 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_123",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 123,
    "text": "A force of 30 N acts at 60° to the horizontal. Its vertical component is",
    "options": {
      "A": "15 N",
      "B": "15√3 N",
      "C": "30 N",
      "D": "60 N"
    },
    "answer": "B",
    "explanation": "Vertical component = 30 sin 60° = 30 × √3/2 = 15√3 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_124",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 124,
    "text": "A vector has components of 5 units horizontally and 12 units vertically. Calculate its magnitude.",
    "options": {
      "A": "7 units",
      "B": "13 units",
      "C": "17 units",
      "D": "60 units"
    },
    "answer": "B",
    "explanation": "Magnitude = √(5² + 12²) = √169 = 13 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_125",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 125,
    "text": "A force of 40 N acts at 30° above the horizontal. Calculate its horizontal component.",
    "options": {
      "A": "10 N",
      "B": "20 N",
      "C": "20√3 N",
      "D": "40 N"
    },
    "answer": "C",
    "explanation": "Horizontal component = 40 cos 30° = 40 × √3/2 = 20√3 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_126",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 126,
    "text": "A force of 40 N acts at 30° above the horizontal. Calculate its vertical component.",
    "options": {
      "A": "10 N",
      "B": "20 N",
      "C": "20√3 N",
      "D": "40 N"
    },
    "answer": "B",
    "explanation": "Vertical component = 40 sin 30° = 40 × 0.5 = 20 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_127",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 127,
    "text": "A force of 25 N acts due north and a force of 7 N acts due south. What is the resultant?",
    "options": {
      "A": "32 N north",
      "B": "32 N south",
      "C": "18 N north",
      "D": "18 N south"
    },
    "answer": "C",
    "explanation": "The forces act in opposite directions. Resultant = 25 − 7 = 18 N north.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_128",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 128,
    "text": "A person walks 6 km east and 8 km north. What is the magnitude of the displacement?",
    "options": {
      "A": "2 km",
      "B": "10 km",
      "C": "14 km",
      "D": "48 km"
    },
    "answer": "B",
    "explanation": "Displacement = √(6² + 8²) = √100 = 10 km.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_129",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 129,
    "text": "A person walks 10 m east, then 10 m north, then 10 m west. What is the final displacement from the starting point?",
    "options": {
      "A": "10 m north",
      "B": "10 m south",
      "C": "30 m",
      "D": "0 m"
    },
    "answer": "A",
    "explanation": "The east and west movements cancel, leaving a displacement of 10 m north.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_130",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 130,
    "text": "Which of the following pairs consists entirely of vector quantities?",
    "options": {
      "A": "Speed and distance",
      "B": "Mass and weight",
      "C": "Force and acceleration",
      "D": "Energy and momentum"
    },
    "answer": "C",
    "explanation": "Both force and acceleration have magnitude and direction.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_131",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 131,
    "text": "A force of 15 N acts east and a force of 20 N acts north. Calculate the magnitude of the resultant.",
    "options": {
      "A": "5 N",
      "B": "25 N",
      "C": "35 N",
      "D": "300 N"
    },
    "answer": "B",
    "explanation": "R = √(15² + 20²) = √625 = 25 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_132",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 132,
    "text": "Two forces of 12 N and 16 N act at right angles. Calculate the angle the resultant makes with the 12 N force.",
    "options": {
      "A": "36.9°",
      "B": "45°",
      "C": "53.1°",
      "D": "90°"
    },
    "answer": "C",
    "explanation": "tan θ = 16/12 = 4/3, giving θ ≈ 53.1°.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_133",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 133,
    "text": "A vector of magnitude 10 units makes an angle of 60° with the positive x-axis. Its x-component is",
    "options": {
      "A": "5 units",
      "B": "5√3 units",
      "C": "10 units",
      "D": "10√3 units"
    },
    "answer": "A",
    "explanation": "x-component = 10 cos 60° = 10 × 0.5 = 5 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_134",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 134,
    "text": "A vector of magnitude 10 units makes an angle of 60° with the positive x-axis. Its y-component is",
    "options": {
      "A": "5 units",
      "B": "5√3 units",
      "C": "10 units",
      "D": "10√3 units"
    },
    "answer": "B",
    "explanation": "y-component = 10 sin 60° = 10 × √3/2 = 5√3 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_135",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 135,
    "text": "Two forces of 6 N and 8 N act at an angle of 90°. What is the angle between their resultant and the 6 N force?",
    "options": {
      "A": "36.9°",
      "B": "45°",
      "C": "53.1°",
      "D": "60°"
    },
    "answer": "C",
    "explanation": "tan θ = 8/6 = 4/3. Therefore, θ ≈ 53.1°.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_136",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 136,
    "text": "A force of 10 N acts east and another force of 10 N acts at 60° north of east. Calculate the magnitude of their resultant.",
    "options": {
      "A": "10 N",
      "B": "10√2 N",
      "C": "10√3 N",
      "D": "20 N"
    },
    "answer": "C",
    "explanation": "R = √(10² + 10² + 2 × 10 × 10 cos 60°) = √300 = 10√3 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_137",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 137,
    "text": "Two vectors have equal magnitudes of 10 units and act in opposite directions. Their resultant is",
    "options": {
      "A": "0 units",
      "B": "10 units",
      "C": "20 units",
      "D": "100 units"
    },
    "answer": "A",
    "explanation": "Equal vectors in opposite directions cancel completely.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_138",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 138,
    "text": "A vector is represented by 3 units east and 4 units north. Its direction relative to east is approximately",
    "options": {
      "A": "36.9° north of east",
      "B": "53.1° north of east",
      "C": "60° north of east",
      "D": "90° north of east"
    },
    "answer": "B",
    "explanation": "tan θ = 4/3, so θ ≈ 53.1°.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_139",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 139,
    "text": "A displacement vector has components of 8 m east and 6 m south. Its magnitude is",
    "options": {
      "A": "2 m",
      "B": "10 m",
      "C": "14 m",
      "D": "48 m"
    },
    "answer": "B",
    "explanation": "Magnitude = √(8² + 6²) = √100 = 10 m.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_140",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 140,
    "text": "Which statement about vector addition is correct?",
    "options": {
      "A": "Vector addition always involves adding magnitudes directly.",
      "B": "The direction of each vector must be considered.",
      "C": "Vectors can only be added if they have equal magnitudes.",
      "D": "C. Vectors can only be added if they have equal magnitudes.\nD. The resultant is always larger than either vector."
    },
    "answer": "B",
    "explanation": "Vector addition depends on both magnitude and direction. Magnitudes can be added directly only in specific cases, such as vectors acting in the same direction.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_141",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 141,
    "text": "Two forces of 9 N and 12 N act in the same direction. Their resultant is",
    "options": {
      "A": "3 N",
      "B": "9 N",
      "C": "12 N",
      "D": "21 N"
    },
    "answer": "D",
    "explanation": "Resultant = 9 + 12 = 21 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_142",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 142,
    "text": "Two forces of 18 N and 11 N act in opposite directions. Calculate the resultant magnitude.",
    "options": {
      "A": "7 N",
      "B": "11 N",
      "C": "18 N",
      "D": "29 N"
    },
    "answer": "A",
    "explanation": "Resultant magnitude = 18 − 11 = 7 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_143",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 143,
    "text": "Two perpendicular vectors have magnitudes of 5 units and 12 units. Their resultant has magnitude",
    "options": {
      "A": "7 units",
      "B": "13 units",
      "C": "17 units",
      "D": "60 units"
    },
    "answer": "B",
    "explanation": "R = √(5² + 12²) = 13 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_144",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 144,
    "text": "A force of 50 N acts at 37° above the horizontal. If sin 37° = 0.6 and cos 37° = 0.8, its vertical component is",
    "options": {
      "A": "20 N",
      "B": "30 N",
      "C": "40 N",
      "D": "50 N"
    },
    "answer": "B",
    "explanation": "Vertical component = 50 sin 37° = 50 × 0.6 = 30 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_145",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 145,
    "text": "A force of 50 N acts at 37° above the horizontal. If cos 37° = 0.8, its horizontal component is",
    "options": {
      "A": "20 N",
      "B": "30 N",
      "C": "40 N",
      "D": "50 N"
    },
    "answer": "C",
    "explanation": "Horizontal component = 50 cos 37° = 50 × 0.8 = 40 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_146",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 146,
    "text": "A vector has a horizontal component of 9 units and a vertical component of 12 units. The angle it makes with the horizontal is approximately",
    "options": {
      "A": "36.9°",
      "B": "45°",
      "C": "53.1°",
      "D": "60°"
    },
    "answer": "C",
    "explanation": "tan θ = 12/9 = 4/3, giving θ ≈ 53.1°.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_147",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 147,
    "text": "Two forces of 10 N each act at an angle of 120° to each other. Calculate the magnitude of their resultant.",
    "options": {
      "A": "0 N",
      "B": "10 N",
      "C": "10√3 N",
      "D": "20 N"
    },
    "answer": "B",
    "explanation": "R² = 10² + 10² + 2 × 10 × 10 cos 120° = 200 − 100 = 100. Thus R = 10 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_148",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 148,
    "text": "Two forces of 10 N each act at an angle of 90° to each other. Their resultant is",
    "options": {
      "A": "10 N",
      "B": "10√2 N",
      "C": "20 N",
      "D": "100 N"
    },
    "answer": "B",
    "explanation": "R = √(10² + 10²) = √200 = 10√2 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_149",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 149,
    "text": "Two forces of 10 N each act at an angle of 60° to each other. Their resultant is",
    "options": {
      "A": "10 N",
      "B": "10√2 N",
      "C": "10√3 N",
      "D": "20 N"
    },
    "answer": "C",
    "explanation": "R² = 100 + 100 + 200 cos 60° = 300. Therefore, R = 10√3 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_150",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 150,
    "text": "Two forces of 10 N each act in opposite directions. Their resultant magnitude is",
    "options": {
      "A": "0 N",
      "B": "10 N",
      "C": "10√2 N",
      "D": "20 N"
    },
    "answer": "A",
    "explanation": "Equal and opposite forces cancel.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_151",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 151,
    "text": "A force of 24 N acts east and a force of 7 N acts north. Calculate the magnitude of the resultant.",
    "options": {
      "A": "17 N",
      "B": "25 N",
      "C": "31 N",
      "D": "168 N"
    },
    "answer": "B",
    "explanation": "R = √(24² + 7²) = √625 = 25 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_152",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 152,
    "text": "A body is acted upon by two perpendicular forces of 15 N and 20 N. The resultant is",
    "options": {
      "A": "5 N",
      "B": "25 N",
      "C": "35 N",
      "D": "300 N"
    },
    "answer": "B",
    "explanation": "R = √(15² + 20²) = 25 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_153",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 153,
    "text": "A vector has components of 12 units west and 5 units south. Its magnitude is",
    "options": {
      "A": "7 units",
      "B": "13 units",
      "C": "17 units",
      "D": "60 units"
    },
    "answer": "B",
    "explanation": "Magnitude = √(12² + 5²) = √169 = 13 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_154",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 154,
    "text": "A force of 100 N acts at 30° to the horizontal. Its horizontal component is",
    "options": {
      "A": "25 N",
      "B": "50 N",
      "C": "50√3 N",
      "D": "100 N"
    },
    "answer": "C",
    "explanation": "Horizontal component = 100 cos 30° = 50√3 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_155",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 155,
    "text": "A force of 100 N acts at 30° to the horizontal. Its vertical component is",
    "options": {
      "A": "25 N",
      "B": "50 N",
      "C": "50√3 N",
      "D": "100 N"
    },
    "answer": "B",
    "explanation": "Vertical component = 100 sin 30° = 50 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_156",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 156,
    "text": "Two vectors have magnitudes of 8 units and 15 units and act at right angles. Calculate the magnitude of their resultant.",
    "options": {
      "A": "7 units",
      "B": "17 units",
      "C": "23 units",
      "D": "120 units"
    },
    "answer": "B",
    "explanation": "R = √(8² + 15²) = √289 = 17 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_157",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 157,
    "text": "Two forces of 6 N and 8 N act at right angles. The angle the resultant makes with the 8 N force is approximately",
    "options": {
      "A": "36.9°",
      "B": "45°",
      "C": "53.1°",
      "D": "90°"
    },
    "answer": "A",
    "explanation": "Relative to the 8 N force, tan θ = 6/8 = 0.75. Therefore, θ ≈ 36.9°.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_158",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 158,
    "text": "A person walks 12 m north and 5 m east. Calculate the magnitude of the displacement.",
    "options": {
      "A": "7 m",
      "B": "13 m",
      "C": "17 m",
      "D": "60 m"
    },
    "answer": "B",
    "explanation": "Displacement = √(12² + 5²) = 13 m.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_159",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 159,
    "text": "A student walks 4 m east, 3 m north and 4 m west. What is the magnitude of the displacement?",
    "options": {
      "A": "0 m",
      "B": "3 m",
      "C": "8 m",
      "D": "11 m"
    },
    "answer": "B",
    "explanation": "The east and west movements cancel, leaving a displacement of 3 m north.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_160",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 160,
    "text": "A person travels one complete lap of a circular track and returns to the starting point. The displacement is",
    "options": {
      "A": "equal to the circumference",
      "B": "equal to the diameter",
      "C": "zero",
      "D": "equal to twice the circumference"
    },
    "answer": "C",
    "explanation": "The initial and final positions are identical, so displacement is zero.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_161",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 161,
    "text": "Which of the following quantities can be negative depending on the chosen direction or reference?",
    "options": {
      "A": "Distance travelled",
      "B": "Speed",
      "C": "Displacement component",
      "D": "Mass"
    },
    "answer": "C",
    "explanation": "A displacement component may be negative when it points opposite to the chosen positive direction.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_162",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 162,
    "text": "A force of 20 N acts at 45° above the horizontal. Its horizontal component is",
    "options": {
      "A": "10 N",
      "B": "10√2 N",
      "C": "20 N",
      "D": "20√2 N"
    },
    "answer": "B",
    "explanation": "Horizontal component = 20 cos 45° = 20/√2 = 10√2 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_163",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 163,
    "text": "A force of 20 N acts at 45° above the horizontal. Its vertical component is",
    "options": {
      "A": "10 N",
      "B": "10√2 N",
      "C": "20 N",
      "D": "20√2 N"
    },
    "answer": "B",
    "explanation": "Vertical component = 20 sin 45° = 10√2 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_164",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 164,
    "text": "Two equal vectors have a resultant equal to either vector's magnitude. The angle between them is",
    "options": {
      "A": "0°",
      "B": "60°",
      "C": "90°",
      "D": "120°"
    },
    "answer": "D",
    "explanation": "For equal vectors of magnitude F, R² = 2F²(1 + cos θ). If R = F, then 1 = 2(1 + cos θ), giving cos θ = −1/2 and θ = 120°.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_165",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 165,
    "text": "Two forces of equal magnitude F act at an angle of 90°. The resultant magnitude is",
    "options": {
      "A": "F",
      "B": "√2F",
      "C": "2F",
      "D": "F/2"
    },
    "answer": "B",
    "explanation": "R = √(F² + F²) = √2F.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_166",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 166,
    "text": "Two forces of equal magnitude F act at an angle of 120°. The resultant magnitude is",
    "options": {
      "A": "0",
      "B": "F",
      "C": "√2F",
      "D": "2F"
    },
    "answer": "B",
    "explanation": "R² = F² + F² + 2F² cos 120° = 2F² − F² = F². Thus R = F.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_167",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 167,
    "text": "Two forces of equal magnitude F act at an angle of 60°. The resultant magnitude is",
    "options": {
      "A": "F",
      "B": "√2F",
      "C": "√3F",
      "D": "2F"
    },
    "answer": "D",
    "explanation": "R² = F² + F² + 2F² cos 60° = 3F². Therefore, R = √3F.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_168",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 168,
    "text": "Two forces of equal magnitude F act at an angle of 60°. What is the correct resultant magnitude?",
    "options": {
      "A": "F",
      "B": "√2F",
      "C": "√3F",
      "D": "2F"
    },
    "answer": "C",
    "explanation": "R² = F² + F² + 2F² cos 60° = 3F², so R = √3F.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_169",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 169,
    "text": "A vector has components of 7 units east and 24 units north. Calculate its magnitude.",
    "options": {
      "A": "17 units",
      "B": "25 units",
      "C": "31 units",
      "D": "168 units"
    },
    "answer": "B",
    "explanation": "Magnitude = √(7² + 24²) = √625 = 25 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_170",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 170,
    "text": "A force of 60 N acts at 60° above the horizontal. Calculate its vertical component.",
    "options": {
      "A": "15 N",
      "B": "30 N",
      "C": "30√3 N",
      "D": "60 N"
    },
    "answer": "C",
    "explanation": "Vertical component = 60 sin 60° = 60 × √3/2 = 30√3 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_171",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 171,
    "text": "A force of 60 N acts at 60° above the horizontal. Calculate its horizontal component.",
    "options": {
      "A": "15 N",
      "B": "30 N",
      "C": "30√3 N",
      "D": "60 N"
    },
    "answer": "B",
    "explanation": "Horizontal component = 60 cos 60° = 30 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_172",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 172,
    "text": "A vector of magnitude 20 units points due west. If east is the positive x-direction, its x-component is",
    "options": {
      "A": "+20 units",
      "B": "−20 units",
      "C": "0 units",
      "D": "+10 units"
    },
    "answer": "B",
    "explanation": "West is opposite to the positive east direction, so the x-component is negative.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_173",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 173,
    "text": "A vector of magnitude 15 units points due north. If north is the positive y-direction, its y-component is",
    "options": {
      "A": "−15 units",
      "B": "0 units",
      "C": "+15 units",
      "D": "+30 units"
    },
    "answer": "C",
    "explanation": "The vector points in the positive y-direction, so its y-component is +15 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_174",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 174,
    "text": "Two forces of 30 N and 40 N act at right angles. Calculate the resultant magnitude.",
    "options": {
      "A": "10 N",
      "B": "50 N",
      "C": "70 N",
      "D": "1,200 N"
    },
    "answer": "B",
    "explanation": "R = √(30² + 40²) = √2,500 = 50 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_175",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 175,
    "text": "Two forces of 30 N and 40 N act in the same direction. Their resultant is",
    "options": {
      "A": "10 N",
      "B": "30 N",
      "C": "50 N",
      "D": "70 N"
    },
    "answer": "D",
    "explanation": "Resultant = 30 + 40 = 70 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_176",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 176,
    "text": "Two forces of 40 N and 30 N act in opposite directions. Their resultant magnitude is",
    "options": {
      "A": "10 N",
      "B": "30 N",
      "C": "40 N",
      "D": "70 N"
    },
    "answer": "A",
    "explanation": "Resultant magnitude = |40 − 30| = 10 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_177",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 177,
    "text": "A force of 80 N acts at 37° to the horizontal. Given cos 37° = 0.8, calculate its horizontal component.",
    "options": {
      "A": "32 N",
      "B": "48 N",
      "C": "64 N",
      "D": "80 N"
    },
    "answer": "C",
    "explanation": "Horizontal component = 80 × 0.8 = 64 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_178",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 178,
    "text": "A force of 80 N acts at 37° to the horizontal. Given sin 37° = 0.6, calculate its vertical component.",
    "options": {
      "A": "32 N",
      "B": "48 N",
      "C": "64 N",
      "D": "80 N"
    },
    "answer": "B",
    "explanation": "Vertical component = 80 × 0.6 = 48 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_179",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 179,
    "text": "A vector has a horizontal component of 15 units and a vertical component of 20 units. Its magnitude is",
    "options": {
      "A": "5 units",
      "B": "25 units",
      "C": "35 units",
      "D": "300 units"
    },
    "answer": "B",
    "explanation": "Magnitude = √(15² + 20²) = √625 = 25 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_180",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 180,
    "text": "Two forces act at a point. Their magnitudes are 3 N and 4 N. Which of the following could be the magnitude of their resultant?",
    "options": {
      "A": "0 N",
      "B": "2 N",
      "C": "8 N",
      "D": "10 N"
    },
    "answer": "B",
    "explanation": "The resultant magnitude must lie between |4 − 3| = 1 N and 4 + 3 = 7 N. A magnitude of 2 N is possible.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_181",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 181,
    "text": "Two vectors have magnitudes of 5 units and 9 units. Which value cannot be the magnitude of their resultant?",
    "options": {
      "A": "4 units",
      "B": "5 units",
      "C": "9 units",
      "D": "15 units"
    },
    "answer": "D",
    "explanation": "The resultant must lie between |9 − 5| = 4 units and 9 + 5 = 14 units. Therefore, 15 units is impossible.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_182",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 182,
    "text": "Two forces of 5 N and 12 N act at right angles. Their resultant is",
    "options": {
      "A": "7 N",
      "B": "13 N",
      "C": "17 N",
      "D": "60 N"
    },
    "answer": "B",
    "explanation": "R = √(5² + 12²) = 13 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_183",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 183,
    "text": "Two vectors have magnitudes of 8 units and 15 units. What is the maximum possible magnitude of their resultant?",
    "options": {
      "A": "7 units",
      "B": "15 units",
      "C": "17 units",
      "D": "23 units"
    },
    "answer": "D",
    "explanation": "The maximum resultant occurs when the vectors act in the same direction: R = 8 + 15 = 23 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_184",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 184,
    "text": "Two vectors have magnitudes of 8 units and 15 units. What is the minimum possible magnitude of their resultant?",
    "options": {
      "A": "0 units",
      "B": "7 units",
      "C": "8 units",
      "D": "23 units"
    },
    "answer": "B",
    "explanation": "The minimum resultant occurs when the vectors act in opposite directions: R = 15 − 8 = 7 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_185",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 185,
    "text": "A vector has components of 5 units east and 5 units north. Its direction relative to east is",
    "options": {
      "A": "30°",
      "B": "45°",
      "C": "60°",
      "D": "90°"
    },
    "answer": "B",
    "explanation": "tan θ = 5/5 = 1, so θ = 45° north of east.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_186",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 186,
    "text": "A force of 100 N acts at 60° to the horizontal. Its horizontal component is",
    "options": {
      "A": "25 N",
      "B": "50 N",
      "C": "50√3 N",
      "D": "100 N"
    },
    "answer": "B",
    "explanation": "Horizontal component = 100 cos 60° = 50 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_187",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 187,
    "text": "A force of 100 N acts at 60° to the horizontal. Its vertical component is",
    "options": {
      "A": "25 N",
      "B": "50 N",
      "C": "50√3 N",
      "D": "100 N"
    },
    "answer": "C",
    "explanation": "Vertical component = 100 sin 60° = 50√3 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_188",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 188,
    "text": "A vector of magnitude 20 units makes an angle of 30° with the positive x-axis. Its x-component is",
    "options": {
      "A": "10 units",
      "B": "10√3 units",
      "C": "20 units",
      "D": "20√3 units"
    },
    "answer": "B",
    "explanation": "x-component = 20 cos 30° = 10√3 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_189",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 189,
    "text": "A vector of magnitude 20 units makes an angle of 30° with the positive x-axis. Its y-component is",
    "options": {
      "A": "10 units",
      "B": "10√3 units",
      "C": "20 units",
      "D": "20√3 units"
    },
    "answer": "A",
    "explanation": "y-component = 20 sin 30° = 10 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_190",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 190,
    "text": "A force of 12 N acts east and another force of 5 N acts north. The magnitude of the resultant is",
    "options": {
      "A": "7 N",
      "B": "13 N",
      "C": "17 N",
      "D": "60 N"
    },
    "answer": "B",
    "explanation": "R = √(12² + 5²) = √169 = 13 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_191",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 191,
    "text": "Two forces of 12 N and 5 N act at right angles. Calculate the angle between the resultant and the 12 N force.",
    "options": {
      "A": "22.6°",
      "B": "30°",
      "C": "45°",
      "D": "67.4°"
    },
    "answer": "A",
    "explanation": "tan θ = 5/12. Therefore, θ ≈ 22.6°.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_192",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 192,
    "text": "A person walks 9 m east and 12 m north. The magnitude of the displacement is",
    "options": {
      "A": "3 m",
      "B": "15 m",
      "C": "21 m",
      "D": "108 m"
    },
    "answer": "B",
    "explanation": "Displacement = √(9² + 12²) = √225 = 15 m.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_193",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 193,
    "text": "A body moves 15 m east and then 20 m west. Its displacement is",
    "options": {
      "A": "35 m east",
      "B": "35 m west",
      "C": "5 m east",
      "D": "5 m west"
    },
    "answer": "D",
    "explanation": "The westward distance exceeds the eastward distance by 20 − 15 = 5 m.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_194",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 194,
    "text": "A person travels 6 m north, 8 m east and 6 m south. What is the magnitude of the displacement?",
    "options": {
      "A": "0 m",
      "B": "6 m",
      "C": "8 m",
      "D": "20 m"
    },
    "answer": "C",
    "explanation": "The northward and southward movements cancel, leaving 8 m east.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_195",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 195,
    "text": "Which of the following is correct about the resultant of two perpendicular vectors?",
    "options": {
      "A": "It is always equal to their sum.",
      "B": "It is always equal to their difference.",
      "C": "Its magnitude is found using Pythagoras' theorem.",
      "D": "It is always zero."
    },
    "answer": "C",
    "explanation": "For perpendicular vectors A and B, the resultant magnitude is R = √(A² + B²).",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_196",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 196,
    "text": "A force of 10 N acts east, while a force of 10 N acts north. What is the direction of the resultant relative to east?",
    "options": {
      "A": "30° north of east",
      "B": "45° north of east",
      "C": "60° north of east",
      "D": "90° north of east"
    },
    "answer": "B",
    "explanation": "The components are equal, so tan θ = 10/10 = 1 and θ = 45°.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_197",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 197,
    "text": "A vector has components of 4 units west and 3 units north. Its magnitude is",
    "options": {
      "A": "1 unit",
      "B": "5 units",
      "C": "7 units",
      "D": "12 units"
    },
    "answer": "B",
    "explanation": "Magnitude = √(4² + 3²) = √25 = 5 units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_198",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 198,
    "text": "Two forces of 20 N each act at an angle of 90°. Their resultant magnitude is",
    "options": {
      "A": "20 N",
      "B": "20√2 N",
      "C": "40 N",
      "D": "400 N"
    },
    "answer": "B",
    "explanation": "R = √(20² + 20²) = √800 = 20√2 N.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_199",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 199,
    "text": "Two forces of 20 N each act at an angle of 180°. Their resultant is",
    "options": {
      "A": "0 N",
      "B": "20 N",
      "C": "20√2 N",
      "D": "40 N"
    },
    "answer": "A",
    "explanation": "The forces are equal and opposite, so their resultant is zero.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "phy_unit2_200",
    "originalChapter": 2,
    "chapterTitle": "Topic 2: Scalars and Vectors",
    "topic": "Scalars and Vectors",
    "bookQuestionNum": 200,
    "text": "Two forces of 20 N each act at an angle of 60°. Calculate their resultant magnitude.",
    "options": {
      "A": "20 N",
      "B": "20√2 N",
      "C": "20√3 N",
      "D": "40 N"
    },
    "answer": "D",
    "explanation": "R² = 20² + 20² + 2 × 20 × 20 cos 60° = 1,600. Therefore, R = 40 N.",
    "page": 2,
    "hasImage": false
  }
];

export const JAMBIX_PHYSICS_100_ITEMS = PHYSICS_DEMYSTIFIED_ITEMS;
export const JAMBIX_PHYSICS_200_ITEMS = PHYSICS_DEMYSTIFIED_ITEMS;

export function getPhysicsDemystifiedVerifiedQuestions() {
  return PHYSICS_DEMYSTIFIED_ITEMS.map((item, idx) => ({
    id: 920000 + idx + 1,
    year: 2026,
    questionNumber: idx + 1,
    subject: 'Physics',
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
    bookTitle: 'JAMBIX PHYSICS QUESTION BANK',
    author: 'JAMBIX UTME Preparatory Series',
    textbookRef: item.chapterTitle || 'Topic 1: Measurements and Units',
    hasImage: false,
  }));
}
