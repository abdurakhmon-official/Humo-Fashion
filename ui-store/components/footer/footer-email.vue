<template>
    <td style="padding: 16px 8px; color: #fff; background-color: #161c2d; text-align: center;">
        <table style="width: 100%;">
            <tbody>
                <tr>
                    <td style="display: inline-flex; align-items: center; margin: 0px 10px 10px;">
                        <span style="font-size: 14px;">Free delivery</span>
                    </td>
                    <td style="display: inline-flex; align-items: center; margin: 0px 10px 10px;">
                        <span style="font-size: 14px;">Money-back quarantee</span>
                    </td>
                    <td style="display: inline-flex; align-items: center; margin: 0px 10px 10px;">
                        <span style="font-size: 14px;">Secure payments</span>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">
                        <p style="margin: 4px 0px 10px;">© {{ date }} Cartzio. Designed by
                            <a href="https://shreethemes.in/" target="_blank"
                                style="text-decoration: none; color: #fff;">Shreethemes</a>.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">
                        <NuxtLink to="/email-confirmation" target="_blank" style="color: #ea580c;">Unsubscribe
                        </NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</template>

<script setup lang="ts">
const date = ref(new Date().getFullYear())
</script>
