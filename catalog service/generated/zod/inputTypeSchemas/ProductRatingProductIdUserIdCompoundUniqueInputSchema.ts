import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const ProductRatingProductIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProductRatingProductIdUserIdCompoundUniqueInput> = z.object({
  productId: z.string(),
  userId: z.string(),
}).strict();

export default ProductRatingProductIdUserIdCompoundUniqueInputSchema;
