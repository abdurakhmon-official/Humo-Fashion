import { CreateCartInput } from "@/inputs/cart.input";
import { Authenticate, Authorized } from "@/middlewares/auth.middleware";
import { CartService } from "@/services/cart.service";
import { BodyParams, Delete, Get, Patch, PathParams, Post } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";

@Controller('/cart')
export class CartController {
    @Inject()
    private cartService!: CartService

    @Post('/')
    @Authorized(Authenticate())
    async createCart(@BodyParams() data: CreateCartInput) { 
        return await this.cartService.createCart(data)
    }
    
    @Get('/')
    @Authorized(Authenticate())
    async getCart() { 
        return await this.cartService.getCart();
    }
    
    @Patch('/:lineItemId')
    @Authorized(Authenticate())
    async editCart(
        @BodyParams('quantity') quantity: number,
        @PathParams('lineItemId') lineItemId: string
    ) {
        return await this.cartService.editCart({id: lineItemId, quantity})
     }
    
    @Delete('/:lineItemId')
    @Authorized(Authenticate())
    async deleteCart(@PathParams('lineItemId') lineItemId: string) {
        return await this.cartService.deleteCart(lineItemId)
    }
}