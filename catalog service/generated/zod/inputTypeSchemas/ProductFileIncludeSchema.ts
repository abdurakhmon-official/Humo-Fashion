import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"

export const ProductFileIncludeSchema: z.ZodType<Prisma.ProductFileInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict();

export default ProductFileIncludeSchema;
