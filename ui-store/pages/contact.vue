<template>
    <div>
        <Navbar :navLight="true" :tagLine="''" :searchMenu2="true" />

        <div class="container-fluid relative mt-27">
            <div class="grid grid-cols-1">
                <div class="w-full border-0 leading-[0]">
                    <ClientOnly>
                        <GoogleMap :api-key="apiKey" :center="center" :zoom="14"
                            class="w-full h-[60vh] rounded-2xl shadow-lg">
                            <Marker :options="{ position: center }" />
                        </GoogleMap>
                    </ClientOnly>
                </div>
            </div>
        </div>
        <GetInTouch />
        <Switcher :switcherBack="true" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'

const apiKey = useRuntimeConfig().public.googleMapsApiKey

const center = {
    lat: 29.70951,
    lng: -95.497398,
}
</script>
