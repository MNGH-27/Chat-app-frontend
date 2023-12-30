'use client'

import { type FC, useState } from 'react'

import type TConnectUserStageType from '@core/types/connect-user/connect-user-stage-type'
import type TToggleStageType from '@core/types/connect-user/toggle-stage-type'
import type TSingleUserType from '@core/types/user/single-user-type'

import { CSearchForUserForm, CShowUserForm, type ICConnectUserModalProps } from './resources'

const CConnectUserModal: FC<ICConnectUserModalProps> = ({ close }) => {
    const [stage, setStage] = useState<TConnectUserStageType>('search')
    const [userData, setUserData] = useState<TSingleUserType>({
        email: '',
        id: '',
        profile: '',
        userName: ''
    })

    const onToggleStage = ({ nextStep, userData }: TToggleStageType) => {
        setStage(nextStep)

        if (userData) {
            setUserData(userData)
        }
    }

    if (stage === 'search') {
        return <CSearchForUserForm toggleStage={onToggleStage} />
    }

    return <CShowUserForm toggleStage={onToggleStage} userData={userData} close={close} />
}

export default CConnectUserModal
