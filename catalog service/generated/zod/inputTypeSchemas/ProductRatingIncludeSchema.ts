import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const ProductRatingIncludeSchema: z.ZodType<Prisma.ProductRatingInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

export default ProductRatingIncludeSchema;
