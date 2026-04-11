import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://filce.uk',
  output: 'static',
  integrations: [
    sitemap({
      customPages: [
        'https://filce.uk/',
        'https://filce.uk/about/',
        'https://filce.uk/work-with-me/',
        'https://filce.uk/media-kit/',
        'https://filce.uk/categories/kitchenhome/',
        'https://filce.uk/categories/tools/',
        'https://filce.uk/categories/techaccessories/',
        'https://filce.uk/categories/home-automation/',
        'https://filce.uk/categories/tech/',
        'https://filce.uk/categories/pet/',
        'https://filce.uk/reviews/getting-started-home-assistant/',
        'https://filce.uk/reviews/welcome-to-filce-uk/',
      ],
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
