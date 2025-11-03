<template>
    <div class="container relative">
        <div class="grid grid-cols-1 justify-center text-center mb-6">
            <h5 class="font-semibold text-3xl leading-normal mb-4">
                Shop The Collections
            </h5>
            <p class="text-slate-400 max-w-xl mx-auto">
                Shop the latest products from the most popular collections
            </p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-8">
            <NuxtLink :to="`/shop/${item.id}`" v-for="(item, index) in collectionData" :key="index"
                class="text-center hover:text-primary transition-all duration-300">
                <img :src="item.image"
                    class="rounded-full shadow-lg dark:shadow-gray-800 w-56 h-56 object-cover mx-auto hover:scale-105 transition-transform duration-300"
                    alt="" />
                <span class="text-xl font-medium mt-3 block">{{ item.name }}</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import imageMen from '~/assets/images/categories/mens-ware.jpg'
import imageWomen from '~/assets/images/categories/ladies-ware.jpg'
import imageKids from '~/assets/images/categories/kids-ware.jpg'

const collectionData = ref([
    {
        id: 'mens-wear',
        image: imageMen,
        name: "Men's Wear"
    },
    {
        id: 'ladies-wear',
        image: imageWomen,
        name: "Ladies Wear"
    },
    {
        id: 'kids-wear',
        image: imageKids,
        name: "Kids Wear"
    }
])
</script>
