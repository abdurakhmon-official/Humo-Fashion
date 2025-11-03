import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { CountryArgsSchema } from "../outputTypeSchemas/CountryArgsSchema"
import { ProductFindManyArgsSchema } from "../outputTypeSchemas/ProductFindManyArgsSchema"
import { BrandCountOutputTypeArgsSchema } from "../outputTypeSchemas/BrandCountOutputTypeArgsSchema"

export const BrandIncludeSchema: z.ZodType<Prisma.BrandInclude> = z.object({
  country: z.union([z.boolean(),z.lazy(() => CountryArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BrandCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default BrandIncludeSchema;
