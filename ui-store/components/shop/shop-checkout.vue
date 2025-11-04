<template>
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
                <div class="lg:col-span-8">
                    <div class="p-6 rounded-md shadow dark:shadow-gray-800">
                        <h3 class="text-xl leading-normal font-semibold">Billing address</h3>

                        <form @submit.prevent="handleSubmit">
                            <div class="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                                <div class="lg:col-span-6">
                                    <label class="form-label font-semibold">First Name : <span
                                            class="text-red-600">*</span></label>
                                    <input type="text" v-model="billingInfo.firstName"
                                        class="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                                        placeholder="First Name:" required>
                                </div>

                                <div class="lg:col-span-6">
                                    <label class="form-label font-semibold">Last Name : <span
                                            class="text-red-600">*</span></label>
                                    <input type="text" v-model="billingInfo.lastName"
                                        class="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                                        placeholder="Last Name:" required>
                                </div>

                                <div class="lg:col-span-6">
                                    <label class="form-label font-semibold">Username</label>
                                    <div class="relative mt-2">
                                        <span
                                            class="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded">
                                            <i class="mdi mdi-at"></i>
                                        </span>
                                        <input type="text" v-model="billingInfo.username"
                                            class="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                            placeholder="Username">
                                    </div>
                                </div>

                                <div class="lg:col-span-6">
                                    <label class="form-label font-semibold">Your Email : <span
                                            class="text-red-600">*</span></label>
                                    <input type="email" v-model="billingInfo.email"
                                        class="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                                        placeholder="Email" required>
                                </div>

                                <div class="lg:col-span-12">
                                    <label class="form-label font-semibold">Address : <span
                                            class="text-red-600">*</span></label>
                                    <input type="text" v-model="billingInfo.address"
                                        class="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                                        placeholder="Address:" required>
                                </div>

                                <div class="lg:col-span-4">
                                    <label class="font-semibold">Country:</label>
                                    <select v-model="billingInfo.country"
                                        class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                                        <option value="USA">USA</option>
                                        <option value="CAD">Canada</option>
                                    </select>
                                </div>

                                <div class="lg:col-span-4">
                                    <label class="font-semibold">State:</label>
                                    <select v-model="billingInfo.state"
                                        class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                                        <option value="CAL">California</option>
                                        <option value="TEX">Texas</option>
                                        <option value="FLOR">Florida</option>
                                    </select>
                                </div>

                                <div class="lg:col-span-4">
                                    <label class="form-label font-semibold">Zip Code : <span
                                            class="text-red-600">*</span></label>
                                    <input type="text" v-model="billingInfo.zipCode"
                                        class="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                                        placeholder="Zip:" required>
                                </div>
                            </div>

                            <h3 class="text-xl leading-normal font-semibold mt-6">Payment</h3>

                            <div class="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                                <div class="lg:col-span-12">
                                    <div class="block">
                                        <label class="inline-flex items-center">
                                            <input type="radio" v-model="paymentMethod" value="card"
                                                class="form-radio border-gray-100 dark:border-gray-800 text-primary focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50 me-2">
                                            <span class="text-slate-400">Credit/Debit Card</span>
                                        </label>
                                    </div>

                                    <div class="block mt-2">
                                        <label class="inline-flex items-center">
                                            <input type="radio" v-model="paymentMethod" value="cash"
                                                class="form-radio border-gray-100 dark:border-gray-800 text-primary focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50 me-2">
                                            <span class="text-slate-400">Cash</span>
                                        </label>
                                    </div>
                                </div>

                                <template v-if="paymentMethod === 'card'">
                                    <div class="lg:col-span-12">
                                        <div id="card-element"
                                            class="w-full py-3 px-3 bg-transparent dark:bg-slate-900 rounded border border-gray-100 dark:border-gray-800">
                                        </div>
                                        <div id="card-errors" class="text-red-600 text-sm mt-2"></div>
                                    </div>
                                </template>
                            </div>

                            <div class="mt-4">
                                <button type="submit" :disabled="loading"
                                    class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md w-full disabled:opacity-50">
                                    {{ loading ? 'Processing...' : 'Complete Order' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="lg:col-span-4">
                    <div class="p-6 rounded-md shadow dark:shadow-gray-800">
                        <div class="flex justify-between items-center">
                            <h5 class="text-lg font-semibold">Your Cart</h5>
                            <NuxtLink
                                class="bg-primary flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5">
                                {{ totalItems }}
                            </NuxtLink>
                        </div>

                        <div class="mt-4 rounded-md shadow dark:shadow-gray-800">
                            <div v-for="(item, index) in cart.items" :key="index">
                                <NuxtLink :to="`/product/${item.productId}`"
                                    class="p-3 flex justify-between items-center">
                                    <div>
                                        <h5 class="font-semibold">{{ item.itemName }}</h5>
                                        <p class="text-sm text-slate-400">Qty: {{ item.quantity }}</p>
                                    </div>
                                    <p class="text-slate-400 font-semibold">${{ (item.price * item.quantity /
                                        100).toFixed(2) }}</p>
                                </NuxtLink>
                            </div>
                            <div
                                class="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                                <div>
                                    <h5 class="font-semibold">Total (USD)</h5>
                                </div>
                                <p class="font-semibold">${{ (totalPrice / 100).toFixed(2) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { loadStripe, type Stripe, type StripeElements } from '@stripe/stripe-js'
import { useService } from '~/composable/userServices'

const config = useRuntimeConfig()
const cart = useCart()

const {$toast} = useNuxtApp()
const router = useRouter()
const services = useService()

const loading = ref(false)
const paymentMethod = ref('card')

const billingInfo = ref({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    address: '',
    country: 'USA',
    state: 'CAL',
    zipCode: ''
})

const stripeKey = config.public.stripePublishableKey

const { totalItems, totalPrice } = storeToRefs(cart)

let stripe: Stripe | null = null
let elements: StripeElements | null = null
let cardElement: any = null

onMounted(async () => {
    stripe = await loadStripe(stripeKey)
    if (stripe) {
        elements = stripe.elements()
        cardElement = elements.create('card', {
            style: {
                base: {
                    fontSize: '16px',
                    color: '#32325d'
                }
            }
        })
        cardElement.mount('#card-element')

        cardElement.on('change', (event: any) => {
            const displayError = document.getElementById('card-errors')
            if (displayError) {
                displayError.textContent = event.error ? event.error.message : ''
            }
        })
    }
})

const handleSubmit = async () => {
    if (cart.isEmpty) {
        $toast.error('Your cart is empty!')
        return
    }

    loading.value = true

    try {
        const orderResponse = await services.$order.createOrder()

        if (!orderResponse) {
            throw new Error('Failed to create order')
        }

        const { orderNumber } = orderResponse.data

        const paymentResponse = await services.$payment.createPayment(orderNumber)

        if (!paymentResponse.data.secret) {
            throw new Error('Failed to initialize payment')
        }

        if (paymentMethod.value === 'card' && stripe && cardElement) {
            const { error, paymentIntent } = await stripe.confirmCardPayment(paymentResponse.data.secret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: `${billingInfo.value.firstName} ${billingInfo.value.lastName}`,
                        email: billingInfo.value.email,
                        address: {
                            line1: billingInfo.value.address,
                            state: billingInfo.value.state,
                            postal_code: billingInfo.value.zipCode,
                            country: billingInfo.value.country
                        }
                    }
                }
            })

            if (error) {
                throw new Error(error.message)
            }

            // verify payment
            if (paymentIntent && paymentIntent.id) {
                await services.$payment.verifyPayment(paymentIntent.id)
                router.push(`/order-success?orderNumber=${orderNumber}`)
                $toast.success('Payment successful!')

            }
        } else if (paymentMethod.value === 'cash') {
            await services.$payment.markCashPayment(orderNumber)
            router.push(`/order-success?orderNumber=${orderNumber}`)
            $toast.success("Order placed! Pay with cash on delivery.")
        }   

        await cart.loadCart()


    } catch (error: any) {
        $toast.error(error.message || 'Payment failed')
    } finally {
        loading.value = false
    }
}

</script>