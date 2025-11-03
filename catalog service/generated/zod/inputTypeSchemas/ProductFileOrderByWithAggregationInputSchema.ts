import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProductFileCountOrderByAggregateInputSchema } from './ProductFileCountOrderByAggregateInputSchema';
import { ProductFileAvgOrderByAggregateInputSchema } from './ProductFileAvgOrderByAggregateInputSchema';
import { ProductFileMaxOrderByAggregateInputSchema } from './ProductFileMaxOrderByAggregateInputSchema';
import { ProductFileMinOrderByAggregateInputSchema } from './ProductFileMinOrderByAggregateInputSchema';
import { ProductFileSumOrderByAggregateInputSchema } from './ProductFileSumOrderByAggregateInputSchema';

export const ProductFileOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductFileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  file: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductFileCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductFileAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductFileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductFileMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductFileSumOrderByAggregateInputSchema).optional(),
}).strict();

export default ProductFileOrderByWithAggregationInputSchema;
