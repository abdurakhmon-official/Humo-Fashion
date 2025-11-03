import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const CountryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CountryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CountryScalarWhereWithAggregatesInputSchema), z.lazy(() => CountryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CountryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CountryScalarWhereWithAggregatesInputSchema), z.lazy(() => CountryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
}).strict();

export default CountryScalarWhereWithAggregatesInputSchema;
