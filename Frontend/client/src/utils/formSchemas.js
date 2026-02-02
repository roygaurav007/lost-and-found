import { z } from 'zod';

export const reportSchema = z.object({
  itemName: z.string().min(3, "Item name must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(10, "Please provide a detailed description"),
  location: z.string().min(3, "Tell us where you lost/found it"),
  date: z.string().min(1, "Date is required"),
});