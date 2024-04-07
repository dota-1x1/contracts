import { z } from 'zod';

export const PlayerCreateSchema = z.object({
  account_id: z.number().or(z.bigint()),
  avatar: z.string(),
  profile_name: z.string(),
});
export type PlayerCreate = z.infer<typeof PlayerCreateSchema>;
