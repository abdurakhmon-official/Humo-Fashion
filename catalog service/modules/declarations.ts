import { PrismaClient } from "@/generated/prisma";

export enum USER_ROLE {
  USER,
  ADMIN,
  SUPER_ADMIN,
}

export interface User {
  id: number;
  email: string;
  iat: number;
  exp: number;
  role: USER_ROLE
}

declare global {
  var __db: PrismaClient;
  var __dbEx: any;

  namespace Express {
    export interface Request {
      token?: string;
      user?: Partial<User & { isAdmin: boolean; isSuper: boolean }>;
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: string;
      PORT?: number;
      STAGE?: string;
      JWT_SECRET: string;
      DATABASE_URL: string;
      AWS_ACCESS_KEY_ID: string;
      AWS_SECRET_ACCESS_KEY: string;
      AWS_REGION: string;
      AWS_S3_BUCKET: string;
      AWS_FILE_VIEW_EXPIRY_MINUTES: number;
    }
  }
}

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}
