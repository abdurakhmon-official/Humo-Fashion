import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateManyBrandInputSchema } from './ProductCreateManyBrandInputSchema';

export const ProductCreateManyBrandInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyBrandInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyBrandInputSchema), z.lazy(() => ProductCreateManyBrandInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProductCreateManyBrandInputEnvelopeSchema;
