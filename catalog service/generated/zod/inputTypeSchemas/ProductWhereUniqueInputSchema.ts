import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumPRODUCT_TYPENullableFilterSchema } from './EnumPRODUCT_TYPENullableFilterSchema';
import { PRODUCT_TYPESchema } from './PRODUCT_TYPESchema';
import { EnumPRODUCT_COLORSNullableFilterSchema } from './EnumPRODUCT_COLORSNullableFilterSchema';
import { PRODUCT_COLORSSchema } from './PRODUCT_COLORSSchema';
import { EnumPRODUCT_SIZENullableFilterSchema } from './EnumPRODUCT_SIZENullableFilterSchema';
import { PRODUCT_SIZESchema } from './PRODUCT_SIZESchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BrandNullableScalarRelationFilterSchema } from './BrandNullableScalarRelationFilterSchema';
import { BrandWhereInputSchema } from './BrandWhereInputSchema';
import { ProductFileListRelationFilterSchema } from './ProductFileListRelationFilterSchema';
import { ProductRatingListRelationFilterSchema } from './ProductRatingListRelationFilterSchema';

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.object({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  brandId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  overview: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  information: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  price2: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  discount: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  stock: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  type: z.union([ z.lazy(() => EnumPRODUCT_TYPENullableFilterSchema), z.lazy(() => PRODUCT_TYPESchema) ]).optional().nullable(),
  color: z.union([ z.lazy(() => EnumPRODUCT_COLORSNullableFilterSchema), z.lazy(() => PRODUCT_COLORSSchema) ]).optional().nullable(),
  size: z.union([ z.lazy(() => EnumPRODUCT_SIZENullableFilterSchema), z.lazy(() => PRODUCT_SIZESchema) ]).optional().nullable(),
  sold: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  like_count: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  deleted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  average_rating: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  brand: z.union([ z.lazy(() => BrandNullableScalarRelationFilterSchema), z.lazy(() => BrandWhereInputSchema) ]).optional().nullable(),
  files: z.lazy(() => ProductFileListRelationFilterSchema).optional(),
  ratings: z.lazy(() => ProductRatingListRelationFilterSchema).optional(),
}).strict());

export default ProductWhereUniqueInputSchema;
