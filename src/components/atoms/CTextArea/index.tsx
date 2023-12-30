import { Input } from 'antd'
import { type TextAreaProps } from 'antd/es/input'

const CTextArea: React.FC<TextAreaProps> = ({ ...rest }) => {
    return <Input.TextArea rows={2} autoSize={{ minRows: 2, maxRows: 2 }} autoComplete='off' {...rest} />
}

export default CTextArea
