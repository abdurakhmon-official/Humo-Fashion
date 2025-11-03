<template>
    <div style="margin: 24px auto ;">
        <table cellpadding="0" cellspacing="0"
            style="font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 400; width: 600px; border: none; margin: 0 auto; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);">
            <thead style="padding: 16px; display: block;">
                <tr style="display: block; border: none; text-align: center; font-size: 24px; letter-spacing: 1px;">
                    <th scope="col" style="margin: auto; display: block;">
                        <NuxtLink to="/" style="display: flex;justify-content: center;"><img
                                src="../assets/images/logo-icon-64.png" alt=""></NuxtLink>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td style="background-color: #f8fafc; padding: 16px; display: block; text-align: center;">
                        <h2 style="font-weight: 600;font-size: 24px;">Reset Password</h2>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 16px 16px 0; color: #161c2d;">
                        <p style="margin: 0; font-size: 18px; font-weight: 500;">Hello, {{ user?.username }}!</p>
                        <p style="margin-bottom: 0; color: #94a3b8;margin-top: 16px;">To reset your password, please
                            click the button below :</p>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 16px 16px 0;">
                        <form @submit.prevent="resetPasswordHandler" style="text-align: left;">
                            <div style="margin-bottom: 12px;">
                                <label style="display: block; font-weight: 500; margin-bottom: 6px;">New
                                    Password:</label>
                                <input v-model="newPassword" type="password" placeholder="Enter new password"
                                    required
                                    style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 6px; outline: none;" />
                            </div>

                            <div style="margin-top: 12px; text-align: start;">
                                <button type="submit"
                                    style="padding: 10px 24px; outline: none; border: none; font-size: 15px; font-weight: 500; border-radius: 6px; background-color: #f97316; color: #ffffff; cursor: pointer;">
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 16px 16px 0; color: #94a3b8;">This link will be active for 45 second from the
                        time this email was sent. If you did not request to reset your password, please ignore this
                        email and your account will not be affected.</td>
                </tr>

                <tr>
                    <td style="padding: 16px;">
                        <p style="margin: 0; font-size: 18px; font-weight: 500;">Cartzio <br /> Support Team</p>
                    </td>
                </tr>

                <tr>
                    <FooterEmail />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useService } from '~/composable/userServices';
import type { ResetPasswordInput } from '~/types/user-input/ResetPasswordInput';

const auth = useAuth()

const {user} = storeToRefs(auth)

const route = useRoute()
const router = useRouter()
const services = useService()
const { $toast } = useNuxtApp()

const newPassword = ref('')

async function resetPasswordHandler() {
    const token = route.query.token as string

    if (!newPassword.value) {
        $toast.error('Please enter your new password')
        return
    }

    const response = await services.$authentication.resetPassword({
        token,
        newPassword: newPassword.value
    })

    if (response.success) {
        $toast.success('Password successfully changed!')
        router.push('/auth/login')
    } else {
        $toast.error('Reset password failed!')
    }
}

</script>