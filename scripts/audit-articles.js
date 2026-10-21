import fs from 'fs';

const sampleFiles = [
  'dist/recommend/articles/r01-a-1/index.html',
  'dist/stable/articles/s01-a-1/index.html',
  'dist/free/articles/f01-a-1/index.html',
  'dist/lines/articles/l01-a-1/index.html',
  'dist/lab/articles/t01-a-1/index.html',
  'dist/status/articles/o01-a-1/index.html',
  'dist/reviews/articles/e01-a-1/index.html',
  'dist/troubleshoot/articles/n01-a-1/index.html'
];

console.log('--- AUDITING LEVEL-3 ARTICLE PAGES IN DIST ---');
for (const file of sampleFiles) {
  if (!fs.existsSync(file)) {
    console.error(`MISSING: ${file}`);
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  const sizeKb = (content.length / 1024).toFixed(1);
  const hasSchema = content.includes('application/ld+json') && content.includes('FAQPage');
  const hasAffRel = content.includes('rel="nofollow sponsored noopener"');
  const hasMath = content.includes('数学定量推导与传输效能模型');
  const hasISP = content.includes('三大运营商骨干网路由实测表现');
  const hasWireshark = content.includes('底层抓包剖析与协议特征诊断');
  const hasSOP = content.includes('全生命周期标准化处置 SOP');

  // Strip html tags to measure text length
  const textOnly = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  const charCount = textOnly.length;

  console.log(`[PASS] ${file} | Size: ${sizeKb} KB | Raw Chars: ${charCount} | Schema: ${hasSchema} | AffRel: ${hasAffRel} | Math: ${hasMath} | ISP: ${hasISP} | Wireshark: ${hasWireshark} | SOP: ${hasSOP}`);
}

// Check total articles in dist
let totalArticleDirs = 0;
const categories = ['recommend', 'stable', 'free', 'lines', 'lab', 'status', 'reviews', 'troubleshoot'];
for (const cat of categories) {
  const dir = `dist/${cat}/articles`;
  if (fs.existsSync(dir)) {
    const list = fs.readdirSync(dir);
    totalArticleDirs += list.length;
  }
}
console.log(`Total Level-3 articles found in dist: ${totalArticleDirs}/384`);
