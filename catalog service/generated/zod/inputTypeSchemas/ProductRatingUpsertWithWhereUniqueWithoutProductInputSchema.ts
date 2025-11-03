import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingWhereUniqueInputSchema } from './ProductRatingWhereUniqueInputSchema';
import { ProductRatingUpdateWithoutProductInputSchema } from './ProductRatingUpdateWithoutProductInputSchema';
import { ProductRatingUncheckedUpdateWithoutProductInputSchema } from './ProductRatingUncheckedUpdateWithoutProductInputSchema';
import { ProductRatingCreateWithoutProductInputSchema } from './ProductRatingCreateWithoutProductInputSchema';
import { ProductRatingUncheckedCreateWithoutProductInputSchema } from './ProductRatingUncheckedCreateWithoutProductInputSchema';

export const ProductRatingUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ProductRatingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductRatingUpdateWithoutProductInputSchema), z.lazy(() => ProductRatingUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => ProductRatingCreateWithoutProductInputSchema), z.lazy(() => ProductRatingUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default ProductRatingUpsertWithWhereUniqueWithoutProductInputSchema;
