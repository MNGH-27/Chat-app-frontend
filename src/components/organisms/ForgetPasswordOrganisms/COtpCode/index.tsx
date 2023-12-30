import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import OTPInput from 'react-otp-input'
import { yupResolver } from '@hookform/resolvers/yup'

import CFormField from '@molecules/CFormField'
import CButton from '@atoms/CButton'

import useAppMutation from '@core/hooks/useAppMutation'
import useCountDown from '@core/hooks/useCountDown'
import checkOtpCodeApi from '@core/services/api/auth/check-otp-code-api'
import type TCheckCOtpCodeField from '@core/types/forms/check-otp-forget-password-form-type'
import forgetPasswordOtpCodeSchema from '@core/utils/validations/forget-password-otp-code-schema'

import { type ICOtpCodeProps } from './resources'

const COtpCode: React.FC<ICOtpCodeProps> = ({ onChangeStage, user }) => {
    const { time } = useCountDown(120)

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<TCheckCOtpCodeField>({
        defaultValues: {
            ...forgetPasswordOtpCodeSchema.getDefault(),
            userId: user.id
        },
        resolver: yupResolver(forgetPasswordOtpCodeSchema)
    })

    const { mutate, isPending: isSubmitting } = useAppMutation({
        mutationFn: checkOtpCodeApi,
        onSuccess: (response) => {
            //otp code sent successfully
            toast.success(response.data.message)
            //go to change password section
            onChangeStage('newPassword')
        },
        onError: (error) => {
            if (error.message) {
                toast.error(error.data.message)
            } else {
                toast.error('failed in Otp code')
            }
        }
    })

    return (
        <div className='flex items-center justify-center flex-col gap-y-3'>
            <div className='flex flex-col items-start justify-start text-xs w-full'>
                <span>we sent otp code for your email {user.email}</span>
                <CButton className='text-xs p-0' type='link' onClick={() => onChangeStage('email')}>
                    change email address
                </CButton>
            </div>
            <form className='space-y-2' action='post' onSubmit={handleSubmit((values) => mutate(values))}>
                <Controller
                    name='otp'
                    control={control}
                    render={({ field }) => (
                        <CFormField errors={errors} fieldName='' labelText=''>
                            <OTPInput
                                value={field.value}
                                onChange={field.onChange}
                                numInputs={6}
                                renderInput={(props) => (
                                    <input
                                        {...props}
                                        className='border border-gray-200 text-2xl !w-[50px] !h-[50px] rounded-md mx-1'
                                    />
                                )}
                            />
                        </CFormField>
                    )}
                />

                <p className='text-xs'>
                    you have{' '}
                    <span className='font-semibold w-[50px]'>
                        {time.minutes}:{time.seconds}
                    </span>{' '}
                    secondes to submit otp code
                </p>

                <CButton loading={isSubmitting} htmlType='submit' type='primary' className='mr-auto h-auto px-5 py-2'>
                    Submit
                </CButton>
            </form>
        </div>
    )
}

export default COtpCode
