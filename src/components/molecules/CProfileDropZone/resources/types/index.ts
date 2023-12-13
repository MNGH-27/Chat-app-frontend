import type { UploadFile } from 'antd/es/upload/interface'

interface ICProfileDropZoneProps {
    onChange: React.Dispatch<React.SetStateAction<UploadFile[]>>
    value: UploadFile[]
}

export default ICProfileDropZoneProps
