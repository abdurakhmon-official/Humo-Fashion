<template>
    <section class="container relative md:py-24 py-16">
        <div class="grid grid-cols-1 justify-center text-center mb-6">
            <h5 class="font-semibold text-3xl leading-normal mb-4">Top Offers</h5>
            <p class="text-slate-400 max-w-xl mx-auto">Shop the latest products from the most popular collections</p>
        </div>
        <ShopGridProduct :productData="productData.slice(0, 8)"
            :grid="'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6'" />
    </section>
</template>

<script setup lang="ts">
import { productData } from '~/data/data';
</script>