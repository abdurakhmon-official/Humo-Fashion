export type PaymentGateway = {
    createPayment: (
        amount: number,
        metadata: {orderNumber: string, userId: string}
    ) => Promise<{secret: string, pubKey: string, amount: number}>
    getPayment: (paymentId: string) => Promise<Record<string, unknown>>
}