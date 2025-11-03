<script setup lang="ts">
import jecket from '../../../assets/images/shop/mens-jecket.jpg'
// import jecket2 from '../../../assets/images/shop/mens-jecket-3.jpg'
// import jecket3 from '../../../assets/images/shop/mens-jecket-left.jpg'
// import jecket4 from '../../../assets/images/shop/mens-jecket-back.jpg'
// import jecket5 from '../../../assets/images/shop/mens-jecket-4.jpg'
import { tns } from 'tiny-slider/src/tiny-slider'
import type { Product } from '../../../types/catalog-models/Product'

const cart = useCart()
const {$toast} = useNuxtApp()

const props = defineProps<{
    product: Product
}>()

const visibleRef = ref(false)
const adding = ref(false)
const quantity = ref(1)
const indexRef = ref(0)
const imgsRef = ref<string[]>([])

const onShow = () => {
    visibleRef.value = true
}

const addToCart = async () => {
    if (!props.product) return

    adding.value = true
    const success = await cart.addToCart({
        productId: props.product.id,
        quantity: quantity.value
    })
    if (success) {
        $toast.success('Product added to cart successfully!')
        quantity.value = 1
    } else {
        $toast.error('Something went wrong! Please try again!')
    }
    adding.value = false
}

const increaseQty = () => {
    quantity.value++
}

const decreaseQty = () => {
    if (quantity.value > 1) quantity.value--
}

let className

(async function getColor(color:string) {
    switch (color) {
        case 'RED': 
            className = 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle'
            break
        case 'GREEN':
            className = 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-green-600 inline-flex align-middle'
            break
        case 'BLACK':
            className = 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-black inline-flex align-middle'
            break
        case 'GRAY': 
            className = 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-gray-600 inline-flex align-middle'
            break
        case 'BLUE': 
            className = 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-blue-600 inline-flex align-middle'
            break
        case 'PURPLE': 
            className = 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-purple-600 inline-flex align-middle'
            break
    }
})(props.product.color as string)

const showMultiple = () => {
    imgsRef.value = [
        jecket,
        // jecket2,
        // jecket3,
        // jecket4,
        // jecket5,
    ]

    indexRef.value = 0
    onShow()
}
const onHide = () => (visibleRef.value = false)
</script>

<template>
    <div>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
                    <div class="lg:col-span-5">
                        <div class="grid md:grid-cols-12 gap-3">
                            <div class="md:col-span-12">
                                <NuxtLink to="[]" class="lightbox duration-500 group-hover:scale-105" title="">
                                    <img @click="showMultiple" :src="jecket" class="shadow dark:shadow-gray-700"
                                        alt="Mens Brown Jecket" />
                                </NuxtLink>
                            </div>
                            <!-- <div class="md:col-span-6">
                                <NuxtLink to="[]" class="lightbox duration-500 group-hover:scale-105" title="">
                                    <img @click="showMultiple" :src="jecket2" class="shadow dark:shadow-gray-700"
                                        alt="Mens Brown Jecket" />
                                </NuxtLink>
                            </div>
                            <div class="md:col-span-6">
                                <NuxtLink to="[]" class="lightbox duration-500 group-hover:scale-105" title="">
                                    <img @click="showMultiple" :src="jecket3" class="shadow dark:shadow-gray-700"
                                        alt="Mens Brown Jecket" />
                                </NuxtLink>
                            </div>
                            <div class="md:col-span-12">
                                <NuxtLink to="[]" class="lightbox duration-500 group-hover:scale-105" title="">
                                    <img @click="showMultiple" :src="jecket4" class="shadow dark:shadow-gray-700"
                                        alt="Mens Brown Jecket" />
                                </NuxtLink>
                            </div>
                            <div class="md:col-span-12">
                                <NuxtLink to="[]" class="lightbox duration-500 group-hover:scale-105" title="">
                                    <img @click="showMultiple" :src="jecket5" class="shadow dark:shadow-gray-700"
                                        alt="Mens Brown Jecket" />
                                </NuxtLink>
                            </div> -->
                        </div>
                    </div>

                    <div class="lg:col-span-7">
                        <div class="lg:ms-6 sticky top-20">
                            <h5 class="text-2xl font-semibold">{{ props.product.name }}
                            </h5>
                            <div class="mt-2">
                                <span class="text-slate-400 font-semibold me-1">{{ props.product.price2 }}$ <del
                                        class="text-red-600">{{ props.product.price }}$</del></span>

                                <ul class="list-none inline-block text-primary-400">
                                    <li class="inline" v-for="n in 5" :key="n">
                                        <i class="mdi mdi-star text-lg"
                                            :class="n <= Math.round(props.product.average_rating ?? 0) ? 'text-primary-400' : 'text-slate-400'"></i>
                                    </li>

                                    <li class="inline text-slate-400 font-semibold">
                                        {{ (props.product?.average_rating ?? 0).toFixed(1) }} ({{
                                        props.product?.average_rating ?? 0
                                        }})
                                    </li>
                                </ul>


                            </div>

                            <div class="mt-4">
                                <h5 class="text-lg font-semibold">Overview :</h5>
                                <p class="text-slate-400 mt-2">{{ props.product.overview }}
                                </p>

                                <ul class="list-none text-slate-400 mt-4">
                                    <li class="mb-1 flex"><i
                                            class="mdi mdi-check-circle-outline text-primary text-xl me-2"></i>Digital
                                        Marketing Solutions for Tomorrow</li>
                                    <li class="mb-1 flex ms-0"><i
                                            class="mdi mdi-check-circle-outline text-primary text-xl me-2"></i> Our
                                        Talented & Experienced Marketing Agency</li>
                                    <li class="mb-1 flex ms-0"><i
                                            class="mdi mdi-check-circle-outline text-primary text-xl me-2"></i>Create
                                        your own skin to match your brand</li>
                                </ul>
                            </div>

                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
                                <div class="flex items-center">
                                    <h5 class="text-lg font-semibold me-2">Size:</h5>
                                    <div class="space-x-1">
                                        <NuxtLink to="[]"
                                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-primary/5 hover:bg-primary text-primary hover:text-white">
                                            {{ props.product.size }}</NuxtLink>
                                    </div>
                                </div>

                                <div class="flex items-center">
                                    <h5 class="text-lg font-semibold me-2">Quantity:</h5>
                                    <div class="qty-icons ms-3 space-x-0.5">
                                        <button @click.prevent="decreaseQty"
                                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-primary/5 hover:bg-primary text-primary hover:text-white minus">
                                            -
                                        </button>

                                        <input v-model.number="quantity" min="1" name="quantity" type="number"
                                            class="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-primary/5 text-primary pointer-events-none w-16 ps-4 quantity border-none" />

                                        <button @click.prevent="increaseQty"
                                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-primary/5 hover:bg-primary text-primary hover:text-white plus">
                                            +
                                        </button>
                                    </div>
                                </div>


                                <div class="flex items-center">
                                    <h5 class="text-lg font-semibold me-2">Colors:</h5>
                                    <div class="space-x-2">
                                        <NuxtLink to="" :class="className" title="Red"></NuxtLink>

                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 space-x-1">
                                <NuxtLink to="[]"
                                    class="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-primary text-white rounded-md mt-2">
                                    Shop Now</NuxtLink>
                                <button @click="addToCart"
                                    class="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-primary/5 hover:bg-primary text-primary hover:text-white mt-2">
                                    Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef"
                @hide="onHide"></vue-easy-lightbox>
        </section>
    </div>
</template>