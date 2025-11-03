import axios from 'axios'
import { Unauthorized } from '@tsed/exceptions'
import { User } from '@/modules/declarations';

const AUTH_SERVICE_BASE_URL = process.env.AUTH_SERVICE_BASE_URL || "http://localhost:9102";

export const ValidateUser = async (token: string) => {
  try {
    const response = await axios.get(`${AUTH_SERVICE_BASE_URL}/api/auth/validate`, {
      headers: {
        Authorization: token,
      },
    });

    if (response.status !== 200) {
      throw new Unauthorized("user not authorised");
    }

    const sss = response.data as User;
    return sss;
  } catch (error) {
    throw new Unauthorized("user not authorised");
  }
};
