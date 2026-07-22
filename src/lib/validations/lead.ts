import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
  email: z.string().email("Please enter a valid work email address"),
  company: z.string().min(2, "Company name is required").max(100),
  phone: z.string().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  employees: z.enum(["1-50", "51-200", "201-500", "501-1000", "1000+"], {
    message: "Please select company size",
  }),
  message: z.string().max(500, "Message cannot exceed 500 characters").optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
