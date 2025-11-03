import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateNestedOneWithoutFilesInputSchema } from './ProductCreateNestedOneWithoutFilesInputSchema';

export const ProductFileCreateInputSchema: z.ZodType<Prisma.ProductFileCreateInput> = z.object({
  id: z.uuid().optional(),
  file: z.string(),
  name: z.string(),
  size: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutFilesInputSchema),
}).strict();

export default ProductFileCreateInputSchema;
