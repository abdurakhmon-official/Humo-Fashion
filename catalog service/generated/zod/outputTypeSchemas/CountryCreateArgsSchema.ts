import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryIncludeSchema } from '../inputTypeSchemas/CountryIncludeSchema'
import { CountryCreateInputSchema } from '../inputTypeSchemas/CountryCreateInputSchema'
import { CountryUncheckedCreateInputSchema } from '../inputTypeSchemas/CountryUncheckedCreateInputSchema'
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

export const CountryCreateArgsSchema: z.ZodType<Prisma.CountryCreateArgs> = z.object({
  select: CountrySelectSchema.optional(),
  include: z.lazy(() => CountryIncludeSchema).optional(),
  data: z.union([ CountryCreateInputSchema, CountryUncheckedCreateInputSchema ]),
}).strict();

export default CountryCreateArgsSchema;
