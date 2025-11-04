import { Context, Middleware, MiddlewareMethods, Req, Res, UseAuth } from "@tsed/common";
import { Request } from "express";
import { Forbidden, Unauthorized } from '@tsed/exceptions'
import { validateUser } from "@/utils/broker";
import { USER_ROLE } from "@/modules/declarations";
import { useDecorators } from '@tsed/core'
import { In, Returns } from '@tsed/schema'

@Middleware()
export class AuthMiddleware implements MiddlewareMethods {
    public async use(@Req() request: Req, @Context() ctx: Context) {
        const options = ctx.endpoint.get(AuthMiddleware) || {}

        await getUser(request)

        if (!request.user) {
            throw new Unauthorized('Unauthorized')
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
        throw new Forbidden('Unauthorized')
    }

    const user = await validateUser(token)

    if (!user) {
        throw new Unauthorized('Unauthorized')
    }

    request.user = user
    request.user.isSuper = user.role === USER_ROLE.SUPER_ADMIN
    request.user.isAdmin = request.user.isSuper || user.role === USER_ROLE.ADMIN
}

export type RoleRequirements = {
    role: USER_ROLE
}

export function Authenticate(role: USER_ROLE = USER_ROLE.USER): RoleRequirements {
    return {role}
}

export function Authorized(options: RoleRequirements) {
    return useDecorators(
        UseAuth(AuthMiddleware, options),
        In('header').Name('Authorization').Type(String).Required(true),
        Returns(401).Description('Unauthorized'),
        Returns(403).Description('Forbidded')
    )
}