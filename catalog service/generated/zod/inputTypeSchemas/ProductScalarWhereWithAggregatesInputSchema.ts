import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumPRODUCT_TYPENullableWithAggregatesFilterSchema } from './EnumPRODUCT_TYPENullableWithAggregatesFilterSchema';
import { PRODUCT_TYPESchema } from './PRODUCT_TYPESchema';
import { EnumPRODUCT_COLORSNullableWithAggregatesFilterSchema } from './EnumPRODUCT_COLORSNullableWithAggregatesFilterSchema';
import { PRODUCT_COLORSSchema } from './PRODUCT_COLORSSchema';
import { EnumPRODUCT_SIZENullableWithAggregatesFilterSchema } from './EnumPRODUCT_SIZENullableWithAggregatesFilterSchema';
import { PRODUCT_SIZESchema } from './PRODUCT_SIZESchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  brandId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  overview: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  information: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema), z.number() ]).optional(),
  price2: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  discount: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  stock: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumPRODUCT_TYPENullableWithAggregatesFilterSchema), z.lazy(() => PRODUCT_TYPESchema) ]).optional().nullable(),
  color: z.union([ z.lazy(() => EnumPRODUCT_COLORSNullableWithAggregatesFilterSchema), z.lazy(() => PRODUCT_COLORSSchema) ]).optional().nullable(),
  size: z.union([ z.lazy(() => EnumPRODUCT_SIZENullableWithAggregatesFilterSchema), z.lazy(() => PRODUCT_SIZESchema) ]).optional().nullable(),
  sold: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  like_count: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  deleted: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  average_rating: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
}).strict();

export default ProductScalarWhereWithAggregatesInputSchema;
