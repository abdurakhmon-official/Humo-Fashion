<template>
    <div>
        <navbar :navMenu="'nav-light'" />
        <section class="relative table w-full py-36 bg-center bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${bg})` }">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-6 text-4xl leading-normal tracking-wider font-semibold text-white">Hello ! <br /> How
                        can we
                        help you?</h3>

                    <div class="text-center subcribe-form mt-4 pt-2">
                        <form class="relative mx-auto max-w-xl">
                            <input type="text" id="help" name="name"
                                class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700"
                                placeholder="Search your questions or topic...">
                            <button type="submit"
                                class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-primary text-white rounded-full">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <NuxtLink to="/">Cartzio</NuxtLink>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                            class="mdi mdi-chevron-right"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                        aria-current="page">Helpcenter</li>
                </ul>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <HelpcenterFindHelpNeed />
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Get Started
                    </h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose
                        confidence, embrace your unique look.</p>
                </div>

                <div class="grid md:grid-cols-2 grid-cols-1 mt-8 gap-6">
                    <div v-for="(item, index) in started" :key="index" class="flex">
                        <i :data-feather="item.icon" class="fea icon-ex-md text-primary me-3"></i>
                        <div class="flex-1">
                            <h5 class="mb-2 text-xl font-semibold">{{ item.name }} <span class="text-primary">{{
                                    item.name2 }}</span> {{ item.name3 }}</h5>
                            <p class="text-slate-400">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <HelpcenterHelpGetInTouch />
        </section>

        <Switcher :switcherBack="true" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
const started = ref([
    {
        icon: 'help-circle',
        name: 'How our',
        name2: 'Cartzio',
        name3: 'work ?',
        desc: 'Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.'
    },
    {
        icon: 'help-circle',
        name: 'What is the main process open account ?',
        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact"
    },
    {
        icon: 'help-circle',
        name: 'How to make unlimited data entry ?',
        desc: 'Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.'
    },
    {
        icon: 'help-circle',
        name: 'Is',
        name2: 'Cartzio',
        name3: 'safer to use with my account ?',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin."
    },
])

import bg from '~/assets/images/hero/pages.jpg'
</script>
