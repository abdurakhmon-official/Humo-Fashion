import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutBrandInputSchema } from './ProductUncheckedCreateNestedManyWithoutBrandInputSchema';

export const BrandUncheckedCreateInputSchema: z.ZodType<Prisma.BrandUncheckedCreateInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  countryId: z.string(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutBrandInputSchema).optional(),
}).strict();

export default BrandUncheckedCreateInputSchema;
