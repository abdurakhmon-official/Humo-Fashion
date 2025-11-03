import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryWhereInputSchema } from '../inputTypeSchemas/CountryWhereInputSchema'
import { CountryOrderByWithRelationInputSchema } from '../inputTypeSchemas/CountryOrderByWithRelationInputSchema'
import { CountryWhereUniqueInputSchema } from '../inputTypeSchemas/CountryWhereUniqueInputSchema'

export const CountryAggregateArgsSchema: z.ZodType<Prisma.CountryAggregateArgs> = z.object({
  where: CountryWhereInputSchema.optional(), 
  orderBy: z.union([ CountryOrderByWithRelationInputSchema.array(), CountryOrderByWithRelationInputSchema ]).optional(),
  cursor: CountryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CountryAggregateArgsSchema;
