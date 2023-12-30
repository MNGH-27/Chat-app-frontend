import { isAxiosError } from 'axios'

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

        //return response as error to handle it on onError of useMutation
        return Promise.reject(response)
    } catch (error) {
        //check if error is type of AxiosError
        if (isAxiosError(error)) {
            return Promise.reject(error.response)
        }
        return Promise.reject(error)
    }
}

export default signupApi
