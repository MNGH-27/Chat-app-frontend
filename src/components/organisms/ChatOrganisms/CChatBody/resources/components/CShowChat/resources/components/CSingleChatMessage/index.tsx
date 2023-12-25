import { type FC } from 'react'

import dateFormatter from '@core/utils/common/date-formatter'

import { type ICSingleChatMessage } from './resources'

const ChatMessage: FC<ICSingleChatMessage> = ({ singleMessage, isCurrentUser }) => {
    if (isCurrentUser) {
        return (
            <div className='flex flex-col gap-y-1'>
                <div className='bg-primary text-white max-w-[75%] w-fit text-sm font-medium ml-auto pr-5 pl-4 py-2 rounded-md rounded-tr-3xl'>
                    {singleMessage.context}
                </div>
                <span className='text-[10px] text-brand-300 font-medium pr-2 ml-auto'>
                    {dateFormatter(singleMessage.createdAt)}
                </span>
            </div>
        )
    }
    return (
        <div className='flex flex-col gap-y-1'>
            <div className='bg-white max-w-[75%] w-fit text-sm font-medium pl-5 pr-4 py-2 rounded-md rounded-tl-3xl'>
                {singleMessage.context}
            </div>
            <span className='text-[10px] text-brand-300 font-medium pl-2'>
                {dateFormatter(singleMessage.createdAt)}
            </span>
        </div>
    )
}

export default ChatMessage
