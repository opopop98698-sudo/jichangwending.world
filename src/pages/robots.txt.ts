import type { APIRoute } from 'astro';

const robotsTxt = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: yisouspider
Allow: /

User-agent: Applebot
Allow: /

# AI Search & Retrieval Crawlers
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

# General Policy
User-agent: *
Allow: /
Disallow: /api/
Disallow: /scratch/
Disallow: /admin/
Disallow: /404/

Sitemap: https://jichangwending.world/sitemap.xml
Sitemap: https://jichangwending.world/sitemap-index.xml
`;

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
