import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductRatingCreateWithoutProductInputSchema } from './ProductRatingCreateWithoutProductInputSchema';
import { ProductRatingUncheckedCreateWithoutProductInputSchema } from './ProductRatingUncheckedCreateWithoutProductInputSchema';
import { ProductRatingCreateOrConnectWithoutProductInputSchema } from './ProductRatingCreateOrConnectWithoutProductInputSchema';
import { ProductRatingCreateManyProductInputEnvelopeSchema } from './ProductRatingCreateManyProductInputEnvelopeSchema';
import { ProductRatingWhereUniqueInputSchema } from './ProductRatingWhereUniqueInputSchema';

export const ProductRatingCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ProductRatingCreateWithoutProductInputSchema), z.lazy(() => ProductRatingCreateWithoutProductInputSchema).array(), z.lazy(() => ProductRatingUncheckedCreateWithoutProductInputSchema), z.lazy(() => ProductRatingUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductRatingCreateOrConnectWithoutProductInputSchema), z.lazy(() => ProductRatingCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductRatingCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductRatingWhereUniqueInputSchema), z.lazy(() => ProductRatingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProductRatingCreateNestedManyWithoutProductInputSchema;
