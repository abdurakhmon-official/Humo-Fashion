import type { SignupInput } from "~/types/user-input/SignupInput";
import { BaseService } from "./base.service";
import type { Users } from "~/types/user-model/Users";
import type { SigninInput } from "~/types/user-input/SigninInput";
import type { ForgotPasswordInput } from "~/types/user-input/ForgotPasswordInput";
import type { ResetPasswordInput } from "~/types/user-input/ResetPasswordInput";
import type { UpdateUserInformationInput } from "~/types/user-input/UpdateUserInformationInput";

export class AuthenticationService extends BaseService<any> {
  protected override BASE_PATH: string = "auth";

  constructor() {
    const { $userApi } = useNuxtApp();
    super($userApi);
  }

  async signUp(input: SignupInput) {
    return await this.sendPost<{
      token: string;
      user: Users;
    }>(`/signup`, input);
  }

  async login(input: SigninInput) {
    return await this.sendPost<{
      token: string;
      user: Users;
    }>(`/login`, input);
  }

  async updateUser(input: UpdateUserInformationInput) {
    return await this.sendPost<{
      success: boolean;
    }>("/update", input);
  }

  async forgotPassword(input: ForgotPasswordInput) {
    return await this.sendPost<{
      success: boolean;
    }>("/forgot-password", input);
  }

  async resetPassword(input: ResetPasswordInput) {
    return await this.sendPost<{
      success: boolean;
    }>("/reset-password", input);
  }

  async loadMe(): Promise<{
    success: boolean;
    user: Users;
  }> {
    return await this.sendGet("/me");
  }
}
