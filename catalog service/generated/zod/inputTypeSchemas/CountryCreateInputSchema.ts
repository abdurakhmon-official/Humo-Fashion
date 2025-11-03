import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { BrandCreateNestedManyWithoutCountryInputSchema } from './BrandCreateNestedManyWithoutCountryInputSchema';

export const CountryCreateInputSchema: z.ZodType<Prisma.CountryCreateInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  brands: z.lazy(() => BrandCreateNestedManyWithoutCountryInputSchema).optional(),
}).strict();

export default CountryCreateInputSchema;
