import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProductFileUpdateManyMutationInputSchema'
import { ProductFileUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProductFileUncheckedUpdateManyInputSchema'
import { ProductFileWhereInputSchema } from '../inputTypeSchemas/ProductFileWhereInputSchema'

export const ProductFileUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductFileUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ProductFileUpdateManyMutationInputSchema, ProductFileUncheckedUpdateManyInputSchema ]),
  where: ProductFileWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProductFileUpdateManyAndReturnArgsSchema;
