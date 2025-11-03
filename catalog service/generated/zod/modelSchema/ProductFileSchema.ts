import { z } from 'zod';
import { ProductWithRelationsSchema } from './ProductSchema'
import type { ProductWithRelations } from './ProductSchema'

/////////////////////////////////////////
// PRODUCT FILE SCHEMA
/////////////////////////////////////////

export const ProductFileSchema = z.object({
  id: z.string().uuid(),
  file: z.string(),
  name: z.string(),
  size: z.number().int(),
  productId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type ProductFile = z.infer<typeof ProductFileSchema>

/////////////////////////////////////////
// PRODUCT FILE RELATION SCHEMA
/////////////////////////////////////////

export type ProductFileRelations = {
  product: ProductWithRelations;
};

export type ProductFileWithRelations = z.infer<typeof ProductFileSchema> & ProductFileRelations

export const ProductFileWithRelationsSchema: z.ZodType<ProductFileWithRelations> = ProductFileSchema.merge(z.object({
  product: z.lazy(() => ProductWithRelationsSchema),
}))

export default ProductFileSchema;
