'use client'

import { type FC } from 'react'

import { IconExternalLink } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'

import CButton from '@atoms/CButton'
import CImage from '@atoms/CImage'

import QueryKeysEnum from '@core/enums/query-keys'
import getConnectedUserListApi from '@core/services/api/room/get-connected-user-list-api'
import type TSingleConnectedUserType from '@core/types/connect-user/single-connected-user-type'

import type { ICChatLayoutSidebarProps } from './resources'
import { CLoadingSidebar, CSidebarSingleUser } from './resources'

const CChatLayoutSidebar: FC<ICChatLayoutSidebarProps> = ({ setIsShowConnectUserModal }) => {
    const { data: connectedUsersList, isSuccess } = useQuery<TSingleConnectedUserType[]>({
        queryKey: [QueryKeysEnum.ConnectedUsersList],
        queryFn: getConnectedUserListApi
    })

    return (
        <>
            <div className='flex items-center justify-between w-full border-b-2 pb-3'>
                <CImage src='/images/logo.png' alt='logo' width={40} height={40} />
                <span className='font-semibold text-lg'>ChatApp</span>
            </div>
            <CButton
                onClick={() => setIsShowConnectUserModal(true)}
                className='w-full my-2 py-3 h-auto font-semibold'
                type='primary'
            >
                connect friend
                <IconExternalLink size={24} />
            </CButton>
            <div className='flex items-center justify-start flex-col gap-y-2 w-full h-full overflow-y-auto p-2'>
                {isSuccess
                    ? //render each item in sidebar
                      connectedUsersList.map((item) => <CSidebarSingleUser key={item.user.id} friendData={item} />)
                    : //render dummy template to generate loading of sidebar
                      [1, 2, 3].map((item) => <CLoadingSidebar key={item} />)}{' '}
            </div>
        </>
    )
}

export default CChatLayoutSidebar
