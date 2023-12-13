import { axiosInterceptor } from '@core/services/axios'
import type TSignupFieldType from '@core/types/forms/signup-form-type'

const signupApi = async (data: TSignupFieldType) => {
    const signupData = {
        ...data,
        profile: data.profile[0]
    }

    try {
        const response = await axiosInterceptor.postForm('/auth/signup', signupData)

        if (response.status === 201) {
            return response
        }

        return Promise.reject(response.data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export default signupApi
