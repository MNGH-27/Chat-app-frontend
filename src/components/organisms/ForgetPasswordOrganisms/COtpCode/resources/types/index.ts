import type TForgetPasswordStage from '@core/types/auth/forget-password-stage-type'
import type TForgetPasswordUser from '@core/types/auth/forget-password-user'

interface ICOtpCodeProps {
    onChangeStage: (newStage: TForgetPasswordStage) => void
    user: TForgetPasswordUser
}

export default ICOtpCodeProps
