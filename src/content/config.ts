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

const eventsCollection = defineCollection({
	type: "content",
	schema: z.object({
		month: z.number().min(1).max(12),
		events: z.array(
			z.object({
				title: z.string(),
				summary: z.string(),
				text: z.string(),
				image: z.string().optional(),
			})
		),
	}),
});

export const collections = {
	news: newsCollection,
	events: eventsCollection,
};
