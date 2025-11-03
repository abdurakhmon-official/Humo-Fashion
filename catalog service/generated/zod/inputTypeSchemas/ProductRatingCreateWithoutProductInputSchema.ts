import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { UserCreateNestedOneWithoutRatingInputSchema } from './UserCreateNestedOneWithoutRatingInputSchema';

export const ProductRatingCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingCreateWithoutProductInput> = z.object({
  id: z.uuid().optional(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRatingInputSchema),
}).strict();

export default ProductRatingCreateWithoutProductInputSchema;
