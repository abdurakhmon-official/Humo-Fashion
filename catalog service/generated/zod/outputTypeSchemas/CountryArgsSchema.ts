import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountrySelectSchema } from '../inputTypeSchemas/CountrySelectSchema';
import { CountryIncludeSchema } from '../inputTypeSchemas/CountryIncludeSchema';

export const CountryArgsSchema: z.ZodType<Prisma.CountryDefaultArgs> = z.object({
  select: z.lazy(() => CountrySelectSchema).optional(),
  include: z.lazy(() => CountryIncludeSchema).optional(),
}).strict();

export default CountryArgsSchema;
