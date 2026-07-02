import sharp from 'sharp';
import { readFileSync } from 'fs';

// --- OG Image (1200x630) ---
const ogSvg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3B2A1E"/>
      <stop offset="100%" stop-color="#1A1A1A"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- Accent bar -->
  <rect x="0" y="0" width="8" height="630" fill="#D4A373"/>
  <!-- Logo area -->
  <rect x="80" y="80" width="64" height="64" rx="12" fill="#D4A373"/>
  <text x="112" y="125" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="36" font-weight="800" fill="white">H</text>
  <!-- Title -->
  <text x="80" y="240" font-family="Arial Black, sans-serif" font-size="64" font-weight="800" fill="white" letter-spacing="-2">Rhode Island</text>
  <text x="80" y="320" font-family="Arial Black, sans-serif" font-size="64" font-weight="800" fill="white" letter-spacing="-2">Hardwood Specialists</text>
  <!-- Subtitle -->
  <text x="80" y="380" font-family="Arial, sans-serif" font-size="24" fill="#D4A373" font-weight="600" letter-spacing="3" text-transform="uppercase">REFINISHING &amp; INSTALLATION</text>
  <!-- Trust line -->
  <text x="80" y="460" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,0.7)">&#9733; 5-Star Rated  &#x2713; Licensed &amp; Insured  &#x2713; Serving RI Since 2015</text>
  <!-- Bottom bar -->
  <rect x="0" y="580" width="1200" height="50" fill="#D4A373" opacity="0.15"/>
  <text x="80" y="612" font-family="Arial, sans-serif" font-size="18" fill="#D4A373" font-weight="600">hawkinshardwoodflooring.com</text>
  <text x="1120" y="612" text-anchor="end" font-family="Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.4)">(401) 486-5587</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png().toFile('public/og-image.png');
console.log('Created: public/og-image.png (1200x630)');

// --- Favicons from SVG ---
const faviconSvg = readFileSync('public/favicon.svg');

await sharp(faviconSvg).resize(32, 32).png().toFile('public/favicon-32.png');
console.log('Created: public/favicon-32.png');

await sharp(faviconSvg).resize(16, 16).png().toFile('public/favicon-16.png');
console.log('Created: public/favicon-16.png');

await sharp(faviconSvg).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Created: public/apple-touch-icon.png');

console.log('Done! All assets generated.');
