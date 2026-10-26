import fs from 'fs';
import path from 'path';

// Complete Chapter Metadata & Verified Answer Keys from Lamlad Biology
const CHAPTERS = [
  {
    chapter: 1,
    title: 'Concept of Living',
    pages: ['016', '017', '018', '019', '020'],
    answers: {
      1: 'C', 2: 'D', 3: 'D', 4: 'B', 5: 'B', 6: 'C', 7: 'E', 8: 'E', 9: 'C', 10: 'E',
      11: 'A', 12: 'B', 13: 'D', 14: 'B', 15: 'C', 16: 'E', 17: 'C', 18: 'A', 19: 'B', 20: 'C',
      21: 'D', 22: 'D', 23: 'C', 24: 'C', 25: 'B', 26: 'D', 27: 'B', 28: 'B', 29: 'A', 30: 'B',
      31: 'C', 32: 'C', 33: 'B', 34: 'A', 35: 'C', 36: 'A', 37: 'D', 38: 'B', 39: 'D', 40: 'D',
      41: 'D', 42: 'C', 43: 'B', 44: 'C'
    }
  },
  {
    chapter: 2,
    title: 'The Cell and its Environment',
    pages: ['034', '035', '036'],
    answers: {
      1: 'A', 2: 'E', 3: 'D', 4: 'C', 5: 'E', 6: 'A', 7: 'A', 8: 'C', 9: 'B', 10: 'B',
      11: 'D', 12: 'C', 13: 'C', 14: 'C', 15: 'D', 16: 'B', 17: 'A', 18: 'E', 19: 'D', 20: 'D',
      21: 'C', 22: 'E', 23: 'C', 24: 'B', 25: 'A', 26: 'B', 27: 'C', 28: 'B'
    }
  },
  {
    chapter: 3,
    title: 'Tissues and Supportive Systems',
    pages: ['049', '050', '051', '052'],
    answers: {
      1: 'A', 2: 'B', 3: 'D', 4: 'A', 5: 'D', 6: 'E', 7: 'E', 8: 'A', 9: 'A', 10: 'B',
      11: 'D', 12: 'B', 13: 'C', 14: 'B', 15: 'C', 16: 'E', 17: 'C', 18: 'C', 19: 'B', 20: 'D',
      21: 'D', 22: 'C', 23: 'A', 24: 'A', 25: 'B', 26: 'A', 27: 'B', 28: 'C', 29: 'A', 30: 'D',
      31: 'B', 32: 'C', 33: 'E', 34: 'B', 35: 'C', 36: 'D', 37: 'D', 38: 'C'
    }
  },
  {
    chapter: 4,
    title: 'Nervous and Hormonal Coordination',
    pages: ['060', '061', '062', '063'],
    answers: {
      1: 'B', 2: 'C', 3: 'C', 4: 'A', 5: 'A', 6: 'C', 7: 'A', 8: 'D', 9: 'E', 10: 'C',
      11: 'A', 12: 'E', 13: 'A', 14: 'E', 15: 'D', 16: 'A', 17: 'B', 18: 'D', 19: 'B', 20: 'C',
      21: 'D', 22: 'B', 23: 'A', 24: 'B', 25: 'A', 26: 'A', 27: 'E', 28: 'B', 29: 'C', 30: 'E',
      31: 'C', 32: 'C', 33: 'C', 34: 'D', 35: 'D', 36: 'B', 37: 'A', 38: 'B', 39: 'B', 40: 'E'
    }
  },
  {
    chapter: 5,
    title: 'Reproduction',
    pages: ['078', '079', '080', '081'],
    answers: {
      1: 'A', 2: 'C', 3: 'B', 4: 'C', 5: 'C', 6: 'B', 7: 'E', 8: 'C', 9: 'B', 10: 'C',
      11: 'B', 12: 'A', 13: 'C', 14: 'C', 15: 'B', 16: 'E', 17: 'D', 18: 'D', 19: 'D', 20: 'B',
      21: 'E', 22: 'D', 23: 'C', 24: 'D', 25: 'B', 26: 'C', 27: 'B', 28: 'B', 29: 'C', 30: 'B',
      31: 'D', 32: 'A', 33: 'B', 34: 'A', 35: 'A', 36: 'B', 37: 'D', 38: 'B', 39: 'D', 40: 'A'
    }
  },
  {
    chapter: 6,
    title: 'Nutrition',
    pages: ['094', '095', '096'],
    answers: {
      1: 'B', 2: 'A', 3: 'C', 4: 'D', 5: 'D', 6: 'D', 7: 'E', 8: 'C', 9: 'A', 10: 'D',
      11: 'C', 12: 'B', 13: 'C', 14: 'D', 15: 'C', 16: 'E', 17: 'C', 18: 'C', 19: 'E', 20: 'A',
      21: 'C', 22: 'C', 23: 'C', 24: 'C', 25: 'E', 26: 'D', 27: 'E', 28: 'A', 29: 'E', 30: 'C',
      31: 'E', 32: 'D', 33: 'E', 34: 'C', 35: 'D', 36: 'A', 37: 'C', 38: 'B', 39: 'C', 40: 'A'
    }
  },
  {
    chapter: 7,
    title: 'Basic Ecological Concepts',
    pages: ['106', '107', '108'],
    answers: {
      1: 'E', 2: 'A', 3: 'D', 4: 'E', 5: 'C', 6: 'B', 7: 'A', 8: 'A', 9: 'C', 10: 'C',
      11: 'A', 12: 'A', 13: 'A', 14: 'B', 15: 'C', 16: 'B', 17: 'B', 18: 'E', 19: 'B', 20: 'E',
      21: 'C', 22: 'C', 23: 'B', 24: 'D', 25: 'A', 26: 'C', 27: 'B', 28: 'B', 29: 'D', 30: 'D'
    }
  },
  {
    chapter: 8,
    title: 'Functioning Ecosystem',
    pages: ['112', '113', '114'],
    answers: {
      1: 'B', 2: 'D', 3: 'D', 4: 'C', 5: 'C', 6: 'C', 7: 'D', 8: 'A', 9: 'E', 10: 'D',
      11: 'C', 12: 'D', 13: 'A', 14: 'C', 15: 'D', 16: 'D', 17: 'D', 18: 'C', 19: 'D', 20: 'C',
      21: 'A', 22: 'A', 23: 'A', 24: 'C'
    }
  },
  {
    chapter: 9,
    title: 'Energy Transformation in Nature',
    pages: ['117'],
    answers: {
      1: 'C', 2: 'B', 3: 'E', 4: 'B', 5: 'E', 6: 'C', 7: 'A', 8: 'C', 9: 'C', 10: 'D'
    }
  },
  {
    chapter: 10,
    title: 'Ecological Management',
    pages: ['122', '123'],
    answers: {
      1: 'B', 2: 'C', 3: 'E', 4: 'C', 5: 'A', 6: 'E', 7: 'E', 8: 'D', 9: 'C', 10: 'B',
      11: 'D', 12: 'B', 13: 'C', 14: 'C', 15: 'A', 16: 'B', 17: 'B', 18: 'C', 19: 'D', 20: 'B',
      21: 'C'
    }
  },
  {
    chapter: 11,
    title: 'Habitats',
    pages: ['128'],
    answers: {
      1: 'D', 2: 'C', 3: 'B', 4: 'E', 5: 'C', 6: 'C', 7: 'D', 8: 'C', 9: 'A', 10: 'D',
      11: 'C', 12: 'D'
    }
  },
  {
    chapter: 12,
    title: 'Ecology of Populations',
    pages: ['133', '134'],
    answers: {
      1: 'C', 2: 'A', 3: 'D', 4: 'C', 5: 'E', 6: 'E', 7: 'A', 8: 'A', 9: 'A', 10: 'B',
      11: 'E', 12: 'B', 13: 'C', 14: 'D', 15: 'C', 16: 'C', 17: 'D'
    }
  },
  {
    chapter: 13,
    title: 'Relevance of Biology to Agriculture',
    pages: ['140', '141'],
    answers: {
      1: 'E', 2: 'B', 3: 'C', 4: 'D', 5: 'D', 6: 'C', 7: 'C', 8: 'E', 9: 'A', 10: 'D',
      11: 'E', 12: 'B', 13: 'B', 14: 'A', 15: 'B', 16: 'E', 17: 'D', 18: 'A'
    }
  },
  {
    chapter: 14,
    title: 'Micro-organisms: Man and His Health',
    pages: ['146'],
    answers: {
      1: 'E', 2: 'B', 3: 'D', 4: 'D', 5: 'A', 6: 'C', 7: 'C', 8: 'D'
    }
  },
  {
    chapter: 15,
    title: 'Conservation, Genetics and Evolution',
    pages: ['155', '156', '157'],
    answers: {
      1: 'E', 2: 'D', 3: 'C', 4: 'E', 5: 'D', 6: 'A', 7: 'E', 8: 'A', 9: 'D', 10: 'E',
      11: 'D', 12: 'A', 13: 'E', 14: 'C', 15: 'B', 16: 'C', 17: 'B', 18: 'A', 19: 'B', 20: 'B',
      21: 'A', 22: 'B', 23: 'E', 24: 'E', 25: 'E', 26: 'E', 27: 'B', 28: 'C', 29: 'A', 30: 'D'
    }
  }
];

