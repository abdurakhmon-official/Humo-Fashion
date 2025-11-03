import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileWhereInputSchema } from '../inputTypeSchemas/ProductFileWhereInputSchema'
import { ProductFileOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProductFileOrderByWithRelationInputSchema'
import { ProductFileWhereUniqueInputSchema } from '../inputTypeSchemas/ProductFileWhereUniqueInputSchema'

export const ProductFileAggregateArgsSchema: z.ZodType<Prisma.ProductFileAggregateArgs> = z.object({
  where: ProductFileWhereInputSchema.optional(), 
  orderBy: z.union([ ProductFileOrderByWithRelationInputSchema.array(), ProductFileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductFileWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProductFileAggregateArgsSchema;
