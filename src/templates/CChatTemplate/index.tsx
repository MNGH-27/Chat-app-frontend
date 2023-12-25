'use client'

import { useQuery } from '@tanstack/react-query'

import { QueryKeysEnum } from '@core/enums/query-keys'
import getRoomByIdApi from '@core/services/api/room/get-room-by-id-api'
import type TRoomDetailType from '@core/types/room/room-detail-type'

const CChatTemplate = () => {
    const { isLoading, isError, isSuccess } = useQuery<TRoomDetailType>({
        queryKey: [QueryKeysEnum.RoomDetail],
        queryFn: () => getRoomByIdApi('65891b47e2dc988aa93075d0')
    })

    if (isLoading) {
        return <span>loading . . .</span>
    }

    if (isError) {
        return <span>there is err</span>
    }

    if (isSuccess) {
        return <div>CChatTemplate</div>
    }
}

export default CChatTemplate
