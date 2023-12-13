import type TForgetPasswordStage from '@core/types/auth/forget-password-stage-type'
import type TForgetPasswordUser from '@core/types/auth/forget-password-user'

interface ICEmailSubmitProps {
    onChangeStage: (newStage: TForgetPasswordStage, user: TForgetPasswordUser) => void
}

export default ICEmailSubmitProps
