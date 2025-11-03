import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileIncludeSchema } from '../inputTypeSchemas/ProductFileIncludeSchema'
import { ProductFileWhereUniqueInputSchema } from '../inputTypeSchemas/ProductFileWhereUniqueInputSchema'
import { ProductFileCreateInputSchema } from '../inputTypeSchemas/ProductFileCreateInputSchema'
import { ProductFileUncheckedCreateInputSchema } from '../inputTypeSchemas/ProductFileUncheckedCreateInputSchema'
import { ProductFileUpdateInputSchema } from '../inputTypeSchemas/ProductFileUpdateInputSchema'
import { ProductFileUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProductFileUncheckedUpdateInputSchema'
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductFileSelectSchema: z.ZodType<Prisma.ProductFileSelect> = z.object({
  id: z.boolean().optional(),
  file: z.boolean().optional(),
  name: z.boolean().optional(),
  size: z.boolean().optional(),
  productId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const ProductFileUpsertArgsSchema: z.ZodType<Prisma.ProductFileUpsertArgs> = z.object({
  select: ProductFileSelectSchema.optional(),
  include: z.lazy(() => ProductFileIncludeSchema).optional(),
  where: ProductFileWhereUniqueInputSchema, 
  create: z.union([ ProductFileCreateInputSchema, ProductFileUncheckedCreateInputSchema ]),
  update: z.union([ ProductFileUpdateInputSchema, ProductFileUncheckedUpdateInputSchema ]),
}).strict();

export default ProductFileUpsertArgsSchema;
