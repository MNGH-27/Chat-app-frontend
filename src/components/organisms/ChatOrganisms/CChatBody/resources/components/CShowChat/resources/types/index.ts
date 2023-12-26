import { type Socket } from 'socket.io-client'

import type TRoomDetailType from '@core/types/room/room-detail-type'

interface ICShowChatsProps {
    roomDate: TRoomDetailType
    socket?: Socket
}

export default ICShowChatsProps
