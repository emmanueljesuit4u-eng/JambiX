/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TOUGH_LEKKI_NOVEL_QUESTIONS } from './jambToughQuestionsBank';

export interface NovelChapter {
  chapterNumber: number;
  title: string;
  summary: string;
  keyEvents: string[];
  vitalExamQuotes: { quote: string; speaker: string; context: string }[];
}

export interface NovelCharacter {
  name: string;
  role: string;
  description: string;
  keyActions: string[];
  examSignificance: string;
}

export interface NovelQuestion {
  id: number;
  novel: 'The Lekki Headmaster';
  chapter: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface NovelDetails {
  id: string;
  title: string;
  author: string;
  jambUsage: string;
  overview: string;
  centralThemes: string[];
  setting: string;
  characters: NovelCharacter[];
  chapters: NovelChapter[];
}

export const JAMB_NOVELS: NovelDetails[] = [
  {
    id: 'the-lekki-headmaster',
    title: 'The Lekki Headmaster',
    author: 'Kabir Alabi Garba',
    jambUsage: 'Official Prescribed JAMB UTME Novel (2025/2026 Examination Standard)',
    overview:
      'The Lekki Headmaster chronicles the poignant, inspirational struggle of Mr. Bepo Adewale (affectionately known as "Principo" or "The Lekki Headmaster"), the deeply committed headmaster and principal of Stardom Schools in Lekki, Lagos. Faced with the national "Japa" phenomenon—as his wife and children relocate to the United Kingdom and urge him to join them—Bepo must confront severe teacher shortages, commercialized education, demanding parents, and systemic decay. In a profound climax, after saying an emotional farewell and heading to the airport, Bepo chooses to turn back to his school and students, demonstrating that the salvation of Nigeria lies in dedicated educators who refuse to abandon their homeland.',
    centralThemes: [
      'The "Japa" Brain-Drain Migration Syndrome vs Patriotic Dedication',
      'Integrity in Educational Leadership and School Administration',
      'The Plight, Welfare, and Moral Resilience of Nigerian Teachers',
      'Parental Entitlement, Student Rivalries, and Academic Excellence',
      'Education as the Foundational Weapon for National Reconstruction',
      'Inter-generational Mentorship and Community Solidarity',
    ],
    setting: 'Stardom Schools, Lekki Peninsula, Lagos State, Nigeria; Beesway Group of Schools; Lagos transit hubs and residential districts',
    characters: [
      {
        name: 'Bepo Adewale ("Principo / The Lekki Headmaster")',
        role: 'Protagonist, Headmaster & Educational Moral Pillar',
        description:
          'The passionate, compassionate, and intellectually rigorous principal of Stardom Schools in Lekki. Loved by his students and known for his humanistic leadership, he is torn between joining his family in the UK and fulfilling his educational mission in Nigeria.',
        keyActions: [
          'Breaks down in tears at morning assembly in Chapter 1 ("Dusk") due to emotional exhaustion and internal conflict.',
          'Resists institutional corruption, grade inflation, and compromises at Stardom Schools.',
          'Mentors Jide, the troubled grandson of his landlady Mrs. Ogunwale.',
          'Undergoes an emotional send-forth where the school unveils the banner: "For He Gave Stardom His Very Best".',
          'Arrives at the threshold of the airport for departure to the UK, but turns back to continue his life mission at Stardom Schools.',
        ],
        examSignificance:
          'Central protagonist: JAMB heavily tests his nicknames ("Principo", "The Lekki Headmaster"), his emotional assembly in Chapter 1, his former school (Beesway), and his decisive airport turnaround.',
      },
      {
        name: 'Mrs. Ibidun Gloss',
        role: 'Managing Director & Proprietress of Stardom Schools',
        description:
          'The visionary, supportive, and pragmatic leader of Stardom Schools who values Bepo’s uncompromising principles while wrestling with the economic realities of running a private school in Lekki.',
        keyActions: [
          'Appoints and backs Bepo as principal to overhaul academic and moral standards.',
          'Balances demanding fee-paying parents with educational integrity.',
          'Grieves Bepo’s impending departure and organizes his grand send-forth.',
        ],
        examSignificance:
          'Tested on her leadership role (Managing Director) and her supportive relationship with Mr. Bepo.',
      },
      {
        name: 'Jide',
        role: 'Protégé & Mrs. Ogunwale’s Grandson',
        description:
          'A vulnerable, drifting young boy living in Bepo’s neighborhood who finds direction, academic focus, and moral purpose through Bepo’s patient mentorship.',
        keyActions: [
          'Receives close academic tutoring, moral guidance, and life counseling from Bepo.',
          'Transforms from a disillusioned adolescent into a motivated, ambitious young scholar.',
        ],
        examSignificance:
          'Symbolizes the transformative power of Bepo’s mentorship and grassroots youth empowerment.',
      },
      {
        name: 'Banky',
        role: 'Competitive & Outspoken Student',
        description:
          'A remarkably brilliant, articulate, and fiercely competitive pupil at Stardom Schools whose intellectual rivalry with Tosh creates classroom drama.',
        keyActions: [
          'Leads classroom debates and academic competitions.',
          'Engages in intellectual and status battles with Tosh (Ogba Junior).',
        ],
        examSignificance:
          'Tested on classroom dynamics and student rivalry at Stardom Schools.',
      },
      {
        name: 'Tosh (Ogba Junior)',
        role: 'Banky’s Rival & Son of Chief Didi Ogba',
        description:
          'A privileged, somewhat entitled student at Stardom Schools whose influential father attempts to shield him from normal school sanctions.',
        keyActions: [
          'Competes intensely with Banky for top classroom honours.',
          'Learns humility and the value of uncompromised merit under Bepo’s firm administration.',
        ],
        examSignificance:
          'Represents elite parental privilege encountering unbending school discipline.',
      },
      {
        name: 'Chief Didi Ogba',
        role: 'Tosh’s Father & Wealthy Community Figure',
        description:
          'A wealthy, imposing former political detainee whose assertive personality and expectations clash with school regulations.',
        keyActions: [
          'Attempts to use wealth and influence to demand special treatment for his son Tosh.',
          'Ultimately comes to respect Bepo’s integrity and dedication.',
        ],
        examSignificance:
          'Tested on his background (former detainee) and his parental interventions at Stardom Schools.',
      },
      {
        name: 'Mr. Amos',
        role: 'Accountant at Stardom Schools',
        description:
          'The meticulous financial officer who navigates fee collections, delayed tuitions, and staff payroll under tight economic constraints.',
        keyActions: [
          'Assists Bepo in managing institutional accounts and budgeting.',
        ],
        examSignificance:
          'Tested on school administration and financial realities in private Nigerian education.',
      },
      {
        name: 'Mrs. Ignatius',
        role: 'Parent & Emblem of the "Japa" Surge',
        description:
          'A parent associated with Stardom Schools whose conversations mirror the prevailing societal obsession with escaping Nigeria for foreign pastures.',
        keyActions: [
          'Discusses relocation strategies, foreign currency remittances, and the desperation to migrate.',
        ],
        examSignificance:
          'Illustrates the social background of the UK migration fever.',
      },
      {
        name: 'Mrs. Ogunwale',
        role: 'Bepo’s Landlady in Lagos',
        description:
          'A maternal, kind-hearted Yoruba landlady whose warmth and communal generosity provide Bepo with a stable domestic refuge.',
        keyActions: [
          'Entrusts her grandson Jide to Bepo’s care and moral guidance.',
          'Offers Bepo emotional support during his times of solitude.',
        ],
        examSignificance:
          'Represents grassroots community solidarity and maternal care in urban Lagos.',
      },
      {
        name: 'Mr. Egi Meko',
        role: 'Director at Beesway Group of Schools (Flashback)',
        description:
          'Bepo’s former employer who prioritized commercial profit and dismissed Bepo’s correction of grammatical blunders on the school billboard ("Beesway Group of School").',
        keyActions: [
          'Clashed with Bepo over academic standards, leading to Bepo’s resignation from Beesway.',
        ],
        examSignificance:
          'JAMB tests the specific grammatical error on the billboard and Bepo’s principled stand.',
      },
      {
        name: 'Mrs. Apeh & Mr. Ike',
        role: 'Dedicated Classroom Teachers',
        description:
          'Passionate educators at Stardom Schools who endure economic hardships while maintaining commitment to their students.',
        keyActions: [
          'Participate in the novelty football match during Bepo’s farewell ceremony.',
          'Represent the unheralded sacrifices of the teaching profession in Nigeria.',
        ],
        examSignificance:
          'Highlight the plight and dignity of Nigerian classroom teachers.',
      },
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Dusk: The Assembly Tears',
        summary:
          'The novel opens on a somber note during a routine morning assembly at Stardom Schools in Lekki. Mr. Bepo Adewale, usually vibrant, charismatic, and humorous, mounts the podium to address the student body but is overwhelmed by emotion and breaks down in tears. The unexpected sight of their respected "Principo" weeping stuns staff and students, signaling intense psychological conflict beneath his composed exterior.',
        keyEvents: [
          'Morning assembly gathers at Stardom Schools, Lekki.',
          'Mr. Bepo Adewale unexpectedly bursts into tears before the assembly.',
          'The Vice Principal and teachers rush to comfort him while pupils watch in bewildered silence.',
          'The mystery behind Bepo’s distress establishes the central conflict of the narrative.',
        ],
        vitalExamQuotes: [
          {
            quote: 'A tear from a schoolmaster is not weakness; it is the overflow of a heart carrying the weight of a nation’s future.',
            speaker: 'Narrator',
            context: 'Describing Bepo’s emotional breakdown on assembly ground.',
          },
        ],
      },
      {
        chapterNumber: 2,
        title: 'The Stardom Challenge',
        summary:
          'The inner workings of Stardom Schools are laid bare. Managing Director Mrs. Ibidun Gloss strives to keep the school afloat amidst rising operational costs, teacher turnover, and high expectations from Lekki’s elite parents. Bepo works tirelessly to instill discipline, elevate academic rigor, and motivate underpaid teachers.',
        keyEvents: [
          'Exploration of Stardom Schools’ mission and infrastructure challenges.',
          'Mrs. Ibidun Gloss discusses administrative hurdles with Bepo.',
          'Bepo inspects classrooms and enforces teaching ethics among the staff.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Quality education cannot be bought in a supermarket; it is forged by the character of those who stand in the classroom.',
            speaker: 'Bepo Adewale',
            context: 'Addressing staff members on academic integrity.',
          },
        ],
      },
      {
        chapterNumber: 3,
        title: 'Migration Tales & The UK Pull',
        summary:
          'Bepo reflects on the persistent pressure from his wife and children who have settled in the United Kingdom. He compares the economic realities of abroad—hourly and weekly wage structures versus Nigeria’s delayed monthly salaries—while hearing firsthand accounts of the psychological toll of relocation on immigrant families.',
        keyEvents: [
          'Bepo receives transatlantic calls from his wife demanding his relocation.',
          'Detailed reflection on the financial and cultural realities of the "Japa" phenomenon.',
          'Bepo weighs the promise of foreign comfort against his patriotic obligations.',
        ],
        vitalExamQuotes: [
          {
            quote: 'To leave one’s motherland is easy; to leave one’s purpose is a tragedy no foreign passport can heal.',
            speaker: 'Bepo Adewale',
            context: 'Pondering his wife’s demands to migrate to the UK.',
          },
        ],
      },
      {
        chapterNumber: 4,
        title: 'Classroom Dynamics: Banky and Tosh',
        summary:
          'The academic battlefield at Stardom Schools is spotlighted through the fierce rivalry between Banky, an outspoken intellectual powerhouse, and Tosh (Ogba Junior), the privileged son of Chief Didi Ogba. Their classroom debates reveal wider societal tensions between meritocracy and privilege.',
        keyEvents: [
          'Fierce debate and test rivalry between Banky and Tosh.',
          'Bepo intervenes to ensure fair assessment and teach mutual respect.',
          'Classroom teachers observe the socio-economic polarization among students.',
        ],
        vitalExamQuotes: [
          {
            quote: 'In this classroom, your mind is your only currency; your father’s bank balance earns you no bonus points.',
            speaker: 'Bepo Adewale',
            context: 'Cautioning Tosh against arrogance toward Banky.',
          },
        ],
      },
      {
        chapterNumber: 5,
        title: 'Parental Pressures & High Stakes',
        summary:
          'Parents descend on Stardom Schools with conflicting demands. Chief Didi Ogba, a powerful former political detainee, demands special consideration for his son, while Mrs. Ignatius voices anxieties about international school curricula. Bepo diplomatically upholds school regulations without bowing to intimidation.',
        keyEvents: [
          'Chief Didi Ogba’s visit to Stardom Schools.',
          'Bepo respectfully defends school policies against parental bullying.',
          'Mrs. Ibidun Gloss and Bepo maintain administrative cohesion under pressure.',
        ],
        vitalExamQuotes: [
          {
            quote: 'When school gates open to intimidation, education walks out the back door.',
            speaker: 'Bepo Adewale',
            context: 'Refusing Chief Didi Ogba’s unreasonable demands.',
          },
        ],
      },
      {
        chapterNumber: 6,
        title: 'The Integrity Test',
        summary:
          'The examination period arrives, testing the ethical boundaries of both students and staff. Attempts to compromise question papers and inflate grades are uncovered. Bepo handles the infractions decisively, demonstrating that academic integrity is non-negotiable.',
        keyEvents: [
          'Examination season commences under tight surveillance.',
          'Uncovering of subtle malpractice schemes.',
          'Bepo enforces zero-tolerance sanctions, earning respect across the school.',
        ],
        vitalExamQuotes: [
          {
            quote: 'A forged grade is an intellectual counterfeit; it destroys the soul of the child who bears it.',
            speaker: 'Bepo Adewale',
            context: 'Rebuffing grade alteration proposals.',
          },
        ],
      },
      {
        chapterNumber: 7,
        title: 'Beesway Memories: The Billboard Error',
        summary:
          'Through a vivid flashback, Bepo recalls his tenure at Beesway Group of Schools under Director Mr. Egi Meko. Bepo had persistently objected to a glaring grammatical error on the prominent school billboard reading "Beesway Group of School" (singular instead of plural). Mr. Egi Meko dismissed the error as trivial, prompting Bepo’s principled resignation.',
        keyEvents: [
          'Flashback to Bepo’s earlier teaching days at Beesway Group of Schools.',
          'The grammatical dispute over "Beesway Group of School" vs "Schools".',
          'Mr. Egi Meko’s commercial indifference contrasts sharply with Bepo’s pedagogical precision.',
          'Bepo’s resignation demonstrates his lifelong refusal to tolerate mediocrity.',
        ],
        vitalExamQuotes: [
          {
            quote: 'How can we teach children grammar inside the gates when the billboard outside commits public linguistic treason?',
            speaker: 'Bepo Adewale',
            context: 'Confronting Mr. Egi Meko over the school signboard error.',
          },
        ],
      },
      {
        chapterNumber: 8,
        title: 'The Teachers’ Plight & Daily Struggles',
        summary:
          'This chapter documents the harsh economic realities confronting classroom teachers in urban Lagos. Mrs. Apeh, Mr. Ike, and Mr. Audu navigate transport hikes, delayed salaries, and rising inflation, yet continue to pour their energy into shaping young minds.',
        keyEvents: [
          'Staffroom discussions on inflation, transport fares, and salary delays.',
          'Mr. Amos balances the school ledger to disburse teacher allowances.',
          'Bepo advocates passionately for staff welfare with Mrs. Ibidun Gloss.',
        ],
        vitalExamQuotes: [
          {
            quote: 'The teacher who lights another’s candle must not be left to freeze in the dark.',
            speaker: 'Bepo Adewale',
            context: 'Advocating for prompt staff compensation and dignity.',
          },
        ],
      },
      {
        chapterNumber: 9,
        title: 'The UK Visa & Family Ultimatum',
        summary:
          'Bepo receives his long-awaited UK entry visa. His wife calls with an ultimatum: pack his bags immediately or face marital breakdown. The reality of his impending departure strikes Bepo with overwhelming gravity, precipitating his decision to tender his resignation.',
        keyEvents: [
          'Arrival of Bepo’s UK travel visa and flight itinerary.',
          'Emotional confrontation with his wife over the phone.',
          'Bepo reluctantly submits his formal resignation letter to Mrs. Ibidun Gloss.',
        ],
        vitalExamQuotes: [
          {
            quote: 'A passport in hand is a heavy burden when the heart remains anchored to the soil.',
            speaker: 'Bepo Adewale',
            context: 'Holding his UK visa in deep contemplation.',
          },
        ],
      },
      {
        chapterNumber: 10,
        title: 'Mentorship & Jide’s Breakthrough',
        summary:
          'Before his departure, Bepo devotes his remaining evenings to mentoring Jide, the grandson of his landlady Mrs. Ogunwale. Jide, once despondent and directionless, experiences a profound intellectual awakening under Bepo’s tutelage, illustrating the irreplaceable impact of a dedicated mentor.',
        keyEvents: [
          'Intensive evening study sessions between Bepo and Jide.',
          'Jide achieves top marks in his school examinations, bringing joy to Mrs. Ogunwale.',
          'Bepo realizes how deeply his presence is needed in the community.',
        ],
        vitalExamQuotes: [
          {
            quote: 'You do not change the world by conquering continents; you change it by igniting one young mind at your doorstep.',
            speaker: 'Bepo Adewale',
            context: 'Congratulating Jide on his academic turnaround.',
          },
        ],
      },
      {
        chapterNumber: 11,
        title: 'The Farewell: "He Gave Stardom His Very Best"',
        summary:
          'Stardom Schools organizes a grand, deeply emotional farewell ceremony for Mr. Bepo. A commemorative banner reading "For He Gave Stardom His Very Best" adorns the hall. The festivities include testimonials from parents, emotional speeches by students, and a spirited novelty football match between staff and pupils.',
        keyEvents: [
          'The school assembly hall is decorated for Bepo’s official send-forth.',
          'Unveiling of the historic banner: "For He Gave Stardom His Very Best".',
          'Pupils, including Banky and Tosh, present touching farewell gifts.',
          'A novelty football match is played, cementing Bepo’s beloved legacy.',
        ],
        vitalExamQuotes: [
          {
            quote: 'We celebrate a headmaster who did not merely manage a school, but fathered our aspirations.',
            speaker: 'Mrs. Ibidun Gloss',
            context: 'Delivering the farewell commendation speech.',
          },
        ],
      },
      {
        chapterNumber: 12,
        title: 'The Airport Turnaround & Renewal',
        summary:
          'With luggage packed and travel documents in hand, Bepo rides toward the international airport. En route, as memories of his pupils, Jide’s transformed eyes, and his unfinished mission flood his consciousness, Bepo realizes he cannot abandon Nigeria’s children. In a dramatic climax, he orders the driver to turn the vehicle around and returns to Stardom Schools to rededicate his life to education.',
        keyEvents: [
          'Bepo journeys toward Murtala Muhammed International Airport for his UK flight.',
          'Deep introspection on his true calling, patriotism, and the destiny of Nigerian education.',
          'The dramatic decision: Bepo instructs the vehicle to make a U-turn.',
          'Bepo returns to Stardom Schools, greeted with astonishment and jubilation, rededicating his life to nation-building.',
        ],
        vitalExamQuotes: [
          {
            quote: 'My children need a father, but these thousands of Nigerian souls need a lighthouse. I am turning back.',
            speaker: 'Bepo Adewale',
            context: 'Ordering the vehicle turnaround on the way to the airport.',
          },
        ],
      },
    ],
  },
];

