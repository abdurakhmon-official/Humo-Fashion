import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { UserCreateWithoutRatingInputSchema } from './UserCreateWithoutRatingInputSchema';
import { UserUncheckedCreateWithoutRatingInputSchema } from './UserUncheckedCreateWithoutRatingInputSchema';
import { UserCreateOrConnectWithoutRatingInputSchema } from './UserCreateOrConnectWithoutRatingInputSchema';
import { UserUpsertWithoutRatingInputSchema } from './UserUpsertWithoutRatingInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutRatingInputSchema } from './UserUpdateToOneWithWhereWithoutRatingInputSchema';
import { UserUpdateWithoutRatingInputSchema } from './UserUpdateWithoutRatingInputSchema';
import { UserUncheckedUpdateWithoutRatingInputSchema } from './UserUncheckedUpdateWithoutRatingInputSchema';

export const UserUpdateOneRequiredWithoutRatingNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRatingNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRatingInputSchema), z.lazy(() => UserUncheckedCreateWithoutRatingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRatingInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRatingInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutRatingInputSchema), z.lazy(() => UserUpdateWithoutRatingInputSchema), z.lazy(() => UserUncheckedUpdateWithoutRatingInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutRatingNestedInputSchema;
