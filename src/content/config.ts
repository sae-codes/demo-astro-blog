// 1. Import utilities 'defineCollection' and 'Zod' from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define collection(s)
// z = Zod to define dataTypes
const postsCollection = defineCollection({
	// config objects
	schema: ({ image }) =>
		z.object({
			// define properties
			author: z.string(),
			date: z.string(),
			image: image(),
			title: z.string(),
		}),
});

export const collections = {
	// first part before colon is "key" and should match folder where collection of MD/MDX files lives
	posts: postsCollection,
};
