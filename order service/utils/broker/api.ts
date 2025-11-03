import axios from 'axios'
import { User } from '../../modules/declarations'
import { logger } from '../logger'
import {NotFound } from '@tsed/exceptions'
import { Product } from '../../dto/product.dto'
import {Unauthorized} from '@tsed/exceptions'

const AUTH_SERVICE_BASE_URL = process.env.AUTH_SERVICE_BASE_URL || 'http://localhost:9102'
const CATALOG_SERVICE_BASE_URL = process.env.CATALOG_SERVICE_BASE_URL || 'http://localhost:9100'

export const ValidateUser = async (token: string) => {
    try {
        const response = await axios.get(`${AUTH_SERVICE_BASE_URL}/api/auth/validate`, {
            headers: {
                Authorization: token
            }
        })

        if (response.status !== 200) {
            throw new Unauthorized("user not authorised");
        }

        const sss = response.data as User
        return sss
    } catch (error) {
        throw new Unauthorized("user not authorised");
    }
}

export const GetProductDetails = async (productId: string) => {
    try {
        const {data} = await axios.get(
            `${CATALOG_SERVICE_BASE_URL}/api/products/${productId}`
        )
        console.log('data in api.ts', data.data)
        return data.data as Product
    } catch (error) {
        logger.error(error)
        throw new NotFound('product not found')
    }
}

export const GetStockDetails = async (ids: string[]) => {
    try {
        const response = await axios.post(
          `${CATALOG_SERVICE_BASE_URL}/api/products/stock`,
          {
            ids,
          },
        );
        return response.data as Product[]
    } catch (error) {
        logger.error(error)
        throw new NotFound('error on getting stock details')
    }
}