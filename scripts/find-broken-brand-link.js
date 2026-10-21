import fs from 'fs';
import path from 'path';

function search(d) {
  fs.readdirSync(d).forEach(f => {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) search(p);
    else if (f.endsWith('.astro') || f.endsWith('.ts') || f.endsWith('.json')) {
      const c = fs.readFileSync(p, 'utf8');
      if (c.includes('/brands/${brand.id}/') || c.includes('/brands/${')) {
        console.log('Match in file:', p);
      }
    }
  });
}
search('src');
