'use client'

import { type FC } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import CImage from '@atoms/CImage'

import { type ICSidebarSingleUserProps } from './resources'

const CSidebarSingleUser: FC<ICSidebarSingleUserProps> = ({ friendData }) => {
    const { push } = useRouter()
    const pathname = usePathname().split('/')

    return (
        <div
            onClick={() => push(`/chat/${friendData.message.roomId}`)}
            className={`${
                pathname[pathname.length - 1] === friendData.message.roomId
                    ? 'cursor-default bg-primary-200/50 hover:bg-primary-200'
                    : 'cursor-pointer hover:bg-[#f9f9f9]'
            } flex items-center justify-between w-full max-w-full p-3 duration-200 rounded`}
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
