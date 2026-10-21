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

const htmlFileList = getFiles('dist');
let trueBroken = [];

htmlFileList.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const source = file.replace(/\\/g, '/').replace(/^dist/, '').replace(/index\.html$/, '');
  const anchorRegex = /<a\s+[^>]*href=["']([^"']*)["'][^>]*>/gi;
  let m;
  while ((m = anchorRegex.exec(html)) !== null) {
    let href = m[1];
    if (href.startsWith('/') && !href.startsWith('//')) {
      let clean = href.split('?')[0].split('#')[0];
      let localPath = path.join('dist', clean);
      let localHtml = path.join('dist', clean, 'index.html');
      if (!fs.existsSync(localPath) && !fs.existsSync(localHtml)) {
        trueBroken.push({ source, href, localPath, localHtml });
      }
    }
  }
});

console.log('True broken internal links count:', trueBroken.length);
if (trueBroken.length > 0) {
  console.log('Sample true broken:', trueBroken.slice(0, 10));
}
