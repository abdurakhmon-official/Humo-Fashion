import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProductUpdateOneRequiredWithoutRatingsNestedInputSchema } from './ProductUpdateOneRequiredWithoutRatingsNestedInputSchema';
import { UserUpdateOneRequiredWithoutRatingNestedInputSchema } from './UserUpdateOneRequiredWithoutRatingNestedInputSchema';

export const ProductRatingUpdateInputSchema: z.ZodType<Prisma.ProductRatingUpdateInput> = z.object({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutRatingsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRatingNestedInputSchema).optional(),
}).strict();

export default ProductRatingUpdateInputSchema;
