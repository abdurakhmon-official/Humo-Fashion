<template>
    <nav id="topnav" class="is-sticky" :class="tagLine">
        <div class="container relative">
            <NuxtLink v-if="navLight" to="/" class="logo">
                <div class="-mt-20">
                    <img :src="logoLight" class="l-dark w-auto h-60 object-contain" alt="" />
                    <img :src="logoDark" class="l-light w-auto h-60 object-contain" alt="" />
                </div>
            </NuxtLink>
            <NuxtLink v-else to="/" class="logo">
                <span class="inline-block dark:hidden -mt-20">
                    <img :src="logoLight" class="l-dark w-auto h-60 object-contain" alt="" />
                    <img :src="logoDark" class="l-light w-auto h-60 object-contain" alt="" />
                </span>

                <img :src="logoLight" class="hidden dark:inline-block h-60 w-auto -mt-20" alt="" />
            </NuxtLink>

            <ul class="buy-button list-none mb-0">
                <li class="dropdown inline-block relative pe-1">
                    <button v-if="searchMenu2" data-dropdown-toggle="dropdown"
                        class="dropdown-toggle align-middle inline-flex" type="button" @click="toggleParagraph">
                        <i data-feather="search" class="size-5 dark-icon" :class="searchMenu"></i>
                    </button>
                    <button v-else data-dropdown-toggle="dropdown" @click="toggleParagraph"
                        class="dropdown-toggle align-middle inline-flex search-dropdown" type="button">
                        <i data-feather="search" class="size-5 dark-icon"></i>
                        <i data-feather="search" class="size-5 white-icon text-white"></i>
                    </button>
                    <div class="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 "
                        :class="search === true ? '' : 'hidden'">
                        <div class="relative">
                            <i data-feather="search" class="absolute size-4 top-[9px] end-3"></i>
                            <input type="text"
                                class="h-9 dark:bg-slate-900 px-3 pe-10 w-full border-0 focus:ring-0 outline-none"
                                name="s" id="searchItem" placeholder="Search...">
                        </div>
                    </div>
                </li>

                <li class="dropdown inline-block relative ps-0.5">
                    <button @click.prevent="toggleCart"
                        class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-primary border border-primary text-white relative"
                        type="button">
                        <i data-feather="shopping-cart" class="h-4 w-4"></i>
                        <span v-if="cart.totalItems > 0"
                            class="absolute -top-1 -end-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                            {{ cart.totalItems }}
                        </span>
                    </button>

                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                        :class="cartmenu ? '' : 'hidden'">
                        <div class="py-3 text-start" v-if="cart.loading">
                            <p class="text-center text-slate-400">Yuklanmoqda...</p>
                        </div>

                        <div v-else-if="cart.isEmpty" class="py-8 text-center">
                            <i class="mdi mdi-cart-outline text-4xl text-slate-400"></i>
                            <p class="text-slate-400 mt-2">Cart is empty!</p>
                        </div>

                        <ul v-else class="py-3 text-start max-h-60 overflow-y-auto">
                            <li v-for="item in cart.items" :key="item.id">
                                <div
                                    class="flex items-center justify-between py-1.5 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <NuxtLink to="/cart" class="flex items-center">
                                        <img :src="product1" class="rounded shadow w-9 h-9 object-cover" alt="">
                                        <span class="ms-3">
                                            <span class="block font-semibold text-sm">{{ item.itemName }}</span>
                                            <span class="block text-xs text-slate-400">${{ item.price }} × {{
                                                item.quantity }}</span>
                                        </span>
                                    </NuxtLink>
                                    <div class="flex items-center gap-2">
                                        <span class="font-semibold text-sm">${{ item.price * item.quantity }}</span>
                                        <button @click.prevent="cart.removeFromCart(item.id)"
                                            class="text-red-500 hover:text-red-700">
                                            <i data-feather="trash-2" class="w-4 h-4"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                            <li class="flex items-center justify-between py-1.5 px-4">
                                <h6 class="font-semibold mb-0">Jami:</h6>
                                <h6 class="font-semibold mb-0">${{ cart.totalPrice }}</h6>
                            </li>
                            <li class="py-1.5 px-4 space-y-2">
                                <NuxtLink to="/cart"
                                    class="block py-2 px-4 text-center font-semibold text-sm rounded-md bg-primary text-white hover:bg-primary/90">
                                    Savatni ko'rish
                                </NuxtLink>
                                <NuxtLink to="/checkout"
                                    class="block py-2 px-4 text-center font-semibold text-sm rounded-md bg-green-600 text-white hover:bg-green-700">
                                    To'lovga o'tish
                                </NuxtLink>
                                <p class="text-xs text-slate-400 text-center mt-1">*Shartlar qo'llaniladi</p>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="inline-block ps-0.5">
                    <NuxtLink to="like"
                        class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-primary text-white">
                        <i data-feather="heart" class="h-4 w-4"></i>
                    </NuxtLink>
                </li>

                <li class="dropdown inline-block relative ps-0.5">
                    <div v-if="user">
                        <button data-dropdown-toggle="dropdown" class="dropdown-toggle items-center" type="button"
                            @click="toggleParagraph3">
                            <span
                                class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-primary bg-primary text-white"><img
                                    :src="user.profileImage || 'assets/images/client/16.jpg'" class="rounded-full" alt=""></span>
                        </button>
                        <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 "
                            :class="account === false ? 'hidden' : ''">
                            <ul class="py-2 text-start">
                                <li class="ms-0">
                                    <p class="text-slate-400 pt-2 px-4">Welcome!</p>
                                </li>
                                <li class="ms-0">
                                    <NuxtLink to="/user/account"
                                        class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-primary dark:hover:text-white">
                                        <i data-feather="user" class="h-4 w-4 me-2"></i>Account
                                    </NuxtLink>
                                </li>
                                <li class="ms-0">
                                    <NuxtLink to="/help-center"
                                        class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-primary dark:hover:text-white">
                                        <i data-feather="help-circle" class="h-4 w-4 me-2"></i>Helpcenter
                                    </NuxtLink>
                                </li>
                                <li class="ms-0">
                                    <NuxtLink to="user/setting"
                                        class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-primary dark:hover:text-white">
                                        <i data-feather="settings" class="h-4 w-4 me-2"></i>Settings
                                    </NuxtLink>
                                </li>
                                <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                <li class="ms-0">
                                    <div @click.prevent="logout"
                                        class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-primary dark:hover:text-white">
                                        <i data-feather="log-out" class="h-4 w-4 me-2"></i>Logout
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-else>
                        <div class="flex items-center space-x-3">
                            <NuxtLink to="/auth/login"
                                class="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition">
                                Login
                            </NuxtLink>
                            <NuxtLink to="/auth/signup"
                                class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/80 transition">
                                Signup
                            </NuxtLink>
                        </div>
                    </div>
                </li>
            </ul>

            <div id="navigation" :class="toggle === false ? 'none' : 'block'">
                <ul class="navigation-menu" :class="navMenu">
                    <!--products-->
                    <li class="has-submenu parent-parent-menu-item product"
                        :class="['/index-products'].includes(activeMenu) ? 'active' : ''">
                        <NuxtLink to="" class="nav-link cursor-pointer" @click="submenu('/index-products')">
                            Products<span class="menu-arrow"></span></NuxtLink>

                        <ul class="submenu megamenu" :class="['/index-products'].includes(menuOpen) ? 'open' : ''">
                            <li>
                                <ul>
                                    <li class="megamenu-head">Highly Ranking Products</li>

                                    <li v-if="loadingHiglyRanking">
                                        <span class="sub-menu-item text-gray-400">Loading...</span>
                                    </li>

                                    <li v-else-if="highlyRankingItems.length > 0" v-for="item in highlyRankingItems"
                                        :key="item.id">
                                        <NuxtLink :to="`/product/${item.id}`" class="sub-menu-item">
                                            {{ item.name }}
                                        </NuxtLink>
                                    </li>

                                    <li v-else>
                                        <span class="sub-menu-item text-gray-400">No products found</span>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li class="megamenu-head">Most Liked Products</li>

                                    <li v-if="loadingMostLiked">
                                        <span class="sub-menu-item text-gray-400">Loading...</span>
                                    </li>

                                    <li v-else-if="mostLiked.length > 0" v-for="item in mostLiked" :key="item.id">
                                        <NuxtLink :to="`/product/${item.id}`" class="sub-menu-item">
                                            {{ item.name }}
                                        </NuxtLink>
                                    </li>

                                    <li v-else>
                                        <span class="sub-menu-item text-gray-400">No products found</span>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li class="megamenu-head">New Arrivals</li>

                                    <li v-if="loadingNewArrivals">
                                        <span class="sub-menu-item text-gray-400">Loading...</span>
                                    </li>

                                    <li v-else-if="newArrivals.length > 0" v-for="item in newArrivals" :key="item.id">
                                        <NuxtLink :to="`/product/${item.id}`" class="sub-menu-item">
                                            {{ item.name }}
                                        </NuxtLink>
                                    </li>

                                    <li v-else>
                                        <span class="sub-menu-item text-gray-400">No products found</span>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li class="megamenu-head">Under 50$ Collections</li>

                                    <li v-if="loadingUnder50">
                                        <span class="sub-menu-item text-gray-400">Loading...</span>
                                    </li>

                                    <li v-else-if="under50.length > 0" v-for="item in under50" :key="item.id">
                                        <NuxtLink :to="`/product/${item.id}`" class="sub-menu-item">
                                            {{ item.name }}
                                        </NuxtLink>
                                    </li>

                                    <li v-else>
                                        <span class="sub-menu-item text-gray-400">No products found</span>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li class="megamenu-head"><img src="assets/images/cta.png" alt=""></li>

                                    <li class="text-center">
                                        <NuxtLink to="/shop-grid"
                                            class="py-2 px-5 inline-block font-medium tracking-wide align-middle duration-500 text-base text-center bg-primary/10 text-primary rounded-md me-2 mt-2">
                                            <i class="mdi mdi-cart-outline"></i> Shop Now
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <!--brands-->
                    <li class="has-submenu parent-parent-menu-item shop"
                        :class="['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar', '/shop-list', '/shop-list-left-sidebar', '/shop-list-right-sidebar', '/product-detail-one', '/product-detail-two', '/product-detail-three', '/shop-cart', '/shop-checkout', '/our-store', '/brands', '/compare-product', '/recently-viewed-product', '/index-shop', '/index-grid', '/index-list', '/index-detail'].includes(activeMenu) ? 'active' : ''">
                        <NuxtLink to="" class="nav-link cursor-pointer" @click="submenu('/index-shop')">Brands<span
                                class="menu-arrow"></span></NuxtLink>
                        <ul class="submenu"
                            :class="['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar', '/index-shop', '/index-grid', '/index-list', '/index-detail'].includes(menuOpen) ? 'open' : ''">
                            <li :class="activeMenu === '/shop-cart' ? 'active' : ''" v-for="(item, index) in brands"
                                :key="index">
                                <NuxtLink :to="`/brands/${item.id}`" class="sub-menu-item">{{ item.name }}</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <!--shop-->
                    <li class="has-submenu parent-parent-menu-item shop"
                        :class="['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar', '/shop-list', '/shop-list-left-sidebar', '/shop-list-right-sidebar', '/product-detail-one', '/product-detail-two', '/product-detail-three', '/shop-cart', '/shop-checkout', '/our-store', '/brands', '/compare-product', '/recently-viewed-product', '/index-shop', '/index-grid', '/index-list', '/index-detail'].includes(activeMenu) ? 'active' : ''">
                        <NuxtLink to="" class="nav-link cursor-pointer" @click="submenu('/index-shop')">Shop<span
                                class="menu-arrow"></span></NuxtLink>
                        <ul class="submenu"
                            :class="['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar', '/index-shop', '/index-grid', '/index-list', '/index-detail'].includes(menuOpen) ? 'open' : ''">

                            <li class="has-submenu parent-menu-item"
                                :class="['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar', '/index-grid'].includes(activeMenu) ? 'active' : ''">
                                <NuxtLink to="" @click="submenu('/index-grid')" class="cursor-pointer">Men's
                                    Fashion<span class="submenu-arrow"></span></NuxtLink>
                                <ul class="submenu"
                                    :class="['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar', '/index-grid'].includes(menuOpen) ? 'open' : ''">
                                    <li :class="activeMenu === '/shop-grid' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/mens-wear?section=highly-ranking`"
                                            class="sub-menu-item ">Highly Ranking Products
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeMenu === '/shop-grid-left-sidebar' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/mens-wear?section=most-liked`"
                                            class="sub-menu-item">Trending Products
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeMenu === '/shop-grid-right-sidebar' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/mens-wear?section=new-arrivals`"
                                            class="sub-menu-item">New Arrivals
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeMenu === '/shop-grid-right-sidebar' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/mens-wear?section=under-50`" class="sub-menu-item">
                                            Under 50$ Collections
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu parent-menu-item"
                                :class="['/shop-list', '/shop-list-left-sidebar', '/shop-list-right-sidebar', '/index-list'].includes(activeMenu) ? 'active' : ''">
                                <NuxtLink to="" @click="submenu('/index-list')" class="cursor-pointer"> Women's fashion
                                    <span class="submenu-arrow"></span>
                                </NuxtLink>
                                <ul class="submenu"
                                    :class="['/shop-list', '/shop-list-left-sidebar', '/shop-list-right-sidebar', '/index-list'].includes(menuOpen) ? 'open' : ''">
                                    <li :class="activeMenu === '/shop-list' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/ladies-wear?section=highly-ranking`"
                                            class="sub-menu-item">Highly Ranking Products
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeMenu === '/shop-list-left-sidebar' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/ladies-wear?section=most-liked`"
                                            class="sub-menu-item">Trending Products
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeMenu === '/shop-list-right-sidebar' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/ladies-wear?section=new-arrivals`"
                                            class="sub-menu-item">New Arrivals
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeMenu === '/shop-list-right-sidebar' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/ladies-wear?section=under-50`"
                                            class="sub-menu-item">Under 50$
                                            Collections
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu parent-menu-item"
                                :class="['/product-detail-one', '/product-detail-two', '/product-detail-three', '/index-detail'].includes(activeMenu) ? 'active' : ''">
                                <NuxtLink to="" @click="submenu('/index-detail')" class="cursor-pointer"> Kid's Fashion
                                    <span class="submenu-arrow"></span>
                                </NuxtLink>
                                <ul class="submenu"
                                    :class="['/product-detail-one', '/product-detail-two', '/product-detail-three', '/index-detail'].includes(menuOpen) ? 'open' : ''">
                                    <li :class="activeMenu === '/product-detail-one' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/kids-wear?section=highly-ranking`"
                                            class="sub-menu-item">Highly Ranking Products
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeMenu === '/product-detail-two' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/kids-wear?section=most-liked`"
                                            class="sub-menu-item">Trending Products
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeMenu === '/product-detail-three' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/kids-wear?section=new-arrivals`"
                                            class="sub-menu-item">New Arrivals
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeMenu === '/product-detail-three' ? 'active' : ''">
                                        <NuxtLink :to="`/shop/navbar/kids-wear?section=under-50`" class="sub-menu-item">
                                            Under 50$
                                            Collections
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <!--sale-->
                    <li :class="activeMenu === '/sale' ? 'active' : ''">
                        <NuxtLink to="/sale" class="sub-menu-item nav-link">Sale</NuxtLink>
                    </li>

                    <!--contact-->
                    <li :class="activeMenu === '/contact' ? 'active' : ''">
                        <NuxtLink to="/contact" class="sub-menu-item nav-link">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import feather from 'feather-icons'
