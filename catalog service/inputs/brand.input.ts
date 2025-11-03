import {z} from 'zod'

export const CreateBrandInputSchema = z.object({
    name: z.string(),
    countryId: z.string(),
    image: z.string().nullable().optional()
})

export const BrandListItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  country: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export const BrandListSchema = z.array(BrandListItemSchema);

CreateBrandInputSchema.refine(data => {
    return true
})

export const UpdateBrandInputSchema = CreateBrandInputSchema.partial()

export type BrandListItem = z.infer<typeof BrandListItemSchema>;
export type BrandList = z.infer<typeof BrandListSchema>;
export type CreateBrandInput = z.infer<typeof CreateBrandInputSchema>
export type UpdateBrandInput = z.infer<typeof UpdateBrandInputSchema>