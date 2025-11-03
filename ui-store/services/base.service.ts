import type { AxiosInstance } from "axios";
import type { BasicSearch } from "~/types/catalog-input/BasicSearch";

export abstract class BaseService<T, TCreateInput = any, TUpdateInput = any> {
  protected abstract BASE_PATH: string;
  protected api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async get(id: string) {
    return await this.sendGet<T>(`/${id}`);
  }

  async list(query: any = {}) {
    return await this.sendGet<T[]>("/", query);
  }

  async listPaged(query: BasicSearch = {}) {
    return await this.sendGet<{
      items: T[],
      count: number
    }>('/paginated', query)
  }

  async create(data: TCreateInput) {
    return await this.sendPost<{ success: boolean; data: T }>("/", data);
  }

  async update(id: string, data: TUpdateInput) {
    return await this.sendPatch<{ success: boolean; data: T }>(`/${id}`, data);
  }

  async delete(id: string) {
    return await this.sendDelete(`/${id}`)
  }

  async sendGet<T>(path: string, query: any = {}, options: any = {}) {
    const { data } = await this.api.get<{
      success: boolean;
      data: T;
      [key: string]: any;
    }>(`/${this.BASE_PATH}${path}`, {
      params: query,
      ...options,
    });
    return data;
  }

  async sendDelete<T>(path: string) {
    const { data } = await this.api.delete<{
      success: boolean,
      data: T
    }>(`/${this.BASE_PATH}${path}`)
    return data
  }

  async sendPost<T>(path: string, input: TCreateInput | TCreateInput[] | Object, options?: any) {
    const { data } = await this.api.post<{
      success: boolean;
      data: T;
    }>(`/${this.BASE_PATH}${path}`, input, options);
    return data;
  }

  async sendPatch<T>(path: string, input: TUpdateInput, options?: any) {
    const { data } = await this.api.patch<{
      success: boolean;
      data: T;
    }>(`/${this.BASE_PATH}${path}`, input, options);
    return data;
  }
}
