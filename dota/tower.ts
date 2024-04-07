import { z } from 'zod';
// import { DotaPlayersTeamSchema } from './teams';

export const DotaTowerSchema = z.object({
  // team: DotaPlayersTeamSchema,
  max_health: z.number(),
  health: z.number(),
});

export type DotaTower = z.infer<typeof DotaTowerSchema>;
