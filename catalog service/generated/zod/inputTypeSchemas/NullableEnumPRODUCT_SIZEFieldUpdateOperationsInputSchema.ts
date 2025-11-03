import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_SIZESchema } from './PRODUCT_SIZESchema';

export const NullableEnumPRODUCT_SIZEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumPRODUCT_SIZEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PRODUCT_SIZESchema).optional().nullable(),
}).strict();

export default NullableEnumPRODUCT_SIZEFieldUpdateOperationsInputSchema;