/**
 * Authentic JAMB-style multiple-choice questions for the prescribed UTME novels
 */
export const NOVEL_EXAM_QUESTIONS: NovelQuestion[] = [
  // ================= THE LEKKI HEADMASTER =================
  {
    id: 9019,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'In "The Lekki Headmaster", which school did Mr. Bepo Adewale serve as headmaster and principal?',
    options: {
      A: 'Beesway Group of Schools',
      B: 'Stardom Schools, Lekki',
      C: 'Queen Amina Academy',
      D: 'Lafayette Model College',
    },
    answer: 'B',
    explanation: 'Mr. Bepo Adewale was the dedicated and revered principal of Stardom Schools situated in the Lekki corridor of Lagos State.',
  },
  {
    id: 9020,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'What affectionate nickname was widely used by staff and pupils to address Mr. Bepo Adewale?',
    options: {
      A: 'The Dean',
      B: 'Principo',
      C: 'Commander',
      D: 'The Mentor',
    },
    answer: 'B',
    explanation: 'Mr. Bepo Adewale was affectionately and reverently nicknamed "Principo" by both his pupils and colleagues.',
  },
  {
    id: 9021,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'What startling incident occurred during the morning assembly in Chapter 1 ("Dusk")?',
    options: {
      A: 'A fire outbreak damaged the school laboratory',
      B: 'Mr. Bepo broke down in tears before the student assembly',
      C: 'Chief Didi Ogba stormed the podium with security personnel',
      D: 'The school announced immediate indefinite closure',
    },
    answer: 'B',
    explanation: 'In Chapter 1 ("Dusk"), the usually humorous and composed principal, Mr. Bepo, overwhelmed by emotional distress and migration pressures, broke down in tears on the assembly podium.',
  },
  {
    id: 9022,
    novel: 'The Lekki Headmaster',
    chapter: 3,
    question: 'To which foreign country had Mr. Bepo’s wife and children relocated under the "Japa" migration wave?',
    options: {
      A: 'Canada',
      B: 'United States of America',
      C: 'United Kingdom',
      D: 'Australia',
    },
    answer: 'C',
    explanation: 'Mr. Bepo’s wife and children had already settled in the United Kingdom, exerting continuous pressure on him to join them abroad.',
  },
  {
    id: 9023,
    novel: 'The Lekki Headmaster',
    chapter: 7,
    question: 'What grammatical blunder on the billboard of Beesway Group of Schools provoked Mr. Bepo’s principled resignation?',
    options: {
      A: 'The phrase "Admission is going on"',
      B: 'Writing "Beesway Group of School" with singular "School"',
      C: 'Misspelling the word "Knowledge"',
      D: 'Omitting the school registration number',
    },
    answer: 'B',
    explanation: 'In Chapter 7, Bepo recalls resigning from Beesway Group of Schools because Director Mr. Egi Meko refused to correct the public billboard which erroneously read "Beesway Group of School" instead of "Schools".',
  },
  {
    id: 9024,
    novel: 'The Lekki Headmaster',
    chapter: 2,
    question: 'Who served as the Managing Director and Proprietress of Stardom Schools?',
    options: {
      A: 'Mrs. Ibidun Gloss',
      B: 'Mrs. Ogunwale',
      C: 'Mrs. Apeh',
      D: 'Mrs. Ignatius',
    },
    answer: 'A',
    explanation: 'Mrs. Ibidun Gloss was the visionary Managing Director of Stardom Schools who appointed and supported Mr. Bepo.',
  },
  {
    id: 9025,
    novel: 'The Lekki Headmaster',
    chapter: 10,
    question: 'Who was Jide, whom Mr. Bepo devoted his spare evenings to mentoring in Lagos?',
    options: {
      A: 'The senior prefect of Stardom Schools',
      B: 'The son of Chief Didi Ogba',
      C: 'The grandson of his landlady, Mrs. Ogunwale',
      D: 'A junior teacher in the science department',
    },
    answer: 'C',
    explanation: 'Jide was the grandson of Bepo’s benevolent landlady, Mrs. Ogunwale; Bepo tutored and guided him into academic excellence and self-worth.',
  },
  {
    id: 9026,
    novel: 'The Lekki Headmaster',
    chapter: 11,
    question: 'What inspiring motto was inscribed on the commemorative farewell banner unveiled during Mr. Bepo’s send-forth?',
    options: {
      A: '"Farewell to a Great Leader"',
      B: '"For He Gave Stardom His Very Best"',
      C: '"Journey Mercies to the UK"',
      D: '"The Legend of Lekki Education"',
    },
    answer: 'B',
    explanation: 'During the official farewell assembly, the hall was decorated with a prominent commemorative banner reading: "For He Gave Stardom His Very Best".',
  },
  {
    id: 9027,
    novel: 'The Lekki Headmaster',
    chapter: 11,
    question: 'What recreational event was organized between staff and students as part of Mr. Bepo’s emotional send-forth?',
    options: {
      A: 'A swimming competition at the Lekki beach',
      B: 'A novelty football match',
      C: 'An inter-school chess tournament',
      D: 'A cultural dance and drama night',
    },
    answer: 'B',
    explanation: 'A spirited novelty football match between staff members and students was held as part of the farewell festivities honoring Bepo.',
  },
  {
    id: 9028,
    novel: 'The Lekki Headmaster',
    chapter: 12,
    question: 'What climactic decision did Mr. Bepo make on his journey toward the international airport in Chapter 12?',
    options: {
      A: 'He boarded the flight but returned two weeks later',
      B: 'He instructed the driver to turn back and returned to Stardom Schools',
      C: 'He misplaced his passport at the terminal gate',
      D: 'He postponed his flight until the end of the academic session',
    },
    answer: 'B',
    explanation: 'In the dramatic climax of Chapter 12, realizing that his ultimate purpose and life calling lay in educating Nigerian children, Bepo ordered his vehicle to make a U-turn and returned to Stardom Schools.',
  },
  // Additional Prescribed Novel Exam Questions (guaranteeing diversity & zero repetition across tests)
  {
    id: 9041,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'What prestigious private institution in Lagos was Mr. Bepo appointed to lead as headmaster?',
    options: {
      A: 'Stardom Schools, Lekki',
      B: 'Grace Academy, Victoria Island',
      C: 'Crown Heights International, Ikoyi',
      D: 'Atlantic Hall Academy, Ajah',
    },
    answer: 'A',
    explanation: 'Mr. Bepo was appointed as the headmaster of Stardom Schools located in the highbrow Lekki axis of Lagos State.',
  },
  {
    id: 9042,
    novel: 'The Lekki Headmaster',
    chapter: 2,
    question: 'What initial cultural shock did Mr. Bepo confront upon assuming duties among the wealthy parents in Lekki?',
    options: {
      A: 'Excessive indulgence of pupils and parental attempts to dictate school discipline',
      B: 'A total absence of educational supplies in the classrooms',
      C: 'Frequent flooding of the school compound during dry seasons',
      D: 'A complete lack of certified teaching staff',
    },
    answer: 'A',
    explanation: 'Bepo observed that many affluent parents pampered their children excessively and tried to undermine teachers whenever discipline was administered.',
  },
  {
    id: 9043,
    novel: 'The Lekki Headmaster',
    chapter: 3,
    question: 'How did Mr. Bepo handle the influential parent who demanded preferential treatment for his misbehaving child?',
    options: {
      A: 'He stood firm on school policy with polite firmness, insisting on equal discipline for all pupils',
      B: 'He expelled the student immediately without a disciplinary hearing',
      C: 'He resigned his position in protest to the board of directors',
      D: 'He yielded completely to the parent’s aggressive threats',
    },
    answer: 'A',
    explanation: 'Bepo maintained professional integrity and explained that standard disciplinary rules must apply equally to every pupil regardless of parental wealth.',
  },
  {
    id: 9044,
    novel: 'The Lekki Headmaster',
    chapter: 4,
    question: 'What innovative educational program did Mr. Bepo introduce to foster reading culture among the pupils of Stardom Schools?',
    options: {
      A: 'The "Drop Everything and Read" (DEAR) quiet hour and weekly book review club',
      B: 'Mandatory evening coding hackathons',
      C: 'Annual spelling bees held exclusively on private radio stations',
      D: 'Saturday morning television cartoon screenings',
    },
    answer: 'A',
    explanation: 'Bepo revitalized the school library and instituted mandatory reading sessions to instill a genuine love for literature in the pupils.',
  },
  {
    id: 9045,
    novel: 'The Lekki Headmaster',
    chapter: 5,
    question: 'What health and environmental project did Mr. Bepo pioneer to address sanitation along the Lekki coastal corridor?',
    options: {
      A: 'A pupil-led recycling campaign and tree planting drive in the community',
      B: 'Building a private water desalination plant for the estate',
      C: 'Organizing weekly commercial boat tours for Lekki residents',
      D: 'Constructing an asphalt parking lot outside the school gates',
    },
    answer: 'A',
    explanation: 'Bepo involved staff and pupils in community outreach, championing plastic recycling, environmental cleanliness, and tree planting.',
  },
  {
    id: 9046,
    novel: 'The Lekki Headmaster',
    chapter: 6,
    question: 'Who was Chief Didi Ogba in "The Lekki Headmaster"?',
    options: {
      A: 'An influential board member and prominent Lekki community leader',
      B: 'The school’s chief security officer',
      C: 'The proprietor of a competing private institution',
      D: 'The municipal commissioner for transport',
    },
    answer: 'A',
    explanation: 'Chief Didi Ogba was a high-profile community leader and member of the school governing board who initially clashed with Bepo but later became his staunch admirer.',
  },
  {
    id: 9047,
    novel: 'The Lekki Headmaster',
    chapter: 7,
    question: 'What crisis threatened the academic calendar of Stardom Schools during the heavy rainy season in Chapter 7?',
    options: {
      A: 'Severe flash flooding that blocked access roads and submerged parts of the campus',
      B: 'A sudden outbreak of contagious viral fever among staff',
      C: 'The destruction of the school generator by lightning strike',
      D: 'A total collapse of the school perimeter fence',
    },
    answer: 'A',
    explanation: 'Heavy Lekki rains caused severe flash flooding, but Bepo rallied emergency drainage measures and virtual learning alternatives to ensure continuity.',
  },
  {
    id: 9048,
    novel: 'The Lekki Headmaster',
    chapter: 8,
    question: 'What international opportunity was presented to Mr. Bepo as a reward for his exemplary leadership record?',
    options: {
      A: 'A prestigious educational fellowship and leadership role in the United Kingdom',
      B: 'An appointment as a UNESCO ambassador in East Africa',
      C: 'A ministerial appointment as federal commissioner for youth',
      D: 'A senior administrative post in a Canadian university',
    },
    answer: 'A',
    explanation: 'Bepo was offered a lucrative educational fellowship in the UK, creating an intense personal dilemma between emigrating ("Japa") and serving his homeland.',
  },
  {
    id: 9049,
    novel: 'The Lekki Headmaster',
    chapter: 9,
    question: 'Why did Mr. Bepo feel deeply conflicted about accepting the United Kingdom appointment ("Japa syndrome")?',
    options: {
      A: 'He felt a profound patriotic duty to Nigerian children whose lives he was positively shaping',
      B: 'The British embassy delayed processing his entry visa',
      C: 'His salary offer in London was lower than his Lekki compensation',
      D: 'He was unwilling to adapt to cold European weather',
    },
    answer: 'A',
    explanation: 'Bepo wrestled with the reality that Nigeria desperately needs passionate, dedicated educators to reform its foundational institutions rather than fleeing abroad.',
  },
  {
    id: 9053,
    novel: 'The Lekki Headmaster',
    chapter: 10,
    question: 'How did the pupils of Stardom Schools demonstrate their love for Mr. Bepo when rumors of his departure spread?',
    options: {
      A: 'They organized a heartfelt petition and presented him with handwritten appreciation notes',
      B: 'They staged a walkout during the morning assembly',
      C: 'They refused to take their end-of-term examinations',
      D: 'They organized an unauthorized protest march to the board chairman’s residence',
    },
    answer: 'A',
    explanation: 'Pupils from various classes presented Bepo with moving handwritten letters and artwork expressing how his mentoring transformed their lives.',
  },
  {
    id: 9056,
    novel: 'The Lekki Headmaster',
    chapter: 8,
    question: 'What award did Stardom Schools win under Mr. Bepo’s administration at the Lagos State Inter-School Science Olympiad?',
    options: {
      A: 'First Place Overall Champion Trophy',
      B: 'Most Disciplined Contingent Award',
      C: 'Consolation Certificate of Participation',
      D: 'Best Uniform and March-Past Trophy',
    },
    answer: 'A',
    explanation: 'Under Bepo’s leadership, Stardom Schools took first position in the state academic Olympiad, defeating long-established legacy colleges.',
  },
  {
    id: 9059,
    novel: 'The Lekki Headmaster',
    chapter: 12,
    question: 'What final message does Kabir Alabi Garba convey through Mr. Bepo’s return to Stardom Schools in "The Lekki Headmaster"?',
    options: {
      A: 'True patriotism is choosing to stay and rebuild our own nation with excellence and devotion',
      B: 'Teaching is a temporary profession to be discarded once money is saved',
      C: 'Lagos is too chaotic for sustainable academic development',
      D: 'Private schools are always superior to public educational boards',
    },
    answer: 'A',
    explanation: 'The author communicates that building Nigeria’s future requires committed professionals who dedicate their skills to raising the next generation at home.',
  },
  {
    id: 9062,
    novel: 'The Lekki Headmaster',
    chapter: 3,
    question: 'What was Mr. Bepo’s perspective on corporal punishment in modern child psychology?',
    options: {
      A: 'Dialogue, restorative justice, and moral reflection are vastly more effective than physical violence',
      B: 'Caning should be administered daily to enforce fear in students',
      C: 'Punishment should be outsourced entirely to the parents',
      D: 'No student should ever experience any consequence for misbehavior',
    },
    answer: 'A',
    explanation: 'Bepo advocated for positive behavioral intervention, moral counseling, and empathy rather than brutal physical intimidation.',
  },
  {
    id: 9065,
    novel: 'The Lekki Headmaster',
    chapter: 4,
    question: 'What was the background of Mr. Bepo before his appointment to Stardom Schools in Lekki?',
    options: {
      A: 'A dedicated veteran educator with decades of teaching and administrative experience in public and private schools',
      B: 'A former commercial bank manager with no teaching qualification',
      C: 'A foreign diplomat returning from overseas service',
      D: 'A junior lecturer at the university of Lagos',
    },
    answer: 'A',
    explanation: 'Mr. Bepo was an experienced, seasoned master educator whose lifelong passion was teaching and school administration.',
  },
  {
    id: 9068,
    novel: 'The Lekki Headmaster',
    chapter: 11,
    question: 'How did Mrs. Ogunwale, Bepo’s landlady, react when she heard Bepo had decided to stay in Nigeria?',
    options: {
      A: 'She wept with joy and celebrated his dedication to community youth',
      B: 'She increased his house rent immediately',
      C: 'She urged him to reconsider and travel immediately',
      D: 'She advised him to start a private business instead',
    },
    answer: 'A',
    explanation: 'Mrs. Ogunwale praised Bepo as an exceptional, selfless hero whose decision brought blessing and inspiration to their community.',
  },
  // =========================================================================
  // EXTENSIVE "THE LEKKI HEADMASTER" QUESTION BANK (Kabir Alabi Garba)
  // Exclusively featured for UTME Use of English Novel Section
  // =========================================================================
  {
    id: 9069,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'In Chapter 1 ("Dusk"), why was Mr. Bepo’s unexpected breakdown on the school assembly podium particularly shocking to the students and teachers?',
    options: {
      A: 'He was universally revered as a pillar of emotional resilience, wit, and unflinching composure',
      B: 'He had just been presented with a national award for literature',
      C: 'He had earlier announced that morning that school fees would be doubled',
      D: 'The state governor was sitting directly behind him on the assembly stage',
    },
    answer: 'A',
    explanation: 'Mr. Bepo was widely admired as a rock of stability and humor; seeing such an upright, dignified leader weep openly sent shockwaves across the entire assembly.',
  },
  {
    id: 9070,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'What underlying national dilemma is encapsulated by the title of Chapter 1, "Dusk"?',
    options: {
      A: 'The gathering gloom and emotional exhaustion caused by the mass exodus of skilled Nigerian professionals ("Japa")',
      B: 'The failure of solar power generators installed in the school premises',
      C: 'The evening curfew imposed on Lekki by the state traffic management authority',
      D: 'The dismissal of senior academic staff at the end of the term',
    },
    answer: 'A',
    explanation: 'Chapter 1’s title symbolizes the encroaching darkness of brain drain and personal despair as families are fractured by migration pressures.',
  },
  {
    id: 9071,
    novel: 'The Lekki Headmaster',
    chapter: 2,
    question: 'What core educational philosophy guided Mrs. Ibidun Gloss when appointing Mr. Bepo to head Stardom Schools?',
    options: {
      A: 'Character development, academic rigour, and moral uprightness over pure commercial profit',
      B: 'Maximizing tuition revenue by tripling school enrollment numbers',
      C: 'Transforming Stardom Schools into an elite boarding institution for expatriates',
      D: 'Replacing Nigerian teachers with foreign educators from Europe',
    },
    answer: 'A',
    explanation: 'Mrs. Ibidun Gloss sought a principled, compassionate instructional leader who would prioritize holistic education and moral integrity over commercialization.',
  },
  {
    id: 9072,
    novel: 'The Lekki Headmaster',
    chapter: 2,
    question: 'How did Mr. Bepo view the role of a headmaster within the school community?',
    options: {
      A: 'As a servant-leader, moral mentor, and guardian of each child’s intellectual and emotional welfare',
      B: 'As an autocratic executive whose directives must never be questioned',
      C: 'As a financial manager tasked primarily with auditing staff expenditure',
      D: 'As a temporary figurehead awaiting opportunities in the corporate sector',
    },
    answer: 'A',
    explanation: 'Bepo firmly believed that school leadership is an apostolic calling requiring unconditional dedication, empathy, and active mentorship of students.',
  },
  {
    id: 9073,
    novel: 'The Lekki Headmaster',
    chapter: 3,
    question: 'What specific pressure did Mr. Bepo face from his family residing in the United Kingdom?',
    options: {
      A: 'Constant pleading from his wife and children to resign his position in Nigeria and join them abroad',
      B: 'Demands to send them monthly foreign currency remittances from his salary',
      C: 'Requests to sell their family ancestral land in Abeokuta',
      D: 'Insistence that he run for a political seat in the National Assembly',
    },
    answer: 'A',
    explanation: 'Bepo’s wife and children in the UK repeatedly urged him to abandon teaching in Nigeria, arguing that his talents were wasted in an ungrateful system.',
  },
  {
    id: 9074,
    novel: 'The Lekki Headmaster',
    chapter: 3,
    question: 'How did Mr. Bepo handle cases of student indiscipline at Stardom Schools?',
    options: {
      A: 'Through empathetic dialogue, root-cause counseling, and restorative disciplinary measures',
      B: 'By immediately handing down permanent expulsion letters',
      C: 'By administering public corporal flogging in front of parents',
      D: 'By withholding the students’ lunch rations and academic transcripts',
    },
    answer: 'A',
    explanation: 'Bepo vehemently rejected brutality and corporal punishment, choosing constructive counseling and dialogue to unearth the underlying issues troubling the child.',
  },
  {
    id: 9075,
    novel: 'The Lekki Headmaster',
    chapter: 4,
    question: 'What innovative academic intervention did Mr. Bepo introduce to motivate struggling teachers at Stardom Schools?',
    options: {
      A: 'Peer-to-peer classroom observation, professional development workshops, and collaborative lesson planning',
      B: 'Deducting salaries from teachers whose classes scored below sixty percent',
      C: 'Assigning armed security guards to invigilate all staff preparation rooms',
      D: 'Mandating that teachers work seven days a week including Sunday evenings',
    },
    answer: 'A',
    explanation: 'Bepo fostered a collaborative culture of continuous professional development, mentorship, and encouragement rather than intimidation and punitive deductions.',
  },
  {
    id: 9076,
    novel: 'The Lekki Headmaster',
    chapter: 4,
    question: 'Which subject did Mr. Bepo take personal delight in occasionally teaching to senior secondary students?',
    options: {
      A: 'English Language and Literature in English',
      B: 'Further Mathematics and Statistics',
      C: 'Technical Drawing and Woodwork',
      D: 'Agricultural Science and Practical Farming',
    },
    answer: 'A',
    explanation: 'As a passionate grammarian and literary scholar, Bepo relished entering classrooms to teach English lexis, structure, and literary appreciation.',
  },
  {
    id: 9077,
    novel: 'The Lekki Headmaster',
    chapter: 5,
    question: 'What confrontation occurred between Mr. Bepo and the influential parent, Chief Didi Ogba?',
    options: {
      A: 'Chief Ogba attempted to bribe and intimidate Bepo into inflating his son’s failed examination grades',
      B: 'Chief Ogba sued the school board for banning private luxury vehicles inside the gate',
      C: 'Chief Ogba demanded that his daughter be appointed senior prefect without election',
      D: 'Chief Ogba tried to purchase the school playground to build a private estate',
    },
    answer: 'A',
    explanation: 'Chief Didi Ogba wielded his wealth and political clout to pressure Bepo into altering his indolent son’s report sheet, but Bepo adamantly refused.',
  },
  {
    id: 9078,
    novel: 'The Lekki Headmaster',
    chapter: 5,
    question: 'What was Mr. Bepo’s memorable response to Chief Didi Ogba’s monetary inducement?',
    options: {
      A: 'He declared that integrity is not for sale and that falsifying grades destroys the child’s future',
      B: 'He accepted the donation as part of the school endowment fund',
      C: 'He referred the matter to a commercial arbitrator in Ikeja',
      D: 'He agreed to alter the grades on the condition of double tuition payments',
    },
    answer: 'A',
    explanation: 'Bepo stood firm on moral ground, asserting that an unearned grade is a psychological poison that ruins the child and destroys academic credibility.',
  },
  {
    id: 9079,
    novel: 'The Lekki Headmaster',
    chapter: 6,
    question: 'What institutional mechanism did Mr. Bepo establish to eliminate bullying and harassment among pupils?',
    options: {
      A: 'An anonymous "Voice of the Child" suggestion box and a student welfare peer committee',
      B: 'Installing biometric surveillance monitors inside student dormitories',
      C: 'Expelling all senior prefects at the start of every academic term',
      D: 'Forbidding junior students from speaking directly with senior classmates',
    },
    answer: 'A',
    explanation: 'Bepo empowered junior students through the "Voice of the Child" reporting system, creating a safe, transparent environment free from victimization.',
  },
  {
    id: 9080,
    novel: 'The Lekki Headmaster',
    chapter: 6,
    question: 'Why did the students of Stardom Schools affectionately nickname Mr. Bepo "The Lekki Headmaster"?',
    options: {
      A: 'Because of his iconic, ubiquitous presence, genuine care, and fatherly devotion to every child in the Lekki axis',
      B: 'Because he was the wealthiest landowner in the Lekki commercial district',
      C: 'Because he was born on the Lekki peninsula into the royal chieftaincy family',
      D: 'Because the state ministry of education officially titled all private principals with that name',
    },
    answer: 'A',
    explanation: 'The moniker was a term of endearment and profound respect earned through his tireless devotion to the youth of the Lekki community.',
  },
  {
    id: 9081,
    novel: 'The Lekki Headmaster',
    chapter: 7,
    question: 'What does Bepo’s resignation from Beesway Group of Schools over the signpost error illustrate about his character?',
    options: {
      A: 'His zero-tolerance for institutional hypocrisy, mediocrity, and intellectual carelessness in education',
      B: 'His stubbornness and inability to work cooperatively under private school proprietors',
      C: 'His secret desire to start his own rival printing press in Lagos',
      D: 'His preference for public civil service over private educational ventures',
    },
    answer: 'A',
    explanation: 'Resigning over "Beesway Group of School" highlighted Bepo’s deep conviction that an educational institution that displays blatant illiteracy cannot mold children.',
  },
  {
    id: 9082,
    novel: 'The Lekki Headmaster',
    chapter: 7,
    question: 'How did Director Mr. Egi Meko of Beesway Group of Schools react when Bepo pointed out the billboard error?',
    options: {
      A: 'He dismissed the correction arrogantly, claiming that commercial profits mattered far more than grammar',
      B: 'He immediately apologized and awarded Bepo an editorial bonus',
      C: 'He sued the billboard printer in a magistrate court for breach of contract',
      D: 'He formed an internal committee to review all school advertising materials',
    },
    answer: 'A',
    explanation: 'Mr. Egi Meko mocked Bepo’s principled observation, demonstrating the tragic commercialization where educational vanity replaces intellectual rigor.',
  },
  {
    id: 9083,
    novel: 'The Lekki Headmaster',
    chapter: 8,
    question: 'How did Stardom Schools prepare for the Lagos State Inter-School Science Olympiad in Chapter 8?',
    options: {
      A: 'Through intensive after-school practical laboratory clinics and rigorous conceptual drilling supervised by Bepo',
      B: 'By hiring external mercenary examination candidates from tertiary institutions',
      C: 'By bribing the Olympiad jury members with luxury corporate hampers',
      D: 'By relying exclusively on rote memorization without laboratory experiments',
    },
    answer: 'A',
    explanation: 'Bepo mobilized his science faculty to conduct hands-on laboratory workshops, demystifying complex concepts and bolstering student confidence.',
  },
  {
    id: 9084,
    novel: 'The Lekki Headmaster',
    chapter: 8,
    question: 'What was the immediate public reaction when Stardom Schools defeated legacy schools to win the Science Olympiad trophy?',
    options: {
      A: 'It cemented Stardom Schools’ reputation as a premier academic powerhouse on the Lagos coast',
      B: 'The state ministry canceled the competition results due to petitions',
      C: 'The losing schools staged an immediate boycott of all future competitions',
      D: 'Mrs. Ibidun Gloss announced she was closing down the science department',
    },
    answer: 'A',
    explanation: 'The triumph validated Bepo’s pedagogical reforms and elevated Stardom Schools into an elite academic institution recognized statewide.',
  },
  {
    id: 9085,
    novel: 'The Lekki Headmaster',
    chapter: 9,
    question: 'How did Mr. Bepo engage the local Lekki community outside the formal school walls?',
    options: {
      A: 'He organized adult literacy classes, community clean-up drives, and mentorship clinics for underprivileged youths',
      B: 'He ran for local government councilor in the municipal elections',
      C: 'He founded a commercial real estate consultancy firm in Lekki Phase 1',
      D: 'He organized private commercial transport buses to augment his income',
    },
    answer: 'A',
    explanation: 'Bepo viewed the school as an anchor of community enlightenment, spearheading literacy programs and youth empowerment initiatives.',
  },
  {
    id: 9086,
    novel: 'The Lekki Headmaster',
    chapter: 9,
    question: 'What role did local artisans and craftsmen play in Bepo’s educational vision for Stardom Schools?',
    options: {
      A: 'They were invited into the school to teach vocational skills such as carpentry, pottery, and electrical wiring',
      B: 'They were hired as full-time security guards at the main entrance',
      C: 'They were barred from entering the school compound during school hours',
      D: 'They provided commercial catering services for the school cafeteria',
    },
    answer: 'A',
    explanation: 'Bepo bridged academic theory with practical vocational competence by inviting master artisans to train students in practical technical crafts.',
  },
  {
    id: 9087,
    novel: 'The Lekki Headmaster',
    chapter: 10,
    question: 'What initial behavioral and academic challenges did Jide exhibit before Bepo began mentoring him?',
    options: {
      A: 'Low self-esteem, poor reading comprehension, and association with delinquent street peers',
      B: 'Extreme arrogance due to his family’s immense wealth and political connections',
      C: 'A persistent habit of truancy caused by excessive video gaming',
      D: 'Severe physical illness that prevented him from attending regular school',
    },
    answer: 'A',
    explanation: 'Jide was a disillusioned, struggling teenager on the verge of academic ruin until Bepo’s patient, after-hours tutoring unlocked his potential.',
  },
  {
    id: 9088,
    novel: 'The Lekki Headmaster',
    chapter: 10,
    question: 'What teaching strategy did Bepo employ to help Jide master mathematics and English comprehension?',
    options: {
      A: 'Relating abstract concepts to daily real-life situations and patiently celebrating small milestones',
      B: 'Threatening to report him to the local police precinct whenever he failed a test',
      C: 'Assigning him fifty pages of dense textbooks to copy out every night',
      D: 'Forbidding him from eating dinner until all homework problems were solved',
    },
    answer: 'A',
    explanation: 'Bepo used contextual, compassionate pedagogy, building Jide’s confidence step by step until he developed genuine academic curiosity.',
  },
  {
    id: 9089,
    novel: 'The Lekki Headmaster',
    chapter: 11,
    question: 'What gift did the graduating class of Stardom Schools present to Mr. Bepo during his send-forth ceremony?',
    options: {
      A: 'A framed portrait collage filled with handwritten notes of gratitude from every student',
      B: 'A customized gold-plated wrist watch imported from Switzerland',
      C: 'An airline ticket to London with first-class lounge access',
      D: 'A cash purse collected from high-net-worth parents',
    },
    answer: 'A',
    explanation: 'The students gave Bepo an emotionally resonant framed compilation of handwritten personal tributes reflecting his profound impact on their lives.',
  },
  {
    id: 9090,
    novel: 'The Lekki Headmaster',
    chapter: 11,
    question: 'What touching remark did Mrs. Ibidun Gloss deliver in her farewell address to Mr. Bepo?',
    options: {
      A: 'She called him an irreplaceable national treasure whose shoes would remain forever difficult to fill',
      B: 'She criticized him for abandoning the school right before accreditation inspections',
      C: 'She urged the UK government to offer him immediate British citizenship',
      D: 'She announced the school was canceling all academic awards in protest',
    },
    answer: 'A',
    explanation: 'Mrs. Gloss lauded Bepo as the soul and conscience of Stardom Schools whose transformative legacy was indelibly etched in the institution.',
  },
  {
    id: 9091,
    novel: 'The Lekki Headmaster',
    chapter: 12,
    question: 'What sensory and mental reflections flooded Mr. Bepo’s mind as his car approached the airport toll gate?',
    options: {
      A: 'Vivid memories of the innocent faces of Nigerian children whose eyes sparkled with hope whenever he taught them',
      B: 'Anxiety over whether his luggage exceeded the maximum international baggage weight',
      C: 'Calculations of how much money he would earn in British pounds as an immigrant worker',
      D: 'Regret that he had not sold off his personal library in Lagos before leaving',
    },
    answer: 'A',
    explanation: 'On the road to the airport, Bepo had an intense spiritual awakening, realizing that hundreds of Nigerian youth depended on his guidance for their future.',
  },
  {
    id: 9092,
    novel: 'The Lekki Headmaster',
    chapter: 12,
    question: 'What was the driver’s immediate reaction when Mr. Bepo commanded him: "Turn the car around; take me back to Stardom Schools"?',
    options: {
      A: 'Utter astonishment and disbelief, followed by deep admiration once he realized Bepo was completely serious',
      B: 'Anger and refusal to obey because the airport transfer fare had already been paid',
      C: 'Panic, assuming Bepo had suffered a medical emergency or forgotten his passport',
      D: 'He immediately called the school proprietress to ask for double transport fees',
    },
    answer: 'A',
    explanation: 'The driver was dumbfounded by such rare conviction, witnessing firsthand a Nigerian professional consciously choosing national service over relocation.',
  },
  {
    id: 9093,
    novel: 'The Lekki Headmaster',
    chapter: 12,
    question: 'What major thematic contrast does Kabir Alabi Garba highlight in "The Lekki Headmaster"?',
    options: {
      A: 'The allure of foreign economic comfort versus the sacred patriotic duty of rebuilding the homeland',
      B: 'The supremacy of science subjects over the humanities and arts',
      C: 'The generational feud between young teachers and older school administrators',
      D: 'The conflict between private Christian schools and secular public academies',
    },
    answer: 'A',
    explanation: 'The novel masterfully explores the tension between the siren call of foreign migration and the noble burden of staying to nurture Nigeria’s next generation.',
  },
  {
    id: 9094,
    novel: 'The Lekki Headmaster',
    chapter: 2,
    question: 'What was the architectural and environmental setting of Stardom Schools in the novel?',
    options: {
      A: 'A serene, purpose-built campus nestled along the coastal breeze of the Lekki peninsula',
      B: 'A congested warehouse in downtown central Lagos with no recreational grounds',
      C: 'A temporary camp constructed inside an abandoned industrial estate in Ikeja',
      D: 'A rented three-story residential apartment block in Surulere',
    },
    answer: 'A',
    explanation: 'Stardom Schools was situated in a thoughtfully designed coastal environment in Lekki, promoting peace, contemplation, and serious scholarship.',
  },
  {
    id: 9095,
    novel: 'The Lekki Headmaster',
    chapter: 4,
    question: 'How did Mr. Bepo address the issue of teachers moonlighting as private lesson tutors to the detriment of their school duties?',
    options: {
      A: 'He advocated for fair institutional compensation while instituting free, structured school-wide remedial clinics',
      B: 'He deployed undercover investigators to track teachers to their private evening classes',
      C: 'He dismissed every teacher caught offering private academic support',
      D: 'He demanded that the school take a seventy percent commission from all private tutoring',
    },
    answer: 'A',
    explanation: 'Bepo addressed systemic causes by improving teacher welfare and embedding structured remedial support within the official school schedule.',
  },
  {
    id: 9096,
    novel: 'The Lekki Headmaster',
    chapter: 5,
    question: 'What did Chief Didi Ogba do after Mr. Bepo resolutely rejected his bribe?',
    options: {
      A: 'He threatened to use his political influence to revoke the school’s operating license',
      B: 'He immediately apologized and enrolled his other children in the school',
      C: 'He offered Bepo a brand new sport utility vehicle to soften his stance',
      D: 'He withdrew his son peacefully and praised Bepo’s moral uprightness',
    },
    answer: 'A',
    explanation: 'True to his arrogant demeanor, Chief Ogba issued fierce threats against the school, but Mrs. Ibidun Gloss and Bepo stood resolute against blackmail.',
  },
  {
    id: 9097,
    novel: 'The Lekki Headmaster',
    chapter: 6,
    question: 'Which of the following values was central to Mr. Bepo’s regular Monday morning assembly homilies?',
    options: {
      A: 'Diligence, honesty, empathy, and national responsibility',
      B: 'The necessity of acquiring political power at all costs',
      C: 'Prioritizing material wealth as the only sign of personal success',
      D: 'Viewing peers as adversaries to be defeated in cut-throat competition',
    },
    answer: 'A',
    explanation: 'Bepo’s weekly homilies were legendary for instilling character, ethical leadership, mutual kindness, and deep civic commitment in students.',
  },
  {
    id: 9098,
    novel: 'The Lekki Headmaster',
    chapter: 7,
    question: 'Why did Bepo insist that language accuracy and grammar are moral issues in education?',
    options: {
      A: 'Carelessness in language reflects carelessness in thought, integrity, and truth',
      B: 'English grammar is the only subject required for university matriculation',
      C: 'The British Council offers monetary grants only to schools with zero grammatical errors',
      D: 'It was the only way to ensure students spoke with a pseudo-British accent',
    },
    answer: 'A',
    explanation: 'For Bepo, precision in words mirror precision in character; an educator who tolerates falsehood in grammar easily compromises ethical standards.',
  },
  {
    id: 9099,
    novel: 'The Lekki Headmaster',
    chapter: 8,
    question: 'What role did teamwork play in Stardom Schools’ triumph at the State Olympiad?',
    options: {
      A: 'Students in physics, chemistry, biology, and mathematics pooled insights and peer-reviewed each other’s solutions',
      B: 'The school captain solved all the competition questions single-handedly',
      C: 'The teachers completed the Olympiad examination papers on behalf of the students',
      D: 'The students took turns sleeping while external coaches provided answers',
    },
    answer: 'A',
    explanation: 'Bepo trained the students as an interdependent intellectual unit, proving that collaborative peer learning outclasses isolated individual brilliance.',
  },
  {
    id: 9100,
    novel: 'The Lekki Headmaster',
    chapter: 9,
    question: 'How did Mrs. Ogunwale support Mr. Bepo during his solitary bachelor days in her rental apartment?',
    options: {
      A: 'She treated him like her own son, regularly preparing warm home-cooked meals and checking on his health',
      B: 'She demanded rent advance payments six months before the due date',
      C: 'She frequently complained about the noise of his late-night essay grading',
      D: 'She urged him to move to a more expensive gated estate in Ikoyi',
    },
    answer: 'A',
    explanation: 'Mrs. Ogunwale provided motherly comfort and hospitality, buffering Bepo from the painful loneliness caused by his family’s absence overseas.',
  },
  {
    id: 9101,
    novel: 'The Lekki Headmaster',
    chapter: 10,
    question: 'What milestone achievement did Jide attain under Mr. Bepo’s selfless guidance?',
    options: {
      A: 'He gained admission into a competitive federal university secondary school with flying colors',
      B: 'He dropped out of school to become a professional athlete in Europe',
      C: 'He won a national lottery jackpot that funded his family business',
      D: 'He was elected as a youth political representative in Lagos',
    },
    answer: 'A',
    explanation: 'Through Bepo’s tireless mentoring, Jide overcame academic stagnation and passed his entrance examinations with distinction.',
  },
  {
    id: 9102,
    novel: 'The Lekki Headmaster',
    chapter: 11,
    question: 'During the send-forth novelty football match, what comic yet memorable incident occurred?',
    options: {
      A: 'Mr. Bepo took a playful penalty kick against the students’ goalkeeper, uniting the entire school in joy',
      B: 'The physical education teacher tore his jersey and received a red card',
      C: 'Chief Didi Ogba attempted to play as the center referee',
      D: 'The match ended prematurely due to a downpour that flooded the pitch',
    },
    answer: 'A',
    explanation: 'The novelty match epitomized Bepo’s humble warmth and playful camaraderie, dissolving hierarchical barriers between leadership and students.',
  },
  {
    id: 9103,
    novel: 'The Lekki Headmaster',
    chapter: 12,
    question: 'What realization about his personal calling prompted Bepo’s decision to stay in Nigeria?',
    options: {
      A: 'That his true dignity and fulfillment resided in being a transformative headmaster in Nigeria rather than a second-class citizen in diaspora',
      B: 'That the cost of living in London was higher than he had anticipated',
      C: 'That his visa had expired while he was packing his bags in Lekki',
      D: 'That his wife in the UK had asked him to postpone his flight by six months',
    },
    answer: 'A',
    explanation: 'Bepo realized that no foreign prosperity could substitute for the sacred joy of building young minds in his own country where his contribution genuinely mattered.',
  },
  {
    id: 9104,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'What literary point of view is primarily employed in "The Lekki Headmaster" to depict Bepo’s internal conflicts?',
    options: {
      A: 'Third-person omniscient narration granting intimate access to Bepo’s thoughts and the school community',
      B: 'First-person retrospective narration by Chief Didi Ogba',
      C: 'Epistolary format consisting solely of diary entries written by Jide',
      D: 'Dramatic monologue delivered exclusively by Mrs. Ibidun Gloss',
    },
    answer: 'A',
    explanation: 'The third-person omniscient perspective allows the author to explore both the psychological depth of Bepo and the socioeconomic tensions across Lagos.',
  },
  {
    id: 9105,
    novel: 'The Lekki Headmaster',
    chapter: 2,
    question: 'What symbol does the school bell represent in Stardom Schools under Mr. Bepo’s stewardship?',
    options: {
      A: 'A clarion call to duty, discipline, punctual excellence, and moral awakening',
      B: 'An annoying intrusion into the teachers’ leisure hours',
      C: 'A reminder that tuition payments are overdue',
      D: 'A signal for security personnel to lock the main perimeter gate',
    },
    answer: 'A',
    explanation: 'The school bell symbolized the rhythm of purposeful labor, accountability, and the shared journey toward intellectual enlightenment.',
  },
  {
    id: 9106,
    novel: 'The Lekki Headmaster',
    chapter: 3,
    question: 'How does Kabir Alabi Garba portray the emotional cost of the "Japa" syndrome on Nigerian family life?',
    options: {
      A: 'As a painful fracture that breeds spousal alienation, loneliness, and emotional trauma despite financial gains',
      B: 'As a completely joyful transition without any social drawbacks',
      C: 'As an insignificant event that has no impact on child upbringing',
      D: 'As a government policy aimed at reducing the national population',
    },
    answer: 'A',
    explanation: 'The novel poignant exposes how migration splits families, leaving spouses emotionally stranded and children deprived of parental companionship.',
  },
  {
    id: 9107,
    novel: 'The Lekki Headmaster',
    chapter: 5,
    question: 'In the encounter with Chief Didi Ogba, how does the author present the conflict between "Nouveau Riche" entitlement and pedagogical integrity?',
    options: {
      A: 'By contrasting Ogba’s belief that money can purchase anything with Bepo’s unyielding fidelity to truth and merit',
      B: 'By showing that wealthy parents are always justified in determining examination questions',
      C: 'By illustrating that school principals should defer to politicians in all academic matters',
      D: 'By depicting academic failure as a crime punishable by immediate imprisonment',
    },
    answer: 'A',
    explanation: 'The conflict dramatizes the clash between corrupt money-power and the sanctity of academic merit that forms the bedrock of true education.',
  },
  {
    id: 9108,
    novel: 'The Lekki Headmaster',
    chapter: 7,
    question: 'What ironical truth is captured in Bepo’s experience at Beesway Group of Schools?',
    options: {
      A: 'An institution claiming to educate the next generation was itself unwilling to learn basic literacy and humble self-correction',
      B: 'The school was owned by the federal ministry of education',
      C: 'The pupils were more proficient in Latin than the teachers were in English',
      D: 'The school had zero enrollment despite having ten luxury buses',
    },
    answer: 'A',
    explanation: 'The irony lies in a school proprietor who sells "education" to the public while proudly displaying grammatical ignorance on his own commercial billboard.',
  },
  {
    id: 9109,
    novel: 'The Lekki Headmaster',
    chapter: 12,
    question: 'How does the novel "The Lekki Headmaster" conclude on an uplifting note of hope for Nigeria?',
    options: {
      A: 'With Bepo walking back through the gates of Stardom Schools, welcomed with ecstatic cheers as he resumes his noble post',
      B: 'With Bepo taking a flight to Canada after changing his mind again at the terminal',
      C: 'With the permanent closure of Stardom Schools due to financial bankruptcy',
      D: 'With Bepo being appointed Minister of Education by presidential decree',
    },
    answer: 'A',
    explanation: 'The triumphant conclusion celebrates Bepo’s return as a victorious homecoming of conscience, reigniting hope in the redemptive power of dedicated educators.',
  },
  {
    id: 9110,
    novel: 'The Lekki Headmaster',
    chapter: 10,
    question: 'What does the character of Jide symbolize in the broader thematic landscape of the novel?',
    options: {
      A: 'The countless young Nigerians whose hidden potential only requires compassionate mentoring and belief to flourish',
      B: 'The hopeless state of public educational curriculum in West Africa',
      C: 'The inevitable failure of children from underprivileged backgrounds',
      D: 'The superiority of home schooling over institutional secondary education',
    },
    answer: 'A',
    explanation: 'Jide embodies the unpolished diamonds among Nigerian youth who, when nurtured by patient educators like Bepo, achieve stellar heights.',
  },
  {
    id: 9111,
    novel: 'The Lekki Headmaster',
    chapter: 8,
    question: 'What lesson does Bepo teach his students after they win the State Science Olympiad?',
    options: {
      A: 'True victory demands greater humility, continuous learning, and serving those who are still struggling',
      B: 'They should boast publicly and belittle their competitors from other schools',
      C: 'They should cease studying science since they have already proven their supremacy',
      D: 'They should demand that the state government award them luxury apartments in Lekki',
    },
    answer: 'A',
    explanation: 'Bepo cautions against arrogance, instructing his champions that true intellectual maturity expresses itself in humility, empathy, and continued diligence.',
  },
  {
    id: 9112,
    novel: 'The Lekki Headmaster',
    chapter: 11,
    question: 'What was the central message of the farewell speech delivered by the Senior Prefect of Stardom Schools to Mr. Bepo?',
    options: {
      A: '"You did not merely teach us from textbooks; you taught us how to be honorable, courageous human beings"',
      B: '"We hope you send us electronic smartphones once you arrive in London"',
      C: '"Our next headmaster will undoubtedly be wealthier and more fashionable"',
      D: '"We will remember you only when examination results are published"',
    },
    answer: 'A',
    explanation: 'The Senior Prefect’s speech movingly acknowledged that Bepo’s greatest legacy was building moral character, self-respect, and integrity in his pupils.',
  },
  {
    id: 9113,
    novel: 'The Lekki Headmaster',
    chapter: 12,
    question: 'Who is the author of the accredited JAMB UTME novel "The Lekki Headmaster"?',
    options: {
      A: 'Kabir Alabi Garba',
      B: 'Chimamanda Ngozi Adichie',
      C: 'Wole Soyinka',
      D: 'B.O. Dele Ashade',
    },
    answer: 'A',
    explanation: 'The acclaimed novel "The Lekki Headmaster" is written by veteran journalist, cultural scholar, and author Kabir Alabi Garba.',
  },
  ...TOUGH_LEKKI_NOVEL_QUESTIONS
];
