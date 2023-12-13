import { axiosInterceptor } from '@core/services/axios'
import type TGetEmailFormatPasswordFormType from '@core/types/forms/get-email-forget-password-form-type'

const forgetPasswordApi = async (data: TGetEmailFormatPasswordFormType) => {
    try {
        const response = await axiosInterceptor.post('/auth/forgetPassword', data)

        if (response.status === 201) {
            return response
        }

        return Promise.reject(response.data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export default forgetPasswordApi
