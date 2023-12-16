import { CChatLayoutSidebar } from './resources'

const CChatLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full flex items-center justify-center h-screen'>
            <div className='z-20 absolute w-full sm:w-[280px] left-0 duration-200 flex flex-col items-center p-5 min-h-full bg-white'>
                <CChatLayoutSidebar />
            </div>
            <div className='ml-auto w-full sm:w-[calc(100%-280px)] bg-[#f9f9f9] h-full'>{children}</div>
        </div>
    )
}

export default CChatLayout
