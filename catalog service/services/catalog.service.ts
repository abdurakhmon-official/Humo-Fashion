import { AppEventListener } from "../utils/app-event-listener";
import { BasicSearch, BasicSearchSchema, CreateProductInput, CreateProductInputSchema, UpdateProductInput, UpdateProductInputSchema } from "../inputs";
import { CatalogRepository } from "../repository/catalog.repository";
import { Inject, Injectable, InjectContext } from "@tsed/di";
import { OrderLineItemType, OrderWithLineItems } from "../types";
import { PlatformMulterFile } from "@tsed/platform-multer";
import prisma from "../modules/db";
import * as xlxs from "xlsx";
import { PlatformContext } from "@tsed/common";
import { Request } from "express";
import { parseQueryToSearch } from "../utils/helper";
import { PRODUCT_SIZE } from "@/generated/prisma";

@Injectable()
export class CatalogService {
  @InjectContext()
  private context!: PlatformContext;

  constructor(
    @Inject()
    private _repository: CatalogRepository
  ) {}

  get req() {
    return this.context.getRequest<Request>();
  }

  get user() {
    return this.req.user;
  }

  async createProduct(input: CreateProductInput) {
    const data = CreateProductInputSchema.parse(input);
    const response = await this._repository.create(data);
    if (!response.data.id) {
      throw new Error("unable to create product");
    }
    // AppEventListener.instance.notify({
    //   event: 'createProduct',
    //   data: response
    // })
    return response;
  }

  async createProductWithFile(file: PlatformMulterFile) {
    const workbook = xlxs.read(file.buffer, { type: "buffer" });
    const sheet = workbook.Sheets["Products"];
    const data = xlxs.utils.sheet_to_json<any>(sheet);

    const createdProducts = [];

    for (const item of data) {
      try {
        const productData = {
          name: item["Name"].toString().trim(),
          description: item["Description"].toString().trim(),
          price: parseFloat(item["Price"]),
          stock: parseFloat(item["Stock"]),
          brandId: await this.getBrandId(item["Brand"]?.toString().trim()),
        };

        if (!productData.name || !productData.price || !productData.brandId) {
          throw new Error(`Invalid product data: ${JSON.stringify(productData)}`);
        }
        const product = this._repository.createWithFile(productData);
        createdProducts.push(product);
      } catch (error: any) {
        console.error(`Error creating product: ${JSON.stringify(item)}`, error);
      }
    }

    return {
      success: true,
      message: `${createdProducts.length} products saved successfully!`,
    };
  }

  async updateProduct(id: string, input: UpdateProductInput) {
    const data = UpdateProductInputSchema.parse(input);
    const response = await this._repository.update(id, data);
    if (!response.data.id) {
      throw new Error("unable to update product");
    }
    // const dataForElastic = { id, ...data };
    // AppEventListener.instance.notify({
    //   event: "updateProduct",
    //   data: dataForElastic,
    // });
    console.log("response in catalog.service", response);
    return response;
  }

  async getProduct(id: string) {
    const product = await this._repository.findOne(id);
    return product;
  }

  async getProductStock(ids: string[]) {
    const products = await this._repository.findStock(ids);
    if (!products) {
      throw new Error("unable to find product stock details");
    }
    return products;
  }

  async getProducts(ids: string[]) {
    const products = await this._repository.findProducts(ids)
    if (!products) {
      throw new Error('unable to find product details')
    }
    return products
  }

  async deleteProduct(id: string) {
    const response = await this._repository.delete(id);
    // AppEventListener.instance.notify({
    //   event: 'deleteProduct',
    //   data: {id}
    // })
    return response;
  }

  async getNavbarProducts(query: BasicSearch) {
    const search = parseQueryToSearch(query)
    return await this._repository.getNavbarProducts(search)
  }

  async getProductsByType(query: BasicSearch) {
    const search = parseQueryToSearch(query)
    return await this._repository.getNavbarProducts(search)
  }

  async list() {
    return await this._repository.list();
  }

  async all(query: BasicSearch) {
    const search = parseQueryToSearch(query);
    return await this._repository.all(search);
  }

  async brand(brandId: string, query: BasicSearch) {
    const search = BasicSearchSchema.parse(query);
    return this._repository.brand(brandId, search);
  }

  async handleProductBrokerMessage(message: any) {
    const orderData = message.data as OrderWithLineItems;
    const { orderItems } = orderData;

    for (const item of orderItems) {
      const {data} = await this.getProduct(item.productId);
      if (data) {
        const updatedStock = data.stock - item.quantity;
        const updatedSold = data.sold + item.quantity;
        await this.updateProduct(item.productId, {
          ...data,
          brandId: data.brandId ?? undefined,
          stock: updatedStock,
          sold: updatedSold,
          size: data.size ? [data.size] : [],
        });
      }
    }
  }

  async handleLikeBrokerMessage(message: any) {
    const { event, data } = message
    const { productId } = data

    console.log(`handling like event: ${event} for product: ${productId}`)

    if (event === 'product_liked') {
      await this._repository.incrementLikeCount(productId)
      console.log(`like count incremented for product: ${productId}`)
    } else if (event === 'product_unliked') {
      await this._repository.decrementLikeCount(productId)
      console.log(`like count decremented for product: ${productId}`);
    } else {
      console.warn('unknown like event: ', event)
    }
  }

  private async getBrandId(brandName: string | undefined): Promise<string> {
    const brand = await prisma.brand.findFirst({ where: { name: brandName } });
    if (!brand) throw new Error(`Brand not found: ${brandName}`);
    return brand.id;
  }
}
