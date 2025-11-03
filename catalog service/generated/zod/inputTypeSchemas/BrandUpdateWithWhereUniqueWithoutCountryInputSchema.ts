import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { BrandWhereUniqueInputSchema } from './BrandWhereUniqueInputSchema';
import { BrandUpdateWithoutCountryInputSchema } from './BrandUpdateWithoutCountryInputSchema';
import { BrandUncheckedUpdateWithoutCountryInputSchema } from './BrandUncheckedUpdateWithoutCountryInputSchema';

export const BrandUpdateWithWhereUniqueWithoutCountryInputSchema: z.ZodType<Prisma.BrandUpdateWithWhereUniqueWithoutCountryInput> = z.object({
  where: z.lazy(() => BrandWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BrandUpdateWithoutCountryInputSchema), z.lazy(() => BrandUncheckedUpdateWithoutCountryInputSchema) ]),
}).strict();

export default BrandUpdateWithWhereUniqueWithoutCountryInputSchema;
