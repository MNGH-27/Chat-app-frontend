import { type FC, useRef } from 'react'

import { useQuery } from '@tanstack/react-query'

import QueryKeysEnum from '@core/enums/query-keys'
import SocketKeysEnum from '@core/enums/socket-keys'
import getMessageListByIdApi from '@core/services/api/room/get-message-list-by-id-api'
import type TSingleMessageType from '@core/types/room/single-message-type'

import { ChatMessage, type ICShowChatsProps } from './resources'

const CShowChats: FC<ICShowChatsProps> = ({ roomDate, socket }) => {
    const chatBody = useRef<HTMLDivElement | null>(null)

    const { data, refetch } = useQuery<TSingleMessageType[]>({
        queryKey: [QueryKeysEnum.RoomMessageList],
        queryFn: () => getMessageListByIdApi(roomDate.room.id),
        refetchOnWindowFocus: true
    })

    socket.on(SocketKeysEnum.CheckNewMessage, () => {
        console.log('come here')

        refetch()
    })

    return (
        <div
            ref={chatBody}
            className='grow max-h-[calc(100vh-100px)] overflow-y-auto flex flex-col gap-y-3 w-full p-2 mb-3'
        >
            {//loop on messages list
            data?.map((singleMessage) => (
                <ChatMessage
                    key={singleMessage.id}
                    content={singleMessage.context}
                    isCurrentUser={singleMessage.senderId === roomDate.sender.id}
                />
            ))}
        </div>
    )
}

export default CShowChats
