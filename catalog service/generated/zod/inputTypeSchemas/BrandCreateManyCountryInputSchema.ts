import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const BrandCreateManyCountryInputSchema: z.ZodType<Prisma.BrandCreateManyCountryInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
}).strict();

export default BrandCreateManyCountryInputSchema;
