import { isAxiosError } from 'axios'

import { axiosInterceptor } from '@core/services/axios'

const getCurrentUserApi = async () => {
    try {
        const response = await axiosInterceptor.get('/user/current-user')

        if (response.status === 201) {
            return response.data
        }

        return Promise.reject(response)
    } catch (error) {
        //check type of error to be axios error
        if (isAxiosError(error)) return Promise.reject(error.response)

        return Promise.reject(error)
    }
}

export default getCurrentUserApi
