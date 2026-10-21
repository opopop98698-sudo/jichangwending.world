import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('STARTING FULL PREVENTIVE SEO HEALTH AUDIT ENGINE');
console.log('====================================================');

// Helper to recurse all HTML files
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
console.log(`[INIT] Scanned ${htmlFiles.length} HTML files in dist/`);

// ---------------------------------------------------------
// 1. ROBOTS.TXT AUDIT
// ---------------------------------------------------------
console.log('\n--- 1. ROBOTS.TXT AUDIT ---');
const robotsDistPath = 'dist/robots.txt';
let robotsContent = '';
if (fs.existsSync(robotsDistPath)) {
  robotsContent = fs.readFileSync(robotsDistPath, 'utf8');
} else if (fs.existsSync('public/robots.txt')) {
  robotsContent = fs.readFileSync('public/robots.txt', 'utf8');
}

const hasDisallowAll = /Disallow:\s*\/\s*$/m.test(robotsContent);
const hasGooglebot = /User-agent:\s*Googlebot/i.test(robotsContent);
const hasBingbot = /User-agent:\s*Bingbot/i.test(robotsContent);
const hasBaidu = /User-agent:\s*Baiduspider/i.test(robotsContent);
const hasYisou = /User-agent:\s*yisouspider/i.test(robotsContent);
const sitemapMatches = robotsContent.match(/Sitemap:\s*(https?:\/\/[^\s]+)/gi) || [];

console.log('Robots file content:\n' + robotsContent);
console.log(`Disallow: / present: ${hasDisallowAll}`);
console.log(`Googlebot explicitly listed: ${hasGooglebot}`);
console.log(`Bingbot explicitly listed: ${hasBingbot}`);
console.log(`Baiduspider explicitly listed: ${hasBaidu}`);
console.log(`yisouspider explicitly listed: ${hasYisou}`);
console.log(`Sitemap declaration:`, sitemapMatches);

// ---------------------------------------------------------
// 2. SITEMAP AUDIT
// ---------------------------------------------------------
console.log('\n--- 2. SITEMAP AUDIT ---');
let sitemapUrls = [];
let sitemapFiles = ['dist/sitemap-index.xml', 'dist/sitemap-0.xml'];
sitemapFiles.forEach(sf => {
  if (fs.existsSync(sf)) {
    const content = fs.readFileSync(sf, 'utf8');
    const locMatches = content.match(/<loc>(.*?)<\/loc>/g) || [];
    const urls = locMatches.map(m => m.replace(/<\/?loc>/g, '').trim());
    console.log(`File ${sf} has ${urls.length} URLs`);
    if (sf.endsWith('sitemap-0.xml')) {
      sitemapUrls = urls;
    }
  } else {
    console.log(`File ${sf} NOT FOUND`);
  }
});

let missingSitemapFiles = [];
let nonHttpsSitemapUrls = [];
let testDomainSitemapUrls = [];
let sitemapDuplicates = 0;
const seenSitemap = new Set();

sitemapUrls.forEach(url => {
  if (seenSitemap.has(url)) sitemapDuplicates++;
  seenSitemap.add(url);

  if (!url.startsWith('https://jichangwending.world')) {
    testDomainSitemapUrls.push(url);
  }
  // Map url to local file
  const relativePath = url.replace('https://jichangwending.world/', '');
  let expectedFile = path.join('dist', relativePath, 'index.html');
  if (relativePath === '') expectedFile = path.join('dist', 'index.html');
  if (!fs.existsSync(expectedFile)) {
    missingSitemapFiles.push({ url, expectedFile });
  }
});

console.log(`Total URLs in sitemap-0.xml: ${sitemapUrls.length}`);
console.log(`Duplicate URLs in sitemap: ${sitemapDuplicates}`);
console.log(`Test domain / non-production URLs in sitemap: ${testDomainSitemapUrls.length}`);
console.log(`Sitemap URLs missing on disk (404s): ${missingSitemapFiles.length}`);
if (missingSitemapFiles.length > 0) {
  console.log('Sample missing files:', missingSitemapFiles.slice(0, 5));
}

// ---------------------------------------------------------
// 3. FULL HTML SCAN: CANONICAL, NOINDEX, TITLES, H1, LINKS
// ---------------------------------------------------------
console.log('\n--- 3. SCANNING ALL 440 HTML FILES ---');

