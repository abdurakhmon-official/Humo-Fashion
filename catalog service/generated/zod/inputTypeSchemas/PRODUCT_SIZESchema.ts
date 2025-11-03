import { z } from 'zod';

export const PRODUCT_SIZESchema = z.enum(['XS','S','M','L','XL','XXL']);

export type PRODUCT_SIZEType = `${z.infer<typeof PRODUCT_SIZESchema>}`

export default PRODUCT_SIZESchema;
