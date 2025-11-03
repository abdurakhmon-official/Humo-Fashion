import { z } from 'zod';
import type { Prisma } from '../../prisma';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  rating: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
