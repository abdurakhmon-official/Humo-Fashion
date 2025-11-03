import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutRatingInputSchema } from './UserCreateWithoutRatingInputSchema';
import { UserUncheckedCreateWithoutRatingInputSchema } from './UserUncheckedCreateWithoutRatingInputSchema';

export const UserCreateOrConnectWithoutRatingInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRatingInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutRatingInputSchema), z.lazy(() => UserUncheckedCreateWithoutRatingInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutRatingInputSchema;
