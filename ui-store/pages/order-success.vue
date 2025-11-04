<template>
    <div style="margin: 24px auto;">
        <div v-if="loading" class="text-center py-16">
            <p class="text-lg">Loading order details...</p>
        </div>

        <div v-else-if="error" class="text-center py-16">
            <p class="text-red-600 text-lg">{{ error }}</p>
            <NuxtLink to="/" class="text-primary underline mt-4 inline-block">Go to Home</NuxtLink>
        </div>

        <table v-else cellpadding="0" cellspacing="0"
            style="font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 400; width: 600px; border: none; margin: 0 auto; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);">
            <thead style="padding: 16px; display: block;">
                <tr style="display: block; border: none; text-align: center; font-size: 24px; letter-spacing: 1px;">
                    <th scope="col" style="margin: auto; display: block;">
                        <NuxtLink to="/" style="display: flex;justify-content: center;">
                            <img :src="logo" alt="Logo" width="400" height="400">
                        </NuxtLink>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td style="justify-content: center; text-align: center; border-top: 1px solid #f3f4f6;">
                        <NuxtLink to="/"
                            style="text-decoration: none; padding: 16px; display: inline-block; font-weight: 600; color: #161c2d; text-transform: uppercase; font-size: 14px;">
                            Home</NuxtLink>
                        <NuxtLink to="/shop-cart"
                            style="text-decoration: none; padding: 16px; display: inline-block; font-weight: 600; color: #161c2d; text-transform: uppercase; font-size: 14px;">
                            Cart</NuxtLink>
                        <NuxtLink to="/sale"
                            style="text-decoration: none; padding: 16px; display: inline-block; font-weight: 600; color: #161c2d; text-transform: uppercase; font-size: 14px;">
                            Sale</NuxtLink>
                        <NuxtLink to="/contact"
                            style="text-decoration: none; padding: 16px; display: inline-block; font-weight: 600; color: #161c2d; text-transform: uppercase; font-size: 14px;">
                            Contact</NuxtLink>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 24px 16px; background: #f8fafc; align-items: center; text-align: center">
                        <img :src="success" width="200px" alt="Success" style="display: block; margin: 0 auto;">
                        <h1 style="font-weight: 600; margin: 16px 0 0; font-size: 32px;">Thank you!</h1>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 16px 16px 0; color: #161c2d;">
                        <p style="margin: 0; font-size: 18px; font-weight: 500;">Hello, {{ customerName }}!</p>
                        <p style="margin-bottom: 0;margin-top: 16px; color: #94a3b8;">Thank you for your order.
                            Payment is processed successfully and your order is on the way. Please check your order via
                            <span style="font-weight: 500; color: #161c2d;">Transaction ID: {{ order.orderNumber
                                }}</span>
                        </p>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 16px;">
                        <table
                            style="width: 100%; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15); border-radius: 6px; background-color: #fff;">
                            <thead style="text-transform: uppercase; background-color: #f8fafc;">
                                <tr>
                                    <th scope="col" style="text-align: left; padding: 10px 16px; border: none;">Product
                                    </th>
                                    <th scope="col" style="padding: 10px 16px; border: none;">Price</th>
                                    <th scope="col" style="padding: 10px 16px; border: none;">Qty</th>
                                    <th scope="col" style="text-align: right; padding: 10px 16px; border: none;">
                                        Total($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in order.orderItems" :key="item.id">
                                    <td style="padding: 16px;">
                                        <span style="display: flex; align-items: center;">
                                            <img v-if="item.product?.files?.[0]?.file" :src="item.product.files[0].file"
                                                style="width: 48px; height: 48px; object-fit: cover; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15); border-radius: 6px;"
                                                alt="">
                                            <span style="margin-left: 8px;">
                                                <span style="font-weight: 500;">{{ item.itemName }}</span>
                                            </span>
                                        </span>
                                    </td>
                                    <td style="text-align: center; padding: 16px;">${{ (parseFloat(item.price) /
                                        100).toFixed(2) }}</td>
                                    <td style="text-align: center; padding: 16px;">{{ item.quantity }}</td>
                                    <td style="text-align: right; padding: 16px;">${{ (parseFloat(item.price) *
                                        item.quantity / 100).toFixed(2) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 0 16px 16px;">
                        <table
                            style="width: 240px; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15); border-radius: 6px; margin-left: auto;">
                            <tbody>
                                <tr>
                                    <td style="text-align: right; padding: 16px;">
                                        <table style="width: 100%;">
                                            <tbody>
                                                <tr style="list-style: none; padding: 0; margin: 0;">
                                                    <td
                                                        style="display: flex; justify-content: space-between; padding: 0 0 10px;">
                                                        <span style="font-weight: 500;">Total :</span>
                                                        <span style="color: #94a3b8;">${{ subtotal }}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                <tr>
                    <FooterEmail />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import logo from '../assets/images/logo-humo-black.png'
import success from '../assets/images/order-success.svg'
import { useService } from '~/composable/userServices'

const route = useRoute()
const services = useService()
const auth = useAuth()

const {user} = storeToRefs(auth)

const loading = ref(true)
const error = ref('')
const order = ref<any>(null)

const customerName = computed(() => {
    return user.value?.firstName || 'Customer'
})

const subtotal = computed(() => {
    if (!order.value?.orderItems) return '0.00'
    const sum = order.value.orderItems.reduce((acc: number, item: any) => {
        return acc + (parseFloat(item.price) * item.quantit)
    }, 0)

    return (sum / 100).toFixed(2)
})

onMounted(async () => {
    try {
        const orderNumber = route.query.orderNumber as string

        if (!orderNumber) {
            error.value = 'Order number not found'
            loading.value = false
            return
        }

        const response = await services.$order.getOrderByNumber(orderNumber)

        if (response && response.data) {
            order.value = response.data.order

            const productIds = order.value.orderItems.map((item: any) => item.productId)
            const {data} = await services.$product.getProducts(productIds)

            if (data && data.products) {
                order.value.orderItems = order.value.orderItems.map((i: any) => {
                    const product = data.products.find((p: any) => p.id === i.id)
                    return {
                        ...i,
                        product
                    }
                })
            } else {
                error.value = 'Order not found'
            }


        }
    } catch (error: any) {
        error.value = error.message || ' Failed to load order details'
        console.error('Error loading order: ', error.message)
    } finally {
        loading.value = false
    }
})

</script>
