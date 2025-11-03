import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProductFileOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductFileOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default ProductFileOrderByRelationAggregateInputSchema;
