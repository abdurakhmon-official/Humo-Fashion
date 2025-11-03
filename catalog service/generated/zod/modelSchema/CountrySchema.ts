import { z } from 'zod';
import { BrandWithRelationsSchema } from './BrandSchema'
import type { BrandWithRelations } from './BrandSchema'

/////////////////////////////////////////
// COUNTRY SCHEMA
/////////////////////////////////////////

export const CountrySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
})

export type Country = z.infer<typeof CountrySchema>

/////////////////////////////////////////
// COUNTRY RELATION SCHEMA
/////////////////////////////////////////

export type CountryRelations = {
  brands: BrandWithRelations[];
};

export type CountryWithRelations = z.infer<typeof CountrySchema> & CountryRelations

export const CountryWithRelationsSchema: z.ZodType<CountryWithRelations> = CountrySchema.merge(z.object({
  brands: z.lazy(() => BrandWithRelationsSchema).array(),
}))

export default CountrySchema;
