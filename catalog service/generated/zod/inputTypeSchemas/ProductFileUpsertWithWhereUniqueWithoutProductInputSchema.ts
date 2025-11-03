import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductFileWhereUniqueInputSchema } from './ProductFileWhereUniqueInputSchema';
import { ProductFileUpdateWithoutProductInputSchema } from './ProductFileUpdateWithoutProductInputSchema';
import { ProductFileUncheckedUpdateWithoutProductInputSchema } from './ProductFileUncheckedUpdateWithoutProductInputSchema';
import { ProductFileCreateWithoutProductInputSchema } from './ProductFileCreateWithoutProductInputSchema';
import { ProductFileUncheckedCreateWithoutProductInputSchema } from './ProductFileUncheckedCreateWithoutProductInputSchema';

export const ProductFileUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductFileUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ProductFileWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductFileUpdateWithoutProductInputSchema), z.lazy(() => ProductFileUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => ProductFileCreateWithoutProductInputSchema), z.lazy(() => ProductFileUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default ProductFileUpsertWithWhereUniqueWithoutProductInputSchema;
