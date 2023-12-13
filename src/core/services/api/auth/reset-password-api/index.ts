import { axiosInterceptor } from '@core/services/axios'
import type TResetPasswordFormType from '@core/types/forms/reset-password-forget-password-form-type'

const resetPasswordApi = async (data: TResetPasswordFormType) => {
    try {
        const response = await axiosInterceptor.post('/auth/resetPassword', data)

        if (response.status === 201) {
            return response
        }

        return Promise.reject(response.data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export default resetPasswordApi
