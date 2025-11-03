import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductRatingWhereInputSchema } from '../inputTypeSchemas/ProductRatingWhereInputSchema'

export const ProductRatingDeleteManyArgsSchema: z.ZodType<Prisma.ProductRatingDeleteManyArgs> = z.object({
  where: ProductRatingWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProductRatingDeleteManyArgsSchema;
