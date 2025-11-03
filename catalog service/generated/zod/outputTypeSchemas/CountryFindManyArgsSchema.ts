import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryIncludeSchema } from '../inputTypeSchemas/CountryIncludeSchema'
import { CountryWhereInputSchema } from '../inputTypeSchemas/CountryWhereInputSchema'
import { CountryOrderByWithRelationInputSchema } from '../inputTypeSchemas/CountryOrderByWithRelationInputSchema'
import { CountryWhereUniqueInputSchema } from '../inputTypeSchemas/CountryWhereUniqueInputSchema'
import { CountryScalarFieldEnumSchema } from '../inputTypeSchemas/CountryScalarFieldEnumSchema'
import { BrandFindManyArgsSchema } from "../outputTypeSchemas/BrandFindManyArgsSchema"
import { CountryCountOutputTypeArgsSchema } from "../outputTypeSchemas/CountryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CountrySelectSchema: z.ZodType<Prisma.CountrySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  brands: z.union([z.boolean(),z.lazy(() => BrandFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CountryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CountryFindManyArgsSchema: z.ZodType<Prisma.CountryFindManyArgs> = z.object({
  select: CountrySelectSchema.optional(),
  include: z.lazy(() => CountryIncludeSchema).optional(),
  where: CountryWhereInputSchema.optional(), 
  orderBy: z.union([ CountryOrderByWithRelationInputSchema.array(), CountryOrderByWithRelationInputSchema ]).optional(),
  cursor: CountryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CountryScalarFieldEnumSchema, CountryScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default CountryFindManyArgsSchema;
