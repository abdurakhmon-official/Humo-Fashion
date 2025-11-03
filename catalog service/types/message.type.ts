export type OrderLineItemType = {
    id: string
    productId: string
    quantity: number
}

export interface OrderWithLineItems {
    id?: string
    orderNumber: string
    orderItems: OrderLineItemType[]
}