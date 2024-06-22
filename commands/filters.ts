import { z } from 'zod';
import {
  DotaGameModeSchema,
  DotaPlayersTeamSchema,
  DotaWinTriggerSchema,
} from '../dota';

// DTO для фильтрации матчей
export const MatchesFilterSchema = z.object({
  game_mode: DotaGameModeSchema.optional(),
  win_trigger: DotaWinTriggerSchema.optional(),
  limit: z.number().or(z.string()).optional(),
  // page: z.number().optional(),
  //
  team: DotaPlayersTeamSchema.optional(),
  win: z.boolean().optional(),
});

export type MatchesFilterType = z.infer<typeof MatchesFilterSchema>;
