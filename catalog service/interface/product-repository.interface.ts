import { Product } from "@/generated/prisma";
import { CreateProductInput, UpdateProductInput } from "@/inputs";

export interface IProductRepository {
    create(data: CreateProductInput): Promise<Product>
    update(id: string, data: UpdateProductInput): Promise<Product>
    delete(id: string): Promise<Product>
    find(limit: number, offset: number): Promise<Product[]>
    findOne(id: string): Promise<Product>
    findStock(ids: string[]): Promise<{name: string, stock: number}[]>
}