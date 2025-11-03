import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryWhereInputSchema } from '../inputTypeSchemas/CountryWhereInputSchema'
import { CountryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CountryOrderByWithAggregationInputSchema'
import { CountryScalarFieldEnumSchema } from '../inputTypeSchemas/CountryScalarFieldEnumSchema'
import { CountryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CountryScalarWhereWithAggregatesInputSchema'

export const CountryGroupByArgsSchema: z.ZodType<Prisma.CountryGroupByArgs> = z.object({
  where: CountryWhereInputSchema.optional(), 
  orderBy: z.union([ CountryOrderByWithAggregationInputSchema.array(), CountryOrderByWithAggregationInputSchema ]).optional(),
  by: CountryScalarFieldEnumSchema.array(), 
  having: CountryScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CountryGroupByArgsSchema;
