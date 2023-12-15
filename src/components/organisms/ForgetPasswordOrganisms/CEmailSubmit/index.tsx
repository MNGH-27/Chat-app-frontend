'use client'

import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import CFormField from '@molecules/CFormField'
import CButton from '@atoms/CButton'
import CInput from '@atoms/CInput'

import forgetPasswordApi from '@core/services/api/auth/forget-password-api'
import forgetPasswordSubmitEmailSchema from '@core/utils/validations/forget-password-submit-email-schema'

import { type ICEmailSubmitProps } from './resources'

const CEmailSubmit: React.FC<ICEmailSubmitProps> = ({ onChangeStage }) => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        defaultValues: {
            ...forgetPasswordSubmitEmailSchema.getDefault()
        },
        resolver: yupResolver(forgetPasswordSubmitEmailSchema)
    })

    const { mutate, isPending: isSubmitting } = useMutation({
        mutationFn: forgetPasswordApi,
        onSuccess: (response) => {
            // show success of sending email
            toast.success(response.data.message)

            //go to otp stage & send userId to set in state
            onChangeStage('otp', {
                email: response.data.data.email,
                id: response.data.data.userId
            })
        },
        onError: (error) => {
            if (error.message) {
                toast.error(error.data.message)
            } else {
                toast.error('sending email failed')
            }
        }
    })

    return (
        <form className='flex flex-col gap-y-5' method='post' onSubmit={handleSubmit((values) => mutate(values))}>
            <span className='text-sm font-semibold text-gray-800 text-center'>
                For login enter your email to send otp code for you to reset your password
            </span>

            <Controller
                name='email'
                control={control}
                render={({ field }) => (
                    <CFormField errors={errors} fieldName={field.name} labelText='Email'>
                        <CInput {...field} placeholder='ex: example@gmail.com' />
                    </CFormField>
                )}
            />

            <CButton loading={isSubmitting} className='w-fit' type='primary' htmlType='submit'>
                submit
            </CButton>
        </form>
    )
}

export default CEmailSubmit
