import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { BrandCreateManyCountryInputSchema } from './BrandCreateManyCountryInputSchema';

export const BrandCreateManyCountryInputEnvelopeSchema: z.ZodType<Prisma.BrandCreateManyCountryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BrandCreateManyCountryInputSchema), z.lazy(() => BrandCreateManyCountryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default BrandCreateManyCountryInputEnvelopeSchema;
