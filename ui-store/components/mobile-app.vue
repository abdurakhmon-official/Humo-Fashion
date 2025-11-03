<template>
    <div class="container relative">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center">
            <div class="lg:col-span-5 md:col-span-6">
                <img :src="envelop" class="mx-auto d-block" alt="" />
            </div>

            <div class="lg:col-span-7 md:col-span-6">
                <span class="bg-primary/5 text-primary text-xs font-bold px-2.5 py-0.5 rounded h-5">Mobile Apps</span>
                <h4 class="font-semibold text-3xl leading-normal my-4">Available for your <br /> Smartphones</h4>
                <p class="text-slate-400 max-w-xl mb-0">Upgrade your style with our curated sets. Choose confidence,
                    embrace your unique look.</p>
                <div class="my-5">
                    <NuxtLink to="[]"><img :src="app" class="m-1 inline-block" alt="" /></NuxtLink>

                    <NuxtLink to="[]"><img :src="playstore" class="m-1 inline-block" alt="" /></NuxtLink>
                </div>

                <div class="inline-block">
                    <div class="pt-4 flex items-center border-t border-gray-100 dark:border-gray-800">
                        <i data-feather="smartphone" class="me-2 text-primary h-10 w-10"></i>
                        <div class="content">
                            <h6 class="text-base font-medium">Install app now on your cellphones</h6>
                            <NuxtLink to="[]" class="text-primary">Learn More <i class="mdi mdi-arrow-right"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import envelop from '~/assets/images/envelope.svg'
import app from '~/assets/images/app.png'
import playstore from '~/assets/images/playstore.png'
</script>