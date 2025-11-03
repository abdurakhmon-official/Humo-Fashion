import { BasicSearch, CreateBrandInput, UpdateBrandInput } from "@/inputs";
import { BrandService } from "@/services/brand.service";
import { BodyParams, Delete, Get, PathParams, Post, Put, QueryParams } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";

@Controller('/brand')
export class BrandController {
    @Inject()
    private brandService!: BrandService

    @Post('/')
    async create(@BodyParams() data: CreateBrandInput) {
        return await this.brandService.create(data)
    }

    @Delete('/:id')
    async delete(@PathParams('id') id: string) {
        return await this.brandService.delete(id)
    }

    @Put('/:id')
    async update(@PathParams('id') id: string, @BodyParams() data: UpdateBrandInput) {
        return await this.brandService.update(id, data)
    }

    @Get('/')
    async list() {
        return await this.brandService.list()
    }

    @Get('/paginated')
    async pagination(@QueryParams() query: BasicSearch) {
        return await this.brandService.pagination(query)
    }

    @Get('/:id')
    async get(@PathParams('id') id: string) {
        return await this.brandService.get(id)
    }
}