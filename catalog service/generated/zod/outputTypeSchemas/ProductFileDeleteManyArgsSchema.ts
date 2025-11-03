import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileWhereInputSchema } from '../inputTypeSchemas/ProductFileWhereInputSchema'

export const ProductFileDeleteManyArgsSchema: z.ZodType<Prisma.ProductFileDeleteManyArgs> = z.object({
  where: ProductFileWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProductFileDeleteManyArgsSchema;
