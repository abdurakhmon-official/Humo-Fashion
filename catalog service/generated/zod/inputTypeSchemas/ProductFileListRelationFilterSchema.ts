import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductFileWhereInputSchema } from './ProductFileWhereInputSchema';

export const ProductFileListRelationFilterSchema: z.ZodType<Prisma.ProductFileListRelationFilter> = z.object({
  every: z.lazy(() => ProductFileWhereInputSchema).optional(),
  some: z.lazy(() => ProductFileWhereInputSchema).optional(),
  none: z.lazy(() => ProductFileWhereInputSchema).optional(),
}).strict();

export default ProductFileListRelationFilterSchema;
