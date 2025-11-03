<template>
    <footer class="footer bg-slate-900 dark:bg-slate-800 relative text-gray-200 dark:text-gray-200">
        <div class="container relative">
            <div class="grid grid-cols-12">
                <div class="col-span-12">
                    <div class="py-[60px] px-0">
                        <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
                            <div class="lg:col-span-3 md:col-span-12">
                                <NuxtLink to="[]" class="text-[22px] focus:outline-none">
                                    <img :src="logo" alt="" />
                                </NuxtLink>
                                <p class="mt-6 text-gray-300">Upgrade your style with our curated sets. Choose
                                    confidence, embrace your unique look.</p>
                                <ul class="list-none mt-6">
                                    <li class="inline mx-0.5">
                                        <a href="https://1.envato.market/cartzio-nuxt" target="_blank"
                                            class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-primary dark:hover:text-primary text-slate-300">
                                            <i data-feather="shopping-cart" class="h-4 w-4 align-middle"
                                                title="Buy Now"></i>
                                        </a>
                                    </li>
                                    <li class="inline mx-0.5">
                                        <a href="https://dribbble.com/shreethemes" target="_blank"
                                            class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-primary dark:hover:text-primary text-slate-300">
                                            <i data-feather="dribbble" class="h-4 w-4 align-middle"
                                                title="dribbble"></i>
                                        </a>
                                    </li>
                                    <li class="inline mx-0.5">
                                        <a href="http://linkedin.com/company/shreethemes" target="_blank"
                                            class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-primary dark:hover:text-primary text-slate-300">
                                            <i data-feather="linkedin" class="h-4 w-4 align-middle"
                                                title="Linkedin"></i>
                                        </a>
                                    </li>
                                    <li class="inline mx-0.5">
                                        <a href="https://www.facebook.com/shreethemes" target="_blank"
                                            class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-primary dark:hover:text-primary text-slate-300">
                                            <i data-feather="facebook" class="h-4 w-4 align-middle"
                                                title="facebook"></i>
                                        </a>
                                    </li>
                                    <li class="inline mx-0.5">
                                        <a href="https://www.instagram.com/shreethemes/" target="_blank"
                                            class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-primary dark:hover:text-primary text-slate-300">
                                            <i data-feather="instagram" class="h-4 w-4 align-middle"
                                                title="instagram"></i>
                                        </a>
                                    </li>
                                    <li class="inline mx-0.5">
                                        <a href="https://twitter.com/shreethemes" target="_blank"
                                            class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-primary dark:hover:text-primary text-slate-300">
                                            <i data-feather="twitter" class="h-4 w-4 align-middle" title="twitter"></i>
                                        </a>
                                    </li>
                                    <li class="inline mx-0.5">
                                        <a href="mailto:support@shreethemes.in"
                                            class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-primary dark:hover:text-primary text-slate-300">
                                            <i data-feather="mail" class="h-4 w-4 align-middle" title="email"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="lg:col-span-6 md:col-span-12">
                                <h5 class="tracking-[1px] text-gray-100 font-semibold">Shopping & Clothes</h5>

                                <div class="grid md:grid-cols-12 grid-cols-1">
                                    <div class="md:col-span-4">
                                        <ul class="list-none footer-list mt-6">
                                            <li v-for="(item, index) in footerLink1" :key="index" class="mb-2.5">
                                                <NuxtLink to="[]"
                                                    class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                                    <i class="mdi mdi-chevron-right"></i> {{ item }}
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="md:col-span-4">
                                        <ul class="list-none footer-list mt-6">
                                            <li v-for="(item, index) in footerLink2" :key="index" class="mb-2.5">
                                                <NuxtLink to="[]"
                                                    class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                                    <i class="mdi mdi-chevron-right"></i> {{ item }}
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="md:col-span-4">
                                        <ul class="list-none footer-list mt-6">
                                            <li v-for="(item, index) in footerLink3" :key="index" class="mb-2.5">
                                                <NuxtLink to="[]"
                                                    class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                                    <i class="mdi mdi-chevron-right"></i> {{ item }}
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-3 md:col-span-4">
                                <h5 class="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                <p class="mt-6">Sign up and receive the latest tips via email.</p>
                                <form>
                                    <div class="grid grid-cols-1">
                                        <div class="my-3">
                                            <label class="form-label">Write your email <span
                                                    class="text-red-600">*</span></label>
                                            <div class="form-icon relative mt-2">
                                                <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                                <input type="email"
                                                    class="ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none"
                                                    placeholder="Email" name="email" required>
                                            </div>
                                        </div>

                                        <button type="submit" id="submitsubscribe" name="send"
                                            class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1">
                <div class="py-[30px] px-0 border-t border-slate-800">
                    <div class="grid lg:grid-cols-4 md:grid-cols-2">
                        <div v-for="(item, index) in footerFeature" :key="index"
                            class="flex items-center lg:justify-center">
                            <i class="align-middle text-lg mb-0 me-2" :class="item.icon"></i>
                            <h6 class="mb-0 font-medium">{{ item.title }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-[30px] px-0 border-t border-slate-800">
            <div class="container relative text-center">
                <div class="grid md:grid-cols-2 items-center">
                    <div class="md:text-start text-center">
                        <p class="mb-0">© {{ date }} Humo Fashion. Easy & Online Shopping <i
                                class="mdi mdi-heart text-red-600"></i> with <a href="https://shreethemes.in/"
                                target="_blank" class="text-reset">Humo</a>.</p>
                    </div>

                    <ul class="list-none md:text-end text-center mt-6 md:mt-0">
                        <li v-for="(item, index) in footerPayment" :key="index" class="inline mx-0.5">
                            <NuxtLink to="[]"><img :src="item" class="max-h-6 rounded inline" title="American Express"
                                    alt="" /></NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import logo from '../../assets/images/logo-white-humo.png'
import feather from 'feather-icons'
import { footerFeature, footerLink1, footerLink2, footerLink3, footerPayment } from '../../data/data'

const date = ref(new Date().getFullYear())

onMounted(() => {
    feather.replace()
})
</script>