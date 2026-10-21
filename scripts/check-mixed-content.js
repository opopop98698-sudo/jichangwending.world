import fs from 'fs';
import path from 'path';

function getFiles(d, list = []) {
  fs.readdirSync(d).forEach(f => {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) getFiles(p, list);
    else if (f.endsWith('.html')) list.push(p);
  });
  return list;
}

const files = getFiles('dist');
let mixedContent = [];
files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const matches = html.match(/(src|href)=["']http:\/\/[^"']+["']/gi) || [];
  matches.forEach(m => {
    if (m.includes('.js') || m.includes('.css') || m.includes('.png') || m.includes('.jpg') || m.includes('.webp') || m.includes('.svg')) {
      mixedContent.push({ file: f, match: m });
    }
  });
});

console.log('Mixed content asset references:', mixedContent.length);
if (mixedContent.length > 0) console.log(mixedContent.slice(0, 5));
