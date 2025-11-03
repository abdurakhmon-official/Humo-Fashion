import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { PRODUCT_TYPESchema } from './PRODUCT_TYPESchema';
import { NullableEnumPRODUCT_TYPEFieldUpdateOperationsInputSchema } from './NullableEnumPRODUCT_TYPEFieldUpdateOperationsInputSchema';
import { PRODUCT_COLORSSchema } from './PRODUCT_COLORSSchema';
import { NullableEnumPRODUCT_COLORSFieldUpdateOperationsInputSchema } from './NullableEnumPRODUCT_COLORSFieldUpdateOperationsInputSchema';
import { PRODUCT_SIZESchema } from './PRODUCT_SIZESchema';
import { NullableEnumPRODUCT_SIZEFieldUpdateOperationsInputSchema } from './NullableEnumPRODUCT_SIZEFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const ProductUncheckedUpdateManyWithoutBrandInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutBrandInput> = z.object({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  overview: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  information: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  price2: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  discount: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PRODUCT_TYPESchema), z.lazy(() => NullableEnumPRODUCT_TYPEFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.lazy(() => PRODUCT_COLORSSchema), z.lazy(() => NullableEnumPRODUCT_COLORSFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.lazy(() => PRODUCT_SIZESchema), z.lazy(() => NullableEnumPRODUCT_SIZEFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sold: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  like_count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  average_rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ProductUncheckedUpdateManyWithoutBrandInputSchema;
