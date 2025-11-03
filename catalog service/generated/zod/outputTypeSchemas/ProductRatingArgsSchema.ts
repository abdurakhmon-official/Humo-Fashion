import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductRatingSelectSchema } from '../inputTypeSchemas/ProductRatingSelectSchema';
import { ProductRatingIncludeSchema } from '../inputTypeSchemas/ProductRatingIncludeSchema';

export const ProductRatingArgsSchema: z.ZodType<Prisma.ProductRatingDefaultArgs> = z.object({
  select: z.lazy(() => ProductRatingSelectSchema).optional(),
  include: z.lazy(() => ProductRatingIncludeSchema).optional(),
}).strict();

export default ProductRatingArgsSchema;