import { useRoute } from 'vue-router';
import logoDark from '../assets/images/logo-white-humo.png'
import logoLight from '../assets/images/logo-humo-black.png'
import { navCart } from '~/data/data';
import { useService } from '~/composable/userServices';
import type { Brand } from '~/types/catalog-models/Brand';
import type { GridParams } from '~/types';
import type { ProductExtraType } from '~/types/product.extra';
import product1 from '~/assets/images/shop/black-print-t-shirt.jpg';

defineProps({
    navLight: Boolean,
    navMenu: String,
    searchMenu: Boolean,
    tagLine: String,
    searchMenu2: Boolean
})

const cartMenu = ref(false)
const toggle = ref(false)
const search = ref(false)
const cartmenu = ref(false)
const account = ref(false)
const menu = ref(true)
const menuOpen = ref('')

const auth = useAuth()
const router = useRouter()
const services = useService()
const { $toast } = useNuxtApp()
const route = useRoute()
const cart = useCart()
const activeMenu = computed(() => route.path)

const { user, isLoggedIn } = storeToRefs(auth)

const brands: Ref<Brand[]> = ref([])
const highlyRankingItems: Ref<ProductExtraType[]> = ref([])
const newArrivals: Ref<ProductExtraType[]> = ref([])
const under50: Ref<ProductExtraType[]> = ref([])
const mostLiked: Ref<ProductExtraType[]> = ref([])

