<script setup lang="ts">
import feather from 'feather-icons'
import { useService } from '~/composable/userServices';
import type { GridParams } from '~/types';
import type { ProductExtraType } from '~/types/product.extra';

const services = useService()

const loading = ref(false)
const products: Ref<ProductExtraType[]> = ref([]);

(async function loadNewArrivals({page, itemsPerPage, sortBy}: GridParams) {
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
})({page: 1, itemsPerPage: 4, sortBy: {key: 'createdAt', order: 'asc'}})

onMounted(() => {
    feather.replace()
})
</script>

<template>
    <div class="container lg:mt-24 mt-16">
        <div class="grid grid-cols-1 mb-6 text-center">
            <h3 class="font-semibold text-3xl leading-normal">New Arrival Items</h3>
        </div>
        <ShopGridProduct :productData="products"
            :grid="'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-6'" />
    </div>
</template>