function cleanOptionLetter(str) {
  return str.replace(/[^A-Ea-e]/g, '').toUpperCase();
}

function parseQuestions(rawText, chapterAnswers, chapterMeta) {
  // Only start parsing after Objective Questions header
  let text = rawText;
  const startIdx = text.search(/SSCE|UME|Objective Questions/i);
  if (startIdx !== -1) {
    text = text.slice(startIdx);
  }
  // Cut off at Answer Key or Explanations
  const endIdx = text.search(/Answer Key|Explanations to Objective/i);
  if (endIdx !== -1) {
    text = text.slice(0, endIdx);
  }

  const lines = text.split('\n');
  const questions = [];
  let currentQ = null;

  for (let rawLine of lines) {
    let line = rawLine.trim();
    if (!line) continue;
    if (/=== PAGE \d+ (LEFT|RIGHT) ===/i.test(line)) continue;
    if (/SSCE\/UME-Type Objective Questions/i.test(line)) continue;

    // Detect question start: e.g. "1.", "1,", "1)", or " 24. "
    const qStart = line.match(/^(\d{1,2})\s*[\.\,\)]\s*(.*)$/);
    if (qStart) {
      const num = parseInt(qStart[1], 10);
      if (num >= 1 && num <= 60 && chapterAnswers[num]) {
        if (currentQ) questions.push(currentQ);
        currentQ = {
          num,
          prompt: qStart[2] || '',
          options: {}
        };
        continue;
      }
    }

    if (!currentQ) continue;

    // Parse options within this line:
    // Can be inline: (a) Meiosis (b) Mitosis
    // Or A. ... B. ...
    // Or single: A. ...
    // Or (a) ...
    // Let's match any token like (a), (A), A., a. followed by text
    const optMatches = [];
    const optRegex = /(?:^|\s+)(?:\(([a-eA-E])\)|\b([a-eA-E])[\.\)])\s+/g;
    let match;
    const indices = [];
    while ((match = optRegex.exec(line)) !== null) {
      const letter = (match[1] || match[2]).toUpperCase();
      indices.push({ letter, index: match.index, length: match[0].length });
    }

    if (indices.length > 0) {
      for (let i = 0; i < indices.length; i++) {
        const item = indices[i];
        const start = item.index + item.length;
        const end = (i + 1 < indices.length) ? indices[i + 1].index : line.length;
        const val = line.slice(start, end).trim().replace(/[\,\;]$/, '');
        if (val.length > 0) {
          currentQ.options[item.letter] = val;
        }
      }
      continue;
    }

    // If no option started on this line:
    if (Object.keys(currentQ.options).length === 0) {
      currentQ.prompt += ' ' + line;
    } else {
      // Continuation of previous option
      const keys = Object.keys(currentQ.options);
      const lastKey = keys[keys.length - 1];
      if (lastKey) {
        currentQ.options[lastKey] += ' ' + line;
      }
    }
  }

  if (currentQ) questions.push(currentQ);

  // Validate and format
  const valid = [];
  for (const q of questions) {
    const ans = chapterAnswers[q.num];
    if (!ans) continue;

    let p = q.prompt.trim().replace(/\s+/g, ' ');
    // Skip if prompt is empty or asks for an omitted diagram
    if (p.length < 5) continue;
    if (/diagram|figure\s+\d|fig\.\s*\d/i.test(p) && Object.keys(q.options).length < 2) continue;

    // Clean option values
    const opts = {};
    for (const [k, v] of Object.entries(q.options)) {
      opts[k] = v.trim().replace(/\s+/g, ' ');
    }

    valid.push({
      chapter: chapterMeta.chapter,
      num: q.num,
      text: p,
      options: opts,
      ans,
      optCount: Object.keys(opts).length
    });
  }

  return valid;
}

let totalFound = 0;
let totalOfficial = 0;

for (const ch of CHAPTERS) {
  let combined = '';
  for (const p of ch.pages) {
    const pPath = `/tmp/ocr_results/page-${p}.txt`;
    if (fs.existsSync(pPath)) {
      combined += fs.readFileSync(pPath, 'utf8') + '\n\n';
    }
  }

  const res = parseQuestions(combined, ch.answers, ch);
  const officialCount = Object.keys(ch.answers).length;
  totalOfficial += officialCount;
  totalFound += res.length;
  console.log(`Ch ${ch.chapter} (${ch.title}): Found ${res.length} / ${officialCount} questions. (Full options >= 4: ${res.filter(q => q.optCount >= 4).length})`);
}

console.log(`\nTOTAL FOUND: ${totalFound} / ${totalOfficial}`);
