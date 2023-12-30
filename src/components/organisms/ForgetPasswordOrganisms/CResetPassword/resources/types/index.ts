import type TForgetPasswordStage from '@core/types/auth/forget-password-stage-type'

interface ICResetPasswordProps {
    onChangeStage: (newStage: TForgetPasswordStage) => void
    userId: string
}

export default ICResetPasswordProps
