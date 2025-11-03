<template>
    <div style="margin: 24px auto;">
        <table cellpadding="0" cellspacing="0"
            style="font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 400; width: 600px; border: none; margin: 0 auto; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);">
            <thead style="display: block; padding: 32px 0 16px 0; text-align: center;">
                <tr style="display: block;">
                    <th scope="col" style="display: flex; justify-content: center; align-items: center;">
                        <NuxtLink to="/" style="display: inline-flex; justify-content: center; align-items: center;">
                            <img :src="logo" alt="Humo Logo" width="200" height="200"
                                class="transition transform -translate-y-20" style="display: block; margin: 0 auto;" />
                        </NuxtLink>
                    </th>
                </tr>
            </thead>

            <tbody class="transition transform -translate-y-20">
                <tr>
                    <td style="background-color: #f8fafc; padding: 24px 32px; text-align: center;">
                        <h2 style="font-weight: 600; font-size: 24px; margin: 0;">Humo Shopcart</h2>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 16px; color: #161c2d;">
                        <p style="margin: 0; font-size: 18px; font-weight: 500;">Hello, {{ user?.username }}!</p>
                        <p style="margin: 12px 0 0; color: #94a3b8;">
                            Please check your bag and click on checkout button for payments.
                        </p>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 16px;">
                        <table
                            style="width: 100%; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15); border-radius: 6px; background-color: #fff;">
                            <thead style="text-transform: uppercase; background-color: #f8fafc;">
                                <tr>
                                    <th style="text-align: left; padding: 10px 16px;">Product</th>
                                    <th style="text-align: center; padding: 10px 16px;">Price</th>
                                    <th style="text-align: center; padding: 10px 16px;">Quantity</th>
                                    <th style="text-align: right; padding: 10px 16px;">Total($)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="(item, index) in cart.items" :key="index">
                                    <td style="padding: 16px;">
                                        <span style="display: flex; align-items: center;">
                                            <img :src="shirt"
                                                style="width: 48px; border-radius: 6px; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);"
                                                alt="" />
                                            <span style="margin-left: 8px; font-weight: 500;">{{ item.itemName }}</span>
                                        </span>
                                    </td>
                                    <td style="text-align: center; padding: 16px;">{{ item.price }}</td>
                                    <td style="text-align: center; padding: 16px;">{{ item.quantity }}</td>
                                    <td style="text-align: right; padding: 16px;">{{ item.price * item.quantity }}$</td>
                                    <td style="text-align: right; padding: 16px;">
                                        <button @click.prevent="cart.removeFromCart(item.id)"
                                            style="color: red; font-weight: 600; border: none; background: none; cursor: pointer;">
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 0 16px;">
                        <table
                            style="width: 240px; margin-left: auto; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15); border-radius: 6px;">
                            <tbody>
                                <tr>
                                    <td style="padding: 16px;">
                                        <table style="width: 100%;">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style="display: flex; justify-content: space-between; padding: 10px 0; border-top: 1px solid #f3f4f6;">
                                                        <span style="font-weight: 600;">Total :</span>
                                                        <span style="font-weight: 600;">{{ cart.totalPrice }}$</span>
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
                    <td style="text-align: right; padding: 16px;">
                        <NuxtLink to="/checkout"
                            style="padding: 8px 20px; font-size: 15px; text-decoration: none; font-weight: 500; border-radius: 6px; background-color: #f97316; border: 1px solid #f97316; color: #fff; display: inline-block;">
                            Checkout
                        </NuxtLink>
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
import shirt from '~/assets/images/shop/black-print-t-shirt.jpg'
import logo from '../assets/images/logo-white-humo.png'

const cart = useCart()
const auth = useAuth()
const { user } = storeToRefs(auth)
</script>
