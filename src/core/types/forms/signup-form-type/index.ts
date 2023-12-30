import type { UploadFile } from 'antd/es/upload/interface'

type TSignupFieldType = {
    email: string
    password: string
    userName: string
    profile: UploadFile[]
}

export default TSignupFieldType
