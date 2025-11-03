import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { BrandWhereUniqueInputSchema } from './BrandWhereUniqueInputSchema';
import { BrandUpdateWithoutCountryInputSchema } from './BrandUpdateWithoutCountryInputSchema';
import { BrandUncheckedUpdateWithoutCountryInputSchema } from './BrandUncheckedUpdateWithoutCountryInputSchema';
import { BrandCreateWithoutCountryInputSchema } from './BrandCreateWithoutCountryInputSchema';
import { BrandUncheckedCreateWithoutCountryInputSchema } from './BrandUncheckedCreateWithoutCountryInputSchema';

export const BrandUpsertWithWhereUniqueWithoutCountryInputSchema: z.ZodType<Prisma.BrandUpsertWithWhereUniqueWithoutCountryInput> = z.object({
  where: z.lazy(() => BrandWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BrandUpdateWithoutCountryInputSchema), z.lazy(() => BrandUncheckedUpdateWithoutCountryInputSchema) ]),
  create: z.union([ z.lazy(() => BrandCreateWithoutCountryInputSchema), z.lazy(() => BrandUncheckedCreateWithoutCountryInputSchema) ]),
}).strict();

export default BrandUpsertWithWhereUniqueWithoutCountryInputSchema;
