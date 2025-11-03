import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProductRatingCountOrderByAggregateInputSchema } from './ProductRatingCountOrderByAggregateInputSchema';
import { ProductRatingAvgOrderByAggregateInputSchema } from './ProductRatingAvgOrderByAggregateInputSchema';
import { ProductRatingMaxOrderByAggregateInputSchema } from './ProductRatingMaxOrderByAggregateInputSchema';
import { ProductRatingMinOrderByAggregateInputSchema } from './ProductRatingMinOrderByAggregateInputSchema';
import { ProductRatingSumOrderByAggregateInputSchema } from './ProductRatingSumOrderByAggregateInputSchema';

export const ProductRatingOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductRatingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductRatingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductRatingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductRatingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductRatingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductRatingSumOrderByAggregateInputSchema).optional(),
}).strict();

export default ProductRatingOrderByWithAggregationInputSchema;
