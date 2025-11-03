import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { USER_ROLESchema } from './USER_ROLESchema';

export const EnumUSER_ROLEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUSER_ROLEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => USER_ROLESchema).optional(),
}).strict();

export default EnumUSER_ROLEFieldUpdateOperationsInputSchema;
