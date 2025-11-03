<script setup lang="ts">
import { useService } from '~/composable/userServices';
import type { GridParams } from '~/types';
import type { ProductExtraType } from '~/types/product.extra';

defineProps({
    fourItem: Boolean
})

const services = useService()

const loading = ref(false)
const products: Ref<ProductExtraType[]> = ref([]);

(async function trendingProducts({page, itemsPerPage, sortBy}: GridParams) {
    loading.value = true
    const { success, data } = await services.$product.getNavbarProducts({
        page,
        size: itemsPerPage,
        sortBy: sortBy ? [sortBy] : undefined
    })
    loading.value = false
    if (success) {
        products.value = data.items
    }
})({page: 1, itemsPerPage: 8, sortBy: {key: 'sold', order: 'desc'}})

</script>

<template>
    <section class="relative md:py-24 py-16">

        <div class="container">
            <div class="grid items-end md:grid-cols-2 mb-6">
                <div class="md:text-start text-center">
                    <h5 class="font-semibold text-3xl leading-normal mb-4">Best Seller</h5>
                    <p class="text-slate-400 max-w-xl">Top sale in this week</p>
                </div>

                <div class="md:text-end hidden md:block">
                    <NuxtLink to="/shop/best-sellers" class="text-slate-400 hover:text-primary">See More Items <i
                            class="mdi mdi-arrow-right"></i></NuxtLink>
                </div>
            </div>
            <ShopGridProduct v-if="fourItem" :productData="products"
                grid="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6" />
            <ShopGridProduct v-else :productData="products"
                grid="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6" />

            <div clas="grid grid-cols-1">
                <div class="text-center mt-5 block md:hidden">
                    <NuxtLink to="/shop/best-sellers" class="text-slate-400 hover:text-primary">See More Items <i
                            class="mdi mdi-arrow-right"></i></NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

