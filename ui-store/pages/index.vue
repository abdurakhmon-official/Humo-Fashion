<script setup lang="ts">
import bg from '../assets/images/hero/bg4.jpg'

const common = useCommon()

onMounted( async () => {
    await common.loadCommonData()
})
</script>

<template>
    <div>
        <Tagline :tagLineBg="'bg-white dark:bg-slate-900'"
            :fontColor="'text-slate-900 dark:text-white font-semibold'" />
        <Navbar :nav-light="false" :nav-menu="'nav-light'" :tag-line="'tagline-height'" />
        <section class="relative md:flex table w-full items-center md:h-screen py-36 bg-center bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${bg})` }">
            <div class="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/50 from-slate-900/90"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 justify-center">
                    <div class="text-center">
                        <span class="uppercase font-semibold text-lg text-white">Top Collection</span>
                        <h4 class="md:text-6xl text-4xl md:leading-normal leading-normal font-bold text-white my-3">
                            Shine Bright</h4>
                        <p class="text-lg text-white/70">Our latest collection of essential basics.</p>

                        <div class="mt-6">
                            <NuxtLink to="/shop-grid"
                                class="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-primary rounded-md">
                                Shop Now <i class="mdi mdi-arrow-right"></i></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ShopCollection class="mt-10" />
        <section class="relative md:py-24 py-16">
            <ShopTrendingItem />
            <Cta />
            <ShopBestSeller />
        </section>
        <Footer />
        <Switcher :switcher-back="true" />
    </div>
</template>