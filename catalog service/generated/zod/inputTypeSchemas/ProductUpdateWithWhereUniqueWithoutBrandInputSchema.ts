import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateWithoutBrandInputSchema } from './ProductUpdateWithoutBrandInputSchema';
import { ProductUncheckedUpdateWithoutBrandInputSchema } from './ProductUncheckedUpdateWithoutBrandInputSchema';

export const ProductUpdateWithWhereUniqueWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutBrandInputSchema) ]),
}).strict();

export default ProductUpdateWithWhereUniqueWithoutBrandInputSchema;
