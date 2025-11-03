<template>
    <div>
        <Navbar :navLight="false" :navMenu="'nav-light'" :searchMenu="true" :searchMenu2="false" />

        <section class="relative table w-full items-center py-36 bg-top bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${bg})` }">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-3 text-4xl leading-normal tracking-wider font-semibold text-white">About Us</h3>
                    <p class="text-slate-400 text-lg max-w-xl mx-auto">Believe in Craftsmanship and Luxurious Design.
                    </p>
                </div>
            </div>

            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <NuxtLink to="/">Cartzio</NuxtLink>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                            class="mdi mdi-chevron-right"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                        aria-current="page">About</li>
                </ul>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div class="lg:col-span-5 md:col-span-6">
                        <img :src="about1" class="rounded-t-full shadow-md dark:shadow-gray-800" alt="">
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="lg:ms-8">
                            <h6 class="text-primary font-semibold uppercase text-lg">Our Shop</h6>
                            <h5 class="font-semibold text-3xl leading-normal my-4">Focusing on Quality <br /> Material,
                                Good Design</h5>
                            <p class="text-slate-400 max-w-xl">Donec non interdum nisl. Sed ut est ac lacus sodales
                                convallis. Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum magna
                                porttitor porttitor suscipit. Praesent sit amet consequat eros. Quisque ullamcorper
                                ornare vulputate. Nam sodales sem id diam sollicitudin, id lobortis tellus tincidunt.
                            </p>

                            <div class="flex items-center mt-6">
                                <i data-feather="phone" class="w-6 h-6 me-4"></i>
                                <div class="">
                                    <h5 class="title font-bold mb-0">Phone</h5>
                                    <a href="tel:+152534-468-854" class="tracking-wide text-primary">+152
                                        534-468-854</a>
                                </div>
                            </div>

                            <div class="flex items-center mt-6">
                                <i data-feather="map-pin" class="w-6 h-6 me-4"></i>
                                <div class="">
                                    <h5 class="title font-bold mb-0">Location</h5>
                                    <NuxtLink to="" @click="toggle"
                                        class="tracking-wide text-center text-primary lightbox cursor-pointer">View on
                                        Google map</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container md:pt-24 pt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div class="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                        <img :src="about2" class="rounded-b-full shadow-md dark:shadow-gray-800" alt="">
                    </div>

                    <div class="lg:col-span-7 md:col-span-6 md:order-1 order-2">
                        <h6 class="text-primary font-semibold uppercase text-lg">Founder</h6>
                        <h5 class="font-semibold text-3xl leading-normal my-4">Maria J. Rose</h5>
                        <p class="text-slate-400 max-w-xl">Donec non interdum nisl. Sed ut est ac lacus sodales
                            convallis. Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum magna porttitor
                            porttitor suscipit. Praesent sit amet consequat eros. Quisque ullamcorper ornare vulputate.
                            Nam sodales sem id diam sollicitudin, id lobortis tellus tincidunt.</p>

                        <ul class="list-none mt-6 space-x-3">
                            <li class="inline ms-0">
                                <a href="https://dribbble.com/shreethemes" target="_blank"
                                    class="inline-flex hover:text-primary dark:hover:text-primary">
                                    <i data-feather="dribbble" class="size-5 align-middle" title="dribbble"></i>
                                </a>
                            </li>
                            <li class="inline ms-0">
                                <a href="http://linkedin.com/company/shreethemes" target="_blank"
                                    class="inline-flex hover:text-primary dark:hover:text-primary">
                                    <i data-feather="linkedin" class="size-5 align-middle" title="Linkedin"></i>
                                </a>
                            </li>
                            <li class="inline ms-0">
                                <a href="https://www.facebook.com/shreethemes" target="_blank"
                                    class="inline-flex hover:text-primary dark:hover:text-primary">
                                    <i data-feather="facebook" class="size-5 align-middle" title="facebook"></i>
                                </a>
                            </li>
                            <li class="inline ms-0">
                                <a href="https://www.instagram.com/shreethemes/" target="_blank"
                                    class="inline-flex hover:text-primary dark:hover:text-primary">
                                    <i data-feather="instagram" class="size-5 align-middle" title="instagram"></i>
                                </a>
                            </li>
                            <li class="inline ms-0">
                                <a href="https://twitter.com/shreethemes" target="_blank"
                                    class="inline-flex hover:text-primary dark:hover:text-primary">
                                    <i data-feather="twitter" class="size-5 align-middle" title="twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div :class="isActive ? 'fixed' : 'hidden'"
                class="w-full h-screen bg-slate-900/80 fixed top-0 left-0 bottom-0 right-0 z-999 flex items-center justify-center">
                <div class="w-full h-full px-5 md:px-40 md-py-20 py-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55431.05581015953!2d-95.461302!3d29.735948000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c36647a52ab1%3A0x70a301678672cb!2sBriargrove%20Park%2C%20Houston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1710322657489!5m2!1sen!2sin"
                        width="100%" height="100%" title="myfram" loading="lazy">
                    </iframe>
                </div>
                <button class="text-slate-400 absolute top-[20px] right-[20px]">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" class="size-5" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg" @click="toggle">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <AboutProducts />
        </section>
        <Switcher :switcherBack="true" />
        <Footer />
    </div>

</template>

<script setup lang="ts">
import about1 from '~/assets/images/ab1.jpg'
import about2 from '~/assets/images/ab2.jpg'
import bg from '~/assets/images/hero/pages.jpg'

const isActive = ref(false)

const toggle = () => {
    if (!isActive.value) {
        isActive.value = true;
    } else {
        isActive.value = false;
    }
}
</script>