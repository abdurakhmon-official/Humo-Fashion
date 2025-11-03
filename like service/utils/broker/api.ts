import { User } from '@/modules/declarations'
import { Unauthorized } from '@tsed/exceptions'
import axios from 'axios'

const AUTH_SERVICE_BASE_RL = process.env.AUTH_SERVICE_BASE_URL || 'http://localhost:9102'

export const ValidateUser = async (token: string) => {
    try {
        const response = await axios.get(`${AUTH_SERVICE_BASE_RL}/api/auth/validate`, {
            headers: {
                Authorization: token
            }
        })

        if (response.status !== 200) {
            throw new Unauthorized('user not authorized')
        }

        return response.data as User
    } catch (error: any) {
        throw new Unauthorized('user not authorized')
    }
}