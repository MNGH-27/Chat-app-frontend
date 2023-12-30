import { isAxiosError } from 'axios'

import { axiosInterceptor } from '@core/services/axios'
import type TCheckCOtpCodeField from '@core/types/forms/check-otp-forget-password-form-type'

const checkOtpCodeApi = async (data: TCheckCOtpCodeField) => {
    try {
        const response = await axiosInterceptor.post('/auth/checkOtp', data)

        if (response.status === 201) {
            return response
        }

        return Promise.reject(response)
    } catch (error) {
        //check if type of error is AxiosError
        if (isAxiosError(error)) return Promise.reject(error.response)

        return Promise.reject(error)
    }
}

export default checkOtpCodeApi
