import { data } from "react-router-dom"
import z from "zod"
import { da } from "zod/v4/locales"

export const signupSchema = z.object({
    firstname: z.string().min(3, "firstname should be minimum 2 characters"),
    lastname: z.string().min(3, "lastname should be minimum 3 characters"),
    email: z.email(),
    password: z.string().min(8, "password should be minimum 8 characters").max(16, "password should not be more than 16 characters").regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).*$/,{
        message:"Password must contain at least one uppercase letter, one number, and one special character"
    }),
    confirmPassword: z.string().min(8, "password should be minimum 8 characters").max(16, "password should not be more than 16 characters")
}).refine((data)=> data.confirmPassword === data.password,{
message:"password donot match",
path:['confirmPassword']
}

)





export type signupSchemaType = z.infer<typeof signupSchema>
