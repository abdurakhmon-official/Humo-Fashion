import { Authenticate, Authorized } from "@/middlewares/auth.middleware";
import { LikeService } from "@/services/like.service";
import { BodyParams, PathParams, QueryParams } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { Delete, Get, Post } from "@tsed/schema";

@Controller("/likes")
export class LikeController {
  @Inject()
  private likeService!: LikeService;

  @Post("/products/enrich")
  @Authorized(Authenticate())
  async enrichProducts(@BodyParams("productIds") productIds: string[]) {
    return await this.likeService.enrichProduct(productIds);
  }
  @Post("/products/enrich/one")
  @Authorized(Authenticate())
  async enrichOneProduct(@BodyParams("productId") productId: string) {
    console.log('productId', productId)
    return await this.likeService.enrichOneProduct(productId);
  }

  @Post("/products/:productId")
  @Authorized(Authenticate())
  async likeProduct(@PathParams("productId") productId: string) {
    return await this.likeService.likeProduct(productId);
  }

  @Delete("/products/:productId")
  @Authorized(Authenticate())
  async unlikeProduct(@PathParams("productId") productId: string) {
    return await this.likeService.unlikeProduct(productId);
  }

  @Get("/user/products")
  @Authorized(Authenticate())
  async getUserLikedProducts(@QueryParams("page") page: number = 1, @QueryParams("size") size: number = 10) {
    return await this.likeService.getUserLikedProducts(page, size);
  }

  @Get("/products/:productId/count")
  async getLikeCount(@PathParams("productId") productId: string) {
    return await this.likeService.getLikeCount(productId);
  }

  @Get("/products/:productId/check")
  async checkUserLiked(@PathParams("productId") productId: string) {
    return await this.likeService.checkUserLiked(productId);
  }

  @Get("/products/:productId/users")
  async getProductLikers(
    @PathParams("productId") productId: string,
    @QueryParams("page") page: number = 1,
    @QueryParams("size") size: number = 10
  ) {
    return await this.likeService.getProductLikers(productId, page, size);
  }
}
