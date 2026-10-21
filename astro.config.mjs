import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jichangwending.world',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/') && !page.includes('/scratch/') && !page.includes('/404'),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        item.changefreq = 'weekly';
        item.priority = item.url === 'https://jichangwending.world/' ? 1.0 : (item.url.includes('/articles/') ? 0.8 : 0.9);
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
