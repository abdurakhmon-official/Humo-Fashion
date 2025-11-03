import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_COLORSSchema } from './PRODUCT_COLORSSchema';

export const NullableEnumPRODUCT_COLORSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumPRODUCT_COLORSFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PRODUCT_COLORSSchema).optional().nullable(),
}).strict();

export default NullableEnumPRODUCT_COLORSFieldUpdateOperationsInputSchema;
