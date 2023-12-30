import type TSingleMessageType from '@core/types/room/single-message-type'

interface ICSingleChatMessage {
    singleMessage: TSingleMessageType
    isCurrentUser: boolean
}

export default ICSingleChatMessage
