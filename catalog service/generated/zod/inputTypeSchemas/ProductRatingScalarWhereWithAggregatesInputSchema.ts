import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ProductRatingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductRatingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductRatingScalarWhereWithAggregatesInputSchema), z.lazy(() => ProductRatingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductRatingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductRatingScalarWhereWithAggregatesInputSchema), z.lazy(() => ProductRatingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
}).strict();

export default ProductRatingScalarWhereWithAggregatesInputSchema;
