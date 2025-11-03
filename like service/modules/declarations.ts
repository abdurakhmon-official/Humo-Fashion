import { PrismaClient } from "@/generated/prisma";

export enum USER_ROLE {
    USER,
    ADMIN,
    SUPER_ADMIN
}

export interface User {
  role: USER_ROLE;
  id: string;
  username: string;
  email: string;
  password: string;
}

declare global {
    var __db: PrismaClient
    var __dbEx: any

    namespace Express {
        export interface Request {
            token?: string;
            user?: Partial<User & {isAdmin: boolean, isSuper: boolean}>
        }
    }
}

