import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required('your full name'),
    email: Yup.string().email().required('your email'),
    phoneNumber: Yup.string().required('your phone number is required'),
    sex: Yup.string().required('your sex'),
    location: Yup.string().required('select your current location '),
    password: Yup.string()
        .required('Your password')
        .min(6, 'Password is too short - should be minimum of 6 letters'),
    confirmPassword: Yup.string()
        .required('confirm your password')
        .when('password', {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref('password')],
                "Password doesn't match.",
            ),
        }),
});

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required('your email'),
    password: Yup.string()
        .required('your password')
        .min(6, 'Password is too short - should be minimum of 6 letters'),
});
