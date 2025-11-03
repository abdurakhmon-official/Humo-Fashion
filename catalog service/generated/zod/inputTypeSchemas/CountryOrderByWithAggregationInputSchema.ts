import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CountryCountOrderByAggregateInputSchema } from './CountryCountOrderByAggregateInputSchema';
import { CountryMaxOrderByAggregateInputSchema } from './CountryMaxOrderByAggregateInputSchema';
import { CountryMinOrderByAggregateInputSchema } from './CountryMinOrderByAggregateInputSchema';

export const CountryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CountryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CountryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CountryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CountryMinOrderByAggregateInputSchema).optional(),
}).strict();

export default CountryOrderByWithAggregationInputSchema;
