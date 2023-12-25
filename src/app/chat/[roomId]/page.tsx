import { type FC } from 'react'

import CChatTemplate from '@templates/CChatTemplate'

import type IChatPageProps from '@core/types/html/chat-page-type'

const ChatPage: FC<IChatPageProps> = ({ params: { roomId } }) => {
    return <CChatTemplate roomId={roomId} />
}

export default ChatPage
