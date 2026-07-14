import { data } from "react-router-dom"
import z from "zod"

export const signupSchema = z.object({
    firstname: z.string().min(3, "firstname should be minimum 2 characters"),
    lastname: z.string().min(3, "lastname should be minimum 3 characters"),
    email: z.email(),
    password: z.string().min(8, "password should be minimum 8 characters").max(16, "password should not be more than 16 characters"),
    confirmPassword: z.string().min(8, "password should be minimum 8 characters").max(16, "password should not be more than 16 characters")
})

export const signupSchemawithRefine = signupSchema.refine (
    (data) => data.password === data.confirmPassword,
    {
        message : "passwords do not match",
        path: ["confirmPassword"],
    }
)

export type signupSchemaType = z.infer<typeof signupSchemawithRefine>
export type signupOutputType = z.output<typeof signupSchemawithRefine>