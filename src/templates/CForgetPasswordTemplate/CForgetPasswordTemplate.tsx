'use client'

import { useState } from 'react'
import Link from 'next/link'

import { IconArrowForwardUp } from '@tabler/icons-react'

import { CEmailSubmit, COtpCode, CResetPassword } from '@organisms/ForgetPasswordOrganisms'

import type TForgetPasswordStage from '@core/types/auth/forget-password-stage-type'
import type TForgetPasswordUser from '@core/types/auth/forget-password-user'

const CForgetPasswordTemplate = () => {
    const [user, setUser] = useState<TForgetPasswordUser>({
        email: '',
        id: ''
    })
    const [stage, setStage] = useState<TForgetPasswordStage>('email')

    const onChangeStageHandler = (newStage: TForgetPasswordStage, user?: TForgetPasswordUser) => {
        setStage(newStage)

        //check if there is email to set
        if (user) {
            //set user to state to path to send OTP Code
            setUser(user)
        }
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='max-w-sm space-y-5'>
                <Link href={'/'} className='flex items-center gap-x-1 text-primary hover:text-primary-700 duration-200'>
                    Return to login <IconArrowForwardUp />
                </Link>

                {stage === 'email' ? (
                    <CEmailSubmit onChangeStage={onChangeStageHandler} />
                ) : stage === 'otp' ? (
                    <COtpCode onChangeStage={onChangeStageHandler} user={user} />
                ) : (
                    <CResetPassword onChangeStage={onChangeStageHandler} userId={user.id} />
                )}
            </div>
        </div>
    )
}

export default CForgetPasswordTemplate
