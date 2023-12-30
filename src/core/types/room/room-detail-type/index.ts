import type TSingleUserType from '@core/types/user/single-user-type'

type TRoomDetailType = {
    receiver: TSingleUserType
    sender: TSingleUserType
    room: {
        id: string
        receiverId: string
        senderId: string
    }
}

export default TRoomDetailType
