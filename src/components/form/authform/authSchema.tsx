import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required('your email'),
    phoneNumber: Yup.string().required('your phone number is required'),
    location: Yup.string().required('select your current location '),
});

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required('your email'),
    password: Yup.string()
        .required('your password')
        .min(6, 'Password is too short - should be minimum of 6 letters'),
});
