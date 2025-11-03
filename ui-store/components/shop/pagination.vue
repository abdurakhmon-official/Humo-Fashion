<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
    currentPage: { type: Number, required: true },
    totalItems: { type: Number, required: true },
    itemsPerPage: { type: Number, required: true },
})

const emit = defineEmits<{
    (e: 'page-changed', page: number): void
}>()

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

const visiblePages = computed(() => {
    const pages: (number | string)[] = []
    const current = props.currentPage
    const total = totalPages.value

    if (total <= 7) {
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }
        return pages
    }
    pages.push(1)

    if (current > 4) {
        pages.push('...')
    }

    const startPage = Math.max(2, current - 1)
    const endPage = Math.min(total - 1, current + 1)

    for (let i = startPage; i <= endPage; i++) {
        if (!pages.includes(i)) {
            pages.push(i)
        }
    }

    if (current < total - 3) {
        pages.push('...')
    }

    if (!pages.includes(total)) {
        pages.push(total)
    }

    return pages
})

function goToPage(page: number) {
    if (page < 1 || page > totalPages.value) return
    emit('page-changed', page)
}
</script>

<template>
    <div class="text-center mt-6">
        <nav aria-label="Page navigation">
            <ul class="inline-flex items-center -space-x-px">
                <li>
                    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1" :class="currentPage === 1
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-100 dark:hover:bg-slate-800'" class="btn-page">
                        <i class="mdi mdi-chevron-left text-lg rtl:rotate-180 rtl:-mt-1"></i>
                    </button>

                </li>

                <li v-for="(page, index) in visiblePages" :key="index">
                    <span v-if="page === '...'"
                        class="btn-page cursor-default bg-white dark:bg-slate-900 text-slate-400">
                        ...
                    </span>

                    <button v-else @click="goToPage(page as number)"
                        :class="page === currentPage
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white dark:bg-slate-900 text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary border-gray-200 dark:border-gray-800'"
                        class="btn-page transition-colors duration-200">
                        {{ page }}
                    </button>
                </li>

                <li>
                    <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages" :class="currentPage === totalPages
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-100 dark:hover:bg-slate-800'" class="btn-page">
                        <i class="mdi mdi-chevron-right text-lg"></i>
                    </button>
                </li>
            </ul>
        </nav>

        <div class="mt-4 flex items-center justify-center gap-2" v-if="totalPages > 7">
            <label class="text-sm text-slate-600 dark:text-slate-400">Go to page:</label>
            <input type="number" :min="1" :max="totalPages" :value="currentPage"
                @keyup.enter="(e) => goToPage(parseInt((e.target as HTMLInputElement).value))"
                class="w-16 px-2 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-slate-900 text-center" />
            <span class="text-sm text-slate-600 dark:text-slate-400">of {{ totalPages }}</span>
        </div>
    </div>
</template>

<style scoped>
.btn-page {
    min-width: 40px;
    height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d1d5db;
    margin: 0 2px;
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    background-color: #ffffff;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-page:hover:not(:disabled) {
    background-color: #f3f4f6;
    border-color: #9ca3af;
    color: #111827;
}

.btn-page:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-page.bg-primary,
.btn-page.active {
    background-color: #ff7900;
    color: #ffffff;
    border-color: #ff7900;
}

.btn-page.cursor-default {
    cursor: default;
    background-color: #ffffff;
    color: #9ca3af;
    border-color: #e5e7eb;
}

.btn-page i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.dark .btn-page {
    background-color: #1e293b;
    color: #cbd5e1;
    border-color: #334155;
}

.dark .btn-page:hover:not(:disabled) {
    background-color: #334155;
    border-color: #64748b;
    color: #f8fafc;
}

.dark .btn-page.bg-primary,
.dark .btn-page.active {
    background-color: #ff7900;
    color: #ffffff;
    border-color: #ff7900;
}

.dark .btn-page.cursor-default {
    background-color: #1e293b;
    color: #64748b;
    border-color: #334155;
}
</style>

