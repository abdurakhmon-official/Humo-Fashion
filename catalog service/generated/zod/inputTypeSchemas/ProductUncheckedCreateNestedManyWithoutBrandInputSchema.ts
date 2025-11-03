import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateWithoutBrandInputSchema } from './ProductCreateWithoutBrandInputSchema';
import { ProductUncheckedCreateWithoutBrandInputSchema } from './ProductUncheckedCreateWithoutBrandInputSchema';
import { ProductCreateOrConnectWithoutBrandInputSchema } from './ProductCreateOrConnectWithoutBrandInputSchema';
import { ProductCreateManyBrandInputEnvelopeSchema } from './ProductCreateManyBrandInputEnvelopeSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';

export const ProductUncheckedCreateNestedManyWithoutBrandInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema), z.lazy(() => ProductCreateWithoutBrandInputSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema), z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBrandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProductUncheckedCreateNestedManyWithoutBrandInputSchema;
