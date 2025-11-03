import { z } from 'zod';
import { USER_ROLESchema } from '../inputTypeSchemas/USER_ROLESchema'

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const UsersSchema = z.object({
  role: USER_ROLESchema,
  id: z.string().uuid(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  username: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  password: z.string(),
  profileImage: z.string().nullable(),
  deleted: z.boolean(),
  createdAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date().nullable(),
  deletedAt: z.coerce.date().nullable(),
})

export type Users = z.infer<typeof UsersSchema>

/////////////////////////////////////////
// USERS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UsersOptionalDefaultsSchema = UsersSchema.merge(z.object({
  role: USER_ROLESchema.optional(),
  id: z.string().uuid().optional(),
  deleted: z.boolean().optional(),
}))

export type UsersOptionalDefaults = z.infer<typeof UsersOptionalDefaultsSchema>

export default UsersSchema;
