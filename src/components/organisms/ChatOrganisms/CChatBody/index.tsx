import { type FC, useEffect } from 'react'

import SocketKeysEnum from '@core/enums/socket-keys'
import useSocketStore from '@core/services/stores/socket-store'

import { CInputChat, CShowChats, type ICChatBodyProps } from './resources'

const CChatBody: FC<ICChatBodyProps> = ({ roomData }) => {
    const { socket } = useSocketStore()

    //join room in mount component
    useEffect(() => {
        //join to room in socket io with room id
        socket?.emit(SocketKeysEnum.JoinRoom, roomData.room.id)
    }, [roomData.room.id, socket])

    return (
        <div className='flex flex-col items-center justify-start grow w-full h-[calc(100vh-75px)] overflow-y-auto relative'>
            <CShowChats socket={socket} roomDate={roomData} />
            <CInputChat socket={socket} roomDate={roomData} />
        </div>
    )
}

export default CChatBody
