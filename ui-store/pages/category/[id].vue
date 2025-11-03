<script setup lang="ts">
import { productData } from '~/data/data';

const route = useRoute()

const categoryId = route.params.id
</script>

<template>
    <div>
        <Navbar :navLight="true" :tagLine="''" :searchMenu2="true" :searchMenu="true" />
        <section class="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 mt-14">
                    <h3 class="text-3xl leading-normal font-semibold">Fashion</h3>
                </div>

                <div class="relative mt-3">
                    <ul class="tracking-[0.5px] mb-0 inline-block">
                        <li
                            class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-primary">
                            <NuxtLink to="/">Humo Easy Shopping</NuxtLink>
                        </li>
                        <li
                            class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                            <i class="mdi mdi-chevron-right"></i>
                        </li>
                        <li class="inline-block uppercase text-[13px] font-bold text-primary" aria-current="page">
                            {{ categoryId }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 sm:grid-cols-2 grid-cols-1 gap-6">
                    <div class="lg:col-span-3 md:col-span-4">
                        <ShopFilterItem />
                    </div>

                    <div class="lg:col-span-9 md:col-span-8">
                        <div class="md:flex justify-between items-center mb-6">
                            <span class="font-semibold">Showing 1-16 of 40 items</span>

                            <div class="md:flex items-center">
                                <label class="font-semibold md:me-2">Sort by:</label>
                                <select
                                    class="form-select form-input md:w-36 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                                    <option value="">Featured</option>
                                    <option value="">Sale</option>
                                    <option value="">Alfa A-Z</option>
                                    <option value="">Alfa Z-A</option>
                                    <option value="">Price Low-High</option>
                                    <option value="">Price High-Low</option>
                                </select>
                            </div>
                        </div>
                        <ShopGridProduct :productData="productData"
                            :grid="'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'" />

                        <ShopPagination />
                    </div>
                </div>
            </div>
        </section>

        <Switcher :switcherBack="true" />
        <Footer />
    </div>
</template>