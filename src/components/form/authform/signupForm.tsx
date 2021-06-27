import React, { useState } from 'react';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/client';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { ToggleModalAction } from '@store/actions';
import useRedux from '@hooks/useRedux';
import { displayFormFields } from '../fieldType';
import { signupFieldArray } from './authFields';
import { Button } from '@components/.';
import { SignupSchema } from './authSchema';
import styles from './authform.module.css';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = () => {
    const { dispatch } = useRedux();
    const [userEmail, setUserEmail] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            phoneNumber: '',
            location: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            setUserEmail(values.email);
        },
    });

    const submitHandler = (e) => {
        e.preventDefault();
        formik.handleSubmit();
        console.log('I was clicked');
        dispatch(ToggleModalAction(false));
    };

    const signInHandler = () => {
        console.log('userEmail', userEmail);
        return (
            userEmail.length > 3 &&
            signIn('email', { userEmail })
                .then(
                    (response) =>
                        response.ok &&
                        toast.success(
                            'Please verify the link sent to your email address',
                        ),
                )
                .catch((error) => {
                    console.log('signup error', error);
                    toast.error('An error occured please try again, Thanks. ');
                })
        );
    };
    return (
        <>
            <Form onSubmit={submitHandler} className={styles.form}>
                {displayFormFields(signupFieldArray, formik)}
                <Button type='submit' onClick={signInHandler} text='Signup' />;
            </Form>
        </>
    );
};

export default SignupForm;
