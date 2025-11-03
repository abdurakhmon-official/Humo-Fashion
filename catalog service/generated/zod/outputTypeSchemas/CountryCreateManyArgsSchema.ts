import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryCreateManyInputSchema } from '../inputTypeSchemas/CountryCreateManyInputSchema'

export const CountryCreateManyArgsSchema: z.ZodType<Prisma.CountryCreateManyArgs> = z.object({
  data: z.union([ CountryCreateManyInputSchema, CountryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CountryCreateManyArgsSchema;
