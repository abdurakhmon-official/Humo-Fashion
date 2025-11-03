import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BrandListRelationFilterSchema } from './BrandListRelationFilterSchema';

export const CountryWhereInputSchema: z.ZodType<Prisma.CountryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CountryWhereInputSchema), z.lazy(() => CountryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CountryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CountryWhereInputSchema), z.lazy(() => CountryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  brands: z.lazy(() => BrandListRelationFilterSchema).optional(),
}).strict();

export default CountryWhereInputSchema;
