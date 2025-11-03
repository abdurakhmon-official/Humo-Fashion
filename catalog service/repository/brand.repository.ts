import { Injectable } from "@tsed/di";
import prisma from '../modules/db'
import { BadRequest } from '@tsed/exceptions'
import { Brand } from "@/generated/prisma";
import { BrandList, CreateBrandInput, UpdateBrandInput } from "@/inputs/brand.input";
import { BasicSearch } from "@/inputs/basic.search";

@Injectable()
export class BrandRepository {
    async findOne(id: string): Promise<{success: boolean, data: Brand}> {
        const brand = await prisma.brand.findUnique({
            where: {id}
        })

        if (!brand) {
            throw new BadRequest('Brand not found')
        }

        return {success: true, data: brand}
    }

    async create(data: CreateBrandInput): Promise<{success: boolean}> {
        await prisma.brand.upsert({
            where: { name: data.name },
            update: {},
            create: data,
            select: {
                id: true,
                name: true,
                country: true
            }
        })

        return {success: true}
    }

    async update(id: string, data: UpdateBrandInput): Promise<{success: boolean}> {
        await prisma.brand.update({
            data: Object.assign<any, any>(data, {
                updatedAt: new Date()
            }),
            where: {id}
        })

        return {success: true}
    }

    async list(): Promise<{ success: boolean, data: BrandList }> {
        const brands = await prisma.brand.findMany({
            select: { id: true, name: true, country: true },
            where: {deleted: false}
        })
        return {success: true, data: brands}
    }

    async pagination(search: BasicSearch): Promise<{ success: boolean, data: { items: BrandList, count: number } }> {
        const where = search.search ? { name: search.search } : {}

        const [brands, count] = await prisma.$transaction(async tx => [
            await tx.brand.findMany({
                where,
                take: search.size,
                skip: search.skip,
                select: {
                    id: true,
                    name: true,
                    image: true,
                    country: true,
                    deleted: true
                },
                orderBy: [search.sorting, {id: 'asc'}]
            }),
            await tx.brand.count({where})
        ])

        return {success: true, data: {items:  brands, count}}
    }

    async delete(id: string): Promise<{ success: boolean }> {
        await prisma.brand.update({
            where: { id },
            data: {deleted: true}
        })

        return {success: true}
    }
}