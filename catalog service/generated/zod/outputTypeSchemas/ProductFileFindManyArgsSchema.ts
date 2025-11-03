import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileIncludeSchema } from '../inputTypeSchemas/ProductFileIncludeSchema'
import { ProductFileWhereInputSchema } from '../inputTypeSchemas/ProductFileWhereInputSchema'
import { ProductFileOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProductFileOrderByWithRelationInputSchema'
import { ProductFileWhereUniqueInputSchema } from '../inputTypeSchemas/ProductFileWhereUniqueInputSchema'
import { ProductFileScalarFieldEnumSchema } from '../inputTypeSchemas/ProductFileScalarFieldEnumSchema'
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

export const ProductFileFindManyArgsSchema: z.ZodType<Prisma.ProductFileFindManyArgs> = z.object({
  select: ProductFileSelectSchema.optional(),
  include: z.lazy(() => ProductFileIncludeSchema).optional(),
  where: ProductFileWhereInputSchema.optional(), 
  orderBy: z.union([ ProductFileOrderByWithRelationInputSchema.array(), ProductFileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductFileWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductFileScalarFieldEnumSchema, ProductFileScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ProductFileFindManyArgsSchema;
