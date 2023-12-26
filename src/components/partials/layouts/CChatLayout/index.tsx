'use client'

import { type FC, useEffect } from 'react'
import { useState } from 'react'

import { connect, type Socket } from 'socket.io-client'
import { useQuery } from '@tanstack/react-query'

import CModal from '@atoms/CModal'

import QueryKeysEnum from '@core/enums/query-keys'
import getCurrentUserApi from '@core/services/api/current-user/get-current-user-api'
import useSocketStore from '@core/services/stores/socket-store'
import type TSingleUserType from '@core/types/user/single-user-type'

import { CChatLayoutSidebar, CConnectUserModal, type ICChatLayoutProps } from './resources'

const CChatLayout: FC<ICChatLayoutProps> = ({ children }) => {
    const { addSocket } = useSocketStore()

    const [isShowConnectUserModal, setIsShowConnectUserModal] = useState<boolean>(false)

    //fetch data of user in layout to use it in other templates
    const { data: currentUser } = useQuery<TSingleUserType>({
        queryKey: [QueryKeysEnum.CurrentUser],
        queryFn: getCurrentUserApi
    })

    //add socket when user come to chat app
    useEffect(() => {
        //check if there is id for this user
        if (currentUser?.id) {
            //there is id for this user => create room and send this users data as onLine

            // please note that the types are reversed
            const socket: Socket = connect('http://localhost:5000', { query: { currentUser: currentUser?.id } })

            //add socket to zustand to use in other components
            addSocket(socket)
        }
    }, [addSocket, currentUser?.id])

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
