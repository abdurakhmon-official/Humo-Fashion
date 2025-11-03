import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { USER_ROLESchema } from './USER_ROLESchema';

export const UsersUncheckedCreateInputSchema: z.ZodType<Prisma.UsersUncheckedCreateInput> = z.object({
  id: z.uuid().optional(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  username: z.string(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  password: z.string(),
  profileImage: z.string().optional().nullable(),
  role: z.lazy(() => USER_ROLESchema).optional(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
}).strict();

export default UsersUncheckedCreateInputSchema;
