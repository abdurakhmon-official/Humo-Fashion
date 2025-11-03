import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { UsersUpdateManyMutationInputSchema } from '../inputTypeSchemas/UsersUpdateManyMutationInputSchema'
import { UsersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UsersUncheckedUpdateManyInputSchema'
import { UsersWhereInputSchema } from '../inputTypeSchemas/UsersWhereInputSchema'

export const UsersUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UsersUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UsersUpdateManyMutationInputSchema, UsersUncheckedUpdateManyInputSchema ]),
  where: UsersWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default UsersUpdateManyAndReturnArgsSchema;
