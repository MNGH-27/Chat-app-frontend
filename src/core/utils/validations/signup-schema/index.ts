import * as yup from 'yup'

const signupSchema = yup.object().shape({
    profile: yup.array().required(),
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})

export default signupSchema
