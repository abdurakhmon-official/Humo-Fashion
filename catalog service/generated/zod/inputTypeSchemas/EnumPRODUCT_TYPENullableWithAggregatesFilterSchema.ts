import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_TYPESchema } from './PRODUCT_TYPESchema';
import { NestedEnumPRODUCT_TYPENullableWithAggregatesFilterSchema } from './NestedEnumPRODUCT_TYPENullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumPRODUCT_TYPENullableFilterSchema } from './NestedEnumPRODUCT_TYPENullableFilterSchema';

export const EnumPRODUCT_TYPENullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPRODUCT_TYPENullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PRODUCT_TYPESchema).optional().nullable(),
  in: z.lazy(() => PRODUCT_TYPESchema).array().optional().nullable(),
  notIn: z.lazy(() => PRODUCT_TYPESchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => PRODUCT_TYPESchema), z.lazy(() => NestedEnumPRODUCT_TYPENullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPRODUCT_TYPENullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPRODUCT_TYPENullableFilterSchema).optional(),
}).strict();

export default EnumPRODUCT_TYPENullableWithAggregatesFilterSchema;
