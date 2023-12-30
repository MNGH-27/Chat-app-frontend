import type TAuthStage from '@core/types/auth/auth-stage-type'

export type ICLoginFormProps = {
    onChangeStage: (newStage: TAuthStage) => void
}
