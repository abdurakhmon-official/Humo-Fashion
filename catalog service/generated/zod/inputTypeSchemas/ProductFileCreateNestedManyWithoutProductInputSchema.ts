import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductFileCreateWithoutProductInputSchema } from './ProductFileCreateWithoutProductInputSchema';
import { ProductFileUncheckedCreateWithoutProductInputSchema } from './ProductFileUncheckedCreateWithoutProductInputSchema';
import { ProductFileCreateOrConnectWithoutProductInputSchema } from './ProductFileCreateOrConnectWithoutProductInputSchema';
import { ProductFileCreateManyProductInputEnvelopeSchema } from './ProductFileCreateManyProductInputEnvelopeSchema';
import { ProductFileWhereUniqueInputSchema } from './ProductFileWhereUniqueInputSchema';

export const ProductFileCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductFileCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ProductFileCreateWithoutProductInputSchema), z.lazy(() => ProductFileCreateWithoutProductInputSchema).array(), z.lazy(() => ProductFileUncheckedCreateWithoutProductInputSchema), z.lazy(() => ProductFileUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductFileCreateOrConnectWithoutProductInputSchema), z.lazy(() => ProductFileCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductFileCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductFileWhereUniqueInputSchema), z.lazy(() => ProductFileWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProductFileCreateNestedManyWithoutProductInputSchema;