const pageData = new Map();
const titlesMap = new Map();
const descMap = new Map();
const h1Map = new Map();

let noindexCount = 0;
let canonicalAnomalies = [];
let pagesUnder300Words = [];
let pagesUnder500Words = [];
let wordCounts = [];
let emptyHrefs = [];
let hashHrefs = [];
let externalLinks = [];
let nonCompliantAffLinks = [];
let affiliatePages = [];
let orphanCandidateLinks = new Set();
let allOutgoingInternalLinks = new Map();

// Regex patterns
const canonicalRegex = /<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i;
const noindexRegex = /<meta\s+[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex[^"']*["'][^>]*>/i;
const titleRegex = /<title>([^<]*)<\/title>/i;
const descRegex = /<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i;
const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/i;
const anchorRegex = /<a\s+([^>]*href=["']([^"']*)["'][^>]*)>([\s\S]*?)<\/a>/gi;
const schemaRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
const viewportRegex = /<meta\s+name=["']viewport["']/i;
const imgRegex = /<img\s+([^>]+)>/gi;

htmlFiles.forEach(filePath => {
  const normPath = filePath.replace(/\\/g, '/');
  // Determine web URL path
  let webPath = normPath.replace(/^dist/, '').replace(/index\.html$/, '');
  if (!webPath.startsWith('/')) webPath = '/' + webPath;
  if (!webPath.endsWith('/')) webPath = webPath + '/';

  const html = fs.readFileSync(filePath, 'utf8');

  // 1. Canonical
  const cMatch = html.match(canonicalRegex);
  const canonicalHref = cMatch ? cMatch[1] : null;
  const expectedCanonical = `https://jichangwending.world${webPath}`;

  if (!canonicalHref) {
    canonicalAnomalies.push({ path: normPath, issue: 'Missing canonical' });
  } else if (canonicalHref !== expectedCanonical) {
    canonicalAnomalies.push({ path: normPath, canonicalHref, expectedCanonical, issue: 'Mismatch or non-self-referencing' });
  }

  // 2. Noindex
  const hasNoindex = noindexRegex.test(html);
  if (hasNoindex) {
    noindexCount++;
    console.log(`[NOINDEX DETECTED] ${normPath}`);
  }

  // 3. Title, Description, H1
  const tMatch = html.match(titleRegex);
  const title = tMatch ? tMatch[1].trim() : '';
  if (title) {
    if (!titlesMap.has(title)) titlesMap.set(title, []);
    titlesMap.get(title).push(webPath);
  }

  const dMatch = html.match(descRegex);
  const desc = dMatch ? dMatch[1].trim() : '';
  if (desc) {
    if (!descMap.has(desc)) descMap.set(desc, []);
    descMap.get(desc).push(webPath);
  }

  const h1Match = html.match(h1Regex);
  let h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';
  if (h1) {
    if (!h1Map.has(h1)) h1Map.set(h1, []);
    h1Map.get(h1).push(webPath);
  }

  // 4. Text content & word count
  // Remove scripts, styles, svg
  const cleanHtml = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // In Chinese / English mixed content, count characters as words/chars
  const charLength = cleanHtml.length;
  // approximate words: Chinese characters + English word matches
  const chineseChars = (cleanHtml.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (cleanHtml.match(/[a-zA-Z0-9_-]+/g) || []).length;
  const effectiveWords = chineseChars + englishWords;

  wordCounts.push({ webPath, charLength, effectiveWords });
  if (effectiveWords < 300) {
    pagesUnder300Words.push({ webPath, effectiveWords, charLength });
  } else if (effectiveWords < 500) {
    pagesUnder500Words.push({ webPath, effectiveWords, charLength });
  }

  // 5. Links analysis
  let match;
  const outgoingLinks = [];
  const localAnchorRegex = new RegExp(anchorRegex.source, 'gi');

  let pageHasAffiliate = false;

  while ((match = localAnchorRegex.exec(html)) !== null) {
    const fullTag = match[1];
    const href = match[2];
    const anchorText = match[3].replace(/<[^>]+>/g, '').trim();

    if (href === '') {
      emptyHrefs.push({ webPath, tag: match[0].slice(0, 100) });
    } else if (href === '#') {
      hashHrefs.push({ webPath, tag: match[0].slice(0, 100) });
    } else if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith('https://jichangwending.world')) {
        // External link
        const relMatch = fullTag.match(/rel=["']([^"']*)["']/i);
        const rel = relMatch ? relMatch[1] : '';
        const isAffiliate = href.includes('aff') || href.includes('code=') || href.includes('aff.com') || href.includes('dalaoyun') || href.includes('flycat');

        if (isAffiliate) {
          pageHasAffiliate = true;
          const hasNoFollow = rel.includes('nofollow');
          const hasSponsored = rel.includes('sponsored');
          const hasNoOpener = rel.includes('noopener');

          if (!hasNoFollow || !hasSponsored || !hasNoOpener) {
            nonCompliantAffLinks.push({ webPath, href, rel });
          }
        }
        externalLinks.push({ webPath, href, rel, isAffiliate });
      } else {
        // Absolute internal link
        const internalPath = href.replace('https://jichangwending.world', '');
        outgoingLinks.push(internalPath);
      }
    } else if (href.startsWith('/')) {
      // Relative internal link
      outgoingLinks.push(href);
    }
  }

  if (pageHasAffiliate) {
    // Check if page contains commission notice
    const hasNotice = html.includes('推广') || html.includes('佣金') || html.includes('赞助');
    affiliatePages.push({ webPath, hasNotice });
  }

  allOutgoingInternalLinks.set(webPath, outgoingLinks);

  // 6. Schema JSON-LD parsing
  let sMatch;
  const localSchemaRegex = new RegExp(schemaRegex.source, 'gi');
  const schemas = [];
  while ((sMatch = localSchemaRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(sMatch[1]);
      schemas.push(parsed);
    } catch(e) {
      schemas.push({ error: e.message, raw: sMatch[1].slice(0, 100) });
    }
  }

  // 7. Viewport & Img check
  const hasViewport = viewportRegex.test(html);

  pageData.set(webPath, {
    normPath,
    title,
    desc,
    h1,
    effectiveWords,
    schemas,
    hasViewport
  });
});

console.log(`Canonical anomalies: ${canonicalAnomalies.length}`);
console.log(`Noindex pages: ${noindexCount}`);
console.log(`Pages under 300 words: ${pagesUnder300Words.length}`);
console.log(`Pages under 500 words: ${pagesUnder500Words.length}`);
console.log(`Empty href="" links: ${emptyHrefs.length}`);
console.log(`Hash href="#" links: ${hashHrefs.length}`);
console.log(`Non-compliant affiliate links: ${nonCompliantAffLinks.length}`);
console.log(`Affiliate pages count: ${affiliatePages.length}`);
console.log(`Affiliate pages without notice: ${affiliatePages.filter(p => !p.hasNotice).length}`);

// Duplicate Titles / Descriptions / H1s
let dupTitles = 0;
titlesMap.forEach((paths, t) => {
  if (paths.length > 1) {
    dupTitles += paths.length;
  }
});

let dupDescs = 0;
descMap.forEach((paths, d) => {
  if (paths.length > 1) {
    dupDescs += paths.length;
  }
});

let dupH1s = 0;
h1Map.forEach((paths, h) => {
  if (paths.length > 1) {
    dupH1s += paths.length;
  }
});

console.log(`Duplicate titles count: ${dupTitles} (${titlesMap.size} unique titles out of 440 pages)`);
console.log(`Duplicate descriptions count: ${dupDescs} (${descMap.size} unique descriptions)`);
console.log(`Duplicate H1s count: ${dupH1s} (${h1Map.size} unique H1s)`);

// ---------------------------------------------------------
// 4. CLICK DEPTH & ORPHAN PAGES ANALYSIS (BFS FROM /)
// ---------------------------------------------------------
console.log('\n--- 4. CLICK DEPTH & ORPHAN PAGES (GRAPH BFS) ---');
const depthMap = new Map();
const queue = ['/'];
depthMap.set('/', 0);

while (queue.length > 0) {
  const current = queue.shift();
  const currentDepth = depthMap.get(current);
  const outLinks = allOutgoingInternalLinks.get(current) || [];

  outLinks.forEach(target => {
    // Normalize target
    let cleanTarget = target.split('?')[0].split('#')[0];
    if (!cleanTarget.endsWith('/')) cleanTarget += '/';

    if (!depthMap.has(cleanTarget) && allOutgoingInternalLinks.has(cleanTarget)) {
      depthMap.set(cleanTarget, currentDepth + 1);
      queue.push(cleanTarget);
    }
  });
}

let orphans = [];
let depthStats = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, '5+': 0 };

pageData.forEach((data, p) => {
  if (!depthMap.has(p)) {
    orphans.push(p);
  } else {
    const d = depthMap.get(p);
    if (d <= 4) depthStats[d]++;
    else depthStats['5+']++;
  }
});

console.log(`Orphan pages (unreachable from /): ${orphans.length}`);
if (orphans.length > 0) {
  console.log('Sample orphans:', orphans.slice(0, 10));
}
console.log('Click depth distribution from homepage (/):', depthStats);

// ---------------------------------------------------------
// 5. INTERNAL DEAD LINKS (404s)
// ---------------------------------------------------------
console.log('\n--- 5. INTERNAL DEAD LINK (BROKEN LINK) SCAN ---');
const brokenInternalLinks = [];
allOutgoingInternalLinks.forEach((links, source) => {
  links.forEach(target => {
    let rawTarget = target.split('?')[0].split('#')[0];
    if (!rawTarget.startsWith('/')) rawTarget = '/' + rawTarget;

    // Check if it's a physical static asset file (like .png, .jpg, .webp, .xml, .txt)
    const ext = path.extname(rawTarget);
    if (ext) {
      const diskAssetPath = path.join('dist', decodeURIComponent(rawTarget.replace(/^\//, '')));
      if (fs.existsSync(diskAssetPath)) {
        return; // Valid static asset!
      }
    }

    let cleanTarget = rawTarget;
    if (!cleanTarget.endsWith('/')) cleanTarget += '/';

    if (!pageData.has(cleanTarget)) {
      brokenInternalLinks.push({ source, target: cleanTarget });
    }
  });
});

console.log(`Broken internal links count: ${brokenInternalLinks.length}`);
if (brokenInternalLinks.length > 0) {
  console.log('Sample broken internal links:', brokenInternalLinks.slice(0, 10));
}

// ---------------------------------------------------------
// 6. OUTPUT RESULTS SUMMARY AS JSON FOR REPORT WRITING
// ---------------------------------------------------------
const reportSummary = {
  totalHtmlPages: htmlFiles.length,
  robots: {
    hasDisallowAll,
    hasGooglebot,
    hasBingbot,
    hasBaidu,
    hasYisou,
    sitemapMatches
  },
  sitemap: {
    totalUrls: sitemapUrls.length,
    missingFilesOnDisk: missingSitemapFiles.length,
    testDomainUrls: testDomainSitemapUrls.length,
    duplicates: sitemapDuplicates
  },
  canonical: {
    anomaliesCount: canonicalAnomalies.length,
    sampleAnomalies: canonicalAnomalies.slice(0, 5)
  },
  noindexCount,
  contentQuality: {
    pagesUnder300Words: pagesUnder300Words.length,
    pagesUnder500Words: pagesUnder500Words.length,
    minWords: Math.min(...wordCounts.map(w => w.effectiveWords)),
    maxWords: Math.max(...wordCounts.map(w => w.effectiveWords)),
    avgWords: Math.round(wordCounts.reduce((acc, cur) => acc + cur.effectiveWords, 0) / wordCounts.length),
    dupTitles,
    dupDescs,
    dupH1s
  },
  affiliateCompliance: {
    totalExternalLinks: externalLinks.length,
    totalAffiliatePages: affiliatePages.length,
    nonCompliantAffLinksCount: nonCompliantAffLinks.length,
    nonCompliantAffLinks: nonCompliantAffLinks.slice(0, 5)
  },
  internalLinks: {
    emptyHrefs: emptyHrefs.length,
    hashHrefs: hashHrefs.length,
    brokenInternalLinksCount: brokenInternalLinks.length,
    orphansCount: orphans.length,
    depthStats
  }
};

fs.writeFileSync('scripts/audit-result-summary.json', JSON.stringify(reportSummary, null, 2), 'utf8');
console.log('\n[DONE] Full Audit Scan Complete! Summary written to scripts/audit-result-summary.json');
