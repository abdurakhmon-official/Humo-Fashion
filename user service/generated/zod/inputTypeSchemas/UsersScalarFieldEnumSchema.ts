import { z } from 'zod';

export const UsersScalarFieldEnumSchema = z.enum(['id','firstName','lastName','username','email','phone','password','profileImage','role','deleted','createdAt','updatedAt','deletedAt']);

export default UsersScalarFieldEnumSchema;
