import { z } from 'zod';
import { ZOD_Entity } from '../entities';
import {
  DotaGameModeSchema,
  DotaPlayersTeamSchema,
  DotaWinTriggerSchema,
} from '../dota';

// DTO для фильтрации матчей
export const MatchesFilterSchema = z.object({
  // match
  game_mode: DotaGameModeSchema.optional(),
  win_trigger: DotaWinTriggerSchema.optional(),
  is_party: ZOD_Entity.booleanString.optional(),
  region: ZOD_Entity.numberString.optional(),
  // players
  team: DotaPlayersTeamSchema.optional(),
  win: ZOD_Entity.booleanString.optional(),
  hero_id: ZOD_Entity.numberString.optional(),
  against_hero_id: ZOD_Entity.numberString.optional(),
  against_account_id: ZOD_Entity.numberString.optional(),
  //
  // page: z.number().optional(),
  limit: z.number().or(z.string()).optional(),
});

export type MatchesFilterType = z.infer<typeof MatchesFilterSchema>;
