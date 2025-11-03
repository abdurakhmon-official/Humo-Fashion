import type { Product } from "~/types/catalog-models/Product";
import { BaseService } from "./base.service";
import type { BasicSearch } from "~/types/catalog-input/BasicSearch";

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

  async all(query: BasicSearch) {
      return await this.sendGet<{
          items: Product[],
          count: number
      }>('/paginated', query)
  }

  async getProducts(data: { limit: number; offset: number }) {
    return await this.sendPost<{ data: Product[] }>("/all", data);
  }

  async like(id: string) {
    return await this.sendPost(`/products/${id}/like`, {})
  }

  async unlike(id: string) {
    return await this.sendPost(`/products/${id}/unlike`, {})
  }
}