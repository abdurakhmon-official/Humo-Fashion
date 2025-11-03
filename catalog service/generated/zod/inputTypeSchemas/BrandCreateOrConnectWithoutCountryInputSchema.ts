import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { BrandWhereUniqueInputSchema } from './BrandWhereUniqueInputSchema';
import { BrandCreateWithoutCountryInputSchema } from './BrandCreateWithoutCountryInputSchema';
import { BrandUncheckedCreateWithoutCountryInputSchema } from './BrandUncheckedCreateWithoutCountryInputSchema';

export const BrandCreateOrConnectWithoutCountryInputSchema: z.ZodType<Prisma.BrandCreateOrConnectWithoutCountryInput> = z.object({
  where: z.lazy(() => BrandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BrandCreateWithoutCountryInputSchema), z.lazy(() => BrandUncheckedCreateWithoutCountryInputSchema) ]),
}).strict();

export default BrandCreateOrConnectWithoutCountryInputSchema;
