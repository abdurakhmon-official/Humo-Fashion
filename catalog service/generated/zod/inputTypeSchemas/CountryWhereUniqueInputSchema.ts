import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { CountryWhereInputSchema } from './CountryWhereInputSchema';
import { BrandListRelationFilterSchema } from './BrandListRelationFilterSchema';

export const CountryWhereUniqueInputSchema: z.ZodType<Prisma.CountryWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    name: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.uuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => CountryWhereInputSchema), z.lazy(() => CountryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CountryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CountryWhereInputSchema), z.lazy(() => CountryWhereInputSchema).array() ]).optional(),
  brands: z.lazy(() => BrandListRelationFilterSchema).optional(),
}).strict());

export default CountryWhereUniqueInputSchema;
