import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutFilesInputSchema } from './ProductCreateWithoutFilesInputSchema';
import { ProductUncheckedCreateWithoutFilesInputSchema } from './ProductUncheckedCreateWithoutFilesInputSchema';

export const ProductCreateOrConnectWithoutFilesInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutFilesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutFilesInputSchema), z.lazy(() => ProductUncheckedCreateWithoutFilesInputSchema) ]),
}).strict();

export default ProductCreateOrConnectWithoutFilesInputSchema;
