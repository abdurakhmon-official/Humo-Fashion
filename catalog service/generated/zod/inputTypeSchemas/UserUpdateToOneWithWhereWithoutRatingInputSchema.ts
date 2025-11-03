import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutRatingInputSchema } from './UserUpdateWithoutRatingInputSchema';
import { UserUncheckedUpdateWithoutRatingInputSchema } from './UserUncheckedUpdateWithoutRatingInputSchema';

export const UserUpdateToOneWithWhereWithoutRatingInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRatingInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutRatingInputSchema), z.lazy(() => UserUncheckedUpdateWithoutRatingInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutRatingInputSchema;
