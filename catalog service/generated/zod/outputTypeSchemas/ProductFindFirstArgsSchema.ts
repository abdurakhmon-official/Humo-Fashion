import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductIncludeSchema } from '../inputTypeSchemas/ProductIncludeSchema'
import { ProductWhereInputSchema } from '../inputTypeSchemas/ProductWhereInputSchema'
import { ProductOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProductOrderByWithRelationInputSchema'
import { ProductWhereUniqueInputSchema } from '../inputTypeSchemas/ProductWhereUniqueInputSchema'
import { ProductScalarFieldEnumSchema } from '../inputTypeSchemas/ProductScalarFieldEnumSchema'
import { BrandArgsSchema } from "../outputTypeSchemas/BrandArgsSchema"
import { ProductFileFindManyArgsSchema } from "../outputTypeSchemas/ProductFileFindManyArgsSchema"
import { ProductRatingFindManyArgsSchema } from "../outputTypeSchemas/ProductRatingFindManyArgsSchema"
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  brandId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  overview: z.boolean().optional(),
  information: z.boolean().optional(),
  price: z.boolean().optional(),
  price2: z.boolean().optional(),
  discount: z.boolean().optional(),
  stock: z.boolean().optional(),
  type: z.boolean().optional(),
  color: z.boolean().optional(),
  size: z.boolean().optional(),
  sold: z.boolean().optional(),
  like_count: z.boolean().optional(),
  deleted: z.boolean().optional(),
  average_rating: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  brand: z.union([z.boolean(),z.lazy(() => BrandArgsSchema)]).optional(),
  files: z.union([z.boolean(),z.lazy(() => ProductFileFindManyArgsSchema)]).optional(),
  ratings: z.union([z.boolean(),z.lazy(() => ProductRatingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
  where: ProductWhereInputSchema.optional(), 
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(), ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ProductFindFirstArgsSchema;
