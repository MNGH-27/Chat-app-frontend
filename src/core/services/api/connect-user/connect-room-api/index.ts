import { isAxiosError } from 'axios'

import { axiosInterceptor } from '@core/services/axios'

const connectRoomApi = async (data) => {
    try {
        const response = await axiosInterceptor.get(`/room/connectRoom`, data)

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

export default connectRoomApi
