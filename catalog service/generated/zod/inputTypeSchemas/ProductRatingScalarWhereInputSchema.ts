import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProductRatingScalarWhereInputSchema: z.ZodType<Prisma.ProductRatingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductRatingScalarWhereInputSchema), z.lazy(() => ProductRatingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductRatingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductRatingScalarWhereInputSchema), z.lazy(() => ProductRatingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
}).strict();

export default ProductRatingScalarWhereInputSchema;
