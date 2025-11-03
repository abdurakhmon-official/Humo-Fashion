import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { UsersCreateManyInputSchema } from '../inputTypeSchemas/UsersCreateManyInputSchema'

export const UsersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UsersCreateManyAndReturnArgs> = z.object({
  data: z.union([ UsersCreateManyInputSchema, UsersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default UsersCreateManyAndReturnArgsSchema;
