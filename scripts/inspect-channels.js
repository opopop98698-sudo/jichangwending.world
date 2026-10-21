import fs from 'fs';

const channels = ['recommend', 'stable', 'free', 'lab', 'lines', 'status', 'reviews', 'troubleshoot', 'brands'];

channels.forEach(c => {
  const file = `src/pages/${c}/index.astro`;
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const titleMatch = content.match(/pageTitle\s*=\s*['"]([^'"]+)['"]/);
    const descMatch = content.match(/pageDescription\s*=\s*['"]([^'"]+)['"]/);
    const schemaMatch = content.match(/@type['"]\s*:\s*['"]([^'"]+)['"]/);
    const canonicalMatch = content.match(/canonicalUrl\s*=\s*['"]([^'"]+)['"]/);
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    console.log(`\nChannel: /${c}/`);
    console.log(`  Title: ${titleMatch ? titleMatch[1] : 'N/A'}`);
    console.log(`  Canonical: ${canonicalMatch ? canonicalMatch[1] : 'N/A'}`);
    console.log(`  Schema @type: ${schemaMatch ? schemaMatch[1] : 'N/A'}`);
    console.log(`  H1: ${h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : 'N/A'}`);
  }
});
