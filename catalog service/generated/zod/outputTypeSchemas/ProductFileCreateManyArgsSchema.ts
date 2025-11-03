import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileCreateManyInputSchema } from '../inputTypeSchemas/ProductFileCreateManyInputSchema'

export const ProductFileCreateManyArgsSchema: z.ZodType<Prisma.ProductFileCreateManyArgs> = z.object({
  data: z.union([ ProductFileCreateManyInputSchema, ProductFileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProductFileCreateManyArgsSchema;
