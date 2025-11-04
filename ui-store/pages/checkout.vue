<template>
    <div>
        <Navbar :navLight="true" :tagLine="''" :searchMenu2="true" />
        <section class="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 mt-14">
                    <h3 class="text-3xl leading-normal font-semibold">Checkout</h3>
                </div>

                <div class="relative mt-3">
                    <ul class="tracking-[0.5px] mb-0 inline-block">
                        <li
                            class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-primary">
                            <NuxtLink to="/">Humo Fashion</NuxtLink>
                        </li>
                        <li
                            class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                            <i class="mdi mdi-chevron-right"></i>
                        </li>
                        <li class="inline-block uppercase text-[13px] font-bold text-primary" aria-current="page">
                            Checkout</li>
                    </ul>
                </div>
            </div>
        </section>
        <ShopCheckout />
        <MobileApp />
        <Switcher :switcherBack="true" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
</script>