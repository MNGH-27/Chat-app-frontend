import type TToggleStageType from '@core/types/connect-user/toggle-stage-type'
import type TSingleUserType from '@core/types/user/single-user-type'

interface ICShowUserFormProps {
    toggleStage: ({ nextStep }: TToggleStageType) => void
    userData: TSingleUserType
    close: () => void
}

export default ICShowUserFormProps
