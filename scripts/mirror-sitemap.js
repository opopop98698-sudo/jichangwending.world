import fs from 'fs';
import path from 'path';

const distDir = 'dist';
const sitemapIndex = path.join(distDir, 'sitemap-index.xml');
const sitemapTarget = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemapIndex)) {
  fs.copyFileSync(sitemapIndex, sitemapTarget);
  console.log('[POSTBUILD] Successfully generated dist/sitemap.xml mirrored from sitemap-index.xml');
} else {
  console.warn('[POSTBUILD] Warning: sitemap-index.xml not found to mirror.');
}
