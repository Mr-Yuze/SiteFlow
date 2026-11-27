import z from "zod"

export const registerschema = z.object({
    id: z.string().min(3, "Name must contain 3 letter"),
    email: z.string().email("enter a valid email"),
    password: z.string().min(8, "password should be min of 8 char"),
    age: z.coerce.number().min(18, "age should be min of 18"),
    rollno: z.coerce.number().min(5,"wrong")
})