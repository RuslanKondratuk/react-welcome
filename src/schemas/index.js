import * as yup from 'yup';

export const SCHEMA = yup.object({
    firstName: yup.string().required().min(1).max(200),
    lastName: yup.string().required().min(1).max(200),
    displayName: yup.string().required().min(1).max(200),
    email: yup.string().email('email must be @ and "."').required(),
    password: yup.string().required().min(8).max(200).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Pass must contains at least one big letter, one small letter ad one special symbol'),
    passwordConfirmation: yup.string().required().min(8).max(200).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Pass must contains at least one big letter, one small letter ad one special symbol'),
})