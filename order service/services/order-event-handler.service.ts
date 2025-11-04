import { OrderRepository } from "@/repository/order.repository";
import { MessageType, OrderStatus, PaymentEvent } from "@/types/broker-types";
import { Inject, Injectable } from "@tsed/di";

@Injectable()
export class OrderEventHandlerService {
  @Inject()
  private orderRepo!: OrderRepository

  async HandleSubscription(message: MessageType): Promise<void> {
    console.log('Received message:', message.event)

    switch (message.event) {
      case PaymentEvent.UPDATE_PAYMENT: 
        await this.handlePaymentUpdate(message)
        break
      default: 
        console.log('unknown event: ', message.event)
    }
  }

  private async handlePaymentUpdate(message: MessageType): Promise<void> {
    const {orderNumber, status, paymentLog} = message.data

    console.log(`Updating order ${orderNumber} with payment status: ${status}`)

    try {
      const order = await this.orderRepo.findOrderByOrderNumber(orderNumber)

      if (!order) {
        console.error(`Order not found: ${orderNumber}`)
        return 
      }

      let orderStatus: OrderStatus

      switch (status) {
        case 'succeeded': 
          orderStatus = OrderStatus.COMPLETED
          break
        case 'processing':
          orderStatus = OrderStatus.PENDING
          break
        case 'require_payment_method':
        case 'requires_confirmation':
        case 'requires_action':
          orderStatus = OrderStatus.PENDING
          break
        case 'canceled': 
          orderStatus = OrderStatus.CANCELLED
          break
        default:
          orderStatus = OrderStatus.FAILED
      }

      await this.orderRepo.updateOrder(order.id as unknown as string, orderStatus)

      if (paymentLog & paymentLog.id) {
        await this.orderRepo.updateTransactionId(order.id as unknown as string, paymentLog.ids)
      }

      console.log(`Order ${orderNumber} updated successfully to status: ${orderStatus}`)
    } catch (error: any) {
      console.error(`Error updating order ${orderNumber}: `, error.message)
    }
  }
}