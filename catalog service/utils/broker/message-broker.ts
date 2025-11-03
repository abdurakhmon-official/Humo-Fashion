import { Consumer, Kafka, logLevel, Message, Partitioners, Producer } from "kafkajs"
import { MessageHandler, MesssageBrokerType, PublishType } from "./broker.type"
import { CatalogEvent, MessageType, TOPIC_TYPE } from "../../types"

const CLIENT_ID = process.env.CLIENT_ID || 'catalog-service'
const GROUP_ID = process.env.GROUP_ID || 'catalog-service-group'
const BROKERS = [process.env.BROKER_1 || 'localhost:9092']

const kafka = new Kafka({
    clientId: CLIENT_ID,
    brokers: BROKERS,
    logLevel: logLevel.INFO
})

let producer: Producer
let consumer: Consumer
let isConsumerRunnig = false

const createTopic = async (topic: string[]) => {
    const topics = topic.map((t) => ({
        topic: t,
        numPartitions: 2,
        replicationFactor: 1
    }))

    const admin = kafka.admin()
    await admin.connect()
    const topicExists = await admin.listTopics()
    for (const t of topics) {
        if (!topicExists.includes(t.topic)) {
            await admin.createTopics({
                topics: [t]
            })
        }
    }
    await admin.disconnect()
}

const connectProducer = async <T>(): Promise<T> => {
    await createTopic(['CatalogEvents'])

    if (producer) {
        console.log('producer already connected with existing connection')
        return producer as unknown as T
    }

    producer = kafka.producer({
        createPartitioner: Partitioners.DefaultPartitioner
    })

    await producer.connect()
    console.log('producer connected with a new connection')
    return producer as unknown as T
}

const disconnectProducer = async (): Promise<void> => {
    if (producer) {
        await producer.disconnect()
    }
}

const publish = async (data: PublishType): Promise<boolean> => {
    const producer = await connectProducer<Producer>()
    const result = await producer.send({
        topic: data.topic,
        messages: [
            {
                headers: data.headers,
                key: data.event,
                value: JSON.stringify(data.message)
            }
        ]
    })
    return result.length > 0
}

const connectConsumer = async <T>(): Promise<T> => {
    if (consumer) {
        console.log('consumer already connected with existing connection')
        return consumer as unknown as T
    }

    consumer = kafka.consumer({
        groupId: GROUP_ID
    })

    await consumer.connect()
    return consumer as unknown as T
}

const disconnectConsumer = async (): Promise<void> => {
    if (consumer) {
        isConsumerRunnig = false
        await consumer.disconnect()
        consumer = null as any
    }
}

const subscribe = async(
    messageHandler: MessageHandler,
    topic: TOPIC_TYPE
): Promise<void> => {
    const consumer = await connectConsumer<Consumer>()

    if (isConsumerRunnig) {
        console.log('consumer is already running, skipping subscription')
        return
    }

    console.log(`subscribed to topic: ${topic}`)

    await consumer.subscribe({ topic, fromBeginning: true })

    isConsumerRunnig = true 
    
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            if (!['CatalogEvents', 'OrderEvents', 'LikeEvents'].includes(topic)) {
                return 
            }
            console.log('worked in message-broker.ts')

            if (message.key && message.value) {
                const inputMessage: MessageType = {
                    headers: message.headers,
                    event: message.key.toString() as CatalogEvent,
                    data: message.value ? JSON.parse(message.value.toString()) : null
                }
                await messageHandler(inputMessage)
                await consumer.commitOffsets([
                    {topic, partition, offset: (Number(message.offset) + 1).toString()}
                ])
            }
        }
    })
}

const subscribeMultiple = async (messageHandler: MessageHandler, topics: string[]): Promise<void> => {
    const consumer = await connectConsumer<Consumer>()

    for (const topic of topics) {
        await consumer.subscribe({topic, fromBeginning: true})
        console.log(`subscribed to: ${topic}`)
    }

    if (isConsumerRunnig) {
        console.log('consumer already running, skipping re-run')
        return
    }

    isConsumerRunnig = true

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            if (!message.value) return;

            console.log(`message from [${topic}]`)
            const inputMessage: MessageType = {
                headers: message.headers,
                event: message.key?.toString() as CatalogEvent,
                data: JSON.parse(message.value.toString())
            }

            await messageHandler(inputMessage)

            await consumer.commitOffsets([
                {topic, partition, offset: (Number(message.offset) + 1).toString()}
            ])
        }
    })
}

export const MessageBroker: MesssageBrokerType = {
    connectProducer,
    disconnectProducer,
    publish,
    connectConsumer,
    disconnectConsumer,
    subscribe,
    subscribeMultiple
}
