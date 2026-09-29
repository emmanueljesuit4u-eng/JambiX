import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const standardSvg = fs.readFileSync(path.join(publicDir, 'favicon.svg'));

// Maskable SVG with full bleed background and padded central logo for Android squircle safe-zone
const maskableSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#059669"/>
  <g transform="translate(64, 64) scale(6)">
    <path d="M32 14L14 24L32 34L50 24L32 14Z" fill="#FFFFFF"/>
    <path d="M20 28.5V41C20 44 25.5 48 32 48C38.5 48 44 44 44 41V28.5L32 36L20 28.5Z" fill="#A7F3D0"/>
    <circle cx="49" cy="35" r="3.5" fill="#FBBF24"/>
    <path d="M49 38.5V45" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
  </g>
</svg>
`;

async function generate() {
  console.log('Generating PWA icons...');
  
  // 192x192
  await sharp(standardSvg)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('Generated pwa-192x192.png');

  // 512x512
  await sharp(standardSvg)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('Generated pwa-512x512.png');

  // 180x180 Apple Touch Icon
  await sharp(standardSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // 512x512 Maskable
  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  console.log('Generated pwa-maskable-512x512.png');

  console.log('All PWA icons generated successfully!');
}

generate().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
