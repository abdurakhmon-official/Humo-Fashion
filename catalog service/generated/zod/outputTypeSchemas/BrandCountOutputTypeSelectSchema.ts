import { z } from 'zod';
import type { Prisma } from '../../prisma';

export const BrandCountOutputTypeSelectSchema: z.ZodType<Prisma.BrandCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export default BrandCountOutputTypeSelectSchema;
