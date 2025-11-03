import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryArgsSchema } from "../outputTypeSchemas/CountryArgsSchema"
import { ProductFindManyArgsSchema } from "../outputTypeSchemas/ProductFindManyArgsSchema"
import { BrandCountOutputTypeArgsSchema } from "../outputTypeSchemas/BrandCountOutputTypeArgsSchema"

export const BrandSelectSchema: z.ZodType<Prisma.BrandSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  image: z.boolean().optional(),
  countryId: z.boolean().optional(),
  deleted: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  country: z.union([z.boolean(),z.lazy(() => CountryArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BrandCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BrandSelectSchema;
