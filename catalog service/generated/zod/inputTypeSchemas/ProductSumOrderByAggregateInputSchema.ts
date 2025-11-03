import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  price2: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  sold: z.lazy(() => SortOrderSchema).optional(),
  like_count: z.lazy(() => SortOrderSchema).optional(),
  average_rating: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default ProductSumOrderByAggregateInputSchema;
