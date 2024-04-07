import { z } from 'zod';
import { DotaPlayersTeamSchema } from '../dota';

// prettier-ignore
const StartedItemsSchema = z.object({
  item_0:               z.number(),
  item_1:               z.number(),
  item_2:               z.number(),
  item_3:               z.number(),
  item_4:               z.number(),
  item_5:               z.number(),
  item_neutral:         z.number(),
  backpack_0:           z.number(),
  backpack_1:           z.number(),
  backpack_2:           z.number(),
});

// prettier-ignore
export const PlayerMatchesCreateSchema = z.object({
  //match_id:             z.number().or(z.bigint()),
  account_id:           z.number().or(z.bigint()),
  rating_change:        z.number(),
  team:                 DotaPlayersTeamSchema,
  hero_id:              z.number(),
  // предметы
  item_0:               z.number(),
  item_1:               z.number(),
  item_2:               z.number(),
  item_3:               z.number(),
  item_4:               z.number(),
  item_5:               z.number(),
  item_neutral:         z.number(),
  backpack_0:           z.number(),
  backpack_1:           z.number(),
  backpack_2:           z.number(),
  started_items:        StartedItemsSchema,
  // кда
  kills:                z.number(),
  deaths:               z.number(),
  assists:              z.number(),
  //
  leaver_status:        z.number(),
  gold:                 z.number(),
  last_hits:            z.number(),
  denies:               z.number(),
  gold_per_min:         z.number(),
  xp_per_min:           z.number(),
  gold_spent:           z.number(),
  hero_damage:          z.number(),
  hero_healing:         z.number(),
  tower_damage:         z.number(),
  level:                z.number(),
  obs_placed:           z.number(),
  sen_placed:           z.number(),
  camps_stacked:        z.number(),
  rune_pickups:         z.number(),
  ability_upgrades_arr: z.number().array(),
  towers_killed:        z.number(),
  roshans_killed:       z.number(),
  net_worth:            z.number(),
});

export type PlayerMatchesCreateType = z.infer<typeof PlayerMatchesCreateSchema>;
