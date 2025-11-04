import { GetProductDetails } from "@/utils/broker/api";
import { PaymentGateway } from "@/utils/payment/payment.type";
import { PlatformContext } from "@tsed/common";
import { Inject, Injectable } from "@tsed/di";
import { Request } from "express";
import { BrokerService } from "./broker.service";
import { StripePayment } from "@/utils/payment";

@Injectable()
export class PaymentService {
    @Inject()
    private context!: PlatformContext

    @Inject()
    private brokerService!: BrokerService

    private paymentGateway: PaymentGateway = StripePayment

    get req() {
        return this.context.getRequest<Request>()
    }

    get user() {
        return this.req.user
    }

    async createPayment(orderNumber: string) {
        const order = await GetProductDetails(orderNumber)
        if (order.customerId !== this.user?.id as unknown as string) {
            throw new Error('user not authorised to create payment')
        }

        const amountInCents = order.amount * 100
        const orderMetaData = {
            orderNumber: order.orderNumber,
            userId: this.user?.id ?? ''
        }

        // call payment gateway to create payment 
        const paymentResponse = await this.paymentGateway.createPayment(
            amountInCents, orderMetaData
        )

        return {
            secret: paymentResponse.secret,
            pubKey: paymentResponse.pubKey,
            amount: amountInCents,
            order: order
        }
    }

    async verifyPayment(paymentId: string) {
        // call payment Gateway to verify payment
        const paymentResponse = await this.paymentGateway.getPayment(paymentId)

        // update order status through message broker
        await this.brokerService.sendPaymentUpdateMessage({
            orderNumber: paymentResponse.orderNumber,
            status: paymentResponse.status,
            paymentLog: paymentResponse.paymentLog
        })

        // return payment status is not necessary just for response for frontend
        return {
            message: "Payment verified",
            status: paymentResponse.status,
            paymentLog: paymentResponse.paymentLog
        }
        
    }

    async markCashPayment(orderNumber: string) {
        const order = await GetProductDetails(orderNumber)

        if (order.customerId !== this.user?.id as string) {
            throw new Error('Not authorized to complete this cash payment')
        }

        await this.brokerService.sendPaymentUpdateMessage({
            orderNumber: order.orderNumber,
            status: 'PENDING',
            paymentLog: {
                paidWith: 'cash',
                date: new Date().toISOString(),
                amount: order.amount
            }
        })

        return {
            message: "Cash payment accepted. Deliver after receiving cash.",
            orderNumber,
            status: 'PENDING'
        }
    }
}