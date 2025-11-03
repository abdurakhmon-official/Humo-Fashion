import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingScalarWhereInputSchema } from './ProductRatingScalarWhereInputSchema';
import { ProductRatingUpdateManyMutationInputSchema } from './ProductRatingUpdateManyMutationInputSchema';
import { ProductRatingUncheckedUpdateManyWithoutProductInputSchema } from './ProductRatingUncheckedUpdateManyWithoutProductInputSchema';

export const ProductRatingUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => ProductRatingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductRatingUpdateManyMutationInputSchema), z.lazy(() => ProductRatingUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export default ProductRatingUpdateManyWithWhereWithoutProductInputSchema;
