import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const ProductFileCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductFileCreateWithoutProductInput> = z.object({
  id: z.uuid().optional(),
  file: z.string(),
  name: z.string(),
  size: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export default ProductFileCreateWithoutProductInputSchema;
