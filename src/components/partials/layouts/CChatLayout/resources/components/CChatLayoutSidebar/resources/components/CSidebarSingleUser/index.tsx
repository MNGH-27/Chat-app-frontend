
import CImage from '@atoms/CImage'

const CSidebarSingleUser = () => {
    return (
        <div className='flex items-center justify-between w-full hover:bg-[#f9f9f9] p-3 duration-200 rounded'>
            <div className='relative w-12 h-12 rounded-full'>
                <CImage className='rounded-full' src='/images/panda.png' alt='logo' fill />
            </div>
            <div className='flex flex-col items-start justify-start gap-2 text-sm'>
                <span className='font-semibold'>userName</span>
                <span className='text-gray-800 text-xs'>last message</span>
            </div>
        </div>
    )
}

export default CSidebarSingleUser
