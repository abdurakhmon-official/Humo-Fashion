import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductRatingUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProductRatingUpdateManyMutationInputSchema'
import { ProductRatingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProductRatingUncheckedUpdateManyInputSchema'
import { ProductRatingWhereInputSchema } from '../inputTypeSchemas/ProductRatingWhereInputSchema'

export const ProductRatingUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductRatingUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ProductRatingUpdateManyMutationInputSchema, ProductRatingUncheckedUpdateManyInputSchema ]),
  where: ProductRatingWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProductRatingUpdateManyAndReturnArgsSchema;
