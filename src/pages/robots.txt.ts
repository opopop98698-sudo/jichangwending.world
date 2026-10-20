import type { APIRoute } from 'astro';

const robotsTxt = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
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

Sitemap: https://jichangwending.world/sitemap-index.xml
`;

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
