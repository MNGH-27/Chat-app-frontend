import { isAxiosError } from 'axios'

import { axiosInterceptor } from '@core/services/axios'

const getConnectedUserListApi = async () => {
    try {
        const response = await axiosInterceptor.get(`/room/connected-users-list`)

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

export default getConnectedUserListApi
