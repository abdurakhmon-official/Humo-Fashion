import { z } from 'zod'

export const SignupInputSchema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string()
})

export const SigninInputSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const UpdateUserInformationInputSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    username: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    deleted: z.boolean().optional(),
    profileImage: z.string().optional()
})

export const ForgotPasswordInputSchema = z.object({
    email: z.string()
})

export const ResetPasswordInputSchema = z.object({
    newPassword: z.string(),
})

SignupInputSchema.refine((data: any) => {
    return true
})

export type SignupInput = z.infer<typeof SignupInputSchema>
export type SigninInput = z.infer<typeof SigninInputSchema>
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordInputSchema>;
export type ResetPasswordInput = z.infer<typeof ResetPasswordInputSchema>
export type UpdateUserInformationInput = z.infer<typeof UpdateUserInformationInputSchema>


