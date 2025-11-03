import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { UsersCreateInputSchema } from '../inputTypeSchemas/UsersCreateInputSchema'
import { UsersUncheckedCreateInputSchema } from '../inputTypeSchemas/UsersUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UsersSelectSchema: z.ZodType<Prisma.UsersSelect> = z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  password: z.boolean().optional(),
  profileImage: z.boolean().optional(),
  role: z.boolean().optional(),
  deleted: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
}).strict()

export const UsersCreateArgsSchema: z.ZodType<Prisma.UsersCreateArgs> = z.object({
  select: UsersSelectSchema.optional(),
  data: z.union([ UsersCreateInputSchema, UsersUncheckedCreateInputSchema ]),
}).strict();

export default UsersCreateArgsSchema;
