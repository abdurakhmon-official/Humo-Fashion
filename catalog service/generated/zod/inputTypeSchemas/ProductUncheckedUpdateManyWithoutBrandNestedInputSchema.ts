import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateWithoutBrandInputSchema } from './ProductCreateWithoutBrandInputSchema';
import { ProductUncheckedCreateWithoutBrandInputSchema } from './ProductUncheckedCreateWithoutBrandInputSchema';
import { ProductCreateOrConnectWithoutBrandInputSchema } from './ProductCreateOrConnectWithoutBrandInputSchema';
import { ProductUpsertWithWhereUniqueWithoutBrandInputSchema } from './ProductUpsertWithWhereUniqueWithoutBrandInputSchema';
import { ProductCreateManyBrandInputEnvelopeSchema } from './ProductCreateManyBrandInputEnvelopeSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateWithWhereUniqueWithoutBrandInputSchema } from './ProductUpdateWithWhereUniqueWithoutBrandInputSchema';
import { ProductUpdateManyWithWhereWithoutBrandInputSchema } from './ProductUpdateManyWithWhereWithoutBrandInputSchema';
import { ProductScalarWhereInputSchema } from './ProductScalarWhereInputSchema';

export const ProductUncheckedUpdateManyWithoutBrandNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema), z.lazy(() => ProductCreateWithoutBrandInputSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema), z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutBrandInputSchema), z.lazy(() => ProductUpsertWithWhereUniqueWithoutBrandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBrandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutBrandInputSchema), z.lazy(() => ProductUpdateWithWhereUniqueWithoutBrandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutBrandInputSchema), z.lazy(() => ProductUpdateManyWithWhereWithoutBrandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema), z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProductUncheckedUpdateManyWithoutBrandNestedInputSchema;
