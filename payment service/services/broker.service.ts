import { PaymentEvent } from '../types/broker-types'
import { MessageBroker } from "@/utils/broker/message-broker";
import { Injectable } from "@tsed/di";
import { Producer } from "kafkajs";

@Injectable()
export class BrokerService {
  async initializeBroker() {
    const producer = await MessageBroker.connectProducer<Producer>()
    producer.on('producer.connect', async () => {
      console.log('Payment Service Producer connected successfully')
    })
  }

  async sendPaymentUpdateMessage(data: unknown) {
    await MessageBroker.publish({
      event: PaymentEvent.UPDATE_PAYMENT,
      topic: 'OrderEvents',
      headers: {},
      message: {
        data
      }
    })
  }
}
