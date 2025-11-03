import { z } from 'zod';
import { PRODUCT_TYPESchema } from '../inputTypeSchemas/PRODUCT_TYPESchema'
import { PRODUCT_COLORSSchema } from '../inputTypeSchemas/PRODUCT_COLORSSchema'
import { PRODUCT_SIZESchema } from '../inputTypeSchemas/PRODUCT_SIZESchema'
import { BrandWithRelationsSchema } from './BrandSchema'
import type { BrandWithRelations } from './BrandSchema'
import { ProductFileWithRelationsSchema } from './ProductFileSchema'
import type { ProductFileWithRelations } from './ProductFileSchema'
import { ProductRatingWithRelationsSchema } from './ProductRatingSchema'
import type { ProductRatingWithRelations } from './ProductRatingSchema'

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  type: PRODUCT_TYPESchema.nullable(),
  color: PRODUCT_COLORSSchema.nullable(),
  size: PRODUCT_SIZESchema.nullable(),
  id: z.string().uuid(),
  brandId: z.string().nullable(),
  name: z.string(),
  description: z.string(),
  overview: z.string().nullable(),
  information: z.string().nullable(),
  price: z.number(),
  price2: z.number().nullable(),
  discount: z.number().int().nullable(),
  stock: z.number().int(),
  sold: z.number().int(),
  like_count: z.number().int(),
  deleted: z.boolean(),
  average_rating: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// PRODUCT RELATION SCHEMA
/////////////////////////////////////////

export type ProductRelations = {
  brand?: BrandWithRelations | null;
  files: ProductFileWithRelations[];
  ratings: ProductRatingWithRelations[];
};

export type ProductWithRelations = z.infer<typeof ProductSchema> & ProductRelations

export const ProductWithRelationsSchema: z.ZodType<ProductWithRelations> = ProductSchema.merge(z.object({
  brand: z.lazy(() => BrandWithRelationsSchema).nullable(),
  files: z.lazy(() => ProductFileWithRelationsSchema).array(),
  ratings: z.lazy(() => ProductRatingWithRelationsSchema).array(),
}))

export default ProductSchema;
