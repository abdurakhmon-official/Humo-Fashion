import { z } from 'zod';

export const ProductFileScalarFieldEnumSchema = z.enum(['id','file','name','size','productId','createdAt','updatedAt']);

export default ProductFileScalarFieldEnumSchema;
