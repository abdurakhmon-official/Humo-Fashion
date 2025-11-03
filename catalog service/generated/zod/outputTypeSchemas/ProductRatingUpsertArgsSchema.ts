import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductRatingIncludeSchema } from '../inputTypeSchemas/ProductRatingIncludeSchema'
import { ProductRatingWhereUniqueInputSchema } from '../inputTypeSchemas/ProductRatingWhereUniqueInputSchema'
import { ProductRatingCreateInputSchema } from '../inputTypeSchemas/ProductRatingCreateInputSchema'
import { ProductRatingUncheckedCreateInputSchema } from '../inputTypeSchemas/ProductRatingUncheckedCreateInputSchema'
import { ProductRatingUpdateInputSchema } from '../inputTypeSchemas/ProductRatingUpdateInputSchema'
import { ProductRatingUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProductRatingUncheckedUpdateInputSchema'
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

export const ProductRatingUpsertArgsSchema: z.ZodType<Prisma.ProductRatingUpsertArgs> = z.object({
  select: ProductRatingSelectSchema.optional(),
  include: z.lazy(() => ProductRatingIncludeSchema).optional(),
  where: ProductRatingWhereUniqueInputSchema, 
  create: z.union([ ProductRatingCreateInputSchema, ProductRatingUncheckedCreateInputSchema ]),
  update: z.union([ ProductRatingUpdateInputSchema, ProductRatingUncheckedUpdateInputSchema ]),
}).strict();

export default ProductRatingUpsertArgsSchema;
