import { BasicSearch, BasicSearchSchema } from "@/inputs/basic.search";
import { CreateBrandInput, CreateBrandInputSchema, UpdateBrandInput, UpdateBrandInputSchema } from "@/inputs/brand.input";
import { BrandRepository } from "@/repository/brand.repository";
import { PlatformContext } from "@tsed/common";
import { Inject, Injectable, InjectContext } from "@tsed/di";
import { Request } from "express";

@Injectable()
export class BrandService {
  constructor(
    @Inject()
    private _repository: BrandRepository
    ) { }
    

    @InjectContext()
    private context!: PlatformContext

    get req() {
        return this.context.getRequest<Request>()
    }

    get user() {
        return this.req.user
    }

    async get(id: string) {
        return await this._repository.findOne(id)
    }

    async create(input: CreateBrandInput) {
        const data = CreateBrandInputSchema.parse(input)
        return await this._repository.create(data)
    }

    async update(id: string, updates: UpdateBrandInput) {
        const data = UpdateBrandInputSchema.parse(updates)
        return this._repository.update(id, data)
    }

    async list() {
        return await this._repository.list()
    }

    async pagination(query: BasicSearch) {
        const search = BasicSearchSchema.parse(query)
        return await this._repository.pagination(search);
    }

    async delete(id: string) {
        return await this._repository.delete(id)
    }
}