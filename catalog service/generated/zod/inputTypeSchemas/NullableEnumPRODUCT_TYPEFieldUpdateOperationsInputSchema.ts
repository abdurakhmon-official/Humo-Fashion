import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_TYPESchema } from './PRODUCT_TYPESchema';

export const NullableEnumPRODUCT_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumPRODUCT_TYPEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PRODUCT_TYPESchema).optional().nullable(),
}).strict();

export default NullableEnumPRODUCT_TYPEFieldUpdateOperationsInputSchema;
