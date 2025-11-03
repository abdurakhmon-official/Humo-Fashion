import { InProcessOrderInput } from '@/types/input/InProcessOrderInput';
import { logger } from '../logger'
import { BadRequest, Unauthorized } from '@tsed/exceptions';
import axios from 'axios';
import { User } from '@/modules/declarations';

const ORDER_SERVICE_BASE_URL = process.env.ORDER_SERVICE_BASE_URL || 'http://localhost:9101'
const AUTH_SERVICE_BASE_URL = process.env.AUTH_SERVICE_BASE_URL || 'http://localhost:9102'

export const GetProductDetails = async (orderNumber: string) => {
    try {
        const response = await axios.get(
            `${ORDER_SERVICE_BASE_URL}/orders/${orderNumber}/checkout`
        )
        return response.data as InProcessOrderInput
    } catch (error: any) {
        logger.error(error)
        throw new BadRequest("product not found");
    }
}

export const validateUser = async (token: string) => {
    try {
        const response = await axios.get(`${AUTH_SERVICE_BASE_URL}/auth/validate`, {
            headers: {
                Authorization: token
            }
        })

        if (response.status !== 200) {
            throw new Unauthorized('user not authorised')
        }

        return response.data as User
    } catch (error: any) {
        throw new Unauthorized('user not authorised')
    } 
}