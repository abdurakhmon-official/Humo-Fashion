import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingWhereUniqueInputSchema } from './ProductRatingWhereUniqueInputSchema';
import { ProductRatingUpdateWithoutProductInputSchema } from './ProductRatingUpdateWithoutProductInputSchema';
import { ProductRatingUncheckedUpdateWithoutProductInputSchema } from './ProductRatingUncheckedUpdateWithoutProductInputSchema';

export const ProductRatingUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ProductRatingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductRatingUpdateWithoutProductInputSchema), z.lazy(() => ProductRatingUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export default ProductRatingUpdateWithWhereUniqueWithoutProductInputSchema;
