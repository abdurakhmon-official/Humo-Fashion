import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const ProductFileUncheckedCreateInputSchema: z.ZodType<Prisma.ProductFileUncheckedCreateInput> = z.object({
  id: z.uuid().optional(),
  file: z.string(),
  name: z.string(),
  size: z.number().int(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export default ProductFileUncheckedCreateInputSchema;
