import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileWhereInputSchema } from '../inputTypeSchemas/ProductFileWhereInputSchema'
import { ProductFileOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProductFileOrderByWithAggregationInputSchema'
import { ProductFileScalarFieldEnumSchema } from '../inputTypeSchemas/ProductFileScalarFieldEnumSchema'
import { ProductFileScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProductFileScalarWhereWithAggregatesInputSchema'

export const ProductFileGroupByArgsSchema: z.ZodType<Prisma.ProductFileGroupByArgs> = z.object({
  where: ProductFileWhereInputSchema.optional(), 
  orderBy: z.union([ ProductFileOrderByWithAggregationInputSchema.array(), ProductFileOrderByWithAggregationInputSchema ]).optional(),
  by: ProductFileScalarFieldEnumSchema.array(), 
  having: ProductFileScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProductFileGroupByArgsSchema;
