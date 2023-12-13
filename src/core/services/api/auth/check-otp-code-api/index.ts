import { axiosInterceptor } from '@core/services/axios'
import type TCheckCOtpCodeField from '@core/types/forms/check-otp-forget-password-form-type'

const checkOtpCodeApi = async (data: TCheckCOtpCodeField) => {
    try {
        const response = await axiosInterceptor.post('/auth/checkOtp', data)

        if (response.status === 201) {
            return response
        }

        return Promise.reject(response.data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export default checkOtpCodeApi
