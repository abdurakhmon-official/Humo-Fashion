import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { CountryCreateNestedOneWithoutBrandsInputSchema } from './CountryCreateNestedOneWithoutBrandsInputSchema';
import { ProductCreateNestedManyWithoutBrandInputSchema } from './ProductCreateNestedManyWithoutBrandInputSchema';

export const BrandCreateInputSchema: z.ZodType<Prisma.BrandCreateInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  country: z.lazy(() => CountryCreateNestedOneWithoutBrandsInputSchema),
  products: z.lazy(() => ProductCreateNestedManyWithoutBrandInputSchema).optional(),
}).strict();

export default BrandCreateInputSchema;
