import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { USER_ROLESchema } from './USER_ROLESchema';
import { NestedEnumUSER_ROLEWithAggregatesFilterSchema } from './NestedEnumUSER_ROLEWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumUSER_ROLEFilterSchema } from './NestedEnumUSER_ROLEFilterSchema';

export const EnumUSER_ROLEWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUSER_ROLEWithAggregatesFilter> = z.object({
  equals: z.lazy(() => USER_ROLESchema).optional(),
  in: z.lazy(() => USER_ROLESchema).array().optional(),
  notIn: z.lazy(() => USER_ROLESchema).array().optional(),
  not: z.union([ z.lazy(() => USER_ROLESchema), z.lazy(() => NestedEnumUSER_ROLEWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUSER_ROLEFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUSER_ROLEFilterSchema).optional(),
}).strict();

export default EnumUSER_ROLEWithAggregatesFilterSchema;
