import { getPosts } from '../../lib/posts';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  
  const searchIndex = posts.map((post) => ({
    title: post.title,
    description: post.description,
    category: post.category,
    slug: post.slug,
    url: post.url,
    date: post.date.toISOString().slice(0, 10)
  }));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};