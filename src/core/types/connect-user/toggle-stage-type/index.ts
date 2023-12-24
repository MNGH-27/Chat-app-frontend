import type TSingleUserType from '@core/types/user/single-user-type'

import type TConnectUserStageType from '../connect-user-stage-type'

type TToggleStageType = {
    nextStep: TConnectUserStageType
    userData?: TSingleUserType
}

export default TToggleStageType
