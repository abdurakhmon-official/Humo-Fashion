import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_TYPESchema } from './PRODUCT_TYPESchema';
import { NestedEnumPRODUCT_TYPENullableFilterSchema } from './NestedEnumPRODUCT_TYPENullableFilterSchema';

export const EnumPRODUCT_TYPENullableFilterSchema: z.ZodType<Prisma.EnumPRODUCT_TYPENullableFilter> = z.object({
  equals: z.lazy(() => PRODUCT_TYPESchema).optional().nullable(),
  in: z.lazy(() => PRODUCT_TYPESchema).array().optional().nullable(),
  notIn: z.lazy(() => PRODUCT_TYPESchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => PRODUCT_TYPESchema), z.lazy(() => NestedEnumPRODUCT_TYPENullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumPRODUCT_TYPENullableFilterSchema;
