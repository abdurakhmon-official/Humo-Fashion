import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const CountryCreateManyInputSchema: z.ZodType<Prisma.CountryCreateManyInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
}).strict();

export default CountryCreateManyInputSchema;
