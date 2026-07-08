import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Writing — drop a Markdown file in src/content/posts/ and it appears.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// Work — one Markdown file per project/experiment/piece.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // what medium is it — used to group / filter the portfolio
    kind: z.enum(['touchdesigner', 'glsl', 'origami', 'laser', 'code']),
    date: z.coerce.date(),
    cover: z.string().optional(),        // path under /public
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, work };
