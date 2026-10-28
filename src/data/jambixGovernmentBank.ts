/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX GOVERNMENT QUESTION BANK
 * 100 TOUGH JAMB UTME-STYLE QUESTIONS ACROSS ALL TOPICS (QUESTIONS 1–100)
 * Indexed directly from official syllabus specifications.
 * Total questions: 100
 */

export interface JambixGovernmentItem {
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

export const JAMBIX_GOVERNMENT_ITEMS: JambixGovernmentItem[] = [
  {
    "id": "govt_tough_1",
    "originalChapter": 1,
    "chapterTitle": "Basic Concepts: Power, Authority & Legitimacy",
    "topic": "Concepts of Government: Power vs Authority",
    "bookQuestionNum": 1,
    "text": "Which of the following best distinguishes power from authority?",
    "options": {
      "A": "Power is always legal, while authority is always illegal.",
      "B": "Power is the ability to influence behaviour, while authority is the recognised right to exercise power.",
      "C": "Power exists only in democratic states, while authority exists only in dictatorships.",
      "D": "Power depends entirely on elections, while authority depends entirely on wealth."
    },
    "answer": "B",
    "explanation": "Power is the capacity to influence or control others. Authority is power regarded as rightful or legitimate.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "govt_tough_2",
    "originalChapter": 1,
    "chapterTitle": "Basic Concepts: Power, Authority & Legitimacy",
    "topic": "Concepts of Government: Legitimacy",
    "bookQuestionNum": 2,
    "text": "A government continues to enjoy the support of citizens even when its policies are unpopular because the citizens accept its constitutional right to govern. This demonstrates",
    "options": {
      "A": "coercion",
      "B": "sovereignty",
      "C": "legitimacy",
      "D": "political apathy"
    },
    "answer": "C",
    "explanation": "Legitimacy exists when the people accept the right of a government to exercise political power.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "govt_tough_3",
    "originalChapter": 1,
    "chapterTitle": "Basic Concepts: Sovereignty & the State",
    "topic": "Concepts of Government: External Sovereignty",
    "bookQuestionNum": 3,
    "text": "Which of the following is the clearest indication that a state possesses external sovereignty?",
    "options": {
      "A": "It has a written constitution.",
      "B": "It controls all traditional rulers within its territory.",
      "C": "It can conduct foreign relations without being legally subordinate to another state.",
      "D": "It has several political parties."
    },
    "answer": "C",
    "explanation": "External sovereignty refers to a state's independence from the control of other states.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "govt_tough_4",
    "originalChapter": 1,
    "chapterTitle": "Basic Concepts: Sovereignty & the State",
    "topic": "The State: Essential Elements of a State",
    "bookQuestionNum": 4,
    "text": "Which combination correctly identifies the essential elements of a state?",
    "options": {
      "A": "Government, elections, political parties and constitution",
      "B": "Population, territory, government and sovereignty",
      "C": "Nationality, language, culture and religion",
      "D": "Legislature, executive, judiciary and political parties"
    },
    "answer": "B",
    "explanation": "A state requires a population, a defined territory, a government and sovereignty.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "govt_tough_5",
    "originalChapter": 1,
    "chapterTitle": "Basic Concepts: Sovereignty & the State",
    "topic": "The State: Nation vs State",
    "bookQuestionNum": 5,
    "text": "Which statement best distinguishes a nation from a state?",
    "options": {
      "A": "A nation must always have a larger population than a state.",
      "B": "A state is based only on common ancestry, while a nation requires a constitution.",
      "C": "A nation is a community with a shared identity, while a state is a political organisation with sovereignty over a territory.",
      "D": "A nation must have a president, while a state must have a monarch."
    },
    "answer": "C",
    "explanation": "A nation is associated with shared identity, history or culture. A state has defined territory, government and sovereignty.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "govt_tough_6",
    "originalChapter": 1,
    "chapterTitle": "Political Culture & Political Socialisation",
    "topic": "Political Socialisation: Nature and Agents",
    "bookQuestionNum": 6,
    "text": "Which of the following is an example of political socialisation?",
    "options": {
      "A": "A court declares an election invalid.",
      "B": "A child learns political values and beliefs from family members.",
      "C": "A legislature approves the national budget.",
      "D": "An electoral commission registers candidates."
    },
    "answer": "B",
    "explanation": "Political socialisation is the process through which individuals acquire political values, attitudes and beliefs.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "govt_tough_7",
    "originalChapter": 1,
    "chapterTitle": "Political Culture & Political Socialisation",
    "topic": "Political Participation: Political Apathy",
    "bookQuestionNum": 7,
    "text": "A citizen deliberately refuses to vote because they believe voting cannot influence government decisions. This behaviour is best described as",
    "options": {
      "A": "political recruitment",
      "B": "political socialisation",
      "C": "political participation",
      "D": "political apathy"
    },
    "answer": "D",
    "explanation": "Political apathy is a lack of interest in or concern about political activities.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "govt_tough_8",
    "originalChapter": 4,
    "chapterTitle": "Forms of Government & Political Systems",
    "topic": "Forms of Government: Oligarchy",
    "bookQuestionNum": 8,
    "text": "A political system in which authority is concentrated in the hands of a small group of wealthy and influential people is known as",
    "options": {
      "A": "aristocracy",
      "B": "oligarchy",
      "C": "democracy",
      "D": "theocracy"
    },
    "answer": "B",
    "explanation": "Oligarchy is government by a small group of people. When rule is specifically based on wealth, the system may be described as plutocracy.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "govt_tough_9",
    "originalChapter": 4,
    "chapterTitle": "Forms of Government & Political Systems",
    "topic": "Systems of Government: Parliamentary System",
    "bookQuestionNum": 9,
    "text": "Which of the following is a major feature of a parliamentary system of government?",
    "options": {
      "A": "The executive is completely separate from the legislature.",
      "B": "The president serves as both ceremonial head of state and head of government.",
      "C": "The government depends on the confidence of the legislature.",
      "D": "The legislature cannot remove the prime minister under any circumstances."
    },
    "answer": "C",
    "explanation": "In a parliamentary system, the government must retain the confidence of the legislature to remain in office.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "govt_tough_10",
    "originalChapter": 4,
    "chapterTitle": "Forms of Government & Political Systems",
    "topic": "Systems of Government: Presidential System",
    "bookQuestionNum": 10,
    "text": "Which situation best illustrates a presidential system of government?",
    "options": {
      "A": "The prime minister appoints ministers exclusively from the legislature.",
      "B": "The executive remains in office independently of ordinary legislative confidence votes.",
      "C": "The monarch personally controls the judiciary and legislature.",
      "D": "The head of government is selected by the upper house and can be removed by an ordinary confidence vote."
    },
    "answer": "B",
    "explanation": "A presidential system separates the executive from the legislature, although constitutional impeachment and other removal procedures may apply.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "govt_tough_11",
    "originalChapter": 4,
    "chapterTitle": "Forms of Government & Political Systems",
    "topic": "Forms of Government: Federal System",
    "bookQuestionNum": 11,
    "text": "Which of the following is most characteristic of a federal system?",
    "options": {
      "A": "All governmental powers are constitutionally concentrated in the central government.",
      "B": "Regional governments exercise only powers delegated at the discretion of the central government.",
      "C": "Powers are constitutionally distributed between central and constituent governments.",
      "D": "Local governments possess complete sovereignty over foreign affairs."
    },
    "answer": "C",
    "explanation": "Federalism constitutionally divides governmental authority between different levels of government.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "govt_tough_12",
    "originalChapter": 4,
    "chapterTitle": "Forms of Government & Political Systems",
    "topic": "Forms of Government: Confederal System",
    "bookQuestionNum": 12,
    "text": "A country allows its constituent units to retain extensive independence while sharing a limited common government. This arrangement most closely resembles",
    "options": {
      "A": "a unitary state",
      "B": "a confederation",
      "C": "an absolute monarchy",
      "D": "a presidential republic"
    },
    "answer": "B",
    "explanation": "A confederation is an association of political units that retain substantial independence while cooperating through a common arrangement.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "govt_tough_13",
    "originalChapter": 3,
    "chapterTitle": "Political Ideologies",
    "topic": "Political Ideologies: Capitalism",
    "bookQuestionNum": 13,
    "text": "Which political ideology emphasises private ownership, competition and the operation of market forces?",
    "options": {
      "A": "Communism",
      "B": "Capitalism",
      "C": "Feudalism",
      "D": "Totalitarianism"
    },
    "answer": "B",
    "explanation": "Capitalism is based primarily on private ownership of productive resources and market-based economic activity.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "govt_tough_14",
    "originalChapter": 3,
    "chapterTitle": "Political Ideologies",
    "topic": "Political Ideologies: Socialism vs Capitalism",
    "bookQuestionNum": 14,
    "text": "Which statement best distinguishes socialism from laissez-faire capitalism?",
    "options": {
      "A": "Socialism generally favours greater social or public control of productive resources.",
      "B": "Socialism rejects all forms of government.",
      "C": "Socialism requires every country to have a hereditary monarch.",
      "D": "Socialism prohibits every form of public ownership."
    },
    "answer": "A",
    "explanation": "Socialism advocates social or collective ownership or control of important productive resources to varying degrees.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "govt_tough_15",
    "originalChapter": 3,
    "chapterTitle": "Political Ideologies",
    "topic": "Political Ideologies: Totalitarianism",
    "bookQuestionNum": 15,
    "text": "A political system attempts to control political opposition, the media, organised social life and much of citizens' private lives through a dominant ideology. This is characteristic of",
    "options": {
      "A": "liberal democracy",
      "B": "confederalism",
      "C": "totalitarianism",
      "D": "constitutional monarchy"
    },
    "answer": "C",
    "explanation": "Totalitarianism seeks extensive state control over political and social life.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "govt_tough_16",
    "originalChapter": 2,
    "chapterTitle": "Constitutions & Constitutionalism",
    "topic": "Constitutions: Rigid vs Flexible",
    "bookQuestionNum": 16,
    "text": "A constitution that is difficult to amend because it requires special procedures beyond ordinary legislation is described as",
    "options": {
      "A": "flexible",
      "B": "rigid",
      "C": "unwritten",
      "D": "unitary"
    },
    "answer": "B",
    "explanation": "A rigid constitution requires a special amendment procedure, often involving a supermajority or approval by constituent units.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "govt_tough_17",
    "originalChapter": 2,
    "chapterTitle": "Constitutions & Constitutionalism",
    "topic": "Constitutions: Written Constitutions",
    "bookQuestionNum": 17,
    "text": "Which of the following is a major advantage of a written constitution?",
    "options": {
      "A": "It automatically prevents military coups.",
      "B": "It makes all constitutional disputes impossible.",
      "C": "It provides an accessible statement of fundamental governmental powers and citizens' rights.",
      "D": "It guarantees that every citizen will agree with government policies."
    },
    "answer": "C",
    "explanation": "A written constitution records fundamental rules in an identifiable document or set of documents, helping clarify powers and rights.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "govt_tough_18",
    "originalChapter": 2,
    "chapterTitle": "Rule of Law, Separation of Powers & Rights",
    "topic": "Rule of Law: Nature and Meaning",
    "bookQuestionNum": 18,
    "text": "A government official is prosecuted for an offence under the same law that applies to other citizens, subject to the same lawful procedures. This most directly illustrates",
    "options": {
      "A": "the rule of law",
      "B": "collective responsibility",
      "C": "delegated legislation",
      "D": "parliamentary sovereignty without limits"
    },
    "answer": "A",
    "explanation": "The rule of law requires public officials and citizens to be subject to the law and to lawful procedures.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "govt_tough_19",
    "originalChapter": 2,
    "chapterTitle": "Rule of Law, Separation of Powers & Rights",
    "topic": "Rule of Law: Discretionary Powers",
    "bookQuestionNum": 19,
    "text": "Which of the following is NOT a necessary implication of the rule of law?",
    "options": {
      "A": "Equality before the law",
      "B": "Access to an independent judiciary",
      "C": "Punishment according to established law",
      "D": "Unlimited discretionary power for public officials"
    },
    "answer": "D",
    "explanation": "The rule of law limits arbitrary power and requires public authority to operate within the law.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "govt_tough_20",
    "originalChapter": 2,
    "chapterTitle": "Rule of Law, Separation of Powers & Rights",
    "topic": "Separation of Powers: Basic Principles",
    "bookQuestionNum": 20,
    "text": "The principle of separation of powers is primarily intended to",
    "options": {
      "A": "concentrate all government powers in one institution",
      "B": "prevent an excessive concentration of governmental power",
      "C": "remove the judiciary from all constitutional matters",
      "D": "ensure that political parties control every arm of government"
    },
    "answer": "B",
    "explanation": "Separation of powers distributes legislative, executive and judicial functions among different institutions.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "govt_tough_21",
    "originalChapter": 2,
    "chapterTitle": "Rule of Law, Separation of Powers & Rights",
    "topic": "Separation of Powers: Checks and Balances",
    "bookQuestionNum": 21,
    "text": "Which situation best illustrates checks and balances?",
    "options": {
      "A": "The legislature makes laws without constitutional limits.",
      "B": "The executive appoints itself as the final court of appeal.",
      "C": "A court reviews whether an executive action violates the constitution.",
      "D": "The police determine the validity of every Act of Parliament."
    },
    "answer": "C",
    "explanation": "Checks and balances allow institutions to limit or review the actions of other branches, where the constitution grants that power.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "govt_tough_22",
    "originalChapter": 5,
    "chapterTitle": "Arms of Government: Legislature, Executive & Judiciary",
    "topic": "Arms of Government: The Legislature",
    "bookQuestionNum": 22,
    "text": "Which function belongs primarily to the legislature?",
    "options": {
      "A": "Interpreting the constitution in a disputed court case",
      "B": "Making laws and scrutinising government expenditure",
      "C": "Conducting criminal prosecutions in every case",
      "D": "Implementing all government policies directly"
    },
    "answer": "B",
    "explanation": "The legislature enacts laws, authorises public expenditure and holds the executive accountable.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "govt_tough_23",
    "originalChapter": 5,
    "chapterTitle": "Arms of Government: Legislature, Executive & Judiciary",
    "topic": "Arms of Government: The Judiciary",
    "bookQuestionNum": 23,
    "text": "In a presidential system, a president refuses to obey a lawful court order. Which institution is primarily responsible for determining the legal validity of the dispute brought before it?",
    "options": {
      "A": "The judiciary",
      "B": "The political party headquarters",
      "C": "The civil service union",
      "D": "The electoral commission"
    },
    "answer": "A",
    "explanation": "The judiciary interprets and applies the law and can determine whether executive conduct is lawful.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "govt_tough_24",
    "originalChapter": 4,
    "chapterTitle": "Forms of Government & Political Systems",
    "topic": "Parliamentary Conventions: Collective Responsibility",
    "bookQuestionNum": 24,
    "text": "The doctrine of collective ministerial responsibility in a parliamentary system means that",
    "options": {
      "A": "every minister must belong to the same ethnic group",
      "B": "ministers are collectively accountable for government policy and normally publicly support cabinet decisions",
      "C": "ministers cannot be questioned by parliament",
      "D": "the judiciary must approve every cabinet decision"
    },
    "answer": "B",
    "explanation": "Cabinet members are expected to defend agreed government policy publicly or resign if they cannot accept it.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "govt_tough_25",
    "originalChapter": 5,
    "chapterTitle": "Arms of Government: Legislature, Executive & Judiciary",
    "topic": "The Legislature: Delegated Legislation",
    "bookQuestionNum": 25,
    "text": "Which of the following is an example of delegated legislation?",
    "options": {
      "A": "A constitution enacted by a constituent assembly",
      "B": "A law made by a legislature without delegating any authority",
      "C": "Regulations made by a minister under powers granted by an Act",
      "D": "A judicial judgment interpreting an existing law"
    },
    "answer": "C",
    "explanation": "Delegated legislation consists of rules made by an authorised body under powers conferred by a primary law.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "govt_tough_26",
    "originalChapter": 5,
    "chapterTitle": "Arms of Government: Legislature, Executive & Judiciary",
    "topic": "The Legislature: Acts vs Subsidiary Legislation",
    "bookQuestionNum": 26,
    "text": "Which of the following correctly distinguishes an Act from a subsidiary regulation?",
    "options": {
      "A": "An Act is always made by a court, while a regulation is made by voters.",
      "B": "An Act is primary legislation, while a regulation may be made under authority granted by an Act.",
      "C": "An Act applies only to traditional rulers, while a regulation applies only to judges.",
      "D": "An Act is always temporary, while a regulation is always permanent."
    },
    "answer": "B",
    "explanation": "An Act is passed by a legislature and assented to where required. Subsidiary regulations are made under delegated statutory authority.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "govt_tough_27",
    "originalChapter": 2,
    "chapterTitle": "Citizenship, Rights & Duties",
    "topic": "Citizenship: Acquisition by Descent",
    "bookQuestionNum": 27,
    "text": "Which method of acquiring citizenship is most directly based on being born to a qualifying citizen parent?",
    "options": {
      "A": "Naturalisation",
      "B": "Citizenship by descent",
      "C": "Registration through marriage in every case",
      "D": "Political appointment"
    },
    "answer": "B",
    "explanation": "Citizenship by descent is acquired through qualifying parental nationality, subject to the applicable constitution and laws.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "govt_tough_28",
    "originalChapter": 2,
    "chapterTitle": "Citizenship, Rights & Duties",
    "topic": "Citizenship: Civic Duties & Obligations",
    "bookQuestionNum": 28,
    "text": "Which of the following is generally a duty of a citizen in a democratic state?",
    "options": {
      "A": "Disobeying every unpopular law",
      "B": "Preventing others from participating in elections",
      "C": "Respecting lawful obligations and paying taxes as required by law",
      "D": "Taking personal control of public institutions"
    },
    "answer": "C",
    "explanation": "Citizens are expected to fulfil lawful civic obligations, including tax obligations.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "govt_tough_29",
    "originalChapter": 2,
    "chapterTitle": "Citizenship, Rights & Duties",
    "topic": "Human Rights: Fundamental Human Rights",
    "bookQuestionNum": 29,
    "text": "Which statement about fundamental human rights is most accurate?",
    "options": {
      "A": "Every right is absolute and can never be limited.",
      "B": "Rights are legal and moral protections, although some may be restricted under constitutionally permitted conditions.",
      "C": "Rights belong only to elected public officials.",
      "D": "Rights apply only during election periods."
    },
    "answer": "B",
    "explanation": "Many constitutional rights can be limited under specified conditions, while some protections have stronger or non-derogable status.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "govt_tough_30",
    "originalChapter": 1,
    "chapterTitle": "Basic Concepts: Democracy & Governance",
    "topic": "Democratic Governance: Accountability",
    "bookQuestionNum": 30,
    "text": "Which democratic principle requires government actions and spending to be open to scrutiny?",
    "options": {
      "A": "Accountability",
      "B": "Hereditary succession",
      "C": "Political apathy",
      "D": "Absolute sovereignty of the executive"
    },
    "answer": "A",
    "explanation": "Accountability requires public officials to explain their decisions and answer for the use of public authority and resources.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "govt_tough_31",
    "originalChapter": 1,
    "chapterTitle": "Basic Concepts: Democracy & Governance",
    "topic": "Representative Government: Free Periodic Elections",
    "bookQuestionNum": 31,
    "text": "Representative government is best demonstrated when",
    "options": {
      "A": "citizens choose representatives through periodic elections",
      "B": "the military permanently suspends elections",
      "C": "judges select all legislators without constitutional authority",
      "D": "a hereditary ruler makes every public decision personally"
    },
    "answer": "A",
    "explanation": "Representative government allows citizens to elect people to make political decisions on their behalf.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "govt_tough_32",
    "originalChapter": 6,
    "chapterTitle": "Electoral Systems & Political Parties",
    "topic": "Electoral Systems: First-Past-The-Post (Plurality)",
    "bookQuestionNum": 32,
    "text": "An electoral system in which the candidate with the highest number of votes in a constituency wins, even without an absolute majority, is",
    "options": {
      "A": "proportional representation",
      "B": "first-past-the-post",
      "C": "single transferable vote in all its forms",
      "D": "indirect election"
    },
    "answer": "B",
    "explanation": "Under first-past-the-post, the candidate with more votes than any rival wins, even if the candidate receives less than 50% of valid votes.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "govt_tough_33",
    "originalChapter": 6,
    "chapterTitle": "Electoral Systems & Political Parties",
    "topic": "Electoral Systems: Proportional Representation",
    "bookQuestionNum": 33,
    "text": "A political party receives 40% of the votes nationwide but wins only 20% of the legislative seats. Which electoral system could be especially likely to produce a closer correspondence between vote share and seat share?",
    "options": {
      "A": "Proportional representation",
      "B": "First-past-the-post in single-member constituencies",
      "C": "Hereditary selection",
      "D": "Appointment by the executive"
    },
    "answer": "A",
    "explanation": "Proportional representation aims to allocate seats more closely according to parties' shares of the vote, subject to the system's rules.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "govt_tough_34",
    "originalChapter": 6,
    "chapterTitle": "Electoral Systems & Political Parties",
    "topic": "Elections: Free and Fair Elections",
    "bookQuestionNum": 34,
    "text": "Which of the following is an essential condition for a free and fair election?",
    "options": {
      "A": "Only the ruling party may campaign.",
      "B": "Votes are counted according to transparent and lawful procedures.",
      "C": "Opposition candidates must obtain permission from the ruling party.",
      "D": "Election results cannot be challenged under any circumstances."
    },
    "answer": "B",
    "explanation": "Transparent voting, counting, impartial administration and lawful dispute resolution help support credible elections.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "govt_tough_35",
    "originalChapter": 6,
    "chapterTitle": "Electoral Systems & Political Parties",
    "topic": "Political Parties: Political Party vs Pressure Group",
    "bookQuestionNum": 35,
    "text": "The major difference between a political party and a pressure group is that a political party primarily seeks to",
    "options": {
      "A": "influence government policy without ever seeking office",
      "B": "win political power through elections and govern",
      "C": "replace all public institutions with private organisations",
      "D": "prevent citizens from expressing political opinions"
    },
    "answer": "B",
    "explanation": "Political parties seek to win public office, while pressure groups principally seek to influence public policy.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "govt_tough_36",
    "originalChapter": 6,
    "chapterTitle": "Electoral Systems & Political Parties",
    "topic": "Pressure Groups: Trade Unions & Industrial Action",
    "bookQuestionNum": 36,
    "text": "A trade union threatens industrial action to persuade the government to change labour legislation. This is an example of",
    "options": {
      "A": "judicial review",
      "B": "pressure-group activity",
      "C": "electoral delimitation",
      "D": "constitutional amendment"
    },
    "answer": "B",
    "explanation": "Trade unions are organised interest groups that can use lobbying, negotiation and industrial action to influence policy.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "govt_tough_37",
    "originalChapter": 6,
    "chapterTitle": "Electoral Systems & Political Parties",
    "topic": "Political Parties: Functions of Opposition Parties",
    "bookQuestionNum": 37,
    "text": "Which of the following is a likely function of an opposition party in a democracy?",
    "options": {
      "A": "Preventing all legislation from being passed",
      "B": "Scrutinising government actions and presenting alternative policies",
      "C": "Exercising the judicial power of the courts",
      "D": "Appointing every civil servant without legal authority"
    },
    "answer": "B",
    "explanation": "Opposition parties challenge government policies, hold the ruling party accountable and offer alternatives.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "govt_tough_38",
    "originalChapter": 6,
    "chapterTitle": "Electoral Systems & Political Parties",
    "topic": "Party Systems: Two-Party System",
    "bookQuestionNum": 38,
    "text": "Which party system is characterised by two major parties dominating electoral competition, although smaller parties may still exist?",
    "options": {
      "A": "One-party system",
      "B": "Two-party system",
      "C": "Non-partisan hereditary system",
      "D": "No-party system"
    },
    "answer": "B",
    "explanation": "A two-party system is dominated by two major parties, even if other parties are legally permitted.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "govt_tough_39",
    "originalChapter": 6,
    "chapterTitle": "Public Opinion & the Media",
    "topic": "Public Opinion: Definition and Nature",
    "bookQuestionNum": 39,
    "text": "Public opinion is best described as",
    "options": {
      "A": "the personal view of the head of state alone",
      "B": "the views held by members of the public on issues of common concern",
      "C": "the final judgment of the Supreme Court",
      "D": "the written constitution of a country"
    },
    "answer": "B",
    "explanation": "Public opinion consists of public attitudes and views about political, social or governmental matters.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "govt_tough_40",
    "originalChapter": 6,
    "chapterTitle": "Public Opinion & the Media",
    "topic": "Public Opinion: Opinion Polling & Sampling Bias",
    "bookQuestionNum": 40,
    "text": "Which factor is most likely to undermine the credibility of an opinion poll?",
    "options": {
      "A": "Use of a representative sample",
      "B": "Clear and neutral questions",
      "C": "Selection of respondents in a biased manner",
      "D": "Disclosure of the poll's methodology"
    },
    "answer": "C",
    "explanation": "Sampling bias can make the results unrepresentative of the wider population.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "govt_tough_41",
    "originalChapter": 6,
    "chapterTitle": "Electoral Administration",
    "topic": "Electoral Administration: Independent Electoral Commission",
    "bookQuestionNum": 41,
    "text": "The main purpose of an independent electoral commission is to",
    "options": {
      "A": "campaign for the governing party",
      "B": "administer elections according to the law",
      "C": "appoint all members of the judiciary",
      "D": "write the manifestos of political parties"
    },
    "answer": "B",
    "explanation": "An electoral commission organises and supervises elections within its legally defined mandate.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "govt_tough_42",
    "originalChapter": 5,
    "chapterTitle": "Public Administration & Civil Service",
    "topic": "The Civil Service: Political Neutrality",
    "bookQuestionNum": 42,
    "text": "Which of the following is a traditional characteristic of the permanent civil service?",
    "options": {
      "A": "Political neutrality in the performance of official duties",
      "B": "Automatic replacement after every election",
      "C": "Direct control of the judiciary",
      "D": "Responsibility for selecting election winners"
    },
    "answer": "A",
    "explanation": "The civil service is expected to serve the government of the day professionally rather than operate as a party-political organisation.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "govt_tough_43",
    "originalChapter": 5,
    "chapterTitle": "Public Administration & Civil Service",
    "topic": "The Civil Service: Principle of Anonymity",
    "bookQuestionNum": 43,
    "text": "The principle of anonymity in the traditional civil service means that",
    "options": {
      "A": "public servants must never communicate with colleagues",
      "B": "ministers normally bear public political responsibility for policies administered by civil servants",
      "C": "civil servants are exempt from all laws",
      "D": "the civil service must not keep official records"
    },
    "answer": "B",
    "explanation": "Under the traditional convention, ministers take public responsibility for departmental policies while officials ordinarily work behind the scenes. Legal and administrative accountability still applies to civil servants.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "govt_tough_44",
    "originalChapter": 5,
    "chapterTitle": "Public Administration & Civil Service",
    "topic": "The Civil Service: Bureaucratic Red Tape",
    "bookQuestionNum": 44,
    "text": "Which situation best illustrates bureaucratic red tape?",
    "options": {
      "A": "Quick processing of a licence through a simplified online system",
      "B": "Delays caused by unnecessary procedures and excessive paperwork",
      "C": "Publication of clear administrative guidelines",
      "D": "Recruitment based on transparent merit criteria"
    },
    "answer": "B",
    "explanation": "Red tape refers to excessive or unnecessary administrative rules and procedures.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "govt_tough_45",
    "originalChapter": 5,
    "chapterTitle": "Public Administration & Civil Service",
    "topic": "Public Enterprises: Nature of Public Corporations",
    "bookQuestionNum": 45,
    "text": "A public corporation differs from a typical government department mainly because it",
    "options": {
      "A": "is always independent of government law",
      "B": "is established as a separate legal entity to perform specified public or commercial functions",
      "C": "has the constitutional power to make foreign policy",
      "D": "is necessarily owned by private individuals"
    },
    "answer": "B",
    "explanation": "Public corporations commonly have separate legal status and are established by law for specific purposes.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "govt_tough_46",
    "originalChapter": 5,
    "chapterTitle": "Public Administration & Civil Service",
    "topic": "Public Administration: Auditing & Accountability",
    "bookQuestionNum": 46,
    "text": "Which measure is most likely to improve accountability in public administration?",
    "options": {
      "A": "Removing all audit requirements",
      "B": "Keeping public expenditure permanently secret",
      "C": "Independent auditing and legislative scrutiny of public accounts",
      "D": "Allowing officials to approve their own spending without limits"
    },
    "answer": "C",
    "explanation": "Audits and legislative oversight help detect misuse of funds and require public bodies to account for their spending.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "govt_tough_47",
    "originalChapter": 7,
    "chapterTitle": "Pre-Colonial Political Systems in Nigeria",
    "topic": "Pre-Colonial Administration: Hausa-Fulani Emirate",
    "bookQuestionNum": 47,
    "text": "Which feature most clearly distinguished the traditional Hausa-Fulani emirate system from many pre-colonial Igbo communities?",
    "options": {
      "A": "The complete absence of political authority in the emirates",
      "B": "A relatively centralised political hierarchy headed by an emir",
      "C": "The absence of administrative officials in the emirates",
      "D": "The direct election of every emir by all residents"
    },
    "answer": "B",
    "explanation": "The emirate system had a central ruler and established administrative hierarchies, unlike the more decentralised systems found in many Igbo communities.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "govt_tough_48",
    "originalChapter": 7,
    "chapterTitle": "Pre-Colonial Political Systems in Nigeria",
    "topic": "Pre-Colonial Administration: Oyo Empire (Oyo Mesi)",
    "bookQuestionNum": 48,
    "text": "In the traditional Oyo political system, the Oyo Mesi served primarily as",
    "options": {
      "A": "an exclusively military force under British command",
      "B": "a council of senior chiefs that advised and could restrain the Alaafin",
      "C": "a foreign organisation responsible for collecting customs duties",
      "D": "a court created by the Nigerian independence constitution"
    },
    "answer": "B",
    "explanation": "The Oyo Mesi formed an important council in the Oyo Empire and helped limit the Alaafin's authority.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "govt_tough_49",
    "originalChapter": 7,
    "chapterTitle": "Pre-Colonial Political Systems in Nigeria",
    "topic": "Pre-Colonial Administration: Traditional Igbo Decentralised System",
    "bookQuestionNum": 49,
    "text": "Which statement best describes political organisation in many traditional Igbo communities before colonial rule?",
    "options": {
      "A": "All communities were ruled by one emperor.",
      "B": "Every village was governed directly by the Sokoto Caliphate.",
      "C": "Authority was often decentralised among village assemblies, lineage heads, age grades and other institutions.",
      "D": "A single hereditary king controlled all Igbo territory."
    },
    "answer": "C",
    "explanation": "Many Igbo communities had decentralised systems, though some communities had titled leaders or kingship institutions.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "govt_tough_50",
    "originalChapter": 7,
    "chapterTitle": "Pre-Colonial Political Systems in Nigeria",
    "topic": "Pre-Colonial Administration: Sokoto Caliphate",
    "bookQuestionNum": 50,
    "text": "The authority of the emir in the Sokoto Caliphate was historically connected to",
    "options": {
      "A": "the constitutional office of president of Nigeria",
      "B": "the Islamic political and administrative structure of the caliphate",
      "C": "the British House of Commons",
      "D": "the 1963 Republican Constitution"
    },
    "answer": "B",
    "explanation": "The emirate system developed within the political and religious framework of the Sokoto Caliphate.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "govt_tough_51",
    "originalChapter": 7,
    "chapterTitle": "Pre-Colonial Political Systems in Nigeria",
    "topic": "Pre-Colonial Administration: Features of Decentralised Systems",
    "bookQuestionNum": 51,
    "text": "Which of the following is a likely political advantage of a decentralised traditional system?",
    "options": {
      "A": "It guarantees the absence of disagreement.",
      "B": "It can encourage participation by community institutions and assemblies.",
      "C": "It makes all decisions by a single ruler automatically binding.",
      "D": "It eliminates the need for dispute settlement."
    },
    "answer": "B",
    "explanation": "Decentralised institutions can involve different community groups in decision-making, although the degree of participation varied between societies.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "govt_tough_52",
    "originalChapter": 8,
    "chapterTitle": "Colonial Administration in Nigeria",
    "topic": "Colonial Rule: 1914 Amalgamation under Lugard",
    "bookQuestionNum": 52,
    "text": "The amalgamation of Northern and Southern Nigeria in 1914 was carried out under the administration of",
    "options": {
      "A": "Lord Lugard",
      "B": "Sir Hugh Clifford",
      "C": "Sir Arthur Richards",
      "D": "Sir James Robertson"
    },
    "answer": "A",
    "explanation": "Frederick Lugard oversaw the amalgamation of Northern and Southern Nigeria in 1914.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "govt_tough_53",
    "originalChapter": 8,
    "chapterTitle": "Colonial Administration in Nigeria",
    "topic": "Indirect Rule: Northern Nigeria Emirate System",
    "bookQuestionNum": 53,
    "text": "One major reason the British employed indirect rule in Northern Nigeria was that",
    "options": {
      "A": "the region had no established political institutions",
      "B": "the emirate system provided existing authorities through which colonial officials could govern",
      "C": "the British had already granted the region independence",
      "D": "the region rejected all forms of centralised authority"
    },
    "answer": "B",
    "explanation": "The established emirate hierarchy made it easier for British officials to govern through recognised traditional rulers.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "govt_tough_54",
    "originalChapter": 8,
    "chapterTitle": "Colonial Administration in Nigeria",
    "topic": "Indirect Rule: Challenges in Eastern Nigeria (Igboland)",
    "bookQuestionNum": 54,
    "text": "Why was indirect rule generally more difficult to apply uniformly in many decentralised Igbo communities?",
    "options": {
      "A": "There were no communities in the region.",
      "B": "The British had abolished all taxation before colonisation.",
      "C": "Many communities lacked a single central traditional ruler through whom the British could govern.",
      "D": "All Igbo communities had elected regional presidents."
    },
    "answer": "C",
    "explanation": "Indirect rule depended heavily on recognised local authorities, which were less centralised in many Igbo communities.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "govt_tough_55",
    "originalChapter": 9,
    "chapterTitle": "Constitutional Developments in Colonial Nigeria",
    "topic": "Constitutional History: Clifford Constitution (1922) Elective Principle",
    "bookQuestionNum": 55,
    "text": "Which constitutional development is most closely associated with the Clifford Constitution of 1922?",
    "options": {
      "A": "Introduction of the presidential system",
      "B": "Introduction of an elective principle for a limited number of legislative seats",
      "C": "Establishment of universal adult suffrage throughout Nigeria",
      "D": "Creation of the 12-state federation"
    },
    "answer": "B",
    "explanation": "The Clifford Constitution introduced a limited elective principle, with elected seats in Lagos and Calabar.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "govt_tough_56",
    "originalChapter": 9,
    "chapterTitle": "Constitutional Developments in Colonial Nigeria",
    "topic": "Constitutional History: Richards Constitution (1946) Regionalism",
    "bookQuestionNum": 56,
    "text": "One major political effect of the Richards Constitution of 1946 was the",
    "options": {
      "A": "replacement of colonial rule with a sovereign Nigerian republic",
      "B": "introduction of a regional structure into constitutional arrangements",
      "C": "introduction of the 1979 presidential system",
      "D": "abolition of all regional institutions"
    },
    "answer": "B",
    "explanation": "The Richards Constitution strengthened regional arrangements and sought to accommodate Nigeria's regional diversity.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "govt_tough_57",
    "originalChapter": 9,
    "chapterTitle": "Constitutional Developments in Colonial Nigeria",
    "topic": "Constitutional History: Macpherson Constitution (1951) Consultation",
    "bookQuestionNum": 57,
    "text": "Which feature is particularly associated with the Macpherson Constitution of 1951?",
    "options": {
      "A": "It followed extensive consultation with Nigerians at different levels.",
      "B": "It established Nigeria as a republic.",
      "C": "It abolished regional governments.",
      "D": "It introduced the 1999 constitutional system."
    },
    "answer": "A",
    "explanation": "The Macpherson Constitution emerged from a broad consultative process involving local, regional and central discussions.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "govt_tough_58",
    "originalChapter": 9,
    "chapterTitle": "Constitutional Developments in Colonial Nigeria",
    "topic": "Constitutional History: Lyttelton Constitution (1954) Federalism",
    "bookQuestionNum": 58,
    "text": "The Lyttleton Constitution of 1954 is particularly important because it",
    "options": {
      "A": "created the Nigerian state for the first time",
      "B": "entrenched a federal structure of government",
      "C": "introduced military government",
      "D": "established the Fourth Republic"
    },
    "answer": "B",
    "explanation": "The 1954 constitutional settlement is a key landmark in the development of Nigerian federalism.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "govt_tough_59",
    "originalChapter": 9,
    "chapterTitle": "Nationalism in Nigeria",
    "topic": "Nationalism: Aims and Methods of Nationalist Movements",
    "bookQuestionNum": 59,
    "text": "The primary goal of Nigerian nationalist movements before independence was to",
    "options": {
      "A": "restore the British monarchy in Nigeria",
      "B": "secure greater self-government and eventually independence from colonial rule",
      "C": "abolish all Nigerian political organisations",
      "D": "transfer every traditional institution to foreign control"
    },
    "answer": "B",
    "explanation": "Nationalists used political organisations, newspapers, campaigns and constitutional engagement to push for self-government and independence.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "govt_tough_60",
    "originalChapter": 9,
    "chapterTitle": "Nationalism in Nigeria",
    "topic": "Nationalist Leaders: Herbert Macaulay & NNDP (1923)",
    "bookQuestionNum": 60,
    "text": "Which political figure is closely associated with the establishment of the Nigerian National Democratic Party in 1923?",
    "options": {
      "A": "Herbert Macaulay",
      "B": "Ahmadu Bello",
      "C": "Nnamdi Azikiwe alone",
      "D": "Obafemi Awolowo"
    },
    "answer": "A",
    "explanation": "Herbert Macaulay founded the Nigerian National Democratic Party in 1923, following the introduction of limited elective representation.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "govt_tough_61",
    "originalChapter": 9,
    "chapterTitle": "Nationalism in Nigeria",
    "topic": "Nationalist Parties: NCNC (1944)",
    "bookQuestionNum": 61,
    "text": "Which organisation was formed in 1944 as a broad nationalist movement and was initially associated with Herbert Macaulay and Nnamdi Azikiwe?",
    "options": {
      "A": "Northern People's Congress",
      "B": "National Council of Nigeria and the Cameroons",
      "C": "Action Group",
      "D": "Nigerian Labour Congress"
    },
    "answer": "B",
    "explanation": "The NCNC was formed in 1944 and became an important nationalist political organisation.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "govt_tough_62",
    "originalChapter": 10,
    "chapterTitle": "Post-Independence Constitutions & Political History",
    "topic": "Independence: 1 October 1960 Independence",
    "bookQuestionNum": 62,
    "text": "Nigeria became independent on",
    "options": {
      "A": "1 October 1954",
      "B": "1 October 1957",
      "C": "1 October 1960",
      "D": "1 October 1963"
    },
    "answer": "C",
    "explanation": "Nigeria gained independence from Britain on 1 October 1960.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "govt_tough_63",
    "originalChapter": 10,
    "chapterTitle": "Post-Independence Constitutions & Political History",
    "topic": "Constitutional History: 1960 Independence Constitution",
    "bookQuestionNum": 63,
    "text": "Under the 1960 Independence Constitution, Nigeria operated a",
    "options": {
      "A": "presidential system with an executive president",
      "B": "parliamentary system with a prime minister as head of government",
      "C": "military system under a supreme military council",
      "D": "confederal system without a central government"
    },
    "answer": "B",
    "explanation": "The 1960 Constitution retained a parliamentary arrangement, with the prime minister heading the federal government and the monarch represented by a governor-general.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "govt_tough_64",
    "originalChapter": 10,
    "chapterTitle": "Post-Independence Constitutions & Political History",
    "topic": "Constitutional History: 1963 Republican Constitution",
    "bookQuestionNum": 64,
    "text": "Which was a major constitutional effect of the 1963 Republican Constitution?",
    "options": {
      "A": "Nigeria became a republic with a Nigerian president as head of state.",
      "B": "Nigeria returned to direct British colonial rule.",
      "C": "Regional governments were abolished.",
      "D": "The position of prime minister was abolished immediately."
    },
    "answer": "A",
    "explanation": "The 1963 Constitution ended the formal connection with the British Crown as Nigeria's head of state, while retaining a parliamentary system.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "govt_tough_65",
    "originalChapter": 10,
    "chapterTitle": "Post-Independence Constitutions & Political History",
    "topic": "Constitutional History: 1979 Executive Presidential Constitution",
    "bookQuestionNum": 65,
    "text": "The 1979 Constitution is particularly significant because it",
    "options": {
      "A": "restored direct British rule",
      "B": "introduced a presidential system at the federal level",
      "C": "abolished the office of the National Assembly",
      "D": "made Nigeria a one-party state permanently"
    },
    "answer": "B",
    "explanation": "The 1979 Constitution established an executive presidency, separating the president's executive role from the legislature.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "govt_tough_66",
    "originalChapter": 10,
    "chapterTitle": "Post-Independence Constitutions & Political History",
    "topic": "Constitutional History: 1999 Constitution (Fourth Republic)",
    "bookQuestionNum": 66,
    "text": "Which statement about Nigeria's 1999 Constitution is correct?",
    "options": {
      "A": "It established the First Republic.",
      "B": "It provided the constitutional framework for the return to civilian democratic rule in 1999.",
      "C": "It created the Nigerian colony in 1914.",
      "D": "It abolished the federal structure."
    },
    "answer": "B",
    "explanation": "The 1999 Constitution became the legal foundation for the Fourth Republic, which began on 29 May 1999.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "govt_tough_67",
    "originalChapter": 10,
    "chapterTitle": "Post-Independence Constitutions & Political History",
    "topic": "Political Crises: June 12 1993 Election Annulment",
    "bookQuestionNum": 67,
    "text": "The annulment of the 12 June 1993 presidential election is strongly associated with the transition period under",
    "options": {
      "A": "Yakubu Gowon",
      "B": "Murtala Mohammed",
      "C": "Ibrahim Babangida",
      "D": "Abdulsalami Abubakar"
    },
    "answer": "C",
    "explanation": "The election took place under Babangida's military administration and was annulled by his government.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "govt_tough_68",
    "originalChapter": 10,
    "chapterTitle": "Post-Independence Constitutions & Political History",
    "topic": "Political History: Nigerian Civil War (1967-1970)",
    "bookQuestionNum": 68,
    "text": "The Nigerian Civil War lasted from",
    "options": {
      "A": "1960 to 1963",
      "B": "1964 to 1966",
      "C": "1967 to 1970",
      "D": "1975 to 1979"
    },
    "answer": "C",
    "explanation": "The war followed the declaration of Biafra in 1967 and ended in January 1970.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "govt_tough_69",
    "originalChapter": 10,
    "chapterTitle": "Post-Independence Constitutions & Political History",
    "topic": "Federalism: Creation of 12 States in 1967 by Gowon",
    "bookQuestionNum": 69,
    "text": "Which military ruler created twelve states in Nigeria in 1967?",
    "options": {
      "A": "Yakubu Gowon",
      "B": "Murtala Mohammed",
      "C": "Olusegun Obasanjo",
      "D": "Sani Abacha"
    },
    "answer": "A",
    "explanation": "Gowon created twelve states in May 1967, shortly before the Nigerian Civil War escalated.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "govt_tough_70",
    "originalChapter": 10,
    "chapterTitle": "Post-Independence Constitutions & Political History",
    "topic": "Federalism: Significance of State Creation",
    "bookQuestionNum": 70,
    "text": "The main constitutional significance of the creation of states in Nigeria has been to",
    "options": {
      "A": "abolish the federal structure completely",
      "B": "reorganise the federation and provide additional subnational units of government",
      "C": "transfer all legislative powers to local councils",
      "D": "eliminate the need for revenue allocation"
    },
    "answer": "B",
    "explanation": "State creation changes the composition of the federation and the distribution of administrative and political responsibilities.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "govt_tough_71",
    "originalChapter": 5,
    "chapterTitle": "Arms of Government: Legislature, Executive & Judiciary",
    "topic": "Federal Legislature: The National Assembly",
    "bookQuestionNum": 71,
    "text": "Which statement best describes the role of the National Assembly under the 1999 Constitution?",
    "options": {
      "A": "It exercises both legislative and judicial powers without limitation.",
      "B": "It is the federal legislature, comprising the Senate and House of Representatives.",
      "C": "It appoints all state governors directly.",
      "D": "It operates only during military rule."
    },
    "answer": "B",
    "explanation": "Nigeria's National Assembly is bicameral and consists of the Senate and the House of Representatives.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "govt_tough_72",
    "originalChapter": 5,
    "chapterTitle": "Arms of Government: Legislature, Executive & Judiciary",
    "topic": "Legislative Systems: Bicameralism",
    "bookQuestionNum": 72,
    "text": "Which of the following best describes bicameralism?",
    "options": {
      "A": "Government by two political parties only",
      "B": "A legislature consisting of two chambers",
      "C": "A judiciary divided into two political parties",
      "D": "An executive shared by two presidents"
    },
    "answer": "B",
    "explanation": "A bicameral legislature has two chambers, such as Nigeria's Senate and House of Representatives.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "govt_tough_73",
    "originalChapter": 4,
    "chapterTitle": "Nigerian Federalism",
    "topic": "Nigerian Federalism: Constitutional Division of Powers",
    "bookQuestionNum": 73,
    "text": "In Nigeria, the principle of federalism is most directly reflected in",
    "options": {
      "A": "the existence of constitutionally recognised federal and state governments",
      "B": "the absence of a written constitution",
      "C": "the concentration of every government function in local councils",
      "D": "the authority of political parties to override the constitution"
    },
    "answer": "A",
    "explanation": "Nigeria's constitution distributes governmental powers between the federation and its constituent states.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "govt_tough_74",
    "originalChapter": 4,
    "chapterTitle": "Nigerian Federalism",
    "topic": "Nigerian Federalism: Reasons for Adopting Federalism",
    "bookQuestionNum": 74,
    "text": "Which of the following is a major reason for adopting federalism in a diverse country?",
    "options": {
      "A": "To make regional differences legally impossible",
      "B": "To accommodate diversity through constitutionally divided powers",
      "C": "To prevent every state from participating in national affairs",
      "D": "To ensure that the central government controls every local decision"
    },
    "answer": "B",
    "explanation": "Federalism can accommodate different communities and interests by distributing authority across levels of government.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "govt_tough_75",
    "originalChapter": 10,
    "chapterTitle": "Revenue Allocation in Nigerian Federalism",
    "topic": "Fiscal Federalism: Revenue Allocation",
    "bookQuestionNum": 75,
    "text": "Revenue allocation in a federation refers primarily to the",
    "options": {
      "A": "appointment of judges to state courts",
      "B": "distribution of public revenue among levels of government or constituent units",
      "C": "selection of political party candidates",
      "D": "division of the national territory into electoral wards only"
    },
    "answer": "B",
    "explanation": "Revenue allocation determines how government income is shared among the federal, state and local levels, according to the applicable rules.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "govt_tough_76",
    "originalChapter": 10,
    "chapterTitle": "Revenue Allocation in Nigerian Federalism",
    "topic": "Fiscal Federalism: Derivation Principle",
    "bookQuestionNum": 76,
    "text": "Which of the following is commonly used as a principle in revenue allocation?",
    "options": {
      "A": "Derivation",
      "B": "Hereditary succession",
      "C": "Military rank",
      "D": "Party membership"
    },
    "answer": "A",
    "explanation": "The derivation principle considers the location or source of revenue generation when allocating revenue.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "govt_tough_77",
    "originalChapter": 10,
    "chapterTitle": "Revenue Allocation in Nigerian Federalism",
    "topic": "Fiscal Federalism: Principle of Need",
    "bookQuestionNum": 77,
    "text": "The principle of need in revenue allocation aims primarily to",
    "options": {
      "A": "reward only states that generate the most revenue",
      "B": "consider the relative needs and development requirements of constituent units",
      "C": "give all revenue exclusively to the federal government",
      "D": "ensure that only the capital city receives public funds"
    },
    "answer": "B",
    "explanation": "A needs-based approach takes account of factors such as service requirements and development disparities.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "govt_tough_78",
    "originalChapter": 11,
    "chapterTitle": "Local Government Administration in Nigeria",
    "topic": "Local Government: Constitutional Status in Nigeria",
    "bookQuestionNum": 78,
    "text": "Which statement best describes local government in Nigeria?",
    "options": {
      "A": "It is a level of government recognised within the constitutional structure of the federation.",
      "B": "It has unlimited sovereignty over foreign affairs.",
      "C": "It can independently amend the federal constitution.",
      "D": "It is the highest court in the country."
    },
    "answer": "A",
    "explanation": "Local government provides administration and services at the grassroots level within Nigeria's constitutional and statutory framework.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "govt_tough_79",
    "originalChapter": 11,
    "chapterTitle": "Local Government Administration in Nigeria",
    "topic": "Local Government: 1976 Nationwide Reform",
    "bookQuestionNum": 79,
    "text": "The 1976 local government reform in Nigeria is notable for its attempt to",
    "options": {
      "A": "abolish local government throughout the federation",
      "B": "establish a more uniform and recognised local government system",
      "C": "turn every local government into a sovereign state",
      "D": "place every traditional council above the federal government"
    },
    "answer": "B",
    "explanation": "The 1976 reform sought to give local government a clearer structure and a recognised role as a third tier of administration.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "govt_tough_80",
    "originalChapter": 11,
    "chapterTitle": "Accountability & Good Governance Institutions",
    "topic": "Ombudsman: Public Complaints Commission",
    "bookQuestionNum": 80,
    "text": "Which of the following is a key purpose of an ombudsman institution?",
    "options": {
      "A": "To command the armed forces during war",
      "B": "To investigate complaints of administrative injustice or maladministration",
      "C": "To organise political party primaries",
      "D": "To write the annual budget for every private company"
    },
    "answer": "B",
    "explanation": "An ombudsman investigates complaints about unfair or improper administrative conduct.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "govt_tough_81",
    "originalChapter": 11,
    "chapterTitle": "Accountability & Good Governance Institutions",
    "topic": "Good Governance: Anti-Corruption Institutions",
    "bookQuestionNum": 81,
    "text": "Anti-corruption institutions contribute to good governance primarily by",
    "options": {
      "A": "removing the need for courts",
      "B": "investigating and addressing corruption within their legal mandates",
      "C": "deciding election results without an electoral commission",
      "D": "allowing public officials to spend funds without audits"
    },
    "answer": "B",
    "explanation": "Anti-corruption bodies investigate, prevent or prosecute corruption as authorised by law.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "govt_tough_82",
    "originalChapter": 11,
    "chapterTitle": "Military Rule in Nigeria",
    "topic": "Military Rule: January 15 1966 Military Coup",
    "bookQuestionNum": 82,
    "text": "Which event marked the beginning of military rule at the federal level in Nigeria?",
    "options": {
      "A": "The 1914 amalgamation",
      "B": "The military coup of January 1966",
      "C": "The establishment of ECOWAS in 1975",
      "D": "The inauguration of the Fourth Republic in 1999"
    },
    "answer": "B",
    "explanation": "The coup of 15 January 1966 ended the First Republic's civilian government and brought military rule to the federal level.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "govt_tough_83",
    "originalChapter": 11,
    "chapterTitle": "Military Rule in Nigeria",
    "topic": "Military Rule: Institutional Features & Decrees",
    "bookQuestionNum": 83,
    "text": "A common institutional feature of military government in Nigeria was",
    "options": {
      "A": "the automatic supremacy of elected state legislatures over the military ruler",
      "B": "rule through military decrees and the suspension or modification of parts of the constitutional order",
      "C": "the absence of any central executive authority",
      "D": "the compulsory direct election of every military administrator"
    },
    "answer": "B",
    "explanation": "Military governments commonly governed through decrees and altered constitutional arrangements rather than normal civilian parliamentary processes.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "govt_tough_84",
    "originalChapter": 11,
    "chapterTitle": "Military Rule in Nigeria",
    "topic": "Democratic Transitions: 1975-1979 Transition Programme",
    "bookQuestionNum": 84,
    "text": "Which Nigerian leader initiated the transition programme that culminated in the restoration of civilian rule in 1979?",
    "options": {
      "A": "Yakubu Gowon",
      "B": "Murtala Mohammed",
      "C": "Ibrahim Babangida",
      "D": "Sani Abacha"
    },
    "answer": "B",
    "explanation": "Murtala Mohammed launched the transition programme in 1975; General Olusegun Obasanjo continued it and handed power to a civilian government in 1979.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "govt_tough_85",
    "originalChapter": 10,
    "chapterTitle": "Post-Independence Constitutions & Political History",
    "topic": "Democratic Transitions: Fourth Republic Inauguration (May 29 1999)",
    "bookQuestionNum": 85,
    "text": "Nigeria's Fourth Republic began on",
    "options": {
      "A": "1 October 1960",
      "B": "1 October 1963",
      "C": "29 May 1999",
      "D": "12 June 1993"
    },
    "answer": "C",
    "explanation": "Civilian democratic government was inaugurated on 29 May 1999 under the 1999 Constitution.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "govt_tough_86",
    "originalChapter": 11,
    "chapterTitle": "Nigerian Foreign Policy",
    "topic": "Foreign Policy: Africa as Centrepiece",
    "bookQuestionNum": 86,
    "text": "The idea that Africa should occupy a central position in Nigeria's foreign policy is known as",
    "options": {
      "A": "isolationism",
      "B": "Africa as the centrepiece",
      "C": "absolute neutrality on every issue",
      "D": "colonial dependency"
    },
    "answer": "B",
    "explanation": "Nigeria has traditionally treated African affairs, regional stability and African development as major priorities in its foreign policy.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "govt_tough_87",
    "originalChapter": 11,
    "chapterTitle": "Nigerian Foreign Policy",
    "topic": "Foreign Policy: Internal Determinants",
    "bookQuestionNum": 87,
    "text": "Which factor is most directly an internal determinant of Nigeria's foreign policy?",
    "options": {
      "A": "The political and economic interests of the Nigerian state",
      "B": "The voting rules of the United Nations alone",
      "C": "The constitution of another country",
      "D": "The decisions of a foreign legislature alone"
    },
    "answer": "A",
    "explanation": "Domestic political priorities, economic capacity, public opinion and national interests can shape foreign-policy choices.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "govt_tough_88",
    "originalChapter": 11,
    "chapterTitle": "Nigerian Foreign Policy",
    "topic": "Foreign Policy: International Peacekeeping Operations",
    "bookQuestionNum": 88,
    "text": "Nigeria's participation in peacekeeping operations is most directly related to its",
    "options": {
      "A": "foreign policy and international security commitments",
      "B": "authority to appoint the president of every African country",
      "C": "constitutional power to dissolve the United Nations",
      "D": "claim to govern all West African states"
    },
    "answer": "A",
    "explanation": "Peacekeeping can support regional stability, international cooperation and Nigeria's diplomatic objectives.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "govt_tough_89",
    "originalChapter": 11,
    "chapterTitle": "Diplomacy & International Relations",
    "topic": "Diplomacy: Peaceful Management of International Relations",
    "bookQuestionNum": 89,
    "text": "Which of the following best describes diplomacy?",
    "options": {
      "A": "The use of only military force to settle disputes",
      "B": "The management of relations between states through negotiation and other peaceful official methods",
      "C": "The removal of all ambassadors from foreign countries",
      "D": "The transfer of sovereignty to every international organisation"
    },
    "answer": "B",
    "explanation": "Diplomacy involves official communication, negotiation and representation in relations between states and other international actors.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "govt_tough_90",
    "originalChapter": 11,
    "chapterTitle": "International & Regional Organisations",
    "topic": "Regional Organisations: Organisation of African Unity (OAU 1963)",
    "bookQuestionNum": 90,
    "text": "The Organisation of African Unity (OAU) was established in",
    "options": {
      "A": "1945",
      "B": "1957",
      "C": "1963",
      "D": "1975"
    },
    "answer": "C",
    "explanation": "The OAU was founded in Addis Ababa, Ethiopia, in May 1963.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "govt_tough_91",
    "originalChapter": 11,
    "chapterTitle": "International & Regional Organisations",
    "topic": "Regional Organisations: African Union (AU 2002)",
    "bookQuestionNum": 91,
    "text": "The African Union (AU) formally launched its operations in 2002, succeeding the",
    "options": {
      "A": "Commonwealth of Nations",
      "B": "Organisation of African Unity",
      "C": "Economic Community of West African States",
      "D": "Organisation of Petroleum Exporting Countries"
    },
    "answer": "B",
    "explanation": "The AU replaced the OAU and developed a broader framework for African cooperation and integration.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "govt_tough_92",
    "originalChapter": 11,
    "chapterTitle": "International & Regional Organisations",
    "topic": "Regional Organisations: ECOWAS Headquarters (Abuja)",
    "bookQuestionNum": 92,
    "text": "The headquarters of the Economic Community of West African States (ECOWAS) is located in",
    "options": {
      "A": "Accra, Ghana",
      "B": "Lagos, Nigeria",
      "C": "Abuja, Nigeria",
      "D": "Dakar, Senegal"
    },
    "answer": "C",
    "explanation": "ECOWAS has its headquarters in Abuja, Nigeria.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "govt_tough_93",
    "originalChapter": 11,
    "chapterTitle": "International & Regional Organisations",
    "topic": "Regional Organisations: ECOWAS Establishment (1975 Treaty of Lagos)",
    "bookQuestionNum": 93,
    "text": "ECOWAS was established in",
    "options": {
      "A": "1963",
      "B": "1970",
      "C": "1975",
      "D": "1985"
    },
    "answer": "C",
    "explanation": "ECOWAS was established by the Treaty of Lagos in May 1975 to promote cooperation and integration in West Africa.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "govt_tough_94",
    "originalChapter": 11,
    "chapterTitle": "International Organisations: The United Nations",
    "topic": "The United Nations: Security Council Mandate",
    "bookQuestionNum": 94,
    "text": "Which of the following is a principal organ of the United Nations responsible for maintaining international peace and security?",
    "options": {
      "A": "Security Council",
      "B": "International Monetary Fund",
      "C": "International Court of Arbitration only",
      "D": "Commonwealth Secretariat"
    },
    "answer": "A",
    "explanation": "The UN Security Council has primary responsibility for maintaining international peace and security under the UN Charter.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "govt_tough_95",
    "originalChapter": 11,
    "chapterTitle": "International Organisations: The United Nations",
    "topic": "The United Nations: Permanent Members of the Security Council",
    "bookQuestionNum": 95,
    "text": "Which group correctly lists the five permanent members of the United Nations Security Council?",
    "options": {
      "A": "China, France, Germany, India and the United States",
      "B": "China, France, Russia, the United Kingdom and the United States",
      "C": "Brazil, China, Japan, Russia and the United States",
      "D": "France, Germany, Nigeria, Russia and the United Kingdom"
    },
    "answer": "B",
    "explanation": "These five states hold permanent seats and possess veto power on substantive Security Council decisions.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "govt_tough_96",
    "originalChapter": 11,
    "chapterTitle": "International Organisations: The United Nations",
    "topic": "The United Nations: International Court of Justice (ICJ)",
    "bookQuestionNum": 96,
    "text": "Which of the following is the principal judicial organ of the United Nations?",
    "options": {
      "A": "International Criminal Court",
      "B": "International Court of Justice",
      "C": "European Court of Human Rights",
      "D": "African Commission on Human and Peoples' Rights"
    },
    "answer": "B",
    "explanation": "The ICJ is the principal judicial organ of the UN and is based in The Hague, Netherlands.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "govt_tough_97",
    "originalChapter": 11,
    "chapterTitle": "International Organisations: The United Nations",
    "topic": "The United Nations: General Assembly Representation",
    "bookQuestionNum": 97,
    "text": "Which statement about the United Nations General Assembly is correct?",
    "options": {
      "A": "Only the five permanent Security Council members belong to it.",
      "B": "Each UN member state is represented in it.",
      "C": "It is a world government with unlimited power to legislate for all countries.",
      "D": "It directly commands every national army."
    },
    "answer": "B",
    "explanation": "All UN member states have representation in the General Assembly, generally with one vote each.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "govt_tough_98",
    "originalChapter": 11,
    "chapterTitle": "International & Regional Organisations",
    "topic": "International Commodity Organisations: OPEC Membership (1971)",
    "bookQuestionNum": 98,
    "text": "Nigeria became a member of the Organisation of Petroleum Exporting Countries (OPEC) in",
    "options": {
      "A": "1960",
      "B": "1963",
      "C": "1971",
      "D": "1979"
    },
    "answer": "C",
    "explanation": "Nigeria joined OPEC in 1971, eleven years after the organisation was founded in 1960.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "govt_tough_99",
    "originalChapter": 11,
    "chapterTitle": "International & Regional Organisations",
    "topic": "International Organisations: Commonwealth of Nations",
    "bookQuestionNum": 99,
    "text": "Which statement about membership of the Commonwealth of Nations is correct?",
    "options": {
      "A": "Every member must have the British monarch as its head of state.",
      "B": "Membership is restricted to countries that are still British colonies.",
      "C": "The organisation includes both republics and constitutional monarchies.",
      "D": "Only African countries may become members."
    },
    "answer": "C",
    "explanation": "Commonwealth membership does not require every member to share the same head of state or constitutional system.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "govt_tough_100",
    "originalChapter": 11,
    "chapterTitle": "International Organisations: Purpose & Functions",
    "topic": "International Organisations: Frameworks for Global Cooperation",
    "bookQuestionNum": 100,
    "text": "Which of the following best explains the purpose of international organisations?",
    "options": {
      "A": "To eliminate the sovereignty of all member states automatically",
      "B": "To provide frameworks for cooperation on shared political, economic, social and security concerns",
      "C": "To replace every national constitution with one universal constitution",
      "D": "To ensure that disputes between countries are always settled by war"
    },
    "answer": "B",
    "explanation": "International organisations enable states to cooperate, negotiate, coordinate policies and address shared problems.",
    "page": 10,
    "hasImage": false
  }
];
