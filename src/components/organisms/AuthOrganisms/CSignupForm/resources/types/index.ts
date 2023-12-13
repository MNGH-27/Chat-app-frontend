import type TAuthStage from '@core/types/auth/auth-stage-type'
export type ICSignupFormProps = {
    onChangeStage: (newStage: TAuthStage) => void
}
