import { z } from 'zod';

export const DotaGameModeSchema = z.enum([
  'SF_ONLY',
  'ALL_PICK',
  'BALANCED_DRAFT',
]);

export type DotaGameMode = z.infer<typeof DotaGameModeSchema>;

export const DotaWinTriggerSchema = z.enum([
  'KILLS',
  'TOWER',
  'GIVE_UP',
  'DISCONNECT',
]);

export type DotaWinTrigger = z.infer<typeof DotaWinTriggerSchema>;
