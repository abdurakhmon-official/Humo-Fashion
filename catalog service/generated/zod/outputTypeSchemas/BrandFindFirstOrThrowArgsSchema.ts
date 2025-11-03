import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { BrandIncludeSchema } from '../inputTypeSchemas/BrandIncludeSchema'
import { BrandWhereInputSchema } from '../inputTypeSchemas/BrandWhereInputSchema'
import { BrandOrderByWithRelationInputSchema } from '../inputTypeSchemas/BrandOrderByWithRelationInputSchema'
import { BrandWhereUniqueInputSchema } from '../inputTypeSchemas/BrandWhereUniqueInputSchema'
import { BrandScalarFieldEnumSchema } from '../inputTypeSchemas/BrandScalarFieldEnumSchema'
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

export const BrandFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BrandFindFirstOrThrowArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: z.lazy(() => BrandIncludeSchema).optional(),
  where: BrandWhereInputSchema.optional(), 
  orderBy: z.union([ BrandOrderByWithRelationInputSchema.array(), BrandOrderByWithRelationInputSchema ]).optional(),
  cursor: BrandWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrandScalarFieldEnumSchema, BrandScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default BrandFindFirstOrThrowArgsSchema;
