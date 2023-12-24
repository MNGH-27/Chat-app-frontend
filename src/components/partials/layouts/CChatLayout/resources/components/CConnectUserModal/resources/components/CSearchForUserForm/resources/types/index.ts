import type TToggleStageType from '@core/types/connect-user/toggle-stage-type'

interface ICSearchForUserFormProps {
    toggleStage: ({ nextStep, userData }: TToggleStageType) => void
}

export default ICSearchForUserFormProps
