import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_SIZESchema } from './PRODUCT_SIZESchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumPRODUCT_SIZENullableFilterSchema } from './NestedEnumPRODUCT_SIZENullableFilterSchema';

export const NestedEnumPRODUCT_SIZENullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPRODUCT_SIZENullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PRODUCT_SIZESchema).optional().nullable(),
  in: z.lazy(() => PRODUCT_SIZESchema).array().optional().nullable(),
  notIn: z.lazy(() => PRODUCT_SIZESchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => PRODUCT_SIZESchema), z.lazy(() => NestedEnumPRODUCT_SIZENullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPRODUCT_SIZENullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPRODUCT_SIZENullableFilterSchema).optional(),
}).strict();

export default NestedEnumPRODUCT_SIZENullableWithAggregatesFilterSchema;
