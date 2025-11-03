import { z } from 'zod';
import { ProductWithRelationsSchema } from './ProductSchema'
import type { ProductWithRelations } from './ProductSchema'
import { UserWithRelationsSchema } from './UserSchema'
import type { UserWithRelations } from './UserSchema'

/////////////////////////////////////////
// PRODUCT RATING SCHEMA
/////////////////////////////////////////

export const ProductRatingSchema = z.object({
  id: z.string().uuid(),
  productId: z.string(),
  userId: z.string(),
  rating: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type ProductRating = z.infer<typeof ProductRatingSchema>

/////////////////////////////////////////
// PRODUCT RATING RELATION SCHEMA
/////////////////////////////////////////

export type ProductRatingRelations = {
  product: ProductWithRelations;
  user: UserWithRelations;
};

export type ProductRatingWithRelations = z.infer<typeof ProductRatingSchema> & ProductRatingRelations

export const ProductRatingWithRelationsSchema: z.ZodType<ProductRatingWithRelations> = ProductRatingSchema.merge(z.object({
  product: z.lazy(() => ProductWithRelationsSchema),
  user: z.lazy(() => UserWithRelationsSchema),
}))

export default ProductRatingSchema;
