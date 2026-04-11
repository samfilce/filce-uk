import { getCollection } from 'astro:content';
import { SITE_TITLE, postUrl } from '../lib/site';

export async function GET() {
  const posts = await getCollection('posts');
  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  
  const siteUrl = 'https://filce.uk';
  
  const pages = [
    { loc: '/', changefreq: 'daily', priority: 1.0 },
    { loc: '/about/', changefreq: 'monthly', priority: 0.8 },
    { loc: '/work-with-me/', changefreq: 'monthly', priority: 0.7 },
    { loc: '/media-kit/', changefreq: 'monthly', priority: 0.7 },
    { loc: '/categories/kitchenhome/', changefreq: 'weekly', priority: 0.7 },
    { loc: '/categories/tools/', changefreq: 'weekly', priority: 0.7 },
    { loc: '/categories/techaccessories/', changefreq: 'weekly', priority: 0.7 },
    { loc: '/categories/home-automation/', changefreq: 'weekly', priority: 0.7 },
    { loc: '/categories/tech/', changefreq: 'weekly', priority: 0.7 },
    { loc: '/categories/pet/', changefreq: 'weekly', priority: 0.7 },
    { loc: '/categories/homeautomation/', changefreq: 'weekly', priority: 0.7 },
    ...sortedPosts.map(post => ({
      loc: postUrl(post),
      lastmod: post.data.date.toISOString().slice(0, 10),
      changefreq: 'weekly' as const,
      priority: 0.8
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.loc}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}