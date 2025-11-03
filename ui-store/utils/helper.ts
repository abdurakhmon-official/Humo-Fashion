import { useService } from "~/composable/userServices";
import { productData } from "~/data/data";
import type { Product } from "~/types";

const common = useCommon();

const { products } = storeToRefs(common);

export function productFindById(id: number) {
  const product = productData.find((p) => p.id === id) as Product;
  return product;
}

export function getProductById(id: string) {
  const product = products.value.find((p) => p.id === id);
  return product;
}
