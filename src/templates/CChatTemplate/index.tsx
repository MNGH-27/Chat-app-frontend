'use client'

import { useQuery } from '@tanstack/react-query'

import { CChatBody, CChatHeader } from '@organisms/ChatOrganisms'

import QueryKeysEnum from '@core/enums/query-keys'
import getRoomByIdApi from '@core/services/api/room/get-room-by-id-api'
import type TRoomDetailType from '@core/types/room/room-detail-type'

const CChatTemplate = () => {
    const { data, isLoading, isError, isSuccess } = useQuery<TRoomDetailType>({
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
        return (
            <div className='w-full flex flex-col justify-center items-start h-screen'>
                <CChatHeader receiver={data.receiver} />
                <CChatBody roomData={data} />
            </div>
        )
    }
}

export default CChatTemplate
