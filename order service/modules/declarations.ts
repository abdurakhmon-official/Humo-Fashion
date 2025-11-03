export {}; 

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
  namespace Express {
    export interface Request {
      token?: string; 
      user?: Partial<User & { isAdmin: boolean; isSuper: boolean}>; 
    }
  }
}
