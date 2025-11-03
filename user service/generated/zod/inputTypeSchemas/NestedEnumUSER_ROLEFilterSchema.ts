import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { USER_ROLESchema } from './USER_ROLESchema';

export const NestedEnumUSER_ROLEFilterSchema: z.ZodType<Prisma.NestedEnumUSER_ROLEFilter> = z.object({
  equals: z.lazy(() => USER_ROLESchema).optional(),
  in: z.lazy(() => USER_ROLESchema).array().optional(),
  notIn: z.lazy(() => USER_ROLESchema).array().optional(),
  not: z.union([ z.lazy(() => USER_ROLESchema), z.lazy(() => NestedEnumUSER_ROLEFilterSchema) ]).optional(),
}).strict();

export default NestedEnumUSER_ROLEFilterSchema;
