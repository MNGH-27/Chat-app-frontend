'use client'

import { type FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { CChatBody, CChatError, CChatHeader, CLoadingChat } from '@organisms/ChatOrganisms'

import QueryKeysEnum from '@core/enums/query-keys'
import getRoomByIdApi from '@core/services/api/room/get-room-by-id-api'
import type ICChatTemplateProps from '@core/types/html/chat-template-type'
import type TRoomDetailType from '@core/types/room/room-detail-type'

const CChatTemplate: FC<ICChatTemplateProps> = ({ roomId }) => {
    const { data, isLoading, isError, isSuccess } = useQuery<TRoomDetailType>({
        queryKey: [QueryKeysEnum.RoomDetail, { roomId }],
        queryFn: () => getRoomByIdApi(roomId)
    })

    if (isLoading) {
        return <CLoadingChat />
    }

    if (isError) {
        return <CChatError />
    }

    if (isSuccess) {
        return (
            <div className='w-full flex flex-col justify-center items-start h-screen'>
                <CChatHeader roomData={data} />
                <CChatBody roomData={data} />
            </div>
        )
    }
}

export default CChatTemplate
