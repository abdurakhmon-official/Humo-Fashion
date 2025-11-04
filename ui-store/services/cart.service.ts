import type { CreateCartInput } from "~/types/order-input/CreateCartInput";
import { BaseService } from "./base.service";

export class CartService extends BaseService<any> {
    protected override BASE_PATH: string = 'cart'

    constructor() {
        const { $orderApi} = useNuxtApp()
        super($orderApi)
    }

    async getCart() {
        return await this.sendGet('/')
    }

    async createCart(input: CreateCartInput) {
        return await this.sendPost<{
            success: boolean,
            data: string
        }>('/', input)
    }

    async updateCart(lineItemId: string, quantity: number) {
        return await this.sendPatch(`/${lineItemId}`, {quantity})
    }

    async removeFromCart(lineItemId: string) {
        return await this.sendDelete<{
            success: boolean
        }>(`/${lineItemId}`)
    }
}