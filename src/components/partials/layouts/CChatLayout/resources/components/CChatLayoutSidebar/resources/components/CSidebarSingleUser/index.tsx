'use client'

import { type FC } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { useQuery } from '@tanstack/react-query'

import CImage from '@atoms/CImage'

import QueryKeysEnum from '@core/enums/query-keys'
import getCurrentUserApi from '@core/services/api/current-user/get-current-user-api'
import type TSingleUserType from '@core/types/user/single-user-type'

import { type ICSidebarSingleUserProps } from './resources'

const CSidebarSingleUser: FC<ICSidebarSingleUserProps> = ({ friendData }) => {
    const { push } = useRouter()
    const pathname = usePathname().split('/')

    const { data: currentUser } = useQuery<TSingleUserType>({
        queryKey: [QueryKeysEnum.CurrentUser],
        queryFn: getCurrentUserApi
    })

    return (
        <div
            onClick={() => push(`/chat/${friendData.message.roomId}`)}
            className={`${
                pathname[pathname.length - 1] === friendData.message.roomId
                    ? 'cursor-default bg-primary-200/50 hover:bg-primary-200'
                    : 'cursor-pointer hover:bg-[#f9f9f9]'
            } relative flex items-center justify-between w-full max-w-full p-3 duration-200 rounded`}
        >
            {friendData.user.isOnline && (
                <div className='w-3 h-3 rounded-full bg-green-700 absolute top-1 right-1'></div>
            )}
            <div className='flex flex-col items-start justify-start gap-2 text-sm max-w-full truncate'>
                <span className='font-semibold'>{friendData.user.userName}</span>
                <span className='text-gray-800 text-xs truncate max-w-full'>
                    {currentUser?.id === friendData.message.senderId && <span className='font-semibold'>you : </span>}
                    {friendData.message.context}
                </span>
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
