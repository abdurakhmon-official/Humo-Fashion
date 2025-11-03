import { z } from 'zod';

export const ProductRatingScalarFieldEnumSchema = z.enum(['id','productId','userId','rating','createdAt','updatedAt']);

export default ProductRatingScalarFieldEnumSchema;
