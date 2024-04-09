import { z } from 'zod';
import {
  DotaGameModeSchema,
  DotaTowerSchema,
  DotaWinTriggerSchema,
} from '../dota';

// prettier-ignore
export const MatchCreateSchema = z.object({
  match_id:         z.number().or(z.bigint()),
  duration:         z.number(),
  radiant_score:    z.number(),
  dire_score:       z.number(),
  radiant_win:      z.boolean(),
  server_version:   z.number(),
  region:           z.number(),
  win_trigger:      DotaWinTriggerSchema,
  game_mode:        DotaGameModeSchema,
  //
  towers: z.object({
    radiant: DotaTowerSchema,
    dire: DotaTowerSchema,
  }),
});

export type MatchCreateType = z.infer<typeof MatchCreateSchema>;
