import { z } from 'zod';

export const USER_ROLESchema = z.enum(['SUPER_ADMIN','ADMIN','USER']);

export type USER_ROLEType = `${z.infer<typeof USER_ROLESchema>}`

export default USER_ROLESchema;
