import { Consumer, Producer } from "kafkajs";
import { CatalogService } from "./catalog.service";
import { MessageBroker } from "@/utils/broker";

export class BrokerService {
  private producer: Producer | null = null
  private consumer: Consumer | null = null

  constructor(private catalogService: CatalogService) { }

  public async initializeBroker() {
    this.producer = await MessageBroker.connectProducer<Producer>()
    this.producer.on('producer.connect', () => {
      console.log('catalog service producer connected successfully')
    })

    this.consumer = await MessageBroker.connectConsumer<Consumer>()
    this.consumer.on('consumer.connect', () => {
      console.log('catalog service consumer connected successfully')
    })

    console.log('catalog broker connected')

    const messageRouter = async (message: any) => {
      console.log('incoming kafka message: ', message.event)

      if (message.event.includes('ORDER') || message.event.includes('order')) {
        console.log('worked here handle prouct broker message')
        await this.catalogService.handleProductBrokerMessage(message)
      } else if (message.event.includes('LIKE') || message.event.includes('like')) {
        await this.catalogService.handleLikeBrokerMessage(message)
      } else {
        console.warn('unknown event type', message.event)
      }
    }

    await MessageBroker.subscribeMultiple(messageRouter, ['OrderEvents', 'LikeEvents'])
  }
}
