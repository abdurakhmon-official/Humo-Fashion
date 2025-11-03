import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProductRatingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductRatingAvgOrderByAggregateInput> = z.object({
  rating: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default ProductRatingAvgOrderByAggregateInputSchema;
