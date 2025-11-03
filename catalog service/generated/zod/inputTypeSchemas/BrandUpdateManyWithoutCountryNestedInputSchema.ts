import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { BrandCreateWithoutCountryInputSchema } from './BrandCreateWithoutCountryInputSchema';
import { BrandUncheckedCreateWithoutCountryInputSchema } from './BrandUncheckedCreateWithoutCountryInputSchema';
import { BrandCreateOrConnectWithoutCountryInputSchema } from './BrandCreateOrConnectWithoutCountryInputSchema';
import { BrandUpsertWithWhereUniqueWithoutCountryInputSchema } from './BrandUpsertWithWhereUniqueWithoutCountryInputSchema';
import { BrandCreateManyCountryInputEnvelopeSchema } from './BrandCreateManyCountryInputEnvelopeSchema';
import { BrandWhereUniqueInputSchema } from './BrandWhereUniqueInputSchema';
import { BrandUpdateWithWhereUniqueWithoutCountryInputSchema } from './BrandUpdateWithWhereUniqueWithoutCountryInputSchema';
import { BrandUpdateManyWithWhereWithoutCountryInputSchema } from './BrandUpdateManyWithWhereWithoutCountryInputSchema';
import { BrandScalarWhereInputSchema } from './BrandScalarWhereInputSchema';

export const BrandUpdateManyWithoutCountryNestedInputSchema: z.ZodType<Prisma.BrandUpdateManyWithoutCountryNestedInput> = z.object({
  create: z.union([ z.lazy(() => BrandCreateWithoutCountryInputSchema), z.lazy(() => BrandCreateWithoutCountryInputSchema).array(), z.lazy(() => BrandUncheckedCreateWithoutCountryInputSchema), z.lazy(() => BrandUncheckedCreateWithoutCountryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BrandCreateOrConnectWithoutCountryInputSchema), z.lazy(() => BrandCreateOrConnectWithoutCountryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BrandUpsertWithWhereUniqueWithoutCountryInputSchema), z.lazy(() => BrandUpsertWithWhereUniqueWithoutCountryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BrandCreateManyCountryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BrandWhereUniqueInputSchema), z.lazy(() => BrandWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BrandWhereUniqueInputSchema), z.lazy(() => BrandWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BrandWhereUniqueInputSchema), z.lazy(() => BrandWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BrandWhereUniqueInputSchema), z.lazy(() => BrandWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BrandUpdateWithWhereUniqueWithoutCountryInputSchema), z.lazy(() => BrandUpdateWithWhereUniqueWithoutCountryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BrandUpdateManyWithWhereWithoutCountryInputSchema), z.lazy(() => BrandUpdateManyWithWhereWithoutCountryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BrandScalarWhereInputSchema), z.lazy(() => BrandScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BrandUpdateManyWithoutCountryNestedInputSchema;
