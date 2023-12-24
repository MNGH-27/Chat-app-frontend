'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import toast from 'react-hot-toast'
import { IconCornerDownLeft, IconMessageCircle2Filled } from '@tabler/icons-react'

import CButton from '@atoms/CButton'

import useAppMutation from '@core/hooks/useAppMutation'
import connectRoomApi from '@core/services/api/connect-user/connect-room-api'

import { type ICShowUserFormProps } from './resources'

const CShowUserForm: React.FC<ICShowUserFormProps> = ({ toggleStage, userData, close }) => {
    const { push } = useRouter()

    const { mutate, isPending: isSubmitting } = useAppMutation({
        mutationFn: () => connectRoomApi({ receiverId: userData.id }),
        onSuccess: (response) => {
            //show success message
            toast.success(response.data.message)

            //redirect to chat room of this two users
            push(`/chat/${response.data.data.id}`)

            //close modal of user connect to room successfully
            close()
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
        <div>
            <CButton onClick={() => toggleStage({ nextStep: 'search' })} className='text-black px-0' type='link'>
                <IconCornerDownLeft size={24} />
                Try Again
            </CButton>
            <div className='flex flex-col items-center justify-between gap-y-5 w-full pt-5'>
                <Image
                    src={userData.profile}
                    alt='profile'
                    width={100}
                    height={100}
                    className='w-24 h-24 rounded-full shadow-xl'
                />
                <div className='flex flex-col gap-y-5 w-3/4'>
                    <div className='text-base sm:text-lg flex items-center justify-between'>
                        <span className=''>UserName : </span>
                        <span className='text-black font-bold'>{userData.userName}</span>
                    </div>
                    <div className='text-base sm:text-lg flex items-center justify-between'>
                        <span className=''>Email : </span>
                        <span className='text-black font-bold'>{userData.email}</span>
                    </div>
                </div>
                <CButton
                    onClick={mutate}
                    loading={isSubmitting}
                    icon={<IconMessageCircle2Filled size={24} />}
                    className='h-auto py-3'
                    type='primary'
                >
                    Message
                </CButton>
            </div>
        </div>
    )
}

export default CShowUserForm
