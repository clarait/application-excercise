import { z } from "zod";

export const createPostSchema = z.object({
  title: z
    .string()
    .min(3, "Error: title must have at least 3 characters")
    .max(30, "Error: title must have no more than 30 characters"),
  content: z
    .string()
    .min(3, "Error: content must have at least 3 characters")
    .max(500, "Error: content must have no more than 500 characters"),
});

export type createPostType = z.infer<typeof createPostSchema>;
