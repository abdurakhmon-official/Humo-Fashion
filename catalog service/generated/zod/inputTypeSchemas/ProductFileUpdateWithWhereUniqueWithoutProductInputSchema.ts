import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductFileWhereUniqueInputSchema } from './ProductFileWhereUniqueInputSchema';
import { ProductFileUpdateWithoutProductInputSchema } from './ProductFileUpdateWithoutProductInputSchema';
import { ProductFileUncheckedUpdateWithoutProductInputSchema } from './ProductFileUncheckedUpdateWithoutProductInputSchema';

export const ProductFileUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductFileUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ProductFileWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductFileUpdateWithoutProductInputSchema), z.lazy(() => ProductFileUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export default ProductFileUpdateWithWhereUniqueWithoutProductInputSchema;
