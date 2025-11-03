import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumUSER_ROLEFilterSchema } from './EnumUSER_ROLEFilterSchema';
import { USER_ROLESchema } from './USER_ROLESchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const UsersWhereUniqueInputSchema: z.ZodType<Prisma.UsersWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    username: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.uuid(),
    username: z.string(),
  }),
  z.object({
    id: z.uuid(),
    email: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    username: z.string(),
    email: z.string(),
  }),
  z.object({
    username: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.uuid().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UsersWhereInputSchema), z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersWhereInputSchema), z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  profileImage: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumUSER_ROLEFilterSchema), z.lazy(() => USER_ROLESchema) ]).optional(),
  deleted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
}).strict());

export default UsersWhereUniqueInputSchema;
