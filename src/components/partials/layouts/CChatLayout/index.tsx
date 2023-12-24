'use client'

import { type FC } from 'react'
import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import CModal from '@atoms/CModal'

import { QueryKeysEnum } from '@core/enums/query-keys'
import getCurrentUserApi from '@core/services/api/current-user/get-current-user-api'

import { CChatLayoutSidebar, CConnectUserModal, type ICChatLayoutProps } from './resources'

const CChatLayout: FC<ICChatLayoutProps> = ({ children }) => {
    const [isShowConnectUserModal, setIsShowConnectUserModal] = useState<boolean>(false)

    //fetch data of user in layout to use it in other templates
    useQuery({
        queryKey: [QueryKeysEnum.CurrentUser],
        queryFn: getCurrentUserApi
    })

    return (
        <>
            <div className='w-full flex items-center justify-center h-screen'>
                <div className='z-20 absolute w-full sm:w-[280px] left-0 duration-200 flex flex-col items-center p-5 min-h-full bg-white'>
                    <CChatLayoutSidebar setIsShowConnectUserModal={setIsShowConnectUserModal} />
                </div>
                <div className='ml-auto w-full sm:w-[calc(100%-280px)] bg-[#f9f9f9] h-full'>{children}</div>
            </div>
            <CModal
                maskClosable={false}
                open={isShowConnectUserModal}
                onCancel={() => setIsShowConnectUserModal(false)}
            >
                <CConnectUserModal close={() => setIsShowConnectUserModal(false)} isShow={isShowConnectUserModal} />
            </CModal>
        </>
    )
}

export default CChatLayout
