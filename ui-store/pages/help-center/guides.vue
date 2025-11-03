<template>
    <div>
        <Navbar :navMenu="'nav-light'" />
        <section class="relative table w-full py-36 bg-center bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${bg})` }">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="text-4xl leading-normal tracking-wider font-semibold text-white">Guides & Support</h3>
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
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <NuxtLink to="/helpcenter">Helpcenter</NuxtLink>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                            class="mdi mdi-chevron-right"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                        aria-current="page">Guides</li>
                </ul>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <div v-for="(item, index) in guidesData" :key="index" class="">
                        <h5 class="font-semibold text-xl mb-4">{{ item.title }}</h5>
                        <ul v-for="features in item.features" :key="features" class="list-none mt-2">
                            <li class="mt-2">
                                <NuxtLink to="[]" class="text-slate-400"><i
                                        class="mdi mdi-arrow-right text-primary me-2"></i>{{ features }}</NuxtLink>
                            </li>
                        </ul>
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
import bg from '~/assets/images/hero/pages.jpg'

const guidesData = ref([
    {
        title: 'Getting started',
        features: [
            'Deciding to purchase', 'List your space', 'Landing an experience or adventure', 'Top uses questions'
        ]
    },
    {
        title: 'Your calendar',
        features: [
            'Pricing & availability', 'Booking settings', 'Responding to enquiries & requests', 'Snoozing or deactivating your listing'
        ]
    },
    {
        title: 'Your listings',
        features: [
            'Updating your listing', 'Neighbourhoods', 'Listing photos & photography', 'Cartzio Plus', 'API-connected software'
        ]
    },
    {
        title: 'How payouts work',
        features: [
            'Getting paid', 'Adding payout info', 'Your payout status', 'Donations', 'Taxes'
        ]
    },
    {
        title: 'Your reservations',
        features: [
            'Cartzio safely', 'Cartzio Experiences and Adventures', 'Changing a reservation', 'Cancelling a reservation', 'Long-term reservations'
        ]
    },
    {
        title: 'Reservation help',
        features: [
            'Help with a reservation or guest', 'Guest cancellations'
        ]
    },
    {
        title: 'Your account',
        features: [
            'Your profile', 'Account security', 'Identification & verifications', 'Reviews', 'Superhost status'
        ]
    }
])
</script>
