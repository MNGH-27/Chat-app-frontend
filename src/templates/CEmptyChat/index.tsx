const CEmptyChatTemplate = () => {
    return (
        <div className='grow h-full flex items-center justify-center'>
            <div className='text-gray-800 font-bold flex flex-col items-center justify-center gap-5'>
                <span className='text-xl'>No Messages</span>

                <span className='text-3xl'>Start a Conversation</span>
            </div>
        </div>
    )
}

export default CEmptyChatTemplate
