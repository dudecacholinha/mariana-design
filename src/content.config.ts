import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      images: z.array(image()).min(1),
      url: z.string().url().optional(),
      date: z.coerce.date(),
    }),
});

const about = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/about" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    location: z.string(),
  }),
});

const mood = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/mood" }),
  schema: ({ image }) =>
    z.object({
      images: z.array(image()).min(1),
    }),
});

export const collections = { projects, about, mood };
