import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const ProductRatingCreateManyInputSchema: z.ZodType<Prisma.ProductRatingCreateManyInput> = z.object({
  id: z.uuid().optional(),
  productId: z.string(),
  userId: z.string(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export default ProductRatingCreateManyInputSchema;
