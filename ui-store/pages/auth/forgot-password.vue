<template>
    <div>
        <section
            class="md:h-screen py-36 flex items-center bg-primary/10 dark:bg-primary/20 bg-center bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${bg})` }">
            <div class="container relative">
                <div class="grid grid-cols-1">
                    <div
                        class="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                        <div class="grid md:grid-cols-2 grid-cols-1 items-center">
                            <div class="relative md:shrink-0">
                                <img class="lg:h-full h-full w-full object-cover md:h-[34rem]" :src="password" alt="">
                            </div>

                            <div class="p-0 lg:px-20">
                                <div class="text-center">
                                    <NuxtLink to="/">
                                        <img :src="logoDark"
                                            class="mx-auto block dark:hidden w-60 -mb-36 transition transform -translate-y-10"
                                            alt="">
                                        <img :src="logoLight"
                                            class="mx-auto hidden dark:block w-60 -mb-36 transition transform -translate-y-10"
                                            alt="">
                                    </NuxtLink>
                                </div>

                                <form class="text-start lg:py-20 py-8" @submit.prevent="sendEmail">
                                    <p class="text-slate-400 mb-6">Please enter your email address. You will receive a
                                        link to create a new password via email.</p>
                                    <div class="grid grid-cols-1">
                                        <div class="mb-4">
                                            <label class="font-semibold" for="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" v-model="data.email"
                                                class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="name@example.com">
                                        </div>

                                        <div class="mb-4">
                                            <input type="submit"
                                                class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md w-full"
                                                value="Send">
                                        </div>

                                        <div class="text-center">
                                            <span class="text-slate-400 me-2">Remember your password ? </span>
                                            <NuxtLink to="/auth/login"
                                                class="text-black dark:text-white font-bold inline-block">Sign in
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </form>

                                <div class="text-center">
                                    <p class="mb-0 text-slate-400">© {{ date }} Humo Fashion. Easy & Online Shopping
                                        with<i class="mdi mdi-heart text-red-600"></i> by <a
                                            href="https://shreethemes.in/" target="_blank"
                                            class="text-reset">Humo</a>.</p>
                                </div>``
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher :switcherBack="false" />
    </div>
</template>

<script setup lang="ts">
import feather from 'feather-icons'
import password from '~/assets/images/forgot-password.jpg'
import logoDark from '../assets/images/logo-white-humo.png'
import logoLight from '../assets/images/logo-humo-black.png'
import bg from '~/assets/images/hero/bg-shape.png'
import type { ForgotPasswordInput } from '~/types/user-input/ForgotPasswordInput'
import { useService } from '~/composable/userServices'

const date = ref(new Date().getFullYear())

onMounted(() => {
    feather.replace()
})

const {$toast} = useNuxtApp()
const services = useService()
const loading = ref(false)

const data: Ref<ForgotPasswordInput> = ref({
    email: ''
})

async function sendEmail() {
    const { email } = data.value

    if (!email) {
        $toast.error('Please enter your email in order to reset your password!')
        return
    }

    loading.value = true
    const response = await services.$authentication.forgotPassword(data.value as unknown as ForgotPasswordInput)
    loading.value = false

    if (response.success) {
        $toast.success('Look at your email and reset your password!')
        return
    }
}
</script>