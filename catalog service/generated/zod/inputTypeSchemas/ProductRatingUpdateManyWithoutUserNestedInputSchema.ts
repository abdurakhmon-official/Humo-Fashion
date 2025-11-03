import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingCreateWithoutUserInputSchema } from './ProductRatingCreateWithoutUserInputSchema';
import { ProductRatingUncheckedCreateWithoutUserInputSchema } from './ProductRatingUncheckedCreateWithoutUserInputSchema';
import { ProductRatingCreateOrConnectWithoutUserInputSchema } from './ProductRatingCreateOrConnectWithoutUserInputSchema';
import { ProductRatingUpsertWithWhereUniqueWithoutUserInputSchema } from './ProductRatingUpsertWithWhereUniqueWithoutUserInputSchema';
import { ProductRatingCreateManyUserInputEnvelopeSchema } from './ProductRatingCreateManyUserInputEnvelopeSchema';
import { ProductRatingWhereUniqueInputSchema } from './ProductRatingWhereUniqueInputSchema';
import { ProductRatingUpdateWithWhereUniqueWithoutUserInputSchema } from './ProductRatingUpdateWithWhereUniqueWithoutUserInputSchema';
import { ProductRatingUpdateManyWithWhereWithoutUserInputSchema } from './ProductRatingUpdateManyWithWhereWithoutUserInputSchema';
import { ProductRatingScalarWhereInputSchema } from './ProductRatingScalarWhereInputSchema';

export const ProductRatingUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ProductRatingUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductRatingCreateWithoutUserInputSchema), z.lazy(() => ProductRatingCreateWithoutUserInputSchema).array(), z.lazy(() => ProductRatingUncheckedCreateWithoutUserInputSchema), z.lazy(() => ProductRatingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductRatingCreateOrConnectWithoutUserInputSchema), z.lazy(() => ProductRatingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductRatingUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => ProductRatingUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductRatingCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductRatingWhereUniqueInputSchema), z.lazy(() => ProductRatingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductRatingWhereUniqueInputSchema), z.lazy(() => ProductRatingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductRatingWhereUniqueInputSchema), z.lazy(() => ProductRatingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductRatingWhereUniqueInputSchema), z.lazy(() => ProductRatingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductRatingUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => ProductRatingUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductRatingUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => ProductRatingUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductRatingScalarWhereInputSchema), z.lazy(() => ProductRatingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProductRatingUpdateManyWithoutUserNestedInputSchema;
