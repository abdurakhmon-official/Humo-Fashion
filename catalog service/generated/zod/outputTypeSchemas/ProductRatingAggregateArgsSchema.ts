import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductRatingWhereInputSchema } from '../inputTypeSchemas/ProductRatingWhereInputSchema'
import { ProductRatingOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProductRatingOrderByWithRelationInputSchema'
import { ProductRatingWhereUniqueInputSchema } from '../inputTypeSchemas/ProductRatingWhereUniqueInputSchema'

export const ProductRatingAggregateArgsSchema: z.ZodType<Prisma.ProductRatingAggregateArgs> = z.object({
  where: ProductRatingWhereInputSchema.optional(), 
  orderBy: z.union([ ProductRatingOrderByWithRelationInputSchema.array(), ProductRatingOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductRatingWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProductRatingAggregateArgsSchema;
