'use client'

import { type FC } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IconBrandTelegram } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'

import CFormField from '@molecules/CFormField'
import CButton from '@atoms/CButton'
import CInput from '@atoms/CInput'

import QueryKeysEnum from '@core/enums/query-keys'
import SocketKeysEnum from '@core/enums/socket-keys'
import getCurrentUserApi from '@core/services/api/current-user/get-current-user-api'
import type TSingleUserType from '@core/types/user/single-user-type'
import sendMessageSchema from '@core/utils/validations/send-message-schema'

import { type ICInputChatProps } from './resources'

const CInputChat: FC<ICInputChatProps> = ({ socket, roomDate }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            ...sendMessageSchema.getDefault()
        },
        resolver: yupResolver(sendMessageSchema)
    })

    const { data: currentUser } = useQuery<TSingleUserType>({
        queryKey: [QueryKeysEnum.CurrentUser],
        queryFn: getCurrentUserApi
    })

    return (
        <form
            onSubmit={handleSubmit((values) => {
                socket?.emit(SocketKeysEnum.CreateMessage, {
                    context: values.context,
                    roomId: roomDate.room.id,
                    senderId: currentUser?.id,
                    receiverId: roomDate.sender.id !== currentUser?.id ? roomDate.sender.id : roomDate.receiver.id
                })

                reset()
            })}
            className='w-full flex items-start justify-between gap-x-2 p-2'
        >
            <Controller
                name='context'
                control={control}
                render={({ field }) => (
                    <CFormField errors={errors} fieldName={field.name} labelText=''>
                        <CInput
                            variant='textarea'
                            className='w-full'
                            placeholder='message to your friend . . .'
                            {...field}
                        />
                    </CFormField>
                )}
            />
            <CButton
                className='h-full aspect-square'
                icon={<IconBrandTelegram size={20} />}
                htmlType='submit'
                type='primary'
            />
        </form>
    )
}

export default CInputChat
