import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { ProductCreateWithoutRatingsInputSchema } from './ProductCreateWithoutRatingsInputSchema';
import { ProductUncheckedCreateWithoutRatingsInputSchema } from './ProductUncheckedCreateWithoutRatingsInputSchema';
import { ProductCreateOrConnectWithoutRatingsInputSchema } from './ProductCreateOrConnectWithoutRatingsInputSchema';
import { ProductUpsertWithoutRatingsInputSchema } from './ProductUpsertWithoutRatingsInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateToOneWithWhereWithoutRatingsInputSchema } from './ProductUpdateToOneWithWhereWithoutRatingsInputSchema';
import { ProductUpdateWithoutRatingsInputSchema } from './ProductUpdateWithoutRatingsInputSchema';
import { ProductUncheckedUpdateWithoutRatingsInputSchema } from './ProductUncheckedUpdateWithoutRatingsInputSchema';

export const ProductUpdateOneRequiredWithoutRatingsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutRatingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutRatingsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutRatingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutRatingsInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutRatingsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutRatingsInputSchema), z.lazy(() => ProductUpdateWithoutRatingsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutRatingsInputSchema) ]).optional(),
}).strict();

export default ProductUpdateOneRequiredWithoutRatingsNestedInputSchema;
