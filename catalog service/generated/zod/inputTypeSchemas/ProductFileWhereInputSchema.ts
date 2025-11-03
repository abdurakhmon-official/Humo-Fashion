import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProductScalarRelationFilterSchema } from './ProductScalarRelationFilterSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';

export const ProductFileWhereInputSchema: z.ZodType<Prisma.ProductFileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductFileWhereInputSchema), z.lazy(() => ProductFileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductFileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductFileWhereInputSchema), z.lazy(() => ProductFileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  file: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict();

export default ProductFileWhereInputSchema;
