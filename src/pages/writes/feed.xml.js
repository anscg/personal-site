import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const writes = await getCollection('writes');
  return rss({
    // `<title>` field in output xml
    title: 'Anson Chung Writes',
    stylesheet: '/pretty-feed-v3.xsl',
    // `<description>` field in output xml
    description: 'I write about stuff.',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: writes.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        // Compute RSS link from post `slug`
        // This example assumes all posts are rendered as `/blog/[slug]` routes
        link: `/writes/${post.slug}/`,
        content: sanitizeHtml(parser.render(post.body), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
          }),
    
      })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}