import { AuthenticationService } from "~/services/authorization.service"
import { BrandService } from "~/services/brand.service"
import { OrderService } from "~/services/order.service"
import { ProductService } from "~/services/product.service"
import { S3Service } from "~/services/s3.service"
import { SocialService } from "~/services/social.service"

export const useService = () => {
    return {
        $authentication: new AuthenticationService(),
        $brand: new BrandService(),
        $product: new ProductService(),
        $social: new SocialService(),
        $order: new OrderService(),
        $s3: new S3Service()
    }
}