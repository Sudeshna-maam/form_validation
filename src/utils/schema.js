import { z } from "zod";
export const zodFormSchema = z.object({
  Title: z.string().min(1, { message: "Title is required" }),
  First_Name: z
    .string()
    .trim({ message: "trim white space" })
    .min(3, { message: "Must be 3 or more characters long" })
    .max(8, { message: "Must be 8 or fewer characters long" }),
  Last_Name: z
    .string()
    .trim({ message: "trim white space" })
    .min(3, { message: "Must be 3 or more characters long" })
    .max(8, { message: "Must be 8 or fewer characters long" }),
  Phone_Number: z
    .string()
    .length(10, { message: "Must be exactly 10 characters long" }),
  Email: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" })
    .email({ message: "Invalid email address" })
    .endsWith(".com", { message: "Only .com domains allowed" }),
  Password: z
    .string()
    .trim({ message: "trim white space" })
    .min(4, { message: "Must be 4 or more characters long" })
    .max(12, { message: "Must be 12 or fewer characters long" }),
});
