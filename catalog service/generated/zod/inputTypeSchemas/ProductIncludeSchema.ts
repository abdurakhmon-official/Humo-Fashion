import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { BrandArgsSchema } from "../outputTypeSchemas/BrandArgsSchema"
import { ProductFileFindManyArgsSchema } from "../outputTypeSchemas/ProductFileFindManyArgsSchema"
import { ProductRatingFindManyArgsSchema } from "../outputTypeSchemas/ProductRatingFindManyArgsSchema"
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema"

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  brand: z.union([z.boolean(),z.lazy(() => BrandArgsSchema)]).optional(),
  files: z.union([z.boolean(),z.lazy(() => ProductFileFindManyArgsSchema)]).optional(),
  ratings: z.union([z.boolean(),z.lazy(() => ProductRatingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default ProductIncludeSchema;
