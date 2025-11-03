import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_COLORSSchema } from './PRODUCT_COLORSSchema';
import { NestedEnumPRODUCT_COLORSNullableFilterSchema } from './NestedEnumPRODUCT_COLORSNullableFilterSchema';

export const EnumPRODUCT_COLORSNullableFilterSchema: z.ZodType<Prisma.EnumPRODUCT_COLORSNullableFilter> = z.object({
  equals: z.lazy(() => PRODUCT_COLORSSchema).optional().nullable(),
  in: z.lazy(() => PRODUCT_COLORSSchema).array().optional().nullable(),
  notIn: z.lazy(() => PRODUCT_COLORSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => PRODUCT_COLORSSchema), z.lazy(() => NestedEnumPRODUCT_COLORSNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumPRODUCT_COLORSNullableFilterSchema;
