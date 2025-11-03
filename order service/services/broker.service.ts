import { Inject, Injectable } from "@tsed/di";
import { MessageBroker } from "@/utils/broker/message-broker";
import { Consumer, Producer } from "kafkajs";
import { OrderEvent, TOPIC_TYPE } from "@/types/broker-types";
import { OrderEventHandlerService } from "./order-event-handler.service";

@Injectable()
export class BrokerService {
  @Inject()
  private orderEventHandlerService!: OrderEventHandlerService;

  async InitializeBroker(): Promise<void> {
    const handleSubscription = this.orderEventHandlerService.HandleSubscription.bind(this.orderEventHandlerService);

    const producer = await MessageBroker.connectProducer<Producer>();
    producer.on("producer.connect", async () => {
      console.log("Order Service Producer connected successfully");
    });

    const consumer = await MessageBroker.connectConsumer<Consumer>();
    consumer.on("consumer.connect", async () => {
      console.log("Order Service Consumer connected successfully");
    });

    await MessageBroker.subscribe(handleSubscription, "OrderEvents" as TOPIC_TYPE);
  }

  async SendCreateOrderMessage(data: any): Promise<void> {
    await MessageBroker.publish({
      event: OrderEvent.CREATE_ORDER,
      topic: "OrderEvents" as TOPIC_TYPE,
      headers: {},
      message: data,
    });
  }

  async SendOrderCancelledMessage(data: any): Promise<void> {
    await MessageBroker.publish({
      event: OrderEvent.CANCEL_ORDER,
      topic: "CatalogEvents",
      headers: {},
      message: data,
    });
  }
}
