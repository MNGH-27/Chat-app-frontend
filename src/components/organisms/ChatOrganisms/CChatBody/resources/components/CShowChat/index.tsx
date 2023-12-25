'use client'

import { type FC, useEffect, useRef } from 'react'

import { useQuery } from '@tanstack/react-query'

import QueryKeysEnum from '@core/enums/query-keys'
import SocketKeysEnum from '@core/enums/socket-keys'
import getCurrentUserApi from '@core/services/api/current-user/get-current-user-api'
import getMessageListByIdApi from '@core/services/api/room/get-message-list-by-id-api'
import type TSingleMessageType from '@core/types/room/single-message-type'
import type TSingleUserType from '@core/types/user/single-user-type'

import { ChatMessage, type ICShowChatsProps } from './resources'

const CShowChats: FC<ICShowChatsProps> = ({ roomDate, socket }) => {
    const chatBody = useRef<HTMLDivElement | null>(null)

    const { data, isFetching, refetch } = useQuery<{ messages: TSingleMessageType[] }>({
        queryKey: [QueryKeysEnum.RoomMessageList],
        queryFn: () => getMessageListByIdApi(roomDate.room.id),
        refetchOnMount: true,
        refetchOnWindowFocus: true
    })

    useEffect(() => {
        const handleCheckNewMessage = () => {
            if (!isFetching) {
                refetch()
            }
        }

        socket.on(SocketKeysEnum.CheckNewMessage, handleCheckNewMessage)

        // Clean up the event listener when the component unmounts or when the dependency changes
        return () => {
            socket.off(SocketKeysEnum.CheckNewMessage, handleCheckNewMessage)
        }
    }, [isFetching, refetch, socket])

    const { data: currentUser } = useQuery<TSingleUserType>({
        queryKey: [QueryKeysEnum.CurrentUser],
        queryFn: getCurrentUserApi
    })

    return (
        <div
            ref={chatBody}
            className='grow max-h-[calc(100vh-100px)] overflow-y-auto flex flex-col gap-y-3 w-full p-2 mb-3'
        >
            {//loop on messages list
            data?.messages.map((singleMessage) => (
                <ChatMessage
                    key={singleMessage.id}
                    singleMessage={singleMessage}
                    isCurrentUser={singleMessage.senderId === currentUser?.id}
                />
            ))}
        </div>
    )
}

export default CShowChats
