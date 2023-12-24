'use client'

import { type FC } from 'react'
import { useRouter } from 'next/navigation'

import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { setCookie } from 'cookies-next'
import { yupResolver } from '@hookform/resolvers/yup'

import CFormField from '@molecules/CFormField'
import CButton from '@atoms/CButton'
import CCheckBox from '@atoms/CCheckBox'
import CInput from '@atoms/CInput'

import useAppMutation from '@core/hooks/useAppMutation'
import loginApi from '@core/services/api/auth/login-api'
import type TLoginFormType from '@core/types/forms/login-form-type'
import loginSchema from '@core/utils/validations/login-schema'

import { type ICLoginFormProps } from './resources'

const CLoginForm: FC<ICLoginFormProps> = ({ onChangeStage }) => {
    const { push } = useRouter()

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<TLoginFormType>({
        defaultValues: {
            ...loginSchema.getDefault()
        },
        resolver: yupResolver(loginSchema)
    })

    const { mutate, isPending: isSubmitting } = useAppMutation({
        mutationFn: loginApi,
        onSuccess: (response) => {
            //show status of login
            toast.success('login successfully')

            //set token in cookie
            setCookie('token', response.data.token)

            //push user to chat page
            push('/chat')
        },
        onError: (error) => {
            toast.error(error.data.message)
        }
    })

    return (
        <form
            method='post'
            onSubmit={handleSubmit((values) => mutate(values))}
            className='h-full w-full flex flex-col items-center justify-between gap-y-10 text-black'
        >
            <div className='flex flex-col items-center justify-center gap-y-2'>
                <span className='font-bold text-3xl'>Log in</span>
                <span className='text-sm text-gray-400 font-medium text-center'>
                    welcome back, try to have connection with your friend
                </span>
            </div>
            <div className='flex flex-col items-center justify-end gap-y-3 w-full grow'>
                <Controller
                    name='userName'
                    control={control}
                    render={({ field }) => (
                        <CFormField errors={errors} fieldName={field.name} labelText='Username'>
                            <CInput {...field} />
                        </CFormField>
                    )}
                />

                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                        <CFormField errors={errors} fieldName={field.name} labelText='Password'>
                            <CInput variant='password' {...field} />
                        </CFormField>
                    )}
                />

                <div className='flex items-center justify-between flex-col sm:flex-row gap-y-1 w-full'>
                    <CCheckBox options={[{ label: 'remember me', value: 1 }]} />

                    <CButton href={'/forget-password'} className='font-medium text-xs sm:text-sm px-0' type='link'>
                        Forgot Password ?
                    </CButton>
                </div>
            </div>

            <div className='flex flex-col items-center w-full'>
                <CButton
                    loading={isSubmitting}
                    htmlType='submit'
                    className='w-full py-3 h-auto font-semibold text-lg'
                    type='primary'
                >
                    Log in
                </CButton>
                <p className='!text-xs flex items-center flex-col sm:flex-row mt-5'>
                    Do not have account ?
                    <CButton className='!text-sm font-medium' type='link' onClick={() => onChangeStage('signup')}>
                        create new
                    </CButton>
                </p>
            </div>
        </form>
    )
}

export default CLoginForm
