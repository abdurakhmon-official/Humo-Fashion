<template>
    <div class="relative md:-mt-48 -mt-32">
        <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <div class="profile-pic text-center mb-5">
                <input id="pro-img" name="profile-image" type="file" class="hidden" @change="changeAvatar" />
                <div>
                    <div class="relative h-28 w-28 mx-auto">
                        <img :src="accountData.profileImage"
                            class="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                            id="profile-image" alt="">
                        <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                    </div>

                    <div class="mt-4">
                        <h5 class="text-lg font-semibold">{{ user?.username }}</h5>
                        <p class="text-slate-400">{{ user?.email }}</p>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-100 dark:border-gray-700">
                <ul class="list-none sidebar-nav mb-0 pb-0" id="navmenu-nav">
                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-account' ? 'active' : ''">
                        <NuxtLink to="/user/account" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="airplay" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Account</h6>
                        </NuxtLink>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-billing' ? 'active' : ''">
                        <NuxtLink to="/user/billing" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="edit" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Billing Info</h6>
                        </NuxtLink>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-payment' ? 'active' : ''">
                        <NuxtLink to="/user/payment" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="credit-card" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Payment</h6>
                        </NuxtLink>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-invoice' ? 'active' : ''">
                        <NuxtLink to="/user/invoice" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="file-text" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Invoice</h6>
                        </NuxtLink>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-setting' ? 'active' : ''">
                        <NuxtLink to="/user/setting" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="settings" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Settings</h6>
                        </NuxtLink>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-screen' ? 'active' : ''">
                        <NuxtLink to="/lock/screen" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="log-out" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Sign Out</h6>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import client from '~/assets/images/client/16.jpg'
import { useRoute } from 'vue-router';
import { useService } from '~/composable/userServices';
import axios from 'axios';

const route = useRoute();
const auth = useAuth()
const services = useService()

const { user } = storeToRefs(auth)

const currentUrl = ref(route.path);

const accountData = ref({
    profileImage: user.value?.profileImage || client
})

const changeAvatar = async (event: Event) => {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]
    if (!file) return

    const s3Url = await uploadToS3(file)
    accountData.value.profileImage = s3Url

    await services.$authentication.updateUser({
        profileImage: s3Url
    })

    if (user.value) {
        user.value.profileImage = s3Url
    }

}

const uploadToS3 = async (file: File) => {
    const contentType = file.type
    const filename = file.name

    const { policy, url, region } = await services.$s3.generatePolicy('avatars', filename, contentType)

    const formData = new FormData()
    Object.entries(policy).forEach(([key, value]) => formData.append(key, value as string))
    formData.append('file', file)

    await axios.post(`https://${policy.bucket}.s3.${region}.amazonaws.com/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    return url
}


</script>
