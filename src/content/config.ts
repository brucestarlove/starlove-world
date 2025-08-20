import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
    categories: z.array(z.enum(['tech', 'activism', 'starscape', 'site log', 'random thoughts', 'short stories'])),
    color: z.string(),
    excerpt: z.string(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.enum(['completed', 'in-progress', 'planning']),
    technologies: z.array(z.string()),
    color: z.string(),
    link: z.string().optional(),
    github: z.string().optional(),
    date: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = { posts, projects };