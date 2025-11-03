import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateNestedManyWithoutBrandInputSchema } from './ProductCreateNestedManyWithoutBrandInputSchema';

export const BrandCreateWithoutCountryInputSchema: z.ZodType<Prisma.BrandCreateWithoutCountryInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  products: z.lazy(() => ProductCreateNestedManyWithoutBrandInputSchema).optional(),
}).strict();

export default BrandCreateWithoutCountryInputSchema;
