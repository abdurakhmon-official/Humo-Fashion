<template>
    <div>
        <Tagline :tagLineBg="'bg-white dark:bg-slate-900'"
            :fontColor="'text-slate-900 dark:text-white font-semibold'" />
        <Navbar :navLight="false" :navMenu="'nav-light'" :searchMenu="true" :searchMenu2="false"
            :tagLine="'tagline-height'" />
        <section class="relative table w-full items-center pt-36 pb-52 bg-primary-600  bg-center bg-no-repeat bg-cover"
            id="sale" :style="{ backgroundImage: `url(${bg})` }">
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3
                        class="md:text-7xl text-5xl md:leading-normal leading-normal tracking-wide font-bold uppercase text-white">
                        Sale Outlet <br /> Up to 75% Off</h3>
                    <div class="mt-6">
                        <NuxtLink to="[]"
                            class="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-primary rounded-md">
                            Offer Grab Now</NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 justify-center">
                    <div class="relative z-2 duration-500 sm:-mt-[200px] -mt-[140px] m-0">
                        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                            <div v-for="(item, index) in sales" :key="index"
                                class="relative overflow-hidden rounded-md text-center shadow-md">
                                <div class="p-6 bg-primary">
                                    <span class="bg-white text-primary font-bold px-2.5 py-0.5 rounded-full h-5">{{
                                        item.discount }}</span>

                                    <h5 class="text-white font-medium mt-2">{{ item.sale }}</h5>

                                    <p class="text-white/70 mt-2">{{ item.name }}<br /> {{ item.offer }}</p>
                                </div>

                                <div class="p-6 bg-white dark:bg-slate-900">
                                    <p class="text-sm font-medium uppercase">{{ item.usecode }}</p>
                                    <h5 class="text-xl font-semibold uppercase mt-1">{{ item.code }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SaleOffers />
            <MobileApp />
        </section>
        <Switcher :switcherBack="true" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import bg from '~/assets/images/hero/bg-shape.png'

const sales = ref([
    {
        discount: "20% Off",
        sale: "Sale 20% Off",
        name: "Use this below code",
        offer: "for 20% Off",
        usecode: "Use Code",
        code: "Sale20off",
    },
    {
        discount: "30% Off",
        sale: "Sale 30% Off",
        name: "Use this below code",
        offer: "for 30% Off",
        usecode: "Use Code",
        code: "Sale30off",
    },
    {
        discount: "50% Off",
        sale: "Sale 50% Off",
        name: "Use this below code",
        offer: "for 50% Off",
        usecode: "Use Code",
        code: "Sale50off",
    },
    {
        discount: "75% Off",
        sale: "Sale 75% Off",
        name: "Use this below code",
        offer: "for 75% Off",
        usecode: "Use Code",
        code: "Sale75off",
    }
])

</script>