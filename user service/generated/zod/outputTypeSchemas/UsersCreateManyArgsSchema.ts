import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { UsersCreateManyInputSchema } from '../inputTypeSchemas/UsersCreateManyInputSchema'

export const UsersCreateManyArgsSchema: z.ZodType<Prisma.UsersCreateManyArgs> = z.object({
  data: z.union([ UsersCreateManyInputSchema, UsersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default UsersCreateManyArgsSchema;
