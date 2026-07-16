import z from "zod";

export const articleSchema = z.object ({
    name: z.string().min(1, "minimum 1 character"),
    stock: z.string(),
    solditems: z.string(),
    rating: z.string(),
    description: z.string().min(5, "minimum 5 character")
})

export type articleSchemaInputType = z.input<typeof articleSchema>
export type articleSchemaOutputType= z.output<typeof articleSchema>