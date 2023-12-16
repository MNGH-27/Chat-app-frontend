'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { IconExternalLink } from '@tabler/icons-react'

import CButton from '@atoms/CButton'

import { CSidebarSingleUser } from './resources'

const CChatLayoutSidebar = () => {
    const [isShowConnectUserModal, setIsShowConnectUserModal] = useState(false)

    return (
        <>
            <div className='flex items-center justify-between w-full border-b-2 pb-3'>
                <Image src='/images/logo.png' alt='logo' width={40} height={40} />
                <span className='font-bold text-lg'>ChatApp</span>
            </div>
            <CButton
                onClick={() => setIsShowConnectUserModal(true)}
                className='w-full my-5 py-3 h-auto font-bold'
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
