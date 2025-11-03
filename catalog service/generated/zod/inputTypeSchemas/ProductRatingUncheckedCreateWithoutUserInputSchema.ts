import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const ProductRatingUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProductRatingUncheckedCreateWithoutUserInput> = z.object({
  id: z.uuid().optional(),
  productId: z.string(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export default ProductRatingUncheckedCreateWithoutUserInputSchema;
