import * as yup from 'yup'

const loginSchema = yup.object({
    userName: yup.string().required().default(''),
    password: yup.string().min(6).required().default('')
})

export default loginSchema
