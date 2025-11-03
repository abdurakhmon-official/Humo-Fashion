import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { UsersWhereInputSchema } from '../inputTypeSchemas/UsersWhereInputSchema'
import { UsersOrderByWithRelationInputSchema } from '../inputTypeSchemas/UsersOrderByWithRelationInputSchema'
import { UsersWhereUniqueInputSchema } from '../inputTypeSchemas/UsersWhereUniqueInputSchema'
import { UsersScalarFieldEnumSchema } from '../inputTypeSchemas/UsersScalarFieldEnumSchema'
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

export const UsersFindManyArgsSchema: z.ZodType<Prisma.UsersFindManyArgs> = z.object({
  select: UsersSelectSchema.optional(),
  where: UsersWhereInputSchema.optional(), 
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(), UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema, UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default UsersFindManyArgsSchema;
