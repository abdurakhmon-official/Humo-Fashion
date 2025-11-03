import type { Product } from './catalog-models/Product'

export interface ProductExtraType extends Product {
    isLiked?: boolean
    likeId?: string | null
}