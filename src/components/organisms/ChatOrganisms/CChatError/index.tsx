import { IconTimelineEventExclamation } from '@tabler/icons-react'

const CChatError = () => {
    return (
        <div className='w-full h-full flex flex-col gap-y-3 items-center justify-center p-5 text-center'>
            <IconTimelineEventExclamation className='text-red-700 w-8 h-8' />
            <span className='text-sm font-semibold'>
                Oops! Connection failed. Please check your internet connection and try again.
            </span>
        </div>
    )
}

export default CChatError
