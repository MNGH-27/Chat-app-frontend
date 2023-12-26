import { Skeleton } from 'antd'

const CLoadingSidebar = () => {
    return (
        <div className='flex items-center justify-between gap-2 w-full max-w-full hover:bg-[#f9f9f9] p-3 duration-200 rounded'>
            <div className='flex flex-col items-start justify-start gap-2 text-sm max-w-full truncate w-full'>
                <Skeleton.Button rootClassName='w-full' className='h-5 w-full' />
                <Skeleton.Button rootClassName='w-full' className='h-5 w-full' />
            </div>
            <Skeleton.Avatar size={48} />
        </div>
    )
}

export default CLoadingSidebar
