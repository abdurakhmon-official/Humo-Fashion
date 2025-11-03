import type { Brand } from "~/types/catalog-models/Brand";
import { BaseService } from "./base.service";

export class BrandService extends BaseService<Brand> {
    protected override BASE_PATH: string = "brand"

    constructor() {
        const {$catalogApi} = useNuxtApp()
        super($catalogApi)
    }
}