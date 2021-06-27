import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useRedux } from '@hooks/.';
import { Button } from '@components/.';
import { displayFormFields } from '../fieldType';
import { loginFieldArray } from './authFields';
import styles from './authform.module.css';
import { LoginSchema } from './authSchema';

export default function LoginForm() {
    const formik = useFormik({
        initialValues: {
            userEmail: '',
        },
        validationSchema: LoginSchema,
        onSubmit: function (values) {
            console.log('login values', values);
        },
    });
    const submitHandler = function (e) {
        e.preventDefault();
        return formik.handleSubmit();
    };
    return (
        <Form onSubmit={submitHandler} className={styles.form}>
            {displayFormFields(loginFieldArray, formik)}
            <Button type='submit' text='Login' />
        </Form>
    );
}
