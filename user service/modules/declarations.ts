import { PrismaClient, Users } from "@/generated/prisma";

declare global {
  var __db: PrismaClient;
  var __dbEx: any;

  namespace Express {
    export interface Request {
      token?: string;
      user?: Partial<Users & { isAdmin: boolean; isSuper: boolean }>;
    }
  }
}

