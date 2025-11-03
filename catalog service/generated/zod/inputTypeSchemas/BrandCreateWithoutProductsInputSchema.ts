import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { CountryCreateNestedOneWithoutBrandsInputSchema } from './CountryCreateNestedOneWithoutBrandsInputSchema';

export const BrandCreateWithoutProductsInputSchema: z.ZodType<Prisma.BrandCreateWithoutProductsInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  country: z.lazy(() => CountryCreateNestedOneWithoutBrandsInputSchema),
}).strict();

export default BrandCreateWithoutProductsInputSchema;
