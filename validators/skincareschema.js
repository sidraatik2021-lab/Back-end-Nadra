import { z } from "zod";
export const getSkincareSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});
export const createSkincareSchema = z.object({
  body: z.object({
    name: z.string(),
    duration: z.string(),
    price: z.number(),
    section: z.string(),
    category: z.string(),
  }),
});
export const updateSkincareSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    name: z.string().optional(),
    duration: z.string().optional(),
    price: z.number().optional(),
    section: z.string().optional(),
    category: z.string().optional(),
  }),
});
export const deleteSkincareSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});
