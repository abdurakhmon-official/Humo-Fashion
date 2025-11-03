import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'
import { ProductRatingFindManyArgsSchema } from "../outputTypeSchemas/ProductRatingFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  phone1: z.boolean().optional(),
  address: z.boolean().optional(),
  email: z.boolean().optional(),
  image: z.boolean().optional(),
  role: z.boolean().optional(),
  active: z.boolean().optional(),
  deleted: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  rating: z.union([z.boolean(),z.lazy(() => ProductRatingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
  where: UserWhereUniqueInputSchema, 
}).strict();

export default UserDeleteArgsSchema;
