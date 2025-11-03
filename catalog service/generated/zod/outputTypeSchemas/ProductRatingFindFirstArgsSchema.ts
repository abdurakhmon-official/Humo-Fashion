import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductRatingIncludeSchema } from '../inputTypeSchemas/ProductRatingIncludeSchema'
import { ProductRatingWhereInputSchema } from '../inputTypeSchemas/ProductRatingWhereInputSchema'
import { ProductRatingOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProductRatingOrderByWithRelationInputSchema'
import { ProductRatingWhereUniqueInputSchema } from '../inputTypeSchemas/ProductRatingWhereUniqueInputSchema'
import { ProductRatingScalarFieldEnumSchema } from '../inputTypeSchemas/ProductRatingScalarFieldEnumSchema'
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductRatingSelectSchema: z.ZodType<Prisma.ProductRatingSelect> = z.object({
  id: z.boolean().optional(),
  productId: z.boolean().optional(),
  userId: z.boolean().optional(),
  rating: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const ProductRatingFindFirstArgsSchema: z.ZodType<Prisma.ProductRatingFindFirstArgs> = z.object({
  select: ProductRatingSelectSchema.optional(),
  include: z.lazy(() => ProductRatingIncludeSchema).optional(),
  where: ProductRatingWhereInputSchema.optional(), 
  orderBy: z.union([ ProductRatingOrderByWithRelationInputSchema.array(), ProductRatingOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductRatingWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductRatingScalarFieldEnumSchema, ProductRatingScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ProductRatingFindFirstArgsSchema;
