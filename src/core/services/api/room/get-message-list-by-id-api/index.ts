import { isAxiosError } from 'axios'

import { axiosInterceptor } from '@core/services/axios'

const getMessageListByIdApi = async (roomId: string) => {
    try {
        const response = await axiosInterceptor.get(`/message/list?roomId=${roomId}`)

        if (response.status === 200) {
            return response.data.data
        }

        return Promise.reject(response)
    } catch (error) {
        //check type of error to be axios error
        if (isAxiosError(error)) return Promise.reject(error.response)

        return Promise.reject(error)
    }
}

export default getMessageListByIdApi
