import { useEffect, useState } from 'react'

import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import OTPInput from 'react-otp-input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import CFormField from '@molecules/CFormField'
import CButton from '@atoms/CButton'

import checkOtpCodeApi from '@core/services/api/auth/check-otp-code-api'
import type TCheckCOtpCodeField from '@core/types/forms/check-otp-forget-password-form-type'
import forgetPasswordOtpCodeSchema from '@core/utils/validations/forget-password-otp-code-schema'

import { type ICOtpCodeProps } from './resources'

const COtpCode: React.FC<ICOtpCodeProps> = ({ onChangeStage, user }) => {
    // initialize timeLeft with the seconds prop
    const [timeLeft, setTimeLeft] = useState<number>(120)

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) {
            //send user to send email again
            onChangeStage('email')
            return
        }

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId)
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft])

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

    const { mutate, isPending: isSubmitting } = useMutation({
        mutationFn: (data: TCheckCOtpCodeField) => checkOtpCodeApi(data),
        onSuccess: (response) => {
            //otp code sent successfully
            toast.success(response.data.message)
            //go to change password section
            onChangeStage('newPassword')
        },
        onError: (error) => {
            if (error.message) {
                toast.error(error.message)
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
                    you have <span className='font-semibold'>{timeLeft}</span> secondes to submit otp code
                </p>

                <CButton loading={isSubmitting} htmlType='submit' type='primary' className='mr-auto h-auto px-5 py-2'>
                    Submit
                </CButton>
            </form>
        </div>
    )
}

export default COtpCode
