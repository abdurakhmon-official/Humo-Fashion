import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryUpdateManyMutationInputSchema } from '../inputTypeSchemas/CountryUpdateManyMutationInputSchema'
import { CountryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CountryUncheckedUpdateManyInputSchema'
import { CountryWhereInputSchema } from '../inputTypeSchemas/CountryWhereInputSchema'

export const CountryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CountryUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CountryUpdateManyMutationInputSchema, CountryUncheckedUpdateManyInputSchema ]),
  where: CountryWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CountryUpdateManyAndReturnArgsSchema;
