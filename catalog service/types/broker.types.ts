export enum CatalogEvent {
  CREATE_ORDER = "create_order",
  CANCEL_ORDER = "cancel_order",
  PRODUCT_LIKED = "product_liked",
  PRODUCT_UNLIKED = "product_unliked",
}


export type TOPIC_TYPE = 'OrderEvents' | 'CatalogEvents' | 'LikeEvents'

export interface MessageType {
    headers?: Record<string, any>
    event: CatalogEvent
    data: Record<string, any>
}

export enum OrderStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled'
}
