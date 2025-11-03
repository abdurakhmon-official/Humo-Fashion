import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryWhereInputSchema } from '../inputTypeSchemas/CountryWhereInputSchema'

export const CountryDeleteManyArgsSchema: z.ZodType<Prisma.CountryDeleteManyArgs> = z.object({
  where: CountryWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CountryDeleteManyArgsSchema;
