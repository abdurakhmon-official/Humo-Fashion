import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { USER_ROLESchema } from './USER_ROLESchema';
import { ProductRatingCreateNestedManyWithoutUserInputSchema } from './ProductRatingCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  username: z.string(),
  password: z.string(),
  phone1: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  role: z.lazy(() => USER_ROLESchema).optional(),
  active: z.boolean().optional(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  rating: z.lazy(() => ProductRatingCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export default UserCreateInputSchema;
