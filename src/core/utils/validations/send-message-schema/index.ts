import * as yup from 'yup'

const sendMessageSchema = yup.object().shape({
    context: yup.string().required()
})

export default sendMessageSchema
