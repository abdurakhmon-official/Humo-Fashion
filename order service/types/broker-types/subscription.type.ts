export enum OrderEvent {
    CREATE_ORDER = 'create_order',
    CANCEL_ORDER = 'cancel_order'
}

export enum PaymentEvent {
    UPDATE_PAYMENT = 'update_payment'
}

export enum OrderStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
    FAILED = 'FAILED'
}

export type TOPIC_TYPE = 'OrderEvents' | "CatalogEvents" | 'PaymentEvents'

export interface MessageType {
    headers?: Record<string, any>
    event: OrderEvent | PaymentEvent
    data: Record<string, any>
}