<template>
    <div>
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Find The Help You Need
            </h3>
            <p class="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose confidence,
                embrace your unique look.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
            <div v-for="(item, index) in helps" :key="index" class="text-center px-6 mt-6">
                <div
                    class="w-20 h-20 bg-primary/5 text-primary rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                    <i :data-feather="item.icon" class="size-[30px]"></i>
                </div>

                <div class="content mt-7">
                    <a :href="item.path" class="title h5 text-lg font-medium hover:text-primary">{{ item.name }}</a>
                    <p class="text-slate-400 mt-3">{{ item.desc }}</p>

                    <div class="mt-5">
                        <a :href="item.path" class="text-primary">{{ item.button }} <i
                                class="mdi mdi-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const helps = ref([
    {
        icon: 'help-circle',
        name: 'FAQs',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        path: '/help-center/faqs',
        button: 'Read More'
    },
    {
        icon: 'bookmark',
        name: 'Guides / Support',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        path: '/help-center/guides',
        button: 'Read More'
    },
    {
        icon: 'settings',
        name: 'Support Request',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        path: '/help-center/support',
        button: 'Read More'
    }
])
</script>
