import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingProductIdUserIdCompoundUniqueInputSchema } from './ProductRatingProductIdUserIdCompoundUniqueInputSchema';
import { ProductRatingWhereInputSchema } from './ProductRatingWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProductScalarRelationFilterSchema } from './ProductScalarRelationFilterSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const ProductRatingWhereUniqueInputSchema: z.ZodType<Prisma.ProductRatingWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    productId_userId: z.lazy(() => ProductRatingProductIdUserIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    productId_userId: z.lazy(() => ProductRatingProductIdUserIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.uuid().optional(),
  productId_userId: z.lazy(() => ProductRatingProductIdUserIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ProductRatingWhereInputSchema), z.lazy(() => ProductRatingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductRatingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductRatingWhereInputSchema), z.lazy(() => ProductRatingWhereInputSchema).array() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default ProductRatingWhereUniqueInputSchema;
