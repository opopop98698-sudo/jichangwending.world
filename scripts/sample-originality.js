import fs from 'fs';

const sampleArticles = [
  'dist/recommend/articles/r01-a-1/index.html',
  'dist/recommend/articles/r02-a-2/index.html',
  'dist/stable/articles/s01-a-1/index.html',
  'dist/stable/articles/s02-b-2/index.html',
  'dist/free/articles/f01-a-1/index.html',
  'dist/lines/articles/l01-a-1/index.html',
  'dist/lines/articles/l02-b-1/index.html',
  'dist/lab/articles/t01-a-1/index.html',
  'dist/status/articles/o01-a-1/index.html',
  'dist/troubleshoot/articles/n01-a-1/index.html'
];

sampleArticles.forEach((file, idx) => {
  if (fs.existsSync(file)) {
    const html = fs.readFileSync(file, 'utf8');
    const pMatches = html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
    const textPs = pMatches
      .map(p => p.replace(/<[^>]+>/g, '').trim())
      .filter(p => p.length > 50);
    console.log(`\n[Article ${idx + 1}] ${file}`);
    console.log(`  Sample 1: ${textPs[0]?.slice(0, 80)}...`);
    console.log(`  Sample 2: ${textPs[1]?.slice(0, 80)}...`);
    console.log(`  Sample 3: ${textPs[2]?.slice(0, 80)}...`);
  }
});
