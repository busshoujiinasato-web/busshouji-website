import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
	}),
});

export const collections = {
	news: newsCollection,
};
