import { z } from 'zod';
import {
  DotaGameModeSchema,
  DotaTowerSchema,
  DotaWinTriggerSchema,
} from '../dota';

export const MatchCreateSchema = z.object({
  match_id: z.number().or(z.bigint()),
  duration: z.number(),
  first_blood_time: z.number(),
  radiant_score: z.number(),
  dire_score: z.number(),
  radiant_win: z.boolean(),
  patch: z.number(),
  region: z.number(),
  start_time: z.number(),
  //
  win_trigger: DotaWinTriggerSchema,
  game_mode: DotaGameModeSchema,
  towers: z.object({
    radiant: DotaTowerSchema,
    dire: DotaTowerSchema,
  }),
  // towers: DotaTowerSchema.array().length(2),
  // players:          PlayerMatches[],
});

export type MatchCreateType = z.infer<typeof MatchCreateSchema>;
