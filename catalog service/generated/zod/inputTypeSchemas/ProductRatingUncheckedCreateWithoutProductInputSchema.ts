import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const ProductRatingUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUncheckedCreateWithoutProductInput> = z.object({
  id: z.uuid().optional(),
  userId: z.string(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export default ProductRatingUncheckedCreateWithoutProductInputSchema;
