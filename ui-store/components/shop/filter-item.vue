<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
    (e: 'search', payload: { color?: string; size?: string; search?: string }): void
}>()

const searchQuery = ref('')
const selectedColor = ref<string | null>(null)
const selectedSize = ref<string | null>(null)

const sizes = ref([
    { size: 'XS', value: 'XS', class: 'size-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-gray-50 transition-colors duration-200 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100' },
    { size: 'S', value: 'S', class: 'size-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-gray-50 transition-colors duration-200 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100' },
    { size: 'M', value: 'M', class: 'size-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-gray-50 transition-colors duration-200 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100' },
    { size: 'L', value: 'L', class: 'size-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-gray-50 transition-colors duration-200 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100' },
    { size: 'XL', value: 'XL', class: 'size-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-gray-50 transition-colors duration-200 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100' },
    { size: 'XXL', value: 'XXL', class: 'size-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-gray-50 transition-colors duration-200 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100' },
])

const colors = ref([
    { label: 'Red', value: 'RED', class: 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle' },
    { label: 'Blue', value: 'BLUE', class: 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle' },
    { label: 'Green', value: 'GREEN', class: 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle' },
    { label: 'Black', value: 'BLACK', class: 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-slate-900 inline-flex align-middle' },
    { label: 'Gray', value: 'GRAY', class: 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-gray-400 inline-flex align-middle' },
    { label: 'Violet', value: 'PURPLE', class: 'size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-violet-600 inline-flex align-middle' },
])

function updateFilters() {
    emit('search', {
        color: selectedColor.value ?? undefined,
        size: selectedSize.value ?? undefined,
        search: searchQuery.value || undefined
    })
}

function handleSearch(e: Event) {
    const target = e.target as HTMLInputElement
    searchQuery.value = target.value
    updateFilters()
}

function selectColor(color: string) {
    selectedColor.value = color
    updateFilters()
}

function selectSize(size: string) {
    selectedSize.value = size
    updateFilters()
}

const activeFilters = computed(() => {
    const filters: string[] = []
    if (selectedColor.value) filters.push(`Color: ${selectedColor.value}`)
    if (selectedSize.value) filters.push(`Size: ${selectedSize.value}`)
    if (searchQuery.value) filters.push(`Search: ${searchQuery.value}`)
    return filters
})

function removeFilter(type: 'color' | 'size' | 'search') {
    if (type === 'color') selectedColor.value = null
    if (type === 'size') selectedSize.value = null
    if (type === 'search') searchQuery.value = ''
    updateFilters()
}

const scrollY = ref(0)
const handleScroll = () => { scrollY.value = window.scrollY }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
const translateY = computed(() => Math.min(scrollY.value * 0.3, 80))
</script>

<template>
    <div class="rounded shadow dark:shadow-gray-800 p-4 sticky top-20 transition-transform duration-300"
        :style="{ transform: `translateY(${translateY}px)` }">

        <h5 class="text-xl font-medium">Filter</h5>

        <form class="mt-4">
            <div>
                <label for="searchname" class="font-medium">Search:</label>
                <div class="relative mt-2">
                    <i data-feather="search" class="absolute size-4 top-[9px] end-4"></i>
                    <input v-model="searchQuery" @input="handleSearch" type="text" name="s" id="searchItem"
                        placeholder="Search..."
                        class="h-9 pe-10 rounded px-3 dark:bg-slate-900 border border-gray-100 dark:border-gray-800 focus:ring-0 outline-none" />
                </div>
            </div>
        </form>

        <div class="mt-4">
            <h5 class="font-medium">Colors:</h5>
            <ul class="list-node mt-2">
                <li v-for="item in colors" :key="item.value" class="inline mx-0.5">
                    <button type="button" :class="item.class" :title="item.label"
                        @click="selectColor(item.value)"></button>
                </li>
            </ul>
        </div>

        <div class="mt-4">
            <ul class="flex flex-wrap gap-3 mt-2">
                <li v-for="item in sizes" :key="item.value">
                    <button type="button" :class="item.class" :title="item.size" @click="selectSize(item.value)">
                        {{ item.value }}
                    </button>
                </li>
            </ul>
        </div>

        <div class="mt-4" v-if="activeFilters.length">
            <h5 class="font-medium">Filtered by:</h5>
            <ul class="flex flex-wrap gap-2 mt-2">
                <li v-for="(filter, index) in activeFilters" :key="index"
                    class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                    <span>{{ filter }}</span>
                    <button type="button"
                        @click="removeFilter(filter.includes('Color') ? 'color' : filter.includes('Size') ? 'size' : 'search')"
                        class="text-red-500 font-bold">&times;</button>
                </li>
            </ul>
        </div>
    </div>
</template>
