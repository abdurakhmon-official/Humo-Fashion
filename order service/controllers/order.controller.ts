import { Authenticate, Authorized } from "../middlewares/auth.middleware";
import  OrderService  from "../services/order.service";
import { OrderStatus } from "../types/broker-types";
import { BodyParams, Delete, Get, Patch, PathParams, Post } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";

@Controller('/orders')
export class OrderController {
    @Inject()
    private orderService!: OrderService

    @Post('/')
    @Authorized(Authenticate())
    async create() {
        return await this.orderService.createOrder()
    }

    @Get('/')
    @Authorized(Authenticate())
    async get() {
        return await this.orderService.getOrders()
    }

    @Get('/:id')
    @Authorized(Authenticate())
    async getById(@PathParams('id') id: string) {
        return await this.orderService.getOrder(id)
    }

    // both are TODO: Implement
    // only going to call from microservice, not customers
    @Patch('/:id')
    async update(@PathParams('id') id: string, @BodyParams() status: OrderStatus) {
        return await this.orderService.updateOrder(id, status)
    }

    // only going to call from microservice
    @Delete('/:id')
    async deleteOrder(@PathParams('id') id: string) {
        return await this.orderService.deleteOrder(id)
    }

    @Get('/:id/checkout')
    async getCheckout(@PathParams('id') id: string) {
        return await this.orderService.checkoutOrder(id)
    }
}