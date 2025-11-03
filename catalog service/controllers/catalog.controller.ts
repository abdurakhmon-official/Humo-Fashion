import { CatalogService } from "@/services/catalog.service";
import { Delete, Get, Patch, Post, string } from "@tsed/schema";
import { Controller, Inject } from "@tsed/di";
import { BodyParams, PathParams, QueryParams } from "@tsed/common";
import { BasicSearch, BasicSearchSchema, CreateProductInput, UpdateProductInput } from "@/inputs";
import { BadRequest } from "@tsed/exceptions";
import { MultipartFile, PlatformMulterFile } from "@tsed/platform-multer";
import { CatalogRepository } from "@/repository/catalog.repository";
import { Authenticate, Authorized } from "@/middlewares/auth.middleware";
import { parseQueryToSearch } from "@/utils/helper";

@Controller("/products")
export class ProductController {
  @Inject()
  private catalogService!: CatalogService;

  @Inject()
  private catalogRepository!: CatalogRepository;

  @Post("/")
  async create(@BodyParams() data: CreateProductInput) {
    return await this.catalogService.createProduct(data);
  }

  @Post("/file")
  async uploadFile(@MultipartFile("file") file: PlatformMulterFile) {
    return await this.catalogService.createProductWithFile(file);
  }

  @Patch("/:id")
  async update(@PathParams("id") id: string, @BodyParams() data: UpdateProductInput) {
    return await this.catalogService.updateProduct(id, data);
  }

  @Get("/")
  async list() {
    return await this.catalogService.list();
  }

  @Get("/paginated")
  async all(@QueryParams() query: BasicSearch) {
    return await this.catalogService.all(query);
  }

  @Get("/paginated/navbar-products")
  async getNavbarProducts(@QueryParams() query: BasicSearch) {
    return await this.catalogService.getNavbarProducts(query);
  }

  @Delete("/:id")
  async deleteProduct(@PathParams("id") id: string) {
    return await this.catalogService.deleteProduct(id);
  }

  @Post("/stock")
  async getProductStock(@BodyParams("ids") ids: string[]) {
    if (!ids || ids.length === 0) {
      throw new BadRequest("At least one product ID is required");
    }
    return await this.catalogService.getProductStock(ids);
  }

  @Get("/brand/:id")
  async brand(@PathParams("id") id: string, @QueryParams() query: BasicSearch) {
    return await this.catalogService.brand(id, query);
  }
  
  @Get("/:id")
  async getProduct(@PathParams("id") id: string) {
    console.log('id', id)
    const res = await this.catalogService.getProduct(id);
    console.log('res', res)
    return res
  }

  @Post("/:id/rate")
  @Authorized(Authenticate())
  async rate(@PathParams("id") id: string, @BodyParams() rating: number) {
    return await this.catalogRepository.rateProduct(id, rating);
  }
}
