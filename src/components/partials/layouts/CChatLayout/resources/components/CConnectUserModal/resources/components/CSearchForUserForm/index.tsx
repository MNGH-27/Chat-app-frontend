'use client'

import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IconMessageCircleSearch } from '@tabler/icons-react'

import CFormField from '@molecules/CFormField'
import CButton from '@atoms/CButton'
import CInput from '@atoms/CInput'

import useAppMutation from '@core/hooks/useAppMutation'
import findUserApi from '@core/services/api/connect-user/find-user-api'

import { type ICSearchForUserFormProps } from './resources'

const CSearchForUserForm: React.FC<ICSearchForUserFormProps> = ({ toggleStage }) => {
    const schema = yup.object().shape({
        userName: yup.string().required().default('')
    })

    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            ...schema.getDefault()
        },
        resolver: yupResolver(schema)
    })

    const { mutate } = useAppMutation({
        mutationFn: findUserApi,
        onSuccess: (response) => {
            //go to next step of user
            toggleStage({
                nextStep: 'show',
                userData: response.data
            })
        },
        onError: (error) => {
            if (error.message) {
                toast.error(error.message)
            } else {
                toast.error('failed in connect to user')
            }
        }
    })

    return (
        <>
            <span className='font-bold'>CONNECT TO YOUR FRIEND</span>
            <div className='flex flex-col items-start w-full mt-5'>
                <span className='font-medium'>Enter your friend&apos;s ID to connect with</span>
                <form
                    onSubmit={handleSubmit((values) => mutate(values.userName))}
                    className='mt-5 flex flex-col gap-y-2 w-full'
                    method='post'
                >
                    <Controller
                        name='userName'
                        control={control}
                        render={({ field }) => (
                            <CFormField errors={errors} fieldName={field.name} labelText='UserName'>
                                <CInput placeholder='Enter your fiend user name . . .' className='w-full' {...field} />
                            </CFormField>
                        )}
                    />
                    <CButton
                        type='primary'
                        htmlType='submit'
                        loading={isSubmitting}
                        className='w-fit py-2.5 h-auto'
                        icon={<IconMessageCircleSearch />}
                    >
                        Find Friend
                    </CButton>
                </form>
            </div>
        </>
    )
}

export default CSearchForUserForm
