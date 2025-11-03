import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { ProductUpdateWithoutRatingsInputSchema } from './ProductUpdateWithoutRatingsInputSchema';
import { ProductUncheckedUpdateWithoutRatingsInputSchema } from './ProductUncheckedUpdateWithoutRatingsInputSchema';

export const ProductUpdateToOneWithWhereWithoutRatingsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutRatingsInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutRatingsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutRatingsInputSchema) ]),
}).strict();

export default ProductUpdateToOneWithWhereWithoutRatingsInputSchema;
