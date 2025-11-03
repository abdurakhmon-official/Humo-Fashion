import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const ProductRatingCreateManyProductInputSchema: z.ZodType<Prisma.ProductRatingCreateManyProductInput> = z.object({
  id: z.uuid().optional(),
  userId: z.string(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export default ProductRatingCreateManyProductInputSchema;
