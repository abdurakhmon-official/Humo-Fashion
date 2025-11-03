import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { CountryWhereUniqueInputSchema } from './CountryWhereUniqueInputSchema';
import { CountryCreateWithoutBrandsInputSchema } from './CountryCreateWithoutBrandsInputSchema';
import { CountryUncheckedCreateWithoutBrandsInputSchema } from './CountryUncheckedCreateWithoutBrandsInputSchema';

export const CountryCreateOrConnectWithoutBrandsInputSchema: z.ZodType<Prisma.CountryCreateOrConnectWithoutBrandsInput> = z.object({
  where: z.lazy(() => CountryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CountryCreateWithoutBrandsInputSchema), z.lazy(() => CountryUncheckedCreateWithoutBrandsInputSchema) ]),
}).strict();

export default CountryCreateOrConnectWithoutBrandsInputSchema;
