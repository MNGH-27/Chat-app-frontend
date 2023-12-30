import { isAxiosError } from 'axios'

import { axiosInterceptor } from '@core/services/axios'
import type TLoginFormType from '@core/types/forms/login-form-type'

const loginApi = async (data: TLoginFormType) => {
    try {
        const response = await axiosInterceptor.post('/auth/login', data)

        if (response.status === 201) {
            return response
        }

        //return response as error to handle it on onError of useMutation
        return Promise.reject(response)
    } catch (error) {
        //check type of error to be axios error
        if (isAxiosError(error)) return Promise.reject(error.response)
        return error
    }
}

export default loginApi
