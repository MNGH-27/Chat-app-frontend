'use client'

import { type FC } from 'react'
import { useRouter } from 'next/navigation'

import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { setCookie } from 'cookies-next'
import { yupResolver } from '@hookform/resolvers/yup'

import CFormField from '@molecules/CFormField'
import CProfileDropZone from '@molecules/CProfileDropZone'
import CButton from '@atoms/CButton'
import CInput from '@atoms/CInput'

import useAppMutation from '@core/hooks/useAppMutation'
import signupApi from '@core/services/api/auth/signup-api'
import type TSignupFieldType from '@core/types/forms/signup-form-type'
import signupSchema from '@core/utils/validations/signup-schema'

import { type ICSignupFormProps } from './resources'

const CSignupForm: FC<ICSignupFormProps> = ({ onChangeStage }) => {
    const { push } = useRouter()

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<TSignupFieldType>({
        defaultValues: {
            ...signupSchema.getDefault()
        },
        resolver: yupResolver(signupSchema)
    })

    const { mutate, isPending: isSubmitting } = useAppMutation({
        mutationFn: signupApi,
        onSuccess: (response) => {
            //user signup successfully
            toast.success('Signup successfully')

            setCookie('token', response.data.token)

            //push user to chat page
            push('/chat')
        },
        onError: (error) => {
            //check if there is error from backend to show user
            if (error.message) {
                toast.error(error.data.message)
            } else {
                //some static error message,
                toast.error('Signup failed')
            }
        }
    })

    return (
        <form
            onSubmit={handleSubmit((values) => mutate(values))}
            className='h-full w-full flex flex-col items-center justify-between text-black'
        >
            <div className='flex flex-col items-center justify-center gap-y-2'>
                <span className='font-semibold text-3xl'>Sign up</span>
                <span className='text-sm text-gray-400 font-medium text-center'>
                    sign up to chat and feel new world of connection
                </span>
            </div>
            <div className='flex flex-col items-center gap-y-3 w-full'>
                <Controller
                    name='profile'
                    control={control}
                    render={({ field }) => (
                        <CFormField
                            errors={errors}
                            fieldName={field.name}
                            labelText=''
                            className='flex items-center justify-center'
                        >
                            <CProfileDropZone {...field} />
                        </CFormField>
                    )}
                />

                <Controller
                    name='userName'
                    control={control}
                    render={({ field }) => (
                        <CFormField errors={errors} fieldName={field.name} labelText='User Name'>
                            <CInput {...field} />
                        </CFormField>
                    )}
                />

                <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                        <CFormField errors={errors} fieldName={field.name} labelText='Email'>
                            <CInput {...field} placeholder='ex: example@gmail.com' />
                        </CFormField>
                    )}
                />

                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                        <CFormField errors={errors} fieldName={field.name} labelText='Password'>
                            <CInput {...field} variant='password' autoComplete='off' />
                        </CFormField>
                    )}
                />

                <div className='flex items-center flex-col w-full'>
                    <CButton
                        loading={isSubmitting}
                        htmlType='submit'
                        type='primary'
                        className='w-full py-3 h-auto font-semibold text-lg'
                    >
                        Sign up
                    </CButton>
                    <p className='!text-xs flex items-center'>
                        Do you have account ?
                        <CButton onClick={() => onChangeStage('login')} type='link' className='!text-sm font-medium'>
                            login your account
                        </CButton>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default CSignupForm
