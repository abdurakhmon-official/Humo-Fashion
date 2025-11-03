import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingWhereUniqueInputSchema } from './ProductRatingWhereUniqueInputSchema';
import { ProductRatingUpdateWithoutUserInputSchema } from './ProductRatingUpdateWithoutUserInputSchema';
import { ProductRatingUncheckedUpdateWithoutUserInputSchema } from './ProductRatingUncheckedUpdateWithoutUserInputSchema';
import { ProductRatingCreateWithoutUserInputSchema } from './ProductRatingCreateWithoutUserInputSchema';
import { ProductRatingUncheckedCreateWithoutUserInputSchema } from './ProductRatingUncheckedCreateWithoutUserInputSchema';

export const ProductRatingUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProductRatingUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ProductRatingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductRatingUpdateWithoutUserInputSchema), z.lazy(() => ProductRatingUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ProductRatingCreateWithoutUserInputSchema), z.lazy(() => ProductRatingUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ProductRatingUpsertWithWhereUniqueWithoutUserInputSchema;
