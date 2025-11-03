import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductFileWhereUniqueInputSchema } from './ProductFileWhereUniqueInputSchema';
import { ProductFileCreateWithoutProductInputSchema } from './ProductFileCreateWithoutProductInputSchema';
import { ProductFileUncheckedCreateWithoutProductInputSchema } from './ProductFileUncheckedCreateWithoutProductInputSchema';

export const ProductFileCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ProductFileCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => ProductFileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductFileCreateWithoutProductInputSchema), z.lazy(() => ProductFileUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default ProductFileCreateOrConnectWithoutProductInputSchema;
