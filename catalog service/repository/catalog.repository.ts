import { Product, PRODUCT_COLORS, PRODUCT_SIZE, PRODUCT_TYPE } from "@/generated/prisma";
import { BasicSearch, CreateProductInput, UpdateProductInput } from "@/inputs";
import { Injectable, InjectContext } from "@tsed/di";
import prisma from "../modules/db";
import { BadRequest, NotFound } from "@tsed/exceptions";
import { PlatformContext } from "@tsed/common";
import { Request } from "express";

@Injectable()
export class CatalogRepository {
  @InjectContext()
  private context!: PlatformContext;

  get req() {
    return this.context.getRequest<Request>();
  }

  get user() {
    return this.req.user;
  }

  async create(data: CreateProductInput): Promise<{ success: boolean; data: Product }> {
    return await prisma.$transaction(async (tx) => {

      let price2

      if (data.discount) {
        price2 = data.price - (data.price * data.discount) / 100
      }

      const product = await tx.product.create({
        data: {
          name: data.name,
          brandId: data.brandId,
          description: data.description,
          price: data.price,
          price2: price2,
          discount: data.discount,
          type: data.type as PRODUCT_TYPE,
          color: data.color as PRODUCT_COLORS,
          size: data.size as unknown as PRODUCT_SIZE,
          stock: data.stock,
          files: {
            create: data.files.map(({ file, name, size }) => ({
              file,
              name,
              size,
            })),
          },
        },
      });

      return { success: true, data: product };
    });
  }

  async createWithFile(data: any): Promise<{ success: boolean }> {
    await prisma.product.create({
      data,
    });
    return { success: true };
  }

  async update(id: string, data: UpdateProductInput): Promise<{ success: boolean; data: Product }> {
    return await prisma.$transaction(async (tx) => {
      const productData = await tx.product.findUnique({
        where: { id },
        include: { files: true },
      });

      if (!productData) throw new BadRequest("product not found");

      if (productData.deleted) throw new BadRequest("product has been deleted");

      if (!data.files) data.files = [];
      const removedFileIds =
        productData.files.filter((t) => data.files?.findIndex((f) => f.id !== t.id)).map((t) => t.id) ?? [];
      await tx.productFile.deleteMany({
        where: {
          productId: id,
          id: {
            in: removedFileIds,
          },
        },
      });

      const newFiles = data.files.filter((t) => !t.id);

      let price2
      if (data.discount && data.price) {
        price2 = data.price - (data.price * data.discount) / 100
      }

      const product = await tx.product.update({
        data: {
          name: data.name,
          brandId: data.brandId,
          description: data.description,
          price: data.price,
          price2,
          discount: data.discount,
          stock: data.stock,
          sold: data.sold,
          type: data.type as PRODUCT_TYPE,
          color: data.color as PRODUCT_COLORS,
          size: data.size as unknown as PRODUCT_SIZE,
          files: {
            create: newFiles.map((f) => ({
              name: f.name,
              size: f.size,
              file: f.file,
            })),
          },
        },
        where: { id },
      });

      return { success: true, data: product };
    });
  }

  async delete(id: string) {
    return await prisma.product.delete({ where: { id } });
  }

