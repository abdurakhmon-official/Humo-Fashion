import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_SIZESchema } from './PRODUCT_SIZESchema';
import { NestedEnumPRODUCT_SIZENullableFilterSchema } from './NestedEnumPRODUCT_SIZENullableFilterSchema';

export const EnumPRODUCT_SIZENullableFilterSchema: z.ZodType<Prisma.EnumPRODUCT_SIZENullableFilter> = z.object({
  equals: z.lazy(() => PRODUCT_SIZESchema).optional().nullable(),
  in: z.lazy(() => PRODUCT_SIZESchema).array().optional().nullable(),
  notIn: z.lazy(() => PRODUCT_SIZESchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => PRODUCT_SIZESchema), z.lazy(() => NestedEnumPRODUCT_SIZENullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumPRODUCT_SIZENullableFilterSchema;
