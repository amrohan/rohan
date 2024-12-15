import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const work = defineCollection({
  loader: file("src/content/work/work.json"),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    position: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/project" }),

  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
  }),
});

export const collections = { work, projects };
