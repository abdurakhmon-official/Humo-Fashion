import { Product } from "../generated/prisma";
import { EventPayload } from "../utils/app-event-listener";
import { Client } from "@elastic/elasticsearch";
import { PayloadProductInput } from "../inputs";

export class ElasticSearchService {
  private indexName = "product";
  private client: Client;

  constructor() {
    this.client = new Client({
      node: process.env.ELASTICSEARCH_URL || "https://elasticsearch:9200",
      auth: {
        username: process.env.ELASTIC_USERNAME || "elastic",
        password: process.env.ELASTIC_PASSWORD || "elastic_password",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    this.createIndex().catch((err) => console.error("Error creating index:", err));
  }

  async handleEvents({ event, data }: EventPayload) {
    console.log("ElasticSearchService:handleEvents", event, data);
    switch (event) {
      case "createProduct":
        await this.createProduct(data as PayloadProductInput);
        console.log("create product event received in Elastic Search");
        return;
      case "updateProduct":
        await this.updateProduct(data as PayloadProductInput);
        console.log("Update product event received in Elastic Search");
        return;
      case "deleteProduct":
        const { id } = data as PayloadProductInput;
        await this.deleteProduct(id);
        console.log("Delete product event received in Elastic Search");
    }
  }

  async createIndex() {
    const exists = await this.client.indices.exists({ index: this.indexName });

    if (!exists) {
      await this.client.indices.create({
        index: this.indexName,
        mappings: {
          properties: {
            id: { type: "keyword" },
            title: { type: "text" },
            description: { type: "text" },
            price: { type: "float" },
            stock: { type: "integer" },
          },
        },
      });
      console.log(`Index ${this.indexName} created`);
    } else {
      console.log(`Index ${this.indexName} already exists`);
    }
  }

  async getProduct(id: string) {
    const result = await this.client.get<{ _source: Product }>({
      index: this.indexName,
      id: id.toString(),
    });

    return result._source;
  }

  async createProduct(data: PayloadProductInput) {
    await this.client.index({
      index: this.indexName,
      id: data.id.toString(),
      document: data,
    });
    console.log("Product created with id in elasticsearch", data.id);
  }

  async updateProduct(data: PayloadProductInput) {
    await this.client.update({
      index: this.indexName,
      id: data.id.toString(),
      doc: data,
    });
    console.log("Product update with id in elasticsearch", data.id);
  }

  async deleteProduct(id: number) {
    await this.client.delete({
      index: this.indexName,
      id: id.toString(),
    });
    console.log("Product deleted with id in elasticsearch", id);
  }

  async searchProduct(query: string) {
    const result = await this.client.search<Product>({
      index: this.indexName,
      query: {
        multi_match: {
          query,
          fields: ["name", "description"],
          fuzziness: "AUTO",
        },
      },
    });
    console.log("result in elasticsearch from search by query", result);

    return result.hits.hits.map((hit) => hit._source as Product);
  }
}
