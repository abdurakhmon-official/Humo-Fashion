import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const CountryUncheckedCreateWithoutBrandsInputSchema: z.ZodType<Prisma.CountryUncheckedCreateWithoutBrandsInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
}).strict();

export default CountryUncheckedCreateWithoutBrandsInputSchema;
