import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const BrandScalarWhereInputSchema: z.ZodType<Prisma.BrandScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BrandScalarWhereInputSchema), z.lazy(() => BrandScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrandScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrandScalarWhereInputSchema), z.lazy(() => BrandScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  countryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  deleted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
}).strict();

export default BrandScalarWhereInputSchema;
