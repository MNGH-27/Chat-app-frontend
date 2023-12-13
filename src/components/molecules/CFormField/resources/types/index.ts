import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface ICFormFieldProps {
    errors: {
        [key: string]: TCriticalAnyType
    }
    className?: string
    labelText: string
    fieldName: string
    children: React.ReactNode
}

export default ICFormFieldProps
