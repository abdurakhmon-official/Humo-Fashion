import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const BrandCreateManyInputSchema: z.ZodType<Prisma.BrandCreateManyInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  countryId: z.string(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
}).strict();

export default BrandCreateManyInputSchema;
