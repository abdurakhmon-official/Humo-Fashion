import { z } from 'zod';
import { CountryWithRelationsSchema } from './CountrySchema'
import type { CountryWithRelations } from './CountrySchema'
import { ProductWithRelationsSchema } from './ProductSchema'
import type { ProductWithRelations } from './ProductSchema'

/////////////////////////////////////////
// BRAND SCHEMA
/////////////////////////////////////////

export const BrandSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  image: z.string().nullable(),
  countryId: z.string(),
  deleted: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
});

export type Brand = z.infer<typeof BrandSchema>

/////////////////////////////////////////
// BRAND RELATION SCHEMA
/////////////////////////////////////////

export type BrandRelations = {
  country: CountryWithRelations;
  products: ProductWithRelations[];
};

export type BrandWithRelations = z.infer<typeof BrandSchema> & BrandRelations

export const BrandWithRelationsSchema: z.ZodType<BrandWithRelations> = BrandSchema.merge(z.object({
  country: z.lazy(() => CountryWithRelationsSchema),
  products: z.lazy(() => ProductWithRelationsSchema).array(),
}))

export default BrandSchema;
