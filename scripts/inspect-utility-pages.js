import fs from 'fs';

const pages = ['about', 'author', 'corrections', 'disclosure', 'methodology', 'privacy', '404'];

pages.forEach(p => {
  const file = `src/pages/${p}.astro`;
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const titleMatch = content.match(/title=\{?["']([^"']+)["']\}?/);
    const canonicalMatch = content.match(/canonicalUrl=\{?["']([^"']+)["']\}?/);
    console.log(`Page: /${p}/ => Title: ${titleMatch ? titleMatch[1] : 'N/A'} | Canonical: ${canonicalMatch ? canonicalMatch[1] : 'N/A'}`);
  }
});
