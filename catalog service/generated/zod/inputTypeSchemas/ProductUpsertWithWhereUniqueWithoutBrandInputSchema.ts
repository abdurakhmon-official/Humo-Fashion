import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateWithoutBrandInputSchema } from './ProductUpdateWithoutBrandInputSchema';
import { ProductUncheckedUpdateWithoutBrandInputSchema } from './ProductUncheckedUpdateWithoutBrandInputSchema';
import { ProductCreateWithoutBrandInputSchema } from './ProductCreateWithoutBrandInputSchema';
import { ProductUncheckedCreateWithoutBrandInputSchema } from './ProductUncheckedCreateWithoutBrandInputSchema';

export const ProductUpsertWithWhereUniqueWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutBrandInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema) ]),
}).strict();

export default ProductUpsertWithWhereUniqueWithoutBrandInputSchema;
