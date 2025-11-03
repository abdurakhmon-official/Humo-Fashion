import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutRatingsInputSchema } from './ProductCreateWithoutRatingsInputSchema';
import { ProductUncheckedCreateWithoutRatingsInputSchema } from './ProductUncheckedCreateWithoutRatingsInputSchema';

export const ProductCreateOrConnectWithoutRatingsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutRatingsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutRatingsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutRatingsInputSchema) ]),
}).strict();

export default ProductCreateOrConnectWithoutRatingsInputSchema;
