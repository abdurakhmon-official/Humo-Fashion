import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateNestedOneWithoutRatingsInputSchema } from './ProductCreateNestedOneWithoutRatingsInputSchema';

export const ProductRatingCreateWithoutUserInputSchema: z.ZodType<Prisma.ProductRatingCreateWithoutUserInput> = z.object({
  id: z.uuid().optional(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutRatingsInputSchema),
}).strict();

export default ProductRatingCreateWithoutUserInputSchema;
