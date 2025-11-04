import type { Brand } from "./catalog-models/Brand";
import type { Users } from "./user-model/Users";
import type { Product as ProductType } from './catalog-models/Product'

export interface Product {
  id: number;
  image: string;
  cart: string;
  status: string;
  name: string;
  price: string;
  price2: string;
  desc: string;
}

export interface AuthStoreShape {
  token: string | null,
  user: Users | null
}

export interface CommonStoreShape {
  products: ProductType[],
  brands: Brand[],
  loaded: Boolean
}

export interface GridParams {
  page: number
  itemsPerPage: number
  sortBy?: {
    key: string
    order: 'asc' | 'desc'
  },
  options?: Record<string, any>
}

export interface orderedProducts {
  id: string,
  name: string,
  price: number,
  files: {
    name: string,
    url: string
  }[]
}