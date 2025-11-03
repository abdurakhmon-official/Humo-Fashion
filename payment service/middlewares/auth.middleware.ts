import { validateUser } from '@/utils/broker/api'
import { Context, Middleware, MiddlewareMethods, Next, Req, Res } from '@tsed/common'
import { Unauthorized } from '@tsed/exceptions'

@Middleware()
export class AuthMiddleware implements MiddlewareMethods {
    async use(
        @Req() request: Req,
        @Context() ctx: Context,
        @Next() next: Next
    ) {
        const token = request.headers.authorization

        if (!token) {
            throw new Unauthorized('Unauthorised: auhtorizaton token missing!')
        }

        if (!token?.startsWith("Bearer ")) {
          throw new Unauthorized("Unauthorised: auhtorizaton token missing!");
        }

        const userData = await validateUser(token)
        ctx.set('user', userData)

        request.user = userData
        next()
    }
}