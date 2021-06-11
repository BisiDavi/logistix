import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { displayFormFields } from '../fieldType';
import { signupFieldArray } from './authFields';
import { Button } from '@components/.';
import styles from './authform.module.css';
import { SignupSchema } from './authSchema';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            sex: '',
            phoneNumber: '',
            location: '',
            password: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            console.log('signup values', values);
        },
    });
    const submitHandler = (e) => {
        e.preventDefault();
        formik.handleSubmit();
    };

    return (
        <Form onSubmit={submitHandler} className={styles.form}>
            {displayFormFields(signupFieldArray, formik)}
            <Button type='submit' text='Signup' />
        </Form>
    );
};

export default SignupForm;
