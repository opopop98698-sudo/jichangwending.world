import fs from 'fs';
import path from 'path';

const astroDir = 'dist/_astro';
if (fs.existsSync(astroDir)) {
  const files = fs.readdirSync(astroDir);
  console.log('Total assets in _astro:', files.length);
  files.forEach(f => {
    const s = fs.statSync(path.join(astroDir, f)).size;
    console.log('  ', f, '(' + (s/1024).toFixed(1) + ' KB)');
  });
}

// Check images for width/height/loading
let imgWithoutDimensions = 0;
let imgWithoutLazy = 0;
let totalImgs = 0;

function checkImgs(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) checkImgs(p);
    else if (f.endsWith('.html')) {
      const html = fs.readFileSync(p, 'utf8');
      const matches = html.match(/<img\s+[^>]+>/gi) || [];
      matches.forEach(img => {
        totalImgs++;
        if (!img.includes('width=') || !img.includes('height=')) imgWithoutDimensions++;
        if (!img.includes('loading=')) imgWithoutLazy++;
      });
    }
  });
}
checkImgs('dist');
console.log('Total img tags across all pages:', totalImgs);
console.log('Img tags without width/height:', imgWithoutDimensions);
console.log('Img tags without loading attribute:', imgWithoutLazy);
