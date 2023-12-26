import { type FC } from 'react'

import CImage from '@atoms/CImage'

import { type ICChatHeaderProps } from './resources'

const CChatHeader: FC<ICChatHeaderProps> = ({ roomData }) => {
    return (
        <div className='bg-white w-full'>
            <div className='py-4 flex items-center justify-between w-full'>
                <div className='flex items-center justify-end gap-3'>
                    <div className='relative w-10 h-10 rounded-full'>
                        <CImage className='rounded-full' src={roomData.receiver.profile} alt='logo' fill />
                    </div>
                    <div className='flex flex-col gap-1 text-sm'>
                        <span className='font-semibold'>{roomData.receiver.userName}</span>
                        <span className='text-gray-800 text-xs'>last message</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CChatHeader
