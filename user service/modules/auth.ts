import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { USER_ROLE } from "@/generated/prisma";

export type UserRole = {
  role: USER_ROLE;
};

type PayloadShape = {
  id: string;
  username: string;
};

export function Authenticate(role: USER_ROLE = null): UserRole {
  return { role };
}

export const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hash(password, salt);
};

export const createJWT = ({ id, username }: PayloadShape) => {
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET as string);
  return token;
};
