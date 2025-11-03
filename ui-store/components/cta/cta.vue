<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1">
            <div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800 py-20 px-4 md:px-10 bg-primary bg-no-repeat bg-cover"
                :style="{ backgroundImage: `url(${bg1})` }">
                <div class="absolute inset-0 bg-center bg-no-repeat bg-cover"
                    :style="{ backgroundImage: `url(${shape})` }"></div>
                <div class="grid md:grid-cols-2 grid-cols-1 items-end gap-6 relative z-1">
                    <h3 class="text-4xl leading-normal tracking-wide font-bold text-white">Sale Outlet <br /> Up to 75%
                        Off</h3>
                    <div class="md:text-end">
                        <NuxtLink to="/sale"
                            class="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-primary rounded-md">
                            Offer Grab Now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import bg1 from '../../assets/images/hero/bg2.png'
import shape from '../../assets/images/hero/bg-shape.png'
</script>