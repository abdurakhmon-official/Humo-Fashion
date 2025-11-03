import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumUSER_ROLEFilterSchema } from './EnumUSER_ROLEFilterSchema';
import { USER_ROLESchema } from './USER_ROLESchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProductRatingListRelationFilterSchema } from './ProductRatingListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    username: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    username: z.string(),
  }),
])
.and(z.object({
  id: z.uuid().optional(),
  username: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  phone1: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumUSER_ROLEFilterSchema), z.lazy(() => USER_ROLESchema) ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  deleted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  rating: z.lazy(() => ProductRatingListRelationFilterSchema).optional(),
}).strict());

export default UserWhereUniqueInputSchema;
