import { defineCollection, z } from 'astro:content';

const blessings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['protection', 'transition', 'presence', 'release', 'invocation', 'daily']),
    date: z.string().optional(),
  }),
});

export const collections = { blessings };
