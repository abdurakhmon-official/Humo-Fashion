import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { BrandUncheckedCreateNestedManyWithoutCountryInputSchema } from './BrandUncheckedCreateNestedManyWithoutCountryInputSchema';

export const CountryUncheckedCreateInputSchema: z.ZodType<Prisma.CountryUncheckedCreateInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  brands: z.lazy(() => BrandUncheckedCreateNestedManyWithoutCountryInputSchema).optional(),
}).strict();

export default CountryUncheckedCreateInputSchema;
