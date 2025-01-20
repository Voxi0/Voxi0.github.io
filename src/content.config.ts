// Import utilities
import { defineCollection } from 'astro:content';

// Import loaders
import { glob } from 'astro/loaders';

// Define collections
const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
});

// Export a single `collections` object to register collections
export const collections = { blog };
