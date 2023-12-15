import { isAxiosError } from 'axios'

import { axiosInterceptor } from '@core/services/axios'
import type TGetEmailFormatPasswordFormType from '@core/types/forms/get-email-forget-password-form-type'

const forgetPasswordApi = async (data: TGetEmailFormatPasswordFormType) => {
    try {
        const response = await axiosInterceptor.post('/auth/forget-password', data)

        if (response.status === 201) {
            return response
        }

        return Promise.reject(response)
    } catch (error) {
        //check type of error be AxiosError
        if (isAxiosError(error)) return Promise.reject(error.response)

        return Promise.reject(error)
    }
}

export default forgetPasswordApi
