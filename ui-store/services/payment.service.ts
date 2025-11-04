import { BaseService } from "./base.service";

export class PaymentService extends BaseService<any> {
    protected override BASE_PATH: string = 'payment'

    constructor() {
        const {$paymentApi } = useNuxtApp()
        super($paymentApi)
    }

    async createPayment(orderNumber: string) {
        return await this.sendPost<{
            secret: string,
            pubKey: string,
            amount: number,
            order: any
        }>(`/create-payment`, {orderNumber})
    }

    async verifyPayment(paymentId: string) {
        return await this.sendGet<{
            message: string,
            status: string,
            paymentLog: any
        }>(`/verify-payment${paymentId}`)
    }

    async markCashPayment(orderNumber: string) {
        return await this.sendPost<{
            message: string,
            status: string,
            paymentLog: any
        }>(`/cash-payment`, {orderNumber})
    }
}