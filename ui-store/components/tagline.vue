<template>
    <div class="tagline" :class="tagLineBg">
        <div class="container relative">
            <div class="grid grid-cols-1">
                <div class="text-center">
                    <h6 class=" font-medium" :class="fontColor">Refer a friend & get $50 in credits each 🎉</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    tagLineBg: String,
    fontColor: String
})
</script>