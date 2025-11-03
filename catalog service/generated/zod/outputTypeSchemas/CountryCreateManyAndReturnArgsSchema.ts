import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryCreateManyInputSchema } from '../inputTypeSchemas/CountryCreateManyInputSchema'

export const CountryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CountryCreateManyAndReturnArgs> = z.object({
  data: z.union([ CountryCreateManyInputSchema, CountryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CountryCreateManyAndReturnArgsSchema;
