import { faker } from "@faker-js/faker";
import { CatalogService } from "../catalog.service";
import { MockProductRepository } from "../../repository/mock.catalog.repository";
import { Product } from "../../models/product.model";
import { ProductFactory } from "../../utils/fixtures";

// Mock dependency (Injectable ishlatmaymiz)
jest.mock("@tsed/di", () => ({
  Injectable: () => (target: any) => target,
  Inject: () => () => {},
}));

const mockProduct = (rest: any) => ({
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  stock: faker.number.int({ min: 10, max: 100 }),
  ...rest,
});

describe("ProductService", () => {
  let repository: any;
  let service: CatalogService;

  beforeEach(() => {
    repository = new MockProductRepository();
    service = new CatalogService(repository); // qo‘lda dependency yuborildi
  });

  describe("createProduct", () => {
    test("should create product", async () => {
      const reqBody = mockProduct({ price: +faker.commerce.price() });
      const result = await service.createProduct(reqBody);
      expect(result).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
        stock: expect.any(Number),
      });
    });

    test("should throw error with unable to create product", async () => {
      const reqBody = mockProduct({
        price: +faker.commerce.price(),
      });

      jest.spyOn(repository, "create").mockImplementationOnce(() => Promise.resolve({} as Product));
      await expect(service.createProduct(reqBody)).rejects.toThrow("unable to create product");
    });

    test("should throw error with prodcut already exist", async () => {
      const reqBody = mockProduct({
        price: +faker.commerce.price(),
      });

      jest.spyOn(repository, "create").mockImplementationOnce(() => Promise.reject(new Error("product already exist")));

      await expect(service.createProduct(reqBody)).rejects.toThrow("product already exist");
    });
  });

  describe("updateProduct", () => {
    test("should update product", async () => {
      const reqBody = mockProduct({
        price: +faker.commerce.price(),
      });
      const id = faker.number.int({ min: 10, max: 100 }) as unknown as string;
      const result = await service.updateProduct(id, reqBody);
      expect(result).toMatchObject(reqBody);
    });

    test("should throw error with product does not exist", async () => {
      jest
        .spyOn(repository, "update")
        .mockImplementationOnce(() => Promise.reject(new Error("product does not exist")));

      await expect(service.updateProduct("", {})).rejects.toThrow("product does not exist");
    });
  });

  describe("getProducts", () => {
    test("should get products by offset and limit", async () => {
      const randomLimit = faker.number.int({ min: 10, max: 50 });
      const products = ProductFactory.buildList(randomLimit);

      jest.spyOn(repository, "find").mockImplementationOnce(() => Promise.resolve(products));

      const result = await service.getProducts(randomLimit, 0);
      expect(result.length).toEqual(randomLimit);
      expect(result).toMatchObject(products);
    });

    test("should throw error with products does not exist", async () => {
      jest.spyOn(repository, "find").mockImplementationOnce(() => Promise.reject(new Error("products does not exist")));

      await expect(service.getProducts(0, 0)).rejects.toThrow("products does not exist");
    });
  });

  describe("getProduct", () => {
    test("should get product by id", async () => {
      const product = ProductFactory.build();
      jest.spyOn(repository, "findOne").mockImplementationOnce(() => Promise.resolve(product));

      const result = await service.getProduct(String(product.id));
      expect(result).toMatchObject({
        id: product.id,
      });
    });
  });
});
