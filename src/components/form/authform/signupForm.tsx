import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { ToggleModalAction } from '@store/actions';
import FirebaseAuth from '@firebase/auth';
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
    const { withEmailLinkSignIn } = FirebaseAuth();

    useEffect(() => {
        if (userEmail.length > 3) {
            withEmailLinkSignIn(userEmail);
        }
    }, [userEmail]);

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

    return (
        <>
            <Form onSubmit={submitHandler} className={styles.form}>
                {displayFormFields(signupFieldArray, formik)}
                <Button type='submit' text='Signup' />
            </Form>
            <ToastContainer />
        </>
    );
};

export default SignupForm;
