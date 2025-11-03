import { z } from 'zod';
import { USER_ROLESchema } from '../inputTypeSchemas/USER_ROLESchema'
import { ProductRatingWithRelationsSchema } from './ProductRatingSchema'
import type { ProductRatingWithRelations } from './ProductRatingSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: USER_ROLESchema,
  id: z.string().uuid(),
  name: z.string(),
  username: z.string(),
  password: z.string(),
  phone1: z.string().nullable(),
  address: z.string().nullable(),
  email: z.string().nullable(),
  image: z.string().nullable(),
  active: z.boolean(),
  deleted: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  rating: ProductRatingWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  rating: z.lazy(() => ProductRatingWithRelationsSchema).array(),
}))

export default UserSchema;
