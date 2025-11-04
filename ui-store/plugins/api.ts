import type { Axios, AxiosInstance } from "axios"
import axios from "axios"

export default defineNuxtPlugin((nuxtApp) => {
    const auth = useAuth()
    const config = useRuntimeConfig()

    const catalogApi: AxiosInstance = axios.create({
        baseURL: `${config.public.baseCatalogApiUrl}${config.public.apiBase}`,
        headers: {
            "Content-Type": "application/json"
        }
    })

    const orderApi: AxiosInstance = axios.create({
        baseURL: `${config.public.baseOrderApiUrl}${config.public.apiBase}`,
        headers: {
            "Content-Type": "application/json"
        }
    })

    const userApi: AxiosInstance = axios.create({
        baseURL: `${config.public.baseUserApiUrl}${config.public.apiBase}`,
        headers: {
            "Content-Type": "application/json"
        }
    })

    const paymentApi: AxiosInstance = axios.create({
        baseURL: `${config.public.basePaymentApiUrl}${config.public.apiBase}`,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const socialApi: AxiosInstance = axios.create({
        baseURL: `${config.public.baseSocialApiUrl}${config.public.apiBase}`,
        headers: {
            "Content-Type": "application/json"
        }
    })

    const addInterceptors = (instance: AxiosInstance) => {
        instance.interceptors.request.use(
            (config) => {
                const { isLoggedIn, accessToken } = auth
                
                if (isLoggedIn) {
                    config.headers.Authorization = `Bearer ${accessToken}`
                }

                return config
            }
        )

        instance.interceptors.response.use(
            (response) => {
                if (response.data.message) {
                    alert(response.data.message)
                }
                return response
            },
            (error) => {
                alert(error.response.data.message || error.message) 
                if (error.response.status === 401) {
                    alert('Unauthorized request')
                }
                return Promise.reject(error)
            }
        )
    }

    addInterceptors(catalogApi)
    addInterceptors(orderApi)
    addInterceptors(userApi)
    addInterceptors(socialApi)
    addInterceptors(paymentApi)

    return {
        provide: {
            catalogApi,
            orderApi,
            userApi,
            socialApi,
            paymentApi
        }
    }
})