import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { CountryCreateWithoutBrandsInputSchema } from './CountryCreateWithoutBrandsInputSchema';
import { CountryUncheckedCreateWithoutBrandsInputSchema } from './CountryUncheckedCreateWithoutBrandsInputSchema';
import { CountryCreateOrConnectWithoutBrandsInputSchema } from './CountryCreateOrConnectWithoutBrandsInputSchema';
import { CountryUpsertWithoutBrandsInputSchema } from './CountryUpsertWithoutBrandsInputSchema';
import { CountryWhereUniqueInputSchema } from './CountryWhereUniqueInputSchema';
import { CountryUpdateToOneWithWhereWithoutBrandsInputSchema } from './CountryUpdateToOneWithWhereWithoutBrandsInputSchema';
import { CountryUpdateWithoutBrandsInputSchema } from './CountryUpdateWithoutBrandsInputSchema';
import { CountryUncheckedUpdateWithoutBrandsInputSchema } from './CountryUncheckedUpdateWithoutBrandsInputSchema';

export const CountryUpdateOneRequiredWithoutBrandsNestedInputSchema: z.ZodType<Prisma.CountryUpdateOneRequiredWithoutBrandsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CountryCreateWithoutBrandsInputSchema), z.lazy(() => CountryUncheckedCreateWithoutBrandsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CountryCreateOrConnectWithoutBrandsInputSchema).optional(),
  upsert: z.lazy(() => CountryUpsertWithoutBrandsInputSchema).optional(),
  connect: z.lazy(() => CountryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CountryUpdateToOneWithWhereWithoutBrandsInputSchema), z.lazy(() => CountryUpdateWithoutBrandsInputSchema), z.lazy(() => CountryUncheckedUpdateWithoutBrandsInputSchema) ]).optional(),
}).strict();

export default CountryUpdateOneRequiredWithoutBrandsNestedInputSchema;
