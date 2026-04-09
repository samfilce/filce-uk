import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { categorySlug, readingTime } from './site';

const postsDir = path.join(process.cwd(), 'src/content/posts');

export interface Post {
  id: string;
  slug: string;
  urlSlug: string;
  url: string;
  title: string;
  date: Date;
  category?: string;
  rating?: number;
  description?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  tags?: string[];
  permalink?: string;
  affiliate?: boolean;
  body: string;
  html: string;
  readingTime: string;
}

function parseDate(value: unknown) {
  return value instanceof Date ? value : new Date(String(value));
}

function normalizeRating(value: unknown) {
  if (value === undefined || value === null || value === '') return undefined;
  const num = Number(value);
  return Number.isNaN(num) ? undefined : num;
}

export async function getPosts(): Promise<Post[]> {
  const files = (await fs.readdir(postsDir)).filter((file) => file.endsWith('.md'));
  const posts = await Promise.all(files.map(async (file) => {
    const raw = await fs.readFile(path.join(postsDir, file), 'utf8');
    const { data, content } = matter(raw);
    const slug = file.replace(/\.md$/, '');
    const permalink = typeof data.permalink === 'string' ? data.permalink : undefined;
    const url = permalink || `/posts/${slug}/`;
    const urlSlug = url.split('/').filter(Boolean).at(-1) || slug;
    return {
      id: slug,
      slug,
      urlSlug,
      url,
      title: data.title,
      date: parseDate(data.date),
      category: data.category,
      rating: normalizeRating(data.rating),
      description: data.description,
      featuredImage: data.featuredImage,
      featuredImageAlt: data.featuredImageAlt,
      tags: Array.isArray(data.tags) ? data.tags : undefined,
      permalink,
      affiliate: Boolean(data.affiliate),
      body: content,
      html: marked.parse(content) as string,
      readingTime: readingTime(content)
    } satisfies Post;
  }));
  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getPostBySlug(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug || post.urlSlug === slug);
}

export async function getCategories() {
  const posts = await getPosts();
  return [...new Set(posts.map((post) => post.category).filter(Boolean))].map((category) => ({
    name: category!,
    slug: categorySlug(category!)
  }));
}
