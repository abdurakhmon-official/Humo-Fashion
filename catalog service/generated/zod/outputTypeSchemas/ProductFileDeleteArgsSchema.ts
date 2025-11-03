import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileIncludeSchema } from '../inputTypeSchemas/ProductFileIncludeSchema'
import { ProductFileWhereUniqueInputSchema } from '../inputTypeSchemas/ProductFileWhereUniqueInputSchema'
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

export const ProductFileDeleteArgsSchema: z.ZodType<Prisma.ProductFileDeleteArgs> = z.object({
  select: ProductFileSelectSchema.optional(),
  include: z.lazy(() => ProductFileIncludeSchema).optional(),
  where: ProductFileWhereUniqueInputSchema, 
}).strict();

export default ProductFileDeleteArgsSchema;
