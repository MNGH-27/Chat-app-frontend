'use client'

import { useState } from 'react'
import Image from 'next/image'

import { CLoginForm, CSignupForm } from '@organisms/AuthOrganisms'

import type TAuthStage from '@core/types/auth/auth-stage-type'

function CAuthTemplate() {
    const [authStage, setAuthStage] = useState<TAuthStage>('login')

    const onToggleAuthHandler = (newStage: TAuthStage) => {
        setAuthStage(newStage)
    }

    return (
        <div className='grid grid-cols-12 p-5 min-h-screen bg-[#f9f9f9]'>
            <div className='max-w-lg lg:max-w-none mx-auto col-span-12 lg:col-span-5 p-8 h-full w-full bg-white rounded-3xl flex items-center justify-center'>
                {authStage === 'login' ? (
                    <CLoginForm onChangeStage={onToggleAuthHandler} />
                ) : (
                    <CSignupForm onChangeStage={onToggleAuthHandler} />
                )}
            </div>

            <div className='hidden lg:flex lg:col-span-7 w-full h-full items-center justify-center'>
                <Image width={700} height={600} src='/icons/login.svg' alt='logo' priority />
            </div>
        </div>
    )
}

export default CAuthTemplate
