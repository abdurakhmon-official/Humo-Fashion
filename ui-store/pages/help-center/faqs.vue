<template>
    <div>
        <Navbar :navMenu="'nav-light'" />
        <section class="relative table w-full py-36 bg-center bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${bg})` }">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="text-4xl leading-normal tracking-wider font-semibold text-white">Frequently Asked
                        Questions
                    </h3>
                </div>
            </div>

            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <NuxtLink to="index">Cartzio</NuxtLink>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                            class="mdi mdi-chevron-right"></i></li>
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <NuxtLink to="helpcenter">Helpcenter</NuxtLink>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                            class="mdi mdi-chevron-right"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                        aria-current="page">FAQs</li>
                </ul>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="flex justify-center">

                    <div class="lg:col-span-8 md:col-span-7">
                        <div id="tech">
                            <h5 class="text-2xl font-semibold">Buying Product</h5>
                            <Faq />
                        </div>

                        <div id="general" class="mt-8">
                            <h5 class="text-2xl font-semibold">General Questions</h5>
                            <Faq />
                        </div>

                        <div id="payment" class="mt-8">
                            <h5 class="text-2xl font-semibold">Payments Questions</h5>
                            <Faq />
                        </div>

                        <div id="support" class="mt-8">
                            <h5 class="text-2xl font-semibold">Support Questions</h5>
                            <Faq />
                        </div>
                    </div>
                </div>
            </div>
            <HelpcenterHelpGetInTouch />
        </section>
        <Switcher :switcherBack="true" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import bg from '~/assets/images/hero/pages.jpg'
</script>