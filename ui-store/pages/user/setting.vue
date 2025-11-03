<template>
    <div>
        <Navbar :navLight="true" :tagLine="''" :searchMenu2="true" />

        <section class="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
            <div class="md:container container-fluid relative">
                <div class="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-center bg-no-repeat bg-cover transform transition translate-y-8"
                    :style="{ backgroundImage: `url(${bg})` }"></div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="md:flex">
                    <div class="lg:w-1/4 md:w-1/3 md:px-3">
                        <UserTab />
                    </div>

                    <div class="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
                        <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <h5 class="text-lg font-semibold mb-4">Personal Detail :</h5>
                            <form @submit.prevent="updatePersonal">
                                <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                    <div>
                                        <label class="form-label font-medium">First Name <span
                                                class="text-red-600">*</span></label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="user" class="w-4 h-4 absolute top-3 start-4"></i>
                                            <input type="text" v-model="dataPersonal.firstName"
                                                class="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="First name" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label class="form-label font-medium">Last Name <span
                                                class="text-red-600">*</span></label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="user-check" class="w-4 h-4 absolute top-3 start-4"></i>
                                            <input type="text" v-model="dataPersonal.lastName"
                                                class="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="Last name" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label class="form-label font-medium">Username <span
                                                class="text-red-600">*</span></label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="user-plus" class="w-4 h-4 absolute top-3 start-4"></i>
                                            <input type="text" v-model="dataPersonal.username"
                                                class="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="Username" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label class="form-label font-medium">Phone Number</label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="phone" class="w-4 h-4 absolute top-3 start-4"></i>
                                            <input type="number" v-model="dataPersonal.phone"
                                                class="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="Phone number" />
                                        </div>
                                    </div>

                                    <div>
                                        <label class="form-label font-medium">Email</label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="mail" class="w-4 h-4 absolute top-3 start-4"></i>
                                            <input type="email" v-model="dataPersonal.email"
                                                class="ps-12 w-full py-2 px-3 h-10 bg-gray-100 dark:bg-slate-800 dark:text-slate-300 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                readonly />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit"
                                    class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md mt-5">
                                    Save Changes
                                </button>
                            </form>
                        </div>

                        <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
                            <h5 class="text-lg font-semibold mb-4">Security Detail :</h5>
                            <form @submit.prevent="updatePassword">
                                <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">

                                    <div>
                                        <label class="form-label font-medium">New Password</label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="key" class="w-4 h-4 absolute top-3 start-4"></i>
                                            <input type="password" v-model="dataSecurity.newPassword"
                                                class="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="New password" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label class="form-label font-medium">Re-type New Password</label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="key" class="w-4 h-4 absolute top-3 start-4"></i>
                                            <input type="password" v-model="dataSecurity.confirmPassword"
                                                class="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="Re-type new password" required />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit"
                                    class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md mt-5">
                                    Save Password
                                </button>
                            </form>
                        </div>

                        <div class="p-6 bg-white rounded-lg shadow">
                            <div class="flex items-center space-x-3">
                                <input id="account-active" type="checkbox" v-model="dataPersonal.deleted"
                                    class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label for="account-active" class="text-gray-700 cursor-pointer">
                                    {{ dataPersonal.deleted ? 'Your account is inactive' : 'Your account is active' }}
                                </label>
                            </div>

                            <button @click.prevent="deactiveAccount" :class="dataPersonal.deleted
                                ? 'mt-4 px-4 py-2 bg-green-600 hover:bg-green-700'
                                : 'mt-4 px-4 py-2 bg-red-600 hover:bg-red-700'"
                                class="text-white font-semibold rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed">
                                {{ dataPersonal.deleted ? 'Activate Account' : 'Deactivate Account' }}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <Switcher :switcherBack="true" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import bg from '~/assets/images/hero/pages.jpg'
import { useService } from '~/composable/userServices'
import type { ResetPasswordInput } from '~/types/user-input/ResetPasswordInput'
import type { UpdateUserInformationInput } from '~/types/user-input/UpdateUserInformationInput'

const auth = useAuth()
const { user } = storeToRefs(auth)
const services = useService()
const { $toast } = useNuxtApp()

const dataPersonal = ref({
    firstName: user.value?.firstName || '',
    lastName: user.value?.lastName || '',
    username: user.value?.username || '',
    phone: user.value?.phone || '',
    email: user.value?.email || '',
    profileImage: user.value?.profileImage || '',
    deleted: user.value?.deleted,
    createdAt: user.value?.createdAt || ''
})

const dataSecurity = ref({
    newPassword: '',
    confirmPassword: ''
})

const deleteAccount = () => {
    if (dataPersonal.value.deleted) {
        $toast.info('Your account has been deactivated.')
        dataPersonal.value.deleted = !dataPersonal.value.deleted
    } else {
        $toast.success('Your account has been activated!')
    }
}

const updatePassword = async () => {
    const {newPassword, confirmPassword} = dataSecurity.value

    if (newPassword !== confirmPassword) {
        $toast.error('Passwords do not match!')
        return
    }

    const { success } = await services.$authentication.resetPassword({ newPassword } as ResetPasswordInput)
    if (success) {
        $toast.success('Security information updated successfully!')
        await auth.loadMe(true)
        dataSecurity.value.newPassword = ''
        dataSecurity.value.confirmPassword = ''
    } else {
        $toast.error('Updating security information is NOT successful!')
    }
}

const updatePersonal = async () => {
    const { firstName, lastName, username, phone, email } = dataPersonal.value

    if (!firstName || !lastName || !username || !phone || !email) {
        $toast.error('Please fill all required fields!')
        return
    }

    const dataToSend = {
        firstName,
        lastName,
        username,
        phone: phone.toString(),
        email,
    } as unknown as UpdateUserInformationInput

    const {success} = await services.$authentication.updateUser(dataToSend as UpdateUserInformationInput)
    if (success) {
        $toast.success('User information updated successfully!')
        await auth.loadMe(true)
    } else {
        $toast.error('Updating personal information is NOT successfully!')
    }
}

const deactiveAccount = async () => {
    const { deleted} = dataPersonal.value

    try {
        const { success } = await services.$authentication.updateUser({
            ...dataPersonal.value,
            deleted: !deleted
        } as UpdateUserInformationInput)

        if (success) {
            dataPersonal.value.deleted = !deleted
            $toast.success(`Your account has been ${deleted ? 'activated' : 'deactivated'}!`)
            await auth.loadMe(true)
        } else {
            $toast.error('Failed to update account status!')
        }
    } catch (error: any) {
        $toast.error('An error occured while updating account status!')
        console.error('error.message: ', error.message)
    }
}
</script>
