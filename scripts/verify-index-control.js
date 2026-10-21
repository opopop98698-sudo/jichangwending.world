import fs from 'fs';
import path from 'path';

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const htmlFiles = getAllHtmlFiles('dist');
console.log(`[VERIFY INDEX CONTROL] Total HTML files: ${htmlFiles.length}`);

const noindexFiles = [];
const nofollowRobotsFiles = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative('dist', file).replace(/\\/g, '/');

  const robotsMatch = content.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
  if (robotsMatch) {
    const robotsContent = robotsMatch[1].toLowerCase();
    if (robotsContent.includes('noindex')) {
      noindexFiles.push(relPath);
    }
    if (robotsContent.includes('nofollow') && !relPath.includes('404')) {
      nofollowRobotsFiles.push(relPath);
    }
  }
});

console.log(`\nFiles with <meta name="robots" content="noindex">: ${noindexFiles.length}`);
noindexFiles.forEach(f => console.log('  -', f));

console.log(`\nProduction content files with accidental "nofollow" in robots meta: ${nofollowRobotsFiles.length}`);

// Check sitemap-0.xml for 404
const sitemapContent = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
const sitemapHas404 = sitemapContent.includes('/404');
console.log(`\nSitemap contains /404: ${sitemapHas404} (Must be false)`);

// Check robots.txt
const robotsTxt = fs.readFileSync('dist/robots.txt', 'utf8');
console.log(`\nRobots.txt Disallow / present: ${/Disallow:\s*\/\s*$/m.test(robotsTxt)} (Must be false)`);
console.log(`Robots.txt Disallow /404/ present: ${/Disallow:\s*\/404\//m.test(robotsTxt)} (Must be true)`);
console.log(`Robots.txt Sitemap count: ${(robotsTxt.match(/Sitemap:/gi) || []).length} (Expected 2)`);
