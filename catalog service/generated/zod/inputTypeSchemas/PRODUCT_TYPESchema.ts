import { z } from 'zod';

export const PRODUCT_TYPESchema = z.enum(['MEN','WOMEN','KIDS']);

export type PRODUCT_TYPEType = `${z.infer<typeof PRODUCT_TYPESchema>}`

export default PRODUCT_TYPESchema;
