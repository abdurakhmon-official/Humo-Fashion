<template>
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="md:flex justify-center">
                <div class="md:w-3/4">
                    <div class="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                        <h5 class="text-xl font-semibold mb-4">Introduction :</h5>
                        <p class="text-slate-400">It seems that only fragments of the original text remain in the Lorem
                            Ipsum texts used today. One may speculate that over the course of time certain letters were
                            added or deleted at various positions within the text.</p>

                        <h5 class="text-xl font-semibold mb-4 mt-8">User Agreements :</h5>
                        <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to
                            have <b class="text-red-600">originated</b> in the 16th century. Lorem Ipsum is <b
                                class="text-red-600">composed</b> in a pseudo-Latin language which more or less <b
                                class="text-red-600">corresponds</b> to 'proper' Latin. It contains a series of real
                            Latin words. This ancient dummy text is also <b class="text-red-600">incomprehensible</b>,
                            but it imitates the rhythm of most European languages in Latin script. The <b
                                class="text-red-600">advantage</b> of its Latin origin and the relative <b
                                class="text-red-600">meaninglessness</b> of Lorum Ipsum is that the text does not
                            attract attention to itself or distract the viewer's <b class="text-red-600">attention</b>
                            from the layout.</p>
                        <p class="text-slate-400 mt-3">There is now an <b class="text-red-600">abundance</b> of readable
                            dummy texts. These are usually used when a text is <b class="text-red-600">required
                                purely</b> to fill a space. These alternatives to the classic Lorem Ipsum texts are
                            often amusing and tell short, funny or <b class="text-red-600">nonsensical</b> stories.</p>
                        <p class="text-slate-400 mt-3">It seems that only <b class="text-red-600">fragments</b> of the
                            original text remain in the Lorem Ipsum texts used today. One may speculate that over the
                            course of time certain letters were added or deleted at various positions within the text.
                        </p>

                        <h5 class="text-xl font-semibold mb-4 mt-8">Restrictions :</h5>
                        <p class="text-slate-400">You are specifically restricted from all of the following :</p>
                        <ul class="list-none text-slate-400 mt-3">
                            <li v-for="(item, index) in privacyData" :key="index" class="flex mt-2"><i
                                    class="mdi mdi-chevron-right text-primary text-lg align-middle me-2"></i>{{ item }}
                            </li>
                        </ul>

                        <h5 class="text-xl font-semibold mt-8">Users Question & Answer :</h5>

                        <div id="accordion-collapsefour" data-accordion="collapse" class="mt-6">
                            <div v-for="item in data" :key="item"
                                class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 class="text-base font-semibold" id="accordion-collapse-heading-13">
                                    <button type="button" @click="handleclick(item.id)"
                                        :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-primary' : ''"
                                        class="flex justify-between items-center p-5 w-full font-medium text-start">
                                        <span>{{ item.title }}</span>
                                        <svg data-accordion-icon class="size-4  shrink-0"
                                            :class="item.id === activeIndex ? 'rotate-180' : ''" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-13" class=""
                                    :class="item.id === activeIndex ? '' : 'hidden'">
                                    <div class="p-5">
                                        <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6">
                            <NuxtLink :to="[]"
                                class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-primary hover:bg-primary-600 border-primary hover:border-primary-600 text-white rounded-md">
                                Accept</NuxtLink>
                            <NuxtLink :to="[]"
                                class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-primary border-primary text-primary hover:text-white rounded-md ms-2">
                                Decline</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const activeIndex = ref(1)

const privacyData = ref([
    "Digital Marketing Solutions for Tomorrow",
    "Our Talented & Experienced Marketing Agency",
    "Create your own skin to match your brand",
    "Digital Marketing Solutions for Tomorrow",
    "Our Talented & Experienced Marketing Agency",
    "Create your own skin to match your brand",
])

const data = ref([
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

const handleclick = (id) => {
    activeIndex.value = id
}
</script>