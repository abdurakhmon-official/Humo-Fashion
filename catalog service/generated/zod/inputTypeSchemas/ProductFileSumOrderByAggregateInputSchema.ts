import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProductFileSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductFileSumOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default ProductFileSumOrderByAggregateInputSchema;
