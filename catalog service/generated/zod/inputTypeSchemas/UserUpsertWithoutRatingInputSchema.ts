import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { UserUpdateWithoutRatingInputSchema } from './UserUpdateWithoutRatingInputSchema';
import { UserUncheckedUpdateWithoutRatingInputSchema } from './UserUncheckedUpdateWithoutRatingInputSchema';
import { UserCreateWithoutRatingInputSchema } from './UserCreateWithoutRatingInputSchema';
import { UserUncheckedCreateWithoutRatingInputSchema } from './UserUncheckedCreateWithoutRatingInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutRatingInputSchema: z.ZodType<Prisma.UserUpsertWithoutRatingInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutRatingInputSchema), z.lazy(() => UserUncheckedUpdateWithoutRatingInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRatingInputSchema), z.lazy(() => UserUncheckedCreateWithoutRatingInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
}).strict();

export default UserUpsertWithoutRatingInputSchema;
