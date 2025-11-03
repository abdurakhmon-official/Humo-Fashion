import { z } from 'zod'

export const ProductFileInputSchema = z.object({
    id: z.string().nullable().optional(),
    file: z.string(),
    name: z.string(),
    size: z.number()
})

export const CreateProductInputSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().min(1),
  discount: z.number().nullable(),
  stock: z.number(),
  sold: z.number().default(0),
  type: z.string().nullable(),
  color: z.string().nullable(),
  size: z.array(z.string()).optional(), 
  brandId: z.string(),
  files: z.array(ProductFileInputSchema),
});

export const ProductSectionSchema = z.enum([ "new-arrivals", "under-50", "most-liked"]);

// export const UpdateProductInputSchema = z.object({
//     name: z.string().optional(),
//     description: z.string().optional(),
//     price: z.number().optional(),
//     stock: z.number().optional()
// })

CreateProductInputSchema.refine(data => {
    return true
})

export const UpdateProductInputSchema = CreateProductInputSchema.partial();

export type ProductSection = z.infer<typeof ProductSectionSchema>;
export type CreateProductInput = z.infer<typeof CreateProductInputSchema>
export type UpdateProductInput = z.infer<typeof UpdateProductInputSchema>
export type PayloadProductInput = { id: number } & Partial<CreateProductInput>;
