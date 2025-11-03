import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { ProductUpdateWithoutFilesInputSchema } from './ProductUpdateWithoutFilesInputSchema';
import { ProductUncheckedUpdateWithoutFilesInputSchema } from './ProductUncheckedUpdateWithoutFilesInputSchema';

export const ProductUpdateToOneWithWhereWithoutFilesInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutFilesInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutFilesInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutFilesInputSchema) ]),
}).strict();

export default ProductUpdateToOneWithWhereWithoutFilesInputSchema;
