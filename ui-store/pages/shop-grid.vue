<template>
    <div>
        <Navbar :navLight="true" :tagLine="''" :searchMenu2="true" :searchMenu="true" />
        <section class="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800" id="shop">
            <div class="container relative">
                <div class="grid grid-cols-1 mt-14">
                    <h3 class="text-3xl leading-normal font-semibold">Fashion</h3>
                </div>

                <div class="relative mt-3">
                    <ul class="tracking-[0.5px] mb-0 inline-block">
                        <li
                            class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-primary">
                            <NuxtLink to="/">Humo Fashion</NuxtLink>
                        </li>
                        <li
                            class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                            <i class="mdi mdi-chevron-right"></i>
                        </li>
                        <li class="inline-block uppercase text-[13px] font-bold text-primary" aria-current="page">Shop
                            now</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="md:flex justify-between items-center mb-6">
                    <span class="font-semibold">Showing {{ start }}-{{ end }} of {{ total }} items</span>

                    <div class="md:flex items-center">
                        <label class="font-semibold md:me-2">Sort by:</label>
                        <select v-model="selectedSort" @change="handleSortChange"
                            class="form-select form-input md:w-36 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                            <option value="featured">Featured</option>
                            <option value="alpha-asc">Alfa A-Z</option>
                            <option value="alpha-desc">Alfa Z-A</option>
                            <option value="price-asc">Price Low-High</option>
                            <option value="price-desc">Price High-Low</option>
                        </select>
                    </div>
                </div>
                <ShopGridProduct :productData="products" :grid="'grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'"/>
                <ShopPagination :current-page="curPage" :total-items="total" :items-per-page="itemsPerPage"
                    @page-changed="handlePageChange" />
            </div>
        </section>
        <Footer />
        <Switcher :switcherBack="true" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useService } from '~/composable/userServices'
import type { ProductExtraType } from '~/types/product.extra'

const services = useService()
const common = useCommon()

const products: Ref<ProductExtraType[]> = ref([])
const curPage = ref(1)
const loading = ref(false)
const itemsPerPage = 20
const selectedSort = ref('featured')
const total = ref(0)

const start = computed(() => (total.value === 0 ? 0 : (curPage.value - 1) * itemsPerPage + 1))
const end = computed(() => Math.min(curPage.value * itemsPerPage, total.value))

function getSortParams(): { key: string, order: 'asc' | 'desc' }[] {
    const sorts: { key: string, order: 'asc' | 'desc' }[] = [];

    switch (selectedSort.value) {
        case "alpha-asc":
            sorts.push({ key: "name", order: 'asc' });
            break;
        case "alpha-desc":
            sorts.push({ key: 'name', order: 'desc' });
            break;
        case 'price-asc':
            sorts.push({ key: 'price', order: 'asc' });
            break;
        case 'price-desc':
            sorts.push({ key: 'price', order: 'desc' });
            break;
        default:
            sorts.push({ key: 'createdAt', order: 'desc' });
    }

    return sorts;
}


async function loadPage(page = 1) {
    loading.value = true
    const sortBy = getSortParams()
    const response = await common.loadProducts(page, itemsPerPage, sortBy)

    if (response) {
        products.value = response.items
        total.value = response.total
    }
    loading.value = false
}

function handlePageChange(page: number) {
    curPage.value = page
    loadPage(page)
}

function handleSortChange() {
    curPage.value = 1
    loadPage(1)
}

onMounted(() => loadPage(1))
</script>