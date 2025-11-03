import { Context, Middleware, MiddlewareMethods, Req, UseAuth } from "@tsed/common";
import { Request } from 'express'
import { Forbidden, Unauthorized } from '@tsed/exceptions'
import { ValidateUser } from "@/utils/broker/api";
import { USER_ROLE } from "@/modules/declarations";
import { useDecorators } from '@tsed/core'
import { In, Returns} from '@tsed/schema'

@Middleware()
export class AuthMiddleware implements MiddlewareMethods {
    public async use(@Req() request: Req, @Context() ctx: Context) {
        const options = ctx.endpoint.get(AuthMiddleware) || {}

        await getUser(request)

        if (!request.user) {
            throw new Unauthorized('user not authorized')
        }

        if (request.user.role === USER_ROLE.ADMIN) {
            return true
        }

        if (options.role) {
            if (!request.user.role === options.role) {
                throw new Forbidden('You are not authorized to access this resourse')
            }
        }
    }
}

async function getUser(request: Request) {
    const token = request.token
    if (!token) {
        throw new Unauthorized('user not authorized by token')
    }

    try {
        const user = await ValidateUser(token)

        if (!user) {
            throw new Unauthorized("user not authorized")
        }

        request.user = user
        request.user.isSuper = user.role === USER_ROLE.SUPER_ADMIN,
        request.user.isAdmin = request.user.isSuper || user.role === USER_ROLE.ADMIN
    } catch (error: any) {
        throw new Unauthorized(error.message)
    }
}

export type RoleRequirements = {
    role: USER_ROLE
}

export function Authenticate(role: USER_ROLE = USER_ROLE.USER): RoleRequirements {
  return { role };
}

export function Authorized(options: RoleRequirements): Function {
    return useDecorators(
        UseAuth(AuthMiddleware, options),
        In('header').Name('Authorization').Type(String).Required(true),
        Returns(401),
        Returns(403)
    )
}