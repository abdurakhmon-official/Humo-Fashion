import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingScalarWhereInputSchema } from './ProductRatingScalarWhereInputSchema';
import { ProductRatingUpdateManyMutationInputSchema } from './ProductRatingUpdateManyMutationInputSchema';
import { ProductRatingUncheckedUpdateManyWithoutUserInputSchema } from './ProductRatingUncheckedUpdateManyWithoutUserInputSchema';

export const ProductRatingUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ProductRatingUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ProductRatingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductRatingUpdateManyMutationInputSchema), z.lazy(() => ProductRatingUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default ProductRatingUpdateManyWithWhereWithoutUserInputSchema;
