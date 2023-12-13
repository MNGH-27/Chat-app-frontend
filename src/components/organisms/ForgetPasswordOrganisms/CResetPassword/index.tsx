import { useRouter } from 'next/navigation'

import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { setCookie } from 'cookies-next'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import CFormField from '@molecules/CFormField'
import CButton from '@atoms/CButton'
import CInput from '@atoms/CInput'

import resetPasswordApi from '@core/services/api/auth/reset-password-api'
import type TResetPasswordFormType from '@core/types/forms/reset-password-forget-password-form-type'
import forgetPasswordResetPasswordSchema from '@core/utils/validations/forget-password-reset-password-schema'

import { type ICResetPasswordProps } from './resources'

const CResetPassword: React.FC<ICResetPasswordProps> = ({ userId }) => {
    const { push } = useRouter()

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<TResetPasswordFormType>({
        defaultValues: {
            ...forgetPasswordResetPasswordSchema.getDefault(),
            userId: userId
        },
        resolver: yupResolver(forgetPasswordResetPasswordSchema)
    })

    const { mutate, isPending: isSubmitting } = useMutation({
        mutationFn: (data: TResetPasswordFormType) => resetPasswordApi(data),
        onSuccess: (response) => {
            //reset password successfully
            toast.success(response.data.message)

            setCookie('token', response.data.data.token)

            //push user to chat page
            push('/chat')
        },
        onError: (error) => {
            if (error.message) {
                toast.error(error.message)
            } else {
                toast.error('reset password failed')
            }
        }
    })

    return (
        <div>
            <span className='text-sm'>please enter your new password</span>
            <form className='space-y-4 mt-5' onSubmit={handleSubmit((values) => mutate(values))} action='post'>
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                        <CFormField errors={errors} fieldName={field.name} labelText='Password'>
                            <CInput {...field} variant='password' autoComplete='off' />
                        </CFormField>
                    )}
                />
                <Controller
                    name='repeatPassword'
                    control={control}
                    render={({ field }) => (
                        <CFormField errors={errors} fieldName={field.name} labelText='RepeatPassword'>
                            <CInput {...field} variant='password' autoComplete='off' />
                        </CFormField>
                    )}
                />
                <CButton
                    loading={isSubmitting}
                    htmlType='submit'
                    type='primary'
                    className='w-full py-3 h-auto font-semibold text-lg'
                >
                    Reset Password
                </CButton>
            </form>
        </div>
    )
}

export default CResetPassword
