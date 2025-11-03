import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutBrandInputSchema } from './ProductCreateWithoutBrandInputSchema';
import { ProductUncheckedCreateWithoutBrandInputSchema } from './ProductUncheckedCreateWithoutBrandInputSchema';

export const ProductCreateOrConnectWithoutBrandInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutBrandInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema) ]),
}).strict();

export default ProductCreateOrConnectWithoutBrandInputSchema;
