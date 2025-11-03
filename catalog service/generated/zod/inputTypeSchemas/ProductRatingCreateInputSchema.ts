import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateNestedOneWithoutRatingsInputSchema } from './ProductCreateNestedOneWithoutRatingsInputSchema';
import { UserCreateNestedOneWithoutRatingInputSchema } from './UserCreateNestedOneWithoutRatingInputSchema';

export const ProductRatingCreateInputSchema: z.ZodType<Prisma.ProductRatingCreateInput> = z.object({
  id: z.uuid().optional(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutRatingsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutRatingInputSchema),
}).strict();

export default ProductRatingCreateInputSchema;
