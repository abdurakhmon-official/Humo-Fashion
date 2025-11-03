import { BaseService } from "./base.service";

export class SocialService extends BaseService<void> {
  protected override BASE_PATH: string = "likes";

  constructor() {
    const { $socialApi } = useNuxtApp();
    super($socialApi);
  }

  async likeProduct(productId: string) {
    return await this.sendPost<{
      likeId: string | undefined;
      success: boolean;
      message: string;
      data: any;
    }>(`/products/${productId}`, {});
  }

  async unlikeProduct(productId: string) {
    return await this.sendDelete<{
      success: boolean;
    }>(`/products/${productId}`);
  }

  async checkUserLiked(productId: string) {
    return await this.sendGet<{
      isLiked: boolean | undefined;
      likedId: string | undefined;
      success: boolean;
      data: {
        isLiked: boolean;
        likedId?: string;
      };
    }>(`/products/${productId}/check`);
  }

  async getLikeCount(productId: string) {
    return await this.sendGet<{
      success: boolean;
      data: {
        productId: string;
        like_count: number;
      };
    }>(`/products/${productId}/count`);
  }

  async enrichProducts(productIds: string[]) {
    return await this.sendPost<{
      success: boolean;
      data: {
        productId: string;
        isLiked: boolean;
        likeId?: string;
      }[];
    }>(`/products/enrich`, { productIds });
  }

  async enrichOneProduct(productId: string) {
    return await this.sendPost<{
      productId: string;
      isLiked: boolean;
      likeId?: string | null;
    }>("/products/enrich/one", { productId });
  }
}