import { Authenticate, AuthMiddleware, Authorized } from "@/middlewares/auth.middleware";
import { PaymentService } from "@/services/payment.service";
import { PaymentGateway, StripePayment } from "@/utils/payment";
import { BodyParams, PathParams, UseBefore } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { Get, Post } from "@tsed/schema";

@Controller('/payment')
export class PaymentController {
    @Inject()
    private paymentService!: PaymentService
    
    @Post('/create-payment')
    @Authorized(Authenticate())
    async createPayment(@BodyParams('orderNumber') orderNumber: string) {
        return await this.paymentService.createPayment(orderNumber)
    }

    @Get('/verify-payment/:id')
    @Authorized(Authenticate())
    async verifyPayment(@PathParams('id') id: string) {
        return await this.paymentService.verifyPayment(id)
    }
}