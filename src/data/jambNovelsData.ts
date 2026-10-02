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
  novel: 'The Life Changer' | 'Sweet Sixteen' | 'The Lekki Headmaster';
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
    id: 'the-life-changer',
    title: 'The Life Changer',
    author: 'Khadija Abubakar Jalli',
    jambUsage: 'Prescribed JAMB UTME Compulsory Novel (Recent & Previous Cycles)',
    overview:
      'The Life Changer explores the joys, challenges, peer pressures, and moral hazards confronting Nigerian youths transitioning from secondary school to university life. Through the candid storytelling of Ummi, the matriarch, her children learn about academic discipline, the dangers of deceit, and the importance of parental counsel.',
    centralThemes: [
      'University Freedom versus Self-Discipline',
      'The Perils of Examination Malpractice and Extortion',
      'Peer Pressure and Campus Vanity',
      'Honesty, Forgiveness, and Redemption',
      'Parental Counsel and Inter-generational Wisdom',
    ],
    setting: 'Lafayette Community, Ahmadu Bello University (ABU) Zaria, Kaduna State, Nigeria',
    characters: [
      {
        name: 'Ummi',
        role: 'Narrator, Mother & Moral Anchor',
        description:
          'Ummi is the warm, wise, and perceptive mother of Omar, Teemah, Jamila, and Bint. Having attended university herself, she uses engaging stories to prepare her children for the outside world.',
        keyActions: [
          'Narrates the cautionary campus tale of Salma and Lafayette history to her children.',
          'Celebrates Omar’s university admission into ABU Zaria while cautioning him on peer pressure.',
          'Recalls her own youthful university encounter with her husband and lecturer Dr. Samuel Johnson.',
        ],
        examSignificance:
          'JAMB frequently tests questions on Ummi’s parental advice, her reflections on university matriculation, and her role as the narrative bridge.',
      },
      {
        name: 'Omar',
        role: 'Eldest Son & JAMB Aspirant',
        description:
          'The 18-year-old firstborn son who scored an impressive 230 in his JAMB UTME and earned provisional admission into Ahmadu Bello University, Zaria to read Law.',
        keyActions: [
          'Shares the exciting news of his UTME score and university admission with his family.',
          'Listens attentively to his mother’s stories and learns that university life requires caution.',
        ],
        examSignificance:
          'JAMB tests Omar’s age (18), his UTME score (230), and his intended course of study (Law at ABU Zaria).',
      },
      {
        name: 'Salma',
        role: 'Protagonist of the Campus Narrative',
        description:
          'An attractive, sophisticated, and overly confident undergraduate from a wealthy background whose pride and disregard for rules led to her downfall.',
        keyActions: [
          'Disdains queueing up and treats university registration staff rudely.',
          'Rooms in Queen Amina Hall with Tomiwa, Ada, and Ngozi after declining off-campus offers.',
          'Gets involved with wealthy men (Habib and Labaran) in town and displays flashy campus living.',
          'Engages in examination malpractice (cheat notes) during her final year exams and is apprehended by an invigilator.',
          'Is swindled by Kabir when attempting to bribe members of the Examination Malpractice Committee.',
          'Gets expelled alongside her accomplice Kola, returns home in remorse, and seeks forgiveness.',
        ],
        examSignificance:
          'Crucial central figure in JAMB questions: questions test her room in Queen Amina Hall, her roommates, the invigilator who caught her, and the bribe amount.',
      },
      {
        name: 'Habib',
        role: 'Politician & Member of the State Assembly',
        description:
          'A wealthy, influential politician who pursues Salma in town and later attempts to use his political influence and money to rescue her from disciplinary expulsion.',
        keyActions: [
          'Gives Salma a ride in town with his driver and friend Labaran.',
          'Gives Salma 100,000 Naira to sort out her Examination Malpractice case.',
          'Encountered Kabir who falsely claimed to have connections on the university board.',
        ],
        examSignificance:
          'Tested on his political office (Honourable/Politician) and his association with Labaran and Salma.',
      },
      {
        name: 'Labaran',
        role: 'Habib’s Confidant & Driver',
        description:
          'Habib’s childhood friend and trusted driver who acts as intermediary in several of Habib’s affairs.',
        keyActions: [
          'Accompanies Habib when picking up Salma and Tomiwa.',
          'Introduces Kabir as a middleman who claims to know members of the disciplinary committee.',
        ],
        examSignificance:
          'JAMB tests his relationship to Habib (childhood friend turned driver).',
      },
      {
        name: 'Kabir',
        role: 'University Swindler / Fraudster',
        description:
          'A clever young man working in the university who falsely presents himself as an influential member of the disciplinary committee.',
        keyActions: [
          'Collects 100,000 Naira from Salma under the pretext of settling the Examination Malpractice Committee.',
          'Squanders the extorted money on gambling at a game house and is later robbed by Zaki.',
        ],
        examSignificance:
          'Tested on the amount he extorted (100,000 Naira) and his fate (gambling and being robbed by Zaki).',
      },
      {
        name: 'Tomiwa',
        role: 'Salma’s Roommate (Queen Amina Hall)',
        description:
          'A brilliant, clean, and sociable Yoruba girl from Ibadan who loves cooking delicious meals for the roommates.',
        keyActions: [
          'Maintains peace and cooks popular delicacies (including spicy Jollof rice) for the room.',
          'Accompanies Salma on outings and advises her against unnecessary vanity.',
        ],
        examSignificance:
          'Tested on her state/ethnicity (Yoruba from Ibadan) and her culinary role in the room.',
      },
      {
        name: 'Ada & Ngozi',
        role: 'Salma’s Other Roommates',
        description:
          'Ada is from the Middle Belt (Benue) and Ngozi is a peaceful, religious Igbo girl from the South-East.',
        keyActions: [
          'Represent peaceful inter-tribal co-existence among the four roommates despite diverse religious and cultural backgrounds.',
        ],
        examSignificance:
          'JAMB tests the ethnic diversity of the roommates (Tomiwa, Ada, Ngozi, and Salma).',
      },
      {
        name: 'Bint',
        role: 'Ummi’s Youngest Child',
        description:
          'A witty, observant 5-year-old primary school pupil who outwits her French teacher, Mallam Salihu.',
        keyActions: [
          'Answers Mallam Salihu’s French question with unexpected wit.',
          'Demonstrates that young children learn rapidly from observation.',
        ],
        examSignificance:
          'Tested on her age (5 years) and her interaction with Mallam Salihu.',
      },
      {
        name: 'Hakimi',
        role: 'Village Head of Lafayette',
        description:
          'The respected traditional village head who maintains peace and arbitration in the Lafayette community.',
        keyActions: [
          'Handles communal disputes and represents the traditional moral fabric of Lafayette.',
        ],
        examSignificance:
          'Tested on his traditional title and peaceful administrative role.',
      },
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Bint’s Wit & Lafayette Family Morning',
        summary:
          'The novel opens in the living room of Ummi’s home in Lafayette. Bint narrates how she outsmarted her teacher, Mallam Salihu, during French class. Omar excitedly arrives with his UTME score of 230 and provisional admission into ABU Zaria to study Law. His sisters Teemah and Jamila tease him, while Ummi prepares to share important life lessons.',
        keyEvents: [
          'Bint recounts her classroom French victory.',
          'Omar announces his JAMB UTME score of 230 and admission to study Law at ABU Zaria.',
          'Ummi cautions Omar that university admission is a life changer requiring personal maturity.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Admission into the university is a life changer; it gives you wings, but you must know how to fly.',
            speaker: 'Ummi',
            context: 'Advising Omar upon learning of his university admission.',
          },
        ],
      },
      {
        chapterNumber: 2,
        title: 'Ummi’s University Days & The Lafayette Legend',
        summary:
          'Ummi reminisces about her youthful university days, her interaction with the community, and her fateful encounter with Dr. Samuel Johnson. She discusses Lafayette’s history, community values, and the traditional leadership of Hakimi.',
        keyEvents: [
          'Ummi reflects on her early years at university and strict adherence to parental modesty.',
          'The peaceful cultural setting of Lafayette and Hakimi’s leadership are detailed.',
          'Dr. Samuel Johnson’s clinical professionalism and kind demeanor are highlighted.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Culture is the fabric that holds community honor together.',
            speaker: 'Hakimi',
            context: 'Emphasizing the value of Lafayette’s shared cultural discipline.',
          },
        ],
      },
      {
        chapterNumber: 3,
        title: 'Quiet Living & The Tale of Talle',
        summary:
          'Ummi narrates the story of Talle, a quiet, introverted man in Lafayette renowned for his honesty, who unfortunately gets misled by deceptive companions into harbor criminal conspirators.',
        keyEvents: [
          'Talle, known as "the quiet one", lives a modest, solitary life.',
          'His sudden acquisition of luxury items arouses Hakimi and the villagers’ suspicion.',
          'The community discovers he was used by kidnappers to store ransoms, proving that bad company corrupts good manners.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Silence is not always a mark of innocence; solitude without wisdom attracts vultures.',
            speaker: 'Ummi',
            context: 'Explaining how Talle was deceived by criminals.',
          },
        ],
      },
      {
        chapterNumber: 4,
        title: 'Salma’s Campus Arrival & Queen Amina Hall',
        summary:
          'The narrative shifts to Salma, an attractive, high-spirited freshman arriving at the university campus. Disdaining the queues, she displays arrogance toward the registration officer. After declining off-campus accommodation, she moves into Queen Amina Hall with Tomiwa, Ada, and Ngozi.',
        keyEvents: [
          'Salma scorns registration procedures and ridicules compliant students.',
          'Moves into Queen Amina Hall Room with Tomiwa (Ibadan), Ada (Middle Belt), and Ngozi (South-East).',
          'Despite diverse ethnic origins, the four roommates form a cooperative bond.',
        ],
        vitalExamQuotes: [
          {
            quote: 'We may speak different tongues, but our pots simmer the same soup of human dignity.',
            speaker: 'Tomiwa',
            context: 'Promoting unity and cooking for her three university roommates.',
          },
        ],
      },
      {
        chapterNumber: 5,
        title: 'The Car Ride with Habib & Labaran',
        summary:
          'Salma and Tomiwa accept a car ride from two strangers, Honourable Habib and his driver Labaran. Salma falsely claims Tomiwa is the one Habib fancied, leading to comic mix-ups and opening doors to wealthy town influences.',
        keyEvents: [
          'Habib offers Salma and Tomiwa a ride in his luxury car.',
          'Salma exaggerates her family status to impress Habib.',
          'Habib gives them gifts, pulling the young women into high-society distractions.',
        ],
        vitalExamQuotes: [
          {
            quote: 'When vanity enters through the front door, caution escapes through the window.',
            speaker: 'Ummi',
            context: 'Warning about the allure of unearned gifts from older politicians.',
          },
        ],
      },
      {
        chapterNumber: 6,
        title: 'The Exam Cheat & The Disciplinary Trap',
        summary:
          'During her final year examinations, Salma fails to study adequately due to distractions. She smuggles unauthorized cheat sheets into the hall. The alert invigilator catches her red-handed and reports her to the Examination Malpractice Committee.',
        keyEvents: [
          'Salma smuggles cheat notes into the exam hall.',
          'An invigilator catches her and confiscates her script and unauthorized materials.',
          'Her accomplice Kola is also apprehended; Salma faces severe disciplinary hearing.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Examination malpractice is the grave of intellectual integrity.',
            speaker: 'Invigilator',
            context: 'Handing Salma over to the disciplinary committee.',
          },
        ],
      },
      {
        chapterNumber: 7,
        title: 'The Swindle: Kabir’s Deceit',
        summary:
          'Desperate to escape expulsion, Salma approaches Habib for help. Habib provides 100,000 Naira to compromise the committee. Salma is directed to Kabir, who claims to have board connections, but Kabir extorts the money and flees to a gambling den.',
        keyEvents: [
          'Habib gives Salma 100,000 Naira for bribery.',
          'Kabir swindles Salma, pocketing the money without speaking to any official.',
          'Kabir goes to gamble in a local game house and is attacked and robbed by Zaki.',
        ],
        vitalExamQuotes: [
          {
            quote: 'A bribe is an invitation to vultures; you lose your dignity and your coins.',
            speaker: 'Ummi',
            context: 'Recounting Kabir’s extortion of Salma.',
          },
        ],
      },
      {
        chapterNumber: 8,
        title: 'The Verdict & Expulsion',
        summary:
          'The University Examination Malpractice Committee investigates the case thoroughly. Unmoved by excuses, the panel officially expels Salma and Kola from the university. Salma is shattered, realizing all her years of university study have ended in disgrace.',
        keyEvents: [
          'The Disciplinary Panel finds Salma and Kola guilty of gross malpractice.',
          'Salma is formally expelled and her academic matriculation revoked.',
          'Salma packs her bags from Queen Amina Hall in tears.',
        ],
        vitalExamQuotes: [
          {
            quote: 'The law of consequences recognizes neither beauty nor tears.',
            speaker: 'Committee Chairman',
            context: 'Delivering the disciplinary verdict to Salma.',
          },
        ],
      },
      {
        chapterNumber: 9,
        title: 'Remorse, Redemption & Omar’s Vow',
        summary:
          'Salma returns home in profound remorse, begs for forgiveness, and dedicates herself to honest living. Hearing this full story, Omar is deeply sobered and vows to his mother Ummi that he will maintain utmost integrity throughout his Law studies at ABU Zaria.',
        keyEvents: [
          'Salma transforms from a proud campus socialite to a humble, remorseful woman.',
          'Ummi concludes her narrative with lessons on second chances and personal character.',
          'Omar pledges to study hard and avoid bad influences at university.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Mother, I promise you: my certificate will bear honor, not shame.',
            speaker: 'Omar',
            context: 'Omar’s final pledge to his mother Ummi.',
          },
        ],
      },
    ],
  },
  {
    id: 'sweet-sixteen',
    title: 'Sweet Sixteen',
    author: 'Bolaji Abdullahi',
    jambUsage: 'Prescribed JAMB UTME Compulsory Novel (Previous Cycle Standard)',
    overview:
      'Sweet Sixteen is a heartwarming coming-of-age dialogue between sixteen-year-old Aliya and her intellectually engaging father, Mr. Bello. On her sixteenth birthday, instead of the customary party or gadgets, her father presents her with a deeply personal, sixteen-page letter titled "Letter to My Daughter". Through insightful conversations, they examine identity, sexuality, the truth about beauty, stereotyping, and the dignity of labour.',
    centralThemes: [
      'Transition from Adolescence into Womanhood',
      'The Illusion of Superficial Beauty versus Inner Dignity',
      'Sexuality, Consent, and Responsible Relationships',
      'Prejudice, Religious & Ethnic Stereotyping',
      'The Value of Hard Work and Intellectual Curiosity',
    ],
    setting: 'A middle-class Nigerian home, driveways, coffee tables, and contemporary school environment.',
    characters: [
      {
        name: 'Aliya',
        role: 'Protagonist (The 16-Year-Old Daughter)',
        description:
          'An inquisitive, bright, observant, and thoughtful sixteen-year-old high school student who is navigating the emotional and physical complexities of young womanhood.',
        keyActions: [
          'Receives the sixteen-page "Letter to My Daughter" from her father on her 16th birthday.',
          'Engages in candid discussions with her father about boys, beauty, puberty, and future ambitions.',
          'Discloses the mysterious note signed "HAK" (Hugs and Kisses) from her schoolmate Akin.',
          'Reflects on the true meaning of beauty after observing cosmetic surgery and societal double standards.',
        ],
        examSignificance:
          'Central protagonist: JAMB tests her age (16), her nickname ("First Lady"), her father’s birthday gift, and her reactions to Akin’s note.',
      },
      {
        name: 'Mr. Bello',
        role: 'Aliya’s Father & Mentor',
        description:
          'A cultured, open-minded journalist, intellectual, and affectionate father who believes in guiding his daughter through patient reason and honest discussion rather than harsh authoritarianism.',
        keyActions: [
          'Writes the sixteen-page letter to Aliya addressing major adult themes.',
          'Takes Aliya on drives and walks to discuss human nature, gender roles, and dignity in labour.',
          'Debunks ethnic stereotypes and explains why blind prejudice destroys national unity.',
          'Explains the meaning of "HAK" (Hugs and Kisses) and guides Aliya on personal boundaries.',
        ],
        examSignificance:
          'Most quoted character: JAMB frequently tests his profession (Journalist/Writer), his views on beauty, and his philosophical advice to Aliya.',
      },
      {
        name: 'Mrs. Bello',
        role: 'Aliya’s Mother',
        description:
          'A supportive, caring, and practical mother who collaborates with her husband to nurture a wholesome family atmosphere.',
        keyActions: [
          'Encourages Aliya to listen to her father’s wisdom.',
          'Provides practical domestic advice on growing up and female etiquette.',
        ],
        examSignificance:
          'Tested on her role as the balanced domestic support alongside Mr. Bello.',
      },
      {
        name: 'Akin',
        role: 'Aliya’s Schoolmate / Admirer',
        description:
          'A teenage boy in Aliya’s secondary school who harbors an innocent crush on Aliya and slips a note into her bag.',
        keyActions: [
          'Writes a short note to Aliya containing the acronym "HAK".',
          'Causes Aliya initial confusion until her father decodes the acronym as "Hugs And Kisses".',
        ],
        examSignificance:
          'Prominent in JAMB questions: questions test what acronym Akin wrote ("HAK") and what it means ("Hugs and Kisses").',
      },
      {
        name: 'Bobo',
        role: 'Mr. Bello’s Nephew',
        description:
          'An energetic, confident teenage boy whose bold perspectives on school life and sports provide contrast to Aliya’s introspective nature.',
        keyActions: [
          'Engages with the family during visits and represents contemporary teenage banter.',
        ],
        examSignificance:
          'Tested on his family relationship (nephew to Mr. Bello).',
      },
      {
        name: 'Grace',
        role: 'Aliya’s Classmate',
        description:
          'A fellow high school girl who represents teenage peer discussions regarding fashion, boys, and modern teenage culture.',
        keyActions: [
          'Discusses school trends, gossip, and boyfriends with Aliya.',
        ],
        examSignificance:
          'Represents typical adolescent peer perspectives in high school.',
      },
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Letter',
        summary:
          'On her sixteenth birthday, Aliya wakes up expecting the typical lavish teenage gifts, but her father surprises her with a custom, sixteen-page letter titled "Letter to My Daughter". Though initially puzzled, she begins reading and finds it filled with profound paternal affection and life guidance.',
        keyEvents: [
          'Aliya turns sixteen years old.',
          'Her father gives her a sixteen-page handwritten/printed letter titled "Letter to My Daughter".',
          'Aliya’s father calls her his "First Lady" and introduces key questions of self-identity.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Growing up is not just about adding years; it is about widening your moral circumference.',
            speaker: 'Mr. Bello',
            context: 'Opening paragraphs of "Letter to My Daughter".',
          },
        ],
      },
      {
        chapterNumber: 2,
        title: 'The Drive',
        summary:
          'Mr. Bello takes Aliya on an evening drive through town. They discuss the awkward physical and emotional changes of puberty, bodily privacy, menstruation, and why open communication between parents and children prevents fatal mistakes.',
        keyEvents: [
          'Father and daughter share an intimate, respectful conversation about puberty.',
          'Mr. Bello clarifies that curiosity is natural, but knowledge must guide choices.',
          'They explore how society creates unnecessary shame around natural biological transitions.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Your body is your temple; never let anyone make you feel ashamed of how God constructed it.',
            speaker: 'Mr. Bello',
            context: 'Discussing puberty during the car drive with Aliya.',
          },
        ],
      },
      {
        chapterNumber: 3,
        title: 'Work',
        summary:
          'Aliya and her father discuss the dignity of labour. Mr. Bello emphasizes that every legitimate profession deserves respect and that entitlement is a disease among youth. He warns against looking down on blue-collar workers or seeking easy shortcuts to wealth.',
        keyEvents: [
          'Discussion on hard work, academic diligence, and the dignity of humble professions.',
          'Mr. Bello shares examples of men who built enduring legacies through perseverance.',
          'Aliya learns that true independence comes from self-reliance.',
        ],
        vitalExamQuotes: [
          {
            quote: 'There is no shame in honest labour; the only real disgrace is parasitic entitlement.',
            speaker: 'Mr. Bello',
            context: 'Instructing Aliya on the virtue of hard work.',
          },
        ],
      },
      {
        chapterNumber: 4,
        title: 'The Gandoki',
        summary:
          'The conversation turns to cultural stereotypes, religious bias, and regional prejudice in Nigeria. Mr. Bello recounts the legendary exploits of Gandoki from Northern folklore and explains how stereotypes are lazy generalizations that rob individuals of their unique humanity.',
        keyEvents: [
          'Exploration of tribal stereotypes (Yoruba, Hausa, Igbo) and how they undermine national cohesion.',
          'Mr. Bello challenges Aliya to judge people by character rather than ethnicity.',
          'Reference to the heroic folklore of Gandoki.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Stereotypes are intellectual shortcuts invented by lazy minds who fear understanding the other.',
            speaker: 'Mr. Bello',
            context: 'Warning Aliya against judging people by tribal origins.',
          },
        ],
      },
      {
        chapterNumber: 5,
        title: 'A Great Height',
        summary:
          'Mr. Bello and Aliya discuss ambition, courage, and overcoming the fear of failure. He explains that achieving greatness requires stepping out of one’s comfort zone and learning to handle setbacks with equanimity.',
        keyEvents: [
          'Metaphor of looking down from a high cliff and mastering psychological vertigo.',
          'Discussion on academic and career aspirations.',
          'Learning that failure is an educational stepping stone rather than a terminal verdict.',
        ],
        vitalExamQuotes: [
          {
            quote: 'To reach a great height, you must not only look upward; you must conquer the dread of falling.',
            speaker: 'Mr. Bello',
            context: 'Encouraging Aliya to pursue high intellectual ambitions.',
          },
        ],
      },
      {
        chapterNumber: 6,
        title: 'Beauty',
        summary:
          'This chapter tackles the contemporary obsession with physical appearance, cosmetics, and the distorting influence of social media. Aliya discloses her observations about cosmetic beauty, and her father explains that superficial beauty fades, while beauty of character, intellect, and empathy is immortal.',
        keyEvents: [
          'Critical analysis of fashion magazines, whitening creams, and cosmetic surgery.',
          'Mr. Bello explains the distinction between transient physical symmetry and enduring inner grace.',
          'Aliya develops healthier self-esteem and self-acceptance.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Physical beauty catches the eye, but beauty of soul captures the heart forever.',
            speaker: 'Mr. Bello',
            context: 'Explaining why character outlasts superficial cosmetics.',
          },
        ],
      },
      {
        chapterNumber: 7,
        title: 'Hunters',
        summary:
          'The final chapter explores teenage romance, peer pressure, and boys who act as predatory "hunters". Aliya confesses about the note she received from Akin with the acronym "HAK". Mr. Bello calmly explains that "HAK" stands for "Hugs And Kisses", giving her practical wisdom on boundaries, respect, and emotional maturity.',
        keyEvents: [
          'Aliya reveals Akin’s note with the acronym "HAK".',
          'Mr. Bello decodes "HAK" as "Hugs And Kisses" without anger, explaining teenage attraction.',
          'Father warns against emotional predators who seek to harvest innocence without responsibility.',
          'Aliya concludes her 16th birthday confident, enlightened, and equipped for womanhood.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Boys at this age are like amateur hunters; do not become a trophy in someone’s game of vanity.',
            speaker: 'Mr. Bello',
            context: 'Explaining the psychology of teenage romance and "HAK".',
          },
        ],
      },
    ],
  },
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
  // ================= THE LIFE CHANGER =================
  {
    id: 9001,
    novel: 'The Life Changer',
    chapter: 1,
    question: 'In "The Life Changer", what was Omar’s score in his JAMB UTME examination?',
    options: {
      A: '210',
      B: '230',
      C: '250',
      D: '280',
    },
    answer: 'B',
    explanation: 'In Chapter 1, Omar excitedly announces to his family that he scored 230 in his JAMB UTME, which earned him admission to read Law at Ahmadu Bello University, Zaria.',
  },
  {
    id: 9002,
    novel: 'The Life Changer',
    chapter: 1,
    question: 'How old was Omar when he secured provisional admission into Ahmadu Bello University to read Law?',
    options: {
      A: '16 years old',
      B: '17 years old',
      C: '18 years old',
      D: '20 years old',
    },
    answer: 'C',
    explanation: 'Omar was 18 years old when he secured admission into the university to read Law.',
  },
  {
    id: 9003,
    novel: 'The Life Changer',
    chapter: 1,
    question: 'Who was Bint’s French teacher whom she playfully outsmarted in class?',
    options: {
      A: 'Dr. Samuel Johnson',
      B: 'Mallam Salihu',
      C: 'Hakimi',
      D: 'Kabir',
    },
    answer: 'B',
    explanation: 'In Chapter 1, five-year-old Bint narrates how she answered Mallam Salihu’s French query with quick wit.',
  },
  {
    id: 9004,
    novel: 'The Life Changer',
    chapter: 4,
    question: 'Which female hall of residence did Salma reside in on campus?',
    options: {
      A: 'Queen Amina Hall',
      B: 'Mary Slessor Hall',
      C: 'Moremi Hall',
      D: 'Ribadu Hall',
    },
    answer: 'A',
    explanation: 'Salma lived in Queen Amina Hall alongside her three roommates: Tomiwa, Ada, and Ngozi.',
  },
  {
    id: 9005,
    novel: 'The Life Changer',
    chapter: 4,
    question: 'Which of Salma’s roommates in Queen Amina Hall was from Ibadan and renowned for cooking delicious meals?',
    options: {
      A: 'Ngozi',
      B: 'Ada',
      C: 'Tomiwa',
      D: 'Bint',
    },
    answer: 'C',
    explanation: 'Tomiwa was a brilliant Yoruba girl from Ibadan who frequently prepared appetizing meals for the roommates.',
  },
  {
    id: 9006,
    novel: 'The Life Changer',
    chapter: 5,
    question: 'What official political title was held by Habib in town?',
    options: {
      A: 'Local Government Chairman',
      B: 'State Commissioner for Education',
      C: 'Honourable Member of the House of Assembly',
      D: 'Permanent Secretary',
    },
    answer: 'C',
    explanation: 'Habib was an influential politician and Honourable Member of the State House of Assembly.',
  },
  {
    id: 9007,
    novel: 'The Life Changer',
    chapter: 5,
    question: 'What was the relationship between Honourable Habib and his driver, Labaran?',
    options: {
      A: 'They were biological brothers',
      B: 'They were childhood friends',
      C: 'They were former university classmates',
      D: 'They were in-laws',
    },
    answer: 'B',
    explanation: 'Labaran was Habib’s trusted childhood friend who later became his personal driver and confidant.',
  },
  {
    id: 9008,
    novel: 'The Life Changer',
    chapter: 7,
    question: 'How much money did Habib give to Salma to compromise the Examination Malpractice Committee?',
    options: {
      A: '50,000 Naira',
      B: '100,000 Naira',
      C: '250,000 Naira',
      D: '500,000 Naira',
    },
    answer: 'B',
    explanation: 'Habib handed 100,000 Naira to Salma, which Kabir subsequently extorted under the guise of bribing panel members.',
  },
  {
    id: 9009,
    novel: 'The Life Changer',
    chapter: 7,
    question: 'What happened to Kabir after he extorted money from Salma under the false pretense of assisting her?',
    options: {
      A: 'He successfully bribed the committee and secured her pardon',
      B: 'He lost the money gambling in a game house and was robbed by Zaki',
      C: 'He surrendered the money to the university dean',
      D: 'He fled abroad to continue his studies',
    },
    answer: 'B',
    explanation: 'Kabir spent the extorted funds gambling in a local gaming house and was subsequently assaulted and dispossessed of his remaining money by Zaki.',
  },
  {
    id: 9010,
    novel: 'The Life Changer',
    chapter: 8,
    question: 'What final disciplinary sanction was imposed on Salma by the University Examination Malpractice Committee?',
    options: {
      A: 'Suspension for two academic semesters',
      B: 'A formal reprimand and repeating the course',
      C: 'Expulsion from the university',
      D: 'Community service in the university library',
    },
    answer: 'C',
    explanation: 'Salma and her examination accomplice Kola were found guilty of gross malpractice and formally expelled from the university.',
  },

  // ================= SWEET SIXTEEN =================
  {
    id: 9011,
    novel: 'Sweet Sixteen',
    chapter: 1,
    question: 'In "Sweet Sixteen", what unique gift did Mr. Bello present to Aliya on her sixteenth birthday?',
    options: {
      A: 'A brand-new smartphone and laptop',
      B: 'A 16-page letter titled "Letter to My Daughter"',
      C: 'A diamond necklace and wrist watch',
      D: 'An international holiday ticket',
    },
    answer: 'B',
    explanation: 'On her sixteenth birthday, Mr. Bello gave Aliya a thoughtful 16-page letter titled "Letter to My Daughter" instead of typical electronic gifts.',
  },
  {
    id: 9012,
    novel: 'Sweet Sixteen',
    chapter: 1,
    question: 'What affectionate pet name or nickname did Mr. Bello frequently use to address Aliya?',
    options: {
      A: 'Princess',
      B: 'First Lady',
      C: 'Queen Bee',
      D: 'Gold Medalist',
    },
    answer: 'B',
    explanation: 'Mr. Bello affectionately referred to Aliya as his "First Lady".',
  },
  {
    id: 9013,
    novel: 'Sweet Sixteen',
    chapter: 7,
    question: 'What did the acronym "HAK" written in the note given to Aliya by Akin stand for?',
    options: {
      A: 'Hold And Kiss',
      B: 'Hope And Kindness',
      C: 'Hugs And Kisses',
      D: 'Honour And Knowledge',
    },
    answer: 'C',
    explanation: 'When Aliya showed her father the note from Akin, Mr. Bello explained that "HAK" was teenage slang for "Hugs And Kisses".',
  },
  {
    id: 9014,
    novel: 'Sweet Sixteen',
    chapter: 4,
    question: 'Which northern folklore hero was referenced by Mr. Bello to illustrate bravery and address cultural stereotypes?',
    options: {
      A: 'Bayajidda',
      B: 'Gandoki',
      C: 'Queen Amina',
      D: 'Dan Fodio',
    },
    answer: 'B',
    explanation: 'In Chapter 4 ("The Gandoki"), Mr. Bello recounted the legendary tale of Gandoki to discuss courage and dismantle tribal prejudice.',
  },
  {
    id: 9015,
    novel: 'Sweet Sixteen',
    chapter: 2,
    question: 'What profession is practiced by Aliya’s father, Mr. Bello?',
    options: {
      A: 'Medical Doctor',
      B: 'Journalist and Writer',
      C: 'Civil Engineer',
      D: 'Commercial Pilot',
    },
    answer: 'B',
    explanation: 'Mr. Bello is an accomplished journalist, writer, and intellectual commentator.',
  },
  {
    id: 9016,
    novel: 'Sweet Sixteen',
    chapter: 6,
    question: 'In Chapter 6 ("Beauty"), what does Mr. Bello describe as the most enduring form of human beauty?',
    options: {
      A: 'Facial symmetry and light complexion',
      B: 'Expensive designer apparel and accessories',
      C: 'Inner character, intellect, and kindness',
      D: 'Youthful vigor and photographic popularity',
    },
    answer: 'C',
    explanation: 'Mr. Bello teaches Aliya that physical attractiveness inevitably fades, while inner beauty consisting of character, intellect, and empathy endures forever.',
  },
  {
    id: 9017,
    novel: 'Sweet Sixteen',
    chapter: 3,
    question: 'According to Mr. Bello in the chapter "Work", what is the real disgrace when it comes to human labor?',
    options: {
      A: 'Performing menial or blue-collar jobs',
      B: 'Parasitic entitlement and refusing to work',
      C: 'Earning modest wages in public service',
      D: 'Changing career paths later in life',
    },
    answer: 'B',
    explanation: 'Mr. Bello asserts that every honest job has dignity, and the only genuine disgrace is lazy, parasitic entitlement.',
  },
  {
    id: 9018,
    novel: 'Sweet Sixteen',
    chapter: 7,
    question: 'Why did Mr. Bello describe teenage boys as "amateur hunters" in the final chapter?',
    options: {
      A: 'Because they go hunting wildlife in rural areas',
      B: 'Because they relentlessly pursue girls as vanity trophies without emotional maturity',
      C: 'Because they participate in archery sports in school',
      D: 'Because they are always looking for scholarships',
    },
    answer: 'B',
    explanation: 'Mr. Bello cautions Aliya that teenage boys often act like amateur hunters seeking romantic conquests as trophies to brag to their peers.',
  },

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
    id: 9029,
    novel: 'The Life Changer',
    chapter: 2,
    question: 'Why did the Hakimi initially express reluctance when Ummi’s grandmother suggested traditional medicine for the sick child?',
    options: {
      A: 'He believed hospital modern medicine was superior and should be sought first',
      B: 'He had personal grievances with the community herbalist',
      C: 'The village chief had strictly banned traditional treatments',
      D: 'He was waiting for a missionary doctor to visit the community',
    },
    answer: 'A',
    explanation: 'The Hakimi advised caution and emphasized that modern medical diagnosis should always be prioritized over unverified traditional concoctions.',
  },
  {
    id: 9030,
    novel: 'The Life Changer',
    chapter: 3,
    question: 'What was the nickname of the stern and meticulous lecturer who insisted on quiet conduct during matriculation registration?',
    options: {
      A: 'Dr. Samuel Johnson',
      B: 'Professor Dabo',
      C: 'Mallam Salihu',
      D: 'Dr. Kabir',
    },
    answer: 'B',
    explanation: 'Professor Dabo was known across the faculty for his disciplined, upright principles and strict moral standards during student interactions.',
  },
  {
    id: 9031,
    novel: 'The Life Changer',
    chapter: 6,
    question: 'What scheme did Kabir engage in that ultimately led to his arrest by law enforcement agents?',
    options: {
      A: 'Illegal lottery gambling and fraudulent examination impersonation',
      B: 'Car theft and smuggling across the border',
      C: 'Forging university diploma certificates',
      D: 'Extorting money from unsuspecting market traders',
    },
    answer: 'A',
    explanation: 'Kabir was trapped in illegal gambling activities and fraudulent syndicate schemes after posing as an examination contractor.',
  },
  {
    id: 9032,
    novel: 'The Life Changer',
    chapter: 7,
    question: 'How did Salma’s demeanor change following the tragic ordeal of her expulsion from the university?',
    options: {
      A: 'She became humble, reflective, and deeply remorseful for her past arrogance',
      B: 'She relocated abroad immediately without informing her family',
      C: 'She sued the university senate in the high court',
      D: 'She refused to speak with anyone for several years',
    },
    answer: 'A',
    explanation: 'Salma’s painful life experience transformed her into a humble and sober individual who sincerely regretted her past recklessness.',
  },
  {
    id: 9033,
    novel: 'The Life Changer',
    chapter: 8,
    question: 'What major moral lesson does Ummi impart to her children as she concludes the story of her university days?',
    options: {
      A: 'Every choice carries consequences, and integrity is the bedrock of lasting success',
      B: 'University life is exclusively about making wealthy political acquaintances',
      C: 'Academic qualifications guarantee instant wealth without hard work',
      D: 'It is better to avoid living in campus hostels altogether',
    },
    answer: 'A',
    explanation: 'Ummi emphasizes that university life is a crucible of moral choices where character and integrity ultimately determine a student’s destiny.',
  },
  {
    id: 9034,
    novel: 'Sweet Sixteen',
    chapter: 1,
    question: 'In "Sweet Sixteen" by Bolaji Abdullahi, what special present did Mr. Bello give to his daughter Aliya on her sixteenth birthday?',
    options: {
      A: 'A letter titled "Letter to My Daughter" containing life advice',
      B: 'A brand new laptop computer',
      C: 'A golden necklace and wrist watch',
      D: 'A flight ticket to visit her aunt in London',
    },
    answer: 'A',
    explanation: 'On Aliya’s sixteenth birthday, her father Mr. Bello handed her a comprehensive, heartfelt manuscript letter titled "Letter to My Daughter" addressing teenage transition.',
  },
  {
    id: 9035,
    novel: 'Sweet Sixteen',
    chapter: 2,
    question: 'In the chapter titled "The Drive", what critical life concept did Mr. Bello explain to Aliya while driving through the city?',
    options: {
      A: 'The difference between physical beauty and inner character',
      B: 'The history of traffic regulations in Nigeria',
      C: 'How to save money from weekly pocket allowances',
      D: 'The political structure of the federal government',
    },
    answer: 'A',
    explanation: 'In "The Drive", Mr. Bello cautions Aliya against equating superficial outward vanity with genuine emotional maturity and inner character.',
  },
  {
    id: 9036,
    novel: 'Sweet Sixteen',
    chapter: 3,
    question: 'What acronym did Aliya and her friends use at school to describe someone regarded as excessively old-fashioned?',
    options: {
      A: 'HOG (Holding Old Grudges)',
      B: 'FOG (Fuddy-Duddy Old Generation)',
      C: 'KPC (Knowing Poor Choices)',
      D: 'BOL (Backward Old Life)',
    },
    answer: 'B',
    explanation: 'Aliya explained to her father that teenagers humorously refer to outdated, overly conservative views as belonging to the "FOG" mentality.',
  },
  {
    id: 9037,
    novel: 'Sweet Sixteen',
    chapter: 4,
    question: 'In discussing sexual attraction and relationships, what analogy did Mr. Bello use to warn Aliya about premature emotional entanglements?',
    options: {
      A: 'A ripe fruit picked prematurely before its sweetness develops',
      B: 'A speeding car navigating a steep mountain curve without brakes',
      C: 'A traveler embarking on a desert journey without sufficient water',
      D: 'A ship sailing in stormy coastal waters without a lighthouse',
    },
    answer: 'A',
    explanation: 'Mr. Bello likened premature relationships to plucking unripe fruit, stressing that true maturity requires patience, restraint, and focus on education.',
  },
  {
    id: 9038,
    novel: 'Sweet Sixteen',
    chapter: 5,
    question: 'What health condition did Aliya’s mother emphasize when discussing self-care and hygiene with her daughter?',
    options: {
      A: 'Maintaining healthy skin, nutrition, and personal hygiene during puberty',
      B: 'Preventing dental cavities through regular clinic visits',
      C: 'Managing severe athletic injuries during track and field events',
      D: 'Preventative vaccinations against tropical diseases',
    },
    answer: 'A',
    explanation: 'Aliya’s mother reinforced that bodily care, wholesome nutrition, and personal dignity are fundamental aspects of adolescent growth.',
  },
  {
    id: 9039,
    novel: 'Sweet Sixteen',
    chapter: 6,
    question: 'How did Mr. Bello guide Aliya when she asked about religious tolerance and ethnic diversity in Nigeria?',
    options: {
      A: 'He emphasized mutual respect, shared humanity, and empathy above sectarian prejudices',
      B: 'He advised her to avoid associating with people of other backgrounds',
      C: 'He told her that religion should never be discussed under any circumstance',
      D: 'He suggested that only political parties could unite diverse ethnic groups',
    },
    answer: 'A',
    explanation: 'Mr. Bello taught Aliya that Nigeria’s diversity is an asset and that every human being deserves dignity and kindness regardless of faith or tribe.',
  },
  {
    id: 9040,
    novel: 'Sweet Sixteen',
    chapter: 7,
    question: 'What was Aliya’s career ambition which her parents encouraged through avid reading and critical thinking?',
    options: {
      A: 'Journalism and creative writing',
      B: 'Aeronautical engineering',
      C: 'Commercial pilot',
      D: 'Chartered public accountant',
    },
    answer: 'A',
    explanation: 'Aliya developed a passionate interest in literature, writing, and journalism, nurtured by extensive discussions and debates with her father.',
  },
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
    id: 9050,
    novel: 'The Life Changer',
    chapter: 1,
    question: 'What is the full name of Omar’s mother who narrates the story in "The Life Changer"?',
    options: {
      A: 'Ummi Ahmad',
      B: 'Amina Bello',
      C: 'Zainab Garba',
      D: 'Fatima Abubakar',
    },
    answer: 'A',
    explanation: 'The narrator of "The Life Changer" is Ummi Ahmad, who gathers her children together to share invaluable life lessons from her past.',
  },
  {
    id: 9051,
    novel: 'The Life Changer',
    chapter: 2,
    question: 'What illness afflicted Ummi’s cousin that prompted a family discussion on modern hospital care versus superstition?',
    options: {
      A: 'Chronic appendicitis',
      B: 'Severe malarial fever and dehydration',
      C: 'Typhoid fever and stomach ulcer',
      D: 'Asthmatic respiratory distress',
    },
    answer: 'B',
    explanation: 'The child suffered from severe fever which uneducated villagers attributed to evil spirits, until proper medical diagnosis proved it was severe malaria.',
  },
  {
    id: 9052,
    novel: 'Sweet Sixteen',
    chapter: 2,
    question: 'What did Mr. Bello describe as the "curse of the smartphone" among modern teenagers?',
    options: {
      A: 'Distraction from meaningful face-to-face relationships and loss of deep focus',
      B: 'The financial burden of purchasing expensive mobile data plans',
      C: 'Frequent damage to phone screens during outdoor games',
      D: 'The inability to memorize telephone numbers',
    },
    answer: 'A',
    explanation: 'Mr. Bello pointed out that digital addiction isolates adolescents from authentic human relationships and erodes reading discipline.',
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
    id: 9054,
    novel: 'The Life Changer',
    chapter: 3,
    question: 'Who was Teemah in "The Life Changer"?',
    options: {
      A: 'Ummi’s inquisitive second daughter who frequently asks probing questions',
      B: 'Omar’s university study partner in the Law faculty',
      C: 'The stern dean of student affairs at the university',
      D: 'Salma’s wealthy benefactor in town',
    },
    answer: 'A',
    explanation: 'Teemah is Omar’s younger sister, known in the family for her sharp intellect and lively questions during evening story sessions.',
  },
  {
    id: 9055,
    novel: 'Sweet Sixteen',
    chapter: 4,
    question: 'According to Mr. Bello in "Sweet Sixteen", what is the true measure of friendship during teenage years?',
    options: {
      A: 'Someone who encourages you toward moral integrity and stands by you during adversity',
      B: 'Someone who shares the same social media status and fashion tastes',
      C: 'Someone who assists you to cover up dishonest mistakes',
      D: 'Someone who always lends you money without asking for repayment',
    },
    answer: 'A',
    explanation: 'Mr. Bello defined true friendship as a bond rooted in truth, mutual accountability, and moral encouragement.',
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
    id: 9057,
    novel: 'The Life Changer',
    chapter: 5,
    question: 'What car model was driven by Habib when he first offered Salma and her roommate a ride?',
    options: {
      A: 'A gleaming black Mercedes-Benz',
      B: 'A customized Toyota Land Cruiser SUV',
      C: 'A silver Peugeot 504 sedan',
      D: 'A dark green Honda Accord',
    },
    answer: 'A',
    explanation: 'Habib drove a luxurious black Mercedes-Benz which initially attracted Salma’s vain curiosity.',
  },
  {
    id: 9058,
    novel: 'Sweet Sixteen',
    chapter: 6,
    question: 'What metaphor did Mr. Bello use to describe the importance of reading good books?',
    options: {
      A: 'Books are windows through which the mind travels into countless lives and eras',
      B: 'Books are heavy weights that train the physical endurance of students',
      C: 'Books are decorative ornaments for household display cabinets',
      D: 'Books are tools used solely for clearing university matriculation hurdles',
    },
    answer: 'A',
    explanation: 'Mr. Bello told Aliya that reading expands the human soul, allowing one to converse with the greatest thinkers across centuries.',
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
    id: 9060,
    novel: 'The Life Changer',
    chapter: 4,
    question: 'Which of the following describes Ada’s state of origin among the Queen Amina Hall roommates?',
    options: {
      A: 'Benue State (Middle Belt)',
      B: 'Enugu State',
      C: 'Oyo State',
      D: 'Kano State',
    },
    answer: 'A',
    explanation: 'Ada hailed from Benue State, illustrating the harmonious ethnic and cultural diversity within Queen Amina Hall.',
  },
  {
    id: 9061,
    novel: 'Sweet Sixteen',
    chapter: 5,
    question: 'In "Sweet Sixteen", how did Aliya respond when she realized that her father respected her opinions as an emerging adult?',
    options: {
      A: 'She felt deeply validated, mature, and willing to share her innermost concerns openly',
      B: 'She became rebellious and questioned all household curfews',
      C: 'She stopped consulting her mother on domestic matters',
      D: 'She decided to leave boarding school to live independently',
    },
    answer: 'A',
    explanation: 'Aliya deeply valued her father’s respectful, non-judgmental guidance, fostering open and transparent communication.',
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
    id: 9063,
    novel: 'The Life Changer',
    chapter: 1,
    question: 'What career does Omar aspire to pursue after completing his law degree at Ahmadu Bello University?',
    options: {
      A: 'Corporate lawyer and human rights advocate',
      B: 'Commercial airline pilot',
      C: 'Politician and state governor',
      D: 'Petroleum geologist',
    },
    answer: 'A',
    explanation: 'Omar dreamed of becoming a distinguished lawyer who uses the power of law to defend justice and human dignity.',
  },
  {
    id: 9064,
    novel: 'Sweet Sixteen',
    chapter: 1,
    question: 'What is the full name of Aliya’s father in "Sweet Sixteen"?',
    options: {
      A: 'Mr. Bello',
      B: 'Dr. Johnson',
      C: 'Alhaji Garba',
      D: 'Chief Ogba',
    },
    answer: 'A',
    explanation: 'Aliya’s caring father is Mr. Bello, a dedicated civil servant and philosopher-parent.',
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
    id: 9066,
    novel: 'The Life Changer',
    chapter: 7,
    question: 'Who helped Salma during her darkest moment of expulsion, demonstrating true unconditional friendship?',
    options: {
      A: 'Her former roommates Tomiwa, Ngozi, and Ada',
      B: 'Honourable Habib and Labaran',
      C: 'Dr. Kabir who took her money',
      D: 'The security guards at the university gate',
    },
    answer: 'A',
    explanation: 'Her roommates demonstrated genuine sisterhood and compassion, helping her overcome despair despite her earlier snobbishness.',
  },
  {
    id: 9067,
    novel: 'Sweet Sixteen',
    chapter: 7,
    question: 'What key message about beauty does Mr. Bello impart to Aliya in "Sweet Sixteen"?',
    options: {
      A: 'Physical beauty fades with time, but intelligence, compassion, and character endure for a lifetime',
      B: 'Cosmetics and fashion are the most important investments for young women',
      C: 'Beauty alone guarantees respect and career advancement in society',
      D: 'Intellect and physical beauty are mutually exclusive',
    },
    answer: 'A',
    explanation: 'Mr. Bello teaches that true, radiant beauty emanates from a kind heart, a disciplined mind, and moral purity.',
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
      B: 'Khadija Abubakar Jalli',
      C: 'Bolaji Abdullahi',
      D: 'B.O. Dele Ashade',
    },
    answer: 'A',
    explanation: 'The acclaimed novel "The Lekki Headmaster" is written by veteran journalist, cultural scholar, and author Kabir Alabi Garba.',
  },
  ...TOUGH_LEKKI_NOVEL_QUESTIONS
];
