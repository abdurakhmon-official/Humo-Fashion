<template>
    <div>
        <div class="container relative md:py-24 py-16">
            <div class="grid grid-cols-1 justify-center text-center mb-4">
                <h6 class="text-primary font-semibold uppercase text-lg">Our Promise</h6>
                <h5 class="font-semibold text-3xl leading-normal my-4">We Designed and <br /> Developed Products</h5>
            </div>

            <div class="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                <div v-for="(item, index) in products" :key="index"
                    class="p-6 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-md bg-white dark:bg-slate-900">
                    <i :class=item.icon></i>
                    <div class="content mt-6">
                        <NuxtLink to="[]" class="title h5 text-xl font-medium hover:text-primary">{{ item.name }}
                        </NuxtLink>
                        <p class="text-slate-400 mt-3">{{ item.desc }}</p>

                        <div class="mt-4">
                            <NuxtLink to="[]" class="text-primary">Read More <i class="mdi mdi-arrow-right"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container ">
            <div class="grid grid-cols-1 justify-center text-center mb-4">
                <h6 class="text-primary font-semibold uppercase text-lg">Our Minds</h6>
                <h5 class="font-semibold text-3xl leading-normal my-4">Meet Our Team Members</h5>
            </div>

            <div class="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                <div v-for="(item, index) in teams" :key="index" class="lg:col-span-3 md:col-span-6">
                    <div class="group text-center">
                        <div class="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                            <img :src="item.image" class="" alt="">
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500">
                            </div>

                            <ul class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                <li class="inline mx-0.5">
                                    <NuxtLink to="[]"
                                        class="size-8 inline-flex items-center justify-center align-middle rounded-full bg-primary text-white">
                                        <i data-feather="facebook" class="h-4 w-4"></i></NuxtLink>
                                </li>
                                <li class="inline mx-0.5">
                                    <NuxtLink to="[]"
                                        class="size-8 inline-flex items-center justify-center align-middle rounded-full bg-primary text-white">
                                        <i data-feather="instagram" class="h-4 w-4"></i></NuxtLink>
                                </li>
                                <li class="inline mx-0.5">
                                    <NuxtLink to="[]"
                                        class="size-8 inline-flex items-center justify-center align-middle rounded-full bg-primary text-white">
                                        <i data-feather="linkedin" class="h-4 w-4"></i></NuxtLink>
                                </li>
                            </ul>
                        </div>

                        <div class="content mt-3">
                            <NuxtLink to="[]" class="text-lg font-semibold hover:text-primary duration-500">
                                {{ item.name }}</NuxtLink>
                            <p class="text-slate-400">{{ item.position }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import feather from 'feather-icons';
import client from '~/assets/images/client/04.jpg'
import client2 from '~/assets/images/client/16.jpg'
import client3 from '~/assets/images/client/06.jpg'
import client4 from '~/assets/images/client/07.jpg'

const products = ref([
    {
        icon: "mdi mdi-truck-check-outline text-4xl text-primary",
        name: "Free Shipping",
        desc: "The phrasal sequence of the is now so that many campaign and benefit"
    },
    {
        icon: "mdi mdi-account-multiple-check-outline text-4xl text-primary",
        name: "24/7 Support",
        desc: "The phrasal sequence of the is now so that many campaign and benefit"
    },
    {
        icon: "mdi mdi-cash-multiple text-4xl text-primary",
        name: "Payment Process",
        desc: "The phrasal sequence of the is now so that many campaign and benefit"
    }
])

const teams = ref([
    {
        image: client,
        name: "Jack John",
        position: "Designer"
    },
    {
        image: client2,
        name: "Krista John",
        position: "Designer"
    },
    {
        image: client3,
        name: "Roger Jackson",
        position: "Designer"
    },
    {
        image: client4,
        name: "Johnny English",
        position: "Designer"
    },
])

onMounted(() => {
    feather.replace()
})
</script>