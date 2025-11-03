import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProductFileAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductFileAvgOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default ProductFileAvgOrderByAggregateInputSchema;
