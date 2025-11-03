import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProductFileScalarWhereInputSchema: z.ZodType<Prisma.ProductFileScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductFileScalarWhereInputSchema), z.lazy(() => ProductFileScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductFileScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductFileScalarWhereInputSchema), z.lazy(() => ProductFileScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  file: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
}).strict();

export default ProductFileScalarWhereInputSchema;
