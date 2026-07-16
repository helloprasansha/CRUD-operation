import z from "zod";

export const axiosSchema= z.object({
    email: z.string(),
    password: z.string().min(8, "password should be minimum 8 characters").max(16, "password should not be more than 16 characters")

})
export type axiosForminputType = z.input<typeof axiosSchema>
export type axiosFormoutputType = z.output<typeof axiosSchema>