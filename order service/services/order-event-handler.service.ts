// order-event-handler.service.ts
import { Injectable } from "@tsed/di";
import { MessageType } from "../types/broker-types";

@Injectable()
export class OrderEventHandlerService {
  async HandleSubscription(message: MessageType) {
    console.log("Message received by order Kafka consumer", message);
    // Add your subscription handling logic here
  }
}
