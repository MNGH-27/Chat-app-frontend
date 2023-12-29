'use client'

import { type FC, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { connect, type Socket } from 'socket.io-client'
import { IconArrowBigLeftLinesFilled, IconArrowBigRightLinesFilled } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'

import CButton from '@atoms/CButton'
import CModal from '@atoms/CModal'

import QueryKeysEnum from '@core/enums/query-keys'
import getCurrentUserApi from '@core/services/api/current-user/get-current-user-api'
import useSocketStore from '@core/services/stores/socket-store'
import type TSingleUserType from '@core/types/user/single-user-type'

import { CChatLayoutSidebar, CConnectUserModal, type ICChatLayoutProps } from './resources'

const CChatLayout: FC<ICChatLayoutProps> = ({ children }) => {
    const pathName = usePathname()

    const { addSocket } = useSocketStore()

    const [isShowConnectUserModal, setIsShowConnectUserModal] = useState<boolean>(false)
    const [isShowSmallSidebar, setIsShowSmallSidebar] = useState<boolean>(true)

    //fetch data of user in layout to use it in other templates
    const { data: currentUser } = useQuery<TSingleUserType>({
        queryKey: [QueryKeysEnum.CurrentUser],
        queryFn: getCurrentUserApi
    })

    useEffect(() => {
        //close small sidebar in change of route pathname
        if (isShowSmallSidebar) {
            setIsShowSmallSidebar(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathName])

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
                <div
                    className={`z-20 absolute w-full sm:w-[280px] duration-200 flex flex-col items-center gap-y-2 py-5 px-2 h-screen bg-white ${
                        isShowSmallSidebar ? 'left-0' : '-left-full sm:left-0'
                    }`}
                >
                    <CChatLayoutSidebar setIsShowConnectUserModal={setIsShowConnectUserModal} />
                    <CButton
                        onClick={() => setIsShowSmallSidebar(false)}
                        icon={<IconArrowBigLeftLinesFilled />}
                        className='mt-auto ml-auto py-2 h-auto font-semibold sm:hidden'
                        type='primary'
                    >
                        Collapse
                    </CButton>
                </div>

                <div className='ml-auto w-full sm:w-[calc(100%-280px)] bg-[#f9f9f9] h-full relative'>
                    {children}
                    <CButton
                        onClick={() => setIsShowSmallSidebar(true)}
                        icon={<IconArrowBigRightLinesFilled />}
                        className='absolute top-5 right-2 sm:hidden'
                        type='primary'
                    >
                        Open
                    </CButton>
                </div>
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
