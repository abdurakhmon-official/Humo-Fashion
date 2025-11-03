import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProductRatingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductRatingOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default ProductRatingOrderByRelationAggregateInputSchema;
