import { type FC } from 'react'

import { type ICSingleChatMessage } from './resources'

const ChatMessage: FC<ICSingleChatMessage> = ({ content, isCurrentUser }) => {
    if (isCurrentUser) {
        return (
            <div className='bg-primary text-white max-w-[75%] w-fit text-sm font-medium ml-auto pr-5 pl-4 py-2 rounded-md rounded-tr-3xl'>
                {content}
            </div>
        )
    }
    return (
        <div className='bg-white max-w-[75%] w-fit text-sm font-medium pl-5 pr-4 py-2 rounded-md rounded-tl-3xl'>
            {content}
        </div>
    )
}

export default ChatMessage
