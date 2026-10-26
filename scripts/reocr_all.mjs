import sharp from 'sharp';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const outDir = '/tmp/ocr_results';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const pageFiles = fs.readdirSync('/tmp/lamlad_pages')
  .filter(f => f.endsWith('.png'))
  .sort();

console.log(`Re-OCR with optimal columns on ${pageFiles.length} page images...`);

async function processPage(f) {
  const pNum = f.replace(/[^0-9]/g, '');
  const outPath = path.join(outDir, `page-${pNum}.txt`);
  const fullPath = path.join('/tmp/lamlad_pages', f);

  try {
    const meta = await sharp(fullPath).metadata();
    const w = meta.width;
    const h = meta.height;
    const rId = Math.random().toString(36).slice(2, 7);

    // Left column: left: 15, width: 610
    const bufL = await sharp(fullPath)
      .extract({ left: 15, top: Math.floor(h * 0.05), width: 610, height: Math.floor(h * 0.92) })
      .toBuffer();
    const tmpL = `/tmp/temp_col_l_${pNum}_${rId}.png`;
    fs.writeFileSync(tmpL, bufL);
    const leftTxt = execSync(`tesseract ${tmpL} stdout --psm 6 2>/dev/null`, { encoding: 'utf-8' });
    try { fs.unlinkSync(tmpL); } catch (e) {}

    // Right column: left: 625, width: 595
    const bufR = await sharp(fullPath)
      .extract({ left: 625, top: Math.floor(h * 0.05), width: 595, height: Math.floor(h * 0.92) })
      .toBuffer();
    const tmpR = `/tmp/temp_col_r_${pNum}_${rId}.png`;
    fs.writeFileSync(tmpR, bufR);
    const rightTxt = execSync(`tesseract ${tmpR} stdout --psm 6 2>/dev/null`, { encoding: 'utf-8' });
    try { fs.unlinkSync(tmpR); } catch (e) {}

    const combined = `=== PAGE ${pNum} LEFT ===\n` + leftTxt + `\n\n=== PAGE ${pNum} RIGHT ===\n` + rightTxt;
    fs.writeFileSync(outPath, combined);
    console.log(`Page ${pNum} optimal OCR done.`);
  } catch (err) {
    console.error(`Error on page ${pNum}:`, err.message);
  }
}

// Concurrency 2
async function runPool(items, limit) {
  const executing = new Set();
  for (const item of items) {
    const p = Promise.resolve().then(() => processPage(item));
    executing.add(p);
    const clean = () => executing.delete(p);
    p.then(clean).catch(clean);
    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }
  await Promise.all(executing);
}

runPool(pageFiles, 2).then(() => {
  console.log('All optimal OCR finished!');
}).catch(console.error);
