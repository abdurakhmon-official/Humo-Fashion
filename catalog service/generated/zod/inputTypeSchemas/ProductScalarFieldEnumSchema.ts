import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','brandId','name','description','overview','information','price','price2','discount','stock','type','color','size','sold','like_count','deleted','average_rating','createdAt','updatedAt']);

export default ProductScalarFieldEnumSchema;
