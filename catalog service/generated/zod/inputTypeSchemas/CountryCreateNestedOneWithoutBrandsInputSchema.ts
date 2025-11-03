import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { CountryCreateWithoutBrandsInputSchema } from './CountryCreateWithoutBrandsInputSchema';
import { CountryUncheckedCreateWithoutBrandsInputSchema } from './CountryUncheckedCreateWithoutBrandsInputSchema';
import { CountryCreateOrConnectWithoutBrandsInputSchema } from './CountryCreateOrConnectWithoutBrandsInputSchema';
import { CountryWhereUniqueInputSchema } from './CountryWhereUniqueInputSchema';

export const CountryCreateNestedOneWithoutBrandsInputSchema: z.ZodType<Prisma.CountryCreateNestedOneWithoutBrandsInput> = z.object({
  create: z.union([ z.lazy(() => CountryCreateWithoutBrandsInputSchema), z.lazy(() => CountryUncheckedCreateWithoutBrandsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CountryCreateOrConnectWithoutBrandsInputSchema).optional(),
  connect: z.lazy(() => CountryWhereUniqueInputSchema).optional(),
}).strict();

export default CountryCreateNestedOneWithoutBrandsInputSchema;
