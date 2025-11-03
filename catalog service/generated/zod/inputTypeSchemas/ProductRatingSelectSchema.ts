import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const ProductRatingSelectSchema: z.ZodType<Prisma.ProductRatingSelect> = z.object({
  id: z.boolean().optional(),
  productId: z.boolean().optional(),
  userId: z.boolean().optional(),
  rating: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default ProductRatingSelectSchema;
