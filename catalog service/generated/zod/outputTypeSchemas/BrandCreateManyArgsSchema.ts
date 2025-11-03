import { z } from 'zod';
import type { Prisma } from '../../prisma';
import { BrandCreateManyInputSchema } from '../inputTypeSchemas/BrandCreateManyInputSchema'

export const BrandCreateManyArgsSchema: z.ZodType<Prisma.BrandCreateManyArgs> = z.object({
  data: z.union([ BrandCreateManyInputSchema, BrandCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default BrandCreateManyArgsSchema;
