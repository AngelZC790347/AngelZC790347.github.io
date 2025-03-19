import { defineCollection, z } from "astro:content";
const experiencia = defineCollection({});
const proyectos = defineCollection({
    schema: z.object({
        name: z.string(),
        github: z.string().url().optional(),
        image: z.string().url(),
        url: z.string().url().optional(),        
        stack: z.string().array()
    })
});

export const collections = { experiencia, proyectos }