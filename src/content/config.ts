import { defineCollection, z } from 'astro:content';

export const collections = {
	prose: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
		}),
	}),
};
