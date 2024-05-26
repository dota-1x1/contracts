import { z } from 'zod';

export const StorageSchema = z.object({
  ui__flip: z.boolean().optional(),
  //
  feedback__start_date_for_remind: z.number().optional(), // Date.now()
  feedback__already_done: z.boolean().optional(),
});

export type StorageType = z.infer<typeof StorageSchema>;
