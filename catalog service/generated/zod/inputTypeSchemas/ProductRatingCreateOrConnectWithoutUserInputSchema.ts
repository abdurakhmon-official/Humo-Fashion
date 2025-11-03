import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingWhereUniqueInputSchema } from './ProductRatingWhereUniqueInputSchema';
import { ProductRatingCreateWithoutUserInputSchema } from './ProductRatingCreateWithoutUserInputSchema';
import { ProductRatingUncheckedCreateWithoutUserInputSchema } from './ProductRatingUncheckedCreateWithoutUserInputSchema';

export const ProductRatingCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ProductRatingCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ProductRatingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductRatingCreateWithoutUserInputSchema), z.lazy(() => ProductRatingUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ProductRatingCreateOrConnectWithoutUserInputSchema;
