'use client'

import { type FC } from 'react'
import { useRouter } from 'next/navigation'

import CImage from '@atoms/CImage'

import { type ICSidebarSingleUserProps } from './resources'

const CSidebarSingleUser: FC<ICSidebarSingleUserProps> = ({ friendData }) => {
    const { push } = useRouter()

    return (
        <div
            onClick={() => push(`/chat/${friendData.message.roomId}`)}
            className='cursor-pointer flex items-center justify-between w-full max-w-full hover:bg-[#f9f9f9] p-3 duration-200 rounded'
        >
            <div className='flex flex-col items-start justify-start gap-2 text-sm max-w-full truncate'>
                <span className='font-semibold'>{friendData.user.userName}</span>
                <span className='text-gray-800 text-xs truncate max-w-full'>{friendData.message.context}</span>
            </div>
            <CImage
                className='rounded-full object-cover aspect-square'
                width={48}
                height={48}
                src={friendData.user.profile}
                alt={friendData.user.userName}
            />
        </div>
    )
}

export default CSidebarSingleUser
