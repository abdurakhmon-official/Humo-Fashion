import {
  ForgotPasswordInput,
  ForgotPasswordInputSchema,
  ResetPasswordInput,
  ResetPasswordInputSchema,
  SigninInput,
  SigninInputSchema,
  SignupInput,
  SignupInputSchema,
  UpdateUserInformationInput,
  UpdateUserInformationInputSchema,
} from "@/inputs/user.input";
import { PlatformContext } from "@tsed/common";
import { Injectable, InjectContext } from "@tsed/di";
import { Request } from "express";
import prisma from "../modules/db";
import { BadRequest, NotFound, Unauthorized } from "@tsed/exceptions";
import { comparePassword, createJWT, hashPassword } from "@/modules/auth";
import jwt from "jsonwebtoken";
import { sendEmail } from "@/utils/email";
import { SendEmailType } from "@/utils/enum";

@Injectable()
export class AuthService {
  @InjectContext()
  private context!: PlatformContext;

  get req() {
    return this.context.getRequest<Request>();
  }

  get user() {
    return this.req.user;
  }

  async signup(input: SignupInput) {
    const data = SignupInputSchema.parse(input);
    const { username, password, email } = data;

    let userByEmail = await prisma.users.findUnique({
      where: { email },
    });

    let userByUsername = await prisma.users.findUnique({
      where: { username },
    });

    if (userByEmail || userByUsername) {
      throw new BadRequest("username or email already exist");
    }

    const user = await prisma.users.create({
      data: Object.assign<any, any>(data, {
        password: await hashPassword(password),
      }),
    });

    const token = createJWT({ id: user.id, username: user.username });

    return {
      success: token,
      data: {
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
          profileImage: user.profileImage,
          role: user.role,
          deleted: user.deleted,
          isAdmin: user.role === "ADMIN",
          isSuperAmin: user.role === "SUPER_ADMIN",
          isUser: user.role === "USER",
          createdAt: user.createdAt,
        },
      },
    };
  }

  async login(input: SigninInput) {
    const data = SigninInputSchema.parse(input);
    const { username, password } = data;

    const user = await prisma.users.findUnique({
      where: { username },
    });

    if (!user) {
      throw new BadRequest("username or password incorrect!");
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      throw new BadRequest("username or passowrd incorrect");
    }

    const token = createJWT({ id: user.id, username: user.username });
    const dataToSend = {
      token: token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        profileImage: user.profileImage,
        role: user.role,
        deleted: user.deleted,
        isAdmin: user.role === "ADMIN",
        isSuperAmin: user.role === "SUPER_ADMIN",
        isUser: user.role === "USER",
        createdAt: user.createdAt,
      },
    };
    return {
      success: true,
      data: dataToSend,
    };
  }

  async update(input: UpdateUserInformationInput) {
    const data = UpdateUserInformationInputSchema.parse(input)

    if (!this.user?.id) return

    await prisma.users.update({
      where: { id: this.user.id },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        phone: data.phone,
        email: data.email,
        deleted: data.deleted,
        profileImage: data.profileImage
      }
    })

    return {
      success: true
    }
  }

  async validate(token: string) {
    if (!token) throw new Unauthorized("Unauthorized");

    try {
      const payload: any = jwt.verify(token, process.env.JWT_SECRET as string);

      const user = await prisma.users.findUnique({
        where: { id: payload.id },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
        },
      });

      if (!user) {
        throw new Unauthorized("Unauthorized");
      }
      const res = {
        ...user,
        isAdmin: user.role === "ADMIN",
        isSuperAdmin: user.role === "SUPER_ADMIN",
      };
      return res;
    } catch (err: any) {
      throw new Unauthorized("Invalid token");
    }
  }

  async forgotPassword(input: ForgotPasswordInput) {
    const data = ForgotPasswordInputSchema.parse(input);
    const { email } = data;

    let user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) throw new NotFound("User not found");
    console.log("user in forgot password", user);

    const resetToken = createJWT({ id: user.id, username: user.username });
    console.log("resetToken", resetToken);

    const resetLink = `${process.env.FRONTEND_URL}/auth/email-reset-password?token=${resetToken}`;
    console.log("resetLink", resetLink);

    await sendEmail(user.email, "Reset your password", SendEmailType.FORGOT_PASSWORD, { resetLink });

    return {
      success: true,
      message: "Password reset link sent to your email.",
    };
  }

  async resetPassword(input: ResetPasswordInput) {
    const data = ResetPasswordInputSchema.parse(input);

    const { newPassword } = data;

    if (!this.user?.id) {
      throw new Unauthorized("Unauthorized");
    }

    await prisma.users.update({
      where: { id: this.user?.id },
      data: {
        password: await hashPassword(newPassword),
      },
    });

    return { success: true };
  }

  async getUserById(id: string) {
    const user = await prisma.users.findUnique({ where: { id } });
    if (!user) throw new Error("user not found");

    return user
  }
}
