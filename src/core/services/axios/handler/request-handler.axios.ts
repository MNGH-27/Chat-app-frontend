import { type AxiosError } from 'axios'

import { type TAxiosRequestConfigType, type TRequestType, type TResponseType } from './resources'

const axiosRequestHandler =
    <TParam, TResponse, TError = AxiosError>(request: TRequestType<TParam, TResponse>) =>
    async (config?: TAxiosRequestConfigType<TParam>): TResponseType<TResponse, TError> => {
        try {
            const response = await request(config)
            return { code: 'success', data: response.data }
        } catch (e) {
            return { code: 'error', error: e as TError }
        }
    }

export default axiosRequestHandler
