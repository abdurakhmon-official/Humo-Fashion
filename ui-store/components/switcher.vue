<template>
    <div>
        <div class="fixed top-1/4 -left-2 z-50">
            <span class="relative inline-block rotate-90">
                <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" @change="changeMode($event)">
                <label
                    class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
                    for="chk">
                    <i data-feather="moon" class="w-[18px] h-[18px] text-yellow-500"></i>
                    <i data-feather="sun" class="w-[18px] h-[18px] text-yellow-500"></i>
                    <span
                        class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
                </label>
            </span>
        </div>

        <div class="fixed top-[40%] -left-3 z-50">
            <NuxtLink :to="[]" id="switchRtl">
                <span
                    class="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden"
                    @click="changeThem($event)">LTR</span>
                <span
                    class="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden"
                    @click="changeThem($event)">RTL</span>
            </NuxtLink>
        </div>

        <NuxtLink :to="[]" v-if="switcherBack" @click="scrollToTop" v-show="showTopButton" id="back-to-top"
            class="fixed cursor-pointer text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary text-white leading-9">
            <i class="mdi mdi-arrow-up"></i></NuxtLink>

        <div v-else class="fixed bottom-3 end-3">
            <NuxtLink to="/"
                class="back-button cursor-pointer size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-primary hover:bg-primary-600 border-primary hover:border-primary-600 text-white rounded-full">
                <i data-feather="arrow-left" class="h-4 w-4"></i></NuxtLink>
        </div>
    </div>
</template>

<script setup>
import feather from 'feather-icons'

defineProps({
    switcherBack: Boolean,
})

const htmlTag = ref()
const showTopButton = ref(false)

onMounted(() => {
    feather.replace();
    htmlTag.value = document.getElementsByTagName("html")[0]
    window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})

const handleScroll = () => {
    if (
        document.body.scrollTop >= 400 ||
        document.documentElement.scrollTop >= 400
    ) {
        showTopButton.value = true
    } else {
        showTopButton.value = false
    }
}

const changeThem = () => {
    if (event.target.innerText === "LTR") {
        htmlTag.value.dir = "ltr"
    }
    else {
        htmlTag.value.dir = "rtl"
    }
}

const changeMode = () => {
    if (htmlTag.value.className.includes("dark")) {
        htmlTag.value.className = 'light'
    } else {
        htmlTag.value.className = 'dark'
    }
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>

<style scoped>
.invisible {
    visibility: hidden;
}
</style>