import React from 'react'

import { Checkbox } from 'antd'
import type { CheckboxGroupProps } from 'antd/es/checkbox/Group'

const CCheckBox: React.FC<CheckboxGroupProps> = ({ ...rest }) => <Checkbox.Group {...rest} />

export default CCheckBox
