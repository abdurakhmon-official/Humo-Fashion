import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryCountOutputTypeSelectSchema } from './CountryCountOutputTypeSelectSchema';

export const CountryCountOutputTypeArgsSchema: z.ZodType<Prisma.CountryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CountryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CountryCountOutputTypeSelectSchema;
