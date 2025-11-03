import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductUpdateWithoutFilesInputSchema } from './ProductUpdateWithoutFilesInputSchema';
import { ProductUncheckedUpdateWithoutFilesInputSchema } from './ProductUncheckedUpdateWithoutFilesInputSchema';
import { ProductCreateWithoutFilesInputSchema } from './ProductCreateWithoutFilesInputSchema';
import { ProductUncheckedCreateWithoutFilesInputSchema } from './ProductUncheckedCreateWithoutFilesInputSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';

export const ProductUpsertWithoutFilesInputSchema: z.ZodType<Prisma.ProductUpsertWithoutFilesInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutFilesInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutFilesInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutFilesInputSchema), z.lazy(() => ProductUncheckedCreateWithoutFilesInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional(),
}).strict();

export default ProductUpsertWithoutFilesInputSchema;
