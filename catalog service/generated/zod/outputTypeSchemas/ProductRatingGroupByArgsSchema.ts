import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductRatingWhereInputSchema } from '../inputTypeSchemas/ProductRatingWhereInputSchema'
import { ProductRatingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProductRatingOrderByWithAggregationInputSchema'
import { ProductRatingScalarFieldEnumSchema } from '../inputTypeSchemas/ProductRatingScalarFieldEnumSchema'
import { ProductRatingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProductRatingScalarWhereWithAggregatesInputSchema'

export const ProductRatingGroupByArgsSchema: z.ZodType<Prisma.ProductRatingGroupByArgs> = z.object({
  where: ProductRatingWhereInputSchema.optional(), 
  orderBy: z.union([ ProductRatingOrderByWithAggregationInputSchema.array(), ProductRatingOrderByWithAggregationInputSchema ]).optional(),
  by: ProductRatingScalarFieldEnumSchema.array(), 
  having: ProductRatingScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProductRatingGroupByArgsSchema;
