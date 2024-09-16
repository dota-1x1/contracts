import { z } from 'zod';
import { DotaPlayersTeamSchema } from '../dota';

const StartedItemsSchema = z.object({
  item_0: z.number(),
  item_1: z.number(),
  item_2: z.number(),
  item_3: z.number(),
  item_4: z.number(),
  item_5: z.number(),
  item_neutral: z.number(),
  backpack_0: z.number(),
  backpack_1: z.number(),
  backpack_2: z.number(),
});

export const PlayerMatchesCreateSchema = z.object({
  account_id: z.number().or(z.bigint()),
  team: DotaPlayersTeamSchema,
  hero_id: z.number(),
  hero_variant: z.number(),
  hero_has_randomed: z.boolean(),
  // предметы
  item_0: z.number(),
  item_1: z.number(),
  item_2: z.number(),
  item_3: z.number(),
  item_4: z.number(),
  item_5: z.number(),
  item_neutral: z.number(),
  backpack_0: z.number(),
  backpack_1: z.number(),
  backpack_2: z.number(),
  aghanims_scepter: z.boolean(),
  aghanims_shard: z.boolean(),
  moon_shard: z.boolean(),
  started_items: StartedItemsSchema,
  // кда
  kills: z.number(),
  deaths: z.number(),
  assists: z.number(),
  //
  leaver_status: z.number(),
  last_hits: z.number(),
  denies: z.number(),
  xp_per_min: z.number(),
  xp_total: z.number(),
  gold_per_min: z.number(),
  gold: z.number(),
  gold_spent_total: z.number(),
  gold_spent_support: z.number(),
  gold_spent_consumables: z.number(),
  gold_spent_items: z.number(),
  hero_damage: z.number(),
  tower_damage: z.number(),
  level: z.number(),
  obs_placed: z.number(),
  sen_placed: z.number(),
  rune_pickups: z.number(),
  ability_upgrades_arr: z.number().array(),
  towers_killed: z.number(),
  roshans_killed: z.number(),
  net_worth: z.number(),
  //
  gold_t: z.number().array(),
  lh_t: z.number().array(),
  dn_t: z.number().array(),
  xp_t: z.number().array(),
});

export type PlayerMatchesCreateType = z.infer<typeof PlayerMatchesCreateSchema>;
