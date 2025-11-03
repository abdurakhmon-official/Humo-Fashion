import { useService } from "~/composable/userServices";
import type { CommonStoreShape } from "~/types";
import type { ProductExtraType } from "~/types/product.extra";

export const useCommon = defineStore("common", {
  state: (): CommonStoreShape => ({
    products: [],
    brands: [],
    loaded: false,
  }),
  getters: {
    getBrandById: (state) => (id: string) => {
      return state.brands.find((b) => b.id === id)
    },
    
    getProductByBrandId: (state) => (id: string) => {
      const products = state.products.filter((p) => p.brandId === id)
      return products
    },
  },
  actions: {
    async loadCommonData() {
      const p1 = this.loadProducts();
      const p2 = this.loadBrands();

      await Promise.all([p1, p2]);

      this.loaded = true;
    },

    async loadBrands(): Promise<void> {
      const services = useService();

      const { success, data } = await services.$brand.list();
      if (success) {
        this.brands = data;
      }
    },

    async loadProducts(
      page = 1,
      size = 20,
      sortBy?: { key: string, order: 'asc' | 'desc' }[],
      options?: Record<string, any>
    ): Promise<{ items: ProductExtraType[];  total: number} | undefined> {
      const services = useService()
      const auth = useAuth()
      const { isLoggedIn } = storeToRefs(auth)
      const dataToSend = {page, size, sortBy, options}

      const { success, data } = await services.$product.getNavbarProducts({
        page,
        size,
        sortBy,
        options
      })
      if (!success) return

      let products = data.items

      if (isLoggedIn.value && products.length) {
        try {
          const productIds = products.map((p) => p.id)
          const { success: enrichSuccess, data: enrichData } = 
            await services.$social.enrichProducts(productIds)
          if (enrichSuccess && Array.isArray(enrichData)) {
            const map = new Map(enrichData.map((d) => [d.productId, d]))
            products = products.map((p) => ({
              ...p,
              isLiked: map.get(p.id).isLiked || false,
              likeId: map.get(p.id).likeId || null
            }))
          } 
        } catch (error: any) {
          console.error('product enrichment error: ', error.message)
        }
      }

      return {
        items: products,
        total: data.count
      }
    },

    async loadProduct(id: string): Promise<ProductExtraType | null> {
      const services = useService()
      const auth = useAuth()
      const {isLoggedIn} = storeToRefs(auth)

      const { success, data } = await services.$product.get(id)
      console.log('success', success)
      console.log('data', data)
      if (!success) return null

      let product: ProductExtraType = data
      console.log('product after let product: ', data)

      if (isLoggedIn.value && product) {
        try {
          const {success: enrichSuccess, data: enrichData} = await services.$social.enrichOneProduct(product.id)

          if (enrichSuccess && enrichData) {
            product = {
              ...product,
              isLiked: enrichData.isLiked || false,
              likeId: enrichData.likeId || null
            }
          }
        } catch (error: any) {
          console.error('product enrichment error: ', error.message)
        }
      }

      return product
    }
  },
});
