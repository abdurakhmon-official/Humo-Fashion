<template>
    <div id="accordion-collapseone" class="mt-6">
        <div v-for="(item, index) in datas" :key="index"
            class="relative mt-4 shadow dark:shadow-gray-800 rounded-md overflow-hidden">
            <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                <button type="button" @click="handleclick(item.id)"
                    :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-primary' : ''"
                    class="flex justify-between items-center p-5 w-full font-medium text-start">
                    <span>{{ item.title }}</span>
                    <svg data-accordion-icon :class="item.id === activeIndex ? 'rotate-180' : ''"
                        class="size-4  shrink-0" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1 414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </h2>
            <div :class="item.id === activeIndex ? '' : 'hidden'">
                <div class="p-5">
                    <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const activeIndex = ref(1)

const datas = ref([
    {
        id: 1,
        title: 'How does it work ?',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id: 2,
        title: 'Do I need a designer to use Cartzio ?',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id: 3,
        title: 'What do I need to do to start selling ?',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id: 4,
        title: 'What happens when I receive an order ?',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
])

const handleclick = (id: any) => {
    activeIndex.value = id
}

</script>
