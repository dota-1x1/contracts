import { z } from 'zod';
import { ZOD_Entity } from '../entities';

// DTO для /api/game-tracker/start
export const StartSchema = z.object({
  match_id: z.number(),
  players_profile: z.array(ZOD_Entity.PlayerCreateSchema).length(2),
});

export type StartType = z.infer<typeof StartSchema>;

// =====================================================================================

// DTO для /api/game-tracker/end
export const EndSchema = z.object({
  match: ZOD_Entity.MatchCreateSchema,
  players_match: z.array(ZOD_Entity.PlayerMatchesCreateSchema).length(2),
  players_profile: z.array(ZOD_Entity.PlayerCreateSchema).length(2),
});

export type EndType = z.infer<typeof EndSchema>;

export const Responst_EndSchema = z.object({
  rating: z
    .object({
      current: z.number(),
      different: z.number(),
    })
    .array()
    .length(2),
});

export type Responst_EndType = z.infer<typeof Responst_EndSchema>;
