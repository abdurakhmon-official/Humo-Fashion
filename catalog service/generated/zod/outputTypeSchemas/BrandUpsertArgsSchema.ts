import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { BrandIncludeSchema } from '../inputTypeSchemas/BrandIncludeSchema'
import { BrandWhereUniqueInputSchema } from '../inputTypeSchemas/BrandWhereUniqueInputSchema'
import { BrandCreateInputSchema } from '../inputTypeSchemas/BrandCreateInputSchema'
import { BrandUncheckedCreateInputSchema } from '../inputTypeSchemas/BrandUncheckedCreateInputSchema'
import { BrandUpdateInputSchema } from '../inputTypeSchemas/BrandUpdateInputSchema'
import { BrandUncheckedUpdateInputSchema } from '../inputTypeSchemas/BrandUncheckedUpdateInputSchema'
import { CountryArgsSchema } from "../outputTypeSchemas/CountryArgsSchema"
import { ProductFindManyArgsSchema } from "../outputTypeSchemas/ProductFindManyArgsSchema"
import { BrandCountOutputTypeArgsSchema } from "../outputTypeSchemas/BrandCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BrandSelectSchema: z.ZodType<Prisma.BrandSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  image: z.boolean().optional(),
  countryId: z.boolean().optional(),
  deleted: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  country: z.union([z.boolean(),z.lazy(() => CountryArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BrandCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BrandUpsertArgsSchema: z.ZodType<Prisma.BrandUpsertArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: z.lazy(() => BrandIncludeSchema).optional(),
  where: BrandWhereUniqueInputSchema, 
  create: z.union([ BrandCreateInputSchema, BrandUncheckedCreateInputSchema ]),
  update: z.union([ BrandUpdateInputSchema, BrandUncheckedUpdateInputSchema ]),
}).strict();

export default BrandUpsertArgsSchema;
