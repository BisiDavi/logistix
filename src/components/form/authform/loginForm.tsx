import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { displayFormFields } from '../fieldType';
import { loginFieldArray } from './authFields';
import { Button } from '@components/.';
import styles from './authform.module.css';

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: '',
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Form className={styles.form}>
            {displayFormFields(loginFieldArray, formik)}
            <Button type='submit' text='Login' />
        </Form>
    );
};

export default LoginForm;
