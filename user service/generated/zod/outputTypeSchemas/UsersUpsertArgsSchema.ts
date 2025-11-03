import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { UsersWhereUniqueInputSchema } from '../inputTypeSchemas/UsersWhereUniqueInputSchema'
import { UsersCreateInputSchema } from '../inputTypeSchemas/UsersCreateInputSchema'
import { UsersUncheckedCreateInputSchema } from '../inputTypeSchemas/UsersUncheckedCreateInputSchema'
import { UsersUpdateInputSchema } from '../inputTypeSchemas/UsersUpdateInputSchema'
import { UsersUncheckedUpdateInputSchema } from '../inputTypeSchemas/UsersUncheckedUpdateInputSchema'
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

export const UsersUpsertArgsSchema: z.ZodType<Prisma.UsersUpsertArgs> = z.object({
  select: UsersSelectSchema.optional(),
  where: UsersWhereUniqueInputSchema, 
  create: z.union([ UsersCreateInputSchema, UsersUncheckedCreateInputSchema ]),
  update: z.union([ UsersUpdateInputSchema, UsersUncheckedUpdateInputSchema ]),
}).strict();

export default UsersUpsertArgsSchema;
