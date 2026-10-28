/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMBIX COMMERCE QUESTION BANK
 * 100 TOUGH JAMB UTME-STYLE QUESTIONS ACROSS ALL TOPICS (QUESTIONS 1–100)
 * Indexed directly from official syllabus specifications.
 * Total questions: 100
 */

export interface JambixCommerceItem {
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

export const JAMBIX_COMMERCE_ITEMS: JambixCommerceItem[] = [
  {
    "id": "comm_tough_1",
    "originalChapter": 1,
    "chapterTitle": "Introduction to Commerce & Production",
    "topic": "Nature of Commerce: Commerce vs Trade",
    "bookQuestionNum": 1,
    "text": "Which statement best distinguishes commerce from trade?",
    "options": {
      "A": "Commerce involves only production, while trade involves only consumption.",
      "B": "Commerce includes trade and activities that facilitate the exchange of goods and services.",
      "C": "Trade includes banking, insurance and transportation, but commerce does not.",
      "D": "Commerce concerns only international transactions."
    },
    "answer": "B",
    "explanation": "Commerce includes trade and the aids to trade, such as banking, insurance, transportation, communication and warehousing.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "comm_tough_2",
    "originalChapter": 1,
    "chapterTitle": "Introduction to Commerce & Production",
    "topic": "Production: Extractive Industry",
    "bookQuestionNum": 2,
    "text": "Which of the following occupations belongs to the extractive industry?",
    "options": {
      "A": "Oil drilling",
      "B": "Bread baking",
      "C": "Commercial banking",
      "D": "Retail distribution"
    },
    "answer": "A",
    "explanation": "Extractive activities obtain natural resources from the earth or sea.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "comm_tough_3",
    "originalChapter": 1,
    "chapterTitle": "Introduction to Commerce & Production",
    "topic": "Production: Secondary Production",
    "bookQuestionNum": 3,
    "text": "A company converts cocoa beans into chocolate bars. This activity is classified as",
    "options": {
      "A": "primary production",
      "B": "secondary production",
      "C": "tertiary production",
      "D": "commercial exchange only"
    },
    "answer": "B",
    "explanation": "Secondary production involves processing raw materials into finished or semi-finished goods.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "comm_tough_4",
    "originalChapter": 1,
    "chapterTitle": "Introduction to Commerce & Production",
    "topic": "Production: Tertiary Production",
    "bookQuestionNum": 4,
    "text": "Which of the following is an example of tertiary production?",
    "options": {
      "A": "Mining iron ore",
      "B": "Growing cocoa",
      "C": "Manufacturing cement",
      "D": "Providing transport services"
    },
    "answer": "D",
    "explanation": "Tertiary production provides services rather than directly extracting or manufacturing physical goods.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "comm_tough_5",
    "originalChapter": 1,
    "chapterTitle": "Introduction to Commerce & Production",
    "topic": "Production: Division of Labour",
    "bookQuestionNum": 5,
    "text": "The main economic benefit of division of labour is that it",
    "options": {
      "A": "eliminates the need for machinery",
      "B": "increases specialisation and may improve productivity",
      "C": "makes every worker perform all production tasks",
      "D": "removes the need for training"
    },
    "answer": "B",
    "explanation": "Workers concentrating on specific tasks can become faster and more skilled, although excessive specialisation can cause monotony.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "comm_tough_6",
    "originalChapter": 1,
    "chapterTitle": "Introduction to Commerce & Production",
    "topic": "Factors of Production: Entrepreneurship",
    "bookQuestionNum": 6,
    "text": "Which factor of production is primarily responsible for organising the other factors and bearing business risks?",
    "options": {
      "A": "Land",
      "B": "Labour",
      "C": "Capital",
      "D": "Entrepreneur"
    },
    "answer": "D",
    "explanation": "The entrepreneur coordinates production, makes business decisions and bears the risks of the venture.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "comm_tough_7",
    "originalChapter": 2,
    "chapterTitle": "Home Trade & Channels of Distribution",
    "topic": "Wholesale Trade: Services to Manufacturers",
    "bookQuestionNum": 7,
    "text": "Which of the following is an example of a service provided by a wholesaler to a manufacturer?",
    "options": {
      "A": "Breaking bulk and distributing goods to retailers",
      "B": "Purchasing goods exclusively for household consumption",
      "C": "Manufacturing all the goods sold by the retailer",
      "D": "Setting the government's tax rates"
    },
    "answer": "A",
    "explanation": "Wholesalers buy in bulk and sell in smaller quantities, reducing the distribution burden on manufacturers.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "comm_tough_8",
    "originalChapter": 2,
    "chapterTitle": "Home Trade & Channels of Distribution",
    "topic": "Retail Trade: Retail Distribution",
    "bookQuestionNum": 8,
    "text": "A retailer purchases 500 cartons of a product from a wholesaler and sells them in small quantities to final consumers. The retailer is performing the function of",
    "options": {
      "A": "extracting",
      "B": "retail distribution",
      "C": "primary production",
      "D": "nationalisation"
    },
    "answer": "B",
    "explanation": "Retailers sell goods to final consumers, usually in quantities suitable for personal use.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "comm_tough_9",
    "originalChapter": 2,
    "chapterTitle": "Home Trade & Channels of Distribution",
    "topic": "Channels of Distribution: Direct Channels",
    "bookQuestionNum": 9,
    "text": "Which channel of distribution contains no intermediary?",
    "options": {
      "A": "Manufacturer → Wholesaler → Consumer",
      "B": "Manufacturer → Retailer → Consumer",
      "C": "Manufacturer → Consumer",
      "D": "Manufacturer → Agent → Retailer → Consumer"
    },
    "answer": "C",
    "explanation": "A direct channel allows the manufacturer to sell straight to the final consumer.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "comm_tough_10",
    "originalChapter": 2,
    "chapterTitle": "Home Trade & Channels of Distribution",
    "topic": "Middlemen & Agents: Marketing Intermediaries",
    "bookQuestionNum": 10,
    "text": "A producer uses an agent to find buyers but ships the goods directly to the buyer. The agent mainly performs the role of",
    "options": {
      "A": "a final consumer",
      "B": "a marketing intermediary",
      "C": "a transport authority",
      "D": "a manufacturer"
    },
    "answer": "B",
    "explanation": "An agent facilitates sales on behalf of a principal without necessarily taking ownership of the goods.",
    "page": 1,
    "hasImage": false
  },
  {
    "id": "comm_tough_11",
    "originalChapter": 3,
    "chapterTitle": "Commercial Calculations & Trade Discounts",
    "topic": "Trade Calculations: Trade Discounts",
    "bookQuestionNum": 11,
    "text": "A trader purchases goods for ₦80,000 and receives a trade discount of 15%. Calculate the invoice price before any cash discount.",
    "options": {
      "A": "₦60,000",
      "B": "₦68,000",
      "C": "₦72,000",
      "D": "₦78,000"
    },
    "answer": "B",
    "explanation": "Discount = 15% × ₦80,000 = ₦12,000. Invoice price = ₦80,000 − ₦12,000 = ₦68,000.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "comm_tough_12",
    "originalChapter": 3,
    "chapterTitle": "Commercial Calculations & Trade Discounts",
    "topic": "Trade Calculations: Cash Discounts",
    "bookQuestionNum": 12,
    "text": "An invoice lists goods at ₦150,000. The seller allows a trade discount of 20% and a cash discount of 5% on the amount remaining after the trade discount. How much does the buyer pay if the cash discount is earned?",
    "options": {
      "A": "₦110,000",
      "B": "₦114,000",
      "C": "₦120,000",
      "D": "₦142,500"
    },
    "answer": "B",
    "explanation": "After the trade discount, the balance is ₦150,000 × 0.80 = ₦120,000. Cash discount = 5% × ₦120,000 = ₦6,000. Amount paid = ₦114,000.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "comm_tough_13",
    "originalChapter": 3,
    "chapterTitle": "Commercial Calculations & Trade Discounts",
    "topic": "Agency: Sales Commission",
    "bookQuestionNum": 13,
    "text": "A sales agent receives 4% commission on sales of ₦750,000. Calculate the commission.",
    "options": {
      "A": "₦3,000",
      "B": "₦15,000",
      "C": "₦30,000",
      "D": "₦75,000"
    },
    "answer": "C",
    "explanation": "Commission = 4% × ₦750,000 = ₦30,000.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "comm_tough_14",
    "originalChapter": 3,
    "chapterTitle": "Commercial Calculations & Trade Discounts",
    "topic": "Trading Accounts: Gross Profit Calculation",
    "bookQuestionNum": 14,
    "text": "A trader buys 200 units at ₦600 each and sells all of them at ₦850 each. Calculate the gross profit, ignoring other costs.",
    "options": {
      "A": "₦30,000",
      "B": "₦40,000",
      "C": "₦50,000",
      "D": "₦170,000"
    },
    "answer": "C",
    "explanation": "Total cost = 200 × ₦600 = ₦120,000. Sales revenue = 200 × ₦850 = ₦170,000. Gross profit = ₦50,000.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "comm_tough_15",
    "originalChapter": 3,
    "chapterTitle": "Commercial Calculations & Trade Discounts",
    "topic": "Trading Accounts: Carriage Inwards & Profit",
    "bookQuestionNum": 15,
    "text": "A trader purchases goods for ₦240,000 and incurs carriage-in costs of ₦15,000. The goods are sold for ₦340,000. Ignoring other costs, calculate gross profit.",
    "options": {
      "A": "₦85,000",
      "B": "₦100,000",
      "C": "₦115,000",
      "D": "₦125,000"
    },
    "answer": "A",
    "explanation": "Total cost of goods = ₦240,000 + ₦15,000 = ₦255,000. Gross profit = ₦340,000 − ₦255,000 = ₦85,000.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "comm_tough_16",
    "originalChapter": 3,
    "chapterTitle": "Commercial Calculations & Trade Discounts",
    "topic": "Pricing: Cost Markup",
    "bookQuestionNum": 16,
    "text": "A trader buys an item for ₦40,000 and adds a markup of 25% on cost. What is the selling price?",
    "options": {
      "A": "₦45,000",
      "B": "₦48,000",
      "C": "₦50,000",
      "D": "₦52,000"
    },
    "answer": "C",
    "explanation": "Markup = 25% × ₦40,000 = ₦10,000. Selling price = ₦50,000.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "comm_tough_17",
    "originalChapter": 3,
    "chapterTitle": "Commercial Calculations & Trade Discounts",
    "topic": "Pricing: Profit Margin on Cost",
    "bookQuestionNum": 17,
    "text": "A retailer buys an item for ₦72,000 and sells it for ₦90,000. What is the profit percentage based on cost?",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "40%"
    },
    "answer": "B",
    "explanation": "Profit = ₦90,000 − ₦72,000 = ₦18,000. Profit percentage = 18,000/72,000 × 100% = 25%.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "comm_tough_18",
    "originalChapter": 3,
    "chapterTitle": "Commercial Calculations & Trade Discounts",
    "topic": "Pricing: Trade Discounts & Profit Percentage",
    "bookQuestionNum": 18,
    "text": "A trader marks goods at ₦120,000 and offers a discount of 10%. If the goods cost ₦90,000, calculate the profit percentage on cost.",
    "options": {
      "A": "10%",
      "B": "15%",
      "C": "20%",
      "D": "25%"
    },
    "answer": "C",
    "explanation": "Selling price = ₦120,000 × 0.90 = ₦108,000. Profit = ₦18,000. Profit percentage = 18,000/90,000 × 100% = 20%.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "comm_tough_19",
    "originalChapter": 4,
    "chapterTitle": "Commercial Documents & Payment Instruments",
    "topic": "Trade Documents: Invoices",
    "bookQuestionNum": 19,
    "text": "Which document serves as a formal request for payment sent by a seller to a buyer?",
    "options": {
      "A": "Invoice",
      "B": "Receipt",
      "C": "Credit note",
      "D": "Statement of account"
    },
    "answer": "A",
    "explanation": "An invoice lists goods or services supplied, their prices and the amount payable.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "comm_tough_20",
    "originalChapter": 4,
    "chapterTitle": "Commercial Documents & Payment Instruments",
    "topic": "Trade Documents: Credit Notes",
    "bookQuestionNum": 20,
    "text": "A seller issues a document to reduce the amount owed by a buyer after goods have been returned. Which document is appropriate?",
    "options": {
      "A": "Debit note",
      "B": "Credit note",
      "C": "Order form",
      "D": "Delivery note"
    },
    "answer": "B",
    "explanation": "A credit note reduces the amount charged to the buyer, often because of returns or an overcharge.",
    "page": 2,
    "hasImage": false
  },
  {
    "id": "comm_tough_21",
    "originalChapter": 4,
    "chapterTitle": "Commercial Documents & Payment Instruments",
    "topic": "Trade Documents: Purchase Orders",
    "bookQuestionNum": 21,
    "text": "Which document is commonly used by a buyer to request goods from a supplier?",
    "options": {
      "A": "Purchase order",
      "B": "Receipt",
      "C": "Bill of lading",
      "D": "Credit note"
    },
    "answer": "A",
    "explanation": "A purchase order specifies the goods or services being ordered and the terms of purchase.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "comm_tough_22",
    "originalChapter": 4,
    "chapterTitle": "Commercial Documents & Payment Instruments",
    "topic": "Trade Documents: Delivery Notes",
    "bookQuestionNum": 22,
    "text": "A document signed by the recipient to acknowledge delivery of goods is primarily evidence of",
    "options": {
      "A": "payment of customs duty",
      "B": "receipt of the goods",
      "C": "ownership of the seller's business",
      "D": "payment of insurance premiums"
    },
    "answer": "B",
    "explanation": "A delivery note or proof-of-delivery document records that goods have been delivered and received.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "comm_tough_23",
    "originalChapter": 4,
    "chapterTitle": "Commercial Documents & Payment Instruments",
    "topic": "Shipping Documents: Bill of Lading",
    "bookQuestionNum": 23,
    "text": "Which document is both evidence of a contract of carriage by sea and a document of title in traditional shipping practice?",
    "options": {
      "A": "Airway bill",
      "B": "Bill of lading",
      "C": "Invoice",
      "D": "Debit note"
    },
    "answer": "B",
    "explanation": "A bill of lading evidences shipment and the contract of carriage; a negotiable form can also function as a document of title.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "comm_tough_24",
    "originalChapter": 4,
    "chapterTitle": "Commercial Documents & Payment Instruments",
    "topic": "Shipping Documents: Airway Bill",
    "bookQuestionNum": 24,
    "text": "Which document is commonly used in air cargo transportation as evidence of the air-carriage arrangement?",
    "options": {
      "A": "Bill of exchange",
      "B": "Airway bill",
      "C": "Credit note",
      "D": "Certificate of incorporation"
    },
    "answer": "B",
    "explanation": "An airway bill accompanies air freight and provides shipment and carriage details; it is generally not a negotiable document of title.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "comm_tough_25",
    "originalChapter": 5,
    "chapterTitle": "Foreign Trade & International Commercial Terms",
    "topic": "Incoterms: Free on Board (FOB)",
    "bookQuestionNum": 25,
    "text": "Under a transaction agreed on FOB terms, the seller generally undertakes to",
    "options": {
      "A": "pay every cost until the goods arrive at the buyer's warehouse",
      "B": "place the goods on board the vessel nominated by the buyer at the named port of shipment",
      "C": "insure the goods throughout the entire journey in all cases",
      "D": "clear the goods for import in the buyer's country"
    },
    "answer": "B",
    "explanation": "Under FOB Incoterms, the seller delivers goods on board the vessel at the named port of shipment. The precise allocation of costs and risks depends on the agreed Incoterms rules.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "comm_tough_26",
    "originalChapter": 5,
    "chapterTitle": "Foreign Trade & International Commercial Terms",
    "topic": "Incoterms: Cost, Insurance and Freight (CIF)",
    "bookQuestionNum": 26,
    "text": "Under CIF terms, the seller generally arranges and pays for",
    "options": {
      "A": "carriage and minimum required insurance to the named destination port, as well as the goods",
      "B": "only the buyer's import taxes",
      "C": "every cost after the goods reach the buyer's warehouse",
      "D": "inland delivery in the importing country under every contract"
    },
    "answer": "A",
    "explanation": "CIF means Cost, Insurance and Freight. Under the applicable Incoterms rule, the seller arranges carriage and insurance, although risk generally transfers when the goods are on board the vessel.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "comm_tough_27",
    "originalChapter": 5,
    "chapterTitle": "Foreign Trade & International Commercial Terms",
    "topic": "Foreign Trade: Nature of International Trade",
    "bookQuestionNum": 27,
    "text": "Which form of trade involves the exchange of goods and services between residents of different countries?",
    "options": {
      "A": "Retail trade",
      "B": "Home trade",
      "C": "Foreign trade",
      "D": "Hawking"
    },
    "answer": "C",
    "explanation": "Foreign trade includes international buying and selling, including exports and imports.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "comm_tough_28",
    "originalChapter": 5,
    "chapterTitle": "Foreign Trade & International Commercial Terms",
    "topic": "Balance of Trade: Visible Balance",
    "bookQuestionNum": 28,
    "text": "A country exports goods worth ₦480 million and imports goods worth ₦625 million. Calculate its visible trade balance.",
    "options": {
      "A": "₦145 million surplus",
      "B": "₦145 million deficit",
      "C": "₦1,105 million surplus",
      "D": "₦625 million deficit"
    },
    "answer": "B",
    "explanation": "Visible trade balance = exports − imports = ₦480 million − ₦625 million = −₦145 million.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "comm_tough_29",
    "originalChapter": 5,
    "chapterTitle": "Foreign Trade & International Commercial Terms",
    "topic": "Balance of Trade: Goods and Services Balance",
    "bookQuestionNum": 29,
    "text": "A country's visible trade deficit is ₦80 million, while its balance on services shows a surplus of ₦110 million. Assuming there are no other current-account entries, its balance on goods and services is",
    "options": {
      "A": "a deficit of ₦190 million",
      "B": "a deficit of ₦30 million",
      "C": "a surplus of ₦30 million",
      "D": "a surplus of ₦190 million"
    },
    "answer": "C",
    "explanation": "Combined balance = −₦80 million + ₦110 million = +₦30 million.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "comm_tough_30",
    "originalChapter": 5,
    "chapterTitle": "Foreign Trade & International Commercial Terms",
    "topic": "Foreign Exchange: Exchange Rates and Bank Charges",
    "bookQuestionNum": 30,
    "text": "A Nigerian importer buys equipment costing US$2,500 at an exchange rate of ₦1,500 per dollar. A bank charges a transaction fee of 2% of the naira cost. What is the total payment?",
    "options": {
      "A": "₦3,750,000",
      "B": "₦3,800,000",
      "C": "₦3,825,000",
      "D": "₦3,900,000"
    },
    "answer": "C",
    "explanation": "Base cost = 2,500 × ₦1,500 = ₦3,750,000. Fee = 2% × ₦3,750,000 = ₦75,000. Total = ₦3,825,000.",
    "page": 3,
    "hasImage": false
  },
  {
    "id": "comm_tough_31",
    "originalChapter": 5,
    "chapterTitle": "Foreign Trade & International Commercial Terms",
    "topic": "Foreign Exchange: Cross Exchange Rates",
    "bookQuestionNum": 31,
    "text": "If one euro exchanges for US$1.10 and one US dollar exchanges for ₦1,500, what is the naira equivalent of €400?",
    "options": {
      "A": "₦440,000",
      "B": "₦500,000",
      "C": "₦600,000",
      "D": "₦660,000"
    },
    "answer": "D",
    "explanation": "€400 = US$440. At ₦1,500 per dollar, the value is 440 × ₦1,500 = ₦660,000.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "comm_tough_32",
    "originalChapter": 6,
    "chapterTitle": "Customs & International Trade Facilitation",
    "topic": "Customs Administration: Nigeria Customs Service",
    "bookQuestionNum": 32,
    "text": "Which institution is primarily responsible for collecting customs duties on imports and exports at Nigeria's borders?",
    "options": {
      "A": "Nigeria Customs Service",
      "B": "Nigerian Deposit Insurance Corporation",
      "C": "Corporate Affairs Commission",
      "D": "National Insurance Commission"
    },
    "answer": "A",
    "explanation": "The Nigeria Customs Service administers customs controls and collects applicable customs duties and related charges.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "comm_tough_33",
    "originalChapter": 6,
    "chapterTitle": "Customs & International Trade Facilitation",
    "topic": "Trade Finance: Documentary Letter of Credit",
    "bookQuestionNum": 33,
    "text": "A letter of credit is particularly useful in international trade because it",
    "options": {
      "A": "guarantees that exchange rates never change",
      "B": "provides a bank's undertaking to pay a seller when the specified documentary conditions are met",
      "C": "removes the need for shipping documents",
      "D": "guarantees that goods are free from defects"
    },
    "answer": "B",
    "explanation": "A documentary credit reduces certain payment risks by tying the bank's payment undertaking to compliant documents and the credit's terms.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "comm_tough_34",
    "originalChapter": 6,
    "chapterTitle": "Customs & International Trade Facilitation",
    "topic": "Negotiable Instruments: Bill of Exchange",
    "bookQuestionNum": 34,
    "text": "A bill of exchange is best described as",
    "options": {
      "A": "a written unconditional order directing a specified person to pay a stated sum to a specified person or order",
      "B": "a certificate of ownership of a company",
      "C": "a document recording the delivery of goods only",
      "D": "a policy protecting goods against all business losses"
    },
    "answer": "A",
    "explanation": "A bill of exchange is a negotiable instrument containing an unconditional payment order and meeting the applicable legal requirements.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "comm_tough_35",
    "originalChapter": 6,
    "chapterTitle": "Customs & International Trade Facilitation",
    "topic": "Trade Finance: Documentary Collection",
    "bookQuestionNum": 35,
    "text": "Under a documentary collection, a bank commonly",
    "options": {
      "A": "guarantees payment regardless of the buyer's actions",
      "B": "handles documents and seeks payment or acceptance according to the collection instructions",
      "C": "takes ownership of the importing company",
      "D": "becomes the manufacturer of the goods"
    },
    "answer": "B",
    "explanation": "In documentary collection, banks process documents and collect payment or acceptance but do not generally guarantee the buyer's payment.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "comm_tough_36",
    "originalChapter": 7,
    "chapterTitle": "Banking & Financial Institutions",
    "topic": "Commercial Banking: Functions of Commercial Banks",
    "bookQuestionNum": 36,
    "text": "Which is the most appropriate function of commercial banks?",
    "options": {
      "A": "Issuing every nation's currency",
      "B": "Accepting deposits and providing loans",
      "C": "Making all government laws",
      "D": "Controlling every insurance policy"
    },
    "answer": "B",
    "explanation": "Commercial banks mobilise savings, facilitate payments and provide credit to individuals and businesses.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "comm_tough_37",
    "originalChapter": 7,
    "chapterTitle": "Banking & Financial Institutions",
    "topic": "Central Banking: Lender of Last Resort",
    "bookQuestionNum": 37,
    "text": "The central bank acts as a lender of last resort mainly by",
    "options": {
      "A": "lending to qualifying financial institutions facing temporary liquidity problems",
      "B": "lending unlimited funds to every household",
      "C": "paying all private business expenses",
      "D": "setting the selling price of every product"
    },
    "answer": "A",
    "explanation": "The lender-of-last-resort function supports financial stability when eligible institutions face serious short-term liquidity shortages.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "comm_tough_38",
    "originalChapter": 7,
    "chapterTitle": "Banking & Financial Institutions",
    "topic": "Central Banking: Open Market Operations (OMO)",
    "bookQuestionNum": 38,
    "text": "Which instrument is most directly associated with a central bank's open-market operations?",
    "options": {
      "A": "Government securities",
      "B": "Retail shopping vouchers",
      "C": "Ordinary delivery notes",
      "D": "Warehouse receipts issued by a private shop"
    },
    "answer": "A",
    "explanation": "Central banks can buy or sell eligible securities to influence banking-system liquidity and monetary conditions.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "comm_tough_39",
    "originalChapter": 7,
    "chapterTitle": "Banking & Financial Institutions",
    "topic": "Bank Lending: Bank Overdrafts",
    "bookQuestionNum": 39,
    "text": "A bank grants a customer an overdraft. This means the bank allows the customer to",
    "options": {
      "A": "withdraw or spend beyond the available account balance up to an agreed limit",
      "B": "borrow without any repayment obligation",
      "C": "withdraw only foreign currency",
      "D": "earn interest on a loan that was never granted"
    },
    "answer": "A",
    "explanation": "An overdraft is a short-term credit facility linked to a bank account, subject to agreed limits and conditions.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "comm_tough_40",
    "originalChapter": 7,
    "chapterTitle": "Banking & Financial Institutions",
    "topic": "Financial Mathematics: Simple Interest",
    "bookQuestionNum": 40,
    "text": "A business borrows ₦800,000 at a simple interest rate of 12% per annum for 9 months. Calculate the interest.",
    "options": {
      "A": "₦48,000",
      "B": "₦72,000",
      "C": "₦86,400",
      "D": "₦96,000"
    },
    "answer": "B",
    "explanation": "Simple interest = principal × rate × time = 800,000 × 0.12 × 9/12 = ₦72,000.",
    "page": 4,
    "hasImage": false
  },
  {
    "id": "comm_tough_41",
    "originalChapter": 7,
    "chapterTitle": "Banking & Financial Institutions",
    "topic": "Financial Mathematics: Loan Repayment",
    "bookQuestionNum": 41,
    "text": "A company borrows ₦2,000,000 at 10% simple interest per annum for 3 years. What is the total amount repayable?",
    "options": {
      "A": "₦2,200,000",
      "B": "₦2,400,000",
      "C": "₦2,600,000",
      "D": "₦3,000,000"
    },
    "answer": "C",
    "explanation": "Interest = ₦2,000,000 × 0.10 × 3 = ₦600,000. Total repayment = ₦2,600,000.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "comm_tough_42",
    "originalChapter": 7,
    "chapterTitle": "Banking & Financial Institutions",
    "topic": "Financial Mathematics: Compound Interest",
    "bookQuestionNum": 42,
    "text": "A business invests ₦500,000 at 10% compound interest per annum for two years. Calculate the amount at the end of the period.",
    "options": {
      "A": "₦550,000",
      "B": "₦600,000",
      "C": "₦605,000",
      "D": "₦610,000"
    },
    "answer": "C",
    "explanation": "Amount = ₦500,000 × 1.1² = ₦605,000.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "comm_tough_43",
    "originalChapter": 8,
    "chapterTitle": "Business Finance, Securities & Stock Exchange",
    "topic": "Capital Structure: Equity vs Debt Capital",
    "bookQuestionNum": 43,
    "text": "Which source of business finance does not normally require the company to repay a principal amount on a fixed maturity date?",
    "options": {
      "A": "Ordinary share capital",
      "B": "A fixed-term bank loan",
      "C": "A debenture with a maturity date",
      "D": "A short-term overdraft"
    },
    "answer": "A",
    "explanation": "Equity capital represents ownership. Unlike debt, ordinary shares do not normally require repayment of principal on a fixed date.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "comm_tough_44",
    "originalChapter": 8,
    "chapterTitle": "Business Finance, Securities & Stock Exchange",
    "topic": "Capital Issues: Share Issue Proceeds",
    "bookQuestionNum": 44,
    "text": "A company issues 100,000 ordinary shares at ₦5 each. Calculate the total proceeds from the issue, assuming all shares are fully subscribed and issued at that price.",
    "options": {
      "A": "₦50,000",
      "B": "₦500,000",
      "C": "₦5,000,000",
      "D": "₦50,000,000"
    },
    "answer": "C",
    "explanation": "Issue proceeds = 100,000 × ₦5 = ₦500,000. Therefore, the correct amount is ₦500,000, corresponding to option B.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "comm_tough_45",
    "originalChapter": 8,
    "chapterTitle": "Business Finance, Securities & Stock Exchange",
    "topic": "Corporate Distributions: Dividends",
    "bookQuestionNum": 45,
    "text": "A company declares a dividend of ₦2 per ordinary share. An investor owns 4,500 shares. Calculate the dividend received before any applicable taxes or charges.",
    "options": {
      "A": "₦2,250",
      "B": "₦4,500",
      "C": "₦9,000",
      "D": "₦18,000"
    },
    "answer": "C",
    "explanation": "Dividend = 4,500 × ₦2 = ₦9,000.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "comm_tough_46",
    "originalChapter": 8,
    "chapterTitle": "Business Finance, Securities & Stock Exchange",
    "topic": "Stock Market: Net Capital Gains",
    "bookQuestionNum": 46,
    "text": "A company's ordinary shares have a market price of ₦25 each. An investor buys 800 shares and later sells all of them at ₦31 each. Brokerage charges total ₦1,200 on the purchase and sale combined. Calculate the investor's net capital gain, ignoring dividends and taxes.",
    "options": {
      "A": "₦3,600",
      "B": "₦3,800",
      "C": "₦4,800",
      "D": "₦6,800"
    },
    "answer": "B",
    "explanation": "Gross gain = 800 × (₦31 − ₦25) = ₦4,800. Net gain = ₦4,800 − ₦1,200 = ₦3,600. Therefore, the correct option is A.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "comm_tough_47",
    "originalChapter": 8,
    "chapterTitle": "Business Finance, Securities & Stock Exchange",
    "topic": "Corporate Securities: Debentures",
    "bookQuestionNum": 47,
    "text": "Which of the following best describes a debenture?",
    "options": {
      "A": "A document evidencing a company's debt, generally with specified repayment and interest terms",
      "B": "An ordinary share representing ownership of a company",
      "C": "A receipt for goods delivered to a retailer",
      "D": "A licence issued to every consumer"
    },
    "answer": "A",
    "explanation": "Debentures are debt instruments. Debenture holders are creditors, not ordinary shareholders.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "comm_tough_48",
    "originalChapter": 8,
    "chapterTitle": "Business Finance, Securities & Stock Exchange",
    "topic": "Capital Market: Functions of Stock Exchanges",
    "bookQuestionNum": 48,
    "text": "Which of the following is a major function of a stock exchange?",
    "options": {
      "A": "Providing an organised market for eligible securities",
      "B": "Manufacturing the goods sold by listed companies",
      "C": "Guaranteeing that every share price will rise",
      "D": "Setting the salaries of every worker in the economy"
    },
    "answer": "A",
    "explanation": "A stock exchange provides a regulated marketplace for trading securities and supports price discovery and liquidity.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "comm_tough_49",
    "originalChapter": 8,
    "chapterTitle": "Business Finance, Securities & Stock Exchange",
    "topic": "Corporate Distributions: Dividend on Nominal Value",
    "bookQuestionNum": 49,
    "text": "An investor owns 2,000 shares with a nominal value of ₦1 each. The company declares a dividend of 30 kobo per share. Calculate the dividend.",
    "options": {
      "A": "₦300",
      "B": "₦600",
      "C": "₦2,000",
      "D": "₦6,000"
    },
    "answer": "B",
    "explanation": "Dividend per share = ₦0.30. Total dividend = 2,000 × ₦0.30 = ₦600.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "comm_tough_50",
    "originalChapter": 8,
    "chapterTitle": "Business Finance, Securities & Stock Exchange",
    "topic": "Corporate Ownership: Shareholding Percentage",
    "bookQuestionNum": 50,
    "text": "A company has issued 1,000,000 ordinary shares. A shareholder owns 150,000 of these shares. What percentage of the issued ordinary shares does the shareholder own?",
    "options": {
      "A": "10%",
      "B": "12.5%",
      "C": "15%",
      "D": "20%"
    },
    "answer": "C",
    "explanation": "Ownership percentage = 150,000/1,000,000 × 100% = 15%.",
    "page": 5,
    "hasImage": false
  },
  {
    "id": "comm_tough_51",
    "originalChapter": 9,
    "chapterTitle": "Business Organisations & Corporate Structures",
    "topic": "Company Law: Incorporated Companies & Limited Liability",
    "bookQuestionNum": 51,
    "text": "Which form of business organisation usually has a separate legal identity from its owners and limited liability for shareholders?",
    "options": {
      "A": "Sole proprietorship",
      "B": "General partnership",
      "C": "Incorporated company limited by shares",
      "D": "Ordinary unincorporated family business"
    },
    "answer": "C",
    "explanation": "An incorporated company is legally separate from its shareholders, and shareholder liability is generally limited to the amount unpaid on their shares or their investment obligations.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "comm_tough_52",
    "originalChapter": 9,
    "chapterTitle": "Business Organisations & Corporate Structures",
    "topic": "Business Units: Sole Proprietorship Disadvantages",
    "bookQuestionNum": 52,
    "text": "The most important disadvantage of a sole proprietorship is often",
    "options": {
      "A": "the difficulty of establishing direct ownership",
      "B": "unlimited personal liability for business debts, subject to applicable law",
      "C": "the compulsory separation of ownership and management",
      "D": "the requirement to issue publicly traded shares"
    },
    "answer": "B",
    "explanation": "In a conventional sole proprietorship, the owner is personally responsible for business obligations.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "comm_tough_53",
    "originalChapter": 9,
    "chapterTitle": "Business Organisations & Corporate Structures",
    "topic": "Business Units: Partnership Agreements",
    "bookQuestionNum": 53,
    "text": "A partnership agreement is especially useful because it",
    "options": {
      "A": "removes every business risk",
      "B": "sets out partners' rights, responsibilities, profit-sharing arrangements and procedures",
      "C": "converts every partner into a government employee",
      "D": "guarantees profits regardless of market conditions"
    },
    "answer": "B",
    "explanation": "A partnership agreement helps clarify how the business will be owned, managed and dissolved.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "comm_tough_54",
    "originalChapter": 9,
    "chapterTitle": "Business Organisations & Corporate Structures",
    "topic": "Business Units: Cooperative Societies",
    "bookQuestionNum": 54,
    "text": "What is a major advantage of a cooperative society?",
    "options": {
      "A": "It must exclude all members from decision-making.",
      "B": "It is generally formed to serve members' common economic interests.",
      "C": "It cannot engage in buying or selling.",
      "D": "Its sole objective is to maximise returns for external shareholders."
    },
    "answer": "B",
    "explanation": "Cooperatives are member-oriented organisations established for mutual economic benefit.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "comm_tough_55",
    "originalChapter": 9,
    "chapterTitle": "Business Organisations & Corporate Structures",
    "topic": "Company Law: Public vs Private Limited Companies",
    "bookQuestionNum": 55,
    "text": "A public limited company differs from a private limited company because a public company may, subject to legal and regulatory requirements,",
    "options": {
      "A": "offer its shares to the public",
      "B": "operate without registration",
      "C": "guarantee profits to every investor",
      "D": "avoid all disclosure obligations"
    },
    "answer": "A",
    "explanation": "Public companies can offer securities to the public subject to applicable company and capital-market rules. Private companies face restrictions on public invitations to subscribe for their shares.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "comm_tough_56",
    "originalChapter": 9,
    "chapterTitle": "Business Organisations & Corporate Structures",
    "topic": "Business Models: Franchising",
    "bookQuestionNum": 56,
    "text": "A franchisor grants a franchisee the right to use its brand and business model in return for agreed fees and compliance with operating standards. This is",
    "options": {
      "A": "franchising",
      "B": "nationalisation",
      "C": "liquidation",
      "D": "barter"
    },
    "answer": "A",
    "explanation": "Franchising allows an independent operator to use an established business format under a contractual arrangement.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "comm_tough_57",
    "originalChapter": 9,
    "chapterTitle": "Business Organisations & Corporate Structures",
    "topic": "Business Finance: Corporate Insolvency",
    "bookQuestionNum": 57,
    "text": "A company is unable to pay its debts as they fall due. Which concept most directly describes its financial condition?",
    "options": {
      "A": "Solvency in all circumstances",
      "B": "Insolvency",
      "C": "Industrial localisation",
      "D": "Specialisation"
    },
    "answer": "B",
    "explanation": "Insolvency concerns an inability to meet financial obligations or, under some legal tests, liabilities exceeding assets.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "comm_tough_58",
    "originalChapter": 9,
    "chapterTitle": "Business Organisations & Corporate Structures",
    "topic": "Trade Groups: Trade Associations",
    "bookQuestionNum": 58,
    "text": "The main purpose of a trade association is to",
    "options": {
      "A": "represent and promote the common interests of businesses in an industry or trade",
      "B": "eliminate every competitor by law",
      "C": "replace all commercial banks",
      "D": "prevent members from exchanging information on industry matters"
    },
    "answer": "A",
    "explanation": "Trade associations may represent members, provide industry information and support common standards or interests.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "comm_tough_59",
    "originalChapter": 9,
    "chapterTitle": "Business Organisations & Corporate Structures",
    "topic": "Trade Groups: Chambers of Commerce",
    "bookQuestionNum": 59,
    "text": "A chamber of commerce primarily seeks to",
    "options": {
      "A": "promote and represent commercial interests in a geographical area",
      "B": "produce every item sold by local shops",
      "C": "insure all private homes automatically",
      "D": "issue the country's currency"
    },
    "answer": "A",
    "explanation": "Chambers of commerce support business interests, networking and engagement with government and other stakeholders.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "comm_tough_60",
    "originalChapter": 9,
    "chapterTitle": "Business Organisations & Corporate Structures",
    "topic": "Corporate Combinations: Holding Companies",
    "bookQuestionNum": 60,
    "text": "Which statement best describes a holding company?",
    "options": {
      "A": "A company whose principal role is to own controlling interests in other companies",
      "B": "A company that only stores physical goods for retailers",
      "C": "A business that cannot own shares",
      "D": "A firm established solely to sell household items directly to consumers"
    },
    "answer": "A",
    "explanation": "A holding company typically controls subsidiary companies through share ownership or other controlling rights.",
    "page": 6,
    "hasImage": false
  },
  {
    "id": "comm_tough_61",
    "originalChapter": 10,
    "chapterTitle": "Insurance & Risk Management",
    "topic": "Insurance: Purpose & Risk Transfer",
    "bookQuestionNum": 61,
    "text": "The primary purpose of insurance is to",
    "options": {
      "A": "eliminate the possibility of every loss",
      "B": "transfer specified financial risks to an insurer in return for a premium",
      "C": "guarantee profit on every investment",
      "D": "make accidents impossible"
    },
    "answer": "B",
    "explanation": "Insurance provides financial protection against defined risks according to the policy terms; it does not prevent every loss.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "comm_tough_62",
    "originalChapter": 10,
    "chapterTitle": "Insurance & Risk Management",
    "topic": "Insurance Calculations: Premium Determination",
    "bookQuestionNum": 62,
    "text": "A business insures goods worth ₦8 million at a premium rate of 1.5% of the insured value. Calculate the annual premium.",
    "options": {
      "A": "₦12,000",
      "B": "₦80,000",
      "C": "₦120,000",
      "D": "₦150,000"
    },
    "answer": "C",
    "explanation": "Premium = 1.5% × ₦8,000,000 = ₦120,000.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "comm_tough_63",
    "originalChapter": 10,
    "chapterTitle": "Insurance & Risk Management",
    "topic": "Insurance Principles: Average Clause & Under-Insurance",
    "bookQuestionNum": 63,
    "text": "A building valued at ₦20 million is insured for ₦15 million under an average clause. A covered partial loss amounts to ₦4 million. Using the average clause formula, calculate the claim payable before any excess or other policy adjustments.",
    "options": {
      "A": "₦2 million",
      "B": "₦3 million",
      "C": "₦4 million",
      "D": "₦5 million"
    },
    "answer": "B",
    "explanation": "Claim = (sum insured/value at risk) × loss = (15/20) × ₦4 million = ₦3 million.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "comm_tough_64",
    "originalChapter": 10,
    "chapterTitle": "Insurance & Risk Management",
    "topic": "Insurance Claims: Policy Excess / Deductible",
    "bookQuestionNum": 64,
    "text": "A business suffers a covered loss of ₦600,000 under a policy with a fixed excess of ₦50,000. Ignoring other policy terms, how much is payable by the insurer?",
    "options": {
      "A": "₦50,000",
      "B": "₦500,000",
      "C": "₦550,000",
      "D": "₦600,000"
    },
    "answer": "C",
    "explanation": "Insurer's payment = covered loss − excess = ₦600,000 − ₦50,000 = ₦550,000.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "comm_tough_65",
    "originalChapter": 10,
    "chapterTitle": "Insurance & Risk Management",
    "topic": "Insurance Principles: Principle of Indemnity",
    "bookQuestionNum": 65,
    "text": "The principle of indemnity aims to",
    "options": {
      "A": "place the insured in a better financial position than before the loss in every case",
      "B": "restore the insured approximately to the financial position before a covered loss, subject to policy terms",
      "C": "guarantee the insured a profit after every claim",
      "D": "prevent the insurer from examining a claim"
    },
    "answer": "B",
    "explanation": "Indemnity limits compensation to the actual covered loss, subject to the policy's terms, limits and applicable valuation rules.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "comm_tough_66",
    "originalChapter": 10,
    "chapterTitle": "Insurance & Risk Management",
    "topic": "Insurance Principles: Insurable Interest",
    "bookQuestionNum": 66,
    "text": "The principle of insurable interest requires that",
    "options": {
      "A": "the insured has a legally recognised interest in the subject matter insured",
      "B": "the insured must own shares in the insurance company",
      "C": "every insured item must produce a profit",
      "D": "insurance policies can only cover imported products"
    },
    "answer": "A",
    "explanation": "The insured must have an interest recognised by law in the subject matter or risk being insured.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "comm_tough_67",
    "originalChapter": 10,
    "chapterTitle": "Insurance & Risk Management",
    "topic": "Insurance Principles: Utmost Good Faith (Uberrima Fides)",
    "bookQuestionNum": 67,
    "text": "Insurance based on the principle of utmost good faith requires the parties to",
    "options": {
      "A": "disclose material facts as required by the applicable law and insurance contract",
      "B": "conceal every fact that could influence underwriting",
      "C": "accept claims without checking policy terms",
      "D": "ignore deliberate misrepresentation"
    },
    "answer": "A",
    "explanation": "Material information can affect an insurer's assessment of risk and the terms on which cover is offered.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "comm_tough_68",
    "originalChapter": 10,
    "chapterTitle": "Insurance & Risk Management",
    "topic": "Marine Insurance: Perils of the Sea",
    "bookQuestionNum": 68,
    "text": "A marine insurance policy protects a trader against specified risks affecting goods transported by sea. Which situation is the clearest example of a marine cargo risk?",
    "options": {
      "A": "Damage to insured cargo from a covered sea peril",
      "B": "A routine increase in office salaries",
      "C": "A fall in the selling price of goods without physical loss",
      "D": "A reduction in advertising expenditure"
    },
    "answer": "A",
    "explanation": "Marine cargo insurance covers specified transit risks subject to exclusions and the policy wording.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "comm_tough_69",
    "originalChapter": 10,
    "chapterTitle": "Insurance & Risk Management",
    "topic": "Property Insurance: Fire Insurance",
    "bookQuestionNum": 69,
    "text": "Which branch of insurance is primarily concerned with losses caused by fire?",
    "options": {
      "A": "Life assurance",
      "B": "Fire insurance",
      "C": "Pension administration",
      "D": "Credit creation"
    },
    "answer": "B",
    "explanation": "Fire insurance covers insured losses arising from fire, subject to the policy's wording, exclusions and conditions.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "comm_tough_70",
    "originalChapter": 10,
    "chapterTitle": "Insurance & Risk Management",
    "topic": "Life Assurance: Nature of Life Assurance",
    "bookQuestionNum": 70,
    "text": "Which statement best distinguishes life assurance from many forms of general insurance?",
    "options": {
      "A": "Life assurance is concerned with a person's life and may pay on death or maturity according to the policy.",
      "B": "Life assurance covers only damaged ships.",
      "C": "Life assurance is identical to motor third-party insurance.",
      "D": "Life assurance prevents death."
    },
    "answer": "A",
    "explanation": "Life policies provide benefits linked to the insured person's life and the contract's specified events.",
    "page": 7,
    "hasImage": false
  },
  {
    "id": "comm_tough_71",
    "originalChapter": 11,
    "chapterTitle": "Transportation & Warehousing",
    "topic": "Transport: Water Transport for Heavy Cargo",
    "bookQuestionNum": 71,
    "text": "Which mode of transport is generally most appropriate for moving very bulky goods over long distances where a suitable navigable route exists and speed is not the main priority?",
    "options": {
      "A": "Water transport",
      "B": "Motorcycle delivery",
      "C": "Passenger taxi",
      "D": "Bicycle transport"
    },
    "answer": "A",
    "explanation": "Water transport can carry large volumes of bulky cargo at relatively low unit cost, although it depends on route and port availability.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "comm_tough_72",
    "originalChapter": 11,
    "chapterTitle": "Transportation & Warehousing",
    "topic": "Transport: Air Transport for Urgent Cargo",
    "bookQuestionNum": 72,
    "text": "Which mode of transport is generally most suitable for sending urgent, lightweight and high-value international cargo?",
    "options": {
      "A": "Air transport",
      "B": "Inland water transport",
      "C": "Slow bulk sea transport",
      "D": "Animal-drawn transport"
    },
    "answer": "A",
    "explanation": "Air transport is generally faster and is often chosen for urgent or high-value goods, though it is more expensive per unit of weight.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "comm_tough_73",
    "originalChapter": 11,
    "chapterTitle": "Transportation & Warehousing",
    "topic": "Transport Economics: Modal Cost Comparison",
    "bookQuestionNum": 73,
    "text": "A trader must transport 60 tonnes of goods. Road transport charges ₦18,000 per tonne, while rail transport charges ₦12,000 per tonne. Calculate the cost saving from using rail, assuming there are no additional charges.",
    "options": {
      "A": "₦180,000",
      "B": "₦300,000",
      "C": "₦360,000",
      "D": "₦720,000"
    },
    "answer": "C",
    "explanation": "Saving per tonne = ₦18,000 − ₦12,000 = ₦6,000. Total saving = 60 × ₦6,000 = ₦360,000.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "comm_tough_74",
    "originalChapter": 11,
    "chapterTitle": "Transportation & Warehousing",
    "topic": "Warehousing: Economic Functions of Warehouses",
    "bookQuestionNum": 74,
    "text": "The major economic function of warehousing is to",
    "options": {
      "A": "eliminate the need for production",
      "B": "store goods until they are needed and help manage the timing of supply",
      "C": "guarantee that prices always fall",
      "D": "replace every form of transport"
    },
    "answer": "B",
    "explanation": "Warehousing helps bridge the time gap between production and consumption and can support stock control.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "comm_tough_75",
    "originalChapter": 11,
    "chapterTitle": "Transportation & Warehousing",
    "topic": "Inventory Management: Stock Turnover Days",
    "bookQuestionNum": 75,
    "text": "A warehouse stores 2,400 bags of rice. If 150 bags are dispatched daily, how many days will the stock last if no new deliveries arrive?",
    "options": {
      "A": "12 days",
      "B": "14 days",
      "C": "16 days",
      "D": "18 days"
    },
    "answer": "C",
    "explanation": "Days of stock = 2,400/150 = 16 days.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "comm_tough_76",
    "originalChapter": 11,
    "chapterTitle": "Transportation & Warehousing",
    "topic": "Warehousing: Warehouse Warrants",
    "bookQuestionNum": 76,
    "text": "Which warehouse receipt may be used as evidence of goods held in storage and, where the law and receipt permit, to facilitate transactions involving those goods?",
    "options": {
      "A": "Warehouse warrant or qualifying warehouse receipt",
      "B": "Personal shopping list",
      "C": "Advertising leaflet",
      "D": "Wage slip"
    },
    "answer": "A",
    "explanation": "Warehouse documentation records stored goods and may support a transfer or financing arrangement when its legal form permits.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "comm_tough_77",
    "originalChapter": 12,
    "chapterTitle": "Advertising, Sales Promotion & Public Relations",
    "topic": "Advertising: Informative Advertising",
    "bookQuestionNum": 77,
    "text": "Which of the following is a major function of advertising?",
    "options": {
      "A": "Informing potential customers about a product",
      "B": "Guaranteeing that every advertised product will succeed",
      "C": "Replacing all forms of distribution",
      "D": "Preventing consumers from comparing prices"
    },
    "answer": "A",
    "explanation": "Advertising can inform, persuade and remind target audiences about products, services or brands.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "comm_tough_78",
    "originalChapter": 12,
    "chapterTitle": "Advertising, Sales Promotion & Public Relations",
    "topic": "Marketing Economics: Advertising Campaign Contribution",
    "bookQuestionNum": 78,
    "text": "A company spends ₦240,000 on an advertising campaign and gains additional sales of ₦900,000. The additional goods sold cost the company ₦540,000. Ignoring other additional costs, calculate the campaign's net contribution after advertising expenditure.",
    "options": {
      "A": "₦120,000",
      "B": "₦240,000",
      "C": "₦360,000",
      "D": "₦660,000"
    },
    "answer": "B",
    "explanation": "Additional gross contribution = ₦900,000 − ₦540,000 = ₦360,000. Net contribution after advertising = ₦360,000 − ₦240,000 = ₦120,000.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "comm_tough_79",
    "originalChapter": 12,
    "chapterTitle": "Advertising, Sales Promotion & Public Relations",
    "topic": "Advertising Media: Digital Video Advertising",
    "bookQuestionNum": 79,
    "text": "Which medium is particularly suitable for reaching a geographically dispersed audience with a visual demonstration that can be replayed online?",
    "options": {
      "A": "A verbal message delivered once to one person",
      "B": "A well-targeted online video advertisement",
      "C": "An unrecorded private conversation",
      "D": "A handwritten internal stock record"
    },
    "answer": "B",
    "explanation": "Online video can combine visual and audio information and can be distributed to audiences across different locations.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "comm_tough_80",
    "originalChapter": 12,
    "chapterTitle": "Advertising, Sales Promotion & Public Relations",
    "topic": "Sales Promotion: BOGO & Short-Term Incentives",
    "bookQuestionNum": 80,
    "text": "Which of the following is the clearest example of sales promotion rather than ordinary advertising?",
    "options": {
      "A": "A temporary buy-one-get-one-free offer",
      "B": "A permanent company logo",
      "C": "A routine annual report",
      "D": "A private bank reconciliation statement"
    },
    "answer": "A",
    "explanation": "Sales promotion provides short-term incentives intended to encourage purchase or trial.",
    "page": 8,
    "hasImage": false
  },
  {
    "id": "comm_tough_81",
    "originalChapter": 13,
    "chapterTitle": "Communication, E-Commerce & Information Technology",
    "topic": "Business Communication: Electronic Data Interchange (EDI)",
    "bookQuestionNum": 81,
    "text": "Which communication method allows a business to exchange documents and messages electronically between computer systems in a structured format?",
    "options": {
      "A": "Electronic data interchange (EDI)",
      "B": "Physical hawking",
      "C": "Manual stocktaking",
      "D": "Traditional barter only"
    },
    "answer": "A",
    "explanation": "EDI allows organisations to exchange standardised business documents electronically.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "comm_tough_82",
    "originalChapter": 13,
    "chapterTitle": "Communication, E-Commerce & Information Technology",
    "topic": "Electronic Commerce: E-Commerce Definition & Scope",
    "bookQuestionNum": 82,
    "text": "A business receives an online order, collects payment electronically and arranges delivery to the customer. This is an example of",
    "options": {
      "A": "e-commerce",
      "B": "extractive production",
      "C": "barter trade only",
      "D": "nationalisation"
    },
    "answer": "A",
    "explanation": "E-commerce involves commercial transactions conducted through electronic networks, including online ordering and payment.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "comm_tough_83",
    "originalChapter": 13,
    "chapterTitle": "Communication, E-Commerce & Information Technology",
    "topic": "Electronic Commerce: Cybersecurity & Payment Security",
    "bookQuestionNum": 83,
    "text": "Which practice best protects a business customer against common online-payment fraud?",
    "options": {
      "A": "Sharing one-time passwords with anyone who requests them",
      "B": "Verifying the payment recipient and using secure authentication",
      "C": "Using the same password on every website",
      "D": "Ignoring transaction alerts"
    },
    "answer": "B",
    "explanation": "Verifying recipients, protecting authentication codes and using secure payment channels reduce exposure to common fraud methods.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "comm_tough_84",
    "originalChapter": 13,
    "chapterTitle": "Communication, E-Commerce & Information Technology",
    "topic": "Commercial Services: Economic Role of Tourism",
    "bookQuestionNum": 84,
    "text": "Tourism contributes to commerce primarily by",
    "options": {
      "A": "generating spending on transport, accommodation, food and other services",
      "B": "eliminating all consumer expenditure",
      "C": "preventing the movement of people",
      "D": "replacing manufacturing in every economy"
    },
    "answer": "A",
    "explanation": "Tourism creates demand for a range of commercial services and can generate employment and foreign exchange.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "comm_tough_85",
    "originalChapter": 13,
    "chapterTitle": "Communication, E-Commerce & Information Technology",
    "topic": "Electronic Commerce: Direct Online Retailing",
    "bookQuestionNum": 85,
    "text": "Which of the following is an example of a direct channel of electronic commerce?",
    "options": {
      "A": "A producer sells through its own website directly to consumers.",
      "B": "A producer sells only to a wholesaler, who sells to a retailer.",
      "C": "A manufacturer sells all output to an export agent.",
      "D": "A consumer obtains an item through a traditional auction house only."
    },
    "answer": "A",
    "explanation": "Direct e-commerce removes the need for a separate reseller between the producer and final consumer.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "comm_tough_86",
    "originalChapter": 14,
    "chapterTitle": "Marketing Mix & Market Segmentation",
    "topic": "Marketing Principles: The 4 Ps of Marketing Mix",
    "bookQuestionNum": 86,
    "text": "The marketing mix traditionally consists of",
    "options": {
      "A": "product, price, place and promotion",
      "B": "production, population, policy and profit",
      "C": "purchase, people, payment and paperwork only",
      "D": "planning, protection, politics and productivity"
    },
    "answer": "A",
    "explanation": "The traditional four Ps are product, price, place (distribution) and promotion.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "comm_tough_87",
    "originalChapter": 14,
    "chapterTitle": "Marketing Mix & Market Segmentation",
    "topic": "Market Strategy: Market Segmentation",
    "bookQuestionNum": 87,
    "text": "A company divides a market into groups based on age, income, location and lifestyle. This process is called",
    "options": {
      "A": "market segmentation",
      "B": "nationalisation",
      "C": "warehousing",
      "D": "capitalisation"
    },
    "answer": "A",
    "explanation": "Segmentation groups consumers with similar characteristics or needs, allowing more focused marketing.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "comm_tough_88",
    "originalChapter": 14,
    "chapterTitle": "Marketing Mix & Market Segmentation",
    "topic": "Pricing Strategy: Penetration Pricing",
    "bookQuestionNum": 88,
    "text": "A business sells a new product at a low introductory price to gain market share quickly. This pricing strategy is known as",
    "options": {
      "A": "price skimming",
      "B": "penetration pricing",
      "C": "cost-plus pricing only",
      "D": "discriminatory taxation"
    },
    "answer": "B",
    "explanation": "Penetration pricing uses a relatively low initial price to attract customers and establish market presence.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "comm_tough_89",
    "originalChapter": 14,
    "chapterTitle": "Marketing Mix & Market Segmentation",
    "topic": "Pricing Strategy: Price Skimming",
    "bookQuestionNum": 89,
    "text": "A business launches an innovative product at a high initial price, then reduces the price as competition increases or demand from early adopters is satisfied. This is",
    "options": {
      "A": "price skimming",
      "B": "penetration pricing",
      "C": "barter pricing",
      "D": "transfer pricing in every case"
    },
    "answer": "A",
    "explanation": "Skimming seeks to earn high margins from customers willing to pay more during the early stages of a product's life.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "comm_tough_90",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Management Functions: Controlling",
    "bookQuestionNum": 90,
    "text": "Which management function involves comparing actual performance with established standards and taking corrective action where necessary?",
    "options": {
      "A": "Planning",
      "B": "Organising",
      "C": "Controlling",
      "D": "Staffing only"
    },
    "answer": "C",
    "explanation": "Controlling measures performance against targets, identifies deviations and supports corrective action.",
    "page": 9,
    "hasImage": false
  },
  {
    "id": "comm_tough_91",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Management Functions: Planning",
    "bookQuestionNum": 91,
    "text": "Which management function determines the business objectives and the steps needed to achieve them?",
    "options": {
      "A": "Planning",
      "B": "Controlling",
      "C": "Auditing only",
      "D": "Advertising"
    },
    "answer": "A",
    "explanation": "Planning establishes objectives and determines suitable actions and resource requirements.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "comm_tough_92",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Management Principles: Delegation of Authority",
    "bookQuestionNum": 92,
    "text": "A manager assigns authority to a subordinate to perform a defined task while retaining overall accountability. This process is called",
    "options": {
      "A": "delegation",
      "B": "liquidation",
      "C": "nationalisation",
      "D": "franchising"
    },
    "answer": "A",
    "explanation": "Delegation transfers authority to perform specified tasks, although the manager retains overall accountability for the delegated responsibility.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "comm_tough_93",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Stock Control: Closing Stock Determination",
    "bookQuestionNum": 93,
    "text": "A company has 1,000 units of stock available. It sells 760 units and keeps the balance in storage. What is its closing stock?",
    "options": {
      "A": "120 units",
      "B": "240 units",
      "C": "760 units",
      "D": "1,760 units"
    },
    "answer": "B",
    "explanation": "Closing stock = stock available − units sold = 1,000 − 760 = 240 units.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "comm_tough_94",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Commercial Regulation: Corporate Affairs Commission (CAC)",
    "bookQuestionNum": 94,
    "text": "Which organisation is primarily responsible for registering companies and business names in Nigeria?",
    "options": {
      "A": "Corporate Affairs Commission (CAC)",
      "B": "Nigeria Customs Service",
      "C": "Federal Road Safety Corps",
      "D": "Nigerian Meteorological Agency"
    },
    "answer": "A",
    "explanation": "The CAC administers company and business-name registration under the applicable Nigerian legal framework.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "comm_tough_95",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Law of Contract: Elements of a Valid Contract",
    "bookQuestionNum": 95,
    "text": "Which statement best describes a contract?",
    "options": {
      "A": "Every promise made casually is automatically enforceable.",
      "B": "A contract is an agreement that satisfies the legal requirements for enforceability.",
      "C": "A contract is always an oral agreement only.",
      "D": "A contract cannot involve the sale of goods."
    },
    "answer": "B",
    "explanation": "Enforceability depends on applicable legal requirements, which commonly include agreement, consideration where required, capacity, intention and lawful purpose.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "comm_tough_96",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Consumer Protection: False & Misleading Advertising",
    "bookQuestionNum": 96,
    "text": "A trader advertises a product with a false claim about its contents to persuade consumers to buy it. This conduct may violate rules concerning",
    "options": {
      "A": "misleading advertising and consumer protection",
      "B": "proper warehouse rotation only",
      "C": "industrial localisation",
      "D": "foreign exchange conversion only"
    },
    "answer": "A",
    "explanation": "False or misleading claims can breach consumer-protection and advertising rules, depending on the facts and applicable law.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "comm_tough_97",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Consumer Rights: Proof of Purchase Receipts",
    "bookQuestionNum": 97,
    "text": "A consumer purchases a defective product and seeks a remedy from the seller. Which document is most useful as evidence that the purchase occurred?",
    "options": {
      "A": "Receipt",
      "B": "Blank order form",
      "C": "Unrelated advertisement",
      "D": "Personal diary with no transaction details"
    },
    "answer": "A",
    "explanation": "A receipt records that a payment or purchase took place and may assist a consumer in pursuing a complaint or remedy.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "comm_tough_98",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Consumer Protection: Role of FCCPC",
    "bookQuestionNum": 98,
    "text": "Which body is principally associated with protecting consumers and enforcing competition and consumer-protection rules in Nigeria under the current federal framework?",
    "options": {
      "A": "Federal Competition and Consumer Protection Commission (FCCPC)",
      "B": "Corporate Affairs Commission (CAC) alone",
      "C": "Nigeria Customs Service alone",
      "D": "Nigerian Meteorological Agency"
    },
    "answer": "A",
    "explanation": "The FCCPC administers major federal competition and consumer-protection functions, including addressing prohibited practices and consumer complaints within its remit.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "comm_tough_99",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Commodity Markets: Functions of Commodity Exchanges",
    "bookQuestionNum": 99,
    "text": "What is the main purpose of a commodity exchange?",
    "options": {
      "A": "To facilitate organised trading in specified commodities or commodity-related contracts under established rules",
      "B": "To sell only ordinary shares in private companies",
      "C": "To register every marriage in a state",
      "D": "To replace all commercial banks"
    },
    "answer": "A",
    "explanation": "Commodity exchanges provide organised trading arrangements that can support price discovery, standardisation and risk management.",
    "page": 10,
    "hasImage": false
  },
  {
    "id": "comm_tough_100",
    "originalChapter": 15,
    "chapterTitle": "Business Management, Commercial Law & Consumer Protection",
    "topic": "Trading Accounts: Net Profit Determination",
    "bookQuestionNum": 100,
    "text": "A trader buys 500 bags of grain at ₦40,000 per bag. Transportation costs total ₦600,000, storage costs total ₦200,000, and all 500 bags are sold at ₦43,000 per bag. Ignoring other expenses, calculate the trader's net profit.",
    "options": {
      "A": "₦300,000",
      "B": "₦500,000",
      "C": "₦700,000",
      "D": "₦1,500,000"
    },
    "answer": "A",
    "explanation": "Purchase cost = 500 × ₦40,000 = ₦20,000,000. Total selling revenue = 500 × ₦43,000 = ₦21,500,000. Total costs = ₦20,000,000 + ₦600,000 + ₦200,000 = ₦20,800,000. Net profit = ₦21,500,000 − ₦20,800,000 = ₦700,000. Therefore, the correct option is C.",
    "page": 10,
    "hasImage": false
  }
];
