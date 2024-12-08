import { file } from "astro/loaders";
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

export const collections = { work };
