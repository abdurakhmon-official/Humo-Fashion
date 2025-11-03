import type { Prisma } from '../../prisma';

import { z } from 'zod';

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional(),
}).strict();

export default BoolFieldUpdateOperationsInputSchema;
