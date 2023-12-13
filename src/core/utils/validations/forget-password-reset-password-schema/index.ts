import * as yup from 'yup'

const forgetPasswordResetPasswordSchema = yup.object({
    password: yup.string().required(),
    repeatPassword: yup
        .string()
        .required()
        .test('password-match', 'Passwords must match', function (value) {
            return value === this.parent.password
        }),
    userId: yup.string().required()
})

export default forgetPasswordResetPasswordSchema
