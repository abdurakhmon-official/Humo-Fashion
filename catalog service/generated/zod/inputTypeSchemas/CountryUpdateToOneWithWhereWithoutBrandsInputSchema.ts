import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { CountryWhereInputSchema } from './CountryWhereInputSchema';
import { CountryUpdateWithoutBrandsInputSchema } from './CountryUpdateWithoutBrandsInputSchema';
import { CountryUncheckedUpdateWithoutBrandsInputSchema } from './CountryUncheckedUpdateWithoutBrandsInputSchema';

export const CountryUpdateToOneWithWhereWithoutBrandsInputSchema: z.ZodType<Prisma.CountryUpdateToOneWithWhereWithoutBrandsInput> = z.object({
  where: z.lazy(() => CountryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CountryUpdateWithoutBrandsInputSchema), z.lazy(() => CountryUncheckedUpdateWithoutBrandsInputSchema) ]),
}).strict();

export default CountryUpdateToOneWithWhereWithoutBrandsInputSchema;
