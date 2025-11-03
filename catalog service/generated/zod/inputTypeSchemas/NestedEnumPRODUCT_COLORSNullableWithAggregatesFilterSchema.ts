import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_COLORSSchema } from './PRODUCT_COLORSSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumPRODUCT_COLORSNullableFilterSchema } from './NestedEnumPRODUCT_COLORSNullableFilterSchema';

export const NestedEnumPRODUCT_COLORSNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPRODUCT_COLORSNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PRODUCT_COLORSSchema).optional().nullable(),
  in: z.lazy(() => PRODUCT_COLORSSchema).array().optional().nullable(),
  notIn: z.lazy(() => PRODUCT_COLORSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => PRODUCT_COLORSSchema), z.lazy(() => NestedEnumPRODUCT_COLORSNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPRODUCT_COLORSNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPRODUCT_COLORSNullableFilterSchema).optional(),
}).strict();

export default NestedEnumPRODUCT_COLORSNullableWithAggregatesFilterSchema;
