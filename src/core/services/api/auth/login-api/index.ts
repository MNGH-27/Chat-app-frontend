import { axiosInterceptor } from '@core/services/axios'
import type TLoginFormType from '@core/types/forms/login-form-type'

const loginApi = async (data: TLoginFormType) => {
    try {
        const response = await axiosInterceptor.post('/auth/login', data)

        if (response.status === 201) {
            return response
        }

        return Promise.reject(response.data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export default loginApi
