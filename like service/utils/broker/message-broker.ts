import { Consumer, Kafka, logLevel, Partitioners, Producer } from "kafkajs";
import { MessageHandler, MessageBrokerType, PublishType } from './broker.type'
import { LikeEvent, MessageType, TOPIC_TYPE} from '../../types'

const CLIENT_ID = process.env.CLIENT_ID || "like-service";
const GROUP_ID = process.env.GROUP_ID || "like-service-group";
const BROKERS = [process.env.BROKER_1 || "localhost:9092"];

const kafka = new Kafka({
  clientId: CLIENT_ID,
  brokers: BROKERS,
  logLevel: logLevel.INFO,
});

let producer: Producer;
let consumer: Consumer;

const createTopic = async (topic: string[]) => {
  const topics = topic.map((t) => ({
    topic: t,
    numPartitions: 2,
    replicationFactor: 1,
  }));

  const admin = kafka.admin();
  await admin.connect();
  const topicExists = await admin.listTopics();
  for (const t of topics) {
    if (!topicExists.includes(t.topic)) {
      await admin.createTopics({
        topics: [t],
      });
    }
  }
  await admin.disconnect();
};

const connectProducer = async <T>(): Promise<T> => {
  await createTopic(["LikeEvents"]);

  if (producer) {
    console.log("producer already connected with existing connection");
    return producer as unknown as T;
  }

  producer = kafka.producer({
    createPartitioner: Partitioners.DefaultPartitioner,
  });

  await producer.connect();
  console.log("Like Service Producer connected");
  return producer as unknown as T;
};

const disconnectProducer = async (): Promise<void> => {
  if (producer) {
    await producer.disconnect();
  }
};

const publish = async (data: PublishType): Promise<boolean> => {
  const producer = await connectProducer<Producer>();
  const result = await producer.send({
    topic: data.topic,
    messages: [
      {
        headers: data.headers,
        key: data.event,
        value: JSON.stringify(data.message),
      },
    ],
  });
  console.log(`Event published: ${data.event} to ${data.topic}`);
  return result.length > 0;
};

const connectConsumer = async <T>(): Promise<T> => {
  if (consumer) {
    console.log("consumer already connected with existing connection");
    return consumer as unknown as T;
  }

  consumer = kafka.consumer({
    groupId: GROUP_ID,
  });

  await consumer.connect();
  console.log("Like Service Consumer connected");
  return consumer as unknown as T;
};

const disconnectConsumer = async (): Promise<void> => {
  if (consumer) {
    await consumer.disconnect();
  }
};

const subscribe = async (messageHandler: MessageHandler, topic: TOPIC_TYPE): Promise<void> => {
  const consumer = await connectConsumer<Consumer>();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if (!["LikeEvents", "CatalogEvents", "OrderEvents"].includes(topic)) {
        return;
      }

      if (message.key && message.value) {
        const inputMessage: MessageType = {
          headers: message.headers,
          event: message.key.toString() as LikeEvent,
          data: message.value ? JSON.parse(message.value.toString()) : null,
        };
        console.log(`Message received: ${inputMessage.event} from ${topic}`);
        await messageHandler(inputMessage);
        await consumer.commitOffsets([{ topic, partition, offset: (Number(message.offset) + 1).toString() }]);
      }
    },
  });
};

export const MessageBroker: MessageBrokerType = {
  connectProducer,
  disconnectProducer,
  publish,
  connectConsumer,
  disconnectConsumer,
  subscribe,
};
