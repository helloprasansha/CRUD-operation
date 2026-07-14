import z from "zod";

 export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8,"minimum 8 character").max(15,"maximum 15 characters"),
    name: z.string(),
    age: z.int().min(1,"age must be greater than 0").max(100,"dhfjd")
})

export type loginSchemaType = z.infer<typeof loginSchema>
//email
//name
//password
//agef