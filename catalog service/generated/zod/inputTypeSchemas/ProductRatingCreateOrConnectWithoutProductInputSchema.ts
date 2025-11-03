import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingWhereUniqueInputSchema } from './ProductRatingWhereUniqueInputSchema';
import { ProductRatingCreateWithoutProductInputSchema } from './ProductRatingCreateWithoutProductInputSchema';
import { ProductRatingUncheckedCreateWithoutProductInputSchema } from './ProductRatingUncheckedCreateWithoutProductInputSchema';

export const ProductRatingCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => ProductRatingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductRatingCreateWithoutProductInputSchema), z.lazy(() => ProductRatingUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default ProductRatingCreateOrConnectWithoutProductInputSchema;
