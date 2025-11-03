import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateWithoutFilesInputSchema } from './ProductCreateWithoutFilesInputSchema';
import { ProductUncheckedCreateWithoutFilesInputSchema } from './ProductUncheckedCreateWithoutFilesInputSchema';
import { ProductCreateOrConnectWithoutFilesInputSchema } from './ProductCreateOrConnectWithoutFilesInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';

export const ProductCreateNestedOneWithoutFilesInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutFilesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutFilesInputSchema), z.lazy(() => ProductUncheckedCreateWithoutFilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutFilesInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
}).strict();

export default ProductCreateNestedOneWithoutFilesInputSchema;
