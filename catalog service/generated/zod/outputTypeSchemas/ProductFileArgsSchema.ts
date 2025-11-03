import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { ProductFileSelectSchema } from '../inputTypeSchemas/ProductFileSelectSchema';
import { ProductFileIncludeSchema } from '../inputTypeSchemas/ProductFileIncludeSchema';

export const ProductFileArgsSchema: z.ZodType<Prisma.ProductFileDefaultArgs> = z.object({
  select: z.lazy(() => ProductFileSelectSchema).optional(),
  include: z.lazy(() => ProductFileIncludeSchema).optional(),
}).strict();

export default ProductFileArgsSchema;
