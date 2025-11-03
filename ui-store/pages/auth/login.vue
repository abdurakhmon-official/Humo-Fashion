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
                                <img class="lg:h-full h-full w-full object-cover md:h-[34rem]" :src="loginImage" alt="">
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

                                <form class="text-start lg:py-20 py-8" @submit.prevent="login">
                                    <div class="grid grid-cols-1">
                                        <div class="mb-4">
                                            <label class="font-semibold" for="username">Username:</label>
                                            <input id="username" type="text" v-model="data.username"
                                                class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="username">
                                        </div>

                                        <div class="mb-4">
                                            <label class="font-semibold" for="LoginPassword">Password:</label>
                                            <input id="LoginPassword" type="password" v-model="data.password"
                                                class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="Password:">
                                        </div>

                                        <div class="flex justify-between mb-4">
                                            <div class="flex items-center mb-0">
                                                <input
                                                    class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-primary checked:appearance-auto dark:accent-primary focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50 me-2"
                                                    type="checkbox" value="" id="RememberMe">
                                                <label class="form-checkbox-label text-slate-400"
                                                    for="RememberMe">Remember me</label>
                                            </div>
                                            <p class="text-slate-400 mb-0">
                                                <NuxtLink to="/auth/forgot-password" class="text-slate-400">Forgot password ?
                                                </NuxtLink>
                                            </p>
                                        </div>

                                        <div class="mb-4">
                                            <input type="submit"
                                                class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md w-full"
                                                value="Login / Sign in">
                                        </div>

                                        <div class="text-center">
                                            <span class="text-slate-400 me-2">Don't have an account ?</span>
                                            <NuxtLink to="/auth/signup"
                                                class="text-black dark:text-white font-bold inline-block">Sign Up
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </form>

                                <div class="text-center">
                                    <p class="mb-0 text-slate-400">© {{ date }} Cartzio. Design & Develop with <i
                                            class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/"
                                            target="_blank" class="text-reset">Shreethemes</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <switcher :switcherBack="false" />
    </div>
</template>

<script setup lang="ts">
import feather from 'feather-icons';
import switcher from '@/components/switcher.vue';
import loginImage from '~/assets/images/login.jpg'
import logoDark from '../assets/images/logo-white-humo.png'
import logoLight from '../assets/images/logo-humo-black.png'
import bg from '~/assets/images/hero/bg-shape.png'
import { useService } from '~/composable/userServices';
import type { SigninInput } from '~/types/user-input/SigninInput';

const date = ref(new Date().getFullYear())

onMounted(() => {
    feather.replace()
})

const router = useRouter()
const {$toast} = useNuxtApp()
const services = useService()
const auth = useAuth()

const data: Ref<SigninInput> = ref({
    username: '',
    password: ''
})

const loading = ref(false)

async function login() {
    const { username, password } = data.value
    console.log('data', {password, username})

    if (!username || !password) {
        $toast.info('Please fill all required fields!')
        return
    }

    loading.value = true
    const response = await services.$authentication.login(data.value as SigninInput)
    loading.value = false

    if (response.success) {
        $toast.success('You successfully login to your acocunt!')
        const {token, user} = response.data
        auth.setCreds(token, user)
        router.push('/')
    } else {
        $toast.error('username or password incorrect!')
        data.value = {
            username: '',
            password: ''
        }
        router.push('/auth/login')
    }
}

</script>