  async find(limit: number, offset: number): Promise<Product[]> {
    return await prisma.product.findMany({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: string): Promise<{success: boolean, data: Product}> {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFound("Product not found");
    }
    return {
      success: true,
      data: product
    };
  }

  async findStock(ids: string[]): Promise<{ id: string; name: string; stock: number }[]> {
    const products = await prisma.product.findMany({
      where: { id: { in: ids } },
    });

    return products.map((p) => ({ id: p.id, name: p.name, stock: p.stock }));
  }

  async findProducts(ids: string[]) {
    const products = await prisma.product.findMany({
      where: { id: { in: ids } },
      include: {
        files: {
          select: {
            file: true,
            name: true
          }
        }
      }
    })


    return products.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      files: p.files.map((f) => ({
        name: f.name,
        url: f.file
      }))
    }))
  }

  async list(): Promise<{ success: boolean; data: Product[] }> {
    const products = await prisma.product.findMany({
      where: { deleted: false },
      include: { brand: true, files: true },
    });

    return { success: true, data: products };
  }

  async getNavbarProducts(search: BasicSearch) {
    const { size, skip, sorting, options } = search;
    const orderByArray = Object.entries(sorting).map(([key, order]) => ({ [key]: order }));

    const where: any = { deleted: false };

    if (options.type) where.type = options.type

    if (options.price) {
      where.price2 = {};
      if (options.price.lt) where.price2.lt = parseFloat(options.price.lt);
      if (options.price.get) where.price2.gt = parseFloat(options.price.gt);
      if (options.price.lte) where.price2.lte = parseFloat(options.price.lte);
      if (options.price.gte) where.price2.gte = parseFloat(options.price.gte);
    }

    if (search.search) {
      where.OR = [
        { name: { contains: search.search, mode: "insensitive" } },
        { description: { contains: search.search, mode: "insensitive" } },
      ];
    }

    if (options.brandId) {
      where.brandId = options.brandId;
    }

    if (options.color) {
      where.color = options.color
    }

    if (options.size) {
      where.size = options.size
    }

    const [products, count] = await prisma.$transaction(async (tx) => [
      await tx.product.findMany({
        where,
        take: size,
        skip,
        include: { brand: true, files: true },
        orderBy: [...orderByArray, { id: "asc" }],
      }),
      await tx.product.count({ where }),
    ]);
    
    return { success: true, data: { items: products, count } };
  }

  async all(search: BasicSearch): Promise<{
    success: boolean;
    data: { items: Product[]; count: number };
  }> {
    const [products, count] = await prisma.$transaction(async (tx) => [
      await tx.product.findMany({
        where: { deleted: false },
        take: search.size,
        skip: (search.page - 1) * search.size,
        include: {
          brand: true,
        },
        orderBy: [search.sorting, { id: "asc" }],
      }),
      await tx.product.count({
        where: {
          deleted: false,
        },
      }),
    ]);
    return { success: true, data: { items: products, count } };
  }

  async brand(
    brandId: string,
    search: BasicSearch
  ): Promise<{ success: boolean; data: { items: Product[]; count: number } }> {
    const where = this.user?.isAdmin ? { brandId } : { brandId, active: true, deleted: false };

    const [products, count] = await prisma.$transaction(async (tx) => [
      await tx.product.findMany({
        where,
        take: search.size,
        skip: search.skip,
        include: {
          brand: true,
        },
        orderBy: [{}, { id: "asc" }],
      }),
      await tx.product.count({ where }),
    ]);

    return { success: true, data: { items: products, count } };
  }

  async incrementLikeCount(productId: string): Promise<any> {
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { id: true, like_count: true, name: true },
    });

    if (!product) {
      console.warn(`Product ${productId} not found, skipping increment`);
      return null;
    }

    await prisma.product.update({
      where: { id: productId },
      data: {
        like_count: { increment: 1 },
      },
    });

    return {
      message: "product liked successfully",
    };
  }

  async decrementLikeCount(productId: string): Promise<any> {
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { id: true, like_count: true, name: true },
    });

    if (!product) {
      console.warn(`Product ${productId} not found, skipping increment`);
      return null;
    }

    if (product.like_count < 0) {
      console.warn("like count already 0 for product: ", product);
    }

    await prisma.product.update({
      where: { id: productId },
      data: {
        like_count: { decrement: 1 },
      },
    });

    return {
      message: "product unliked successfully",
    };
  }

  async rateProduct(productId: string, rating: number): Promise<{ success: boolean }> {
    const userId = this.user?.id as unknown as string;
    const existing = await prisma.productRating.findUnique({
      where: { productId_userId: { productId, userId } },
    });

    if (existing) {
      await prisma.productRating.update({
        where: { productId_userId: { productId, userId } },
        data: { rating },
      });
    } else {
      await prisma.productRating.create({
        data: { productId, userId, rating },
      });
    }

    const ratings = await prisma.productRating.findMany({ where: { productId } });
    const avg = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;

    await prisma.product.update({
      where: { id: productId },
      data: { average_rating: avg },
    });

    return { success: true };
  }
}
