import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { UsersWhereInputSchema } from '../inputTypeSchemas/UsersWhereInputSchema'

export const UsersDeleteManyArgsSchema: z.ZodType<Prisma.UsersDeleteManyArgs> = z.object({
  where: UsersWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default UsersDeleteManyArgsSchema;
