<template>
    <div>
        <Tagline :tag-line-bg="'bg-slate-900'" :font-color="'text-white'" />
        <Navbar :nav-light="false" :search-menu2="true" :tag-line="'tagline-height'" />
        <section class="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 mt-20">
                    <h3 class="text-3xl leading-normal font-semibold">{{ product && product.name ? product.name : 'MensBrown Jecket'}}</h3>
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
                        <li
                            class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-primary">
                            <NuxtLink to="/shop-grid">Store</NuxtLink>
                        </li>
                        <li
                            class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                            <i class="mdi mdi-chevron-right"></i>
                        </li>
                        <li class="inline-block uppercase text-[13px] font-bold text-primary">{{ product && product.name
                            ?
                            product.name : 'Mens Brown Jecket'}}</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="relative md:py-24 py-16">
            <ClientOnly>
                <ShopShopDetailProductDetailThree v-if="product" :product="product" />
            </ClientOnly>
            <ShopShopDetailProductTab :product="product" />
            <ShopShopDetailNewArrival />
        </section>
        <Switcher :switcher-back="true" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { useService } from '~/composable/userServices';
import type { Product } from '~/types/catalog-models/Product';

const route = useRoute()
const services = useService()

const id = route.params.id as string
console.log('id', id)

let product: Ref<Product | null> = ref(null);

(async function loadProduct(id:string) {
    const { success, data } = await services.$product.get(id)
    console.log('data', {success, data})
    if (success) {
        product.value = data
    }
})(id)
</script>