'use client'

import { type FC } from 'react'

import { IconExternalLink } from '@tabler/icons-react'

import CButton from '@atoms/CButton'
import CImage from '@atoms/CImage'

import type { ICChatLayoutSidebarProps } from './resources'
import { CSidebarSingleUser } from './resources'

const CChatLayoutSidebar: FC<ICChatLayoutSidebarProps> = ({ setIsShowConnectUserModal }) => {
    return (
        <>
            <div className='flex items-center justify-between w-full border-b-2 pb-3'>
                <CImage src='/images/logo.png' alt='logo' width={40} height={40} />
                <span className='font-semibold text-lg'>ChatApp</span>
            </div>
            <CButton
                onClick={() => setIsShowConnectUserModal(true)}
                className='w-full my-5 py-3 h-auto font-semibold'
                type='primary'
            >
                connect friend
                <IconExternalLink size={24} />
            </CButton>
            <div className='flex items-center justify-start flex-col gap-y-2 w-full'>
                <CSidebarSingleUser />
                <CSidebarSingleUser />
                <CSidebarSingleUser />
            </div>
        </>
    )
}

export default CChatLayoutSidebar
