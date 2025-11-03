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
                        <h5 class="text-lg font-semibold mb-6">My Orders</h5>
                        <div class="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                            <table class="w-full text-start text-slate-500 dark:text-slate-400">
                                <thead class="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                    <tr class="text-start">
                                        <th scope="col" class="px-2 py-3 text-start" style="min-width: 104px">Order no.
                                        </th>
                                        <th scope="col" class="px-2 py-3 text-start" style="min-width: 140px">Date</th>
                                        <th scope="col" class="px-2 py-3 text-start" style="min-width: 120px">Status
                                        </th>
                                        <th scope="col" class="px-2 py-3 text-start" style="min-width: 140px">Total</th>
                                        <th scope="col" class="px-2 py-3 text-start" style="min-width: 100px">Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white dark:bg-slate-900 text-start">
                                        <th class="px-2 py-3 text-start" scope="row">7107</th>
                                        <td class="px-2 py-3 text-start">13th March 2025</td>
                                        <td class="px-2 py-3 text-start text-green-600">Delivered</td>
                                        <td class="px-2 py-3 text-start">$ 320 <span class="text-slate-400">for 2
                                                items</span></td>
                                        <td class="px-2 py-3 text-start">
                                            <NuxtLink :to="[]" class="text-primary">View <i
                                                    class="mdi mdi-chevron-right"></i></NuxtLink>
                                        </td>
                                    </tr>

                                    <tr
                                        class="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
                                        <th class="px-2 py-3 text-start" scope="row">8007</th>
                                        <td class="px-2 py-3 text-start">5th May 2025</td>
                                        <td class="px-2 py-3 text-start text-slate-400">Processing</td>
                                        <td class="px-2 py-3 text-start">$ 800 <span class="text-slate-400">for 1
                                                item</span></td>
                                        <td class="px-2 py-3 text-start">
                                            <NuxtLink :to="[]" class="text-primary">View <i
                                                    class="mdi mdi-chevron-right"></i></NuxtLink>
                                        </td>
                                    </tr>

                                    <tr
                                        class="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
                                        <th class="px-2 py-3 text-start" scope="row">8008</th>
                                        <td class="px-2 py-3 text-start">19th June 2025</td>
                                        <td class="px-2 py-3 text-start text-red-600">Canceled</td>
                                        <td class="px-2 py-3 text-start">$ 800 <span class="text-slate-400">for
                                                1item</span></td>
                                        <td class="px-2 py-3 text-start">
                                            <NuxtLink :to="[]" class="text-primary">View <i
                                                    class="mdi mdi-chevron-right"></i></NuxtLink>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5 class="text-lg font-semibold my-6">My favourite Items</h5>

                        <div class="rounded-md shadow dark:shadow-gray-800 p-6 ">
                            <ul v-for="item in products" :key="item">
                                <li :class="item.class">
                                    <div class="flex items-center">
                                        <img :src="item.image" class="rounded shadow dark:shadow-gray-800 w-16" alt="">

                                        <div class="ms-4">
                                            <NuxtLink :to="[]" class="font-semibold hover:text-primary">{{ item.name }}
                                            </NuxtLink>
                                            <p class="text-green-600 text-sm mt-1">{{ item.price }} <del
                                                    class="text-red-600">{{ item.price2 }}</del></p>
                                        </div>
                                    </div>

                                    <div>
                                        <NuxtLink :to="[]"
                                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white rounded-full">
                                            <i data-feather="trash-2" class="h-4 w-4"></i>
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
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
import watch from '../../assets/images/shop/smart-watch.jpg'
import ladies from '~/assets/images/shop/ladies-2.jpg'
import glasses from '../../assets/images/shop/men-sun-glasses.jpg'
import bg from '~/assets/images/hero/pages.jpg'

const products = ref([
    {
        image: watch,
        name: "Apple Smart Watch",
        price: "$16.00",
        price2: "$21.00",
        class: 'flex justify-between items-center pb-6 '
    },
    {
        image: ladies,
        name: "Ladies Top",
        price: "$16.00",
        price2: "$21.00",
        class: 'flex justify-between items-center py-6 border-t border-gray-100 dark:border-gray-700'
    },
    {
        image: glasses,
        name: "Mens Sunglasses",
        price: "$16.00",
        price2: "$21.00",
        class: 'flex justify-between items-center pt-6 border-t border-gray-100 dark:border-gray-700'
    },
])

</script>
