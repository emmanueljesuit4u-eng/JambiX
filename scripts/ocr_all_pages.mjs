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

console.log(`Found ${pageFiles.length} page images.`);

async function processPage(f) {
  const pNum = f.replace(/[^0-9]/g, '');
  const outPath = path.join(outDir, `page-${pNum}.txt`);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 100) {
    return;
  }

  const fullPath = path.join('/tmp/lamlad_pages', f);
  try {
    const meta = await sharp(fullPath).metadata();
    const w = meta.width;
    const h = meta.height;

    const rId = Math.random().toString(36).slice(2, 7);

    // Left column
    const bufL = await sharp(fullPath)
      .extract({ left: 30, top: Math.floor(h * 0.05), width: 650, height: Math.floor(h * 0.92) })
      .toBuffer();
    const tmpL = `/tmp/temp_col_l_${pNum}_${rId}.png`;
    fs.writeFileSync(tmpL, bufL);
    const leftTxt = execSync(`tesseract ${tmpL} stdout --psm 6 2>/dev/null`, { encoding: 'utf-8' });
    try { fs.unlinkSync(tmpL); } catch (e) {}

    // Right column
    const bufR = await sharp(fullPath)
      .extract({ left: 690, top: Math.floor(h * 0.05), width: w - 710, height: Math.floor(h * 0.92) })
      .toBuffer();
    const tmpR = `/tmp/temp_col_r_${pNum}_${rId}.png`;
    fs.writeFileSync(tmpR, bufR);
    const rightTxt = execSync(`tesseract ${tmpR} stdout --psm 6 2>/dev/null`, { encoding: 'utf-8' });
    try { fs.unlinkSync(tmpR); } catch (e) {}

    const combined = `=== PAGE ${pNum} LEFT ===\n` + leftTxt + `\n\n=== PAGE ${pNum} RIGHT ===\n` + rightTxt;
    fs.writeFileSync(outPath, combined);
    console.log(`Page ${pNum} OCR done.`);
  } catch (err) {
    console.error(`Error on page ${pNum}:`, err.message);
  }
}

// Concurrency pool of 6
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

runPool(pageFiles, 6).then(() => {
  console.log('All OCR parallel runs finished!');
}).catch(console.error);
