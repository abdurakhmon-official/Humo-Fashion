import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductFileCreateManyProductInputSchema } from './ProductFileCreateManyProductInputSchema';

export const ProductFileCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ProductFileCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductFileCreateManyProductInputSchema), z.lazy(() => ProductFileCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProductFileCreateManyProductInputEnvelopeSchema;
