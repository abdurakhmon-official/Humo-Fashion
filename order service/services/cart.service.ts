import { CreateCartInput, CreateCartInputSchema, EditCartInput, EditCartInputSchema } from "@/inputs/cart.input";
import { CartRepository } from "../repository/cart.repository";
import { Inject, Injectable, InjectContext } from "@tsed/di";
import { PlatformContext } from "@tsed/common";
import { Request } from "express";
import {GetProductDetails, GetStockDetails, logger } from "../utils";
import {NotFound, Unauthorized,} from '@tsed/exceptions'
import { CartLineItem } from "@/db/schema";

@Injectable()
export class CartService {
    @InjectContext() 
    private context!: PlatformContext

    @Inject()
    private cartRepo!: CartRepository

    get req() {
        return this.context.getRequest<Request>()
    }

    get user() {
        return this.req.user
    }

    async createCart(input: CreateCartInput) {
        const data = CreateCartInputSchema.parse(input)
        console.log('data in service', data)

        // get product details from catalog service
        const product = await GetProductDetails(data.productId)
        console.log('detailed product from catalog service', product)
        if (!product) throw new NotFound('Product not found')
        logger.info(product)

        if (product.stock < data.quantity) {
            throw new NotFound('product is out of stock')
        }

        // find if the product is already in cart 
        const existingLineItem = await this.cartRepo.findCartByProductId(
            this.user?.id as unknown as string,
            data.productId,
        )
        console.log('existingLineItem', existingLineItem)
        const priceInCents = Math.round(product.price2 * 100)
        if (existingLineItem) {
            const newQuantity = Number(existingLineItem.quantity) + Number(data.quantity)
            return this.cartRepo.updateCart(existingLineItem.id, newQuantity);
        }

        const {success, id} = await this.cartRepo.createCart(this.user?.id as unknown as string, {
            productId: product.id,
            price: priceInCents,
            quantity: data.quantity,
            itemName: product.name,
            variant: product.variant
        } as unknown as CartLineItem)
        return {
            success,
            data: id
        }
    }

    async getCart() {
        // get customer cart data
        const cart = await this.cartRepo.findCart(this.user?.id as unknown as string)
        if (cart === null) {
            return {
                success: true,
                data: null
            }
        }

        // list out all line items in the cart
        const lineItems = cart.lineItems

        if (!lineItems.length) {
            return {
                success: true,
                data: null
            }
        }

        // verify with inventory serivice if the product is still  available
        const dataToSend = lineItems.map((item) => item.productId);
        const stockDetails = await GetStockDetails(dataToSend)

        if (Array.isArray(stockDetails)) {
            // update stock availability in cart line items
            lineItems.forEach((lineItem) => {
                const stockItem = stockDetails.find(
                    (stock) => stock.id === lineItem.productId
                )
                if (stockItem) {
                    lineItem.availability = stockItem.stock
                }
            })

            // update cart line items
            cart.lineItems = lineItems
        }

        // return update cart data with latest stock availability
        return {
            success: true,
            data: cart
        }
    }

    async authorisedCart(lineItemId: string, customerId: string) {
        const cart = await this.cartRepo.findCart(customerId)
        if (!cart) {
            throw new NotFound('cart does not exist')
        }

        const lineItem = cart.lineItems.find((item) => item.id === lineItemId)
        if (!lineItem) {
            throw new Unauthorized('You are not authorized to edit this cart')
        }

        return lineItem
    }

    async editCart(input: EditCartInput) {
        const data = EditCartInputSchema.parse(input)
        await this.authorisedCart(data.id, this.user?.id as unknown as string)
        const response = await this.cartRepo.updateCart(data.id, data.quantity)
        return response
    }

    async deleteCart(id: string) {
        await this.authorisedCart(id, this.user?.id as unknown as string)
        const response = await this.cartRepo.deleteCart(id)
        return response
    }
}