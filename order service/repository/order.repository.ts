import { orderLineItems, orders } from "../db/schema";
import { DB } from "../db/db.connection";
import { Injectable } from "@tsed/di";
import { eq } from "drizzle-orm";
import { OrderWithLineItemsInput } from "@/inputs";

@Injectable()
export class OrderRepository {
  async createOrder(
    lineItem: OrderWithLineItemsInput
  ): Promise<{ orderNumber: string; data: OrderWithLineItemsInput }> {
    const result = await DB.insert(orders)
      .values({
        customerId: lineItem.customerId,
        orderNumber: lineItem.orderNumber,
        status: lineItem.status,
        txnId: lineItem.txnId,
        amount: lineItem.amount.toString(),
      })
      .returning();

    const [{ id }] = result;

    if (id) {
      for (const item of lineItem.orderItems) {
        await DB.insert(orderLineItems)
          .values({
            orderId: id,
            itemName: item.itemName,
            price: item.price,
            quantity: item.quantity,
          })
          .execute();
      }
    }

    const createdOrder = await this.findOrder(id);
    if (!createdOrder) {
      throw new Error("created order not found");
    }

    return {
      orderNumber: id,
      data: createdOrder,
    };
  }
  

  async findOrder(id: string): Promise<OrderWithLineItemsInput | null> {
    const order = await DB.query.orders.findFirst({
      where: (orders, { eq }) => eq(orders.id, id),
      with: {
        lineItems: true,
      },
    });

    if (!order) {
      throw new Error("Order not found");
    }

    return order as unknown as OrderWithLineItemsInput;
    }
    
  async updateOrder(id: string, status: string): Promise<OrderWithLineItemsInput> {
    await DB.update(orders)
      .set({
        status: status,
      })
      .where(eq(orders.id, id))
      .execute();

    const order = await this.findOrder(id);
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  }

  async updateTransactionId(id: string, txnId: string): Promise<void> {
    await DB.update(orders)
      .set({
        txnId: txnId,
        updatedAt: new Date(),
      })
      .where(eq(orders.id, id))
      .execute();
  }

  async deleteOrder(id: string): Promise<boolean> {
    await DB.delete(orders).where(eq(orders.id, id)).execute();
    return true;
  }

  async findOrderByCustomerId(customerId: string): Promise<OrderWithLineItemsInput[]> {
    const orders = await DB.query.orders.findMany({
      where: (orders, { eq }) => eq(orders.customerId, customerId),
      with: {
        lineItems: true,
      },
    });

    return orders as unknown as OrderWithLineItemsInput[];
  }

  async findOrderByOrderNumber(orderNumber: string): Promise<OrderWithLineItemsInput | null> {
    const order = await DB.query.orders.findFirst({
      where: (orders, { eq }) => eq(orders.orderNumber, orderNumber),
      with: {
        lineItems: true,
      },
    });

    if (!order) {
      throw new Error("Order not found");
    }

    return order as unknown as OrderWithLineItemsInput;
  }
}
