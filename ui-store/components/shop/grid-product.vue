<template>
    <div :class="grid">
        <div v-for="(item, index) in productData" :key="index" class="group">
            <div
                class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                <nuxt-link :to="`/product/${item.id}`">
                    <img :src="image" class="group-hover:scale-110 duration-500" alt="">
                </nuxt-link>
                <div class="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                    <button @click.prevent="addToCart(item.id)"
                        class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">
                        Add To Cart</button>
                </div>

                <ul
                    class="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                    <li class="ms-0">
                        <button @click.prevent="handleToggleLike(item)" 
                            class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow disabled:opacity-50 disabled:cursor-not-allowed"
                            :class="{ 'bg-red-500 text-white': item.isLiked }">
                            <svg v-if="item.isLiked" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                </path>
                            </svg>

                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-heart">
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                </path>
                            </svg>
                        </button>

                    </li>
                    <li class="mt-1 ms-0">
                        <NuxtLink :to="`/product-detail-one/${item.id}`"
                            class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-eye">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </NuxtLink>
                    </li>
                    <li class="mt-1 ms-0">
                        <NuxtLink to="[]"
                            class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-bookmark">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="mt-4">
                <NuxtLink :to="`/product-detail-one/${item.id}`" class="hover:text-primary text-lg font-medium">
                    {{ item.name }}
                </NuxtLink>
                <div class="flex justify-between items-center mt-1">
                    <p>${{ item.price2 }} <del class="text-slate-400">${{ item.price }}</del></p>
                    <ul class="font-medium text-amber-400 list-none flex space-x-0.5">
                        <li v-for="n in 5" :key="n" class="inline">
                            <i v-if="item.average_rating >= n" class="mdi mdi-star"></i>
                            <i v-else-if="item.average_rating >= n - 0.5" class="mdi mdi-star-half-full"></i>
                            <i v-else class="mdi mdi-star-outline"></i>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-2 mt-1 text-sm text-slate-600">
                    <span>{{ item.like_count || 0 }} likes</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import image from '~/assets/images/shop/men-white-espadrilles-slip-shoes.jpg'
import { useService } from '~/composable/userServices'
import type { ProductExtraType} from '../../types/product.extra'

const {$toast} = useNuxtApp()
const  router = useRouter()
const cart = useCart()
const services = useService()

const props = defineProps<{
    productData: ProductExtraType[]
    grid: string
}>()

async function handleToggleLike(product: ProductExtraType) {
    try {
        if (product.isLiked) {
            const {success} = await services.$social.unlikeProduct(product.id)
            if (success) {
                $toast.success('Product unliked!')
                product.isLiked = false
                product.likeId = undefined
                product.like_count = Math.max(0, (product.like_count || 0) - 1)
            }
        } else {
            const {success, data} = await services.$social.likeProduct(product.id)
            if (success) {
                $toast.success('Product liked!')
                product.isLiked = true
                product.likeId = data.likeId
                product.like_count = (product.like_count || 0) + 1
            }
        }
    } catch (error: any) {
        console.error('like toggle failed: ', error.message)
        if (error.message.includes('authenticated') || error.message.includes('401')) {
            $toast.error('please login your account first')
            router.push('/auth/login')
        }
    }
}

const addToCart = async (id: string) => {
    if (!props.productData) return

    const success = await cart.addToCart({
        productId: id,
        quantity: 1
    })
    if (success) {
        $toast.success('Product added to cart successfully!')
        await cart.loadCart()
    } else {
        $toast.error('Something went wrong! Please try again!')
    }
}
</script>