import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileIncludeSchema } from '../inputTypeSchemas/ProductFileIncludeSchema'
import { ProductFileCreateInputSchema } from '../inputTypeSchemas/ProductFileCreateInputSchema'
import { ProductFileUncheckedCreateInputSchema } from '../inputTypeSchemas/ProductFileUncheckedCreateInputSchema'
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

export const ProductFileCreateArgsSchema: z.ZodType<Prisma.ProductFileCreateArgs> = z.object({
  select: ProductFileSelectSchema.optional(),
  include: z.lazy(() => ProductFileIncludeSchema).optional(),
  data: z.union([ ProductFileCreateInputSchema, ProductFileUncheckedCreateInputSchema ]),
}).strict();

export default ProductFileCreateArgsSchema;
