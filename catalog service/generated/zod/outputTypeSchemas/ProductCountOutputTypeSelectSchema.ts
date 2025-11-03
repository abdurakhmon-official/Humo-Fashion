import { z } from 'zod';
import type { Prisma } from '../../prisma';

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  files: z.boolean().optional(),
  ratings: z.boolean().optional(),
}).strict();

export default ProductCountOutputTypeSelectSchema;
