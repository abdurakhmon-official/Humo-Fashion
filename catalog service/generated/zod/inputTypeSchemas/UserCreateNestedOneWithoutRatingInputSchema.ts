import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { UserCreateWithoutRatingInputSchema } from './UserCreateWithoutRatingInputSchema';
import { UserUncheckedCreateWithoutRatingInputSchema } from './UserUncheckedCreateWithoutRatingInputSchema';
import { UserCreateOrConnectWithoutRatingInputSchema } from './UserCreateOrConnectWithoutRatingInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutRatingInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRatingInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRatingInputSchema), z.lazy(() => UserUncheckedCreateWithoutRatingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRatingInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
}).strict();

export default UserCreateNestedOneWithoutRatingInputSchema;
