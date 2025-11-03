import { z } from 'zod';

export const PRODUCT_COLORSSchema = z.enum(['RED','GREEN','BLACK','GRAY','BLUE','PURPLE']);

export type PRODUCT_COLORSType = `${z.infer<typeof PRODUCT_COLORSSchema>}`

export default PRODUCT_COLORSSchema;
