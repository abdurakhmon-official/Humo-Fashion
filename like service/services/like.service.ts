import { PlatformContext } from "@tsed/common";
import { Injectable, InjectContext } from "@tsed/di";
import { BadRequest } from '@tsed/exceptions'
import { Request } from 'express'
import prisma from '../modules/db'
import { MessageBroker } from "@/utils/broker/message-broker";
import { LikeEvent } from "@/types";

@Injectable()
export class LikeService {
    @InjectContext()
    private context!: PlatformContext

    get req() {
        return this.context.getRequest<Request>()
    }

    get user() {
        return this.req.user
    }

    async likeProduct(productId: string) {
        const userId = this.user?.id

        if (!userId) {
            throw new BadRequest('User not authenticated')
        }

        const existingLike = await prisma.productLike.findUnique({
            where: {
                userId_productId: {
                    userId,
                    productId
                }
            }
        })

        if (existingLike) {
            throw new BadRequest('You have already liked this producttttttttttttttttttttttttttttttt')
        }

        const like = await prisma.productLike.create({
            data: {
                userId,
                productId,
            }
        })
        

        await MessageBroker.publish({
            headers: { source: 'Like-service' },
            topic: 'LikeEvents',
            event: LikeEvent.PRODUCT_LIKED,
            message: {
                likeId: like.id,
                userId: like.userId,
                productId: like.productId,
                createdAt: like.createdAt.toISOString()
            }
        })
        console.log('like.productId', like.productId)

        return {
            success: true,
            message: 'product liked successfully',
            data: like
        }
    }

    async unlikeProduct(productId: string) {
        const userId = this.user?.id

        if (!userId) {
            throw new BadRequest('user not authenticated')
        }

        const existingLike = await prisma.productLike.findUnique({
            where: {
                userId_productId: {
                    userId,
                    productId
                }
            }
        })

        if (!existingLike) {
            throw new BadRequest(`You haven't liked this product yet`)
        }

        await prisma.productLike.delete({
            where: {
                userId_productId: {
                    userId,
                    productId
                }
            }
        })

        await MessageBroker.publish({
            headers: { source: 'like-service' },
            topic: "LikeEvents",
            event: LikeEvent.PRODUCT_UNLIKED,
            message: {
                likeId: existingLike.id,
                userId: existingLike.userId,
                productId: existingLike.productId,
                deletedAt: new Date().toISOString()
            }
        })

        return {
            success: true,
            message: 'Product unliked successfully'
        }
    }

    async getLikeCount(productId: string) {
        const count = await prisma.productLike.count({
            where: {productId}
        })

        return {
            success: true,
            data: {
                productId,
                like_count: count
            }
        }
    }

    async checkUserLiked(productId: string) {
        const userId = this.user?.id

        if (!userId) {
            return {
                success: true,
                data: {
                    isLiked: false
                }
            }
        }

        const like = await prisma.productLike.findUnique({
            where: {
                userId_productId: {
                    userId,
                    productId
                }
            }
        })

        return {
            success: true,
            data: {
                isLiked: !!like,
                likedId: like?.id
            }
        }
    }


    async getUserLikedProducts(page: number, size: number) {
        const userId = this.user?.id

        if (!userId) {
            throw new BadRequest('User not authenticated')
        }

        const [likes, total] = await prisma.$transaction([
            prisma.productLike.findMany({
                where: { userId },
                take: size,
                skip: (page - 1) * size,
                orderBy: {createdAt: 'desc'}
            }),
            prisma.productLike.count({
                where: {userId}
            })
        ])

        return {
            success: true,
            data: {
                items: likes,
                pagination: {
                    page,
                    size,
                    total,
                    totalPages: Math.ceil(total / size)
                }
            }
        }
    }

    async getProductLikers(productId: string, page: number, size: number) {
        const [likes, total] = await prisma.$transaction([
            prisma.productLike.findMany({
                where: { productId },
                take: size,
                skip: (page - 1) * size,
                orderBy: {createdAt: 'desc'}
            }),
            prisma.productLike.count({
                where: {productId}
            })
        ])

        return {
            success: true,
            data: {
                items: likes,
                pagination: {
                    page,
                    size,
                    total,
                    totalPages: Math.ceil(total / size)
                }
            }
        }
    }

    async enrichProduct(productIds: string[]) {
        const userId = this.user?.id
        const likes = await prisma.productLike.findMany({
            where: {
                userId,
                productId: {in: productIds}
            }
        })

        const likedMap = new Map(likes.map(like => [like.productId, like.id]))

        return {
            success: true,
            data: productIds.map(id => ({
                productId: id,
                isLiked: likedMap.has(id),
                likeId: likedMap.get(id)
            }))
        }
    }

    async enrichOneProduct(productId: string) {
        const userId = this.user?.id
        const like = await prisma.productLike.findFirst({
            where: {
                userId,
                productId
            }
        })
        console.log('userId', userId)

        const dataToSend = {
          success: true,
          data: {
            productId,
            isLiked: !!like,
            likeId: like?.id ?? null,
          },
        };

        console.log('dataToSend', dataToSend)

        return {
            success: true,
            data: {
                productId,
                isLiked: !!like,
                likeId: like?.id ?? null
            }
        }


    }
}