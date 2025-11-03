import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductRatingCreateManyInputSchema } from '../inputTypeSchemas/ProductRatingCreateManyInputSchema'

export const ProductRatingCreateManyArgsSchema: z.ZodType<Prisma.ProductRatingCreateManyArgs> = z.object({
  data: z.union([ ProductRatingCreateManyInputSchema, ProductRatingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProductRatingCreateManyArgsSchema;
