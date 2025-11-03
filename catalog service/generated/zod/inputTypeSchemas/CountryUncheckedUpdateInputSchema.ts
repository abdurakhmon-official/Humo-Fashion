import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BrandUncheckedUpdateManyWithoutCountryNestedInputSchema } from './BrandUncheckedUpdateManyWithoutCountryNestedInputSchema';

export const CountryUncheckedUpdateInputSchema: z.ZodType<Prisma.CountryUncheckedUpdateInput> = z.object({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brands: z.lazy(() => BrandUncheckedUpdateManyWithoutCountryNestedInputSchema).optional(),
}).strict();

export default CountryUncheckedUpdateInputSchema;
