import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductScalarWhereInputSchema } from './ProductScalarWhereInputSchema';
import { ProductUpdateManyMutationInputSchema } from './ProductUpdateManyMutationInputSchema';
import { ProductUncheckedUpdateManyWithoutBrandInputSchema } from './ProductUncheckedUpdateManyWithoutBrandInputSchema';

export const ProductUpdateManyWithWhereWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutBrandInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema), z.lazy(() => ProductUncheckedUpdateManyWithoutBrandInputSchema) ]),
}).strict();

export default ProductUpdateManyWithWhereWithoutBrandInputSchema;
