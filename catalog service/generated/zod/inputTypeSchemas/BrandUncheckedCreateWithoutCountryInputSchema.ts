import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutBrandInputSchema } from './ProductUncheckedCreateNestedManyWithoutBrandInputSchema';

export const BrandUncheckedCreateWithoutCountryInputSchema: z.ZodType<Prisma.BrandUncheckedCreateWithoutCountryInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutBrandInputSchema).optional(),
}).strict();

export default BrandUncheckedCreateWithoutCountryInputSchema;
