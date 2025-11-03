import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const CountryCreateWithoutBrandsInputSchema: z.ZodType<Prisma.CountryCreateWithoutBrandsInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
}).strict();

export default CountryCreateWithoutBrandsInputSchema;
