import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateWithoutFilesInputSchema } from './ProductCreateWithoutFilesInputSchema';
import { ProductUncheckedCreateWithoutFilesInputSchema } from './ProductUncheckedCreateWithoutFilesInputSchema';
import { ProductCreateOrConnectWithoutFilesInputSchema } from './ProductCreateOrConnectWithoutFilesInputSchema';
import { ProductUpsertWithoutFilesInputSchema } from './ProductUpsertWithoutFilesInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateToOneWithWhereWithoutFilesInputSchema } from './ProductUpdateToOneWithWhereWithoutFilesInputSchema';
import { ProductUpdateWithoutFilesInputSchema } from './ProductUpdateWithoutFilesInputSchema';
import { ProductUncheckedUpdateWithoutFilesInputSchema } from './ProductUncheckedUpdateWithoutFilesInputSchema';

export const ProductUpdateOneRequiredWithoutFilesNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutFilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutFilesInputSchema), z.lazy(() => ProductUncheckedCreateWithoutFilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutFilesInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutFilesInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutFilesInputSchema), z.lazy(() => ProductUpdateWithoutFilesInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutFilesInputSchema) ]).optional(),
}).strict();

export default ProductUpdateOneRequiredWithoutFilesNestedInputSchema;
