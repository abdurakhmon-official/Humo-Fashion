import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','username','password','phone1','address','email','image','role','active','deleted','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
