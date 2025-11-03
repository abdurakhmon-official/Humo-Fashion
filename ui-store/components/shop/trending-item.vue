<script setup lang="ts">
import feather from 'feather-icons'
import { useService } from '~/composable/userServices';
import type { GridParams } from '~/types';
import type { ProductExtraType } from '~/types/product.extra';

const services = useService()

const loading = ref(false)
const products: Ref<ProductExtraType[]> = ref([]);

(async function loadMostLiked({page, itemsPerPage, sortBy}: GridParams) {
    loading.value = true
    const response = await services.$product.getNavbarProducts({
        page,
        size: itemsPerPage,
        sortBy: sortBy ? [sortBy] : undefined
    })
    loading.value = false
    if (response.success) {
        products.value = response.data.items
    }
})({ page: 1, itemsPerPage: 8, sortBy: { key: 'like_count', order: 'desc' } })

onMounted(() => {
    feather.replace()
})
</script>

<template>
    <div class="container relative">
        <div class="grid items-end md:grid-cols-2 mb-6">
            <div class="md:text-start text-center">
                <h5 class="font-semibold text-3xl leading-normal mb-4">Trending Items</h5>
                <p class="text-slate-400 max-w-xl">Shop the latest products from the most popular items</p>
            </div>

            <div class="md:text-end hidden md:block">
                <NuxtLink to="/shop/trending-items" class="text-slate-400 hover:text-primary">See More Items <i
                        class="mdi mdi-arrow-right"></i></NuxtLink>
            </div>
        </div>
        <ShopGridProduct :productData="products.slice(0, 8)"
            :grid="'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6'" />

        <!-- <div clas="grid grid-cols-1">
            <div class="text-center mt-5 block md:hidden">
                <NuxtLink to="/shop-grid" class="text-slate-400 hover:text-primary">See More Items <i
                        class="mdi mdi-arrow-right"></i></NuxtLink>
            </div>
        </div> -->
    </div>
</template>