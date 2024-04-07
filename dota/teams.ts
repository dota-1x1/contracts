import { z } from 'zod';

export const DotaPlayersTeamSchema = z.enum(['RADIANT', 'DIRE']);
export type DotaPlayersTeam = z.infer<typeof DotaPlayersTeamSchema>;
