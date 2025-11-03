import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingWhereInputSchema } from './ProductRatingWhereInputSchema';

export const ProductRatingListRelationFilterSchema: z.ZodType<Prisma.ProductRatingListRelationFilter> = z.object({
  every: z.lazy(() => ProductRatingWhereInputSchema).optional(),
  some: z.lazy(() => ProductRatingWhereInputSchema).optional(),
  none: z.lazy(() => ProductRatingWhereInputSchema).optional(),
}).strict();

export default ProductRatingListRelationFilterSchema;
