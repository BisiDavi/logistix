import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { displayFormFields } from '../fieldType';
import { signupFieldArray } from './authFields';
import { Button } from '@components/.';
import styles from './authform.module.css';
import { SignupSchema } from './authSchema';
import FirebaseAuth from '@firebase/auth';
import { ToggleModalAction } from '@store/actions';
import useRedux from '@hooks/useRedux';

const SignupForm = () => {
    const { dispatch } = useRedux();
    const { withEmailLinkSignIn } = FirebaseAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            phoneNumber: '',
            location: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            console.log('signup values', values);
            withEmailLinkSignIn(values.email);
        },
    });

    const submitHandler = (e) => {
        e.preventDefault();
        formik.handleSubmit();
        console.log('I was clicked');
        dispatch(ToggleModalAction(false));
    };

    return (
        <Form onSubmit={submitHandler} className={styles.form}>
            {displayFormFields(signupFieldArray, formik)}
            <Button type='submit' text='Signup' />
        </Form>
    );
};

export default SignupForm;
