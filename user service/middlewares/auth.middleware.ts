import { Context, Middleware, MiddlewareMethods, Req, UseAuth } from "@tsed/common";
import { Request } from "express";
import { Forbidden, Unauthorized } from '@tsed/exceptions'
import jwt from 'jsonwebtoken'
import prisma from '../modules/db'
import {useDecorators} from '@tsed/core'
import { USER_ROLE } from "@/generated/prisma";
import { In, Returns } from "@tsed/schema";

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
        throw new Unauthorized('Unauthorized')
    }

    try {
        const payload: any = jwt.verify(token, process.env.JWT_SECRET as string)

        const user = await prisma.users.findUnique({
            where: { id: payload.id },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                firstName: true,
                lastName: true,
                phone: true,
                profileImage: true,
                deleted: true,
                createdAt: true
            }
        })

        if (!user) {
            throw new Unauthorized('Unauthorized')
        }

        request.user = user
        if (request.user) {
            request.user.isSuper = user.role === USER_ROLE.SUPER_ADMIN
            request.user.isAdmin = request.user.isSuper || user.role === USER_ROLE.ADMIN
        }
    } catch (err: any) {
        throw new Unauthorized(err._message)
    }
}

export type RoleRequirements = {
    role: USER_ROLE
}

export function Authenticate(role: USER_ROLE = USER_ROLE.USER): RoleRequirements {
    return {role}
}

export function Authorized(options: RoleRequirements): Function {
    return useDecorators(
        UseAuth(AuthMiddleware, options),
        In('header')
            .Name('Authorization')
            .Type(String)
            .Required(true),
        Returns(401),
        Returns(403)
    )
}