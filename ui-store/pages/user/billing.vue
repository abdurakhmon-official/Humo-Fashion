<template>
    <div>
        <Navbar :navLight="true" :tagLine="''" :searchMenu2="true" />
        <section class="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
            <div class="md:container container-fluid relative">
                <div class="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-center bg-no-repeat bg-cover transform transition translate-y-8"
                    :style="{ backgroundImage: `url(${bg})` }">
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="md:flex">
                    <div class="lg:w-1/4 md:w-1/3 md:px-3">
                        <UserTab />
                    </div>

                    <div class="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
                        <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <h6 class="text-slate-400 mb-0">The following addresses will be used on the checkout page by
                                default.</h6>
                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                                <div class="">
                                    <div class="flex items-center mb-4 justify-between">
                                        <h5 class="text-xl font-medium">Billing Address:</h5>
                                        <NuxtLink :to="[]" class="text-primary text-lg"><i data-feather="edit"
                                                class="size-4"></i></NuxtLink>
                                    </div>
                                    <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p class="text-lg font-medium mb-2">{{ user.username }}</p>

                                        <ul class="list-none">
                                            <li class="flex ms-0">
                                                <i data-feather="map-pin" class="size-4 me-2 mt-1"></i>
                                                <p class="text-slate-400">C/54 Northwest Freeway, Suite 558, <br />
                                                    Houston, USA 485</p>
                                            </li>

                                            <li class="flex ms-0 mt-1">
                                                <i data-feather="phone" class="size-4 me-2 mt-1"></i>
                                                <p class="text-slate-400">+123 897 5468</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="">
                                    <div class="flex items-center mb-4 justify-between">
                                        <h5 class="text-xl font-medium">Shipping Address:</h5>
                                        <NuxtLink :to="[]" class="text-primary text-lg"><i data-feather="edit"
                                                class="size-4"></i></NuxtLink>
                                    </div>
                                    <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p class="text-lg font-medium mb-2">{{ user.username }}</p>

                                        <ul class="list-none">
                                            <li class="flex ms-0">
                                                <i data-feather="map-pin" class="size-4 me-2 mt-1"></i>
                                                <p class="text-slate-400">C/54 Northwest Freeway, Suite 558, <br />
                                                    Houston, USA 485</p>
                                            </li>

                                            <li class="flex ms-0 mt-1">
                                                <i data-feather="phone" class="size-4 me-2 mt-1"></i>
                                                <p class="text-slate-400">+123 897 5468</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher :switcherBack="true" />
        <Footer />
    </div>
</template>

<script setup>
import feather from 'feather-icons';
import bg from '~/assets/images/hero/pages.jpg'

onMounted(() => {
    feather.replace();
})

const auth = useAuth()

const {user} = storeToRefs(auth)

</script>