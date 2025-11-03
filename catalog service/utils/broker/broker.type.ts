import { CatalogEvent, MessageType, TOPIC_TYPE } from "../../types"

export interface PublishType {
    headers: Record<string, any>
    topic: TOPIC_TYPE,
    event: CatalogEvent,
    message: Record<string, any>
}

export type MessageHandler = (input: MessageType) => void

export interface MesssageBrokerType {
  connectProducer: <T>() => Promise<T>;
  disconnectProducer: () => Promise<void>;
  publish: (data: PublishType) => Promise<boolean>;
  connectConsumer: <T>() => Promise<T>;
  disconnectConsumer: () => Promise<void>;
  subscribe: (messageHandler: MessageHandler, topic: TOPIC_TYPE) => Promise<void>;
  subscribeMultiple: (messageHandler: MessageHandler, topics: string[]) => Promise<void>; 
}