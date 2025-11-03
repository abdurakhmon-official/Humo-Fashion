import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { USER_ROLESchema } from './USER_ROLESchema';
import { NestedEnumUSER_ROLEFilterSchema } from './NestedEnumUSER_ROLEFilterSchema';

export const EnumUSER_ROLEFilterSchema: z.ZodType<Prisma.EnumUSER_ROLEFilter> = z.object({
  equals: z.lazy(() => USER_ROLESchema).optional(),
  in: z.lazy(() => USER_ROLESchema).array().optional(),
  notIn: z.lazy(() => USER_ROLESchema).array().optional(),
  not: z.union([ z.lazy(() => USER_ROLESchema), z.lazy(() => NestedEnumUSER_ROLEFilterSchema) ]).optional(),
}).strict();

export default EnumUSER_ROLEFilterSchema;
