import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BrandCountOrderByAggregateInputSchema } from './BrandCountOrderByAggregateInputSchema';
import { BrandMaxOrderByAggregateInputSchema } from './BrandMaxOrderByAggregateInputSchema';
import { BrandMinOrderByAggregateInputSchema } from './BrandMinOrderByAggregateInputSchema';

export const BrandOrderByWithAggregationInputSchema: z.ZodType<Prisma.BrandOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  countryId: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => BrandCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BrandMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BrandMinOrderByAggregateInputSchema).optional(),
}).strict();

export default BrandOrderByWithAggregationInputSchema;
