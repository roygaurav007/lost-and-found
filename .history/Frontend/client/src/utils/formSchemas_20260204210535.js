import { z } from 'zod';

export const reportSchema = z.object({
  itemName: z.string().min(3, "Item name must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  // Remove or make optional if not in your form to prevent validation blocks
});