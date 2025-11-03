import { Product } from '@/generated/prisma'
import {faker} from '@faker-js/faker'

export class MockProductRepository {
    create(data: any): Promise<any> {
        return Promise.resolve({
            id: faker.string.uuid(),
            ...data
        })
    }

    update(id: string, data: any): Promise<any> {
        return {
            id,
            ... data
        }
    }

    async delete(id: string): Promise<any> {
        return {id}
    }

    async find(limit: number, offset: number): Promise<Product[]> {
        return Array.from({ length: limit }, (_, i) => ({
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.number.int({ min: 100, max: 1000 }),
            stock: faker.number.int({min: 1, max: 100})
        })) as Product[]
    }

    async findOne(id: string): Promise<any> {
        return {
            id, 
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.number.int({ min: 100, max: 1000 }),
            stock: faker.number.int({min: 1, max: 100}),
        }
    }

    async findStock(ids: string[]): Promise<any[]> {
        return ids.map((id) => ({
            id, 
            name: faker.commerce.productName(),
            stock: faker.number.int({min: 10, max: 50})
        }))
    }
}