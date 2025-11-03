import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { BrandScalarWhereInputSchema } from './BrandScalarWhereInputSchema';
import { BrandUpdateManyMutationInputSchema } from './BrandUpdateManyMutationInputSchema';
import { BrandUncheckedUpdateManyWithoutCountryInputSchema } from './BrandUncheckedUpdateManyWithoutCountryInputSchema';

export const BrandUpdateManyWithWhereWithoutCountryInputSchema: z.ZodType<Prisma.BrandUpdateManyWithWhereWithoutCountryInput> = z.object({
  where: z.lazy(() => BrandScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BrandUpdateManyMutationInputSchema), z.lazy(() => BrandUncheckedUpdateManyWithoutCountryInputSchema) ]),
}).strict();

export default BrandUpdateManyWithWhereWithoutCountryInputSchema;
