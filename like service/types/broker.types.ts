export enum LikeEvent {
  PRODUCT_LIKED = "product_liked",
  PRODUCT_UNLIKED = "product_unliked",
}

export type TOPIC_TYPE = "LikeEvents" | "CatalogEvents" | "OrderEvents";

export interface MessageType {
  headers?: Record<string, any>;
  event: LikeEvent;
  data: Record<string, any>;
}

export interface LikeData {
  likeId: string;
  userId: string;
  productId: string;
  createdAt: string;
}
