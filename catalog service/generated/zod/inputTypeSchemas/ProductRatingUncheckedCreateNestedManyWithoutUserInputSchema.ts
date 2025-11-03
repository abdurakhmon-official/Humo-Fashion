import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingCreateWithoutUserInputSchema } from './ProductRatingCreateWithoutUserInputSchema';
import { ProductRatingUncheckedCreateWithoutUserInputSchema } from './ProductRatingUncheckedCreateWithoutUserInputSchema';
import { ProductRatingCreateOrConnectWithoutUserInputSchema } from './ProductRatingCreateOrConnectWithoutUserInputSchema';
import { ProductRatingCreateManyUserInputEnvelopeSchema } from './ProductRatingCreateManyUserInputEnvelopeSchema';
import { ProductRatingWhereUniqueInputSchema } from './ProductRatingWhereUniqueInputSchema';

export const ProductRatingUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ProductRatingUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProductRatingCreateWithoutUserInputSchema), z.lazy(() => ProductRatingCreateWithoutUserInputSchema).array(), z.lazy(() => ProductRatingUncheckedCreateWithoutUserInputSchema), z.lazy(() => ProductRatingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductRatingCreateOrConnectWithoutUserInputSchema), z.lazy(() => ProductRatingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductRatingCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductRatingWhereUniqueInputSchema), z.lazy(() => ProductRatingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProductRatingUncheckedCreateNestedManyWithoutUserInputSchema;
