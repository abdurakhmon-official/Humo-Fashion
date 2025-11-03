import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductUpdateWithoutRatingsInputSchema } from './ProductUpdateWithoutRatingsInputSchema';
import { ProductUncheckedUpdateWithoutRatingsInputSchema } from './ProductUncheckedUpdateWithoutRatingsInputSchema';
import { ProductCreateWithoutRatingsInputSchema } from './ProductCreateWithoutRatingsInputSchema';
import { ProductUncheckedCreateWithoutRatingsInputSchema } from './ProductUncheckedCreateWithoutRatingsInputSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';

export const ProductUpsertWithoutRatingsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutRatingsInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutRatingsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutRatingsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutRatingsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutRatingsInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional(),
}).strict();

export default ProductUpsertWithoutRatingsInputSchema;
