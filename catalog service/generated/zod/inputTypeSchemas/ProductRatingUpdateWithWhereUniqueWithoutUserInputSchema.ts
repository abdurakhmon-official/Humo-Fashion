import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingWhereUniqueInputSchema } from './ProductRatingWhereUniqueInputSchema';
import { ProductRatingUpdateWithoutUserInputSchema } from './ProductRatingUpdateWithoutUserInputSchema';
import { ProductRatingUncheckedUpdateWithoutUserInputSchema } from './ProductRatingUncheckedUpdateWithoutUserInputSchema';

export const ProductRatingUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProductRatingUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ProductRatingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductRatingUpdateWithoutUserInputSchema), z.lazy(() => ProductRatingUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default ProductRatingUpdateWithWhereUniqueWithoutUserInputSchema;
