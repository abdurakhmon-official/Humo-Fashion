import { ForgotPasswordInput, ResetPasswordInput, SigninInput, SignupInput, UpdateUserInformationInput } from "@/inputs/user.input";
import { Authorized } from "@/middlewares/auth.middleware";
import { Authenticate } from "@/modules/auth";
import { AuthService } from "@/services/auth.service";
import { BodyParams, HeaderParams, PathParams, QueryParams, Req } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { Get, Post } from "@tsed/schema";
import { Request } from "express";

@Controller("/auth")
export class AuthController {
  @Inject()
  private authService!: AuthService;

  @Post("/login")
  async login(@BodyParams() data: SigninInput) {
    return await this.authService.login(data);
  }

  @Post("/reset-password")
  @Authorized(Authenticate())
  async resetPassword(@BodyParams() data: ResetPasswordInput) {
    return await this.authService.resetPassword(data);
  }

  @Post('/update')
  @Authorized(Authenticate())
  async update(@BodyParams() data: UpdateUserInformationInput) {
    return await this.authService.update(data)
  }

  @Post("/signup")
  async signup(@BodyParams() data: SignupInput) {
    return await this.authService.signup(data);
  }

  @Get("/validate")
  async validate(@HeaderParams("authorization") token: string) {
    return await this.authService.validate(token);
  }

  @Get("/profile")
  @Authorized(Authenticate())
  async profile(@Req() req: Request) {
    const user = req.user;
    return {
      success: true,
      user,
    };
  }

  @Get('/me')
  @Authorized(Authenticate())
  async me(@Req() req: Request) {
    return {success: true, user: req.user}
  }

  @Post("/forgot-password")
  async forgotPassword(@BodyParams() data: ForgotPasswordInput) {
    return await this.authService.forgotPassword(data);
  }
}