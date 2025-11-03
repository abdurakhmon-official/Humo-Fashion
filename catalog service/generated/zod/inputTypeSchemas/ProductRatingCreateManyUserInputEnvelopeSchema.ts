import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingCreateManyUserInputSchema } from './ProductRatingCreateManyUserInputSchema';

export const ProductRatingCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ProductRatingCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductRatingCreateManyUserInputSchema), z.lazy(() => ProductRatingCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProductRatingCreateManyUserInputEnvelopeSchema;
