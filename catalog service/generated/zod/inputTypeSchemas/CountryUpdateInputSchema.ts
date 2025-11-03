import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BrandUpdateManyWithoutCountryNestedInputSchema } from './BrandUpdateManyWithoutCountryNestedInputSchema';

export const CountryUpdateInputSchema: z.ZodType<Prisma.CountryUpdateInput> = z.object({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brands: z.lazy(() => BrandUpdateManyWithoutCountryNestedInputSchema).optional(),
}).strict();

export default CountryUpdateInputSchema;
