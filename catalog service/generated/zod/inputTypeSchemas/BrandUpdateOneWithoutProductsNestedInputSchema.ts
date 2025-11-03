import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { BrandCreateWithoutProductsInputSchema } from './BrandCreateWithoutProductsInputSchema';
import { BrandUncheckedCreateWithoutProductsInputSchema } from './BrandUncheckedCreateWithoutProductsInputSchema';
import { BrandCreateOrConnectWithoutProductsInputSchema } from './BrandCreateOrConnectWithoutProductsInputSchema';
import { BrandUpsertWithoutProductsInputSchema } from './BrandUpsertWithoutProductsInputSchema';
import { BrandWhereInputSchema } from './BrandWhereInputSchema';
import { BrandWhereUniqueInputSchema } from './BrandWhereUniqueInputSchema';
import { BrandUpdateToOneWithWhereWithoutProductsInputSchema } from './BrandUpdateToOneWithWhereWithoutProductsInputSchema';
import { BrandUpdateWithoutProductsInputSchema } from './BrandUpdateWithoutProductsInputSchema';
import { BrandUncheckedUpdateWithoutProductsInputSchema } from './BrandUncheckedUpdateWithoutProductsInputSchema';

export const BrandUpdateOneWithoutProductsNestedInputSchema: z.ZodType<Prisma.BrandUpdateOneWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BrandCreateWithoutProductsInputSchema), z.lazy(() => BrandUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BrandCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => BrandUpsertWithoutProductsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BrandWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BrandWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BrandWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BrandUpdateToOneWithWhereWithoutProductsInputSchema), z.lazy(() => BrandUpdateWithoutProductsInputSchema), z.lazy(() => BrandUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export default BrandUpdateOneWithoutProductsNestedInputSchema;
