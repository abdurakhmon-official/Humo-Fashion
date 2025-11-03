import { useService } from "~/composable/userServices";
import type { CartWithLineItemsInput } from "~/types/order-input/CartWithLineItemsInput";
import type { CreateCartInput } from "~/types/order-input/CreateCartInput";

export const useCart = defineStore('cart', {
  state: () => ({
    cart: null as CartWithLineItemsInput | null,
    loading: false,
    error: null as string |  null
  }),

  getters: {
    items: (state) => state.cart?.lineItems || [],
    totalItems: (state) => state.cart?.lineItems.reduce((sum, item) => sum + item.quantity, 0) || 0,
    totalPrice: (state) => state.cart?.lineItems.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0,
    totalLineItems: (state) => state.cart?.lineItems.length,
    isEmpty: (state) => !state.cart || state.cart.lineItems.length === 0
  },

  actions: {
    async loadCart() {
      const auth = useAuth()

      const { isLoggedIn } = storeToRefs(auth)
      
      if (!isLoggedIn.value) return
      this.loading = true
      this.error = null

      try {
        const services = useService()
        const response = await services.$order.getCart()
        if (response.success) {
          this.cart = response.data as unknown as CartWithLineItemsInput
        } else {
          this.cart = null
        }
      } catch (error: any) {
        this.error = error.message
        this.cart = null
      } finally {
        this.loading = false
      }
    },

    async addToCart(input: CreateCartInput) {
      const auth = useAuth()
      const router = useRouter()
      const {$toast} = useNuxtApp()
      const services = useService()

      const {isLoggedIn} = storeToRefs(auth)

      if (!isLoggedIn.value) {
        router.push('/auth/login')
        return
      }

      this.loading = true
      try {
        const { success, data } = await services.$order.createCart(input)
        if (success) {
          await this.loadCart()
          return success
        }
      } catch (error: any) {
        $toast.error(error.message || 'Something went wrong!')
      } finally {
        this.loading = false
      }

      return false
    },

    async removeFromCart(lineItemId: string) {
      if (!this.cart) return

      const services = useService()
      const {$toast} = useNuxtApp()
      this.loading = true

      try {
        const {success} = await services.$order.removeFromCart(lineItemId)
        if (success) {
          await this.loadCart()
          $toast.success('Item removed from cart!')
        }
      } catch (error: any) {
        $toast.error(error.message || 'Something went wrong!')
      } finally {
        this.loading = false
      }
    }
  }
})