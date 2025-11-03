<script setup lang="ts">
import feather from 'feather-icons'
import type { ProductExtraType } from '~/types/product.extra'
import { ref, onMounted } from 'vue'

const props = defineProps < {
    product: ProductExtraType | null
} > ()

const activeTab = ref(1)

const tabs = ref([
    { id: 1, name: 'Description', icon: 'file-text' },
    { id: 2, name: 'Additional Information', icon: 'info' },
])

const handleTabClick = (id: number) => {
    console.log('id ===>', id)
    activeTab.value = id
    console.log('activeTab.value', activeTab.value)
}

onMounted(() => {
    feather.replace()
})
</script>

<template>
    <div class="container relative">
        <div class="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
            <!-- Sidebar Tabs -->
            <div class="lg:col-span-3 md:col-span-5">
                <div class="sticky top-20">
                    <ul class="flex flex-col p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
                        id="myTab" role="tablist">
                        <li v-for="tab in tabs" :key="tab.id" role="presentation" class="ms-0">
                            <button @click.prevent="handleTabClick(tab.id)" :class="[
                                'px-4 py-3 mt-3 text-start text-base font-semibold rounded-md w-full duration-300 flex items-center gap-3 transition-all',
                                activeTab === tab.id
                                    ? 'text-white bg-primary shadow-md'
                                    : 'hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 text-slate-600 dark:text-gray-300'
                            ]" type="button" role="tab" :aria-selected="activeTab === tab.id">
                                <i :data-feather="tab.icon" class="w-5 h-5"></i>
                                <span>{{ tab.name }}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Content Area -->
            <div class="lg:col-span-9 md:col-span-7">
                <div id="myTabContent" class="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                    <!-- Smooth Transition Wrapper -->
                    <Transition name="fade" mode="out-in">
                        <div v-if="activeTab === 1" key="description" id="description" role="tabpanel">
                            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                                <i data-feather="file-text" class="w-5 h-5 text-primary"></i>
                                Product Description
                            </h3>
                            <p class="text-slate-400 whitespace-pre-line leading-relaxed">
                                {{ product?.description || 'No description available.' }}
                            </p>
                        </div>

                        <div v-else-if="activeTab === 2" key="additional-info" id="addinfo" role="tabpanel">
                            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                                <i data-feather="info" class="w-5 h-5 text-primary"></i>
                                Additional Information
                            </h3>

                            <p v-if="product?.information"
                                class="text-slate-400 whitespace-pre-line mb-6 leading-relaxed">
                                {{ product?.information }}
                            </p>

                            <div class="overflow-x-auto">
                                <table class="w-full text-start border-collapse">
                                    <tbody>
                                        <tr class="border-b border-gray-100 dark:border-gray-700">
                                            <td class="font-semibold py-3 pr-6 align-top" style="width: 120px;">
                                                Color
                                            </td>
                                            <td class="text-slate-400 py-3">
                                                {{ product?.color || 'N/A' }}
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-100 dark:border-gray-700">
                                            <td class="font-semibold py-3 pr-6 align-top">Size</td>
                                            <td class="text-slate-400 py-3">
                                                {{ product?.size || 'N/A' }}
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-100 dark:border-gray-700">
                                            <td class="font-semibold py-3 pr-6 align-top">Type</td>
                                            <td class="text-slate-400 py-3">
                                                {{ product?.type || 'N/A' }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Smooth Fade Transition -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>