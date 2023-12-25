import { type FC, useEffect } from 'react'

// Create a socket connection
import { connect, type Socket } from 'socket.io-client'

// please note that the types are reversed
const socket: Socket = connect('http://localhost:5000')

import SocketKeysEnum from '@core/enums/socket-keys'

import { CInputChat, CShowChats, type ICChatBodyProps } from './resources'

const CChatBody: FC<ICChatBodyProps> = ({ roomData }) => {
    //join room in mount component
    useEffect(() => {
        //join to room in socket io with room id
        socket.emit(SocketKeysEnum.JoinRoom, roomData.room.id)
    }, [roomData.room.id])

    return (
        <div className='flex flex-col items-center justify-start grow w-full p-5 h-[calc(100vh-75px)] overflow-y-auto relative'>
            <CShowChats socket={socket} roomDate={roomData} />
            <CInputChat socket={socket} roomDate={roomData} />
        </div>
    )
}

export default CChatBody
