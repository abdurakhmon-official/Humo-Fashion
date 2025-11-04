import type { CartLineItemInput } from "~/types/order-input/CartLineItemInput";
import { BaseService } from "./base.service";
import type { CartWithLineItemsInput } from "~/types/order-input/CartWithLineItemsInput";
import type { CreateCartInput } from "~/types/order-input/CreateCartInput";
import type { OrderWithLineItemsInput } from "~/types/order-input/OrderWithLineItemsInput";

export class OrderService extends BaseService<any> {
    protected override BASE_PATH: string = 'orders'

    constructor() {
        const { $orderApi } = useNuxtApp()
        super($orderApi)
    }

    async createOrder() {
        return await this.sendPost<{
            message: string,
            orderNumber: string
        }>('/', {})
    }

    async getOrders() {
        return await this.sendGet<any[]>('/')
    }

    async getOrder(orderId: string) {
        return await this.sendGet<any>(`/${orderId}`)
    }

    async getOrderByNumber(orderNumber: string) {
        return await this.sendGet<{
            order: OrderWithLineItemsInput
        }>(`/by-number/${orderNumber}`)
    }
}