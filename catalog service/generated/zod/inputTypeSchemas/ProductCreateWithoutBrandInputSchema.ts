import type { Prisma } from '../../prisma';

import { z } from 'zod';
import { PRODUCT_TYPESchema } from './PRODUCT_TYPESchema';
import { PRODUCT_COLORSSchema } from './PRODUCT_COLORSSchema';
import { PRODUCT_SIZESchema } from './PRODUCT_SIZESchema';
import { ProductFileCreateNestedManyWithoutProductInputSchema } from './ProductFileCreateNestedManyWithoutProductInputSchema';
import { ProductRatingCreateNestedManyWithoutProductInputSchema } from './ProductRatingCreateNestedManyWithoutProductInputSchema';

export const ProductCreateWithoutBrandInputSchema: z.ZodType<Prisma.ProductCreateWithoutBrandInput> = z.object({
  id: z.uuid().optional(),
  name: z.string(),
  description: z.string(),
  overview: z.string().optional().nullable(),
  information: z.string().optional().nullable(),
  price: z.number(),
  price2: z.number().optional().nullable(),
  discount: z.number().int().optional().nullable(),
  stock: z.number().int(),
  type: z.lazy(() => PRODUCT_TYPESchema).optional().nullable(),
  color: z.lazy(() => PRODUCT_COLORSSchema).optional().nullable(),
  size: z.lazy(() => PRODUCT_SIZESchema).optional().nullable(),
  sold: z.number().int().optional(),
  like_count: z.number().int().optional(),
  deleted: z.boolean().optional(),
  average_rating: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  files: z.lazy(() => ProductFileCreateNestedManyWithoutProductInputSchema).optional(),
  ratings: z.lazy(() => ProductRatingCreateNestedManyWithoutProductInputSchema).optional(),
}).strict();

export default ProductCreateWithoutBrandInputSchema;
