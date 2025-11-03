import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { BrandCreateWithoutCountryInputSchema } from './BrandCreateWithoutCountryInputSchema';
import { BrandUncheckedCreateWithoutCountryInputSchema } from './BrandUncheckedCreateWithoutCountryInputSchema';
import { BrandCreateOrConnectWithoutCountryInputSchema } from './BrandCreateOrConnectWithoutCountryInputSchema';
import { BrandCreateManyCountryInputEnvelopeSchema } from './BrandCreateManyCountryInputEnvelopeSchema';
import { BrandWhereUniqueInputSchema } from './BrandWhereUniqueInputSchema';

export const BrandCreateNestedManyWithoutCountryInputSchema: z.ZodType<Prisma.BrandCreateNestedManyWithoutCountryInput> = z.object({
  create: z.union([ z.lazy(() => BrandCreateWithoutCountryInputSchema), z.lazy(() => BrandCreateWithoutCountryInputSchema).array(), z.lazy(() => BrandUncheckedCreateWithoutCountryInputSchema), z.lazy(() => BrandUncheckedCreateWithoutCountryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BrandCreateOrConnectWithoutCountryInputSchema), z.lazy(() => BrandCreateOrConnectWithoutCountryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BrandCreateManyCountryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BrandWhereUniqueInputSchema), z.lazy(() => BrandWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BrandCreateNestedManyWithoutCountryInputSchema;
