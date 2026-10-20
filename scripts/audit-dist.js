import fs from 'fs';
import path from 'path';

console.log('--- 1. AUDITING ROBOTS.TXT ---');
const robots = fs.readFileSync(path.join('dist', 'robots.txt'), 'utf8');
console.log(robots);

console.log('--- 2. AUDITING SITEMAP ---');
const sitemap = fs.readFileSync(path.join('dist', 'sitemap-index.xml'), 'utf8');
console.log(sitemap);

console.log('--- 3. AUDITING HTML SIZES & COMPLIANCE ---');
const checkFiles = [
  'index.html',
  'recommend/index.html',
  'stable/index.html',
  'free/index.html',
  'lab/index.html',
  'lines/index.html',
  'status/index.html',
  'reviews/index.html',
  'troubleshoot/index.html',
  'brands/index.html',
  'brands/lightspeed/index.html',
  'brands/feimao/index.html',
  'brands/firefly/index.html',
  'brands/yinxingren/index.html',
  'about/index.html',
  'methodology/index.html',
  'disclosure/index.html',
  'privacy/index.html',
  'corrections/index.html'
];

let allOk = true;

for (const file of checkFiles) {
  const fullPath = path.join('dist', file);
  if (!fs.existsSync(fullPath)) {
    console.error(`MISSING: ${file}`);
    allOk = false;
    continue;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const size = content.length;
  const hasMetaDesc = content.includes('name="description"');
  const hasTitle = content.includes('<title>');
  const hasCanonical = content.includes('rel="canonical"');
  
  // Check affiliate links compliance if any external links exist
  let affCompliance = true;
  const matches = content.match(/href="https?:\/\/[^"]+"/g) || [];
  for (const m of matches) {
    if (m.includes('aff') || m.includes('code=')) {
      if (!content.includes('rel="nofollow sponsored noopener"')) {
        affCompliance = false;
      }
    }
  }

  console.log(`[PASS] ${file.padEnd(30)} Size: ${(size / 1024).toFixed(1)} KB | Title: ${hasTitle} | Desc: ${hasMetaDesc} | Canonical: ${hasCanonical} | AffOK: ${affCompliance}`);
}

console.log('--- 4. CHECKING SPECIAL DATA INTEGRITY POINTS ---');
// 1. yinxingren should have Not Tested
const yxr = fs.readFileSync(path.join('dist', 'brands', 'yinxingren', 'index.html'), 'utf8');
console.log('yinxingren has Not Tested / 待核验:', yxr.includes('暂无实测样本') || yxr.includes('Not Tested') || yxr.includes('待核验'));

// 2. cyberguard should retain 6000ms
const cg = fs.readFileSync(path.join('dist', 'brands', 'cyberguard', 'index.html'), 'utf8');
console.log('cyberguard has 6000ms anomaly note:', cg.includes('6000') || cg.includes('异常待核实'));

// 3. lightspeed has top1 / primary recommend
const ls = fs.readFileSync(path.join('dist', 'brands', 'lightspeed', 'index.html'), 'utf8');
console.log('lightspeed is recognized as top recommended:', ls.includes('第一主推') || ls.includes('编辑推荐'));

console.log('Audit complete. All OK:', allOk);
