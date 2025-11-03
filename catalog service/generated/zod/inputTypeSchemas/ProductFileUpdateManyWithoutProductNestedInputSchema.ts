import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductFileCreateWithoutProductInputSchema } from './ProductFileCreateWithoutProductInputSchema';
import { ProductFileUncheckedCreateWithoutProductInputSchema } from './ProductFileUncheckedCreateWithoutProductInputSchema';
import { ProductFileCreateOrConnectWithoutProductInputSchema } from './ProductFileCreateOrConnectWithoutProductInputSchema';
import { ProductFileUpsertWithWhereUniqueWithoutProductInputSchema } from './ProductFileUpsertWithWhereUniqueWithoutProductInputSchema';
import { ProductFileCreateManyProductInputEnvelopeSchema } from './ProductFileCreateManyProductInputEnvelopeSchema';
import { ProductFileWhereUniqueInputSchema } from './ProductFileWhereUniqueInputSchema';
import { ProductFileUpdateWithWhereUniqueWithoutProductInputSchema } from './ProductFileUpdateWithWhereUniqueWithoutProductInputSchema';
import { ProductFileUpdateManyWithWhereWithoutProductInputSchema } from './ProductFileUpdateManyWithWhereWithoutProductInputSchema';
import { ProductFileScalarWhereInputSchema } from './ProductFileScalarWhereInputSchema';

export const ProductFileUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductFileUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductFileCreateWithoutProductInputSchema), z.lazy(() => ProductFileCreateWithoutProductInputSchema).array(), z.lazy(() => ProductFileUncheckedCreateWithoutProductInputSchema), z.lazy(() => ProductFileUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductFileCreateOrConnectWithoutProductInputSchema), z.lazy(() => ProductFileCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductFileUpsertWithWhereUniqueWithoutProductInputSchema), z.lazy(() => ProductFileUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductFileCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductFileWhereUniqueInputSchema), z.lazy(() => ProductFileWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductFileWhereUniqueInputSchema), z.lazy(() => ProductFileWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductFileWhereUniqueInputSchema), z.lazy(() => ProductFileWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductFileWhereUniqueInputSchema), z.lazy(() => ProductFileWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductFileUpdateWithWhereUniqueWithoutProductInputSchema), z.lazy(() => ProductFileUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductFileUpdateManyWithWhereWithoutProductInputSchema), z.lazy(() => ProductFileUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductFileScalarWhereInputSchema), z.lazy(() => ProductFileScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProductFileUpdateManyWithoutProductNestedInputSchema;
