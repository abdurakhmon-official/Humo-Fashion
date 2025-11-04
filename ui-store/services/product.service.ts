import type { Product } from "~/types/catalog-models/Product";
import { BaseService } from "./base.service";
import type { BasicSearch } from "~/types/catalog-input/BasicSearch";
import type { orderedProducts } from "~/types";

export class ProductService extends BaseService<Product> {
  protected override BASE_PATH: string = "products";

  constructor() {
    const { $catalogApi } = useNuxtApp();
    super($catalogApi);
  }

  async getNavbarProducts(query: BasicSearch) {
    return await this.sendGet<{
      items: Product[],
      count: number
    }>('/paginated/navbar-products', query)
  }

  async getProducts(ids: string[]) {
    return await this.sendPost<{
      products: any
    }>('/get-products', {ids})
  }

  async all(query: BasicSearch) {
      return await this.sendGet<{
          items: Product[],
          count: number
      }>('/paginated', query)
  }

  async like(id: string) {
    return await this.sendPost(`/products/${id}/like`, {})
  }

  async unlike(id: string) {
    return await this.sendPost(`/products/${id}/unlike`, {})
  }
}