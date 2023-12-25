import LoadingSpinner from '@atoms/CLoadingSpinner'

const CLoadingChat = () => {
    return (
        <div className='w-full h-full flex flex-col gap-y-3 items-center justify-center'>
            <LoadingSpinner />
            <span className='text-sm font-semibold'>Connecting to another user...</span>
        </div>
    )
}

export default CLoadingChat
