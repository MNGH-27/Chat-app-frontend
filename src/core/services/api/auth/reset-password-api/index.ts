import { isAxiosError } from 'axios'

import { axiosInterceptor } from '@core/services/axios'
import type TResetPasswordFormType from '@core/types/forms/reset-password-forget-password-form-type'

const resetPasswordApi = async (data: TResetPasswordFormType) => {
    try {
        const response = await axiosInterceptor.post('/auth/reset-password', data)

        if (response.status === 201) {
            return response
        }

        return Promise.reject(response)
    } catch (error) {
        //check type of error to be axios error
        if (isAxiosError(error)) return Promise.reject(error.response)

        return Promise.reject(error)
    }
}

export default resetPasswordApi
