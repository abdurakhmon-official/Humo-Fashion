import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProductScalarRelationFilterSchema } from './ProductScalarRelationFilterSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const ProductRatingWhereInputSchema: z.ZodType<Prisma.ProductRatingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductRatingWhereInputSchema), z.lazy(() => ProductRatingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductRatingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductRatingWhereInputSchema), z.lazy(() => ProductRatingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default ProductRatingWhereInputSchema;
