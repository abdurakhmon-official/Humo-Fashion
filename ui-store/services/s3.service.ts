import { BaseService } from "./base.service";

type S3PolicyResponse = {
  policy: {
    bucket: string;
    key: string;
    acl: string;
    success_action_status: string;
    policy: string;
    x_amz_algorithm: string;
    x_amz_credential: string;
    x_amz_date: string;
    x_amz_signature: string;
  };
  url: string;
  region: string;
};

type Policy = {
  bucket: string;
  key: string;
  acl: string;
  success_action_status: string;
  policy: string;
  x_amz_algorithm: string;
  x_amz_credential: string;
  x_amz_date: string;
  x_amz_signature: string;
};

export class S3Service extends BaseService<any> {
  protected override BASE_PATH: string = "s3";

  constructor() {
    const { $userApi } = useNuxtApp();
    super($userApi);
  }

  async generatePolicy(
    folder: string,
    filename: string,
    contentType: string
  ): Promise<{
    success: boolean;
    policy: Policy;
    url: string;
    region: string;
  }> {
    return await this.sendGet<S3PolicyResponse>("/generate-policy", {
      folder,
      filename,
      contentType,
    });
  }
}
