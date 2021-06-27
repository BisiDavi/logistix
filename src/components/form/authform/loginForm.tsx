import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useRedux } from '@hooks/.';
import { Button } from '@components/.';
import { displayFormFields } from '../fieldType';
import { loginFieldArray } from './authFields';
import styles from './authform.module.css';
import { LoginSchema } from './authSchema';

const LoginForm = () => {
    const { dispatch } = useRedux();

    const formik = useFormik({
        initialValues: {
            userEmail: '',
            //userPassword: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log('login values', values);
        },
    });
    const submitHandler = (e) => {
        e.preventDefault();
        formik.handleSubmit();
    };
    return (
        <Form onSubmit={submitHandler} className={styles.form}>
            {displayFormFields(loginFieldArray, formik)}
            <Button type='submit' text='Login' />
        </Form>
    );
};

export default LoginForm;
