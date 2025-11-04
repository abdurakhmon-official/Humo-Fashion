import { Injectable } from '@tsed/di';
import {DB} from '../db/db.connection'
import { CartLineItem, cartLineItems, carts } from '../db/schema';
import { CartWithLineItemsInput } from '../inputs/cart.input';
import { eq } from 'drizzle-orm';
import { NotFound } from '@tsed/exceptions'

@Injectable()
export class CartRepository {
    async createCart(customerId: string, lineItem: CartLineItem): Promise<{ success: boolean, id: string }> {
        console.log('data in repository: ', {customerId, lineItem})
        const result = await DB.insert(carts)
            .values({ customerId })
            .returning()
            .onConflictDoUpdate({
                target: carts.customerId,
                set: {updatedAt: new Date()}
            })
        
        const [{ id }] = result
        
        if (id) {
            await DB.insert(cartLineItems).values({
                cartId: id,
                productId: lineItem.productId,
                itemName: lineItem.itemName,
                price: lineItem.price,
                quantity: lineItem.quantity,
                variant: lineItem.variant
            })
        }

        return {
            success: true,
            id
        }
    }

    async findCart(id: string): Promise<CartWithLineItemsInput | null> {
        const cart = await DB.query.carts.findFirst({
            where: (carts, { eq }) => eq(carts.customerId, id),
            with: {lineItems: true}
        })
        if (!cart) {
            return null
        }

        return cart
    }

    async updateCart(id: string, quantity: number): Promise<{ success: boolean, data: CartLineItem}> {
        const [cartLineItem] = await DB.update(cartLineItems)
            .set({ quantity })
            .where(eq(cartLineItems.id, id))
            .returning()
        
        return {
            success: true,
            data: cartLineItem
        }
    }

    async deleteCart(id: string): Promise<{success: true}> {
        await DB.delete(cartLineItems).where(eq(cartLineItems.id, id)).returning()
        return {success: true}
    }

    async clearCartData(id: string): Promise<boolean> {
        await DB.delete(carts).where(eq(carts.customerId, id)).returning()
        return true
    }

    async findCartByProductId(customerId: string, productId: string): Promise<CartLineItem> {
        const cart = await DB.query.carts.findFirst({
            where: (carts, { eq }) => eq(carts.customerId, customerId),
            with: {lineItems: true}
        })
        const lineItem = cart?.lineItems.find((item) => item.productId === productId)

        return lineItem as CartLineItem
    }
}