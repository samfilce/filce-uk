import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../lib/site';
import { getPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.date,
      link: post.url,
      content: post.html
    })),
    customData: `<language>en-gb</language><author>sam@filce.uk (Sam Filce)</author>`
  });
}
