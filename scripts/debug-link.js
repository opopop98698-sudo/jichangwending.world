import fs from 'fs';

const html = fs.readFileSync('dist/reviews/articles/e01-a-1/index.html', 'utf8');
const regex = /href=["']([^"']+)["']/g;
let m;
while ((m = regex.exec(html)) !== null) {
  if (m[1].includes('$')) {
    console.log('Match:', m[1]);
  }
}
