import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { CountryUpdateWithoutBrandsInputSchema } from './CountryUpdateWithoutBrandsInputSchema';
import { CountryUncheckedUpdateWithoutBrandsInputSchema } from './CountryUncheckedUpdateWithoutBrandsInputSchema';
import { CountryCreateWithoutBrandsInputSchema } from './CountryCreateWithoutBrandsInputSchema';
import { CountryUncheckedCreateWithoutBrandsInputSchema } from './CountryUncheckedCreateWithoutBrandsInputSchema';
import { CountryWhereInputSchema } from './CountryWhereInputSchema';

export const CountryUpsertWithoutBrandsInputSchema: z.ZodType<Prisma.CountryUpsertWithoutBrandsInput> = z.object({
  update: z.union([ z.lazy(() => CountryUpdateWithoutBrandsInputSchema), z.lazy(() => CountryUncheckedUpdateWithoutBrandsInputSchema) ]),
  create: z.union([ z.lazy(() => CountryCreateWithoutBrandsInputSchema), z.lazy(() => CountryUncheckedCreateWithoutBrandsInputSchema) ]),
  where: z.lazy(() => CountryWhereInputSchema).optional(),
}).strict();

export default CountryUpsertWithoutBrandsInputSchema;
