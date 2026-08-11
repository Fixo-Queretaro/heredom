import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Naturaleza editorial del contenido.
 * Distingue explícitamente la tradición iniciática de la historia
 * académicamente documentada: nunca deben presentarse como equivalentes.
 */
export const NATURALEZAS = [
  "tradicion",
  "doctrina",
  "historia-documentada",
  "estudio",
  "editorial",
] as const;

export const naturalezaSchema = z.enum(NATURALEZAS);

const authors = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    era: z.string().optional(),
    demo: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    naturaleza: naturalezaSchema,
    author: reference("authors").optional(),
    publishedAt: z.coerce.date(),
    readingMinutes: z.number().int().positive().optional(),
    demo: z.boolean().default(false),
  }),
});

const documents = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/documents" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    naturaleza: naturalezaSchema,
    docType: z.enum(["manuscrito", "constitucion", "ritual", "correspondencia", "otro"]),
    period: z.string().optional(),
    sourceNote: z.string().optional(),
    demo: z.boolean().default(false),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    naturaleza: naturalezaSchema,
    level: z.enum(["introductorio", "intermedio", "avanzado"]),
    lessonCount: z.number().int().nonnegative().default(0),
    demo: z.boolean().default(false),
  }),
});

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/lessons" }),
  schema: z.object({
    title: z.string(),
    course: reference("courses"),
    order: z.number().int().positive(),
    summary: z.string().optional(),
    demo: z.boolean().default(false),
  }),
});

export const collections = { authors, articles, documents, courses, lessons };