const loadingHiglyRanking = ref(false)
const loadingMostLiked = ref(false)
const loadingNewArrivals = ref(false)
const loadingUnder50 = ref(false)

const handler = () => {
    toggle.value = !toggle.value
}

const submenu = (item: any) => {
    menu.value = !menu.value
    menuOpen.value = item
}

const handleScroll = () => {
    const navbar = document.getElementById('topnav')
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar?.classList.add('nav-sticky')
    } else {
        navbar?.classList.remove('nav-sticky')
    }
}

const toggleParagraph = () => {
    search.value = !search.value
}

const toggleParagraph2 = () => {
    cartmenu.value = !cartmenu.value
}

const toggleParagraph3 = () => {
    account.value = !account.value
}

const toggleCart = () => {
    cartmenu.value = !cartmenu.value
    if (cartmenu.value && isLoggedIn.value) {
        cart.loadCart()
    }
}

const logout = () => {
    if (auth.clearUser()) {
        $toast.success('You successfully logged out')
        router.push('/')
        toggleParagraph3()
    } else {
        $toast.error('Something went wrong')
    }
}


(async function loadBrands() {
    const response = await services.$brand.list()
    if (response.success) {
        brands.value = response.data
    }
})();

async function loadSection(
    target: Ref<ProductExtraType[]>,
    { page, itemsPerPage, sortBy, options }: GridParams
) {
    const loading = ref(false)
    loading.value = true
    const dataToSendInNavbar = {page, itemsPerPage, sortBy, options}

    const { success, data } = await services.$product.getNavbarProducts({
        page,
        size: itemsPerPage,
        sortBy: sortBy ? [sortBy] : undefined,
        options
    })
    if (!success) return

    target.value = data.items

    if (isLoggedIn.value && target.value.length) {
        try {
            const productIds = target.value.map((p) => p.id)
            const { success: enrichSuccess, data: enrichData } = await services.$social.enrichProducts(productIds)
            if (enrichSuccess && Array.isArray(enrichData)) {
                const map = new Map(enrichData.map((d) => [d.productId, d]))
                target.value = target.value.map((p) => {
                    const enrich = map.get(p.id) || {}
                    return {
                        ...p,
                        isLiked: enrich.isLiked || false,
                        likeId: enrich.likeId || null
                    }
                })
            }
        } catch (error: any) {
            console.error('product enrishment error loading section products: ', error.message)
        }
    }

    loading.value = false
}


onMounted(() => {
    feather.replace()
    window.addEventListener('scroll', handleScroll)
    window.scrollTo(0, 0)

    loadSection(highlyRankingItems, { page: 1, itemsPerPage: 10, sortBy: { key: 'average_rating', order: 'desc' } })
    loadSection(newArrivals, { page: 1, itemsPerPage: 10, sortBy: { key: 'createdAt', order: 'desc' } })
    loadSection(under50, { page: 1, itemsPerPage: 10, sortBy: { key: 'createdAt', order: 'desc' }, options: { price: { lt: 50 } } })
    loadSection(mostLiked, { page: 1, itemsPerPage: 10, sortBy: { key: 'like_count', order: 'desc' } })
})


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>


<style lang="scss" scoped></style>
