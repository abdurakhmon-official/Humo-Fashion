import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { CountryWhereInputSchema } from './CountryWhereInputSchema';

export const CountryScalarRelationFilterSchema: z.ZodType<Prisma.CountryScalarRelationFilter> = z.object({
  is: z.lazy(() => CountryWhereInputSchema).optional(),
  isNot: z.lazy(() => CountryWhereInputSchema).optional(),
}).strict();

export default CountryScalarRelationFilterSchema;
