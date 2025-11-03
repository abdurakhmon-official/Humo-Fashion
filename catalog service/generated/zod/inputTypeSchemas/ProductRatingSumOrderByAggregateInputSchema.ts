import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProductRatingSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductRatingSumOrderByAggregateInput> = z.object({
  rating: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default ProductRatingSumOrderByAggregateInputSchema;
