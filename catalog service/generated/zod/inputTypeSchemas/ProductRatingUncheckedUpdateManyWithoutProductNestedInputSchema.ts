import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingCreateWithoutProductInputSchema } from './ProductRatingCreateWithoutProductInputSchema';
import { ProductRatingUncheckedCreateWithoutProductInputSchema } from './ProductRatingUncheckedCreateWithoutProductInputSchema';
import { ProductRatingCreateOrConnectWithoutProductInputSchema } from './ProductRatingCreateOrConnectWithoutProductInputSchema';
import { ProductRatingUpsertWithWhereUniqueWithoutProductInputSchema } from './ProductRatingUpsertWithWhereUniqueWithoutProductInputSchema';
import { ProductRatingCreateManyProductInputEnvelopeSchema } from './ProductRatingCreateManyProductInputEnvelopeSchema';
import { ProductRatingWhereUniqueInputSchema } from './ProductRatingWhereUniqueInputSchema';
import { ProductRatingUpdateWithWhereUniqueWithoutProductInputSchema } from './ProductRatingUpdateWithWhereUniqueWithoutProductInputSchema';
import { ProductRatingUpdateManyWithWhereWithoutProductInputSchema } from './ProductRatingUpdateManyWithWhereWithoutProductInputSchema';
import { ProductRatingScalarWhereInputSchema } from './ProductRatingScalarWhereInputSchema';

export const ProductRatingUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductRatingCreateWithoutProductInputSchema), z.lazy(() => ProductRatingCreateWithoutProductInputSchema).array(), z.lazy(() => ProductRatingUncheckedCreateWithoutProductInputSchema), z.lazy(() => ProductRatingUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductRatingCreateOrConnectWithoutProductInputSchema), z.lazy(() => ProductRatingCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductRatingUpsertWithWhereUniqueWithoutProductInputSchema), z.lazy(() => ProductRatingUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductRatingCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductRatingWhereUniqueInputSchema), z.lazy(() => ProductRatingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductRatingWhereUniqueInputSchema), z.lazy(() => ProductRatingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductRatingWhereUniqueInputSchema), z.lazy(() => ProductRatingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductRatingWhereUniqueInputSchema), z.lazy(() => ProductRatingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductRatingUpdateWithWhereUniqueWithoutProductInputSchema), z.lazy(() => ProductRatingUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductRatingUpdateManyWithWhereWithoutProductInputSchema), z.lazy(() => ProductRatingUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductRatingScalarWhereInputSchema), z.lazy(() => ProductRatingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProductRatingUncheckedUpdateManyWithoutProductNestedInputSchema;
