import { z } from 'zod';

export const CountryScalarFieldEnumSchema = z.enum(['id','name']);

export default CountryScalarFieldEnumSchema;
