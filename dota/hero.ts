import { z } from 'zod';

/**
 * Схема для талантов
 */
export const DotaHeroTalentsSchema = z.object({
  talent_1: z.boolean(),
  talent_2: z.boolean(),
  talent_3: z.boolean(),
  talent_4: z.boolean(),
  talent_5: z.boolean(),
  talent_6: z.boolean(),
  talent_7: z.boolean(),
  talent_8: z.boolean(),
});

export type DotaHeroTalents = z.infer<typeof DotaHeroTalentsSchema>;

/**
 * Схема инвентаря героя
 */
export const DotaHeroInventorySchema = z.object({
  slot_1: z.string().optional(),
  slot_2: z.string().optional(),
  slot_3: z.string().optional(),
  slot_4: z.string().optional(),
  slot_5: z.string().optional(),
  slot_6: z.string().optional(),
  neutral: z.string().optional(),

  // рюкзак
  slot_7: z.string().optional(),
  slot_8: z.string().optional(),
  slot_9: z.string().optional(),

  // поглощаемые
  has_moon_shard: z.boolean(),
  has_aghanims_shard: z.boolean(),
  has_aghanims_scepter: z.boolean(),
});

export type DotaHeroInventory = z.infer<typeof DotaHeroInventorySchema>;

/**
 * Базовая схема для героя
 */
export const DotaHeroBaseSchema = z.object({
  level: z.number(),
  hero_name: z.string(),
  picked_randomly: z.boolean(),

  // TODO: skills
  talents: DotaHeroTalentsSchema,
  inventory: DotaHeroInventorySchema,
});

export type DotaHeroBase = z.infer<typeof DotaHeroBaseSchema>;

/**
 * Подробная схема героя
 */
export const DotaHeroFullSchema = DotaHeroBaseSchema.extend({
  xpos: z.number(),
  ypos: z.number(),
  xp: z.number(),
  respawn_seconds: z.number(),
  max_health: z.number(),
  health: z.number(),
  max_mana: z.number(),
  mana: z.number(),
  alive: z.boolean(),
});

export type DotaHeroFull = z.infer<typeof DotaHeroFullSchema>;
