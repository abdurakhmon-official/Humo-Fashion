import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileCreateManyInputSchema } from '../inputTypeSchemas/ProductFileCreateManyInputSchema'

export const ProductFileCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductFileCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProductFileCreateManyInputSchema, ProductFileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProductFileCreateManyAndReturnArgsSchema;
