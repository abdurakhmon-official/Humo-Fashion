import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductFileScalarWhereInputSchema } from './ProductFileScalarWhereInputSchema';
import { ProductFileUpdateManyMutationInputSchema } from './ProductFileUpdateManyMutationInputSchema';
import { ProductFileUncheckedUpdateManyWithoutProductInputSchema } from './ProductFileUncheckedUpdateManyWithoutProductInputSchema';

export const ProductFileUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ProductFileUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => ProductFileScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductFileUpdateManyMutationInputSchema), z.lazy(() => ProductFileUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export default ProductFileUpdateManyWithWhereWithoutProductInputSchema;
