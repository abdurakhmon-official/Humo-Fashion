<template>
    <div>
        <Navbar :navLight=true :searchMenu2=true />
        <section class="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3 class="text-3xl leading-normal font-semibold">Privacy Policy</h3>
                </div>
            </div>

            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-primary">
                        <NuxtLink to="/">Cartzio</NuxtLink>
                    </li>
                    <li
                        class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="mdi mdi-chevron-right"></i>
                    </li>
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-primary">
                        <NuxtLink to="[]">Utility</NuxtLink>
                    </li>
                    <li
                        class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="mdi mdi-chevron-right"></i>
                    </li>
                    <li class="inline-block uppercase text-[13px] font-bold text-primary" aria-current="page">Privacy
                    </li>
                </ul>
            </div>
        </section>
        <UtilityPrivacy />
        <Switcher :switcherBack="true" />
        <Footer />
    </div>
</template>

<script setup lang="ts">

</script>
