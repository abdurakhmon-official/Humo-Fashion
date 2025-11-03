import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingCreateManyProductInputSchema } from './ProductRatingCreateManyProductInputSchema';

export const ProductRatingCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ProductRatingCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductRatingCreateManyProductInputSchema), z.lazy(() => ProductRatingCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProductRatingCreateManyProductInputEnvelopeSchema;
