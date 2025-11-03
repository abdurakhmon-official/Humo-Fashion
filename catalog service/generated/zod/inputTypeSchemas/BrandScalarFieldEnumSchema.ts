import { z } from 'zod';

export const BrandScalarFieldEnumSchema = z.enum(['id','name','image','countryId','deleted','createdAt','updatedAt','deletedAt']);

export default BrandScalarFieldEnumSchema;
