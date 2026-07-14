import { z } from "zod";

 export const formSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(32, "Name must be at most 32 characters."),

  stock: z
    .number()
    .min(0, "Stock cannot be negative."),

  solditems: z
    .number()
    .min(0, "Sold items cannot be negative."),

  rating: z
  .boolean(),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),

  variant: z
  .array(z.string()),

  id: z
  .string(),
});

