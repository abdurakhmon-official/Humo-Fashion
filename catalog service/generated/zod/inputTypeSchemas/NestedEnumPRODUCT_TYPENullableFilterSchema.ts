import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_TYPESchema } from './PRODUCT_TYPESchema';

export const NestedEnumPRODUCT_TYPENullableFilterSchema: z.ZodType<Prisma.NestedEnumPRODUCT_TYPENullableFilter> = z.object({
  equals: z.lazy(() => PRODUCT_TYPESchema).optional().nullable(),
  in: z.lazy(() => PRODUCT_TYPESchema).array().optional().nullable(),
  notIn: z.lazy(() => PRODUCT_TYPESchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => PRODUCT_TYPESchema), z.lazy(() => NestedEnumPRODUCT_TYPENullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumPRODUCT_TYPENullableFilterSchema;
