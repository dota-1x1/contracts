import { z } from 'zod';

export const StorageSchema = z.object({
  ui__flip: z.boolean().optional(),
  //
  feedback__show_after_date: z.number().optional(), // Date.now()
  feedback__show_disable: z.boolean().optional(),
});

export type StorageType = z.infer<typeof StorageSchema>;
