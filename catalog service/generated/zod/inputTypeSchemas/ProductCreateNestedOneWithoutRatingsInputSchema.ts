import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateWithoutRatingsInputSchema } from './ProductCreateWithoutRatingsInputSchema';
import { ProductUncheckedCreateWithoutRatingsInputSchema } from './ProductUncheckedCreateWithoutRatingsInputSchema';
import { ProductCreateOrConnectWithoutRatingsInputSchema } from './ProductCreateOrConnectWithoutRatingsInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';

export const ProductCreateNestedOneWithoutRatingsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutRatingsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutRatingsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutRatingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutRatingsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
}).strict();

export default ProductCreateNestedOneWithoutRatingsInputSchema;
