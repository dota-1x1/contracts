import { z } from 'zod';
import { ZOD_Entity } from '../entities';

// DTO for /api/storage/set
export const SetSchema = z.object({
  account_id: z.number(),
  value: ZOD_Entity.StorageSchema,
});
export type SetType = z.infer<typeof SetSchema>;

// =====================================================================================

// DTO for /api/storage/getAll
export const GetAllSchema = z.object({
  ids: z.number().array(),
});
export type GetAllType = z.infer<typeof GetAllSchema>;

// Response for /api/storage/getAll
export const Response_GetAllSchema = z
  .object({
    account_id: z.number(),
    value: ZOD_Entity.StorageSchema,
  })
  .array();
export type Response_GetAllType = z.infer<typeof Response_GetAllSchema>;
