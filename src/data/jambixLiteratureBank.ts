/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX LITERATURE IN ENGLISH QUESTION BANK
 * 200 TOUGH JAMB UTME-STYLE QUESTIONS ACROSS ALL TOPICS (QUESTIONS 1–200)
 * Indexed directly from official syllabus specifications.
 * Total questions: 200
 */

export interface JambixLiteratureItem {
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

export const JAMBIX_LITERATURE_ITEMS: JambixLiteratureItem[] = [
  {
    "id": "lit_tough_1",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 1,
    "text": "A play ends with the death of its protagonist as a result of a serious error in judgement. Which dramatic form is most appropriate?",
    "options": {
      "A": "Farce",
      "B": "Tragedy",
      "C": "Comedy of manners",
      "D": "Melodrama"
    },
    "answer": "B",
    "explanation": "Tragedy presents serious conflict and often ends in the downfall or death of a major character.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "lit_tough_2",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 2,
    "text": "A playwright exposes the hypocrisy of wealthy socialites by exaggerating their manners and obsession with status. This is an example of",
    "options": {
      "A": "pastoral drama",
      "B": "romantic comedy",
      "C": "comedy of manners",
      "D": "tragicomedy"
    },
    "answer": "C",
    "explanation": "Comedy of manners satirises the behaviour, conventions and pretensions of a particular social class.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "lit_tough_3",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 3,
    "text": "Which dramatic technique occurs when a character reveals private thoughts aloud while alone on stage?",
    "options": {
      "A": "Soliloquy",
      "B": "Dialogue",
      "C": "Aside",
      "D": "Exposition"
    },
    "answer": "A",
    "explanation": "A soliloquy allows the audience to hear a character's private thoughts, usually when the character is alone.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "lit_tough_4",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 4,
    "text": "A character speaks briefly to the audience while the other characters on stage supposedly cannot hear the words. This is",
    "options": {
      "A": "a monologue",
      "B": "an aside",
      "C": "a flashback",
      "D": "a prologue"
    },
    "answer": "B",
    "explanation": "An aside is a remark intended for the audience or selected listeners but unheard by other characters.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "lit_tough_5",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 5,
    "text": "Which feature most clearly distinguishes melodrama from subtle psychological drama?",
    "options": {
      "A": "The absence of conflict",
      "B": "The use of exaggerated emotions and sharply defined good and evil characters",
      "C": "The complete absence of music",
      "D": "The use of only historical characters"
    },
    "answer": "B",
    "explanation": "Melodrama often uses heightened emotion, sensational situations and clear moral contrasts.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "lit_tough_6",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 6,
    "text": "A play combines tragic events with comic scenes but does not allow either mood to dominate completely. It is best described as",
    "options": {
      "A": "a farce",
      "B": "a tragedy",
      "C": "a tragicomedy",
      "D": "a masque"
    },
    "answer": "C",
    "explanation": "Tragicomedy blends serious or tragic elements with comic features.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "lit_tough_7",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 7,
    "text": "What is the primary function of stage directions?",
    "options": {
      "A": "To provide the audience with the author's biography",
      "B": "To guide actors and production teams on movement, delivery and stage action",
      "C": "To replace all dialogue in the play",
      "D": "To provide a summary of the entire novel"
    },
    "answer": "B",
    "explanation": "Stage directions indicate entrances, exits, gestures, tone, scenery and other production details.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "lit_tough_8",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 8,
    "text": "A playwright presents an earlier event in the middle of the current action to explain a character's behaviour. This technique is",
    "options": {
      "A": "foreshadowing",
      "B": "flashback",
      "C": "dramatic irony",
      "D": "comic relief"
    },
    "answer": "B",
    "explanation": "Flashback takes the audience or reader back to an earlier event.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "lit_tough_9",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 9,
    "text": "Which situation best illustrates dramatic irony?",
    "options": {
      "A": "A character makes a joke that nobody understands.",
      "B": "The audience knows that a letter contains a false promise, but the character trusts it.",
      "C": "Two characters exchange greetings.",
      "D": "A character describes the weather."
    },
    "answer": "B",
    "explanation": "Dramatic irony occurs when the audience knows something important that one or more characters do not know.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "lit_tough_10",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 10,
    "text": "A playwright repeatedly makes characters misunderstand simple statements, creating exaggerated and ridiculous situations. This is a major feature of",
    "options": {
      "A": "farce",
      "B": "tragedy",
      "C": "epic drama",
      "D": "historical drama"
    },
    "answer": "A",
    "explanation": "Farce relies on absurd situations, improbable events, mistaken identity and exaggerated comic action.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "lit_tough_11",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 11,
    "text": "In drama, the protagonist is best described as",
    "options": {
      "A": "the character who provides comic relief in every scene",
      "B": "the central character around whom the main action develops",
      "C": "the character who always opposes the audience",
      "D": "the person responsible for stage lighting"
    },
    "answer": "B",
    "explanation": "The protagonist is the central figure in a work and need not be morally good.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "lit_tough_12",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 12,
    "text": "Which term describes the character or force that opposes the protagonist?",
    "options": {
      "A": "Persona",
      "B": "Antagonist",
      "C": "Foil",
      "D": "Chorus"
    },
    "answer": "B",
    "explanation": "An antagonist opposes the protagonist's aims or creates obstacles to them.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "lit_tough_13",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 13,
    "text": "The primary purpose of comic relief in a tragedy is to",
    "options": {
      "A": "make the central conflict disappear permanently",
      "B": "interrupt intense seriousness with humour and sometimes provide contrast",
      "C": "transform every tragic character into a comic character",
      "D": "prevent the audience from recognising the themes"
    },
    "answer": "B",
    "explanation": "Comic relief offers temporary relaxation from serious action and may sharpen the contrast with tragic events.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "lit_tough_14",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 14,
    "text": "A character's clothing, accent and gestures reveal social class without the character stating it directly. These details contribute mainly to",
    "options": {
      "A": "characterisation",
      "B": "rhyme",
      "C": "metre",
      "D": "plot resolution"
    },
    "answer": "A",
    "explanation": "Characterisation is the process through which a writer presents a character's personality, background and social position.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "lit_tough_15",
    "originalChapter": 2,
    "chapterTitle": "Elements of Drama",
    "topic": "Elements of Drama: Form, Characterisation & Dramatic Irony",
    "bookQuestionNum": 15,
    "text": "Which statement best distinguishes dialogue from monologue?",
    "options": {
      "A": "Dialogue is always comic, while monologue is always tragic.",
      "B": "Dialogue involves an exchange between speakers, while a monologue is an extended speech by one speaker.",
      "C": "Dialogue occurs only in prose, while monologue occurs only in poetry.",
      "D": "Dialogue must be written in verse, while monologue must be written in prose."
    },
    "answer": "B",
    "explanation": "Dialogue involves interaction between speakers; a monologue is an extended speech by a single character.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "lit_tough_16",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 16,
    "text": "A story is narrated by a character who participates in the events and refers to personal experiences using “I”. The narration is primarily",
    "options": {
      "A": "first-person narration",
      "B": "omniscient narration",
      "C": "objective third-person narration",
      "D": "second-person narration"
    },
    "answer": "A",
    "explanation": "A first-person narrator tells the story from a personal perspective.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "lit_tough_17",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 17,
    "text": "A narrator knows the private thoughts, motives and experiences of several characters. This is most characteristic of",
    "options": {
      "A": "a limited first-person narrator",
      "B": "an omniscient narrator",
      "C": "an unreliable witness only",
      "D": "a dramatic persona"
    },
    "answer": "B",
    "explanation": "An omniscient narrator can provide access to the thoughts and experiences of multiple characters.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "lit_tough_18",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 18,
    "text": "Which statement best describes an unreliable narrator?",
    "options": {
      "A": "A narrator who uses complete sentences",
      "B": "A narrator whose account cannot be accepted without question because of bias, limited knowledge or dishonesty",
      "C": "A narrator who tells a story in chronological order",
      "D": "A narrator who never appears in a literary work"
    },
    "answer": "B",
    "explanation": "An unreliable narrator gives an account that readers have reason to question or reinterpret.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "lit_tough_19",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 19,
    "text": "A character changes deeply as a result of the events in a novel. The character is best described as",
    "options": {
      "A": "static",
      "B": "dynamic",
      "C": "incidental",
      "D": "stereotypical"
    },
    "answer": "B",
    "explanation": "A dynamic character undergoes significant development or change during the narrative.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "lit_tough_20",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 20,
    "text": "A character shows only one dominant trait and undergoes little development. This character is most likely",
    "options": {
      "A": "a round character",
      "B": "a dynamic character",
      "C": "a flat character",
      "D": "an omniscient character"
    },
    "answer": "C",
    "explanation": "Flat characters are relatively simple and are not developed with great psychological complexity.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "lit_tough_21",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 21,
    "text": "A character whose qualities highlight the contrasting qualities of another character is called",
    "options": {
      "A": "a foil",
      "B": "a narrator",
      "C": "an archetype only",
      "D": "a persona"
    },
    "answer": "A",
    "explanation": "A foil provides contrast that helps reveal the traits of another character.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "lit_tough_22",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 22,
    "text": "Which narrative technique presents the unorganised flow of a character's thoughts and sensations?",
    "options": {
      "A": "Stream of consciousness",
      "B": "Objective description",
      "C": "Dramatic irony",
      "D": "Allegory"
    },
    "answer": "A",
    "explanation": "Stream of consciousness attempts to represent the continuous and sometimes fragmented flow of thought.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "lit_tough_23",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 23,
    "text": "A sudden moment in which a character gains a clearer understanding of a situation is known as",
    "options": {
      "A": "denouement",
      "B": "epiphany",
      "C": "exposition",
      "D": "digression"
    },
    "answer": "B",
    "explanation": "An epiphany is a moment of sudden insight or realisation.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "lit_tough_24",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 24,
    "text": "A novelist bases a story on real historical events but invents conversations and some characters. The work can best be described as",
    "options": {
      "A": "pure autobiography",
      "B": "faction",
      "C": "lyric poetry",
      "D": "a stage direction"
    },
    "answer": "B",
    "explanation": "Faction combines factual material with fictional elements.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "lit_tough_25",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 25,
    "text": "The resolution of a plot is the point at which",
    "options": {
      "A": "the major conflicts begin",
      "B": "the setting is introduced for the first time",
      "C": "the consequences of the main conflict are settled or clarified",
      "D": "the narrator introduces every minor character"
    },
    "answer": "C",
    "explanation": "Resolution, or denouement, brings the main conflict to a conclusion.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "lit_tough_26",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 26,
    "text": "Which of the following is a major function of setting in a novel?",
    "options": {
      "A": "It determines that every character must be heroic.",
      "B": "It establishes the time and place and can influence characters and events.",
      "C": "It eliminates the need for a plot.",
      "D": "It guarantees that the work is autobiographical."
    },
    "answer": "B",
    "explanation": "Setting provides the temporal and spatial context of a narrative and can shape its atmosphere and conflicts.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "lit_tough_27",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 27,
    "text": "A symbol in literature is an object, character or event that",
    "options": {
      "A": "must always represent itself literally",
      "B": "carries an additional meaning beyond its immediate, literal meaning",
      "C": "is used only in religious texts",
      "D": "appears exclusively in drama"
    },
    "answer": "B",
    "explanation": "A symbol represents an idea, quality or concept beyond its literal identity.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "lit_tough_28",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 28,
    "text": "A writer uses a humorous story to expose corruption and abuse of power. The dominant method is",
    "options": {
      "A": "satire",
      "B": "elegy",
      "C": "panegyric",
      "D": "pastoral"
    },
    "answer": "A",
    "explanation": "Satire uses humour, irony or ridicule to criticise human weaknesses and social institutions.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "lit_tough_29",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 29,
    "text": "Which of the following best defines an allegory?",
    "options": {
      "A": "A narrative in which characters and events consistently represent broader ideas or principles",
      "B": "A poem with exactly fourteen lines",
      "C": "A story without characters",
      "D": "A speech delivered by a person who is alone"
    },
    "answer": "A",
    "explanation": "Allegory communicates a second level of meaning through symbolic characters and events.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "lit_tough_30",
    "originalChapter": 4,
    "chapterTitle": "Elements of Prose Fiction",
    "topic": "Elements of Prose: Narrative Voice, Character & Theme",
    "bookQuestionNum": 30,
    "text": "A writer deliberately places two contrasting ideas next to each other to emphasise their differences. This technique is",
    "options": {
      "A": "juxtaposition",
      "B": "euphemism",
      "C": "alliteration",
      "D": "onomatopoeia"
    },
    "answer": "A",
    "explanation": "Juxtaposition places contrasting elements side by side to make their differences significant.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "lit_tough_31",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 31,
    "text": "Which poetic form is conventionally associated with fourteen lines and a structured rhyme pattern?",
    "options": {
      "A": "Elegy",
      "B": "Sonnet",
      "C": "Epic",
      "D": "Panegyric"
    },
    "answer": "B",
    "explanation": "A sonnet conventionally has fourteen lines, although its rhyme scheme and structure vary by tradition.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "lit_tough_32",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 32,
    "text": "A poem primarily expressing grief for someone who has died is called",
    "options": {
      "A": "an ode",
      "B": "an elegy",
      "C": "a ballad",
      "D": "a satire"
    },
    "answer": "B",
    "explanation": "An elegy is a reflective poem of mourning, often written in response to death or loss.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "lit_tough_33",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 33,
    "text": "A poem written to praise a person, achievement or occasion is most accurately described as",
    "options": {
      "A": "a panegyric",
      "B": "an elegy",
      "C": "a dirge only",
      "D": "an epigram"
    },
    "answer": "A",
    "explanation": "A panegyric is a formal expression of praise.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "lit_tough_34",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 34,
    "text": "Which feature most clearly distinguishes an epic from a short lyric poem?",
    "options": {
      "A": "An epic usually presents an extended narrative involving significant deeds or events.",
      "B": "An epic must express only personal sadness.",
      "C": "An epic cannot contain heroes.",
      "D": "An epic must have no setting."
    },
    "answer": "A",
    "explanation": "Epics are extended narrative works often dealing with heroes, communities and momentous events.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "lit_tough_35",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 35,
    "text": "Which term refers to the voice that speaks in a poem?",
    "options": {
      "A": "Author",
      "B": "Persona",
      "C": "Editor",
      "D": "Audience"
    },
    "answer": "B",
    "explanation": "The persona is the speaking voice of the poem and should not automatically be equated with the poet.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "lit_tough_36",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 36,
    "text": "Which figure of speech is used when a non-human thing is given human qualities?",
    "options": {
      "A": "Metonymy",
      "B": "Personification",
      "C": "Litotes",
      "D": "Euphemism"
    },
    "answer": "B",
    "explanation": "Personification gives human traits, feelings or actions to non-human entities.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "lit_tough_37",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 37,
    "text": "“The classroom was a furnace” is an example of",
    "options": {
      "A": "a simile",
      "B": "a metaphor",
      "C": "an apostrophe",
      "D": "an oxymoron"
    },
    "answer": "B",
    "explanation": "The classroom is directly compared to a furnace without using “like” or “as”.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "lit_tough_38",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 38,
    "text": "Which figure of speech is illustrated by “The wind whispered through the trees”?",
    "options": {
      "A": "Personification",
      "B": "Synecdoche",
      "C": "Litotes",
      "D": "Paradox"
    },
    "answer": "A",
    "explanation": "The wind is given the human action of whispering.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "lit_tough_39",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 39,
    "text": "The phrase “a deafening silence” is an example of",
    "options": {
      "A": "an oxymoron",
      "B": "a euphemism",
      "C": "a metonym",
      "D": "a pun"
    },
    "answer": "A",
    "explanation": "An oxymoron combines apparently contradictory terms.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "lit_tough_40",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 40,
    "text": "When a writer substitutes the name of a related thing for the thing itself, the figure is",
    "options": {
      "A": "metonymy",
      "B": "hyperbole",
      "C": "alliteration",
      "D": "simile"
    },
    "answer": "A",
    "explanation": "Metonymy refers to something through an associated term, such as using “the crown” for monarchy.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "lit_tough_41",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 41,
    "text": "Which figure of speech uses a part to represent a whole, or a whole to represent a part?",
    "options": {
      "A": "Synecdoche",
      "B": "Irony",
      "C": "Onomatopoeia",
      "D": "Euphemism"
    },
    "answer": "A",
    "explanation": "Synecdoche uses a part-whole relationship to refer to something.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "lit_tough_42",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 42,
    "text": "A poet exaggerates a person's strength by describing them as capable of lifting a mountain. This is",
    "options": {
      "A": "understatement",
      "B": "hyperbole",
      "C": "metonymy",
      "D": "litotes"
    },
    "answer": "B",
    "explanation": "Hyperbole is deliberate exaggeration for emphasis or effect.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "lit_tough_43",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 43,
    "text": "Which sound device is present when several nearby words begin with the same consonant sound?",
    "options": {
      "A": "Assonance",
      "B": "Alliteration",
      "C": "Enjambment",
      "D": "Caesura"
    },
    "answer": "B",
    "explanation": "Alliteration is the repetition of initial consonant sounds in nearby words.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "lit_tough_44",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 44,
    "text": "The repetition of vowel sounds in nearby words, without necessarily repeating their consonants, is",
    "options": {
      "A": "assonance",
      "B": "consonance",
      "C": "allusion",
      "D": "anaphora"
    },
    "answer": "A",
    "explanation": "Assonance involves repeated vowel sounds within nearby words.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "lit_tough_45",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation & Poetic Devices",
    "topic": "Poetic Forms & Figures of Speech",
    "bookQuestionNum": 45,
    "text": "A poet allows a sentence to continue beyond the end of a poetic line without a full stop. This is",
    "options": {
      "A": "enjambment",
      "B": "caesura",
      "C": "refrain",
      "D": "stanza break"
    },
    "answer": "A",
    "explanation": "Enjambment carries a sentence or clause across a line ending without a major pause.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "lit_tough_46",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 46,
    "text": "In Efua Sutherland's The Marriage of Anansewa, who is the central scheming father?",
    "options": {
      "A": "Ananse",
      "B": "Akwasi",
      "C": "Ekuwa",
      "D": "The storyteller alone"
    },
    "answer": "A",
    "explanation": "Ananse is the central figure whose scheme to secure a wealthy husband for his daughter drives the play.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "lit_tough_47",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 47,
    "text": "Ananse's plan to present Anansewa to several wealthy chiefs mainly reveals his",
    "options": {
      "A": "complete rejection of material gain",
      "B": "cunning and desire to improve his financial position",
      "C": "inability to understand marriage customs",
      "D": "determination to become a traditional priest"
    },
    "answer": "B",
    "explanation": "Ananse treats the marriage negotiations as a way to improve his economic circumstances.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "lit_tough_48",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 48,
    "text": "Why does Ananse send Anansewa's photograph to several chiefs?",
    "options": {
      "A": "To invite them to a political election",
      "B": "To make each chief interested in marrying her without revealing the competition",
      "C": "To prove that Anansewa has already married",
      "D": "To prevent any chief from sending gifts"
    },
    "answer": "B",
    "explanation": "The photograph helps Ananse attract multiple suitors while encouraging each to think he has a strong chance.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "lit_tough_49",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 49,
    "text": "Which dramatic device is most strongly created when each chief believes that he is being considered independently, while the audience knows that several suitors are involved?",
    "options": {
      "A": "Dramatic irony",
      "B": "Apostrophe",
      "C": "Elegy",
      "D": "Metre"
    },
    "answer": "A",
    "explanation": "The audience knows about Ananse's wider scheme, while the individual chiefs are misled about the situation.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "lit_tough_50",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 50,
    "text": "Anansewa's objection to being treated like an item for sale highlights the conflict between",
    "options": {
      "A": "individual dignity and a parent's material ambitions",
      "B": "science and religion",
      "C": "military loyalty and national sovereignty",
      "D": "rural and urban architecture"
    },
    "answer": "A",
    "explanation": "Her objection questions the treatment of marriage as a transaction that benefits her father.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "lit_tough_51",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 51,
    "text": "Which traditional theatrical feature helps connect The Marriage of Anansewa to Ghanaian oral performance?",
    "options": {
      "A": "The complete absence of an audience",
      "B": "The use of storytelling conventions, music and performance elements",
      "C": "The use of scientific equations as dialogue",
      "D": "The exclusive use of silent stage action"
    },
    "answer": "B",
    "explanation": "The play draws on African storytelling and performance traditions rather than relying only on conventional dialogue.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "lit_tough_52",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 52,
    "text": "The central conflict in The Marriage of Anansewa develops mainly from",
    "options": {
      "A": "Ananse's attempt to manage several marriage negotiations at once",
      "B": "a military invasion of Ghana",
      "C": "a dispute over the succession to the Roman Empire",
      "D": "a court case concerning a stolen throne in Britain"
    },
    "answer": "A",
    "explanation": "His effort to secure gifts and benefits from multiple suitors creates a dangerous conflict that must be resolved.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "lit_tough_53",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 53,
    "text": "Ananse's use of deception makes him comparable to the traditional trickster figure because he",
    "options": {
      "A": "relies mainly on physical strength",
      "B": "uses cleverness and manipulation to pursue personal goals",
      "C": "always obeys every social rule",
      "D": "refuses to take advantage of opportunities"
    },
    "answer": "B",
    "explanation": "Trickster figures commonly use intelligence, cunning and deception to influence events.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "lit_tough_54",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 54,
    "text": "What is the most important social issue satirised through Ananse's marriage scheme?",
    "options": {
      "A": "The refusal of people to recognise any form of wealth",
      "B": "The reduction of marriage to financial gain and social advancement",
      "C": "The abolition of all family relationships",
      "D": "The dangers of learning foreign languages"
    },
    "answer": "B",
    "explanation": "Ananse's behaviour exposes the dangers of allowing money and status to dominate marriage decisions.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "lit_tough_55",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 55,
    "text": "Why is Anansewa's consent important to the play's moral conflict?",
    "options": {
      "A": "It determines whether her personal wishes are respected in the marriage arrangement.",
      "B": "It proves that every chief has already married her.",
      "C": "It ends the need for Ananse to deceive anyone.",
      "D": "It removes all questions about her father's behaviour."
    },
    "answer": "A",
    "explanation": "Her wishes reveal the tension between personal choice and the power her father attempts to exercise over her future.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "lit_tough_56",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 56,
    "text": "Ananse's strategy of pretending that Anansewa has died is primarily intended to",
    "options": {
      "A": "arrange a military attack",
      "B": "create a crisis through which he can manage the competing suitors",
      "C": "end every relationship between Anansewa and her family",
      "D": "prove that the chiefs have no interest in marriage"
    },
    "answer": "B",
    "explanation": "The false death becomes part of his scheme to resolve the complications created by the rival suitors.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "lit_tough_57",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 57,
    "text": "Which theme is most closely associated with the role of gifts in The Marriage of Anansewa?",
    "options": {
      "A": "The rejection of materialism",
      "B": "The use of wealth and gifts in social bargaining",
      "C": "The impossibility of family life",
      "D": "The superiority of military authority"
    },
    "answer": "B",
    "explanation": "Gifts become part of the transactional nature of the marriage negotiations.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "lit_tough_58",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 58,
    "text": "The play's use of humour is effective mainly because",
    "options": {
      "A": "every character understands Ananse's scheme from the beginning",
      "B": "Ananse's elaborate deception creates absurd situations with serious consequences",
      "C": "the central conflict is completely absent",
      "D": "the play contains no social criticism"
    },
    "answer": "B",
    "explanation": "Comedy exposes the absurdity of Ananse's scheme while drawing attention to the moral consequences of greed.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "lit_tough_59",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 59,
    "text": "The title The Marriage of Anansewa focuses the audience's attention primarily on",
    "options": {
      "A": "Anansewa's marriage prospects and the complications surrounding them",
      "B": "the establishment of a military government",
      "C": "the history of a Roman civil war",
      "D": "a family's migration to Canada"
    },
    "answer": "A",
    "explanation": "The marriage question provides the central situation around which the play's major events develop.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "lit_tough_60",
    "originalChapter": 5,
    "chapterTitle": "African Drama: The Marriage of Anansewa",
    "topic": "African Drama: Sutherland (The Marriage of Anansewa)",
    "bookQuestionNum": 60,
    "text": "Which description best captures Ananse's moral complexity?",
    "options": {
      "A": "He is a flawless hero who never deceives anyone.",
      "B": "He is a clever and resourceful character whose actions are driven by self-interest.",
      "C": "He is an invisible character who never influences the plot.",
      "D": "He is solely responsible for ending all social inequality."
    },
    "answer": "B",
    "explanation": "Ananse's intelligence is central to the action, but he uses it in manipulative and morally questionable ways.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "lit_tough_61",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 61,
    "text": "In Shakespeare's Antony and Cleopatra, which political arrangement exists at the beginning of the play?",
    "options": {
      "A": "Rome is governed by a single elected president.",
      "B": "Antony, Octavius Caesar and Lepidus share power in a triumvirate.",
      "C": "Cleopatra governs the entire Roman Empire.",
      "D": "Pompey has already conquered every Roman territory."
    },
    "answer": "B",
    "explanation": "The Roman world is initially governed by three leading men who share power.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "lit_tough_62",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 62,
    "text": "Which central conflict most strongly shapes Antony's character?",
    "options": {
      "A": "His choice between private passion and public duty",
      "B": "His inability to recognise Cleopatra",
      "C": "His desire to become a playwright",
      "D": "His refusal to participate in any political alliance"
    },
    "answer": "A",
    "explanation": "Antony is repeatedly torn between his relationship with Cleopatra and his responsibilities as a Roman leader.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "lit_tough_63",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 63,
    "text": "Why does Antony agree to marry Octavia?",
    "options": {
      "A": "To become the king of Egypt",
      "B": "To strengthen his political alliance with Octavius Caesar",
      "C": "To prevent Lepidus from entering politics",
      "D": "To end all military conflict permanently"
    },
    "answer": "B",
    "explanation": "The marriage is a political arrangement intended to consolidate relations between Antony and Octavius.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "lit_tough_64",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 64,
    "text": "Which character is Cleopatra's political and romantic counterpart in the play?",
    "options": {
      "A": "Enobarbus",
      "B": "Mark Antony",
      "C": "Eros",
      "D": "Pompey"
    },
    "answer": "B",
    "explanation": "Antony is both Cleopatra's lover and a powerful Roman leader whose decisions shape the tragic action.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "lit_tough_65",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 65,
    "text": "Antony's decision to engage the enemy at sea at Actium contributes to his downfall because",
    "options": {
      "A": "his forces defeat every opponent immediately",
      "B": "the Egyptian fleet's withdrawal and his pursuit of Cleopatra undermine the battle",
      "C": "Octavia takes direct command of the Egyptian army",
      "D": "the battle occurs after Cleopatra's death"
    },
    "answer": "B",
    "explanation": "Antony's conduct during the naval battle damages his military position and deepens the crisis.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "lit_tough_66",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 66,
    "text": "Which character represents an important political rival to Antony?",
    "options": {
      "A": "Octavius Caesar",
      "B": "Anansewa",
      "C": "Pertelote",
      "D": "Lucas"
    },
    "answer": "A",
    "explanation": "Octavius competes with Antony for political dominance and ultimately defeats him.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "lit_tough_67",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 67,
    "text": "What is the primary significance of the marriage between Antony and Octavia?",
    "options": {
      "A": "It symbolises the complete end of Antony's relationship with Cleopatra.",
      "B": "It is a political instrument used to maintain peace and alliance.",
      "C": "It makes Octavia queen of every Roman province.",
      "D": "It removes the need for a Roman government."
    },
    "answer": "B",
    "explanation": "The marriage is intended to strengthen the alliance between Antony and Octavius, although it does not resolve their underlying tensions.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "lit_tough_68",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 68,
    "text": "Enobarbus's departure from Antony is significant because",
    "options": {
      "A": "he has always opposed Antony's military success",
      "B": "it represents the breakdown of loyalty during Antony's decline",
      "C": "he becomes the ruler of Egypt",
      "D": "he was never associated with Antony"
    },
    "answer": "B",
    "explanation": "Enobarbus's desertion illustrates the weakening of Antony's position and the pressure facing his followers.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "lit_tough_69",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 69,
    "text": "Why does Enobarbus experience deep remorse after leaving Antony?",
    "options": {
      "A": "Antony refuses to recognise the Roman Empire.",
      "B": "Antony sends after him the possessions he left behind despite his disloyalty.",
      "C": "Cleopatra orders him to become an Egyptian priest.",
      "D": "Octavia accuses him of writing a tragedy."
    },
    "answer": "B",
    "explanation": "Antony's generosity intensifies Enobarbus's guilt about abandoning his former leader.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "lit_tough_70",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 70,
    "text": "Cleopatra's decision to let Antony believe that she has died contributes to",
    "options": {
      "A": "a fatal misunderstanding that pushes Antony toward suicide",
      "B": "Antony's immediate coronation as Roman emperor",
      "C": "the permanent reconciliation of Antony and Octavius",
      "D": "the end of the conflict before any deaths occur"
    },
    "answer": "A",
    "explanation": "The false report of Cleopatra's death triggers Antony's despair and disastrous response.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "lit_tough_71",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 71,
    "text": "Which character attempts to help Antony die after Antony's failed suicide attempt?",
    "options": {
      "A": "Eros",
      "B": "Pompey",
      "C": "Lepidus",
      "D": "Octavia"
    },
    "answer": "A",
    "explanation": "Eros refuses to kill Antony and instead kills himself, leaving Antony to act alone.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "lit_tough_72",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 72,
    "text": "Cleopatra's final suicide is motivated most directly by",
    "options": {
      "A": "a desire to become a Roman senator",
      "B": "her fear of capture and humiliation as a defeated enemy",
      "C": "her wish to marry Pompey",
      "D": "a plan to restore Lepidus to power"
    },
    "answer": "B",
    "explanation": "Cleopatra fears being taken to Rome and displayed as a captive after Octavius's victory.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "lit_tough_73",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 73,
    "text": "Which dramatic genre best describes Antony and Cleopatra?",
    "options": {
      "A": "Farce",
      "B": "Tragedy",
      "C": "Pastoral comedy",
      "D": "Comedy of manners"
    },
    "answer": "B",
    "explanation": "The play depicts powerful figures whose conflicts, choices and errors lead to their deaths.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "lit_tough_74",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 74,
    "text": "Cleopatra is best understood as a character whose dramatic importance arises from",
    "options": {
      "A": "her complete lack of political influence",
      "B": "the interaction between her emotional power, political role and relationship with Antony",
      "C": "her role as a silent observer",
      "D": "her determination to avoid every form of conflict"
    },
    "answer": "B",
    "explanation": "Cleopatra is simultaneously a ruler, a lover and a central force in the conflict between Egypt and Rome.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "lit_tough_75",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 75,
    "text": "Which statement about Octavius Caesar is most accurate?",
    "options": {
      "A": "He is merely a comic servant.",
      "B": "He is Antony's principal rival for political supremacy.",
      "C": "He is the father of Anansewa.",
      "D": "He has no interest in controlling Rome."
    },
    "answer": "B",
    "explanation": "Octavius uses political strategy and military power to overcome Antony.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "lit_tough_76",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 76,
    "text": "Why is the contrast between Rome and Egypt important in Antony and Cleopatra?",
    "options": {
      "A": "It creates a contrast between competing political and cultural worlds.",
      "B": "It proves that the play has no historical setting.",
      "C": "It removes the need for character development.",
      "D": "It establishes that all events occur in one room."
    },
    "answer": "A",
    "explanation": "Rome is often associated with political discipline and public duty, while Egypt is associated with Cleopatra's court and Antony's passionate life there.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "lit_tough_77",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 77,
    "text": "Which event most clearly marks the decisive decline of Antony's military fortunes?",
    "options": {
      "A": "His agreement to marry Octavia",
      "B": "His defeat at Actium",
      "C": "The death of Fulvia",
      "D": "His first meeting with Cleopatra"
    },
    "answer": "B",
    "explanation": "The defeat at Actium seriously weakens Antony's position against Octavius.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "lit_tough_78",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 78,
    "text": "Antony's failed attempt to kill himself is an example of",
    "options": {
      "A": "dramatic irony with no tragic consequence",
      "B": "the tragic interaction between despair, honour and misfortune",
      "C": "a comic misunderstanding that has no lasting effect",
      "D": "an episode unrelated to the central plot"
    },
    "answer": "B",
    "explanation": "Antony's attempt reflects his despair after believing Cleopatra has betrayed or abandoned him.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "lit_tough_79",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 79,
    "text": "Which theme is central to the relationship between Antony and Cleopatra?",
    "options": {
      "A": "The conflict between passion and political responsibility",
      "B": "The dangers of farming in winter",
      "C": "The superiority of village assemblies",
      "D": "The development of scientific medicine"
    },
    "answer": "A",
    "explanation": "Their relationship repeatedly clashes with the political demands and military realities of their positions.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "lit_tough_80",
    "originalChapter": 6,
    "chapterTitle": "Non-African Drama: Antony and Cleopatra",
    "topic": "Non-African Drama: Shakespeare (Antony and Cleopatra)",
    "bookQuestionNum": 80,
    "text": "What is the effect of the play's historical setting?",
    "options": {
      "A": "It allows Shakespeare to explore power, empire, loyalty and personal desire against political events.",
      "B": "It makes every character a fictional animal.",
      "C": "It removes the consequences of individual choices.",
      "D": "It prevents the audience from considering universal human conflicts."
    },
    "answer": "A",
    "explanation": "The historical setting provides a broad political context for personal and tragic conflict.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "lit_tough_81",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 81,
    "text": "In Pede Hollist's So the Path Does Not Die, the central character Fina, also known as Finaba, struggles especially with questions of",
    "options": {
      "A": "belonging, identity and cultural expectations",
      "B": "the Roman succession",
      "C": "a lottery company",
      "D": "the invention of a new type of aircraft"
    },
    "answer": "A",
    "explanation": "Fina's experiences across different communities and countries shape her struggle to understand home and identity.",
    "page": 21,
    "hasImage": false
  },
  {
    "id": "lit_tough_82",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 82,
    "text": "The novel's movement across Sierra Leone and the United States most directly develops the theme of",
    "options": {
      "A": "migration and the tensions of belonging",
      "B": "the end of all cultural differences",
      "C": "the absence of family relationships",
      "D": "the inevitability of monarchy"
    },
    "answer": "A",
    "explanation": "Moving between places exposes the characters to competing cultural expectations and ideas about home.",
    "page": 21,
    "hasImage": false
  },
  {
    "id": "lit_tough_83",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 83,
    "text": "Fina's interrupted circumcision is significant because it",
    "options": {
      "A": "has no influence on her later identity",
      "B": "becomes connected to disputes over bodily autonomy, culture and tradition",
      "C": "permanently ends all conflict in the novel",
      "D": "changes the story into a Roman history"
    },
    "answer": "B",
    "explanation": "The event influences Fina's relationships and exposes differences in attitudes toward the practice.",
    "page": 21,
    "hasImage": false
  },
  {
    "id": "lit_tough_84",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 84,
    "text": "Which conflict is central to the novel's treatment of cultural tradition?",
    "options": {
      "A": "The complete agreement of every character on traditional practices",
      "B": "The tension between inherited customs and changing personal values",
      "C": "The rivalry between two Roman generals",
      "D": "The conflict between stage lighting and costume"
    },
    "answer": "B",
    "explanation": "Characters disagree about the value and consequences of particular cultural practices.",
    "page": 21,
    "hasImage": false
  },
  {
    "id": "lit_tough_85",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 85,
    "text": "Fina's relationship with Cammy is complicated partly because",
    "options": {
      "A": "they have identical views on every cultural issue",
      "B": "their backgrounds and attitudes toward tradition differ",
      "C": "Cammy is a Roman emperor",
      "D": "neither character has a family history"
    },
    "answer": "B",
    "explanation": "Cultural differences and issues from the past place pressure on their relationship.",
    "page": 22,
    "hasImage": false
  },
  {
    "id": "lit_tough_86",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 86,
    "text": "The novel's treatment of belonging suggests that",
    "options": {
      "A": "home must always be defined by birthplace alone",
      "B": "identity may be shaped by relationships, memory, migration and social acceptance",
      "C": "people who migrate automatically lose all cultural ties",
      "D": "cultural identity cannot change"
    },
    "answer": "B",
    "explanation": "Fina's experiences show that belonging is complex and may involve more than physical location.",
    "page": 22,
    "hasImage": false
  },
  {
    "id": "lit_tough_87",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 87,
    "text": "Why is the novel's depiction of different characters' relationships important?",
    "options": {
      "A": "It allows the central themes to be explored through more than one personal experience.",
      "B": "It prevents the development of subplots.",
      "C": "It establishes that only one character has a family.",
      "D": "It removes all social issues from the narrative."
    },
    "answer": "A",
    "explanation": "Interconnected relationships broaden the novel's exploration of migration, tradition and belonging.",
    "page": 22,
    "hasImage": false
  },
  {
    "id": "lit_tough_88",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 88,
    "text": "Fina's support for a family member despite disagreement from her fiancé can be interpreted as an expression of",
    "options": {
      "A": "communal responsibility",
      "B": "complete political apathy",
      "C": "opposition to every form of family loyalty",
      "D": "a desire to establish a monarchy"
    },
    "answer": "A",
    "explanation": "Her action reflects the importance of family ties and obligations in her understanding of identity.",
    "page": 22,
    "hasImage": false
  },
  {
    "id": "lit_tough_89",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 89,
    "text": "The novel's exploration of cultural practice is best understood as",
    "options": {
      "A": "a simple claim that all traditions are always harmful",
      "B": "an examination of the tensions between cultural continuity, personal choice and changing circumstances",
      "C": "a rejection of all social relationships",
      "D": "a tale about the triumph of Roman military strategy"
    },
    "answer": "B",
    "explanation": "The novel explores disagreements over tradition without reducing every cultural issue to a single simple explanation.",
    "page": 23,
    "hasImage": false
  },
  {
    "id": "lit_tough_90",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 90,
    "text": "Fina's work advocating for children affected by war reflects a movement from",
    "options": {
      "A": "personal experience toward broader social responsibility",
      "B": "independence toward absolute isolation",
      "C": "education toward deliberate ignorance",
      "D": "political power toward military conquest"
    },
    "answer": "A",
    "explanation": "Her later work connects her personal journey with efforts to support vulnerable children.",
    "page": 23,
    "hasImage": false
  },
  {
    "id": "lit_tough_91",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 91,
    "text": "Which narrative feature best supports the novel's broad exploration of migration and identity?",
    "options": {
      "A": "A single unchanging location with no reference to the past",
      "B": "Movement across different periods and locations in the protagonist's life",
      "C": "The absence of supporting characters",
      "D": "A plot composed entirely of stage directions"
    },
    "answer": "B",
    "explanation": "The changes in time and place help the reader understand how Fina's identity develops.",
    "page": 23,
    "hasImage": false
  },
  {
    "id": "lit_tough_92",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 92,
    "text": "What is the thematic importance of the novel's title, So the Path Does Not Die?",
    "options": {
      "A": "It suggests that a path or legacy can be preserved through continuity and remembrance.",
      "B": "It refers exclusively to military roads.",
      "C": "It means that every character must remain physically alive forever.",
      "D": "It has no connection to the novel's concerns."
    },
    "answer": "A",
    "explanation": "The title invites reflection on cultural continuity, memory and the preservation of connections across generations.",
    "page": 23,
    "hasImage": false
  },
  {
    "id": "lit_tough_93",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 93,
    "text": "Which statement best describes the function of the novel's subplots?",
    "options": {
      "A": "They introduce unrelated characters solely to lengthen the work.",
      "B": "They extend its central concerns by presenting parallel struggles involving belonging and relationships.",
      "C": "They eliminate the significance of Fina's experiences.",
      "D": "They turn the work into a sonnet."
    },
    "answer": "B",
    "explanation": "The subplots deepen the novel's exploration of shared social and personal difficulties.",
    "page": 24,
    "hasImage": false
  },
  {
    "id": "lit_tough_94",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 94,
    "text": "Which of the following is most relevant when analysing Fina's character development?",
    "options": {
      "A": "Her experiences across different communities and her responses to cultural expectations",
      "B": "The number of syllables in her name",
      "C": "The rhyme scheme of every conversation",
      "D": "The absence of any conflict"
    },
    "answer": "A",
    "explanation": "Her experiences and choices reveal the changing nature of her identity and priorities.",
    "page": 24,
    "hasImage": false
  },
  {
    "id": "lit_tough_95",
    "originalChapter": 7,
    "chapterTitle": "African Prose: So the Path Does Not Die",
    "topic": "African Prose: Pede Hollist (So the Path Does Not Die)",
    "bookQuestionNum": 95,
    "text": "Which broad social issue does So the Path Does Not Die invite readers to examine?",
    "options": {
      "A": "Whether cultural expectations can conflict with personal autonomy",
      "B": "Whether Roman leaders should control Egypt",
      "C": "Whether a poem should contain exactly fourteen lines",
      "D": "Whether a stage requires curtains"
    },
    "answer": "A",
    "explanation": "The novel explores how cultural practice, social belonging and individual choices can come into conflict.",
    "page": 24,
    "hasImage": false
  },
  {
    "id": "lit_tough_96",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 96,
    "text": "Elma Shaw's Redemption Road is set against the background of",
    "options": {
      "A": "post-war Liberia",
      "B": "ancient Rome",
      "C": "medieval England",
      "D": "pre-colonial Oyo alone"
    },
    "answer": "A",
    "explanation": "The novel explores the lives of people dealing with the aftermath of Liberia's civil war.",
    "page": 24,
    "hasImage": false
  },
  {
    "id": "lit_tough_97",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 97,
    "text": "In Redemption Road, Bendu Lewis and her family hold a memorial connected to the death of",
    "options": {
      "A": "Cleopatra",
      "B": "Catherine May Tyler Lewis, known as Granny May",
      "C": "Anansewa",
      "D": "Pertelote"
    },
    "answer": "B",
    "explanation": "The opening memorial focuses on Granny May, whose body was never recovered during the war.",
    "page": 25,
    "hasImage": false
  },
  {
    "id": "lit_tough_98",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 98,
    "text": "The family's use of a casket containing possessions rather than the recovered body primarily emphasises",
    "options": {
      "A": "the certainty that the war caused no suffering",
      "B": "unresolved loss and the difficulty of obtaining closure",
      "C": "a dispute about Roman military strategy",
      "D": "the rejection of family memory"
    },
    "answer": "B",
    "explanation": "The memorial gives the family a way to mourn someone whose remains were never found.",
    "page": 25,
    "hasImage": false
  },
  {
    "id": "lit_tough_99",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 99,
    "text": "Which theme is most closely connected to the title Redemption Road?",
    "options": {
      "A": "The search for justice, healing and a possible way beyond a traumatic past",
      "B": "The celebration of wealth without responsibility",
      "C": "The complete absence of historical memory",
      "D": "The superiority of comic misunderstandings"
    },
    "answer": "A",
    "explanation": "The title refers both to a physical place and to the difficult journey toward recovery and peace.",
    "page": 25,
    "hasImage": false
  },
  {
    "id": "lit_tough_100",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 100,
    "text": "The historical significance of Redemption Road is strengthened by its treatment of",
    "options": {
      "A": "the effects of political violence on ordinary people",
      "B": "the invention of the sonnet",
      "C": "the Roman triumvirate alone",
      "D": "the rules of stage scenery"
    },
    "answer": "A",
    "explanation": "The novel connects national conflict to personal grief, trauma and efforts to secure justice.",
    "page": 25,
    "hasImage": false
  },
  {
    "id": "lit_tough_101",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 101,
    "text": "Why is memory important in Redemption Road?",
    "options": {
      "A": "It enables characters to ignore every past event.",
      "B": "It links personal suffering to the wider history of the Liberian conflict.",
      "C": "It removes the need for justice.",
      "D": "It prevents characters from having relationships."
    },
    "answer": "B",
    "explanation": "Remembering the past is central to understanding trauma, accountability and the search for peace.",
    "page": 26,
    "hasImage": false
  },
  {
    "id": "lit_tough_102",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 102,
    "text": "Which conflict best represents the moral difficulty faced by people seeking justice after civil war?",
    "options": {
      "A": "The need to confront wrongdoing while attempting to rebuild a damaged society",
      "B": "The choice between two rhyme schemes",
      "C": "The decision to replace every law with a joke",
      "D": "The difficulty of selecting an actor's costume"
    },
    "answer": "A",
    "explanation": "Post-war justice requires dealing with past abuses while managing the challenges of reconciliation and recovery.",
    "page": 26,
    "hasImage": false
  },
  {
    "id": "lit_tough_103",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 103,
    "text": "What does the post-war setting contribute to the novel?",
    "options": {
      "A": "It provides a context for examining loss, trauma, political instability and recovery.",
      "B": "It guarantees an uncomplicated happy ending.",
      "C": "It removes all relationships between individuals and society.",
      "D": "It converts the narrative into a comedy of manners."
    },
    "answer": "A",
    "explanation": "The setting shapes the characters' problems and the social conditions in which they seek justice and healing.",
    "page": 26,
    "hasImage": false
  },
  {
    "id": "lit_tough_104",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 104,
    "text": "The memorial for Granny May is best understood as",
    "options": {
      "A": "an attempt to preserve family memory despite the absence of physical remains",
      "B": "an announcement of a new political party",
      "C": "a celebration of military victory without reference to victims",
      "D": "a public rejection of mourning"
    },
    "answer": "A",
    "explanation": "The memorial allows the family to acknowledge loss even though they cannot bury Granny May's body.",
    "page": 26,
    "hasImage": false
  },
  {
    "id": "lit_tough_105",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 105,
    "text": "Which is the strongest interpretation of the novel's relationship between personal and national healing?",
    "options": {
      "A": "Personal grief has no connection to political events.",
      "B": "Recovery requires attention to individuals' experiences as well as the wider society's history.",
      "C": "National healing can occur only if all memories are erased.",
      "D": "Only political leaders experience the effects of war."
    },
    "answer": "B",
    "explanation": "The novel connects individual trauma with the broader challenge of repairing a society damaged by war.",
    "page": 27,
    "hasImage": false
  },
  {
    "id": "lit_tough_106",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 106,
    "text": "The physical place associated with the title Redemption Road carries historical significance because it is linked to",
    "options": {
      "A": "political executions in Liberia's history",
      "B": "the founding of the Roman Republic",
      "C": "the first performance of a Ghanaian comedy",
      "D": "the discovery of a new poetic metre"
    },
    "answer": "A",
    "explanation": "The title refers to a real place associated with Liberia's political violence and also symbolises the search for healing.",
    "page": 27,
    "hasImage": false
  },
  {
    "id": "lit_tough_107",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 107,
    "text": "Which technique is most effective when a novelist links an individual family's grief to a nation's troubled history?",
    "options": {
      "A": "Interweaving private and public narratives",
      "B": "Eliminating setting",
      "C": "Avoiding all references to the past",
      "D": "Using only stage directions"
    },
    "answer": "A",
    "explanation": "Connecting personal experience with public history allows the novel to show how political events affect individual lives.",
    "page": 27,
    "hasImage": false
  },
  {
    "id": "lit_tough_108",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 108,
    "text": "Which of the following is the most appropriate interpretation of redemption in the novel?",
    "options": {
      "A": "Forgetting all wrongdoing automatically resolves conflict.",
      "B": "Recovery involves confronting painful experiences and seeking some form of justice or closure.",
      "C": "The past has no influence on the present.",
      "D": "Only financial wealth can repair a society."
    },
    "answer": "B",
    "explanation": "Redemption is presented as a difficult process involving memory, accountability and the possibility of healing.",
    "page": 27,
    "hasImage": false
  },
  {
    "id": "lit_tough_109",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 109,
    "text": "Which description best captures the role of the civil war in Redemption Road?",
    "options": {
      "A": "It serves only as a decorative background.",
      "B": "It shapes the characters' losses, relationships and struggle for recovery.",
      "C": "It has no connection to the novel's themes.",
      "D": "It creates a purely comic conflict."
    },
    "answer": "B",
    "explanation": "The war's effects are central to the characters' personal and social circumstances.",
    "page": 28,
    "hasImage": false
  },
  {
    "id": "lit_tough_110",
    "originalChapter": 7,
    "chapterTitle": "African Prose: Redemption Road",
    "topic": "African Prose: Elma Shaw (Redemption Road)",
    "bookQuestionNum": 110,
    "text": "Which broad lesson is most consistent with Redemption Road?",
    "options": {
      "A": "Reconciliation is simple if people refuse to discuss the past.",
      "B": "Lasting healing may require confronting the consequences of injustice and remembering victims.",
      "C": "Political violence affects only those who participate in battles.",
      "D": "Family history should always be excluded from public discussion."
    },
    "answer": "B",
    "explanation": "The novel explores the difficulty of moving forward without acknowledging past suffering.",
    "page": 28,
    "hasImage": false
  },
  {
    "id": "lit_tough_111",
    "originalChapter": 8,
    "chapterTitle": "Non-African Prose: Path of Lucas",
    "topic": "Non-African Prose: Susanne Bellefeuille (Path of Lucas)",
    "bookQuestionNum": 111,
    "text": "In Susanne Bellefeuille's Path of Lucas: The Journey He Endured, Lucas's continued devotion to Isabelle after her death most directly suggests",
    "options": {
      "A": "loyalty and emotional fidelity",
      "B": "hatred for every family relationship",
      "C": "ambition for political office",
      "D": "indifference to personal loss"
    },
    "answer": "A",
    "explanation": "Lucas's refusal to remarry is presented as evidence of an enduring emotional attachment.",
    "page": 28,
    "hasImage": false
  },
  {
    "id": "lit_tough_112",
    "originalChapter": 8,
    "chapterTitle": "Non-African Prose: Path of Lucas",
    "topic": "Non-African Prose: Susanne Bellefeuille (Path of Lucas)",
    "bookQuestionNum": 112,
    "text": "Lucas's work on the farm can be interpreted symbolically as",
    "options": {
      "A": "an expression of endurance, discipline and sacrifice",
      "B": "proof that he rejects all responsibility",
      "C": "a method for avoiding every human relationship permanently",
      "D": "a symbol of Roman imperial conquest"
    },
    "answer": "A",
    "explanation": "His sustained labour reflects the persistence required to endure personal hardship.",
    "page": 28,
    "hasImage": false
  },
  {
    "id": "lit_tough_113",
    "originalChapter": 8,
    "chapterTitle": "Non-African Prose: Path of Lucas",
    "topic": "Non-African Prose: Susanne Bellefeuille (Path of Lucas)",
    "bookQuestionNum": 113,
    "text": "Lucy's prolonged coma functions within the novel as a powerful symbol of",
    "options": {
      "A": "a final rejection of all hope",
      "B": "emotional distance and the uncertainty of recovery",
      "C": "a successful political campaign",
      "D": "the end of all family bonds"
    },
    "answer": "B",
    "explanation": "Lucy's condition creates emotional and narrative uncertainty around the family's future.",
    "page": 29,
    "hasImage": false
  },
  {
    "id": "lit_tough_114",
    "originalChapter": 8,
    "chapterTitle": "Non-African Prose: Path of Lucas",
    "topic": "Non-African Prose: Susanne Bellefeuille (Path of Lucas)",
    "bookQuestionNum": 114,
    "text": "Lucy's eventual awakening is most reasonably interpreted as",
    "options": {
      "A": "a reversal of all historical events",
      "B": "a renewal of hope and the possibility of emotional reconnection",
      "C": "proof that Lucas has become a political ruler",
      "D": "an announcement that the novel is a comedy of manners"
    },
    "answer": "B",
    "explanation": "The awakening provides a hopeful development after prolonged uncertainty and suffering.",
    "page": 29,
    "hasImage": false
  },
  {
    "id": "lit_tough_115",
    "originalChapter": 8,
    "chapterTitle": "Non-African Prose: Path of Lucas",
    "topic": "Non-African Prose: Susanne Bellefeuille (Path of Lucas)",
    "bookQuestionNum": 115,
    "text": "Which statement best explains how Path of Lucas challenges narrow ideas of masculinity?",
    "options": {
      "A": "It suggests that men should never express sadness.",
      "B": "It presents male endurance and care as compatible with emotional vulnerability.",
      "C": "It removes every male character from the story.",
      "D": "It argues that family responsibility is unnecessary."
    },
    "answer": "B",
    "explanation": "Lucas's responses to loss and family hardship challenge the idea that masculinity requires emotional detachment.",
    "page": 29,
    "hasImage": false
  },
  {
    "id": "lit_tough_116",
    "originalChapter": 8,
    "chapterTitle": "Non-African Prose: Path of Lucas",
    "topic": "Non-African Prose: Susanne Bellefeuille (Path of Lucas)",
    "bookQuestionNum": 116,
    "text": "Which broad theme is central to Path of Lucas: The Journey He Endured?",
    "options": {
      "A": "Perseverance through grief and family hardship",
      "B": "The rise of the Roman Empire",
      "C": "The corruption of a marriage market",
      "D": "The historical development of the Nigerian Civil Service"
    },
    "answer": "A",
    "explanation": "The narrative focuses on enduring difficult personal experiences and sustaining relationships.",
    "page": 29,
    "hasImage": false
  },
  {
    "id": "lit_tough_117",
    "originalChapter": 8,
    "chapterTitle": "Non-African Prose: Path of Lucas",
    "topic": "Non-African Prose: Susanne Bellefeuille (Path of Lucas)",
    "bookQuestionNum": 117,
    "text": "Why is the novel's title significant?",
    "options": {
      "A": "It suggests a journey marked by difficulty and endurance.",
      "B": "It identifies the text as a sonnet.",
      "C": "It proves that Lucas never experiences hardship.",
      "D": "It describes a political constitution."
    },
    "answer": "A",
    "explanation": "“Journey” can refer both to physical movement and to a long process of emotional struggle.",
    "page": 30,
    "hasImage": false
  },
  {
    "id": "lit_tough_118",
    "originalChapter": 8,
    "chapterTitle": "Non-African Prose: Path of Lucas",
    "topic": "Non-African Prose: Susanne Bellefeuille (Path of Lucas)",
    "bookQuestionNum": 118,
    "text": "Which narrative technique is most appropriate for a novel that reveals events from earlier periods to explain current relationships?",
    "options": {
      "A": "Flashback",
      "B": "Alliteration",
      "C": "Caesura",
      "D": "Stage mime"
    },
    "answer": "A",
    "explanation": "Flashback reveals earlier events that help explain the characters' present circumstances.",
    "page": 30,
    "hasImage": false
  },
  {
    "id": "lit_tough_119",
    "originalChapter": 8,
    "chapterTitle": "Non-African Prose: Path of Lucas",
    "topic": "Non-African Prose: Susanne Bellefeuille (Path of Lucas)",
    "bookQuestionNum": 119,
    "text": "The combination of personal loss, family relationships and gradual hope makes Path of Lucas especially suitable for analysing",
    "options": {
      "A": "character development and symbolism",
      "B": "rhyme scheme alone",
      "C": "the structure of a legislative chamber",
      "D": "the rules of parliamentary procedure"
    },
    "answer": "A",
    "explanation": "These elements help explain how the characters and the novel's central images develop across the story.",
    "page": 30,
    "hasImage": false
  },
  {
    "id": "lit_tough_120",
    "originalChapter": 8,
    "chapterTitle": "Non-African Prose: Path of Lucas",
    "topic": "Non-African Prose: Susanne Bellefeuille (Path of Lucas)",
    "bookQuestionNum": 120,
    "text": "Which statement is the strongest general interpretation of Lucas's endurance?",
    "options": {
      "A": "Endurance always removes every problem immediately.",
      "B": "Persistent care can express love even when grief and uncertainty remain.",
      "C": "Love must be shown only through wealth.",
      "D": "Physical labour has no possible symbolic meaning."
    },
    "answer": "B",
    "explanation": "Lucas's actions suggest that devotion can be demonstrated through consistent care and responsibility.",
    "page": 30,
    "hasImage": false
  },
  {
    "id": "lit_tough_121",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 121,
    "text": "In Gabriel Okara's Once Upon a Time, the speaker's conversation with his son mainly develops the contrast between",
    "options": {
      "A": "genuine childhood sincerity and adult social insincerity",
      "B": "military conquest and political alliances",
      "C": "farm labour and industrial machinery",
      "D": "judicial procedure and taxation"
    },
    "answer": "A",
    "explanation": "The poem contrasts authentic feeling with the artificial behaviour that the speaker believes he has learned as an adult.",
    "page": 31,
    "hasImage": false
  },
  {
    "id": "lit_tough_122",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 122,
    "text": "The speaker's request to learn from his son suggests",
    "options": {
      "A": "a desire to recover sincerity and emotional authenticity",
      "B": "an intention to become a military ruler",
      "C": "a complete rejection of childhood innocence",
      "D": "a desire to teach the son political manipulation"
    },
    "answer": "A",
    "explanation": "The speaker recognises that social habits have damaged his ability to express genuine emotion.",
    "page": 31,
    "hasImage": false
  },
  {
    "id": "lit_tough_123",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 123,
    "text": "The contrast between the past and the present in Once Upon a Time chiefly contributes to",
    "options": {
      "A": "nostalgia and criticism of social hypocrisy",
      "B": "celebration of political violence",
      "C": "praise for industrial pollution",
      "D": "an account of Roman succession"
    },
    "answer": "A",
    "explanation": "The speaker remembers a more sincere past and criticises the artificiality of present social behaviour.",
    "page": 31,
    "hasImage": false
  },
  {
    "id": "lit_tough_124",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 124,
    "text": "Which device is most prominent when laughter or a smile is used to represent the difference between outward appearance and inward feeling?",
    "options": {
      "A": "Symbolism",
      "B": "Metre",
      "C": "Onomatopoeia only",
      "D": "Dramatic aside"
    },
    "answer": "A",
    "explanation": "The expressions become symbols of the gap between outward friendliness and genuine emotion.",
    "page": 31,
    "hasImage": false
  },
  {
    "id": "lit_tough_125",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 125,
    "text": "The dominant tone of Once Upon a Time is best described as",
    "options": {
      "A": "nostalgic and critical",
      "B": "triumphantly militaristic",
      "C": "purely celebratory",
      "D": "completely indifferent"
    },
    "answer": "A",
    "explanation": "The speaker remembers a more sincere past and criticises the artificiality of present social behaviour.",
    "page": 32,
    "hasImage": false
  },
  {
    "id": "lit_tough_126",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 126,
    "text": "In Elizabeth L. A. Kamara's New Tongue, the title most strongly invites readers to examine the relationship between",
    "options": {
      "A": "language, identity and cultural experience",
      "B": "military rank and battlefield tactics",
      "C": "taxation and electoral systems",
      "D": "stage scenery and costume"
    },
    "answer": "A",
    "explanation": "The idea of a “new tongue” raises questions about language, inherited identity and cultural change.",
    "page": 32,
    "hasImage": false
  },
  {
    "id": "lit_tough_127",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 127,
    "text": "Sensory details describing an everyday childhood scene in New Tongue primarily help the poet",
    "options": {
      "A": "create vivid imagery that connects memory to experience",
      "B": "eliminate all emotional meaning",
      "C": "establish a legal argument",
      "D": "create a rhyme scheme without a subject"
    },
    "answer": "A",
    "explanation": "Concrete sensory images make remembered experiences more immediate to the reader.",
    "page": 32,
    "hasImage": false
  },
  {
    "id": "lit_tough_128",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 128,
    "text": "Which interpretation best fits a poem that contrasts an inherited language or culture with a newer one?",
    "options": {
      "A": "Identity may be affected by the language through which experience is remembered and expressed.",
      "B": "Language never affects cultural identity.",
      "C": "All cultural memories must be forgotten.",
      "D": "A person's past can have no relationship with present choices."
    },
    "answer": "A",
    "explanation": "Language can carry personal and cultural memories, so changes in language can raise questions about belonging.",
    "page": 32,
    "hasImage": false
  },
  {
    "id": "lit_tough_129",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 129,
    "text": "In Wole Soyinka's Night, addressing Night as though it can act upon the speaker is an example of",
    "options": {
      "A": "personification",
      "B": "synecdoche",
      "C": "hyperbole only",
      "D": "onomatopoeia"
    },
    "answer": "A",
    "explanation": "Night is treated as an active presence capable of affecting a human being.",
    "page": 33,
    "hasImage": false
  },
  {
    "id": "lit_tough_130",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 130,
    "text": "The use of direct address to Night mainly helps to",
    "options": {
      "A": "make the natural phenomenon feel immediate and emotionally powerful",
      "B": "turn the poem into a political constitution",
      "C": "remove the speaker from the poem entirely",
      "D": "create a dialogue between two stage actors"
    },
    "answer": "A",
    "explanation": "Direct address, or apostrophe, presents Night as an entity with which the speaker can engage.",
    "page": 33,
    "hasImage": false
  },
  {
    "id": "lit_tough_131",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 131,
    "text": "Which of the following should a reader examine first when interpreting the imagery and tone of Night?",
    "options": {
      "A": "The way the poet represents Night and the speaker's response to it",
      "B": "The number of chapters in a novel by another author",
      "C": "The constitutional powers of a president",
      "D": "The biography of an unrelated character"
    },
    "answer": "A",
    "explanation": "The poem's central image and the emotional effect it creates are key to interpreting its meaning.",
    "page": 33,
    "hasImage": false
  },
  {
    "id": "lit_tough_132",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 132,
    "text": "In Niyi Osundare's Not My Business, the speaker's initial refusal to intervene in the suffering of others primarily exposes",
    "options": {
      "A": "the danger of political indifference and self-protective silence",
      "B": "the benefits of unlimited personal wealth",
      "C": "the advantages of military conquest",
      "D": "the value of ignoring every social problem"
    },
    "answer": "A",
    "explanation": "The speaker initially distances himself from injustice until the pattern of oppression threatens him too.",
    "page": 33,
    "hasImage": false
  },
  {
    "id": "lit_tough_133",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 133,
    "text": "The repeated idea that another person's suffering is not the speaker's concern functions mainly as",
    "options": {
      "A": "a refrain that reinforces the speaker's attitude",
      "B": "an example of a sonnet's volta only",
      "C": "a stage direction",
      "D": "a historical footnote"
    },
    "answer": "A",
    "explanation": "Repetition emphasises the speaker's self-protective reasoning and highlights its eventual consequences.",
    "page": 34,
    "hasImage": false
  },
  {
    "id": "lit_tough_134",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 134,
    "text": "The progression from the victimisation of others to the threat against the speaker himself develops which idea?",
    "options": {
      "A": "Injustice can eventually affect people who initially remain silent.",
      "B": "Silence always guarantees personal safety.",
      "C": "Political repression affects only strangers.",
      "D": "Social responsibility is unnecessary."
    },
    "answer": "A",
    "explanation": "The poem warns that failing to resist injustice can leave everyone vulnerable.",
    "page": 34,
    "hasImage": false
  },
  {
    "id": "lit_tough_135",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 135,
    "text": "The tone of Not My Business is best interpreted as",
    "options": {
      "A": "a simple celebration of political indifference",
      "B": "critical and cautionary",
      "C": "completely detached from social realities",
      "D": "purely romantic"
    },
    "answer": "B",
    "explanation": "The poem criticises apathy and warns about the consequences of ignoring oppression.",
    "page": 34,
    "hasImage": false
  },
  {
    "id": "lit_tough_136",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 136,
    "text": "S. O. H. Afriyie-Vidza's Hearty Garlands is primarily a poem of",
    "options": {
      "A": "praise and celebration",
      "B": "mourning for a fallen soldier",
      "C": "political rebellion in ancient Rome",
      "D": "rejection of every form of respect"
    },
    "answer": "A",
    "explanation": "The poem honours an accomplished elder on a significant birthday.",
    "page": 34,
    "hasImage": false
  },
  {
    "id": "lit_tough_137",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 137,
    "text": "The garlands in the title Hearty Garlands function symbolically as",
    "options": {
      "A": "expressions of honour and heartfelt praise",
      "B": "weapons used during a war",
      "C": "evidence of criminal activity",
      "D": "symbols of dishonesty alone"
    },
    "answer": "A",
    "explanation": "The title uses garlands to represent the praise offered to the person being celebrated.",
    "page": 35,
    "hasImage": false
  },
  {
    "id": "lit_tough_138",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 138,
    "text": "The speaker's direct address to the person being honoured helps create a tone of",
    "options": {
      "A": "admiration and respect",
      "B": "complete detachment",
      "C": "hostility and ridicule",
      "D": "uncertainty about the poem's subject"
    },
    "answer": "A",
    "explanation": "Direct address makes the tribute feel personal and ceremonial.",
    "page": 35,
    "hasImage": false
  },
  {
    "id": "lit_tough_139",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 139,
    "text": "Which poetic form or function most closely matches Hearty Garlands?",
    "options": {
      "A": "Panegyric",
      "B": "Elegy",
      "C": "Mock-epic",
      "D": "Tragedy"
    },
    "answer": "A",
    "explanation": "The poem is a tribute celebrating the life and accomplishments of an honoured individual.",
    "page": 35,
    "hasImage": false
  },
  {
    "id": "lit_tough_140",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 140,
    "text": "The poem's acknowledgement that envy may exist among admirers adds which complexity to the praise?",
    "options": {
      "A": "It presents admiration as entirely free of complicated human emotions.",
      "B": "It suggests that praise can coexist with less generous feelings.",
      "C": "It proves that the person being honoured has no achievements.",
      "D": "It changes the poem into a ghost story."
    },
    "answer": "B",
    "explanation": "The acknowledgement of envy makes the speakers' admiration more human and complex.",
    "page": 35,
    "hasImage": false
  },
  {
    "id": "lit_tough_141",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 141,
    "text": "In Syl Cheney-Coker's The Breast of the Sea, the sea is presented as more than a physical body of water because it",
    "options": {
      "A": "becomes a witness to history, violence and human suffering",
      "B": "is treated exclusively as a place for sporting activities",
      "C": "has no connection to the poem's imagery",
      "D": "represents a fictional court of law"
    },
    "answer": "A",
    "explanation": "The sea is used as a powerful image through which the poem reflects on history and human damage.",
    "page": 36,
    "hasImage": false
  },
  {
    "id": "lit_tough_142",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 142,
    "text": "Addressing the sea as a suffering or wounded presence is an example of",
    "options": {
      "A": "personification",
      "B": "understatement",
      "C": "rhyme",
      "D": "dramatic aside"
    },
    "answer": "A",
    "explanation": "Human experiences and qualities are attributed to the sea, making it a symbolic presence.",
    "page": 36,
    "hasImage": false
  },
  {
    "id": "lit_tough_143",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 143,
    "text": "The accumulation of historical and violent images in The Breast of the Sea primarily creates",
    "options": {
      "A": "a sense of the extensive burden of human history",
      "B": "a purely light-hearted atmosphere",
      "C": "a complete absence of social criticism",
      "D": "an account of a single comic misunderstanding"
    },
    "answer": "A",
    "explanation": "The accumulation of images connects different forms of suffering and makes the sea seem burdened by human actions.",
    "page": 36,
    "hasImage": false
  },
  {
    "id": "lit_tough_144",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 144,
    "text": "Which statement best describes the function of symbolism in The Breast of the Sea?",
    "options": {
      "A": "The sea can represent collective memory and the consequences of human violence.",
      "B": "The sea must represent only a swimming pool.",
      "C": "Every image in the poem has a purely literal function.",
      "D": "The sea prevents the poem from addressing history."
    },
    "answer": "A",
    "explanation": "The sea becomes a symbolic space in which historical experiences and suffering are gathered.",
    "page": 36,
    "hasImage": false
  },
  {
    "id": "lit_tough_145",
    "originalChapter": 9,
    "chapterTitle": "African Poetry",
    "topic": "African Poetry: Okara, Kamara, Soyinka, Osundare, Afriyie-Vidza, Cheney-Coker",
    "bookQuestionNum": 145,
    "text": "Why are rhetorical questions effective in a poem dealing with widespread suffering?",
    "options": {
      "A": "They can invite reflection without offering a simple or complete solution.",
      "B": "They always require an immediate factual answer.",
      "C": "They remove the reader's responsibility to interpret the poem.",
      "D": "They are used only to create end rhyme."
    },
    "answer": "A",
    "explanation": "Rhetorical questions can express doubt, frustration or the difficulty of answering complex moral problems.",
    "page": 37,
    "hasImage": false
  },
  {
    "id": "lit_tough_146",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 146,
    "text": "In Lord Byron's She Walks in Beauty, the contrast between darkness and light is primarily used to",
    "options": {
      "A": "suggest a harmonious combination of contrasting qualities",
      "B": "describe a military battle in detail",
      "C": "criticise the use of language in government",
      "D": "establish that beauty is always a sign of evil"
    },
    "answer": "A",
    "explanation": "The poem uses balanced images of light and darkness to present the woman's beauty as harmonious.",
    "page": 37,
    "hasImage": false
  },
  {
    "id": "lit_tough_147",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 147,
    "text": "She Walks in Beauty moves beyond physical appearance by connecting outward beauty with",
    "options": {
      "A": "inner calm and moral goodness",
      "B": "military rank",
      "C": "political corruption alone",
      "D": "an absence of emotion"
    },
    "answer": "A",
    "explanation": "The speaker interprets the woman's outward beauty as reflecting a peaceful mind and a loving heart.",
    "page": 37,
    "hasImage": false
  },
  {
    "id": "lit_tough_148",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 148,
    "text": "The speaker's idealisation of the woman in She Walks in Beauty shows that the poem is",
    "options": {
      "A": "a lyric of admiration",
      "B": "a dramatic farce",
      "C": "an epic about a military campaign",
      "D": "a fictional legal report"
    },
    "answer": "A",
    "explanation": "The poem expresses personal admiration and reflection on the woman's beauty.",
    "page": 37,
    "hasImage": false
  },
  {
    "id": "lit_tough_149",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 149,
    "text": "Which structural statement about She Walks in Beauty is correct?",
    "options": {
      "A": "It consists of three six-line stanzas.",
      "B": "It consists of fourteen five-line stanzas.",
      "C": "It is a prose novel in twenty chapters.",
      "D": "It contains no regular verse structure."
    },
    "answer": "A",
    "explanation": "The poem is made up of three sestets, each containing six lines.",
    "page": 38,
    "hasImage": false
  },
  {
    "id": "lit_tough_150",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 150,
    "text": "Which idea is most important to the poem's treatment of beauty?",
    "options": {
      "A": "Beauty is presented as a harmony of outward appearance and inward character.",
      "B": "Beauty is presented as a form of political authority.",
      "C": "Beauty is described as impossible to observe.",
      "D": "Beauty is treated exclusively as a source of corruption."
    },
    "answer": "A",
    "explanation": "The speaker associates the woman's physical appearance with inner serenity and goodness.",
    "page": 38,
    "hasImage": false
  },
  {
    "id": "lit_tough_151",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 151,
    "text": "In Geoffrey Chaucer's The Nun's Priest's Tale, what kind of animal is Chauntecleer?",
    "options": {
      "A": "A fox",
      "B": "A rooster",
      "C": "A horse",
      "D": "A wolf"
    },
    "answer": "B",
    "explanation": "Chauntecleer is the rooster who becomes the target of the fox's deception.",
    "page": 38,
    "hasImage": false
  },
  {
    "id": "lit_tough_152",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 152,
    "text": "Which character is closely associated with Chauntecleer as his favourite hen?",
    "options": {
      "A": "Pertelote",
      "B": "Cleopatra",
      "C": "Anansewa",
      "D": "Octavia"
    },
    "answer": "A",
    "explanation": "Pertelote is Chauntecleer's favourite hen and discusses his dream with him.",
    "page": 38,
    "hasImage": false
  },
  {
    "id": "lit_tough_153",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 153,
    "text": "The fox's successful use of flattery against Chauntecleer exposes the danger of",
    "options": {
      "A": "pride and excessive trust in praise",
      "B": "careful judgement",
      "C": "practical caution",
      "D": "genuine friendship alone"
    },
    "answer": "A",
    "explanation": "The fox manipulates Chauntecleer's vanity to gain control over him.",
    "page": 39,
    "hasImage": false
  },
  {
    "id": "lit_tough_154",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 154,
    "text": "The animal characters in The Nun's Priest's Tale chiefly allow Chaucer to",
    "options": {
      "A": "explore human behaviour through an animal fable",
      "B": "write a scientific report about poultry farming",
      "C": "avoid all moral questions",
      "D": "present a tragedy about ancient Egypt"
    },
    "answer": "A",
    "explanation": "Animal characters model human weaknesses, making the tale useful for satire and moral instruction.",
    "page": 39,
    "hasImage": false
  },
  {
    "id": "lit_tough_155",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 155,
    "text": "The story's use of animals that speak and reason like people is an example of",
    "options": {
      "A": "anthropomorphism",
      "B": "hyperbole only",
      "C": "caesura",
      "D": "epistolary narration"
    },
    "answer": "A",
    "explanation": "Anthropomorphism presents animals with human speech, reasoning or social behaviour.",
    "page": 39,
    "hasImage": false
  },
  {
    "id": "lit_tough_156",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 156,
    "text": "The Nun's Priest's Tale is often described as comic or mock-heroic because it",
    "options": {
      "A": "applies grand language and serious moral discussion to events involving farm animals",
      "B": "contains no humour",
      "C": "avoids every comparison with human society",
      "D": "presents only a solemn funeral"
    },
    "answer": "A",
    "explanation": "The contrast between elevated language and an animal-yard episode creates comic effects.",
    "page": 39,
    "hasImage": false
  },
  {
    "id": "lit_tough_157",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 157,
    "text": "Which lesson is most strongly suggested by Chauntecleer's experience?",
    "options": {
      "A": "One should never question praise from strangers.",
      "B": "Flattery can be used to exploit pride and weaken judgement.",
      "C": "Dreams can never be discussed in literature.",
      "D": "Caution is always a sign of weakness."
    },
    "answer": "B",
    "explanation": "The fox takes advantage of Chauntecleer's vanity to deceive him.",
    "page": 40,
    "hasImage": false
  },
  {
    "id": "lit_tough_158",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 158,
    "text": "The Nun's Priest's Tale is best classified as",
    "options": {
      "A": "a narrative tale with beast-fable features",
      "B": "a sonnet",
      "C": "a purely autobiographical essay",
      "D": "a dramatic stage direction"
    },
    "answer": "A",
    "explanation": "It tells a story through animal characters whose actions reflect human behaviour.",
    "page": 40,
    "hasImage": false
  },
  {
    "id": "lit_tough_159",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 159,
    "text": "Which conflict drives the central action of The Nun's Priest's Tale?",
    "options": {
      "A": "The conflict between a proud rooster and a deceptive fox",
      "B": "A struggle between two Roman emperors",
      "C": "A dispute between four wealthy chiefs over a marriage",
      "D": "A political movement seeking independence"
    },
    "answer": "A",
    "explanation": "The fox's deception of Chauntecleer provides the central conflict.",
    "page": 40,
    "hasImage": false
  },
  {
    "id": "lit_tough_160",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 160,
    "text": "The moral commentary in The Nun's Priest's Tale is strengthened by",
    "options": {
      "A": "the contrast between the animals' behaviour and the human weaknesses they represent",
      "B": "the complete absence of animal characters",
      "C": "the lack of any conflict",
      "D": "the restriction of the story to description only"
    },
    "answer": "A",
    "explanation": "The animal plot invites readers to recognise pride, manipulation and foolishness in human life.",
    "page": 40,
    "hasImage": false
  },
  {
    "id": "lit_tough_161",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 161,
    "text": "In Fleur Adcock's The Telephone Call, the supposed lottery prize becomes ironic because",
    "options": {
      "A": "the caller never makes contact",
      "B": "the promised fortune becomes an “experience” rather than the money the speaker expects",
      "C": "the speaker has already received the money before the call",
      "D": "the callers offer a real house instead of a telephone"
    },
    "answer": "B",
    "explanation": "The poem builds expectations of great wealth before revealing that the supposed prize is merely the call itself.",
    "page": 41,
    "hasImage": false
  },
  {
    "id": "lit_tough_162",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 162,
    "text": "The phrase “Ultra-Super Global Special” is an example of",
    "options": {
      "A": "deliberate exaggeration",
      "B": "a straightforward scientific definition",
      "C": "an elegiac refrain",
      "D": "a stage direction"
    },
    "answer": "A",
    "explanation": "The grandiose description uses hyperbole to make the supposed prize sound extraordinary.",
    "page": 41,
    "hasImage": false
  },
  {
    "id": "lit_tough_163",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 163,
    "text": "The conversational structure of The Telephone Call primarily helps to",
    "options": {
      "A": "make the deception unfold directly through the callers' words",
      "B": "remove all characterisation from the poem",
      "C": "turn the poem into an epic war narrative",
      "D": "create a fixed sonnet rhyme scheme"
    },
    "answer": "A",
    "explanation": "Dialogue reveals how the callers raise and then frustrate the speaker's expectations.",
    "page": 41,
    "hasImage": false
  },
  {
    "id": "lit_tough_164",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 164,
    "text": "The dominant effect of the ending of The Telephone Call is",
    "options": {
      "A": "anticlimax and disappointment",
      "B": "the complete fulfilment of the speaker's financial dreams",
      "C": "heroic triumph in battle",
      "D": "the restoration of a royal family"
    },
    "answer": "A",
    "explanation": "The anticipated financial reward is replaced by a much less valuable supposed experience.",
    "page": 41,
    "hasImage": false
  },
  {
    "id": "lit_tough_165",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 165,
    "text": "Which literary device is most central to The Telephone Call?",
    "options": {
      "A": "Situational irony",
      "B": "Epic simile",
      "C": "Dramatic unities",
      "D": "Blank verse alone"
    },
    "answer": "A",
    "explanation": "The outcome contradicts the speaker's expectation of receiving a valuable monetary prize.",
    "page": 42,
    "hasImage": false
  },
  {
    "id": "lit_tough_166",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 166,
    "text": "In Wilfrid Wilson Gibson's The Stone, the death of the woman's lover occurs through",
    "options": {
      "A": "a quarry accident involving falling or broken rock",
      "B": "an assassination in the Roman Senate",
      "C": "a shipwreck at sea",
      "D": "an illness caused by an unsuccessful marriage"
    },
    "answer": "A",
    "explanation": "The poem recounts the death of a young worker in a quarry.",
    "page": 42,
    "hasImage": false
  },
  {
    "id": "lit_tough_167",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 167,
    "text": "The description of the woman as being turned to stone primarily conveys",
    "options": {
      "A": "emotional shock and grief",
      "B": "physical strength gained from training",
      "C": "happiness about a new marriage",
      "D": "a literal transformation into a rock"
    },
    "answer": "A",
    "explanation": "The image conveys how the sudden news leaves the woman emotionally stunned.",
    "page": 42,
    "hasImage": false
  },
  {
    "id": "lit_tough_168",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 168,
    "text": "Why is the stone an important symbol in Gibson's poem?",
    "options": {
      "A": "It connects the physical cause of death with the woman's emotional numbness and the memorial.",
      "B": "It represents a successful political campaign.",
      "C": "It shows that the woman has no feelings.",
      "D": "It refers only to a decorative object without emotional significance."
    },
    "answer": "A",
    "explanation": "The stone links the quarry accident, the woman's grief and the desire to memorialise the dead man.",
    "page": 42,
    "hasImage": false
  },
  {
    "id": "lit_tough_169",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 169,
    "text": "The poem's central emotional movement is from",
    "options": {
      "A": "anticipated joy to political triumph",
      "B": "sudden bereavement to a powerful image of stunned grief",
      "C": "confusion about a lottery to financial success",
      "D": "childhood nostalgia to cultural renewal"
    },
    "answer": "B",
    "explanation": "The report of the lover's death is followed by the woman's overwhelming emotional response.",
    "page": 43,
    "hasImage": false
  },
  {
    "id": "lit_tough_170",
    "originalChapter": 10,
    "chapterTitle": "Non-African Poetry",
    "topic": "Non-African Poetry: Byron, Chaucer, Adcock, Gibson",
    "bookQuestionNum": 170,
    "text": "The Stone is best described as",
    "options": {
      "A": "a narrative poem dealing with grief and loss",
      "B": "a political speech",
      "C": "a comedy of manners",
      "D": "an autobiography of a Roman ruler"
    },
    "answer": "A",
    "explanation": "The poem tells a sequence of events centred on a death and its emotional consequences.",
    "page": 43,
    "hasImage": false
  },
  {
    "id": "lit_tough_171",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation: Core Principles & Terminology",
    "topic": "Literary Principles: Tone, Irony, Theme, Diction & Devices",
    "bookQuestionNum": 171,
    "text": "Which statement best distinguishes tone from mood?",
    "options": {
      "A": "Tone is the writer's or speaker's attitude; mood is the feeling created in the reader.",
      "B": "Tone is the rhyme scheme; mood is the stanza length.",
      "C": "Tone refers only to setting; mood refers only to character names.",
      "D": "Tone and mood have exactly the same meaning in every context."
    },
    "answer": "A",
    "explanation": "Tone concerns attitude, while mood concerns the atmosphere or emotional effect experienced by the audience.",
    "page": 43,
    "hasImage": false
  },
  {
    "id": "lit_tough_172",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation: Core Principles & Terminology",
    "topic": "Literary Principles: Tone, Irony, Theme, Diction & Devices",
    "bookQuestionNum": 172,
    "text": "Which of the following is an example of verbal irony?",
    "options": {
      "A": "A person calls a disastrous performance “absolutely brilliant” to express the opposite meaning.",
      "B": "A character walks into a room.",
      "C": "A poet describes a blue sky.",
      "D": "A narrator lists the dates of events."
    },
    "answer": "A",
    "explanation": "Verbal irony occurs when the intended meaning differs from the literal words.",
    "page": 43,
    "hasImage": false
  },
  {
    "id": "lit_tough_173",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation: Core Principles & Terminology",
    "topic": "Literary Principles: Tone, Irony, Theme, Diction & Devices",
    "bookQuestionNum": 173,
    "text": "A reader infers the meaning of an unfamiliar word from the surrounding sentences. This process relies mainly on",
    "options": {
      "A": "context",
      "B": "stanza structure alone",
      "C": "stage scenery",
      "D": "rhyme alone"
    },
    "answer": "A",
    "explanation": "Surrounding details can clarify a word's meaning and its significance in a passage.",
    "page": 44,
    "hasImage": false
  },
  {
    "id": "lit_tough_174",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation: Core Principles & Terminology",
    "topic": "Literary Principles: Tone, Irony, Theme, Diction & Devices",
    "bookQuestionNum": 174,
    "text": "Which of the following is the best way to identify a poem's theme?",
    "options": {
      "A": "Count its lines and stop reading.",
      "B": "Consider the main ideas developed through images, language, speaker and structure.",
      "C": "Assume the title contains the entire meaning.",
      "D": "Identify the poet's country and ignore the poem."
    },
    "answer": "B",
    "explanation": "Theme emerges from the poem as a whole, not from one isolated feature.",
    "page": 44,
    "hasImage": false
  },
  {
    "id": "lit_tough_175",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation: Core Principles & Terminology",
    "topic": "Literary Principles: Tone, Irony, Theme, Diction & Devices",
    "bookQuestionNum": 175,
    "text": "A poet repeats a phrase at the beginning of successive lines. This is",
    "options": {
      "A": "anaphora",
      "B": "epiphany",
      "C": "metonymy",
      "D": "flashback"
    },
    "answer": "A",
    "explanation": "Anaphora is repetition of a word or phrase at the beginnings of successive clauses or lines.",
    "page": 44,
    "hasImage": false
  },
  {
    "id": "lit_tough_176",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation: Core Principles & Terminology",
    "topic": "Literary Principles: Tone, Irony, Theme, Diction & Devices",
    "bookQuestionNum": 176,
    "text": "A poem contains a deliberate pause in the middle of a line. This is known as",
    "options": {
      "A": "caesura",
      "B": "allusion",
      "C": "aside",
      "D": "exposition"
    },
    "answer": "A",
    "explanation": "A caesura is a pause within a line of poetry, often affecting rhythm or emphasis.",
    "page": 44,
    "hasImage": false
  },
  {
    "id": "lit_tough_177",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation: Core Principles & Terminology",
    "topic": "Literary Principles: Tone, Irony, Theme, Diction & Devices",
    "bookQuestionNum": 177,
    "text": "Which term describes the emotional associations connected to a word beyond its dictionary definition?",
    "options": {
      "A": "Connotation",
      "B": "Denotation",
      "C": "Syntax",
      "D": "Scansion"
    },
    "answer": "A",
    "explanation": "Connotation refers to the emotional or cultural associations of a word.",
    "page": 45,
    "hasImage": false
  },
  {
    "id": "lit_tough_178",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation: Core Principles & Terminology",
    "topic": "Literary Principles: Tone, Irony, Theme, Diction & Devices",
    "bookQuestionNum": 178,
    "text": "The literal dictionary meaning of a word is its",
    "options": {
      "A": "connotation",
      "B": "denotation",
      "C": "allusion",
      "D": "symbolism"
    },
    "answer": "B",
    "explanation": "Denotation is the basic or literal meaning of a word.",
    "page": 45,
    "hasImage": false
  },
  {
    "id": "lit_tough_179",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation: Core Principles & Terminology",
    "topic": "Literary Principles: Tone, Irony, Theme, Diction & Devices",
    "bookQuestionNum": 179,
    "text": "A writer uses “passed away” instead of “died” to soften the impact of a statement. This is",
    "options": {
      "A": "euphemism",
      "B": "hyperbole",
      "C": "oxymoron",
      "D": "synecdoche"
    },
    "answer": "A",
    "explanation": "A euphemism replaces a direct or harsh expression with a milder one.",
    "page": 45,
    "hasImage": false
  },
  {
    "id": "lit_tough_180",
    "originalChapter": 1,
    "chapterTitle": "Literary Appreciation: Core Principles & Terminology",
    "topic": "Literary Principles: Tone, Irony, Theme, Diction & Devices",
    "bookQuestionNum": 180,
    "text": "Which statement about literary appreciation is most accurate?",
    "options": {
      "A": "It requires identifying devices and explaining how they contribute to meaning.",
      "B": "It requires memorising the author's name without reading the passage.",
      "C": "It focuses only on spelling errors.",
      "D": "It prohibits interpretation."
    },
    "answer": "A",
    "explanation": "Literary appreciation involves understanding language, form, tone, imagery and the passage's wider significance.",
    "page": 45,
    "hasImage": false
  },
  {
    "id": "lit_tough_181",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 181,
    "text": "Read this original extract: “The market woke before the sun. Baskets rattled, voices clashed, and the smell of roasted corn drifted through the narrow streets.” Which device appears in “The market woke”?",
    "options": {
      "A": "Personification",
      "B": "Litotes",
      "C": "Synecdoche",
      "D": "Euphemism"
    },
    "answer": "A",
    "explanation": "The market is given the human action of waking.",
    "page": 46,
    "hasImage": false
  },
  {
    "id": "lit_tough_182",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 182,
    "text": "In the extract in Question 181, the words “Baskets rattled, voices clashed” mainly appeal to which sense?",
    "options": {
      "A": "Sight only",
      "B": "Hearing",
      "C": "Taste",
      "D": "Touch only"
    },
    "answer": "B",
    "explanation": "“Rattled” and “voices” create auditory imagery.",
    "page": 46,
    "hasImage": false
  },
  {
    "id": "lit_tough_183",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 183,
    "text": "In the extract in Question 181, “the smell of roasted corn” is an example of",
    "options": {
      "A": "olfactory imagery",
      "B": "visual imagery",
      "C": "auditory imagery",
      "D": "tactile imagery"
    },
    "answer": "A",
    "explanation": "Olfactory imagery appeals to the sense of smell.",
    "page": 46,
    "hasImage": false
  },
  {
    "id": "lit_tough_184",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 184,
    "text": "Read this original extract: “Although the gate stood open, the prisoner hesitated. Freedom waited outside, yet fear held him more tightly than any chain.” Which interpretation is best supported?",
    "options": {
      "A": "The prisoner has no fear.",
      "B": "Psychological barriers can prevent someone from using an available opportunity.",
      "C": "The prisoner is definitely outside the prison already.",
      "D": "The gate is described only to establish the weather."
    },
    "answer": "B",
    "explanation": "The contrast between the open gate and fear suggests an internal obstacle to freedom.",
    "page": 46,
    "hasImage": false
  },
  {
    "id": "lit_tough_185",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 185,
    "text": "In the extract in Question 184, the phrase “fear held him more tightly than any chain” is",
    "options": {
      "A": "a metaphor",
      "B": "a literal physical description",
      "C": "an example of onomatopoeia",
      "D": "a metrical foot"
    },
    "answer": "A",
    "explanation": "Fear is compared to a chain to show the power of psychological restraint.",
    "page": 47,
    "hasImage": false
  },
  {
    "id": "lit_tough_186",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 186,
    "text": "Read this original extract: “Tunde smiled at the empty trophy cabinet. ‘What a wonderful season,’ he said, after his team had lost every match.” Which device is most evident?",
    "options": {
      "A": "Verbal irony",
      "B": "Elegy",
      "C": "Synecdoche",
      "D": "Euphony"
    },
    "answer": "A",
    "explanation": "Tunde's words say the opposite of what the team's poor performance would normally justify.",
    "page": 47,
    "hasImage": false
  },
  {
    "id": "lit_tough_187",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 187,
    "text": "In Question 186, the reader's understanding of Tunde's likely meaning depends most on",
    "options": {
      "A": "the contrast between his words and the team's results",
      "B": "the number of letters in his name",
      "C": "the colour of the trophy cabinet",
      "D": "the absence of any context"
    },
    "answer": "A",
    "explanation": "Context reveals that the praise is probably sarcastic rather than sincere.",
    "page": 47,
    "hasImage": false
  },
  {
    "id": "lit_tough_188",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 188,
    "text": "Read this original extract: “Every evening, Mama placed a cup beside the door. No one used it, but she dusted it carefully, as though a visitor might return.” What is the cup most likely to symbolise?",
    "options": {
      "A": "Unresolved hope or remembrance",
      "B": "The rejection of family life",
      "C": "The success of a business venture",
      "D": "The end of every emotional attachment"
    },
    "answer": "A",
    "explanation": "The unused cup and repeated care suggest that Mama continues to remember or hope for someone's return.",
    "page": 47,
    "hasImage": false
  },
  {
    "id": "lit_tough_189",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 189,
    "text": "In Question 188, which detail most strongly supports the symbolic interpretation?",
    "options": {
      "A": "The passage states that it is evening.",
      "B": "Nobody uses the cup, yet Mama continues to care for it.",
      "C": "The cup is beside a door.",
      "D": "The paragraph has three sentences."
    },
    "answer": "B",
    "explanation": "Her repeated action gives the otherwise ordinary cup emotional significance.",
    "page": 48,
    "hasImage": false
  },
  {
    "id": "lit_tough_190",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 190,
    "text": "Read this original extract: “The judge listened patiently, but the witness changed his story three times. By the end, even his strongest supporters avoided his eyes.” What can reasonably be inferred?",
    "options": {
      "A": "The witness's changing account has damaged his credibility.",
      "B": "The judge has already announced a final sentence.",
      "C": "The supporters have all become judges.",
      "D": "The witness is certainly telling the truth."
    },
    "answer": "A",
    "explanation": "The repeated changes and the supporters' reaction suggest that the witness is no longer trusted.",
    "page": 48,
    "hasImage": false
  },
  {
    "id": "lit_tough_191",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 191,
    "text": "Which term describes an inference that readers draw from hints rather than from a direct statement?",
    "options": {
      "A": "Implication",
      "B": "Denotation",
      "C": "Exposition",
      "D": "Alliteration"
    },
    "answer": "A",
    "explanation": "An implication is a meaning suggested indirectly by the text.",
    "page": 48,
    "hasImage": false
  },
  {
    "id": "lit_tough_192",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 192,
    "text": "Read this original line: “The poor rich man sat alone in his golden house.” Which device is most evident in “poor rich man”?",
    "options": {
      "A": "Oxymoron or paradoxical contrast",
      "B": "Onomatopoeia",
      "C": "Apostrophe",
      "D": "Assonance alone"
    },
    "answer": "A",
    "explanation": "The phrase juxtaposes wealth with another kind of poverty, suggesting that material riches do not guarantee emotional fulfilment.",
    "page": 48,
    "hasImage": false
  },
  {
    "id": "lit_tough_193",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 193,
    "text": "In Question 192, the contrast between wealth and loneliness most strongly suggests that",
    "options": {
      "A": "material prosperity does not necessarily guarantee happiness",
      "B": "every wealthy person must be lonely",
      "C": "poverty always causes happiness",
      "D": "the man has no physical house"
    },
    "answer": "A",
    "explanation": "The contrast invites the reader to distinguish material wealth from emotional well-being.",
    "page": 49,
    "hasImage": false
  },
  {
    "id": "lit_tough_194",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 194,
    "text": "Read this original extract: “When the drums began, the old woman rose. Her feet remembered the dance that her mind had almost forgotten.” What does the second sentence chiefly suggest?",
    "options": {
      "A": "Physical movement can preserve memories that conscious thought seems to have lost.",
      "B": "The old woman has never danced.",
      "C": "The drums have stopped playing.",
      "D": "The woman is unable to understand the music."
    },
    "answer": "A",
    "explanation": "The contrast between the body's memory and the mind's forgetfulness creates a metaphor for embodied experience.",
    "page": 49,
    "hasImage": false
  },
  {
    "id": "lit_tough_195",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 195,
    "text": "In Question 194, “Her feet remembered” is an example of",
    "options": {
      "A": "personification",
      "B": "metonymy only",
      "C": "a stage direction",
      "D": "a rhyme scheme"
    },
    "answer": "A",
    "explanation": "The feet are given the human mental ability to remember.",
    "page": 49,
    "hasImage": false
  },
  {
    "id": "lit_tough_196",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 196,
    "text": "A passage describes a poor village where officials live comfortably while the inhabitants lack clean water. The writer's primary purpose is most likely to",
    "options": {
      "A": "criticise inequality or corruption",
      "B": "praise the officials without qualification",
      "C": "explain the rules of a sonnet",
      "D": "describe a romantic relationship only"
    },
    "answer": "A",
    "explanation": "The contrast between official comfort and public hardship suggests social criticism.",
    "page": 49,
    "hasImage": false
  },
  {
    "id": "lit_tough_197",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 197,
    "text": "An unseen poem contains repeated references to cages, locked doors and broken wings. Which interpretation is most defensible before considering the poem's full context?",
    "options": {
      "A": "The images may suggest confinement and a desire for freedom.",
      "B": "The images must refer only to a zoo.",
      "C": "The poem must be a comedy.",
      "D": "The speaker must be a judge."
    },
    "answer": "A",
    "explanation": "These images commonly carry symbolic associations with restriction and liberation, although the full passage must guide the final interpretation.",
    "page": 50,
    "hasImage": false
  },
  {
    "id": "lit_tough_198",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 198,
    "text": "In a dramatic extract, a character says, “I have forgiven him,” while hiding a knife and planning revenge. Which technique is most directly revealed by the contradiction between speech and action?",
    "options": {
      "A": "A contrast that exposes hypocrisy or concealed intention",
      "B": "A regular rhyme scheme",
      "C": "A historical allusion in every line",
      "D": "A change from prose to epic"
    },
    "answer": "A",
    "explanation": "The character's behaviour contradicts the claim of forgiveness, revealing a difference between appearance and intention.",
    "page": 50,
    "hasImage": false
  },
  {
    "id": "lit_tough_199",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 199,
    "text": "When answering a JAMB question asking for the “dominant theme” of a passage, the best approach is to choose the option that",
    "options": {
      "A": "repeats a minor object mentioned once",
      "B": "captures the main idea developed across the passage",
      "C": "gives the longest description of the setting",
      "D": "mentions the author's nationality"
    },
    "answer": "B",
    "explanation": "The dominant theme is the central idea that connects the important details of the work.",
    "page": 50,
    "hasImage": false
  },
  {
    "id": "lit_tough_200",
    "originalChapter": 1,
    "chapterTitle": "Unseen Literary Appreciation: Comprehension & Practical Analysis",
    "topic": "Unseen Appreciation: Extracts, Imagery, Irony & Interpretation",
    "bookQuestionNum": 200,
    "text": "A candidate identifies a metaphor correctly but cannot explain its contribution to the passage. What important skill is still missing?",
    "options": {
      "A": "Interpretation of how the device develops meaning",
      "B": "Memorisation of every line in the work",
      "C": "Identification of the author's birthplace",
      "D": "Calculation of the poem's page count"
    },
    "answer": "A",
    "explanation": "Strong literary appreciation requires not only naming a device but explaining its effect on characterisation, tone, imagery or theme.",
    "page": 50,
    "hasImage": false
  }
];
