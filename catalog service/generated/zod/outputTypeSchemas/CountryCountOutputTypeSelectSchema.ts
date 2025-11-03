import { z } from 'zod';
import type { Prisma } from '../../prisma';

export const CountryCountOutputTypeSelectSchema: z.ZodType<Prisma.CountryCountOutputTypeSelect> = z.object({
  brands: z.boolean().optional(),
}).strict();

export default CountryCountOutputTypeSelectSchema;
