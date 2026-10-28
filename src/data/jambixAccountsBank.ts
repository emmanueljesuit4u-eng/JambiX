/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX PRINCIPLES OF ACCOUNTS QUESTION BANK
 * 200 TOUGH JAMB UTME-STYLE QUESTIONS ACROSS ALL TOPICS (QUESTIONS 1–200)
 * Indexed directly from official syllabus specifications.
 * Total questions: 200
 */

export interface JambixAccountsItem {
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

export const JAMBIX_ACCOUNTS_ITEMS: JambixAccountsItem[] = [
  {
    "id": "acc_tough_1",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 1,
    "text": "Which statement best distinguishes bookkeeping from accounting?",
    "options": {
      "A": "Bookkeeping interprets financial information, while accounting only records transactions.",
      "B": "Bookkeeping records financial transactions, while accounting also classifies, summarises, interprets and communicates financial information.",
      "C": "Bookkeeping is concerned with government finances only.",
      "D": "Accounting does not require bookkeeping records."
    },
    "answer": "B",
    "explanation": "Bookkeeping is mainly concerned with systematic recording, while accounting includes the wider process of preparing and interpreting financial information.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "acc_tough_2",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 2,
    "text": "A business owner uses business money to pay for a personal holiday. Which accounting concept is most directly violated if the payment is recorded as a business expense?",
    "options": {
      "A": "Going concern",
      "B": "Business entity",
      "C": "Prudence",
      "D": "Consistency"
    },
    "answer": "B",
    "explanation": "The business and its owner are treated as separate accounting entities. Personal expenditure should generally be recorded as drawings, not a business expense.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "acc_tough_3",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 3,
    "text": "A business continues to value its machinery on the assumption that it will continue operating for the foreseeable future. Which concept supports this treatment?",
    "options": {
      "A": "Going concern",
      "B": "Money measurement",
      "C": "Historical cost",
      "D": "Realisation"
    },
    "answer": "A",
    "explanation": "The going-concern assumption presumes that the business will continue operating rather than close down in the immediate future.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "acc_tough_4",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 4,
    "text": "A company records an expense when it is incurred, even though the cash will be paid in the following accounting period. Which basis of accounting is being applied?",
    "options": {
      "A": "Cash basis",
      "B": "Accrual basis",
      "C": "Single-entry basis",
      "D": "Receipts basis"
    },
    "answer": "B",
    "explanation": "Under accrual accounting, expenses are recognised when incurred and income when earned, subject to the applicable accounting rules.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "acc_tough_5",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 5,
    "text": "Which accounting concept requires revenue earned during a period to be matched with the expenses incurred to generate it?",
    "options": {
      "A": "Matching",
      "B": "Business entity",
      "C": "Money measurement",
      "D": "Dual aspect"
    },
    "answer": "A",
    "explanation": "The matching concept relates expenses to the revenue they help generate in the same accounting period.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "acc_tough_6",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 6,
    "text": "The prudence concept requires an accountant to",
    "options": {
      "A": "overstate assets to attract investors",
      "B": "ignore all possible losses",
      "C": "exercise caution when making judgements under uncertainty",
      "D": "record every possible profit before it is earned"
    },
    "answer": "C",
    "explanation": "Prudence helps prevent assets and income from being overstated and liabilities and expenses from being understated.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "acc_tough_7",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 7,
    "text": "Which of the following is a limitation of accounting information?",
    "options": {
      "A": "It always records every employee's skill accurately.",
      "B": "It includes all non-financial information automatically.",
      "C": "Many human skills and other non-monetary factors cannot be reliably expressed in money.",
      "D": "It prevents all business losses."
    },
    "answer": "C",
    "explanation": "The money-measurement concept means that important factors that cannot be measured reliably in monetary terms may not appear in financial statements.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "acc_tough_8",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 8,
    "text": "Which user is most likely to use financial statements primarily to assess whether a business can repay a loan?",
    "options": {
      "A": "A customer buying a small item",
      "B": "A bank considering a loan application",
      "C": "A competitor studying advertising slogans only",
      "D": "A member of the public with no financial interest"
    },
    "answer": "B",
    "explanation": "Banks examine profitability, liquidity, cash flow and other financial information when assessing credit risk.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "acc_tough_9",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 9,
    "text": "Which branch of accounting focuses mainly on determining and controlling the costs of producing goods or services?",
    "options": {
      "A": "Cost accounting",
      "B": "Financial accounting",
      "C": "Forensic accounting",
      "D": "Government auditing"
    },
    "answer": "A",
    "explanation": "Cost accounting identifies, measures and analyses costs to support costing and cost control.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "acc_tough_10",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 10,
    "text": "Which quality makes accounting information useful for comparing the performance of a business across different periods?",
    "options": {
      "A": "Secrecy",
      "B": "Consistency",
      "C": "Randomness",
      "D": "Personal preference"
    },
    "answer": "B",
    "explanation": "Applying accounting policies consistently improves comparability over time, although policies may be changed when justified and properly disclosed.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "acc_tough_11",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 11,
    "text": "A business has assets of ₦850,000 and liabilities of ₦290,000. Calculate its capital.",
    "options": {
      "A": "₦560,000",
      "B": "₦1,140,000",
      "C": "₦290,000",
      "D": "₦850,000"
    },
    "answer": "A",
    "explanation": "Capital = Assets − Liabilities = ₦850,000 − ₦290,000 = ₦560,000.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "acc_tough_12",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 12,
    "text": "A proprietor starts a business with cash of ₦600,000 and equipment valued at ₦250,000. What is the opening capital?",
    "options": {
      "A": "₦350,000",
      "B": "₦600,000",
      "C": "₦850,000",
      "D": "₦250,000"
    },
    "answer": "C",
    "explanation": "Capital introduced = cash + equipment = ₦600,000 + ₦250,000 = ₦850,000.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "acc_tough_13",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 13,
    "text": "A business has opening capital of ₦400,000, makes a profit of ₦120,000 and the owner withdraws ₦35,000. What is closing capital, assuming no further changes?",
    "options": {
      "A": "₦285,000",
      "B": "₦365,000",
      "C": "₦485,000",
      "D": "₦555,000"
    },
    "answer": "D",
    "explanation": "Closing capital = ₦400,000 + ₦120,000 − ₦35,000 = ₦485,000.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "acc_tough_14",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 14,
    "text": "A trader purchases goods on credit for ₦90,000. Which entry is correct?",
    "options": {
      "A": "Debit creditor ₦90,000; credit purchases ₦90,000",
      "B": "Debit purchases ₦90,000; credit creditor ₦90,000",
      "C": "Debit cash ₦90,000; credit sales ₦90,000",
      "D": "Debit capital ₦90,000; credit creditor ₦90,000"
    },
    "answer": "B",
    "explanation": "Purchases increase, so purchases are debited. The amount owed to the supplier also increases, so the creditor is credited.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "acc_tough_15",
    "originalChapter": 1,
    "chapterTitle": "Nature, Concepts of Accounting & Double Entry",
    "topic": "Accounting Concepts, Bases & The Accounting Equation",
    "bookQuestionNum": 15,
    "text": "A business sells goods on credit for ₦75,000. Which entry correctly records the transaction?",
    "options": {
      "A": "Debit sales; credit debtor",
      "B": "Debit cash; credit sales",
      "C": "Debit debtor; credit sales",
      "D": "Debit purchases; credit debtor"
    },
    "answer": "C",
    "explanation": "The customer owes the business money, increasing receivables, while sales revenue increases.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "acc_tough_16",
    "originalChapter": 2,
    "chapterTitle": "Source Documents & Books of Original Entry",
    "topic": "Source Documents, Journals & Trial Balance Extraction",
    "bookQuestionNum": 16,
    "text": "Which source document is normally issued by a seller to a buyer when goods are sold on credit?",
    "options": {
      "A": "Invoice",
      "B": "Pay-in-slip",
      "C": "Cheque counterfoil only",
      "D": "Bank statement"
    },
    "answer": "A",
    "explanation": "A sales invoice records details of goods supplied and the amount payable.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "acc_tough_17",
    "originalChapter": 2,
    "chapterTitle": "Source Documents & Books of Original Entry",
    "topic": "Source Documents, Journals & Trial Balance Extraction",
    "bookQuestionNum": 17,
    "text": "Which source document is commonly issued when a customer returns goods to a supplier?",
    "options": {
      "A": "Receipt",
      "B": "Credit note",
      "C": "Debit card",
      "D": "Pay-in-slip"
    },
    "answer": "B",
    "explanation": "A credit note informs the customer that the amount owed has been reduced because of returns or another adjustment.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "acc_tough_18",
    "originalChapter": 2,
    "chapterTitle": "Source Documents & Books of Original Entry",
    "topic": "Source Documents, Journals & Trial Balance Extraction",
    "bookQuestionNum": 18,
    "text": "A business returns goods worth ₦18,000 to a supplier. Which account is normally debited under the periodic inventory system?",
    "options": {
      "A": "Returns inward",
      "B": "Sales",
      "C": "Returns outward",
      "D": "Purchases"
    },
    "answer": "C",
    "explanation": "Returns outward records purchases returned to suppliers and is normally debited when entered in the returns outward account. The supplier's account is credited.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "acc_tough_19",
    "originalChapter": 2,
    "chapterTitle": "Source Documents & Books of Original Entry",
    "topic": "Source Documents, Journals & Trial Balance Extraction",
    "bookQuestionNum": 19,
    "text": "Which book of original entry is used to record credit sales of goods in the ordinary course of business?",
    "options": {
      "A": "Sales journal",
      "B": "Purchases journal",
      "C": "Cash book",
      "D": "General journal in every case"
    },
    "answer": "A",
    "explanation": "The sales journal records credit sales of goods. Cash sales are recorded in the cash book.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "acc_tough_20",
    "originalChapter": 2,
    "chapterTitle": "Source Documents & Books of Original Entry",
    "topic": "Source Documents, Journals & Trial Balance Extraction",
    "bookQuestionNum": 20,
    "text": "The main purpose of a trial balance is to",
    "options": {
      "A": "prove that no error of any kind has occurred",
      "B": "list ledger balances and check the arithmetic equality of debits and credits",
      "C": "calculate cash sales only",
      "D": "replace the financial statements"
    },
    "answer": "B",
    "explanation": "A trial balance checks the equality of debit and credit balances but cannot reveal every accounting error.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "acc_tough_21",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 21,
    "text": "A trader pays rent of ₦24,000 by bank transfer. Which entry is correct?",
    "options": {
      "A": "Debit rent expense; credit bank",
      "B": "Debit bank; credit rent expense",
      "C": "Debit purchases; credit cash",
      "D": "Debit capital; credit rent expense"
    },
    "answer": "A",
    "explanation": "Rent expense increases and the bank asset decreases.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "acc_tough_22",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 22,
    "text": "A business buys furniture for ₦80,000 in cash. Which entry is correct?",
    "options": {
      "A": "Debit purchases; credit furniture",
      "B": "Debit furniture; credit cash",
      "C": "Debit cash; credit furniture",
      "D": "Debit furniture; credit sales"
    },
    "answer": "B",
    "explanation": "Furniture is a non-current asset that increases, while cash decreases.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "acc_tough_23",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 23,
    "text": "A proprietor takes goods costing ₦12,000 for personal use. Which treatment is appropriate?",
    "options": {
      "A": "Debit drawings; credit purchases",
      "B": "Debit purchases; credit drawings",
      "C": "Debit sales; credit cash",
      "D": "Debit debtor; credit drawings"
    },
    "answer": "A",
    "explanation": "Under the periodic inventory approach, goods withdrawn by the owner are recorded as drawings rather than business sales.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "acc_tough_24",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 24,
    "text": "A business receives ₦40,000 from a debtor whose account is ₦42,000, accepting the amount as full settlement. The correct entry includes",
    "options": {
      "A": "debit discount allowed ₦2,000",
      "B": "credit discount allowed ₦2,000",
      "C": "debit sales ₦40,000",
      "D": "credit purchases ₦42,000"
    },
    "answer": "A",
    "explanation": "The business receives ₦40,000 cash and allows a ₦2,000 discount. Debit cash ₦40,000 and discount allowed ₦2,000; credit the debtor ₦42,000.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "acc_tough_25",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 25,
    "text": "A supplier owed ₦50,000 accepts ₦48,000 in full settlement. The discount received is",
    "options": {
      "A": "₦48,000",
      "B": "₦50,000",
      "C": "₦2,000",
      "D": "₦98,000"
    },
    "answer": "C",
    "explanation": "Discount received = ₦50,000 − ₦48,000 = ₦2,000.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "acc_tough_26",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 26,
    "text": "A trial balance fails to agree by ₦8,000. The difference is placed temporarily in a suspense account while the error is investigated. This indicates that",
    "options": {
      "A": "the suspense account permanently replaces the ledger",
      "B": "the difference must be a fraud",
      "C": "an unexplained difference has been identified and needs investigation",
      "D": "the business has no liabilities"
    },
    "answer": "C",
    "explanation": "A suspense account temporarily accommodates an unexplained imbalance until the cause is found and corrected.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "acc_tough_27",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 27,
    "text": "Goods purchased for ₦15,000 are correctly entered in the purchases account but omitted from the supplier's account. This is",
    "options": {
      "A": "an error of complete omission",
      "B": "an error of commission",
      "C": "an error of partial omission",
      "D": "a compensating error"
    },
    "answer": "C",
    "explanation": "One side of the double entry has been recorded while the other side is missing.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "acc_tough_28",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 28,
    "text": "A payment for repairs is wrongly debited to the machinery account. The trial balance may still agree because this is",
    "options": {
      "A": "an error of principle",
      "B": "an error of complete omission",
      "C": "a transposition error in every case",
      "D": "an error that necessarily affects the trial balance totals"
    },
    "answer": "A",
    "explanation": "The amount is recorded on the wrong type of account, but equal debit and credit entries may still leave the trial balance balanced.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "acc_tough_29",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 29,
    "text": "A cheque payment of ₦6,200 is mistakenly entered in the cash book as ₦2,600, while the bank account entry is otherwise posted consistently from that incorrect figure. What is the original error?",
    "options": {
      "A": "Complete omission",
      "B": "Transposition of figures",
      "C": "Error of principle",
      "D": "Compensating error"
    },
    "answer": "B",
    "explanation": "The digits have been transposed. The difference between the correct and incorrect amounts is ₦3,600, and the corresponding ledger entries must be corrected.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "acc_tough_30",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 30,
    "text": "Which of the following errors will not normally be revealed by a trial balance?",
    "options": {
      "A": "Posting a debit without the corresponding credit",
      "B": "Adding the debit column incorrectly",
      "C": "Posting a purchase transaction to the wrong expense account while recording both sides equally",
      "D": "Omitting the credit entry of a transaction"
    },
    "answer": "C",
    "explanation": "An error of classification can leave debit and credit totals equal.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "acc_tough_31",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 31,
    "text": "Which professional quality is essential for an accountant preparing financial statements?",
    "options": {
      "A": "Concealing unfavourable information from all users",
      "B": "Integrity and objectivity",
      "C": "Accepting gifts in exchange for changing figures",
      "D": "Recording only transactions that improve reported profit"
    },
    "answer": "B",
    "explanation": "Accountants should act honestly, impartially and professionally when preparing financial information.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "acc_tough_32",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 32,
    "text": "An accountant discovers that the financial statements contain a material error. The most appropriate response is to",
    "options": {
      "A": "hide the error until the accounts are published",
      "B": "correct the error in accordance with applicable rules and report it to the appropriate persons",
      "C": "destroy all supporting documents",
      "D": "increase revenue to make the error less noticeable"
    },
    "answer": "B",
    "explanation": "Professional integrity requires errors to be addressed transparently rather than concealed.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "acc_tough_33",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 33,
    "text": "Which Nigerian institution is associated with regulating financial reporting standards and promoting compliance with applicable reporting requirements?",
    "options": {
      "A": "Financial Reporting Council of Nigeria",
      "B": "National Sports Commission",
      "C": "Federal Road Safety Corps",
      "D": "Nigerian Ports Authority"
    },
    "answer": "A",
    "explanation": "The FRCN has responsibilities relating to financial reporting standards and reporting quality.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "acc_tough_34",
    "originalChapter": 3,
    "chapterTitle": "The Ledger, Correction of Errors & Accounting Ethics",
    "topic": "Ledger Entries, Suspense Accounts & Professional Standards",
    "bookQuestionNum": 34,
    "text": "What is the primary function of an external auditor?",
    "options": {
      "A": "To prepare every transaction in the cash book",
      "B": "To independently examine financial statements and express an audit opinion",
      "C": "To guarantee that a business will never fail",
      "D": "To make all management decisions"
    },
    "answer": "B",
    "explanation": "An external auditor evaluates financial statements and supporting evidence to determine whether the statements are fairly presented under the applicable framework.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "acc_tough_35",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 35,
    "text": "A three-column cash book contains columns for",
    "options": {
      "A": "cash, bank and discount",
      "B": "sales, purchases and stock",
      "C": "capital, drawings and expenses",
      "D": "debtors, creditors and stock"
    },
    "answer": "A",
    "explanation": "The three-column cash book records cash, bank and discount transactions.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "acc_tough_36",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 36,
    "text": "A petty cash system operates on an imprest of ₦20,000. At the end of the period, petty cash remaining is ₦4,500. How much should the petty cashier receive to restore the imprest?",
    "options": {
      "A": "₦4,500",
      "B": "₦15,500",
      "C": "₦20,000",
      "D": "₦24,500"
    },
    "answer": "B",
    "explanation": "Expenditure = ₦20,000 − ₦4,500 = ₦15,500. Reimbursement of that amount restores the fund to ₦20,000.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "acc_tough_37",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 37,
    "text": "Under the imprest system, the amount reimbursed to a petty cashier normally equals",
    "options": {
      "A": "the original imprest plus the remaining cash",
      "B": "the petty cash expenses paid during the period",
      "C": "the owner's capital",
      "D": "the total sales of the business"
    },
    "answer": "B",
    "explanation": "Reimbursing the expenses restores the petty cash float to its authorised imprest amount.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "acc_tough_38",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 38,
    "text": "A business receives a cash discount of 5% on a creditor's balance of ₦40,000. How much cash is paid?",
    "options": {
      "A": "₦2,000",
      "B": "₦38,000",
      "C": "₦40,000",
      "D": "₦42,000"
    },
    "answer": "B",
    "explanation": "Discount = 5% × ₦40,000 = ₦2,000. Cash paid = ₦40,000 − ₦2,000 = ₦38,000.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "acc_tough_39",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 39,
    "text": "A business grants a 10% trade discount on goods listed at ₦60,000. What amount should be recorded as the sales value before any cash discount?",
    "options": {
      "A": "₦6,000",
      "B": "₦54,000",
      "C": "₦60,000",
      "D": "₦66,000"
    },
    "answer": "B",
    "explanation": "Trade discount = 10% × ₦60,000 = ₦6,000. Net invoice value = ₦54,000.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "acc_tough_40",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 40,
    "text": "Which statement about trade discount is correct?",
    "options": {
      "A": "It is normally recorded separately in the ledger as discount allowed.",
      "B": "It is deducted from the listed price before the transaction is recorded.",
      "C": "It is always granted only when cash is paid immediately.",
      "D": "It increases the invoice amount."
    },
    "answer": "B",
    "explanation": "Trade discount reduces the invoice price. Cash discount is generally recorded separately when earned or allowed.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "acc_tough_41",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 41,
    "text": "A business has a cash balance of ₦14,500 and a bank balance of ₦38,000. Its total cash and bank balances are",
    "options": {
      "A": "₦23,500",
      "B": "₦38,000",
      "C": "₦52,500",
      "D": "₦552,000"
    },
    "answer": "C",
    "explanation": "Total = ₦14,500 + ₦38,000 = ₦52,500.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "acc_tough_42",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 42,
    "text": "A cheque received from a debtor is entered in the bank column of the cash book. The entry normally includes",
    "options": {
      "A": "debit bank and credit debtor",
      "B": "debit debtor and credit bank",
      "C": "debit purchases and credit bank",
      "D": "debit drawings and credit sales"
    },
    "answer": "A",
    "explanation": "The bank balance increases, while the amount owed by the debtor decreases.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "acc_tough_43",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 43,
    "text": "A business pays a creditor ₦25,000 by cheque. Which entry is correct?",
    "options": {
      "A": "Debit bank; credit creditor",
      "B": "Debit creditor; credit bank",
      "C": "Debit purchases; credit capital",
      "D": "Debit sales; credit cash"
    },
    "answer": "B",
    "explanation": "The amount owed to the creditor decreases and the bank balance decreases.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "acc_tough_44",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 44,
    "text": "Which transaction is normally recorded in the contra column of a three-column cash book?",
    "options": {
      "A": "Credit sales to a customer",
      "B": "Purchase of goods on credit",
      "C": "Cash deposited into the business bank account",
      "D": "Depreciation on machinery"
    },
    "answer": "C",
    "explanation": "A transfer between the cash and bank columns is a contra entry because both sides of the transaction appear in the cash book.",
    "page": 11,
    "hasImage": false
  },
  {
    "id": "acc_tough_45",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 45,
    "text": "A business lodges ₦7,000 cash into its bank account. The cash book entry is",
    "options": {
      "A": "debit cash ₦7,000; credit bank ₦7,000",
      "B": "debit bank ₦7,000; credit cash ₦7,000",
      "C": "debit purchases ₦7,000; credit cash ₦7,000",
      "D": "debit capital ₦7,000; credit bank ₦7,000"
    },
    "answer": "B",
    "explanation": "The bank balance rises and the cash held outside the bank falls.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "acc_tough_46",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 46,
    "text": "A business has an imprest petty cash float of ₦12,000. Vouchers for the period total ₦8,750, and the actual cash remaining is ₦3,000. What is the cash shortage?",
    "options": {
      "A": "₦250",
      "B": "₦1,000",
      "C": "₦3,000",
      "D": "₦8,750"
    },
    "answer": "A",
    "explanation": "Expected cash remaining = ₦12,000 − ₦8,750 = ₦3,250. Actual cash remaining is ₦3,000, so cash shortage = ₦3,250 − ₦3,000 = ₦250.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "acc_tough_47",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 47,
    "text": "A business receives ₦15,000 from a debtor and grants a 2% cash discount. What amount is entered in the discount allowed column?",
    "options": {
      "A": "₦150",
      "B": "₦300",
      "C": "₦1,500",
      "D": "₦14,700"
    },
    "answer": "B",
    "explanation": "Discount allowed = 2% × ₦15,000 = ₦300, assuming ₦15,000 is the debtor's balance before discount.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "acc_tough_48",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 48,
    "text": "A business pays ₦29,400 to settle a creditor's account of ₦30,000. The discount received is",
    "options": {
      "A": "₦400",
      "B": "₦600",
      "C": "₦29,400",
      "D": "₦30,000"
    },
    "answer": "B",
    "explanation": "Discount received = ₦30,000 − ₦29,400 = ₦600.",
    "page": 12,
    "hasImage": false
  },
  {
    "id": "acc_tough_49",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 49,
    "text": "Which of the following is most appropriately recorded in the cash book?",
    "options": {
      "A": "Depreciation on furniture",
      "B": "Credit purchase of goods",
      "C": "Cash received from a customer",
      "D": "Closing stock valuation"
    },
    "answer": "C",
    "explanation": "The cash book records cash and bank receipts and payments, including money received from customers.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "acc_tough_50",
    "originalChapter": 4,
    "chapterTitle": "The Cash Book & Petty Cash System",
    "topic": "Cash Book, Imprest Petty Cash Float & Discounts",
    "bookQuestionNum": 50,
    "text": "A business starts with cash of ₦10,000, receives ₦35,000 in cash and pays cash expenses of ₦8,000. What is the closing cash balance?",
    "options": {
      "A": "₦17,000",
      "B": "₦27,000",
      "C": "₦37,000",
      "D": "₦53,000"
    },
    "answer": "C",
    "explanation": "Closing cash = ₦10,000 + ₦35,000 − ₦8,000 = ₦37,000.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "acc_tough_51",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 51,
    "text": "A bank statement shows a credit balance of ₦42,000. In the bank's records, this generally means",
    "options": {
      "A": "the customer owes the bank ₦42,000",
      "B": "the bank owes the customer ₦42,000",
      "C": "the customer's account is overdrawn by ₦42,000",
      "D": "the bank account must be closed"
    },
    "answer": "B",
    "explanation": "A bank statement is prepared from the bank's viewpoint; a credit balance usually represents the customer's deposit liability to the bank.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "acc_tough_52",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 52,
    "text": "A bank statement shows a debit balance from the customer's viewpoint as an overdraft. This means",
    "options": {
      "A": "the business has excess cash at the bank",
      "B": "the business owes the bank money",
      "C": "the bank owes the business money",
      "D": "the business has no bank transactions"
    },
    "answer": "B",
    "explanation": "An overdraft occurs when withdrawals exceed the available bank balance under the agreed banking arrangement.",
    "page": 13,
    "hasImage": false
  },
  {
    "id": "acc_tough_53",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 53,
    "text": "A bank statement balance differs from the cash book balance because of an unpresented cheque. Which statement is correct?",
    "options": {
      "A": "The business has recorded the cheque, but the bank has not yet processed it.",
      "B": "The bank has recorded the cheque, but the business has not.",
      "C": "The cheque must have been cancelled.",
      "D": "The cheque is necessarily fraudulent."
    },
    "answer": "A",
    "explanation": "An unpresented cheque has been issued and recorded by the business but has not yet been presented to the bank for payment.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "acc_tough_54",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 54,
    "text": "A business deposits a cheque that appears in its cash book, but the deposit is not yet shown on the bank statement. This is a",
    "options": {
      "A": "direct debit",
      "B": "deposit in transit",
      "C": "standing order",
      "D": "bank charge"
    },
    "answer": "B",
    "explanation": "The business has recorded the deposit, but the bank has not yet credited it to the account.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "acc_tough_55",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 55,
    "text": "A bank charges ₦700 that has not been entered in the cash book. When updating the cash book, the accountant should",
    "options": {
      "A": "increase the bank balance by ₦700",
      "B": "decrease the bank balance by ₦700",
      "C": "increase sales by ₦700",
      "D": "decrease capital by ₦700 directly"
    },
    "answer": "B",
    "explanation": "Bank charges reduce the business's bank balance and should be recorded as an expense.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "acc_tough_56",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 56,
    "text": "The cash book shows a favourable bank balance of ₦24,000. Unrecorded bank charges are ₦500, a standing order of ₦1,000 has not been recorded, and a direct credit from a customer of ₦4,000 is missing. What is the adjusted cash book balance?",
    "options": {
      "A": "₦18,500",
      "B": "₦22,500",
      "C": "₦26,500",
      "D": "₦29,500"
    },
    "answer": "C",
    "explanation": "Adjusted balance = ₦24,000 − ₦500 − ₦1,000 + ₦4,000 = ₦26,500.",
    "page": 14,
    "hasImage": false
  },
  {
    "id": "acc_tough_57",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 57,
    "text": "After adjusting the cash book, the balance is ₦26,500 favourable. There are unpresented cheques of ₦3,000 and deposits not yet credited by the bank of ₦5,000. What is the bank statement balance?",
    "options": {
      "A": "₦18,500 favourable",
      "B": "₦24,500 favourable",
      "C": "₦28,500 favourable",
      "D": "₦34,500 favourable"
    },
    "answer": "B",
    "explanation": "Bank statement balance = adjusted cash book balance − deposits in transit + unpresented cheques = ₦26,500 − ₦5,000 + ₦3,000 = ₦24,500.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "acc_tough_58",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 58,
    "text": "Which item normally requires adjustment in the cash book before preparing a bank reconciliation statement?",
    "options": {
      "A": "An unpresented cheque",
      "B": "A deposit in transit",
      "C": "Bank charges missing from the cash book",
      "D": "A cheque issued and correctly recorded in both records"
    },
    "answer": "C",
    "explanation": "Items not yet recorded in the cash book, such as bank charges, standing orders and direct credits, are entered before the reconciliation statement is prepared.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "acc_tough_59",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 59,
    "text": "The bank statement shows an overdraft of ₦9,000. A cheque of ₦2,000 paid to a supplier is not yet presented. Ignoring all other differences, the bank statement's overdraft remains",
    "options": {
      "A": "₦7,000",
      "B": "₦9,000",
      "C": "₦11,000",
      "D": "₦18,000"
    },
    "answer": "B",
    "explanation": "An unpresented cheque has already reduced the business's cash book balance but has not yet affected the bank statement. It therefore does not change the current bank statement balance.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "acc_tough_60",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 60,
    "text": "A cheque of ₦6,500 received from a customer is dishonoured by the bank but was previously entered as a bank receipt. What should the business do?",
    "options": {
      "A": "Debit the customer and credit the bank account",
      "B": "Debit the bank and credit the customer",
      "C": "Debit purchases and credit sales",
      "D": "Ignore the dishonour permanently"
    },
    "answer": "A",
    "explanation": "The bank balance is reduced by reversing the receipt, and the customer's debt is reinstated.",
    "page": 15,
    "hasImage": false
  },
  {
    "id": "acc_tough_61",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 61,
    "text": "A direct debit of ₦2,400 for insurance appears on the bank statement but has not been entered in the cash book. The correction is to",
    "options": {
      "A": "debit bank and credit insurance",
      "B": "debit insurance expense and credit bank",
      "C": "debit purchases and credit creditor",
      "D": "debit drawings and credit sales"
    },
    "answer": "B",
    "explanation": "The insurance payment is an expense and the bank balance decreases.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "acc_tough_62",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 62,
    "text": "Which of the following best describes a standing order?",
    "options": {
      "A": "A cheque that has been dishonoured",
      "B": "An instruction authorising regular payments of a fixed amount from a bank account",
      "C": "A payment made only in cash",
      "D": "A document used exclusively for credit sales"
    },
    "answer": "B",
    "explanation": "A standing order is a continuing instruction to make scheduled payments, usually for a fixed amount.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "acc_tough_63",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 63,
    "text": "A business's cash book shows an overdraft of ₦12,000. The bank statement includes an unrecorded direct credit of ₦3,000 and bank charges of ₦500. What is the adjusted overdraft?",
    "options": {
      "A": "₦8,500",
      "B": "₦9,500",
      "C": "₦12,500",
      "D": "₦15,500"
    },
    "answer": "B",
    "explanation": "The direct credit reduces the overdraft to ₦9,000, while the bank charges increase it to ₦9,500.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "acc_tough_64",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 64,
    "text": "Which instrument is generally used by a customer to instruct a bank to transfer funds to another account electronically?",
    "options": {
      "A": "Credit note",
      "B": "Electronic transfer instruction",
      "C": "Purchases journal",
      "D": "Debit note issued for returned goods"
    },
    "answer": "B",
    "explanation": "An electronic transfer instruction authorises the bank or payment platform to move funds between accounts.",
    "page": 16,
    "hasImage": false
  },
  {
    "id": "acc_tough_65",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 65,
    "text": "Which is a major advantage of electronic banking for accounting operations?",
    "options": {
      "A": "It eliminates the need for authorisation controls.",
      "B": "It guarantees that fraud can never occur.",
      "C": "It can speed up transactions and provide electronic records for reconciliation.",
      "D": "It removes the need to check bank statements."
    },
    "answer": "C",
    "explanation": "Electronic banking can improve processing speed and record availability, but it still requires security and reconciliation controls.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "acc_tough_66",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 66,
    "text": "A business's adjusted cash book balance is a favourable ₦18,000. It has unpresented cheques of ₦4,000 and deposits in transit of ₦6,000. Calculate the bank statement balance.",
    "options": {
      "A": "₦8,000 favourable",
      "B": "₦16,000 favourable",
      "C": "₦20,000 favourable",
      "D": "₦28,000 favourable"
    },
    "answer": "B",
    "explanation": "Bank statement balance = ₦18,000 − ₦6,000 + ₦4,000 = ₦16,000.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "acc_tough_67",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 67,
    "text": "Which item is most likely to appear on the bank statement before the business records it in the cash book?",
    "options": {
      "A": "Depreciation",
      "B": "A standing order paid by the bank",
      "C": "Closing stock",
      "D": "Goods returned to a supplier"
    },
    "answer": "B",
    "explanation": "The bank may execute the standing order before the business receives or records the statement.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "acc_tough_68",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 68,
    "text": "Why is bank reconciliation prepared regularly?",
    "options": {
      "A": "To make the cash book equal to the sales journal",
      "B": "To identify differences between the business's bank records and the bank statement",
      "C": "To replace the trial balance",
      "D": "To remove all credit sales"
    },
    "answer": "B",
    "explanation": "Reconciliation identifies timing differences and possible errors or omissions.",
    "page": 17,
    "hasImage": false
  },
  {
    "id": "acc_tough_69",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 69,
    "text": "A bank erroneously debits a business account with ₦1,800 belonging to another customer. What should the business do?",
    "options": {
      "A": "Record it as a business expense and close the matter.",
      "B": "Report the bank error and include it as an outstanding reconciling item until corrected.",
      "C": "Increase sales by ₦1,800.",
      "D": "Record it as drawings without investigation."
    },
    "answer": "B",
    "explanation": "The business should not treat another customer's payment as its own expense. The bank error must be investigated and corrected.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "acc_tough_70",
    "originalChapter": 4,
    "chapterTitle": "Bank Reconciliation Statements",
    "topic": "Bank Reconciliation, Adjusted Cash Book & Banking Operations",
    "bookQuestionNum": 70,
    "text": "The adjusted cash book is prepared mainly to",
    "options": {
      "A": "correct the business's bank records for items known from the bank statement but not yet recorded",
      "B": "record unpresented cheques a second time",
      "C": "replace the sales ledger",
      "D": "determine closing stock using FIFO"
    },
    "answer": "A",
    "explanation": "The adjusted cash book incorporates missing bank-related transactions before the reconciliation of remaining timing differences.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "acc_tough_71",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 71,
    "text": "A trader has sales of ₦500,000, sales returns of ₦20,000, opening stock of ₦60,000, purchases of ₦250,000, purchases returns of ₦10,000, carriage inwards of ₦15,000 and closing stock of ₦45,000. Calculate gross profit.",
    "options": {
      "A": "₦180,000",
      "B": "₦200,000",
      "C": "₦210,000",
      "D": "₦230,000"
    },
    "answer": "C",
    "explanation": "Net sales = ₦480,000. Cost of sales = ₦60,000 + ₦250,000 − ₦10,000 + ₦15,000 − ₦45,000 = ₦270,000. Gross profit = ₦480,000 − ₦270,000 = ₦210,000.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "acc_tough_72",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 72,
    "text": "A business has gross profit of ₦180,000 and operating expenses of ₦95,000. There is also a gain on disposal of equipment of ₦5,000. What is net profit before tax, ignoring other items?",
    "options": {
      "A": "₦80,000",
      "B": "₦85,000",
      "C": "₦90,000",
      "D": "₦280,000"
    },
    "answer": "C",
    "explanation": "Net profit = ₦180,000 − ₦95,000 + ₦5,000 = ₦90,000.",
    "page": 18,
    "hasImage": false
  },
  {
    "id": "acc_tough_73",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 73,
    "text": "Opening stock is ₦35,000, net purchases are ₦140,000 and closing stock is ₦25,000. What is cost of sales, assuming no other adjustments?",
    "options": {
      "A": "₦115,000",
      "B": "₦150,000",
      "C": "₦160,000",
      "D": "₦200,000"
    },
    "answer": "B",
    "explanation": "Cost of sales = opening stock + net purchases − closing stock = ₦35,000 + ₦140,000 − ₦25,000 = ₦150,000.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "acc_tough_74",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 74,
    "text": "A trader's net sales are ₦320,000 and cost of sales is ₦208,000. Calculate the gross profit margin.",
    "options": {
      "A": "25%",
      "B": "30%",
      "C": "35%",
      "D": "65%"
    },
    "answer": "C",
    "explanation": "Gross profit = ₦320,000 − ₦208,000 = ₦112,000. Gross profit margin = ₦112,000/₦320,000 × 100 = 35%.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "acc_tough_75",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 75,
    "text": "Rent paid during the year is ₦48,000. Opening accrued rent was ₦3,000 and closing accrued rent is ₦5,000. Calculate rent expense for the year.",
    "options": {
      "A": "₦46,000",
      "B": "₦48,000",
      "C": "₦50,000",
      "D": "₦56,000"
    },
    "answer": "C",
    "explanation": "Expense = cash paid + closing accrual − opening accrual = ₦48,000 + ₦5,000 − ₦3,000 = ₦50,000.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "acc_tough_76",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 76,
    "text": "Insurance paid during the year is ₦24,000. Opening prepaid insurance was ₦2,000 and closing prepaid insurance is ₦5,000. What is the insurance expense for the year?",
    "options": {
      "A": "₦21,000",
      "B": "₦24,000",
      "C": "₦27,000",
      "D": "₦31,000"
    },
    "answer": "A",
    "explanation": "Expense = amount paid + opening prepayment − closing prepayment = ₦24,000 + ₦2,000 − ₦5,000 = ₦21,000.",
    "page": 19,
    "hasImage": false
  },
  {
    "id": "acc_tough_77",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 77,
    "text": "A debtor owing ₦10,000 is confirmed to be unable to pay. What is the appropriate accounting treatment?",
    "options": {
      "A": "Increase sales by ₦10,000.",
      "B": "Write off the debt as a bad debt, subject to the applicable accounting treatment.",
      "C": "Increase capital by ₦10,000.",
      "D": "Record the amount as closing stock."
    },
    "answer": "B",
    "explanation": "A debt confirmed to be irrecoverable is written off as an expense and removed from receivables.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "acc_tough_78",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 78,
    "text": "Trade receivables total ₦100,000. The business maintains an allowance for doubtful debts of 5% of receivables. What allowance is required?",
    "options": {
      "A": "₦500",
      "B": "₦5,000",
      "C": "₦50,000",
      "D": "₦95,000"
    },
    "answer": "B",
    "explanation": "Allowance = 5% × ₦100,000 = ₦5,000.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "acc_tough_79",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 79,
    "text": "Existing allowance for doubtful debts is ₦3,000. The required closing allowance is ₦4,500. What amount is charged as additional expense?",
    "options": {
      "A": "₦1,500",
      "B": "₦3,000",
      "C": "₦4,500",
      "D": "₦7,500"
    },
    "answer": "A",
    "explanation": "Increase in allowance = ₦4,500 − ₦3,000 = ₦1,500.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "acc_tough_80",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 80,
    "text": "A machine costs ₦200,000, has an estimated residual value of ₦20,000 and a useful life of 6 years. Calculate annual straight-line depreciation.",
    "options": {
      "A": "₦20,000",
      "B": "₦30,000",
      "C": "₦33,333",
      "D": "₦36,667"
    },
    "answer": "B",
    "explanation": "Annual depreciation = (cost − residual value)/useful life = (₦200,000 − ₦20,000)/6 = ₦30,000.",
    "page": 20,
    "hasImage": false
  },
  {
    "id": "acc_tough_81",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 81,
    "text": "Equipment costs ₦100,000 and is depreciated at 20% per annum using the reducing-balance method. Calculate depreciation for the first year.",
    "options": {
      "A": "₦10,000",
      "B": "₦20,000",
      "C": "₦40,000",
      "D": "₦80,000"
    },
    "answer": "B",
    "explanation": "First-year depreciation = 20% × ₦100,000 = ₦20,000.",
    "page": 21,
    "hasImage": false
  },
  {
    "id": "acc_tough_82",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 82,
    "text": "Using the information in Question 81, what is the book value at the end of the second year?",
    "options": {
      "A": "₦40,000",
      "B": "₦60,000",
      "C": "₦64,000",
      "D": "₦80,000"
    },
    "answer": "C",
    "explanation": "Year 1 book value = ₦80,000. Year 2 depreciation = 20% × ₦80,000 = ₦16,000. Closing book value = ₦64,000.",
    "page": 21,
    "hasImage": false
  },
  {
    "id": "acc_tough_83",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 83,
    "text": "A business has non-current assets of ₦400,000, current assets of ₦180,000, current liabilities of ₦70,000 and long-term liabilities of ₦90,000. Calculate net assets.",
    "options": {
      "A": "₦330,000",
      "B": "₦420,000",
      "C": "₦490,000",
      "D": "₦600,000"
    },
    "answer": "B",
    "explanation": "Net assets = total assets − total liabilities = ₦580,000 − ₦160,000 = ₦420,000.",
    "page": 21,
    "hasImage": false
  },
  {
    "id": "acc_tough_84",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 84,
    "text": "Closing capital is ₦300,000. During the year, the proprietor introduced additional capital of ₦50,000 and made drawings of ₦40,000. Opening capital was ₦250,000. Calculate the profit or loss.",
    "options": {
      "A": "₦40,000 profit",
      "B": "₦40,000 loss",
      "C": "₦60,000 profit",
      "D": "₦90,000 profit"
    },
    "answer": "A",
    "explanation": "Profit = closing capital + drawings − additional capital − opening capital = ₦300,000 + ₦40,000 − ₦50,000 − ₦250,000 = ₦40,000.",
    "page": 21,
    "hasImage": false
  },
  {
    "id": "acc_tough_85",
    "originalChapter": 5,
    "chapterTitle": "Sole Trader Final Accounts & Year-end Adjustments",
    "topic": "Trading, Profit & Loss, Accruals, Prepayments & Depreciation",
    "bookQuestionNum": 85,
    "text": "A trader's closing stock was overstated by ₦12,000. What is the effect on gross profit for that period?",
    "options": {
      "A": "Gross profit is understated by ₦12,000.",
      "B": "Gross profit is overstated by ₦12,000.",
      "C": "Gross profit is overstated by ₦24,000.",
      "D": "Gross profit is unaffected."
    },
    "answer": "B",
    "explanation": "Closing stock is deducted when calculating cost of sales. Overstating it understates cost of sales and therefore overstates gross profit.",
    "page": 22,
    "hasImage": false
  },
  {
    "id": "acc_tough_86",
    "originalChapter": 5,
    "chapterTitle": "Inventory & Stock Valuation Methods",
    "topic": "Stock Valuation: FIFO, LIFO, Average Cost & Lower of Cost/NRV",
    "bookQuestionNum": 86,
    "text": "Under the FIFO method, inventory issued to production is valued using",
    "options": {
      "A": "the most recent purchase costs first",
      "B": "the earliest purchase costs first",
      "C": "the highest purchase cost available in every case",
      "D": "the market selling price"
    },
    "answer": "B",
    "explanation": "FIFO means first in, first out: the oldest inventory costs are assigned to issues first.",
    "page": 22,
    "hasImage": false
  },
  {
    "id": "acc_tough_87",
    "originalChapter": 5,
    "chapterTitle": "Inventory & Stock Valuation Methods",
    "topic": "Stock Valuation: FIFO, LIFO, Average Cost & Lower of Cost/NRV",
    "bookQuestionNum": 87,
    "text": "A business buys 100 units at ₦10 each and later buys 100 units at ₦14 each. It sells 120 units under FIFO. What is the value of the closing inventory?",
    "options": {
      "A": "₦800",
      "B": "₦1,120",
      "C": "₦1,400",
      "D": "₦1,600"
    },
    "answer": "B",
    "explanation": "FIFO issues the first 100 units at ₦10 and 20 units at ₦14. Closing stock is 80 units at ₦14 = ₦1,120.",
    "page": 22,
    "hasImage": false
  },
  {
    "id": "acc_tough_88",
    "originalChapter": 5,
    "chapterTitle": "Inventory & Stock Valuation Methods",
    "topic": "Stock Valuation: FIFO, LIFO, Average Cost & Lower of Cost/NRV",
    "bookQuestionNum": 88,
    "text": "Using the data in Question 87, what is the cost of issues under FIFO?",
    "options": {
      "A": "₦1,120",
      "B": "₦1,200",
      "C": "₦1,280",
      "D": "₦1,400"
    },
    "answer": "C",
    "explanation": "Cost of issues = 100 × ₦10 + 20 × ₦14 = ₦1,280.",
    "page": 22,
    "hasImage": false
  },
  {
    "id": "acc_tough_89",
    "originalChapter": 5,
    "chapterTitle": "Inventory & Stock Valuation Methods",
    "topic": "Stock Valuation: FIFO, LIFO, Average Cost & Lower of Cost/NRV",
    "bookQuestionNum": 89,
    "text": "A business buys 60 units at ₦8 each and 40 units at ₦11 each. Under LIFO, 50 units are issued. What is the cost of the issues?",
    "options": {
      "A": "₦400",
      "B": "₦440",
      "C": "₦470",
      "D": "₦520"
    },
    "answer": "D",
    "explanation": "Under LIFO, the latest receipt is issued first: 40 units at ₦11 (₦440) + 10 units at ₦8 (₦80) = ₦520.",
    "page": 23,
    "hasImage": false
  },
  {
    "id": "acc_tough_90",
    "originalChapter": 5,
    "chapterTitle": "Inventory & Stock Valuation Methods",
    "topic": "Stock Valuation: FIFO, LIFO, Average Cost & Lower of Cost/NRV",
    "bookQuestionNum": 90,
    "text": "A business has 20 units costing ₦5 each and 30 units costing ₦7 each. Using the simple average price per unit, what is the average cost?",
    "options": {
      "A": "₦5.00",
      "B": "₦6.00",
      "C": "₦6.20",
      "D": "₦7.00"
    },
    "answer": "B",
    "explanation": "Simple average price = (₦5 + ₦7)/2 = ₦6 per unit.",
    "page": 23,
    "hasImage": false
  },
  {
    "id": "acc_tough_91",
    "originalChapter": 5,
    "chapterTitle": "Inventory & Stock Valuation Methods",
    "topic": "Stock Valuation: FIFO, LIFO, Average Cost & Lower of Cost/NRV",
    "bookQuestionNum": 91,
    "text": "Using the data in Question 90, calculate the cost of 10 units issued using the simple average price method.",
    "options": {
      "A": "₦50",
      "B": "₦60",
      "C": "₦62",
      "D": "₦70"
    },
    "answer": "B",
    "explanation": "Cost of issues = 10 × ₦6 = ₦60.",
    "page": 23,
    "hasImage": false
  },
  {
    "id": "acc_tough_92",
    "originalChapter": 5,
    "chapterTitle": "Inventory & Stock Valuation Methods",
    "topic": "Stock Valuation: FIFO, LIFO, Average Cost & Lower of Cost/NRV",
    "bookQuestionNum": 92,
    "text": "Why is stock valuation important when preparing final accounts?",
    "options": {
      "A": "It affects cost of sales and profit.",
      "B": "It determines the number of employees.",
      "C": "It removes every liability.",
      "D": "It replaces the cash book."
    },
    "answer": "A",
    "explanation": "Closing stock is a current asset and is deducted when calculating cost of sales, so its valuation affects reported profit.",
    "page": 23,
    "hasImage": false
  },
  {
    "id": "acc_tough_93",
    "originalChapter": 5,
    "chapterTitle": "Inventory & Stock Valuation Methods",
    "topic": "Stock Valuation: FIFO, LIFO, Average Cost & Lower of Cost/NRV",
    "bookQuestionNum": 93,
    "text": "Under the conventional lower-of-cost-and-net-realisable-value rule, stock cost is ₦50,000 and net realisable value is ₦43,000. At what amount should the stock be reported?",
    "options": {
      "A": "₦7,000",
      "B": "₦43,000",
      "C": "₦50,000",
      "D": "₦93,000"
    },
    "answer": "B",
    "explanation": "Inventory is generally measured at the lower of cost and net realisable value.",
    "page": 24,
    "hasImage": false
  },
  {
    "id": "acc_tough_94",
    "originalChapter": 5,
    "chapterTitle": "Inventory & Stock Valuation Methods",
    "topic": "Stock Valuation: FIFO, LIFO, Average Cost & Lower of Cost/NRV",
    "bookQuestionNum": 94,
    "text": "A business has opening stock of ₦20,000, purchases of ₦100,000 and closing stock of ₦15,000. What is the cost of goods available for sale?",
    "options": {
      "A": "₦85,000",
      "B": "₦100,000",
      "C": "₦120,000",
      "D": "₦135,000"
    },
    "answer": "C",
    "explanation": "Cost of goods available for sale = opening stock + purchases = ₦20,000 + ₦100,000 = ₦120,000.",
    "page": 24,
    "hasImage": false
  },
  {
    "id": "acc_tough_95",
    "originalChapter": 5,
    "chapterTitle": "Inventory & Stock Valuation Methods",
    "topic": "Stock Valuation: FIFO, LIFO, Average Cost & Lower of Cost/NRV",
    "bookQuestionNum": 95,
    "text": "When prices are rising, which statement generally describes FIFO compared with LIFO?",
    "options": {
      "A": "FIFO tends to produce lower closing inventory values.",
      "B": "FIFO tends to produce higher closing inventory values.",
      "C": "FIFO always produces identical closing inventory values to LIFO.",
      "D": "FIFO does not use purchase costs."
    },
    "answer": "B",
    "explanation": "FIFO leaves the latest, generally higher costs in closing stock when purchase prices are rising. LIFO is included here as a syllabus method; it is not permitted for inventories under IFRS.",
    "page": 24,
    "hasImage": false
  },
  {
    "id": "acc_tough_96",
    "originalChapter": 3,
    "chapterTitle": "Control Accounts & Self-Balancing Ledgers",
    "topic": "Sales and Purchases Ledger Control Accounts",
    "bookQuestionNum": 96,
    "text": "A sales ledger control account has opening receivables of ₦25,000, credit sales of ₦120,000, cash received from debtors of ₦90,000, sales returns of ₦8,000 and bad debts of ₦2,000. What is the closing receivables balance?",
    "options": {
      "A": "₦35,000",
      "B": "₦45,000",
      "C": "₦55,000",
      "D": "₦65,000"
    },
    "answer": "B",
    "explanation": "Closing receivables = ₦25,000 + ₦120,000 − ₦90,000 − ₦8,000 − ₦2,000 = ₦45,000.",
    "page": 24,
    "hasImage": false
  },
  {
    "id": "acc_tough_97",
    "originalChapter": 3,
    "chapterTitle": "Control Accounts & Self-Balancing Ledgers",
    "topic": "Sales and Purchases Ledger Control Accounts",
    "bookQuestionNum": 97,
    "text": "A purchases ledger control account has opening payables of ₦30,000, credit purchases of ₦150,000, cash paid to suppliers of ₦110,000 and purchases returns of ₦10,000. What is the closing payables balance?",
    "options": {
      "A": "₦40,000",
      "B": "₦50,000",
      "C": "₦60,000",
      "D": "₦80,000"
    },
    "answer": "C",
    "explanation": "Closing payables = ₦30,000 + ₦150,000 − ₦110,000 − ₦10,000 = ₦60,000.",
    "page": 25,
    "hasImage": false
  },
  {
    "id": "acc_tough_98",
    "originalChapter": 3,
    "chapterTitle": "Control Accounts & Self-Balancing Ledgers",
    "topic": "Sales and Purchases Ledger Control Accounts",
    "bookQuestionNum": 98,
    "text": "What is the principal purpose of a control account?",
    "options": {
      "A": "To replace all individual customer accounts permanently",
      "B": "To provide an independent summary check on balances in a subsidiary ledger",
      "C": "To record only the owner's personal transactions",
      "D": "To calculate depreciation"
    },
    "answer": "B",
    "explanation": "Control accounts summarise transactions and can be reconciled with the individual accounts in subsidiary ledgers.",
    "page": 25,
    "hasImage": false
  },
  {
    "id": "acc_tough_99",
    "originalChapter": 3,
    "chapterTitle": "Control Accounts & Self-Balancing Ledgers",
    "topic": "Sales and Purchases Ledger Control Accounts",
    "bookQuestionNum": 99,
    "text": "Which transaction reduces the sales ledger control account balance?",
    "options": {
      "A": "Credit sales",
      "B": "Interest charged to debtors",
      "C": "Cash received from debtors",
      "D": "Opening receivables"
    },
    "answer": "C",
    "explanation": "Cash receipts reduce the amounts customers owe.",
    "page": 25,
    "hasImage": false
  },
  {
    "id": "acc_tough_100",
    "originalChapter": 3,
    "chapterTitle": "Control Accounts & Self-Balancing Ledgers",
    "topic": "Sales and Purchases Ledger Control Accounts",
    "bookQuestionNum": 100,
    "text": "Which transaction normally increases the purchases ledger control account balance?",
    "options": {
      "A": "Cash paid to creditors",
      "B": "Purchases returns",
      "C": "Credit purchases",
      "D": "Discounts received from suppliers"
    },
    "answer": "C",
    "explanation": "Credit purchases increase amounts owed to suppliers.",
    "page": 25,
    "hasImage": false
  },
  {
    "id": "acc_tough_101",
    "originalChapter": 3,
    "chapterTitle": "Control Accounts & Self-Balancing Ledgers",
    "topic": "Sales and Purchases Ledger Control Accounts",
    "bookQuestionNum": 101,
    "text": "A sales ledger control account shows ₦82,000, while the sum of the individual debtor balances is ₦79,000. What is the difference?",
    "options": {
      "A": "₦1,000",
      "B": "₦2,000",
      "C": "₦3,000",
      "D": "₦161,000"
    },
    "answer": "C",
    "explanation": "Difference = ₦82,000 − ₦79,000 = ₦3,000. The cause must be investigated.",
    "page": 26,
    "hasImage": false
  },
  {
    "id": "acc_tough_102",
    "originalChapter": 3,
    "chapterTitle": "Control Accounts & Self-Balancing Ledgers",
    "topic": "Sales and Purchases Ledger Control Accounts",
    "bookQuestionNum": 102,
    "text": "Which of the following is a likely cause of disagreement between a control account and its subsidiary ledger?",
    "options": {
      "A": "Correct posting of every transaction",
      "B": "An omission or posting error in one record",
      "C": "A correctly prepared financial statement",
      "D": "Consistent use of the same accounting period"
    },
    "answer": "B",
    "explanation": "Missing entries, wrong amounts and incorrect postings may create differences.",
    "page": 26,
    "hasImage": false
  },
  {
    "id": "acc_tough_103",
    "originalChapter": 3,
    "chapterTitle": "Control Accounts & Self-Balancing Ledgers",
    "topic": "Sales and Purchases Ledger Control Accounts",
    "bookQuestionNum": 103,
    "text": "Under a self-balancing ledger system, which statement is correct?",
    "options": {
      "A": "Each ledger is made capable of being balanced independently through the relevant control account arrangements.",
      "B": "No control accounts are used.",
      "C": "All personal accounts must be closed permanently.",
      "D": "Every transaction is recorded on only one side."
    },
    "answer": "A",
    "explanation": "Self-balancing ledgers use control accounts and reciprocal entries to allow each ledger to be balanced independently.",
    "page": 26,
    "hasImage": false
  },
  {
    "id": "acc_tough_104",
    "originalChapter": 3,
    "chapterTitle": "Control Accounts & Self-Balancing Ledgers",
    "topic": "Sales and Purchases Ledger Control Accounts",
    "bookQuestionNum": 104,
    "text": "Opening receivables are ₦40,000. Credit sales are ₦200,000, cash received from debtors is ₦160,000 and sales returns are ₦10,000. If there are no other adjustments, the closing receivables balance is",
    "options": {
      "A": "₦50,000",
      "B": "₦60,000",
      "C": "₦70,000",
      "D": "₦90,000"
    },
    "answer": "C",
    "explanation": "Closing receivables balance = Opening receivables (₦40,000) + Credit sales (₦200,000) − Cash received (₦160,000) − Sales returns (₦10,000) = ₦70,000.",
    "page": 26,
    "hasImage": false
  },
  {
    "id": "acc_tough_105",
    "originalChapter": 3,
    "chapterTitle": "Control Accounts & Self-Balancing Ledgers",
    "topic": "Sales and Purchases Ledger Control Accounts",
    "bookQuestionNum": 105,
    "text": "A control account is particularly useful because it",
    "options": {
      "A": "makes detailed subsidiary records unnecessary for all purposes",
      "B": "provides a summary that can help identify errors and confirm ledger totals",
      "C": "proves that fraud is impossible",
      "D": "determines the market price of inventory"
    },
    "answer": "B",
    "explanation": "Control accounts give an independent summary against which subsidiary ledger balances can be checked.",
    "page": 27,
    "hasImage": false
  },
  {
    "id": "acc_tough_106",
    "originalChapter": 6,
    "chapterTitle": "Incomplete Records & Single Entry System",
    "topic": "Single Entry, Capital Comparison & Total Accounts Reconstruction",
    "bookQuestionNum": 106,
    "text": "A trader does not maintain complete records. Opening capital is ₦100,000, closing capital is ₦150,000, additional capital introduced is ₦20,000 and drawings are ₦15,000. Calculate profit.",
    "options": {
      "A": "₦25,000",
      "B": "₦35,000",
      "C": "₦45,000",
      "D": "₦65,000"
    },
    "answer": "C",
    "explanation": "Profit = Closing capital (₦150,000) + Drawings (₦15,000) − Additional capital (₦20,000) − Opening capital (₦100,000) = ₦45,000.",
    "page": 27,
    "hasImage": false
  },
  {
    "id": "acc_tough_107",
    "originalChapter": 6,
    "chapterTitle": "Incomplete Records & Single Entry System",
    "topic": "Single Entry, Capital Comparison & Total Accounts Reconstruction",
    "bookQuestionNum": 107,
    "text": "Opening capital is ₦250,000, closing capital is ₦310,000, drawings are ₦40,000 and additional capital is ₦25,000. What is profit?",
    "options": {
      "A": "₦25,000",
      "B": "₦50,000",
      "C": "₦75,000",
      "D": "₦85,000"
    },
    "answer": "C",
    "explanation": "Profit = ₦310,000 + ₦40,000 − ₦25,000 − ₦250,000 = ₦75,000.",
    "page": 27,
    "hasImage": false
  },
  {
    "id": "acc_tough_108",
    "originalChapter": 6,
    "chapterTitle": "Incomplete Records & Single Entry System",
    "topic": "Single Entry, Capital Comparison & Total Accounts Reconstruction",
    "bookQuestionNum": 108,
    "text": "A trader's opening receivables are ₦20,000, closing receivables are ₦30,000, and cash received from customers is ₦100,000. Assuming there are no bad debts, discounts or returns, calculate credit sales.",
    "options": {
      "A": "₦90,000",
      "B": "₦100,000",
      "C": "₦110,000",
      "D": "₦150,000"
    },
    "answer": "C",
    "explanation": "Credit sales = cash received + closing receivables − opening receivables = ₦100,000 + ₦30,000 − ₦20,000 = ₦110,000.",
    "page": 27,
    "hasImage": false
  },
  {
    "id": "acc_tough_109",
    "originalChapter": 6,
    "chapterTitle": "Incomplete Records & Single Entry System",
    "topic": "Single Entry, Capital Comparison & Total Accounts Reconstruction",
    "bookQuestionNum": 109,
    "text": "Opening payables are ₦18,000, closing payables are ₦25,000 and cash paid to suppliers is ₦70,000. Assuming no returns or discounts, calculate credit purchases.",
    "options": {
      "A": "₦63,000",
      "B": "₦70,000",
      "C": "₦77,000",
      "D": "₦113,000"
    },
    "answer": "C",
    "explanation": "Credit purchases = cash paid + closing payables − opening payables = ₦70,000 + ₦25,000 − ₦18,000 = ₦77,000.",
    "page": 28,
    "hasImage": false
  },
  {
    "id": "acc_tough_110",
    "originalChapter": 6,
    "chapterTitle": "Incomplete Records & Single Entry System",
    "topic": "Single Entry, Capital Comparison & Total Accounts Reconstruction",
    "bookQuestionNum": 110,
    "text": "If total sales are ₦180,000 and cash sales are ₦55,000, credit sales are",
    "options": {
      "A": "₦55,000",
      "B": "₦125,000",
      "C": "₦180,000",
      "D": "₦235,000"
    },
    "answer": "B",
    "explanation": "Credit sales = total sales − cash sales = ₦180,000 − ₦55,000 = ₦125,000.",
    "page": 28,
    "hasImage": false
  },
  {
    "id": "acc_tough_111",
    "originalChapter": 6,
    "chapterTitle": "Incomplete Records & Single Entry System",
    "topic": "Single Entry, Capital Comparison & Total Accounts Reconstruction",
    "bookQuestionNum": 111,
    "text": "A trader's total expenses are ₦40,000, opening stock is ₦25,000, purchases are ₦95,000 and closing stock is ₦20,000. Sales are ₦170,000. Calculate net profit, assuming there are no other items or adjustments.",
    "options": {
      "A": "₦20,000",
      "B": "₦30,000",
      "C": "₦50,000",
      "D": "₦70,000"
    },
    "answer": "B",
    "explanation": "Cost of sales = ₦25,000 + ₦95,000 − ₦20,000 = ₦100,000. Gross profit = ₦170,000 − ₦100,000 = ₦70,000. Net profit = ₦70,000 − ₦40,000 = ₦30,000.",
    "page": 28,
    "hasImage": false
  },
  {
    "id": "acc_tough_112",
    "originalChapter": 6,
    "chapterTitle": "Incomplete Records & Single Entry System",
    "topic": "Single Entry, Capital Comparison & Total Accounts Reconstruction",
    "bookQuestionNum": 112,
    "text": "Which statement best describes the single-entry system?",
    "options": {
      "A": "Every transaction is recorded fully with equal debit and credit entries.",
      "B": "Records are incomplete and may not contain the full double-entry effects of transactions.",
      "C": "It is always more accurate than double entry.",
      "D": "It cannot be used by a small business."
    },
    "answer": "B",
    "explanation": "Single-entry records often capture some cash and personal-account transactions without maintaining complete double-entry records.",
    "page": 28,
    "hasImage": false
  },
  {
    "id": "acc_tough_113",
    "originalChapter": 6,
    "chapterTitle": "Incomplete Records & Single Entry System",
    "topic": "Single Entry, Capital Comparison & Total Accounts Reconstruction",
    "bookQuestionNum": 113,
    "text": "A trader's closing capital is ₦200,000 and opening capital is ₦160,000. During the year, drawings were ₦25,000 and additional capital was ₦10,000. Calculate profit.",
    "options": {
      "A": "₦35,000",
      "B": "₦45,000",
      "C": "₦55,000",
      "D": "₦75,000"
    },
    "answer": "C",
    "explanation": "Profit = Closing capital (₦200,000) + Drawings (₦25,000) − Additional capital (₦10,000) − Opening capital (₦160,000) = ₦55,000.",
    "page": 29,
    "hasImage": false
  },
  {
    "id": "acc_tough_114",
    "originalChapter": 6,
    "chapterTitle": "Incomplete Records & Single Entry System",
    "topic": "Single Entry, Capital Comparison & Total Accounts Reconstruction",
    "bookQuestionNum": 114,
    "text": "Which of the following is most useful when reconstructing credit purchases from incomplete records?",
    "options": {
      "A": "Closing bank charges alone",
      "B": "Opening and closing payables and cash paid to suppliers",
      "C": "The depreciation rate on office furniture",
      "D": "The business's advertising slogan"
    },
    "answer": "B",
    "explanation": "The payable balances and supplier payments help derive the amount of credit purchases.",
    "page": 29,
    "hasImage": false
  },
  {
    "id": "acc_tough_115",
    "originalChapter": 6,
    "chapterTitle": "Incomplete Records & Single Entry System",
    "topic": "Single Entry, Capital Comparison & Total Accounts Reconstruction",
    "bookQuestionNum": 115,
    "text": "A trader has sales of ₦250,000, cost of sales of ₦160,000 and expenses of ₦35,000. Calculate net profit.",
    "options": {
      "A": "₦55,000",
      "B": "₦90,000",
      "C": "₦125,000",
      "D": "₦195,000"
    },
    "answer": "A",
    "explanation": "Gross profit = ₦250,000 − ₦160,000 = ₦90,000. Net profit = ₦90,000 − ₦35,000 = ₦55,000.",
    "page": 29,
    "hasImage": false
  },
  {
    "id": "acc_tough_116",
    "originalChapter": 6,
    "chapterTitle": "Manufacturing Accounts & Costing",
    "topic": "Prime Cost, Factory Overheads & Cost of Goods Manufactured",
    "bookQuestionNum": 116,
    "text": "A manufacturing account is prepared primarily to determine",
    "options": {
      "A": "the cost of goods manufactured",
      "B": "the cash balance at the bank",
      "C": "the amount of dividends paid",
      "D": "the value of debtors only"
    },
    "answer": "A",
    "explanation": "A manufacturing account calculates production cost for the period.",
    "page": 29,
    "hasImage": false
  },
  {
    "id": "acc_tough_117",
    "originalChapter": 6,
    "chapterTitle": "Manufacturing Accounts & Costing",
    "topic": "Prime Cost, Factory Overheads & Cost of Goods Manufactured",
    "bookQuestionNum": 117,
    "text": "Prime cost consists of",
    "options": {
      "A": "direct materials, direct labour and direct expenses",
      "B": "office salaries, selling expenses and bank charges",
      "C": "opening stock, closing stock and bad debts",
      "D": "depreciation, advertising and directors' fees only"
    },
    "answer": "A",
    "explanation": "Prime cost combines the direct costs attributable to production.",
    "page": 30,
    "hasImage": false
  },
  {
    "id": "acc_tough_118",
    "originalChapter": 6,
    "chapterTitle": "Manufacturing Accounts & Costing",
    "topic": "Prime Cost, Factory Overheads & Cost of Goods Manufactured",
    "bookQuestionNum": 118,
    "text": "Direct materials issued are ₦80,000, direct labour is ₦50,000 and direct expenses are ₦10,000. Calculate prime cost.",
    "options": {
      "A": "₦120,000",
      "B": "₦130,000",
      "C": "₦140,000",
      "D": "₦150,000"
    },
    "answer": "C",
    "explanation": "Prime cost = ₦80,000 + ₦50,000 + ₦10,000 = ₦140,000.",
    "page": 30,
    "hasImage": false
  },
  {
    "id": "acc_tough_119",
    "originalChapter": 6,
    "chapterTitle": "Manufacturing Accounts & Costing",
    "topic": "Prime Cost, Factory Overheads & Cost of Goods Manufactured",
    "bookQuestionNum": 119,
    "text": "A factory incurs prime cost of ₦140,000, factory overheads of ₦35,000 and opening work in progress of ₦12,000. Closing work in progress is ₦17,000. Calculate factory cost before any other adjustments.",
    "options": {
      "A": "₦158,000",
      "B": "₦170,000",
      "C": "₦175,000",
      "D": "₦204,000"
    },
    "answer": "B",
    "explanation": "Factory cost = prime cost + factory overheads + opening work in progress − closing work in progress = ₦140,000 + ₦35,000 + ₦12,000 − ₦17,000 = ₦170,000.",
    "page": 30,
    "hasImage": false
  },
  {
    "id": "acc_tough_120",
    "originalChapter": 6,
    "chapterTitle": "Manufacturing Accounts & Costing",
    "topic": "Prime Cost, Factory Overheads & Cost of Goods Manufactured",
    "bookQuestionNum": 120,
    "text": "Raw materials available are ₦100,000, closing raw materials are ₦18,000 and indirect materials used are ₦7,000. What is direct materials consumed, assuming the ₦100,000 represents opening materials plus purchases?",
    "options": {
      "A": "₦75,000",
      "B": "₦82,000",
      "C": "₦89,000",
      "D": "₦107,000"
    },
    "answer": "A",
    "explanation": "Total materials consumed = ₦100,000 − ₦18,000 = ₦82,000. Direct materials consumed = Total materials consumed (₦82,000) − Indirect materials used (₦7,000) = ₦75,000.",
    "page": 30,
    "hasImage": false
  },
  {
    "id": "acc_tough_121",
    "originalChapter": 6,
    "chapterTitle": "Manufacturing Accounts & Costing",
    "topic": "Prime Cost, Factory Overheads & Cost of Goods Manufactured",
    "bookQuestionNum": 121,
    "text": "Which of the following is normally classified as a factory overhead?",
    "options": {
      "A": "Direct wages paid to a worker making a specific product",
      "B": "Raw materials directly incorporated into each product",
      "C": "Factory rent",
      "D": "A sales commission paid for selling finished goods"
    },
    "answer": "C",
    "explanation": "Factory rent is an indirect production cost and is classified as a factory overhead.",
    "page": 31,
    "hasImage": false
  },
  {
    "id": "acc_tough_122",
    "originalChapter": 6,
    "chapterTitle": "Manufacturing Accounts & Costing",
    "topic": "Prime Cost, Factory Overheads & Cost of Goods Manufactured",
    "bookQuestionNum": 122,
    "text": "Direct labour is ₦60,000, direct materials are ₦90,000, direct expenses are ₦5,000 and factory overhead is ₦25,000. Calculate total production cost, assuming no work-in-progress adjustment.",
    "options": {
      "A": "₦150,000",
      "B": "₦155,000",
      "C": "₦180,000",
      "D": "₦200,000"
    },
    "answer": "C",
    "explanation": "Total production cost = ₦90,000 + ₦60,000 + ₦5,000 + ₦25,000 = ₦180,000.",
    "page": 31,
    "hasImage": false
  },
  {
    "id": "acc_tough_123",
    "originalChapter": 6,
    "chapterTitle": "Manufacturing Accounts & Costing",
    "topic": "Prime Cost, Factory Overheads & Cost of Goods Manufactured",
    "bookQuestionNum": 123,
    "text": "Opening work in progress is ₦14,000, closing work in progress is ₦9,000 and cost before the work-in-progress adjustment is ₦120,000. Calculate cost of goods manufactured.",
    "options": {
      "A": "₦115,000",
      "B": "₦120,000",
      "C": "₦125,000",
      "D": "₦143,000"
    },
    "answer": "C",
    "explanation": "Cost of goods manufactured = ₦120,000 + ₦14,000 − ₦9,000 = ₦125,000.",
    "page": 31,
    "hasImage": false
  },
  {
    "id": "acc_tough_124",
    "originalChapter": 6,
    "chapterTitle": "Manufacturing Accounts & Costing",
    "topic": "Prime Cost, Factory Overheads & Cost of Goods Manufactured",
    "bookQuestionNum": 124,
    "text": "Which expense is most appropriately treated as a selling and distribution expense rather than a factory overhead?",
    "options": {
      "A": "Factory machine maintenance",
      "B": "Factory supervisor's wages",
      "C": "Delivery costs for finished goods to customers",
      "D": "Factory lighting"
    },
    "answer": "C",
    "explanation": "Delivery to customers is generally a distribution expense rather than a production overhead.",
    "page": 31,
    "hasImage": false
  },
  {
    "id": "acc_tough_125",
    "originalChapter": 6,
    "chapterTitle": "Manufacturing Accounts & Costing",
    "topic": "Prime Cost, Factory Overheads & Cost of Goods Manufactured",
    "bookQuestionNum": 125,
    "text": "If factory overheads are under-absorbed, this means",
    "options": {
      "A": "the overhead absorbed into production is greater than the actual overhead incurred",
      "B": "actual overhead incurred exceeds the overhead absorbed into production",
      "C": "no factory overhead was incurred",
      "D": "all production costs are direct costs"
    },
    "answer": "B",
    "explanation": "Under-absorption occurs when absorbed overhead is lower than actual overhead.",
    "page": 32,
    "hasImage": false
  },
  {
    "id": "acc_tough_126",
    "originalChapter": 6,
    "chapterTitle": "Accounts of Not-for-Profit Organisations",
    "topic": "Receipts & Payments, Income & Expenditure, Accumulated Fund",
    "bookQuestionNum": 126,
    "text": "Which financial statement is normally prepared by a not-for-profit organisation to determine its surplus or deficit for a period?",
    "options": {
      "A": "Income and expenditure account",
      "B": "Trading account only",
      "C": "Manufacturing account",
      "D": "Appropriation account"
    },
    "answer": "A",
    "explanation": "It compares income earned with expenses incurred to determine the surplus or deficit.",
    "page": 32,
    "hasImage": false
  },
  {
    "id": "acc_tough_127",
    "originalChapter": 6,
    "chapterTitle": "Accounts of Not-for-Profit Organisations",
    "topic": "Receipts & Payments, Income & Expenditure, Accumulated Fund",
    "bookQuestionNum": 127,
    "text": "A club receives subscriptions of ₦80,000 during the year. Opening subscriptions outstanding are ₦5,000, closing subscriptions outstanding are ₦8,000, opening subscriptions received in advance are ₦2,000 and closing subscriptions received in advance are ₦4,000. Calculate subscription income for the year.",
    "options": {
      "A": "₦77,000",
      "B": "₦81,000",
      "C": "₦85,000",
      "D": "₦91,000"
    },
    "answer": "B",
    "explanation": "Income = cash received + closing outstanding − opening outstanding + opening advance − closing advance = ₦80,000 + ₦8,000 − ₦5,000 + ₦2,000 − ₦4,000 = ₦81,000.",
    "page": 32,
    "hasImage": false
  },
  {
    "id": "acc_tough_128",
    "originalChapter": 6,
    "chapterTitle": "Accounts of Not-for-Profit Organisations",
    "topic": "Receipts & Payments, Income & Expenditure, Accumulated Fund",
    "bookQuestionNum": 128,
    "text": "A club's receipts exceed payments by ₦15,000. This difference is",
    "options": {
      "A": "automatically the surplus for the period",
      "B": "the cash surplus, which may differ from the accounting surplus",
      "C": "the club's capital expenditure",
      "D": "necessarily a bank overdraft"
    },
    "answer": "B",
    "explanation": "A receipts and payments account records cash movements. Accrual adjustments are required to calculate the accounting surplus.",
    "page": 32,
    "hasImage": false
  },
  {
    "id": "acc_tough_129",
    "originalChapter": 6,
    "chapterTitle": "Accounts of Not-for-Profit Organisations",
    "topic": "Receipts & Payments, Income & Expenditure, Accumulated Fund",
    "bookQuestionNum": 129,
    "text": "Which item is normally recorded in the receipts and payments account?",
    "options": {
      "A": "Depreciation",
      "B": "Accrued electricity expense not yet paid",
      "C": "Cash received from members",
      "D": "Bad debts not yet written off"
    },
    "answer": "C",
    "explanation": "The receipts and payments account records actual cash receipts and payments.",
    "page": 33,
    "hasImage": false
  },
  {
    "id": "acc_tough_130",
    "originalChapter": 6,
    "chapterTitle": "Accounts of Not-for-Profit Organisations",
    "topic": "Receipts & Payments, Income & Expenditure, Accumulated Fund",
    "bookQuestionNum": 130,
    "text": "A club begins the year with accumulated fund of ₦100,000, records a surplus of ₦25,000 and receives a capital donation of ₦40,000. Assuming the donation is to be capitalised, what is the closing accumulated fund before other adjustments?",
    "options": {
      "A": "₦85,000",
      "B": "₦125,000",
      "C": "₦140,000",
      "D": "₦165,000"
    },
    "answer": "D",
    "explanation": "Closing accumulated fund = ₦100,000 + ₦25,000 + ₦40,000 = ₦165,000, assuming the donation is treated as capital.",
    "page": 33,
    "hasImage": false
  },
  {
    "id": "acc_tough_131",
    "originalChapter": 6,
    "chapterTitle": "Accounts of Not-for-Profit Organisations",
    "topic": "Receipts & Payments, Income & Expenditure, Accumulated Fund",
    "bookQuestionNum": 131,
    "text": "A club buys sports equipment for ₦60,000. If it is a non-current asset rather than an expense under the relevant accounting policy, where should it be shown?",
    "options": {
      "A": "As a non-current asset in the statement of financial position",
      "B": "As a credit sale",
      "C": "As a liability in every case",
      "D": "In the sales returns journal"
    },
    "answer": "A",
    "explanation": "Equipment that meets the asset-recognition criteria is capitalised and depreciated as appropriate.",
    "page": 33,
    "hasImage": false
  },
  {
    "id": "acc_tough_132",
    "originalChapter": 6,
    "chapterTitle": "Accounts of Not-for-Profit Organisations",
    "topic": "Receipts & Payments, Income & Expenditure, Accumulated Fund",
    "bookQuestionNum": 132,
    "text": "A club's income is ₦150,000 and its expenses are ₦172,000. Calculate the result for the period.",
    "options": {
      "A": "₦22,000 surplus",
      "B": "₦22,000 deficit",
      "C": "₦150,000 surplus",
      "D": "₦322,000 deficit"
    },
    "answer": "B",
    "explanation": "Deficit = expenses − income = ₦172,000 − ₦150,000 = ₦22,000.",
    "page": 33,
    "hasImage": false
  },
  {
    "id": "acc_tough_133",
    "originalChapter": 6,
    "chapterTitle": "Departmental Accounts",
    "topic": "Departmental Profitability & Cost Apportionment",
    "bookQuestionNum": 133,
    "text": "A business has two departments. Department A earns sales of ₦200,000 and gross profit of ₦60,000. Department B earns sales of ₦300,000 and gross profit of ₦90,000. What is the overall gross profit margin?",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "50%"
    },
    "answer": "C",
    "explanation": "Total gross profit = ₦150,000. Total sales = ₦500,000. Gross profit margin = ₦150,000/₦500,000 × 100 = 30%.",
    "page": 34,
    "hasImage": false
  },
  {
    "id": "acc_tough_134",
    "originalChapter": 6,
    "chapterTitle": "Departmental Accounts",
    "topic": "Departmental Profitability & Cost Apportionment",
    "bookQuestionNum": 134,
    "text": "General expenses of ₦24,000 are allocated to departments in proportion to sales. Department A has sales of ₦100,000 and Department B has sales of ₦200,000. What expense should be allocated to Department B?",
    "options": {
      "A": "₦8,000",
      "B": "₦12,000",
      "C": "₦16,000",
      "D": "₦24,000"
    },
    "answer": "C",
    "explanation": "Department B has two-thirds of total sales. Allocation = 2/3 × ₦24,000 = ₦16,000.",
    "page": 34,
    "hasImage": false
  },
  {
    "id": "acc_tough_135",
    "originalChapter": 6,
    "chapterTitle": "Departmental Accounts",
    "topic": "Departmental Profitability & Cost Apportionment",
    "bookQuestionNum": 135,
    "text": "Department A has gross profit of ₦50,000 and expenses of ₦30,000. Department B has gross profit of ₦75,000 and expenses of ₦45,000. What is the combined departmental profit?",
    "options": {
      "A": "₦20,000",
      "B": "₦30,000",
      "C": "₦50,000",
      "D": "₦125,000"
    },
    "answer": "C",
    "explanation": "Department A profit = ₦20,000. Department B profit = ₦30,000. Combined profit = ₦50,000.",
    "page": 34,
    "hasImage": false
  },
  {
    "id": "acc_tough_136",
    "originalChapter": 6,
    "chapterTitle": "Departmental Accounts",
    "topic": "Departmental Profitability & Cost Apportionment",
    "bookQuestionNum": 136,
    "text": "When a common expense benefits two departments, a reasonable method of apportionment should be based on",
    "options": {
      "A": "an arbitrary percentage unrelated to the expense",
      "B": "an appropriate basis reflecting the benefit received",
      "C": "the names of the department managers",
      "D": "the alphabetical order of departments"
    },
    "answer": "B",
    "explanation": "Expenses should be allocated using a relevant basis, such as floor area for rent or staff numbers for certain personnel costs.",
    "page": 34,
    "hasImage": false
  },
  {
    "id": "acc_tough_137",
    "originalChapter": 6,
    "chapterTitle": "Departmental Accounts",
    "topic": "Departmental Profitability & Cost Apportionment",
    "bookQuestionNum": 137,
    "text": "Department A sells 100 units and Department B sells 150 units. Shared delivery costs are ₦25,000 and are allocated by units sold. How much is allocated to Department A?",
    "options": {
      "A": "₦5,000",
      "B": "₦10,000",
      "C": "₦15,000",
      "D": "₦25,000"
    },
    "answer": "B",
    "explanation": "Department A's share is 100/250 × ₦25,000 = ₦10,000.",
    "page": 35,
    "hasImage": false
  },
  {
    "id": "acc_tough_138",
    "originalChapter": 6,
    "chapterTitle": "Departmental Accounts",
    "topic": "Departmental Profitability & Cost Apportionment",
    "bookQuestionNum": 138,
    "text": "A department's sales are ₦240,000 and its cost of sales is ₦156,000. Calculate its gross profit.",
    "options": {
      "A": "₦84,000",
      "B": "₦96,000",
      "C": "₦156,000",
      "D": "₦396,000"
    },
    "answer": "A",
    "explanation": "Gross profit = sales − cost of sales = ₦240,000 − ₦156,000 = ₦84,000.",
    "page": 35,
    "hasImage": false
  },
  {
    "id": "acc_tough_139",
    "originalChapter": 6,
    "chapterTitle": "Departmental Accounts",
    "topic": "Departmental Profitability & Cost Apportionment",
    "bookQuestionNum": 139,
    "text": "Which is a major purpose of preparing departmental accounts?",
    "options": {
      "A": "To assess the separate performance and profitability of departments",
      "B": "To conceal differences in departmental performance",
      "C": "To replace all inventory records",
      "D": "To calculate national income"
    },
    "answer": "A",
    "explanation": "Departmental accounts help management compare performance and make decisions about resource allocation.",
    "page": 35,
    "hasImage": false
  },
  {
    "id": "acc_tough_140",
    "originalChapter": 6,
    "chapterTitle": "Departmental Accounts",
    "topic": "Departmental Profitability & Cost Apportionment",
    "bookQuestionNum": 140,
    "text": "A business has departmental profits of ₦35,000 and ₦45,000 before common expenses of ₦20,000. What is overall profit?",
    "options": {
      "A": "₦60,000",
      "B": "₦80,000",
      "C": "₦100,000",
      "D": "₦120,000"
    },
    "answer": "A",
    "explanation": "Overall profit = ₦35,000 + ₦45,000 − ₦20,000 = ₦60,000.",
    "page": 35,
    "hasImage": false
  },
  {
    "id": "acc_tough_141",
    "originalChapter": 6,
    "chapterTitle": "Branch Accounts",
    "topic": "Branch Performance, Transfers at Invoice Price & Unrealised Profit",
    "bookQuestionNum": 141,
    "text": "Branch accounting is useful mainly because it",
    "options": {
      "A": "provides information about the performance and assets of branches",
      "B": "removes the need to record sales",
      "C": "makes every branch a separate sovereign state",
      "D": "guarantees that branches cannot incur losses"
    },
    "answer": "A",
    "explanation": "Branch accounts help head office monitor branch transactions, inventory, cash and profitability.",
    "page": 36,
    "hasImage": false
  },
  {
    "id": "acc_tough_142",
    "originalChapter": 6,
    "chapterTitle": "Branch Accounts",
    "topic": "Branch Performance, Transfers at Invoice Price & Unrealised Profit",
    "bookQuestionNum": 142,
    "text": "A branch receives goods from head office costing ₦80,000 and sells them for ₦110,000. Ignoring expenses and unsold stock, calculate the gross profit.",
    "options": {
      "A": "₦20,000",
      "B": "₦30,000",
      "C": "₦80,000",
      "D": "₦190,000"
    },
    "answer": "B",
    "explanation": "Gross profit = sales − cost of goods sold = ₦110,000 − ₦80,000 = ₦30,000.",
    "page": 36,
    "hasImage": false
  },
  {
    "id": "acc_tough_143",
    "originalChapter": 6,
    "chapterTitle": "Branch Accounts",
    "topic": "Branch Performance, Transfers at Invoice Price & Unrealised Profit",
    "bookQuestionNum": 143,
    "text": "A branch has opening stock of ₦15,000, goods received from head office of ₦100,000, closing stock of ₦20,000 and sales of ₦130,000. Calculate gross profit.",
    "options": {
      "A": "₦25,000",
      "B": "₦35,000",
      "C": "₦45,000",
      "D": "₦55,000"
    },
    "answer": "B",
    "explanation": "Cost of sales = ₦15,000 + ₦100,000 − ₦20,000 = ₦95,000. Gross profit = ₦130,000 − ₦95,000 = ₦35,000.",
    "page": 36,
    "hasImage": false
  },
  {
    "id": "acc_tough_144",
    "originalChapter": 6,
    "chapterTitle": "Branch Accounts",
    "topic": "Branch Performance, Transfers at Invoice Price & Unrealised Profit",
    "bookQuestionNum": 144,
    "text": "A branch remits ₦60,000 to head office and retains cash of ₦5,000 from its receipts. Ignoring other cash transactions, total cash receipts available before remittance are",
    "options": {
      "A": "₦55,000",
      "B": "₦60,000",
      "C": "₦65,000",
      "D": "₦300,000"
    },
    "answer": "C",
    "explanation": "Cash available = remittance + cash retained = ₦60,000 + ₦5,000 = ₦65,000.",
    "page": 36,
    "hasImage": false
  },
  {
    "id": "acc_tough_145",
    "originalChapter": 6,
    "chapterTitle": "Branch Accounts",
    "topic": "Branch Performance, Transfers at Invoice Price & Unrealised Profit",
    "bookQuestionNum": 145,
    "text": "Goods sent to a branch at invoice price are valued above cost. If the branch still holds some of these goods at year-end, what adjustment may be required?",
    "options": {
      "A": "Eliminate all branch sales",
      "B": "Remove the unrealised profit included in closing stock",
      "C": "Increase cash by the invoice amount",
      "D": "Record the unrealised profit as a customer debt"
    },
    "answer": "B",
    "explanation": "Stock transferred above cost contains an unrealised internal profit that must be eliminated when preparing combined accounts.",
    "page": 37,
    "hasImage": false
  },
  {
    "id": "acc_tough_146",
    "originalChapter": 6,
    "chapterTitle": "Branch Accounts",
    "topic": "Branch Performance, Transfers at Invoice Price & Unrealised Profit",
    "bookQuestionNum": 146,
    "text": "Which item is most directly relevant when determining a branch's performance?",
    "options": {
      "A": "Branch sales, cost of sales and operating expenses",
      "B": "The personal savings of the branch manager",
      "C": "The national population alone",
      "D": "The number of pages in the ledger"
    },
    "answer": "A",
    "explanation": "These figures help determine branch gross and net profit.",
    "page": 37,
    "hasImage": false
  },
  {
    "id": "acc_tough_147",
    "originalChapter": 7,
    "chapterTitle": "Joint Venture Accounts",
    "topic": "Joint Venture Recording & Profit Apportionment",
    "bookQuestionNum": 147,
    "text": "A joint venture is best described as",
    "options": {
      "A": "a permanent partnership that must continue forever",
      "B": "a business arrangement in which parties cooperate in a specific undertaking and share its results according to agreement",
      "C": "a government tax",
      "D": "a form of bank reconciliation"
    },
    "answer": "B",
    "explanation": "A joint venture commonly relates to a specific project, transaction or undertaking.",
    "page": 37,
    "hasImage": false
  },
  {
    "id": "acc_tough_148",
    "originalChapter": 7,
    "chapterTitle": "Joint Venture Accounts",
    "topic": "Joint Venture Recording & Profit Apportionment",
    "bookQuestionNum": 148,
    "text": "Two venturers contribute ₦100,000 and ₦150,000 respectively. Their agreement is to share profit in the ratio of their contributions. If the venture earns ₦50,000, how much does the first venturer receive?",
    "options": {
      "A": "₦10,000",
      "B": "₦20,000",
      "C": "₦25,000",
      "D": "₦30,000"
    },
    "answer": "B",
    "explanation": "Contribution ratio = 100,000:150,000 = 2:3. First venturer's share = 2/5 × ₦50,000 = ₦20,000.",
    "page": 37,
    "hasImage": false
  },
  {
    "id": "acc_tough_149",
    "originalChapter": 7,
    "chapterTitle": "Joint Venture Accounts",
    "topic": "Joint Venture Recording & Profit Apportionment",
    "bookQuestionNum": 149,
    "text": "A joint venture records sales of ₦300,000, purchases of ₦180,000 and expenses of ₦30,000. There is no closing stock. Calculate the profit.",
    "options": {
      "A": "₦90,000",
      "B": "₦120,000",
      "C": "₦150,000",
      "D": "₦210,000"
    },
    "answer": "A",
    "explanation": "Profit = sales − purchases − expenses = ₦300,000 − ₦180,000 − ₦30,000 = ₦90,000.",
    "page": 38,
    "hasImage": false
  },
  {
    "id": "acc_tough_150",
    "originalChapter": 7,
    "chapterTitle": "Joint Venture Accounts",
    "topic": "Joint Venture Recording & Profit Apportionment",
    "bookQuestionNum": 150,
    "text": "Two venturers share profit in the ratio 3:2. If the total profit is ₦75,000, what is the second venturer's share?",
    "options": {
      "A": "₦15,000",
      "B": "₦30,000",
      "C": "₦35,000",
      "D": "₦45,000"
    },
    "answer": "B",
    "explanation": "The second venturer receives 2/5 × ₦75,000 = ₦30,000.",
    "page": 38,
    "hasImage": false
  },
  {
    "id": "acc_tough_151",
    "originalChapter": 7,
    "chapterTitle": "Joint Venture Accounts",
    "topic": "Joint Venture Recording & Profit Apportionment",
    "bookQuestionNum": 151,
    "text": "Which account may be used to determine the outcome of a joint venture when the parties keep separate books?",
    "options": {
      "A": "Joint venture account",
      "B": "Suspense account only",
      "C": "Purchases returns account only",
      "D": "Bank reconciliation statement"
    },
    "answer": "A",
    "explanation": "The joint venture account summarises relevant costs, sales and expenses to determine profit or loss.",
    "page": 38,
    "hasImage": false
  },
  {
    "id": "acc_tough_152",
    "originalChapter": 7,
    "chapterTitle": "Joint Venture Accounts",
    "topic": "Joint Venture Recording & Profit Apportionment",
    "bookQuestionNum": 152,
    "text": "One venturer supplies goods costing ₦40,000 and is reimbursed ₦44,000 from the venture. Ignoring other contributions and transactions, the difference is",
    "options": {
      "A": "₦4,000 profit to that venturer",
      "B": "₦4,000 loss to that venturer",
      "C": "₦40,000 profit",
      "D": "₦44,000 loss"
    },
    "answer": "A",
    "explanation": "The reimbursement exceeds the goods' stated cost by ₦4,000, although the final joint-venture profit depends on all transactions and the agreement.",
    "page": 38,
    "hasImage": false
  },
  {
    "id": "acc_tough_153",
    "originalChapter": 7,
    "chapterTitle": "Joint Venture Accounts",
    "topic": "Joint Venture Recording & Profit Apportionment",
    "bookQuestionNum": 153,
    "text": "Which feature distinguishes a joint venture from an ordinary ongoing partnership in many cases?",
    "options": {
      "A": "A joint venture is often created for a specific undertaking.",
      "B": "A joint venture can never earn profit.",
      "C": "A partnership can never have a written agreement.",
      "D": "A joint venture does not require any accounting records."
    },
    "answer": "A",
    "explanation": "Joint ventures are commonly limited to a defined project or transaction.",
    "page": 39,
    "hasImage": false
  },
  {
    "id": "acc_tough_154",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 154,
    "text": "Two partners share profits in the ratio 3:2. The partnership earns ₦100,000 before appropriation. If there are no salaries or interest on capital, what is the first partner's share?",
    "options": {
      "A": "₦20,000",
      "B": "₦40,000",
      "C": "₦50,000",
      "D": "₦60,000"
    },
    "answer": "D",
    "explanation": "Total ratio units = 5. First partner's share = 3/5 × ₦100,000 = ₦60,000.",
    "page": 39,
    "hasImage": false
  },
  {
    "id": "acc_tough_155",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 155,
    "text": "A partnership agreement provides an annual salary of ₦20,000 to Partner A and allows interest on capital of ₦10,000 to Partner B. Residual profit is shared equally. Net profit before appropriation is ₦80,000. How much profit is left for equal sharing after these appropriations?",
    "options": {
      "A": "₦30,000",
      "B": "₦50,000",
      "C": "₦60,000",
      "D": "₦80,000"
    },
    "answer": "B",
    "explanation": "Residual profit = ₦80,000 − ₦20,000 − ₦10,000 = ₦50,000.",
    "page": 39,
    "hasImage": false
  },
  {
    "id": "acc_tough_156",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 156,
    "text": "Using the facts in Question 155, how much of the residual profit does each partner receive if it is shared equally?",
    "options": {
      "A": "₦15,000",
      "B": "₦20,000",
      "C": "₦25,000",
      "D": "₦30,000"
    },
    "answer": "C",
    "explanation": "₦50,000 divided equally between two partners gives ₦25,000 each.",
    "page": 39,
    "hasImage": false
  },
  {
    "id": "acc_tough_157",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 157,
    "text": "Partner A's opening capital is ₦100,000 and Partner B's is ₦200,000. Interest on capital is 10% per annum. What is the total interest on capital for the year, assuming balances remain unchanged throughout the year?",
    "options": {
      "A": "₦10,000",
      "B": "₦20,000",
      "C": "₦30,000",
      "D": "₦300,000"
    },
    "answer": "C",
    "explanation": "Interest = 10% × ₦100,000 + 10% × ₦200,000 = ₦10,000 + ₦20,000 = ₦30,000.",
    "page": 40,
    "hasImage": false
  },
  {
    "id": "acc_tough_158",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 158,
    "text": "In the absence of a partnership agreement, a common rule under traditional partnership law is that partners share profits",
    "options": {
      "A": "in proportion to their ages",
      "B": "equally",
      "C": "according to the number of customers they introduced",
      "D": "only according to the amount of drawings"
    },
    "answer": "B",
    "explanation": "Under the traditional default rule used in introductory accounting, partners share profits equally unless their agreement states otherwise. Local law may affect the detailed rules.",
    "page": 40,
    "hasImage": false
  },
  {
    "id": "acc_tough_159",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 159,
    "text": "A partner withdraws ₦3,000 at the end of every month for personal use. What are the partner's total drawings for the year?",
    "options": {
      "A": "₦3,000",
      "B": "₦12,000",
      "C": "₦36,000",
      "D": "₦39,000"
    },
    "answer": "C",
    "explanation": "Annual drawings = ₦3,000 × 12 = ₦36,000.",
    "page": 40,
    "hasImage": false
  },
  {
    "id": "acc_tough_160",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 160,
    "text": "A partnership has net profit of ₦120,000. Partner A receives salary of ₦20,000 and Partner B receives interest on capital of ₦10,000. The remaining profit is shared 2:1. Calculate Partner A's total share.",
    "options": {
      "A": "₦30,000",
      "B": "₦60,000",
      "C": "₦70,000",
      "D": "₦80,000"
    },
    "answer": "C",
    "explanation": "Residual profit = ₦120,000 − ₦20,000 − ₦10,000 = ₦90,000. Partner A receives 2/3 × ₦90,000 = ₦60,000 plus salary of ₦20,000, giving ₦80,000.",
    "page": 40,
    "hasImage": false
  },
  {
    "id": "acc_tough_161",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 161,
    "text": "A partnership's profit is ₦90,000. Interest on capital totals ₦15,000 and partner salaries total ₦25,000. What is the residual profit available for sharing?",
    "options": {
      "A": "₦40,000",
      "B": "₦50,000",
      "C": "₦65,000",
      "D": "₦90,000"
    },
    "answer": "B",
    "explanation": "Residual profit = ₦90,000 − ₦15,000 − ₦25,000 = ₦50,000.",
    "page": 41,
    "hasImage": false
  },
  {
    "id": "acc_tough_162",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 162,
    "text": "A partnership admits a new partner who brings in cash of ₦80,000 as capital. The immediate effect is to",
    "options": {
      "A": "increase cash and total partners' capital by ₦80,000",
      "B": "decrease cash by ₦80,000",
      "C": "increase sales revenue by ₦80,000",
      "D": "record the amount automatically as a loan"
    },
    "answer": "A",
    "explanation": "Cash increases and the capital account of the new partner is credited.",
    "page": 41,
    "hasImage": false
  },
  {
    "id": "acc_tough_163",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 163,
    "text": "Goodwill arising on the admission of a partner is relevant because it",
    "options": {
      "A": "represents an assessment of the value of the firm's reputation and other non-physical advantages",
      "B": "is always a cash balance",
      "C": "is the same as closing inventory",
      "D": "is the amount of depreciation charged in a year"
    },
    "answer": "A",
    "explanation": "Goodwill is an intangible asset associated with benefits such as reputation, customer relationships and expected future earnings.",
    "page": 41,
    "hasImage": false
  },
  {
    "id": "acc_tough_164",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 164,
    "text": "A partner's current account normally records items such as",
    "options": {
      "A": "fixed assets only",
      "B": "salaries, interest on capital, drawings and profit shares where a fixed-capital system is used",
      "C": "sales invoices only",
      "D": "bank reconciliations only"
    },
    "answer": "B",
    "explanation": "In a fixed-capital system, fluctuating partner adjustments are generally recorded in current accounts.",
    "page": 41,
    "hasImage": false
  },
  {
    "id": "acc_tough_165",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 165,
    "text": "A partnership makes a loss of ₦30,000 shared equally between two partners. What is each partner's share of the loss?",
    "options": {
      "A": "₦10,000",
      "B": "₦15,000",
      "C": "₦30,000",
      "D": "₦60,000"
    },
    "answer": "B",
    "explanation": "Each partner bears ₦30,000 ÷ 2 = ₦15,000 of the loss.",
    "page": 42,
    "hasImage": false
  },
  {
    "id": "acc_tough_166",
    "originalChapter": 7,
    "chapterTitle": "Partnership Accounts",
    "topic": "Partnership Appropriation, Capital/Current Accounts & Admission",
    "bookQuestionNum": 166,
    "text": "Which statement best describes a partnership appropriation account?",
    "options": {
      "A": "It calculates how the partnership's net profit is distributed among partners under the partnership agreement.",
      "B": "It records only cash sales.",
      "C": "It determines the value of raw materials consumed.",
      "D": "It replaces the bank reconciliation statement."
    },
    "answer": "A",
    "explanation": "The appropriation account deals with items such as partner salaries, interest on capital and the allocation of residual profit.",
    "page": 42,
    "hasImage": false
  },
  {
    "id": "acc_tough_167",
    "originalChapter": 8,
    "chapterTitle": "Company Accounts",
    "topic": "Share Capital, Share Premium & Debentures",
    "bookQuestionNum": 167,
    "text": "Which document represents the division of a company's capital into units of ownership?",
    "options": {
      "A": "Share capital",
      "B": "Bank statement",
      "C": "Credit note",
      "D": "Petty cash voucher"
    },
    "answer": "A",
    "explanation": "A company can raise equity capital by issuing shares to shareholders.",
    "page": 42,
    "hasImage": false
  },
  {
    "id": "acc_tough_168",
    "originalChapter": 8,
    "chapterTitle": "Company Accounts",
    "topic": "Share Capital, Share Premium & Debentures",
    "bookQuestionNum": 168,
    "text": "A company issues 10,000 ordinary shares at ₦5 each. The total amount raised before issue costs is",
    "options": {
      "A": "₦5,000",
      "B": "₦10,000",
      "C": "₦50,000",
      "D": "₦500,000"
    },
    "answer": "C",
    "explanation": "Proceeds = 10,000 × ₦5 = ₦50,000.",
    "page": 42,
    "hasImage": false
  },
  {
    "id": "acc_tough_169",
    "originalChapter": 8,
    "chapterTitle": "Company Accounts",
    "topic": "Share Capital, Share Premium & Debentures",
    "bookQuestionNum": 169,
    "text": "A company issues 20,000 shares of ₦1 each at a premium of ₦0.50 per share. What is the total share premium?",
    "options": {
      "A": "₦10,000",
      "B": "₦20,000",
      "C": "₦30,000",
      "D": "₦40,000"
    },
    "answer": "A",
    "explanation": "Share premium = 20,000 × ₦0.50 = ₦10,000.",
    "page": 43,
    "hasImage": false
  },
  {
    "id": "acc_tough_170",
    "originalChapter": 8,
    "chapterTitle": "Company Accounts",
    "topic": "Share Capital, Share Premium & Debentures",
    "bookQuestionNum": 170,
    "text": "Which statement best distinguishes shares from debentures?",
    "options": {
      "A": "Shares represent ownership interests, while debentures generally represent debt.",
      "B": "Shares are always loans, while debentures represent ownership.",
      "C": "Both must always be repaid on the same terms.",
      "D": "Shareholders are always creditors with fixed interest."
    },
    "answer": "A",
    "explanation": "Shareholders own equity in the company, while debenture holders are generally lenders entitled to interest according to the terms of the debt.",
    "page": 43,
    "hasImage": false
  },
  {
    "id": "acc_tough_171",
    "originalChapter": 9,
    "chapterTitle": "Accounting Ratios & Financial Statement Analysis",
    "topic": "Liquidity, Profitability, Efficiency & Solvency Ratios",
    "bookQuestionNum": 171,
    "text": "A company has current assets of ₦240,000 and current liabilities of ₦120,000. What is its current ratio?",
    "options": {
      "A": "0.5:1",
      "B": "1:1",
      "C": "2:1",
      "D": "3:1"
    },
    "answer": "C",
    "explanation": "Current ratio = current assets/current liabilities = ₦240,000/₦120,000 = 2:1.",
    "page": 43,
    "hasImage": false
  },
  {
    "id": "acc_tough_172",
    "originalChapter": 9,
    "chapterTitle": "Accounting Ratios & Financial Statement Analysis",
    "topic": "Liquidity, Profitability, Efficiency & Solvency Ratios",
    "bookQuestionNum": 172,
    "text": "A company has current assets of ₦180,000, inventory of ₦60,000 and current liabilities of ₦80,000. Calculate the acid-test ratio.",
    "options": {
      "A": "0.75:1",
      "B": "1:1",
      "C": "1.5:1",
      "D": "2.25:1"
    },
    "answer": "C",
    "explanation": "Quick assets = Current assets (₦180,000) − Inventory (₦60,000) = ₦120,000. Acid-test ratio = Quick assets / Current liabilities = ₦120,000 / ₦80,000 = 1.5:1.",
    "page": 43,
    "hasImage": false
  },
  {
    "id": "acc_tough_173",
    "originalChapter": 9,
    "chapterTitle": "Accounting Ratios & Financial Statement Analysis",
    "topic": "Liquidity, Profitability, Efficiency & Solvency Ratios",
    "bookQuestionNum": 173,
    "text": "A company has cost of sales of ₦600,000 and average inventory of ₦100,000. Calculate inventory turnover.",
    "options": {
      "A": "3 times",
      "B": "4 times",
      "C": "6 times",
      "D": "10 times"
    },
    "answer": "C",
    "explanation": "Inventory turnover = cost of sales/average inventory = ₦600,000/₦100,000 = 6 times.",
    "page": 44,
    "hasImage": false
  },
  {
    "id": "acc_tough_174",
    "originalChapter": 9,
    "chapterTitle": "Accounting Ratios & Financial Statement Analysis",
    "topic": "Liquidity, Profitability, Efficiency & Solvency Ratios",
    "bookQuestionNum": 174,
    "text": "A company has sales of ₦800,000 and gross profit of ₦200,000. What is the gross profit margin?",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "40%",
      "D": "75%"
    },
    "answer": "B",
    "explanation": "Gross profit margin = ₦200,000/₦800,000 × 100 = 25%.",
    "page": 44,
    "hasImage": false
  },
  {
    "id": "acc_tough_175",
    "originalChapter": 9,
    "chapterTitle": "Accounting Ratios & Financial Statement Analysis",
    "topic": "Liquidity, Profitability, Efficiency & Solvency Ratios",
    "bookQuestionNum": 175,
    "text": "A company has net profit of ₦90,000 and sales of ₦600,000. Calculate the net profit margin.",
    "options": {
      "A": "10%",
      "B": "15%",
      "C": "20%",
      "D": "30%"
    },
    "answer": "B",
    "explanation": "Net profit margin = ₦90,000/₦600,000 × 100 = 15%.",
    "page": 44,
    "hasImage": false
  },
  {
    "id": "acc_tough_176",
    "originalChapter": 9,
    "chapterTitle": "Accounting Ratios & Financial Statement Analysis",
    "topic": "Liquidity, Profitability, Efficiency & Solvency Ratios",
    "bookQuestionNum": 176,
    "text": "A company's sales are ₦400,000 and cost of sales is ₦250,000. Calculate gross profit.",
    "options": {
      "A": "₦100,000",
      "B": "₦150,000",
      "C": "₦250,000",
      "D": "₦650,000"
    },
    "answer": "B",
    "explanation": "Gross profit = sales − cost of sales = ₦400,000 − ₦250,000 = ₦150,000.",
    "page": 44,
    "hasImage": false
  },
  {
    "id": "acc_tough_177",
    "originalChapter": 9,
    "chapterTitle": "Accounting Ratios & Financial Statement Analysis",
    "topic": "Liquidity, Profitability, Efficiency & Solvency Ratios",
    "bookQuestionNum": 177,
    "text": "Which reserve is generally created from accumulated profits rather than from the excess received over the nominal value of shares?",
    "options": {
      "A": "Revenue reserve",
      "B": "Share premium",
      "C": "Share capital",
      "D": "Debenture liability"
    },
    "answer": "A",
    "explanation": "Revenue reserves are generally built from retained profits. Share premium arises from issuing shares above their nominal value.",
    "page": 45,
    "hasImage": false
  },
  {
    "id": "acc_tough_178",
    "originalChapter": 9,
    "chapterTitle": "Accounting Ratios & Financial Statement Analysis",
    "topic": "Liquidity, Profitability, Efficiency & Solvency Ratios",
    "bookQuestionNum": 178,
    "text": "A company declares a dividend of ₦0.20 per share on 100,000 shares entitled to the dividend. What is the dividend declared?",
    "options": {
      "A": "₦2,000",
      "B": "₦20,000",
      "C": "₦50,000",
      "D": "₦200,000"
    },
    "answer": "B",
    "explanation": "Dividend = 100,000 × ₦0.20 = ₦20,000.",
    "page": 45,
    "hasImage": false
  },
  {
    "id": "acc_tough_179",
    "originalChapter": 9,
    "chapterTitle": "Accounting Ratios & Financial Statement Analysis",
    "topic": "Liquidity, Profitability, Efficiency & Solvency Ratios",
    "bookQuestionNum": 179,
    "text": "A company has assets of ₦1,000,000 and liabilities of ₦350,000. What is its net asset value?",
    "options": {
      "A": "₦350,000",
      "B": "₦650,000",
      "C": "₦1,000,000",
      "D": "₦1,350,000"
    },
    "answer": "B",
    "explanation": "Net assets = assets − liabilities = ₦1,000,000 − ₦350,000 = ₦650,000.",
    "page": 45,
    "hasImage": false
  },
  {
    "id": "acc_tough_180",
    "originalChapter": 9,
    "chapterTitle": "Accounting Ratios & Financial Statement Analysis",
    "topic": "Liquidity, Profitability, Efficiency & Solvency Ratios",
    "bookQuestionNum": 180,
    "text": "The primary purpose of financial ratio analysis is to",
    "options": {
      "A": "replace all financial statements",
      "B": "evaluate relationships between financial figures to assess performance or financial position",
      "C": "eliminate accounting estimates",
      "D": "guarantee future profits"
    },
    "answer": "B",
    "explanation": "Ratios help users analyse liquidity, profitability, efficiency and other aspects of financial performance.",
    "page": 45,
    "hasImage": false
  },
  {
    "id": "acc_tough_181",
    "originalChapter": 1,
    "chapterTitle": "Public Sector & Government Accounting",
    "topic": "Public Revenue, Expenditure, Treasury & Regulatory Frameworks",
    "bookQuestionNum": 181,
    "text": "Which of the following is a source of government revenue?",
    "options": {
      "A": "Personal income tax",
      "B": "Depreciation expense",
      "C": "Closing inventory",
      "D": "Bad debt written off by a private trader"
    },
    "answer": "A",
    "explanation": "Personal income tax is a public revenue source.",
    "page": 46,
    "hasImage": false
  },
  {
    "id": "acc_tough_182",
    "originalChapter": 1,
    "chapterTitle": "Public Sector & Government Accounting",
    "topic": "Public Revenue, Expenditure, Treasury & Regulatory Frameworks",
    "bookQuestionNum": 182,
    "text": "Which item is normally classified as capital expenditure by government?",
    "options": {
      "A": "Monthly salaries of civil servants",
      "B": "Routine office stationery",
      "C": "Construction of a new public hospital",
      "D": "Annual electricity bills"
    },
    "answer": "C",
    "explanation": "Capital expenditure creates or improves long-term public assets, whereas routine operating costs are recurrent expenditure.",
    "page": 46,
    "hasImage": false
  },
  {
    "id": "acc_tough_183",
    "originalChapter": 1,
    "chapterTitle": "Public Sector & Government Accounting",
    "topic": "Public Revenue, Expenditure, Treasury & Regulatory Frameworks",
    "bookQuestionNum": 183,
    "text": "Which of the following is recurrent expenditure?",
    "options": {
      "A": "Construction of a new bridge",
      "B": "Purchase of land for a government building",
      "C": "Routine salaries and wages",
      "D": "Major construction of a new dam"
    },
    "answer": "C",
    "explanation": "Recurrent expenditure covers regular operating costs, including salaries and ordinary administrative expenses.",
    "page": 46,
    "hasImage": false
  },
  {
    "id": "acc_tough_184",
    "originalChapter": 1,
    "chapterTitle": "Public Sector & Government Accounting",
    "topic": "Public Revenue, Expenditure, Treasury & Regulatory Frameworks",
    "bookQuestionNum": 184,
    "text": "Which official is primarily responsible for the accounting and financial reporting functions of the federal government treasury?",
    "options": {
      "A": "Accountant General of the Federation",
      "B": "Chief electoral officer",
      "C": "Speaker of the House of Representatives",
      "D": "Chairman of a private company"
    },
    "answer": "A",
    "explanation": "The Accountant General of the Federation has central treasury accounting and reporting responsibilities under the applicable public financial management framework.",
    "page": 46,
    "hasImage": false
  },
  {
    "id": "acc_tough_185",
    "originalChapter": 1,
    "chapterTitle": "Public Sector & Government Accounting",
    "topic": "Public Revenue, Expenditure, Treasury & Regulatory Frameworks",
    "bookQuestionNum": 185,
    "text": "The Auditor-General's central role is to",
    "options": {
      "A": "prepare every ministry's purchase orders",
      "B": "audit public accounts and report findings under the law",
      "C": "set the prices of all goods in Nigeria",
      "D": "appoint every traditional ruler"
    },
    "answer": "B",
    "explanation": "The Auditor-General independently examines public accounts and reports on issues such as regularity and financial control.",
    "page": 47,
    "hasImage": false
  },
  {
    "id": "acc_tough_186",
    "originalChapter": 1,
    "chapterTitle": "Public Sector & Government Accounting",
    "topic": "Public Revenue, Expenditure, Treasury & Regulatory Frameworks",
    "bookQuestionNum": 186,
    "text": "A warrant in government accounting is generally associated with",
    "options": {
      "A": "formal authority for expenditure or the release of funds under applicable procedures",
      "B": "an invoice issued to a private customer",
      "C": "a cheque returned unpaid by the bank",
      "D": "the depreciation of government buildings"
    },
    "answer": "A",
    "explanation": "Warrants form part of governmental expenditure control and authorisation procedures.",
    "page": 47,
    "hasImage": false
  },
  {
    "id": "acc_tough_187",
    "originalChapter": 1,
    "chapterTitle": "Public Sector & Government Accounting",
    "topic": "Public Revenue, Expenditure, Treasury & Regulatory Frameworks",
    "bookQuestionNum": 187,
    "text": "The Treasury Single Account (TSA) is primarily intended to",
    "options": {
      "A": "bring government cash balances under a unified treasury arrangement",
      "B": "abolish every government bank transaction",
      "C": "record only private-sector sales",
      "D": "replace the national budget"
    },
    "answer": "A",
    "explanation": "TSA arrangements improve oversight and management of public cash by consolidating government funds within a unified framework.",
    "page": 47,
    "hasImage": false
  },
  {
    "id": "acc_tough_188",
    "originalChapter": 1,
    "chapterTitle": "Public Sector & Government Accounting",
    "topic": "Public Revenue, Expenditure, Treasury & Regulatory Frameworks",
    "bookQuestionNum": 188,
    "text": "IPSAS stands for",
    "options": {
      "A": "International Public Sector Accounting Standards",
      "B": "Internal Private Sales Auditing System",
      "C": "International Personal Savings Account Scheme",
      "D": "Independent Public Stock Allocation Service"
    },
    "answer": "A",
    "explanation": "IPSAS provides accounting standards designed for public-sector financial reporting.",
    "page": 47,
    "hasImage": false
  },
  {
    "id": "acc_tough_189",
    "originalChapter": 1,
    "chapterTitle": "Public Sector & Government Accounting",
    "topic": "Public Revenue, Expenditure, Treasury & Regulatory Frameworks",
    "bookQuestionNum": 189,
    "text": "The Integrated Payroll and Personnel Information System (IPPIS) is associated mainly with",
    "options": {
      "A": "managing public-sector payroll and personnel information",
      "B": "calculating private retailers' closing stock",
      "C": "preparing partnership appropriation accounts",
      "D": "determining the market price of shares"
    },
    "answer": "A",
    "explanation": "IPPIS is designed to support payroll and personnel administration in covered public institutions.",
    "page": 48,
    "hasImage": false
  },
  {
    "id": "acc_tough_190",
    "originalChapter": 1,
    "chapterTitle": "Public Sector & Government Accounting",
    "topic": "Public Revenue, Expenditure, Treasury & Regulatory Frameworks",
    "bookQuestionNum": 190,
    "text": "Which statement best distinguishes cash-basis from accrual-basis public accounting?",
    "options": {
      "A": "Cash basis records only transactions involving foreign currencies.",
      "B": "Cash basis generally records receipts and payments when cash moves, while accrual basis recognises income and expenses when earned or incurred.",
      "C": "Accrual basis ignores liabilities.",
      "D": "Cash basis records all non-cash expenses automatically."
    },
    "answer": "B",
    "explanation": "The two bases differ mainly in the timing of recognising transactions.",
    "page": 48,
    "hasImage": false
  },
  {
    "id": "acc_tough_191",
    "originalChapter": 1,
    "chapterTitle": "Computerised Accounting & Emerging Technologies",
    "topic": "IT in Accounting: Controls, Audit Trail, Cloud & AI/Blockchain",
    "bookQuestionNum": 191,
    "text": "Which is a major advantage of a computerised accounting system?",
    "options": {
      "A": "It makes unauthorised access impossible.",
      "B": "It can process transactions quickly and generate reports efficiently.",
      "C": "It removes the need for backups.",
      "D": "It eliminates every possibility of data entry error."
    },
    "answer": "B",
    "explanation": "Computerised systems can improve speed and reporting, but controls are still needed to prevent errors and unauthorised access.",
    "page": 48,
    "hasImage": false
  },
  {
    "id": "acc_tough_192",
    "originalChapter": 1,
    "chapterTitle": "Computerised Accounting & Emerging Technologies",
    "topic": "IT in Accounting: Controls, Audit Trail, Cloud & AI/Blockchain",
    "bookQuestionNum": 192,
    "text": "Which control is most useful for preventing unauthorised users from accessing sensitive accounting records?",
    "options": {
      "A": "Shared passwords",
      "B": "Access controls and user authentication",
      "C": "Disabling all audit trails",
      "D": "Allowing every employee to change all records"
    },
    "answer": "B",
    "explanation": "Authentication and role-based access restrict system access to authorised users.",
    "page": 48,
    "hasImage": false
  },
  {
    "id": "acc_tough_193",
    "originalChapter": 1,
    "chapterTitle": "Computerised Accounting & Emerging Technologies",
    "topic": "IT in Accounting: Controls, Audit Trail, Cloud & AI/Blockchain",
    "bookQuestionNum": 193,
    "text": "What is an audit trail in a computerised accounting system?",
    "options": {
      "A": "A list of every employee's personal purchases",
      "B": "A record showing the sequence of transactions and changes made in the system",
      "C": "A method of valuing inventory under FIFO",
      "D": "A list of customers who have never purchased goods"
    },
    "answer": "B",
    "explanation": "Audit trails help trace transactions to their sources and identify changes or irregularities.",
    "page": 49,
    "hasImage": false
  },
  {
    "id": "acc_tough_194",
    "originalChapter": 1,
    "chapterTitle": "Computerised Accounting & Emerging Technologies",
    "topic": "IT in Accounting: Controls, Audit Trail, Cloud & AI/Blockchain",
    "bookQuestionNum": 194,
    "text": "Why are regular backups important in a computerised accounting system?",
    "options": {
      "A": "They guarantee that no fraud occurs.",
      "B": "They allow data to be restored after data loss, damage or system failure.",
      "C": "They eliminate the need for passwords.",
      "D": "They automatically correct all incorrect journal entries."
    },
    "answer": "B",
    "explanation": "Backups support data recovery and business continuity.",
    "page": 49,
    "hasImage": false
  },
  {
    "id": "acc_tough_195",
    "originalChapter": 1,
    "chapterTitle": "Computerised Accounting & Emerging Technologies",
    "topic": "IT in Accounting: Controls, Audit Trail, Cloud & AI/Blockchain",
    "bookQuestionNum": 195,
    "text": "Which of the following best describes accounting data processing?",
    "options": {
      "A": "Collecting, inputting, processing, storing and producing useful accounting information",
      "B": "Printing invoices without recording transactions",
      "C": "Deleting all original documents after each sale",
      "D": "Replacing financial reporting with advertising"
    },
    "answer": "A",
    "explanation": "Data processing turns transaction data into organised and useful accounting information.",
    "page": 49,
    "hasImage": false
  },
  {
    "id": "acc_tough_196",
    "originalChapter": 1,
    "chapterTitle": "Computerised Accounting & Emerging Technologies",
    "topic": "IT in Accounting: Controls, Audit Trail, Cloud & AI/Blockchain",
    "bookQuestionNum": 196,
    "text": "How can data analytics support accounting?",
    "options": {
      "A": "By identifying patterns, unusual transactions and trends in financial data",
      "B": "By guaranteeing that every prediction will be correct",
      "C": "By removing the need for professional judgement",
      "D": "By preventing the preparation of reports"
    },
    "answer": "A",
    "explanation": "Data analytics can help identify exceptions, monitor performance and support decisions, but findings must be interpreted carefully.",
    "page": 49,
    "hasImage": false
  },
  {
    "id": "acc_tough_197",
    "originalChapter": 1,
    "chapterTitle": "Computerised Accounting & Emerging Technologies",
    "topic": "IT in Accounting: Controls, Audit Trail, Cloud & AI/Blockchain",
    "bookQuestionNum": 197,
    "text": "Which is an appropriate use of artificial intelligence in accounting?",
    "options": {
      "A": "Automatically approving every payment without controls",
      "B": "Supporting transaction classification, anomaly detection and document processing",
      "C": "Eliminating all professional responsibility",
      "D": "Replacing all legal requirements for record keeping"
    },
    "answer": "B",
    "explanation": "AI can automate selected accounting tasks, but human review, data security and proper controls remain important.",
    "page": 50,
    "hasImage": false
  },
  {
    "id": "acc_tough_198",
    "originalChapter": 1,
    "chapterTitle": "Computerised Accounting & Emerging Technologies",
    "topic": "IT in Accounting: Controls, Audit Trail, Cloud & AI/Blockchain",
    "bookQuestionNum": 198,
    "text": "Blockchain technology is most closely associated with",
    "options": {
      "A": "a distributed ledger in which records are linked and protected against unauthorised alteration through cryptographic methods",
      "B": "a physical cash box used in petty cash accounting",
      "C": "a system that records only handwritten transactions",
      "D": "a method of depreciation"
    },
    "answer": "A",
    "explanation": "Blockchain can support shared transaction records, although implementation, governance and data-entry accuracy remain important.",
    "page": 50,
    "hasImage": false
  },
  {
    "id": "acc_tough_199",
    "originalChapter": 1,
    "chapterTitle": "Computerised Accounting & Emerging Technologies",
    "topic": "IT in Accounting: Controls, Audit Trail, Cloud & AI/Blockchain",
    "bookQuestionNum": 199,
    "text": "Which of the following is a potential risk of virtual accounting services?",
    "options": {
      "A": "They always cost more than every internal accounting department.",
      "B": "Sensitive financial data may be exposed if security and access controls are inadequate.",
      "C": "They cannot prepare financial reports.",
      "D": "They never permit communication with clients."
    },
    "answer": "B",
    "explanation": "Virtual accounting can be efficient, but organisations must manage confidentiality, access permissions, data protection and service reliability.",
    "page": 50,
    "hasImage": false
  },
  {
    "id": "acc_tough_200",
    "originalChapter": 1,
    "chapterTitle": "Computerised Accounting & Emerging Technologies",
    "topic": "IT in Accounting: Controls, Audit Trail, Cloud & AI/Blockchain",
    "bookQuestionNum": 200,
    "text": "A business uses cloud accounting software, role-based permissions, multi-factor authentication and regular backups. What is the main combined benefit of these measures?",
    "options": {
      "A": "They guarantee that the business will always make a profit.",
      "B": "They improve data security, access control and recovery from data loss.",
      "C": "They eliminate the need to reconcile bank accounts.",
      "D": "They automatically ensure that every tax return is correct."
    },
    "answer": "B",
    "explanation": "These controls reduce security risks and support reliable access to accounting records, but they do not guarantee that every transaction or tax return is correct.",
    "page": 50,
    "hasImage": false
  }
];
