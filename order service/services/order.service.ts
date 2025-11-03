import { CartRepository } from "../repository/cart.repository";
import { OrderRepository } from "../repository/order.repository";
import { OrderStatus } from "../types/broker-types";
import { PlatformContext } from "@tsed/common";
import { Inject, InjectContext, Injectable } from "@tsed/di";
import { Request } from "express";
import { BrokerService } from "./broker.service";
import { randomUUID } from "crypto";
import { InProcessOrderInput, OrderLineItemInput, OrderWithLineItemsInput } from '../inputs'

@Injectable()
export default class OrderService {
  @InjectContext()
  private context!: PlatformContext;

  @Inject()
  private cartRepo!: CartRepository;

  @Inject()
  private orderRepo!: OrderRepository;

  @Inject()
  private brokerService!: BrokerService;

  get req() {
    return this.context.getRequest<Request>();
  }

  get user() {
    return this.req.user;
  }

  async createOrder() {
    const cart = await this.cartRepo.findCart(this.user?.id as unknown as string);
    if (!cart) {
      throw new Error("Cart not found");
    }

    let cartTotal = 0;
    let orderLineItems: OrderLineItemInput[] = [];

    cart.lineItems.forEach((item) => {
      cartTotal += item.quantity * Number(item.price);
      orderLineItems.push({
        productId: item.productId,
        itemName: item.itemName,
        quantity: item.quantity,
        price: item.price.toString(),
      } as OrderLineItemInput);
    });

    const orderNumber = randomUUID()

    const orderInput: OrderWithLineItemsInput = {
      orderNumber,
      txnId: null,
      status: OrderStatus.PENDING,
      customerId: this.user?.id as unknown as string,
      amount: cartTotal,
      orderItems: orderLineItems,
    };

    await this.orderRepo.createOrder(orderInput);
    await this.cartRepo.clearCartData(this.user?.id as unknown as string);

    await this.brokerService.SendCreateOrderMessage(orderInput);

    return { message: "Order created successfully", orderNumber };
  }

  async updateOrder(orderId: string, status: OrderStatus) {
    await this.orderRepo.updateOrder(orderId, status);

    if (status === OrderStatus.CANCELLED) {
      await this.brokerService.SendOrderCancelledMessage({ orderId, status });
    }

    return { message: "Order updated successfully" };
  }

  async getOrder(orderId: string) {
    const order = await this.orderRepo.findOrder(orderId);
    if (!order) throw new Error("Order not found");
    return order;
  }

  async getOrders() {
    const orders = await this.orderRepo.findOrderByCustomerId(this.user?.id as unknown as string);
    if (!Array.isArray(orders)) throw new Error("Orders not found");
    return orders;
  }

  async deleteOrder(orderId: string) {
    await this.orderRepo.deleteOrder(orderId);
    return true;
  }

  async checkoutOrder(orderId: string) {
    const order = await this.orderRepo.findOrder(orderId);
    if (!order) throw new Error("Order not found");

    const checkoutOrder: InProcessOrderInput = {
      id: order.id,
      orderNumber: order.orderNumber,
      status: order.status,
      customerId: order.customerId,
      amount: order.amount,
      createdAt: order.createdAt ?? null,
      updatedAt: order.updatedAt ?? null,
    };

    return checkoutOrder;
  }
}
