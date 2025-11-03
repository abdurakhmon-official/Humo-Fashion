import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BrandOrderByRelationAggregateInputSchema } from './BrandOrderByRelationAggregateInputSchema';

export const CountryOrderByWithRelationInputSchema: z.ZodType<Prisma.CountryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brands: z.lazy(() => BrandOrderByRelationAggregateInputSchema).optional(),
}).strict();

export default CountryOrderByWithRelationInputSchema;
